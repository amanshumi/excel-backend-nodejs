const express = require("express");
const { createTask, getTasks, updateTasks, deleteTask } = require("../controller/tasklist");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:uuid", updateTasks);
router.delete("/:uuid", deleteTask);

module.exports = router;