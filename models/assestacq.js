'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assestacq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assestacq.init({
    date: DataTypes.DATE,
    purpose: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assestacq',
  });
  return Assestacq;
};