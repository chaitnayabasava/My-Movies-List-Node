const express = require('express');
const watchlaterController = require('../controller/watchlaters');

const router = express.Router();

router.post('/movie', watchlaterController.addMovie);
router.post('/tv', watchlaterController.addSeries);

module.exports = router;