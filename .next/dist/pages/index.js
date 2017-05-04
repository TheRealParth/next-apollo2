'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/next-apollo/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
      return _react2.default.createElement(_App2.default, { pathname: props.url.pathname, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 5
            }
      }, _react2.default.createElement('h1', {
            __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7
            }
      }, ' Hello '));
});