const express = require("express");
const router = express.Router();
const cardController = require("../Controllers/cardController");

router.route("/getCardInfo").get(cardController.getCardInfo);
router.route("/getUserById/:id").get(cardController.getUserById);

module.exports = router;
