require('dotenv').config();

console.log("process.env.DB_USER",process.env.DB_USER)
console.log("process.env.PASSWORD",process.env.PASSWORD)
console.log("process.env.DB",process.env.DB)
console.log("process.env.HOST",process.env.HOST)
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host":process.env.HOST,
    "port": process.env.DB_PORT || 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
  "port": process.env.DB_PORT || 5432,
    "dialect": "postgres"
  }
}
