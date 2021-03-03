const express = require('express');

const app = express();
const path = require('path');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.json());
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/cards', (req, res) => {
  res.sendFile(path.join(__dirname, '../data/cards.json'));
});

app.listen(3000);
