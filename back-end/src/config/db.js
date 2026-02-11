const { Pool } = require("pg");

const pool = new Pool({
  database: "authentication_db",
  user: "admin",
  password: "admin123",
  host: "localhost",
  port: 5432,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to database");
    client.release();
  } catch (error) {
    console.error("Failed to connect", error);
  }
}

testConnection();
module.exports = pool;
