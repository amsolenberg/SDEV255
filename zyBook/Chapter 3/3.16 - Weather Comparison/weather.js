window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("compareBtn").addEventListener("click", compareBtnClick);
    document.getElementById("city1").addEventListener("input", cityInput);
    document.getElementById("city2").addEventListener("input", cityInput);
}

// Called when city input values change
function cityInput(e) {

    // Extract the text from city input that triggered the callback
    const cityId = e.target.id;
    const city = document.getElementById(cityId).value.trim();

    // Only show error message if no city 
    if (city.length === 0) {
        showElement("error-value-" + cityId);
    } else {
        hideElement("error-value-" + cityId);
    }
}

// Compare button is clicked
function compareBtnClick() {
    // Get user input
    const city1 = document.getElementById("city1").value.trim();
    const city2 = document.getElementById("city2").value.trim();

    // Show error messages if city fields left blank
    if (city1.length === 0) {
        showElement("error-value-city1");
    }
    if (city2.length === 0) {
        showElement("error-value-city2");
    }

    // Ensure both city names provided
    if (city1.length > 0 && city2.length > 0) {
        showElement("forecast");
        hideElement("error-loading-city1");
        hideElement("error-loading-city2");
        showElement("loading-city1");
        showMessage("loading-city1", `Loading ${city1}...`);
        showElement("loading-city2");
        showMessage("loading-city2", `Loading ${city2}...`);
        hideElement("results-city1");
        hideElement("results-city2");

        // Fetch forecasts
        getWeatherForecast(city1, "city1");
        getWeatherForecast(city2, "city2");
    }
}

// Request this city's forecast
async function getWeatherForecast(city, cityId) {

    // Create a URL to access the web API
    const endpoint = "https://api.openweathermap.org/data/2.5/forecast";
    const apiKey = "1307007a7da1aeb5b59930a312a42cd3";
    const queryString = "q=" + encodeURI(city) + "&units=imperial&appid=" + apiKey;
    const url = endpoint + "?" + queryString;

    // Send http request to web API
    const response = await fetch(url);

    // No longer loading
    hideElement("loading-" + cityId);

    // See if forecast was successfully received
    if (response.ok) {
        const jsonResult = await response.json();
        displayForecast(cityId, jsonResult);
    } else {
        // Display appropriate error message
        const errorId = "error-loading-" + cityId;
        showElement(errorId);
        showMessage(errorId, `Unable to load city "${city}".`);
    }
}

// Display forecast received from JSON  
function displayForecast(cityId, jsonResult) {
    showElement("results-" + cityId);

    const cityName = jsonResult.city.name;
    showMessage(cityId + "-name", cityName);

    // Get 5 day forecast map
    const forecastMap = getSummaryForecast(jsonResult.list);

    // Put forecast into the city's table
    let day = 1;
    for (const date in forecastMap) {
        // Only process the first 5 days
        if (day <= 5) {
            const dayForecast = forecastMap[date];
            showMessage(`${cityId}-day${day}-name`, getDayName(date));
            showMessage(`${cityId}-day${day}-high`, Math.round(dayForecast.high) + "&deg;");
            showMessage(`${cityId}-day${day}-low`, Math.round(dayForecast.low) + "&deg;");
            showImage(`${cityId}-day${day}-image`, dayForecast.weather);
        }
        day++;
    }
}

// Return a map of objects with high, low, weather properties
function getSummaryForecast(forecastList) {

    // Map for storing high, low, weather
    const forecast = {};

    // Determine high and low for each day
    forecastList.forEach(function (item) {
        // Extract just the yyyy-mm-dd 
        const date = item.dt_txt.substr(0, 10);

        // Extract temperature
        const temp = item.main.temp;

        // Have this date been seen before?
        if (date in forecast) {
            // Determine if the temperature is a new low or high
            if (temp < forecast[date].low) {
                forecast[date].low = temp;
            }
            if (temp > forecast[date].high) {
                forecast[date].high = temp;
            }
        } else {
            // Initialize new forecast
            const temps = {
                high: temp,
                low: temp,
                weather: item.weather[0].main
            }

            // Add entry to map 
            forecast[date] = temps;
        }
    });

    return forecast;
}

// Convert date string into Mon, Tue, etc.
function getDayName(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {weekday: "short", timeZone: "UTC"});
}

// Show the element
function showElement(elementId) {
    document.getElementById(elementId).classList.remove("hidden");
}

// Hide the element
function hideElement(elementId) {
    document.getElementById(elementId).classList.add("hidden");
}

// Display the message in the element
function showMessage(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

// Show the weather image that matches the weatherType
function showImage(elementId, weatherType) {
    // Images for various weather types
    const weatherImages = {
        Clear: "clear.png",
        Clouds: "clouds.png",
        Drizzle: "drizzle.png",
        Mist: "mist.png",
        Rain: "rain.png",
        Snow: "snow.png"
    };

    const imgUrl = "https://s3-us-west-2.amazonaws.com/static-resources.zybooks.com/";
    const img = document.getElementById(elementId);
    img.src = imgUrl + weatherImages[weatherType];
    img.alt = weatherType;
}
