// build your `Project` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getProjects access Function
function getProjects() {
    return db('projects')
}

async function getProjectByID(id) {
    const foundProject = await db('projects').where({ "project_id": id }).first()

    // const newFoundProject = {
    //     "project_id": foundProject[0].project_id,
    //     "project_name": foundProject[0].project_name,
    //     "project_description": foundProject[0].project_description,
    //     "project_completed": !!foundProject[0].project_completed
    // }
    console.log(foundProject, 'foundproject');
    // return newFoundProject;

    return { ...foundProject, project_completed: !!foundProject.project_completed }
}

//postProjects access Function
async function addProject(project) {
    const [project_id] = await db('projects').insert(project)

    return getProjectByID(project_id);
}






module.exports = {
    getProjects, addProject, getProjectByID
}