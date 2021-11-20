// build your server here and require it from index.js

// REQUIRE NPM PACKAGES
const express = require('express')
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// BRING IN THE ROUTER ENDPOINTS
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

// INSTANTIATE EXPRESS AS A SERVER
const server = express();

//MIDDLEWARE PARSE THAT JSON
server.use(express.json());

//OTHER 3RD PARTY MIDDLEWARE
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

//ROUTERS
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

//HOME PAGE_ISH
server.get('/', (req, res) => {
    res.send('HEY EVERYBODY WELCOME TO THIS API.  TIME TO SPRINT!');
})

//CATCH ALL OTHER ENDPOINTS
server.use('*', (req, res) => {
    res.json({ message: "API IS RUNNING, BUT THIS ENDPOINT IS NOT QUITE RIGHT" })
});

//EXPORT THIS SERVER
module.exports = server;