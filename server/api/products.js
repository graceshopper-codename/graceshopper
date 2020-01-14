const router = require('express').Router()
const Products = require('./products')
module.exports = router

router.get('/', (req, res, next) => {
  try {
    const allProducts = Products.findAll()
    res.send(allProducts)
  } catch (error) {
    next(error)
  }
})
