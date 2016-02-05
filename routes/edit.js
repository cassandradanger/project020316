var express = require('express');
var router = express.Router();
var path = require('path');

console.log('edit.js route loaded');

router.get('/', function(req, res, next) {
    res.send({ message: 'Cats drool' });
});

module.exports = router;