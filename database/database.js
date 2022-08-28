const { MongoClient, ServerApiVersion} = require("mongodb");

let mongoose;

const url = 'mongodb+srv://crud:zjz1lNPmAkEWEKI3@crud.lslvjjf.mongodb.net/?retryWrites=true&w=majority'

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

module.exports = { connectDb, getDb };
