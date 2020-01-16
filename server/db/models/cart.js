const Sequelize = require('sequelize')
const db = require('../db')
const Products = require('./index')

const Cart = db.define('cart', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  productTitle: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  purchaseCost: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Cart.findByOrderId = function(orderId) {
  return this.findAll({
    where: {orderId: orderId}
  })
}

Cart.calculateOrderSubTotal = function(orderId) {
  let cartItems = this.findByOrderId(orderId)
  return cartItems.reduce(
    (acc, item) => acc + item.quantity * item.purchaseCost,
    0
  )
}

module.exports = Cart
