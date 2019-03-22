"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _TodoApp = _interopRequireDefault(require("./TodoApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
  return _react.default.createElement("h2", null, "About");
}

var Users = function Users() {
  return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Users"), _react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Back"));
};

var todoItems = [];
todoItems.push({
  index: 1,
  value: "learn react",
  done: false
});
todoItems.push({
  index: 2,
  value: "Go shopping",
  done: true
});
todoItems.push({
  index: 3,
  value: "buy flowers",
  done: true
});

var Index = function Index() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h2", null, "Home"), _react.default.createElement(_TodoApp.default, {
    initItems: todoItems
  }));
};

var App = function App(props) {
  return _react.default.createElement("html", {
    lang: "en"
  }, _react.default.createElement("head", null, _react.default.createElement("meta", {
    charSet: "UTF-8"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), _react.default.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), _react.default.createElement("title", null, "Teste")), _react.default.createElement("body", null, props.name, _react.default.createElement("div", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "/"
  }, "Home")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about/"
  }, "About")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "/users/"
  }, "Users"))), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: Index
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/about/",
    component: About
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/users/",
    component: Users
  })))));
};

var _default = App;
exports.default = _default;