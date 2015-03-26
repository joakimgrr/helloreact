var React = require('react');
var Handlebars = require('handlebars');
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();

var ReactApp = require('../lib/components/main');

var AppFactory = React.createFactory(ReactApp);

var renderedReactComponent = React.renderToString(
    AppFactory({})
);

var fileData = fs.readFileSync(__dirname + '/templates/layout.handlebars').toString();
var layoutTemplate = Handlebars.compile(fileData);

var renderedLayout = layoutTemplate({
    content: renderedReactComponent
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
    res.send(renderedLayout);
});

app.listen(3000, function() {
    console.log('Listening to port 3000');
});
