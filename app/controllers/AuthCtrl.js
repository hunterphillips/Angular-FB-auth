'use strict'; 
angular.module('SongApp')

.controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
   $scope.auth = {};

   $scope.logMeIn = (loginStuff) => {
      AuthFactory.authenticate(loginStuff).then((didLogin)=>{
         $scope.login = {};
         $scope.register = {};
         $location.url("/songs/list");
      });
   };

   $scope.registerUser = (registerNewUser) => {
      AuthFactory.registerWithEmail(registerNewUser)
      .then((didRegister)=>{
         console.log(didRegister);
      });
   };

   $scope.loginUser = (loginNewUser)=>{
      $scope.logMeIn(loginNewUser);
   };

   $scope.logoutUser = () => {
      AuthFactory.logout();
      $location.url('/auth');
   };
}]);
