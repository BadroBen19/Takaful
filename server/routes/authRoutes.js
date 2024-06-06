const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");
router
  .route("/sign_up")
  .post(authController.signUp)
  .get(authController.getSignup);

router.route("/login").post(authController.login).get(authController.getLogin);

router.route("/forgotPassword").post(authController.forgotPassword);
router.patch("/updateMe", authController.protect, userController.updateMe);

//
router.route("/resetPassword/:token").patch(authController.resetPassword);
router
  .route("/updateMyPassword")
  .patch(authController.protect, authController.updatePassword);
router.delete("/deleteMe", authController.protect, userController.deleteMe);
// router.patch(
//   "/updateMyPassword",
//   authController.protect,
//   authController.updatePassword
// );
module.exports = router;

router.get("/me", authController.protect, authController.getUserInfo);
