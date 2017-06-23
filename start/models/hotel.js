const Sequelize = require('sequelize')
const db = require('./db')



// name
// num_stars (float from 1-5)
// amenities (string of comma delimited items


const Hotel = db.define('hotel', {
	name : {
		type: Sequelize.STRING,
		allowNull: false
	}, 
	num_stars :{
		type: Sequelize.FLOAT
	}, 
	amenities: {
		type: Sequelize.STRING
	}

}, {})

module.exports = Hotel;