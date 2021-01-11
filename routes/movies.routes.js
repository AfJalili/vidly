"use strict";

import express from "express";
import {addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie} from "../controllers/movies.controller.js";
import auth from "../middlewares/auth.middleware.js";
import checkAdmin from "../middlewares/admin.middleware";

const router = express.Router();

router.get("/", getAllMovies);

router.post("/", [auth, checkAdmin], addMovie);

router.get("/:id", getMovieById);

router.put("/:id", [auth, checkAdmin], updateMovie);

router.delete("/:id", [auth, checkAdmin], deleteMovie);

export default router;
