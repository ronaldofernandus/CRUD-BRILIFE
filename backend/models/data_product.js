'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     data_product.hasMany(models.data_transaction)
    }
  }
  data_product.init({
    product_name: DataTypes.STRING,
    premium: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'data_product',
  });
  return data_product;
};