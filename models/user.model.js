"use strict";

import mongoose from "mongoose";
import config from "../config.js";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true, minlength: 6, maxlength: 255
  },
  password: { type: String, required: true, minlength: 5, maxlength: 512 },
});

UserSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id }, config.jwtSecret);
}
export default mongoose.model('User', UserSchema);