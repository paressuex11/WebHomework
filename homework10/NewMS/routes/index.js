var express = require('express');
var router = express.Router();

var db = require("../db");

const fs = require('fs');

/* GET home page. */
router.get("/", function(req, res, next){

  res.render("login")
});

router.post("/", function(req, res, next){

  var body = req.body;
  
  res.render('detail', {user:body});
});

router.get('/regist', function(req, res, next) {
  
  res.render("index");
});

router.post('/regist',function(req,res, next) {
  var body = req.body;
  var user = new db.User({
    username: body.username,
    studentID: body.studentID,
    password: body.password,
    re_password: body.re_password,
    phonenumber: body.phonenumber,
    email: body.email
  });
  user.save(function (err, res) {
    console.log(res);
  })

 
});

router.get('/query',function (req,res,next) {
  for(key in req.query){
    db.User.find({
      key:req.query[key]
    },function(err, res){
      if(res == []){
        
      }
    });
  }  


  // for (key in req.query){
  //   for(let user of db.data){
  //     if(user[key] == req.query[key]){
  //       res.send("Repeated");
  //       return;
  //     }
  //   }
  // }
  // res.send("Fine");
})
module.exports = router;
