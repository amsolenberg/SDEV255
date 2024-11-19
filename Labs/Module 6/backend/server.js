const express = require('express');
const cors = require('cors'); // Should not be used in production
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors()); // Should not be used in production
app.use(bodyParser.json());

var messages = ['yes', 'each', 'messages'];

app.get('/messages', (req, res) => {
   res.send(messages);
});

app.post('/messages', (req, res) => {
   let msg = req.body;
   console.log(msg);
   messages.push(msg.message);
   res.json(msg);
   console.log(messages)
});

app.listen(port, () => console.log('app running'));
