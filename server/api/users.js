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
      attributes: ['id', 'email', 'isAdmin']
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

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send(result).sendStatus(204)
  } catch (err) {
    next(err)
  }
})
