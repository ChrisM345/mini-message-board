const { openMessage } = require("../db/queries");
const { getMessageData } = require("../models/messageModel");

module.exports = {
  get: async (req, res) => {
    queryID = parseInt(req.params.id) + 1;
    const test = await openMessage(queryID);
    res.render("messageView", { message: await openMessage(queryID) });
  },
};
