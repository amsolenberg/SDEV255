const Song = require("../models/song");
const router = require("express").Router();

// Get list of all songs in the database
router.get("/", function (req, res) {
  Song.find(function (err, songs) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(songs);
    }
  });
});

// Add a new song to the database
router.post("/", function (req, res) {
  const song = new Song(req.body);
  song.save(function (err, song) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(song);
    }
  });
});

module.exports = router;
