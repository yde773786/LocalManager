var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Local Manager" });
    console.log(req.cookies)
});

module.exports = router;
