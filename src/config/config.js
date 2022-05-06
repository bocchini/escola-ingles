const dotenv = require('dotenv/config.js');

module.exports = {
  "development": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE + "development",
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE + "_test",
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": process.env.DIALECT
  }
}
