const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const evaluation = require('./evaluations/routes');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(evaluation)


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen);
