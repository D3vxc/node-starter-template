const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Artist = new Schema(
  {
    _id: ObjectId,
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    otpVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Artist", Artist);
