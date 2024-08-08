const express = require("express");
const router = express.Router();

const controller = require("../controllers/messageViewController");

router.get("/message/:id", controller.get);

module.exports = router;
