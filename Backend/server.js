const express = require('express');
const router = require('./Router/router');

const app = express();

const PORT = 9090;

app.get('/ping', (req, res) => {
  res.send('pong');
});
app.use('/ping',router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});