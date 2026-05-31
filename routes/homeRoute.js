const { home } = require("../controller/homeController");

const router = require("express").Router();

router.route("/").get(home);


module.exports = router;