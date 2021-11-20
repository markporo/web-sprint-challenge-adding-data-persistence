// build your `/api/tasks` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
//const { checkID } = require('./tasks-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const tasksModel = require('./model')

//ENDPOINTS
//GET
router.get('/', (req, res) => {
    tasksModel
        .getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(() => {
            res.status(500).json({ message: "The tasks could not be retrieved by Database." })
        })
})

//POST
router.post('/', (req, res) => {
    // tasksModel
    //     .addTask(
    //         {

    //         }
    //     )
    //     .then((data) => {
    //         res.status(201).json(data);
    //     })
    //     .catch(() => {
    //         res.status(500).json({ message: "There was an error while saving the project to the database" })
    //     })
})

module.exports = router;
