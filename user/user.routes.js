const router = require("express").Router();
const {
  register,
  login,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  logout,
} = require("./user.controllers.js");
router.post("/register", register);
router.post("/login", login);
router.put("/update-user/:id", updateUser);
router.get("/get-users", getUsers);
router.get("/get-user/:id", getUser);
router.delete("/delete-user/:id", deleteUser);
router.get("/logout", logout);

module.exports = router;
