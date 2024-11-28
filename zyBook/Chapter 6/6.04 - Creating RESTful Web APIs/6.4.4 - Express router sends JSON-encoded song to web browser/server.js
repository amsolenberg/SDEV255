const express = require("express");

const app = express();
const router = express.Router();

// GET request returns JSON-encoded song
router.get("/songs", function (req, res) {
  const song = {
    title: "Uptown Funk",
    artist: "Bruno Mars",
    popularity: 10,
    releaseDate: new Date(2014, 10, 10),
    genre: ["funk", "boogie"]
  };

  res.json(song);
});

// All requests to API begin with API
app.use("/api", router);

app.listen(3000);
