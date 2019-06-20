const Sequelize = require('sequelize')
const sequelize = require('../db')

const Test = sequelize.define('tests', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  packageVersion: {
    type: Sequelize.STRING,
    field: 'package_version',
    allowNull: false
  }
},{
  timestamps: false,
  tableName: 'tests'
<<<<<<< HEAD
=======

>>>>>>> 132c391ecbced69c19cc78c818ad0deedcf7b4a2
})

module.exports = Test