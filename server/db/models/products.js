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
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cf.geekdo-images.com/itemrep/img/U28cezkt4voh5iEceBV8kKM5n64=/fit-in/246x300/pic4781085.jpg',
    allowNull: false
  }
})

module.exports = Products
