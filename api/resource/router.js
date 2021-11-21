// build your `/api/resources` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
const { checkResourceBody } = require('./resources-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const resourcesModel = require('./model')

//ENDPOINTS
//GET
router.get('/', (req, res) => {
    resourcesModel
        .getResources()
        .then(resources => {
            // const booleanResources = resources.map(r => ({...r, }))
            res.status(200).json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: "The resources could not be retrieved by Database." })
        })
})

//GET BY ID
router.get('/:id', (req, res) => {
    resourcesModel
        .getResourceById(req.params.id)
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: "The resources could not be retrieved by Database." })
        })
})

//POST
router.post('/', (req, res) => {
    resourcesModel
        .addResource(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(() => {
            res.status(500).json({ message: "There was an error while saving the resource to the database" })
        })
})

module.exports = router;
