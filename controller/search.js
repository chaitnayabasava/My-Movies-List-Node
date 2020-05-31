const axios = require('axios');
const secrets = require('../secrets');

function searchDetails(name, req, response, next) {
    const rq = req.body;
    
    axios.get(secrets.api_url+'search/'+name, {
        params: {
            api_key: secrets.api_key,
            language: 'en-US',
            page: rq.page,
            include_adult: rq.include_adult,
            query: rq.name
        }
    })
    .then(res => response.status(200).json(res.data))
    .catch(error => {
        const err = new Error('Please provide a search query!!!');
        err.statsCode = 500;
        next(err);
    });
}

module.exports = searchDetails;