const Sequelize = require('sequelize')
const sequelize = require('../db')
const Student = require('../students/model')

const Response = sequelize.define('responses', {
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
  tableName: 'responses',
  timestamps: true
})

Response.belongsTo(Student)
Student.hasMany(Response)
module.exports = Response