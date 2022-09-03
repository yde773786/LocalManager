var express = require("express");
var router = express.Router();
const {getDb} = require("../database/database");

/* GET home page. */
router.get("/", function (req, res, next) {

    if(req.cookies['access_token']){
        let db = getDb();
        let dbo = db.db("crud");
        dbo.collection('Users').findOne({"token": req.cookies['access_token']}).then((value) => {
            res.redirect('/dashboard')
        })
    }
    else{
        res.render("index", { title: "Local Manager" });
    }
});

module.exports = router;
