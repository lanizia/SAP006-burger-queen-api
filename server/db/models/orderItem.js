"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
    }
  }

  OrderItem.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      qtd: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "OrderItem",
      tableName: "OrderItem",
    }
  );
  
  return OrderItem;
};
