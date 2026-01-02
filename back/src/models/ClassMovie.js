class movie {
  constructor({ title, year, director, duration, genre, rate, poster, scene }) {
    if (!title || !director || !poster) {
      throw new Error("Faltan datos obligatorios");
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
    this.scene = scene;
  }
}

module.exports = movie;
