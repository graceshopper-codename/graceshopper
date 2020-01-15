const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  payment: {
    type: Sequelize.ENUM('Credit Card', 'Paypal', 'Other'),
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
})

module.exports = Order
