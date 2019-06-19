const Sequelize = require('sequelize')
const sequelize = require('../db')
const Response = require('../responses/model')
const Test = require('../tests/model')

const Question = sequelize.define('questions', {
  key: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false
  }
},{
  timestamps: false,
  tableName: 'questions'
})

Question.belongsTo(Response)
Response.hasMany(Question)
Question.belongsTo(Test)
Test.hasMany(Question)

module.exports = Question