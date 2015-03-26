var React = require('react');

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

module.exports = TodoInsert;
