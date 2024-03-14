const express = require('express')
const router = express.Router()
const getClient = require('./db')

router.use(express.json());


// get /quests
router.get('/quests', async (req, res) => {
  const client = await getClient()
  let result = await client.query("select id, title, mainQuest, status from quests;")
  return res.json(result.rows)
})


// put/quests/id
router.put('/quest/:id', async (req, res) => {
    const client = await getClient()
    const id = req.params.id
    await client.query("update quests set status = $1 where id = $2;", [req.body.status, id])
    return res.json({})
})

// delete/quest/id
router.delete('/quest/:id', async (req, res) => {
    const client = await getClient()
    const id = req.params.id
    await client.query("delete from quests where id = $1;", [id])
    return res.json({})
})

// post/quests
router.post('/quests', async (req, res) => {
    const client = await getClient()
    const newQuest = req.body 
    await client.query("insert into quests (title, mainQuest, status) values ($1, true, $2);", [newQuest.title, newQuest.status])
    return res.json({})
})

module.exports = router