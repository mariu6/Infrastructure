const mongoose = require("mongoose");
const dbString = require("./config").dbUrl + "NAME_OF_THE_DB";

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
        console.log("< Database is Active >"));
}