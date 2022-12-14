const express = require('express');
const crypto = require('crypto');
const {sessionGen} = require("../utils/utils");
const fs = require('fs');
const os = require('os');
const {getDb, current} = require("../database/database");
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', async (req, res, next) => {

    let db = getDb();

    let dbo = db.db("crud");

    let checkInsert = async () => {

        if(!(await dbo.collection('Users').findOne({"_id":req.body.username}))){

            let hash = crypto.createHash('sha256');
            let hashed_str = hash.update(req.body.password, 'utf-8');

            let access_token = sessionGen()
            dbo.collection('Users').insertOne({
                "_id": req.body.username,
                "password": hashed_str.digest('hex'),
                "email": req.body.email,
                "name": req.body.name,
                "token": access_token
            }).then((value) => {
                    console.log(value);

                    res.cookie('access_token', access_token)
                    res.redirect('/')

                    let dir = '/home/' + os.userInfo().username + '/CRUD/' + req.body.username;
                    fs.promises.mkdir(dir).then(() => {
                        console.log('Directory Created');
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
