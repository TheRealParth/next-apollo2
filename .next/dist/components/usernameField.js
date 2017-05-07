'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserPic = require('./UserPic');

var _UserPic2 = _interopRequireDefault(_UserPic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/usernameField.js';


var UsernameField = function (_React$Component) {
  (0, _inherits3.default)(UsernameField, _React$Component);

  function UsernameField(props) {
    (0, _classCallCheck3.default)(this, UsernameField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UsernameField.__proto__ || (0, _getPrototypeOf2.default)(UsernameField)).call(this, props));

    _this.handleKey = function (e) {
      if (e.charCode == 13 && e.target.value) {
        _this.props.setUsername(e.target.value);
        console.log(e.target.value);
        e.target.value = "";
      }
    };

    _this.render = function () {
      if (_this.props.username) {
        return _react2.default.createElement('div', { className: 'col s12', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement('span', { style: { fontSize: .5 + "em", float: 'left' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, '  ', _this.props.username), _react2.default.createElement('div', { className: 'col sm2', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, _react2.default.createElement(_UserPic2.default, { style: { width: 40 + "px", marginTop: 10 + "px" }, username: _this.props.username, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }))));
      } else {
        return _react2.default.createElement('div', { className: 'input-field col s6', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement('i', { style: { fontSize: 35 + 'px' }, className: 'material-icons huge', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, 'account_circle'), _react2.default.createElement('label', { style: { color: '#ffffff' }, htmlFor: 'icon_prefix', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, 'Username'), _react2.default.createElement('input', { onKeyPress: _this.handleKey, id: 'icon_prefix', type: 'text', className: 'validate', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }));
      };
    };

    console.log(props);
    return _this;
  }

  return UsernameField;
}(_react2.default.Component);

exports.default = UsernameField;