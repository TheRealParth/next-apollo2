'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _CreatePost = require('../datastuff/CreatePost');

var _CreatePost2 = _interopRequireDefault(_CreatePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/create.js?entry';
exports.default = (0, _withData2.default)(function (props) {
        return _react2.default.createElement(_App2.default, { data: props, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                }
        }, _react2.default.createElement('h3', {
                __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                }
        }, 'Create a post'), _react2.default.createElement('p', {
                __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                }
        }, 'Share your thoughts with people around you.'), _react2.default.createElement(_CreatePost2.default, (0, _extends3.default)({}, props, {
                __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                }
        })));
});