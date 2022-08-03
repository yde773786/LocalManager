const {Client} = require('pg');

let client = new Client({
    host: "database-1.c4ischo3xubd.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "password1234",
    database: "database-1",
});

let connectDatabase = async () => {
    await client.connect();
    return client;
}

let run_query = async (query, params) => {
    return client.query(query, params);
}

module.exports = {connectDatabase, run_query};