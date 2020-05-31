const mongoose = require('mongoose');
const Genre = require('./Genre');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genres: [
        {
            type: Number,
            ref: 'Genre'
        }
    ]
});

module.exports = mongoose.model('Movie', movieSchema);