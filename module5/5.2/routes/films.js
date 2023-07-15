/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

const path = require('node:path');

const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const { readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm } = require('../models/films.js')


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
router.get('/', (req, res) => {
  const filmsPotentiallyFiltered = readAllFilms(req?.query?.['minimum-duration']);

  if (filmsPotentiallyFiltered === undefined) return res.sendStatus(400);

  console.log('GET /films oooooouuuuuuuuuuiiiiiii');
  return res.json(filmsPotentiallyFiltered);
});




// READ ONE
router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);
 
  const indexOfMovieFound = readOneFilm(req.params.id);

  if (indexOfMovieFound < 0) return res.sendStatus(404);

  return res.json(indexOfMovieFound);
});

// CREATE ONE
router.post('/', (req, res) => {
  const title =
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
      : req.body.budget;

  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  const newFilm = createOneFilm(title, duration, budget, link);

  return res.json(newFilm);
});

// DELETE ONE
router.delete('/:id', (req, res) => {
  console.log(`DELETE /pizzas/${req.params.id}`);

  const deletedFilm = deleteOneFilm(req.params.id);

  if (!deletedFilm) return res.sendStatus(404);

  return res.json(deletedFilm);
});

// UPDATE ONE
router.patch('/:id', (req, res) => {
  console.log(`PATCH /pizzas/${req.params.id}`);
  const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body ||
    (title && !title.trim()) ||
    (link && !link.trim()) ||
    (duration && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);


  // const updatedFilm = { ...movies[foundIndex], ...req.body };
  const updatedFilm = updateOneFilm(req?.params?.id, req?.body);
 

  return res.json(updatedFilm);
});

module.exports = router;
