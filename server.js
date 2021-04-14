// server.js
const { response } = require("express");
const api_key = process.env.P_FOUR_API_KEY;
const express = require("express");
const rowdy = require("rowdy-logger");
const app = express();
const rowdyResults = rowdy.begin(app);
const PORT = process.env.MY_SERVER_PORT || 8080;

// where your node app starts
let apikey = api_key;

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const weatherApi = apikey;
   
    fetch( 
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&units=imperial"
    )
      .then((response) => {
        if (!response.ok) {
          console.log("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  



// our default weather display
// const weather = [
  
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array to the webpage
app.get("/api", (request, response) => {
  // express helps us take JS objects and send them as JSON
  // response.render('/api', COoKiEs TaStES GOOOOOOD!!!);
});

app.listen(PORT, () => {
rowdyResults.print();
  console.log('aaaaand...Boom goes the dynamite: ', + PORT);
})