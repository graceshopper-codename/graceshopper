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
      'Deckbuilding',
      'Strategy',
      'Family',
      'Party',
      'Cooperative',
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
  return this.findAll({
    where: {
      price: {
        [Sequelize.Op.lt]: 6000
      }
    }
  })
}

Products.findByTag = function(tag) {
  return this.findAll({
    where: {
      type: tag
    }
  })
}

module.exports = Products
