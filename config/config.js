require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host":process.env.HOST,
    "port": process.env.DB_PORT || 5432,
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Enable SSL
        rejectUnauthorized: false, // Accept unauthorized certificates (use with caution in production)
      }
    }
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
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Enable SSL
        rejectUnauthorized: false, // Accept unauthorized certificates (use with caution in production)
      }
    }
  }
}
