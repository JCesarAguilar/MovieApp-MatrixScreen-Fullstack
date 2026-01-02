function iniciarSlider() {
  const track = document.querySelector(".slider-track-banner");
  const slidesOriginales = document.querySelectorAll(".slide");
  const btnNext = document.querySelector(".btn-next");
  const btnPrev = document.querySelector(".btn-prev");

  let indice = 1; // Comenzamos en el primer slide real (después del clon del final)
  const total = slidesOriginales.length;

  // Clonar el último y el primero
  const primerClon = slidesOriginales[0].cloneNode(true);
  const ultimoClon = slidesOriginales[total - 1].cloneNode(true);

  // Insertar clones
  track.appendChild(primerClon); // al final
  track.insertBefore(ultimoClon, track.firstChild); // al inicio

  const slides = track.querySelectorAll(".slide");

  // Posicionar el track para que muestre el primer slide real
  track.style.transform = `translateX(-${indice * 100}%)`;

  function mostrarSlide() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${indice * 100}%)`;
  }

  function siguiente() {
    indice++;
    mostrarSlide();

    if (indice === slides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        indice = 1;
        track.style.transform = `translateX(-${indice * 100}%)`;
      }, 500);
    }
  }

  function anterior() {
    indice--;
    mostrarSlide();

    if (indice === 0) {
      setTimeout(() => {
        track.style.transition = "none";
        indice = total;
        track.style.transform = `translateX(-${indice * 100}%)`;
      }, 500);
    }
  }

  btnNext.addEventListener("click", () => {
    siguiente();
    reiniciarAutoplay();
  });

  btnPrev.addEventListener("click", () => {
    anterior();
    reiniciarAutoplay();
  });

  // Autoplay
  let intervalo = setInterval(siguiente, 4000);

  function reiniciarAutoplay() {
    clearInterval(intervalo);
    intervalo = setInterval(siguiente, 4000);
  }
}

module.exports = { iniciarSlider };
