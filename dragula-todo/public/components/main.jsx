var React = require('react');
var Router = require('react-router');

var dragula = require('dragula');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var TodoItems = require('./todoitems.jsx');
var TodoInsert = require('./todoinsert.jsx');
var Search = require('./search.jsx');
var About = require('./about.jsx');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    key: 0,
                    text: "Drink coffee"
                },
                {
                    key: 1,
                    text: "Buy milk (0,5%)"
                },
                {
                    key: 2,
                    text: "Rule the world"
                },
                {
                    key: 3,
                    text: "Break the internet"
                },
                {
                    key: 4,
                    text: "Learn reactjs"
                }
            ],
            searchString: '',
            dragStartIndex: 0,
        }
    },

    //this should be moved to todoitems
    componentDidMount: function() {
        
        var drake = dragula([document.querySelector('#todoList')]);
        var orgIndex;

        drake.on('drop', function(el) {
            var newIndex = Array.prototype.indexOf.call(el.parentNode.childNodes, el);
            var newtodos = this.state.todos;

            var row = newtodos[orgIndex];

            //if(orgIndex < newIndex) newIndex--;

            newtodos.splice(orgIndex, 1);
            newtodos.splice(newIndex, 0, row);

            this.setState({todos: newtodos});
        }.bind(this));

        drake.on('drag', function(el) {
            //save elements original index so we know what should be removed from the array
            orgIndex = Array.prototype.indexOf.call(el.parentNode.childNodes, el);
        });
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
        console.log("main did render")
        return (
            <div className="row">
                <h2>Todo List</h2>
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
