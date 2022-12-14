const { data_product, data_transaction, data_user } = require("../models");

class TransactionController {
  static async getTransaction(req, res) {
    try {
      let transaction = await data_transaction.findAll({});
      console.log(data_transaction);

      transaction
        ? res.status(201).json({
            ResponseCode: "00",
            ResponseDesc: { transaction },
          })
        : res.status(403).json({
            ResponseCode: "01",
          });
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const id = +req.userData.id;

      const { dataProductId, qty_order } = req.body;
      // console.log(qty_order);
      //buat table transaction

      const trans_date = new Date();

      //cari data product
      let getPremium = await data_transaction.findOne({
        include: [data_product],
        // where: { dataProductId: result.dataProductId },
      });

      // console.log(getPremium);

      // console.log(getPremium);
      let tempPremium = getPremium.data_product.premium;
      // console.log(tempPremium);

      //mengambil data price di table product yang telah dicari diatas

      let total_order = qty_order * tempPremium;

      let result = await data_transaction.create({
        trans_date,
        dataProductId,
        qty_order,
        dataUserId: id,
        total_order,
      });

      result
        ? res.status(201).json({
            ResponseCode: "00",
            ResponseDesc: { result },
          })
        : res.status(403).json({
            ResponseCode: "01",
          });
      // console.log(result);
    } catch (err) {
      console.log(err);
      // res.status(500).json(err);
    }
  }
}

module.exports = TransactionController;
