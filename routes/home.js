const router = require("express").Router();
const handler = require("../handlers/home");
const isAuth = require("../utils/isAuth");

// TO DO
router.get("/", handler.get.home);   

module.exports = router;