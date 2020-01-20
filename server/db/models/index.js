const User = require('./user')
const Products = require('./products')
const Order = require('./order')
const Cart = require('./cart')

//Associations
User.hasMany(Order)
Order.belongsTo(User)
Products.belongsToMany(Order, {through: Cart})
Order.belongsToMany(Products, {through: Cart})

module.exports = {
  User,
  Products,
  Order,
  Cart
}
