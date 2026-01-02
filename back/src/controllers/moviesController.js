const moviesService = require("../services/moviesService");

// Esta función se ejecutará cuando alguien visite /movies
const obtenerPeliculas = async (req, res) => {
  try {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

const crearPeliculas = async (req, res) => {
  try {
    const newMovie = await moviesService.createMovie(req.body);
    res.status(201).json({
      message: "Película agregada exitosamente",
      data: newMovie,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error interno al cargar",
    });
  }
};

module.exports = {
  crearPeliculas,
  obtenerPeliculas,
};
