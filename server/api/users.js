const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//console.log req.user
const isUser = (req, res, next) => {
  if (req.user) {
    try {
      return next()
    } catch (err) {
      next(err)
    }
    res.redirect('/')
  } else res.redirect('/')
}

router.get('/', isUser, async (req, res, next) => {
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
