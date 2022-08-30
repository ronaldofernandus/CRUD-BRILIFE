const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/transaction");



transactionRoute.get("/", TransactionController.getTransaction);
// productRoute.get("/search", ProductController.getProductsBySearch);
// productRoute.get("/categories/:category", ProductController.getByCategories);
// productRoute.get("/highlight_sort", ProductController.getProductsSortPrice);
// productRoute.get("/popular_product", ProductController.getProductsPopular);
// productRoute.post(
//   "/",
//   authentication,
//   upload.fields([{ name: "filename" }, { name: "imageSize", maxCount: 1 }]),
//   ProductController.create
// ); //just for admin
// productRoute.put(
//   "/:id",
//   authentication,
//   upload.fields([{ name: "filename" }, { name: "imageSize", maxCount: 1 }]),
//   ProductController.update
// ); //just for admin
// productRoute.put(
//   "/imageSize/:id",
//   authentication,
//   upload.single("imageSize"),
//   ProductController.updateImageSize
// ); //just for admin
// productRoute.post(
//   "/bulkProduct",
//   authentication,
//   upload.single("filename"),
//   ProductController.createBulkProduct
// ); //just for admin
// productRoute.get("/:id", ProductController.getProductById);
// productRoute.put("/views/:id", ProductController.addViews);

module.exports = transactionRoute;
