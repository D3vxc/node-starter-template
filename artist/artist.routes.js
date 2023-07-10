const router = require("express").Router();
const {
  register,
  login,
  updateArtist,
  getArtists,
  getArtist,
  deleteArtist,
  logout,
} = require("./artist.controllers.js");
router.post("/register", register);
router.post("/login", login);
router.put("/update-artist/:id", updateArtist);
router.get("/get-artists", getArtists);
router.get("/get-artist/:id", getArtist);
router.delete("/delete-artist/:id", deleteArtist);
router.get("/logout", logout);

module.exports = router;
