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
      'worker placement',
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
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Products

// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function(candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// User.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate(users => {
//   users.forEach(setSaltAndPassword)
// })
