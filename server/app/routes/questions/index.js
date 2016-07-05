'use strict';

const path = require('path');
const router = require('express').Router();
const db = require(path.join(__dirname, '../../../db'));
const Questions = db.model('questions');
const Leaderboard = db.model('leaderboard');


router.get('/easy', function(req,res,next){
	Questions.findAll({
		where:{
			difficulty: 'easy'
		}
	})
	.then(function(questions){
		res.send(questions)
	})
})

router.get('/medium', function(req,res,next){
	Questions.findAll({
		where:{
			difficulty: 'medium'
		}
	})
	.then(function(questions){
		res.send(questions)
	})
})

router.get('/hard', function(req,res,next){
	Questions.findAll({
		where:{
			difficulty: 'hard'
		}
	})
	.then(function(questions){
		res.send(questions)
	})
})


module.exports = router;