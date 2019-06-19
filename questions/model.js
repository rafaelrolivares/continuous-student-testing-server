const Sequelize = require('sequelize')
const sequelize = require('../db')

const Question = Sequelize.define('questions', {
  key: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false
  }
},{
  timestamps: false,
  tableName: 'questions'
})