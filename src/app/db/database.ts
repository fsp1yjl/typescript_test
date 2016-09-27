

const mysql = require('mysql');



let pool = mysql.createPool({
    connectionLimit:10,
})