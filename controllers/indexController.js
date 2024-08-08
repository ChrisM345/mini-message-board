const { getMessages } = require("../models/messageModel");

module.exports = {
  get: (req, res) => {
    res.render("indexView", { messages: getMessages() });
  },
};
