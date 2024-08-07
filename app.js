const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRoute = require("./routes/index");
const messageRoute = require("./routes/message");
app.use("/", indexRoute);
app.use("/", messageRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
