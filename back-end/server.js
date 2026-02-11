require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/routers/auth_router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("server started at 5000");
});
