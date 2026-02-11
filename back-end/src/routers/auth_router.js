const exrpess = require("express");
const router = exrpess.Router();
const { signup, login } = require("../controllers/auth_controller");
router.post("/signup", signup);
router.post("/login", login);


module.exports = router;
