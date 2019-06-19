const Sequelize = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('students', {
  gitName: {
    type: Sequelize.STRING,
    field: 'git_name',
    allowNull: false
  },
  gitEmail: {
    type: Sequelize.STRING,
    field: 'git_email',
    allowNull: false
  }
},
  { timestamps: false }
)

module.exports = Student