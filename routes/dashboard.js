var express = require("express");
const fs = require('fs')
const {current} = require("../database/database")
const os = require("os");
var router = express.Router();

let allfiles = {files: []}

router.get("/", function (req, res, next) {
    if(current.user){
        res.render("dashboard", {username: current.user['name']});
    }
    else{
        res.render("noaccess");
    }
});

router.get("/files", function (req, res, next) {
    let dir = '/home/' + os.userInfo().username + '/CRUD/' + current.user['_id'];
    console.log(dir)
    allfiles.files = []

    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
            allfiles.files.push(file)
        })

        res.json(allfiles)
    })
});

router.post("/download", function (req, res) {
    console.log(req.body)
});

module.exports = router;