/* jshint undef: true, unused: true, latedef: true */
/* jshint quotmark: single, eqeqeq: true, camelcase: true */
/* jshint devel: true, globalstrict: true */

/* global angular */

'use strict';

angular.module('mainModule', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

angular.module('mainModule').controller('homeController', function($scope, postResource) {
  function fetchPosts() {
    postResource.query(function(data) {
      $scope.posts = data;
    });
  }
  fetchPosts();
  $scope.addPost = function(message) {
    if (!message) return;
    if (!$scope.myself) return;
    postResource.save({
      message: message,
      from: {
        id: $scope.myself.facebook_user_id, // jshint ignore:line
        name: $scope.myself.fullname
      }
    }, fetchPosts);
  };
});
// angular.module('mainModule').config(function($routeProvider) {
//   $routeProvider.
//   when('/home', {
//     templateUrl: 'partials/home.html',
//     controller: 'homeController'
//   }).
//   when('/about', {
//     templateUrl: 'partials/about.html'
//   }).
//   otherwise({
//     redirectTo: '/home'
//   });
// });

// angular.module('mainModule').run(function($rootScope, userResource, countVisitor) {
//   userResource.get({
//     id: 'myself'
//   }, function(data) {
//     $rootScope.myself = data;
//     countVisitor.get({
//       id: data._id
//     }, function(data) {
//       $rootScope.userCount = data.userCount;
//     });
//   });
// });


// angular.module('mainModule').factory('postResource', function($resource) {
//   return $resource('posts/:id');
// });
//
