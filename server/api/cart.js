const router = require('express').Router()
const {Cart, Products, Order} = require('../db/models/index')


//The Checkout Form Updating the order w/ address



router.put('/checkout', async (req, res, next) => {
  console.log("Nerf") 
  try {
    
    let currentOrder = await Order.findByPk({
      where: {
        orderId: req.body.id
      }
    })

    res.send('woof')
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
        quantity: 1,
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
    let cartItems = await Cart.findByOrderId(order.id)
    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})



module.exports = router

//take out product id stuff
