const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const secret = require('./secrets');
const searchRoutes = require("./Routes/search");
const tvRoutes = require('./Routes/tv-series');
const movieRoutes = require('./Routes/movies');
const addFavRoutes = require('./Routes/addFavourite');
const watchlatersRoutes = require('./Routes/watchlaters');

const getUserDetails = require('./controller/user');

const User = require('./models/User');

// app.use(bodyParser.urlencoded({extended: false})); // This is to parse data coming from form
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    bcrypt.hash('156947', 12)
        .then(hashedPss => {
            User.findOne({name: 'Chaitu'})
            .then(result => {
                if(!result) {
                    const user = new User({
                        name: 'Chaitu',
                        email: 'viswachaitanya.b16@iiits.in',
                        password: hashedPss
                    });
                    return user.save();
                }
                return result;
            })
            .then(result => {
                req.userId = result._id;
                next();
            })
            .catch(err => {
                if(!err.statusCode) err.statusCode = 500;
                next(err);
            });
        })
        .catch(err => {
            if(!err.statusCode) err.statusCode = 500;
            next(err);
        })
})

app.use('/search', searchRoutes);
app.use('/tv', tvRoutes);
app.use('/movie', movieRoutes);
app.use('/fav', addFavRoutes);
app.use('/watchlater', watchlatersRoutes);
app.use('/user', getUserDetails);

// Middleware to handle all errors that are thrown from different end points.
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

mongoose.connect(secret.mongodb_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));