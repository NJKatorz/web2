var express = require('express');
var router = express.Router();

const MOVIES = [
    {
      id: 1,
      title: 'Harry Potter and the Philosopher s Stone',
      duration: 152,
      budget : 125,
      link : 'https://www.imdb.com/title/tt0241527/'
    },
    {
      id: 2,
      title: 'Avengers: Endgame',
      duration: 181,
      budget : 181,
      link : 'https://en.wikipedia.org/wiki/Avengers:_Endgame'
    },
    {
      id: 3,
      title: 'Joker',
      duration: 200,
      budget : 116,
      link : 'https://hdss.watch/drame-en-streaming/3293-joker-streaming-gratuit.html',
    },
    {
      id: 4,
      title: 'Dune',
      duration: 90,
      budget : 109,
      link : 'https://filmze.tv/film/dune-streaming/',
    },
  ];


router.get('/', function (req, res) {
  const minimumFilmDuration = req?.query
  ? parseInt(req.query['minimum-duration'])
  : undefined;
if (
  minimumFilmDuration &&
  (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
)
  return res.sendStatus(400);

if (!minimumFilmDuration) return res.json(MOVIES);

const filmsReachingMinimumDuration = MOVIES.filter((film) => film.duration >= minimumFilmDuration);

console.log(MOVIES);

return res.json(filmsReachingMinimumDuration);
});

router.get('/:id', function (req, res) {
  const filmId = MOVIES.findIndex((film) => film.id == req.params.id);
  console.log(filmId);
  return res.json(MOVIES[filmId]);
});

router.post('/', function(req, res, next) {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400)

  const lastItemIndex = MOVIES?.length !== 0 ? MOVIES.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? MOVIES[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newMovie = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  }

  MOVIES.push(newMovie);

  return res.json(MOVIES);
});


router.delete('/:id', function (req, res) {
  const filmId = MOVIES.findIndex((film) => film.id == req.params.id);
  console.log(filmId);
  
  const supp = MOVIES.splice(filmId, 1);
  
  return res.json(MOVIES);
});

router.patch('/:id', function (req, res) {

  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.sendStatus(400)

  const filmId = MOVIES.findIndex((film) => film.id == req.params.id);
  console.log(filmId);
  
  const updateFilm = {...MOVIES[filmId], ...req.body};

  MOVIES[filmId] = updateFilm;

  return res.json(MOVIES);
  
});

module.exports = router;