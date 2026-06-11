const { getRegister, getLogin, postRegister, postLogin, Logout, forgotPassword, sendOtp } = require("../controller/authController");

const router = require("express").Router();


router.route("/register").get(getRegister).post(postRegister);
router.route("/login").get(getLogin).post(postLogin);
router.route("/logout").get(Logout);
router.route("/forgotPassword").get(forgotPassword).post(sendOtp);


module.exports = router;