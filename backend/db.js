const { Client } = require('pg')
require('dotenv').config()

let client 

const getClient = async () => {
    if (!client){
    client = new Client({connectionString: process.env.DBDRAGONS})
    await client.connect()} 
    return client
}


module.exports = getClient