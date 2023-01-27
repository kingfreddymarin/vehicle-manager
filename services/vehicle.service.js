const boom = require('@hapi/boom'); //library for assistance in error handling
const mysql = require('mysql2')
const connection = require('../libs/connection')

// const connection = mysql.createConnection({
//   host: '52.20.16.17',
//   user: 'movistarmysql',
//   password: 'MovSoft2018',
//   database: 'EXAMEN'
// });

class VehicleService {
  constructor() {
    this.vehicles = [];
  }

  async create(data) {
    const newVehicle = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }
  async find() {
    // const sqlGet = "select * from vehiculos"
    // db.query(sqlGet, (err, result)=>{
    //   return result
    // })
    try {
      const [rows, fields] = await connection.promise().query('SELECT * FROM vehiculos');
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async findOne(id) {
    const vehicle = this.vehicles.find((item) => item.id === id);
    if (!vehicle) {
      throw boom.notFound('vehicle not found');
    }
    return vehicle;
  }

  async update(id, changes) {
    const index = this.vehicles.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('vehicle not found');
    }
    const vehicle = this.vehicles[index];
    this.vehicles[index] = {
      ...vehicle,
      ...changes,
    };
    return this.vehicles[index];
  }

  async delete(id) {
    const index = this.vehicles.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('vehicle not found');
    }
    this.vehicles.splice(index, 1);
    return { id };
  }
}

module.exports = VehicleService;
