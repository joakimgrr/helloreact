var TodoInsert = React.createClass({
    setText: function(){
        var text = React.findDOMNode(this.refs.todoInput).value;
        this.props.onUpdate(text);
    },

    render: function() {
        return (
            <div>
                <input ref="todoInput" type="text" />
                <button onClick={this.setText}>Add</button>
            </div>
        )
    }
});

var TodoItems = React.createClass({
    render: function() {
        var todoItems = this.props.todos;
        var searchString = this.props.search.toLowerCase();

        if(searchString.length > 0){
            todoItems = todoItems.filter(function(todo) {
                return todo.text.toLowerCase().match(searchString);
            });
        }

        var elements = todoItems.map(function(todo){
            return <li key={todo.key}>{todo.text}</li>
        });

        return (
            <ul>
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
            <div>
                <p>Todo list</p>
                <TodoItems todos={this.state.todos} search={this.state.searchString}/>
                <TodoInsert onUpdate={this.addTodo}/>
                <Search onUpdate={this.setSearch}/>
            </div>
        );
    }
});

React.render(
    <TodoApp />,
    document.getElementById('reactDom')
);
