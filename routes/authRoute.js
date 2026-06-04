const { getRegister, getLogin, postRegister, postLogin, Logout } = require("../controller/authController");

const router = require("express").Router();


router.route("/register").get(getRegister).post(postRegister);
router.route("/login").get(getLogin).post(postLogin);
router.route("/logout").get(Logout);


module.exports = router;