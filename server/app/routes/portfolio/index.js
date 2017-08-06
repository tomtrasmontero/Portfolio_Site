'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
const Portfolio = require('../../../db').models.portfolio;
const nodemailer = require('nodemailer');
module.exports = router;

//email info
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_NAME,
    pass: process.env.GMAIL_PASS
  }
});

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

router.post('/message', function(req, res, next){

	const mailOptions = {
	  from: 'tomlearnsprogramming@gmail.com',
	  to: 'tomlearnsprogramming@gmail.com',
	  subject: `${req.body.name} has sent a message`,
	  text: `Email: ${req.body.email} , ${req.body.message}`
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	    res.send(false);
	  } else {
	    res.send(true);
	  }
	});

});
