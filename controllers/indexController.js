const { getMessages } = require("../db/queries");

module.exports = {
  get: async (req, res) => {
    res.render("indexView", { messages: await getMessages() });
  },
};
