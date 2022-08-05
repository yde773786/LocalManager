const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

async function connectDb() {
    const client = new MongoClient(url);
    return client.connect();
}

module.exports = { connectDb };
