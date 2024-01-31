const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ini8labs-task'
});

con.connect((err) => {
    if (err) {
        console.log('Error!---',err);
    }
    else {
        console.log('Connected!');
    }
});

module.exports = con;