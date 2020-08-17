const notificationElement = document.querySelector(".notification-container p")
const hashElement = document.querySelector(".hashtag-container p");


// App data
const twitter = {};

twitter.keywords = {
    hashtags : "elvis"
}

// // CHECK IF BROWSER SUPPORTS GEOLOCATION
// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }
//
// // SET USER'S POSITION
// function setPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//
//     getTwitter(latitude, longitude);
// }
//
// // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }
//
// function getTwitter(latitude, longitude){
//
//     // let api = `https://api.twitter.com/1.1/trends/closest.json?lat=${latitude}&long=${longitude}`;
//     let api = 'https://api.twitter.com/1.1/trends/available.json'
//
//     let myHeaders = new Headers();
//
//     let myInit = { method: 'GET',
//                    headers: myHeaders,
//                    mode: 'cors',
//                    cache: 'default' };
//
//     //Fetch json from worldWeatherOnline
//     fetch(api, myInit)
//         .then(function(response){
//             let data = response.json();
//             console.log(data);
//             return data;
//         })
//         .then(function(data){
//
//             twitter.keywords.hashtags = data.twitter[0].keywords[0].sunrise;
//
//         })
//         .then(function(){
            displayHashtags();
//         });
// }

// DISPLAY WEATHER TO UI
function displayHashtags(){

    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();
    let time = hora+':'+min;

    notificationElement.innerHTML = "<strong>Fases da Lua!</strong>";
    hashElement.innerHTML = time;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
// tempElement.addEventListener("click", function(){
//     if(weather.temperature.value === undefined) return;
//
//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
//
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         waterElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//
//
//     }else{
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         waterElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });