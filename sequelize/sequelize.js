const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   process.env.DB,      // database
  process.env.DB_USER,      // username
  process.env.PASSWORD,      // password
  {
    host: process.env.HOST,
    dialect: "postgres",    // change to "mysql" | "sqlite" | "mariadb" | "mssql"
    logging: false,
  }
);

module.exports = sequelize;