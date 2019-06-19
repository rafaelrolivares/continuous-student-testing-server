const Sequelize = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('students', {
  git_name: {
    type: Sequelize.STRING,
    field: 'git_name',
    allowNull: false
  },
  git_email: {
    type: Sequelize.STRING,
    field: 'git_email',
    allowNull: false
  }
},
  { timestamps: false }
)

module.exports = Student