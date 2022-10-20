const express = require('express');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

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


router.get('/', (req, res) => {
  const minimumFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration'], 10)
    : undefined;
  if (minimumFilmDuration &&
    (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0))
    return res.sendStatus(400);

  const films = parse(jsonDbPath, MOVIES);

  if (!minimumFilmDuration) return res.json(films);

  const filmsReachingMinimumDuration = [...films].filter((film) => film.duration >= minimumFilmDuration);

  // console.log(films);

  return res.json(filmsReachingMinimumDuration);
});

router.get('/:id', (req, res) =>  {
  const films = parse(jsonDbPath, MOVIES);
  const id = parseInt(req.params.id, 10);

  const filmId = films.findIndex((film) => film.id === id);
  // console.log(filmId);
  return res.json(films[filmId]);
});

router.post('/', (req, res) => {

  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400)

  const films = parse(jsonDbPath, MOVIES);

  const lastItemIndex = MOVIES?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newMovie = {
    id: nextId,
    title,
    duration,
    budget,
    link
  };

  films.push(newMovie);

  serialize(jsonDbPath, films);

  return res.json(films);
});


router.delete('/:id', (req, res) => {
  const films = parse(jsonDbPath, MOVIES);
  const id = parseInt(req.params.id, 10);
  const filmId = films.findIndex((film) => film.id === id);
  // console.log(filmId);

   films.splice(filmId, 1);

  serialize(jsonDbPath, films);

  return res.json(films);
});

router.patch('/:id', (req, res) =>  {

  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400);

  const films = parse(jsonDbPath, MOVIES);

  const filmId = films.findIndex((film) => film.id === req.params.id);
  // console.log(filmId);

  const updatedFilm = { ...films[filmId], ...req.body };

  films[filmId] = updatedFilm;

  serialize(jsonDbPath, films);

  return res.json(updatedFilm);

});

module.exports = router;