"use strict";
const { encryptPwd } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      data_user.hasMany(models.data_transaction);
    }
  }
  data_user.init(
    {
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (data_user, options) {
          data_user.password = encryptPwd(data_user.password);
          //user.avatar = user.avatar || ('../images/ppdefault.jpg')
        },
        beforeUpdate: function (data_user, options) {
          data_user.password = encryptPwd(data_user.password);
        },
      },
      sequelize,
      modelName: "data_user",
    }
  );
  return data_user;
};
