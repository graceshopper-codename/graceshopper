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
  return this.findOrCreate({
    where: {
      [Op.or]: [{userId: userId}, {sessionId: sessionId}],
      purchased: false
    },
    defaults: {
      userId: userId,
      sessionId: sessionId
    }
  })
}

module.exports = Order
