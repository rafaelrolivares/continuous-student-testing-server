const Sequelize = require('sequelize')
const sequelize = require('../db')
const Student = require('../students/model')
const Question = require('../questions/model')

const Evaluation = sequelize.define('evaluations', {
   passed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  attempted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'evaluations',
  timestamps: true
})

Evaluation.belongsTo(Student)
Student.hasMany(Evaluation)
Evaluation.belongsTo(Question)
Question.hasMany(Evaluation)

module.exports = Evaluation