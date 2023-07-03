const UserModel = require("./user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, phone, username, password } = req.body;
  try {
    const emailUser = await UserModel.findOne({ email });
    if (emailUser) {
      return res.status(400).send({ message: "User already exists" });
    }
    const userNameUser = await UserModel.findOne({ username });
    if (userNameUser) {
      return res.status(400).send({ message: "Username already exists" });
    }
    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);
    const newUser = await UserModel.create({
      email,
      phone,
      username,
      password: hashedPassword,
    });
    res
      .status(201)
      .send({ data: newUser, message: "User created successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
const login = async (req, res) => {};
const updateUser = async (req, res) => {};
const getUsers = async (req, res) => {};
const getUser = async (req, res) => {};
const deleteUser = async (req, res) => {};
const logout = async (req, res) => {};

module.exports = {
  register,
  login,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  logout,
};
