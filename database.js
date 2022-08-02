const { Client } = require("pg");

async function connect() {
    const client = new Client({
        host: "database-1.c4ischo3xubd.us-east-1.rds.amazonaws.com",
        user: "postgres",
        port: 5432,
        password: "password1234",
        database: "database-1",
    });

    await client.connect();
    return client;
}

module.exports = connect;
