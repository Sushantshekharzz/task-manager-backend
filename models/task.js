// models/task.js
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        priority: {
            type: DataTypes.ENUM('High', 'Medium', 'Low'),
            allowNull: false,
            defaultValue: 'Medium',
        },
        status: {
            type: DataTypes.ENUM('Todo', 'In Progress', 'Completed'),
            allowNull: false,
            defaultValue: 'Todo',
        },
        assignedUsers: {
            type: DataTypes.JSONB, // To store multiple users, can be changed to INTEGER or UUID[] depending on your requirements.
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        adminId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    }, {
        tableName: 'tasks', // If you prefer, you can specify the name of the table here.
        timestamps: true, // this will automatically add `createdAt` and `updatedAt`
    });

    return Task;
};
