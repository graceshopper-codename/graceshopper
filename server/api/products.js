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

router.get('/:id', async (req, res, next) => {
  try {
    const productId = req.params.id
    const singleProduct = await Products.findByPk(productId)
    res.send(singleProduct)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let {title, type, description, price, imageUrl} = req.body
    const newProduct = await Products.create(
      title,
      type,
      description,
      price,
      imageUrl
    )
    res.send(newProduct)
  } catch (error) {
    next(error)
  }
})
