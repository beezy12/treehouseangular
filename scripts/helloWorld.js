// making a directive here
// you'll see that although I called it helloWorld here, in html it has to be lowercase with a dash between
angular.module('todoListApp')
.directive('helloWorld', function() {
    return {
        template: 'this is the hello world directive'
    }
})
