const { getStarted } = require("../controller/getStartedController");

const router = require("express").Router();


router.route("/getstarted").get(getStarted);

module.exports = router;