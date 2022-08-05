var express = require("express");
var router = express.Router();

var { getDb } = require("../database/database");

/* GET users listing. */
router.get("/", function (req, res, next) {
    let db = getDb();
    let dbo = db.db("crud");

    res.send("buff");
});

module.exports = router;
