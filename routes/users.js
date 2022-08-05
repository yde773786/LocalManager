var express = require("express");
var connect = require("../database/database");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    connect()
        .then(() => res.send("connected"))
        .catch((err) => {
            res.send("error while connecting");
            console.log(err);
        });
});

// router.post('/', function (req, res, next) {

// })

module.exports = router;
