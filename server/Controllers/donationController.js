const catchAsync = require("../outilles/catchAsync");
const sendEmail = require("../outilles/email");
const express = require("express");

const app = express();

exports.donate = catchAsync(async (req, res, next) => {
  const message = `Your donation has been made successfully!
We thank you for your generosity ❤️`;

  try {
    await sendEmail({
      email: req.body.Email,
      subject: "Successful donation",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "donation's message sent to email",
    });
  } catch (err) {
    return next(
      new AppError(
        "There was an error, verify your informations or try again later."
      ),
      500
    );
  }
});
