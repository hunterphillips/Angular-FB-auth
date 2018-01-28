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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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



//====================================================================================================================
// Module:    SongApp
// Optimized: Yes
// File:      ../app/app.js
//====================================================================================================================

(function (module) {

  'use strict'; 
  var app = module;

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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

     $scope.sayFuck=()=>{
        console.log('fuck');
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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
     // $scope.auth = {};

     // $scope.registerUser = (registerNewUser) => {
     //    AuthFactory.registerWithEmail(registerNewUser)
     //    .then((didRegister)=>{
     //       console.log(didRegister);
     //    });
     // };

     $scope.sayFuck=()=>{
        console.log('fuck');
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
           $scope.url("/songs/list");
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
  }]);
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
           $scope.url("/songs/list");
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
  }]);
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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
  }]);
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
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  // .isAuth = (AuthFactory) => new Promise ((resolve, reject)=>{
  //    if(AuthFactory.isAuthenticated()){
  //       console.log('user is authenticated');
  //       resolve();
  //    } else {
  //       console.log('user is not authenticated');
  //       reject();
  //    }
  // });

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = ((AuthFactory)=>{
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
           resolve();
        } else {
           reject();
        }
     });
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = ((AuthFactory)=>{
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
           resolve();
        } else {
           reject();
        }
     });
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = ((AuthFactory)=>{
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
           // console.log("User is authenticated, resolve route promise");
           resolve();
        } else {
           // console.log("User is not authenticated, reject route promise");
           reject();
        }
     });
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = (AuthFactory) =>
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
        // console.log("User is authenticated, resolve route promise");
        resolve();
      } else {
        // console.log("User is not authenticated, reject route promise");
        reject();
     }
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = (AuthFactory) =>
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
           console.log("User is authenticated, resolve route promise");
           resolve();
        } else {
           console.log("User is not authenticated, reject route promise");
           reject();
     }
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = (AuthFactory) =>
     new Promise ((resolve, reject)=>{
        if(AuthFactory.isAuthenticated()){
           console.log("User is authenticated, resolve route promise");
           resolve();
        } else {
           console.log("User is not authenticated, reject route promise");
           reject();
     }
  })

  .run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
     firebase.initializeApp(FIREBASE_CONFIG);
  })

  .config(['$routeProvider', function($routeProvider){
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        //    resolve: {isAuth}
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        //    resolve: {isAuth}
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .isAuth = (AuthFactory) =>
     new Promise((resolve, reject) => {
        if (AuthFactory.isAuthenticated()) {
           console.log("User is authenticated, resolve route promise");
           resolve();
        } else {
           console.log("User is not authenticated, reject route promise");
           reject();
        }
     })

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
     $routeProvider
        // .when('/songs/list', {
        //    templateUrl: 'partials/song-list.html',
        //    controller: 'SongListCtrl'
        //    resolve: {isAuth}
        // })
        // .when('/songs/new', {
        //    templateUrl: 'partials/song-form.html',
        //    controller: 'SongFormCtrl'
        //    resolve: {isAuth}
        // })
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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

  .controller('AuthCtrl',['$location', '$scope', 'AuthFactory',function($location, $scope, AuthFactory){
     $scope.auth = {};

     $scope.logMeIn = (loginStuff) => {
        AuthFactory.authenticate(loginStuff).then((didLogin)=>{
           $scope.login = {};
           $scope.refister = {};
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


