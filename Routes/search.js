const express = require('express');
const searchReq = require('../controller/search');

const router = express.Router();

router.get('/movie', (req, res, next) => searchReq('movie', req, res, next));
router.get('/tv', (req, res, next) => searchReq('tv', req, res, next));
router.get('/person', (req, res, next) => searchReq('person', req, res, next));
router.get('/multi', (req, res, next) => searchReq('multi', req, res, next));

module.exports = router;