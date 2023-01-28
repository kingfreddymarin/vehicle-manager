const {Model, DataTypes, Sequelize}=require('sequelize');

const VEHICLE_TABLE = 'vehiculos'

const VehicleSchema = {
    placa:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    marca:{
        allowNull: false,
        type: DataTypes.STRING

    },
    modelo:{
        allowNull: false,
        type: DataTypes.STRING

    },
    serie:{
        allowNull: false,
        type: DataTypes.STRING

    },
    color:{
        allowNull: false,
        type: DataTypes.STRING
    },
}

class Vehicle extends Model {
    static associate(){
        //models
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: VEHICLE_TABLE,
            modelName: 'Vehicle',
            timestamps: false
        }
    }
}

module.exports = {VEHICLE_TABLE, VehicleSchema, Vehicle}