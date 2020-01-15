const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  purchaseCost: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Cart
