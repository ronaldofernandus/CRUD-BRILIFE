const { data_product, data_transaction, data_user } = require("../models");

class TransactionController {
  static async getTransaction(req, res) {
    try {
      let transaction = await data_transaction.findAll({});
      console.log(data_transaction);

      res.status(200).json(transaction);
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      // const id = +req.userData.id;
      const { trans_date, dataProductId, qty_order } = req.body;
      //buat table transaction
      let result = await data_transaction.create({
        trans_date,
        dataProductId,
        qty_order,
        // UserId: id,
      });

      //cari data product
      let getPremium = await data_product.findOne();

      //mengambil data price di table product yang telah dicari diatas

      let total_order = qty_order * getPremium;

      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      // res.status(500).json(err);
    }
  }
}

module.exports = TransactionController;
