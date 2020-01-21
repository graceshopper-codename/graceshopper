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
  } catch (err) {
    next(err)
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

router.get('/tag/:productTag', async (req, res, next) => {
  console.log("WE'RE IN API", req.params.productTag)
  try {
    console.log("WE'RE IN API TRY", req.params.productTag)
    const tag = req.params.productTag
    const tagProducts = await Products.findByTag(tag)
    res.send(tagProducts)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    let cartItems = await Products.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     let {title, type, description, price, imageUrl} = req.body
//     const newProduct = await Products.create(
//       title,
//       type,
//       description,
//       price,
//       imageUrl
//     )
//     res.send(newProduct)
//   } catch (error) {
//     next(error)
//   }
// })

//was working
//  router.post('/', async (req, res, next) => {
//   Products.create(req.body)
//     .then(product => res.json(product))
//     .catch(next)
// })

router.post('/', async (req, res, next) => {
  try {
    const product = await Products.create(req.body)
    res.status(201).send(product)
  } catch (error) {
    next(error)
  }
})

// router.put('/update/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id
//     const product = await Products.findByPk(id)
//     const updated = await product.update(req.body)
//     res.send(updated)
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/:id', (req, res, next) => {
  Products.findById(req.params.id)
    .then(todo => todo.update(req.body))
    .then(todo => res.json(todo))
    .catch(next)
})
