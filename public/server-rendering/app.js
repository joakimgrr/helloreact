var React = require('react');

module.exports =  React.createClass({
    getInitialState: function() {
        return {
            todos: "Testvalue that should appear"
        }
    },

    render: function() {
        return (
            <div className="row">
                <h2>Todo list</h2>
                Testvalue: {this.state.todos}
            </div>
        );
    }
});
