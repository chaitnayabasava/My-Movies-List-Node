const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You got to have a name dude!!!']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: true
    },
    favourite_movies: [
        {
            _id: {
                type: Number,
                ref: 'Movie'
            }
        }
    ],
    favourite_series: [
        {
            _id: {
                type: Number,
                ref: 'Series'
            }
        }
    ],
    watchlater_movies: [
        {
            _id: {
                type: Number,
                ref: 'Movie'
            }
        }
    ],
    watchlater_series: [
        {
            _id: {
                type: Number,
                ref: 'Series'
            }
        }
    ],
});

userSchema.methods.addFavouriteMovie = function(movie) {
    const idx = this.favourite_movies.findIndex(fm => fm._id === movie._id);

    if(idx === -1) this.favourite_movies.push(movie);
    else this.favourite_movies.splice(idx, 1);

    return this.save();
};

userSchema.methods.addFavouriteSeries = function(series) {
    const idx = this.favourite_series.findIndex(fm => fm._id === series._id);

    if(idx === -1) this.favourite_series.push(series);
    else this.favourite_series.splice(idx, 1);

    return this.save();
};

userSchema.methods.addWatchLaterMovie = function(movie) {
    const idx = this.watchlater_movies.findIndex(fm => fm._id === movie._id);

    if(idx === -1) this.watchlater_movies.push(movie);
    else this.watchlater_movies.splice(idx, 1);

    return this.save();
};

userSchema.methods.addWatchLaterSeries = function(series) {
    const idx = this.watchlater_series.findIndex(fm => fm._id === series._id);

    if(idx === -1) this.watchlater_series.push(series);
    else this.watchlater_series.splice(idx, 1);

    return this.save();
};

module.exports = mongoose.model('User', userSchema);