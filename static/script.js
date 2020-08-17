const hashElement = document.querySelector(".hashtag-container p");
const footerElement = document.querySelector(".footer span")

displayHashtags();

// DISPLAY WEATHER TO UI
function displayHashtags(){

    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();
    let year = date.getFullYear().toString()
    let time = hora+':'+min;

    hashElement.innerHTML = '<img src="static/cloud.png">';
    footerElement.innerHTML = year;
}