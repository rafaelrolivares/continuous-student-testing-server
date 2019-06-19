const Sequelize = require('sequelize')
const sequelize = require('../../db')

const RawData = sequelize.define('RawData', {
  data: {
    type: Sequelize.JSONB,
    field: 'data',
    allowNull: false
  }
}, {
  tableName: 'RawData'
})


module.exports = RawData