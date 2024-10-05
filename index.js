const express = require("express");
require("dotenv").config();

const port = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello pappu");
});

app.get("/login",(req, res) => {
  res.send("Hello login lowdu");
})

app.listen(process.env.PORT, () => {
  console.log("listening to the port " + process.env.PORT);
});

