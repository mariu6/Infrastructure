const Events = require("../EVENTS");

// TO DO - export the functionality

module.exports = {
    get: {
        home(req, res, next) {
            res.status(208).render(home.hbs);
        },
    },
    post: {

    }
}