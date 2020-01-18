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
    let qty = parseInt(req.body.qty, 10)
    let productId = parseInt(req.body.product_id, 10)
    let prod = await Products.findByPk(productId)
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
        quantity: qty,
        productId: prod.id,
        orderId: order.id
      }
    })

    let updatedCart
    if (!cartCreated) {
      updatedCart = await cart.update({quantity: cart.quantity + 1})
    }
    res.status(200).send(updatedCart)
  } catch (err) {
    next(err)
  }
})

// get method to cart will be called
router.get('/', async (req, res, next) => {
  try {
    // let orderId = Order.find(where userId or sessionId !purchased)
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
    console.log('cartitems', cartItems)
    console.log('***productid', req.params.itemId)
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

module.exports = router

//take out product id stuff
