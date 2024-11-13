getWeather(90210);

function getWeather(zip) {
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "3119ca3a5263e21ffcf08066b5d1b05b";
    let queryString = "zip=" + zip + "&units=imperial&appid=" + apiKey;
    let url = endpoint + "?" + queryString;

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
}

function responseReceivedHandler() {
    let weatherInfo = document.getElementById("weather");
    if (this.status === 200) {
        weatherInfo.innerHTML = 
            "<p>Current temp: " + this.response.main.temp + " &deg;F</p>" + 
            "<p>Desc: " + this.response.weather[0].description + "</p>" + 
            "<p>Humidity: " + this.response.main.humidity + "%</p>";
    } else {
        weatherInfo.innerHTML = "Weather data unvailaable.";
    }
}
