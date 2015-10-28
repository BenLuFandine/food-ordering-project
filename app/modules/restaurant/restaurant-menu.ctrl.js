'use strict';

angular.module('foodOrderingProjectApp')
    .controller('RestaurantMenuCtrl',
    ['$scope', '$stateParams', 
    function($scope, $stateParams){
    	$scope.restaurantName = $stateParams.restaurantName;
    	$scope.currentLocation = $stateParams.currentLocation;
    	console.log($stateParams);
    	// console.log($stateParams);
    	// var MongoClient = require('mongodb').MongoClient;
		// var assert = require('assert');
		// var mongoose = require('mongoose');
		// var mongoose = require('mongoose').Mongoose;
		// var url = 'mongodb://jlu4620f15:jlu4620f15424@cs.tru.ca/COMP4620F15_jlu4620f15';
		// mongoose.connect(url, function(err, db) {
		//   assert.equal(null, err);
		//   console.log("Connected correctly to server.");
		//   db.close();
		// });
}]);