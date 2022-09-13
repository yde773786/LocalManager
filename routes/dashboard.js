var express = require("express");
const fs = require('fs')
const {current} = require("../database/database")
const os = require("os");
var router = express.Router();

let allfiles = {files: []}
let dir
let file

router.get("/", function (req, res, next) {
    if(current.user){
        res.render("dashboard", {username: current.user['name']});
        dir = '/home/' + os.userInfo().username + '/CRUD/' + current.user['_id'];
    }
    else{
        res.render("noaccess");
    }
});

router.get("/files", function (req, res, next) {

    allfiles.files = []

    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
            allfiles.files.push(file)
        })

        res.json(allfiles)
    })
});

router.post("/download", function (req, res) {
    file = dir + '/' + req.body.filename
    res.redirect('/dashboard')
});

router.get("/download", function (req, res) {
    res.download(file, req.body.filename, (err) => {
        if(err){
            console.log(err)
        }
    })
});

module.exports = router;