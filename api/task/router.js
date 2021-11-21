// build your `/api/tasks` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
const { taskBodyCheck } = require('./tasks-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const tasksModel = require('./model')

//ENDPOINTS
//GET
router.get('/', (req, res) => {
    tasksModel
        .getTasks()
        .then(tasks => {
            const newTasksBoolean = tasks.map(t => ({ ...t, 'task_completed': !!t.task_completed }))
            res.status(200).json(newTasksBoolean)
        })
        .catch(() => {
            res.status(500).json({ message: "The tasks could not be retrieved by Database." })
        })
})

//GET BY ID TASK
router.get('/:id', (req, res) => {
    tasksModel
        .getTaskById(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(() => {
            res.status(500).json({ message: "The Task could not be retrieved by the DB" })
        })
})

//POST
router.post('/', taskBodyCheck, (req, res) => {
    tasksModel
        .addTask(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(500).json({ message: "There was an error while saving the project to the database" })
        })
})

module.exports = router;

// ✕ [12] each task contains the project_name and the project_description (46 ms)
// [POST] /api/tasks
//   ✓ [13] can add a new task to the db (53 ms)
//   ✓ [14] responds with the newly created task with the task_completed as a boolean (35 ms)
//   ✕ [15] rejects a task lacking a task_description with an error status code (34 ms)
//   ✓ [16] rejects a task lacking a project_id with an error status code (46 ms)
//   ✓ [17] rejects a task containing an invalid project_id with an error status code (55 ms)