const express = require('express');
const app = express();
app.use(express.json());

require("dotenv").config();

require("./Config/db");

const cors = require("cors");
app.use(cors());

app.all("*", (req, res) => {
  res.send("Page not found");
});

app.listen(process.env.PORT , () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`))

module.exports = app;

