//{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

const tasks = [
    { task_description: 'Doing HomeWork', task_notes: 'Migrations, Database, ', task_completed: 0, project_id: 1 },
    { task_description: 'record the liners with your voice', task_notes: 'read the instruction in the email', task_completed: 0, project_id: 2 },
    { task_description: 'Open Logic file and make it happen', task_notes: 'check texts and emails from reach and Nate', task_completed: 0, project_id: 3 },
    { task_description: 'Balance the mix and edit it better than Jim did', task_notes: null, task_completed: 0, project_id: 4 },
]

exports.tasks = tasks

exports.seed = function (knex) {
    return knex('tasks').insert(tasks)
}

