const {createPool} = require('mysql2')
const {config} = require('../config/config')

const HOST = encodeURIComponent(config.dbHost);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DATABASE = encodeURIComponent(config.dbName);


const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool