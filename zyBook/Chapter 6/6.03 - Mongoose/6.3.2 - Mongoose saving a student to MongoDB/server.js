const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydb");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gpa: { type: Number, min: 0, max: 4 },
  birthDate: { type: Date, default: Date.now },
  interests: [String]
});

const Student = mongoose.model("Student", studentSchema);

const app = express();

app.get("/create", function(req, res) {
  const stu = new Student({
    name: "Sue Black",
    gpa: 3.1,
    birthDate: "1999-11-02",
    interests: ["biking", "reading"]
  });

  stu.save(function(err, stu) {
    res.send("Sue with id " + stu._id + " was saved.");
  });
});

app.listen(3000);
