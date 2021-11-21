// build your `/api/projects` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
//const { checkID } = require('./project-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const projectsModel = require('./model')

//ENDPOINTS

//GET
router.get('/', (req, res) => {
    projectsModel
        .getProjects()
        .then(projects => {
            const newProjects = projects.map(each => {
                return {
                    "project_id": each.project_id,
                    "project_name": each.project_name,
                    "project_description": each.project_description,
                    "project_completed": !!each.project_completed
                }
            })
            res.status(200).json(newProjects)
        })
        .catch(() => {
            res.status(500).json({ message: "The projects could not be retrieved by Database." })
        })
})

//POST
router.post('/', (req, res) => {
    projectsModel
        .addProject(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(500).json({ message: "There was an error while saving the project to the database" })
        })
})

//get BY ID
router.get('/:id', async (req, res) => {
    try {
        const foundProject = await projectsModel.getProjectByID(req.params.id)
        console.log(foundProject, "found ProjefoundProject getbyid")
        if (!foundProject) {
            res.status(404).json({ message: `Project with id ${req.params.id} is not found` })
        }
        if (foundProject) {
            const foundProjectBoolean = {
                "project_id": foundProject.project_id,
                "project_name": foundProject.project_name,
                "project_description": foundProject.project_description,
                "project_completed": !!foundProject.project_completed
            }
            res.status(200).json(foundProjectBoolean)
        }
    } catch {
        res.status(500).json({ message: "The Project with that Id could not be found." })
    }
})

module.exports = router;



