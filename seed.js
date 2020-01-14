const {db, Products} = require('./server')
const {green, red} = require('chalk')

const seed = async () => {
  await db.sync({force: true})

  const everdell = await Products.create({
    title: 'Everdell',
    type: 'worker placement',
    description:
      'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?',
    price: 20.15,
    imageUrl:
      'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png',
    gpa: 3.01
  })

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
