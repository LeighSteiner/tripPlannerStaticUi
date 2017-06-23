// restaurant.js
const Sequelize = require('sequelize')
const db = require('./db')

// name
// cuisine (comma delimited string list)
// price (integer from 1-5 for how many dollar signs)

const Restaurant = db.define('restaurant', {

	name: {
		type: Sequelize.STRING, 
		allowNull: false
	},
	cuisine : {
		type: Sequelize.STRING
	}, 
	price: {
		type: Sequelize.INTEGER 
	}

}, {})

module.exports = Restaurant; 