const Sequelize = require('sequelize')
const sequelize = require('../db')
const Exercise = require('../exercises/model')

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

Question.belongsTo(Exercise)
Exercise.hasMany(Question)

module.exports = Question