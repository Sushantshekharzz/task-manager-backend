var express = require('express')
var app = express();
var authentication = require('../middleware/authentication')
var taskController = require('../controller/task.controller')
var roleAuthorization = require('../middleware/rolemiddleware')
console.log("Entering in this route")

app.post("/", authentication, roleAuthorization('Admin'), taskController.postTask)

app.get("/", authentication,roleAuthorization('Admin','User'),  taskController.getTask);




app.get("/:id", authentication, roleAuthorization('Admin'), taskController.getTaskById);

app.put("/:id", authentication, roleAuthorization('Admin','User'), taskController.updateTask);



app.delete("/:id", authentication,roleAuthorization("Admin"), taskController.deleteTask);

module.exports = app