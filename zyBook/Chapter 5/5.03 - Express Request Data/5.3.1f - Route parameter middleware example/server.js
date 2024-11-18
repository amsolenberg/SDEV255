const express = require('express');
const app = express();

// Parameter middleware executes before the route
app.param('username', function (req, res, next, username) {
    // Check if username is recognized
    if (username === 'jblack') {
        req.user = { name: 'Jack Black', username: username };
    } else {
        req.user = { name: 'Unknown', username: username };
    }

    // Continue processing the request
    next();
});

app.get('/users/:username', function (req, res) {
    // req.user contains the user info set in the parameter middleware
    res.send(`<h1>Profile for ${req.user.name}</h1>`);
});
