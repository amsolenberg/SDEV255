const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"</head>');
    res.write('<title>Node.js Crash Course</title>');
    res.write('<h1>hello, ninjas</h1>');
    res.write('<p>welcome to the page</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listenting for requets on port 3000');
});