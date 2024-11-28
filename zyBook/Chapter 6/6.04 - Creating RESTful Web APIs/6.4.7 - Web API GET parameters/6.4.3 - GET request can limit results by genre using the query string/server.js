router.get("/", function (req, res) {
  let query = {};

  // Check if genre was supplied in query string
  if (req.query.genre) {
    query = { genre: req.query.genre };
  }

  Song.find(query, function (err, songs) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(songs);
    }
  });
});
