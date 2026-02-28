const db = require("./db");

async function InitDB() {
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS auth_user(id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      console.log("Table Created"),
    );
  } catch (error) {
    console.error("Failed to Create Table");
  }
}

InitDB();
