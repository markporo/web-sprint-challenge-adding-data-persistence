// build your `Resource` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getResources access Function
function getResources() {
    return db('resources');
}



//postResources access Function
function addResource() {

}




module.exports = {
    getResources, addResource
}