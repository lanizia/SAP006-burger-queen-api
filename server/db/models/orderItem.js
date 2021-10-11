'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      // define association here
    }
  };
  OrderItem.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    qtd: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    timestamps: false,
    modelName: 'OrderItem',
    tableName: "OrderItem"
  });
  return OrderItem;
};