var React = require('react');

var Search = React.createClass({displayName: "Search",
    search: function() {
        //  get inputs value by ref
        var searchString = React.findDOMNode(this.refs.searchString).value;

        //  set <Search /> elements onUpdate value to searchstring
        this.props.onUpdate(searchString);
    },

    render: function() {
        return (
            React.createElement("input", {
                ref: "searchString", 
                type: "text", 
                placeholder: "Search...", 
                className: "form-control", 
                onChange: this.search}
            )
        )
    }
});

module.exports = Search;
