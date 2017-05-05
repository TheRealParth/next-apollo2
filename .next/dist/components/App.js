'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/App.js';

exports.default = function (_ref) {
  var children = _ref.children,
      pathname = _ref.pathname;
  return _react2.default.createElement('main', {
    'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2319098592,
    css: '\n       @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n       @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n      * {\n        font-family: Roboto;\n      }\n    '
  }), _react2.default.createElement(_Header2.default, { pathname: pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, children), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js', 'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
};