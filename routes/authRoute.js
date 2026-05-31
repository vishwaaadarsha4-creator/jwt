const { getRegister, getLogin, postRegister, postLogin } = require("../controller/authController");

const router = require("express").Router();


router.route("/register").get(getRegister).post(postRegister);
router.route("/login").get(getLogin).post(postLogin);


module.exports = router;