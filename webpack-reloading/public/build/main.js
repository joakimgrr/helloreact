var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var TodoItems = require('./todoitems.js');
var TodoInsert = require('./todoinsert.js');
var Search = require('./search.js');
var About = require('./about.js');

var TodoApp = React.createClass({displayName: "TodoApp",
    getInitialState: function() {
        return {
            todos: [
                {
                    key: 0,
                    text: "Make coffee"
                },
                {
                    key: 1,
                    text: "Buy milk"
                },
                {
                    key: 2,
                    text: "Rule the world"
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

var MainApp = React.createClass({displayName: "MainApp",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(RouteHandler, null), 
                React.createElement(Link, {to: "/"}, "Todolist"), 
                React.createElement(Link, {to: "about"}, "About")
            )
        )
    }
});

var routes = (
  React.createElement(Route, {name: "app", path: "/", handler: MainApp}, 
    React.createElement(DefaultRoute, {handler: TodoApp}), 
    React.createElement(Route, {name: "about", handler: About})
  )
);


Router.run(routes, function(Handler) {
    React.render( React.createElement(Handler, null), document.getElementById('reactDom') );
});
