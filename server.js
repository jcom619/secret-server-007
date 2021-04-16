const express = require("express");
const app = express();
const { response } = require("express");
require("dotenv").config();
const api_key = process.env.P_FOUR_API_KEY;
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);
const axios = require("axios").default;
const PORT = process.env.MY_SERVER_PORT || 8080;

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
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

//*|                              setting - middle...where?                                        |

//*|   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎  |
//* ================================================================================================

require("dotenv").config();
app.use("/images", express.static(__dirname + "/Style"));
app.use(express.static(__dirname + "public"));

//* ================================================================================================
//*|   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎   ⚡︎  ⚡︎   ⚡︎   ⚡︎   |
//* ================================================================================================

//?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//!                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|  Routes  |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
//?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |

let city = "san diego";

app.get("/api", (req, res) => {
   fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
         city +
         "&appid=" +
         api_key +
         "&units=imperial"
   );
   try {
      res.json(response);
   } catch (err) {
      console.log(err);
      console.log("No weather found.");
   } finally {
      console.log(data);
   }

   //?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |
   //!                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|          |☠︎|   ⚡︎   ⚡︎   ⚡︎   |
   //?                   |   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |

   //* |   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   ||   ⚡︎   ⚡︎   ⚡︎  | ☠︎ | ⚡︎ | ☠︎ |  ☠︎  ⚡︎   ⚡︎   ⚡︎   |?\\

   app.listen(PORT, () => {
      rowdyResults.print();
      console.log(
         response,
         `\n                         ☁︎ ☁︎ ☁︎ ☁︎ ☁︎ ☁︎ ☁︎\n                        you got served!\n\n                              ${PORT}      \n                         ☔︎ ☔︎ ☔︎ ☔︎ ☔︎\n`
      );
      console.log(
         ` \n |  ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  |   ⚡︎ |  ☠︎  |  ⚡︎ |  ☠︎  | \n --------------------------------------------------------------\n | ${app.settings.views} |\n`
      );
   });
});
