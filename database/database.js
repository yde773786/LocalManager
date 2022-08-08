const { MongoClient, ServerApiVersion} = require("mongodb");

let mongoose;

const url = "mongodb+srv://crud:y7TAts5GZb63Szq@crud.lslvjjf.mongodb.net/?retryWrites=true&w=majority";

async function connectDb() {

    const client = new MongoClient(url,
        { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client
        .connect()
        .then((db) => {
            mongoose = db;
            return Promise.resolve();
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}

function getDb() {
    return mongoose;
}

module.exports = { connectDb, getDb };
