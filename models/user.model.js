"use strict";

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true, minlength: 6, maxlength: 255
  },
  password: { type: String, required: true, minlength: 5, maxlength: 512 },
});

export default mongoose.model('User', UserSchema);