const escape = require('escape-html');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');


const MOVIES = [
  {
    id: 1,
    title: 'Harry Potter and the Philosopher s Stone',
    duration: 152,
    budget: 125,
    link: 'https://www.imdb.com/title/tt0241527/'
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    duration: 181,
    budget: 181,
    link: 'https://en.wikipedia.org/wiki/Avengers:_Endgame'
  },
  {
    id: 3,
    title: 'Joker',
    duration: 200,
    budget: 116,
    link: 'https://hdss.watch/drame-en-streaming/3293-joker-streaming-gratuit.html',
  },
  {
    id: 4,
    title: 'Dune',
    duration: 90,
    budget: 109,
    link: 'https://filmze.tv/film/dune-streaming/',
  },
];


function readAllFilms(allFilms) {
    const films = parse(jsonDbPath, MOVIES);
    const minimumFilmDuration = parseInt(allFilms, 10);
  if (minimumFilmDuration &&
    (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0))
    return undefined;


  if (!minimumFilmDuration) return films;

  const filmsReachingMinimumDuration = [...films].filter((film) => film.duration >= minimumFilmDuration);

  // console.log(films); 

  return filmsReachingMinimumDuration;
};

function readOneFilm(id)  {
  const films = parse(jsonDbPath, MOVIES);
  const idNumber = parseInt(id, 10);
  const filmId = films.findIndex((film) => film.id === idNumber);
  // console.log(filmId);
  return films[filmId];
};

function createOneFilm(title, duration, budget, link) {

  if (!title || !duration || !budget || !link) return undefined

  const films = parse(jsonDbPath, MOVIES);

  const lastItemIndex = MOVIES?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newMovie = {
    id: nextId,
    title: escape(title),
    duration: escape(duration),
    budget: escape(budget),
    link: escape(link)
  };

  films.push(newMovie);

  serialize(jsonDbPath, films);

  return films;
};


function deleteOneFilm(id) {
  const films = parse(jsonDbPath, MOVIES);
  const idNumber = parseInt(id, 10);
  const filmId = films.findIndex((film) => film.id === idNumber);
  // console.log(filmId);

   films.splice(filmId, 1);

  serialize(jsonDbPath, films);

  return films;
};

function updateOneFilm(id, filmUpdatetd) {
 
  const films = parse(jsonDbPath, MOVIES);
  const idNumber = parseInt(id, 10);
  const filmId = films.findIndex((film) => film.id === idNumber);
  // console.log(filmId);

  const updatedFilm = { ...films[filmId], ...filmUpdatetd };

  films[filmId] = updatedFilm;

  serialize(jsonDbPath, films);

  return updatedFilm;
};

module.exports = {
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
  };