'use strict'


angular.module('todoListApp')
                            // inserting the $http here is called 'dependency injection'
.service('dataService', function($http) {

    this.helloConsole = function() {
        console.log('this is the hello console service!')
    };


    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
        .then(callback)
    };

    this.deleteTodo = function(todo) {
        console.log('the name of the deleted todo is ', todo);
    };

    this.saveTodos = function(todos) {
        console.log(todos.length + " todos have been saved")
    };

});
