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
    const [foundTask] = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', '=', 'p.project_id')
        .where({ "task_id": id })
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description') //'t.project_id'


    return { ...foundTask, task_completed: !!foundTask.task_completed }

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
