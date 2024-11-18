const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.post('/hello', function (req, res) {
    const html = `<h1>Hello, ${req.body.name}!</h1>
                    <p>You are ${req.body.age} years old.</p>`;
    res.send(html);
});

app.listen(3000);
