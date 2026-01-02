// Valoracion con estrellas
function generarEstrellas(rate) {
  const estrellas = rate / 2; // pasamos de escala 10 a 5
  const llenas = Math.floor(estrellas);
  const mediaEstrella = estrellas % 1 >= 0.25 && estrellas % 1 < 0.75;
  const vacias = 5 - llenas - (mediaEstrella ? 1 : 0);

  let html = "";
  html += "★".repeat(llenas);
  if (mediaEstrella) html += "☆"; // media estrella
  html += "☆".repeat(vacias);

  return html;
}

module.exports = { generarEstrellas };
