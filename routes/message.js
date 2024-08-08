const express = require("express");
const router = express.Router();

const controller = require("../controllers/messageController.js");

router.get("/new", controller.get);
router.post("/new", controller.post);

module.exports = router;
