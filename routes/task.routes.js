var express = require('express')
var app = express();
var authentication = require('../middleware/authentication')
var taskController = require('../controller/task.controller')


app.post("/", authentication, taskController.postTask)

app.get("/", authentication, taskController.getTask);




app.get("/:id", authentication, taskController.getTaskById);

app.put("/:id", authentication, taskController.updateTask);



app.delete("/:id", authentication, taskController.deleteTask);

module.exports = app