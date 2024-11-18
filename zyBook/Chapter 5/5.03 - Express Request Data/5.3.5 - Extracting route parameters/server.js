const express = require('express');
const app = express();

app.get('/users/:username', function (req, res) {
    const username = req.params.username;
    res.send(`<h1>Profile for ${username}</h1>`);
});
