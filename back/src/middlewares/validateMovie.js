const validateMovie = (req, res, next) => {

  const { title, year, director, duration, genre, rate, poster, scene } = req.body;
  const errores = [];

  // Validaciones generales
  if (!title) errores.push("title es requerido");
  if (!year) errores.push("year es requerido");
  if (!director) errores.push("director es requerido");
  if (!duration) errores.push("duration es requerido");
  if (!genre) errores.push("genre es requerido");
  if (!rate) errores.push("rate es requerido");
  if (!poster) errores.push("poster es requerido");
  if (!scene) errores.push("scene es requerido");

  // Validaciones específicas
  if (typeof year !== "number" || year.toString().length !== 4 || year < 1895) {
    errores.push("year debe ser un número de 4 dígitos y mayor a 1895");
  }

  if (typeof duration !== "number" || duration <= 0) {
    errores.push("duration debe ser un número mayor a 0");
  }

  if (typeof rate !== "number" || rate < 0 || rate > 10) {
    errores.push("rate debe ser entre 0 y 10");
  }

  const urlRegex = /^https?:\/\/.+/;
  if (!urlRegex.test(poster)) errores.push("poster debe ser una URL válida");
  if (!urlRegex.test(scene)) errores.push("scene debe ser una URL válida");

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  next();
};

module.exports = validateMovie;

