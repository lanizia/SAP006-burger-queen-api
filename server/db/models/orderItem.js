"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, { foreignKey: "order_id" });
      OrderItem.hasOne(models.Product, { foreignKey: "product_id" });
    }
  }

  OrderItem.init(
    {
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
