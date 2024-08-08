const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRoute = require("./routes/index");
const messageRoute = require("./routes/message");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRoute);
app.use("/", messageRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
