const signModel = require("../models/signModel");

exports.getCardInfo = (req, res) => {
  signModel
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
exports.getUserById = (req, res) => {
  signModel
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
};
