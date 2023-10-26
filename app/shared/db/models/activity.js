"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, { foreignKey: "userId", onDelete: "cascade" });
      Activity.hasMany(models.Booking, { foreignKey: "activityId", onDelete: "cascade" });
    }
  }
  Activity.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quorum: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
