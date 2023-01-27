const {createPool} = require('mysql2')

const pool = createPool({
  host: '52.20.16.17',
  user: 'movistarmysql',
  password: 'MovSoft2018',
  database: 'EXAMEN',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool