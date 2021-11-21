module.exports = { taskBodyCheck }

const projectsModel = require('../project/model')

async function taskBodyCheck(req, res, next) {
    //const projects = await projectsModel.getProjects()
    const projectId = await projectsModel.getProjectByID(req.body.project_id)

    console.log(projectId, 'projectID')
    console.log(req.body.project_id, 'req.body.project_id')

    // error handling 
    //if (!fullSchemes.length) return null

    if (!req.body.task_description) {
        res.status(400).json({ message: "missing task_description" })
        // } else if (req.body.project_id > 0 || req.body.project_id > (projects.length - 1) || req.body.project_id === '' || req.body.project_id === null || !req.body.project_id) {
        //     res.status(400).json({ message: 'missing project_id' })
    } else if (!projectId || typeof req.body.project_id !== 'number' || projectId === null) {
        res.status(400).json({ message: "invalid or missing project_id" })
    } else {
        next()
    }
}







// ✕ [12] each task contains the project_name and the project_description (55 ms)
// [POST] /api/tasks
//   ✓ [13] can add a new task to the db (66 ms)
//   ✓ [14] responds with the newly created task with the task_completed as a boolean (48 ms)
//   ✓ [15] rejects a task lacking a task_description with an error status code (36 ms)
//   ✕ [16] rejects a task lacking a project_id with an error status code (785 ms)
//   ✕ [17] rejects a task containing an invalid project_id with an error status code (796 ms)

