const signModel = require("../models/signModel");

exports.getCardInfo = (req, res) => {
  signModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
