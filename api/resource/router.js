// build your `/api/resources` router here

//INSTANTIATE THE ROUTER METHOD ON THE EXPRESS SERVER
const express = require('express')
const router = express.Router()

//MIDDLEWARE NOT NEEDED FOR THIS SPRINT
//const { checkID } = require('./resources-middleware')

// PULL IN THE PROJECT HELPER FUNCTIONS
const resourcesModel = require('./model')

//ENDPOINTS
//GET
router.get('/', (req, res) => {
    // resourceModel
    //     .getResources()
    //     .then(resources => {
    //         res.status(200).json(resources)
    //     })
    //     .catch(() => {
    //         res.status(500).json({ message: "The resources could not be retrieved by Database." })
    //     })
})

//POST
router.post('/', (req, res) => {
    // resourcesModel
    //     .create(
    //         {

    //         }
    //     )
    //     .then((data) => {
    //         res.status(201).json(data);
    //     })
    //     .catch(() => {
    //         res.status(500).json({ message: "There was an error while saving the resource to the database" })
    //     })
})

module.exports = router;
