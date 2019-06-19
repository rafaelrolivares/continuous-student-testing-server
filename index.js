const express = require('express');
const bodyParser = require('body-parser');



const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen)
