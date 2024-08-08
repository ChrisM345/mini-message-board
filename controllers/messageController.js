const { name } = require("ejs");
const { addMessageData } = require("../models/messageModel");

module.exports = {
  get: (req, res) => {
    res.render("formView");
  },
  post: (req, res) => {
    addMessageData(req.body.message, req.body.name);
    res.redirect("/");
  },
};
