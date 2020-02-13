const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var tasksController = require('./constrollers/tasksController.js')

var app = express();
app.use(bodyParser.json());

app.use('/tasks', tasksController);

app.listen(8000, () => console.log('Server started at port: 8000'));