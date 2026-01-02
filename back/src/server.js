const express = require("express"); // voy a usar Express, así que lo traigo al archivo
const morgan = require("morgan");
const cors = require("cors");

const server = express(); // estoy creando el servidor

//Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
  console.log("Estamos pasando por nuestro propio Middleware");
  next();
});

module.exports = server;
