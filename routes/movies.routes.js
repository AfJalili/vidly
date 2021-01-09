import express from "express";
import {addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie} from "../controllers/movies.controller.js";
import auth from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", getAllMovies);

router.post("/", auth, addMovie);

router.get("/:id", getMovieById);

router.put("/:id", auth, updateMovie);

router.delete("/:id", auth, deleteMovie);

export default router;
