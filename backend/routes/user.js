const userRoute = require("express").Router();
const UserController = require("../controllers/user");
const authentication = require("../middlewares/auth");

userRoute.get("/", UserController.getAllUsers);
userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.login);
userRoute.put(
  "/",
  authentication,

  UserController.update
);
userRoute.get("/info", authentication, UserController.getUserById);

module.exports = userRoute;
