const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const seriesSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    genres: [
        {
            _id: {
                type: Number,
                ref: 'Genre'
            }
        }
    ],
    details: [
        {
            season: {type: Number},
            num_episodes: {type: Number},
            name: {type: String}
        }
    ]
});

module.exports = mongoose.model('Series', seriesSchema);