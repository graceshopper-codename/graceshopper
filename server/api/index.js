const router = require('express').Router()
module.exports = router

// const isAdmin = (req, res, next) => {
//   if (req.user.isAdmin) {
//     try {
//       return next()
//     } catch (err) {
//       next(err)
//     }
//   } else res.redirect('/')
// }

const isAdmin = (req, res, next) => {
  // if (req.user) {
  res.redirect('/')
  //}
}

//if not admin, redirect

router.use('/users', isAdmin, require('./users'))
router.use('/cart', isAdmin, require('./cart'))
router.use('/products', require('./products'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
