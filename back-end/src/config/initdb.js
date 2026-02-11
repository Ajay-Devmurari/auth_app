const db = require("./db");

async function initDB() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table created..");
  } catch (error) {
    console.error(`Failed to create table${error}`);
  }
}
initDB();