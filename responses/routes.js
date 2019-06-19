const { Router } = require('express');
const router = new Router();
const Response = require('./model');
const Student = require('../students/model');
const Question = require('../questions/model');


router.get('/reponses', (req, res, next) => {
  Response
    .findAll({
      include: [{ model: Student }, { model: Question }]
    })
    .then(reponses => {
      res.send({ reponses })
    })
    .catch(error => next(error))
})

router.get('/reponses/:id', (req, res, next) => {
  Reponse
    .findByPk(req.params.id)
    .then(reponse => {
      if (!reponse) {
        return res.status(404).send({
          message: 'Response does not exist (anymore)'
        })
      }
      return res.send(response)
    })
    .catch(error => next(error))
})

module.exports = router