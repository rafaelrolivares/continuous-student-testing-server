const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const evaluation = require('./evaluations/routes');

const app = express();
const port = process.env.PORT || 4000;
=======
const RawDataRouter = require('./raw_data/routes')
const cors = require('cors')
const question = require('./questions/routes')
const evaluation = require('./evaluations/routes')
const student = require('./students/routes')
const test = require('./tests/routes')

const app = express()

const port = process.env.PORT || 4000
>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2

app
  .use(cors())
  .use(bodyParser.json())
<<<<<<< HEAD
  .use(evaluation)
=======
  .use(evaluation, student, question, test, RawDataRouter)
>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2


function onListen() {
  console.log(`Running on port ${port}`)
}

app.listen(port, onListen);
