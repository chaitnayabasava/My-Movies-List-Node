const express = require("express");
const tvReq = require('../controller/tv-series');

const router = express();

router.get('/:id/reviews', tvReq.getReviews);
router.get('/:id', tvReq.tvSeriesDetails);

module.exports = router;