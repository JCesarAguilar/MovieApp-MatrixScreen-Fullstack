const axios = require("axios");

const { limpiarFormulario } = require("./limpiarFormulario");
const { validarFormulario } = require("./validarFormulario");

// Limpiar formulario
const btnLimpiar = document.querySelector("#btnLimpiar");
btnLimpiar.addEventListener("click", limpiarFormulario);

// Validacion y Submit
const form = document.querySelector("#form");

// Agregamos evento
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validamos ("filtramos que todos los inputs sean correctos")
  const valido = validarFormulario(form);

  if (!valido) {
    alert("Todos los campos son obligatorios");
    return;
  }
  const hours = parseInt(document.querySelector("#hours").value, 10) || 0;
  const minutes = parseInt(document.querySelector("#minutes").value, 10) || 0;
  const durationTotalMinutes = hours * 60 + minutes;

  // Si es valido, entonces ENVIAR CON AXIOS:
  const data = {
    title: document.querySelector("#titulo").value,
    director: document.querySelector("#director").value,
    year: parseInt(document.querySelector("#year").value, 10),
    genre: [document.querySelector("#genre").value],
    duration: durationTotalMinutes,
    rate: parseFloat(document.querySelector("#rate").value),
    poster: document.querySelector("#poster").value,
    scene: document.querySelector("#scene").value,
  };

  const apiUrl = process.env.VITE_API_URL || "http://localhost:3000";

  axios
    .post(`${apiUrl}/movies`, data)
    .then((response) => {
      console.log("Película creada:", response.data);
      alert(response.data.message); // ← muestra "Película creada exitosamente"
      limpiarFormulario(); // opcional: limpia el form después
    })
    .catch((error) => {
      console.error(
        "Error al crear película:",
        error.response?.data || error.message
      );
      alert("Error al crear la película");
    });
});
