const { getAllTasks } = require("../controller/tasksController");

const router = require("express").Router();

router.route("/alltasks").get(getAllTasks);


module.exports = router;