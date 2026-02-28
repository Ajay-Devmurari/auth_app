const jwt = require("jsonwebtoken");

exports.sign = (id, username) => {
  try {
    const token = jwt.sign(
      {
        id,
        username,
      },
      process.env.SECRET,
      {
        expiresIn: "1h",
      },
    );
    return token;
  } catch (error) {
    console.error(error);
  }
};
