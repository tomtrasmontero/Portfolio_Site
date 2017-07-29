/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
const Project = db.model('portfolio');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

let portfolio = function () {

    var projects = [
        {
            name: "what's on",
            description: 'Twitch-like website that allows a user to broadcast a live stream from the browser to the world.  Also allows for screen broadcast as well!',
            pictureUrl: [
                'assets/cropped/whatson/frontpage.png',
                'assets/cropped/whatson/frontpage.png'
            ],
            technology: 'AngularJs, Node.js, Express, PostgreSQL, Sequelize, Bootstrap, WebRTC, RTC Multi Connection, Dropbox',
            gitUrl: 'https://github.com/tomtrasmontero/capstone-whats-on',
            siteUrl: 'https://fs-whats-on.herokuapp.com'
        },
        {
            name: "Grace Shopper",
            description: 'E-Commerce website that allows user to create and fully manage an online store!',
            pictureUrl: [
                'assets/cropped/Grace Shopper/frontpage.png',
                'assets/cropped/Grace Shopper/frontpage.png'
            ],
            technology: 'AngularJs, Node.js, Express, PostgreSQL, Sequelize, Bootstrap,Passport.js, EmailJs, Mocha/Chai/Sinon',
            gitUrl: 'https://github.com/tomtrasmontero/Grace_Shopper',
            siteUrl: 'https://grace-hopper-wkt.herokuapp.com'
        },
        {
            name: "Portfolio Website",
            description: "What you're looking at right now!",
            pictureUrl: [
                'assets/frontpage.png',
                'assets/frontpage.png'
            ],
            technology: 'AngularJs, Node.js, Express, PostgreSQL, Sequelize, Bootstrap, Mocha/Chai/Supertest',
            gitUrl: 'https://github.com/tomtrasmontero/Portfolio_Site',
            siteUrl: 'https://tomtrasmontero-portfolio.herokuapp.com'
        }

    ];

    var creatingProjects = projects.map(function (projectObj) {
        return Project.create(projectObj);
    });

    return Promise.all(creatingProjects);

};

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return portfolio();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
