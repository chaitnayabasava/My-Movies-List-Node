const express = require("express");
const movieReq = require('../controller/movies');

const router = express();

router.get('/:id/reviews', (req, res, next) => movieReq.getReviews(req.params.id, req.body.page, res, next));
router.get('/:id', (req, res, next) => movieReq.movieDetails(req.params.id, res, next));

module.exports = router;