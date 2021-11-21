// build your `Resource` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getResources access Function
function getResources() {
    return db('resources');
}

async function getResourceById(id) {
    const foundResource = await db('resources').where({ "resource_id": id }).first()

    return foundResource;
}



//postResources access Function
async function addResource(newResource) {
    const [newResourceId] = await db('resources').insert(newResource)
    return getResourceById(newResourceId)
}




module.exports = {
    getResources, addResource, getResourceById
}