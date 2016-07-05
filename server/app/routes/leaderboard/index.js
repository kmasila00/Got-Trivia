'use strict';

const path = require('path');
const router = require('express').Router();
const db = require(path.join(__dirname, '../../../db'));
const Questions = db.model('questions');
const Leaderboard = db.model('leaderboard');

router.get('/easy', function(req,res,next){
	Leaderboard.findAll({
		where:{
			difficulty: 'easy'
		}
	})
	.then(function(scores){
		res.send(scores)
	})
})

router.get('/medium', function(req,res,next){
	Leaderboard.findAll({
		where:{
			difficulty: 'medium'
		}
	})
	.then(function(scores){
		res.send(scores)
	})
})

router.get('/hard', function(req,res,next){
	Leaderboard.findAll({
		where:{
			difficulty: 'hard'
		}
	})
	.then(function(scores){
		res.send(scores)
	})
})

router.post('/', function(req,res,next){
	Leaderboard.create(req.body)
	.then(function(){
		res.status(201).send();
	})
})


module.exports = router;