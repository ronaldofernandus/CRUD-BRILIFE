const { data_product, data_transaction, User } = require("../models");

class ProductController {
  static async getProduct(req, res, next) {
    try {
      let product = await data_product.findAll({});

      res.status(200).json(product);
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  }

  static async createProduct(req, res) {
    try {
      const { product_name, premium } = req.body;

      let createproduct = await data_product.create({
        product_name,
        premium,
      });

      createproduct
        ? res.status(201).json({
            ResponseCode: "00",
            ResponseDesc: { createproduct },
          })
        : res.status(403).json({
            ResponseCode: "01",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = +req.params.id;

      // console.log(userId);
      const { product_name, premium } = req.body;

      let updateproduct = await data_product.update(
        {
          product_name,
          premium,
        },
        {
          where: { id },
        }
      );

      updateproduct[0] === 1
        ? res.status(201).json({
            message: "product updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = +req.params.id;

      let deleteProduct = await data_product.destroy({
        where: { id },
      });
      res.status(200).json(deleteProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ProductController;
