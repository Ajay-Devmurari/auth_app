

const db = require("../config/db");
const bcrypt = require("bcrypt");
const { sign } = require("../config/jwt");

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Check if user exists using .length
    const userCheck = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );

    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Added await here
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("INSERT INTO users(username, password) VALUES($1, $2)", [
      username,
      hashedPassword,
    ]);

    return res.status(201).json({ message: "Signup successfully" });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "User already exists" });
    }
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (typeof username !== "string" || typeof password !== "string") {
      return res.status(400).json({ message: "Invalid input type" });
    }

    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];

    // bcrypt.compare is correctly awaited!
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    delete user.password

    return res.json({
      message: "Login successfully",
      user,
      token: sign(user.id, user.username)
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { signup, login };
