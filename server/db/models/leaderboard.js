'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('leaderboard', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        difficulty: {
        	type: Sequelize.ENUM('easy', 'medium', 'hard'),
        	allowNull: false
    	},
    	score:{
    		type: Sequelize.INTEGER,
    		allowNull: false
    	},
        sigil:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};