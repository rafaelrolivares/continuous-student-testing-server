const express = require('express');
const bodyParser = require('body-parser');
const RawData = require('./raw_data/model')



const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(RawData)


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen)
