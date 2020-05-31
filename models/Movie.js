const mongoose = require('mongoose');
const User = require('./User');

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
            _id: {
                type: Number,
                ref: 'Genre'
            }
        }
    ]
});

module.exports = mongoose.model('Movie', movieSchema);