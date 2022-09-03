var express = require("express");
const {current} = require("../database/database")
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("dashboard", {username: current.user['name']});
});

module.exports = router;