const { getAllTasks, getCreateTask, postCreateTask, deleteTask, getEditTask, postEditTask } = require("../controller/tasksController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router();

router.route("/alltasks").get(isAuthenticated, getAllTasks);
router.route("/createtask").get(isAuthenticated, getCreateTask).post(isAuthenticated, postCreateTask);
router.route("/delete/:id").get(isAuthenticated, deleteTask);
router.route("/edittask/:id").get(isAuthenticated, getEditTask).post(isAuthenticated, postEditTask);

module.exports = router;