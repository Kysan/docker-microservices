const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("music service");
});

app.listen(80, () => {
  console.log("music service started");
});
