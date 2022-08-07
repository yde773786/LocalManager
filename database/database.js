const { MongoClient, ServerApiVersion} = require("mongodb");

let mongoos;

const url = "mongodb+srv://crud:password@crud.lslvjjf.mongodb.net/?retryWrites=true&w=majority";

async function connectDb() {
    const client = new MongoClient(url,
        { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client
        .connect()
        .then((db) => {
            mongoos = db;
            return Promise.resolve();
        })
        .catch(() => {
            return Promise.reject();
        });
}

function getDb() {
    return mongoos;
}

module.exports = { connectDb, getDb };
