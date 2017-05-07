"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/graphql/next-apollo/datastuff/CreatePost.js";


var CreatePost = function (_React$Component) {
  (0, _inherits3.default)(CreatePost, _React$Component);

  function CreatePost(props) {
    (0, _classCallCheck3.default)(this, CreatePost);

    return (0, _possibleConstructorReturn3.default)(this, (CreatePost.__proto__ || (0, _getPrototypeOf2.default)(CreatePost)).call(this, props));
  }

  (0, _createClass3.default)(CreatePost, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getUser",
    value: function getUser() {
      if (process.browser) {
        return {
          id: window.localStorage.getItem("id") ? window.localStorage.getItem("id") : false,
          username: window.localStorage.getItem("username") ? window.localStorage.getItem("username") : false,
          firstName: window.localStorage.getItem("firstName") ? window.localStorage.getItem("firstName") : false,
          lastName: window.localStorage.getItem("lastName") ? window.localStorage.getItem("lastName") : false,
          longitude: window.localStorage.getItem("longitude") ? window.localStorage.getItem("longitude") : false,
          latitude: window.localStorage.getItem("latitude") ? window.localStorage.getItem("latitude") : false
        };
      } else return false;
    }
  }, {
    key: "getValidClassNames",
    value: function getValidClassNames(field) {
      return { 'validate': true, 'valid': this.getUser()[field] ? true : false };
    }
  }, {
    key: "getInitialValue",
    value: function getInitialValue(field) {
      return this.getUser()[field] ? this.getUser()[field] : "";
    }
  }, {
    key: "setValue",
    value: function setValue(e, value) {
      console.log(e);
      console.log(value);
      if (process.browser) {}
    }
  }, {
    key: "clearField",
    value: function clearField(field) {}
  }, {
    key: "render",
    value: function render() {
      var _React$createElement,
          _this2 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("div", (_React$createElement = { className: "col s6" }, (0, _defineProperty3.default)(_React$createElement, "className", "col s6 blue z-depth-5"), (0, _defineProperty3.default)(_React$createElement, "style", {
        float: 'right',
        height: 200 + 'px',
        zIndex: 10,
        width: 450 + 'px',
        position: 'fixed',
        right: 275 + 'px',
        color: '#ffffff',
        top: 130 + 'px',
        borderRadius: 8 + 'px'
      }), (0, _defineProperty3.default)(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 45
      }), _React$createElement)), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("form", { className: "col s12", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", { className: "input-field col s4", __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("input", { id: "first_name", type: "text", onKeyPress: function onKeyPress(e) {
          _this2.setValue(e, 'firstName');
        }, className: this.getValidClassNames('firstName'), defaultValue: this.getInitialValue('firstName'), __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement("label", { htmlFor: "first_name", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "First Name"))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("div", { className: "input-field col s4", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("input", { id: "last_name", type: "text", className: this.getValidClassNames('lastName'), defaultValue: this.getInitialValue('lastName'), __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement("label", { htmlFor: "last_name", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Last Name"))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("div", { className: "input-field col s4", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("input", { className: this.getValidClassNames('username'), defaultValue: this.getInitialValue('username'), id: "username", type: "text", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement("label", { htmlFor: "username", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Username"))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("div", { className: "input-field col s4", __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("input", { id: "title", type: "text", className: "validate", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement("label", { htmlFor: "post_title", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Post Title"))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("div", { className: "input-field col s4", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement("input", { id: "last_name", type: "text", className: "validate", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement("label", { htmlFor: "post_body", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Post Body"))))));
    }
  }]);

  return CreatePost;
}(_react2.default.Component);

exports.default = CreatePost;