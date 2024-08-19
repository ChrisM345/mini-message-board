const { name } = require("ejs");
const { addMessageData } = require("../models/messageModel");
const { postMessage } = require("../db/queries");

module.exports = {
  get: (req, res) => {
    res.render("formView");
  },
  post: async (req, res) => {
    const date = new Date();
    await postMessage(req.body.message, req.body.name, date);
    // addMessageData(req.body.message, req.body.name);
    res.redirect("/");
  },
};
