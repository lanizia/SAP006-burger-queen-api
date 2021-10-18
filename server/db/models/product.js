"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.OrderItem, {
        foreignKey: "product_id",
      });
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      flavor: DataTypes.STRING,
      complement: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      type: DataTypes.STRING,
      sub_type: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Product",
      tableName: "Product",
    }
  );

  return Product;
};
