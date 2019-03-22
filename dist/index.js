"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var context = {
  name: 'Vitor'
};

var template = function template(component) {
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n  </head>\n  <body>\n    ".concat(component, "\n  </body>\n  </html>");
};

app.get('/*', function (req, res) {
  res.send(template(_server.default.renderToString(_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement(_App.default, null)))));
});
app.listen(3002, function () {
  console.log('Server is running!');
});