const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function() {

    mongoose
        .connect("mongodb+srv://salar:kzXQOJ0ywtB2dpwY@cluster0.6uys4fz.mongodb.net/?retryWrites=true&w=majority", {
            useCreateIndex: true,
            useNewUrlParser: true
        })
        .then(() => winston.info(`Connected to database`))
        .catch((err) => {
            console.log({
                err
            });
        });
};