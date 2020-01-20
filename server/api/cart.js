const router = require('express').Router()
const {Cart, Products, Order} = require('../db/models/index')

//The Checkout Form Updating the order w/ address

router.put('/checkout', async (req, res, next) => {
  try {
    let currentOrder = await Order.findOne({
      where: {
        userId: req.body.userId,
        purchased: false
      }
    })
    let updatedOrder = await currentOrder.update({
      address: req.body.address,
      purchased: true,
      payment: req.body.payment
    })
    res.status(200).send(updatedOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let prod = req.body.product
    let userId = req.user ? req.user.id : null
    let [order, orderCreated] = await Order.findOrCreateOpenOrderByUser(
      userId,
      req.session.id
    )
    let [cart, cartCreated] = await Cart.findOrCreate({
      where: {
        productId: prod.id,
        orderId: order.id
      },
      defaults: {
        purchaseCost: prod.price,
        productTitle: prod.title,
        quantity: req.body.quantity,
        productId: prod.id,
        orderId: order.id
      }
    })
    console.log('***CART', cart)

    if (!cartCreated) {
      cart = await cart.update({quantity: cart.quantity + 1})
    }
    let cartItems = await Cart.findByOrderId(order.id)
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

// get method to cart will be called
router.get('/', async (req, res, next) => {
  try {
    let userId = req.user ? req.user.id : null
    let order = await Order.findOpenOrderByUser(userId, req.session.id)
    if (order) {
      let cartItems = await Cart.findByOrderId(order.id)
      res.json(cartItems)
    } else {
      res.json(order)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/history', async (req, res, next) => {
  try {
    let userId = req.user ? req.user.id : null
    let orders = await Order.findAll({
      where: {
        userId: userId,
        purchased: true
      }
    })
    const allItemsId = orders.map(order => order.id)
    const history = await Cart.findAll({
      where: {
        orderId: allItemsId
      }
    })
    res.send(history)
  } catch (err) {
    next(err)
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
  }
})

module.exports = router

//take out product id stuff
