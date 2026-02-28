require("dotenv").config();
const express = require("express");
const cors = require("cors");
const route = require("./src/route/auth_route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", route);
app.listen(5000, () => {
  console.log("Server started at 5000");
});
