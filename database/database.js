const { MongoClient, ServerApiVersion} = require("mongodb");

let mongoose;
let current = {user: undefined}

const url = '<Database link goes here>'

async function connectDb() {

    const client = new MongoClient(url,
        {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

    try{
        db = await client.connect()
        mongoose = db;

        return Promise.resolve();
    }
    catch (err){
        console.log(err)
        return Promise.reject(err);
    }

}

function getDb() {
    return mongoose;
}

module.exports = { connectDb, getDb, current};
