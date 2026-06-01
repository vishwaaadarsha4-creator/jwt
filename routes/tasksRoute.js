const { getAllTasks, getCreateTask } = require("../controller/tasksController");

const router = require("express").Router();

router.route("/alltasks").get(getAllTasks);
router.route("/createtask").get(getCreateTask);


module.exports = router;