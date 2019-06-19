const { Router } = require('express')
const bodyParser = require('body-parser')
const Student = require('./model')

const cors = require('cors')
const router = new Router()

router.use(cors())
router.use(bodyParser.json()) 

router.post('/students', (req, res, next) => {
  const student = {
    gitName: req.body.gitName,
    gitEmail: req.body.gitEmail
}
  Student
    .create(student)
    .then(student => {
      return res.status(201).json(student)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

router.get('/students', (req, res, next) => { 
  Student.findAll({order:[['id', 'DESC']]})
  .then(students => {
    res.json({ students: students })
  })
  .catch(error => next(error))
}) 

router.get('/students/:id', (req, res) => {
  const id = req.params.id
  Student.findByPk(id)
  .then(student => {
    res.json({ student: student })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.put('/students/:id', (req, res, next) => {
  const id = req.params.id
  Student.findByPk(id)
  .then(student => student.update(req.body))
  .then(student => {
    res.json({ message: `student updated: ${student.message} ` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

router.delete('/students/:id', (req, res, next) => {
  const id = req.params.id
  Student.findByPk(id)
  .then(student => student.destroy())
  .then(res.json({ message: `Student deleted` }))
  .catch(error => next(error))
})

module.exports = router