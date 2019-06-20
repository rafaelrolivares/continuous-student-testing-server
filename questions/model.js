const Sequelize = require('sequelize')
const sequelize = require('../db')
<<<<<<< HEAD

=======
>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2
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

<<<<<<< HEAD
// Question.belongsTo(Evaluation)
// Evaluation.hasMany(Question)
=======
>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2
Question.belongsTo(Test)
Test.hasMany(Question)

module.exports = Question