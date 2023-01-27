const boom = require('@hapi/boom'); //library for assistance in error handling
const mysql = require('mysql2')
const pool = require('../libs/connection.pool')

class VehicleService {
  constructor() {
    this.vehicles = [];
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
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
    const query = 'SELECT * FROM vehiculos';
    const [rows] = await this.pool.promise().query(query)
    return rows;
  }

  async findOne(placa) {
    const vehicle = this.vehicles.find((item) => item.placa === placa);
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
