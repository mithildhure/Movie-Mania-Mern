const movieModel = require("../model/movieModel");

const getMovies = async (req,resp) => {
    try {
        const movies = await movieModel.find();
        if (!movies) {
            resp.json("No Movies FOund");
        } else {
            resp.json(movies);
        }
    } catch (error) {
        console.log(error);
    }
}

const addMovie = async (req,resp) => {
    try {
        const {title, rating, genre, duration, language, poster} = req.body;
        await movieModel.create({title, rating, genre, duration, language, poster});
        resp.json("Movie Added");
    } catch (error) {
        console.log(error);
    }
}

const showMovie = async (req,resp) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        if (!movie) {
            resp.json("no movie found");
        } else {
            resp.json(movie);
        }
    } catch (error) {
        console.log(error);
    }
}

const updateMovie = async (req,resp) => {
    try {
        await movieModel.findByIdAndUpdate(req.params.id, req.body);
        resp.json("Movie updated");
    } catch (error) {
        console.log(error);
    }
}

const deleteMovie = async (req,resp) => {
    try {
        await movieModel.findByIdAndDelete(req.params.id);
        resp.json("Movie Deleted");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getMovies, addMovie, showMovie, updateMovie, deleteMovie};