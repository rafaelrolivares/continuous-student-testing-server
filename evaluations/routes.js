const { Router } = require('express');
const router = new Router();
const Evaluation = require('./model');
const Student = require('../students/model');
const Question = require('../questions/model');


router.get('/evaluations', (req, res, next) => {
  Evaluation
    .findAll({
      include: [{ model: Student }, { model: Question }]
    })
    .then(evaluations => {
      res.send({ evaluations })
    })
    .catch(error => next(error))
})

router.get('/evaluations/:id', (req, res, next) => {
  Evaluation
    .findByPk(req.params.id)
    .then(evaluation => {
      if (!evaluation) {
        return res.status(404).send({
          message: 'Evaluation does not exist (anymore)'
        })
      }
      return res.send(evaluation)
    })
    .catch(error => next(error))
})

router.post('/evaluations', (req, res, next) => {
  const evaluation = {
    passed: req.body.passed,
    attempted: req.body.attempted,
    attemptsCount: req.body.attemptsCount,
    studentId: req.body.studentId,
    questionId: req.body.questionId
  }

  Evaluation
    .create(evaluation)
    .then(evaluation => {
      if (!evaluation) {
        return res.status(400).send({
          message: `evaluation has not been created`
        })
      }
      return res.status(201).send(evaluation)
    })
    .catch(error => next(error))
  })

// router.post('/evaluations', (req, res, next) => {
//   const evaluation = {
//     passed: req.body.passed,
//     attempted: req.body.attempted,
//     attemptsCount: req.body.attemptsCount
//   }

//   Evaluation
//     .create(evaluation)
//     .then(evaluation => {
//       if (!evaluation) {
//         return res.status(400).send({
//           message: `Evaluation has not been created`
//         })
//       }

//       Student
//         .findByPk(req.body.student_id)
//         .then(student => {
//           evaluation
//             .setStudent(student)
//             .then(() => {
              
//               Question
//                 .findByPk(req.body.question_id)
//                 .then(question => {
//                   evaluation
//                     .setQuestion(question)
//                     .then(() => {
//                       question

//                       return res.status(201).send(evaluation)
//                     })
//                   })
//               })
//           })
//       })
//     .catch(error => next(error))
//   })

module.exports = router