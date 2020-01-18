const router = require('express').Router()
const Products = require('../db/models/products')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Products.findAll()
    res.send(allProducts)
  } catch (error) {
    next(error)
  }
})

router.get('/sale', async (req, res, next) => {
  try {
    const saleProducts = await Products.findSales()
    res.send(saleProducts)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const productId = req.params.id
    const singleProduct = await Products.findByPk(productId)
    res.send(singleProduct)
  } catch (error) {
    next(error)
  }
})

router.get('/:itemId', async (req, res, next) => {
  try {
    const itemId = req.params.itemId
    let userId = req.user ? req.user.id : null
    let order = await Order.findOpenOrderByUser(userId, req.session.id)
    let cartItems = await Cart.findOneItem(order.id, itemId)
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

router.delete('/:itemId', async (req, res, next) => {
  try {
    let cartItems = await Cart.destroy({
      where: {
        productId: req.params.itemId
      }
    })
    res.json(cartItems)
  } catch (err) {
    next(err)
    const saleProducts = await Products.findAll()
    res.send(saleProducts)
  } catch (error) {
    next(error)
  }
})
