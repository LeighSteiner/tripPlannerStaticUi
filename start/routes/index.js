const router = require('express').Router();

const db = require('../models/db.js');
const Hotel = require('../models/hotel.js');
const Restaurant = require('../models/restaurant.js'); 
const Activity = require('../models/activity.js');

router.get('/', function(req,res,next){
	var outerScopeContainer = {};
Hotel.findAll()
.then(function (dbHotels) {
  outerScopeContainer.dbHotels = dbHotels;
  return Restaurant.findAll();
})
.then(function (dbRestaurants) {
  outerScopeContainer.dbRestaurants = dbRestaurants;
  console.log( Array.isArray(outerScopeContainer.dbHotels));
  return Activity.findAll();
})
.then(function (dbActivities) {
  res.render('index', {

    templateHotels: outerScopeContainer.dbHotels,
    templateRestaurants: outerScopeContainer.dbRestaurants,
    templateActivities: dbActivities
   
  });
})
.catch(next);
})


module.exports = router;