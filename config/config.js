const env = process.env.NODE_ENV || "development";

const config = {
    development: {
        port: process.env.PORT || 7070,
        dbUrl: "mongodb://localhost:27017",
        cookie: "x-auth-token",
        secret: "Alleluia",
    },
    productin: {}
};

module.exports = config[env];