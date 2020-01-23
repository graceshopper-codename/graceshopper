/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('products')
const Sequelize = require('sequelize')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('classMethods', () => {
    beforeEach(async () => {
      await Promise.all([
        Product.create({
          title: 'Everdell',
          type: 'Family',
          description:
            'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. ',
          price: 2015,
          MSRP: 2215,
          imageUrl:
            'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png'
        }),
        Product.create({
          title: 'Spirit Island',
          type: 'Cooperative',
          description:
            'Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers',
          price: 6899,
          MSRP: 7899,
          imageUrl:
            'https://cf.geekdo-images.com/itemrep/img/0f6KLNq-ynIWcx3VuZ1QsGAfSRo=/fit-in/246x300/pic3615739.png'
        })
      ])
    })

    describe('findSales', () => {
      it('finds products that are on sale', async () => {
        await Product.findSales()

        const saleItems = await Product.findAll({
          where: {
            price: {
              [Sequelize.Op.lt]: 6000
            }
          }
        })
        expect(saleItems).to.have.length(1)
      })
    }) // end describe('correctPassword')
    describe('findByTag', () => {
      it('finds products by tag', async () => {
        await Product.findByTag('Family')

        const taggedItems = await Product.findAll({
          where: {
            type: 'Family'
          }
        })
        expect(taggedItems).to.have.length(1)
      })
    })
  }) // end describe('instanceMethods')
}) // end describe('User model')
