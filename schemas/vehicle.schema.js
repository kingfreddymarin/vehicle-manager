const Joi = require('joi');

//parameters
const id = Joi.string().uuid();
const placa = Joi.string();
const marca = Joi.string();
const modelo = Joi.string();
const serie = Joi.string();
const color = Joi.string();


// const name = Joi.string().min(4).max(15);
// const price = Joi.number().integer().min(10);
// const image = Joi.string().uri();

//creation parameters
const createVehicleSchema = Joi.object({
  placa: placa.required(),
  marca: marca.required(),
  modelo: modelo.required(),
  serie: serie.required(),
  color: color.required()
});

//update parameters
const updateVehicleSchema = Joi.object({
  placa: placa,
  marca: marca,
  modelo: modelo,
  serie: serie,
  color: color
});

//get a product parameter
const getVehicleSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createVehicleSchema,
  updateVehicleSchema,
  getVehicleSchema,
};
