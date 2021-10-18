"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      restaurant: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
      tableName: "User",
    }
  );

  return User;
};
