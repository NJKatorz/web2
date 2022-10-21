const express = require('express');

const { 
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm, 
} = require('../models/films');

const router = express.Router();



router.get('/', (req, res) => {
  
  const allFilms = readAllFilms(req?.query?.['minimum-duration']);
  return res.json(allFilms);
});

router.get('/:id', (req, res) =>  {
    const filmId = req.params.id;
    const oneFilm = readOneFilm(filmId);

    if(!oneFilm) return res.status(404);

    return res.json(oneFilm);

});

router.post('/', (req, res) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
    const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
    const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;
  
    if (!title || !duration || !budget || !link) return res.sendStatus(400);
    
    const filmAdded = createOneFilm(title, duration, budget, link);

    return res.json(filmAdded);

});


router.delete('/:id', (req, res) => {
    const idFilm = req.params.id;

    const filmDeleted = deleteOneFilm(idFilm);

    return res.json(filmDeleted);
});

router.patch('/:id', (req, res) =>  {
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
    const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
    const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;
  
    if (!title || !duration || !budget || !link) return res.sendStatus(400);

    const filmId = req.params.id;
    const filmUpdatetd = updateOneFilm(filmId, {title, duration, budget, link});

    return res.json(filmUpdatetd);

});

module.exports = router;