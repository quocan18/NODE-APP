var mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-app",
  password: "123456",
});
module.exports = pool.promise();
