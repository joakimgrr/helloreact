var React = require('react');

var TodoItems = React.createClass({
    render: function() {
        /**
        *   todos and searchsting are passed to <TodoItems />
        *   from state
        */
        var todoItems = this.props.todos;
        var searchString = this.props.search.toLowerCase();

        // If we have a searchsting filter the items array
        if(searchString.length > 0){
            todoItems = todoItems.filter(function(todo) {
                return todo.text.toLowerCase().match(searchString);
            });
        }

        var elements = todoItems.map(function(todo){
            return <li key={todo.key} className="list-group-item">{todo.text}</li>
        });

        return (
            <ul className="list-group">
                {elements}
            </ul>
        )
    }
});

module.exports = TodoItems;