'use strict';
const {
  Model, Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Generates a new UUID for each user
      primaryKey: true, // Set it as the primary key
      allowNull: false
    },
    userName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    role: DataTypes.STRING,
    adminId: {
      type: DataTypes.UUID,
      allowNull: true 
    }
  }, {
    sequelize,
    modelName: 'user',
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt'  
  });
  return user;
};