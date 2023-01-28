const {Vehicle, VehicleSchema} = require('./vehicle.model')

function setupModels(sequelize){
    Vehicle.init(VehicleSchema, Vehicle.config(sequelize))
}

module.exports = setupModels;