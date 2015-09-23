angular.module('todoApp', [])
    .controller('TodoListController', function ($rootScope) {
        var todoList = this;
        window.blah = $rootScope;
        todoList.todos = [
            {text: 'buy adapter', done: false},
            {text: 'buy stress ball', done: false}
        ];

        todoList.totalTodos = todoList.todos.length;

        todoList.addTodo = function () {
            todoList.todos.push({text:todoList.todoText, done:false}); //write whatever variable you want to use and then use it?
            todoList.todoText = '';
        };

        todoList.remaining = function () {
            count = 0;
            // for (todo in todoList.todos) {
            //     console.log(todoList.todos[todo].text);
            // }

            // angular.forEach(values, function(value, key))
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            console.log(count);
            return count;
        };

        function printArr(arr, num, act) {
            console.log(act);
            console.log(num);
            angular.forEach(arr, function(a) {
                console.log(a.text);
            });
        }

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = []; //assigned to a different object
       
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
            printArr(todoList.todos, 1, 'lol');
            printArr(oldTodos, 2, 'lol');
        };

    });
