'use strict'
var express = require('express');
var Routes = express.Router();

Routes.get('/', function( req, res ){
    res.status(200).send("Hold your horses, I am working on it !!");
});

module.exports = Routes;
