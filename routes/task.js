var express = require('express')
var app = express();
var { Task } = require('../models/index')
var authentication = require('../middleware/authentication')
require('dotenv').config();




app.post("/tasks", authentication, async (req, res) => {
    const { title, description, priority, assignedUsers, dueDate, status } = req.body;
    const adminId = req.user.adminId;

    try {
        const response = await Task.create({ title, description, priority, assignedUsers, dueDate, status, adminId });
        return res.status(200).json({ message: "Taks Added successfully." });
    } catch (error) {
        console.error("Error during deletion:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
})

app.get("/tasks", authentication, async (req, res) => {
    const adminId = req.user.adminId;
    
    try {
        const response = await Task.findAll({ where: { adminId: adminId } });
        return res.status(200).send(response)
    } catch (error) {
        console.error("Error during deletion:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
})

module.exports = app