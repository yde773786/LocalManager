var express = require('express');
const {getDb} = require("../database/database");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', async (req, res, next) => {

    let db = getDb();

    let dbo = db.db("crud");

    let checkInsert = async () => {

        if(!(await dbo.collection('Users').findOne({"_id":req.body.username}))){
            dbo.collection('Users').insertOne({
                "_id": req.body.username,
                "password": req.body.password,
                "email": req.body.email,
                "name": req.body.name
            }).then((value) => {
                    console.log(value);
                    res.render('register', {
                        message: 'You have registered!'
                    })
                }
            ).catch((err) => {
                console.log('Resource unavailable: ', err);
                res.status(500)
            })
        }
        else{
            res.render('register', {
                message: 'There is already a user registered under that username'
            })
        }
    }

    await checkInsert();
})

module.exports = router;
