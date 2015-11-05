'use strict';

angular.module('foodOrderingProjectApp')
    .controller('RestaurantMenuCtrl',
    ['$scope', '$stateParams', 'RestaurantService',
    function($scope, $stateParams, RestaurantService){
    	$scope.restaurantName = $stateParams.restaurantName;
    	$scope.currentLocation = $stateParams.currentLocation;
    	// console.log($stateParams);
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

    	$scope.restaurantList = [];
    	$scope.menuList = [];
    	RestaurantService.getRestaurantInfo()
        .then(function(data){
            angular.copy(data, $scope.restaurantList);
            // console.log($scope.restaurantList[0].restaurant[0]);
            // var restaurant = [];
            for(var i = 0; i < $scope.restaurantList[0].restaurant.length; i++) {
            	// console.log(restaurant);
	    		if($scope.restaurantList[0].restaurant[i].restaurant_name == $scope.restaurantName) {
	    			$scope.menuList = $scope.restaurantList[0].restaurant[i].menu;
	    			console.log($scope.menuList);
	    		}
	    	}
            // console.log($scope.restaurantList);
        }, function(data){

        });

        $scope.getSelectedRating = function (rating) {
	        console.log(rating);
	    }
}]);

// .directive('starRating', function () {
// 	return {
//         restrict: 'A',
//         template: '<ul class="rating">' +
//             '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
//             '\u2605' +
//             '</li>' +
//             '</ul>',
//         scope: {
//             ratingValue: '=',
//             max: '=',
//             onRatingSelected: '&'
//         },
//         link: function (scope, elem, attrs) {

//             var updateStars = function () {
//                 scope.stars = [];
//                 for (var i = 0; i < scope.max; i++) {
//                     scope.stars.push({
//                         filled: i < scope.ratingValue
//                     });
//                 }
//             };

//             scope.toggle = function (index) {
//                 scope.ratingValue = index + 1;
//                 scope.onRatingSelected({
//                     rating: index + 1
//                 });
//             };

//             scope.$watch('ratingValue', function (oldVal, newVal) {
//                 if (newVal) {
//                     updateStars();
//                 }
//             });
//         }
//     }
// });