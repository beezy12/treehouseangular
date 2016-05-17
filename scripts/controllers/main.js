'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {

    // angular is so awesome that it will auto update the ui as the new todo is added
    // to the $scope.todos
    $scope.addTodo = function() {
        var todo = {name: 'this is a new todo'};
        $scope.todos.unshift(todo);
    };

    $scope.helloConsole = dataService.helloConsole;

    // when this controller is loaded, it fires the getTodos function below, which
    // retrievs some data from the database and sticks it on the $scope.todos variable
    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.learningNgChange = function() {
        console.log("input changed!")
    }

    // you can test that these variables are working by writing an angular expression
    // anywhere inside the html.   {{todos}}

    // we moved these to the mock folder. it is a mock of a database.

    // $scope.todos = [
    //     {"name": "clean the house"},
    //     {"name": "water the dog"},
    //     {"name": "feed the lawn"},
    //     {"name": "pay dem bills"}
    // ]

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    // this now saves ALL todos that have been edited, and not just one
    $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo) {
            if(todo.edited) {
                return todo;
            }
        })
        dataService.saveTodos(filteredTodos);
    }

})
