const { getRegister, getLogin, postRegister } = require("../controller/authController");

const router = require("express").Router();


router.route("/register").get(getRegister).post(postRegister);
router.route("/login").get(getLogin);


module.exports = router;