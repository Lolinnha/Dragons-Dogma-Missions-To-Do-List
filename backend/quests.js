const express = require('express')
const router = express.Router()

router.use(express.json());


let mockQuests = [
    {
      id: 1,
      title: "The Opened Heart",
      status: "to do",
      mainQuest: true
    },
    {
      id: 2,
      title: "The Beast on the Barge",
      status: "doing",
      mainQuest: false
    },
    {
      id: 3,
      title: "The Fall of Gran Soren",
      status: "done",
      mainQuest: true
    },
    {
      id: 4,
      title: "The Black Dragon",
      status: "to do",
      mainQuest: true
    },
    {
      id: 5,
      title: "The Knights of Creation",
      status: "doing",
      mainQuest: false
    }
  ];

   const mockPlayers = [
      {
        "nickname": "ShadowBlade",
        "class": "Rogue",
        "lvl": 30,
        "health": 250,
        "attack": 80,
        "defense": 40,
        "strength": 60,
        "intelligence": 50,
        "charisma": 30,
        "dexterity": 90
      },
      {
        "nickname": "Stormcaster",
        "class": "Wizard",
        "lvl": 25,
        "health": 180,
        "attack": 70,
        "defense": 30,
        "strength": 40,
        "intelligence": 90,
        "charisma": 50,
        "dexterity": 60
      },
      {
        "nickname": "Ironclad",
        "class": "Knight",
        "lvl": 35,
        "health": 350,
        "attack": 60,
        "defense": 90,
        "strength": 80,
        "intelligence": 40,
        "charisma": 50,
        "dexterity": 50
      },
      {
        "nickname": "Swiftshadow",
        "class": "Assassin",
        "lvl": 28,
        "health": 200,
        "attack": 85,
        "defense": 35,
        "strength": 50,
        "intelligence": 40,
        "charisma": 40,
        "dexterity": 90
      },
      {
        "nickname": "Flameheart",
        "class": "Mage",
        "lvl": 22,
        "health": 160,
        "attack": 75,
        "defense": 25,
        "strength": 30,
        "intelligence": 85,
        "charisma": 60,
        "dexterity": 50
      },
      {
        "nickname": "Thunderclap",
        "class": "Barbarian",
        "lvl": 32,
        "health": 300,
        "attack": 90,
        "defense": 50,
        "strength": 95,
        "intelligence": 20,
        "charisma": 30,
        "dexterity": 40
      },
      {
        "nickname": "Nightshade",
        "class": "Ranger",
        "lvl": 27,
        "health": 220,
        "attack": 80,
        "defense": 45,
        "strength": 65,
        "intelligence": 50,
        "charisma": 50,
        "dexterity": 80
      },
      {
        "nickname": "Frostbite",
        "class": "Sorcerer",
        "lvl": 23,
        "health": 170,
        "attack": 80,
        "defense": 30,
        "strength": 35,
        "intelligence": 85,
        "charisma": 55,
        "dexterity": 60
      },
      {
        "nickname": "Steelwind",
        "class": "Paladin",
        "lvl": 29,
        "health": 280,
        "attack": 70,
        "defense": 80,
        "strength": 75,
        "intelligence": 45,
        "charisma": 70,
        "dexterity": 45
      },
      {
        "nickname": "Shadowfang",
        "class": "Ninja",
        "lvl": 31,
        "health": 240,
        "attack": 95,
        "defense": 40,
        "strength": 60,
        "intelligence": 40,
        "charisma": 40,
        "dexterity": 95
      }
    ];
    

// get/players
router.get('/players', (req, res) => {
  res.json(mockPlayers)
})

// get /quests
router.get('/quests', (req, res) => {
    res.json(mockQuests)
})

// get/quest/id
router.get('/quest/:id', (req, res) => {
    const id = req.params.id
    const quest = mockQuests.filter(q => q.id == id)[0]

    res.json(quest)
})

// put/quests/id
router.put('/quest/:id', (req, res) => {
    const id = req.params.id
    mockQuests.forEach(q => {
        if (q.id == id) {
            q.status = req.body.status
        }
    })
    const quest = mockQuests.filter(q => q.id == id)[0]

    res.json(quest)
})

// delete/quest/id
router.delete('/quest/:id', (req, res) => {
    const id = req.params.id
    mockQuests = mockQuests.filter(q => q.id != id)

    res.json({})
})

// post/quests
router.post('/quests', (req, res) => {

    const newQuest = req.body 
    const id = mockQuests.length+1
    mockQuests.push({...newQuest, id})

    res.json({id})
})

module.exports = router