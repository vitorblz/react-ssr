"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TodoList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoList).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.items.map(function (item, index) {
        return _react.default.createElement(TodoListItem, {
          key: index,
          item: item,
          index: index,
          removeItem: _this.props.removeItem,
          markTodoDone: _this.props.markTodoDone
        });
      });
      return _react.default.createElement("ul", {
        className: "list-group"
      }, " ", items, " ");
    }
  }]);

  return TodoList;
}(_react.default.Component);

var TodoListItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TodoListItem, _React$Component2);

  function TodoListItem(props) {
    var _this2;

    _classCallCheck(this, TodoListItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TodoListItem).call(this, props));
    _this2.onClickClose = _this2.onClickClose.bind(_assertThisInitialized(_this2));
    _this2.onClickDone = _this2.onClickDone.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(TodoListItem, [{
    key: "onClickClose",
    value: function onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
  }, {
    key: "onClickDone",
    value: function onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
  }, {
    key: "render",
    value: function render() {
      var todoClass = this.props.item.done ? "done" : "undone";
      return _react.default.createElement("li", {
        className: "list-group-item "
      }, _react.default.createElement("div", {
        className: todoClass
      }, _react.default.createElement("span", {
        className: "glyphicon glyphicon-ok icon",
        "aria-hidden": "true",
        onClick: this.onClickDone
      }), this.props.item.value, _react.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: this.onClickClose
      }, "\xD7")));
    }
  }]);

  return TodoListItem;
}(_react.default.Component);

var TodoForm =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TodoForm, _React$Component3);

  function TodoForm(props) {
    var _this3;

    _classCallCheck(this, TodoForm);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TodoForm).call(this, props));
    _this3.onSubmit = _this3.onSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(TodoForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refs.itemName.focus();
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      console.log("teste");
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;

      if (newItemValue) {
        this.props.addItem({
          newItemValue: newItemValue
        });
        this.refs.form.reset();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("form", {
        ref: "form",
        className: "form-inline"
      }, _react.default.createElement("input", {
        type: "text",
        ref: "itemName",
        className: "form-control",
        placeholder: "add a new todo..."
      }), _react.default.createElement("button", {
        onClick: function onClick() {
          return onSubmit();
        },
        className: "btn btn-default"
      }, "Add"));
    }
  }]);

  return TodoForm;
}(_react.default.Component);

var TodoHeader =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(TodoHeader, _React$Component4);

  function TodoHeader() {
    _classCallCheck(this, TodoHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoHeader).apply(this, arguments));
  }

  _createClass(TodoHeader, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("h1", null, "Todo list");
    }
  }]);

  return TodoHeader;
}(_react.default.Component);

var TodoApp =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(TodoApp, _React$Component5);

  function TodoApp(props) {
    var _this4;

    _classCallCheck(this, TodoApp);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).call(this, props));
    _this4.addItem = _this4.addItem.bind(_assertThisInitialized(_this4));
    _this4.removeItem = _this4.removeItem.bind(_assertThisInitialized(_this4));
    _this4.markTodoDone = _this4.markTodoDone.bind(_assertThisInitialized(_this4));
    _this4.state = {
      todoItems: props.initItems
    };
    return _this4;
  }

  _createClass(TodoApp, [{
    key: "addItem",
    value: function addItem(todoItem) {
      console.log(todoItem);
      this.state.todoItems.unshift({
        index: this.state.todoItems.length + 1,
        value: todoItem.newItemValue,
        done: false
      });
      this.setState({
        todoItems: this.state.todoItems
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({
        todoItems: todoItems
      });
    }
  }, {
    key: "markTodoDone",
    value: function markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({
        todoItems: todoItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "main"
      }, _react.default.createElement(TodoHeader, null), _react.default.createElement(TodoList, {
        items: this.props.initItems,
        removeItem: this.removeItem,
        markTodoDone: this.markTodoDone
      }), _react.default.createElement(TodoForm, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(_react.default.Component);

exports.default = TodoApp;