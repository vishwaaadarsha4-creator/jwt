const { home } = require("../controller/homeController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router();

router.route("/").get(home);


module.exports = router;