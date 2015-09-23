var app = angular.module('miniGmailApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('HomeController', function () {

});