const { Router } = require('express')
const RawData = require('./model')

const router = new Router()

router.get('/raw_data',(req, res ) => {
  RawData
      .findAll()
      .then(data => {
       return res.send(data)
      })
      .catch(console.error)
})

router.post('/raw_data', (req, res) => {
  RawData
    .create({data:req.body})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: 'could not find the data'
        })
      } 
      res.send({message:'data is stored in the db'})
    })
    .catch(console.error)
})

module.exports = router
