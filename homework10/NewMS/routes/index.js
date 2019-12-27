var express = require('express');
var router = express.Router();
var session = require("express-session");


var db = require("../db");

const fs = require('fs');

/* GET home page. */
router.get("/", function (req, res, next) {

  if (req.session.login) {
    if (req.query.username) {
      db.User.find({ username: req.session.username }, function (err, ress) {
        console.log(req.query.username + " " + req.session.username);
        res.render("detail", { user: ress[0], wrong_mess: req.query.username == req.session.username ? "" : "Don't spy!!" });
      });
    }
    else db.User.find({ username: req.session.username }, function (err, ress) {
      res.render("detail", { user: ress[0]});
    });
  } else res.render("login", { wrong_mess: "" });
});

router.post("/", function (req, res, next) {

  db.User.find(req.body, function (err, ress) {
    if (ress.length == 0) {
      res.render("login", { wrong_mess: "Wrong username or password" });
    }
    else {
      req.session.login = true;
      req.session.username = req.body.username;
      db.User.find({ username: req.session.username }, function (err, ress) {
        res.render("detail", { user: ress[0] });
      });
    }
  });

});

router.get('/regist', function (req, res, next) {
  res.render("index");
});

router.post('/regist', function (req, res, next) {
  var body = req.body;
  var user = new db.User({
    username: body.username,
    studentID: body.studentID,
    password: body.password,
    re_password: body.re_password,
    phonenumber: body.phonenumber,
    email: body.email
  });
  user.save(function (err, ress) {
    console.log(ress);
  })
  req.session.login = true;
  req.session.username = body.username;
  res.render("detail", { "user": body });



});

router.get('/query', function (req, res, next) {
  db.User.find(req.query, function (err, ress) {
    if (ress.length == 0) {
      res.send("Fine");
    }
    else {
      res.send("Repeated");
    }
  });

});

router.get('/quit', function(req, res, next) {
  req.session.login = false;
  req.session.username = undefined;
  res.send("Bye Bye");
});

module.exports = router;
