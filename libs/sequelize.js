const {Sequelize} = require('sequelize');
const setupModels = require('../db/models')

const sequelize = new Sequelize('EXAMEN', 'movistarmysql', 'MovSoft2018', {
    host: '52.20.16.17',
    dialect: 'mysql',
    logging: true
})

setupModels(sequelize)

sequelize.sync();

module.exports = sequelize;