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
// var User = db.model('user');
var Questions = db.model('questions');
var Leaderboard = db.model('leaderboard');
var Promise = require('sequelize').Promise;

var questionsToSeed = require('./seedInfo.js');

var seedQuestions = function () {

    // var users = [
    //     {
    //         email: 'testing@fsa.com',
    //         password: 'password'
    //     },
    //     {
    //         email: 'obama@gmail.com',
    //         password: 'potus'
    //     }
    // ];

    var creatingQuestions = questionsToSeed.questions.map(function (questionObj) {
        return Questions.create(questionObj);
    });

    return Promise.all(creatingQuestions);

};

// var seedQuestions = function(){
//   return questionsToSeed.questions.map(function (questionObj) {
//       return Questions.create(questionObj);
//   });

// };

db.sync({ force: true })
    .then(function () {
        return Promise.all(seedQuestions());
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
