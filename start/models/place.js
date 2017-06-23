// place.js
const Sequelize = require('sequelize')
const db = require('./db')

// address
// city
// state
// phone (string)
// location (lat, lon float array)

const Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	}, 
	city: {
		type: Sequelize.STRING, 
		allowNull: false
	},
	state: {
		type: Sequelize.STRING, 
		allowNull: false
	}, 
	phone: {
		type: Sequelize.STRING
	}, 
	location: {
		type: Sequelize.ARRAY(Sequelize.DOUBLE)
	}

},{})

module.exports = Place;