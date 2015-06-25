var React = require('react');

var TodoInsert = React.createClass({displayName: "TodoInsert",
    setText: function(){
        var text = React.findDOMNode(this.refs.todoInput).value;
        this.props.onUpdate(text);
    },

    render: function() {
        return (
            React.createElement("div", {className: "input-group"}, 
                React.createElement("input", {
                    ref: "todoInput", 
                    type: "text", 
                    className: "form-control", 
                    placeholder: "Add todo..."}
                ), 
                React.createElement("span", {className: "input-group-btn"}, 
                    React.createElement("button", {
                        onClick: this.setText, 
                        className: "btn btn-success", 
                        type: "button"
                    }, "Add")
                )
            )
        )
    }
});

module.exports = TodoInsert;