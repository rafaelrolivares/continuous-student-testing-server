const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//const question = require('./questions/model')
//const response = require('./responses/model')
//const student = require('./students/model')
const testRouter = require('./tests/routes')

const app = express()

const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(testRouter)


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen)
