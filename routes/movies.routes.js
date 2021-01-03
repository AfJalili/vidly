import express from "express";
import {addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getAllMovies);

router.post("/", addMovie);

router.get("/:id", getMovieById);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export default router;
