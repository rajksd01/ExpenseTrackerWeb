const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "rajksd01",
    password: "raj6007",
    database: "expenseTracker",
    host: "127.0.0.1",
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
