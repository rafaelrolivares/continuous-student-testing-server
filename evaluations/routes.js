const { Router } = require('express');
const router = new Router();
const Evaluation = require('./model');
const Student = require('../students/model');
const Question = require('../questions/model');
const Exercise = require('../exercises/model')

router.get('/evaluations', (req, res, next) => {
  Evaluation
    .findAll(   
      {include: [{ model: Student, attributes: [
        ['git_name', 'gitName']
      ]} , { model: Question }]
    , order:[['updatedAt', 'DESC']]})
    .then(evaluations => {
      res.send({ evaluations })
    })
    .catch(error => next(error))
})

router.get('/evaluations/:id', (req, res, next) => {
  const id = req.params.id
  Evaluation
    .findByPk(id)
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
  const day = req.body.day
  const student = {
    gitName:req.body.gitName,
    gitEmail: req.body.gitEmail
  }

  let attemptsCount = 1
  let studentId = null


   evaluation = {
        // passed,
        // attempted,
        attemptsCount,
        studentId,
        //questionId
      }
  console.log('evaluation 1:', evaluation)
  console.log("req.body.evaluation:", req.body.evaluation)

  const evaluationArray = JSON.parse(JSON.stringify(req.body.evaluation))

  const exercisesArray = evaluationArray.map(question => {
    return question.exercise
  })

  const questionsArray = evaluationArray.map(question => {
    return {
      exercise: question.exercise,
      key: question.key
      }
  })

  console.log('questionsArray', questionsArray)

  const exercisesUnique = exercisesArray.filter(function(question, index){
    return exercisesArray.indexOf(question) >= index;
})

// console.log('exercisesUnique:', exercisesUnique)

//Writing the exercise name to the db
const createExercise = exercisesUnique.map(exercise => {
 return Exercise
  .findOrCreate({ where: {name: exercise, packageVersion: day} })  
  .then( exercise =>  {
    // console.log('exercise:', exercise)
    return exercise
  })
})


// console.log('createExercise array:', createExercise)

//Writing the student info to the db
const createStudent = Student
    .findOrCreate({where: {gitEmail: student.gitEmail}, defaults: {gitName: student.gitName}})
    .then(([student]) => {
      console.log('student.id :',student.id )
      return student.id 
    })
    .catch(next)

const promiseArray = [createStudent, ...createExercise ]

Promise.all(promiseArray)
  .then(values => {
    const studentId = values[0] 
    evaluation = { ...evaluation, studentId }
    console.log('evaluation 2:', evaluation)

    const createQuestion = questionsArray.map(question => {
      return Exercise
       .findOne({ where: {name: question.exercise} })  
       .then( exercise =>  {
         console.log('exercise:', exercise.id)
         Question
          .findOrCreate({ where: { key: question.key, exerciseId: exercise.id } })
          .then(question => console.log('question:', question))

         return exercise.id
       })
     })
    })
  })

module.exports = router