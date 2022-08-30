const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "BRI-LIFE",
  });
});

const transactionRoutes = require("./transaction");
route.use("/transaction", transactionRoutes);

const productRoutes = require("./products");
route.use("/products", productRoutes);

const userRoutes = require("./user");
route.use("/users", userRoutes);

module.exports = route;
