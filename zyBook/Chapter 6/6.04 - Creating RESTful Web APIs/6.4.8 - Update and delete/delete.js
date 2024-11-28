router.delete("/:id", function (req, res) {
  Song.deleteOne({ _id: req.params.id }, function (err, result) {
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
// DELETE /api/song/56ec1e48960dd58447478cdf HTTP/1.1
// Host: localhost:3000
// User-Agent: Mozilla/5.0 Chrome/48.0.2564

// ------ HTTP Response
// HTTP/1.1 204 No Content
// Date: Mon, 15 Mar 2021 14:31:35 GMT
// ETag: W/"a-oQDOV50e1MN2H/N8GYi+8w"
// X-Powered-By: Express