// build your `/api/projects` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
//const { checkID } = require('./project-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const projectsModel = require('./model')

//ENDPOINTS
//  [ ] `[POST] /api/projects`

//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`

//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

//GET
router.get('/', (req, res) => {
    projectsModel
        .getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(() => {
            res.status(500).json({ message: "The projects could not be retrieved by Database." })
        })
})

//POST
router.post('/', (req, res) => {
    projectsModel
        .create(
            {
                "project_name": req.body.project_name,
                "project_description": req.body.project_description,
                "project_completed": req.body.project_completed
            }
        )
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(500).json({ message: "There was an error while saving the project to the database" })
        })
})

module.exports = router;