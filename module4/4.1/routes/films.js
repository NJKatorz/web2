var express = require('express');
var router = express.Router();

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

/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title

router.get('/', (req, res, next) => {
  const orderByTitle =
    req?.query?.order?.includes('title') ? req.query.order : undefined;
  let orderedMenu;
  console.log(`order by ${orderByTitle ?? 'not requested'}`);
  if (orderByTitle) orderedMenu = [...MENU].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedMenu = orderedMenu.reverse();

  console.log('GET /pizzas');
  return res.json(orderedMenu ?? MENU);
});
*/
// READ ALL AND READ ALL FILTERED
router.get('/', (req, res, next) => {
    const minimumFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration'])
    : undefined;
  if (
    minimumFilmDuration &&
    (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
  )
    return res.sendStatus(400);

  if (!minimumFilmDuration) return res.json(MOVIES);

  const filmsReachingMinimumDuration = MOVIES.filter(
    (film) => film.duration >= minimumFilmDuration
  );

    console.log('GET /films oooooouuuuuuuuuuiiiiiii');
    return res.json(filmsReachingMinimumDuration);
  });




// READ ONE
router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const indexOfMovieFound = MOVIES.findIndex(film => film.id == req.params.id);

  if (indexOfMovieFound < 0) return res.sendStatus(404);

  return res.json(MOVIES[indexOfMovieFound]);
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

  const lastItemIndex = MOVIES?.length !== 0 ? MOVIES.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? MOVIES[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  MOVIES.push(newFilm);

  return res.json(newFilm);
});

// DELETE ONE
router.delete('/:id', (req, res) => {
  console.log(`DELETE /pizzas/${req.params.id}`);

  const foundIndex = MOVIES.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromMovie = MOVIES.splice(foundIndex, 1);
  const itemRemoved = itemsRemovedFromMovie[0];

  return res.json(itemRemoved);
});

// UPDATE ONE
router.patch('/:id', (req, res) => {
  console.log(`PATCH /pizzas/${req.params.id}`);

  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  console.log('POST /pizzas');

  if ((!title && !duration && !budget && !link) || title?.length === 0 || duration < 0 || budget < 0 || link?.length === 0) return res.sendStatus(400);

  const foundIndex = MOVIES.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm = {...MOVIES[foundIndex], ...req.body};

  MOVIES[foundIndex] = updatedFilm;

  return res.json(updatedFilm);
});

module.exports = router;
