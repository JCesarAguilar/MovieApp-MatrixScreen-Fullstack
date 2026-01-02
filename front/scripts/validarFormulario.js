function validarFormulario(form) {
  const campos = form.querySelectorAll("input, select, textarea");
  let hayErrores = false;

  campos.forEach((campo) => {
    const valor = campo.value.trim();

    // Limpio errores anteriores, si ya fueron corregidos
    campo.classList.remove("is-invalid");

    //Validacion general
    if (!valor || (campo.type === "select-one" && valor === "")) {
      campo.classList.add("is-invalid");
      hayErrores = true;
    }
  });

  // Validaciones especificas: rate
  const rate = form.querySelector("#rate");
  if (rate.value < 0 || rate.value > 10) {
    rate.classList.add("is-invalid");
    hayErrores = true;
  }

  // Duración (horas y minutos)
  const hours = form.querySelector("#hours");
  const minutes = form.querySelector("#minutes");
  const duracionFeedback = form.querySelector("#duracion-feedback");
  const h = parseInt(hours.value, 10);
  const m = parseInt(minutes.value, 10);

  // Limpio errores anteriores de duración
  hours.classList.remove("is-invalid");
  minutes.classList.remove("is-invalid");
  duracionFeedback.style.display = "none";

  // Validación de duración
  if (
    isNaN(h) ||
    isNaN(m) ||
    h < 0 ||
    m < 0 ||
    (h === 0 && m === 0) ||
    m > 60
  ) {
    hours.classList.add("is-invalid");
    minutes.classList.add("is-invalid");
    duracionFeedback.style.display = "block";
    duracionFeedback.textContent =
      "Duración inválida: asegúrate de que los minutos estén entre 0 y 60 y que la duración total sea mayor a 0.";
    hayErrores = true;
  }

  return !hayErrores; 
}

module.exports = { validarFormulario };
