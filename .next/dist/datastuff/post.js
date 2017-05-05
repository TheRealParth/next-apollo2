"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js";

exports.default = function (props) {
  return _react2.default.createElement("div", { className: "card-panel grey lighten-5 z-depth-2", __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "row valign-wrapper", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "col s2", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("img", { src: props.image ? props.image : "static/placeholder.jpg", alt: "", className: "circle responsive-img", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  })), _react2.default.createElement("div", { className: "col s10", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("div", { className: "postTitle", style: { marginBottom: 8 + 'px', fontSize: 20 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title ? props.title : "< Empty > "), _react2.default.createElement("span", { className: "black-text", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.body ? props.body : "< Empty >"))));
};