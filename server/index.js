const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const port = 2000;
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/action-record', (req, res) => {
  global.record = req.body;
  res.status('200').json({});
});

app.get('/action-record', (req, res) => {
  return res.json(global.record || []);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
