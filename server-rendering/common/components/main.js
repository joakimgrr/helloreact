var React = require('react');

var Search = require('./search.js');
var TodoInsert = require('./todoInsert.js');
var TodoItems = require('./todoItems');


var TodoApp = React.createClass({
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
            <div className="row">
                <h2>Todo list</h2>
                <Search onUpdate={this.setSearch}/>
                <TodoItems todos={this.state.todos} search={this.state.searchString}/>
                <TodoInsert onUpdate={this.addTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
