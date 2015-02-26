angular.module('RTreader')
	.factory('Movies', function ($resource) {
		var Movies = $resource('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/:type.json?apikey=vymecugmgctsrxbbbmztpnb9',{type: '@_type'}, {
			getMovies: {
				method: 'JSONP',
				params: {
					callback: 'JSON_CALLBACK'
				}
			}
		});

		return Movies;
	})
	.controller('MainCtrl', function($scope, $http, Movies, $routeParams) {
		console.log($routeParams);
		var type =  'opening' || $routeParams.release;

		Movies.getMovies({type: type}).$promise.then(function(movies){
			console.log(movies);
			$scope.movies = movies;
		});
		// $scope.getCurrMovies = function(){
		// }

		// $scope.getCurrMovies();
	});
