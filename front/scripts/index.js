const { iniciarSlider } = require("./slidesBanner");
iniciarSlider();
const { generarEstrellas } = require("./generarEstrellas");

// Seleccionamos el contenedor donde colocarremos las tarjetas de las peliculas
const contenedorPeliculas = document.querySelector(".grid-peliculas");

const axios = require("axios");
const apiUrl = process.env.VITE_API_URL || "http://localhost:3000";

async function cargarPeliculas() {
  try {
    const response = await axios.get(`${apiUrl}/movies`);
    const data = response.data;

    const tarjetasTienda = data.map((pelicula, index) => {
      const hours = Math.floor(pelicula.duration / 60);
      const minutes = pelicula.duration % 60;

      return `<div class="tarjeta-pelicula" data-index="${index}">
    <img src="${pelicula.poster}" alt="Imagen de ${pelicula.title}"/>
    
      <div class="tarjeta-hover">
        <div class= "hover-img">
          <img src="${pelicula.scene}" alt="Escena de ${pelicula.title}" />
        </div>
        <div class= "hover-info">
          <button class="btn-play" aria-label="Reproducir">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <h3>${pelicula.title}</h3>
          <p>${pelicula.genre.join(", ")} - ${hours}h ${minutes}min</p>
          <p>${pelicula.year}</p>
          <p class="estrellas">${generarEstrellas(pelicula.rate)}${
        pelicula.rate
      }</p>
          <p>${pelicula.director}</p>
        </div>
      </div>  
    </div>
    `;
    });
    // Unimos todos los strings y los insertamos en el DOM
    contenedorPeliculas.innerHTML = tarjetasTienda.join("");
  } catch (error) {
    console.error("Error al cargar películas:", error);
    contenedorPeliculas.innerHTML = "<p>Error al cargar películas.</p>";
  }
}

cargarPeliculas();
