//getting mysql
const mysql = require("mysql2");

var mySqlConnection = mysql.createConnection({
  // host: "192.168.56.1",
  host:"localhost",
  user: "root",
  password: "root",
  database: "webTech",
  port:3306
});

mySqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to DB");
  }
});

module.exports=mySqlConnection;