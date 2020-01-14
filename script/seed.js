'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Products, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: 'woof'})
  ])

  console.log(`seeded ${users.length} users`)

  const products = await Promise.all([
    Products.create({
      title: 'Everdell',
      type: 'family',
      description:
        'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?',
      price: 20.15,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png'
    }),
    Products.create({
      title: 'Spirit Island',
      type: 'cooperative',
      description:
        'Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers',
      price: 78.99,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png'
    }),
    Products.create({
      title: 'Scythe',
      type: 'strategy',
      description:
        'Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. ',
      price: 78.99,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/gLHDC5bCrxd1JhefjJ-VxW2zC54=/fit-in/246x300/pic3163924.jpg'
    }),
    Products.create({
      title: 'Spyfall',
      type: 'party',
      description:
        'Spyfall is a party game unlike any other, one in which you get to be a spy and try to understand what is going on around you. It is really simple!',
      price: 14.99,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/8gQ9kYUqU8W5vbE1UnDqPvXHae4=/fit-in/246x300/pic2453926.jpg'
    })
  ])
  console.log(`seeded ${products.length} products`)

  const order = await Promise.all([
    Order.create({
      userId: 37,
      payment: 'Paypal',
      address: '177a Bleecker Street',
      cost: 2899.04
    }),
    Order.create({
      userId: 9,
      payment: 'Credit Card',
      address: '177b Bleecker Street',
      cost: 246.08
    })
  ])

  console.log(`seeded ${order.length} orders`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
