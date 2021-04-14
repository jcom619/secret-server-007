
// client-side js, loaded by index.html
// run by the browser each time the page is loaded
// console.log("hello world :o");

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|          |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\

// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");
const api_key = process.env.secret.APP_API_KEY;
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|          |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|==========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\


//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|===========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎| date/time |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|===========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\

// const today = new Date();
// const date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// const time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|================|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|old get weather |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|================|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\


let weather = {
  apiKey: api_key
  fetchWeather: function (city) {
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
  },
console.log(weather);

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|=========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|  fetch  |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|=========|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\


//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎|( dreams now == api )☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\


// fetch("/api")
//   .then(response => response.json()) // parse the JSON from the server
//   .then(api => {
//     // remove the loading text
//     apiList.firstElementChild.remove();
 console.log(api_key); 
//     // iterate through every api and add it to our page
//     api.forEach(appendNewApi);
  
//     // listen for the form to be submitted and add a new api when it is
//     apiForm.addEventListener("submit", event => {
//       // stop our form submission from refreshing the page
//       event.preventDefault();

      // get api value and add it to the list
      // let newApi = apiForm.elements.api.value;
      // api.push(newDream);
      // appendNewDream(newDream);

      // reset form
      // apiForm.reset();
      // apiForm.elements.api.focus();
    };
