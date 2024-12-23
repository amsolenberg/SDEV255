const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = router;