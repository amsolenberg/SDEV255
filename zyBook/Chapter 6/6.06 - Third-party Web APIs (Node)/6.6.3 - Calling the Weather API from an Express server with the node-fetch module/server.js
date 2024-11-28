const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.get("/weather", function (req, res) {
  const zip = 90210;
  const params = new URLSearchParams({
    zip: zip,
    units: "imperial",
    appid: "APIKEY"
  });

  fetch("http://api.openweathermap.org/data/2.5/weather?" + params)
    .then((response) => response.json())
    .then((data) => {
      const locals = {
        data: data,
        zip: zip
      };
      res.render("weather", locals);
    })
    .catch((error) => console.log(error));
});
