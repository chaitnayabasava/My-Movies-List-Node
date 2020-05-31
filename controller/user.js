const User = require('../models/User');

module.exports = (req, res, next) => {
    const user = req.user;
    User.findById(user._id)
    .select('-_id -password -__v')
    .populate(
        {
            path: 'favourite_movies',
            populate: {
                path: 'genres',
                select: '-_id name'
            },
            select: '-_id name'
        }
    ).populate(
        {
            path: 'favourite_series',
            populate: {
                path: 'genres',
                select: '-_id name'
            },
            select: '-_id name'
        }
    ).populate(
        {
            path: 'watchlater_movies',
            populate: {
                path: 'genres',
                select: '-_id name'
            },
            select: '-_id name'
        }
    ).populate(
        {
            path: 'watchlater_series',
            populate: {
                path: 'genres',
                select: '-_id name'
            },
            select: '-_id name'
        }
    )
    .then(result => res.json(result));
}