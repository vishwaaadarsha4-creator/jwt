const { getAllTasks, getCreateTask, postCreateTask } = require("../controller/tasksController");

const router = require("express").Router();

router.route("/alltasks").get(getAllTasks);
router.route("/createtask").get(getCreateTask).post(postCreateTask);


module.exports = router;