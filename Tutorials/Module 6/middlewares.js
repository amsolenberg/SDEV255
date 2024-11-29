const express = require("express");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(express.static("public"));

  app.use(express.urlencoded({ extended: true }));

  app.use(morgan("dev"));

  app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });
};
