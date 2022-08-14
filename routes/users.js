let express = require('express');
const {getDb} = require("../database/database");
let router = express.Router();
const crypto = require('crypto');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.post('/', function (req, res, next) {
    console.log('USERNAME: ', req.body.username);
    console.log('PASSWORD: ', req.body.password);
    let db = getDb();

    let dbo = db.db("crud");
    dbo.collection('Users').findOne({"_id": req.body.username}).then((value) => {

        let hash = crypto.createHash('sha256');
        let hashed_str = hash.update(req.body.password, 'utf-8');
        if(value === null || hashed_str.digest('hex') !== value.password){
            res.render('users', {user: 'Wrong username/password'});
        }
        else{
            res.render('index');
        }
    }).catch((err) => {
        console.log('Resource unavailable: ', err);
    })
})

module.exports = router;
