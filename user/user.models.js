const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema(
  {
    _id: ObjectId,
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
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

module.exports = mongoose.model("User", User);
