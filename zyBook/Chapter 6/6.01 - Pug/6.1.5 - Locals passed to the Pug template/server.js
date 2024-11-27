const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.get("/", function(req, res) {
  let locals = {
    title: "Intro to Pug",
    name: "Sonya",
    email: "sonya@gmail.com"
  };
  res.render("index", locals);
});

app.listen(3000);
