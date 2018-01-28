'use strict';
angular.module('SongApp')

.run(function ($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {
   firebase.initializeApp(FIREBASE_CONFIG);

   //watch method that fires on change of a route.  3 inputs.
   //event is a change event
   //currRoute is information about your current route
   //prevRoute is information about the route you came from
   $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
      // checks to see if there is a current user
      let logged = AuthFactory.isAuthenticated();

      let appTo;

      // to keep error from being thrown on page refresh
      if (currRoute.originalPath) {
         // check if the user is going to the auth page = currRoute.originalPath
         // if user is on auth page then appTo is true
         // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
         appTo = currRoute.originalPath.indexOf('/auth') !== -1;
      }

      //if not on /auth page AND not logged in redirect to /auth
      if (!appTo && !logged) {
         event.preventDefault();
         $location.path('/auth');
      }
   });
})

.config(['$routeProvider', function ($routeProvider) {
   
   let isAuth = (AuthFactory) =>
   new Promise((resolve, reject) => {
      if (AuthFactory.isAuthenticated()) {
         console.log("User is authenticated, resolve route promise");
         resolve();
      } else {
         console.log("User is not authenticated, reject route promise");
         reject();
      }
   });

   $routeProvider
      .when('/songs/list', {
         templateUrl: 'partials/song-list.html',
         controller: 'SongListCtrl',
         resolve: {isAuth}
      })
      .when('/songs/new', {
         templateUrl: 'partials/song-form.html',
         controller: 'SongFormCtrl',
         resolve: {isAuth}
      })
      .when('/auth', {
         templateUrl: 'partials/auth.html',
         controller: 'AuthCtrl'
      })
      .otherwise('/auth');
}]);
