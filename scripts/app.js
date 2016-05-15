// empty array here tells angular to create an app called "todoListApp". notice that in helloWorld.js
// you don't include the empty array because the app has already been created here. and this script list
// is listed befor the helloWorld.js...so i think that's why it gets created first.

// in ordor to make this a controller, I add the controller attribute
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

    // angular is so awesome that it will auto update the ui as the new todo is added
    // to the $scope.todos
    $scope.addTodo = function() {
        var todo = {name: 'this is a new todo'};
        $scope.todos.push(todo);
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

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    }

})

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

    this.saveTodos = function(todo) {
        console.log('you saved the ' + todo + ' chore.')
    };

});


