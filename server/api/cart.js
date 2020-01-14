const router = require('express').Router()
const Products = require('../db/models/products')

class Cart {
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
      let amount = price * qty
      this.data.total += amount
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

router.post('/', async (req, res, next) => {
  let qty = parseInt(req.body.qty, 10)
  let productId = parseInt(req.body.product_id, 10)
  try {
    const prod = await Products.findByPk(productId)
    NewCart.addToCart(prod, qty)
    NewCart.saveCart(req)
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

module.exports = router

//take out product id stuff
