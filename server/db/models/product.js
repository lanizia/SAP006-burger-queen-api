"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
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
      subtype: DataTypes.STRING,
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
