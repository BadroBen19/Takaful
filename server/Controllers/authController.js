//testeteste
const signModel = require("../models/signModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../outilles/catchAsync");
const bcrypt = require("bcrypt");
const AppError = require("../outilles/appError");
const sendEmail = require("../outilles/email");
const crypto = require("crypto");
const { promisify } = require("util");
const multer = require("multer");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("publics/images"));

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.Password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //try{
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = localStorage.getItem("jwt"); //req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await signModel.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }

  req.user = currentUser;
  next();
  // } catch (err) {
  //   res.status(400).send("access denied.");
  // }
});

exports.isAdmin = (req, res, next) => {
  req,
    res,
    () => {
      if (req.protect.isAdmin) {
        next();
      } else {
        res.status(403).send("Access denied. Not authorized!");
      }
    };
};

exports.getSignup = async (req, res) => {
  return res.redirect("pager.html");
};

exports.getLogin = async (req, res) => {
  return res.redirect("login.html");
};

//multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publics/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

exports.signUp = catchAsync(async (req, res, next) => {
  upload.single("image")(req, res, async function (err) {
    if (err) {
      return next(err); // Passer l'erreur à Express pour qu'elle soit gérée par le middleware global d'erreur
    }

    try {
      const dataUser = await signModel.create({
        user: req.body.user,
        Email: req.body.Email,
        Password: req.body.Password,
        PasswordConfirm: req.body.PasswordConfirm,
        Title: req.body.Title,
        selectedCategory: req.body.selectedCategory,
        idNumber: req.body.idNumber,
        nCCP: req.body.nCCP,
        amount: req.body.amount,
        description: req.body.description,
        image: req.file.filename, // Sauvegarder le nom du fichier dans la base de données
      });

      const token = signToken(dataUser._id);
      await dataUser.save();

      res.status(201).json({
        status: "success",
        data: {
          user: dataUser,
          token: token,
        },
      });
    } catch (error) {
      next(error); // Passer l'erreur à Express pour qu'elle soit gérée par le middleware global d'erreur
    }
  });
});
exports.login = catchAsync(async (req, res, next) => {
  try {
    const user = await signModel.findOne({ Email: req.body.Email });
    if (user) {
      // Comparaison des mots de passe cryptés
      const passwordMatch = await bcrypt.compare(
        req.body.Password,
        user.Password
      );
      // Mot de passe correct
      if (passwordMatch) {
        const token = signToken(user._id);
        // si admin
        if (user.isAdmin) {
          res.status(200).json({
            status: "success",
            token,
            redirectUrl: "/adminDashboard", // L'URL vers la page ta3 l'admin
          });
        } else {
          //sinon
          res.status(200).json({
            status: "success",
            token,
          });
        }
      } else {
        return next(new AppError("INCORRECT PASSWORD !!", 401));
      }
    } else {
      return next(new AppError("USER NOT FOUND !!", 401));
    }
  } catch (err) {
    console.log(err.message);
    return next(new AppError("ERROR11", 400));
  }
});

// exports.emailExist = catchAsync(async (req,res,next)=>{

// })

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await signModel.findOne({ Email: req.body.Email });
  if (!user) {
    return next(new AppError("There is no user with this email address", 404));
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  const resetURL = `http://localhost:3000/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: req.body.Email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  if (!req.params.token) {
    return next(new AppError("Token is missing", 400));
  }

  const user = await signModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.Password = req.body.Password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;

  await user.save();

  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await signModel.findById(req.user.id).select("+Password");

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  if (!(await user.correctPassword(req.body.passwordCurrent, user.Password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  if (req.body.Password !== req.body.passwordConfirm) {
    return next(new AppError("Passwords are not the same !!", 401));
  }

  user.Password = req.body.Password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  createSendToken(user, 200, res);
});

exports.getUserInfo = catchAsync(async (req, res, next) => {
  const user = await signModel.findById(req.user.id);

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
