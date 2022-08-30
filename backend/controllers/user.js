const { data_product, data_transaction, data_user } = require("../models");
const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      let users = await data_user.findAll({
        // include : [ Order, ShoppingCart]
      });
      users
        ? res.status(201).json({
            ResponseCode: "00",
            ResponseDesc: { users },
          })
        : res.status(403).json({
            ResponseCode: "01",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { user_name, password, active } = req.body;
      let result = await data_user.create({
        user_name,
        password,
        active,
      });

      res.status(201).json(result);
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { user_name, password } = req.body;
      let userFound = await data_user.findOne({
        where: { user_name },
      });
      if (userFound) {
        if (decryptPwd(password, userFound.password)) {
          let access_token = tokenGenerator(userFound);
          res.status(201).json({
            access_token,
          });
        } else {
          res.status(403).json({
            message: "Invalid password",
          });
        }
      } else {
        res.status(404).json({
          message: `User not found`,
        });
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json(err);
    }
  }
  static async update(req, res, next) {
    try {
      const id = +req.userData.id;
      const { user_name, password, active } = req.body;

      let result = await User.update(
        {
          user_name,
          password,
          active,
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getUserById(req, res, next) {
    try {
      const id = +req.userData.id;
      let result = await User.findOne({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
