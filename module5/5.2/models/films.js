/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const path = require('node:path');

const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');


const MOVIES = [
  {
    id: 1,
    title: 'Harry Potter and the Philosopher\'s Stone',
    duration: 152,
    budget: 125,
    link: 'https://amazing-javascript.world',
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    duration: 181,
    budget: 181,
    link: 'https://en.wikipedia.org/wiki/Avengers:_Endgame',
  },
  {
    id: 3,
    title: 'Spider man across the spider verse',
    duration: 201,
    budget: 191,
    link: 'https://www.acrossthespiderverse.movie/',
  }
];



// READ ALL AND READ ALL FILTERED
function readAllFilms (minimumFilmDuration){
   // parse
   const movies = parse(jsonDbPath, MOVIES);

  // eslint-disable-next-line spaced-comment
  /**const minimumFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration'])
    : undefined;
*/
  

  if (!minimumFilmDuration) return movies;

  const minimumFilmDurationParsed = parseInt(minimumFilmDuration, 10);
  if (
    minimumFilmDurationParsed &&
    (typeof minimumFilmDurationParsed !== 'number' || minimumFilmDurationParsed <= 0)
  )
    return res.sendStatus(400);

  const filmsReachingMinimumDuration = movies.filter(
    (film) => film.duration >= minimumFilmDuration
  );

  console.log('GET /films oooooouuuuuuuuuuiiiiiii');
  return filmsReachingMinimumDuration;
};




// READ ONE
function readOneFilm(id) {
  // parse
  const movies = parse(jsonDbPath, MOVIES);
  const indexParsed = parseInt(id, 10)
  const indexOfMovieFound = movies.findIndex(film => film.id === indexParsed);

  if (indexOfMovieFound < 0) return res.sendStatus(404);

  return movies[indexOfMovieFound];
};

// CREATE ONE
function createOneFilm(title, duration, budget, link) {
  // eslint-disable-next-line spaced-comment
  /**const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link =
    req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;**/

  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  // parse
  const movies = parse(jsonDbPath, MOVIES);
  const lastItemIndex = movies?.length !== 0 ? movies.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? movies[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;


  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  movies.push(newFilm);
  // serialisation
  serialize(jsonDbPath, movies);

  return newFilm;
};

// DELETE ONE
function deleteOneFilm (id){

  // parse
  const movies = parse(jsonDbPath, MOVIES);
  const indexParsed = parseInt(id, 10)

  const foundIndex = movies.findIndex(film => film.id === indexParsed);

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromMovie = movies.splice(foundIndex, 1);
  const itemRemoved = itemsRemovedFromMovie[0];

  // serialisation
  serialize(jsonDbPath, movies);

  return itemRemoved;
};

// UPDATE ONE
function updateOneFilm (id, film){
  
    // parse
    const movies = parse(jsonDbPath, MOVIES);

  
  const indexParsed = parseInt(id, 10)
  const foundIndex = movies.findIndex(movie => movie.id === indexParsed);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm = { ...movies[foundIndex], ...film};

  movies[foundIndex] = updatedFilm;

   // serialisation
   serialize(jsonDbPath, movies);

  return updatedFilm;
};

module.exports = {
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
  };
