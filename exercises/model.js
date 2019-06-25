const Sequelize = require('sequelize')
const sequelize = require('../db')

const Exercise = sequelize.define('exercises', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  packageVersion: {
    type: Sequelize.STRING,
    field: 'package_version',
    allowNull: true
  }
},{
  timestamps: false,
  tableName: 'exercises'
})

module.exports = Exercise