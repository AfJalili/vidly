"use strict";

import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    muteable: false,
  },
  genre: {
    type: [String],
    maxLength: 3,
    required: true,
  },
  release: {
    type: Date,
    maximum: Date.now(),
  }
});

export default mongoose.model("Movie", MovieSchema);
