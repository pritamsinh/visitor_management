const {
    Model
  } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class asseste extends Model {
        static associate(models){

        }
    }
    Assest.init({
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        department: DataTypes.STRING,
        status: DataTypes.STRING,
        remark: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Assest',
    });
    return Assest;
}