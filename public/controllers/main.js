angular.module('RTreader')
	.factory('Movies', function ($resource) {
		var apiKey = 'vymecugmgctsrxbbbmztpnb9';
		var Movies = $resource('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/:type.json?apikey=' + apiKey + '&page=:page',{type: '@_type', page: '@_page'}, {
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
		$scope.movieType = $routeParams.release || 'in_theaters';
		$scope.getMovies = function(){
			$scope.page = 1;
			Movies.getMovies({type: $scope.movieType, page: $scope.page}).$promise.then(function(movies){
				console.log(movies);
				$scope.movies = movies;
			});
		}
		$scope.paginate = function(){
			console.log('hi');
			$scope.page++;
			Movies.getMovies({type:$scope.movieType, page: $scope.page}).$promise.then(function(movies){
				$scope.movies.movies = $scope.movies.movies.concat(movies.movies);
				console.log($scope.movies);
			});
		}


		$scope.getMovies();
	});
