const express = reqauire("express");
const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("hello");
});

app.listen(3000);
