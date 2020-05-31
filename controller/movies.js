const axios = require('axios');
const secrets = require('../secrets');

function movieDetails(id, response, next) {
    axios.get(secrets.api_url+'movie/'+id, {
        params: {
            api_key: secrets.api_key,
            language: 'en-US',
        }
    })
    .then(res => response.status(200).json(res.data))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        err.message = "No such movie exists!!!";
        next(err);
    });
}

function getReviews(id, page, response, next) {
    axios.get(secrets.api_url+'movie/'+id+'/reviews', {
        params: {
            api_key: secrets.api_key,
            language: 'en-US',
            page: page
        }
    })
    .then(res => response.status(200).json(res.data))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        err.message = "No such movie exists!!!";
        next(err);
    });
}

module.exports.movieDetails = movieDetails;
module.exports.getReviews = getReviews;