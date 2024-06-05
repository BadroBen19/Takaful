const express = require("express");
const router = express.Router();
const donationController = require("../Controllers/donationController");

router.route("/donate").post(donationController.donate);

module.exports = router;
