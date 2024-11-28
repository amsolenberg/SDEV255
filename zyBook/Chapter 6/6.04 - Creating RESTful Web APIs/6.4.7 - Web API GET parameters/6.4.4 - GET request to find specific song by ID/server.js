router.get("/:id", function (req, res) {
  // Use the ID in the URL path to find the song
  Song.findById(req.params.id, function (err, song) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(song);
    }
  });
});
