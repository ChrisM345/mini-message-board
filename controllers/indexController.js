const { getMessageData } = require("../models/messageModel");

module.exports = {
  get: (req, res) => {
    res.render("indexView", { messages: getMessageData() });
  },
};
