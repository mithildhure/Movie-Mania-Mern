const express = require('express');
const { getMovies, addMovie, showMovie, updateMovie, deleteMovie } = require('../controller/movieController');

const mroute = express.Router();

mroute.get("/",getMovies);
mroute.post("/add",addMovie);
mroute.get("/movie/:id",showMovie);
mroute.patch("/update/:id",updateMovie);
mroute.delete("/delete/:id",deleteMovie);

module.exports = mroute;