"use strict";

var _require = require("express"),
    response = _require.response;

require("dotenv").config();

var api_key = process.env.P_FOUR_API_KEY;

var express = require("express");

var rowdy = require("rowdy-logger");

var app = express();
var rowdyResults = rowdy.begin(app);

var axios = require("axios")["default"];

var PORT = process.env.MY_SERVER_PORT || 8080; //?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎| API Call |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
// let weather = {
//   apiKey: "7a9e0d0b445ca1be17f7e626ad349281",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&appid=" +
//       this.apiKey +
//       "&units=imperial"
//       )
//       .then((response) => {
//         if (!response.ok) {
//           console.log("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));
//     }
//* ================================================================================================
//*|   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎  |
//*|                                   setting middleware                                          |
//*|   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎  |
//* ================================================================================================

require("dotenv").config();

app.use("/images", express["static"](__dirname + "/Style"));
app.use(express["static"](__dirname + "public")); //* ================================================================================================
//*|   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   |
//* ================================================================================================
//?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|  Routes  |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
// app.get("/", (req, res) => {
// });
// api_key = "7a9e0d0b445ca1be17f7e626ad349281";

var city = "san diego"; // let weather = {
// fetchWeather: function (city) {

app.get("/api", function (req, res) {
  axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key + "&units=imperial").then(function (response) {
    res.json(response);

    if (!response.ok) {
      console.log("No weather found.");
      console.log(response);
    } else {
      console.log(err);
    }
  }); // .then((data) => this.displayWeather(data));
  // console.log(data);
  // }
  // res.send("¿hola...Mundo?");
  // console.log(weather.fetchWeather("el paso"));
  // });
  //?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
  //!                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|          |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
  //?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
  //* |   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   ||   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   |?\\

  app.listen(PORT, function () {
    rowdyResults.print();
    console.log(" \n\n   |  \u26A1\uFE0E |  \u2620\uFE0E  |  \u26A1\uFE0E |  \u2620\uFE0E  |  \u26A1\uFE0E |  \u2620\uFE0E  |   \u26A1\uFE0E |  \u2620\uFE0E  |  \u26A1\uFE0E |  \u2620\uFE0E  | \n   --------------------------------------------------------------\n   | ".concat(app.settings.views, " |\n\n"));
    console.log("                          \u2601\uFE0E \u2601\uFE0E \u2601\uFE0E \u2601\uFE0E \u2601\uFE0E \u2601\uFE0E \u2601\uFE0E\n\n                          you got served\n\n                               ".concat(PORT, "      \n\n                          \u2614\uFE0E \u2614\uFE0E \u2614\uFE0E \u2614\uFE0E \u2614\uFE0E\n\n"));
  });
});