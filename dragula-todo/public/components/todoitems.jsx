var React = require('react');

var dragula = require('dragula');

var TodoItems = React.createClass({
    getInitialState: function() {
        return {
            todos: []
        }
    },

    componentDidMount: function(){
        this.setState({todos: this.props.todos});
    },

    render: function() {
        /**
        *   todos and searchsting are passed to <TodoItems />
        *   from state
        */
        var todoItems = this.state.todos;
        console.log("todoitems todoitems: ",todoItems);
        var searchString = this.props.search.toLowerCase();

        // If we have a searchsting filter the items array
        if(searchString.length > 0){
            todoItems = todoItems.filter(function(todo) {
                return todo.text.toLowerCase().match(searchString);
            });
        }

        var elements = todoItems.map(function(todo){
            return <div key={todo.key} data-id={todo.key} className="list-group-item" ref="todoItem">{todo.text}</div>
        });

        return (
            <div className="list-group" id="todoList">
                {elements}
            </div>
        )
    }
});

module.exports = TodoItems;