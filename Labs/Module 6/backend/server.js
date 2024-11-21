const express = require('express');
const cors = require('cors'); // Should not be used in production
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors()); // Should not be used in production
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
  const messages = ['yes', 'each', 'messages'];

  res.send(messages);
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  res.json({});
});

app.listen(port, () => console.log('app running'));
