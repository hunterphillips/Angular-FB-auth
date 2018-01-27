'use strict'; 
angular.module('SongApp')

.controller('AuthCtrl', function($scope, AuthFactory){
   $scope.auth = {};

   $scope.registerUser = (registerNewUser) => {
      AuthFactory.registerWithEmail(registerNewUser)
      .then((didRegister)=>{
         console.log(didRegister);
      });
   };
});