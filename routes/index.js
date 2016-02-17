var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var path = require('path');

console.log("index.js routes loaded #1");

//mongoose.connect("mongodb://localhost/project020316");
mongoose.connect("mongodb://casie:kubRA6Ub@ds033123.mongolab.com:33123/secondtest")

var Cat = mongoose.model("Cat", {
  firstName:String,
  lastName: String,
  pizza: String
});

router.delete('/delete/:id', function(request, response, next){
 //response.send("Delete!");
 console.log(request.params.id);
 Cat.findByIdAndRemove(request.params.id, function (err, post) {
  response.json(post);
 });
 console.log("huh?");
});

router.get('/get/:id', function(request, response, next){
 console.log(request.params.id);
 Cat.findById(request.params.id, function (err, post) {
  response.json(post);
 });
 console.log("get by id?");
});

router.put('/put', function(request, response, next){
 console.log("HERE", request.body);
 var updateObject = {
      firstName : request.body.firstName,
      lastName : request.body.lastName,
      pizza : request.body.pizza
 };

 Cat.findByIdAndUpdate(request.body._id, updateObject,  function (err, post) {
  response.json(post);
 });
 console.log("update by id?");
});


router.post('/add', function(request, response, next){
 console.log("adding");
 var kitty = new Cat({firstName: request.body.firstName, lastName: request.body.lastName, pizza: request.body.pizza});
 kitty.save(function(err){
  if(err) console.log("meows", err);
  response.send(kitty.toJSON());
 });
});

router.get('/cats', function(request, response, next){
 return Cat.find({}).exec(function(err, cats){
  if(err) throw new Error(err);
  response.send(JSON.stringify(cats));
 });
});


/* GET home page. */
router.get('/*', function(req, res, next) {
 res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

console.log("index.js routes loaded #2");

module.exports = router;
