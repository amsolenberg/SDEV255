const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/heroes");

const SuperHero = mongoose.model("SuperHero", {
  _id: Number,
  universe: { type: String, enum: ["Marvel", "DC", "other"], default: "other" },
  name: { type: String, required: true },
  stamina: { type: Number, min: 1, max: 10 },
  powers: [String],
  origin: {
    comic: String,
    year: Number
  }
});

const heroes = [
  {
    _id: 111,
    universe: "DC",
    name: "Wonder Woman",
    stamina: 9,
    powers: ["strength", "combat"],
    origin: { comic: "All Star Comics #8", year: 1941 }
  },
  {
    _id: 222,
    universe: "DC",
    name: "Green Lantern",
    stamina: 5,
    powers: ["flying", "power ring"],
    origin: { comic: "All-American Comics #16", year: 1940 }
  },
  {
    _id: 333,
    universe: "Marvel",
    name: "Spider-Man",
    stamina: 6,
    powers: ["strength", "agility", "spider-sense"],
    origin: { comic: "Amazing Fantasy #15", year: 1962 }
  },
  {
    _id: 444,
    universe: "Marvel",
    name: "Storm",
    stamina: 4,
    powers: ["control weather"],
    origin: { comic: "Giant-Size X-Men #1", year: 1976 }
  }
];

SuperHero.create(heroes, function(err, heroes) {
  console.log("Created");
});

app.listen(3000);


SuperHero.find({ stamina: { $gte: 6 }}, function(err, heroes) {  })
    // IDs 111 and 333

SuperHero.findOne( { powers: { $in: ["strength", "shrinking"]} }, function(err, hero) {  })
    // ID 111

SuperHero.find({})
    .where("powers").in(["strength", "flying"])
    .sort({ stamina": "asc" })
    .limit(2)
    .exec(function(err, heroes) {  });
    // IDs 222 and 333

SuperHero.find({})
    .or([ { "origin.year": { $gt: 1970 } },
          { name: "Green Lantern"} ])
    .exec(function(err, heroes) {  })
    // IDs 222 and 444

SuperHero.where({ stamina: { $lte: 5 }})
    .count(function(err, count) {  })
    // 2
