const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      return next()
    } catch (err) {
      next(err)
    }
  } else res.redirect('/')
}

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('req body', req.body)
  } catch (err) {
    next(err)
  }
})
