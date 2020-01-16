const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')

const Order = db.define('order', {
  sessionId: {
    type: Sequelize.STRING
    //    unique: true,
    //    allowNull: false
  },
  payment: {
    type: Sequelize.ENUM('Credit Card', 'Paypal', 'Other'),
    allowNull: true
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  cost: {
    type: Sequelize.INTEGER
    //    allowNull: false
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Order.findOrCreateOpenOrderByUser = function(userId, sessionId) {
  if (userId) {
    return this.findOrCreate({
      where: {
        userId: userId,
        purchased: false
      },
      defaults: {
        userId: userId,
        sessionId: sessionId
      }
    })
  } else {
    return this.findOrCreate({
      where: {
        sessionId: sessionId,
        purchased: false
      },
      defaults: {
        userId: userId,
        sessionId: sessionId
      }
    })
  }
}

module.exports = Order
