var TodoInsert = React.createClass({
    setText: function(){
        var text = React.findDOMNode(this.refs.todoInput).value;
        this.props.onUpdate(text);
    },

    render: function() {
        return (
            <div className="input-group">
                <input
                    ref="todoInput"
                    type="text"
                    className="form-control"
                    placeholder="Add todo..."
                />
                <span className="input-group-btn">
                    <button
                        onClick={this.setText}
                        className="btn btn-success"
                        type="button"
                    >Add</button>
                </span>
            </div>
        )
    }
});

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
})

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

React.render(
    <TodoApp />,
    document.getElementById('reactDom')
);
