const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM(
      'deckbuilding',
      'strategy',
      'family',
      'party',
      'cooperative'
    ),
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  MSRP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Products.findSales = function() {
  console.log('IN THE MODEL KJFSHDSLKJFHDSKJFHLKDS', this)
  return this.findAll({
    where: {
      price: {
        [Sequelize.Op.lt]: 1000000
      }
    }
  })
}

module.exports = Products
