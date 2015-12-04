// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('voting', [
    'voting.AuthCtrl',
    'voting.PhotoCtrl',
    'ionic',
    'ngCordova'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/photo');

    $stateProvider.state('auth', {
        url: '/auth',
        templateUrl: 'js/auth/index.html',
        controller: 'AuthCtrl'
    });

    $stateProvider.state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    });

    $stateProvider.state('tabs.home', {
        url: '/home',
        views: {
            'home-tab': {
                templateUrl: 'js/home/index.html',
                controller: 'HomeCtrl'
            }
        }
    });

    $stateProvider.state('tabs.about', {
        url: '/about',
        views: {
            'about-tab': {
                templateUrl: 'templates/about.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/auth');

}]);

app.run(function ($ionicPlatform)
{
    $ionicPlatform.ready(function ()
    {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard)
        {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar)
        {
            StatusBar.styleDefault();
        }
    });
});
