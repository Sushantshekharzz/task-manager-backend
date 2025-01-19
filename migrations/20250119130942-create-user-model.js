'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the users table
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Generates a new UUID for each user
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passWord: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adminId: {
        type: Sequelize.UUID,
        allowNull: true, // Optional field, can be null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, // Automatically set to the current date and time when created
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, // Automatically set to the current date and time when created
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the users table if needed
    await queryInterface.dropTable('users');
  }
};
