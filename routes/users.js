var express = require('express');
const {getDb} = require("../database/database");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.post('/', function (req, res, next) {
    console.log('USERNAME: ', req.body.username);
    console.log('PASSWORD: ', req.body.password);
    let db = getDb();

    let dbo = db.db("crud");
    dbo.collection('Users').findOne({"username": req.body.username}).then((value) => {
            console.log(value);
        }
    ).catch((err) => {
        console.log('Resource unavailable: ', err);
    })
})

module.exports = router;
