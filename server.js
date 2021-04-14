const { response } = require("express");
const api_key = process.env.P_FOUR_API_KEY;
const express = require("express");
const rowdy = require("rowdy-logger");
const app = express();
const rowdyResults = rowdy.begin(app);
const PORT = process.env.MY_SERVER_PORT || 8080;

require("dotenv").config();

//? ======================================
//!          create routes...
//? ======================================

app.get("/", (req, res) => {
  res.json();
});

console.log(PORT);
app.get("/api", (req, res) => {
  res.json("");
});

//? =====================================
app.listen(PORT, () => {
  console.log(`secret server 007 is running on: ${PORT}... you got served!`);
  rowdyResults.print();
});
console.log(app.path());
