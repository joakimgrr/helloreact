var React = require('react');

var App = React.createClass({displayName: "App",
    getInitialState: function() {
        return {
            todos: "Testvalue that should appear"
        }
    },

    render: function() {
        return (
            React.createElement("div", {className: "row"}, 
                React.createElement("h2", null, "Todo list"), 
                "Testvalue: ", this.state.todos
            )
        );
    }
});

module.exports = App;
