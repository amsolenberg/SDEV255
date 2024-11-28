router.put("/:id", function (req, res) {
  // Song to update sent in body of request
  const song = req.body;

  // Replace existing song fields with updated song
  Song.updateOne({ _id: req.params.id }, song, function (err, result) {
    if (err) {
      res.status(400).send(err);
    } else if (result.matchedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});


// ------ HTTP Request
// PUT /api/song/56ec1e48960dd5844748cdf HTTP/1.1
// Host: localhost:3000
// Content-Type: application/json
// User-Agent: Mozilla/5.0 Chrome/48.0.2564

// {
//     'title': 'Hello There!',
//     'popularity': 8
// }

// ------ HTTP Response
// HTTP/1.1 204 No Content
// Date: Mon, 15 Mar 2021 14:26:20 GMT
// ETag: W/"66-cZws74LP8XEnwbIEyLgWFw"
// X-Powered-By: Express