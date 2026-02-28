const db = require("../config/db");
const bcrypt = require("bcrypt");
const { sign } = require("../config/jwt");
async function signup(req, res) {
  try {
    const { username, email, password } = req.body;

    // Basic condition
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Fill empty filed" });
    }

    // Check user is already exists or not
    const checkUser = await db.query(
      "SELECT * FROM auth_user WHERE email = $1",
      [email],
    );

    if (checkUser.rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    // add user
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      "INSERT INTO auth_user(username,email,password)VALUES($1,$2,$3)",
      [username, email, hashedPassword],
    );
    return res.status(201).json({ message: "User Register Successfully" });
  } catch (error) {
    // if any error
    console.log("Signup Error", error);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill empty filed" });
    }

    const result = await db.query("SELECT * FROM auth_user WHERE email = $1", [
      email,
    ]);

    if (result.rows.length == 0) {
      return res.status(401).json({ message: "Invalid Credintials" });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credintials" });
    }

    delete user.password;

    return res.json({
      message: "Login Successfully",
      token: sign(user.id, user.username),
      user,
    });
  } catch (error) {
    console.log("Login Error", error);
    return res.status(500).json({ message: "Server Error" });
  }
}
module.exports = {
  signup,
  login,
};
