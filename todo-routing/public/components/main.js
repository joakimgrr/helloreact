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

var MainApp = React.createClass({
    render: function() {
        return (
            <div>
                <RouteHandler/>
                <Link to="/">Todolist</Link>
                <Link to="about">About</Link>
            </div>
        )
    }
});

var routes = (
  <Route name="app" path="/" handler={MainApp}>
    <DefaultRoute handler={TodoApp} />
    <Route name="about" handler={About} />
  </Route>
);


Router.run(routes, function(Handler) {
    React.render( <Handler />, document.getElementById('reactDom') );
});
