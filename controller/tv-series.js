const axios = require('axios');
const secrets = require('../secrets');

tvSeriesDetails = (req, response, next) => {
    id = req.params.id;
    axios.get(secrets.api_url+'tv/'+id, {
        params: {
            api_key: secrets.api_key,
            language: 'en-US',
        }
    })
    .then(res => response.status(200).json(res.data))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        err.message = "No such series exists!!!";
        next(err);
    });
}

getReviews = (req, response, next) => {
    id = req.params.id;
    page = req.body.page;
    axios.get(secrets.api_url+'tv/'+id+'/reviews', {
        params: {
            api_key: secrets.api_key,
            language: 'en-US',
            page: page
        }
    })
    .then(res => response.status(200).json(res.data))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        err.message = "No such series exists!!!";
        next(err);
    });
}

module.exports.tvSeriesDetails = tvSeriesDetails;
module.exports.getReviews = getReviews;