// Insert the EVENT model
const User = require("../users/User");
const jwt = require('../../utils/jwt');
const { cookie } = require('../../config/config');

module.exports = {
    get: {
        login(req, res, next) {
            res.status(200).render("users/login.hbs")
        },
        register(req, res, next) {
            res.status(200).render("users/register.hbs")
        },
        logout(req, res, next) {
            req.user = null;
            res.clearcookie(cookie).status(300).redirect("/home/")
        },
    },
    post: {
        login(req, res, next) {
            const { username, password } = req.body;
            console.log(username, password);
            User.findOne({ username }).then((user) => {
                return Promise.all([user.passwordsMatch(password), user])
            }).then(([match, user]) => {
                if (!match) {
                    next(err);
                    return;
                }
                const token = jwt.createToken(user);

                res.status(201).cookie(cookie, token, { maxAge: 3600000 }).redirect("/home/");
            })
        }
    }
}