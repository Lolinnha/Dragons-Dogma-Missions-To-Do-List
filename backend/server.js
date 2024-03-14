const express = require('express')
const questsRouter = require('./quests')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use("/", questsRouter)


app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Listening to port ${port} http://localhost:${port}`)
})