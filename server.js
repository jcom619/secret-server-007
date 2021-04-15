const { response } = require("express");
const api_key = process.env.P_FOUR_API_KEY;
const express = require("express");
const rowdy = require("rowdy-logger");
const app = express();
const rowdyResults = rowdy.begin(app);
const PORT = process.env.MY_SERVER_PORT || 8080;

require("dotenv").config();
app.use("/", express.static("public"));

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎| API Call |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |

// let weather = {
//      apiKey: "7a9e0d0b445ca1be17f7e626ad349281",
//      fetchWeather: function (city) {
//        fetch(
//          "https://api.openweathermap.org/data/2.5/weather?q=" +
//            city +
//            "&appid=" +
//            this.apiKey +
//            "&units=imperial"
//        )
//          .then((response) => {
//            if (!response.ok) {
//              console.log("No weather found.");
//              throw new Error("No weather found.");
//            }
//            return response.json();
//          })
//          .then((data) => this.displayWeather(data));
// }
//* ================================================================================================
//*|   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎  |
//*|                                   setting middleware                                          |
//*|   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎  |
//* ================================================================================================

app.use("/images", express.static(__dirname + "/Style"));
app.use(express.static(__dirname + "public"));

//* ================================================================================================
//*|   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   |
//* ================================================================================================

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|  Routes  |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |

app.get("/", (req, res) => {
  pass;
});

app.get("/api", (req, res) => {
  res.send("¿hola...Mundo?");
});

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|          |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |

app.listen(PORT, () => {
  rowdyResults.print();
  console.log(
    ` \n\n   |  ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  |   ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  | \n   --------------------------------------------------------------\n   | ${app.settings.views} |\n\n`
  );
  console.log(
    `                          ☁︎ ☁︎ ☁︎ ☁︎ ☁︎ ☁︎ ☁︎\n\n                          you got served\n\n                               ${PORT}      \n\n                          ☔︎ ☔︎ ☔︎ ☔︎ ☔︎\n\n`
  );
});
//|   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   ||   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   |?\\
