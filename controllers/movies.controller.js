"use strict";

import Movie from "../models/movie.model.js";

export async function getAllMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(`There was a problem saving movie in database. 
        ${err.message}`);
  }
}

export async function getMovieById(req, res) {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(`There was a problem saving movie in database. 
        ${err.message}`);
  }
}

export async function addMovie(req, res) {
  const movie = newMovie(req.body);

  try {
    const result = await movie.save();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(`There was a problem saving movie in database. 
        ${err.message}`);
  }
}

export async function deleteMovie(req, res) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedMovie);
  } catch (err) {
    console.error(err);
    res.status(500).json(`There was a problem deleting movie in database. 
        ${err.message}`);
  }
}

export async function updateMovie(req, res) {
  const { name, genre, release } = req.body;
  const movie = { name, genre, release };

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, movie, {
      new: true,
    });

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json(`There was a problem saving movie in database. 
        ${err.message}`);
  }
}

function newMovie(reqBody) {
  const { name, genre, release } = reqBody;

  return new Movie({ name, genre, release });
}
