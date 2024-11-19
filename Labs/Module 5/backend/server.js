const express = require('express');
const cors = require('cors'); // Should not be used in production
const app = express();
const port = 3000;

app.use(cors()); // Should not be used in production

app.get('/messages', (req, res) => {
   const messages = ['yes', 'each', 'messages'];

   res.send(messages);
});

app.listen(port, () => console.log('app running'));
