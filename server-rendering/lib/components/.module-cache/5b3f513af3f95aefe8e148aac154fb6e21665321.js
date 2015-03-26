var React = require('react');

var Search = require('./search.js');
var TodoInsert = require('./todoInsert.js');
var TodoItems = require('./todoItems');


var TodoApp = React.createClass({displayName: "TodoApp",
    getInitialState: function() {
        return {
            todos: [
                {
                    key: 0,
                    text: "Test"
                }
            ],
            searchString: ''
        }
    },

    addTodo: function(newTodo) {
        var todoText = newTodo

        var todos = this.state.todos;
        var l = todos.length;

        todo = {
            key: l + 1,
            text: todoText
        }

        todos.push(todo);

        this.setState({todos: todos});
    },

    setSearch: function(searchString) {
        var string = searchString;

        this.setState({searchString: string});
    },

    render: function() {
        return (
            React.createElement("div", {className: "row"}, 
                React.createElement("h2", null, "Todo list"), 
                React.createElement(Search, {onUpdate: this.setSearch}), 
                React.createElement(TodoItems, {todos: this.state.todos, search: this.state.searchString}), 
                React.createElement(TodoInsert, {onUpdate: this.addTodo})
            )
        );
    }
});

module.exports = TodoApp;
