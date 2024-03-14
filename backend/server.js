const express = require('express')
const questsRouter = require('./quests')
const app = express()
const cors = require('cors')
const port = 3000
const createTables = require('./createTables')
const playersRouter = require('./players')

app.use(cors())
app.use("/", questsRouter)
app.use('/', playersRouter)

app.listen(port, async () => {
    await createTables()
    console.log(`Listening to port ${port} http://localhost:${port}`)
})

