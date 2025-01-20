// migrations/<timestamp>-create-task.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('tasks', {
          id: {
              type: Sequelize.UUID,
              defaultValue: Sequelize.UUIDV4,
              primaryKey: true,
          },
          title: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: false,
          },
          priority: {
              type: Sequelize.ENUM('High', 'Medium', 'Low'),
              allowNull: false,
              defaultValue: 'Medium',
          },
          status: {
              type: Sequelize.ENUM('Todo', 'In Progress', 'Completed'),
              allowNull: false,
              defaultValue: 'Todo',
          },
          assignedUsers: {
              type: Sequelize.JSONB, // Storing multiple users, can be changed to UUID array if required.
              allowNull: false,
          },
          dueDate: {
              type: Sequelize.DATE,
              allowNull: false,
          },
          createdAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW,
          },
          updatedAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW,
          },
          adminId: {
              type: Sequelize.UUID,
              allowNull: false,
          },
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('tasks');
  },
};
