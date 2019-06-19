const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const question = require('./questions/routes')
const evaluation = require('./evaluations/routes')
const student = require('./students/routes')
const test = require('./tests/routes')

const app = express()

const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(evaluation, student, question, test)


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen)
