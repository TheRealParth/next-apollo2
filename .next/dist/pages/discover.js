'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _post = require('../datastuff/post');

var _post2 = _interopRequireDefault(_post);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _postsList = require('../datastuff/postsList.js');

var _postsList2 = _interopRequireDefault(_postsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/discover.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, { props: props, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'container col m8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Discover'), _react2.default.createElement('div', { className: 'col s12 m8 offset-m2 l6 offset-l3', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_postsList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))));
});