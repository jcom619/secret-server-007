const express = require("express");
require("dotenv").config();

const PORT = process.env.MY_SERVER_PORT;
const api_key = process.env.P_FOUR_API_KEY;

const app = express();
console.log(api_key);

app.listen(PORT);
