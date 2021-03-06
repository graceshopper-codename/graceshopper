const router = require('express').Router()
const {Cart, Products, Order} = require('../db/models/index')
const {confirmationEmail} = require('../email')

//The Checkout Form Updating the order w/ address

router.put('/checkout', async (req, res, next) => {
  try {
    console.log('REQ BODY', req.body)
    let currentOrder = await Order.findByPk(req.body.orderId)
    let updatedOrder = await currentOrder.update({
      purchased: true,
      cost: req.body.amount
      // payment: req.body.payment
      // address: req.body.shippingAddress,
    })
    // confirmation email sent if a user
    if (req.user) {
      confirmationEmail(req.user.email, req.user.name, updatedOrder.id)
    }
    res.status(200).json(updatedOrder)
    //    history.push('/home')
    //    res.status(200).redirect('/cart/checkout/complete')
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
    if (!cartCreated) {
      cart = await cart.update({quantity: cart.quantity + 1})
    }
    let cartItems = await Cart.findByOrderId(order.id)
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    let item = req.body.item
    let cartItem = await Cart.findOne({
      where: {
        productId: item.productId,
        orderId: item.orderId
      }
    })
    let updatedCartItem = await cartItem.update({quantity: req.body.quantity})
    let cartItems = await Cart.findByOrderId(item.orderId)
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
