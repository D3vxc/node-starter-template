const ArtistModel = require("./artist.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    // email,
    username,
    password,
  } = req.body;
  try {
    // const emailArtist = await ArtistModel.findOne({ email });
    // if (emailArtist) {
    //   return res.status(400).send({ message: "Artist already exists" });
    // }
    const userNameArtist = await ArtistModel.findOne({ username });
    if (userNameArtist) {
      return res.status(400).send({ message: "Username already exists" });
    }
    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);
    const newArtist = await ArtistModel.create({
      //   email,
      username,
      password: hashedPassword,
    });
    res
      .status(201)
      .send({ data: newArtist, message: "Artist created successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {};
const updateArtist = async (req, res) => {};
const getArtists = async (req, res) => {};
const getArtist = async (req, res) => {};
const deleteArtist = async (req, res) => {};
const logout = async (req, res) => {};

module.exports = {
  register,
  login,
  updateArtist,
  getArtists,
  getArtist,
  deleteArtist,
  logout,
};
