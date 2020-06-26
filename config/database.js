const mongoose = require("mongoose");
const dbString = require("./config").dbUrl + "NAME_OF_THE_DB_EVENTS";

module.exports = () => {
    return mongoose.connect(dbString, {     // connect returns promise
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) {
            console.error("Mongoose error: Check configurations files! ", err);
            throw err;
        }
        console.log("<< Database is Active >>")
    })
}