'use strict';

/**
 * @ngdoc overview
 * @name messageboardApp
 * @description
 * # messageboardApp
 *
 * Main module of the application.
 */


var app = angular
    .module('messageboardApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ])
    .constant('FIREBASE_URL', 'https://messageboardwalkthrough.firebaseio.com/')


.config(function($routeProvider) {
    $routeProvider
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'views/showpost.html',
            controller: 'PostViewCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function(Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function(Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/users/:userId', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});