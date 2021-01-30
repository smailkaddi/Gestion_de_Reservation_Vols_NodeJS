const mysql = require('mysql');

// database connection 
const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flight_booking',
    debug: false,
    multipleStatements: true
  });
  
  // connect to database
  database.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected!!!');
  });
  

  module.exports = database;