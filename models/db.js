// db.js : DBCP 환경 설정

var mysql = require('mysql');
var pool = mysql.createPool({
        connectionLimit : 10,
        host : 'localhost',
        user : 'root',
        password : 'cst001002',
        database : 'library'
    });

module.exports.pool = pool;
