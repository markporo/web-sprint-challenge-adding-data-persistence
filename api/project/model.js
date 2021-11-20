// build your `Project` model here

// CONFIGURE DB
//const db = require('../../data/dbConfig')



//getProjects access FUnction
function getProjects() {
    console.log('Projects GOTTEN')
    return ['project1, project2']
}



//postProjects access Function
function addProject() {
    console.log('Project ADDED')
}




module.exports = {
    getProjects, addProject
}