const { Router } = require('express')
const bodyParser = require('body-parser')
const Test = require('./model')
const Question = require('../questions/model')

const cors = require('cors')
const router = new Router()

router.use(cors())
router.use(bodyParser.json()) 

router.post('/tests', (req, res, next) => {
  const test = {
    name: req.body.name,
    packageVersion: req.body.packageVersion
}
  Test
    .create(test)
    .then(test => {
      return res.status(201).json(test)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

router.get('/tests', (req, res, next) => { 
  Test.findAll({order:[['id', 'ASC']]})
  .then(tests => {
    res.json({ tests: tests })
  })
  .catch(error => next(error))
}) 

router.get('/tests/:id', (req, res) => {
  const id = req.params.id
  Test.findByPk(id, { include: [Question] })
  .then(test => {
    res.json({ test: test })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.put('/tests/:id', (req, res, next) => {
  const id = req.params.id
  Test.findByPk(id)
  .then(test => test.update(req.body))
  .then(test => {
    res.json({ message: `Test updated: ${test.name} ` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.delete('/tests/:id', (req, res, next) => {
  const id = req.params.id
  Test.findByPk(id)
  .then(test => test.destroy())
  .then(res.json({ message: `Test deleted` }))
  .catch(error => next(error))
})

module.exports = router