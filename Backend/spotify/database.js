const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "Deltax",
});

module.exports = connection;
