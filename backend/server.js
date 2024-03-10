const express = require('express')
const questsRouter = require('./quests')
const app = express()
const port = 3000

app.use("/", questsRouter)


app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Listening to port ${port} http://localhost:${port}`)
})