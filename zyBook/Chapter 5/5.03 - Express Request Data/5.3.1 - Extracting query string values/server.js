const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
    const html = `<h1>Hello, ${req.query.name}!</h1>
        <p>You are ${req.query.age} years old.</p>`;
    res.send(html);
});
