// build your `Project` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getProjects access Function
function getProjects() {
    return Promise.resolve('awesome projects')
}



//postProjects access Function
function addProject() {
    console.log('Project ADDED')
}




module.exports = {
    getProjects, addProject
}