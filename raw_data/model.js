const Sequelize = require('sequelize')
const sequelize = require('../db')

const RawData = sequelize.define('raw_data', {
  data: {
    type: Sequelize.JSONB,
    field: 'data',
    allowNull: false
  }
}, {
  tableName: 'raw_data'
})


module.exports = RawData