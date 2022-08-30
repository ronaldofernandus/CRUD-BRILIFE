const { data_product, data_transaction, data_user } = require("../models");

class TransactionController {
  static async getTransaction(req, res, next) {
    try {
      let transaction = await data_transaction.findAll({
        include: [data_user, data_product],
      });

      res.status(200).json(transaction);
    } catch (err) {
      console.log(err);
      // res.status(500).json(err);
    }
  }
}

module.exports = TransactionController;
