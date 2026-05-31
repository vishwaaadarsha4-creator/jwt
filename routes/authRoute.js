const { getRegister, getLogin } = require("../controller/authController");

const router = require("express").Router();


router.route("/register").get(getRegister);
router.route("/login").get(getLogin);


module.exports = router;