const express = require('express');
const addFavController = require('../controller/addFavourite');

const router = express.Router();

router.post('/movie', addFavController.addMovie);
router.post('/tv', addFavController.addSeries);

module.exports = router;