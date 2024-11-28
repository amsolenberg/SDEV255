const express = require("express");
const bodyParser = require("body-parser");
const Student = require("./models/student");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/create", function(req, res) {
  // Create a student from the submitted form data
  const stu = new Student({
    name: req.body.name,
    gpa: req.body.gpa,
    birthDate: new Date(req.body.birthDate)
  });

  stu.save(function(err, stu) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send("Student was saved.");
    }
  });
});

app.listen(3000);
