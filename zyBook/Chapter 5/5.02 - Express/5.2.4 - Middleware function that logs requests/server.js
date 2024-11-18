const express = require('express');
const app = express();

const logRequest = function (req, res, next) {
    console.log(`Request: ${req.method} for ${req.path}`);
    next();
};

app.use(logRequest);

app.get('/hello', function (req, res) {
    res.send('<h1>Hello, Express!</h1>');
});

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
