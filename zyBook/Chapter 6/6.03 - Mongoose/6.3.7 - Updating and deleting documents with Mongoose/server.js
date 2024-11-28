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
  }
];

SuperHero.create(heroes, function(err, heroes) {
  console.log("Created");
});

app.listen(3000);

SuperHero.updateMany({}, { $inc: { stamina: 1 } }, function(err) {});
// Both heroes' stamina increases by 1

SuperHero.updateOne(
  { "origin.year": { $gt: 1900 } },
  { $set: { "origin.year": 1900 } },
  function(err, result) {}
);
// Wonder Woman's origin year is set to 1900

SuperHero.findById(222, function(err, hero) {
  hero.powers.push("mind control");
  hero.save(function(err, hero) {});
});
// SuperHero.find({ _id: 222 })
//     .updateOne({ $push: {powers: "mind control"} })
//     .exec();

SuperHero.find({ _id: 111 }).deleteOne().exec();
// await SuperHero.deleteOne({ _id: 111 });

const result = await MediaStreamAudioDestinationNode.deleteOne( { birthDate: "2000-10-05" } );
console.log(result.deletedCount); 
// 1