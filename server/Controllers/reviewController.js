const reviewModel = require("../models/reviewModel");

exports.getReview = (req, res) => {
  reviewModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
