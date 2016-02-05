var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var path = require('path');

console.log("index.js routes loaded #1");

//mongoose.connect("mongodb://localhost/project020316");
mongoose.connect("mongodb://casie:kubRA6Ub@ds033123.mongolab.com:33123/secondtest")

var Cat = mongoose.model("Cat", {name:String});

router.delete('/delete/:id', function(request, response, next){
 //response.send("Delete!");
 console.log(request.params.id);
 Cat.findByIdAndRemove(request.params.id, function (err, post) {
  response.json(post);
 });
 console.log("huh?");
});

router.post('/add', function(request, response, next){
 console.log("adding");
 var kitty = new Cat({name: request.body.name});
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
