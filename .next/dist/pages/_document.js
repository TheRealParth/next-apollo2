'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/_document.js?entry';
// ./pages/_document.js


var _class = function (_Document) {
  (0, _inherits3.default)(_class, _Document);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'getUser',
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3846708427,
        css: '\n         @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n         @import url(\'https://fonts.googleapis.com/icon?family=Material+Icons\');\n         @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n        * {\n          font-family: Roboto;\n\n        }\n        body {\n          color: #404040;\n        }\n        h3{\n          font-weight: 200;\n        }\n      '
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 3846708427,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement('title', {
        'data-jsx': 3846708427,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, ' Fun Project ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })));
    }
  }]);

  return _class;
}(_document2.default);

exports.default = _class;