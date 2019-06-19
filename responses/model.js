const Sequelize = require('sequelize')
const sequelize = require('../../db')

const Response = sequelize.define('responses', {
  git_name: {
    type: Sequelize.STRING,
    field: 'git_name',
    allowNull: false
  },
  git_email: {
    type: Sequelize.STRING,
    field: 'git_email',
    allowNull: false
  },
   numFailedTests: {
    type: Sequelize.INTEGER,
    field: 'numFailedTests',
    allowNull: false
  },
  numPassedTests: {
    type: Sequelize.INTEGER,
    field: 'numFailedTests',
    allowNull: false
  },
  numPendingTests: {
    type: Sequelize.INTEGER,
    field: 'numFailedTests',
    allowNull: false
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
}, {
  tableName: 'responses'
})


module.exports = Response