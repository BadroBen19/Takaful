const express = require("express");
const router = express.Router();
const reviewController = require("../Controllers/reviewController");

router.route("/getReviews").get(reviewController.getReview);

module.exports = router;
