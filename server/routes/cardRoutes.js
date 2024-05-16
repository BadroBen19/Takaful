const express = require("express");
const router = express.Router();
const cardController = require("../Controllers/cardController");

router.route("/getCardInfo").get(cardController.getCardInfo);

module.exports = router;
