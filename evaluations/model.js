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
  },
  attemptsCount: {
    type: Sequelize.INTEGER,
    field: 'attempts_count',
    allowNull: false
  }
}, {
  tableName: 'evaluations',
  timestamps: true
})

Evaluation.belongsTo(Student)
Student.hasMany(Evaluation)
<<<<<<< HEAD:evaluations/model.js

// Question.belongsTo(Evaluation)
// Question.hasMany(Evaluation)

=======
Evaluation.belongsTo(Question)
Question.hasMany(Evaluation)
>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2:evaluations/model.js
module.exports = Evaluation