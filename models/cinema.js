const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(films){
  return this.films.map((film) => {
    return film.title;
  });
}

Cinema.prototype.findByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title;
  });
}

Cinema.prototype.findByGenre = function(genre){
  return this.films.filter((film) => {
    return film.genre === genre;
  });
}

Cinema.prototype.hasYear = function(year){
  return this.films.some((film) => {
    return film.year === year;
  });
}

Cinema.prototype.isLong = function(time){
  return this.films.every((film) => {
    return film.length >= time;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};



module.exports = Cinema;
