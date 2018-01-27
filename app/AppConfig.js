'use strict'; 
angular.module('SongApp')

.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
   firebase.initializeApp(FIREBASE_CONFIG);
})

.config(['$routeProvider', function($routeProvider){
   $routeProvider
      .when('/songs/list', {
         templateUrl: 'partials/song-list.html',
         controller: 'SongListCtrl'
      })
      .when('/songs/new', {
         templateUrl: 'partials/song-form.html',
         controller: 'SongFormCtrl'
      })
      .when('/auth', {
         templateUrl: 'partials/auth.html',
         controller: 'AuthCtrl'
      })
      .otherwise('/auth');
}]);
