angular.module('RTreader', ['ngRoute', 'mgcrea.ngStrap', 'ngResource', 'infinite-scroll'])
.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);

	$routeProvider
		.when('/:release', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
