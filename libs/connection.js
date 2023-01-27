const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '52.20.16.17',
  user: 'movistarmysql',
  password: 'MovSoft2018',
  database: 'EXAMEN'
});

module.exports = connection