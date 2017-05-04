'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/next-apollo/components/Header.js';

exports.default = function (_ref) {
    var pathname = _ref.pathname;
    return _react2.default.createElement('header', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'About')));
};