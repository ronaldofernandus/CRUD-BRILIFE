const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/transaction");
const authentication = require("../middlewares/auth");

transactionRoute.get("/", authentication, TransactionController.getTransaction);

transactionRoute.post(
  "/transaksi",
  //   authentication,
  TransactionController.create
);
module.exports = transactionRoute;
