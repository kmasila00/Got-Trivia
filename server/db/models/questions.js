'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('questions', {
        name:{
            type: Sequelize.STRING,
            allowNull:false
        },
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        difficulty: {
        	type: Sequelize.ENUM('easy', 'medium', 'hard'),
        	allowNull: false
    	},
    	choices:{
    		type: Sequelize.ARRAY(Sequelize.TEXT),
    		allowNull: false
    	},
    	answer:{
    		type: Sequelize.STRING,
    		allowNull: false
    	}
    });
};