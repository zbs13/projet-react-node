const express = require("express");
//const sequelize = require("./lib/sequelize");
const app = express();

app.use(express.json());

app.get("/hello", (req, res, next) => {
  console.log("ok");
});

app.listen(5000, () => console.log("listening..."));