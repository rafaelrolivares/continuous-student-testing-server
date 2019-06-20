const { Router } = require('express')
const bodyParser = require('body-parser')
const Question = require('./model')
const Evaluation = require('../evaluations/model')
const Exercise = require('../exercises/model')
const cors = require('cors')
const router = new Router()

router.use(cors())
router.use(bodyParser.json()) 

router.post('/questions', (req, res, next) => {
  const question = {
    key: req.body.key,
    exerciseId: req.body.exerciseId
}
  Question
    .create(question)
    .then(question => {
      return res.status(201).json(question)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

router.get('/questions', (req, res, next) => { 
  Question.findAll({order:[['id', 'ASC']]})
  .then(questions => {
    res.json({ questions: questions })
  })
  .catch(error => next(error))
}) 

router.get('/questions/:id', (req, res) => {
  const id = req.params.id
  Question.findByPk(id, { include: [Exercise] })
  .then(question => {
    res.json({ question: question })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.put('/questions/:id', (req, res, next) => {
  const id = req.params.id
  Question.findByPk(id)
  .then(question => question.update(req.body))
  .then(question => {
    res.json({ message: `Question updated: key: ${question.key}; exerciseId: ${question.exerciseId} ` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.delete('/questions/:id', (req, res, next) => {
  const id = req.params.id
  Question.findByPk(id)
  .then(question => question.destroy())
  .then(res.json({ message: `Question deleted` }))
  .catch(error => next(error))
})

module.exports = router