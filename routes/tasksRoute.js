const { getAllTasks, getCreateTask, postCreateTask, deleteTask } = require("../controller/tasksController");

const router = require("express").Router();

router.route("/alltasks").get(getAllTasks);
router.route("/createtask").get(getCreateTask).post(postCreateTask);
router.route("/delete/:id").get(deleteTask);

module.exports = router;