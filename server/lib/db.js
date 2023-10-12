let mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '!Qortmdcks95',
    database: 'CHEMISTRY'
});

db.connect();

module.exports = db;