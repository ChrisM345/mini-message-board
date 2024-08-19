const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query(`SELECT * FROM messages`);
  return rows;
}

async function openMessage(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
  return rows;
}

async function postMessage(text, username, date) {
  await pool.query("INSERT INTO messages (text, username, added) VALUES (($1), ($2), ($3))", [
    text,
    username,
    `${date}`,
  ]);
}

module.exports = {
  getMessages,
  openMessage,
  postMessage,
};
