const Sequelize = require('sequelize')
const sequelize = require('../db')

const Test = sequelize.define('tests', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  packageVersion: {
    type: Sequelize.STRING,
    field: 'package_version',
    allowNull: false
  }
},{
  timestamps: false,
  tableName: 'tests'
})

module.exports = Test