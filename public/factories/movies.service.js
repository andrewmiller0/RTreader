'use strict';

angular.module('RTreader')
  .factory('Movies', function ($resource) {
    var Movies = $resource('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/:type.json?apikey=vymecugmgctsrxbbbmztpnb9', { type: '@_type' }, {
      get: {
        method: 'GET',
        params: {
					callback: 'JSON_CALLBACK'
        }
      }
    });

    return Movies;
  });
