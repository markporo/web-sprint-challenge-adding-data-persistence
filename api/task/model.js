// build your `Task` model here

// CONFIGURE DB
const db = require('../../data/dbConfig')



//getTasks access Function
function getTasks() {
    return Promise.resolve('These are awesome Tasks')
}



//postTasks access Function
function addTask() {

}




module.exports = {
    getTasks, addTask
}
