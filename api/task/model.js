// build your `Task` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getTasks access Function
async function getTasks() {
    const tasksAndMore = db('tasks as t')
        .leftJoin('projects as p', 't.project_id', '=', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description') //'t.project_id'

    return tasksAndMore
}

// get task by id
async function getTaskById(id) {
    const foundTask = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', '=', 'p.project_id')
        .where({ "task_id": id })
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description') //'t.project_id'

    const newTask = {
        "task_id": foundTask[0].task_id,
        "task_description": foundTask[0].task_description,
        "task_notes": foundTask[0].task_notes,
        "task_completed": !!foundTask[0].task_completed,
        "project_name": foundTask[0].project_name,
        "project_description": foundTask[0].project_description
    }

    return newTask
}



//postTasks access Function
async function addTask(task) {
    const [newTaskId] = await db('tasks').insert(task)
    // return getTaskById(newTaskId)
    return getTaskById(newTaskId)
}




module.exports = {
    getTasks, addTask, getTaskById
}
