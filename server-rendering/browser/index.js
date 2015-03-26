var React = require('react');
var ReactApp = require('../lib/components/main');

var AppFactory = React.createFactory(ReactApp);

var renderTarget = document.getElementById('content');

var renderedComponent = React.render(
    AppFactory(), renderTarget
);
