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

    res.send('woof')
  } catch (err) {
    next(err)
  }
})




class cartClass {
  constructor() {
    this.data = {}
    this.data.items = []
    this.data.total = 0
  }

  inCart(productID = 0) {
    let found = false
    this.data.items.forEach(item => {
      if (item.id === productID) {
        found = true
      }
    })
    return found
  }

  calculateTotal() {
    this.data.items.forEach(item => {
      let price = item.price
      let qty = item.qty
      let amount = Math.round(price * qty * 100) / 100
      this.data.total += Math.round(amount * 100) / 100
    })
  }

  addToCart(product = null, qty = 1) {
    if (!this.inCart(product.product_id)) {
      let prod = {
        //add any info for each product 'product.price'
        id: product.id,
        title: product.title,
        price: product.price,
        qty: qty
      }
      this.data.items.push(prod)
      this.calculateTotal()
    }
  }

  saveCart(request) {
    if (request.session) {
      request.session.cart = this.data
    }
  }

  removeFromCart(id = 0) {
    for (let i = 0; i < this.data.items.length; i++) {
      let item = this.data.items[i]
      if (item.id === id) {
        this.data.items.splice(i, 1)
        this.calculateTotal()
      }
    }
  }

  emptyCart(request) {
    this.data.items = []
    this.data.total = 0
    if (request.session) {
      request.session.cart.items = []
      request.session.cart.total = 0
    }
  }

  //update cart method goes here when the time comes (for adjusting quantity)
}

let NewCart = new Cart()

// post '/api/cart' route will be called when adding new items to cart
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

router.get('/', async (req, res, next) => {
  try {
    // let orderId = Order.find(where userId or sessionId !purchased)

    console.log('req session at line 89', req.session.cart)
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})



module.exports = router

//take out product id stuff
