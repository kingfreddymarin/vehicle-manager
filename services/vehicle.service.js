const faker = require('faker');
const boom = require('@hapi/boom'); //library for assistance in error handling

class VehicleService {
  constructor() {
    this.vehicles = [];
    this.generate();
  }

  async generate() {
    const limit = 5;
    for (let i = 0; i < limit; i++) {
      this.vehicles.push({
        id: faker.datatype.uuid(),
        placa: 'M407019',
        marca: "Honda",
        modelo: "civic",
        serie: "7m",
        color: "Negro"
      });
    }
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
    return this.vehicles;
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
