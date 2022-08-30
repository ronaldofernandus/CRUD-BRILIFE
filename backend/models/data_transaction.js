"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      data_transaction.belongsTo(models.data_user);
      data_transaction.belongsTo(models.data_product);
    }
  }
  data_transaction.init(
    {
      trans_date: DataTypes.DATE,
      dataUserId: DataTypes.STRING,
      dataProductId: DataTypes.INTEGER,
      qty_order: DataTypes.INTEGER,
      total_order: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "data_transaction",
    }
  );
  return data_transaction;
};
