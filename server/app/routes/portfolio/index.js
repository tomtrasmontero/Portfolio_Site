'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
const Portfolio = require('../../../db').models.portfolio;
module.exports = router;

router.get('/', function(req, res, next){
	Portfolio.findAll({})
	.then( function(result) {
		res.send(result);
	})
	.catch(next);
});

router.get('/:id', function(req, res, next){
	Portfolio.findAll({ where: { id: req.params.id }})
	.then( function(result) {
		res.send(result);
	})
	.catch(next);
});

