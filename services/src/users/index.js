const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("user service");
});

app.listen(80, () => {
  console.log("user service started");
});
