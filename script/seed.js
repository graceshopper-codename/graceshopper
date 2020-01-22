'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Products, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      name: 'NotCody',
      isAdmin: true
    }),
    User.create({email: 'murphy@email.com', password: 'woof'})
  ])

  console.log(`seeded ${users.length} users`)

  const products = await Promise.all([
    Products.create({
      title: 'Everdell',
      type: 'Family',
      description:
        'Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. ',
      price: 2015,
      MSRP: 2215,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/WDbT-w4bNeIwxojLW92I_SO5GSU=/fit-in/246x300/pic3918905.png'
    }),
    Products.create({
      title: 'Spirit Island',
      type: 'Cooperative',
      description:
        'Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers',
      price: 7899,
      MSRP: 7899,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/0f6KLNq-ynIWcx3VuZ1QsGAfSRo=/fit-in/246x300/pic3615739.png'
    }),
    Products.create({
      title: 'Scythe',
      type: 'Strategy',
      description:
        'Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. ',
      price: 7899,
      MSRP: 5000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/gLHDC5bCrxd1JhefjJ-VxW2zC54=/fit-in/246x300/pic3163924.jpg'
    }),
    Products.create({
      title: 'Spyfall',
      type: 'Party',
      description:
        'Spyfall is a party game unlike any other, one in which you get to be a spy and try to understand what is going on around you. It is really simple!',
      price: 1499,
      MSRP: 500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/8gQ9kYUqU8W5vbE1UnDqPvXHae4=/fit-in/246x300/pic2453926.jpg'
    }),
    Products.create({
      title: 'Stuffed Fables',
      type: 'Family',
      description:
        "Stuffed Fables is an unusual adventure game in which players take on the roles of brave stuffies seeking to save the child they love from a scheming, evil mastermind. Make daring melee attacks, leap across conveyor belts, or even steer a racing wagon down a peril-filled hill. The game delivers a thrilling narrative driven by player choices. Players explore a world of wonder and danger, unlocking curious discoveries. The chapters of Stuffed Fables explore the many milestones of a child's life, creating a memorable tale ideal for families, as well as groups of adults who haven't forgotten their childlike sense of wonder.",
      price: 9000,
      MSRP: 9500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/CeUZnXMiBjRBRxbsMnue4fUprsw=/fit-in/246x300/pic3708878.jpg'
    }),
    Products.create({
      title: 'Terraforming Mars',
      type: 'Strategy',
      description:
        'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.',
      price: 6899,
      MSRP: 7500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/bhemoxL7PG1a_79L0D9syPTADSY=/fit-in/246x300/pic3536616.jpg'
    }),
    Products.create({
      title: 'Root',
      type: 'Strategy',
      description:
        'Root is a game of adventure and war in which 2 to 4 players battle for control of a vast wilderness.Root represents the next step in our development of asymmetric design. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition. Now, with the aid of gorgeous, multi-use cards, a truly asymmetric design has never been more accessible.',
      price: 6969,
      MSRP: 9500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/bH4Gk0w5kDGd4MR0DTt8jMI6vo8=/fit-in/246x300/pic4254509.jpg'
    }),
    Products.create({
      title: 'Arkham Horror',
      type: 'Cooperative',
      description:
        'Arkham Horror is a cooperative board game for one to six players who take on the roles of investigators trying to rid the world of eldritch beings known as Ancient Ones. Based on the works of H.P. Lovecraft, players will have to gather clues, defeat terrifying monsters, and find tools and allies if they are to stand any chance of defeating the creatures that dwell just beyond the veil of our reality.',
      price: 5499,
      MSRP: 8000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/u3xLien-i-nOql7ePh8m4FhHbWM=/fit-in/246x300/pic4582151.jpg'
    }),
    Products.create({
      title: 'Champions of Hara',
      type: 'Cooperative',
      description:
        'Champions of Hara is an adventure board game in which 1-4 players race to protect a dying world. Players will contain destructive energy by defeating monsters, closing rifts, and exploring the six different zones within Hara. In order to rise to the challenge, players will need to unlock new abilities and collect powerful items. Each session takes approximately 30 minutes per player.',
      price: 9499,
      MSRP: 500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/VDA4fHXVlKtNuyLlxkJoao3ysow=/fit-in/246x300/pic4453739.png'
    }),
    Products.create({
      title: 'Codenames',
      type: 'Party',
      description:
        "Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES. In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin. Codenames: Win or lose, it's fun to figure out the clues.",
      price: 5000,
      MSRP: 5000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/j3KnNONTvPaOqyY_pwhS9C9s5bk=/fit-in/246x300/pic2582929.jpg'
    }),
    Products.create({
      title: 'Mansions of Madness',
      type: 'Cooperative',
      description:
        "Mansions of Madness is a fully cooperative, app-driven board game of horror and mystery for one to five players that takes place in the same universe as Eldritch Horror and Elder Sign. Let the immersive app guide you through the veiled streets of Innsmouth and the haunted corridors of Arkham's cursed mansions as you search for answers and respite. Eight brave investigators stand ready to confront four scenarios of fear and mystery, collecting weapons, tools, and information, solving complex puzzles, and fighting monsters, insanity, and death. Open the door and step inside these hair-raising Mansions of Madness. It will take more than just survival to conquer the evils terrorizing this town.",
      price: 8000,
      MSRP: 10000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/B0F4U1vQnELePmNg4n5dtvcryGU=/fit-in/246x300/pic3118622.jpg'
    }),
    Products.create({
      title: 'Too Many Bones',
      type: 'Cooperative',
      description:
        "Too Many Bones comes loaded for bear by breaking into a new genre: the dice-builder RPG. This game takes everything you think you know about dice-rolling and turns it on its head. Dripping with strategy, this fantasy-based RPG puts you in the skin of a new race and takes you on an adventure to the northern territories to root out and defeat growing enemy forces and of course the infamous 'baddie' responsible.",
      price: 25000,
      MSRP: 18000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/rpfz3NB-uyK0rQ_rYwBbXu2OPKE=/fit-in/246x300/pic3684814.jpg'
    }),
    Products.create({
      title: 'Chronicles of Crime',
      type: 'Cooperative',
      description:
        'Chronicles of Crime is a cooperative game of crime investigation, mixing an app, a board game and a touch of Virtual Reality. With the same physical components (board, locations, characters and items), players will be able to play plenty of different scenarios and solve as many different crime stories. Players start the app, choose the scenario they want to play, and follow the story. The goal being to catch the killer of the current case in the shortest short time possible.',
      price: 6000,
      MSRP: 6000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/dK9h9FzFFmfMoMA3kbdryyynnt0=/fit-in/246x300/pic4317519.jpg'
    }),
    Products.create({
      title: 'Near and Far',
      type: 'Family',
      description:
        "In Near and Far, you and up to three friends explore many different maps in a search for the Last Ruin, recruiting adventurers, hunting for treasure, and competing to be the most storied traveler. You must collect food and equipment at town for long journeys to mysterious locales, making sure not to forget enough weapons to fight off bandits, living statues, and rusty robots! Sometimes in your travels you'll run into something unique and one of your friends will read what happens to you from a book of stories, giving you a choice of how to react, creating a new and memorable tale each time you play.",
      price: 5000,
      MSRP: 5500,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/ll_MMuOyv3o5XR0bTu-LbGuop5Q=/fit-in/246x300/pic3605785.jpg'
    }),
    Products.create({
      title: 'Deception',
      type: 'Party',
      description:
        "Deception: Murder in Hong Kong is a game of deduction and deception for 4-12 players that plays in about 20 minutes. In the game, players take on the roles of investigators attempting to solve a murder case – but there's a twist. The killer is one of the investigators! Each players role and team are randomly assigned at the start of play and include the unique roles of Forensic Scientist, Witness, Investigator, Murderer, and Accomplice. While the Investigators attempt to deduce the truth, the murderers team must deceive and mislead. This is a battle of wits!",
      price: 4500,
      MSRP: 5000,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/uLpjgYnNCcZ0uKIYXOvsaoN_ppU=/fit-in/246x300/pic3033330.jpg'
    }),
    Products.create({
      title: 'Dixit',
      type: 'Family',
      description:
        "One player is the storyteller for the turn and looks at the images on the 6 cards in her hand. From one of these, she makes up a sentence and says it out loud (without showing the card to the other players). Each other player selects the card in their hands which best matches the sentence and gives the selected card to the storyteller, without showing it to the others. The storyteller shuffles her card with all the received cards. All pictures are shown face up and every player has to bet upon which picture was the storyteller's.",
      price: 2500,
      MSRP: 2750,
      imageUrl:
        'https://cf.geekdo-images.com/itemrep/img/pOiJxM-COUIpG4Rsb4vGdHH4894=/fit-in/246x300/pic3483909.jpg'
    })
  ])
  console.log(`seeded ${products.length} products`)

  const order = await Promise.all([
    Order.create({
      userId: 1,
      sessionId: '239842389982498238332482387423',
      payment: 'Paypal',
      address: '177a Bleecker Street',
      cost: 289904,
      purchased: true
    }),
    Order.create({
      userId: 2,
      sessionId: '982349032840932843454379850',
      payment: 'Credit Card',
      address: '177b Bleecker Street',
      cost: 24608,
      purchased: false
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
