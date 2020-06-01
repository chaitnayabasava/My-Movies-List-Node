const Movie = require('../models/Movie');
const Series = require('../models/Series');
const User = require('../models/User');

addMovie = (req, res, next) => {
    const movie = req.body.movie;

    Movie.findById(movie.id)
    .then(m => {
        if(!m) {
            const temp = Movie({
                _id: movie.id,
                name: movie.name,
                genres: movie.genres
            })
            return temp.save();
        }
        return m;
    })
    .then(result => {
        return User.findById(req.userId)
        .then(user => user.addWatchLaterMovie(result))
        .catch(err => {
            if(!err.statusCode) err.statusCode = 500;
            next(err);
        });
    })
    .then(user => res.status(200).json(user))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        next(err);
    });
}

addSeries = (req, res, next) => {
    const series = req.body.series;

    Series.findById(series.id)
    .then(m => {
        if(!m) {
            const temp = Series({
                _id: series.id,
                name: series.name,
                genres: series.genres,
                status: series.status,
                details: series.details
            })
            return temp.save();
        }
        return m;
    })
    .then(result => {
        return User.findById(req.userId)
        .then(user => user.addWatchLaterSeries(result))
        .catch(err => {
            if(!err.statusCode) err.statusCode = 500;
            next(err);
        });
    })
    .then(user => res.status(200).json(user))
    .catch(err => {
        if(!err.statusCode) err.statusCode = 500;
        next(err);
    });
}

module.exports.addMovie = addMovie;
module.exports.addSeries = addSeries;