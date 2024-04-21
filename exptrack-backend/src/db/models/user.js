"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      contactNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userType: {
        type: DataTypes.ENUM,
        values: ["0","1","2"],
        defaultValue: "0",
   
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
