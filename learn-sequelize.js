const { Genre, Movie, Actor } = require('./models');

/*
  currently, the genre table only has: Action, Adventure, and Drama
  Add one more Genre.
*/
function insertNewGenre() {
  return Genre.create({ name: "Thriller" });
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({ title: 'Titanic', year: 1999 });
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return Movie.findOne({
    where: {
      id: [2]
    }
  }).then(movie => { return movie.title });
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
  return Actor.findAll().then(actor => {
    return actor.map(a => a.name);
  })
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({
    where: {
      year: [2008]
    }
  }).then(movies => {
    return movies.map(m => m.title);
  });
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  return Genre.destroy({
    where: { name: ['Thriller'] }
  });
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {

}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {

}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};