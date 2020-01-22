const router = require('express').Router()
const helmet = require('helmet')
const compression = require('compression')
module.exports = router

router.use(compression())
router.use(helmet())
router.use('/users', require('./users'))
router.use('/cart', require('./cart'))
router.use('/products', require('./products'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
