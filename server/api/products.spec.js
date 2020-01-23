// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Products = db.model('products')

// describe('Product routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/products/', () => {
//     beforeEach(() => {
//       return
//       Products.create({
//         title: 'Everdell',
//         type: 'family',
//         description:
//           'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?',
//         price: 20.15,
//         imageUrl:
//           'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png'
//       })
//     })

//     it('GET /api/products', async () => {
//       const res = await request(app)
//         .get('/api/products')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       console.log('*******', res.body)
//     //   expect(res.body[0].title).to.be.equal('Everdell')
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
