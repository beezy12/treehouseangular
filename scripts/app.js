// empty array here tells angular to create an app called "todoListApp". notice that in helloWorld.js
// you don't include the empty array because the app has already been created here. and this script list
// is listed befor the helloWorld.js...so i think that's why it gets created first.

// in ordor to make this a controller, I add the controller attribute
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
    // $scope.helloWorld = function() {
    //     console.log("this is the hello world controller function")
    // }

    // you can test that these variables are working by writing an angular expression
    // anywhere inside the html.   {{todos}}
    $scope.todos = [
        {"name": "clean the house"},
        {"name": "water the dog"},
        {"name": "feed the lawn"},
        {"name": "pay dem bills"}
    ]



});
