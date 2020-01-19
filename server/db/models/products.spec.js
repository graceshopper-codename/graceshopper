const {expect} = require('chai')
const db = require('../index')
const Product = db.model('products')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('test test', () => {
    let product

    beforeEach(async () => {
      product = await Product.create({
        title: 'a game',
        type: 'family',
        description: 'so much fun',
        price: 10.15,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/A1uDIngqMDL._AC_SX522_.jpg'
      })
    })

    it('name is correct', () => {
      expect(product.correctTitle('a game')).to.be.equal(true)
    })
  })
})
