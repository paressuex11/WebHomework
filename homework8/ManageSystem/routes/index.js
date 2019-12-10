var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var query = req.query;

  var db = fs.readFileSync("./db.json");
  db = JSON.parse(db);

  for(let user of db.data){
    if(user.username == req.query.username){
      res.render('detail', {user:user});
      return;
    }
  }
  res.render("index");
});

router.post('/',function(req,res, next) {
  var boody = req.body;
  
  var db = fs.readFileSync("./db.json");
  db = JSON.parse(db);

  boody["index"] = db.total;

  db.data.push(boody);
  db.total += 1;

  console.log(boody);
  fs.writeFileSync("./db.json", JSON.stringify(db));
  res.render('detail', {user:boody});
});

router.get('/query',function (req,res,next) {
  var db = fs.readFileSync("./db.json");
  db = JSON.parse(db);
  for (key in req.query){
    for(let user of db.data){
      if(user[key] == req.query[key]){
        res.send("Repeated");
        return;
      }
    }
  }
  res.send("Fine");
})
module.exports = router;
