const express = require("express");

const app = express();
const router = express.Router();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

// GET request returns JSON-encoded songs
router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      releaseDate: new Date(2011, 9, 22),
      genre: ["electro house"]
    },
    {
      title: "Happy",
      artist: "Pharrell Williams",
      popularity: 10,
      releaseDate: new Date(2013, 11, 21),
      genre: ["soul", "new soul"]
    }
  ];

  res.json(songs);
});

// POST request of JSON-encoded song displayhs song in the console
router.post("/songs", function (req, res) {
  console.log(req.body);
  res.sendStatus(201);
});

// All requests to API begin with API
app.use("/api", router);

app.listen(3000);
