var TodoInsert = React.createClass({
    setText: function(){
        var text = React.findDOMNode(this.refs.todoInput).value;

        console.log("text: ",text)

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
        var todoItems = this.props.todos.map(function(todo){
                return <li key={todo.key}>{todo.text}</li>
        });

        console.log(todoItems)

        return (
            <ul>
                {todoItems}
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
            ]
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

    render: function() {
        return (
            <div>
                <p>Todo list</p>
                <TodoItems todos={this.state.todos}/>
                <TodoInsert onUpdate={this.addTodo}/>
            </div>
        );
    }
});

React.render(
    <TodoApp />,
    document.getElementById('reactDom')
);
