const { Pool } = require("pg");

const pool = new Pool({
  database: "db_two",
  user: "admin",
  password: "admin123",
  host: "localhost",
});

async function TestConnection() {
  try {
    const client = await pool.connect();
    client.release();
    console.log("Connect Successfully");
  } catch (error) {
    console.error("Failed to Connect", error);
  }
}

TestConnection();
module.exports = pool;
