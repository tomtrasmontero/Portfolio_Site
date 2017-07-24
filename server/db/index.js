'use strict';
const db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
const User = require('./models/user');
const Portfolio = require('./models/portfolio');

// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)
