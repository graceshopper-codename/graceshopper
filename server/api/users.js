const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//console.log req.user
const isUser = (req, res, next) => {
  console.log(req.user, 'user')
  if (req.user.isAdmin) {
    try {
      console.log(req.user, 'user')
      return next()
    } catch (err) {
      next(err)
    }
  } else res.redirect('/')
}

router.get('/', isUser, async (req, res, next) => {
  try {
    console.log('test')
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
