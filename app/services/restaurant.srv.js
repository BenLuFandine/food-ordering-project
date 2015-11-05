'use strict';

angular.module('app.restaurant.services')
	.factory('RestaurantService', 
	['$http', '$q',
	function($http, $q){

	var restaurant = {};

	restaurant.getRestaurantInfo = function() {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: 'http://cs.tru.ca:8838/~jlu4620f15/project.js',
		})
		.success(function ( data, status ) {
			deferred.resolve(data);
        })
        .error(function ( data, status ) {
        	deferred.reject(status);
        });
        return deferred.promise;
	}	// end getRestaurantInfo

	return restaurant;


		// return {
		// 	getRestaurantInfo : function() {
		// 		return $http({
		//             url: 'http://cs.tru.ca:8838/~jlu4620f15/project.js',
		//             method: 'GET'
		//         })
		// 	}
		// }
}]);