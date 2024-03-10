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