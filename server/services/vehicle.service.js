const boom = require('@hapi/boom'); //library for assistance in error handling
const mysql = require('mysql2')
const { models } = require('../libs/sequelize')

class VehicleService {
  constructor() {
    this.vehicles = [];
  };

  async create(data) {
    const newVehicle = await models.Vehicle.create(data)
    return newVehicle;
  };
  async find() {
    const data = await models.Vehicle.findAll();
    return data;
  };

  async findOne(placa) {
    const vehicle = await models.Vehicle.findByPk(placa);
    if(!vehicle){
      throw boom.notFound('vehicle not found')
    }
    return vehicle;
  }

  async update(placa, changes) {
    const vehicle = await this.findOne(placa)
    const rta = await vehicle.update(changes);
    return{
      placa, changes
    };
  };

  async delete(placa) {
    const vehicle =  await this.findOne(placa)
    await vehicle.destroy();    
    return { placa };
  };
};

module.exports = VehicleService;
