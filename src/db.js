/** @format */

const mysql = require("mysql");

console.log("acessou db");

const env = process.env;

const connection = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`conectado ao banco de dados ${env.DB_NAME}`);
});

module.exports = connection;
