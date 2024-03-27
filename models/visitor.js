'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    
    static associate(models) {
      
    }
  }
  Visitor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    purpose: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
};