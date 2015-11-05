'use strict';

angular.module('foodOrderingProjectApp')
    .controller('RestaurantListCtrl',
    ['$scope', '$stateParams', '$http', '$q', 'RestaurantService',
    function($scope, $stateParams, $http, $q, RestaurantService){
    	$scope.currentLocation = $stateParams.currentLocation;
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




		// var getJSON = function(url) {
		// 	return new Promise(function(resolve, reject) {
		// 	var xhr = new XMLHttpRequest();
		// 	xhr.open('get', url, true);
		// 	// xhr.setRequestHeader('Content-Type', 'application/json');
		// 	// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		// 	xhr.responseType = 'json';
		// 	xhr.onload = function() {
		// 		var status = xhr.status;
		// 		if (status == 200) {
		// 			resolve(xhr.response);
		// 		} else {
		// 			reject(status);
		// 		}
		// 	};
		// 	xhr.send();
		// 	});
		// };

		// getJSON('http://cs.tru.ca:8080/~jlu4620f15/week6/test_mongodb.sjs').then(function(data) {
		// 	console.log(data.result);
		// }, function(status) { //error detection....
		// 	alert('Something went wrong.');
		// });



		// var script = document.createElement('script');
		// // assing src with callback name
		// script.src = 'http://cs.tru.ca:8080/~jlu4620f15/week6/test_mongodb.sjs';
		// // console.log(script);
		// document.body.appendChild(script);


		// $.getJSON( "http://cs.tru.ca:8080/~jlu4620f15/week6/test_mongodb.sjs", function( data ) {
  // 			console.log( "JSON Data: " + data );
		// });


		$scope.restaurantList = [];
		// $http.get('http://cs.tru.ca:8080/~jlu4620f15/week6/test_mongodb.sjs')
		// var deferred = $q.defer();
		// $http({
		// 	method: 'GET',
		// 	url: 'http://cs.tru.ca:8838/~jlu4620f15/project.js',
		// 	// headers: {
		// 	// 	'Content-Type': 'application/json',
		// 	// 	'Access-Control-Allow-Origin': '*'
		// 	// }
		// 	// data: angular.toJson(data)
		// })
		// .success(function ( data, status ) {
		// 	// deferred.resolve(data);
  //       	// console.log(data[0]);
  //       	angular.copy(data, $scope.restaurantList);
  //       	// console.log($scope.restaurantList);
  //       })
  //       .error(function ( data, status ) {
  //       	// deferred.reject(data);
  //       	alert('Something went wrong.');
  //       });


		// function getRestaurant() {
		RestaurantService.getRestaurantInfo()
        .then(function(data){
            angular.copy(data, $scope.restaurantList);
            // console.log($scope.restaurantList);
        }, function(data){

        });
	 //    }


	 	// this.rateFunction = function(rating) {
	  //     console.log('Rating selected: ' + rating);
	  //   };
	  	$scope.getSelectedRating = function (rating) {
	        console.log(rating);
	    }

	 	// RestaurantService.getRestaurantInfo().success(function(data) {
	 	// 	$scope.restaurantList = data;
	 	// 	console.log($scope.restaurantList);
	 	// });
        // console.log($scope.restaurantList);

		


		// function init() {
		// 	getRestaurant();
		// }

		// init();



		// var xmlhttp = new XMLHttpRequest();
		// var url = "http://cs.tru.ca:8080/~jlu4620f15/week6/test_mongodb.sjs";

		// xmlhttp.onreadystatechange = function() {
		//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		//         var myArr = JSON.parse(xmlhttp.responseText);
		//         // myFunction(myArr);
		//         console.log(myArr[0]);
		//     }
		// }
		// xmlhttp.open("GET", url, true);
		// xmlhttp.send();
}])

.directive('starRating', function () {
	// function RatingController() {
	//     this.rating1 = 5;
	//     this.rating2 = 2;
	//     this.isReadonly = true;
	//     this.rateFunction = function(rating) {
	//       console.log('Rating selected: ' + rating);
	//     };
	// }

	// function starRating() {
		// return {
		//   restrict: 'EA',
		//   template:
		//     '<ul class="star-rating" ng-class="{readonly: readonly}">' +
		//     '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
		//     '    <i class="fa fa-star"></i>' + // or &#9733
		//     '  </li>' +
		//     '</ul>',
		//   scope: {
		//     ratingValue: '=ngModel',
		//     max: '=?', // optional (default is 5)
		//     onRatingSelect: '&?',
		//     readonly: '=?'
		//   },
		//   link: function(scope, element, attributes) {
		//     if (scope.max == undefined) {
		//       scope.max = 5;
		//     }
		//     function updateStars() {
		//       scope.stars = [];
		//       for (var i = 0; i < scope.max; i++) {
		//         scope.stars.push({
		//           filled: i < scope.ratingValue
		//         });
		//       }
		//     };
		//     scope.toggle = function(index) {
		//       if (scope.readonly == undefined || scope.readonly === false){
		//         scope.ratingValue = index + 1;
		//         scope.onRatingSelect({
		//           rating: index + 1
		//         });
		//       }
		//     };
		//     scope.$watch('ratingValue', function(oldValue, newValue) {
		//       if (newValue) {
		//         updateStars();
		//       }
		//     });
		//   }
		// };
	// }



	return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});

