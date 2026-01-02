const express = require("express");
const router = express.Router();
const validateMovie = require("../middlewares/validateMovie");

// Importamos el controlador
const {
  crearPeliculas,
  obtenerPeliculas,
} = require("../controllers/moviesController");

// Definimos las rutas
// Ruta GET /movies
router.get("/movies", obtenerPeliculas);
// Ruta POST /movies
router.post("/movies", validateMovie, crearPeliculas);

module.exports = router;
