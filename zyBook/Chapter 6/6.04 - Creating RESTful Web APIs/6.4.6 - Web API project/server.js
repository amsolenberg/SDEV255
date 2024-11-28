const express = require("express");
const app = express();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

app.use("/api/songs", require("./api/songs"));

app.listen(3000);
