const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userName: { type: String },
  reviewText: { type: String },
  imgUrl: { type: [String] },
});

const reviewModel = mongoose.model("reviewModel", reviewSchema);
module.exports = reviewModel;
