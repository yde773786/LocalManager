const { MongoClient } = require("mongodb");

let mongoos;

const url = "mongodb://127.0.0.1:27017";

async function connectDb() {
    const client = new MongoClient(url);
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
