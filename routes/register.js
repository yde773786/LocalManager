var express = require('express');
const {getDb} = require("../database/database");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function (req, res, next) {

    let db = getDb();

    let dbo = db.db("crud");
    dbo.collection('Users').insertOne({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "name": req.body.name
        }).then((value) => {
            console.log(value);
        }
    ).catch((err) => {
        console.log('Resource unavailable: ', err);
    })
})

module.exports = router;
