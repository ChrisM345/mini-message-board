const { getMessageData } = require("../models/messageModel");

module.exports = {
  get: (req, res) => {
    res.render("messageView", { message: getMessageData(req.params.id), id: req.params.id });
  },
};
