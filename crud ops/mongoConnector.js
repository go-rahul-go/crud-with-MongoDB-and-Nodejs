const { MongoClient } = require("mongodb");


const url ="mongodb://127.0.0.1:27017";
const client = new MongoClient(url)

async function dbConnect(){
    let result = await client.connect()
    let database = result.db("students");

    return database.collection("batch19");
}

module.exports = dbConnect;