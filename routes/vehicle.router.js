const express = require('express');
const VehicleService = require('../services/vehicle.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createVehicleSchema,
  updateVehicleSchema,
  getVehicleSchema,
} = require('../schemas/vehicle.schema');

const router = express.Router();
const service = new VehicleService();

// get all products
router.get('/', async (req, res, next) => {
  try {
    const vehicles = await service.find();
    res.json(vehicles);
  } catch (error) {
    next(error);
  }
});
// get product per id (dynamic)
router.get(
  '/:id',
  validatorHandler(getVehicleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vehicle = await service.findOne(id);
      res.json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);
//post a product (create)
router.post(
  '/',
  validatorHandler(createVehicleSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newVehicle = await service.create(body);
      res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  }
);
//patch a product (update)(dynamic)
router.patch(
  '/:id',
  validatorHandler(getVehicleSchema, 'params'),
  validatorHandler(updateVehicleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const vehicle = await service.update(id, body);
      res.json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);
//delete a product
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rply = await service.delete(id);
    res.json(rply);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
