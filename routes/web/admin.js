var express = require("express");
var bcrypt = require("bcryptjs");
var flash = require("connect-flash");
let { session } = require("passport");
// const ejsLint = require("ejs-lint");
var router = express.Router();

var {AdminInfo} = require('../../models/admin_info')
var {CustomerInfo} = require('../../models/customer_info');

const {courtInfo} = require('../../models/court')


router.get("/admindashboard", function(req, res){
    res.render("admin/admindashboard");
})



router.get("/adminviewuser", function(req, res){
    var cust;
    var adm;

    CustomerInfo.find({}, (err, data1) => {
        res.render("admin/adminviewuser", {data: data1});
    })
})

router.get("/register", function(req, res){
    res.render("admin/register");
})

router.get("/login", function(req, res){
    res.render("admin/login");
})

router.get("/admincourtmanage", function(req, res){
    var cust;
    var adm;
    
    courtInfo.find({}, (err, data1) => {
        res.render("admin/admincourtmanage", {data: data1});
    })
   
})

router.get("/adminaddcourt", function(req, res){
    res.render("admin/adminaddcourt");
})

router.get("/admineditcourt/:id", function(req, res){
    console.log(req.params)
    // bookInfo.find({}, function(err,data) {
    //     if(err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log(data)
    //     }
    // })
    courtInfo.findById(req.params.id, (err, data) => {
        if(data) {
            res.render("admin/admineditcourt", {data: data});
        } else {
            res.send("tak ada")
        }
    })
})




module.exports = router;
