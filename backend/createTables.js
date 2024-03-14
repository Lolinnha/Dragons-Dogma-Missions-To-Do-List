const getClient = require('./db')

const questsTable = "CREATE TABLE IF NOT EXISTS quests (id SERIAL PRIMARY KEY, title VARCHAR (50) NOT NULL, mainQuest BOOLEAN not NULL,status VARCHAR (10) NOT NULL)";
const playersTable = "CREATE TABLE IF NOT EXISTS players (id SERIAL PRIMARY KEY, nickname VARCHAR (50) NOT NULL, class VARCHAR (20) NOT NULL,level INTEGER NOT NULL,health INTEGER NOT NULL,attack INTEGER NOT NULL, defense INTEGER NOT NULL,strength INTEGER NOT NULL,intelligence INTEGER NOT NULL, charisma INTEGER NOT NULL,dexterity INTEGER NOT NULL);"

const createTables = async () => {
const dbClient = await getClient()
await dbClient.query(questsTable)
await dbClient.query(playersTable)

}

module.exports = createTables