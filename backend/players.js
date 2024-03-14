const express = require('express')
const router = express.Router()
const getClient = require('./db')

router.use(express.json());

  
// get/players
router.get('/players', async (req, res) => {
    const client = await getClient()
    let result = await client.query("select nickname, class, level as lvl, health, attack, defense, strength, intelligence, charisma, dexterity from players;")
    return res.json(result.rows)
  })

module.exports = router