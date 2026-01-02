function limpiarFormulario() {
  const form = document.querySelector("#form");
  // 1. Resetea formulario
  form.reset();

  // 2. Limpiamos errores visuales de todos los campos
  form.querySelectorAll(".is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
  });

  //3. Oculta el mensaje de duracion (personalizado)
  const duracionFeedback = document.querySelector("#duracion-feedback");
  if (duracionFeedback) {
    duracionFeedback.style.display = "none";
  }
}

module.exports = { limpiarFormulario };
