const {Client} = require('pg');

let client = new Client({
    host: "localhost",
    user: "crud",
    port: 5432,
    password: "password",
    database: "db",
});

let connectDatabase = async () => {
    await client.connect();
    return client;
}

let run_query = async (query, params) => {
    return client.query(query, params);
}

module.exports = {connectDatabase, run_query};