//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 


}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 


}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 


}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "",
     databaseURL: "",
     storageBucket: "",
     messagingSenderId: ""
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {

     };
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };


  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    AngularFb
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };

     // Kills browser cookie with firebase credentials
     let logout = () => {
        firebase.auth().signOut();
     };

     //Firebase: Use input credentials to authenticate user.
     let authenticate = (credentials) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
     };

     //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });

}) (angular.module ('AngularFb', []));



//====================================================================================================================
// Module:    SongApp
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };

     // Kills browser cookie with firebase credentials
     let logout = () => {
        firebase.auth().signOut();
     };

     //Firebase: Use input credentials to authenticate user.
     let authenticate = (credentials) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
     };

     //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });

}) (angular.module ('SongApp', ['ngRoute']));



//====================================================================================================================
// Module:    SongApp
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };

     // Kills browser cookie with firebase credentials
     let logout = () => {
        firebase.auth().signOut();
     };

     //Firebase: Use input credentials to authenticate user.
     let authenticate = (credentials) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
     };

     //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });

}) (angular.module ('SongApp', ['ngRoute']));



//====================================================================================================================
// Module:    SongApp
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConfig.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };

     // Kills browser cookie with firebase credentials
     let logout = () => {
        firebase.auth().signOut();
     };

     //Firebase: Use input credentials to authenticate user.
     let authenticate = (credentials) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
     };

     //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });

}) (angular.module ('SongApp', ['ngRoute']));



//====================================================================================================================
// Module:    SongApp
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConfig.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

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

//--------------------------------------------------------------------------------------------------------------------
// File: ../app/AppConstants.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .constant("FIREBASE_CONFIG", {
     apiKey: "AIzaSyCeaW_aoDOLqiWR9zPJQdSknbf3DwO-w0o",
     authDomain: "angular-fb-1.firebaseapp.com",
     databaseURL: "https://angular-fb-1.firebaseio.com/",
     storageBucket: "",
     messagingSenderId: ""
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/controllers/AuthCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .controller('AuthCtrl', function($scope, AuthFactory){
     $scope.auth = {};

     $scope.registerUser = (registerNewUser) => {
        AuthFactory.registerWithEmail(registerNewUser)
        .then((didRegister)=>{
           console.log(didRegister);
        });
     };
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ../app/factories/AuthFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict'; 
  module

  .factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){
     let currentUserData = null;

     //Firebase: Determine if user is authenticated
     let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
     };

     //Firebase: Return email, UID for current user
     let getUser = () =>{
        return firebase.auth().currentUser;
     };

     // Kills browser cookie with firebase credentials
     let logout = () => {
        firebase.auth().signOut();
     };

     //Firebase: Use input credentials to authenticate user.
     let authenticate = (credentials) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
     };

     //Firebase: Register a new user with email and password
    let registerWithEmail = (user) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getUser, logout, registerWithEmail, authenticate};
  });

}) (angular.module ('SongApp', ['ngRoute']));


