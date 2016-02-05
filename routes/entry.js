var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

console.log('entry.js route loaded');

router.get('/', function(req, res, next) {
    res.send({ message: 'Welcome Home' });
});

module.exports = router;