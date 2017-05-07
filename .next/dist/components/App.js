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
      props = _ref.props;
  return _react2.default.createElement('main', { className: 'darken-2', 'data-jsx': 3304808311,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 3304808311,
    css: '\n       @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n       @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n      * {\n        font-family: Roboto;\n\n      }\n      body {\n        color: #404040;\n      }\n      h3{\n        font-weight: 200;\n      }\n    '
  }), _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, username: props.url.username, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3304808311,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, children), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js', 'data-jsx': 3304808311,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
};