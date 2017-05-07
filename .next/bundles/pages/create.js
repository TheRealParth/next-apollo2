
          window.__NEXT_REGISTER_PAGE('/create', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Header = __webpack_require__(530);

var _Header2 = _interopRequireDefault(_Header);

var _loader = __webpack_require__(531);

var _loader2 = _interopRequireDefault(_loader);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/App.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.jQuery = __webpack_require__(44);
      window.$ = __webpack_require__(44);
      __webpack_require__(533);
      // console.log(this.props.data.username)
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Success!");
        console.log(position);
      }, function () {
        console.log("failure");
      });
    }
  }, {
    key: 'setUsername',
    value: function setUsername(username) {
      window.localStorage.setItem("username", username);
    }
  }, {
    key: 'getUsername',
    value: function getUsername() {
      if (process.browser) return window.localStorage.getItem("username") ? window.localStorage.getItem("username") : false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', { className: 'darken-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Header2.default, { pathname: this.props.data.url.pathname, setUsername: this.setUsername, username: this.getUsername, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.children));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(437);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _usernameField = __webpack_require__(532);

var _usernameField2 = _interopRequireDefault(_usernameField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/Header.js';


var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   return this.props != nextProps;
  // }


  (0, _createClass3.default)(Header, [{
    key: 'getUsername',
    value: function getUsername() {
      if (process.browser) return this.props.username();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'blue darken-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'nav-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('div', { href: '#', className: 'brand-logo right', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_usernameField2.default, { setUsername: this.props.setUsername, username: this.getUsername(), __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement('ul', { id: 'nav', className: 'left hide-on-med-and-down', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('li', { className: this.props.pathname === '/' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Home '))), _react2.default.createElement('li', { className: this.props.pathname === '/discover' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/discover', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Discover'))), _react2.default.createElement('li', { className: this.props.pathname === '/create' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/create', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Create a Post'))))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(239);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(46);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/loader.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.render = function () {

      return _react2.default.createElement('div', { className: 'progress', 'data-jsx': 2073832950,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2073832950,
        css: 'div.progress[data-jsx="2073832950"]: {margin: 0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQUNLLHNDQUNELFlBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhcnRoL0RvY3VtZW50cy9ncmFwaHFsL25leHQtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/loader.js */'
      }), _react2.default.createElement('div', { className: 'indeterminate', 'data-jsx': 2073832950,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    };

    console.log(props);
    return _this;
  }

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/loader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/loader.js"); } } })();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _UserPic = __webpack_require__(665);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/usernameField.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/usernameField.js"); } } })();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _create = __webpack_require__(148);

var _create2 = _interopRequireDefault(_create);

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(147);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if ("undefined" == typeof jQuery) {
  var jQuery;jQuery =  true ? $ = __webpack_require__(44) : $;
}jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(a, b, c, d, e) {
    return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
  }, easeInQuad: function easeInQuad(a, b, c, d, e) {
    return d * (b /= e) * b + c;
  }, easeOutQuad: function easeOutQuad(a, b, c, d, e) {
    return -d * (b /= e) * (b - 2) + c;
  }, easeInOutQuad: function easeInOutQuad(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
  }, easeInCubic: function easeInCubic(a, b, c, d, e) {
    return d * (b /= e) * b * b + c;
  }, easeOutCubic: function easeOutCubic(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b + 1) + c;
  }, easeInOutCubic: function easeInOutCubic(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c;
  }, easeInQuart: function easeInQuart(a, b, c, d, e) {
    return d * (b /= e) * b * b * b + c;
  }, easeOutQuart: function easeOutQuart(a, b, c, d, e) {
    return -d * ((b = b / e - 1) * b * b * b - 1) + c;
  }, easeInOutQuart: function easeInOutQuart(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c;
  }, easeInQuint: function easeInQuint(a, b, c, d, e) {
    return d * (b /= e) * b * b * b * b + c;
  }, easeOutQuint: function easeOutQuint(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
  }, easeInOutQuint: function easeInOutQuint(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c;
  }, easeInSine: function easeInSine(a, b, c, d, e) {
    return -d * Math.cos(b / e * (Math.PI / 2)) + d + c;
  }, easeOutSine: function easeOutSine(a, b, c, d, e) {
    return d * Math.sin(b / e * (Math.PI / 2)) + c;
  }, easeInOutSine: function easeInOutSine(a, b, c, d, e) {
    return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;
  }, easeInExpo: function easeInExpo(a, b, c, d, e) {
    return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
  }, easeOutExpo: function easeOutExpo(a, b, c, d, e) {
    return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c;
  }, easeInOutExpo: function easeInOutExpo(a, b, c, d, e) {
    return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c;
  }, easeInCirc: function easeInCirc(a, b, c, d, e) {
    return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
  }, easeOutCirc: function easeOutCirc(a, b, c, d, e) {
    return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
  }, easeInOutCirc: function easeInOutCirc(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
  }, easeInElastic: function easeInElastic(a, b, c, d, e) {
    var f = 1.70158,
        g = 0,
        h = d;if (0 == b) return c;if (1 == (b /= e)) return c + d;if (g || (g = .3 * e), h < Math.abs(d)) {
      h = d;var f = g / 4;
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c;
  }, easeOutElastic: function easeOutElastic(a, b, c, d, e) {
    var f = 1.70158,
        g = 0,
        h = d;if (0 == b) return c;if (1 == (b /= e)) return c + d;if (g || (g = .3 * e), h < Math.abs(d)) {
      h = d;var f = g / 4;
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c;
  }, easeInOutElastic: function easeInOutElastic(a, b, c, d, e) {
    var f = 1.70158,
        g = 0,
        h = d;if (0 == b) return c;if (2 == (b /= e / 2)) return c + d;if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
      h = d;var f = g / 4;
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c;
  }, easeInBack: function easeInBack(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
  }, easeOutBack: function easeOutBack(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
  }, easeInOutBack: function easeInOutBack(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
  }, easeInBounce: function easeInBounce(a, b, c, d, e) {
    return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
  }, easeOutBounce: function easeOutBounce(a, b, c, d, e) {
    return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c;
  }, easeInOutBounce: function easeInOutBounce(a, b, c, d, e) {
    return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c;
  } }), jQuery.extend(jQuery.easing, { easeInOutMaterial: function easeInOutMaterial(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c;
  } }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (a) {
  function b(a) {
    var b = a.length,
        d = c.type(a);return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }if (!a.jQuery) {
    var c = function c(a, b) {
      return new c.fn.init(a, b);
    };c.isWindow = function (a) {
      return null != a && a == a.window;
    }, c.type = function (a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) || "function" == typeof a ? e[g.call(a)] || "object" : typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a);
    }, c.isArray = Array.isArray || function (a) {
      return "array" === c.type(a);
    }, c.isPlainObject = function (a) {
      var b;if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;try {
        if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (d) {
        return !1;
      }for (b in a) {}return void 0 === b || f.call(a, b);
    }, c.each = function (a, c, d) {
      var e,
          f = 0,
          g = a.length,
          h = b(a);if (d) {
        if (h) for (; g > f && (e = c.apply(a[f], d), e !== !1); f++) {} else for (f in a) {
          if (e = c.apply(a[f], d), e === !1) break;
        }
      } else if (h) for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++) {} else for (f in a) {
        if (e = c.call(a[f], f, a[f]), e === !1) break;
      }return a;
    }, c.data = function (a, b, e) {
      if (void 0 === e) {
        var f = a[c.expando],
            g = f && d[f];if (void 0 === b) return g;if (g && b in g) return g[b];
      } else if (void 0 !== b) {
        var f = a[c.expando] || (a[c.expando] = ++c.uuid);return d[f] = d[f] || {}, d[f][b] = e, e;
      }
    }, c.removeData = function (a, b) {
      var e = a[c.expando],
          f = e && d[e];f && c.each(b, function (a, b) {
        delete f[b];
      });
    }, c.extend = function () {
      var a,
          b,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != (typeof h === "undefined" ? "undefined" : (0, _typeof3.default)(h)) && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++) {
        if (null != (f = arguments[i])) for (e in f) {
          a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
        }
      }return h;
    }, c.queue = function (a, d, e) {
      function f(a, c) {
        var d = c || [];return null != a && (b(Object(a)) ? !function (a, b) {
          for (var c = +b.length, d = 0, e = a.length; c > d;) {
            a[e++] = b[d++];
          }if (c !== c) for (; void 0 !== b[d];) {
            a[e++] = b[d++];
          }return a.length = e, a;
        }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d;
      }if (a) {
        d = (d || "fx") + "queue";var g = c.data(a, d);return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || [];
      }
    }, c.dequeue = function (a, b) {
      c.each(a.nodeType ? [a] : a, function (a, d) {
        b = b || "fx";var e = c.queue(d, b),
            f = e.shift();"inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
          c.dequeue(d, b);
        }));
      });
    }, c.fn = c.prototype = { init: function init(a) {
        if (a.nodeType) return this[0] = a, this;throw new Error("Not a DOM node.");
      }, offset: function offset() {
        var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function position() {
        function a() {
          for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) {
            a = a.offsetParent;
          }return a || document;
        }var b = this[0],
            a = a.apply(b),
            d = this.offset(),
            e = /^(?:body|html)$/i.test(a.nodeName) ? { top: 0, left: 0 } : c(a).offset();return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), { top: d.top - e.top, left: d.left - e.left };
      } };var d = {};c.expando = "velocity" + new Date().getTime(), c.uuid = 0;for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) {
      e["[object " + h[i] + "]"] = h[i].toLowerCase();
    }c.fn.init.prototype = c.fn, a.Velocity = { Utilities: c };
  }
}(window), function (a) {
  "object" == ( false ? "undefined" : (0, _typeof3.default)(module)) && "object" == (0, _typeof3.default)(module.exports) ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a();
}(function () {
  return function (a, b, c, d) {
    function e(a) {
      for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
        var e = a[b];e && d.push(e);
      }return d;
    }function f(a) {
      return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a;
    }function g(a) {
      var b = m.data(a, "velocity");return null === b ? d : b;
    }function h(a) {
      return function (b) {
        return Math.round(b * a) * (1 / a);
      };
    }function i(a, c, d, e) {
      function f(a, b) {
        return 1 - 3 * b + 3 * a;
      }function g(a, b) {
        return 3 * b - 6 * a;
      }function h(a) {
        return 3 * a;
      }function i(a, b, c) {
        return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
      }function j(a, b, c) {
        return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
      }function k(b, c) {
        for (var e = 0; p > e; ++e) {
          var f = j(c, a, d);if (0 === f) return c;var g = i(c, a, d) - b;c -= g / f;
        }return c;
      }function l() {
        for (var b = 0; t > b; ++b) {
          x[b] = i(b * u, a, d);
        }
      }function m(b, c, e) {
        var f,
            g,
            h = 0;do {
          g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g;
        } while (Math.abs(f) > r && ++h < s);return g;
      }function n(b) {
        for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) {
          c += u;
        }--e;var g = (b - x[e]) / (x[e + 1] - x[e]),
            h = c + g * u,
            i = j(h, a, d);return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u);
      }function o() {
        y = !0, (a != c || d != e) && l();
      }var p = 4,
          q = .001,
          r = 1e-7,
          s = 10,
          t = 11,
          u = 1 / (t - 1),
          v = "Float32Array" in b;if (4 !== arguments.length) return !1;for (var w = 0; 4 > w; ++w) {
        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
      }a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);var x = v ? new Float32Array(t) : new Array(t),
          y = !1,
          z = function z(b) {
        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e);
      };z.getControlPoints = function () {
        return [{ x: a, y: c }, { x: d, y: e }];
      };var A = "generateBezier(" + [a, c, d, e] + ")";return z.toString = function () {
        return A;
      }, z;
    }function j(a, b) {
      var c = a;return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c;
    }function k(a) {
      if (a) {
        var b = new Date().getTime(),
            c = t.State.calls.length;c > 1e4 && (t.State.calls = e(t.State.calls));for (var f = 0; c > f; f++) {
          if (t.State.calls[f]) {
            var h = t.State.calls[f],
                i = h[0],
                j = h[2],
                n = h[3],
                o = !!n,
                q = null;n || (n = t.State.calls[f][3] = b - 16);for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
              var w = i[s],
                  y = w.element;if (g(y)) {
                var z = !1;if (j.display !== d && null !== j.display && "none" !== j.display) {
                  if ("flex" === j.display) {
                    var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];m.each(A, function (a, b) {
                      v.setPropertyValue(y, "display", b);
                    });
                  }v.setPropertyValue(y, "display", j.display);
                }j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);for (var B in w) {
                  if ("element" !== B) {
                    var C,
                        D = w[B],
                        E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;if (1 === r) C = D.endValue;else {
                      var F = D.endValue - D.startValue;if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue;
                    }if (D.currentValue = C, "tween" === B) q = C;else {
                      if (v.Hooks.registered[B]) {
                        var G = v.Hooks.getRoot(B),
                            H = g(y).rootPropertyValueCache[G];H && (D.rootPropertyValue = H);
                      }var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0);
                    }
                  }
                }j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y);
              }
            }j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f);
          }
        }
      }t.State.isTicking && x(k);
    }function l(a, b) {
      if (!t.State.calls[a]) return !1;for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
        var l = c[j].element;if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
          g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};var n = !1;m.each(v.Lists.transforms3D, function (a, b) {
            var c = /^scale/.test(b) ? 1 : 0,
                e = g(l).transformCache[b];g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b]);
          }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating");
        }if (!b && f.complete && !f.loop && j === k - 1) try {
          f.complete.call(e, e);
        } catch (o) {
          setTimeout(function () {
            throw o;
          }, 1);
        }h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function (a, b) {
          /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100);
        }), t(l, "reverse", { loop: !0, delay: f.delay })), f.queue !== !1 && m.dequeue(l, f.queue);
      }t.State.calls[a] = !1;for (var p = 0, q = t.State.calls.length; q > p; p++) {
        if (t.State.calls[p] !== !1) {
          i = !0;break;
        }
      }i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = []);
    }var m,
        n = function () {
      if (c.documentMode) return c.documentMode;for (var a = 7; a > 4; a--) {
        var b = c.createElement("div");if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a;
      }return d;
    }(),
        o = function () {
      var a = 0;return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
        var c,
            d = new Date().getTime();return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
          b(d + c);
        }, c);
      };
    }(),
        p = { isString: function isString(a) {
        return "string" == typeof a;
      }, isArray: Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }, isFunction: function isFunction(a) {
        return "[object Function]" === Object.prototype.toString.call(a);
      }, isNode: function isNode(a) {
        return a && a.nodeType;
      }, isNodeList: function isNodeList(a) {
        return "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == (0, _typeof3.default)(a[0]) && a[0].nodeType > 0);
      }, isWrapped: function isWrapped(a) {
        return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a));
      }, isSVG: function isSVG(a) {
        return b.SVGElement && a instanceof b.SVGElement;
      }, isEmptyObject: function isEmptyObject(a) {
        for (var b in a) {
          return !1;
        }return !0;
      } },
        q = !1;if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= n) return void (jQuery.fn.velocity = jQuery.fn.animate);var r = 400,
        s = "swing",
        t = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: b.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: c.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: m, Redirects: {}, Easings: {}, Promise: b.Promise, defaults: { queue: "", duration: r, easing: s, begin: d, complete: d, progress: d, display: d, visibility: d, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(a) {
        m.data(a, "velocity", { isSVG: p.isSVG(a), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");var u = function () {
      function a(a) {
        return -a.tension * a.x - a.friction * a.v;
      }function b(b, c, d) {
        var e = { x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction };return { dx: e.v, dv: a(e) };
      }function c(c, d) {
        var e = { dx: c.v, dv: a(c) },
            f = b(c, .5 * d, e),
            g = b(c, .5 * d, f),
            h = b(c, d, g),
            i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
            j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);return c.x = c.x + i * d, c.v = c.v + j * d, c;
      }return function d(a, b, e) {
        var f,
            g,
            h,
            i = { x: -1, v: 0, tension: null, friction: null },
            j = [0],
            k = 0,
            l = 1e-4,
            m = .016;for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;) {}return f ? function (a) {
          return j[a * (j.length - 1) | 0];
        } : k;
      };
    }();t.Easings = { linear: function linear(a) {
        return a;
      }, swing: function swing(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      }, spring: function spring(a) {
        return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
      } }, m.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) {
      t.Easings[b[0]] = i.apply(null, b[1]);
    });var v = t.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
          for (var a = 0; a < v.Lists.colors.length; a++) {
            var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b];
          }var c, d, e;if (n) for (c in v.Hooks.templates) {
            d = v.Hooks.templates[c], e = d[0].split(" ");var f = d[1].match(v.RegEx.valueSplit);"Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")]);
          }for (c in v.Hooks.templates) {
            d = v.Hooks.templates[c], e = d[0].split(" ");for (var a in e) {
              var g = c + e[a],
                  h = a;v.Hooks.registered[g] = [c, h];
            }
          }
        }, getRoot: function getRoot(a) {
          var b = v.Hooks.registered[a];return b ? b[0] : a;
        }, cleanRootPropertyValue: function cleanRootPropertyValue(a, b) {
          return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b;
        }, extractValue: function extractValue(a, b) {
          var c = v.Hooks.registered[a];if (c) {
            var d = c[0],
                e = c[1];return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e];
          }return b;
        }, injectValue: function injectValue(a, b, c) {
          var d = v.Hooks.registered[a];if (d) {
            var e,
                f,
                g = d[0],
                h = d[1];return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ");
          }return c;
        } }, Normalizations: { registered: { clip: function clip(a, b, c) {
            switch (a) {case "name":
                return "clip";case "extract":
                var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;case "inject":
                return "rect(" + c + ")";}
          }, blur: function blur(a, b, c) {
            switch (a) {case "name":
                return t.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var d = parseFloat(c);if (!d && 0 !== d) {
                  var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d = e ? e[1] : 0;
                }return d;case "inject":
                return parseFloat(c) ? "blur(" + c + ")" : "none";}
          }, opacity: function opacity(a, b, c) {
            if (8 >= n) switch (a) {case "name":
                return "filter";case "extract":
                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);return c = d ? d[1] / 100 : 1;case "inject":
                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")";} else switch (a) {case "name":
                return "opacity";case "extract":
                return c;case "inject":
                return c;}
          } }, register: function register() {
          9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));for (var a = 0; a < v.Lists.transformsBase.length; a++) {
            !function () {
              var b = v.Lists.transformsBase[a];v.Normalizations.registered[b] = function (a, c, e) {
                switch (a) {case "name":
                    return "transform";case "extract":
                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");case "inject":
                    var f = !1;switch (b.substr(0, b.length - 1)) {case "translate":
                        f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case "scal":case "scale":
                        t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);break;case "skew":
                        f = !/(deg|\d)$/i.test(e);break;case "rotate":
                        f = !/(deg|\d)$/i.test(e);}return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b];}
              };
            }();
          }for (var a = 0; a < v.Lists.colors.length; a++) {
            !function () {
              var b = v.Lists.colors[a];v.Normalizations.registered[b] = function (a, c, e) {
                switch (a) {case "name":
                    return b;case "extract":
                    var f;if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;else {
                      var g,
                          h = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;case "inject":
                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
              };
            }();
          }
        } }, Names: { camelCase: function camelCase(a) {
          return a.replace(/-(\w)/g, function (a, b) {
            return b.toUpperCase();
          });
        }, SVGAttribute: function SVGAttribute(a) {
          var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a);
        }, prefixCheck: function prefixCheck(a) {
          if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
            var e;if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
              return a.toUpperCase();
            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0];
          }return [a, !1];
        } }, Values: { hexToRgb: function hexToRgb(a) {
          var b,
              c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a = a.replace(c, function (a, b, c, d) {
            return b + b + c + c + d + d;
          }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function isCSSNullValue(a) {
          return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
        }, getUnitType: function getUnitType(a) {
          return (/^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
          );
        }, getDisplayType: function getDisplayType(a) {
          var b = a && a.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
          );
        }, addClass: function addClass(a, b) {
          a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b;
        }, removeClass: function removeClass(a, b) {
          a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function getPropertyValue(a, c, e, f) {
        function h(a, c) {
          function e() {
            j && v.setPropertyValue(a, "display", "none");
          }var i = 0;if (8 >= n) i = m.css(a, c);else {
            var j = !1;if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
              if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);return e(), k;
              }if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);return e(), l;
              }
            }var o;o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e();
          }if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
            var p = h(a, "position");("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px");
          }return i;
        }var i;if (v.Hooks.registered[c]) {
          var j = c,
              k = v.Hooks.getRoot(j);e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e);
        } else if (v.Normalizations.registered[c]) {
          var l, o;l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o);
        }if (!/^[\d-]/.test(i)) if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c)) {
          if (/^(height|width)$/i.test(c)) try {
            i = a.getBBox()[c];
          } catch (p) {
            i = 0;
          } else i = a.getAttribute(c);
        } else i = h(a, v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i;
      }, setPropertyValue: function setPropertyValue(a, c, d, e, f) {
        var h = c;if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];else {
          if (v.Hooks.registered[c]) {
            var i = c,
                j = v.Hooks.getRoot(c);e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j;
          }if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
            a.style[h] = d;
          } catch (k) {
            t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]");
          } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
        }return [h, d];
      }, flushTransformCache: function flushTransformCache(a) {
        function b(b) {
          return parseFloat(v.getPropertyValue(a, b));
        }var c = "";if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
          var d = { translate: [b("translateX"), b("translateY")], skewX: [b("skewX")], skewY: [b("skewY")], scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")], rotate: [b("rotateZ"), 0, 0] };m.each(g(a).transformCache, function (a) {
            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a]);
          });
        } else {
          var e, f;m.each(g(a).transformCache, function (b) {
            return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void (c += b + e + " "));
          }), f && (c = "perspective" + f + " " + c);
        }v.setPropertyValue(a, "transform", c);
      } };v.Hooks.register(), v.Normalizations.register(), t.hook = function (a, b, c) {
      var e = d;return a = f(a), m.each(a, function (a, f) {
        if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));else {
          var h = t.CSS.setPropertyValue(f, b, c);"transform" === h[0] && t.CSS.flushTransformCache(f), e = h;
        }
      }), e;
    };var w = function w() {
      function a() {
        return h ? B.promise || null : i;
      }function e() {
        function a(a) {
          function l(a, b) {
            var c = d,
                e = d,
                g = d;return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g];
          }function n(a, b) {
            var c, d;return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
              return c = a, "";
            }), c || (c = v.Values.getUnitType(a)), [d, c];
          }function r() {
            var a = { myParent: f.parentNode || c.body, position: v.getPropertyValue(f, "position"), fontSize: v.getPropertyValue(f, "fontSize") },
                d = a.position === I.lastPosition && a.myParent === I.lastParent,
                e = a.fontSize === I.lastFontSize;I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;var h = 100,
                i = {};if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;else {
              var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function (a, b) {
                t.CSS.setPropertyValue(j, b, "hidden");
              }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
                t.CSS.setPropertyValue(j, b, h + "%");
              }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j);
            }return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + (0, _stringify2.default)(i), f), i;
          }if (h.begin && 0 === y) try {
            h.begin.call(o, o);
          } catch (u) {
            setTimeout(function () {
              throw u;
            }, 1);
          }if ("scroll" === C) {
            var w,
                z,
                A,
                D = /^x$/i.test(h.axis) ? "Left" : "Top",
                E = parseFloat(h.offset) || 0;h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, w = h.container["scroll" + D], A = w + m(f).position()[D.toLowerCase()] + E) : h.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + D]], z = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], A = m(f).offset()[D.toLowerCase()] + E), i = { scroll: { rootPropertyValue: !1, startValue: w, currentValue: w, endValue: A, unitType: "", easing: h.easing, scrollData: { container: h.container, direction: D, alternateValue: z } }, element: f }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f);
          } else if ("reverse" === C) {
            if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);"none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);var F = m.extend(!0, {}, g(f).tweensContainer);for (var G in F) {
              if ("element" !== G) {
                var H = F[G].startValue;F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(s) || (F[G].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + G + "): " + (0, _stringify2.default)(F[G]), f);
              }
            }i = F;
          } else if ("start" === C) {
            var F;g(f).tweensContainer && g(f).isAnimating === !0 && (F = g(f).tweensContainer), m.each(q, function (a, b) {
              if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                var c = l(b, !0),
                    e = c[0],
                    f = c[1],
                    g = c[2];if (v.RegEx.isHex.test(e)) {
                  for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                    var m = [i[k]];f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m;
                  }delete q[a];
                }
              }
            });for (var K in q) {
              var L = l(q[K]),
                  M = L[0],
                  N = L[1],
                  O = L[2];K = v.Names.camelCase(K);var P = v.Hooks.getRoot(K),
                  Q = !1;if (g(f).isSVG || "tween" === P || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(K) && !O && 0 !== M && (O = 0), h._cacheValues && F && F[K] ? (O === d && (O = F[K].endValue + F[K].unitType), Q = g(f).rootPropertyValueCache[P]) : v.Hooks.registered[K] ? O === d ? (Q = v.getPropertyValue(f, P), O = v.getPropertyValue(f, K, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(f, K));var R,
                    S,
                    T,
                    U = !1;if (R = n(K, O), O = R[0], T = R[1], R = n(K, M), M = R[0].replace(/^([+-\/*])=/, function (a, b) {
                  return U = b, "";
                }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(K) ? (M /= 100, S = "em") : /^scale/.test(K) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(K) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U)) S = T;else if (T !== S && 0 !== O) if (0 === M) S = T;else {
                  e = e || r();var V = /margin|padding|left|right|width|text|word|letter/i.test(K) || /X$/.test(K) || "x" === K ? "x" : "y";
                  switch (T) {case "%":
                      O *= "x" === V ? e.percentToPxWidth : e.percentToPxHeight;break;case "px":
                      break;default:
                      O *= e[T + "ToPx"];}switch (S) {case "%":
                      O *= 1 / ("x" === V ? e.percentToPxWidth : e.percentToPxHeight);break;case "px":
                      break;default:
                      O *= 1 / e[S + "ToPx"];}
                }switch (U) {case "+":
                    M = O + M;break;case "-":
                    M = O - M;break;case "*":
                    M = O * M;break;case "/":
                    M = O / M;}i[K] = { rootPropertyValue: Q, startValue: O, currentValue: O, endValue: M, unitType: S, easing: N }, t.debug && console.log("tweensContainer (" + K + "): " + (0, _stringify2.default)(i[K]), f);
              } else t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.");
            }i.element = f;
          }i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++);
        }var e,
            f = this,
            h = m.extend({}, t.defaults, s),
            i = {};switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function (a) {
          t.velocityQueueEntryFlag = !0, g(f).delayTimer = { setTimeout: setTimeout(a, parseFloat(h.delay)), next: a };
        }), h.duration.toString().toLowerCase()) {case "fast":
            h.duration = 200;break;case "normal":
            h.duration = r;break;case "slow":
            h.duration = 600;break;default:
            h.duration = parseFloat(h.duration) || 1;}t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function (b, c) {
          return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b));
        }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f);
      }var h,
          i,
          n,
          o,
          q,
          s,
          u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
        u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);var x = o.length,
            y = 0;if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(s)) {
          var z = n + 1;s = {};for (var A = z; A < arguments.length; A++) {
            p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A];
          }
        }var B = { promise: null, resolver: null, rejecter: null };h && t.Promise && (B.promise = new t.Promise(function (a, b) {
          B.resolver = a, B.rejecter = b;
        }));var C;switch (q) {case "scroll":
            C = "scroll";break;case "reverse":
            C = "reverse";break;case "finish":case "stop":
            m.each(o, function (a, b) {
              g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer);
            });var D = [];return m.each(t.State.calls, function (a, b) {
              b && m.each(b[1], function (c, e) {
                var f = s === d ? "" : s;return f !== !0 && b[2].queue !== f && (s !== d || b[2].queue !== !1) || void m.each(o, function (c, d) {
                  d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function (a, b) {
                    p.isFunction(b) && b(null, !0);
                  }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function (a, b) {
                    b.endValue = b.currentValue;
                  }), D.push(a)) : "finish" === q && (b[2].duration = 1));
                });
              });
            }), "stop" === q && (m.each(D, function (a, b) {
              l(b, !0);
            }), B.promise && B.resolver(o)), a();default:
            if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
              if (p.isString(q) && t.Redirects[q]) {
                var E = m.extend({}, s),
                    F = E.duration,
                    G = E.delay || 0;return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function (a, b) {
                  parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d);
                }), a();
              }var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise ? B.rejecter(new Error(H)) : console.log(H), a();
            }C = "start";}var I = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            J = [];m.each(o, function (a, b) {
          p.isNode(b) && e.call(b);
        });var K,
            E = m.extend({}, t.defaults, s);if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop) for (var L = 0; K > L; L++) {
          var M = { delay: E.delay, progress: E.progress };L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M);
        }return a();
      }
    };t = m.extend(w, t), t.animate = w;var x = b.requestAnimationFrame || o;return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function () {
      c.hidden ? (x = function x(a) {
        return setTimeout(function () {
          a(!0);
        }, 16);
      }, k()) : x = b.requestAnimationFrame || o;
    }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function (a, b) {
      t.Redirects["slide" + b] = function (a, c, e, f, g, h) {
        var i = m.extend({}, c),
            j = i.begin,
            k = i.complete,
            l = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            n = {};i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
          j && j.call(g, g);for (var c in l) {
            n[c] = a.style[c];var d = t.CSS.getPropertyValue(a, c);l[c] = "Down" === b ? [d, 0] : [0, d];
          }n.overflow = a.style.overflow, a.style.overflow = "hidden";
        }, i.complete = function () {
          for (var b in n) {
            a.style[b] = n[b];
          }k && k.call(g, g), h && h.resolver(g);
        }, t(a, l, i);
      };
    }), m.each(["In", "Out"], function (a, b) {
      t.Redirects["fade" + b] = function (a, c, e, f, g, h) {
        var i = m.extend({}, c),
            j = { opacity: "In" === b ? 1 : 0 },
            k = i.complete;i.complete = e !== f - 1 ? i.begin = null : function () {
          k && k.call(g, g), h && h.resolver(g);
        }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i);
      };
    }), t;
  }(window.jQuery || window.Zepto || window, window, document);
})), !function (a, b, c, d) {
  "use strict";

  function e(a, b, c) {
    return setTimeout(k(a, c), b);
  }function f(a, b, c) {
    return !!Array.isArray(a) && (g(a, c[b], c), !0);
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function h(a, b, c) {
    for (var e = (0, _keys2.default)(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }function i(a, b) {
    return h(a, b, !0);
  }function j(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = (0, _create2.default)(e), d.constructor = a, d._super = e, c && h(d, c);
  }function k(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function l(a, b) {
    return (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) == ka ? a.apply(b ? b[0] || d : d, b) : a;
  }function m(a, b) {
    return a === d ? b : a;
  }function n(a, b, c) {
    g(r(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function o(a, b, c) {
    g(r(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function p(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function q(a, b) {
    return a.indexOf(b) > -1;
  }function r(a) {
    return a.trim().split(/\s+/g);
  }function s(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function t(a) {
    return Array.prototype.slice.call(a, 0);
  }function u(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];s(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function v(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
      if (c = ia[g], e = c ? c + f : b, e in a) return e;g++;
    }return d;
  }function w() {
    return oa++;
  }function x(a) {
    var b = a.ownerDocument;return b.defaultView || b.parentWindow;
  }function y(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      l(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function z(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : ra ? N : sa ? Q : qa ? S : M)(a, A);
  }function A(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & ya && 0 === d - e,
        g = b & (Aa | Ba) && 0 === d - e;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function B(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = F(d);b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);var j = a.element;p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j;
  }function C(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};(b.eventType === ya || f.eventType === Aa) && (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function D(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ba && (i > xa || h.velocity === d)) {
      var j = h.deltaX - b.deltaX,
          k = h.deltaY - b.deltaY,
          l = G(i, j, k);e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function E(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: la(a.pointers[c].clientX), clientY: la(a.pointers[c].clientY) }, c++;
    }return { timeStamp: na(), pointers: b, center: F(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function F(a) {
    var b = a.length;if (1 === b) return { x: la(a[0].clientX), y: la(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: la(c / b), y: la(d / b) };
  }function G(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function H(a, b) {
    return a === b ? Ca : ma(a) >= ma(b) ? a > 0 ? Da : Ea : b > 0 ? Fa : Ga;
  }function I(a, b, c) {
    c || (c = Ka);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function J(a, b, c) {
    c || (c = Ka);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function K(a, b) {
    return J(b[1], b[0], La) - J(a[1], a[0], La);
  }function L(a, b) {
    return I(b[0], b[1], La) / I(a[0], a[1], La);
  }function M() {
    this.evEl = Na, this.evWin = Oa, this.allow = !0, this.pressed = !1, y.apply(this, arguments);
  }function N() {
    this.evEl = Ra, this.evWin = Sa, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function O() {
    this.evTarget = Ua, this.evWin = Va, this.started = !1, y.apply(this, arguments);
  }function P(a, b) {
    var c = t(a.touches),
        d = t(a.changedTouches);return b & (Aa | Ba) && (c = u(c.concat(d), "identifier", !0)), [c, d];
  }function Q() {
    this.evTarget = Xa, this.targetIds = {}, y.apply(this, arguments);
  }function R(a, b) {
    var c = t(a.touches),
        d = this.targetIds;if (b & (ya | za) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = t(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return p(a.target, i);
    }), b === ya) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Aa | Ba) && delete d[g[e].identifier], e++;
    }return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0;
  }function S() {
    y.apply(this, arguments);var a = k(this.handler, this);this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a);
  }function T(a, b) {
    this.manager = a, this.set(b);
  }function U(a) {
    if (q(a, bb)) return bb;var b = q(a, cb),
        c = q(a, db);return b && c ? cb + " " + db : b || c ? b ? cb : db : q(a, ab) ? ab : _a;
  }function V(a) {
    this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = eb, this.simultaneous = {}, this.requireFail = [];
  }function W(a) {
    return a & jb ? "cancel" : a & hb ? "end" : a & gb ? "move" : a & fb ? "start" : "";
  }function X(a) {
    return a == Ga ? "down" : a == Fa ? "up" : a == Da ? "left" : a == Ea ? "right" : "";
  }function Y(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function Z() {
    V.apply(this, arguments);
  }function $() {
    Z.apply(this, arguments), this.pX = null, this.pY = null;
  }function _() {
    Z.apply(this, arguments);
  }function aa() {
    V.apply(this, arguments), this._timer = null, this._input = null;
  }function ba() {
    Z.apply(this, arguments);
  }function ca() {
    Z.apply(this, arguments);
  }function da() {
    V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ea(a, b) {
    return b = b || {}, b.recognizers = m(b.recognizers, ea.defaults.preset), new fa(a, b);
  }function fa(a, b) {
    b = b || {}, this.options = i(b, ea.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), ga(this, !0), g(b.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ga(a, b) {
    var c = a.element;g(a.options.cssProps, function (a, d) {
      c.style[v(c.style, d)] = b ? a : "";
    });
  }function ha(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var ia = ["", "webkit", "moz", "MS", "ms", "o"],
      ja = b.createElement("div"),
      ka = "function",
      la = Math.round,
      ma = Math.abs,
      na = Date.now,
      oa = 1,
      pa = /mobile|tablet|ip(ad|hone|od)|android/i,
      qa = "ontouchstart" in a,
      ra = v(a, "PointerEvent") !== d,
      sa = qa && pa.test(navigator.userAgent),
      ta = "touch",
      ua = "pen",
      va = "mouse",
      wa = "kinect",
      xa = 25,
      ya = 1,
      za = 2,
      Aa = 4,
      Ba = 8,
      Ca = 1,
      Da = 2,
      Ea = 4,
      Fa = 8,
      Ga = 16,
      Ha = Da | Ea,
      Ia = Fa | Ga,
      Ja = Ha | Ia,
      Ka = ["x", "y"],
      La = ["clientX", "clientY"];y.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler);
    } };var Ma = { mousedown: ya, mousemove: za, mouseup: Aa },
      Na = "mousedown",
      Oa = "mousemove mouseup";j(M, y, { handler: function handler(a) {
      var b = Ma[a.type];b & ya && 0 === a.button && (this.pressed = !0), b & za && 1 !== a.which && (b = Aa), this.pressed && this.allow && (b & Aa && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: va, srcEvent: a }));
    } });var Pa = { pointerdown: ya, pointermove: za, pointerup: Aa, pointercancel: Ba, pointerout: Ba },
      Qa = { 2: ta, 3: ua, 4: va, 5: wa },
      Ra = "pointerdown",
      Sa = "pointermove pointerup pointercancel";a.MSPointerEvent && (Ra = "MSPointerDown", Sa = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Pa[d],
          f = Qa[a.pointerType] || a.pointerType,
          g = f == ta,
          h = s(b, a.pointerId, "pointerId");e & ya && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Aa | Ba) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Ta = { touchstart: ya, touchmove: za, touchend: Aa, touchcancel: Ba },
      Ua = "touchstart",
      Va = "touchstart touchmove touchend touchcancel";j(O, y, { handler: function handler(a) {
      var b = Ta[a.type];if (b === ya && (this.started = !0), this.started) {
        var c = P.call(this, a, b);b & (Aa | Ba) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: ta, srcEvent: a });
      }
    } });var Wa = { touchstart: ya, touchmove: za, touchend: Aa, touchcancel: Ba },
      Xa = "touchstart touchmove touchend touchcancel";j(Q, y, { handler: function handler(a) {
      var b = Wa[a.type],
          c = R.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: ta, srcEvent: a });
    } }), j(S, y, { handler: function handler(a, b, c) {
      var d = c.pointerType == ta,
          e = c.pointerType == va;if (d) this.mouse.allow = !1;else if (e && !this.mouse.allow) return;b & (Aa | Ba) && (this.mouse.allow = !0), this.callback(a, b, c);
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var Ya = v(ja.style, "touchAction"),
      Za = Ya !== d,
      $a = "compute",
      _a = "auto",
      ab = "manipulation",
      bb = "none",
      cb = "pan-x",
      db = "pan-y";T.prototype = { set: function set(a) {
      a == $a && (a = this.compute()), Za && (this.manager.element.style[Ya] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), U(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      if (!Za) {
        var b = a.srcEvent,
            c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
            e = q(d, bb),
            f = q(d, db),
            g = q(d, cb);return e || f && c & Ha || g && c & Ia ? this.preventSrc(b) : void 0;
      }
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var eb = 1,
      fb = 2,
      gb = 4,
      hb = 8,
      ib = hb,
      jb = 16,
      kb = 32;V.prototype = { defaults: {}, set: function set(a) {
      return h(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = Y(a, this);var b = s(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(c.options.event + (b ? W(d) : ""), a);
      }var c = this,
          d = this.state;hb > d && b(!0), b(), d >= hb && b(!0);
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = kb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (kb | eb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = h({}, a);return l(this.options.enable, [this, b]) ? (this.state & (ib | jb | kb) && (this.state = eb), this.state = this.process(b), void (this.state & (fb | gb | hb | jb) && this.tryEmit(b))) : (this.reset(), void (this.state = kb));
    }, process: function process() {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, j(Z, V, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (fb | gb),
          e = this.attrTest(a);return d && (c & Ba || !e) ? b | jb : d || e ? c & Aa ? b | hb : b & fb ? b | gb : fb : kb;
    } }), j($, Z, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ja }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Ha && b.push(db), a & Ia && b.push(cb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Ha ? (e = 0 === f ? Ca : 0 > f ? Da : Ea, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ca : 0 > g ? Fa : Ga, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return Z.prototype.attrTest.call(this, a) && (this.state & fb || !(this.state & fb) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = X(a.direction);b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
    } }), j(_, Z, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [bb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fb);
    }, emit: function emit(a) {
      if (this._super.emit.call(this, a), 1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + b, a);
      }
    } }), j(aa, V, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function getTouchAction() {
      return [_a];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Aa | Ba) && !f) this.reset();else if (a.eventType & ya) this.reset(), this._timer = e(function () {
        this.state = ib, this.tryEmit();
      }, b.time, this);else if (a.eventType & Aa) return ib;return kb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === ib && (a && a.eventType & Aa ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)));
    } }), j(ba, Z, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [bb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fb);
    } }), j(ca, Z, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: Ha | Ia, pointers: 1 }, getTouchAction: function getTouchAction() {
      return $.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Ha | Ia) ? b = a.velocity : c & Ha ? b = a.velocityX : c & Ia && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && ma(b) > this.options.velocity && a.eventType & Aa;
    }, emit: function emit(a) {
      var b = X(a.direction);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), j(da, V, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ab];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if (this.reset(), a.eventType & ya && 0 === this.count) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Aa) return this.failTimeout();var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
            h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = ib, this.tryEmit();
        }, b.interval, this), fb) : ib;
      }return kb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = kb;
      }, this.options.interval, this), kb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == ib && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ea.VERSION = "2.0.4", ea.defaults = { domEvents: !1, touchAction: $a, enable: !0, inputTarget: null, inputClass: null, preset: [[ba, { enable: !1 }], [_, { enable: !1 }, ["rotate"]], [ca, { direction: Ha }], [$, { direction: Ha }, ["swipe"]], [da], [da, { event: "doubletap", taps: 2 }, ["tap"]], [aa]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var lb = 1,
      mb = 2;fa.prototype = { set: function set(a) {
      return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? mb : lb;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & ib) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === mb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fb | gb | hb) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function get(a) {
      if (a instanceof V) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;var b = this.recognizers;return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this;
    }, on: function on(a, b) {
      var c = this.handlers;return g(r(a), function (a) {
        c[a] = c[a] || [], c[a].push(b);
      }), this;
    }, off: function off(a, b) {
      var c = this.handlers;return g(r(a), function (a) {
        b ? c[a].splice(s(c[a], b), 1) : delete c[a];
      }), this;
    }, emit: function emit(a, b) {
      this.options.domEvents && ha(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function destroy() {
      this.element && ga(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, h(ea, { INPUT_START: ya, INPUT_MOVE: za, INPUT_END: Aa, INPUT_CANCEL: Ba, STATE_POSSIBLE: eb, STATE_BEGAN: fb, STATE_CHANGED: gb, STATE_ENDED: hb, STATE_RECOGNIZED: ib, STATE_CANCELLED: jb, STATE_FAILED: kb, DIRECTION_NONE: Ca, DIRECTION_LEFT: Da, DIRECTION_RIGHT: Ea, DIRECTION_UP: Fa, DIRECTION_DOWN: Ga, DIRECTION_HORIZONTAL: Ha, DIRECTION_VERTICAL: Ia, DIRECTION_ALL: Ja, Manager: fa, Input: y, TouchAction: T, TouchInput: Q, MouseInput: M, PointerEventInput: N, TouchMouseInput: S, SingleTouchInput: O, Recognizer: V, AttrRecognizer: Z, Tap: da, Pan: $, Swipe: ca, Pinch: _, Rotate: ba, Press: aa, on: n, off: o, each: g, merge: i, extend: h, inherit: j, bindFn: k, prefixed: v }), ( false ? "undefined" : (0, _typeof3.default)(__webpack_require__(567))) == ka && __webpack_require__(568) ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return ea;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = ea : a[c] = ea;
}(window, document, "Hammer"), function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(44), __webpack_require__(326)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer);
}(function (a, b) {
  function c(c, d) {
    var e = a(c);e.data("hammer") || e.data("hammer", new b(e[0], d));
  }a.fn.hammer = function (a) {
    return this.each(function () {
      c(this, a);
    });
  }, b.Manager.prototype.emit = function (b) {
    return function (c, d) {
      b.call(this, c, d), a(this.element).trigger({ type: c, gesture: d });
    };
  }(b.Manager.prototype.emit);
}), function (a) {
  a.Package ? Materialize = {} : a.Materialize = {};
}(window), function (a) {
  for (var b = 0, c = ["webkit", "moz"], d = a.requestAnimationFrame, e = a.cancelAnimationFrame, f = c.length; --f >= 0 && !d;) {
    d = a[c[f] + "RequestAnimationFrame"], e = a[c[f] + "CancelRequestAnimationFrame"];
  }d && e || (d = function d(a) {
    var c = +Date.now(),
        d = Math.max(b + 16, c);return setTimeout(function () {
      a(b = d);
    }, d - c);
  }, e = clearTimeout), a.requestAnimationFrame = d, a.cancelAnimationFrame = e;
}(window), Materialize.objectSelectorString = function (a) {
  var b = a.prop("tagName") || "",
      c = a.attr("id") || "",
      d = a.attr("class") || "";return (b + c + d).replace(/\s/g, "");
}, Materialize.guid = function () {
  function a() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
  }return function () {
    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
  };
}(), Materialize.escapeHash = function (a) {
  return a.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
}, Materialize.elementOrParentIsFixed = function (a) {
  var b = $(a),
      c = b.add(b.parents()),
      d = !1;return c.each(function () {
    if ("fixed" === $(this).css("position")) return d = !0, !1;
  }), d;
};var getTime = Date.now || function () {
  return new Date().getTime();
};Materialize.throttle = function (a, b, c) {
  var d,
      e,
      f,
      g = null,
      h = 0;c || (c = {});var i = function i() {
    h = c.leading === !1 ? 0 : getTime(), g = null, f = a.apply(d, e), d = e = null;
  };return function () {
    var j = getTime();h || c.leading !== !1 || (h = j);var k = b - (j - h);return d = this, e = arguments, k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f;
  };
};var Vel;Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity, function (a) {
  a.fn.collapsible = function (b, c) {
    var d = { accordion: void 0, onOpen: void 0, onClose: void 0 },
        e = b;return b = a.extend(d, b), this.each(function () {
      function d(b) {
        m = l.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            a(this).css("height", "");
          } }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            a(this).css("height", "");
          } }), m.not(b).removeClass("active").parent().removeClass("active"), m.not(b).parent().children(".collapsible-body").stop(!0, !1).each(function () {
          a(this).is(":visible") && a(this).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
              a(this).css("height", ""), h(a(this).siblings(".collapsible-header"));
            } });
        });
      }function f(b) {
        b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            a(this).css("height", "");
          } }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            a(this).css("height", "");
          } });
      }function g(a, c) {
        c || a.toggleClass("active"), b.accordion || "accordion" === n || void 0 === n ? d(a) : f(a), h(a);
      }function h(a) {
        a.hasClass("active") ? "function" == typeof b.onOpen && b.onOpen.call(this, a.parent()) : "function" == typeof b.onClose && b.onClose.call(this, a.parent());
      }function i(a) {
        var b = j(a);return b.length > 0;
      }function j(a) {
        return a.closest("li > .collapsible-header");
      }function k() {
        l.off("click.collapse", "> li > .collapsible-header");
      }var l = a(this),
          m = a(this).find("> li > .collapsible-header"),
          n = l.data("collapsible");if ("destroy" === e) return void k();if (c >= 0 && c < m.length) {
        var o = m.eq(c);return void (o.length && ("open" === e || "close" === e && o.hasClass("active")) && g(o));
      }k(), l.on("click.collapse", "> li > .collapsible-header", function (b) {
        var c = a(b.target);i(c) && (c = j(c)), g(c);
      }), b.accordion || "accordion" === n || void 0 === n ? g(m.filter(".active").first(), !0) : m.filter(".active").each(function () {
        g(a(this), !0);
      });
    });
  }, a(document).ready(function () {
    a(".collapsible").collapsible();
  });
}(jQuery), function (a) {
  a.fn.scrollTo = function (b) {
    return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this;
  }, a.fn.dropdown = function (b) {
    var c = { inDuration: 300, outDuration: 225, constrainWidth: !0, hover: !1, gutter: 0, belowOrigin: !1, alignment: "left", stopPropagation: !1 };return "open" === b ? (this.each(function () {
      a(this).trigger("open");
    }), !1) : "close" === b ? (this.each(function () {
      a(this).trigger("close");
    }), !1) : void this.each(function () {
      function d() {
        void 0 !== g.data("induration") && (h.inDuration = g.data("induration")), void 0 !== g.data("outduration") && (h.outDuration = g.data("outduration")), void 0 !== g.data("constrainwidth") && (h.constrainWidth = g.data("constrainwidth")), void 0 !== g.data("hover") && (h.hover = g.data("hover")), void 0 !== g.data("gutter") && (h.gutter = g.data("gutter")), void 0 !== g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin")), void 0 !== g.data("alignment") && (h.alignment = g.data("alignment")), void 0 !== g.data("stoppropagation") && (h.stopPropagation = g.data("stoppropagation"));
      }function e(b) {
        "focus" === b && (i = !0), d(), j.addClass("active"), g.addClass("active"), h.constrainWidth === !0 ? j.css("width", g.outerWidth()) : j.css("white-space", "nowrap");var c = window.innerHeight,
            e = g.innerHeight(),
            k = g.offset().left,
            l = g.offset().top - a(window).scrollTop(),
            m = h.alignment,
            n = 0,
            o = 0,
            p = 0;h.belowOrigin === !0 && (p = e);var q = 0,
            r = 0,
            s = g.parent();if (s.is("body") || (s[0].scrollHeight > s[0].clientHeight && (q = s[0].scrollTop), s[0].scrollWidth > s[0].clientWidth && (r = s[0].scrollLeft)), k + j.innerWidth() > a(window).width() ? m = "right" : k - j.innerWidth() + g.innerWidth() < 0 && (m = "left"), l + j.innerHeight() > c) if (l + e - j.innerHeight() < 0) {
          var t = c - l - p;j.css("max-height", t);
        } else p || (p += e), p -= j.innerHeight();if ("left" === m) n = h.gutter, o = g.position().left + n;else if ("right" === m) {
          var u = g.position().left + g.outerWidth() - j.outerWidth();n = -h.gutter, o = u + n;
        }j.css({ position: "absolute", top: g.position().top + p + q, left: o + r }), j.stop(!0, !0).css("opacity", 0).slideDown({ queue: !1, duration: h.inDuration, easing: "easeOutCubic", complete: function complete() {
            a(this).css("height", "");
          } }).animate({ opacity: 1 }, { queue: !1, duration: h.inDuration, easing: "easeOutSine" }), setTimeout(function () {
          a(document).bind("click." + j.attr("id"), function (b) {
            f(), a(document).unbind("click." + j.attr("id"));
          });
        }, 0);
      }function f() {
        i = !1, j.fadeOut(h.outDuration), j.removeClass("active"), g.removeClass("active"), a(document).unbind("click." + j.attr("id")), setTimeout(function () {
          j.css("max-height", "");
        }, h.outDuration);
      }var g = a(this),
          h = a.extend({}, c, b),
          i = !1,
          j = a("#" + g.attr("data-activates"));if (d(), g.after(j), h.hover) {
        var k = !1;g.unbind("click." + g.attr("id")), g.on("mouseenter", function (a) {
          k === !1 && (e(), k = !0);
        }), g.on("mouseleave", function (b) {
          var c = b.toElement || b.relatedTarget;a(c).closest(".dropdown-content").is(j) || (j.stop(!0, !0), f(), k = !1);
        }), j.on("mouseleave", function (b) {
          var c = b.toElement || b.relatedTarget;a(c).closest(".dropdown-button").is(g) || (j.stop(!0, !0), f(), k = !1);
        });
      } else g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function (b) {
        i || (g[0] != b.currentTarget || g.hasClass("active") || 0 !== a(b.target).closest(".dropdown-content").length ? g.hasClass("active") && (f(), a(document).unbind("click." + j.attr("id"))) : (b.preventDefault(), h.stopPropagation && b.stopPropagation(), e("click")));
      });g.on("open", function (a, b) {
        e(b);
      }), g.on("close", f);
    });
  }, a(document).ready(function () {
    a(".dropdown-button").dropdown();
  });
}(jQuery), function (a) {
  var b = 0,
      c = 0,
      d = function d() {
    return c++, "materialize-modal-overlay-" + c;
  },
      e = { init: function init(c) {
      var e = { opacity: .5, inDuration: 350, outDuration: 250, ready: void 0, complete: void 0, dismissible: !0, startingTop: "4%", endingTop: "10%" };return c = a.extend(e, c), this.each(function () {
        var e = a(this),
            f = a(this).attr("id") || "#" + a(this).data("target"),
            g = function g() {
          var d = e.data("overlay-id"),
              f = a("#" + d);e.removeClass("open"), a("body").css({ overflow: "", width: "" }), e.find(".modal-close").off("click.close"), a(document).off("keyup.modal" + d), f.velocity({ opacity: 0 }, { duration: c.outDuration, queue: !1, ease: "easeOutQuart" });var g = { duration: c.outDuration, queue: !1, ease: "easeOutCubic", complete: function complete() {
              a(this).css({ display: "none" }), "function" == typeof c.complete && c.complete.call(this, e), f.remove(), b--;
            } };e.hasClass("bottom-sheet") ? e.velocity({ bottom: "-100%", opacity: 0 }, g) : e.velocity({ top: c.startingTop, opacity: 0, scaleX: .7 }, g);
        },
            h = function h(f) {
          var h = a("body"),
              i = h.innerWidth();if (h.css("overflow", "hidden"), h.width(i), !e.hasClass("open")) {
            var j = d(),
                k = a('<div class="modal-overlay"></div>');lStack = ++b, k.attr("id", j).css("z-index", 1e3 + 2 * lStack), e.data("overlay-id", j).css("z-index", 1e3 + 2 * lStack + 1), e.addClass("open"), a("body").append(k), c.dismissible && (k.click(function () {
              g();
            }), a(document).on("keyup.modal" + j, function (a) {
              27 === a.keyCode && g();
            })), e.find(".modal-close").on("click.close", function (a) {
              g();
            }), k.css({ display: "block", opacity: 0 }), e.css({ display: "block", opacity: 0 }), k.velocity({ opacity: c.opacity }, { duration: c.inDuration, queue: !1, ease: "easeOutCubic" }), e.data("associated-overlay", k[0]);var l = { duration: c.inDuration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                "function" == typeof c.ready && c.ready.call(this, e, f);
              } };e.hasClass("bottom-sheet") ? e.velocity({ bottom: "0", opacity: 1 }, l) : (a.Velocity.hook(e, "scaleX", .7), e.css({ top: c.startingTop }), e.velocity({ top: c.endingTop, opacity: 1, scaleX: "1" }, l));
          }
        };a(document).off("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]'), a(this).off("openModal"), a(this).off("closeModal"), a(document).on("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]', function (b) {
          c.startingTop = (a(this).offset().top - a(window).scrollTop()) / 1.15, h(a(this)), b.preventDefault();
        }), a(this).on("openModal", function () {
          a(this).attr("href") || "#" + a(this).data("target");h();
        }), a(this).on("closeModal", function () {
          g();
        });
      });
    }, open: function open() {
      a(this).trigger("openModal");
    }, close: function close() {
      a(this).trigger("closeModal");
    } };a.fn.modal = function (b) {
    return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) && b ? void a.error("Method " + b + " does not exist on jQuery.modal") : e.init.apply(this, arguments);
  };
}(jQuery), function (a) {
  a.fn.materialbox = function () {
    return this.each(function () {
      function b() {
        f = !1;var b = i.parent(".material-placeholder"),
            d = (window.innerWidth, window.innerHeight, i.data("width")),
            g = i.data("height");i.velocity("stop", !0), a("#materialbox-overlay").velocity("stop", !0), a(".materialbox-caption").velocity("stop", !0), a("#materialbox-overlay").velocity({ opacity: 0 }, { duration: h, queue: !1, easing: "easeOutQuad", complete: function complete() {
            e = !1, a(this).remove();
          } }), i.velocity({ width: d, height: g, left: 0, top: 0 }, { duration: h, queue: !1, easing: "easeOutQuad", complete: function complete() {
            b.css({ height: "", width: "", position: "", top: "", left: "" }), i.removeAttr("style"), i.attr("style", k), i.removeClass("active"), f = !0, c && c.css("overflow", "");
          } }), a(".materialbox-caption").velocity({ opacity: 0 }, { duration: h, queue: !1, easing: "easeOutQuad", complete: function complete() {
            a(this).remove();
          } });
      }if (!a(this).hasClass("initialized")) {
        a(this).addClass("initialized");var c,
            d,
            e = !1,
            f = !0,
            g = 275,
            h = 200,
            i = a(this),
            j = a("<div></div>").addClass("material-placeholder"),
            k = i.attr("style");i.wrap(j), i.on("click", function () {
          var h = i.parent(".material-placeholder"),
              j = window.innerWidth,
              k = window.innerHeight,
              l = i.width(),
              m = i.height();if (f === !1) return b(), !1;if (e && f === !0) return b(), !1;f = !1, i.addClass("active"), e = !0, h.css({ width: h[0].getBoundingClientRect().width, height: h[0].getBoundingClientRect().height, position: "relative", top: 0, left: 0 }), c = void 0, d = h[0].parentNode;for (; null !== d && !a(d).is(document);) {
            var n = a(d);"visible" !== n.css("overflow") && (n.css("overflow", "visible"), c = void 0 === c ? n : c.add(n)), d = d.parentNode;
          }i.css({ position: "absolute", "z-index": 1e3, "will-change": "left, top, width, height" }).data("width", l).data("height", m);var o = a('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).click(function () {
            f === !0 && b();
          });i.before(o);var p = o[0].getBoundingClientRect();if (o.css({ width: j, height: k, left: -1 * p.left, top: -1 * p.top }), o.velocity({ opacity: 1 }, { duration: g, queue: !1, easing: "easeOutQuad" }), "" !== i.data("caption")) {
            var q = a('<div class="materialbox-caption"></div>');q.text(i.data("caption")), a("body").append(q), q.css({ display: "inline" }), q.velocity({ opacity: 1 }, { duration: g, queue: !1, easing: "easeOutQuad" });
          }var r = 0,
              s = l / j,
              t = m / k,
              u = 0,
              v = 0;s > t ? (r = m / l, u = .9 * j, v = .9 * j * r) : (r = l / m, u = .9 * k * r, v = .9 * k), i.hasClass("responsive-img") ? i.velocity({ "max-width": u, width: l }, { duration: 0, queue: !1, complete: function complete() {
              i.css({ left: 0, top: 0 }).velocity({ height: v, width: u, left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2, top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2 }, { duration: g, queue: !1, easing: "easeOutQuad", complete: function complete() {
                  f = !0;
                } });
            } }) : i.css("left", 0).css("top", 0).velocity({ height: v, width: u, left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2, top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2 }, { duration: g, queue: !1, easing: "easeOutQuad", complete: function complete() {
              f = !0;
            } });
        }), a(window).scroll(function () {
          e && b();
        }), a(document).keyup(function (a) {
          27 === a.keyCode && f === !0 && e && b();
        });
      }
    });
  }, a(document).ready(function () {
    a(".materialboxed").materialbox();
  });
}(jQuery), function (a) {
  a.fn.parallax = function () {
    var b = a(window).width();return this.each(function (c) {
      function d(c) {
        var d;d = b < 601 ? e.height() > 0 ? e.height() : e.children("img").height() : e.height() > 0 ? e.height() : 500;var f = e.children("img").first(),
            g = f.height(),
            h = g - d,
            i = e.offset().top + d,
            j = e.offset().top,
            k = a(window).scrollTop(),
            l = window.innerHeight,
            m = k + l,
            n = (m - j) / (d + l),
            o = Math.round(h * n);c && f.css("display", "block"), i > k && j < k + l && f.css("transform", "translate3D(-50%," + o + "px, 0)");
      }var e = a(this);e.addClass("parallax"), e.children("img").one("load", function () {
        d(!0);
      }).each(function () {
        this.complete && a(this).trigger("load");
      }), a(window).scroll(function () {
        b = a(window).width(), d(!1);
      }), a(window).resize(function () {
        b = a(window).width(), d(!1);
      });
    });
  };
}(jQuery), function (a) {
  var b = { init: function init(b) {
      var c = { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 };b = a.extend(c, b);var d = Materialize.objectSelectorString(a(this));return this.each(function (c) {
        var e,
            f,
            g,
            h,
            i,
            j = d + c,
            k = a(this),
            l = a(window).width(),
            m = k.find("li.tab a"),
            n = k.width(),
            o = a(),
            p = Math.max(n, k[0].scrollWidth) / m.length,
            q = prev_index = 0,
            r = !1,
            s = 300,
            t = function t(a) {
          return Math.ceil(n - a.position().left - a.outerWidth() - k.scrollLeft());
        },
            u = function u(a) {
          return Math.floor(a.position().left + k.scrollLeft());
        },
            v = function v(a) {
          q - a >= 0 ? (h.velocity({ right: t(e) }, { duration: s, queue: !1, easing: "easeOutQuad" }), h.velocity({ left: u(e) }, { duration: s, queue: !1, easing: "easeOutQuad", delay: 90 })) : (h.velocity({ left: u(e) }, { duration: s, queue: !1, easing: "easeOutQuad" }), h.velocity({ right: t(e) }, { duration: s, queue: !1, easing: "easeOutQuad", delay: 90 }));
        };b.swipeable && l > b.responsiveThreshold && (b.swipeable = !1), e = a(m.filter('[href="' + location.hash + '"]')), 0 === e.length && (e = a(this).find("li.tab a.active").first()), 0 === e.length && (e = a(this).find("li.tab a").first()), e.addClass("active"), q = m.index(e), q < 0 && (q = 0), void 0 !== e[0] && (f = a(e[0].hash), f.addClass("active")), k.find(".indicator").length || k.append('<div class="indicator"></div>'), h = k.find(".indicator"), k.append(h), k.is(":visible") && setTimeout(function () {
          h.css({ right: t(e) }), h.css({ left: u(e) });
        }, 0), a(window).off("resize.tabs-" + j).on("resize.tabs-" + j, function () {
          n = k.width(), p = Math.max(n, k[0].scrollWidth) / m.length, q < 0 && (q = 0), 0 !== p && 0 !== n && (h.css({ right: t(e) }), h.css({ left: u(e) }));
        }), b.swipeable ? (m.each(function () {
          var b = a(Materialize.escapeHash(this.hash));b.addClass("carousel-item"), o = o.add(b);
        }), g = o.wrapAll('<div class="tabs-content carousel"></div>'), o.css("display", ""), a(".tabs-content.carousel").carousel({ fullWidth: !0, noWrap: !0, onCycleTo: function onCycleTo(a) {
            if (!r) {
              var b = q;q = g.index(a), e = m.eq(q), v(b);
            }
          } })) : m.not(e).each(function () {
          a(Materialize.escapeHash(this.hash)).hide();
        }), k.off("click.tabs").on("click.tabs", "a", function (c) {
          if (a(this).parent().hasClass("disabled")) return void c.preventDefault();if (!a(this).attr("target")) {
            r = !0, n = k.width(), p = Math.max(n, k[0].scrollWidth) / m.length, e.removeClass("active");var d = f;e = a(this), f = a(Materialize.escapeHash(this.hash)), m = k.find("li.tab a");e.position();e.addClass("active"), prev_index = q, q = m.index(a(this)), q < 0 && (q = 0), b.swipeable ? o.length && o.carousel("set", q) : (void 0 !== f && (f.show(), f.addClass("active"), "function" == typeof b.onShow && b.onShow.call(this, f)), void 0 === d || d.is(f) || (d.hide(), d.removeClass("active"))), i = setTimeout(function () {
              r = !1;
            }, s), v(prev_index), c.preventDefault();
          }
        });
      });
    }, select_tab: function select_tab(a) {
      this.find('a[href="#' + a + '"]').trigger("click");
    } };a.fn.tabs = function (c) {
    return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c)) && c ? void a.error("Method " + c + " does not exist on jQuery.tabs") : b.init.apply(this, arguments);
  }, a(document).ready(function () {
    a("ul.tabs").tabs();
  });
}(jQuery), function (a) {
  a.fn.tooltip = function (c) {
    var d = 5,
        e = { delay: 350, tooltip: "", position: "bottom", html: !1 };return "remove" === c ? (this.each(function () {
      a("#" + a(this).attr("data-tooltip-id")).remove(), a(this).off("mouseenter.tooltip mouseleave.tooltip");
    }), !1) : (c = a.extend(e, c), this.each(function () {
      var e = Materialize.guid(),
          f = a(this);f.attr("data-tooltip-id") && a("#" + f.attr("data-tooltip-id")).remove(), f.attr("data-tooltip-id", e);var g,
          h,
          i,
          j,
          k,
          l,
          m = function m() {
        g = f.attr("data-html") ? "true" === f.attr("data-html") : c.html, h = f.attr("data-delay"), h = void 0 === h || "" === h ? c.delay : h, i = f.attr("data-position"), i = void 0 === i || "" === i ? c.position : i, j = f.attr("data-tooltip"), j = void 0 === j || "" === j ? c.tooltip : j;
      };m();var n = function n() {
        var b = a('<div class="material-tooltip"></div>');return j = g ? a("<span></span>").html(j) : a("<span></span>").text(j), b.append(j).appendTo(a("body")).attr("id", e), l = a('<div class="backdrop"></div>'), l.appendTo(b), b;
      };k = n(), f.off("mouseenter.tooltip mouseleave.tooltip");var o,
          p = !1;f.on({ "mouseenter.tooltip": function mouseenterTooltip(a) {
          var c = function c() {
            m(), p = !0, k.velocity("stop"), l.velocity("stop"), k.css({ visibility: "visible", left: "0px", top: "0px" });var a,
                c,
                e,
                g = f.outerWidth(),
                h = f.outerHeight(),
                j = k.outerHeight(),
                n = k.outerWidth(),
                o = "0px",
                q = "0px",
                r = l[0].offsetWidth,
                s = l[0].offsetHeight,
                t = 8,
                u = 8,
                v = 0;"top" === i ? (a = f.offset().top - j - d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "-10px", l.css({ bottom: 0, left: 0, borderRadius: "14px 14px 0 0", transformOrigin: "50% 100%", marginTop: j, marginLeft: n / 2 - r / 2 })) : "left" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left - n - d, e = b(c, a, n, j), q = "-10px", l.css({ top: "-7px", right: 0, width: "14px", height: "14px", borderRadius: "14px 0 0 14px", transformOrigin: "95% 50%", marginTop: j / 2, marginLeft: n })) : "right" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left + g + d, e = b(c, a, n, j), q = "+10px", l.css({ top: "-7px", left: 0, width: "14px", height: "14px", borderRadius: "0 14px 14px 0", transformOrigin: "5% 50%", marginTop: j / 2, marginLeft: "0px" })) : (a = f.offset().top + f.outerHeight() + d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "+10px", l.css({ top: 0, left: 0, marginLeft: n / 2 - r / 2 })), k.css({ top: e.y, left: e.x }), t = Math.SQRT2 * n / parseInt(r), u = Math.SQRT2 * j / parseInt(s), v = Math.max(t, u), k.velocity({ translateY: o, translateX: q }, { duration: 350, queue: !1 }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: !1 }), l.css({ visibility: "visible" }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: !1 }).velocity({ scaleX: v, scaleY: v }, { duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad" });
          };o = setTimeout(c, h);
        }, "mouseleave.tooltip": function mouseleaveTooltip() {
          p = !1, clearTimeout(o), setTimeout(function () {
            p !== !0 && (k.velocity({ opacity: 0, translateY: 0, translateX: 0 }, { duration: 225, queue: !1 }), l.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, { duration: 225, queue: !1, complete: function complete() {
                l.css({ visibility: "hidden" }), k.css({ visibility: "hidden" }), p = !1;
              } }));
          }, 225);
        } });
    }));
  };var b = function b(_b, c, d, e) {
    var f = _b,
        g = c;return f < 0 ? f = 4 : f + d > window.innerWidth && (f -= f + d - window.innerWidth), g < 0 ? g = 4 : g + e > window.innerHeight + a(window).scrollTop && (g -= g + e - window.innerHeight), { x: f, y: g };
  };a(document).ready(function () {
    a(".tooltipped").tooltip();
  });
}(jQuery), function (a) {
  "use strict";

  function b(a) {
    return null !== a && a === a.window;
  }function c(a) {
    return b(a) ? a : 9 === a.nodeType && a.defaultView;
  }function d(a) {
    var b,
        d,
        e = { top: 0, left: 0 },
        f = a && a.ownerDocument;return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), { top: e.top + d.pageYOffset - b.clientTop, left: e.left + d.pageXOffset - b.clientLeft };
  }function e(a) {
    var b = "";for (var c in a) {
      a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
    }return b;
  }function f(a) {
    if (k.allowEvent(a) === !1) return null;for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
      if (!(c instanceof SVGElement || c.className.indexOf("waves-effect") === -1)) {
        b = c;break;
      }if (c.classList.contains("waves-effect")) {
        b = c;break;
      }c = c.parentElement;
    }return b;
  }function g(b) {
    var c = f(b);null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1));
  }var h = h || {},
      i = document.querySelectorAll.bind(document),
      j = { duration: 750, show: function show(a, b) {
      if (2 === a.button) return !1;var c = b || this,
          f = document.createElement("div");f.className = "waves-ripple", c.appendChild(f);var g = d(c),
          h = a.pageY - g.top,
          i = a.pageX - g.left,
          k = "scale(" + c.clientWidth / 100 * 10 + ")";"touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);var l = { top: h + "px", left: i + "px" };f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l));
    }, hide: function hide(a) {
      k.touchup(a);var b = this,
          c = (1.4 * b.clientWidth, null),
          d = b.getElementsByClassName("waves-ripple");if (!(d.length > 0)) return !1;c = d[d.length - 1];var f = c.getAttribute("data-x"),
          g = c.getAttribute("data-y"),
          h = c.getAttribute("data-scale"),
          i = Date.now() - Number(c.getAttribute("data-hold")),
          l = 350 - i;l < 0 && (l = 0), setTimeout(function () {
        var a = { top: g + "px", left: f + "px", opacity: "0", "-webkit-transition-duration": j.duration + "ms", "-moz-transition-duration": j.duration + "ms", "-o-transition-duration": j.duration + "ms", "transition-duration": j.duration + "ms", "-webkit-transform": h, "-moz-transform": h, "-ms-transform": h, "-o-transform": h, transform: h };c.setAttribute("style", e(a)), setTimeout(function () {
          try {
            b.removeChild(c);
          } catch (a) {
            return !1;
          }
        }, j.duration);
      }, l);
    }, wrapInput: function wrapInput(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];if ("input" === c.tagName.toLowerCase()) {
          var d = c.parentNode;if ("i" === d.tagName.toLowerCase() && d.className.indexOf("waves-effect") !== -1) continue;var e = document.createElement("i");e.className = c.className + " waves-input-wrapper";var f = c.getAttribute("style");f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c);
        }
      }
    } },
      k = { touches: 0, allowEvent: function allowEvent(a) {
      var b = !0;return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function () {
        k.touches > 0 && (k.touches -= 1);
      }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b;
    }, touchup: function touchup(a) {
      k.allowEvent(a);
    } };h.displayEffect = function (b) {
    b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1);
  }, h.attach = function (b) {
    "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1);
  }, a.Waves = h, document.addEventListener("DOMContentLoaded", function () {
    h.displayEffect();
  }, !1);
}(window), Materialize.toast = function (a, b, c, d) {
  function e(a) {
    var b = document.createElement("div");if (b.classList.add("toast"), c) for (var e = c.split(" "), f = 0, g = e.length; f < g; f++) {
      b.classList.add(e[f]);
    }("object" == (typeof HTMLElement === "undefined" ? "undefined" : (0, _typeof3.default)(HTMLElement)) ? a instanceof HTMLElement : a && "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) ? b.appendChild(a) : a instanceof jQuery ? b.appendChild(a[0]) : b.innerHTML = a;var h = new Hammer(b, { prevent_default: !1 });return h.on("pan", function (a) {
      var c = a.deltaX,
          d = 80;b.classList.contains("panning") || b.classList.add("panning");var e = 1 - Math.abs(c / d);e < 0 && (e = 0), Vel(b, { left: c, opacity: e }, { duration: 50, queue: !1, easing: "easeOutQuad" });
    }), h.on("panend", function (a) {
      var c = a.deltaX,
          e = 80;Math.abs(c) > e ? Vel(b, { marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function complete() {
          "function" == typeof d && d(), b.parentNode.removeChild(b);
        } }) : (b.classList.remove("panning"), Vel(b, { left: 0, opacity: 1 }, { duration: 300, easing: "easeOutExpo", queue: !1 }));
    }), b;
  }c = c || "";var f = document.getElementById("toast-container");null === f && (f = document.createElement("div"), f.id = "toast-container", document.body.appendChild(f));var g = e(a);a && f.appendChild(g), g.style.opacity = 0, Vel(g, { translateY: "-35px", opacity: 1 }, { duration: 300, easing: "easeOutCubic", queue: !1 });var h,
      i = b;null != i && (h = setInterval(function () {
    null === g.parentNode && window.clearInterval(h), g.classList.contains("panning") || (i -= 20), i <= 0 && (Vel(g, { opacity: 0, marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function complete() {
        "function" == typeof d && d(), this[0].parentNode.removeChild(this[0]);
      } }), window.clearInterval(h));
  }, 20));
}, function (a) {
  var b = { init: function init(b) {
      var c = { menuWidth: 300, edge: "left", closeOnClick: !1, draggable: !0 };b = a.extend(c, b), a(this).each(function () {
        var c = a(this),
            d = c.attr("data-activates"),
            e = a("#" + d);300 != b.menuWidth && e.css("width", b.menuWidth);var f = a('.drag-target[data-sidenav="' + d + '"]');b.draggable ? (f.length && f.remove(), f = a('<div class="drag-target"></div>').attr("data-sidenav", d), a("body").append(f)) : f = a(), "left" == b.edge ? (e.css("transform", "translateX(-100%)"), f.css({ left: 0 })) : (e.addClass("right-aligned").css("transform", "translateX(100%)"), f.css({ right: 0 })), e.hasClass("fixed") && window.innerWidth > 992 && e.css("transform", "translateX(0)"), e.hasClass("fixed") && a(window).resize(function () {
          window.innerWidth > 992 ? 0 !== a("#sidenav-overlay").length && i ? g(!0) : e.css("transform", "translateX(0%)") : i === !1 && ("left" === b.edge ? e.css("transform", "translateX(-100%)") : e.css("transform", "translateX(100%)"));
        }), b.closeOnClick === !0 && e.on("click.itemclick", "a:not(.collapsible-header)", function () {
          g();
        });var g = function g(c) {
          h = !1, i = !1, a("body").css({ overflow: "", width: "" }), a("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
              a(this).remove();
            } }), "left" === b.edge ? (f.css({ width: "", right: "", left: "0" }), e.velocity({ translateX: "-100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
              c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth));
            } })) : (f.css({ width: "", right: "0", left: "" }), e.velocity({ translateX: "100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
              c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth));
            } }));
        },
            h = !1,
            i = !1;b.draggable && (f.on("click", function () {
          i && g();
        }), f.hammer({ prevent_default: !1 }).bind("pan", function (c) {
          if ("touch" == c.gesture.pointerType) {
            var d = (c.gesture.direction, c.gesture.center.x),
                f = (c.gesture.center.y, c.gesture.velocityX, a("body")),
                h = a("#sidenav-overlay"),
                j = f.innerWidth();if (f.css("overflow", "hidden"), f.width(j), 0 === h.length && (h = a('<div id="sidenav-overlay"></div>'), h.css("opacity", 0).click(function () {
              g();
            }), a("body").append(h)), "left" === b.edge && (d > b.menuWidth ? d = b.menuWidth : d < 0 && (d = 0)), "left" === b.edge) d < b.menuWidth / 2 ? i = !1 : d >= b.menuWidth / 2 && (i = !0), e.css("transform", "translateX(" + (d - b.menuWidth) + "px)");else {
              d < window.innerWidth - b.menuWidth / 2 ? i = !0 : d >= window.innerWidth - b.menuWidth / 2 && (i = !1);var k = d - b.menuWidth / 2;k < 0 && (k = 0), e.css("transform", "translateX(" + k + "px)");
            }var l;"left" === b.edge ? (l = d / b.menuWidth, h.velocity({ opacity: l }, { duration: 10, queue: !1, easing: "easeOutQuad" })) : (l = Math.abs((d - window.innerWidth) / b.menuWidth), h.velocity({ opacity: l }, { duration: 10, queue: !1, easing: "easeOutQuad" }));
          }
        }).bind("panend", function (c) {
          if ("touch" == c.gesture.pointerType) {
            var d = a("#sidenav-overlay"),
                g = c.gesture.velocityX,
                j = c.gesture.center.x,
                k = j - b.menuWidth,
                l = j - b.menuWidth / 2;k > 0 && (k = 0), l < 0 && (l = 0), h = !1, "left" === b.edge ? i && g <= .3 || g < -.5 ? (0 !== k && e.velocity({ translateX: [0, k] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), f.css({ width: "50%", right: 0, left: "" }), i = !0) : (!i || g > .3) && (a("body").css({ overflow: "", width: "" }), e.velocity({ translateX: [-1 * b.menuWidth - 10, k] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                a(this).remove();
              } }), f.css({ width: "10px", right: "", left: 0 })) : i && g >= -.3 || g > .5 ? (0 !== l && e.velocity({ translateX: [0, l] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), f.css({ width: "50%", right: "", left: 0 }), i = !0) : (!i || g < -.3) && (a("body").css({ overflow: "", width: "" }), e.velocity({ translateX: [b.menuWidth + 10, l] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                a(this).remove();
              } }), f.css({ width: "10px", right: 0, left: "" }));
          }
        })), c.off("click.sidenav").on("click.sidenav", function () {
          if (i === !0) i = !1, h = !1, g();else {
            var c = a("body"),
                d = a('<div id="sidenav-overlay"></div>'),
                j = c.innerWidth();c.css("overflow", "hidden"), c.width(j), a("body").append(f), "left" === b.edge ? (f.css({ width: "50%", right: 0, left: "" }), e.velocity({ translateX: [0, -1 * b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (f.css({ width: "50%", right: "", left: 0 }), e.velocity({ translateX: [0, b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })), d.css("opacity", 0).click(function () {
              i = !1, h = !1, g(), d.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                  a(this).remove();
                } });
            }), a("body").append(d), d.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                i = !0, h = !1;
              } });
          }return !1;
        });
      });
    }, destroy: function destroy() {
      var b = a("#sidenav-overlay"),
          c = a('.drag-target[data-sidenav="' + a(this).attr("data-activates") + '"]');b.trigger("click"), c.remove(), a(this).off("click"), b.remove();
    }, show: function show() {
      this.trigger("click");
    }, hide: function hide() {
      a("#sidenav-overlay").trigger("click");
    } };a.fn.sideNav = function (c) {
    return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c)) && c ? void a.error("Method " + c + " does not exist on jQuery.sideNav") : b.init.apply(this, arguments);
  };
}(jQuery), function (a) {
  function b(b, c, d, e) {
    var g = a();return a.each(f, function (a, f) {
      if (f.height() > 0) {
        var h = f.offset().top,
            i = f.offset().left,
            j = i + f.width(),
            k = h + f.height(),
            l = !(i > c || j < e || h > d || k < b);l && g.push(f);
      }
    }), g;
  }function c(c) {
    ++i;var d = e.scrollTop(),
        f = e.scrollLeft(),
        h = f + e.width(),
        k = d + e.height(),
        l = b(d + j.top + c || 200, h + j.right, k + j.bottom, f + j.left);a.each(l, function (a, b) {
      var c = b.data("scrollSpy:ticks");"number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", i);
    }), a.each(g, function (a, b) {
      var c = b.data("scrollSpy:ticks");"number" == typeof c && c !== i && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null));
    }), g = l;
  }function d() {
    e.trigger("scrollSpy:winSize");
  }var e = a(window),
      f = [],
      g = [],
      h = !1,
      i = 0,
      j = { top: 0, right: 0, bottom: 0, left: 0 };a.scrollSpy = function (b, d) {
    var g = { throttle: 100, scrollOffset: 200 };d = a.extend(g, d);var i = [];b = a(b), b.each(function (b, c) {
      f.push(a(c)), a(c).data("scrollSpy:id", b), a('a[href="#' + a(c).attr("id") + '"]').click(function (b) {
        b.preventDefault();var c = a(Materialize.escapeHash(this.hash)).offset().top + 1;a("html, body").animate({ scrollTop: c - d.scrollOffset }, { duration: 400, queue: !1, easing: "easeOutCubic" });
      });
    }), j.top = d.offsetTop || 0, j.right = d.offsetRight || 0, j.bottom = d.offsetBottom || 0, j.left = d.offsetLeft || 0;var k = Materialize.throttle(function () {
      c(d.scrollOffset);
    }, d.throttle || 100),
        l = function l() {
      a(document).ready(k);
    };return h || (e.on("scroll", l), e.on("resize", l), h = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function () {
      i = a.grep(i, function (a) {
        return 0 != a.height();
      });var b = a(this);i[0] ? (a('a[href="#' + i[0].attr("id") + '"]').removeClass("active"), b.data("scrollSpy:id") < i[0].data("scrollSpy:id") ? i.unshift(a(this)) : i.push(a(this))) : i.push(a(this)), a('a[href="#' + i[0].attr("id") + '"]').addClass("active");
    }), b.on("scrollSpy:exit", function () {
      if (i = a.grep(i, function (a) {
        return 0 != a.height();
      }), i[0]) {
        a('a[href="#' + i[0].attr("id") + '"]').removeClass("active");var b = a(this);i = a.grep(i, function (a) {
          return a.attr("id") != b.attr("id");
        }), i[0] && a('a[href="#' + i[0].attr("id") + '"]').addClass("active");
      }
    }), b;
  }, a.winSizeSpy = function (b) {
    return a.winSizeSpy = function () {
      return e;
    }, b = b || { throttle: 100 }, e.on("resize", Materialize.throttle(d, b.throttle || 100));
  }, a.fn.scrollSpy = function (b) {
    return a.scrollSpy(a(this), b);
  };
}(jQuery), function (a) {
  a(document).ready(function () {
    function b(b) {
      var c = b.css("font-family"),
          d = b.css("font-size"),
          f = b.css("line-height");d && e.css("font-size", d), c && e.css("font-family", c), f && e.css("line-height", f), "off" === b.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(b.val() + "\n");var g = e.html().replace(/\n/g, "<br>");e.html(g), b.is(":visible") ? e.css("width", b.width()) : e.css("width", a(window).width() / 2), b.data("original-height") <= e.height() ? b.css("height", e.height()) : b.val().length < b.data("previous-length") && b.css("height", b.data("original-height")), b.data("previous-length", b.val().length);
    }Materialize.updateTextFields = function () {
      var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function (b, c) {
        var d = a(this);a(c).val().length > 0 || c.autofocus || void 0 !== d.attr("placeholder") ? d.siblings("label").addClass("active") : a(c)[0].validity ? d.siblings("label").toggleClass("active", a(c)[0].validity.badInput === !0) : d.siblings("label").removeClass("active");
      });
    };var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change", c, function () {
      0 === a(this).val().length && void 0 === a(this).attr("placeholder") || a(this).siblings("label").addClass("active"), validate_field(a(this));
    }), a(document).ready(function () {
      Materialize.updateTextFields();
    }), a(document).on("reset", function (b) {
      var d = a(b.target);d.is("form") && (d.find(c).removeClass("valid").removeClass("invalid"), d.find(c).each(function () {
        "" === a(this).attr("value") && a(this).siblings("label").removeClass("active");
      }), d.find("select.initialized").each(function () {
        var a = d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a);
      }));
    }), a(document).on("focus", c, function () {
      a(this).siblings("label, .prefix").addClass("active");
    }), a(document).on("blur", c, function () {
      var b = a(this),
          c = ".prefix";0 === b.val().length && b[0].validity.badInput !== !0 && void 0 === b.attr("placeholder") && (c += ", label"), b.siblings(c).removeClass("active"), validate_field(b);
    }), window.validate_field = function (a) {
      var b = void 0 !== a.attr("data-length"),
          c = parseInt(a.attr("data-length")),
          d = a.val().length;0 === a.val().length && a[0].validity.badInput === !1 ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") && b && d <= c || a.is(":valid") && !b ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")));
    };var d = "input[type=radio], input[type=checkbox]";a(document).on("keyup.radio", d, function (b) {
      if (9 === b.which) {
        a(this).addClass("tabbed");var c = a(this);return void c.one("blur", function (b) {
          a(this).removeClass("tabbed");
        });
      }
    });var e = a(".hiddendiv").first();e.length || (e = a('<div class="hiddendiv common"></div>'), a("body").append(e));var f = ".materialize-textarea";a(f).each(function () {
      var b = a(this);b.data("original-height", b.height()), b.data("previous-length", b.val().length);
    }), a("body").on("keyup keydown autoresize", f, function () {
      b(a(this));
    }), a(document).on("change", '.file-field input[type="file"]', function () {
      for (var b = a(this).closest(".file-field"), c = b.find("input.file-path"), d = a(this)[0].files, e = [], f = 0; f < d.length; f++) {
        e.push(d[f].name);
      }c.val(e.join(", ")), c.trigger("change");
    });var g = "input[type=range]",
        h = !1;a(g).each(function () {
      var b = a('<span class="thumb"><span class="value"></span></span>');a(this).after(b);
    });var i = function i(a) {
      var b = parseInt(a.parent().css("padding-left")),
          c = -7 + b + "px";a.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: c }, { duration: 300, easing: "easeOutExpo" });
    },
        j = function j(a) {
      var b = a.width() - 15,
          c = parseFloat(a.attr("max")),
          d = parseFloat(a.attr("min")),
          e = (parseFloat(a.val()) - d) / (c - d);return e * b;
    },
        k = ".range-field";a(document).on("change", g, function (b) {
      var c = a(this).siblings(".thumb");c.find(".value").html(a(this).val()), c.hasClass("active") || i(c);var d = j(a(this));c.addClass("active").css("left", d);
    }), a(document).on("mousedown touchstart", g, function (b) {
      var c = a(this).siblings(".thumb");if (c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).after(c)), c.find(".value").html(a(this).val()), h = !0, a(this).addClass("active"), c.hasClass("active") || i(c), "input" !== b.type) {
        var d = j(a(this));c.addClass("active").css("left", d);
      }
    }), a(document).on("mouseup touchend", k, function () {
      h = !1, a(this).removeClass("active");
    }), a(document).on("input mousemove touchmove", k, function (b) {
      var c = a(this).children(".thumb"),
          d = a(this).find(g);if (h) {
        c.hasClass("active") || i(c);var e = j(d);c.addClass("active").css("left", e), c.find(".value").html(c.siblings(g).val());
      }
    }), a(document).on("mouseout touchleave", k, function () {
      if (!h) {
        var b = a(this).children(".thumb"),
            c = parseInt(a(this).css("padding-left")),
            d = 7 + c + "px";b.hasClass("active") && b.velocity({ height: "0", width: "0", top: "10px", marginLeft: d }, { duration: 100 }), b.removeClass("active");
      }
    }), a.fn.autocomplete = function (b) {
      var c = { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 };return b = a.extend(c, b), this.each(function () {
        var c,
            d = a(this),
            e = b.data,
            f = 0,
            g = -1,
            h = d.closest(".input-field");if (!a.isEmptyObject(e)) {
          var i,
              j = a('<ul class="autocomplete-content dropdown-content"></ul>');h.length ? (i = h.children(".autocomplete-content.dropdown-content").first(), i.length || h.append(j)) : (i = d.next(".autocomplete-content.dropdown-content"), i.length || d.after(j)), i.length && (j = i);var k = function k(a, b) {
            var c = b.find("img"),
                d = b.text().toLowerCase().indexOf("" + a.toLowerCase()),
                e = d + a.length - 1,
                f = b.text().slice(0, d),
                g = b.text().slice(d, e + 1),
                h = b.text().slice(e + 1);b.html("<span>" + f + "<span class='highlight'>" + g + "</span>" + h + "</span>"), c.length && b.prepend(c);
          },
              l = function l() {
            g = -1, j.find(".active").removeClass("active");
          },
              m = function m() {
            j.empty(), l(), c = void 0;
          };d.off("blur.autocomplete").on("blur.autocomplete", function () {
            m();
          }), d.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function (g) {
            f = 0;var h = d.val().toLowerCase();if (13 !== g.which && 38 !== g.which && 40 !== g.which) {
              if (c !== h && (m(), h.length >= b.minLength)) for (var i in e) {
                if (e.hasOwnProperty(i) && i.toLowerCase().indexOf(h) !== -1 && i.toLowerCase() !== h) {
                  if (f >= b.limit) break;var l = a("<li></li>");e[i] ? l.append('<img src="' + e[i] + '" class="right circle"><span>' + i + "</span>") : l.append("<span>" + i + "</span>"), j.append(l), k(h, l), f++;
                }
              }c = h;
            }
          }), d.off("keydown.autocomplete").on("keydown.autocomplete", function (a) {
            var b,
                c = a.which,
                d = j.children("li").length,
                e = j.children(".active").first();return 13 === c && g >= 0 ? (b = j.children("li").eq(g), void (b.length && (b.trigger("mousedown.autocomplete"), a.preventDefault()))) : void (38 !== c && 40 !== c || (a.preventDefault(), 38 === c && g > 0 && g--, 40 === c && g < d - 1 && g++, e.removeClass("active"), g >= 0 && j.children("li").eq(g).addClass("active")));
          }), j.on("mousedown.autocomplete touchstart.autocomplete", "li", function () {
            var c = a(this).text().trim();d.val(c), d.trigger("change"), m(), "function" == typeof b.onAutocomplete && b.onAutocomplete.call(this, c);
          });
        }
      });
    };
  }), a.fn.material_select = function (b) {
    function c(a, b, c) {
      var e = a.indexOf(b),
          f = e === -1;return f ? a.push(b) : a.splice(e, 1), c.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(b).toggleClass("active"), c.find("option").eq(b).prop("selected", f), d(a, c), f;
    }function d(a, b) {
      for (var c = "", d = 0, e = a.length; d < e; d++) {
        var f = b.find("option").eq(a[d]).text();c += 0 === d ? f : ", " + f;
      }"" === c && (c = b.find("option:disabled").eq(0).text()), b.siblings("input.select-dropdown").val(c);
    }a(this).each(function () {
      var d = a(this);if (!d.hasClass("browser-default")) {
        var e = !!d.attr("multiple"),
            f = d.data("select-id");if (f && (d.parent().find("span.caret").remove(), d.parent().find("input").remove(), d.unwrap(), a("ul#select-options-" + f).remove()), "destroy" === b) return void d.data("select-id", null).removeClass("initialized");var g = Materialize.guid();d.data("select-id", g);var h = a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i = a('<ul id="select-options-' + g + '" class="dropdown-content select-dropdown ' + (e ? "multiple-select-dropdown" : "") + '"></ul>'),
            j = d.children("option, optgroup"),
            k = [],
            l = !1,
            m = d.find("option:selected").html() || d.find("option:first").html() || "",
            n = function n(b, c, d) {
          var f = c.is(":disabled") ? "disabled " : "",
              g = "optgroup-option" === d ? "optgroup-option " : "",
              h = e ? '<input type="checkbox"' + f + "/><label></label>" : "",
              j = c.data("icon"),
              k = c.attr("class");if (j) {
            var l = "";return k && (l = ' class="' + k + '"'), i.append(a('<li class="' + f + g + '"><img alt="" src="' + j + '"' + l + "><span>" + h + c.html() + "</span></li>")), !0;
          }i.append(a('<li class="' + f + g + '"><span>' + h + c.html() + "</span></li>"));
        };j.length && j.each(function () {
          if (a(this).is("option")) e ? n(d, a(this), "multiple") : n(d, a(this));else if (a(this).is("optgroup")) {
            var b = a(this).children("option");i.append(a('<li class="optgroup"><span>' + a(this).attr("label") + "</span></li>")), b.each(function () {
              n(d, a(this), "optgroup-option");
            });
          }
        }), i.find("li:not(.optgroup)").each(function (f) {
          a(this).click(function (g) {
            if (!a(this).hasClass("disabled") && !a(this).hasClass("optgroup")) {
              var h = !0;e ? (a('input[type="checkbox"]', this).prop("checked", function (a, b) {
                return !b;
              }), h = c(k, f, d), q.trigger("focus")) : (i.find("li").removeClass("active"), a(this).toggleClass("active"), q.val(a(this).text())), r(i, a(this)), d.find("option").eq(f).prop("selected", h), d.trigger("change"), "undefined" != typeof b && b();
            }g.stopPropagation();
          });
        }), d.wrap(h);var o = a('<span class="caret">&#9660;</span>');d.is(":disabled") && o.addClass("disabled");var p = m.replace(/"/g, "&quot;"),
            q = a('<input type="text" class="select-dropdown" readonly="true" ' + (d.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + g + '" value="' + p + '"/>');d.before(q), q.before(o), q.after(i), d.is(":disabled") || q.dropdown({ hover: !1 }), d.attr("tabindex") && a(q[0]).attr("tabindex", d.attr("tabindex")), d.addClass("initialized"), q.on({ focus: function focus() {
            if (a("ul.select-dropdown").not(i[0]).is(":visible") && a("input.select-dropdown").trigger("close"), !i.is(":visible")) {
              a(this).trigger("open", ["focus"]);var b = a(this).val();e && b.indexOf(",") >= 0 && (b = b.split(",")[0]);var c = i.find("li").filter(function () {
                return a(this).text().toLowerCase() === b.toLowerCase();
              })[0];r(i, c, !0);
            }
          }, click: function click(a) {
            a.stopPropagation();
          } }), q.on("blur", function () {
          e || a(this).trigger("close"), i.find("li.selected").removeClass("selected");
        }), i.hover(function () {
          l = !0;
        }, function () {
          l = !1;
        }), a(window).on({ click: function click() {
            e && (l || q.trigger("close"));
          } }), e && d.find("option:selected:not(:disabled)").each(function () {
          var b = a(this).index();c(k, b, d), i.find("li").eq(b).find(":checkbox").prop("checked", !0);
        });var r = function r(b, c, d) {
          if (c) {
            b.find("li.selected").removeClass("selected");var f = a(c);f.addClass("selected"), e && !d || i.scrollTo(f);
          }
        },
            s = [],
            t = function t(b) {
          if (9 == b.which) return void q.trigger("close");if (40 == b.which && !i.is(":visible")) return void q.trigger("open");if (13 != b.which || i.is(":visible")) {
            b.preventDefault();var c = String.fromCharCode(b.which).toLowerCase(),
                d = [9, 13, 27, 38, 40];if (c && d.indexOf(b.which) === -1) {
              s.push(c);var f = s.join(""),
                  g = i.find("li").filter(function () {
                return 0 === a(this).text().toLowerCase().indexOf(f);
              })[0];g && r(i, g);
            }if (13 == b.which) {
              var h = i.find("li.selected:not(.disabled)")[0];h && (a(h).trigger("click"), e || q.trigger("close"));
            }40 == b.which && (g = i.find("li.selected").length ? i.find("li.selected").next("li:not(.disabled)")[0] : i.find("li:not(.disabled)")[0], r(i, g)), 27 == b.which && q.trigger("close"), 38 == b.which && (g = i.find("li.selected").prev("li:not(.disabled)")[0], g && r(i, g)), setTimeout(function () {
              s = [];
            }, 1e3);
          }
        };q.on("keydown", t);
      }
    });
  };
}(jQuery), function (a) {
  var b = { init: function init(b) {
      var c = { indicators: !0, height: 400, transition: 500, interval: 6e3 };return b = a.extend(c, b), this.each(function () {
        function c(a, b) {
          a.hasClass("center-align") ? a.velocity({ opacity: 0, translateY: -100 }, { duration: b, queue: !1 }) : a.hasClass("right-align") ? a.velocity({ opacity: 0, translateX: 100 }, { duration: b, queue: !1 }) : a.hasClass("left-align") && a.velocity({ opacity: 0, translateX: -100 }, { duration: b, queue: !1 });
        }function d(a) {
          a >= j.length ? a = 0 : a < 0 && (a = j.length - 1), k = i.find(".active").index(), k != a && (e = j.eq(k), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({ opacity: 0 }, { duration: b.transition, queue: !1, easing: "easeOutQuad", complete: function complete() {
              j.not(".active").velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: !1 });
            } }), c($caption, b.transition), b.indicators && f.eq(k).removeClass("active"), j.eq(a).velocity({ opacity: 1 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" }), j.eq(a).find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: b.transition, delay: b.transition, queue: !1, easing: "easeOutQuad" }), j.eq(a).addClass("active"), b.indicators && f.eq(a).addClass("active"));
        }var e,
            f,
            g,
            h = a(this),
            i = h.find("ul.slides").first(),
            j = i.find("> li"),
            k = i.find(".active").index();k != -1 && (e = j.eq(k)), h.hasClass("fullscreen") || (b.indicators ? h.height(b.height + 40) : h.height(b.height), i.height(b.height)), j.find(".caption").each(function () {
          c(a(this), 0);
        }), j.find("img").each(function () {
          var b = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src") !== b && (a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", b));
        }), b.indicators && (f = a('<ul class="indicators"></ul>'), j.each(function (c) {
          var e = a('<li class="indicator-item"></li>');e.click(function () {
            var c = i.parent(),
                e = c.find(a(this)).index();d(e), clearInterval(g), g = setInterval(function () {
              k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k);
            }, b.transition + b.interval);
          }), f.append(e);
        }), h.append(f), f = h.find("ul.indicators").find("li.indicator-item")), e ? e.show() : (j.first().addClass("active").velocity({ opacity: 1 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" }), k = 0, e = j.eq(k), b.indicators && f.eq(k).addClass("active")), e.find("img").each(function () {
          e.find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" });
        }), g = setInterval(function () {
          k = i.find(".active").index(), d(k + 1);
        }, b.transition + b.interval);var l = !1,
            m = !1,
            n = !1;h.hammer({ prevent_default: !1 }).bind("pan", function (a) {
          if ("touch" === a.gesture.pointerType) {
            clearInterval(g);var b = a.gesture.direction,
                c = a.gesture.deltaX,
                d = a.gesture.velocityX,
                e = a.gesture.velocityY;$curr_slide = i.find(".active"), Math.abs(d) > Math.abs(e) && $curr_slide.velocity({ translateX: c }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === b && (c > h.innerWidth() / 2 || d < -.65) ? n = !0 : 2 === b && (c < -1 * h.innerWidth() / 2 || d > .65) && (m = !0);var f;m && (f = $curr_slide.next(), 0 === f.length && (f = j.first()), f.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" })), n && (f = $curr_slide.prev(), 0 === f.length && (f = j.last()), f.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" }));
          }
        }).bind("panend", function (a) {
          "touch" === a.gesture.pointerType && ($curr_slide = i.find(".active"), l = !1, curr_index = i.find(".active").index(), !n && !m || j.length <= 1 ? $curr_slide.velocity({ translateX: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }) : m ? (d(curr_index + 1), $curr_slide.velocity({ translateX: -1 * h.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
              $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
            } })) : n && (d(curr_index - 1), $curr_slide.velocity({ translateX: h.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
              $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
            } })), m = !1, n = !1, clearInterval(g), g = setInterval(function () {
            k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k);
          }, b.transition + b.interval));
        }), h.on("sliderPause", function () {
          clearInterval(g);
        }), h.on("sliderStart", function () {
          clearInterval(g), g = setInterval(function () {
            k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k);
          }, b.transition + b.interval);
        }), h.on("sliderNext", function () {
          k = i.find(".active").index(), d(k + 1);
        }), h.on("sliderPrev", function () {
          k = i.find(".active").index(), d(k - 1);
        });
      });
    }, pause: function pause() {
      a(this).trigger("sliderPause");
    }, start: function start() {
      a(this).trigger("sliderStart");
    }, next: function next() {
      a(this).trigger("sliderNext");
    }, prev: function prev() {
      a(this).trigger("sliderPrev");
    } };a.fn.slider = function (c) {
    return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c)) && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments);
  };
}(jQuery), function (a) {
  a(document).ready(function () {
    a(document).on("click.card", ".card", function (b) {
      a(this).find("> .card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function complete() {
          a(this).css({ display: "none" });
        } }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && (a(b.target).closest(".card").css("overflow", "hidden"), a(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" })));
    });
  });
}(jQuery), function (a) {
  var b = { data: [], placeholder: "", secondaryPlaceholder: "", autocompleteOptions: {} };a(document).ready(function () {
    a(document).on("click", ".chip .close", function (b) {
      var c = a(this).closest(".chips");c.attr("data-initialized") || a(this).closest(".chip").remove();
    });
  }), a.fn.material_chip = function (c) {
    var d = this;if (this.$el = a(this), this.$document = a(document), this.SELS = { CHIPS: ".chips", CHIP: ".chip", INPUT: "input", DELETE: ".material-icons", SELECTED_CHIP: ".selected" }, "data" === c) return this.$el.data("chips");var e = a.extend({}, b, c);d.hasAutocomplete = !a.isEmptyObject(e.autocompleteOptions.data), this.init = function () {
      var b = 0;d.$el.each(function () {
        var c = a(this),
            f = Materialize.guid();d.chipId = f, e.data && e.data instanceof Array || (e.data = []), c.data("chips", e.data), c.attr("data-index", b), c.attr("data-initialized", !0), c.hasClass(d.SELS.CHIPS) || c.addClass("chips"), d.chips(c, f), b++;
      });
    }, this.handleEvents = function () {
      var b = d.SELS;d.$document.off("click.chips-focus", b.CHIPS).on("click.chips-focus", b.CHIPS, function (c) {
        a(c.target).find(b.INPUT).focus();
      }), d.$document.off("click.chips-select", b.CHIP).on("click.chips-select", b.CHIP, function (c) {
        var e = a(c.target);if (e.length) {
          var f = e.hasClass("selected"),
              g = e.closest(b.CHIPS);a(b.CHIP).removeClass("selected"), f || d.selectChip(e.index(), g);
        }
      }), d.$document.off("keydown.chips").on("keydown.chips", function (c) {
        if (!a(c.target).is("input, textarea")) {
          var e,
              f = d.$document.find(b.CHIP + b.SELECTED_CHIP),
              g = f.closest(b.CHIPS),
              h = f.siblings(b.CHIP).length;if (f.length) if (8 === c.which || 46 === c.which) {
            c.preventDefault(), e = f.index(), d.deleteChip(e, g);var i = null;e + 1 < h ? i = e : e !== h && e + 1 !== h || (i = h - 1), i < 0 && (i = null), null !== i && d.selectChip(i, g), h || g.find("input").focus();
          } else if (37 === c.which) {
            if (e = f.index() - 1, e < 0) return;a(b.CHIP).removeClass("selected"), d.selectChip(e, g);
          } else if (39 === c.which) {
            if (e = f.index() + 1, a(b.CHIP).removeClass("selected"), e > h) return void g.find("input").focus();d.selectChip(e, g);
          }
        }
      }), d.$document.off("focusin.chips", b.CHIPS + " " + b.INPUT).on("focusin.chips", b.CHIPS + " " + b.INPUT, function (c) {
        var d = a(c.target).closest(b.CHIPS);d.addClass("focus"), d.siblings("label, .prefix").addClass("active"), a(b.CHIP).removeClass("selected");
      }), d.$document.off("focusout.chips", b.CHIPS + " " + b.INPUT).on("focusout.chips", b.CHIPS + " " + b.INPUT, function (c) {
        var d = a(c.target).closest(b.CHIPS);d.removeClass("focus"), d.data("chips").length || d.siblings("label").removeClass("active"), d.siblings(".prefix").removeClass("active");
      }), d.$document.off("keydown.chips-add", b.CHIPS + " " + b.INPUT).on("keydown.chips-add", b.CHIPS + " " + b.INPUT, function (c) {
        var e = a(c.target),
            f = e.closest(b.CHIPS),
            g = f.children(b.CHIP).length;if (13 === c.which) {
          if (d.hasAutocomplete && f.find(".autocomplete-content.dropdown-content").length && f.find(".autocomplete-content.dropdown-content").children().length) return;return c.preventDefault(), d.addChip({ tag: e.val() }, f), void e.val("");
        }if ((8 === c.keyCode || 37 === c.keyCode) && "" === e.val() && g) return c.preventDefault(), d.selectChip(g - 1, f), void e.blur();
      }), d.$document.off("click.chips-delete", b.CHIPS + " " + b.DELETE).on("click.chips-delete", b.CHIPS + " " + b.DELETE, function (c) {
        var e = a(c.target),
            f = e.closest(b.CHIPS),
            g = e.closest(b.CHIP);c.stopPropagation(), d.deleteChip(g.index(), f), f.find("input").focus();
      });
    }, this.chips = function (b, c) {
      b.empty(), b.data("chips").forEach(function (a) {
        b.append(d.renderChip(a));
      }), b.append(a('<input id="' + c + '" class="input" placeholder="">')), d.setPlaceholder(b);var f = b.next("label");f.length && (f.attr("for", c), b.data("chips").length && f.addClass("active"));var g = a("#" + c);d.hasAutocomplete && (e.autocompleteOptions.onAutocomplete = function (a) {
        d.addChip({ tag: a }, b), g.val(""), g.focus();
      }, g.autocomplete(e.autocompleteOptions));
    }, this.renderChip = function (b) {
      if (b.tag) {
        var c = a('<div class="chip"></div>');return c.text(b.tag), c.append(a('<i class="material-icons close">close</i>')), c;
      }
    }, this.setPlaceholder = function (a) {
      a.data("chips").length && e.placeholder ? a.find("input").prop("placeholder", e.placeholder) : !a.data("chips").length && e.secondaryPlaceholder && a.find("input").prop("placeholder", e.secondaryPlaceholder);
    }, this.isValid = function (a, b) {
      for (var c = a.data("chips"), d = !1, e = 0; e < c.length; e++) {
        if (c[e].tag === b.tag) return void (d = !0);
      }return "" !== b.tag && !d;
    }, this.addChip = function (a, b) {
      if (d.isValid(b, a)) {
        for (var c = d.renderChip(a), e = [], f = b.data("chips"), g = 0; g < f.length; g++) {
          e.push(f[g]);
        }e.push(a), b.data("chips", e), c.insertBefore(b.find("input")), b.trigger("chip.add", a), d.setPlaceholder(b);
      }
    }, this.deleteChip = function (a, b) {
      var c = b.data("chips")[a];b.find(".chip").eq(a).remove();for (var e = [], f = b.data("chips"), g = 0; g < f.length; g++) {
        g !== a && e.push(f[g]);
      }b.data("chips", e), b.trigger("chip.delete", c), d.setPlaceholder(b);
    }, this.selectChip = function (a, b) {
      var c = b.find(".chip").eq(a);c && !1 === c.hasClass("selected") && (c.addClass("selected"), b.trigger("chip.select", b.data("chips")[a]));
    }, this.getChipsElement = function (a, b) {
      return b.eq(a);
    }, this.init(), this.handleEvents();
  };
}(jQuery), function (a) {
  a.fn.pushpin = function (b) {
    var c = { top: 0, bottom: 1 / 0, offset: 0 };return "remove" === b ? (this.each(function () {
      (id = a(this).data("pushpin-id")) && (a(window).off("scroll." + id), a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"));
    }), !1) : (b = a.extend(c, b), $index = 0, this.each(function () {
      function c(a) {
        a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom");
      }function d(d, e) {
        d.each(function () {
          b.top <= e && b.bottom >= e && !a(this).hasClass("pinned") && (c(a(this)), a(this).css("top", b.offset), a(this).addClass("pinned")), e < b.top && !a(this).hasClass("pin-top") && (c(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > b.bottom && !a(this).hasClass("pin-bottom") && (c(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", b.bottom - g));
        });
      }var e = Materialize.guid(),
          f = a(this),
          g = a(this).offset().top;a(this).data("pushpin-id", e), d(f, a(window).scrollTop()), a(window).on("scroll." + e, function () {
        var c = a(window).scrollTop() + b.offset;d(f, c);
      });
    }));
  };
}(jQuery), function (a) {
  a(document).ready(function () {
    a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (c) {
      var d = a(this);b(d);
    }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (b) {
      var d = a(this);c(d);
    }), a(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function (d) {
      var e = a(this),
          f = e.parent();f.hasClass("active") ? c(f) : b(f);
    }), a(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function (b) {
      var c = a(this),
          e = c.parent();d(e);
    });
  }), a.fn.extend({ openFAB: function openFAB() {
      b(a(this));
    }, closeFAB: function closeFAB() {
      c(a(this));
    }, openToolbar: function openToolbar() {
      d(a(this));
    }, closeToolbar: function closeToolbar() {
      e(a(this));
    } });var b = function b(_b2) {
    var c = _b2;if (c.hasClass("active") === !1) {
      var d,
          e,
          f = c.hasClass("horizontal");f === !0 ? e = 40 : d = 40, c.addClass("active"), c.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: d + "px", translateX: e + "px" }, { duration: 0 });var g = 0;c.find("ul .btn-floating").reverse().each(function () {
        a(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: g }), g += 40;
      });
    }
  },
      c = function c(a) {
    var b,
        c,
        d = a,
        e = d.hasClass("horizontal");e === !0 ? c = 40 : b = 40, d.removeClass("active");d.find("ul .btn-floating").velocity("stop", !0), d.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: b + "px", translateX: c + "px" }, { duration: 80 });
  },
      d = function d(b) {
    if ("true" !== b.attr("data-open")) {
      var c,
          d,
          f,
          g = window.innerWidth,
          h = window.innerHeight,
          i = b[0].getBoundingClientRect(),
          j = b.find("> a").first(),
          k = b.find("> ul").first(),
          l = a('<div class="fab-backdrop"></div>'),
          m = j.css("background-color");j.append(l), c = i.left - g / 2 + i.width / 2, d = h - i.bottom, f = g / l.width(), b.attr("data-origin-bottom", i.bottom), b.attr("data-origin-left", i.left), b.attr("data-origin-width", i.width), b.addClass("active"), b.attr("data-open", !0), b.css({ "text-align": "center", width: "100%", bottom: 0, left: 0, transform: "translateX(" + c + "px)", transition: "none" }), j.css({ transform: "translateY(" + -d + "px)", transition: "none" }), l.css({ "background-color": m }), setTimeout(function () {
        b.css({ transform: "", transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s" }), j.css({ overflow: "visible", transform: "", transition: "transform .2s" }), setTimeout(function () {
          b.css({ overflow: "hidden", "background-color": m }), l.css({ transform: "scale(" + f + ")", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }), k.find("> li > a").css({ opacity: 1 }), a(window).on("scroll.fabToolbarClose", function () {
            e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose");
          }), a(document).on("click.fabToolbarClose", function (c) {
            a(c.target).closest(k).length || (e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose"));
          });
        }, 100);
      }, 0);
    }
  },
      e = function e(a) {
    if ("true" === a.attr("data-open")) {
      var b,
          c,
          d,
          e = window.innerWidth,
          f = window.innerHeight,
          g = a.attr("data-origin-width"),
          h = a.attr("data-origin-bottom"),
          i = a.attr("data-origin-left"),
          j = a.find("> .btn-floating").first(),
          k = a.find("> ul").first(),
          l = a.find(".fab-backdrop"),
          m = j.css("background-color");b = i - e / 2 + g / 2, c = f - h, d = e / l.width(), a.removeClass("active"), a.attr("data-open", !1), a.css({ "background-color": "transparent", transition: "none" }), j.css({ transition: "none" }), l.css({ transform: "scale(0)", "background-color": m }), k.find("> li > a").css({ opacity: "" }), setTimeout(function () {
        l.remove(), a.css({ "text-align": "", width: "", bottom: "", left: "", overflow: "", "background-color": "", transform: "translate3d(" + -b + "px,0,0)" }), j.css({ overflow: "", transform: "translate3d(0," + c + "px,0)" }), setTimeout(function () {
          a.css({ transform: "translate3d(0,0,0)", transition: "transform .2s" }), j.css({ transform: "translate3d(0,0,0)", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" });
        }, 20);
      }, 200);
    }
  };
}(jQuery), function (a) {
  Materialize.fadeInImage = function (b) {
    var c;if ("string" == typeof b) c = a(b);else {
      if ("object" != (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b))) return;c = b;
    }c.css({ opacity: 0 }), a(c).velocity({ opacity: 1 }, { duration: 650, queue: !1, easing: "easeOutSine" }), a(c).velocity({ opacity: 1 }, { duration: 1300, queue: !1, easing: "swing", step: function step(b, c) {
        c.start = 100;var d = b / 100,
            e = 150 - (100 - b) / 1.75;e < 100 && (e = 100), b >= 0 && a(this).css({ "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)", filter: "grayscale(" + d + ")brightness(" + e + "%)" });
      } });
  }, Materialize.showStaggeredList = function (b) {
    var c;if ("string" == typeof b) c = a(b);else {
      if ("object" != (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b))) return;c = b;
    }var d = 0;c.find("li").velocity({ translateX: "-100px" }, { duration: 0 }), c.find("li").each(function () {
      a(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: d, easing: [60, 10] }), d += 120;
    });
  }, a(document).ready(function () {
    var b = !1,
        c = !1;a(".dismissable").each(function () {
      a(this).hammer({ prevent_default: !1 }).bind("pan", function (d) {
        if ("touch" === d.gesture.pointerType) {
          var e = a(this),
              f = d.gesture.direction,
              g = d.gesture.deltaX,
              h = d.gesture.velocityX;e.velocity({ translateX: g }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === f && (g > e.innerWidth() / 2 || h < -.75) && (b = !0), 2 === f && (g < -1 * e.innerWidth() / 2 || h > .75) && (c = !0);
        }
      }).bind("panend", function (d) {
        if (Math.abs(d.gesture.deltaX) < a(this).innerWidth() / 2 && (c = !1, b = !1), "touch" === d.gesture.pointerType) {
          var e = a(this);if (b || c) {
            var f;f = b ? e.innerWidth() : -1 * e.innerWidth(), e.velocity({ translateX: f }, { duration: 100, queue: !1, easing: "easeOutQuad", complete: function complete() {
                e.css("border", "none"), e.velocity({ height: 0, padding: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                    e.remove();
                  } });
              } });
          } else e.velocity({ translateX: 0 }, { duration: 100, queue: !1, easing: "easeOutQuad" });b = !1, c = !1;
        }
      });
    });
  });
}(jQuery), function (a) {
  var b = !1;Materialize.scrollFire = function (a) {
    var c = function c() {
      for (var b = window.pageYOffset + window.innerHeight, c = 0; c < a.length; c++) {
        var d = a[c],
            e = d.selector,
            f = d.offset,
            g = d.callback,
            h = document.querySelector(e);if (null !== h) {
          var i = h.getBoundingClientRect().top + window.pageYOffset;if (b > i + f && d.done !== !0) {
            if ("function" == typeof g) g.call(this, h);else if ("string" == typeof g) {
              var j = new Function(g);j(h);
            }d.done = !0;
          }
        }
      }
    },
        d = Materialize.throttle(function () {
      c();
    }, a.throttle || 100);b || (window.addEventListener("scroll", d), window.addEventListener("resize", d), b = !0), setTimeout(d, 0);
  };
}(jQuery), function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(44)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? module.exports = a(require("jquery")) : this.Picker = a(jQuery);
}(function (a) {
  function b(f, g, i, l) {
    function m() {
      return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder);
    }function n() {
      w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function (a) {
        a.preventDefault(), y.$root.eq(0).focus();
      }).on("keydown." + t.id, q), e(f, { haspopup: !0, expanded: !1, readonly: !1, owns: f.id + "_root" });
    }function o() {
      y.$root.on({ keydown: q, focusin: function focusin(a) {
          y.$root.removeClass(v.focused), a.stopPropagation();
        }, "mousedown click": function mousedownClick(b) {
          var c = b.target;c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root.eq(0).focus()));
        } }).on({ focus: function focus() {
          w.addClass(v.target);
        }, blur: function blur() {
          w.removeClass(v.target);
        } }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
        var b = a(this),
            c = b.data(),
            d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled),
            e = h();e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root.eq(0).focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, { nav: c.nav }) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0);
      }), e(y.$root[0], "hidden", !0);
    }function p() {
      var b;u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function () {
        y._hidden.value = f.value ? y.get("select", u.formatSubmit) : "";
      }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden);
    }function q(a) {
      var b = a.keyCode,
          c = /^(8|46)$/.test(b);return 27 == b ? (y.close(), !1) : void ((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open()));
    }function r(a) {
      a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open();
    }if (!f) return b;var s = !1,
        t = { id: f.id || "P" + Math.abs(~~(Math.random() * new Date())) },
        u = i ? a.extend(!0, {}, i.defaults, l) : l || {},
        v = a.extend({}, b.klasses(), u.klass),
        w = a(f),
        x = function x() {
      return this.start();
    },
        y = x.prototype = { constructor: x, $node: w, start: function start() {
        return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({ start: y.component.onStart, render: y.component.onRender, stop: y.component.onStop, open: y.component.onOpen, close: y.component.onClose, set: y.component.onSet }).on({ start: u.onStart, render: u.onRender, stop: u.onStop, open: u.onOpen, close: u.onClose, set: u.onSet }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"));
      }, render: function render(a) {
        return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render");
      }, stop: function stop() {
        return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function () {
          w.off("." + t.id);
        }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, y) : y;
      }, open: function open(c) {
        return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function () {
          y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1);
        }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root.eq(0).focus(), j.on("click." + t.id + " focusin." + t.id, function (a) {
          var b = a.target;b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0]);
        }).on("keydown." + t.id, function (c) {
          var d = c.keyCode,
              e = y.component.key[d],
              f = c.target;27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close());
        })), y.trigger("open"));
      }, close: function close(a) {
        return a && (y.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function () {
          y.$root.on("focus.toOpen", r);
        }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function () {
          y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0);
        }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y;
      }, clear: function clear(a) {
        return y.set("clear", null, a);
      }, set: function set(b, c, d) {
        var e,
            f,
            g = a.isPlainObject(b),
            h = g ? b : {};if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
          g || (h[b] = c);for (e in h) {
            f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), "select" != e && "clear" != e || w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
          }y.render();
        }return d.muted ? y : y.trigger("set", h);
      }, get: function get(a, c) {
        if (a = a || "value", null != t[a]) return t[a];if ("valueSubmit" == a) {
          if (y._hidden) return y._hidden.value;a = "value";
        }if ("value" == a) return f.value;if (a in y.component.item) {
          if ("string" == typeof c) {
            var d = y.component.get(a);return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : "";
          }return y.component.get(a);
        }
      }, on: function on(b, c, d) {
        var e,
            f,
            g = a.isPlainObject(b),
            h = g ? b : {};if (b) {
          g || (h[b] = c);for (e in h) {
            f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f);
          }
        }return y;
      }, off: function off() {
        var a,
            b,
            c = arguments;for (a = 0, namesCount = c.length; a < namesCount; a += 1) {
          b = c[a], b in t.methods && delete t.methods[b];
        }return y;
      }, trigger: function trigger(a, c) {
        var d = function d(a) {
          var d = t.methods[a];d && d.map(function (a) {
            b._.trigger(a, y, [c]);
          });
        };return d("_" + a), d(a), y;
      } };return new x();
  }function c(a) {
    var b,
        c = "position";return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b;
  }function d() {
    if (k.height() <= i.height()) return 0;var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        c = b[0].offsetWidth;b.css("overflow", "scroll");var d = a('<div style="width:100%" />').appendTo(b),
        e = d[0].offsetWidth;return b.remove(), c - e;
  }function e(b, c, d) {
    if (a.isPlainObject(c)) for (var e in c) {
      f(b, e, c[e]);
    } else f(b, c, d);
  }function f(a, b, c) {
    a.setAttribute(("role" == b ? "" : "aria-") + b, c);
  }function g(b, c) {
    a.isPlainObject(b) || (b = { attribute: c }), c = "";for (var d in b) {
      var e = ("role" == d ? "" : "aria-") + d,
          f = b[d];c += null == f ? "" : e + '="' + b[d] + '"';
    }return c;
  }function h() {
    try {
      return document.activeElement;
    } catch (a) {}
  }var i = a(window),
      j = a(document),
      k = a(document.documentElement);return b.klasses = function (a) {
    return a = a || "picker", { picker: a, opened: a + "--opened", focused: a + "--focused", input: a + "__input", active: a + "__input--active", target: a + "__input--target", holder: a + "__holder", frame: a + "__frame", wrap: a + "__wrap", box: a + "__box" };
  }, b._ = { group: function group(a) {
      for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) {
        c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
      }return d;
    }, node: function node(b, c, d, e) {
      return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : "";
    }, lead: function lead(a) {
      return (a < 10 ? "0" : "") + a;
    }, trigger: function trigger(a, b, c) {
      return "function" == typeof a ? a.apply(b, c || []) : a;
    }, digits: function digits(a) {
      return (/\d/.test(a[1]) ? 2 : 1
      );
    }, isDate: function isDate(a) {
      return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate());
    }, isInteger: function isInteger(a) {
      return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0;
    }, ariaAttr: g }, b.extend = function (c, d) {
    a.fn[c] = function (e, f) {
      var g = this.data(c);return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function () {
        var f = a(this);f.data(c) || new b(this, c, d, e);
      });
    }, a.fn[c].defaults = d.defaults;
  }, b;
}), function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __webpack_require__(44)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery);
}(function (a, b) {
  function c(a, b) {
    var c = this,
        d = a.$node[0],
        e = d.value,
        f = a.$node.data("value"),
        g = f || e,
        h = f ? b.formatSubmit : b.format,
        i = function i() {
      return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction;
    };c.settings = b, c.$node = a.$node, c.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = -function (a) {
      return a[0] === !0 ? a.shift() : -1;
    }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, { format: h }) : c.set("select", null).set("highlight", c.item.now), c.key = { 40: 7, 38: -7, 39: function _() {
        return i() ? -1 : 1;
      }, 37: function _() {
        return i() ? 1 : -1;
      }, go: function go(a) {
        var b = c.item.highlight,
            d = new Date(b.year, b.month, b.date + a);c.set("highlight", d, { interval: a }), this.render();
      } }, a.on("render", function () {
      a.$root.find("." + b.klass.selectMonth).on("change", function () {
        var c = this.value;c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"));
      }), a.$root.find("." + b.klass.selectYear).on("change", function () {
        var c = this.value;c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"));
      });
    }, 1).on("open", function () {
      var d = "";c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1);
    }, 1).on("close", function () {
      a.$root.find("button, select").attr("disabled", !0);
    }, 1);
  }var d = 7,
      e = 6,
      f = a._;c.prototype.set = function (a, b, c) {
    var d = this,
        e = d.item;return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function (e) {
      return b = d[e](a, b, c);
    }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d);
  }, c.prototype.get = function (a) {
    return this.item[a];
  }, c.prototype.create = function (a, c, d) {
    var e,
        g = this;return c = void 0 === c ? a : c, c == -(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), { year: e || c.getFullYear(), month: e || c.getMonth(), date: e || c.getDate(), day: e || c.getDay(), obj: e || c, pick: e || c.getTime() };
  }, c.prototype.createRange = function (a, c) {
    var d = this,
        e = function e(a) {
      return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a;
    };return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), { from: e(a), to: e(c) };
  }, c.prototype.withinRange = function (a, b) {
    return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick;
  }, c.prototype.overlapRanges = function (a, b) {
    var c = this;return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to);
  }, c.prototype.now = function (a, b, c) {
    return b = new Date(), c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c);
  }, c.prototype.navigate = function (a, c, d) {
    var e,
        f,
        g,
        h,
        i = b.isArray(c),
        j = b.isPlainObject(c),
        k = this.item.view;if (i || j) {
      for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) {
        h -= 1;
      }c = [f, g, h];
    }return c;
  }, c.prototype.normalize = function (a) {
    return a.setHours(0, 0, 0, 0), a;
  }, c.prototype.measure = function (a, b) {
    var c = this;return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, { rel: b })) : b = "min" == a ? -(1 / 0) : 1 / 0, b;
  }, c.prototype.viewset = function (a, b) {
    return this.create([b.year, b.month, 1]);
  }, c.prototype.validate = function (a, c, d) {
    var e,
        g,
        h,
        i,
        j = this,
        k = c,
        l = d && d.interval ? d.interval : 1,
        m = j.item.enable === -1,
        n = j.item.min,
        o = j.item.max,
        p = m && j.item.disable.filter(function (a) {
      if (b.isArray(a)) {
        var d = j.create(a).pick;d < c.pick ? e = !0 : d > c.pick && (g = !0);
      }return f.isInteger(a);
    }).length;if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick))) for (m && !p && (!g && l > 0 || !e && l < 0) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) {
      c = j.create([c.year, c.month, c.date + l]);
    }return c;
  }, c.prototype.disabled = function (a) {
    var c = this,
        d = c.item.disable.filter(function (d) {
      return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0;
    });return d = d.length && !d.filter(function (a) {
      return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted;
    }).length, c.item.enable === -1 ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick;
  }, c.prototype.parse = function (a, b, c) {
    var d = this,
        e = {};return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function (a) {
      var c = d.formats[a],
          g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;c && (e[a] = b.substr(0, g)), b = b.substr(g);
    }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b;
  }, c.prototype.formats = function () {
    function a(a, b, c) {
      var d = a.match(/\w+/)[0];return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length;
    }function b(a) {
      return a.match(/\w+/)[0].length;
    }return { d: function d(a, b) {
        return a ? f.digits(a) : b.date;
      }, dd: function dd(a, b) {
        return a ? 2 : f.lead(b.date);
      }, ddd: function ddd(a, c) {
        return a ? b(a) : this.settings.weekdaysShort[c.day];
      }, dddd: function dddd(a, c) {
        return a ? b(a) : this.settings.weekdaysFull[c.day];
      }, m: function m(a, b) {
        return a ? f.digits(a) : b.month + 1;
      }, mm: function mm(a, b) {
        return a ? 2 : f.lead(b.month + 1);
      }, mmm: function mmm(b, c) {
        var d = this.settings.monthsShort;return b ? a(b, d, c) : d[c.month];
      }, mmmm: function mmmm(b, c) {
        var d = this.settings.monthsFull;return b ? a(b, d, c) : d[c.month];
      }, yy: function yy(a, b) {
        return a ? 2 : ("" + b.year).slice(2);
      }, yyyy: function yyyy(a, b) {
        return a ? 4 : b.year;
      }, toArray: function toArray(a) {
        return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
      }, toString: function toString(a, b) {
        var c = this;return c.formats.toArray(a).map(function (a) {
          return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "");
        }).join("");
      } };
  }(), c.prototype.isDateExact = function (a, c) {
    var d = this;return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to);
  }, c.prototype.isDateOverlap = function (a, c) {
    var d = this,
        e = d.settings.firstDay ? 1 : 0;return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && d.overlapRanges(a, c);
  }, c.prototype.flipEnable = function (a) {
    var b = this.item;b.enable = a || (b.enable == -1 ? 1 : -1);
  }, c.prototype.deactivate = function (a, c) {
    var d = this,
        e = d.item.disable.slice(0);return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
      for (var c, g = 0; g < e.length; g += 1) {
        if (d.isDateExact(a, e[g])) {
          c = !0;break;
        }
      }c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a);
    }), e;
  }, c.prototype.activate = function (a, c) {
    var d = this,
        e = d.item.disable,
        g = e.length;return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
      var c, h, i, j;for (i = 0; i < g; i += 1) {
        if (h = e[i], d.isDateExact(h, a)) {
          c = e[i] = null, j = !0;break;
        }if (d.isDateOverlap(h, a)) {
          b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);break;
        }
      }if (c) for (i = 0; i < g; i += 1) {
        if (d.isDateExact(e[i], a)) {
          e[i] = null;break;
        }
      }if (j) for (i = 0; i < g; i += 1) {
        if (d.isDateOverlap(e[i], a)) {
          e[i] = null;break;
        }
      }c && e.push(c);
    }), e.filter(function (a) {
      return null != a;
    });
  }, c.prototype.nodes = function (a) {
    var b = this,
        c = b.settings,
        g = b.item,
        h = g.now,
        i = g.select,
        j = g.highlight,
        k = g.view,
        l = g.disable,
        m = g.min,
        n = g.max,
        o = function (a, b) {
      return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({ min: 0, max: d - 1, i: 1, node: "th", item: function item(d) {
          return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"'];
        } })));
    }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)),
        p = function p(a) {
      return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({ role: "button", controls: b.$node[0].id + "_table" }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"');
    },
        q = function q(d) {
      var e = c.showMonthsShort ? c.monthsShort : c.monthsFull;return "short_months" == d && (e = c.monthsShort), c.selectMonths && void 0 == d ? f.node("select", f.group({ min: 0, max: 11, i: 1, node: "option", item: function item(a) {
          return [e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")];
        } }), c.klass.selectMonth + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({ controls: b.$node[0].id + "_table" }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? null != i ? f.node("div", e[i.month]) : f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month);
    },
        r = function r(d) {
      var e = k.year,
          g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);if (g) {
        var h = m.year,
            i = n.year,
            j = e - g,
            l = e + g;if (h > j && (l += h - j, j = h), i < l) {
          var o = j - h,
              p = l - i;j -= o > p ? p : o, l = i;
        }if (c.selectYears && void 0 == d) return f.node("select", f.group({ min: j, max: l, i: 1, node: "option", item: function item(a) {
            return [a, 0, "value=" + a + (e == a ? " selected" : "")];
          } }), c.klass.selectYear + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({ controls: b.$node[0].id + "_table" }) + ' title="' + c.labelYearSelect + '"');
      }return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year);
    };return createDayLabel = function createDayLabel() {
      return null != i ? f.node("div", i.date) : f.node("div", h.date);
    }, createWeekdayLabel = function createWeekdayLabel() {
      var a;a = null != i ? i.day : h.day;var b = c.weekdaysFull[a];return b;
    }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? q() + r() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({ min: 0, max: e - 1, i: 1, node: "tr", item: function item(a) {
        var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;return [f.group({ min: d * a - k.day + e + 1, max: function max() {
            return this.min + d - 1;
          }, i: 1, node: "td", item: function item(a) {
            a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);var d = i && i.pick == a.pick,
                e = j && j.pick == a.pick,
                g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                o = f.trigger(b.formats.toString, b, [c.format, a]);return [f.node("div", a.date, function (b) {
              return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ");
            }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({ role: "gridcell", label: o, selected: !(!d || b.$node.val() !== o) || null, activedescendant: !!e || null, disabled: !!g || null })), "", f.ariaAttr({ role: "presentation" })];
          } })];
      } })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({ role: "grid", controls: b.$node[0].id, readonly: !0 })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })), c.klass.footer);
  }, c.defaults = function (a) {
    return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"], today: "Today", clear: "Clear", close: "Close", format: "d mmmm, yyyy", klass: { table: a + "table", header: a + "header", date_display: a + "date-display", day_display: a + "day-display", month_display: a + "month-display", year_display: a + "year-display", calendar_container: a + "calendar-container", navPrev: a + "nav--prev", navNext: a + "nav--next", navDisabled: a + "nav--disabled", month: a + "month", year: a + "year", selectMonth: a + "select--month", selectYear: a + "select--year", weekdays: a + "weekday", day: a + "day", disabled: a + "day--disabled", selected: a + "day--selected", highlighted: a + "day--highlighted", now: a + "day--today", infocus: a + "day--infocus", outfocus: a + "day--outfocus", footer: a + "footer", buttonClear: a + "button--clear", buttonToday: a + "button--today", buttonClose: a + "button--close" } };
  }(a.klasses().picker + "__"), a.extend("pickadate", c);
}), function (a) {
  function b() {
    var b = +a(this).attr("data-length"),
        c = +a(this).val().length,
        d = c <= b;a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this));
  }function c(b) {
    var c = b.parent().find('span[class="character-counter"]');c.length || (c = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), b.parent().append(c));
  }function d() {
    a(this).parent().find('span[class="character-counter"]').html("");
  }function e(a, b) {
    var c = b.hasClass("invalid");a && c ? b.removeClass("invalid") : a || c || (b.removeClass("valid"), b.addClass("invalid"));
  }a.fn.characterCounter = function () {
    return this.each(function () {
      var e = a(this),
          f = e.parent().find('span[class="character-counter"]');if (!f.length) {
        var g = void 0 !== e.attr("data-length");g && (e.on("input", b), e.on("focus", b), e.on("blur", d), c(e));
      }
    });
  }, a(document).ready(function () {
    a("input, textarea").characterCounter();
  });
}(jQuery), function (a) {
  var b = { init: function init(b) {
      var c = { duration: 200, dist: -100, shift: 0, padding: 0, fullWidth: !1, indicators: !1, noWrap: !1, onCycleTo: null };b = a.extend(c, b);var d = Materialize.objectSelectorString(a(this));return this.each(function (c) {
        function e() {
          "undefined" != typeof window.ontouchstart && (O[0].addEventListener("touchstart", n), O[0].addEventListener("touchmove", o), O[0].addEventListener("touchend", p)), O[0].addEventListener("mousedown", n), O[0].addEventListener("mousemove", o), O[0].addEventListener("mouseup", p), O[0].addEventListener("mouseleave", p), O[0].addEventListener("click", l);
        }function f(a) {
          return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX;
        }function g(a) {
          return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY;
        }function h(a) {
          return a >= x ? a % x : a < 0 ? h(x + a % x) : a;
        }function i(c) {
          E = !0, O.hasClass("scrolling") || O.addClass("scrolling"), null != N && window.clearTimeout(N), N = window.setTimeout(function () {
            E = !1, O.removeClass("scrolling");
          }, b.duration);var d,
              e,
              f,
              g,
              i,
              j,
              k,
              l = u;if (t = "number" == typeof c ? c : t, u = Math.floor((t + w / 2) / w), f = t - u * w, g = f < 0 ? 1 : -1, i = -g * f * 2 / w, e = x >> 1, b.fullWidth ? k = "translateX(0)" : (k = "translateX(" + (O[0].clientWidth - r) / 2 + "px) ", k += "translateY(" + (O[0].clientHeight - s) / 2 + "px)"), P) {
            var m = u % x,
                n = M.find(".indicator-item.active");n.index() !== m && (n.removeClass("active"), M.find(".indicator-item").eq(m).addClass("active"));
          }for ((!b.noWrap || u >= 0 && u < x) && (j = q[h(u)], a(j).hasClass("active") || (O.find(".carousel-item").removeClass("active"), a(j).addClass("active")), j.style[F] = k + " translateX(" + -f / 2 + "px) translateX(" + g * b.shift * i * d + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), d = 1; d <= e; ++d) {
            b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && f < 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d + i * g), tweenedOpacity = 1 - .2 * (2 * d + i * g)), (!b.noWrap || u + d < x) && (j = q[h(u + d)], j.style[F] = k + " translateX(" + (b.shift + (w * d - f) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block"), b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && f > 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d - i * g), tweenedOpacity = 1 - .2 * (2 * d - i * g)), (!b.noWrap || u - d >= 0) && (j = q[h(u - d)], j.style[F] = k + " translateX(" + (-b.shift + (-w * d - f) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block");
          }if ((!b.noWrap || u >= 0 && u < x) && (j = q[h(u)], j.style[F] = k + " translateX(" + -f / 2 + "px) translateX(" + g * b.shift * i + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), l !== u && "function" == typeof b.onCycleTo) {
            var o = O.find(".carousel-item").eq(h(u));b.onCycleTo.call(this, o, J);
          }
        }function j() {
          var a, b, c, d;a = Date.now(), b = a - H, H = a, c = t - G, G = t, d = 1e3 * c / (1 + b), D = .8 * d + .2 * D;
        }function k() {
          var a, c;B && (a = Date.now() - H, c = B * Math.exp(-a / b.duration), c > 2 || c < -2 ? (i(C - c), requestAnimationFrame(k)) : i(C));
        }function l(c) {
          if (J) return c.preventDefault(), c.stopPropagation(), !1;if (!b.fullWidth) {
            var d = a(c.target).closest(".carousel-item").index(),
                e = u % x - d;0 !== e && (c.preventDefault(), c.stopPropagation()), m(d);
          }
        }function m(a) {
          var c = u % x - a;b.noWrap || (c < 0 ? Math.abs(c + x) < Math.abs(c) && (c += x) : c > 0 && Math.abs(c - x) < c && (c -= x)), c < 0 ? O.trigger("carouselNext", [Math.abs(c)]) : c > 0 && O.trigger("carouselPrev", [c]);
        }function n(a) {
          a.preventDefault(), v = !0, J = !1, K = !1, z = f(a), A = g(a), D = B = 0, G = t, H = Date.now(), clearInterval(I), I = setInterval(j, 100);
        }function o(a) {
          var b, c, d;if (v) if (b = f(a), y = g(a), c = z - b, d = Math.abs(A - y), d < 30 && !K) (c > 2 || c < -2) && (J = !0, z = b, i(t + c));else {
            if (J) return a.preventDefault(), a.stopPropagation(), !1;K = !0;
          }if (J) return a.preventDefault(), a.stopPropagation(), !1;
        }function p(a) {
          if (v) return v = !1, clearInterval(I), C = t, (D > 10 || D < -10) && (B = .9 * D, C = t + B), C = Math.round(C / w) * w, b.noWrap && (C >= w * (x - 1) ? C = w * (x - 1) : C < 0 && (C = 0)), B = C - t, H = Date.now(), requestAnimationFrame(k), J && (a.preventDefault(), a.stopPropagation()), !1;
        }var q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L = d + c,
            M = a('<ul class="indicators"></ul>'),
            N = null,
            O = a(this),
            P = O.attr("data-indicators") || b.indicators,
            Q = function Q() {
          var b = O.find(".carousel-item img").first();if (b.length) b.prop("complete") ? O.css("height", b.height()) : b.on("load", function () {
            O.css("height", a(this).height());
          });else {
            var c = O.find(".carousel-item").first().height();O.css("height", c);
          }
        };return b.fullWidth && (b.dist = 0, Q(), P && O.find(".carousel-fixed-item").addClass("with-indicators")), O.hasClass("initialized") ? (a(window).trigger("resize"), a(this).trigger("carouselNext", [1e-6]), !0) : (O.addClass("initialized"), v = !1, t = C = 0, q = [], r = O.find(".carousel-item").first().innerWidth(), s = O.find(".carousel-item").first().innerHeight(), w = 2 * r + b.padding, O.find(".carousel-item").each(function (b) {
          if (q.push(a(this)[0]), P) {
            var c = a('<li class="indicator-item"></li>');0 === b && c.addClass("active"), c.click(function (b) {
              b.stopPropagation();var c = a(this).index();m(c);
            }), M.append(c);
          }
        }), P && O.append(M), x = q.length, F = "transform", ["webkit", "Moz", "O", "ms"].every(function (a) {
          var b = a + "Transform";return "undefined" == typeof document.body.style[b] || (F = b, !1);
        }), a(window).off("resize.carousel-" + L).on("resize.carousel-" + L, function () {
          b.fullWidth ? (r = O.find(".carousel-item").first().innerWidth(), s = O.find(".carousel-item").first().innerHeight(), w = 2 * r + b.padding, t = 2 * u * r, C = t) : i();
        }), e(), i(t), a(this).on("carouselNext", function (a, b) {
          void 0 === b && (b = 1), C = w * Math.round(t / w) + w * b, t !== C && (B = C - t, H = Date.now(), requestAnimationFrame(k));
        }), a(this).on("carouselPrev", function (a, b) {
          void 0 === b && (b = 1), C = w * Math.round(t / w) - w * b, t !== C && (B = C - t, H = Date.now(), requestAnimationFrame(k));
        }), void a(this).on("carouselSet", function (a, b) {
          void 0 === b && (b = 0), m(b);
        }));
      });
    }, next: function next(b) {
      a(this).trigger("carouselNext", [b]);
    }, prev: function prev(b) {
      a(this).trigger("carouselPrev", [b]);
    }, set: function set(b) {
      a(this).trigger("carouselSet", [b]);
    } };a.fn.carousel = function (c) {
    return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c)) && c ? void a.error("Method " + c + " does not exist on jQuery.carousel") : b.init.apply(this, arguments);
  };
}(jQuery), function (a) {
  var b = { init: function init(b) {
      return this.each(function () {
        var c = a("#" + a(this).attr("data-activates")),
            d = (a("body"), a(this)),
            e = d.parent(".tap-target-wrapper"),
            f = e.find(".tap-target-wave"),
            g = e.find(".tap-target-origin"),
            h = d.find(".tap-target-content");e.length || (e = d.wrap(a('<div class="tap-target-wrapper"></div>')).parent()), h.length || (h = a('<div class="tap-target-content"></div>'), d.append(h)), f.length || (f = a('<div class="tap-target-wave"></div>'), g.length || (g = c.clone(!0, !0), g.addClass("tap-target-origin"), g.removeAttr("id"), g.removeAttr("style"), f.append(g)), e.append(f));var i = function i() {
          e.is(".open") || (e.addClass("open"), setTimeout(function () {
            g.off("click.tapTarget").on("click.tapTarget", function (a) {
              j(), g.off("click.tapTarget");
            }), a(document).off("click.tapTarget").on("click.tapTarget", function (b) {
              j(), a(document).off("click.tapTarget");
            });var b = Materialize.throttle(function () {
              k();
            }, 200);a(window).off("resize.tapTarget").on("resize.tapTarget", b);
          }, 0));
        },
            j = function j() {
          e.is(".open") && (e.removeClass("open"), g.off("click.tapTarget"), a(document).off("click.tapTarget"), a(window).off("resize.tapTarget"));
        },
            k = function k() {
          var b = "fixed" === c.css("position");if (!b) for (var g = c.parents(), i = 0; i < g.length && !(b = "fixed" == a(g[i]).css("position")); i++) {}var j = c.outerWidth(),
              k = c.outerHeight(),
              l = b ? c.offset().top - a(document).scrollTop() : c.offset().top,
              m = b ? c.offset().left - a(document).scrollLeft() : c.offset().left,
              n = a(window).width(),
              o = a(window).height(),
              p = n / 2,
              q = o / 2,
              r = m <= p,
              s = m > p,
              t = l <= q,
              u = l > q,
              v = m >= .25 * n && m <= .75 * n,
              w = d.outerWidth(),
              x = d.outerHeight(),
              y = l + k / 2 - x / 2,
              z = m + j / 2 - w / 2,
              A = b ? "fixed" : "absolute",
              B = v ? w : w / 2 + j,
              C = x / 2,
              D = t ? x / 2 : 0,
              E = 0,
              F = r && !v ? w / 2 - j : 0,
              G = 0,
              H = j,
              I = u ? "bottom" : "top",
              J = j > k ? 2 * j : 2 * j,
              K = J,
              L = x / 2 - K / 2,
              M = w / 2 - J / 2,
              N = {};N.top = t ? y : "", N.right = s ? n - z - w : "", N.bottom = u ? o - y - x : "", N.left = r ? z : "", N.position = A, e.css(N), h.css({ width: B, height: C, top: D, right: G, bottom: E, left: F, padding: H, verticalAlign: I }), f.css({ top: L, left: M, width: J, height: K });
        };"open" == b && (k(), i()), "close" == b && j();
      });
    }, open: function open() {}, close: function close() {} };a.fn.tapTarget = function (c) {
    return b[c] || "object" == (typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c)) ? b.init.apply(this, arguments) : void a.error("Method " + c + " does not exist on jQuery.tap-target");
  };
}(jQuery);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/static/materialize.min.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/static/materialize.min.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module)))

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/graphql/next-apollo/components/UserPic.js";


var IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";

exports.default = function (props) {
  return _react2.default.createElement("img", { style: props.style, src: props.username ? IMAGEFINDER + props.username : IMAGEFINDER + props.username, alt: props.username, className: "circle responsive-img", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/UserPic.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/UserPic.js"); } } })();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(578);

var apolloClient = null;

function _initClient(headers, initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser,
    dataIdFromObject: function dataIdFromObject(result) {
      return result.id || null;
    },
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'http://localhost:8080/graphql',
      opts: {
        credentials: 'cross-origin',
        headers: headers
      }
    })
  });
}

var initClient = exports.initClient = function initClient(headers) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!process.browser) {
    return _initClient(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState);
  }

  return apolloClient;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/lib/initClient.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/lib/initClient.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(68);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(97);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(67);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(649);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(578);

var _initClient = __webpack_require__(670);

var _loader = __webpack_require__(531);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/lib/withData.js';

exports.default = function (Component) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var headers, client, props, app;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  headers = ctx.req ? ctx.req.headers : {};
                  client = (0, _initClient.initClient)(headers);
                  _context.t0 = _extends3.default;
                  _context.t1 = {
                    url: { query: ctx.query, pathname: ctx.pathname }
                  };
                  _context.next = 6;
                  return Component.getInitialProps ? Component.getInitialProps(ctx) : {};

                case 6:
                  _context.t2 = _context.sent;
                  props = (0, _context.t0)(_context.t1, _context.t2);

                  if (process.browser) {
                    _context.next = 12;
                    break;
                  }

                  app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: client, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    }
                  }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    }
                  })));
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 12:
                  return _context.abrupt('return', (0, _extends3.default)({
                    initialState: {
                      apollo: {
                        data: client.getInitialState().data
                      }
                    },
                    headers: headers
                  }, props));

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

      _this.client = (0, _initClient.initClient)(_this.props.headers, _this.props.initialState);

      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.client, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })));
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__(97);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(529);

var _App2 = _interopRequireDefault(_App);

var _withData = __webpack_require__(671);

var _withData2 = _interopRequireDefault(_withData);

var _CreatePost = __webpack_require__(679);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/create.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/create.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/create")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(686);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/CreatePost.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/CreatePost.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(678);


/***/ })

},[680]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz8wZGExNjA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzBkYTE2MDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/MGRhMTYwNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/MGRhMTYwNSIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzPzBkYTE2MDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUGljLmpzPzBkYTE2MDUiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRDbGllbnQuanM/MGRhMTYwNSIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/MGRhMTYwNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanM/MGRhMTYwNSIsIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvQ3JlYXRlUG9zdC5qcz8wZGExNjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztrQ0FJTDs7a0JBQVksT0FBTTt3Q0FBQTs7aUlBR2pCOzs7Ozt3Q0FFQzthQUFPLFNBQ1A7YUFBTyxJQUNQO0FBQ0E7QUFDQTtnQkFBVSxZQUFZLG1CQUFtQixVQUFDLFVBQ3hDO2dCQUFRLElBQ1I7Z0JBQVEsSUFDVDtBQUhELFNBR0csWUFDRDtnQkFBUSxJQUNUO0FBQ0Y7Ozs7Z0NBQ1csVUFDVjthQUFPLGFBQWEsUUFBUSxZQUM3Qjs7OztrQ0FHQztVQUFHLFFBQVEsU0FBUyxPQUFPLE9BQU8sYUFBYSxRQUFRLGNBQWMsT0FBTyxhQUFhLFFBQVEsY0FDbEc7Ozs7NkJBRUM7NkJBQ0Usd0JBQU0sV0FBVTtvQkFBaEI7c0JBS0k7QUFMSjtPQUFBLGtCQUtLLGtDQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssSUFBSSxVQUFV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QUFLLEdBQUUsWUFBWSxPQUFPLFNBQU8sSUFBRSxJQUFJO2NBQVMsRUFBRSxHQUFHO2FBQU8sVUFBUyxHQUFHO2VBQU8sS0FBSyxNQUFNLElBQUUsTUFBSSxJQUFLO0FBQUM7Y0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUc7ZUFBUyxFQUFFLEdBQUUsR0FBRztlQUFPLElBQUUsSUFBRSxJQUFFLElBQUk7Z0JBQVMsRUFBRSxHQUFFLEdBQUc7ZUFBTyxJQUFFLElBQUUsSUFBSTtnQkFBUyxFQUFFLEdBQUc7ZUFBTyxJQUFJO2dCQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7ZUFBTSxDQUFDLENBQUMsRUFBRSxHQUFFLEtBQUcsSUFBRSxFQUFFLEdBQUUsTUFBSSxJQUFFLEVBQUUsTUFBTTtnQkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO2VBQU8sSUFBRSxFQUFFLEdBQUUsS0FBRyxJQUFFLElBQUUsSUFBRSxFQUFFLEdBQUUsS0FBRyxJQUFFLEVBQUs7Z0JBQVMsRUFBRSxHQUFFLEdBQUc7YUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxHQUFHO2NBQUksSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFHLElBQUcsTUFBSSxHQUFFLE9BQU8sRUFBRSxJQUFJLElBQUUsRUFBRSxHQUFFLEdBQUUsS0FBRyxFQUFFLEtBQUcsSUFBSTtnQkFBUztnQkFBUyxJQUFJO2FBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRTtZQUFFLEtBQUcsRUFBRSxJQUFFLEdBQUUsR0FBRTtBQUFHO2dCQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7WUFBSTtZQUFFO1lBQUUsSUFBRSxLQUFLO2NBQUUsSUFBRSxDQUFDLElBQUUsS0FBRyxHQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsS0FBRyxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtTQUF0QyxRQUE4QyxLQUFLLElBQUksS0FBRyxLQUFHLEVBQUUsSUFBRSxHQUFHLE9BQVM7Z0JBQVMsRUFBRSxHQUFHO2FBQUksSUFBSSxJQUFFLEdBQUUs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RSxHQUFFLEdBQUc7UUFBRyxFQUFFLFdBQVMsQ0FBQyxHQUFFLE9BQU8sRUFBRSxRQUFRLEdBQUcsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUztVQUFHLEtBQUcsRUFBRSxHQUFHLE1BQUksS0FBRyxDQUFDLEtBQUcsRUFBRSxPQUFLLEdBQUUsT0FBTyxFQUFNO1lBQU0sQ0FBRztZQUFTLEVBQUUsR0FBRztXQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssR0FBSztZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7U0FBSSxJQUFJLElBQUUsSUFBRyxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTO1VBQUksSUFBRSxJQUFFLEVBQUUsR0FBRyxLQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUUsS0FBRyxLQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUksRUFBRSxLQUFHLEdBQU07WUFBTyxNQUFJLFVBQU0sS0FBSyxVQUFTLEdBQUUsR0FBRzthQUFPLEVBQUUsS0FBRyxFQUFLO0FBQXRDLE1BQUYsR0FBMEMsRUFBRSxTQUFVO1lBQVMsRUFBRSxHQUFFLEdBQUc7U0FBSSxJQUFJLEdBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRyxnQkFBYyxFQUFFLE1BQU0sSUFBRyxJQUFFLEdBQUUsSUFBRSxHQUFHLFNBQVM7VUFBRyxJQUFFLEdBQUcsSUFBRyxJQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsS0FBSyxHQUFFLE9BQU8sRUFBTTtZQUFTO1lBQVMsSUFBSTtXQUFZO1lBQVMsRUFBRSxHQUFHO1FBQUksSUFBRSxFQUFFLGNBQWMsT0FBTyxFQUFFLGVBQWEsRUFBZTtZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxVQUFVLFVBQVEsR0FBRSxLQUFLLFdBQVMsR0FBRSxLQUFLLFVBQVEsRUFBRSxTQUFRLEtBQUssU0FBTyxFQUFFLFFBQVEsYUFBWSxLQUFLLGFBQVcsVUFBUyxHQUFHO1FBQUUsRUFBRSxRQUFRLFFBQU8sQ0FBQyxPQUFLLEVBQUUsUUFBVztBQUExSixPQUEySixLQUFZO1lBQVMsRUFBRSxHQUFHO1FBQUk7UUFBRSxJQUFFLEVBQUUsUUFBUSxXQUFXLE9BQU8sS0FBSSxJQUFFLElBQUUsSUFBRSxLQUFHLElBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxHQUFHLEdBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLFNBQVM7UUFBTyxJQUFFLEVBQUUsZ0JBQWdCO1FBQU8sSUFBRSxJQUFFLE1BQUksTUFBSSxJQUFFO1FBQUUsSUFBRSxLQUFHLEtBQUcsT0FBSyxNQUFJLElBQUUsRUFBRSxFQUFFLFVBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRSxVQUFRLENBQUMsQ0FBQyxHQUFFLE1BQUksRUFBRSxVQUFRLEtBQUksRUFBRSxZQUFVLEdBQUUsRUFBRSxHQUFFLElBQUcsRUFBRSxLQUFLLGdCQUFlLElBQUcsRUFBRSxVQUFVLElBQUcsRUFBRSxRQUFRLFlBQVk7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRTtRQUFRLElBQUUsRUFBRTtRQUFTLElBQUUsRUFBRSxPQUFPLEVBQUUsZUFBYSxFQUFFLGFBQVcsRUFBRSxLQUFJLElBQUUsS0FBRyxDQUFDLEVBQUUsZ0JBQWMsRUFBRSxnQkFBYyxFQUFFLEtBQUcsTUFBSSxNQUFJLEVBQUUsZ0JBQWMsQ0FBQyxPQUFPLElBQUUsRUFBRTtBQUFSLFFBQW1CLElBQUUsRUFBRTtRQUFjLElBQUUsSUFBRSxFQUFFLFNBQU8sRUFBRTtRQUFPLElBQUUsRUFBRSxTQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVUsTUFBSyxFQUFFLFlBQVUsRUFBRSxZQUFVLEVBQUUsV0FBVSxFQUFFLFFBQU0sRUFBRSxHQUFFLElBQUcsRUFBRSxXQUFTLEVBQUUsR0FBRSxJQUFHLEVBQUUsR0FBRSxJQUFHLEVBQUUsa0JBQWdCLEVBQUUsRUFBRSxRQUFPLEVBQUUsU0FBUSxFQUFFLFFBQU0sSUFBRSxFQUFFLEVBQUUsVUFBUyxLQUFHLEdBQUUsRUFBRSxXQUFTLElBQUUsRUFBRSxFQUFFLFVBQVMsS0FBRyxHQUFFLEVBQUUsR0FBRSxHQUFHLElBQUksSUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsUUFBTyxPQUFLLElBQUUsRUFBRSxTQUFTLFNBQVEsRUFBRSxTQUFTO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUU7UUFBTyxJQUFFLEVBQUUsZUFBYTtRQUFHLElBQUUsRUFBRSxhQUFXO1FBQUcsSUFBRSxFQUFFLGFBQVcsR0FBRyxDQUFDLEVBQUUsY0FBWSxNQUFJLEVBQUUsY0FBWSxRQUFNLElBQUUsRUFBRSxZQUFVLEVBQUMsR0FBRSxFQUFFLFVBQVEsR0FBRSxHQUFFLEVBQUUsVUFBUSxLQUFHLElBQUUsRUFBRSxjQUFZLEVBQUMsR0FBRSxFQUFFLEdBQUUsR0FBRSxFQUFFLE1BQUksRUFBRSxTQUFPLEVBQUUsS0FBRyxFQUFFLElBQUUsRUFBRSxJQUFHLEVBQUUsU0FBTyxFQUFFLEtBQUcsRUFBRSxJQUFFLEVBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJO1FBQUU7UUFBRTtRQUFFO1FBQUUsSUFBRSxFQUFFLGdCQUFjO1FBQUUsSUFBRSxFQUFFLFlBQVUsRUFBRSxjQUFhLEVBQUUsYUFBVyxPQUFLLElBQUUsTUFBSSxFQUFFLGFBQVcsSUFBSTtVQUFJLElBQUUsRUFBRSxTQUFPLEVBQUU7VUFBTyxJQUFFLEVBQUUsU0FBTyxFQUFFO1VBQU8sSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFHLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsR0FBRyxFQUFFLEtBQUcsR0FBRyxFQUFFLEtBQUcsRUFBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFHLEVBQUUsZUFBZTtBQUFuSyxXQUF3SyxJQUFFLEVBQUUsVUFBUyxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVMsR0FBRSxFQUFFLFlBQVUsR0FBRSxFQUFFLFlBQVUsR0FBRSxFQUFFLFlBQVk7WUFBUyxFQUFFLEdBQUc7U0FBSSxJQUFJLElBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVMsU0FBUTtRQUFFLEtBQUcsRUFBQyxTQUFRLEdBQUcsRUFBRSxTQUFTLEdBQUcsVUFBUyxTQUFRLEdBQUcsRUFBRSxTQUFTLEdBQUcsWUFBVTtBQUFJLFlBQU0sRUFBQyxXQUFVLE1BQUssVUFBUyxHQUFFLFFBQU8sRUFBRSxJQUFHLFFBQU8sRUFBRSxRQUFPLFFBQU8sRUFBVTtZQUFTLEVBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxPQUFPLElBQUcsTUFBSSxHQUFFLE9BQU0sRUFBQyxHQUFFLEdBQUcsRUFBRSxHQUFHLFVBQVMsR0FBRSxHQUFHLEVBQUUsR0FBRyxXQUFVLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLElBQUc7V0FBRyxFQUFFLEdBQUcsU0FBUSxLQUFHLEVBQUUsR0FBRyxTQUFRO0FBQUksWUFBTSxFQUFDLEdBQUUsR0FBRyxJQUFFLElBQUcsR0FBRSxHQUFHLElBQU07WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1dBQU0sRUFBQyxHQUFFLElBQUUsS0FBRyxHQUFFLEdBQUUsSUFBRSxLQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxNQUFJLElBQUUsS0FBRyxHQUFHLE1BQUksR0FBRyxLQUFHLElBQUUsSUFBRSxLQUFHLEtBQUcsSUFBRSxJQUFFLEtBQU07WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1VBQUksSUFBRSxRQUFRLElBQUUsRUFBRSxFQUFFLE1BQUksRUFBRSxFQUFFO0FBQWxCLFFBQXNCLElBQUUsRUFBRSxFQUFFLE1BQUksRUFBRSxFQUFFLElBQUksT0FBTyxLQUFLLEtBQUssSUFBRSxJQUFFLElBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1VBQUksSUFBRSxRQUFRLElBQUUsRUFBRSxFQUFFLE1BQUksRUFBRSxFQUFFO0FBQWxCLFFBQXNCLElBQUUsRUFBRSxFQUFFLE1BQUksRUFBRSxFQUFFLElBQUksT0FBTyxNQUFJLEtBQUssTUFBTSxHQUFFLEtBQUcsS0FBUTtZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sRUFBRSxFQUFFLElBQUcsRUFBRSxJQUFHLE1BQUksRUFBRSxFQUFFLElBQUcsRUFBRSxJQUFPO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQUcsTUFBSSxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQU87WUFBUyxJQUFJO1NBQUssT0FBSyxJQUFHLEtBQUssUUFBTSxJQUFHLEtBQUssUUFBTSxDQUFDLEdBQUUsS0FBSyxVQUFRLENBQUMsR0FBRSxFQUFFLE1BQU0sTUFBZ0I7WUFBUyxJQUFJO1NBQUssT0FBSyxJQUFHLEtBQUssUUFBTSxJQUFHLEVBQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxRQUFNLEtBQUssUUFBUSxRQUFRLGdCQUFpQjtZQUFTLElBQUk7U0FBSyxXQUFTLElBQUcsS0FBSyxRQUFNLElBQUcsS0FBSyxVQUFRLENBQUMsR0FBRSxFQUFFLE1BQU0sTUFBZ0I7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxFQUFFO1FBQVMsSUFBRSxFQUFFLEVBQUUsZ0JBQWdCLE9BQU8sS0FBRyxLQUFHLFFBQU0sSUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFHLGNBQWEsQ0FBQyxLQUFJLENBQUMsR0FBSztZQUFTLElBQUk7U0FBSyxXQUFTLElBQUcsS0FBSyxZQUFVLElBQUcsRUFBRSxNQUFNLE1BQWdCO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsRUFBRTtRQUFTLElBQUUsS0FBSyxVQUFVLElBQUcsS0FBRyxLQUFHLE9BQUssTUFBSSxFQUFFLFFBQU8sT0FBTyxFQUFFLEVBQUUsR0FBRyxjQUFZLENBQUMsR0FBRSxDQUFDLEdBQUUsT0FBTztBQUFKLFFBQU07UUFBRSxJQUFFLEVBQUUsRUFBRTtRQUFnQixJQUFFO1FBQUcsSUFBRSxLQUFLLGlCQUFjLE9BQU8sVUFBUyxHQUFHO2FBQU8sRUFBRSxFQUFFLFFBQVU7QUFBMUMsTUFBRixFQUE4QyxNQUFJLEVBQXJELEVBQXdELEtBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFRO1FBQUUsRUFBRSxHQUFHLGNBQVksQ0FBQyxHQUFFO0FBQUksVUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVE7UUFBRSxFQUFFLEdBQUcsZUFBYSxFQUFFLEtBQUssRUFBRSxLQUFJLEtBQUcsS0FBRyxPQUFLLE9BQU8sRUFBRSxFQUFFLEdBQUcsYUFBWTtBQUFJLFlBQU8sRUFBRSxTQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBRyxjQUFhLENBQUMsSUFBRyxLQUFHLEtBQU87WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFLLFdBQVcsSUFBSSxJQUFFLEVBQUUsS0FBSyxTQUFRLE1BQU0sS0FBSyxRQUFNLElBQUksRUFBRSxLQUFLLFNBQVEsSUFBRyxLQUFLLFFBQU0sSUFBSSxFQUFFLEtBQUssU0FBVztZQUFTLEVBQUUsR0FBRSxHQUFHO1NBQUssVUFBUSxHQUFFLEtBQUssSUFBTztZQUFTLEVBQUUsR0FBRztRQUFHLEVBQUUsR0FBRSxLQUFJLE9BQU8sT0FBTyxJQUFFLEVBQUUsR0FBRTtBQUFWLFFBQWMsSUFBRSxFQUFFLEdBQUUsSUFBSSxPQUFPLEtBQUcsSUFBRSxLQUFHLE1BQUksS0FBRyxLQUFHLElBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxHQUFFLE1BQUksS0FBTTtZQUFTLEVBQUUsR0FBRztTQUFLLEtBQUcsS0FBSSxLQUFLLFVBQVEsTUFBSyxLQUFLLFVBQVEsRUFBRSxLQUFHLElBQUcsS0FBSyxXQUFVLEtBQUssUUFBUSxTQUFPLEVBQUUsS0FBSyxRQUFRLFFBQU8sQ0FBQyxJQUFHLEtBQUssUUFBTSxJQUFHLEtBQUssZUFBYSxJQUFHLEtBQUssY0FBZTtZQUFTLEVBQUUsR0FBRztXQUFPLElBQUUsS0FBRyxXQUFTLElBQUUsS0FBRyxRQUFNLElBQUUsS0FBRyxTQUFPLElBQUUsS0FBRyxVQUFXO1lBQVMsRUFBRSxHQUFHO1dBQU8sS0FBRyxLQUFHLFNBQU8sS0FBRyxLQUFHLE9BQUssS0FBRyxLQUFHLFNBQU8sS0FBRyxLQUFHLFVBQVc7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxRQUFRLE9BQU8sSUFBRSxFQUFFLElBQUksS0FBSztZQUFTLElBQUk7TUFBRSxNQUFNLE1BQWdCO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBSyxZQUFXLEtBQUssS0FBRyxNQUFLLEtBQUssS0FBUTtZQUFTLElBQUk7TUFBRSxNQUFNLE1BQWdCO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBSyxZQUFXLEtBQUssU0FBTyxNQUFLLEtBQUssU0FBWTtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQWdCO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxRQUFNLENBQUMsR0FBRSxLQUFLLFVBQVEsQ0FBQyxHQUFFLEtBQUssU0FBTyxNQUFLLEtBQUssU0FBTyxNQUFLLEtBQUssUUFBUTtZQUFTLEdBQUcsR0FBRSxHQUFHO1dBQU8sSUFBRSxLQUFHLElBQUcsRUFBRSxjQUFZLEVBQUUsRUFBRSxhQUFZLEdBQUcsU0FBUyxTQUFRLElBQUksR0FBRyxHQUFLO1lBQVMsR0FBRyxHQUFFLEdBQUc7UUFBRSxLQUFHLElBQUcsS0FBSyxVQUFRLEVBQUUsR0FBRSxHQUFHLFdBQVUsS0FBSyxRQUFRLGNBQVksS0FBSyxRQUFRLGVBQWEsR0FBRSxLQUFLLFdBQVMsSUFBRyxLQUFLLFVBQVEsSUFBRyxLQUFLLGNBQVksSUFBRyxLQUFLLFVBQVEsR0FBRSxLQUFLLFFBQU0sRUFBRSxPQUFNLEtBQUssY0FBWSxJQUFJLEVBQUUsTUFBSyxLQUFLLFFBQVEsY0FBYSxHQUFHLE1BQUssQ0FBQyxNQUFLLEVBQUUsYUFBWSxVQUFTLEdBQUc7VUFBSSxJQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUksRUFBRSxNQUFJLEVBQUUsZUFBZSxFQUFNO0FBQXBILE9BQTJIO1lBQVMsR0FBRyxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsVUFBUyxVQUFTLEdBQUUsR0FB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S0FBSyxtQkFBbUIsYUFBYSxjQUFjLEtBQUssZ0JBQWdCLGFBQWEsSUFBRyxZQUFXLE1BQUs7b0JBQTFIO3NCQUNBO0FBREE7MEJBQ0EseUJBQU8sU0FBUTtvQkFBZjtzQkFBQTtBQUFBO1NBR0osc0RBQUssV0FBVTtvQkFBZjtzQkFDRTtBQURGO3lCQUNFLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ0U7QUFERjtrREFDUyxJQUFHLFNBQVEsTUFBSyxRQUFPLFdBQVU7b0JBQXhDO3NCQUNBO0FBREE7MEJBQ0EseUJBQU8sU0FBUTtvQkFBZjtzQkFBQTtBQUFBO1NBR0osd0RBQUssV0FBVTtvQkFBZjtzQkFDRTtBQURGO3lCQUNFLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ0U7QUFERjtrREFDUyxJQUFHLGFBQVksTUFBSyxRQUFPLFdBQVU7b0JBQTVDO3NCQUNBO0FBREE7MEJBQ0EseUJBQU8sU0FBUTtvQkFBZjtzQkFBQTtBQUFBO1NBT0w7Ozs7O0VBNUZxQyxnQkFBTTs7a0JBQXpCLFciLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcblxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4gICAgd2luZG93LiQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YS51c2VybmFtZSlcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbik9PntcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyFcIik7XG4gICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbilcbiAgICB9LCAoKT0+e1xuICAgICAgY29uc29sZS5sb2coXCJmYWlsdXJlXCIpXG4gICAgfSk7XG4gIH1cbiAgc2V0VXNlcm5hbWUodXNlcm5hbWUpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcbiAgfVxuXG4gIGdldFVzZXJuYW1lKCl7XG4gICAgaWYocHJvY2Vzcy5icm93c2VyKSByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSA6IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrZW4tMlwiPlxuICAgICAgICB7LyogaWYocHJvY2Vzcy5XaW5kb3cpe1xuICAgICAgICAgIHZhciB0aGluZyA9IGNyZWF0ZUZyYWdtZW50KDxMb2FkZXIgc3R5bGU9e3tkaXNwbGF5OiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn19Lz4pICovfVxuXG5cbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXt0aGlzLnByb3BzLmRhdGEudXJsLnBhdGhuYW1lfSBzZXRVc2VybmFtZT17dGhpcy5zZXRVc2VybmFtZX0gdXNlcm5hbWU9e3RoaXMuZ2V0VXNlcm5hbWV9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVzZXJuYW1lRmllbGQgZnJvbSAnLi91c2VybmFtZUZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzICE9IG5leHRQcm9wcztcbiAgLy8gfVxuICBnZXRVc2VybmFtZSgpe1xuICAgIGlmKHByb2Nlc3MuYnJvd3NlcikgcmV0dXJuIHRoaXMucHJvcHMudXNlcm5hbWUoKTtcbiAgfVxuICByZW5kZXIgKCl7XG4gICAgcmV0dXJuICg8bmF2IGNsYXNzTmFtZT1cImJsdWUgZGFya2VuLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gcmlnaHRcIj5cbiAgICAgICAgICA8VXNlcm5hbWVGaWVsZCBzZXRVc2VybmFtZT17dGhpcy5wcm9wcy5zZXRVc2VybmFtZX0gdXNlcm5hbWU9e3RoaXMuZ2V0VXNlcm5hbWUoKX0gLz48L2Rpdj5cbiAgICAgICAgPHVsIGlkPVwibmF2XCIgY2xhc3NOYW1lPVwibGVmdCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgPT09ICcvJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICBcdFx0XHQ8YSA+SG9tZSA8L2E+XG4gICAgICAgICAgXHRcdFx0PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSAgPT09ICcvZGlzY292ZXInICYmICdhY3RpdmUnfT5cbiAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nL2Rpc2NvdmVyJz5cbiAgICAgICAgICAgICAgPGEgPkRpc2NvdmVyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSAgPT09ICcvY3JlYXRlJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9jcmVhdGUnPlxuICAgICAgICAgICAgICA8YSA+Q3JlYXRlIGEgUG9zdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj4pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyUGljIGZyb20gJy4vVXNlclBpYyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VybmFtZUZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIGhhbmRsZUtleSA9IChlKT0+e1xuICAgIGlmKGUuY2hhckNvZGUgPT0gMTMgJiYgZS50YXJnZXQudmFsdWUpe1xuICAgICAgdGhpcy5wcm9wcy5zZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VybmFtZSl7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAuNSArIFwiZW1cIiwgZmxvYXQ6ICdsZWZ0J319PiAge3RoaXMucHJvcHMudXNlcm5hbWV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgc20yXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlclBpYyBzdHlsZT17e3dpZHRoOiA0MCArIFwicHhcIiwgbWFyZ2luVG9wOiAxMCArIFwicHhcIn19IHVzZXJuYW1lPXt0aGlzLnByb3BzLnVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuXG4gICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6IDM1ICsgJ3B4J319IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGh1Z2VcIj5hY2NvdW50X2NpcmNsZTwvaT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Y29sb3I6ICcjZmZmZmZmJ319IGh0bWxGb3I9XCJpY29uX3ByZWZpeFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5fSAgaWQ9XCJpY29uX3ByZWZpeFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXNlcm5hbWVGaWVsZC5qcyIsIi8qIVxuICogTWF0ZXJpYWxpemUgdjAuOTguMiAoaHR0cDovL21hdGVyaWFsaXplY3NzLmNvbSlcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUgTWF0ZXJpYWxpemVcbiAqIE1JVCBMaWNlbnNlIChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGpRdWVyeSl7dmFyIGpRdWVyeTtqUXVlcnk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZT8kPXJlcXVpcmUoXCJqcXVlcnlcIik6JH1qUXVlcnkuZWFzaW5nLmpzd2luZz1qUXVlcnkuZWFzaW5nLnN3aW5nLGpRdWVyeS5leHRlbmQoalF1ZXJ5LmVhc2luZyx7ZGVmOlwiZWFzZU91dFF1YWRcIixzd2luZzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBqUXVlcnkuZWFzaW5nW2pRdWVyeS5lYXNpbmcuZGVmXShhLGIsYyxkLGUpfSxlYXNlSW5RdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIrY30sZWFzZU91dFF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZCooYi89ZSkqKGItMikrY30sZWFzZUluT3V0UXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYitjOi1kLzIqKC0tYiooYi0yKS0xKStjfSxlYXNlSW5DdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKihiLz1lKSpiKmIrY30sZWFzZU91dEN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKChiPWIvZS0xKSpiKmIrMSkrY30sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYitjOmQvMiooKGItPTIpKmIqYisyKStjfSxlYXNlSW5RdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKihiLz1lKSpiKmIqYitjfSxlYXNlT3V0UXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZCooKGI9Yi9lLTEpKmIqYipiLTEpK2N9LGVhc2VJbk91dFF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIqYitjOi1kLzIqKChiLT0yKSpiKmIqYi0yKStjfSxlYXNlSW5RdWludDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKihiLz1lKSpiKmIqYipiK2N9LGVhc2VPdXRRdWludDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKigoYj1iL2UtMSkqYipiKmIqYisxKStjfSxlYXNlSW5PdXRRdWludDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiKmIqYitjOmQvMiooKGItPTIpKmIqYipiKmIrMikrY30sZWFzZUluU2luZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKk1hdGguY29zKGIvZSooTWF0aC5QSS8yKSkrZCtjfSxlYXNlT3V0U2luZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKk1hdGguc2luKGIvZSooTWF0aC5QSS8yKSkrY30sZWFzZUluT3V0U2luZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kLzIqKE1hdGguY29zKE1hdGguUEkqYi9lKS0xKStjfSxlYXNlSW5FeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIDA9PWI/YzpkKk1hdGgucG93KDIsMTAqKGIvZS0xKSkrY30sZWFzZU91dEV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gYj09ZT9jK2Q6ZCooLU1hdGgucG93KDIsLTEwKmIvZSkrMSkrY30sZWFzZUluT3V0RXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiAwPT1iP2M6Yj09ZT9jK2Q6KGIvPWUvMik8MT9kLzIqTWF0aC5wb3coMiwxMCooYi0xKSkrYzpkLzIqKC1NYXRoLnBvdygyLC0xMCotLWIpKzIpK2N9LGVhc2VJbkNpcmM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZCooTWF0aC5zcXJ0KDEtKGIvPWUpKmIpLTEpK2N9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqTWF0aC5zcXJ0KDEtKGI9Yi9lLTEpKmIpK2N9LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxPy1kLzIqKE1hdGguc3FydCgxLWIqYiktMSkrYzpkLzIqKE1hdGguc3FydCgxLShiLT0yKSpiKSsxKStjfSxlYXNlSW5FbGFzdGljOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9MS43MDE1OCxnPTAsaD1kO2lmKDA9PWIpcmV0dXJuIGM7aWYoMT09KGIvPWUpKXJldHVybiBjK2Q7aWYoZ3x8KGc9LjMqZSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuLShoKk1hdGgucG93KDIsMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKStjfSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPTEuNzAxNTgsZz0wLGg9ZDtpZigwPT1iKXJldHVybiBjO2lmKDE9PShiLz1lKSlyZXR1cm4gYytkO2lmKGd8fChnPS4zKmUpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybiBoKk1hdGgucG93KDIsLTEwKmIpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykrZCtjfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9MS43MDE1OCxnPTAsaD1kO2lmKDA9PWIpcmV0dXJuIGM7aWYoMj09KGIvPWUvMikpcmV0dXJuIGMrZDtpZihnfHwoZz1lKiguMyoxLjUpKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4gYjwxPy0uNSooaCpNYXRoLnBvdygyLDEwKihiLT0xKSkqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKSkrYzpoKk1hdGgucG93KDIsLTEwKihiLT0xKSkqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKSouNStkK2N9LGVhc2VJbkJhY2s6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB2b2lkIDA9PWYmJihmPTEuNzAxNTgpLGQqKGIvPWUpKmIqKChmKzEpKmItZikrY30sZWFzZU91dEJhY2s6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB2b2lkIDA9PWYmJihmPTEuNzAxNTgpLGQqKChiPWIvZS0xKSpiKigoZisxKSpiK2YpKzEpK2N9LGVhc2VJbk91dEJhY2s6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB2b2lkIDA9PWYmJihmPTEuNzAxNTgpLChiLz1lLzIpPDE/ZC8yKihiKmIqKCgoZio9MS41MjUpKzEpKmItZikpK2M6ZC8yKigoYi09MikqYiooKChmKj0xLjUyNSkrMSkqYitmKSsyKStjfSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZC1qUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UoYSxlLWIsMCxkLGUpK2N9LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZSk8MS8yLjc1P2QqKDcuNTYyNSpiKmIpK2M6YjwyLzIuNzU/ZCooNy41NjI1KihiLT0xLjUvMi43NSkqYisuNzUpK2M6YjwyLjUvMi43NT9kKig3LjU2MjUqKGItPTIuMjUvMi43NSkqYisuOTM3NSkrYzpkKig3LjU2MjUqKGItPTIuNjI1LzIuNzUpKmIrLjk4NDM3NSkrY30sZWFzZUluT3V0Qm91bmNlOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGI8ZS8yPy41KmpRdWVyeS5lYXNpbmcuZWFzZUluQm91bmNlKGEsMipiLDAsZCxlKStjOi41KmpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShhLDIqYi1lLDAsZCxlKSsuNSpkK2N9fSksalF1ZXJ5LmV4dGVuZChqUXVlcnkuZWFzaW5nLHtlYXNlSW5PdXRNYXRlcmlhbDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYitjOmQvNCooKGItPTIpKmIqYisyKStjfX0pLGpRdWVyeS5WZWxvY2l0eT9jb25zb2xlLmxvZyhcIlZlbG9jaXR5IGlzIGFscmVhZHkgbG9hZGVkLiBZb3UgbWF5IGJlIG5lZWRsZXNzbHkgaW1wb3J0aW5nIFZlbG9jaXR5IGFnYWluOyBub3RlIHRoYXQgTWF0ZXJpYWxpemUgaW5jbHVkZXMgVmVsb2NpdHkuXCIpOighZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXt2YXIgYj1hLmxlbmd0aCxkPWMudHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCIhPT1kJiYhYy5pc1dpbmRvdyhhKSYmKCEoMSE9PWEubm9kZVR5cGV8fCFiKXx8KFwiYXJyYXlcIj09PWR8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYSkpfWlmKCFhLmpRdWVyeSl7dmFyIGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IGMuZm4uaW5pdChhLGIpfTtjLmlzV2luZG93PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT1hLndpbmRvd30sYy50eXBlPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9lW2cuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGMuaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cImFycmF5XCI9PT1jLnR5cGUoYSl9LGMuaXNQbGFpbk9iamVjdD1mdW5jdGlvbihhKXt2YXIgYjtpZighYXx8XCJvYmplY3RcIiE9PWMudHlwZShhKXx8YS5ub2RlVHlwZXx8Yy5pc1dpbmRvdyhhKSlyZXR1cm4hMTt0cnl7aWYoYS5jb25zdHJ1Y3RvciYmIWYuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFmLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGQpe3JldHVybiExfWZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxmLmNhbGwoYSxiKX0sYy5lYWNoPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPTAsZz1hLmxlbmd0aCxoPWIoYSk7aWYoZCl7aWYoaClmb3IoO2c+ZiYmKGU9Yy5hcHBseShhW2ZdLGQpLGUhPT0hMSk7ZisrKTtlbHNlIGZvcihmIGluIGEpaWYoZT1jLmFwcGx5KGFbZl0sZCksZT09PSExKWJyZWFrfWVsc2UgaWYoaClmb3IoO2c+ZiYmKGU9Yy5jYWxsKGFbZl0sZixhW2ZdKSxlIT09ITEpO2YrKyk7ZWxzZSBmb3IoZiBpbiBhKWlmKGU9Yy5jYWxsKGFbZl0sZixhW2ZdKSxlPT09ITEpYnJlYWs7cmV0dXJuIGF9LGMuZGF0YT1mdW5jdGlvbihhLGIsZSl7aWYodm9pZCAwPT09ZSl7dmFyIGY9YVtjLmV4cGFuZG9dLGc9ZiYmZFtmXTtpZih2b2lkIDA9PT1iKXJldHVybiBnO2lmKGcmJmIgaW4gZylyZXR1cm4gZ1tiXX1lbHNlIGlmKHZvaWQgMCE9PWIpe3ZhciBmPWFbYy5leHBhbmRvXXx8KGFbYy5leHBhbmRvXT0rK2MudXVpZCk7cmV0dXJuIGRbZl09ZFtmXXx8e30sZFtmXVtiXT1lLGV9fSxjLnJlbW92ZURhdGE9ZnVuY3Rpb24oYSxiKXt2YXIgZT1hW2MuZXhwYW5kb10sZj1lJiZkW2VdO2YmJmMuZWFjaChiLGZ1bmN0aW9uKGEsYil7ZGVsZXRlIGZbYl19KX0sYy5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGQsZSxmLGcsaD1hcmd1bWVudHNbMF18fHt9LGk9MSxqPWFyZ3VtZW50cy5sZW5ndGgsaz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBoJiYoaz1oLGg9YXJndW1lbnRzW2ldfHx7fSxpKyspLFwib2JqZWN0XCIhPXR5cGVvZiBoJiZcImZ1bmN0aW9uXCIhPT1jLnR5cGUoaCkmJihoPXt9KSxpPT09aiYmKGg9dGhpcyxpLS0pO2o+aTtpKyspaWYobnVsbCE9KGY9YXJndW1lbnRzW2ldKSlmb3IoZSBpbiBmKWE9aFtlXSxkPWZbZV0saCE9PWQmJihrJiZkJiYoYy5pc1BsYWluT2JqZWN0KGQpfHwoYj1jLmlzQXJyYXkoZCkpKT8oYj8oYj0hMSxnPWEmJmMuaXNBcnJheShhKT9hOltdKTpnPWEmJmMuaXNQbGFpbk9iamVjdChhKT9hOnt9LGhbZV09Yy5leHRlbmQoayxnLGQpKTp2b2lkIDAhPT1kJiYoaFtlXT1kKSk7cmV0dXJuIGh9LGMucXVldWU9ZnVuY3Rpb24oYSxkLGUpe2Z1bmN0aW9uIGYoYSxjKXt2YXIgZD1jfHxbXTtyZXR1cm4gbnVsbCE9YSYmKGIoT2JqZWN0KGEpKT8hZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDspYVtlKytdPWJbZCsrXTtpZihjIT09Yylmb3IoO3ZvaWQgMCE9PWJbZF07KWFbZSsrXT1iW2QrK107cmV0dXJuIGEubGVuZ3RoPWUsYX0oZCxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6W10ucHVzaC5jYWxsKGQsYSkpLGR9aWYoYSl7ZD0oZHx8XCJmeFwiKStcInF1ZXVlXCI7dmFyIGc9Yy5kYXRhKGEsZCk7cmV0dXJuIGU/KCFnfHxjLmlzQXJyYXkoZSk/Zz1jLmRhdGEoYSxkLGYoZSkpOmcucHVzaChlKSxnKTpnfHxbXX19LGMuZGVxdWV1ZT1mdW5jdGlvbihhLGIpe2MuZWFjaChhLm5vZGVUeXBlP1thXTphLGZ1bmN0aW9uKGEsZCl7Yj1ifHxcImZ4XCI7dmFyIGU9Yy5xdWV1ZShkLGIpLGY9ZS5zaGlmdCgpO1wiaW5wcm9ncmVzc1wiPT09ZiYmKGY9ZS5zaGlmdCgpKSxmJiYoXCJmeFwiPT09YiYmZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxmLmNhbGwoZCxmdW5jdGlvbigpe2MuZGVxdWV1ZShkLGIpfSkpfSl9LGMuZm49Yy5wcm90b3R5cGU9e2luaXQ6ZnVuY3Rpb24oYSl7aWYoYS5ub2RlVHlwZSlyZXR1cm4gdGhpc1swXT1hLHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpfSxvZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgYj10aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdD90aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOnt0b3A6MCxsZWZ0OjB9O3JldHVybnt0b3A6Yi50b3ArKGEucGFnZVlPZmZzZXR8fGRvY3VtZW50LnNjcm9sbFRvcHx8MCktKGRvY3VtZW50LmNsaWVudFRvcHx8MCksbGVmdDpiLmxlZnQrKGEucGFnZVhPZmZzZXR8fGRvY3VtZW50LnNjcm9sbExlZnR8fDApLShkb2N1bWVudC5jbGllbnRMZWZ0fHwwKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe2Zvcih2YXIgYT10aGlzLm9mZnNldFBhcmVudHx8ZG9jdW1lbnQ7YSYmXCJodG1sXCI9PT0hYS5ub2RlVHlwZS50b0xvd2VyQ2FzZSYmXCJzdGF0aWNcIj09PWEuc3R5bGUucG9zaXRpb247KWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fGRvY3VtZW50fXZhciBiPXRoaXNbMF0sYT1hLmFwcGx5KGIpLGQ9dGhpcy5vZmZzZXQoKSxlPS9eKD86Ym9keXxodG1sKSQvaS50ZXN0KGEubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OmMoYSkub2Zmc2V0KCk7cmV0dXJuIGQudG9wLT1wYXJzZUZsb2F0KGIuc3R5bGUubWFyZ2luVG9wKXx8MCxkLmxlZnQtPXBhcnNlRmxvYXQoYi5zdHlsZS5tYXJnaW5MZWZ0KXx8MCxhLnN0eWxlJiYoZS50b3ArPXBhcnNlRmxvYXQoYS5zdHlsZS5ib3JkZXJUb3BXaWR0aCl8fDAsZS5sZWZ0Kz1wYXJzZUZsb2F0KGEuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKXx8MCkse3RvcDpkLnRvcC1lLnRvcCxsZWZ0OmQubGVmdC1lLmxlZnR9fX07dmFyIGQ9e307Yy5leHBhbmRvPVwidmVsb2NpdHlcIisobmV3IERhdGUpLmdldFRpbWUoKSxjLnV1aWQ9MDtmb3IodmFyIGU9e30sZj1lLmhhc093blByb3BlcnR5LGc9ZS50b1N0cmluZyxoPVwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxpPTA7aTxoLmxlbmd0aDtpKyspZVtcIltvYmplY3QgXCIraFtpXStcIl1cIl09aFtpXS50b0xvd2VyQ2FzZSgpO2MuZm4uaW5pdC5wcm90b3R5cGU9Yy5mbixhLlZlbG9jaXR5PXtVdGlsaXRpZXM6Y319fSh3aW5kb3cpLGZ1bmN0aW9uKGEpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShhKTphKCl9KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSl7Zm9yKHZhciBiPS0xLGM9YT9hLmxlbmd0aDowLGQ9W107KytiPGM7KXt2YXIgZT1hW2JdO2UmJmQucHVzaChlKX1yZXR1cm4gZH1mdW5jdGlvbiBmKGEpe3JldHVybiBwLmlzV3JhcHBlZChhKT9hPVtdLnNsaWNlLmNhbGwoYSk6cC5pc05vZGUoYSkmJihhPVthXSksYX1mdW5jdGlvbiBnKGEpe3ZhciBiPW0uZGF0YShhLFwidmVsb2NpdHlcIik7cmV0dXJuIG51bGw9PT1iP2Q6Yn1mdW5jdGlvbiBoKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gTWF0aC5yb3VuZChiKmEpKigxL2EpfX1mdW5jdGlvbiBpKGEsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiKXtyZXR1cm4gMS0zKmIrMyphfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm4gMypiLTYqYX1mdW5jdGlvbiBoKGEpe3JldHVybiAzKmF9ZnVuY3Rpb24gaShhLGIsYyl7cmV0dXJuKChmKGIsYykqYStnKGIsYykpKmEraChiKSkqYX1mdW5jdGlvbiBqKGEsYixjKXtyZXR1cm4gMypmKGIsYykqYSphKzIqZyhiLGMpKmEraChiKX1mdW5jdGlvbiBrKGIsYyl7Zm9yKHZhciBlPTA7cD5lOysrZSl7dmFyIGY9aihjLGEsZCk7aWYoMD09PWYpcmV0dXJuIGM7dmFyIGc9aShjLGEsZCktYjtjLT1nL2Z9cmV0dXJuIGN9ZnVuY3Rpb24gbCgpe2Zvcih2YXIgYj0wO3Q+YjsrK2IpeFtiXT1pKGIqdSxhLGQpfWZ1bmN0aW9uIG0oYixjLGUpe3ZhciBmLGcsaD0wO2RvIGc9YysoZS1jKS8yLGY9aShnLGEsZCktYixmPjA/ZT1nOmM9Zzt3aGlsZShNYXRoLmFicyhmKT5yJiYrK2g8cyk7cmV0dXJuIGd9ZnVuY3Rpb24gbihiKXtmb3IodmFyIGM9MCxlPTEsZj10LTE7ZSE9ZiYmeFtlXTw9YjsrK2UpYys9dTstLWU7dmFyIGc9KGIteFtlXSkvKHhbZSsxXS14W2VdKSxoPWMrZyp1LGk9aihoLGEsZCk7cmV0dXJuIGk+PXE/ayhiLGgpOjA9PWk/aDptKGIsYyxjK3UpfWZ1bmN0aW9uIG8oKXt5PSEwLChhIT1jfHxkIT1lKSYmbCgpfXZhciBwPTQscT0uMDAxLHI9MWUtNyxzPTEwLHQ9MTEsdT0xLyh0LTEpLHY9XCJGbG9hdDMyQXJyYXlcImluIGI7aWYoNCE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciB3PTA7ND53OysrdylpZihcIm51bWJlclwiIT10eXBlb2YgYXJndW1lbnRzW3ddfHxpc05hTihhcmd1bWVudHNbd10pfHwhaXNGaW5pdGUoYXJndW1lbnRzW3ddKSlyZXR1cm4hMTthPU1hdGgubWluKGEsMSksZD1NYXRoLm1pbihkLDEpLGE9TWF0aC5tYXgoYSwwKSxkPU1hdGgubWF4KGQsMCk7dmFyIHg9dj9uZXcgRmxvYXQzMkFycmF5KHQpOm5ldyBBcnJheSh0KSx5PSExLHo9ZnVuY3Rpb24oYil7cmV0dXJuIHl8fG8oKSxhPT09YyYmZD09PWU/YjowPT09Yj8wOjE9PT1iPzE6aShuKGIpLGMsZSl9O3ouZ2V0Q29udHJvbFBvaW50cz1mdW5jdGlvbigpe3JldHVyblt7eDphLHk6Y30se3g6ZCx5OmV9XX07dmFyIEE9XCJnZW5lcmF0ZUJlemllcihcIitbYSxjLGQsZV0rXCIpXCI7cmV0dXJuIHoudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gQX0sen1mdW5jdGlvbiBqKGEsYil7dmFyIGM9YTtyZXR1cm4gcC5pc1N0cmluZyhhKT90LkVhc2luZ3NbYV18fChjPSExKTpjPXAuaXNBcnJheShhKSYmMT09PWEubGVuZ3RoP2guYXBwbHkobnVsbCxhKTpwLmlzQXJyYXkoYSkmJjI9PT1hLmxlbmd0aD91LmFwcGx5KG51bGwsYS5jb25jYXQoW2JdKSk6ISghcC5pc0FycmF5KGEpfHw0IT09YS5sZW5ndGgpJiZpLmFwcGx5KG51bGwsYSksYz09PSExJiYoYz10LkVhc2luZ3NbdC5kZWZhdWx0cy5lYXNpbmddP3QuZGVmYXVsdHMuZWFzaW5nOnMpLGN9ZnVuY3Rpb24gayhhKXtpZihhKXt2YXIgYj0obmV3IERhdGUpLmdldFRpbWUoKSxjPXQuU3RhdGUuY2FsbHMubGVuZ3RoO2M+MWU0JiYodC5TdGF0ZS5jYWxscz1lKHQuU3RhdGUuY2FsbHMpKTtmb3IodmFyIGY9MDtjPmY7ZisrKWlmKHQuU3RhdGUuY2FsbHNbZl0pe3ZhciBoPXQuU3RhdGUuY2FsbHNbZl0saT1oWzBdLGo9aFsyXSxuPWhbM10sbz0hIW4scT1udWxsO258fChuPXQuU3RhdGUuY2FsbHNbZl1bM109Yi0xNik7Zm9yKHZhciByPU1hdGgubWluKChiLW4pL2ouZHVyYXRpb24sMSkscz0wLHU9aS5sZW5ndGg7dT5zO3MrKyl7dmFyIHc9aVtzXSx5PXcuZWxlbWVudDtpZihnKHkpKXt2YXIgej0hMTtpZihqLmRpc3BsYXkhPT1kJiZudWxsIT09ai5kaXNwbGF5JiZcIm5vbmVcIiE9PWouZGlzcGxheSl7aWYoXCJmbGV4XCI9PT1qLmRpc3BsYXkpe3ZhciBBPVtcIi13ZWJraXQtYm94XCIsXCItbW96LWJveFwiLFwiLW1zLWZsZXhib3hcIixcIi13ZWJraXQtZmxleFwiXTttLmVhY2goQSxmdW5jdGlvbihhLGIpe3Yuc2V0UHJvcGVydHlWYWx1ZSh5LFwiZGlzcGxheVwiLGIpfSl9di5zZXRQcm9wZXJ0eVZhbHVlKHksXCJkaXNwbGF5XCIsai5kaXNwbGF5KX1qLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09ai52aXNpYmlsaXR5JiZ2LnNldFByb3BlcnR5VmFsdWUoeSxcInZpc2liaWxpdHlcIixqLnZpc2liaWxpdHkpO2Zvcih2YXIgQiBpbiB3KWlmKFwiZWxlbWVudFwiIT09Qil7dmFyIEMsRD13W0JdLEU9cC5pc1N0cmluZyhELmVhc2luZyk/dC5FYXNpbmdzW0QuZWFzaW5nXTpELmVhc2luZztpZigxPT09cilDPUQuZW5kVmFsdWU7ZWxzZXt2YXIgRj1ELmVuZFZhbHVlLUQuc3RhcnRWYWx1ZTtpZihDPUQuc3RhcnRWYWx1ZStGKkUocixqLEYpLCFvJiZDPT09RC5jdXJyZW50VmFsdWUpY29udGludWV9aWYoRC5jdXJyZW50VmFsdWU9QyxcInR3ZWVuXCI9PT1CKXE9QztlbHNle2lmKHYuSG9va3MucmVnaXN0ZXJlZFtCXSl7dmFyIEc9di5Ib29rcy5nZXRSb290KEIpLEg9Zyh5KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ddO0gmJihELnJvb3RQcm9wZXJ0eVZhbHVlPUgpfXZhciBJPXYuc2V0UHJvcGVydHlWYWx1ZSh5LEIsRC5jdXJyZW50VmFsdWUrKDA9PT1wYXJzZUZsb2F0KEMpP1wiXCI6RC51bml0VHlwZSksRC5yb290UHJvcGVydHlWYWx1ZSxELnNjcm9sbERhdGEpO3YuSG9va3MucmVnaXN0ZXJlZFtCXSYmKGcoeSkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtHXT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbR10/di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ddKFwiZXh0cmFjdFwiLG51bGwsSVsxXSk6SVsxXSksXCJ0cmFuc2Zvcm1cIj09PUlbMF0mJih6PSEwKX19ai5tb2JpbGVIQSYmZyh5KS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD09PWQmJihnKHkpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPVwiKDBweCwgMHB4LCAwcHgpXCIsej0hMCkseiYmdi5mbHVzaFRyYW5zZm9ybUNhY2hlKHkpfX1qLmRpc3BsYXkhPT1kJiZcIm5vbmVcIiE9PWouZGlzcGxheSYmKHQuU3RhdGUuY2FsbHNbZl1bMl0uZGlzcGxheT0hMSksai52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWoudmlzaWJpbGl0eSYmKHQuU3RhdGUuY2FsbHNbZl1bMl0udmlzaWJpbGl0eT0hMSksai5wcm9ncmVzcyYmai5wcm9ncmVzcy5jYWxsKGhbMV0saFsxXSxyLE1hdGgubWF4KDAsbitqLmR1cmF0aW9uLWIpLG4scSksMT09PXImJmwoZil9fXQuU3RhdGUuaXNUaWNraW5nJiZ4KGspfWZ1bmN0aW9uIGwoYSxiKXtpZighdC5TdGF0ZS5jYWxsc1thXSlyZXR1cm4hMTtmb3IodmFyIGM9dC5TdGF0ZS5jYWxsc1thXVswXSxlPXQuU3RhdGUuY2FsbHNbYV1bMV0sZj10LlN0YXRlLmNhbGxzW2FdWzJdLGg9dC5TdGF0ZS5jYWxsc1thXVs0XSxpPSExLGo9MCxrPWMubGVuZ3RoO2s+ajtqKyspe3ZhciBsPWNbal0uZWxlbWVudDtpZihifHxmLmxvb3B8fChcIm5vbmVcIj09PWYuZGlzcGxheSYmdi5zZXRQcm9wZXJ0eVZhbHVlKGwsXCJkaXNwbGF5XCIsZi5kaXNwbGF5KSxcImhpZGRlblwiPT09Zi52aXNpYmlsaXR5JiZ2LnNldFByb3BlcnR5VmFsdWUobCxcInZpc2liaWxpdHlcIixmLnZpc2liaWxpdHkpKSxmLmxvb3AhPT0hMCYmKG0ucXVldWUobClbMV09PT1kfHwhL1xcLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcvaS50ZXN0KG0ucXVldWUobClbMV0pKSYmZyhsKSl7ZyhsKS5pc0FuaW1hdGluZz0hMSxnKGwpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU9e307dmFyIG49ITE7bS5lYWNoKHYuTGlzdHMudHJhbnNmb3JtczNELGZ1bmN0aW9uKGEsYil7dmFyIGM9L15zY2FsZS8udGVzdChiKT8xOjAsZT1nKGwpLnRyYW5zZm9ybUNhY2hlW2JdO2cobCkudHJhbnNmb3JtQ2FjaGVbYl0hPT1kJiZuZXcgUmVnRXhwKFwiXlxcXFwoXCIrYytcIlteLl1cIikudGVzdChlKSYmKG49ITAsZGVsZXRlIGcobCkudHJhbnNmb3JtQ2FjaGVbYl0pfSksZi5tb2JpbGVIQSYmKG49ITAsZGVsZXRlIGcobCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QpLG4mJnYuZmx1c2hUcmFuc2Zvcm1DYWNoZShsKSx2LlZhbHVlcy5yZW1vdmVDbGFzcyhsLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpfWlmKCFiJiZmLmNvbXBsZXRlJiYhZi5sb29wJiZqPT09ay0xKXRyeXtmLmNvbXBsZXRlLmNhbGwoZSxlKX1jYXRjaChvKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgb30sMSl9aCYmZi5sb29wIT09ITAmJmgoZSksZyhsKSYmZi5sb29wPT09ITAmJiFiJiYobS5lYWNoKGcobCkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGEsYil7L15yb3RhdGUvLnRlc3QoYSkmJjM2MD09PXBhcnNlRmxvYXQoYi5lbmRWYWx1ZSkmJihiLmVuZFZhbHVlPTAsYi5zdGFydFZhbHVlPTM2MCksL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QoYSkmJjEwMD09PXBhcnNlRmxvYXQoYi5lbmRWYWx1ZSkmJlwiJVwiPT09Yi51bml0VHlwZSYmKGIuZW5kVmFsdWU9MCxiLnN0YXJ0VmFsdWU9MTAwKX0pLHQobCxcInJldmVyc2VcIix7bG9vcDohMCxkZWxheTpmLmRlbGF5fSkpLGYucXVldWUhPT0hMSYmbS5kZXF1ZXVlKGwsZi5xdWV1ZSl9dC5TdGF0ZS5jYWxsc1thXT0hMTtmb3IodmFyIHA9MCxxPXQuU3RhdGUuY2FsbHMubGVuZ3RoO3E+cDtwKyspaWYodC5TdGF0ZS5jYWxsc1twXSE9PSExKXtpPSEwO2JyZWFrfWk9PT0hMSYmKHQuU3RhdGUuaXNUaWNraW5nPSExLGRlbGV0ZSB0LlN0YXRlLmNhbGxzLHQuU3RhdGUuY2FsbHM9W10pfXZhciBtLG49ZnVuY3Rpb24oKXtpZihjLmRvY3VtZW50TW9kZSlyZXR1cm4gYy5kb2N1bWVudE1vZGU7Zm9yKHZhciBhPTc7YT40O2EtLSl7dmFyIGI9Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGIuaW5uZXJIVE1MPVwiPCEtLVtpZiBJRSBcIithK1wiXT48c3Bhbj48L3NwYW4+PCFbZW5kaWZdLS0+XCIsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKXJldHVybiBiPW51bGwsYX1yZXR1cm4gZH0oKSxvPWZ1bmN0aW9uKCl7dmFyIGE9MDtyZXR1cm4gYi53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGIubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihiKXt2YXIgYyxkPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBjPU1hdGgubWF4KDAsMTYtKGQtYSkpLGE9ZCtjLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKGQrYyl9LGMpfX0oKSxwPXtpc1N0cmluZzpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSl9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpfSxpc05vZGU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEubm9kZVR5cGV9LGlzTm9kZUxpc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGEmJi9eXFxbb2JqZWN0IChIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkpJiZhLmxlbmd0aCE9PWQmJigwPT09YS5sZW5ndGh8fFwib2JqZWN0XCI9PXR5cGVvZiBhWzBdJiZhWzBdLm5vZGVUeXBlPjApfSxpc1dyYXBwZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJihhLmpxdWVyeXx8Yi5aZXB0byYmYi5aZXB0by56ZXB0by5pc1ooYSkpfSxpc1NWRzpmdW5jdGlvbihhKXtyZXR1cm4gYi5TVkdFbGVtZW50JiZhIGluc3RhbmNlb2YgYi5TVkdFbGVtZW50fSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYiBpbiBhKXJldHVybiExO3JldHVybiEwfX0scT0hMTtpZihhLmZuJiZhLmZuLmpxdWVyeT8obT1hLHE9ITApOm09Yi5WZWxvY2l0eS5VdGlsaXRpZXMsOD49biYmIXEpdGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7aWYoNz49bilyZXR1cm4gdm9pZChqUXVlcnkuZm4udmVsb2NpdHk9alF1ZXJ5LmZuLmFuaW1hdGUpO3ZhciByPTQwMCxzPVwic3dpbmdcIix0PXtTdGF0ZTp7aXNNb2JpbGU6L0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQW5kcm9pZDovQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNHaW5nZXJicmVhZDovQW5kcm9pZCAyXFwuM1xcLlszLTddL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0Nocm9tZTpiLmNocm9tZSxpc0ZpcmVmb3g6L0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHByZWZpeEVsZW1lbnQ6Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHByZWZpeE1hdGNoZXM6e30sc2Nyb2xsQW5jaG9yOm51bGwsc2Nyb2xsUHJvcGVydHlMZWZ0Om51bGwsc2Nyb2xsUHJvcGVydHlUb3A6bnVsbCxpc1RpY2tpbmc6ITEsY2FsbHM6W119LENTUzp7fSxVdGlsaXRpZXM6bSxSZWRpcmVjdHM6e30sRWFzaW5nczp7fSxQcm9taXNlOmIuUHJvbWlzZSxkZWZhdWx0czp7cXVldWU6XCJcIixkdXJhdGlvbjpyLGVhc2luZzpzLGJlZ2luOmQsY29tcGxldGU6ZCxwcm9ncmVzczpkLGRpc3BsYXk6ZCx2aXNpYmlsaXR5OmQsbG9vcDohMSxkZWxheTohMSxtb2JpbGVIQTohMCxfY2FjaGVWYWx1ZXM6ITB9LGluaXQ6ZnVuY3Rpb24oYSl7bS5kYXRhKGEsXCJ2ZWxvY2l0eVwiLHtpc1NWRzpwLmlzU1ZHKGEpLGlzQW5pbWF0aW5nOiExLGNvbXB1dGVkU3R5bGU6bnVsbCx0d2VlbnNDb250YWluZXI6bnVsbCxyb290UHJvcGVydHlWYWx1ZUNhY2hlOnt9LHRyYW5zZm9ybUNhY2hlOnt9fSl9LGhvb2s6bnVsbCxtb2NrOiExLHZlcnNpb246e21ham9yOjEsbWlub3I6MixwYXRjaDoyfSxkZWJ1ZzohMX07Yi5wYWdlWU9mZnNldCE9PWQ/KHQuU3RhdGUuc2Nyb2xsQW5jaG9yPWIsdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJwYWdlWE9mZnNldFwiLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJwYWdlWU9mZnNldFwiKToodC5TdGF0ZS5zY3JvbGxBbmNob3I9Yy5kb2N1bWVudEVsZW1lbnR8fGMuYm9keS5wYXJlbnROb2RlfHxjLmJvZHksdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJzY3JvbGxMZWZ0XCIsdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInNjcm9sbFRvcFwiKTt2YXIgdT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuLWEudGVuc2lvbiphLngtYS5mcmljdGlvbiphLnZ9ZnVuY3Rpb24gYihiLGMsZCl7dmFyIGU9e3g6Yi54K2QuZHgqYyx2OmIuditkLmR2KmMsdGVuc2lvbjpiLnRlbnNpb24sZnJpY3Rpb246Yi5mcmljdGlvbn07cmV0dXJue2R4OmUudixkdjphKGUpfX1mdW5jdGlvbiBjKGMsZCl7dmFyIGU9e2R4OmMudixkdjphKGMpfSxmPWIoYywuNSpkLGUpLGc9YihjLC41KmQsZiksaD1iKGMsZCxnKSxpPTEvNiooZS5keCsyKihmLmR4K2cuZHgpK2guZHgpLGo9MS82KihlLmR2KzIqKGYuZHYrZy5kdikraC5kdik7cmV0dXJuIGMueD1jLngraSpkLGMudj1jLnYraipkLGN9cmV0dXJuIGZ1bmN0aW9uIGQoYSxiLGUpe3ZhciBmLGcsaCxpPXt4Oi0xLHY6MCx0ZW5zaW9uOm51bGwsZnJpY3Rpb246bnVsbH0saj1bMF0saz0wLGw9MWUtNCxtPS4wMTY7Zm9yKGE9cGFyc2VGbG9hdChhKXx8NTAwLGI9cGFyc2VGbG9hdChiKXx8MjAsZT1lfHxudWxsLGkudGVuc2lvbj1hLGkuZnJpY3Rpb249YixmPW51bGwhPT1lLGY/KGs9ZChhLGIpLGc9ay9lKm0pOmc9bTtoPWMoaHx8aSxnKSxqLnB1c2goMStoLngpLGsrPTE2LE1hdGguYWJzKGgueCk+bCYmTWF0aC5hYnMoaC52KT5sOyk7cmV0dXJuIGY/ZnVuY3Rpb24oYSl7cmV0dXJuIGpbYSooai5sZW5ndGgtMSl8MF19Omt9fSgpO3QuRWFzaW5ncz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LHNwcmluZzpmdW5jdGlvbihhKXtyZXR1cm4gMS1NYXRoLmNvcyg0LjUqYSpNYXRoLlBJKSpNYXRoLmV4cCg2Ki1hKX19LG0uZWFjaChbW1wiZWFzZVwiLFsuMjUsLjEsLjI1LDFdXSxbXCJlYXNlLWluXCIsWy40MiwwLDEsMV1dLFtcImVhc2Utb3V0XCIsWzAsMCwuNTgsMV1dLFtcImVhc2UtaW4tb3V0XCIsWy40MiwwLC41OCwxXV0sW1wiZWFzZUluU2luZVwiLFsuNDcsMCwuNzQ1LC43MTVdXSxbXCJlYXNlT3V0U2luZVwiLFsuMzksLjU3NSwuNTY1LDFdXSxbXCJlYXNlSW5PdXRTaW5lXCIsWy40NDUsLjA1LC41NSwuOTVdXSxbXCJlYXNlSW5RdWFkXCIsWy41NSwuMDg1LC42OCwuNTNdXSxbXCJlYXNlT3V0UXVhZFwiLFsuMjUsLjQ2LC40NSwuOTRdXSxbXCJlYXNlSW5PdXRRdWFkXCIsWy40NTUsLjAzLC41MTUsLjk1NV1dLFtcImVhc2VJbkN1YmljXCIsWy41NSwuMDU1LC42NzUsLjE5XV0sW1wiZWFzZU91dEN1YmljXCIsWy4yMTUsLjYxLC4zNTUsMV1dLFtcImVhc2VJbk91dEN1YmljXCIsWy42NDUsLjA0NSwuMzU1LDFdXSxbXCJlYXNlSW5RdWFydFwiLFsuODk1LC4wMywuNjg1LC4yMl1dLFtcImVhc2VPdXRRdWFydFwiLFsuMTY1LC44NCwuNDQsMV1dLFtcImVhc2VJbk91dFF1YXJ0XCIsWy43NywwLC4xNzUsMV1dLFtcImVhc2VJblF1aW50XCIsWy43NTUsLjA1LC44NTUsLjA2XV0sW1wiZWFzZU91dFF1aW50XCIsWy4yMywxLC4zMiwxXV0sW1wiZWFzZUluT3V0UXVpbnRcIixbLjg2LDAsLjA3LDFdXSxbXCJlYXNlSW5FeHBvXCIsWy45NSwuMDUsLjc5NSwuMDM1XV0sW1wiZWFzZU91dEV4cG9cIixbLjE5LDEsLjIyLDFdXSxbXCJlYXNlSW5PdXRFeHBvXCIsWzEsMCwwLDFdXSxbXCJlYXNlSW5DaXJjXCIsWy42LC4wNCwuOTgsLjMzNV1dLFtcImVhc2VPdXRDaXJjXCIsWy4wNzUsLjgyLC4xNjUsMV1dLFtcImVhc2VJbk91dENpcmNcIixbLjc4NSwuMTM1LC4xNSwuODZdXV0sZnVuY3Rpb24oYSxiKXt0LkVhc2luZ3NbYlswXV09aS5hcHBseShudWxsLGJbMV0pfSk7dmFyIHY9dC5DU1M9e1JlZ0V4Ontpc0hleDovXiMoW0EtZlxcZF17M30pezEsMn0kL2ksdmFsdWVVbndyYXA6L15bQS16XStcXCgoLiopXFwpJC9pLHdyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQ6L1swLTkuXSsgWzAtOS5dKyBbMC05Ll0rKCBbMC05Ll0rKT8vLHZhbHVlU3BsaXQ6LyhbQS16XStcXCguK1xcKSl8KChbQS16MC05Iy0uXSs/KSg/PVxcc3wkKSkvZ2l9LExpc3RzOntjb2xvcnM6W1wiZmlsbFwiLFwic3Ryb2tlXCIsXCJzdG9wQ29sb3JcIixcImNvbG9yXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIixcImJvcmRlckNvbG9yXCIsXCJib3JkZXJUb3BDb2xvclwiLFwiYm9yZGVyUmlnaHRDb2xvclwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIixcImJvcmRlckxlZnRDb2xvclwiLFwib3V0bGluZUNvbG9yXCJdLHRyYW5zZm9ybXNCYXNlOltcInRyYW5zbGF0ZVhcIixcInRyYW5zbGF0ZVlcIixcInNjYWxlXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2tld1hcIixcInNrZXdZXCIsXCJyb3RhdGVaXCJdLHRyYW5zZm9ybXMzRDpbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLFwidHJhbnNsYXRlWlwiLFwic2NhbGVaXCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCJdfSxIb29rczp7dGVtcGxhdGVzOnt0ZXh0U2hhZG93OltcIkNvbG9yIFggWSBCbHVyXCIsXCJibGFjayAwcHggMHB4IDBweFwiXSxib3hTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXIgU3ByZWFkXCIsXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sY2xpcDpbXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIixcIjBweCAwcHggMHB4IDBweFwiXSxiYWNrZ3JvdW5kUG9zaXRpb246W1wiWCBZXCIsXCIwJSAwJVwiXSx0cmFuc2Zvcm1PcmlnaW46W1wiWCBZIFpcIixcIjUwJSA1MCUgMHB4XCJdLHBlcnNwZWN0aXZlT3JpZ2luOltcIlggWVwiLFwiNTAlIDUwJVwiXX0scmVnaXN0ZXJlZDp7fSxyZWdpc3RlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8di5MaXN0cy5jb2xvcnMubGVuZ3RoO2ErKyl7dmFyIGI9XCJjb2xvclwiPT09di5MaXN0cy5jb2xvcnNbYV0/XCIwIDAgMCAxXCI6XCIyNTUgMjU1IDI1NSAxXCI7di5Ib29rcy50ZW1wbGF0ZXNbdi5MaXN0cy5jb2xvcnNbYV1dPVtcIlJlZCBHcmVlbiBCbHVlIEFscGhhXCIsYl19dmFyIGMsZCxlO2lmKG4pZm9yKGMgaW4gdi5Ib29rcy50ZW1wbGF0ZXMpe2Q9di5Ib29rcy50ZW1wbGF0ZXNbY10sZT1kWzBdLnNwbGl0KFwiIFwiKTt2YXIgZj1kWzFdLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdCk7XCJDb2xvclwiPT09ZVswXSYmKGUucHVzaChlLnNoaWZ0KCkpLGYucHVzaChmLnNoaWZ0KCkpLHYuSG9va3MudGVtcGxhdGVzW2NdPVtlLmpvaW4oXCIgXCIpLGYuam9pbihcIiBcIildKX1mb3IoYyBpbiB2Lkhvb2tzLnRlbXBsYXRlcyl7ZD12Lkhvb2tzLnRlbXBsYXRlc1tjXSxlPWRbMF0uc3BsaXQoXCIgXCIpO2Zvcih2YXIgYSBpbiBlKXt2YXIgZz1jK2VbYV0saD1hO3YuSG9va3MucmVnaXN0ZXJlZFtnXT1bYyxoXX19fSxnZXRSb290OmZ1bmN0aW9uKGEpe3ZhciBiPXYuSG9va3MucmVnaXN0ZXJlZFthXTtyZXR1cm4gYj9iWzBdOmF9LGNsZWFuUm9vdFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdi5SZWdFeC52YWx1ZVVud3JhcC50ZXN0KGIpJiYoYj1iLm1hdGNoKHYuUmVnRXgudmFsdWVVbndyYXApWzFdKSx2LlZhbHVlcy5pc0NTU051bGxWYWx1ZShiKSYmKGI9di5Ib29rcy50ZW1wbGF0ZXNbYV1bMV0pLGJ9LGV4dHJhY3RWYWx1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPXYuSG9va3MucmVnaXN0ZXJlZFthXTtpZihjKXt2YXIgZD1jWzBdLGU9Y1sxXTtyZXR1cm4gYj12Lkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoZCxiKSxiLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVNwbGl0KVtlXX1yZXR1cm4gYn0saW5qZWN0VmFsdWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXYuSG9va3MucmVnaXN0ZXJlZFthXTtpZihkKXt2YXIgZSxmLGc9ZFswXSxoPWRbMV07cmV0dXJuIGM9di5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGcsYyksZT1jLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVNwbGl0KSxlW2hdPWIsZj1lLmpvaW4oXCIgXCIpfXJldHVybiBjfX0sTm9ybWFsaXphdGlvbnM6e3JlZ2lzdGVyZWQ6e2NsaXA6ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJjbGlwXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkO3JldHVybiB2LlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChjKT9kPWM6KGQ9Yy50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVVbndyYXApLGQ9ZD9kWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpOmMpLGQ7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuXCJyZWN0KFwiK2MrXCIpXCJ9fSxibHVyOmZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVybiB0LlN0YXRlLmlzRmlyZWZveD9cImZpbHRlclwiOlwiLXdlYmtpdC1maWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGQ9cGFyc2VGbG9hdChjKTtpZighZCYmMCE9PWQpe3ZhciBlPWMudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO2Q9ZT9lWzFdOjB9cmV0dXJuIGQ7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHBhcnNlRmxvYXQoYyk/XCJibHVyKFwiK2MrXCIpXCI6XCJub25lXCJ9fSxvcGFjaXR5OmZ1bmN0aW9uKGEsYixjKXtpZig4Pj1uKXN3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJmaWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGQ9Yy50b1N0cmluZygpLm1hdGNoKC9hbHBoYVxcKG9wYWNpdHk9KC4qKVxcKS9pKTtyZXR1cm4gYz1kP2RbMV0vMTAwOjE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIGIuc3R5bGUuem9vbT0xLHBhcnNlRmxvYXQoYyk+PTE/XCJcIjpcImFscGhhKG9wYWNpdHk9XCIrcGFyc2VJbnQoMTAwKnBhcnNlRmxvYXQoYyksMTApK1wiKVwifWVsc2Ugc3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cIm9wYWNpdHlcIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIGM7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIGN9fX0scmVnaXN0ZXI6ZnVuY3Rpb24oKXs5Pj1ufHx0LlN0YXRlLmlzR2luZ2VyYnJlYWR8fCh2Lkxpc3RzLnRyYW5zZm9ybXNCYXNlPXYuTGlzdHMudHJhbnNmb3Jtc0Jhc2UuY29uY2F0KHYuTGlzdHMudHJhbnNmb3JtczNEKSk7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLnRyYW5zZm9ybXNCYXNlLmxlbmd0aDthKyspIWZ1bmN0aW9uKCl7dmFyIGI9di5MaXN0cy50cmFuc2Zvcm1zQmFzZVthXTt2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbYl09ZnVuY3Rpb24oYSxjLGUpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJ0cmFuc2Zvcm1cIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIGcoYyk9PT1kfHxnKGMpLnRyYW5zZm9ybUNhY2hlW2JdPT09ZD8vXnNjYWxlL2kudGVzdChiKT8xOjA6ZyhjKS50cmFuc2Zvcm1DYWNoZVtiXS5yZXBsYWNlKC9bKCldL2csXCJcIik7Y2FzZVwiaW5qZWN0XCI6dmFyIGY9ITE7c3dpdGNoKGIuc3Vic3RyKDAsYi5sZW5ndGgtMSkpe2Nhc2VcInRyYW5zbGF0ZVwiOmY9IS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KGUpO2JyZWFrO2Nhc2VcInNjYWxcIjpjYXNlXCJzY2FsZVwiOnQuU3RhdGUuaXNBbmRyb2lkJiZnKGMpLnRyYW5zZm9ybUNhY2hlW2JdPT09ZCYmMT5lJiYoZT0xKSxmPSEvKFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJza2V3XCI6Zj0hLyhkZWd8XFxkKSQvaS50ZXN0KGUpO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOmY9IS8oZGVnfFxcZCkkL2kudGVzdChlKX1yZXR1cm4gZnx8KGcoYykudHJhbnNmb3JtQ2FjaGVbYl09XCIoXCIrZStcIilcIiksZyhjKS50cmFuc2Zvcm1DYWNoZVtiXX19fSgpO2Zvcih2YXIgYT0wO2E8di5MaXN0cy5jb2xvcnMubGVuZ3RoO2ErKykhZnVuY3Rpb24oKXt2YXIgYj12Lkxpc3RzLmNvbG9yc1thXTt2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbYl09ZnVuY3Rpb24oYSxjLGUpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuIGI7Y2FzZVwiZXh0cmFjdFwiOnZhciBmO2lmKHYuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KGUpKWY9ZTtlbHNle3ZhciBnLGg9e2JsYWNrOlwicmdiKDAsIDAsIDApXCIsYmx1ZTpcInJnYigwLCAwLCAyNTUpXCIsZ3JheTpcInJnYigxMjgsIDEyOCwgMTI4KVwiLGdyZWVuOlwicmdiKDAsIDEyOCwgMClcIixyZWQ6XCJyZ2IoMjU1LCAwLCAwKVwiLHdoaXRlOlwicmdiKDI1NSwgMjU1LCAyNTUpXCJ9Oy9eW0Etel0rJC9pLnRlc3QoZSk/Zz1oW2VdIT09ZD9oW2VdOmguYmxhY2s6di5SZWdFeC5pc0hleC50ZXN0KGUpP2c9XCJyZ2IoXCIrdi5WYWx1ZXMuaGV4VG9SZ2IoZSkuam9pbihcIiBcIikrXCIpXCI6L15yZ2JhP1xcKC9pLnRlc3QoZSl8fChnPWguYmxhY2spLGY9KGd8fGUpLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcClbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIil9cmV0dXJuIDg+PW58fDMhPT1mLnNwbGl0KFwiIFwiKS5sZW5ndGh8fChmKz1cIiAxXCIpLGY7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIDg+PW4/ND09PWUuc3BsaXQoXCIgXCIpLmxlbmd0aCYmKGU9ZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsMykuam9pbihcIiBcIikpOjM9PT1lLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihlKz1cIiAxXCIpLCg4Pj1uP1wicmdiXCI6XCJyZ2JhXCIpK1wiKFwiK2UucmVwbGFjZSgvXFxzKy9nLFwiLFwiKS5yZXBsYWNlKC9cXC4oXFxkKSsoPz0sKS9nLFwiXCIpK1wiKVwifX19KCl9fSxOYW1lczp7Y2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0pfSxTVkdBdHRyaWJ1dGU6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ3aWR0aHxoZWlnaHR8eHx5fGN4fGN5fHJ8cnh8cnl8eDF8eDJ8eTF8eTJcIjtyZXR1cm4obnx8dC5TdGF0ZS5pc0FuZHJvaWQmJiF0LlN0YXRlLmlzQ2hyb21lKSYmKGIrPVwifHRyYW5zZm9ybVwiKSxuZXcgUmVnRXhwKFwiXihcIitiK1wiKSRcIixcImlcIikudGVzdChhKX0scHJlZml4Q2hlY2s6ZnVuY3Rpb24oYSl7aWYodC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdKXJldHVyblt0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV0sITBdO2Zvcih2YXIgYj1bXCJcIixcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiLFwiT1wiXSxjPTAsZD1iLmxlbmd0aDtkPmM7YysrKXt2YXIgZTtpZihlPTA9PT1jP2E6YltjXSthLnJlcGxhY2UoL15cXHcvLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRvVXBwZXJDYXNlKCl9KSxwLmlzU3RyaW5nKHQuU3RhdGUucHJlZml4RWxlbWVudC5zdHlsZVtlXSkpcmV0dXJuIHQuU3RhdGUucHJlZml4TWF0Y2hlc1thXT1lLFtlLCEwXX1yZXR1cm5bYSwhMV19fSxWYWx1ZXM6e2hleFRvUmdiOmZ1bmN0aW9uKGEpe3ZhciBiLGM9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxkPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2k7cmV0dXJuIGE9YS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGIrYitjK2MrZCtkfSksYj1kLmV4ZWMoYSksYj9bcGFyc2VJbnQoYlsxXSwxNikscGFyc2VJbnQoYlsyXSwxNikscGFyc2VJbnQoYlszXSwxNildOlswLDAsMF19LGlzQ1NTTnVsbFZhbHVlOmZ1bmN0aW9uKGEpe3JldHVybiAwPT1hfHwvXihub25lfGF1dG98dHJhbnNwYXJlbnR8KHJnYmFcXCgwLCA/MCwgPzAsID8wXFwpKSkkL2kudGVzdChhKX0sZ2V0VW5pdFR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuL14ocm90YXRlfHNrZXcpL2kudGVzdChhKT9cImRlZ1wiOi8oXihzY2FsZXxzY2FsZVh8c2NhbGVZfHNjYWxlWnxhbHBoYXxmbGV4R3Jvd3xmbGV4SGVpZ2h0fHpJbmRleHxmb250V2VpZ2h0KSQpfCgob3BhY2l0eXxyZWR8Z3JlZW58Ymx1ZXxhbHBoYSkkKS9pLnRlc3QoYSk/XCJcIjpcInB4XCJ9LGdldERpc3BsYXlUeXBlOmZ1bmN0aW9uKGEpe3ZhciBiPWEmJmEudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7cmV0dXJuL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KGIpP1wiaW5saW5lXCI6L14obGkpJC9pLnRlc3QoYik/XCJsaXN0LWl0ZW1cIjovXih0cikkL2kudGVzdChiKT9cInRhYmxlLXJvd1wiOi9eKHRhYmxlKSQvaS50ZXN0KGIpP1widGFibGVcIjovXih0Ym9keSkkL2kudGVzdChiKT9cInRhYmxlLXJvdy1ncm91cFwiOlwiYmxvY2tcIn0sYWRkQ2xhc3M6ZnVuY3Rpb24oYSxiKXthLmNsYXNzTGlzdD9hLmNsYXNzTGlzdC5hZGQoYik6YS5jbGFzc05hbWUrPShhLmNsYXNzTmFtZS5sZW5ndGg/XCIgXCI6XCJcIikrYn0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxiKXthLmNsYXNzTGlzdD9hLmNsYXNzTGlzdC5yZW1vdmUoYik6YS5jbGFzc05hbWU9YS5jbGFzc05hbWUudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIitiLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcc3wkKVwiLFwiZ2lcIiksXCIgXCIpfX0sZ2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihhLGMsZSxmKXtmdW5jdGlvbiBoKGEsYyl7ZnVuY3Rpb24gZSgpe2omJnYuc2V0UHJvcGVydHlWYWx1ZShhLFwiZGlzcGxheVwiLFwibm9uZVwiKX12YXIgaT0wO2lmKDg+PW4paT1tLmNzcyhhLGMpO2Vsc2V7dmFyIGo9ITE7aWYoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QoYykmJjA9PT12LmdldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIikmJihqPSEwLHYuc2V0UHJvcGVydHlWYWx1ZShhLFwiZGlzcGxheVwiLHYuVmFsdWVzLmdldERpc3BsYXlUeXBlKGEpKSksIWYpe2lmKFwiaGVpZ2h0XCI9PT1jJiZcImJvcmRlci1ib3hcIiE9PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGs9YS5vZmZzZXRIZWlnaHQtKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJUb3BXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyQm90dG9tV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdUb3BcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdCb3R0b21cIikpfHwwKTtyZXR1cm4gZSgpLGt9aWYoXCJ3aWR0aFwiPT09YyYmXCJib3JkZXItYm94XCIhPT12LmdldFByb3BlcnR5VmFsdWUoYSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBsPWEub2Zmc2V0V2lkdGgtKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJMZWZ0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlclJpZ2h0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdMZWZ0XCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nUmlnaHRcIikpfHwwKTtyZXR1cm4gZSgpLGx9fXZhciBvO289ZyhhKT09PWQ/Yi5nZXRDb21wdXRlZFN0eWxlKGEsbnVsbCk6ZyhhKS5jb21wdXRlZFN0eWxlP2coYSkuY29tcHV0ZWRTdHlsZTpnKGEpLmNvbXB1dGVkU3R5bGU9Yi5nZXRDb21wdXRlZFN0eWxlKGEsbnVsbCksXCJib3JkZXJDb2xvclwiPT09YyYmKGM9XCJib3JkZXJUb3BDb2xvclwiKSxpPTk9PT1uJiZcImZpbHRlclwiPT09Yz9vLmdldFByb3BlcnR5VmFsdWUoYyk6b1tjXSwoXCJcIj09PWl8fG51bGw9PT1pKSYmKGk9YS5zdHlsZVtjXSksZSgpfWlmKFwiYXV0b1wiPT09aSYmL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvaS50ZXN0KGMpKXt2YXIgcD1oKGEsXCJwb3NpdGlvblwiKTsoXCJmaXhlZFwiPT09cHx8XCJhYnNvbHV0ZVwiPT09cCYmL3RvcHxsZWZ0L2kudGVzdChjKSkmJihpPW0oYSkucG9zaXRpb24oKVtjXStcInB4XCIpfXJldHVybiBpfXZhciBpO2lmKHYuSG9va3MucmVnaXN0ZXJlZFtjXSl7dmFyIGo9YyxrPXYuSG9va3MuZ2V0Um9vdChqKTtlPT09ZCYmKGU9di5nZXRQcm9wZXJ0eVZhbHVlKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhrKVswXSkpLHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtrXSYmKGU9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2tdKFwiZXh0cmFjdFwiLGEsZSkpLGk9di5Ib29rcy5leHRyYWN0VmFsdWUoaixlKX1lbHNlIGlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSl7dmFyIGwsbztsPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSxcInRyYW5zZm9ybVwiIT09bCYmKG89aChhLHYuTmFtZXMucHJlZml4Q2hlY2sobClbMF0pLHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKG8pJiZ2Lkhvb2tzLnRlbXBsYXRlc1tjXSYmKG89di5Ib29rcy50ZW1wbGF0ZXNbY11bMV0pKSxpPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIixhLG8pfWlmKCEvXltcXGQtXS8udGVzdChpKSlpZihnKGEpJiZnKGEpLmlzU1ZHJiZ2Lk5hbWVzLlNWR0F0dHJpYnV0ZShjKSlpZigvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QoYykpdHJ5e2k9YS5nZXRCQm94KClbY119Y2F0Y2gocCl7aT0wfWVsc2UgaT1hLmdldEF0dHJpYnV0ZShjKTtlbHNlIGk9aChhLHYuTmFtZXMucHJlZml4Q2hlY2soYylbMF0pO3JldHVybiB2LlZhbHVlcy5pc0NTU051bGxWYWx1ZShpKSYmKGk9MCksdC5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJHZXQgXCIrYytcIjogXCIraSksaX0sc2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihhLGMsZCxlLGYpe3ZhciBoPWM7aWYoXCJzY3JvbGxcIj09PWMpZi5jb250YWluZXI/Zi5jb250YWluZXJbXCJzY3JvbGxcIitmLmRpcmVjdGlvbl09ZDpcIkxlZnRcIj09PWYuZGlyZWN0aW9uP2Iuc2Nyb2xsVG8oZCxmLmFsdGVybmF0ZVZhbHVlKTpiLnNjcm9sbFRvKGYuYWx0ZXJuYXRlVmFsdWUsZCk7ZWxzZSBpZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJlwidHJhbnNmb3JtXCI9PT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSkpdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiaW5qZWN0XCIsYSxkKSxoPVwidHJhbnNmb3JtXCIsZD1nKGEpLnRyYW5zZm9ybUNhY2hlW2NdO2Vsc2V7aWYodi5Ib29rcy5yZWdpc3RlcmVkW2NdKXt2YXIgaT1jLGo9di5Ib29rcy5nZXRSb290KGMpO2U9ZXx8di5nZXRQcm9wZXJ0eVZhbHVlKGEsaiksZD12Lkhvb2tzLmluamVjdFZhbHVlKGksZCxlKSxjPWp9aWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdJiYoZD12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJpbmplY3RcIixhLGQpLGM9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpKSxoPXYuTmFtZXMucHJlZml4Q2hlY2soYylbMF0sOD49bil0cnl7YS5zdHlsZVtoXT1kfWNhdGNoKGspe3QuZGVidWcmJmNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFtcIitkK1wiXSBmb3IgW1wiK2grXCJdXCIpfWVsc2UgZyhhKSYmZyhhKS5pc1NWRyYmdi5OYW1lcy5TVkdBdHRyaWJ1dGUoYyk/YS5zZXRBdHRyaWJ1dGUoYyxkKTphLnN0eWxlW2hdPWQ7dC5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJTZXQgXCIrYytcIiAoXCIraCtcIik6IFwiK2QpfXJldHVybltoLGRdfSxmbHVzaFRyYW5zZm9ybUNhY2hlOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsYikpfXZhciBjPVwiXCI7aWYoKG58fHQuU3RhdGUuaXNBbmRyb2lkJiYhdC5TdGF0ZS5pc0Nocm9tZSkmJmcoYSkuaXNTVkcpe3ZhciBkPXt0cmFuc2xhdGU6W2IoXCJ0cmFuc2xhdGVYXCIpLGIoXCJ0cmFuc2xhdGVZXCIpXSxza2V3WDpbYihcInNrZXdYXCIpXSxza2V3WTpbYihcInNrZXdZXCIpXSxzY2FsZToxIT09YihcInNjYWxlXCIpP1tiKFwic2NhbGVcIiksYihcInNjYWxlXCIpXTpbYihcInNjYWxlWFwiKSxiKFwic2NhbGVZXCIpXSxyb3RhdGU6W2IoXCJyb3RhdGVaXCIpLDAsMF19O20uZWFjaChnKGEpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGEpey9edHJhbnNsYXRlL2kudGVzdChhKT9hPVwidHJhbnNsYXRlXCI6L15zY2FsZS9pLnRlc3QoYSk/YT1cInNjYWxlXCI6L15yb3RhdGUvaS50ZXN0KGEpJiYoYT1cInJvdGF0ZVwiKSxkW2FdJiYoYys9YStcIihcIitkW2FdLmpvaW4oXCIgXCIpK1wiKSBcIixkZWxldGUgZFthXSl9KX1lbHNle3ZhciBlLGY7bS5lYWNoKGcoYSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24oYil7cmV0dXJuIGU9ZyhhKS50cmFuc2Zvcm1DYWNoZVtiXSxcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCI9PT1iPyhmPWUsITApOig5PT09biYmXCJyb3RhdGVaXCI9PT1iJiYoYj1cInJvdGF0ZVwiKSx2b2lkKGMrPWIrZStcIiBcIikpfSksZiYmKGM9XCJwZXJzcGVjdGl2ZVwiK2YrXCIgXCIrYyl9di5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJ0cmFuc2Zvcm1cIixjKX19O3YuSG9va3MucmVnaXN0ZXIoKSx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyKCksdC5ob29rPWZ1bmN0aW9uKGEsYixjKXt2YXIgZT1kO3JldHVybiBhPWYoYSksbS5lYWNoKGEsZnVuY3Rpb24oYSxmKXtpZihnKGYpPT09ZCYmdC5pbml0KGYpLGM9PT1kKWU9PT1kJiYoZT10LkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGYsYikpO2Vsc2V7dmFyIGg9dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShmLGIsYyk7XCJ0cmFuc2Zvcm1cIj09PWhbMF0mJnQuQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoZiksZT1ofX0pLGV9O3ZhciB3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBoP0IucHJvbWlzZXx8bnVsbDppfWZ1bmN0aW9uIGUoKXtmdW5jdGlvbiBhKGEpe2Z1bmN0aW9uIGwoYSxiKXt2YXIgYz1kLGU9ZCxnPWQ7cmV0dXJuIHAuaXNBcnJheShhKT8oYz1hWzBdLCFwLmlzQXJyYXkoYVsxXSkmJi9eW1xcZC1dLy50ZXN0KGFbMV0pfHxwLmlzRnVuY3Rpb24oYVsxXSl8fHYuUmVnRXguaXNIZXgudGVzdChhWzFdKT9nPWFbMV06KHAuaXNTdHJpbmcoYVsxXSkmJiF2LlJlZ0V4LmlzSGV4LnRlc3QoYVsxXSl8fHAuaXNBcnJheShhWzFdKSkmJihlPWI/YVsxXTpqKGFbMV0saC5kdXJhdGlvbiksYVsyXSE9PWQmJihnPWFbMl0pKSk6Yz1hLGJ8fChlPWV8fGguZWFzaW5nKSxwLmlzRnVuY3Rpb24oYykmJihjPWMuY2FsbChmLHkseCkpLHAuaXNGdW5jdGlvbihnKSYmKGc9Zy5jYWxsKGYseSx4KSksW2N8fDAsZSxnXX1mdW5jdGlvbiBuKGEsYil7dmFyIGMsZDtyZXR1cm4gZD0oYnx8XCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sZnVuY3Rpb24oYSl7cmV0dXJuIGM9YSxcIlwifSksY3x8KGM9di5WYWx1ZXMuZ2V0VW5pdFR5cGUoYSkpLFtkLGNdfWZ1bmN0aW9uIHIoKXt2YXIgYT17bXlQYXJlbnQ6Zi5wYXJlbnROb2RlfHxjLmJvZHkscG9zaXRpb246di5nZXRQcm9wZXJ0eVZhbHVlKGYsXCJwb3NpdGlvblwiKSxmb250U2l6ZTp2LmdldFByb3BlcnR5VmFsdWUoZixcImZvbnRTaXplXCIpfSxkPWEucG9zaXRpb249PT1JLmxhc3RQb3NpdGlvbiYmYS5teVBhcmVudD09PUkubGFzdFBhcmVudCxlPWEuZm9udFNpemU9PT1JLmxhc3RGb250U2l6ZTtJLmxhc3RQYXJlbnQ9YS5teVBhcmVudCxJLmxhc3RQb3NpdGlvbj1hLnBvc2l0aW9uLEkubGFzdEZvbnRTaXplPWEuZm9udFNpemU7dmFyIGg9MTAwLGk9e307aWYoZSYmZClpLmVtVG9QeD1JLmxhc3RFbVRvUHgsaS5wZXJjZW50VG9QeFdpZHRoPUkubGFzdFBlcmNlbnRUb1B4V2lkdGgsaS5wZXJjZW50VG9QeEhlaWdodD1JLmxhc3RQZXJjZW50VG9QeEhlaWdodDtlbHNle3ZhciBqPWcoZikuaXNTVkc/Yy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicmVjdFwiKTpjLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5pbml0KGopLGEubXlQYXJlbnQuYXBwZW5kQ2hpbGQoaiksbS5lYWNoKFtcIm92ZXJmbG93XCIsXCJvdmVyZmxvd1hcIixcIm92ZXJmbG93WVwiXSxmdW5jdGlvbihhLGIpe3QuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixiLFwiaGlkZGVuXCIpfSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwicG9zaXRpb25cIixhLnBvc2l0aW9uKSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJmb250U2l6ZVwiLGEuZm9udFNpemUpLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcImJveFNpemluZ1wiLFwiY29udGVudC1ib3hcIiksbS5lYWNoKFtcIm1pbldpZHRoXCIsXCJtYXhXaWR0aFwiLFwid2lkdGhcIixcIm1pbkhlaWdodFwiLFwibWF4SGVpZ2h0XCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oYSxiKXt0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosYixoK1wiJVwiKX0pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcInBhZGRpbmdMZWZ0XCIsaCtcImVtXCIpLGkucGVyY2VudFRvUHhXaWR0aD1JLmxhc3RQZXJjZW50VG9QeFdpZHRoPShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwid2lkdGhcIixudWxsLCEwKSl8fDEpL2gsaS5wZXJjZW50VG9QeEhlaWdodD1JLmxhc3RQZXJjZW50VG9QeEhlaWdodD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcImhlaWdodFwiLG51bGwsITApKXx8MSkvaCxpLmVtVG9QeD1JLmxhc3RFbVRvUHg9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJwYWRkaW5nTGVmdFwiKSl8fDEpL2gsYS5teVBhcmVudC5yZW1vdmVDaGlsZChqKX1yZXR1cm4gbnVsbD09PUkucmVtVG9QeCYmKEkucmVtVG9QeD1wYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShjLmJvZHksXCJmb250U2l6ZVwiKSl8fDE2KSxudWxsPT09SS52d1RvUHgmJihJLnZ3VG9QeD1wYXJzZUZsb2F0KGIuaW5uZXJXaWR0aCkvMTAwLEkudmhUb1B4PXBhcnNlRmxvYXQoYi5pbm5lckhlaWdodCkvMTAwKSxpLnJlbVRvUHg9SS5yZW1Ub1B4LGkudndUb1B4PUkudndUb1B4LGkudmhUb1B4PUkudmhUb1B4LHQuZGVidWc+PTEmJmNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiK0pTT04uc3RyaW5naWZ5KGkpLGYpLGl9aWYoaC5iZWdpbiYmMD09PXkpdHJ5e2guYmVnaW4uY2FsbChvLG8pfWNhdGNoKHUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB1fSwxKX1pZihcInNjcm9sbFwiPT09Qyl7dmFyIHcseixBLEQ9L154JC9pLnRlc3QoaC5heGlzKT9cIkxlZnRcIjpcIlRvcFwiLEU9cGFyc2VGbG9hdChoLm9mZnNldCl8fDA7aC5jb250YWluZXI/cC5pc1dyYXBwZWQoaC5jb250YWluZXIpfHxwLmlzTm9kZShoLmNvbnRhaW5lcik/KGguY29udGFpbmVyPWguY29udGFpbmVyWzBdfHxoLmNvbnRhaW5lcix3PWguY29udGFpbmVyW1wic2Nyb2xsXCIrRF0sQT13K20oZikucG9zaXRpb24oKVtELnRvTG93ZXJDYXNlKCldK0UpOmguY29udGFpbmVyPW51bGw6KHc9dC5TdGF0ZS5zY3JvbGxBbmNob3JbdC5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrRF1dLHo9dC5TdGF0ZS5zY3JvbGxBbmNob3JbdC5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrKFwiTGVmdFwiPT09RD9cIlRvcFwiOlwiTGVmdFwiKV1dLEE9bShmKS5vZmZzZXQoKVtELnRvTG93ZXJDYXNlKCldK0UpLGk9e3Njcm9sbDp7cm9vdFByb3BlcnR5VmFsdWU6ITEsc3RhcnRWYWx1ZTp3LGN1cnJlbnRWYWx1ZTp3LGVuZFZhbHVlOkEsdW5pdFR5cGU6XCJcIixlYXNpbmc6aC5lYXNpbmcsc2Nyb2xsRGF0YTp7Y29udGFpbmVyOmguY29udGFpbmVyLGRpcmVjdGlvbjpELGFsdGVybmF0ZVZhbHVlOnp9fSxlbGVtZW50OmZ9LHQuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIixpLnNjcm9sbCxmKX1lbHNlIGlmKFwicmV2ZXJzZVwiPT09Qyl7aWYoIWcoZikudHdlZW5zQ29udGFpbmVyKXJldHVybiB2b2lkIG0uZGVxdWV1ZShmLGgucXVldWUpO1wibm9uZVwiPT09ZyhmKS5vcHRzLmRpc3BsYXkmJihnKGYpLm9wdHMuZGlzcGxheT1cImF1dG9cIiksXCJoaWRkZW5cIj09PWcoZikub3B0cy52aXNpYmlsaXR5JiYoZyhmKS5vcHRzLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIpLGcoZikub3B0cy5sb29wPSExLGcoZikub3B0cy5iZWdpbj1udWxsLGcoZikub3B0cy5jb21wbGV0ZT1udWxsLHMuZWFzaW5nfHxkZWxldGUgaC5lYXNpbmcscy5kdXJhdGlvbnx8ZGVsZXRlIGguZHVyYXRpb24saD1tLmV4dGVuZCh7fSxnKGYpLm9wdHMsaCk7dmFyIEY9bS5leHRlbmQoITAse30sZyhmKS50d2VlbnNDb250YWluZXIpO2Zvcih2YXIgRyBpbiBGKWlmKFwiZWxlbWVudFwiIT09Ryl7dmFyIEg9RltHXS5zdGFydFZhbHVlO0ZbR10uc3RhcnRWYWx1ZT1GW0ddLmN1cnJlbnRWYWx1ZT1GW0ddLmVuZFZhbHVlLEZbR10uZW5kVmFsdWU9SCxwLmlzRW1wdHlPYmplY3Qocyl8fChGW0ddLmVhc2luZz1oLmVhc2luZyksdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIrRytcIik6IFwiK0pTT04uc3RyaW5naWZ5KEZbR10pLGYpfWk9Rn1lbHNlIGlmKFwic3RhcnRcIj09PUMpe3ZhciBGO2coZikudHdlZW5zQ29udGFpbmVyJiZnKGYpLmlzQW5pbWF0aW5nPT09ITAmJihGPWcoZikudHdlZW5zQ29udGFpbmVyKSxtLmVhY2gocSxmdW5jdGlvbihhLGIpe2lmKFJlZ0V4cChcIl5cIit2Lkxpc3RzLmNvbG9ycy5qb2luKFwiJHxeXCIpK1wiJFwiKS50ZXN0KGEpKXt2YXIgYz1sKGIsITApLGU9Y1swXSxmPWNbMV0sZz1jWzJdO2lmKHYuUmVnRXguaXNIZXgudGVzdChlKSl7Zm9yKHZhciBoPVtcIlJlZFwiLFwiR3JlZW5cIixcIkJsdWVcIl0saT12LlZhbHVlcy5oZXhUb1JnYihlKSxqPWc/di5WYWx1ZXMuaGV4VG9SZ2IoZyk6ZCxrPTA7azxoLmxlbmd0aDtrKyspe3ZhciBtPVtpW2tdXTtmJiZtLnB1c2goZiksaiE9PWQmJm0ucHVzaChqW2tdKSxxW2EraFtrXV09bX1kZWxldGUgcVthXX19fSk7Zm9yKHZhciBLIGluIHEpe3ZhciBMPWwocVtLXSksTT1MWzBdLE49TFsxXSxPPUxbMl07Sz12Lk5hbWVzLmNhbWVsQ2FzZShLKTt2YXIgUD12Lkhvb2tzLmdldFJvb3QoSyksUT0hMTtpZihnKGYpLmlzU1ZHfHxcInR3ZWVuXCI9PT1QfHx2Lk5hbWVzLnByZWZpeENoZWNrKFApWzFdIT09ITF8fHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtQXSE9PWQpeyhoLmRpc3BsYXkhPT1kJiZudWxsIT09aC5kaXNwbGF5JiZcIm5vbmVcIiE9PWguZGlzcGxheXx8aC52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWgudmlzaWJpbGl0eSkmJi9vcGFjaXR5fGZpbHRlci8udGVzdChLKSYmIU8mJjAhPT1NJiYoTz0wKSxoLl9jYWNoZVZhbHVlcyYmRiYmRltLXT8oTz09PWQmJihPPUZbS10uZW5kVmFsdWUrRltLXS51bml0VHlwZSksUT1nKGYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbUF0pOnYuSG9va3MucmVnaXN0ZXJlZFtLXT9PPT09ZD8oUT12LmdldFByb3BlcnR5VmFsdWUoZixQKSxPPXYuZ2V0UHJvcGVydHlWYWx1ZShmLEssUSkpOlE9di5Ib29rcy50ZW1wbGF0ZXNbUF1bMV06Tz09PWQmJihPPXYuZ2V0UHJvcGVydHlWYWx1ZShmLEspKTt2YXIgUixTLFQsVT0hMTtpZihSPW4oSyxPKSxPPVJbMF0sVD1SWzFdLFI9bihLLE0pLE09UlswXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLGZ1bmN0aW9uKGEsYil7cmV0dXJuIFU9YixcIlwifSksUz1SWzFdLE89cGFyc2VGbG9hdChPKXx8MCxNPXBhcnNlRmxvYXQoTSl8fDAsXCIlXCI9PT1TJiYoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KEspPyhNLz0xMDAsUz1cImVtXCIpOi9ec2NhbGUvLnRlc3QoSyk/KE0vPTEwMCxTPVwiXCIpOi8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoSykmJihNPU0vMTAwKjI1NSxTPVwiXCIpKSwvW1xcLypdLy50ZXN0KFUpKVM9VDtlbHNlIGlmKFQhPT1TJiYwIT09TylpZigwPT09TSlTPVQ7ZWxzZXtlPWV8fHIoKTt2YXIgVj0vbWFyZ2lufHBhZGRpbmd8bGVmdHxyaWdodHx3aWR0aHx0ZXh0fHdvcmR8bGV0dGVyL2kudGVzdChLKXx8L1gkLy50ZXN0KEspfHxcInhcIj09PUs/XCJ4XCI6XCJ5XCI7XG5zd2l0Y2goVCl7Y2FzZVwiJVwiOk8qPVwieFwiPT09Vj9lLnBlcmNlbnRUb1B4V2lkdGg6ZS5wZXJjZW50VG9QeEhlaWdodDticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6Tyo9ZVtUK1wiVG9QeFwiXX1zd2l0Y2goUyl7Y2FzZVwiJVwiOk8qPTEvKFwieFwiPT09Vj9lLnBlcmNlbnRUb1B4V2lkdGg6ZS5wZXJjZW50VG9QeEhlaWdodCk7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok8qPTEvZVtTK1wiVG9QeFwiXX19c3dpdGNoKFUpe2Nhc2VcIitcIjpNPU8rTTticmVhaztjYXNlXCItXCI6TT1PLU07YnJlYWs7Y2FzZVwiKlwiOk09TypNO2JyZWFrO2Nhc2VcIi9cIjpNPU8vTX1pW0tdPXtyb290UHJvcGVydHlWYWx1ZTpRLHN0YXJ0VmFsdWU6TyxjdXJyZW50VmFsdWU6TyxlbmRWYWx1ZTpNLHVuaXRUeXBlOlMsZWFzaW5nOk59LHQuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChcIitLK1wiKTogXCIrSlNPTi5zdHJpbmdpZnkoaVtLXSksZil9ZWxzZSB0LmRlYnVnJiZjb25zb2xlLmxvZyhcIlNraXBwaW5nIFtcIitQK1wiXSBkdWUgdG8gYSBsYWNrIG9mIGJyb3dzZXIgc3VwcG9ydC5cIil9aS5lbGVtZW50PWZ9aS5lbGVtZW50JiYodi5WYWx1ZXMuYWRkQ2xhc3MoZixcInZlbG9jaXR5LWFuaW1hdGluZ1wiKSxKLnB1c2goaSksXCJcIj09PWgucXVldWUmJihnKGYpLnR3ZWVuc0NvbnRhaW5lcj1pLGcoZikub3B0cz1oKSxnKGYpLmlzQW5pbWF0aW5nPSEwLHk9PT14LTE/KHQuU3RhdGUuY2FsbHMucHVzaChbSixvLGgsbnVsbCxCLnJlc29sdmVyXSksdC5TdGF0ZS5pc1RpY2tpbmc9PT0hMSYmKHQuU3RhdGUuaXNUaWNraW5nPSEwLGsoKSkpOnkrKyl9dmFyIGUsZj10aGlzLGg9bS5leHRlbmQoe30sdC5kZWZhdWx0cyxzKSxpPXt9O3N3aXRjaChnKGYpPT09ZCYmdC5pbml0KGYpLHBhcnNlRmxvYXQoaC5kZWxheSkmJmgucXVldWUhPT0hMSYmbS5xdWV1ZShmLGgucXVldWUsZnVuY3Rpb24oYSl7dC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLGcoZikuZGVsYXlUaW1lcj17c2V0VGltZW91dDpzZXRUaW1lb3V0KGEscGFyc2VGbG9hdChoLmRlbGF5KSksbmV4dDphfX0pLGguZHVyYXRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJmYXN0XCI6aC5kdXJhdGlvbj0yMDA7YnJlYWs7Y2FzZVwibm9ybWFsXCI6aC5kdXJhdGlvbj1yO2JyZWFrO2Nhc2VcInNsb3dcIjpoLmR1cmF0aW9uPTYwMDticmVhaztkZWZhdWx0OmguZHVyYXRpb249cGFyc2VGbG9hdChoLmR1cmF0aW9uKXx8MX10Lm1vY2shPT0hMSYmKHQubW9jaz09PSEwP2guZHVyYXRpb249aC5kZWxheT0xOihoLmR1cmF0aW9uKj1wYXJzZUZsb2F0KHQubW9jayl8fDEsaC5kZWxheSo9cGFyc2VGbG9hdCh0Lm1vY2spfHwxKSksaC5lYXNpbmc9aihoLmVhc2luZyxoLmR1cmF0aW9uKSxoLmJlZ2luJiYhcC5pc0Z1bmN0aW9uKGguYmVnaW4pJiYoaC5iZWdpbj1udWxsKSxoLnByb2dyZXNzJiYhcC5pc0Z1bmN0aW9uKGgucHJvZ3Jlc3MpJiYoaC5wcm9ncmVzcz1udWxsKSxoLmNvbXBsZXRlJiYhcC5pc0Z1bmN0aW9uKGguY29tcGxldGUpJiYoaC5jb21wbGV0ZT1udWxsKSxoLmRpc3BsYXkhPT1kJiZudWxsIT09aC5kaXNwbGF5JiYoaC5kaXNwbGF5PWguZGlzcGxheS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksXCJhdXRvXCI9PT1oLmRpc3BsYXkmJihoLmRpc3BsYXk9dC5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGYpKSksaC52aXNpYmlsaXR5IT09ZCYmbnVsbCE9PWgudmlzaWJpbGl0eSYmKGgudmlzaWJpbGl0eT1oLnZpc2liaWxpdHkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSxoLm1vYmlsZUhBPWgubW9iaWxlSEEmJnQuU3RhdGUuaXNNb2JpbGUmJiF0LlN0YXRlLmlzR2luZ2VyYnJlYWQsaC5xdWV1ZT09PSExP2guZGVsYXk/c2V0VGltZW91dChhLGguZGVsYXkpOmEoKTptLnF1ZXVlKGYsaC5xdWV1ZSxmdW5jdGlvbihiLGMpe3JldHVybiBjPT09ITA/KEIucHJvbWlzZSYmQi5yZXNvbHZlcihvKSwhMCk6KHQudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCx2b2lkIGEoYikpfSksXCJcIiE9PWgucXVldWUmJlwiZnhcIiE9PWgucXVldWV8fFwiaW5wcm9ncmVzc1wiPT09bS5xdWV1ZShmKVswXXx8bS5kZXF1ZXVlKGYpfXZhciBoLGksbixvLHEscyx1PWFyZ3VtZW50c1swXSYmKGFyZ3VtZW50c1swXS5wfHxtLmlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpJiYhYXJndW1lbnRzWzBdLnByb3BlcnRpZXMubmFtZXN8fHAuaXNTdHJpbmcoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpKTtpZihwLmlzV3JhcHBlZCh0aGlzKT8oaD0hMSxuPTAsbz10aGlzLGk9dGhpcyk6KGg9ITAsbj0xLG89dT9hcmd1bWVudHNbMF0uZWxlbWVudHN8fGFyZ3VtZW50c1swXS5lOmFyZ3VtZW50c1swXSksbz1mKG8pKXt1PyhxPWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzfHxhcmd1bWVudHNbMF0ucCxzPWFyZ3VtZW50c1swXS5vcHRpb25zfHxhcmd1bWVudHNbMF0ubyk6KHE9YXJndW1lbnRzW25dLHM9YXJndW1lbnRzW24rMV0pO3ZhciB4PW8ubGVuZ3RoLHk9MDtpZighL14oc3RvcHxmaW5pc2gpJC9pLnRlc3QocSkmJiFtLmlzUGxhaW5PYmplY3Qocykpe3ZhciB6PW4rMTtzPXt9O2Zvcih2YXIgQT16O0E8YXJndW1lbnRzLmxlbmd0aDtBKyspcC5pc0FycmF5KGFyZ3VtZW50c1tBXSl8fCEvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tBXSkmJiEvXlxcZC8udGVzdChhcmd1bWVudHNbQV0pP3AuaXNTdHJpbmcoYXJndW1lbnRzW0FdKXx8cC5pc0FycmF5KGFyZ3VtZW50c1tBXSk/cy5lYXNpbmc9YXJndW1lbnRzW0FdOnAuaXNGdW5jdGlvbihhcmd1bWVudHNbQV0pJiYocy5jb21wbGV0ZT1hcmd1bWVudHNbQV0pOnMuZHVyYXRpb249YXJndW1lbnRzW0FdfXZhciBCPXtwcm9taXNlOm51bGwscmVzb2x2ZXI6bnVsbCxyZWplY3RlcjpudWxsfTtoJiZ0LlByb21pc2UmJihCLnByb21pc2U9bmV3IHQuUHJvbWlzZShmdW5jdGlvbihhLGIpe0IucmVzb2x2ZXI9YSxCLnJlamVjdGVyPWJ9KSk7dmFyIEM7c3dpdGNoKHEpe2Nhc2VcInNjcm9sbFwiOkM9XCJzY3JvbGxcIjticmVhaztjYXNlXCJyZXZlcnNlXCI6Qz1cInJldmVyc2VcIjticmVhaztjYXNlXCJmaW5pc2hcIjpjYXNlXCJzdG9wXCI6bS5lYWNoKG8sZnVuY3Rpb24oYSxiKXtnKGIpJiZnKGIpLmRlbGF5VGltZXImJihjbGVhclRpbWVvdXQoZyhiKS5kZWxheVRpbWVyLnNldFRpbWVvdXQpLGcoYikuZGVsYXlUaW1lci5uZXh0JiZnKGIpLmRlbGF5VGltZXIubmV4dCgpLGRlbGV0ZSBnKGIpLmRlbGF5VGltZXIpfSk7dmFyIEQ9W107cmV0dXJuIG0uZWFjaCh0LlN0YXRlLmNhbGxzLGZ1bmN0aW9uKGEsYil7YiYmbS5lYWNoKGJbMV0sZnVuY3Rpb24oYyxlKXt2YXIgZj1zPT09ZD9cIlwiOnM7cmV0dXJuIGYhPT0hMCYmYlsyXS5xdWV1ZSE9PWYmJihzIT09ZHx8YlsyXS5xdWV1ZSE9PSExKXx8dm9pZCBtLmVhY2gobyxmdW5jdGlvbihjLGQpe2Q9PT1lJiYoKHM9PT0hMHx8cC5pc1N0cmluZyhzKSkmJihtLmVhY2gobS5xdWV1ZShkLHAuaXNTdHJpbmcocyk/czpcIlwiKSxmdW5jdGlvbihhLGIpe3AuaXNGdW5jdGlvbihiKSYmYihudWxsLCEwKX0pLG0ucXVldWUoZCxwLmlzU3RyaW5nKHMpP3M6XCJcIixbXSkpLFwic3RvcFwiPT09cT8oZyhkKSYmZyhkKS50d2VlbnNDb250YWluZXImJmYhPT0hMSYmbS5lYWNoKGcoZCkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGEsYil7Yi5lbmRWYWx1ZT1iLmN1cnJlbnRWYWx1ZX0pLEQucHVzaChhKSk6XCJmaW5pc2hcIj09PXEmJihiWzJdLmR1cmF0aW9uPTEpKX0pfSl9KSxcInN0b3BcIj09PXEmJihtLmVhY2goRCxmdW5jdGlvbihhLGIpe2woYiwhMCl9KSxCLnByb21pc2UmJkIucmVzb2x2ZXIobykpLGEoKTtkZWZhdWx0OmlmKCFtLmlzUGxhaW5PYmplY3QocSl8fHAuaXNFbXB0eU9iamVjdChxKSl7aWYocC5pc1N0cmluZyhxKSYmdC5SZWRpcmVjdHNbcV0pe3ZhciBFPW0uZXh0ZW5kKHt9LHMpLEY9RS5kdXJhdGlvbixHPUUuZGVsYXl8fDA7cmV0dXJuIEUuYmFja3dhcmRzPT09ITAmJihvPW0uZXh0ZW5kKCEwLFtdLG8pLnJldmVyc2UoKSksbS5lYWNoKG8sZnVuY3Rpb24oYSxiKXtwYXJzZUZsb2F0KEUuc3RhZ2dlcik/RS5kZWxheT1HK3BhcnNlRmxvYXQoRS5zdGFnZ2VyKSphOnAuaXNGdW5jdGlvbihFLnN0YWdnZXIpJiYoRS5kZWxheT1HK0Uuc3RhZ2dlci5jYWxsKGIsYSx4KSksRS5kcmFnJiYoRS5kdXJhdGlvbj1wYXJzZUZsb2F0KEYpfHwoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdChxKT8xZTM6ciksRS5kdXJhdGlvbj1NYXRoLm1heChFLmR1cmF0aW9uKihFLmJhY2t3YXJkcz8xLWEveDooYSsxKS94KSwuNzUqRS5kdXJhdGlvbiwyMDApKSx0LlJlZGlyZWN0c1txXS5jYWxsKGIsYixFfHx7fSxhLHgsbyxCLnByb21pc2U/QjpkKX0pLGEoKX12YXIgSD1cIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIrcStcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIEIucHJvbWlzZT9CLnJlamVjdGVyKG5ldyBFcnJvcihIKSk6Y29uc29sZS5sb2coSCksYSgpfUM9XCJzdGFydFwifXZhciBJPXtsYXN0UGFyZW50Om51bGwsbGFzdFBvc2l0aW9uOm51bGwsbGFzdEZvbnRTaXplOm51bGwsbGFzdFBlcmNlbnRUb1B4V2lkdGg6bnVsbCxsYXN0UGVyY2VudFRvUHhIZWlnaHQ6bnVsbCxsYXN0RW1Ub1B4Om51bGwscmVtVG9QeDpudWxsLHZ3VG9QeDpudWxsLHZoVG9QeDpudWxsfSxKPVtdO20uZWFjaChvLGZ1bmN0aW9uKGEsYil7cC5pc05vZGUoYikmJmUuY2FsbChiKX0pO3ZhciBLLEU9bS5leHRlbmQoe30sdC5kZWZhdWx0cyxzKTtpZihFLmxvb3A9cGFyc2VJbnQoRS5sb29wKSxLPTIqRS5sb29wLTEsRS5sb29wKWZvcih2YXIgTD0wO0s+TDtMKyspe3ZhciBNPXtkZWxheTpFLmRlbGF5LHByb2dyZXNzOkUucHJvZ3Jlc3N9O0w9PT1LLTEmJihNLmRpc3BsYXk9RS5kaXNwbGF5LE0udmlzaWJpbGl0eT1FLnZpc2liaWxpdHksTS5jb21wbGV0ZT1FLmNvbXBsZXRlKSx3KG8sXCJyZXZlcnNlXCIsTSl9cmV0dXJuIGEoKX19O3Q9bS5leHRlbmQodyx0KSx0LmFuaW1hdGU9dzt2YXIgeD1iLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8bztyZXR1cm4gdC5TdGF0ZS5pc01vYmlsZXx8Yy5oaWRkZW49PT1kfHxjLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtjLmhpZGRlbj8oeD1mdW5jdGlvbihhKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2EoITApfSwxNil9LGsoKSk6eD1iLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8b30pLGEuVmVsb2NpdHk9dCxhIT09YiYmKGEuZm4udmVsb2NpdHk9dyxhLmZuLnZlbG9jaXR5LmRlZmF1bHRzPXQuZGVmYXVsdHMpLG0uZWFjaChbXCJEb3duXCIsXCJVcFwiXSxmdW5jdGlvbihhLGIpe3QuUmVkaXJlY3RzW1wic2xpZGVcIitiXT1mdW5jdGlvbihhLGMsZSxmLGcsaCl7dmFyIGk9bS5leHRlbmQoe30sYyksaj1pLmJlZ2luLGs9aS5jb21wbGV0ZSxsPXtoZWlnaHQ6XCJcIixtYXJnaW5Ub3A6XCJcIixtYXJnaW5Cb3R0b206XCJcIixwYWRkaW5nVG9wOlwiXCIscGFkZGluZ0JvdHRvbTpcIlwifSxuPXt9O2kuZGlzcGxheT09PWQmJihpLmRpc3BsYXk9XCJEb3duXCI9PT1iP1wiaW5saW5lXCI9PT10LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoYSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCI6XCJub25lXCIpLGkuYmVnaW49ZnVuY3Rpb24oKXtqJiZqLmNhbGwoZyxnKTtmb3IodmFyIGMgaW4gbCl7bltjXT1hLnN0eWxlW2NdO3ZhciBkPXQuQ1NTLmdldFByb3BlcnR5VmFsdWUoYSxjKTtsW2NdPVwiRG93blwiPT09Yj9bZCwwXTpbMCxkXX1uLm92ZXJmbG93PWEuc3R5bGUub3ZlcmZsb3csYS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxpLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciBiIGluIG4pYS5zdHlsZVtiXT1uW2JdO2smJmsuY2FsbChnLGcpLGgmJmgucmVzb2x2ZXIoZyl9LHQoYSxsLGkpfX0pLG0uZWFjaChbXCJJblwiLFwiT3V0XCJdLGZ1bmN0aW9uKGEsYil7dC5SZWRpcmVjdHNbXCJmYWRlXCIrYl09ZnVuY3Rpb24oYSxjLGUsZixnLGgpe3ZhciBpPW0uZXh0ZW5kKHt9LGMpLGo9e29wYWNpdHk6XCJJblwiPT09Yj8xOjB9LGs9aS5jb21wbGV0ZTtpLmNvbXBsZXRlPWUhPT1mLTE/aS5iZWdpbj1udWxsOmZ1bmN0aW9uKCl7ayYmay5jYWxsKGcsZyksaCYmaC5yZXNvbHZlcihnKX0saS5kaXNwbGF5PT09ZCYmKGkuZGlzcGxheT1cIkluXCI9PT1iP1wiYXV0b1wiOlwibm9uZVwiKSx0KHRoaXMsaixpKX19KSx0fSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG98fHdpbmRvdyx3aW5kb3csZG9jdW1lbnQpfSkpLCFmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGEsYixjKXtyZXR1cm4gc2V0VGltZW91dChrKGEsYyksYil9ZnVuY3Rpb24gZihhLGIsYyl7cmV0dXJuISFBcnJheS5pc0FycmF5KGEpJiYoZyhhLGNbYl0sYyksITApfWZ1bmN0aW9uIGcoYSxiLGMpe3ZhciBlO2lmKGEpaWYoYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgaWYoYS5sZW5ndGghPT1kKWZvcihlPTA7ZTxhLmxlbmd0aDspYi5jYWxsKGMsYVtlXSxlLGEpLGUrKztlbHNlIGZvcihlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmYi5jYWxsKGMsYVtlXSxlLGEpfWZ1bmN0aW9uIGgoYSxiLGMpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyhiKSxmPTA7ZjxlLmxlbmd0aDspKCFjfHxjJiZhW2VbZl1dPT09ZCkmJihhW2VbZl1dPWJbZVtmXV0pLGYrKztyZXR1cm4gYX1mdW5jdGlvbiBpKGEsYil7cmV0dXJuIGgoYSxiLCEwKX1mdW5jdGlvbiBqKGEsYixjKXt2YXIgZCxlPWIucHJvdG90eXBlO2Q9YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlKSxkLmNvbnN0cnVjdG9yPWEsZC5fc3VwZXI9ZSxjJiZoKGQsYyl9ZnVuY3Rpb24gayhhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gbChhLGIpe3JldHVybiB0eXBlb2YgYT09a2E/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIG0oYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIG4oYSxiLGMpe2cocihiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG8oYSxiLGMpe2cocihiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIHAoYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHEoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHIoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHMoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiB0KGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIHUoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07cyhlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiB2KGEsYil7Zm9yKHZhciBjLGUsZj1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxnPTA7ZzxpYS5sZW5ndGg7KXtpZihjPWlhW2ddLGU9Yz9jK2Y6YixlIGluIGEpcmV0dXJuIGU7ZysrfXJldHVybiBkfWZ1bmN0aW9uIHcoKXtyZXR1cm4gb2ErK31mdW5jdGlvbiB4KGEpe3ZhciBiPWEub3duZXJEb2N1bWVudDtyZXR1cm4gYi5kZWZhdWx0Vmlld3x8Yi5wYXJlbnRXaW5kb3d9ZnVuY3Rpb24geShhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtsKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiB6KGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIG5ldyhiPWM/YzpyYT9OOnNhP1E6cWE/UzpNKShhLEEpfWZ1bmN0aW9uIEEoYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZ5YSYmMD09PWQtZSxnPWImKEFhfEJhKSYmMD09PWQtZTtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixCKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PUUoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9RShiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPUYoZCk7Yi50aW1lU3RhbXA9bmEoKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPUooaCxpKSxiLmRpc3RhbmNlPUkoaCxpKSxDKGMsYiksYi5vZmZzZXREaXJlY3Rpb249SChiLmRlbHRhWCxiLmRlbHRhWSksYi5zY2FsZT1nP0woZy5wb2ludGVycyxkKToxLGIucm90YXRpb249Zz9LKGcucG9pbnRlcnMsZCk6MCxEKGMsYik7dmFyIGo9YS5lbGVtZW50O3AoYi5zcmNFdmVudC50YXJnZXQsaikmJihqPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1qfWZ1bmN0aW9uIEMoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9OyhiLmV2ZW50VHlwZT09PXlhfHxmLmV2ZW50VHlwZT09PUFhKSYmKGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBEKGEsYil7dmFyIGMsZSxmLGcsaD1hLmxhc3RJbnRlcnZhbHx8YixpPWIudGltZVN0YW1wLWgudGltZVN0YW1wO2lmKGIuZXZlbnRUeXBlIT1CYSYmKGk+eGF8fGgudmVsb2NpdHk9PT1kKSl7dmFyIGo9aC5kZWx0YVgtYi5kZWx0YVgsaz1oLmRlbHRhWS1iLmRlbHRhWSxsPUcoaSxqLGspO2U9bC54LGY9bC55LGM9bWEobC54KT5tYShsLnkpP2wueDpsLnksZz1IKGosayksYS5sYXN0SW50ZXJ2YWw9Yn1lbHNlIGM9aC52ZWxvY2l0eSxlPWgudmVsb2NpdHlYLGY9aC52ZWxvY2l0eVksZz1oLmRpcmVjdGlvbjtiLnZlbG9jaXR5PWMsYi52ZWxvY2l0eVg9ZSxiLnZlbG9jaXR5WT1mLGIuZGlyZWN0aW9uPWd9ZnVuY3Rpb24gRShhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6bGEoYS5wb2ludGVyc1tjXS5jbGllbnRYKSxjbGllbnRZOmxhKGEucG9pbnRlcnNbY10uY2xpZW50WSl9LGMrKztyZXR1cm57dGltZVN0YW1wOm5hKCkscG9pbnRlcnM6YixjZW50ZXI6RihiKSxkZWx0YVg6YS5kZWx0YVgsZGVsdGFZOmEuZGVsdGFZfX1mdW5jdGlvbiBGKGEpe3ZhciBiPWEubGVuZ3RoO2lmKDE9PT1iKXJldHVybnt4OmxhKGFbMF0uY2xpZW50WCkseTpsYShhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6bGEoYy9iKSx5OmxhKGQvYil9fWZ1bmN0aW9uIEcoYSxiLGMpe3JldHVybnt4OmIvYXx8MCx5OmMvYXx8MH19ZnVuY3Rpb24gSChhLGIpe3JldHVybiBhPT09Yj9DYTptYShhKT49bWEoYik/YT4wP0RhOkVhOmI+MD9GYTpHYX1mdW5jdGlvbiBJKGEsYixjKXtjfHwoYz1LYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiBNYXRoLnNxcnQoZCpkK2UqZSl9ZnVuY3Rpb24gSihhLGIsYyl7Y3x8KGM9S2EpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gMTgwKk1hdGguYXRhbjIoZSxkKS9NYXRoLlBJfWZ1bmN0aW9uIEsoYSxiKXtyZXR1cm4gSihiWzFdLGJbMF0sTGEpLUooYVsxXSxhWzBdLExhKX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuIEkoYlswXSxiWzFdLExhKS9JKGFbMF0sYVsxXSxMYSl9ZnVuY3Rpb24gTSgpe3RoaXMuZXZFbD1OYSx0aGlzLmV2V2luPU9hLHRoaXMuYWxsb3c9ITAsdGhpcy5wcmVzc2VkPSExLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIE4oKXt0aGlzLmV2RWw9UmEsdGhpcy5ldldpbj1TYSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnN0b3JlPXRoaXMubWFuYWdlci5zZXNzaW9uLnBvaW50ZXJFdmVudHM9W119ZnVuY3Rpb24gTygpe3RoaXMuZXZUYXJnZXQ9VWEsdGhpcy5ldldpbj1WYSx0aGlzLnN0YXJ0ZWQ9ITEseS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUChhLGIpe3ZhciBjPXQoYS50b3VjaGVzKSxkPXQoYS5jaGFuZ2VkVG91Y2hlcyk7cmV0dXJuIGImKEFhfEJhKSYmKGM9dShjLmNvbmNhdChkKSxcImlkZW50aWZpZXJcIiwhMCkpLFtjLGRdfWZ1bmN0aW9uIFEoKXt0aGlzLmV2VGFyZ2V0PVhhLHRoaXMudGFyZ2V0SWRzPXt9LHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIFIoYSxiKXt2YXIgYz10KGEudG91Y2hlcyksZD10aGlzLnRhcmdldElkcztpZihiJih5YXx6YSkmJjE9PT1jLmxlbmd0aClyZXR1cm4gZFtjWzBdLmlkZW50aWZpZXJdPSEwLFtjLGNdO3ZhciBlLGYsZz10KGEuY2hhbmdlZFRvdWNoZXMpLGg9W10saT10aGlzLnRhcmdldDtpZihmPWMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBwKGEudGFyZ2V0LGkpfSksYj09PXlhKWZvcihlPTA7ZTxmLmxlbmd0aDspZFtmW2VdLmlkZW50aWZpZXJdPSEwLGUrKztmb3IoZT0wO2U8Zy5sZW5ndGg7KWRbZ1tlXS5pZGVudGlmaWVyXSYmaC5wdXNoKGdbZV0pLGImKEFhfEJhKSYmZGVsZXRlIGRbZ1tlXS5pZGVudGlmaWVyXSxlKys7cmV0dXJuIGgubGVuZ3RoP1t1KGYuY29uY2F0KGgpLFwiaWRlbnRpZmllclwiLCEwKSxoXTp2b2lkIDB9ZnVuY3Rpb24gUygpe3kuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBhPWsodGhpcy5oYW5kbGVyLHRoaXMpO3RoaXMudG91Y2g9bmV3IFEodGhpcy5tYW5hZ2VyLGEpLHRoaXMubW91c2U9bmV3IE0odGhpcy5tYW5hZ2VyLGEpfWZ1bmN0aW9uIFQoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBVKGEpe2lmKHEoYSxiYikpcmV0dXJuIGJiO3ZhciBiPXEoYSxjYiksYz1xKGEsZGIpO3JldHVybiBiJiZjP2NiK1wiIFwiK2RiOmJ8fGM/Yj9jYjpkYjpxKGEsYWIpP2FiOl9hfWZ1bmN0aW9uIFYoYSl7dGhpcy5pZD13KCksdGhpcy5tYW5hZ2VyPW51bGwsdGhpcy5vcHRpb25zPWkoYXx8e30sdGhpcy5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmVuYWJsZT1tKHRoaXMub3B0aW9ucy5lbmFibGUsITApLHRoaXMuc3RhdGU9ZWIsdGhpcy5zaW11bHRhbmVvdXM9e30sdGhpcy5yZXF1aXJlRmFpbD1bXX1mdW5jdGlvbiBXKGEpe3JldHVybiBhJmpiP1wiY2FuY2VsXCI6YSZoYj9cImVuZFwiOmEmZ2I/XCJtb3ZlXCI6YSZmYj9cInN0YXJ0XCI6XCJcIn1mdW5jdGlvbiBYKGEpe3JldHVybiBhPT1HYT9cImRvd25cIjphPT1GYT9cInVwXCI6YT09RGE/XCJsZWZ0XCI6YT09RWE/XCJyaWdodFwiOlwiXCJ9ZnVuY3Rpb24gWShhLGIpe3ZhciBjPWIubWFuYWdlcjtyZXR1cm4gYz9jLmdldChhKTphfWZ1bmN0aW9uIFooKXtWLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiAkKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wWD1udWxsLHRoaXMucFk9bnVsbH1mdW5jdGlvbiBfKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYWEoKXtWLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGx9ZnVuY3Rpb24gYmEoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBjYSgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRhKCl7Vi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBlYShhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9bShiLnJlY29nbml6ZXJzLGVhLmRlZmF1bHRzLnByZXNldCksbmV3IGZhKGEsYil9ZnVuY3Rpb24gZmEoYSxiKXtiPWJ8fHt9LHRoaXMub3B0aW9ucz1pKGIsZWEuZGVmYXVsdHMpLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLmVsZW1lbnQ9YSx0aGlzLmlucHV0PXoodGhpcyksdGhpcy50b3VjaEFjdGlvbj1uZXcgVCh0aGlzLHRoaXMub3B0aW9ucy50b3VjaEFjdGlvbiksZ2EodGhpcywhMCksZyhiLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkKG5ldyBhWzBdKGFbMV0pKTthWzJdJiZiLnJlY29nbml6ZVdpdGgoYVsyXSksYVszXSYmYi5yZXF1aXJlRmFpbHVyZShhWzNdKX0sdGhpcyl9ZnVuY3Rpb24gZ2EoYSxiKXt2YXIgYz1hLmVsZW1lbnQ7ZyhhLm9wdGlvbnMuY3NzUHJvcHMsZnVuY3Rpb24oYSxkKXtjLnN0eWxlW3YoYy5zdHlsZSxkKV09Yj9hOlwiXCJ9KX1mdW5jdGlvbiBoYShhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBpYT1bXCJcIixcIndlYmtpdFwiLFwibW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0samE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGthPVwiZnVuY3Rpb25cIixsYT1NYXRoLnJvdW5kLG1hPU1hdGguYWJzLG5hPURhdGUubm93LG9hPTEscGE9L21vYmlsZXx0YWJsZXR8aXAoYWR8aG9uZXxvZCl8YW5kcm9pZC9pLHFhPVwib250b3VjaHN0YXJ0XCJpbiBhLHJhPXYoYSxcIlBvaW50ZXJFdmVudFwiKSE9PWQsc2E9cWEmJnBhLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksdGE9XCJ0b3VjaFwiLHVhPVwicGVuXCIsdmE9XCJtb3VzZVwiLHdhPVwia2luZWN0XCIseGE9MjUseWE9MSx6YT0yLEFhPTQsQmE9OCxDYT0xLERhPTIsRWE9NCxGYT04LEdhPTE2LEhhPURhfEVhLElhPUZhfEdhLEphPUhhfElhLEthPVtcInhcIixcInlcIl0sTGE9W1wiY2xpZW50WFwiLFwiY2xpZW50WVwiXTt5LnByb3RvdHlwZT17aGFuZGxlcjpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbih0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbih0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbih4KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZvKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZvKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZvKHgodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9fTt2YXIgTWE9e21vdXNlZG93bjp5YSxtb3VzZW1vdmU6emEsbW91c2V1cDpBYX0sTmE9XCJtb3VzZWRvd25cIixPYT1cIm1vdXNlbW92ZSBtb3VzZXVwXCI7aihNLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9TWFbYS50eXBlXTtiJnlhJiYwPT09YS5idXR0b24mJih0aGlzLnByZXNzZWQ9ITApLGImemEmJjEhPT1hLndoaWNoJiYoYj1BYSksdGhpcy5wcmVzc2VkJiZ0aGlzLmFsbG93JiYoYiZBYSYmKHRoaXMucHJlc3NlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6W2FdLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6dmEsc3JjRXZlbnQ6YX0pKX19KTt2YXIgUGE9e3BvaW50ZXJkb3duOnlhLHBvaW50ZXJtb3ZlOnphLHBvaW50ZXJ1cDpBYSxwb2ludGVyY2FuY2VsOkJhLHBvaW50ZXJvdXQ6QmF9LFFhPXsyOnRhLDM6dWEsNDp2YSw1OndhfSxSYT1cInBvaW50ZXJkb3duXCIsU2E9XCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQmJihSYT1cIk1TUG9pbnRlckRvd25cIixTYT1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLGooTix5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RvcmUsYz0hMSxkPWEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLFwiXCIpLGU9UGFbZF0sZj1RYVthLnBvaW50ZXJUeXBlXXx8YS5wb2ludGVyVHlwZSxnPWY9PXRhLGg9cyhiLGEucG9pbnRlcklkLFwicG9pbnRlcklkXCIpO2UmeWEmJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKEFhfEJhKSYmKGM9ITApLDA+aHx8KGJbaF09YSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixlLHtwb2ludGVyczpiLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6ZixzcmNFdmVudDphfSksYyYmYi5zcGxpY2UoaCwxKSl9fSk7dmFyIFRhPXt0b3VjaHN0YXJ0OnlhLHRvdWNobW92ZTp6YSx0b3VjaGVuZDpBYSx0b3VjaGNhbmNlbDpCYX0sVWE9XCJ0b3VjaHN0YXJ0XCIsVmE9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2ooTyx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVRhW2EudHlwZV07aWYoYj09PXlhJiYodGhpcy5zdGFydGVkPSEwKSx0aGlzLnN0YXJ0ZWQpe3ZhciBjPVAuY2FsbCh0aGlzLGEsYik7YiYoQWF8QmEpJiYwPT09Y1swXS5sZW5ndGgtY1sxXS5sZW5ndGgmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6dGEsc3JjRXZlbnQ6YX0pfX19KTt2YXIgV2E9e3RvdWNoc3RhcnQ6eWEsdG91Y2htb3ZlOnphLHRvdWNoZW5kOkFhLHRvdWNoY2FuY2VsOkJhfSxYYT1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aihRLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9V2FbYS50eXBlXSxjPVIuY2FsbCh0aGlzLGEsYik7YyYmdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp0YSxzcmNFdmVudDphfSl9fSksaihTLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMucG9pbnRlclR5cGU9PXRhLGU9Yy5wb2ludGVyVHlwZT09dmE7aWYoZCl0aGlzLm1vdXNlLmFsbG93PSExO2Vsc2UgaWYoZSYmIXRoaXMubW91c2UuYWxsb3cpcmV0dXJuO2ImKEFhfEJhKSYmKHRoaXMubW91c2UuYWxsb3c9ITApLHRoaXMuY2FsbGJhY2soYSxiLGMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIFlhPXYoamEuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxaYT1ZYSE9PWQsJGE9XCJjb21wdXRlXCIsX2E9XCJhdXRvXCIsYWI9XCJtYW5pcHVsYXRpb25cIixiYj1cIm5vbmVcIixjYj1cInBhbi14XCIsZGI9XCJwYW4teVwiO1QucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7YT09JGEmJihhPXRoaXMuY29tcHV0ZSgpKSxaYSYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW1lhXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIGcodGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe2woYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFUoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXtpZighWmEpe3ZhciBiPWEuc3JjRXZlbnQsYz1hLm9mZnNldERpcmVjdGlvbjtpZih0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQpcmV0dXJuIHZvaWQgYi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBkPXRoaXMuYWN0aW9ucyxlPXEoZCxiYiksZj1xKGQsZGIpLGc9cShkLGNiKTtyZXR1cm4gZXx8ZiYmYyZIYXx8ZyYmYyZJYT90aGlzLnByZXZlbnRTcmMoYik6dm9pZCAwfX0scHJldmVudFNyYzpmdW5jdGlvbihhKXt0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQ9ITAsYS5wcmV2ZW50RGVmYXVsdCgpfX07dmFyIGViPTEsZmI9MixnYj00LGhiPTgsaWI9aGIsamI9MTYsa2I9MzI7Vi5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gaCh0aGlzLm9wdGlvbnMsYSksdGhpcy5tYW5hZ2VyJiZ0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30scmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtpZihmKGEsXCJyZWNvZ25pemVXaXRoXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5zaW11bHRhbmVvdXM7cmV0dXJuIGE9WShhLHRoaXMpLGJbYS5pZF18fChiW2EuaWRdPWEsYS5yZWNvZ25pemVXaXRoKHRoaXMpKSx0aGlzfSxkcm9wUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4gZihhLFwiZHJvcFJlY29nbml6ZVdpdGhcIix0aGlzKT90aGlzOihhPVkoYSx0aGlzKSxkZWxldGUgdGhpcy5zaW11bHRhbmVvdXNbYS5pZF0sdGhpcyl9LHJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5yZXF1aXJlRmFpbDtyZXR1cm4gYT1ZKGEsdGhpcyksLTE9PT1zKGIsYSkmJihiLnB1c2goYSksYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksdGhpc30sZHJvcFJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImRyb3BSZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO2E9WShhLHRoaXMpO3ZhciBiPXModGhpcy5yZXF1aXJlRmFpbCxhKTtyZXR1cm4gYj4tMSYmdGhpcy5yZXF1aXJlRmFpbC5zcGxpY2UoYiwxKSx0aGlzfSxoYXNSZXF1aXJlRmFpbHVyZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg+MH0sY2FuUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4hIXRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdfSxlbWl0OmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7Yy5tYW5hZ2VyLmVtaXQoYy5vcHRpb25zLmV2ZW50KyhiP1coZCk6XCJcIiksYSl9dmFyIGM9dGhpcyxkPXRoaXMuc3RhdGU7aGI+ZCYmYighMCksYigpLGQ+PWhiJiZiKCEwKX0sdHJ5RW1pdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jYW5FbWl0KCk/dGhpcy5lbWl0KGEpOnZvaWQodGhpcy5zdGF0ZT1rYil9LGNhbkVtaXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoOyl7aWYoISh0aGlzLnJlcXVpcmVGYWlsW2FdLnN0YXRlJihrYnxlYikpKXJldHVybiExO2ErK31yZXR1cm4hMH0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPWgoe30sYSk7cmV0dXJuIGwodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKGlifGpifGtiKSYmKHRoaXMuc3RhdGU9ZWIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHZvaWQodGhpcy5zdGF0ZSYoZmJ8Z2J8aGJ8amIpJiZ0aGlzLnRyeUVtaXQoYikpKToodGhpcy5yZXNldCgpLHZvaWQodGhpcy5zdGF0ZT1rYikpfSxwcm9jZXNzOmZ1bmN0aW9uKCl7fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe30scmVzZXQ6ZnVuY3Rpb24oKXt9fSxqKFosVix7ZGVmYXVsdHM6e3BvaW50ZXJzOjF9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5wb2ludGVycztyZXR1cm4gMD09PWJ8fGEucG9pbnRlcnMubGVuZ3RoPT09Yn0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0YXRlLGM9YS5ldmVudFR5cGUsZD1iJihmYnxnYiksZT10aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkJiYoYyZCYXx8IWUpP2J8amI6ZHx8ZT9jJkFhP2J8aGI6YiZmYj9ifGdiOmZiOmtifX0pLGooJCxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246SmF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmRpcmVjdGlvbixiPVtdO3JldHVybiBhJkhhJiZiLnB1c2goZGIpLGEmSWEmJmIucHVzaChjYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZIYT8oZT0wPT09Zj9DYTowPmY/RGE6RWEsYz1mIT10aGlzLnBYLGQ9TWF0aC5hYnMoYS5kZWx0YVgpKTooZT0wPT09Zz9DYTowPmc/RmE6R2EsYz1nIT10aGlzLnBZLGQ9TWF0aC5hYnMoYS5kZWx0YVkpKSksYS5kaXJlY3Rpb249ZSxjJiZkPmIudGhyZXNob2xkJiZlJmIuZGlyZWN0aW9ufSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gWi5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYodGhpcy5zdGF0ZSZmYnx8ISh0aGlzLnN0YXRlJmZiKSYmdGhpcy5kaXJlY3Rpb25UZXN0KGEpKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnBYPWEuZGVsdGFYLHRoaXMucFk9YS5kZWx0YVk7dmFyIGI9WChhLmRpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSksaihfLFose2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYmJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJmZiKX0sZW1pdDpmdW5jdGlvbihhKXtpZih0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKSwxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpfX19KSxqKGFhLFYse2RlZmF1bHRzOntldmVudDpcInByZXNzXCIscG9pbnRlcnM6MSx0aW1lOjUwMCx0aHJlc2hvbGQ6NX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bX2FdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZj1hLmRlbHRhVGltZT5iLnRpbWU7aWYodGhpcy5faW5wdXQ9YSwhZHx8IWN8fGEuZXZlbnRUeXBlJihBYXxCYSkmJiFmKXRoaXMucmVzZXQoKTtlbHNlIGlmKGEuZXZlbnRUeXBlJnlhKXRoaXMucmVzZXQoKSx0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1pYix0aGlzLnRyeUVtaXQoKX0sYi50aW1lLHRoaXMpO2Vsc2UgaWYoYS5ldmVudFR5cGUmQWEpcmV0dXJuIGliO3JldHVybiBrYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGU9PT1pYiYmKGEmJmEuZXZlbnRUeXBlJkFhP3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtcInVwXCIsYSk6KHRoaXMuX2lucHV0LnRpbWVTdGFtcD1uYSgpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpKX19KSxqKGJhLFose2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2JiXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmZmIpfX0pLGooY2EsWix7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjY1LGRpcmVjdGlvbjpIYXxJYSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiAkLnByb3RvdHlwZS5nZXRUb3VjaEFjdGlvbi5jYWxsKHRoaXMpfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGMmKEhhfElhKT9iPWEudmVsb2NpdHk6YyZIYT9iPWEudmVsb2NpdHlYOmMmSWEmJihiPWEudmVsb2NpdHlZKSx0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJmMmYS5kaXJlY3Rpb24mJmEuZGlzdGFuY2U+dGhpcy5vcHRpb25zLnRocmVzaG9sZCYmbWEoYik+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZBYX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj1YKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSksaihkYSxWLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjIscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVyblthYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmeWEmJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZiYmYyl7aWYoYS5ldmVudFR5cGUhPUFhKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGc9IXRoaXMucFRpbWV8fGEudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbCxoPSF0aGlzLnBDZW50ZXJ8fEkodGhpcy5wQ2VudGVyLGEuY2VudGVyKTxiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lPWEudGltZVN0YW1wLHRoaXMucENlbnRlcj1hLmNlbnRlcixoJiZnP3RoaXMuY291bnQrPTE6dGhpcy5jb3VudD0xLHRoaXMuX2lucHV0PWE7dmFyIGk9dGhpcy5jb3VudCViLnRhcHM7aWYoMD09PWkpcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCk/KHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPWliLHRoaXMudHJ5RW1pdCgpfSxiLmludGVydmFsLHRoaXMpLGZiKTppYn1yZXR1cm4ga2J9LGZhaWxUaW1lb3V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPWtifSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsdGhpcyksa2J9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbigpe3RoaXMuc3RhdGU9PWliJiYodGhpcy5faW5wdXQudGFwQ291bnQ9dGhpcy5jb3VudCx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKX19KSxlYS5WRVJTSU9OPVwiMi4wLjRcIixlYS5kZWZhdWx0cz17ZG9tRXZlbnRzOiExLHRvdWNoQWN0aW9uOiRhLGVuYWJsZTohMCxpbnB1dFRhcmdldDpudWxsLGlucHV0Q2xhc3M6bnVsbCxwcmVzZXQ6W1tiYSx7ZW5hYmxlOiExfV0sW18se2VuYWJsZTohMX0sW1wicm90YXRlXCJdXSxbY2Ese2RpcmVjdGlvbjpIYX1dLFskLHtkaXJlY3Rpb246SGF9LFtcInN3aXBlXCJdXSxbZGFdLFtkYSx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2FhXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJkZWZhdWx0XCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIGxiPTEsbWI9MjtmYS5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gaCh0aGlzLm9wdGlvbnMsYSksYS50b3VjaEFjdGlvbiYmdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhLmlucHV0VGFyZ2V0JiYodGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5pbnB1dC50YXJnZXQ9YS5pbnB1dFRhcmdldCx0aGlzLmlucHV0LmluaXQoKSksdGhpc30sc3RvcDpmdW5jdGlvbihhKXt0aGlzLnNlc3Npb24uc3RvcHBlZD1hP21iOmxifSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zZXNzaW9uO2lmKCFiLnN0b3BwZWQpe3RoaXMudG91Y2hBY3Rpb24ucHJldmVudERlZmF1bHRzKGEpO3ZhciBjLGQ9dGhpcy5yZWNvZ25pemVycyxlPWIuY3VyUmVjb2duaXplcjsoIWV8fGUmJmUuc3RhdGUmaWIpJiYoZT1iLmN1clJlY29nbml6ZXI9bnVsbCk7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDspYz1kW2ZdLGIuc3RvcHBlZD09PW1ifHxlJiZjIT1lJiYhYy5jYW5SZWNvZ25pemVXaXRoKGUpP2MucmVzZXQoKTpjLnJlY29nbml6ZShhKSwhZSYmYy5zdGF0ZSYoZmJ8Z2J8aGIpJiYoZT1iLmN1clJlY29nbml6ZXI9YyksZisrfX0sZ2V0OmZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBWKXJldHVybiBhO2Zvcih2YXIgYj10aGlzLnJlY29nbml6ZXJzLGM9MDtjPGIubGVuZ3RoO2MrKylpZihiW2NdLm9wdGlvbnMuZXZlbnQ9PWEpcmV0dXJuIGJbY107cmV0dXJuIG51bGx9LGFkZDpmdW5jdGlvbihhKXtpZihmKGEsXCJhZGRcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmdldChhLm9wdGlvbnMuZXZlbnQpO3JldHVybiBiJiZ0aGlzLnJlbW92ZShiKSx0aGlzLnJlY29nbml6ZXJzLnB1c2goYSksYS5tYW5hZ2VyPXRoaXMsdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVtb3ZlXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5yZWNvZ25pemVycztyZXR1cm4gYT10aGlzLmdldChhKSxiLnNwbGljZShzKGIsYSksMSksdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocihhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9LG9mZjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocihhKSxmdW5jdGlvbihhKXtiP2NbYV0uc3BsaWNlKHMoY1thXSxiKSwxKTpkZWxldGUgY1thXX0pLHRoaXN9LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZoYShhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZnYSh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LGgoZWEse0lOUFVUX1NUQVJUOnlhLElOUFVUX01PVkU6emEsSU5QVVRfRU5EOkFhLElOUFVUX0NBTkNFTDpCYSxTVEFURV9QT1NTSUJMRTplYixTVEFURV9CRUdBTjpmYixTVEFURV9DSEFOR0VEOmdiLFNUQVRFX0VOREVEOmhiLFNUQVRFX1JFQ09HTklaRUQ6aWIsU1RBVEVfQ0FOQ0VMTEVEOmpiLFNUQVRFX0ZBSUxFRDprYixESVJFQ1RJT05fTk9ORTpDYSxESVJFQ1RJT05fTEVGVDpEYSxESVJFQ1RJT05fUklHSFQ6RWEsRElSRUNUSU9OX1VQOkZhLERJUkVDVElPTl9ET1dOOkdhLERJUkVDVElPTl9IT1JJWk9OVEFMOkhhLERJUkVDVElPTl9WRVJUSUNBTDpJYSxESVJFQ1RJT05fQUxMOkphLE1hbmFnZXI6ZmEsSW5wdXQ6eSxUb3VjaEFjdGlvbjpULFRvdWNoSW5wdXQ6USxNb3VzZUlucHV0Ok0sUG9pbnRlckV2ZW50SW5wdXQ6TixUb3VjaE1vdXNlSW5wdXQ6UyxTaW5nbGVUb3VjaElucHV0Ok8sUmVjb2duaXplcjpWLEF0dHJSZWNvZ25pemVyOlosVGFwOmRhLFBhbjokLFN3aXBlOmNhLFBpbmNoOl8sUm90YXRlOmJhLFByZXNzOmFhLG9uOm4sb2ZmOm8sZWFjaDpnLG1lcmdlOmksZXh0ZW5kOmgsaW5oZXJpdDpqLGJpbmRGbjprLHByZWZpeGVkOnZ9KSx0eXBlb2YgZGVmaW5lPT1rYSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gZWF9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lYTphW2NdPWVhfSh3aW5kb3csZG9jdW1lbnQsXCJIYW1tZXJcIiksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIixcImhhbW1lcmpzXCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2EocmVxdWlyZShcImpxdWVyeVwiKSxyZXF1aXJlKFwiaGFtbWVyanNcIikpOmEoalF1ZXJ5LEhhbW1lcil9KGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhjLGQpe3ZhciBlPWEoYyk7ZS5kYXRhKFwiaGFtbWVyXCIpfHxlLmRhdGEoXCJoYW1tZXJcIixuZXcgYihlWzBdLGQpKX1hLmZuLmhhbW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Yyh0aGlzLGEpfSl9LGIuTWFuYWdlci5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXtiLmNhbGwodGhpcyxjLGQpLGEodGhpcy5lbGVtZW50KS50cmlnZ2VyKHt0eXBlOmMsZ2VzdHVyZTpkfSl9fShiLk1hbmFnZXIucHJvdG90eXBlLmVtaXQpfSksZnVuY3Rpb24oYSl7YS5QYWNrYWdlP01hdGVyaWFsaXplPXt9OmEuTWF0ZXJpYWxpemU9e319KHdpbmRvdyksZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1bXCJ3ZWJraXRcIixcIm1velwiXSxkPWEucmVxdWVzdEFuaW1hdGlvbkZyYW1lLGU9YS5jYW5jZWxBbmltYXRpb25GcmFtZSxmPWMubGVuZ3RoOy0tZj49MCYmIWQ7KWQ9YVtjW2ZdK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLGU9YVtjW2ZdK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO2QmJmV8fChkPWZ1bmN0aW9uKGEpe3ZhciBjPStEYXRlLm5vdygpLGQ9TWF0aC5tYXgoYisxNixjKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2EoYj1kKX0sZC1jKX0sZT1jbGVhclRpbWVvdXQpLGEucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWQsYS5jYW5jZWxBbmltYXRpb25GcmFtZT1lfSh3aW5kb3cpLE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nPWZ1bmN0aW9uKGEpe3ZhciBiPWEucHJvcChcInRhZ05hbWVcIil8fFwiXCIsYz1hLmF0dHIoXCJpZFwiKXx8XCJcIixkPWEuYXR0cihcImNsYXNzXCIpfHxcIlwiO3JldHVybihiK2MrZCkucmVwbGFjZSgvXFxzL2csXCJcIil9LE1hdGVyaWFsaXplLmd1aWQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIE1hdGguZmxvb3IoNjU1MzYqKDErTWF0aC5yYW5kb20oKSkpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSl9cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEoKSthKCkrXCItXCIrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrXCItXCIrYSgpK2EoKSthKCl9fSgpLE1hdGVyaWFsaXplLmVzY2FwZUhhc2g9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LHw9KS9nLFwiXFxcXCQxXCIpfSxNYXRlcmlhbGl6ZS5lbGVtZW50T3JQYXJlbnRJc0ZpeGVkPWZ1bmN0aW9uKGEpe3ZhciBiPSQoYSksYz1iLmFkZChiLnBhcmVudHMoKSksZD0hMTtyZXR1cm4gYy5lYWNoKGZ1bmN0aW9uKCl7aWYoXCJmaXhlZFwiPT09JCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSlyZXR1cm4gZD0hMCwhMX0pLGR9O3ZhciBnZXRUaW1lPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfTtNYXRlcmlhbGl6ZS50aHJvdHRsZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9bnVsbCxoPTA7Y3x8KGM9e30pO3ZhciBpPWZ1bmN0aW9uKCl7aD1jLmxlYWRpbmc9PT0hMT8wOmdldFRpbWUoKSxnPW51bGwsZj1hLmFwcGx5KGQsZSksZD1lPW51bGx9O3JldHVybiBmdW5jdGlvbigpe3ZhciBqPWdldFRpbWUoKTtofHxjLmxlYWRpbmchPT0hMXx8KGg9aik7dmFyIGs9Yi0oai1oKTtyZXR1cm4gZD10aGlzLGU9YXJndW1lbnRzLGs8PTA/KGNsZWFyVGltZW91dChnKSxnPW51bGwsaD1qLGY9YS5hcHBseShkLGUpLGQ9ZT1udWxsKTpnfHxjLnRyYWlsaW5nPT09ITF8fChnPXNldFRpbWVvdXQoaSxrKSksZn19O3ZhciBWZWw7VmVsPWpRdWVyeT9qUXVlcnkuVmVsb2NpdHk6JD8kLlZlbG9jaXR5OlZlbG9jaXR5LGZ1bmN0aW9uKGEpe2EuZm4uY29sbGFwc2libGU9ZnVuY3Rpb24oYixjKXt2YXIgZD17YWNjb3JkaW9uOnZvaWQgMCxvbk9wZW46dm9pZCAwLG9uQ2xvc2U6dm9pZCAwfSxlPWI7cmV0dXJuIGI9YS5leHRlbmQoZCxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBkKGIpe209bC5maW5kKFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIiksYi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmIucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYi5wYXJlbnQoKS5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVEb3duKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pOmIuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZVVwKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pLG0ubm90KGIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLG0ubm90KGIpLnBhcmVudCgpLmNoaWxkcmVuKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuZWFjaChmdW5jdGlvbigpe2EodGhpcykuaXMoXCI6dmlzaWJsZVwiKSYmYSh0aGlzKS5zbGlkZVVwKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpLGgoYSh0aGlzKS5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1oZWFkZXJcIikpfX0pfSl9ZnVuY3Rpb24gZihiKXtiLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2IucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik6Yi5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLnBhcmVudCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2Iuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZURvd24oe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSk6Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSl9ZnVuY3Rpb24gZyhhLGMpe2N8fGEudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiksYi5hY2NvcmRpb258fFwiYWNjb3JkaW9uXCI9PT1ufHx2b2lkIDA9PT1uP2QoYSk6ZihhKSxoKGEpfWZ1bmN0aW9uIGgoYSl7YS5oYXNDbGFzcyhcImFjdGl2ZVwiKT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uT3BlbiYmYi5vbk9wZW4uY2FsbCh0aGlzLGEucGFyZW50KCkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGIub25DbG9zZSYmYi5vbkNsb3NlLmNhbGwodGhpcyxhLnBhcmVudCgpKX1mdW5jdGlvbiBpKGEpe3ZhciBiPWooYSk7cmV0dXJuIGIubGVuZ3RoPjB9ZnVuY3Rpb24gaihhKXtyZXR1cm4gYS5jbG9zZXN0KFwibGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpfWZ1bmN0aW9uIGsoKXtsLm9mZihcImNsaWNrLmNvbGxhcHNlXCIsXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKX12YXIgbD1hKHRoaXMpLG09YSh0aGlzKS5maW5kKFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIiksbj1sLmRhdGEoXCJjb2xsYXBzaWJsZVwiKTtpZihcImRlc3Ryb3lcIj09PWUpcmV0dXJuIHZvaWQgaygpO2lmKGM+PTAmJmM8bS5sZW5ndGgpe3ZhciBvPW0uZXEoYyk7cmV0dXJuIHZvaWQoby5sZW5ndGgmJihcIm9wZW5cIj09PWV8fFwiY2xvc2VcIj09PWUmJm8uaGFzQ2xhc3MoXCJhY3RpdmVcIikpJiZnKG8pKX1rKCksbC5vbihcImNsaWNrLmNvbGxhcHNlXCIsXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEoYi50YXJnZXQpO2koYykmJihjPWooYykpLGcoYyl9KSxiLmFjY29yZGlvbnx8XCJhY2NvcmRpb25cIj09PW58fHZvaWQgMD09PW4/ZyhtLmZpbHRlcihcIi5hY3RpdmVcIikuZmlyc3QoKSwhMCk6bS5maWx0ZXIoXCIuYWN0aXZlXCIpLmVhY2goZnVuY3Rpb24oKXtnKGEodGhpcyksITApfSl9KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLmNvbGxhcHNpYmxlXCIpLmNvbGxhcHNpYmxlKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnNjcm9sbFRvPWZ1bmN0aW9uKGIpe3JldHVybiBhKHRoaXMpLnNjcm9sbFRvcChhKHRoaXMpLnNjcm9sbFRvcCgpLWEodGhpcykub2Zmc2V0KCkudG9wK2EoYikub2Zmc2V0KCkudG9wKSx0aGlzfSxhLmZuLmRyb3Bkb3duPWZ1bmN0aW9uKGIpe3ZhciBjPXtpbkR1cmF0aW9uOjMwMCxvdXREdXJhdGlvbjoyMjUsY29uc3RyYWluV2lkdGg6ITAsaG92ZXI6ITEsZ3V0dGVyOjAsYmVsb3dPcmlnaW46ITEsYWxpZ25tZW50OlwibGVmdFwiLHN0b3BQcm9wYWdhdGlvbjohMX07cmV0dXJuXCJvcGVuXCI9PT1iPyh0aGlzLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJvcGVuXCIpfSksITEpOlwiY2xvc2VcIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcImNsb3NlXCIpfSksITEpOnZvaWQgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZCgpe3ZvaWQgMCE9PWcuZGF0YShcImluZHVyYXRpb25cIikmJihoLmluRHVyYXRpb249Zy5kYXRhKFwiaW5kdXJhdGlvblwiKSksdm9pZCAwIT09Zy5kYXRhKFwib3V0ZHVyYXRpb25cIikmJihoLm91dER1cmF0aW9uPWcuZGF0YShcIm91dGR1cmF0aW9uXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJjb25zdHJhaW53aWR0aFwiKSYmKGguY29uc3RyYWluV2lkdGg9Zy5kYXRhKFwiY29uc3RyYWlud2lkdGhcIikpLHZvaWQgMCE9PWcuZGF0YShcImhvdmVyXCIpJiYoaC5ob3Zlcj1nLmRhdGEoXCJob3ZlclwiKSksdm9pZCAwIT09Zy5kYXRhKFwiZ3V0dGVyXCIpJiYoaC5ndXR0ZXI9Zy5kYXRhKFwiZ3V0dGVyXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJiZWxvd29yaWdpblwiKSYmKGguYmVsb3dPcmlnaW49Zy5kYXRhKFwiYmVsb3dvcmlnaW5cIikpLHZvaWQgMCE9PWcuZGF0YShcImFsaWdubWVudFwiKSYmKGguYWxpZ25tZW50PWcuZGF0YShcImFsaWdubWVudFwiKSksdm9pZCAwIT09Zy5kYXRhKFwic3RvcHByb3BhZ2F0aW9uXCIpJiYoaC5zdG9wUHJvcGFnYXRpb249Zy5kYXRhKFwic3RvcHByb3BhZ2F0aW9uXCIpKX1mdW5jdGlvbiBlKGIpe1wiZm9jdXNcIj09PWImJihpPSEwKSxkKCksai5hZGRDbGFzcyhcImFjdGl2ZVwiKSxnLmFkZENsYXNzKFwiYWN0aXZlXCIpLGguY29uc3RyYWluV2lkdGg9PT0hMD9qLmNzcyhcIndpZHRoXCIsZy5vdXRlcldpZHRoKCkpOmouY3NzKFwid2hpdGUtc3BhY2VcIixcIm5vd3JhcFwiKTt2YXIgYz13aW5kb3cuaW5uZXJIZWlnaHQsZT1nLmlubmVySGVpZ2h0KCksaz1nLm9mZnNldCgpLmxlZnQsbD1nLm9mZnNldCgpLnRvcC1hKHdpbmRvdykuc2Nyb2xsVG9wKCksbT1oLmFsaWdubWVudCxuPTAsbz0wLHA9MDtoLmJlbG93T3JpZ2luPT09ITAmJihwPWUpO3ZhciBxPTAscj0wLHM9Zy5wYXJlbnQoKTtpZihzLmlzKFwiYm9keVwiKXx8KHNbMF0uc2Nyb2xsSGVpZ2h0PnNbMF0uY2xpZW50SGVpZ2h0JiYocT1zWzBdLnNjcm9sbFRvcCksc1swXS5zY3JvbGxXaWR0aD5zWzBdLmNsaWVudFdpZHRoJiYocj1zWzBdLnNjcm9sbExlZnQpKSxrK2ouaW5uZXJXaWR0aCgpPmEod2luZG93KS53aWR0aCgpP209XCJyaWdodFwiOmstai5pbm5lcldpZHRoKCkrZy5pbm5lcldpZHRoKCk8MCYmKG09XCJsZWZ0XCIpLGwrai5pbm5lckhlaWdodCgpPmMpaWYobCtlLWouaW5uZXJIZWlnaHQoKTwwKXt2YXIgdD1jLWwtcDtqLmNzcyhcIm1heC1oZWlnaHRcIix0KX1lbHNlIHB8fChwKz1lKSxwLT1qLmlubmVySGVpZ2h0KCk7aWYoXCJsZWZ0XCI9PT1tKW49aC5ndXR0ZXIsbz1nLnBvc2l0aW9uKCkubGVmdCtuO2Vsc2UgaWYoXCJyaWdodFwiPT09bSl7dmFyIHU9Zy5wb3NpdGlvbigpLmxlZnQrZy5vdXRlcldpZHRoKCktai5vdXRlcldpZHRoKCk7bj0taC5ndXR0ZXIsbz11K259ai5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6Zy5wb3NpdGlvbigpLnRvcCtwK3EsbGVmdDpvK3J9KSxqLnN0b3AoITAsITApLmNzcyhcIm9wYWNpdHlcIiwwKS5zbGlkZURvd24oe3F1ZXVlOiExLGR1cmF0aW9uOmguaW5EdXJhdGlvbixlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSkuYW5pbWF0ZSh7b3BhY2l0eToxfSx7cXVldWU6ITEsZHVyYXRpb246aC5pbkR1cmF0aW9uLGVhc2luZzpcImVhc2VPdXRTaW5lXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpLGZ1bmN0aW9uKGIpe2YoKSxhKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSl9KX0sMCl9ZnVuY3Rpb24gZigpe2k9ITEsai5mYWRlT3V0KGgub3V0RHVyYXRpb24pLGoucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSksc2V0VGltZW91dChmdW5jdGlvbigpe2ouY3NzKFwibWF4LWhlaWdodFwiLFwiXCIpfSxoLm91dER1cmF0aW9uKX12YXIgZz1hKHRoaXMpLGg9YS5leHRlbmQoe30sYyxiKSxpPSExLGo9YShcIiNcIitnLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSk7aWYoZCgpLGcuYWZ0ZXIoaiksaC5ob3Zlcil7dmFyIGs9ITE7Zy51bmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSksZy5vbihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbihhKXtrPT09ITEmJihlKCksaz0hMCl9KSxnLm9uKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWIudG9FbGVtZW50fHxiLnJlbGF0ZWRUYXJnZXQ7YShjKS5jbG9zZXN0KFwiLmRyb3Bkb3duLWNvbnRlbnRcIikuaXMoail8fChqLnN0b3AoITAsITApLGYoKSxrPSExKX0pLGoub24oXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oYil7dmFyIGM9Yi50b0VsZW1lbnR8fGIucmVsYXRlZFRhcmdldDthKGMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tYnV0dG9uXCIpLmlzKGcpfHwoai5zdG9wKCEwLCEwKSxmKCksaz0hMSl9KX1lbHNlIGcudW5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIikpLGcuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpLGZ1bmN0aW9uKGIpe2l8fChnWzBdIT1iLmN1cnJlbnRUYXJnZXR8fGcuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fDAhPT1hKGIudGFyZ2V0KS5jbG9zZXN0KFwiLmRyb3Bkb3duLWNvbnRlbnRcIikubGVuZ3RoP2cuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJihmKCksYShkb2N1bWVudCkudW5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIikpKTooYi5wcmV2ZW50RGVmYXVsdCgpLGguc3RvcFByb3BhZ2F0aW9uJiZiLnN0b3BQcm9wYWdhdGlvbigpLGUoXCJjbGlja1wiKSkpfSk7Zy5vbihcIm9wZW5cIixmdW5jdGlvbihhLGIpe2UoYil9KSxnLm9uKFwiY2xvc2VcIixmKX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIuZHJvcGRvd24tYnV0dG9uXCIpLmRyb3Bkb3duKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcbnZhciBiPTAsYz0wLGQ9ZnVuY3Rpb24oKXtyZXR1cm4gYysrLFwibWF0ZXJpYWxpemUtbW9kYWwtb3ZlcmxheS1cIitjfSxlPXtpbml0OmZ1bmN0aW9uKGMpe3ZhciBlPXtvcGFjaXR5Oi41LGluRHVyYXRpb246MzUwLG91dER1cmF0aW9uOjI1MCxyZWFkeTp2b2lkIDAsY29tcGxldGU6dm9pZCAwLGRpc21pc3NpYmxlOiEwLHN0YXJ0aW5nVG9wOlwiNCVcIixlbmRpbmdUb3A6XCIxMCVcIn07cmV0dXJuIGM9YS5leHRlbmQoZSxjKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1hKHRoaXMpLGY9YSh0aGlzKS5hdHRyKFwiaWRcIil8fFwiI1wiK2EodGhpcykuZGF0YShcInRhcmdldFwiKSxnPWZ1bmN0aW9uKCl7dmFyIGQ9ZS5kYXRhKFwib3ZlcmxheS1pZFwiKSxmPWEoXCIjXCIrZCk7ZS5yZW1vdmVDbGFzcyhcIm9wZW5cIiksYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxlLmZpbmQoXCIubW9kYWwtY2xvc2VcIikub2ZmKFwiY2xpY2suY2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwia2V5dXAubW9kYWxcIitkKSxmLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpjLm91dER1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0UXVhcnRcIn0pO3ZhciBnPXtkdXJhdGlvbjpjLm91dER1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKHtkaXNwbGF5Olwibm9uZVwifSksXCJmdW5jdGlvblwiPT10eXBlb2YgYy5jb21wbGV0ZSYmYy5jb21wbGV0ZS5jYWxsKHRoaXMsZSksZi5yZW1vdmUoKSxiLS19fTtlLmhhc0NsYXNzKFwiYm90dG9tLXNoZWV0XCIpP2UudmVsb2NpdHkoe2JvdHRvbTpcIi0xMDAlXCIsb3BhY2l0eTowfSxnKTplLnZlbG9jaXR5KHt0b3A6Yy5zdGFydGluZ1RvcCxvcGFjaXR5OjAsc2NhbGVYOi43fSxnKX0saD1mdW5jdGlvbihmKXt2YXIgaD1hKFwiYm9keVwiKSxpPWguaW5uZXJXaWR0aCgpO2lmKGguY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxoLndpZHRoKGkpLCFlLmhhc0NsYXNzKFwib3BlblwiKSl7dmFyIGo9ZCgpLGs9YSgnPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2Rpdj4nKTtsU3RhY2s9KytiLGsuYXR0cihcImlkXCIsaikuY3NzKFwiei1pbmRleFwiLDFlMysyKmxTdGFjayksZS5kYXRhKFwib3ZlcmxheS1pZFwiLGopLmNzcyhcInotaW5kZXhcIiwxZTMrMipsU3RhY2srMSksZS5hZGRDbGFzcyhcIm9wZW5cIiksYShcImJvZHlcIikuYXBwZW5kKGspLGMuZGlzbWlzc2libGUmJihrLmNsaWNrKGZ1bmN0aW9uKCl7ZygpfSksYShkb2N1bWVudCkub24oXCJrZXl1cC5tb2RhbFwiK2osZnVuY3Rpb24oYSl7Mjc9PT1hLmtleUNvZGUmJmcoKX0pKSxlLmZpbmQoXCIubW9kYWwtY2xvc2VcIikub24oXCJjbGljay5jbG9zZVwiLGZ1bmN0aW9uKGEpe2coKX0pLGsuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OjB9KSxlLmNzcyh7ZGlzcGxheTpcImJsb2NrXCIsb3BhY2l0eTowfSksay52ZWxvY2l0eSh7b3BhY2l0eTpjLm9wYWNpdHl9LHtkdXJhdGlvbjpjLmluRHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wifSksZS5kYXRhKFwiYXNzb2NpYXRlZC1vdmVybGF5XCIsa1swXSk7dmFyIGw9e2R1cmF0aW9uOmMuaW5EdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnJlYWR5JiZjLnJlYWR5LmNhbGwodGhpcyxlLGYpfX07ZS5oYXNDbGFzcyhcImJvdHRvbS1zaGVldFwiKT9lLnZlbG9jaXR5KHtib3R0b206XCIwXCIsb3BhY2l0eToxfSxsKTooYS5WZWxvY2l0eS5ob29rKGUsXCJzY2FsZVhcIiwuNyksZS5jc3Moe3RvcDpjLnN0YXJ0aW5nVG9wfSksZS52ZWxvY2l0eSh7dG9wOmMuZW5kaW5nVG9wLG9wYWNpdHk6MSxzY2FsZVg6XCIxXCJ9LGwpKX19O2EoZG9jdW1lbnQpLm9mZihcImNsaWNrLm1vZGFsVHJpZ2dlclwiLCdhW2hyZWY9XCIjJytmKydcIl0sIFtkYXRhLXRhcmdldD1cIicrZisnXCJdJyksYSh0aGlzKS5vZmYoXCJvcGVuTW9kYWxcIiksYSh0aGlzKS5vZmYoXCJjbG9zZU1vZGFsXCIpLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2subW9kYWxUcmlnZ2VyXCIsJ2FbaHJlZj1cIiMnK2YrJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJytmKydcIl0nLGZ1bmN0aW9uKGIpe2Muc3RhcnRpbmdUb3A9KGEodGhpcykub2Zmc2V0KCkudG9wLWEod2luZG93KS5zY3JvbGxUb3AoKSkvMS4xNSxoKGEodGhpcykpLGIucHJldmVudERlZmF1bHQoKX0pLGEodGhpcykub24oXCJvcGVuTW9kYWxcIixmdW5jdGlvbigpe2EodGhpcykuYXR0cihcImhyZWZcIil8fFwiI1wiK2EodGhpcykuZGF0YShcInRhcmdldFwiKTtoKCl9KSxhKHRoaXMpLm9uKFwiY2xvc2VNb2RhbFwiLGZ1bmN0aW9uKCl7ZygpfSl9KX0sb3BlbjpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcIm9wZW5Nb2RhbFwiKX0sY2xvc2U6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJjbG9zZU1vZGFsXCIpfX07YS5mbi5tb2RhbD1mdW5jdGlvbihiKXtyZXR1cm4gZVtiXT9lW2JdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYiYmYj92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYitcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkubW9kYWxcIik6ZS5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5tYXRlcmlhbGJveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7Zj0hMTt2YXIgYj1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKSxkPSh3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQsaS5kYXRhKFwid2lkdGhcIikpLGc9aS5kYXRhKFwiaGVpZ2h0XCIpO2kudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIjbWF0ZXJpYWxib3gtb3ZlcmxheVwiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIi5tYXRlcmlhbGJveC1jYXB0aW9uXCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiI21hdGVyaWFsYm94LW92ZXJsYXlcIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmgscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2U9ITEsYSh0aGlzKS5yZW1vdmUoKX19KSxpLnZlbG9jaXR5KHt3aWR0aDpkLGhlaWdodDpnLGxlZnQ6MCx0b3A6MH0se2R1cmF0aW9uOmgscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2IuY3NzKHtoZWlnaHQ6XCJcIix3aWR0aDpcIlwiLHBvc2l0aW9uOlwiXCIsdG9wOlwiXCIsbGVmdDpcIlwifSksaS5yZW1vdmVBdHRyKFwic3R5bGVcIiksaS5hdHRyKFwic3R5bGVcIixrKSxpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGY9ITAsYyYmYy5jc3MoXCJvdmVyZmxvd1wiLFwiXCIpfX0pLGEoXCIubWF0ZXJpYWxib3gtY2FwdGlvblwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KX1pZighYSh0aGlzKS5oYXNDbGFzcyhcImluaXRpYWxpemVkXCIpKXthKHRoaXMpLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIik7dmFyIGMsZCxlPSExLGY9ITAsZz0yNzUsaD0yMDAsaT1hKHRoaXMpLGo9YShcIjxkaXY+PC9kaXY+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtcGxhY2Vob2xkZXJcIiksaz1pLmF0dHIoXCJzdHlsZVwiKTtpLndyYXAoaiksaS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgaD1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKSxqPXdpbmRvdy5pbm5lcldpZHRoLGs9d2luZG93LmlubmVySGVpZ2h0LGw9aS53aWR0aCgpLG09aS5oZWlnaHQoKTtpZihmPT09ITEpcmV0dXJuIGIoKSwhMTtpZihlJiZmPT09ITApcmV0dXJuIGIoKSwhMTtmPSExLGkuYWRkQ2xhc3MoXCJhY3RpdmVcIiksZT0hMCxoLmNzcyh7d2lkdGg6aFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxoZWlnaHQ6aFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQscG9zaXRpb246XCJyZWxhdGl2ZVwiLHRvcDowLGxlZnQ6MH0pLGM9dm9pZCAwLGQ9aFswXS5wYXJlbnROb2RlO2Zvcig7bnVsbCE9PWQmJiFhKGQpLmlzKGRvY3VtZW50KTspe3ZhciBuPWEoZCk7XCJ2aXNpYmxlXCIhPT1uLmNzcyhcIm92ZXJmbG93XCIpJiYobi5jc3MoXCJvdmVyZmxvd1wiLFwidmlzaWJsZVwiKSxjPXZvaWQgMD09PWM/bjpjLmFkZChuKSksZD1kLnBhcmVudE5vZGV9aS5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixcInotaW5kZXhcIjoxZTMsXCJ3aWxsLWNoYW5nZVwiOlwibGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0XCJ9KS5kYXRhKFwid2lkdGhcIixsKS5kYXRhKFwiaGVpZ2h0XCIsbSk7dmFyIG89YSgnPGRpdiBpZD1cIm1hdGVyaWFsYm94LW92ZXJsYXlcIj48L2Rpdj4nKS5jc3Moe29wYWNpdHk6MH0pLmNsaWNrKGZ1bmN0aW9uKCl7Zj09PSEwJiZiKCl9KTtpLmJlZm9yZShvKTt2YXIgcD1vWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKG8uY3NzKHt3aWR0aDpqLGhlaWdodDprLGxlZnQ6LTEqcC5sZWZ0LHRvcDotMSpwLnRvcH0pLG8udmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLFwiXCIhPT1pLmRhdGEoXCJjYXB0aW9uXCIpKXt2YXIgcT1hKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWxib3gtY2FwdGlvblwiPjwvZGl2PicpO3EudGV4dChpLmRhdGEoXCJjYXB0aW9uXCIpKSxhKFwiYm9keVwiKS5hcHBlbmQocSkscS5jc3Moe2Rpc3BsYXk6XCJpbmxpbmVcIn0pLHEudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfXZhciByPTAscz1sL2osdD1tL2ssdT0wLHY9MDtzPnQ/KHI9bS9sLHU9Ljkqaix2PS45Kmoqcik6KHI9bC9tLHU9LjkqaypyLHY9LjkqayksaS5oYXNDbGFzcyhcInJlc3BvbnNpdmUtaW1nXCIpP2kudmVsb2NpdHkoe1wibWF4LXdpZHRoXCI6dSx3aWR0aDpsfSx7ZHVyYXRpb246MCxxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2kuY3NzKHtsZWZ0OjAsdG9wOjB9KS52ZWxvY2l0eSh7aGVpZ2h0OnYsd2lkdGg6dSxsZWZ0OmEoZG9jdW1lbnQpLnNjcm9sbExlZnQoKStqLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkubGVmdC11LzIsdG9wOmEoZG9jdW1lbnQpLnNjcm9sbFRvcCgpK2svMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS50b3Atdi8yfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Zj0hMH19KX19KTppLmNzcyhcImxlZnRcIiwwKS5jc3MoXCJ0b3BcIiwwKS52ZWxvY2l0eSh7aGVpZ2h0OnYsd2lkdGg6dSxsZWZ0OmEoZG9jdW1lbnQpLnNjcm9sbExlZnQoKStqLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkubGVmdC11LzIsdG9wOmEoZG9jdW1lbnQpLnNjcm9sbFRvcCgpK2svMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS50b3Atdi8yfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Zj0hMH19KX0pLGEod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtlJiZiKCl9KSxhKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmZj09PSEwJiZlJiZiKCl9KX19KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLm1hdGVyaWFsYm94ZWRcIikubWF0ZXJpYWxib3goKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ucGFyYWxsYXg9ZnVuY3Rpb24oKXt2YXIgYj1hKHdpbmRvdykud2lkdGgoKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYyl7dmFyIGQ7ZD1iPDYwMT9lLmhlaWdodCgpPjA/ZS5oZWlnaHQoKTplLmNoaWxkcmVuKFwiaW1nXCIpLmhlaWdodCgpOmUuaGVpZ2h0KCk+MD9lLmhlaWdodCgpOjUwMDt2YXIgZj1lLmNoaWxkcmVuKFwiaW1nXCIpLmZpcnN0KCksZz1mLmhlaWdodCgpLGg9Zy1kLGk9ZS5vZmZzZXQoKS50b3ArZCxqPWUub2Zmc2V0KCkudG9wLGs9YSh3aW5kb3cpLnNjcm9sbFRvcCgpLGw9d2luZG93LmlubmVySGVpZ2h0LG09aytsLG49KG0taikvKGQrbCksbz1NYXRoLnJvdW5kKGgqbik7YyYmZi5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKSxpPmsmJmo8aytsJiZmLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlM0QoLTUwJSxcIitvK1wicHgsIDApXCIpfXZhciBlPWEodGhpcyk7ZS5hZGRDbGFzcyhcInBhcmFsbGF4XCIpLGUuY2hpbGRyZW4oXCJpbWdcIikub25lKFwibG9hZFwiLGZ1bmN0aW9uKCl7ZCghMCl9KS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5jb21wbGV0ZSYmYSh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKX0pLGEod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtiPWEod2luZG93KS53aWR0aCgpLGQoITEpfSksYSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe2I9YSh3aW5kb3cpLndpZHRoKCksZCghMSl9KX0pfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17b25TaG93Om51bGwsc3dpcGVhYmxlOiExLHJlc3BvbnNpdmVUaHJlc2hvbGQ6MS8wfTtiPWEuZXh0ZW5kKGMsYik7dmFyIGQ9TWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoYSh0aGlzKSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZSxmLGcsaCxpLGo9ZCtjLGs9YSh0aGlzKSxsPWEod2luZG93KS53aWR0aCgpLG09ay5maW5kKFwibGkudGFiIGFcIiksbj1rLndpZHRoKCksbz1hKCkscD1NYXRoLm1heChuLGtbMF0uc2Nyb2xsV2lkdGgpL20ubGVuZ3RoLHE9cHJldl9pbmRleD0wLHI9ITEscz0zMDAsdD1mdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5jZWlsKG4tYS5wb3NpdGlvbigpLmxlZnQtYS5vdXRlcldpZHRoKCktay5zY3JvbGxMZWZ0KCkpfSx1PWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmZsb29yKGEucG9zaXRpb24oKS5sZWZ0K2suc2Nyb2xsTGVmdCgpKX0sdj1mdW5jdGlvbihhKXtxLWE+PTA/KGgudmVsb2NpdHkoe3JpZ2h0OnQoZSl9LHtkdXJhdGlvbjpzLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxoLnZlbG9jaXR5KHtsZWZ0OnUoZSl9LHtkdXJhdGlvbjpzLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsZGVsYXk6OTB9KSk6KGgudmVsb2NpdHkoe2xlZnQ6dShlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGgudmVsb2NpdHkoe3JpZ2h0OnQoZSl9LHtkdXJhdGlvbjpzLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsZGVsYXk6OTB9KSl9O2Iuc3dpcGVhYmxlJiZsPmIucmVzcG9uc2l2ZVRocmVzaG9sZCYmKGIuc3dpcGVhYmxlPSExKSxlPWEobS5maWx0ZXIoJ1tocmVmPVwiJytsb2NhdGlvbi5oYXNoKydcIl0nKSksMD09PWUubGVuZ3RoJiYoZT1hKHRoaXMpLmZpbmQoXCJsaS50YWIgYS5hY3RpdmVcIikuZmlyc3QoKSksMD09PWUubGVuZ3RoJiYoZT1hKHRoaXMpLmZpbmQoXCJsaS50YWIgYVwiKS5maXJzdCgpKSxlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHE9bS5pbmRleChlKSxxPDAmJihxPTApLHZvaWQgMCE9PWVbMF0mJihmPWEoZVswXS5oYXNoKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxrLmZpbmQoXCIuaW5kaWNhdG9yXCIpLmxlbmd0aHx8ay5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2Rpdj4nKSxoPWsuZmluZChcIi5pbmRpY2F0b3JcIiksay5hcHBlbmQoaCksay5pcyhcIjp2aXNpYmxlXCIpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aC5jc3Moe3JpZ2h0OnQoZSl9KSxoLmNzcyh7bGVmdDp1KGUpfSl9LDApLGEod2luZG93KS5vZmYoXCJyZXNpemUudGFicy1cIitqKS5vbihcInJlc2l6ZS50YWJzLVwiK2osZnVuY3Rpb24oKXtuPWsud2lkdGgoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgscTwwJiYocT0wKSwwIT09cCYmMCE9PW4mJihoLmNzcyh7cmlnaHQ6dChlKX0pLGguY3NzKHtsZWZ0OnUoZSl9KSl9KSxiLnN3aXBlYWJsZT8obS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YShNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO2IuYWRkQ2xhc3MoXCJjYXJvdXNlbC1pdGVtXCIpLG89by5hZGQoYil9KSxnPW8ud3JhcEFsbCgnPGRpdiBjbGFzcz1cInRhYnMtY29udGVudCBjYXJvdXNlbFwiPjwvZGl2PicpLG8uY3NzKFwiZGlzcGxheVwiLFwiXCIpLGEoXCIudGFicy1jb250ZW50LmNhcm91c2VsXCIpLmNhcm91c2VsKHtmdWxsV2lkdGg6ITAsbm9XcmFwOiEwLG9uQ3ljbGVUbzpmdW5jdGlvbihhKXtpZighcil7dmFyIGI9cTtxPWcuaW5kZXgoYSksZT1tLmVxKHEpLHYoYil9fX0pKTptLm5vdChlKS5lYWNoKGZ1bmN0aW9uKCl7YShNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLmhpZGUoKX0pLGsub2ZmKFwiY2xpY2sudGFic1wiKS5vbihcImNsaWNrLnRhYnNcIixcImFcIixmdW5jdGlvbihjKXtpZihhKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpcmV0dXJuIHZvaWQgYy5wcmV2ZW50RGVmYXVsdCgpO2lmKCFhKHRoaXMpLmF0dHIoXCJ0YXJnZXRcIikpe3I9ITAsbj1rLndpZHRoKCkscD1NYXRoLm1heChuLGtbMF0uc2Nyb2xsV2lkdGgpL20ubGVuZ3RoLGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIGQ9ZjtlPWEodGhpcyksZj1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSksbT1rLmZpbmQoXCJsaS50YWIgYVwiKTtlLnBvc2l0aW9uKCk7ZS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxwcmV2X2luZGV4PXEscT1tLmluZGV4KGEodGhpcykpLHE8MCYmKHE9MCksYi5zd2lwZWFibGU/by5sZW5ndGgmJm8uY2Fyb3VzZWwoXCJzZXRcIixxKToodm9pZCAwIT09ZiYmKGYuc2hvdygpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIiksXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vblNob3cmJmIub25TaG93LmNhbGwodGhpcyxmKSksdm9pZCAwPT09ZHx8ZC5pcyhmKXx8KGQuaGlkZSgpLGQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikpKSxpPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyPSExfSxzKSx2KHByZXZfaW5kZXgpLGMucHJldmVudERlZmF1bHQoKX19KX0pfSxzZWxlY3RfdGFiOmZ1bmN0aW9uKGEpe3RoaXMuZmluZCgnYVtocmVmPVwiIycrYSsnXCJdJykudHJpZ2dlcihcImNsaWNrXCIpfX07YS5mbi50YWJzPWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YWJzXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcInVsLnRhYnNcIikudGFicygpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi50b29sdGlwPWZ1bmN0aW9uKGMpe3ZhciBkPTUsZT17ZGVsYXk6MzUwLHRvb2x0aXA6XCJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGh0bWw6ITF9O3JldHVyblwicmVtb3ZlXCI9PT1jPyh0aGlzLmVhY2goZnVuY3Rpb24oKXthKFwiI1wiK2EodGhpcykuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSkucmVtb3ZlKCksYSh0aGlzKS5vZmYoXCJtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwXCIpfSksITEpOihjPWEuZXh0ZW5kKGUsYyksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9TWF0ZXJpYWxpemUuZ3VpZCgpLGY9YSh0aGlzKTtmLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikmJmEoXCIjXCIrZi5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpKS5yZW1vdmUoKSxmLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIixlKTt2YXIgZyxoLGksaixrLGwsbT1mdW5jdGlvbigpe2c9Zi5hdHRyKFwiZGF0YS1odG1sXCIpP1widHJ1ZVwiPT09Zi5hdHRyKFwiZGF0YS1odG1sXCIpOmMuaHRtbCxoPWYuYXR0cihcImRhdGEtZGVsYXlcIiksaD12b2lkIDA9PT1ofHxcIlwiPT09aD9jLmRlbGF5OmgsaT1mLmF0dHIoXCJkYXRhLXBvc2l0aW9uXCIpLGk9dm9pZCAwPT09aXx8XCJcIj09PWk/Yy5wb3NpdGlvbjppLGo9Zi5hdHRyKFwiZGF0YS10b29sdGlwXCIpLGo9dm9pZCAwPT09anx8XCJcIj09PWo/Yy50b29sdGlwOmp9O20oKTt2YXIgbj1mdW5jdGlvbigpe3ZhciBiPWEoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCI+PC9kaXY+Jyk7cmV0dXJuIGo9Zz9hKFwiPHNwYW4+PC9zcGFuPlwiKS5odG1sKGopOmEoXCI8c3Bhbj48L3NwYW4+XCIpLnRleHQoaiksYi5hcHBlbmQoaikuYXBwZW5kVG8oYShcImJvZHlcIikpLmF0dHIoXCJpZFwiLGUpLGw9YSgnPGRpdiBjbGFzcz1cImJhY2tkcm9wXCI+PC9kaXY+JyksbC5hcHBlbmRUbyhiKSxifTtrPW4oKSxmLm9mZihcIm1vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXBcIik7dmFyIG8scD0hMTtmLm9uKHtcIm1vdXNlZW50ZXIudG9vbHRpcFwiOmZ1bmN0aW9uKGEpe3ZhciBjPWZ1bmN0aW9uKCl7bSgpLHA9ITAsay52ZWxvY2l0eShcInN0b3BcIiksbC52ZWxvY2l0eShcInN0b3BcIiksay5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCIsbGVmdDpcIjBweFwiLHRvcDpcIjBweFwifSk7dmFyIGEsYyxlLGc9Zi5vdXRlcldpZHRoKCksaD1mLm91dGVySGVpZ2h0KCksaj1rLm91dGVySGVpZ2h0KCksbj1rLm91dGVyV2lkdGgoKSxvPVwiMHB4XCIscT1cIjBweFwiLHI9bFswXS5vZmZzZXRXaWR0aCxzPWxbMF0ub2Zmc2V0SGVpZ2h0LHQ9OCx1PTgsdj0wO1widG9wXCI9PT1pPyhhPWYub2Zmc2V0KCkudG9wLWotZCxjPWYub2Zmc2V0KCkubGVmdCtnLzItbi8yLGU9YihjLGEsbixqKSxvPVwiLTEwcHhcIixsLmNzcyh7Ym90dG9tOjAsbGVmdDowLGJvcmRlclJhZGl1czpcIjE0cHggMTRweCAwIDBcIix0cmFuc2Zvcm1PcmlnaW46XCI1MCUgMTAwJVwiLG1hcmdpblRvcDpqLG1hcmdpbkxlZnQ6bi8yLXIvMn0pKTpcImxlZnRcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3AraC8yLWovMixjPWYub2Zmc2V0KCkubGVmdC1uLWQsZT1iKGMsYSxuLGopLHE9XCItMTBweFwiLGwuY3NzKHt0b3A6XCItN3B4XCIscmlnaHQ6MCx3aWR0aDpcIjE0cHhcIixoZWlnaHQ6XCIxNHB4XCIsYm9yZGVyUmFkaXVzOlwiMTRweCAwIDAgMTRweFwiLHRyYW5zZm9ybU9yaWdpbjpcIjk1JSA1MCVcIixtYXJnaW5Ub3A6ai8yLG1hcmdpbkxlZnQ6bn0pKTpcInJpZ2h0XCI9PT1pPyhhPWYub2Zmc2V0KCkudG9wK2gvMi1qLzIsYz1mLm9mZnNldCgpLmxlZnQrZytkLGU9YihjLGEsbixqKSxxPVwiKzEwcHhcIixsLmNzcyh7dG9wOlwiLTdweFwiLGxlZnQ6MCx3aWR0aDpcIjE0cHhcIixoZWlnaHQ6XCIxNHB4XCIsYm9yZGVyUmFkaXVzOlwiMCAxNHB4IDE0cHggMFwiLHRyYW5zZm9ybU9yaWdpbjpcIjUlIDUwJVwiLG1hcmdpblRvcDpqLzIsbWFyZ2luTGVmdDpcIjBweFwifSkpOihhPWYub2Zmc2V0KCkudG9wK2Yub3V0ZXJIZWlnaHQoKStkLGM9Zi5vZmZzZXQoKS5sZWZ0K2cvMi1uLzIsZT1iKGMsYSxuLGopLG89XCIrMTBweFwiLGwuY3NzKHt0b3A6MCxsZWZ0OjAsbWFyZ2luTGVmdDpuLzItci8yfSkpLGsuY3NzKHt0b3A6ZS55LGxlZnQ6ZS54fSksdD1NYXRoLlNRUlQyKm4vcGFyc2VJbnQociksdT1NYXRoLlNRUlQyKmovcGFyc2VJbnQocyksdj1NYXRoLm1heCh0LHUpLGsudmVsb2NpdHkoe3RyYW5zbGF0ZVk6byx0cmFuc2xhdGVYOnF9LHtkdXJhdGlvbjozNTAscXVldWU6ITF9KS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGRlbGF5OjUwLHF1ZXVlOiExfSksbC5jc3Moe3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTUsZGVsYXk6MCxxdWV1ZTohMX0pLnZlbG9jaXR5KHtzY2FsZVg6dixzY2FsZVk6dn0se2R1cmF0aW9uOjMwMCxkZWxheTowLHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIn0pfTtvPXNldFRpbWVvdXQoYyxoKX0sXCJtb3VzZWxlYXZlLnRvb2x0aXBcIjpmdW5jdGlvbigpe3A9ITEsY2xlYXJUaW1lb3V0KG8pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtwIT09ITAmJihrLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWTowLHRyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjIyNSxxdWV1ZTohMX0pLGwudmVsb2NpdHkoe29wYWNpdHk6MCxzY2FsZVg6MSxzY2FsZVk6MX0se2R1cmF0aW9uOjIyNSxxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2wuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxrLmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSkscD0hMX19KSl9LDIyNSl9fSl9KSl9O3ZhciBiPWZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmPWIsZz1jO3JldHVybiBmPDA/Zj00OmYrZD53aW5kb3cuaW5uZXJXaWR0aCYmKGYtPWYrZC13aW5kb3cuaW5uZXJXaWR0aCksZzwwP2c9NDpnK2U+d2luZG93LmlubmVySGVpZ2h0K2Eod2luZG93KS5zY3JvbGxUb3AmJihnLT1nK2Utd2luZG93LmlubmVySGVpZ2h0KSx7eDpmLHk6Z319O2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi50b29sdGlwcGVkXCIpLnRvb2x0aXAoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSl7cmV0dXJuIG51bGwhPT1hJiZhPT09YS53aW5kb3d9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYihhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fWZ1bmN0aW9uIGQoYSl7dmFyIGIsZCxlPXt0b3A6MCxsZWZ0OjB9LGY9YSYmYS5vd25lckRvY3VtZW50O3JldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCYmKGU9YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksZD1jKGYpLHt0b3A6ZS50b3ArZC5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtkLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH19ZnVuY3Rpb24gZShhKXt2YXIgYj1cIlwiO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiKz1jK1wiOlwiK2FbY10rXCI7XCIpO3JldHVybiBifWZ1bmN0aW9uIGYoYSl7aWYoay5hbGxvd0V2ZW50KGEpPT09ITEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPW51bGwsYz1hLnRhcmdldHx8YS5zcmNFbGVtZW50O251bGwhPT1jLnBhcmVudEVsZW1lbnQ7KXtpZighKGMgaW5zdGFuY2VvZiBTVkdFbGVtZW50fHxjLmNsYXNzTmFtZS5pbmRleE9mKFwid2F2ZXMtZWZmZWN0XCIpPT09LTEpKXtiPWM7YnJlYWt9aWYoYy5jbGFzc0xpc3QuY29udGFpbnMoXCJ3YXZlcy1lZmZlY3RcIikpe2I9YzticmVha31jPWMucGFyZW50RWxlbWVudH1yZXR1cm4gYn1mdW5jdGlvbiBnKGIpe3ZhciBjPWYoYik7bnVsbCE9PWMmJihqLnNob3coYixjKSxcIm9udG91Y2hzdGFydFwiaW4gYSYmKGMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsai5oaWRlLCExKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLGouaGlkZSwhMSkpLGMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixqLmhpZGUsITEpLGMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixqLmhpZGUsITEpKX12YXIgaD1ofHx7fSxpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCksaj17ZHVyYXRpb246NzUwLHNob3c6ZnVuY3Rpb24oYSxiKXtpZigyPT09YS5idXR0b24pcmV0dXJuITE7dmFyIGM9Ynx8dGhpcyxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5jbGFzc05hbWU9XCJ3YXZlcy1yaXBwbGVcIixjLmFwcGVuZENoaWxkKGYpO3ZhciBnPWQoYyksaD1hLnBhZ2VZLWcudG9wLGk9YS5wYWdlWC1nLmxlZnQsaz1cInNjYWxlKFwiK2MuY2xpZW50V2lkdGgvMTAwKjEwK1wiKVwiO1widG91Y2hlc1wiaW4gYSYmKGg9YS50b3VjaGVzWzBdLnBhZ2VZLWcudG9wLGk9YS50b3VjaGVzWzBdLnBhZ2VYLWcubGVmdCksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhvbGRcIixEYXRlLm5vdygpKSxmLnNldEF0dHJpYnV0ZShcImRhdGEtc2NhbGVcIixrKSxmLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLGkpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsaCk7dmFyIGw9e3RvcDpoK1wicHhcIixsZWZ0OmkrXCJweFwifTtmLmNsYXNzTmFtZT1mLmNsYXNzTmFtZStcIiB3YXZlcy1ub3RyYW5zaXRpb25cIixmLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZShsKSksZi5jbGFzc05hbWU9Zi5jbGFzc05hbWUucmVwbGFjZShcIndhdmVzLW5vdHJhbnNpdGlvblwiLFwiXCIpLGxbXCItd2Via2l0LXRyYW5zZm9ybVwiXT1rLGxbXCItbW96LXRyYW5zZm9ybVwiXT1rLGxbXCItbXMtdHJhbnNmb3JtXCJdPWssbFtcIi1vLXRyYW5zZm9ybVwiXT1rLGwudHJhbnNmb3JtPWssbC5vcGFjaXR5PVwiMVwiLGxbXCItd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcIi1tb3otdHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1wiLW8tdHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1widHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1wiLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixsW1wiLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixsW1wiLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGYuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGwpKX0saGlkZTpmdW5jdGlvbihhKXtrLnRvdWNodXAoYSk7dmFyIGI9dGhpcyxjPSgxLjQqYi5jbGllbnRXaWR0aCxudWxsKSxkPWIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndhdmVzLXJpcHBsZVwiKTtpZighKGQubGVuZ3RoPjApKXJldHVybiExO2M9ZFtkLmxlbmd0aC0xXTt2YXIgZj1jLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSxnPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpLGg9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjYWxlXCIpLGk9RGF0ZS5ub3coKS1OdW1iZXIoYy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhvbGRcIikpLGw9MzUwLWk7bDwwJiYobD0wKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9e3RvcDpnK1wicHhcIixsZWZ0OmYrXCJweFwiLG9wYWNpdHk6XCIwXCIsXCItd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcIi1tb3otdHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwiLW8tdHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwidHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpoLFwiLW1vei10cmFuc2Zvcm1cIjpoLFwiLW1zLXRyYW5zZm9ybVwiOmgsXCItby10cmFuc2Zvcm1cIjpoLHRyYW5zZm9ybTpofTtjLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZShhKSksc2V0VGltZW91dChmdW5jdGlvbigpe3RyeXtiLnJlbW92ZUNoaWxkKGMpfWNhdGNoKGEpe3JldHVybiExfX0sai5kdXJhdGlvbil9LGwpfSx3cmFwSW5wdXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoXCJpbnB1dFwiPT09Yy50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBkPWMucGFyZW50Tm9kZTtpZihcImlcIj09PWQudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiZkLmNsYXNzTmFtZS5pbmRleE9mKFwid2F2ZXMtZWZmZWN0XCIpIT09LTEpY29udGludWU7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7ZS5jbGFzc05hbWU9Yy5jbGFzc05hbWUrXCIgd2F2ZXMtaW5wdXQtd3JhcHBlclwiO3ZhciBmPWMuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7Znx8KGY9XCJcIiksZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGYpLGMuY2xhc3NOYW1lPVwid2F2ZXMtYnV0dG9uLWlucHV0XCIsYy5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSxkLnJlcGxhY2VDaGlsZChlLGMpLGUuYXBwZW5kQ2hpbGQoYyl9fX19LGs9e3RvdWNoZXM6MCxhbGxvd0V2ZW50OmZ1bmN0aW9uKGEpe3ZhciBiPSEwO3JldHVyblwidG91Y2hzdGFydFwiPT09YS50eXBlP2sudG91Y2hlcys9MTpcInRvdWNoZW5kXCI9PT1hLnR5cGV8fFwidG91Y2hjYW5jZWxcIj09PWEudHlwZT9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay50b3VjaGVzPjAmJihrLnRvdWNoZXMtPTEpfSw1MDApOlwibW91c2Vkb3duXCI9PT1hLnR5cGUmJmsudG91Y2hlcz4wJiYoYj0hMSksYn0sdG91Y2h1cDpmdW5jdGlvbihhKXtrLmFsbG93RXZlbnQoYSl9fTtoLmRpc3BsYXlFZmZlY3Q9ZnVuY3Rpb24oYil7Yj1ifHx7fSxcImR1cmF0aW9uXCJpbiBiJiYoai5kdXJhdGlvbj1iLmR1cmF0aW9uKSxqLndyYXBJbnB1dChpKFwiLndhdmVzLWVmZmVjdFwiKSksXCJvbnRvdWNoc3RhcnRcImluIGEmJmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSxkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixnLCExKX0saC5hdHRhY2g9ZnVuY3Rpb24oYil7XCJpbnB1dFwiPT09Yi50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJihqLndyYXBJbnB1dChbYl0pLGI9Yi5wYXJlbnRFbGVtZW50KSxcIm9udG91Y2hzdGFydFwiaW4gYSYmYi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpLGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGcsITEpfSxhLldhdmVzPWgsZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe2guZGlzcGxheUVmZmVjdCgpfSwhMSl9KHdpbmRvdyksTWF0ZXJpYWxpemUudG9hc3Q9ZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGIuY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpLGMpZm9yKHZhciBlPWMuc3BsaXQoXCIgXCIpLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspYi5jbGFzc0xpc3QuYWRkKGVbZl0pOyhcIm9iamVjdFwiPT10eXBlb2YgSFRNTEVsZW1lbnQ/YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OmEmJlwib2JqZWN0XCI9PXR5cGVvZiBhJiZudWxsIT09YSYmMT09PWEubm9kZVR5cGUmJlwic3RyaW5nXCI9PXR5cGVvZiBhLm5vZGVOYW1lKT9iLmFwcGVuZENoaWxkKGEpOmEgaW5zdGFuY2VvZiBqUXVlcnk/Yi5hcHBlbmRDaGlsZChhWzBdKTpiLmlubmVySFRNTD1hO3ZhciBoPW5ldyBIYW1tZXIoYix7cHJldmVudF9kZWZhdWx0OiExfSk7cmV0dXJuIGgub24oXCJwYW5cIixmdW5jdGlvbihhKXt2YXIgYz1hLmRlbHRhWCxkPTgwO2IuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFubmluZ1wiKXx8Yi5jbGFzc0xpc3QuYWRkKFwicGFubmluZ1wiKTt2YXIgZT0xLU1hdGguYWJzKGMvZCk7ZTwwJiYoZT0wKSxWZWwoYix7bGVmdDpjLG9wYWNpdHk6ZX0se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX0pLGgub24oXCJwYW5lbmRcIixmdW5jdGlvbihhKXt2YXIgYz1hLmRlbHRhWCxlPTgwO01hdGguYWJzKGMpPmU/VmVsKGIse21hcmdpblRvcDpcIi00MHB4XCJ9LHtkdXJhdGlvbjozNzUsZWFzaW5nOlwiZWFzZU91dEV4cG9cIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmQoKSxiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9fSk6KGIuY2xhc3NMaXN0LnJlbW92ZShcInBhbm5pbmdcIiksVmVsKGIse2xlZnQ6MCxvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEV4cG9cIixxdWV1ZTohMX0pKX0pLGJ9Yz1jfHxcIlwiO3ZhciBmPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9hc3QtY29udGFpbmVyXCIpO251bGw9PT1mJiYoZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGYuaWQ9XCJ0b2FzdC1jb250YWluZXJcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpKTt2YXIgZz1lKGEpO2EmJmYuYXBwZW5kQ2hpbGQoZyksZy5zdHlsZS5vcGFjaXR5PTAsVmVsKGcse3RyYW5zbGF0ZVk6XCItMzVweFwiLG9wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixxdWV1ZTohMX0pO3ZhciBoLGk9YjtudWxsIT1pJiYoaD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe251bGw9PT1nLnBhcmVudE5vZGUmJndpbmRvdy5jbGVhckludGVydmFsKGgpLGcuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFubmluZ1wiKXx8KGktPTIwKSxpPD0wJiYoVmVsKGcse29wYWNpdHk6MCxtYXJnaW5Ub3A6XCItNDBweFwifSx7ZHVyYXRpb246Mzc1LGVhc2luZzpcImVhc2VPdXRFeHBvXCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZkKCksdGhpc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNbMF0pfX0pLHdpbmRvdy5jbGVhckludGVydmFsKGgpKX0sMjApKX0sZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e21lbnVXaWR0aDozMDAsZWRnZTpcImxlZnRcIixjbG9zZU9uQ2xpY2s6ITEsZHJhZ2dhYmxlOiEwfTtiPWEuZXh0ZW5kKGMsYiksYSh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpLGU9YShcIiNcIitkKTszMDAhPWIubWVudVdpZHRoJiZlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpO3ZhciBmPWEoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInK2QrJ1wiXScpO2IuZHJhZ2dhYmxlPyhmLmxlbmd0aCYmZi5yZW1vdmUoKSxmPWEoJzxkaXYgY2xhc3M9XCJkcmFnLXRhcmdldFwiPjwvZGl2PicpLmF0dHIoXCJkYXRhLXNpZGVuYXZcIixkKSxhKFwiYm9keVwiKS5hcHBlbmQoZikpOmY9YSgpLFwibGVmdFwiPT1iLmVkZ2U/KGUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKC0xMDAlKVwiKSxmLmNzcyh7bGVmdDowfSkpOihlLmFkZENsYXNzKFwicmlnaHQtYWxpZ25lZFwiKS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMTAwJSlcIiksZi5jc3Moe3JpZ2h0OjB9KSksZS5oYXNDbGFzcyhcImZpeGVkXCIpJiZ3aW5kb3cuaW5uZXJXaWR0aD45OTImJmUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDApXCIpLGUuaGFzQ2xhc3MoXCJmaXhlZFwiKSYmYSh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe3dpbmRvdy5pbm5lcldpZHRoPjk5Mj8wIT09YShcIiNzaWRlbmF2LW92ZXJsYXlcIikubGVuZ3RoJiZpP2coITApOmUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDAlKVwiKTppPT09ITEmJihcImxlZnRcIj09PWIuZWRnZT9lLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgtMTAwJSlcIik6ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMTAwJSlcIikpfSksYi5jbG9zZU9uQ2xpY2s9PT0hMCYmZS5vbihcImNsaWNrLml0ZW1jbGlja1wiLFwiYTpub3QoLmNvbGxhcHNpYmxlLWhlYWRlcilcIixmdW5jdGlvbigpe2coKX0pO3ZhciBnPWZ1bmN0aW9uKGMpe2g9ITEsaT0hMSxhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSksXCJsZWZ0XCI9PT1iLmVkZ2U/KGYuY3NzKHt3aWR0aDpcIlwiLHJpZ2h0OlwiXCIsbGVmdDpcIjBcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCItMTAwJVwifSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Yz09PSEwJiYoZS5yZW1vdmVBdHRyKFwic3R5bGVcIiksZS5jc3MoXCJ3aWR0aFwiLGIubWVudVdpZHRoKSl9fSkpOihmLmNzcyh7d2lkdGg6XCJcIixyaWdodDpcIjBcIixsZWZ0OlwiXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiMTAwJVwifSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Yz09PSEwJiYoZS5yZW1vdmVBdHRyKFwic3R5bGVcIiksZS5jc3MoXCJ3aWR0aFwiLGIubWVudVdpZHRoKSl9fSkpfSxoPSExLGk9ITE7Yi5kcmFnZ2FibGUmJihmLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2kmJmcoKX0pLGYuaGFtbWVyKHtwcmV2ZW50X2RlZmF1bHQ6ITF9KS5iaW5kKFwicGFuXCIsZnVuY3Rpb24oYyl7aWYoXCJ0b3VjaFwiPT1jLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBkPShjLmdlc3R1cmUuZGlyZWN0aW9uLGMuZ2VzdHVyZS5jZW50ZXIueCksZj0oYy5nZXN0dXJlLmNlbnRlci55LGMuZ2VzdHVyZS52ZWxvY2l0eVgsYShcImJvZHlcIikpLGg9YShcIiNzaWRlbmF2LW92ZXJsYXlcIiksaj1mLmlubmVyV2lkdGgoKTtpZihmLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksZi53aWR0aChqKSwwPT09aC5sZW5ndGgmJihoPWEoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKSxoLmNzcyhcIm9wYWNpdHlcIiwwKS5jbGljayhmdW5jdGlvbigpe2coKX0pLGEoXCJib2R5XCIpLmFwcGVuZChoKSksXCJsZWZ0XCI9PT1iLmVkZ2UmJihkPmIubWVudVdpZHRoP2Q9Yi5tZW51V2lkdGg6ZDwwJiYoZD0wKSksXCJsZWZ0XCI9PT1iLmVkZ2UpZDxiLm1lbnVXaWR0aC8yP2k9ITE6ZD49Yi5tZW51V2lkdGgvMiYmKGk9ITApLGUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKFwiKyhkLWIubWVudVdpZHRoKStcInB4KVwiKTtlbHNle2Q8d2luZG93LmlubmVyV2lkdGgtYi5tZW51V2lkdGgvMj9pPSEwOmQ+PXdpbmRvdy5pbm5lcldpZHRoLWIubWVudVdpZHRoLzImJihpPSExKTt2YXIgaz1kLWIubWVudVdpZHRoLzI7azwwJiYoaz0wKSxlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitrK1wicHgpXCIpfXZhciBsO1wibGVmdFwiPT09Yi5lZGdlPyhsPWQvYi5tZW51V2lkdGgsaC52ZWxvY2l0eSh7b3BhY2l0eTpsfSx7ZHVyYXRpb246MTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKToobD1NYXRoLmFicygoZC13aW5kb3cuaW5uZXJXaWR0aCkvYi5tZW51V2lkdGgpLGgudmVsb2NpdHkoe29wYWNpdHk6bH0se2R1cmF0aW9uOjEwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGMpe2lmKFwidG91Y2hcIj09Yy5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZD1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKSxnPWMuZ2VzdHVyZS52ZWxvY2l0eVgsaj1jLmdlc3R1cmUuY2VudGVyLngsaz1qLWIubWVudVdpZHRoLGw9ai1iLm1lbnVXaWR0aC8yO2s+MCYmKGs9MCksbDwwJiYobD0wKSxoPSExLFwibGVmdFwiPT09Yi5lZGdlP2kmJmc8PS4zfHxnPC0uNT8oMCE9PWsmJmUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsa119LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDowLGxlZnQ6XCJcIn0pLGk9ITApOighaXx8Zz4uMykmJihhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6Wy0xKmIubWVudVdpZHRoLTEwLGtdfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSksZi5jc3Moe3dpZHRoOlwiMTBweFwiLHJpZ2h0OlwiXCIsbGVmdDowfSkpOmkmJmc+PS0uM3x8Zz4uNT8oMCE9PWwmJmUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsbF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDpcIlwiLGxlZnQ6MH0pLGk9ITApOighaXx8ZzwtLjMpJiYoYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOltiLm1lbnVXaWR0aCsxMCxsXX0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pLGYuY3NzKHt3aWR0aDpcIjEwcHhcIixyaWdodDowLGxlZnQ6XCJcIn0pKX19KSksYy5vZmYoXCJjbGljay5zaWRlbmF2XCIpLm9uKFwiY2xpY2suc2lkZW5hdlwiLGZ1bmN0aW9uKCl7aWYoaT09PSEwKWk9ITEsaD0hMSxnKCk7ZWxzZXt2YXIgYz1hKFwiYm9keVwiKSxkPWEoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKSxqPWMuaW5uZXJXaWR0aCgpO2MuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxjLndpZHRoKGopLGEoXCJib2R5XCIpLmFwcGVuZChmKSxcImxlZnRcIj09PWIuZWRnZT8oZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6MCxsZWZ0OlwiXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLC0xKmIubWVudVdpZHRoXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpOihmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDpcIlwiLGxlZnQ6MH0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsYi5tZW51V2lkdGhdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSksZC5jc3MoXCJvcGFjaXR5XCIsMCkuY2xpY2soZnVuY3Rpb24oKXtpPSExLGg9ITEsZygpLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KX0pLGEoXCJib2R5XCIpLmFwcGVuZChkKSxkLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2k9ITAsaD0hMX19KX1yZXR1cm4hMX0pfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgYj1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKSxjPWEoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInK2EodGhpcykuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKydcIl0nKTtiLnRyaWdnZXIoXCJjbGlja1wiKSxjLnJlbW92ZSgpLGEodGhpcykub2ZmKFwiY2xpY2tcIiksYi5yZW1vdmUoKX0sc2hvdzpmdW5jdGlvbigpe3RoaXMudHJpZ2dlcihcImNsaWNrXCIpfSxoaWRlOmZ1bmN0aW9uKCl7YShcIiNzaWRlbmF2LW92ZXJsYXlcIikudHJpZ2dlcihcImNsaWNrXCIpfX07YS5mbi5zaWRlTmF2PWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zaWRlTmF2XCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYixjLGQsZSl7dmFyIGc9YSgpO3JldHVybiBhLmVhY2goZixmdW5jdGlvbihhLGYpe2lmKGYuaGVpZ2h0KCk+MCl7dmFyIGg9Zi5vZmZzZXQoKS50b3AsaT1mLm9mZnNldCgpLmxlZnQsaj1pK2Yud2lkdGgoKSxrPWgrZi5oZWlnaHQoKSxsPSEoaT5jfHxqPGV8fGg+ZHx8azxiKTtsJiZnLnB1c2goZil9fSksZ31mdW5jdGlvbiBjKGMpeysraTt2YXIgZD1lLnNjcm9sbFRvcCgpLGY9ZS5zY3JvbGxMZWZ0KCksaD1mK2Uud2lkdGgoKSxrPWQrZS5oZWlnaHQoKSxsPWIoZCtqLnRvcCtjfHwyMDAsaCtqLnJpZ2h0LGsrai5ib3R0b20sZitqLmxlZnQpO2EuZWFjaChsLGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIpO1wibnVtYmVyXCIhPXR5cGVvZiBjJiZiLnRyaWdnZXJIYW5kbGVyKFwic2Nyb2xsU3B5OmVudGVyXCIpLGIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiLGkpfSksYS5lYWNoKGcsZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIik7XCJudW1iZXJcIj09dHlwZW9mIGMmJmMhPT1pJiYoYi50cmlnZ2VySGFuZGxlcihcInNjcm9sbFNweTpleGl0XCIpLGIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiLG51bGwpKX0pLGc9bH1mdW5jdGlvbiBkKCl7ZS50cmlnZ2VyKFwic2Nyb2xsU3B5OndpblNpemVcIil9dmFyIGU9YSh3aW5kb3cpLGY9W10sZz1bXSxoPSExLGk9MCxqPXt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH07YS5zY3JvbGxTcHk9ZnVuY3Rpb24oYixkKXt2YXIgZz17dGhyb3R0bGU6MTAwLHNjcm9sbE9mZnNldDoyMDB9O2Q9YS5leHRlbmQoZyxkKTt2YXIgaT1bXTtiPWEoYiksYi5lYWNoKGZ1bmN0aW9uKGIsYyl7Zi5wdXNoKGEoYykpLGEoYykuZGF0YShcInNjcm9sbFNweTppZFwiLGIpLGEoJ2FbaHJlZj1cIiMnK2EoYykuYXR0cihcImlkXCIpKydcIl0nKS5jbGljayhmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9YShNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLm9mZnNldCgpLnRvcCsxO2EoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDpjLWQuc2Nyb2xsT2Zmc2V0fSx7ZHVyYXRpb246NDAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRDdWJpY1wifSl9KX0pLGoudG9wPWQub2Zmc2V0VG9wfHwwLGoucmlnaHQ9ZC5vZmZzZXRSaWdodHx8MCxqLmJvdHRvbT1kLm9mZnNldEJvdHRvbXx8MCxqLmxlZnQ9ZC5vZmZzZXRMZWZ0fHwwO3ZhciBrPU1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCl7YyhkLnNjcm9sbE9mZnNldCl9LGQudGhyb3R0bGV8fDEwMCksbD1mdW5jdGlvbigpe2EoZG9jdW1lbnQpLnJlYWR5KGspfTtyZXR1cm4gaHx8KGUub24oXCJzY3JvbGxcIixsKSxlLm9uKFwicmVzaXplXCIsbCksaD0hMCksc2V0VGltZW91dChsLDApLGIub24oXCJzY3JvbGxTcHk6ZW50ZXJcIixmdW5jdGlvbigpe2k9YS5ncmVwKGksZnVuY3Rpb24oYSl7cmV0dXJuIDAhPWEuaGVpZ2h0KCl9KTt2YXIgYj1hKHRoaXMpO2lbMF0/KGEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLmRhdGEoXCJzY3JvbGxTcHk6aWRcIik8aVswXS5kYXRhKFwic2Nyb2xsU3B5OmlkXCIpP2kudW5zaGlmdChhKHRoaXMpKTppLnB1c2goYSh0aGlzKSkpOmkucHVzaChhKHRoaXMpKSxhKCdhW2hyZWY9XCIjJytpWzBdLmF0dHIoXCJpZFwiKSsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSxiLm9uKFwic2Nyb2xsU3B5OmV4aXRcIixmdW5jdGlvbigpe2lmKGk9YS5ncmVwKGksZnVuY3Rpb24oYSl7cmV0dXJuIDAhPWEuaGVpZ2h0KCl9KSxpWzBdKXthKCdhW2hyZWY9XCIjJytpWzBdLmF0dHIoXCJpZFwiKSsnXCJdJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIGI9YSh0aGlzKTtpPWEuZ3JlcChpLGZ1bmN0aW9uKGEpe3JldHVybiBhLmF0dHIoXCJpZFwiKSE9Yi5hdHRyKFwiaWRcIil9KSxpWzBdJiZhKCdhW2hyZWY9XCIjJytpWzBdLmF0dHIoXCJpZFwiKSsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIil9fSksYn0sYS53aW5TaXplU3B5PWZ1bmN0aW9uKGIpe3JldHVybiBhLndpblNpemVTcHk9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sYj1ifHx7dGhyb3R0bGU6MTAwfSxlLm9uKFwicmVzaXplXCIsTWF0ZXJpYWxpemUudGhyb3R0bGUoZCxiLnRocm90dGxlfHwxMDApKX0sYS5mbi5zY3JvbGxTcHk9ZnVuY3Rpb24oYil7cmV0dXJuIGEuc2Nyb2xsU3B5KGEodGhpcyksYil9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXt2YXIgYz1iLmNzcyhcImZvbnQtZmFtaWx5XCIpLGQ9Yi5jc3MoXCJmb250LXNpemVcIiksZj1iLmNzcyhcImxpbmUtaGVpZ2h0XCIpO2QmJmUuY3NzKFwiZm9udC1zaXplXCIsZCksYyYmZS5jc3MoXCJmb250LWZhbWlseVwiLGMpLGYmJmUuY3NzKFwibGluZS1oZWlnaHRcIixmKSxcIm9mZlwiPT09Yi5hdHRyKFwid3JhcFwiKSYmZS5jc3MoXCJvdmVyZmxvdy13cmFwXCIsXCJub3JtYWxcIikuY3NzKFwid2hpdGUtc3BhY2VcIixcInByZVwiKSxlLnRleHQoYi52YWwoKStcIlxcblwiKTt2YXIgZz1lLmh0bWwoKS5yZXBsYWNlKC9cXG4vZyxcIjxicj5cIik7ZS5odG1sKGcpLGIuaXMoXCI6dmlzaWJsZVwiKT9lLmNzcyhcIndpZHRoXCIsYi53aWR0aCgpKTplLmNzcyhcIndpZHRoXCIsYSh3aW5kb3cpLndpZHRoKCkvMiksYi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpPD1lLmhlaWdodCgpP2IuY3NzKFwiaGVpZ2h0XCIsZS5oZWlnaHQoKSk6Yi52YWwoKS5sZW5ndGg8Yi5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIpJiZiLmNzcyhcImhlaWdodFwiLGIuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKSksYi5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsYi52YWwoKS5sZW5ndGgpfU1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHM9ZnVuY3Rpb24oKXt2YXIgYj1cImlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYVwiO2EoYikuZWFjaChmdW5jdGlvbihiLGMpe3ZhciBkPWEodGhpcyk7YShjKS52YWwoKS5sZW5ndGg+MHx8Yy5hdXRvZm9jdXN8fHZvaWQgMCE9PWQuYXR0cihcInBsYWNlaG9sZGVyXCIpP2Quc2libGluZ3MoXCJsYWJlbFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTphKGMpWzBdLnZhbGlkaXR5P2Quc2libGluZ3MoXCJsYWJlbFwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLGEoYylbMF0udmFsaWRpdHkuYmFkSW5wdXQ9PT0hMCk6ZC5zaWJsaW5ncyhcImxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSl9O3ZhciBjPVwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhXCI7YShkb2N1bWVudCkub24oXCJjaGFuZ2VcIixjLGZ1bmN0aW9uKCl7MD09PWEodGhpcykudmFsKCkubGVuZ3RoJiZ2b2lkIDA9PT1hKHRoaXMpLmF0dHIoXCJwbGFjZWhvbGRlclwiKXx8YSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLHZhbGlkYXRlX2ZpZWxkKGEodGhpcykpfSksYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzKCl9KSxhKGRvY3VtZW50KS5vbihcInJlc2V0XCIsZnVuY3Rpb24oYil7dmFyIGQ9YShiLnRhcmdldCk7ZC5pcyhcImZvcm1cIikmJihkLmZpbmQoYykucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIiksZC5maW5kKGMpLmVhY2goZnVuY3Rpb24oKXtcIlwiPT09YSh0aGlzKS5hdHRyKFwidmFsdWVcIikmJmEodGhpcykuc2libGluZ3MoXCJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLGQuZmluZChcInNlbGVjdC5pbml0aWFsaXplZFwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGE9ZC5maW5kKFwib3B0aW9uW3NlbGVjdGVkXVwiKS50ZXh0KCk7ZC5zaWJsaW5ncyhcImlucHV0LnNlbGVjdC1kcm9wZG93blwiKS52YWwoYSl9KSl9KSxhKGRvY3VtZW50KS5vbihcImZvY3VzXCIsYyxmdW5jdGlvbigpe2EodGhpcykuc2libGluZ3MoXCJsYWJlbCwgLnByZWZpeFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLGEoZG9jdW1lbnQpLm9uKFwiYmx1clwiLGMsZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGM9XCIucHJlZml4XCI7MD09PWIudmFsKCkubGVuZ3RoJiZiWzBdLnZhbGlkaXR5LmJhZElucHV0IT09ITAmJnZvaWQgMD09PWIuYXR0cihcInBsYWNlaG9sZGVyXCIpJiYoYys9XCIsIGxhYmVsXCIpLGIuc2libGluZ3MoYykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksdmFsaWRhdGVfZmllbGQoYil9KSx3aW5kb3cudmFsaWRhdGVfZmllbGQ9ZnVuY3Rpb24oYSl7dmFyIGI9dm9pZCAwIT09YS5hdHRyKFwiZGF0YS1sZW5ndGhcIiksYz1wYXJzZUludChhLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSksZD1hLnZhbCgpLmxlbmd0aDswPT09YS52YWwoKS5sZW5ndGgmJmFbMF0udmFsaWRpdHkuYmFkSW5wdXQ9PT0hMT9hLmhhc0NsYXNzKFwidmFsaWRhdGVcIikmJihhLnJlbW92ZUNsYXNzKFwidmFsaWRcIiksYS5yZW1vdmVDbGFzcyhcImludmFsaWRcIikpOmEuaGFzQ2xhc3MoXCJ2YWxpZGF0ZVwiKSYmKGEuaXMoXCI6dmFsaWRcIikmJmImJmQ8PWN8fGEuaXMoXCI6dmFsaWRcIikmJiFiPyhhLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSxhLmFkZENsYXNzKFwidmFsaWRcIikpOihhLnJlbW92ZUNsYXNzKFwidmFsaWRcIiksYS5hZGRDbGFzcyhcImludmFsaWRcIikpKX07dmFyIGQ9XCJpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF1cIjthKGRvY3VtZW50KS5vbihcImtleXVwLnJhZGlvXCIsZCxmdW5jdGlvbihiKXtpZig5PT09Yi53aGljaCl7YSh0aGlzKS5hZGRDbGFzcyhcInRhYmJlZFwiKTt2YXIgYz1hKHRoaXMpO3JldHVybiB2b2lkIGMub25lKFwiYmx1clwiLGZ1bmN0aW9uKGIpe2EodGhpcykucmVtb3ZlQ2xhc3MoXCJ0YWJiZWRcIil9KX19KTt2YXIgZT1hKFwiLmhpZGRlbmRpdlwiKS5maXJzdCgpO2UubGVuZ3RofHwoZT1hKCc8ZGl2IGNsYXNzPVwiaGlkZGVuZGl2IGNvbW1vblwiPjwvZGl2PicpLGEoXCJib2R5XCIpLmFwcGVuZChlKSk7dmFyIGY9XCIubWF0ZXJpYWxpemUtdGV4dGFyZWFcIjthKGYpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2IuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiLGIuaGVpZ2h0KCkpLGIuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiLGIudmFsKCkubGVuZ3RoKX0pLGEoXCJib2R5XCIpLm9uKFwia2V5dXAga2V5ZG93biBhdXRvcmVzaXplXCIsZixmdW5jdGlvbigpe2IoYSh0aGlzKSl9KSxhKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCcuZmlsZS1maWVsZCBpbnB1dFt0eXBlPVwiZmlsZVwiXScsZnVuY3Rpb24oKXtmb3IodmFyIGI9YSh0aGlzKS5jbG9zZXN0KFwiLmZpbGUtZmllbGRcIiksYz1iLmZpbmQoXCJpbnB1dC5maWxlLXBhdGhcIiksZD1hKHRoaXMpWzBdLmZpbGVzLGU9W10sZj0wO2Y8ZC5sZW5ndGg7ZisrKWUucHVzaChkW2ZdLm5hbWUpO2MudmFsKGUuam9pbihcIiwgXCIpKSxjLnRyaWdnZXIoXCJjaGFuZ2VcIil9KTt2YXIgZz1cImlucHV0W3R5cGU9cmFuZ2VdXCIsaD0hMTthKGcpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7YSh0aGlzKS5hZnRlcihiKX0pO3ZhciBpPWZ1bmN0aW9uKGEpe3ZhciBiPXBhcnNlSW50KGEucGFyZW50KCkuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSxjPS03K2IrXCJweFwiO2EudmVsb2NpdHkoe2hlaWdodDpcIjMwcHhcIix3aWR0aDpcIjMwcHhcIix0b3A6XCItMzBweFwiLG1hcmdpbkxlZnQ6Y30se2R1cmF0aW9uOjMwMCxlYXNpbmc6XCJlYXNlT3V0RXhwb1wifSl9LGo9ZnVuY3Rpb24oYSl7dmFyIGI9YS53aWR0aCgpLTE1LGM9cGFyc2VGbG9hdChhLmF0dHIoXCJtYXhcIikpLGQ9cGFyc2VGbG9hdChhLmF0dHIoXCJtaW5cIikpLGU9KHBhcnNlRmxvYXQoYS52YWwoKSktZCkvKGMtZCk7cmV0dXJuIGUqYn0saz1cIi5yYW5nZS1maWVsZFwiO2EoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsZyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLnNpYmxpbmdzKFwiLnRodW1iXCIpO2MuZmluZChcIi52YWx1ZVwiKS5odG1sKGEodGhpcykudmFsKCkpLGMuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyk7dmFyIGQ9aihhKHRoaXMpKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixkKX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixnLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuc2libGluZ3MoXCIudGh1bWJcIik7aWYoYy5sZW5ndGg8PTAmJihjPWEoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKSxhKHRoaXMpLmFmdGVyKGMpKSxjLmZpbmQoXCIudmFsdWVcIikuaHRtbChhKHRoaXMpLnZhbCgpKSxoPSEwLGEodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKSxcImlucHV0XCIhPT1iLnR5cGUpe3ZhciBkPWooYSh0aGlzKSk7Yy5hZGRDbGFzcyhcImFjdGl2ZVwiKS5jc3MoXCJsZWZ0XCIsZCl9fSksYShkb2N1bWVudCkub24oXCJtb3VzZXVwIHRvdWNoZW5kXCIsayxmdW5jdGlvbigpe2g9ITEsYSh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLGEoZG9jdW1lbnQpLm9uKFwiaW5wdXQgbW91c2Vtb3ZlIHRvdWNobW92ZVwiLGssZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5jaGlsZHJlbihcIi50aHVtYlwiKSxkPWEodGhpcykuZmluZChnKTtpZihoKXtjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpO3ZhciBlPWooZCk7Yy5hZGRDbGFzcyhcImFjdGl2ZVwiKS5jc3MoXCJsZWZ0XCIsZSksYy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYy5zaWJsaW5ncyhnKS52YWwoKSl9fSksYShkb2N1bWVudCkub24oXCJtb3VzZW91dCB0b3VjaGxlYXZlXCIsayxmdW5jdGlvbigpe2lmKCFoKXt2YXIgYj1hKHRoaXMpLmNoaWxkcmVuKFwiLnRodW1iXCIpLGM9cGFyc2VJbnQoYSh0aGlzKS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLGQ9NytjK1wicHhcIjtiLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiZiLnZlbG9jaXR5KHtoZWlnaHQ6XCIwXCIsd2lkdGg6XCIwXCIsdG9wOlwiMTBweFwiLG1hcmdpbkxlZnQ6ZH0se2R1cmF0aW9uOjEwMH0pLGIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9fSksYS5mbi5hdXRvY29tcGxldGU9ZnVuY3Rpb24oYil7dmFyIGM9e2RhdGE6e30sbGltaXQ6MS8wLG9uQXV0b2NvbXBsZXRlOm51bGwsbWluTGVuZ3RoOjF9O3JldHVybiBiPWEuZXh0ZW5kKGMsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGMsZD1hKHRoaXMpLGU9Yi5kYXRhLGY9MCxnPS0xLGg9ZC5jbG9zZXN0KFwiLmlucHV0LWZpZWxkXCIpO2lmKCFhLmlzRW1wdHlPYmplY3QoZSkpe3ZhciBpLGo9YSgnPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudFwiPjwvdWw+Jyk7aC5sZW5ndGg/KGk9aC5jaGlsZHJlbihcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLmZpcnN0KCksaS5sZW5ndGh8fGguYXBwZW5kKGopKTooaT1kLm5leHQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKSxpLmxlbmd0aHx8ZC5hZnRlcihqKSksaS5sZW5ndGgmJihqPWkpO3ZhciBrPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5maW5kKFwiaW1nXCIpLGQ9Yi50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiXCIrYS50b0xvd2VyQ2FzZSgpKSxlPWQrYS5sZW5ndGgtMSxmPWIudGV4dCgpLnNsaWNlKDAsZCksZz1iLnRleHQoKS5zbGljZShkLGUrMSksaD1iLnRleHQoKS5zbGljZShlKzEpO2IuaHRtbChcIjxzcGFuPlwiK2YrXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5cIitnK1wiPC9zcGFuPlwiK2grXCI8L3NwYW4+XCIpLGMubGVuZ3RoJiZiLnByZXBlbmQoYyl9LGw9ZnVuY3Rpb24oKXtnPS0xLGouZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9LG09ZnVuY3Rpb24oKXtqLmVtcHR5KCksbCgpLGM9dm9pZCAwfTtkLm9mZihcImJsdXIuYXV0b2NvbXBsZXRlXCIpLm9uKFwiYmx1ci5hdXRvY29tcGxldGVcIixmdW5jdGlvbigpe20oKX0pLGQub2ZmKFwia2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZVwiKS5vbihcImtleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGVcIixmdW5jdGlvbihnKXtmPTA7dmFyIGg9ZC52YWwoKS50b0xvd2VyQ2FzZSgpO2lmKDEzIT09Zy53aGljaCYmMzghPT1nLndoaWNoJiY0MCE9PWcud2hpY2gpe2lmKGMhPT1oJiYobSgpLGgubGVuZ3RoPj1iLm1pbkxlbmd0aCkpZm9yKHZhciBpIGluIGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShpKSYmaS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaCkhPT0tMSYmaS50b0xvd2VyQ2FzZSgpIT09aCl7aWYoZj49Yi5saW1pdClicmVhazt2YXIgbD1hKFwiPGxpPjwvbGk+XCIpO2VbaV0/bC5hcHBlbmQoJzxpbWcgc3JjPVwiJytlW2ldKydcIiBjbGFzcz1cInJpZ2h0IGNpcmNsZVwiPjxzcGFuPicraStcIjwvc3Bhbj5cIik6bC5hcHBlbmQoXCI8c3Bhbj5cIitpK1wiPC9zcGFuPlwiKSxqLmFwcGVuZChsKSxrKGgsbCksZisrfWM9aH19KSxkLm9mZihcImtleWRvd24uYXV0b2NvbXBsZXRlXCIpLm9uKFwia2V5ZG93bi5hdXRvY29tcGxldGVcIixmdW5jdGlvbihhKXt2YXIgYixjPWEud2hpY2gsZD1qLmNoaWxkcmVuKFwibGlcIikubGVuZ3RoLGU9ai5jaGlsZHJlbihcIi5hY3RpdmVcIikuZmlyc3QoKTtyZXR1cm4gMTM9PT1jJiZnPj0wPyhiPWouY2hpbGRyZW4oXCJsaVwiKS5lcShnKSx2b2lkKGIubGVuZ3RoJiYoYi50cmlnZ2VyKFwibW91c2Vkb3duLmF1dG9jb21wbGV0ZVwiKSxhLnByZXZlbnREZWZhdWx0KCkpKSk6dm9pZCgzOCE9PWMmJjQwIT09Y3x8KGEucHJldmVudERlZmF1bHQoKSxcbjM4PT09YyYmZz4wJiZnLS0sNDA9PT1jJiZnPGQtMSYmZysrLGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZz49MCYmai5jaGlsZHJlbihcImxpXCIpLmVxKGcpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSl9KSxqLm9uKFwibW91c2Vkb3duLmF1dG9jb21wbGV0ZSB0b3VjaHN0YXJ0LmF1dG9jb21wbGV0ZVwiLFwibGlcIixmdW5jdGlvbigpe3ZhciBjPWEodGhpcykudGV4dCgpLnRyaW0oKTtkLnZhbChjKSxkLnRyaWdnZXIoXCJjaGFuZ2VcIiksbSgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGIub25BdXRvY29tcGxldGUmJmIub25BdXRvY29tcGxldGUuY2FsbCh0aGlzLGMpfSl9fSl9fSksYS5mbi5tYXRlcmlhbF9zZWxlY3Q9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGU9YS5pbmRleE9mKGIpLGY9ZT09PS0xO3JldHVybiBmP2EucHVzaChiKTphLnNwbGljZShlLDEpLGMuc2libGluZ3MoXCJ1bC5kcm9wZG93bi1jb250ZW50XCIpLmZpbmQoXCJsaTpub3QoLm9wdGdyb3VwKVwiKS5lcShiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxjLmZpbmQoXCJvcHRpb25cIikuZXEoYikucHJvcChcInNlbGVjdGVkXCIsZiksZChhLGMpLGZ9ZnVuY3Rpb24gZChhLGIpe2Zvcih2YXIgYz1cIlwiLGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspe3ZhciBmPWIuZmluZChcIm9wdGlvblwiKS5lcShhW2RdKS50ZXh0KCk7Yys9MD09PWQ/ZjpcIiwgXCIrZn1cIlwiPT09YyYmKGM9Yi5maW5kKFwib3B0aW9uOmRpc2FibGVkXCIpLmVxKDApLnRleHQoKSksYi5zaWJsaW5ncyhcImlucHV0LnNlbGVjdC1kcm9wZG93blwiKS52YWwoYyl9YSh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKTtpZighZC5oYXNDbGFzcyhcImJyb3dzZXItZGVmYXVsdFwiKSl7dmFyIGU9ISFkLmF0dHIoXCJtdWx0aXBsZVwiKSxmPWQuZGF0YShcInNlbGVjdC1pZFwiKTtpZihmJiYoZC5wYXJlbnQoKS5maW5kKFwic3Bhbi5jYXJldFwiKS5yZW1vdmUoKSxkLnBhcmVudCgpLmZpbmQoXCJpbnB1dFwiKS5yZW1vdmUoKSxkLnVud3JhcCgpLGEoXCJ1bCNzZWxlY3Qtb3B0aW9ucy1cIitmKS5yZW1vdmUoKSksXCJkZXN0cm95XCI9PT1iKXJldHVybiB2b2lkIGQuZGF0YShcInNlbGVjdC1pZFwiLG51bGwpLnJlbW92ZUNsYXNzKFwiaW5pdGlhbGl6ZWRcIik7dmFyIGc9TWF0ZXJpYWxpemUuZ3VpZCgpO2QuZGF0YShcInNlbGVjdC1pZFwiLGcpO3ZhciBoPWEoJzxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlclwiPjwvZGl2PicpO2guYWRkQ2xhc3MoZC5hdHRyKFwiY2xhc3NcIikpO3ZhciBpPWEoJzx1bCBpZD1cInNlbGVjdC1vcHRpb25zLScrZysnXCIgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IHNlbGVjdC1kcm9wZG93biAnKyhlP1wibXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duXCI6XCJcIikrJ1wiPjwvdWw+Jyksaj1kLmNoaWxkcmVuKFwib3B0aW9uLCBvcHRncm91cFwiKSxrPVtdLGw9ITEsbT1kLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikuaHRtbCgpfHxkLmZpbmQoXCJvcHRpb246Zmlyc3RcIikuaHRtbCgpfHxcIlwiLG49ZnVuY3Rpb24oYixjLGQpe3ZhciBmPWMuaXMoXCI6ZGlzYWJsZWRcIik/XCJkaXNhYmxlZCBcIjpcIlwiLGc9XCJvcHRncm91cC1vcHRpb25cIj09PWQ/XCJvcHRncm91cC1vcHRpb24gXCI6XCJcIixoPWU/JzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIicrZitcIi8+PGxhYmVsPjwvbGFiZWw+XCI6XCJcIixqPWMuZGF0YShcImljb25cIiksaz1jLmF0dHIoXCJjbGFzc1wiKTtpZihqKXt2YXIgbD1cIlwiO3JldHVybiBrJiYobD0nIGNsYXNzPVwiJytrKydcIicpLGkuYXBwZW5kKGEoJzxsaSBjbGFzcz1cIicrZitnKydcIj48aW1nIGFsdD1cIlwiIHNyYz1cIicraisnXCInK2wrXCI+PHNwYW4+XCIraCtjLmh0bWwoKStcIjwvc3Bhbj48L2xpPlwiKSksITB9aS5hcHBlbmQoYSgnPGxpIGNsYXNzPVwiJytmK2crJ1wiPjxzcGFuPicraCtjLmh0bWwoKStcIjwvc3Bhbj48L2xpPlwiKSl9O2oubGVuZ3RoJiZqLmVhY2goZnVuY3Rpb24oKXtpZihhKHRoaXMpLmlzKFwib3B0aW9uXCIpKWU/bihkLGEodGhpcyksXCJtdWx0aXBsZVwiKTpuKGQsYSh0aGlzKSk7ZWxzZSBpZihhKHRoaXMpLmlzKFwib3B0Z3JvdXBcIikpe3ZhciBiPWEodGhpcykuY2hpbGRyZW4oXCJvcHRpb25cIik7aS5hcHBlbmQoYSgnPGxpIGNsYXNzPVwib3B0Z3JvdXBcIj48c3Bhbj4nK2EodGhpcykuYXR0cihcImxhYmVsXCIpK1wiPC9zcGFuPjwvbGk+XCIpKSxiLmVhY2goZnVuY3Rpb24oKXtuKGQsYSh0aGlzKSxcIm9wdGdyb3VwLW9wdGlvblwiKX0pfX0pLGkuZmluZChcImxpOm5vdCgub3B0Z3JvdXApXCIpLmVhY2goZnVuY3Rpb24oZil7YSh0aGlzKS5jbGljayhmdW5jdGlvbihnKXtpZighYSh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpJiYhYSh0aGlzKS5oYXNDbGFzcyhcIm9wdGdyb3VwXCIpKXt2YXIgaD0hMDtlPyhhKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLHRoaXMpLnByb3AoXCJjaGVja2VkXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4hYn0pLGg9YyhrLGYsZCkscS50cmlnZ2VyKFwiZm9jdXNcIikpOihpLmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLHEudmFsKGEodGhpcykudGV4dCgpKSkscihpLGEodGhpcykpLGQuZmluZChcIm9wdGlvblwiKS5lcShmKS5wcm9wKFwic2VsZWN0ZWRcIixoKSxkLnRyaWdnZXIoXCJjaGFuZ2VcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGImJmIoKX1nLnN0b3BQcm9wYWdhdGlvbigpfSl9KSxkLndyYXAoaCk7dmFyIG89YSgnPHNwYW4gY2xhc3M9XCJjYXJldFwiPiYjOTY2MDs8L3NwYW4+Jyk7ZC5pcyhcIjpkaXNhYmxlZFwiKSYmby5hZGRDbGFzcyhcImRpc2FibGVkXCIpO3ZhciBwPW0ucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKSxxPWEoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCIgcmVhZG9ubHk9XCJ0cnVlXCIgJysoZC5pcyhcIjpkaXNhYmxlZFwiKT9cImRpc2FibGVkXCI6XCJcIikrJyBkYXRhLWFjdGl2YXRlcz1cInNlbGVjdC1vcHRpb25zLScrZysnXCIgdmFsdWU9XCInK3ArJ1wiLz4nKTtkLmJlZm9yZShxKSxxLmJlZm9yZShvKSxxLmFmdGVyKGkpLGQuaXMoXCI6ZGlzYWJsZWRcIil8fHEuZHJvcGRvd24oe2hvdmVyOiExfSksZC5hdHRyKFwidGFiaW5kZXhcIikmJmEocVswXSkuYXR0cihcInRhYmluZGV4XCIsZC5hdHRyKFwidGFiaW5kZXhcIikpLGQuYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKSxxLm9uKHtmb2N1czpmdW5jdGlvbigpe2lmKGEoXCJ1bC5zZWxlY3QtZHJvcGRvd25cIikubm90KGlbMF0pLmlzKFwiOnZpc2libGVcIikmJmEoXCJpbnB1dC5zZWxlY3QtZHJvcGRvd25cIikudHJpZ2dlcihcImNsb3NlXCIpLCFpLmlzKFwiOnZpc2libGVcIikpe2EodGhpcykudHJpZ2dlcihcIm9wZW5cIixbXCJmb2N1c1wiXSk7dmFyIGI9YSh0aGlzKS52YWwoKTtlJiZiLmluZGV4T2YoXCIsXCIpPj0wJiYoYj1iLnNwbGl0KFwiLFwiKVswXSk7dmFyIGM9aS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9KVswXTtyKGksYywhMCl9fSxjbGljazpmdW5jdGlvbihhKXthLnN0b3BQcm9wYWdhdGlvbigpfX0pLHEub24oXCJibHVyXCIsZnVuY3Rpb24oKXtlfHxhKHRoaXMpLnRyaWdnZXIoXCJjbG9zZVwiKSxpLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpfSksaS5ob3ZlcihmdW5jdGlvbigpe2w9ITB9LGZ1bmN0aW9uKCl7bD0hMX0pLGEod2luZG93KS5vbih7Y2xpY2s6ZnVuY3Rpb24oKXtlJiYobHx8cS50cmlnZ2VyKFwiY2xvc2VcIikpfX0pLGUmJmQuZmluZChcIm9wdGlvbjpzZWxlY3RlZDpub3QoOmRpc2FibGVkKVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKS5pbmRleCgpO2MoayxiLGQpLGkuZmluZChcImxpXCIpLmVxKGIpLmZpbmQoXCI6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwhMCl9KTt2YXIgcj1mdW5jdGlvbihiLGMsZCl7aWYoYyl7Yi5maW5kKFwibGkuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTt2YXIgZj1hKGMpO2YuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKSxlJiYhZHx8aS5zY3JvbGxUbyhmKX19LHM9W10sdD1mdW5jdGlvbihiKXtpZig5PT1iLndoaWNoKXJldHVybiB2b2lkIHEudHJpZ2dlcihcImNsb3NlXCIpO2lmKDQwPT1iLndoaWNoJiYhaS5pcyhcIjp2aXNpYmxlXCIpKXJldHVybiB2b2lkIHEudHJpZ2dlcihcIm9wZW5cIik7aWYoMTMhPWIud2hpY2h8fGkuaXMoXCI6dmlzaWJsZVwiKSl7Yi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBjPVN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCkudG9Mb3dlckNhc2UoKSxkPVs5LDEzLDI3LDM4LDQwXTtpZihjJiZkLmluZGV4T2YoYi53aGljaCk9PT0tMSl7cy5wdXNoKGMpO3ZhciBmPXMuam9pbihcIlwiKSxnPWkuZmluZChcImxpXCIpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiAwPT09YSh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGYpfSlbMF07ZyYmcihpLGcpfWlmKDEzPT1iLndoaWNoKXt2YXIgaD1pLmZpbmQoXCJsaS5zZWxlY3RlZDpub3QoLmRpc2FibGVkKVwiKVswXTtoJiYoYShoKS50cmlnZ2VyKFwiY2xpY2tcIiksZXx8cS50cmlnZ2VyKFwiY2xvc2VcIikpfTQwPT1iLndoaWNoJiYoZz1pLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5sZW5ndGg/aS5maW5kKFwibGkuc2VsZWN0ZWRcIikubmV4dChcImxpOm5vdCguZGlzYWJsZWQpXCIpWzBdOmkuZmluZChcImxpOm5vdCguZGlzYWJsZWQpXCIpWzBdLHIoaSxnKSksMjc9PWIud2hpY2gmJnEudHJpZ2dlcihcImNsb3NlXCIpLDM4PT1iLndoaWNoJiYoZz1pLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5wcmV2KFwibGk6bm90KC5kaXNhYmxlZClcIilbMF0sZyYmcihpLGcpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cz1bXX0sMWUzKX19O3Eub24oXCJrZXlkb3duXCIsdCl9fSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtpbmRpY2F0b3JzOiEwLGhlaWdodDo0MDAsdHJhbnNpdGlvbjo1MDAsaW50ZXJ2YWw6NmUzfTtyZXR1cm4gYj1hLmV4dGVuZChjLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGMoYSxiKXthLmhhc0NsYXNzKFwiY2VudGVyLWFsaWduXCIpP2EudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVZOi0xMDB9LHtkdXJhdGlvbjpiLHF1ZXVlOiExfSk6YS5oYXNDbGFzcyhcInJpZ2h0LWFsaWduXCIpP2EudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjEwMH0se2R1cmF0aW9uOmIscXVldWU6ITF9KTphLmhhc0NsYXNzKFwibGVmdC1hbGlnblwiKSYmYS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6LTEwMH0se2R1cmF0aW9uOmIscXVldWU6ITF9KX1mdW5jdGlvbiBkKGEpe2E+PWoubGVuZ3RoP2E9MDphPDAmJihhPWoubGVuZ3RoLTEpLGs9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGshPWEmJihlPWouZXEoayksJGNhcHRpb249ZS5maW5kKFwiLmNhcHRpb25cIiksZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxlLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2oubm90KFwiLmFjdGl2ZVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjowLHF1ZXVlOiExfSl9fSksYygkY2FwdGlvbixiLnRyYW5zaXRpb24pLGIuaW5kaWNhdG9ycyYmZi5lcShrKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxqLmVxKGEpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGouZXEoYSkuZmluZChcIi5jYXB0aW9uXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjEsdHJhbnNsYXRlWDowLHRyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixkZWxheTpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGouZXEoYSkuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYi5pbmRpY2F0b3JzJiZmLmVxKGEpLmFkZENsYXNzKFwiYWN0aXZlXCIpKX12YXIgZSxmLGcsaD1hKHRoaXMpLGk9aC5maW5kKFwidWwuc2xpZGVzXCIpLmZpcnN0KCksaj1pLmZpbmQoXCI+IGxpXCIpLGs9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpO2shPS0xJiYoZT1qLmVxKGspKSxoLmhhc0NsYXNzKFwiZnVsbHNjcmVlblwiKXx8KGIuaW5kaWNhdG9ycz9oLmhlaWdodChiLmhlaWdodCs0MCk6aC5oZWlnaHQoYi5oZWlnaHQpLGkuaGVpZ2h0KGIuaGVpZ2h0KSksai5maW5kKFwiLmNhcHRpb25cIikuZWFjaChmdW5jdGlvbigpe2MoYSh0aGlzKSwwKX0pLGouZmluZChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCI7YSh0aGlzKS5hdHRyKFwic3JjXCIpIT09YiYmKGEodGhpcykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLFwidXJsKFwiK2EodGhpcykuYXR0cihcInNyY1wiKStcIilcIiksYSh0aGlzKS5hdHRyKFwic3JjXCIsYikpfSksYi5pbmRpY2F0b3JzJiYoZj1hKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKSxqLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU9YSgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO2UuY2xpY2soZnVuY3Rpb24oKXt2YXIgYz1pLnBhcmVudCgpLGU9Yy5maW5kKGEodGhpcykpLmluZGV4KCk7ZChlKSxjbGVhckludGVydmFsKGcpLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxqLmxlbmd0aD09aysxP2s9MDprKz0xLGQoayl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKX0pLGYuYXBwZW5kKGUpfSksaC5hcHBlbmQoZiksZj1oLmZpbmQoXCJ1bC5pbmRpY2F0b3JzXCIpLmZpbmQoXCJsaS5pbmRpY2F0b3ItaXRlbVwiKSksZT9lLnNob3coKTooai5maXJzdCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGs9MCxlPWouZXEoayksYi5pbmRpY2F0b3JzJiZmLmVxKGspLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxlLmZpbmQoXCJpbWdcIikuZWFjaChmdW5jdGlvbigpe2UuZmluZChcIi5jYXB0aW9uXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjEsdHJhbnNsYXRlWDowLHRyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9KSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrKzEpfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCk7dmFyIGw9ITEsbT0hMSxuPSExO2guaGFtbWVyKHtwcmV2ZW50X2RlZmF1bHQ6ITF9KS5iaW5kKFwicGFuXCIsZnVuY3Rpb24oYSl7aWYoXCJ0b3VjaFwiPT09YS5nZXN0dXJlLnBvaW50ZXJUeXBlKXtjbGVhckludGVydmFsKGcpO3ZhciBiPWEuZ2VzdHVyZS5kaXJlY3Rpb24sYz1hLmdlc3R1cmUuZGVsdGFYLGQ9YS5nZXN0dXJlLnZlbG9jaXR5WCxlPWEuZ2VzdHVyZS52ZWxvY2l0eVk7JGN1cnJfc2xpZGU9aS5maW5kKFwiLmFjdGl2ZVwiKSxNYXRoLmFicyhkKT5NYXRoLmFicyhlKSYmJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6Y30se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSw0PT09YiYmKGM+aC5pbm5lcldpZHRoKCkvMnx8ZDwtLjY1KT9uPSEwOjI9PT1iJiYoYzwtMSpoLmlubmVyV2lkdGgoKS8yfHxkPi42NSkmJihtPSEwKTt2YXIgZjttJiYoZj0kY3Vycl9zbGlkZS5uZXh0KCksMD09PWYubGVuZ3RoJiYoZj1qLmZpcnN0KCkpLGYudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpLG4mJihmPSRjdXJyX3NsaWRlLnByZXYoKSwwPT09Zi5sZW5ndGgmJihmPWoubGFzdCgpKSxmLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oYSl7XCJ0b3VjaFwiPT09YS5nZXN0dXJlLnBvaW50ZXJUeXBlJiYoJGN1cnJfc2xpZGU9aS5maW5kKFwiLmFjdGl2ZVwiKSxsPSExLGN1cnJfaW5kZXg9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLCFuJiYhbXx8ai5sZW5ndGg8PTE/JGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSk6bT8oZChjdXJyX2luZGV4KzEpLCRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOi0xKmguaW5uZXJXaWR0aCgpfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXskY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSk6biYmKGQoY3Vycl9pbmRleC0xKSwkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpoLmlubmVyV2lkdGgoKX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7JGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjowLHF1ZXVlOiExfSl9fSkpLG09ITEsbj0hMSxjbGVhckludGVydmFsKGcpLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxqLmxlbmd0aD09aysxP2s9MDprKz0xLGQoayl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKSl9KSxoLm9uKFwic2xpZGVyUGF1c2VcIixmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoZyl9KSxoLm9uKFwic2xpZGVyU3RhcnRcIixmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpfSksaC5vbihcInNsaWRlck5leHRcIixmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoaysxKX0pLGgub24oXCJzbGlkZXJQcmV2XCIsZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGstMSl9KX0pfSxwYXVzZTpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcInNsaWRlclBhdXNlXCIpfSxzdGFydDpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcInNsaWRlclN0YXJ0XCIpfSxuZXh0OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyTmV4dFwiKX0scHJldjpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcInNsaWRlclByZXZcIil9fTthLmZuLnNsaWRlcj1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudG9vbHRpcFwiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suY2FyZFwiLFwiLmNhcmRcIixmdW5jdGlvbihiKXthKHRoaXMpLmZpbmQoXCI+IC5jYXJkLXJldmVhbFwiKS5sZW5ndGgmJihhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlXCIpKXx8YShiLnRhcmdldCkuaXMoYShcIi5jYXJkLXJldmVhbCAuY2FyZC10aXRsZSBpXCIpKT9hKHRoaXMpLmZpbmQoXCIuY2FyZC1yZXZlYWxcIikudmVsb2NpdHkoe3RyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOjIyNSxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlSW5PdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pfX0pOihhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQgLmFjdGl2YXRvclwiKSl8fGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZCAuYWN0aXZhdG9yIGlcIikpKSYmKGEoYi50YXJnZXQpLmNsb3Nlc3QoXCIuY2FyZFwiKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGEodGhpcykuZmluZChcIi5jYXJkLXJldmVhbFwiKS5jc3Moe2Rpc3BsYXk6XCJibG9ja1wifSkudmVsb2NpdHkoXCJzdG9wXCIsITEpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOlwiLTEwMCVcIn0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlSW5PdXRRdWFkXCJ9KSkpfSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17ZGF0YTpbXSxwbGFjZWhvbGRlcjpcIlwiLHNlY29uZGFyeVBsYWNlaG9sZGVyOlwiXCIsYXV0b2NvbXBsZXRlT3B0aW9uczp7fX07YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vbihcImNsaWNrXCIsXCIuY2hpcCAuY2xvc2VcIixmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLmNsb3Nlc3QoXCIuY2hpcHNcIik7Yy5hdHRyKFwiZGF0YS1pbml0aWFsaXplZFwiKXx8YSh0aGlzKS5jbG9zZXN0KFwiLmNoaXBcIikucmVtb3ZlKCl9KX0pLGEuZm4ubWF0ZXJpYWxfY2hpcD1mdW5jdGlvbihjKXt2YXIgZD10aGlzO2lmKHRoaXMuJGVsPWEodGhpcyksdGhpcy4kZG9jdW1lbnQ9YShkb2N1bWVudCksdGhpcy5TRUxTPXtDSElQUzpcIi5jaGlwc1wiLENISVA6XCIuY2hpcFwiLElOUFVUOlwiaW5wdXRcIixERUxFVEU6XCIubWF0ZXJpYWwtaWNvbnNcIixTRUxFQ1RFRF9DSElQOlwiLnNlbGVjdGVkXCJ9LFwiZGF0YVwiPT09YylyZXR1cm4gdGhpcy4kZWwuZGF0YShcImNoaXBzXCIpO3ZhciBlPWEuZXh0ZW5kKHt9LGIsYyk7ZC5oYXNBdXRvY29tcGxldGU9IWEuaXNFbXB0eU9iamVjdChlLmF1dG9jb21wbGV0ZU9wdGlvbnMuZGF0YSksdGhpcy5pbml0PWZ1bmN0aW9uKCl7dmFyIGI9MDtkLiRlbC5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxmPU1hdGVyaWFsaXplLmd1aWQoKTtkLmNoaXBJZD1mLGUuZGF0YSYmZS5kYXRhIGluc3RhbmNlb2YgQXJyYXl8fChlLmRhdGE9W10pLGMuZGF0YShcImNoaXBzXCIsZS5kYXRhKSxjLmF0dHIoXCJkYXRhLWluZGV4XCIsYiksYy5hdHRyKFwiZGF0YS1pbml0aWFsaXplZFwiLCEwKSxjLmhhc0NsYXNzKGQuU0VMUy5DSElQUyl8fGMuYWRkQ2xhc3MoXCJjaGlwc1wiKSxkLmNoaXBzKGMsZiksYisrfSl9LHRoaXMuaGFuZGxlRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGI9ZC5TRUxTO2QuJGRvY3VtZW50Lm9mZihcImNsaWNrLmNoaXBzLWZvY3VzXCIsYi5DSElQUykub24oXCJjbGljay5jaGlwcy1mb2N1c1wiLGIuQ0hJUFMsZnVuY3Rpb24oYyl7YShjLnRhcmdldCkuZmluZChiLklOUFVUKS5mb2N1cygpfSksZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtc2VsZWN0XCIsYi5DSElQKS5vbihcImNsaWNrLmNoaXBzLXNlbGVjdFwiLGIuQ0hJUCxmdW5jdGlvbihjKXt2YXIgZT1hKGMudGFyZ2V0KTtpZihlLmxlbmd0aCl7dmFyIGY9ZS5oYXNDbGFzcyhcInNlbGVjdGVkXCIpLGc9ZS5jbG9zZXN0KGIuQ0hJUFMpO2EoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGZ8fGQuc2VsZWN0Q2hpcChlLmluZGV4KCksZyl9fSksZC4kZG9jdW1lbnQub2ZmKFwia2V5ZG93bi5jaGlwc1wiKS5vbihcImtleWRvd24uY2hpcHNcIixmdW5jdGlvbihjKXtpZighYShjLnRhcmdldCkuaXMoXCJpbnB1dCwgdGV4dGFyZWFcIikpe3ZhciBlLGY9ZC4kZG9jdW1lbnQuZmluZChiLkNISVArYi5TRUxFQ1RFRF9DSElQKSxnPWYuY2xvc2VzdChiLkNISVBTKSxoPWYuc2libGluZ3MoYi5DSElQKS5sZW5ndGg7aWYoZi5sZW5ndGgpaWYoOD09PWMud2hpY2h8fDQ2PT09Yy53aGljaCl7Yy5wcmV2ZW50RGVmYXVsdCgpLGU9Zi5pbmRleCgpLGQuZGVsZXRlQ2hpcChlLGcpO3ZhciBpPW51bGw7ZSsxPGg/aT1lOmUhPT1oJiZlKzEhPT1ofHwoaT1oLTEpLGk8MCYmKGk9bnVsbCksbnVsbCE9PWkmJmQuc2VsZWN0Q2hpcChpLGcpLGh8fGcuZmluZChcImlucHV0XCIpLmZvY3VzKCl9ZWxzZSBpZigzNz09PWMud2hpY2gpe2lmKGU9Zi5pbmRleCgpLTEsZTwwKXJldHVybjthKGIuQ0hJUCkucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKSxkLnNlbGVjdENoaXAoZSxnKX1lbHNlIGlmKDM5PT09Yy53aGljaCl7aWYoZT1mLmluZGV4KCkrMSxhKGIuQ0hJUCkucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKSxlPmgpcmV0dXJuIHZvaWQgZy5maW5kKFwiaW5wdXRcIikuZm9jdXMoKTtkLnNlbGVjdENoaXAoZSxnKX19fSksZC4kZG9jdW1lbnQub2ZmKFwiZm9jdXNpbi5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJmb2N1c2luLmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVULGZ1bmN0aW9uKGMpe3ZhciBkPWEoYy50YXJnZXQpLmNsb3Nlc3QoYi5DSElQUyk7ZC5hZGRDbGFzcyhcImZvY3VzXCIpLGQuc2libGluZ3MoXCJsYWJlbCwgLnByZWZpeFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxhKGIuQ0hJUCkucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKX0pLGQuJGRvY3VtZW50Lm9mZihcImZvY3Vzb3V0LmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImZvY3Vzb3V0LmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVULGZ1bmN0aW9uKGMpe3ZhciBkPWEoYy50YXJnZXQpLmNsb3Nlc3QoYi5DSElQUyk7ZC5yZW1vdmVDbGFzcyhcImZvY3VzXCIpLGQuZGF0YShcImNoaXBzXCIpLmxlbmd0aHx8ZC5zaWJsaW5ncyhcImxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGQuc2libGluZ3MoXCIucHJlZml4XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksZC4kZG9jdW1lbnQub2ZmKFwia2V5ZG93bi5jaGlwcy1hZGRcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwia2V5ZG93bi5jaGlwcy1hZGRcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGU9YShjLnRhcmdldCksZj1lLmNsb3Nlc3QoYi5DSElQUyksZz1mLmNoaWxkcmVuKGIuQ0hJUCkubGVuZ3RoO2lmKDEzPT09Yy53aGljaCl7aWYoZC5oYXNBdXRvY29tcGxldGUmJmYuZmluZChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLmxlbmd0aCYmZi5maW5kKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikuY2hpbGRyZW4oKS5sZW5ndGgpcmV0dXJuO3JldHVybiBjLnByZXZlbnREZWZhdWx0KCksZC5hZGRDaGlwKHt0YWc6ZS52YWwoKX0sZiksdm9pZCBlLnZhbChcIlwiKX1pZigoOD09PWMua2V5Q29kZXx8Mzc9PT1jLmtleUNvZGUpJiZcIlwiPT09ZS52YWwoKSYmZylyZXR1cm4gYy5wcmV2ZW50RGVmYXVsdCgpLGQuc2VsZWN0Q2hpcChnLTEsZiksdm9pZCBlLmJsdXIoKX0pLGQuJGRvY3VtZW50Lm9mZihcImNsaWNrLmNoaXBzLWRlbGV0ZVwiLGIuQ0hJUFMrXCIgXCIrYi5ERUxFVEUpLm9uKFwiY2xpY2suY2hpcHMtZGVsZXRlXCIsYi5DSElQUytcIiBcIitiLkRFTEVURSxmdW5jdGlvbihjKXt2YXIgZT1hKGMudGFyZ2V0KSxmPWUuY2xvc2VzdChiLkNISVBTKSxnPWUuY2xvc2VzdChiLkNISVApO2Muc3RvcFByb3BhZ2F0aW9uKCksZC5kZWxldGVDaGlwKGcuaW5kZXgoKSxmKSxmLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpfSl9LHRoaXMuY2hpcHM9ZnVuY3Rpb24oYixjKXtiLmVtcHR5KCksYi5kYXRhKFwiY2hpcHNcIikuZm9yRWFjaChmdW5jdGlvbihhKXtiLmFwcGVuZChkLnJlbmRlckNoaXAoYSkpfSksYi5hcHBlbmQoYSgnPGlucHV0IGlkPVwiJytjKydcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJcIj4nKSksZC5zZXRQbGFjZWhvbGRlcihiKTt2YXIgZj1iLm5leHQoXCJsYWJlbFwiKTtmLmxlbmd0aCYmKGYuYXR0cihcImZvclwiLGMpLGIuZGF0YShcImNoaXBzXCIpLmxlbmd0aCYmZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSk7dmFyIGc9YShcIiNcIitjKTtkLmhhc0F1dG9jb21wbGV0ZSYmKGUuYXV0b2NvbXBsZXRlT3B0aW9ucy5vbkF1dG9jb21wbGV0ZT1mdW5jdGlvbihhKXtkLmFkZENoaXAoe3RhZzphfSxiKSxnLnZhbChcIlwiKSxnLmZvY3VzKCl9LGcuYXV0b2NvbXBsZXRlKGUuYXV0b2NvbXBsZXRlT3B0aW9ucykpfSx0aGlzLnJlbmRlckNoaXA9ZnVuY3Rpb24oYil7aWYoYi50YWcpe3ZhciBjPWEoJzxkaXYgY2xhc3M9XCJjaGlwXCI+PC9kaXY+Jyk7cmV0dXJuIGMudGV4dChiLnRhZyksYy5hcHBlbmQoYSgnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBjbG9zZVwiPmNsb3NlPC9pPicpKSxjfX0sdGhpcy5zZXRQbGFjZWhvbGRlcj1mdW5jdGlvbihhKXthLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGgmJmUucGxhY2Vob2xkZXI/YS5maW5kKFwiaW5wdXRcIikucHJvcChcInBsYWNlaG9sZGVyXCIsZS5wbGFjZWhvbGRlcik6IWEuZGF0YShcImNoaXBzXCIpLmxlbmd0aCYmZS5zZWNvbmRhcnlQbGFjZWhvbGRlciYmYS5maW5kKFwiaW5wdXRcIikucHJvcChcInBsYWNlaG9sZGVyXCIsZS5zZWNvbmRhcnlQbGFjZWhvbGRlcil9LHRoaXMuaXNWYWxpZD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLmRhdGEoXCJjaGlwc1wiKSxkPSExLGU9MDtlPGMubGVuZ3RoO2UrKylpZihjW2VdLnRhZz09PWIudGFnKXJldHVybiB2b2lkKGQ9ITApO3JldHVyblwiXCIhPT1iLnRhZyYmIWR9LHRoaXMuYWRkQ2hpcD1mdW5jdGlvbihhLGIpe2lmKGQuaXNWYWxpZChiLGEpKXtmb3IodmFyIGM9ZC5yZW5kZXJDaGlwKGEpLGU9W10sZj1iLmRhdGEoXCJjaGlwc1wiKSxnPTA7ZzxmLmxlbmd0aDtnKyspZS5wdXNoKGZbZ10pO2UucHVzaChhKSxiLmRhdGEoXCJjaGlwc1wiLGUpLGMuaW5zZXJ0QmVmb3JlKGIuZmluZChcImlucHV0XCIpKSxiLnRyaWdnZXIoXCJjaGlwLmFkZFwiLGEpLGQuc2V0UGxhY2Vob2xkZXIoYil9fSx0aGlzLmRlbGV0ZUNoaXA9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmRhdGEoXCJjaGlwc1wiKVthXTtiLmZpbmQoXCIuY2hpcFwiKS5lcShhKS5yZW1vdmUoKTtmb3IodmFyIGU9W10sZj1iLmRhdGEoXCJjaGlwc1wiKSxnPTA7ZzxmLmxlbmd0aDtnKyspZyE9PWEmJmUucHVzaChmW2ddKTtiLmRhdGEoXCJjaGlwc1wiLGUpLGIudHJpZ2dlcihcImNoaXAuZGVsZXRlXCIsYyksZC5zZXRQbGFjZWhvbGRlcihiKX0sdGhpcy5zZWxlY3RDaGlwPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5maW5kKFwiLmNoaXBcIikuZXEoYSk7YyYmITE9PT1jLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikmJihjLmFkZENsYXNzKFwic2VsZWN0ZWRcIiksYi50cmlnZ2VyKFwiY2hpcC5zZWxlY3RcIixiLmRhdGEoXCJjaGlwc1wiKVthXSkpfSx0aGlzLmdldENoaXBzRWxlbWVudD1mdW5jdGlvbihhLGIpe3JldHVybiBiLmVxKGEpfSx0aGlzLmluaXQoKSx0aGlzLmhhbmRsZUV2ZW50cygpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnB1c2hwaW49ZnVuY3Rpb24oYil7dmFyIGM9e3RvcDowLGJvdHRvbToxLzAsb2Zmc2V0OjB9O3JldHVyblwicmVtb3ZlXCI9PT1iPyh0aGlzLmVhY2goZnVuY3Rpb24oKXsoaWQ9YSh0aGlzKS5kYXRhKFwicHVzaHBpbi1pZFwiKSkmJihhKHdpbmRvdykub2ZmKFwic2Nyb2xsLlwiK2lkKSxhKHRoaXMpLnJlbW92ZURhdGEoXCJwdXNocGluLWlkXCIpLnJlbW92ZUNsYXNzKFwicGluLXRvcCBwaW5uZWQgcGluLWJvdHRvbVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIikpfSksITEpOihiPWEuZXh0ZW5kKGMsYiksJGluZGV4PTAsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyhhKXthLnJlbW92ZUNsYXNzKFwicGluLXRvcFwiKSxhLnJlbW92ZUNsYXNzKFwicGlubmVkXCIpLGEucmVtb3ZlQ2xhc3MoXCJwaW4tYm90dG9tXCIpfWZ1bmN0aW9uIGQoZCxlKXtkLmVhY2goZnVuY3Rpb24oKXtiLnRvcDw9ZSYmYi5ib3R0b20+PWUmJiFhKHRoaXMpLmhhc0NsYXNzKFwicGlubmVkXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmNzcyhcInRvcFwiLGIub2Zmc2V0KSxhKHRoaXMpLmFkZENsYXNzKFwicGlubmVkXCIpKSxlPGIudG9wJiYhYSh0aGlzKS5oYXNDbGFzcyhcInBpbi10b3BcIikmJihjKGEodGhpcykpLGEodGhpcykuY3NzKFwidG9wXCIsMCksYSh0aGlzKS5hZGRDbGFzcyhcInBpbi10b3BcIikpLGU+Yi5ib3R0b20mJiFhKHRoaXMpLmhhc0NsYXNzKFwicGluLWJvdHRvbVwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5hZGRDbGFzcyhcInBpbi1ib3R0b21cIiksYSh0aGlzKS5jc3MoXCJ0b3BcIixiLmJvdHRvbS1nKSl9KX12YXIgZT1NYXRlcmlhbGl6ZS5ndWlkKCksZj1hKHRoaXMpLGc9YSh0aGlzKS5vZmZzZXQoKS50b3A7YSh0aGlzKS5kYXRhKFwicHVzaHBpbi1pZFwiLGUpLGQoZixhKHdpbmRvdykuc2Nyb2xsVG9wKCkpLGEod2luZG93KS5vbihcInNjcm9sbC5cIitlLGZ1bmN0aW9uKCl7dmFyIGM9YSh3aW5kb3cpLnNjcm9sbFRvcCgpK2Iub2Zmc2V0O2QoZixjKX0pfSkpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EuZm4ucmV2ZXJzZT1bXS5yZXZlcnNlLGEoZG9jdW1lbnQpLm9uKFwibW91c2VlbnRlci5maXhlZEFjdGlvbkJ0blwiLFwiLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhcilcIixmdW5jdGlvbihjKXt2YXIgZD1hKHRoaXMpO2IoZCl9KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlbGVhdmUuZml4ZWRBY3Rpb25CdG5cIixcIi5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpXCIsZnVuY3Rpb24oYil7dmFyIGQ9YSh0aGlzKTtjKGQpfSksYShkb2N1bWVudCkub24oXCJjbGljay5mYWJDbGlja1RvZ2dsZVwiLFwiLmZpeGVkLWFjdGlvbi1idG4uY2xpY2stdG8tdG9nZ2xlID4gYVwiLGZ1bmN0aW9uKGQpe3ZhciBlPWEodGhpcyksZj1lLnBhcmVudCgpO2YuaGFzQ2xhc3MoXCJhY3RpdmVcIik/YyhmKTpiKGYpfSksYShkb2N1bWVudCkub24oXCJjbGljay5mYWJUb29sYmFyXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bi50b29sYmFyID4gYVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyksZT1jLnBhcmVudCgpO2QoZSl9KX0pLGEuZm4uZXh0ZW5kKHtvcGVuRkFCOmZ1bmN0aW9uKCl7YihhKHRoaXMpKX0sY2xvc2VGQUI6ZnVuY3Rpb24oKXtjKGEodGhpcykpfSxvcGVuVG9vbGJhcjpmdW5jdGlvbigpe2QoYSh0aGlzKSl9LGNsb3NlVG9vbGJhcjpmdW5jdGlvbigpe2UoYSh0aGlzKSl9fSk7dmFyIGI9ZnVuY3Rpb24oYil7dmFyIGM9YjtpZihjLmhhc0NsYXNzKFwiYWN0aXZlXCIpPT09ITEpe3ZhciBkLGUsZj1jLmhhc0NsYXNzKFwiaG9yaXpvbnRhbFwiKTtmPT09ITA/ZT00MDpkPTQwLGMuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYy5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eSh7c2NhbGVZOlwiLjRcIixzY2FsZVg6XCIuNFwiLHRyYW5zbGF0ZVk6ZCtcInB4XCIsdHJhbnNsYXRlWDplK1wicHhcIn0se2R1cmF0aW9uOjB9KTt2YXIgZz0wO2MuZmluZChcInVsIC5idG4tZmxvYXRpbmdcIikucmV2ZXJzZSgpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLnZlbG9jaXR5KHtvcGFjaXR5OlwiMVwiLHNjYWxlWDpcIjFcIixzY2FsZVk6XCIxXCIsdHJhbnNsYXRlWTpcIjBcIix0cmFuc2xhdGVYOlwiMFwifSx7ZHVyYXRpb246ODAsZGVsYXk6Z30pLGcrPTQwfSl9fSxjPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD1hLGU9ZC5oYXNDbGFzcyhcImhvcml6b250YWxcIik7ZT09PSEwP2M9NDA6Yj00MCxkLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO2QuZmluZChcInVsIC5idG4tZmxvYXRpbmdcIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGQuZmluZChcInVsIC5idG4tZmxvYXRpbmdcIikudmVsb2NpdHkoe29wYWNpdHk6XCIwXCIsc2NhbGVYOlwiLjRcIixzY2FsZVk6XCIuNFwiLHRyYW5zbGF0ZVk6YitcInB4XCIsdHJhbnNsYXRlWDpjK1wicHhcIn0se2R1cmF0aW9uOjgwfSl9LGQ9ZnVuY3Rpb24oYil7aWYoXCJ0cnVlXCIhPT1iLmF0dHIoXCJkYXRhLW9wZW5cIikpe3ZhciBjLGQsZixnPXdpbmRvdy5pbm5lcldpZHRoLGg9d2luZG93LmlubmVySGVpZ2h0LGk9YlswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxqPWIuZmluZChcIj4gYVwiKS5maXJzdCgpLGs9Yi5maW5kKFwiPiB1bFwiKS5maXJzdCgpLGw9YSgnPGRpdiBjbGFzcz1cImZhYi1iYWNrZHJvcFwiPjwvZGl2PicpLG09ai5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO2ouYXBwZW5kKGwpLGM9aS5sZWZ0LWcvMitpLndpZHRoLzIsZD1oLWkuYm90dG9tLGY9Zy9sLndpZHRoKCksYi5hdHRyKFwiZGF0YS1vcmlnaW4tYm90dG9tXCIsaS5ib3R0b20pLGIuYXR0cihcImRhdGEtb3JpZ2luLWxlZnRcIixpLmxlZnQpLGIuYXR0cihcImRhdGEtb3JpZ2luLXdpZHRoXCIsaS53aWR0aCksYi5hZGRDbGFzcyhcImFjdGl2ZVwiKSxiLmF0dHIoXCJkYXRhLW9wZW5cIiwhMCksYi5jc3Moe1widGV4dC1hbGlnblwiOlwiY2VudGVyXCIsd2lkdGg6XCIxMDAlXCIsYm90dG9tOjAsbGVmdDowLHRyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIrYytcInB4KVwiLHRyYW5zaXRpb246XCJub25lXCJ9KSxqLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlWShcIistZCtcInB4KVwiLHRyYW5zaXRpb246XCJub25lXCJ9KSxsLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6bX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmNzcyh7dHJhbnNmb3JtOlwiXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSwgYmFja2dyb3VuZC1jb2xvciAwcyBsaW5lYXIgLjJzXCJ9KSxqLmNzcyh7b3ZlcmZsb3c6XCJ2aXNpYmxlXCIsdHJhbnNmb3JtOlwiXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnNcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixcImJhY2tncm91bmQtY29sb3JcIjptfSksbC5jc3Moe3RyYW5zZm9ybTpcInNjYWxlKFwiK2YrXCIpXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKVwifSksay5maW5kKFwiPiBsaSA+IGFcIikuY3NzKHtvcGFjaXR5OjF9KSxhKHdpbmRvdykub24oXCJzY3JvbGwuZmFiVG9vbGJhckNsb3NlXCIsZnVuY3Rpb24oKXtlKGIpLGEod2luZG93KS5vZmYoXCJzY3JvbGwuZmFiVG9vbGJhckNsb3NlXCIpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLmZhYlRvb2xiYXJDbG9zZVwiKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIsZnVuY3Rpb24oYyl7YShjLnRhcmdldCkuY2xvc2VzdChrKS5sZW5ndGh8fChlKGIpLGEod2luZG93KS5vZmYoXCJzY3JvbGwuZmFiVG9vbGJhckNsb3NlXCIpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLmZhYlRvb2xiYXJDbG9zZVwiKSl9KX0sMTAwKX0sMCl9fSxlPWZ1bmN0aW9uKGEpe2lmKFwidHJ1ZVwiPT09YS5hdHRyKFwiZGF0YS1vcGVuXCIpKXt2YXIgYixjLGQsZT13aW5kb3cuaW5uZXJXaWR0aCxmPXdpbmRvdy5pbm5lckhlaWdodCxnPWEuYXR0cihcImRhdGEtb3JpZ2luLXdpZHRoXCIpLGg9YS5hdHRyKFwiZGF0YS1vcmlnaW4tYm90dG9tXCIpLGk9YS5hdHRyKFwiZGF0YS1vcmlnaW4tbGVmdFwiKSxqPWEuZmluZChcIj4gLmJ0bi1mbG9hdGluZ1wiKS5maXJzdCgpLGs9YS5maW5kKFwiPiB1bFwiKS5maXJzdCgpLGw9YS5maW5kKFwiLmZhYi1iYWNrZHJvcFwiKSxtPWouY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtiPWktZS8yK2cvMixjPWYtaCxkPWUvbC53aWR0aCgpLGEucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYS5hdHRyKFwiZGF0YS1vcGVuXCIsITEpLGEuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjpcInRyYW5zcGFyZW50XCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGouY3NzKHt0cmFuc2l0aW9uOlwibm9uZVwifSksbC5jc3Moe3RyYW5zZm9ybTpcInNjYWxlKDApXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6bX0pLGsuZmluZChcIj4gbGkgPiBhXCIpLmNzcyh7b3BhY2l0eTpcIlwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2wucmVtb3ZlKCksYS5jc3Moe1widGV4dC1hbGlnblwiOlwiXCIsd2lkdGg6XCJcIixib3R0b206XCJcIixsZWZ0OlwiXCIsb3ZlcmZsb3c6XCJcIixcImJhY2tncm91bmQtY29sb3JcIjpcIlwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKFwiKy1iK1wicHgsMCwwKVwifSksai5jc3Moe292ZXJmbG93OlwiXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMCxcIitjK1wicHgsMClcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMCwwLDApXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnNcIn0pLGouY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLDAsMClcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCJ9KX0sMjApfSwyMDApfX19KGpRdWVyeSksZnVuY3Rpb24oYSl7TWF0ZXJpYWxpemUuZmFkZUluSW1hZ2U9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpYz1hKGIpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGIpcmV0dXJuO2M9Yn1jLmNzcyh7b3BhY2l0eTowfSksYShjKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRTaW5lXCJ9KSxhKGMpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjoxMzAwLHF1ZXVlOiExLGVhc2luZzpcInN3aW5nXCIsc3RlcDpmdW5jdGlvbihiLGMpe2Muc3RhcnQ9MTAwO3ZhciBkPWIvMTAwLGU9MTUwLSgxMDAtYikvMS43NTtlPDEwMCYmKGU9MTAwKSxiPj0wJiZhKHRoaXMpLmNzcyh7XCItd2Via2l0LWZpbHRlclwiOlwiZ3JheXNjYWxlKFwiK2QrXCIpYnJpZ2h0bmVzcyhcIitlK1wiJSlcIixmaWx0ZXI6XCJncmF5c2NhbGUoXCIrZCtcIilicmlnaHRuZXNzKFwiK2UrXCIlKVwifSl9fSl9LE1hdGVyaWFsaXplLnNob3dTdGFnZ2VyZWRMaXN0PWZ1bmN0aW9uKGIpe3ZhciBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWM9YShiKTtlbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBiKXJldHVybjtjPWJ9dmFyIGQ9MDtjLmZpbmQoXCJsaVwiKS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIi0xMDBweFwifSx7ZHVyYXRpb246MH0pLGMuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLnZlbG9jaXR5KHtvcGFjaXR5OlwiMVwiLHRyYW5zbGF0ZVg6XCIwXCJ9LHtkdXJhdGlvbjo4MDAsZGVsYXk6ZCxlYXNpbmc6WzYwLDEwXX0pLGQrPTEyMH0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe3ZhciBiPSExLGM9ITE7YShcIi5kaXNtaXNzYWJsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihkKXtpZihcInRvdWNoXCI9PT1kLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBlPWEodGhpcyksZj1kLmdlc3R1cmUuZGlyZWN0aW9uLGc9ZC5nZXN0dXJlLmRlbHRhWCxoPWQuZ2VzdHVyZS52ZWxvY2l0eVg7ZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpnfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLDQ9PT1mJiYoZz5lLmlubmVyV2lkdGgoKS8yfHxoPC0uNzUpJiYoYj0hMCksMj09PWYmJihnPC0xKmUuaW5uZXJXaWR0aCgpLzJ8fGg+Ljc1KSYmKGM9ITApfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihkKXtpZihNYXRoLmFicyhkLmdlc3R1cmUuZGVsdGFYKTxhKHRoaXMpLmlubmVyV2lkdGgoKS8yJiYoYz0hMSxiPSExKSxcInRvdWNoXCI9PT1kLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBlPWEodGhpcyk7aWYoYnx8Yyl7dmFyIGY7Zj1iP2UuaW5uZXJXaWR0aCgpOi0xKmUuaW5uZXJXaWR0aCgpLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6Zn0se2R1cmF0aW9uOjEwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZS5jc3MoXCJib3JkZXJcIixcIm5vbmVcIiksZS52ZWxvY2l0eSh7aGVpZ2h0OjAscGFkZGluZzowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlLnJlbW92ZSgpfX0pfX0pfWVsc2UgZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MTAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KTtiPSExLGM9ITF9fSl9KX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPSExO01hdGVyaWFsaXplLnNjcm9sbEZpcmU9ZnVuY3Rpb24oYSl7dmFyIGM9ZnVuY3Rpb24oKXtmb3IodmFyIGI9d2luZG93LnBhZ2VZT2Zmc2V0K3dpbmRvdy5pbm5lckhlaWdodCxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLnNlbGVjdG9yLGY9ZC5vZmZzZXQsZz1kLmNhbGxiYWNrLGg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZihudWxsIT09aCl7dmFyIGk9aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0O2lmKGI+aStmJiZkLmRvbmUhPT0hMCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZylnLmNhbGwodGhpcyxoKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBnKXt2YXIgaj1uZXcgRnVuY3Rpb24oZyk7aihoKX1kLmRvbmU9ITB9fX19LGQ9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtjKCl9LGEudGhyb3R0bGV8fDEwMCk7Ynx8KHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixkKSxiPSEwKSxzZXRUaW1lb3V0KGQsMCl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJwaWNrZXJcIixbXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTp0aGlzLlBpY2tlcj1hKGpRdWVyeSl9KGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZixnLGksbCl7ZnVuY3Rpb24gbSgpe3JldHVybiBiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLHkuY29tcG9uZW50Lm5vZGVzKHQub3Blbiksdi5ib3gpLHYud3JhcCksdi5mcmFtZSksdi5ob2xkZXIpfWZ1bmN0aW9uIG4oKXt3LmRhdGEoZyx5KS5hZGRDbGFzcyh2LmlucHV0KS5hdHRyKFwidGFiaW5kZXhcIiwtMSkudmFsKHcuZGF0YShcInZhbHVlXCIpP3kuZ2V0KFwic2VsZWN0XCIsdS5mb3JtYXQpOmYudmFsdWUpLHUuZWRpdGFibGV8fHcub24oXCJmb2N1cy5cIit0LmlkK1wiIGNsaWNrLlwiK3QuaWQsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLHkuJHJvb3QuZXEoMCkuZm9jdXMoKX0pLm9uKFwia2V5ZG93bi5cIit0LmlkLHEpLGUoZix7aGFzcG9wdXA6ITAsZXhwYW5kZWQ6ITEscmVhZG9ubHk6ITEsb3duczpmLmlkK1wiX3Jvb3RcIn0pfWZ1bmN0aW9uIG8oKXt5LiRyb290Lm9uKHtrZXlkb3duOnEsZm9jdXNpbjpmdW5jdGlvbihhKXt5LiRyb290LnJlbW92ZUNsYXNzKHYuZm9jdXNlZCksYS5zdG9wUHJvcGFnYXRpb24oKX0sXCJtb3VzZWRvd24gY2xpY2tcIjpmdW5jdGlvbihiKXt2YXIgYz1iLnRhcmdldDtjIT15LiRyb290LmNoaWxkcmVuKClbMF0mJihiLnN0b3BQcm9wYWdhdGlvbigpLFwibW91c2Vkb3duXCIhPWIudHlwZXx8YShjKS5pcyhcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIG9wdGlvblwiKXx8KGIucHJldmVudERlZmF1bHQoKSx5LiRyb290LmVxKDApLmZvY3VzKCkpKX19KS5vbih7Zm9jdXM6ZnVuY3Rpb24oKXt3LmFkZENsYXNzKHYudGFyZ2V0KX0sYmx1cjpmdW5jdGlvbigpe3cucmVtb3ZlQ2xhc3Modi50YXJnZXQpfX0pLm9uKFwiZm9jdXMudG9PcGVuXCIscikub24oXCJjbGlja1wiLFwiW2RhdGEtcGlja10sIFtkYXRhLW5hdl0sIFtkYXRhLWNsZWFyXSwgW2RhdGEtY2xvc2VdXCIsZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGM9Yi5kYXRhKCksZD1iLmhhc0NsYXNzKHYubmF2RGlzYWJsZWQpfHxiLmhhc0NsYXNzKHYuZGlzYWJsZWQpLGU9aCgpO2U9ZSYmKGUudHlwZXx8ZS5ocmVmKSwoZHx8ZSYmIWEuY29udGFpbnMoeS4kcm9vdFswXSxlKSkmJnkuJHJvb3QuZXEoMCkuZm9jdXMoKSwhZCYmYy5uYXY/eS5zZXQoXCJoaWdobGlnaHRcIix5LmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCx7bmF2OmMubmF2fSk6IWQmJlwicGlja1wiaW4gYz95LnNldChcInNlbGVjdFwiLGMucGljayk6Yy5jbGVhcj95LmNsZWFyKCkuY2xvc2UoITApOmMuY2xvc2UmJnkuY2xvc2UoITApfSksZSh5LiRyb290WzBdLFwiaGlkZGVuXCIsITApfWZ1bmN0aW9uIHAoKXt2YXIgYjt1LmhpZGRlbk5hbWU9PT0hMD8oYj1mLm5hbWUsZi5uYW1lPVwiXCIpOihiPVtcInN0cmluZ1wiPT10eXBlb2YgdS5oaWRkZW5QcmVmaXg/dS5oaWRkZW5QcmVmaXg6XCJcIixcInN0cmluZ1wiPT10eXBlb2YgdS5oaWRkZW5TdWZmaXg/dS5oaWRkZW5TdWZmaXg6XCJfc3VibWl0XCJdLGI9YlswXStmLm5hbWUrYlsxXSkseS5faGlkZGVuPWEoJzxpbnB1dCB0eXBlPWhpZGRlbiBuYW1lPVwiJytiKydcIicrKHcuZGF0YShcInZhbHVlXCIpfHxmLnZhbHVlPycgdmFsdWU9XCInK3kuZ2V0KFwic2VsZWN0XCIsdS5mb3JtYXRTdWJtaXQpKydcIic6XCJcIikrXCI+XCIpWzBdLHcub24oXCJjaGFuZ2UuXCIrdC5pZCxmdW5jdGlvbigpe3kuX2hpZGRlbi52YWx1ZT1mLnZhbHVlP3kuZ2V0KFwic2VsZWN0XCIsdS5mb3JtYXRTdWJtaXQpOlwiXCJ9KSx1LmNvbnRhaW5lcj9hKHUuY29udGFpbmVyKS5hcHBlbmQoeS5faGlkZGVuKTp3LmFmdGVyKHkuX2hpZGRlbil9ZnVuY3Rpb24gcShhKXt2YXIgYj1hLmtleUNvZGUsYz0vXig4fDQ2KSQvLnRlc3QoYik7cmV0dXJuIDI3PT1iPyh5LmNsb3NlKCksITEpOnZvaWQoKDMyPT1ifHxjfHwhdC5vcGVuJiZ5LmNvbXBvbmVudC5rZXlbYl0pJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksYz95LmNsZWFyKCkuY2xvc2UoKTp5Lm9wZW4oKSkpfWZ1bmN0aW9uIHIoYSl7YS5zdG9wUHJvcGFnYXRpb24oKSxcImZvY3VzXCI9PWEudHlwZSYmeS4kcm9vdC5hZGRDbGFzcyh2LmZvY3VzZWQpLHkub3BlbigpfWlmKCFmKXJldHVybiBiO3ZhciBzPSExLHQ9e2lkOmYuaWR8fFwiUFwiK01hdGguYWJzKH5+KE1hdGgucmFuZG9tKCkqbmV3IERhdGUpKX0sdT1pP2EuZXh0ZW5kKCEwLHt9LGkuZGVmYXVsdHMsbCk6bHx8e30sdj1hLmV4dGVuZCh7fSxiLmtsYXNzZXMoKSx1LmtsYXNzKSx3PWEoZikseD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXJ0KCl9LHk9eC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOngsJG5vZGU6dyxzdGFydDpmdW5jdGlvbigpe3JldHVybiB0JiZ0LnN0YXJ0P3k6KHQubWV0aG9kcz17fSx0LnN0YXJ0PSEwLHQub3Blbj0hMSx0LnR5cGU9Zi50eXBlLGYuYXV0b2ZvY3VzPWY9PWgoKSxmLnJlYWRPbmx5PSF1LmVkaXRhYmxlLGYuaWQ9Zi5pZHx8dC5pZCxcInRleHRcIiE9Zi50eXBlJiYoZi50eXBlPVwidGV4dFwiKSx5LmNvbXBvbmVudD1uZXcgaSh5LHUpLHkuJHJvb3Q9YShiLl8ubm9kZShcImRpdlwiLG0oKSx2LnBpY2tlciwnaWQ9XCInK2YuaWQrJ19yb290XCIgdGFiaW5kZXg9XCIwXCInKSksbygpLHUuZm9ybWF0U3VibWl0JiZwKCksbigpLHUuY29udGFpbmVyP2EodS5jb250YWluZXIpLmFwcGVuZCh5LiRyb290KTp3LmFmdGVyKHkuJHJvb3QpLHkub24oe3N0YXJ0OnkuY29tcG9uZW50Lm9uU3RhcnQscmVuZGVyOnkuY29tcG9uZW50Lm9uUmVuZGVyLHN0b3A6eS5jb21wb25lbnQub25TdG9wLG9wZW46eS5jb21wb25lbnQub25PcGVuLGNsb3NlOnkuY29tcG9uZW50Lm9uQ2xvc2Usc2V0OnkuY29tcG9uZW50Lm9uU2V0fSkub24oe3N0YXJ0OnUub25TdGFydCxyZW5kZXI6dS5vblJlbmRlcixzdG9wOnUub25TdG9wLG9wZW46dS5vbk9wZW4sY2xvc2U6dS5vbkNsb3NlLHNldDp1Lm9uU2V0fSkscz1jKHkuJHJvb3QuY2hpbGRyZW4oKVswXSksZi5hdXRvZm9jdXMmJnkub3BlbigpLHkudHJpZ2dlcihcInN0YXJ0XCIpLnRyaWdnZXIoXCJyZW5kZXJcIikpfSxyZW5kZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/eS4kcm9vdC5odG1sKG0oKSk6eS4kcm9vdC5maW5kKFwiLlwiK3YuYm94KS5odG1sKHkuY29tcG9uZW50Lm5vZGVzKHQub3BlbikpLHkudHJpZ2dlcihcInJlbmRlclwiKX0sc3RvcDpmdW5jdGlvbigpe3JldHVybiB0LnN0YXJ0Pyh5LmNsb3NlKCkseS5faGlkZGVuJiZ5Ll9oaWRkZW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh5Ll9oaWRkZW4pLHkuJHJvb3QucmVtb3ZlKCksdy5yZW1vdmVDbGFzcyh2LmlucHV0KS5yZW1vdmVEYXRhKGcpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt3Lm9mZihcIi5cIit0LmlkKX0sMCksZi50eXBlPXQudHlwZSxmLnJlYWRPbmx5PSExLHkudHJpZ2dlcihcInN0b3BcIiksdC5tZXRob2RzPXt9LHQuc3RhcnQ9ITEseSk6eX0sb3BlbjpmdW5jdGlvbihjKXtyZXR1cm4gdC5vcGVuP3k6KHcuYWRkQ2xhc3Modi5hY3RpdmUpLGUoZixcImV4cGFuZGVkXCIsITApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LiRyb290LmFkZENsYXNzKHYub3BlbmVkKSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMSl9LDApLGMhPT0hMSYmKHQub3Blbj0hMCxzJiZrLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIikuY3NzKFwicGFkZGluZy1yaWdodFwiLFwiKz1cIitkKCkpLHkuJHJvb3QuZXEoMCkuZm9jdXMoKSxqLm9uKFwiY2xpY2suXCIrdC5pZCtcIiBmb2N1c2luLlwiK3QuaWQsZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQ7YiE9ZiYmYiE9ZG9jdW1lbnQmJjMhPWEud2hpY2gmJnkuY2xvc2UoYj09PXkuJHJvb3QuY2hpbGRyZW4oKVswXSl9KS5vbihcImtleWRvd24uXCIrdC5pZCxmdW5jdGlvbihjKXt2YXIgZD1jLmtleUNvZGUsZT15LmNvbXBvbmVudC5rZXlbZF0sZj1jLnRhcmdldDsyNz09ZD95LmNsb3NlKCEwKTpmIT15LiRyb290WzBdfHwhZSYmMTMhPWQ/YS5jb250YWlucyh5LiRyb290WzBdLGYpJiYxMz09ZCYmKGMucHJldmVudERlZmF1bHQoKSxmLmNsaWNrKCkpOihjLnByZXZlbnREZWZhdWx0KCksZT9iLl8udHJpZ2dlcih5LmNvbXBvbmVudC5rZXkuZ28seSxbYi5fLnRyaWdnZXIoZSldKTp5LiRyb290LmZpbmQoXCIuXCIrdi5oaWdobGlnaHRlZCkuaGFzQ2xhc3Modi5kaXNhYmxlZCl8fHkuc2V0KFwic2VsZWN0XCIseS5jb21wb25lbnQuaXRlbS5oaWdobGlnaHQpLmNsb3NlKCkpfSkpLHkudHJpZ2dlcihcIm9wZW5cIikpfSxjbG9zZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmKHkuJHJvb3Qub2ZmKFwiZm9jdXMudG9PcGVuXCIpLmVxKDApLmZvY3VzKCksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3Qub24oXCJmb2N1cy50b09wZW5cIixyKX0sMCkpLHcucmVtb3ZlQ2xhc3Modi5hY3RpdmUpLGUoZixcImV4cGFuZGVkXCIsITEpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LiRyb290LnJlbW92ZUNsYXNzKHYub3BlbmVkK1wiIFwiK3YuZm9jdXNlZCksZSh5LiRyb290WzBdLFwiaGlkZGVuXCIsITApfSwwKSx0Lm9wZW4/KHQub3Blbj0hMSxzJiZrLmNzcyhcIm92ZXJmbG93XCIsXCJcIikuY3NzKFwicGFkZGluZy1yaWdodFwiLFwiLT1cIitkKCkpLGoub2ZmKFwiLlwiK3QuaWQpLHkudHJpZ2dlcihcImNsb3NlXCIpKTp5fSxjbGVhcjpmdW5jdGlvbihhKXtyZXR1cm4geS5zZXQoXCJjbGVhclwiLG51bGwsYSl9LHNldDpmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnPWEuaXNQbGFpbk9iamVjdChiKSxoPWc/Yjp7fTtpZihkPWcmJmEuaXNQbGFpbk9iamVjdChjKT9jOmR8fHt9LGIpe2d8fChoW2JdPWMpO2ZvcihlIGluIGgpZj1oW2VdLGUgaW4geS5jb21wb25lbnQuaXRlbSYmKHZvaWQgMD09PWYmJihmPW51bGwpLHkuY29tcG9uZW50LnNldChlLGYsZCkpLFwic2VsZWN0XCIhPWUmJlwiY2xlYXJcIiE9ZXx8dy52YWwoXCJjbGVhclwiPT1lP1wiXCI6eS5nZXQoZSx1LmZvcm1hdCkpLnRyaWdnZXIoXCJjaGFuZ2VcIik7eS5yZW5kZXIoKX1yZXR1cm4gZC5tdXRlZD95OnkudHJpZ2dlcihcInNldFwiLGgpfSxnZXQ6ZnVuY3Rpb24oYSxjKXtpZihhPWF8fFwidmFsdWVcIixudWxsIT10W2FdKXJldHVybiB0W2FdO2lmKFwidmFsdWVTdWJtaXRcIj09YSl7aWYoeS5faGlkZGVuKXJldHVybiB5Ll9oaWRkZW4udmFsdWU7YT1cInZhbHVlXCJ9aWYoXCJ2YWx1ZVwiPT1hKXJldHVybiBmLnZhbHVlO2lmKGEgaW4geS5jb21wb25lbnQuaXRlbSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMpe3ZhciBkPXkuY29tcG9uZW50LmdldChhKTtyZXR1cm4gZD9iLl8udHJpZ2dlcih5LmNvbXBvbmVudC5mb3JtYXRzLnRvU3RyaW5nLHkuY29tcG9uZW50LFtjLGRdKTpcIlwifXJldHVybiB5LmNvbXBvbmVudC5nZXQoYSl9fSxvbjpmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnPWEuaXNQbGFpbk9iamVjdChiKSxoPWc/Yjp7fTtpZihiKXtnfHwoaFtiXT1jKTtmb3IoZSBpbiBoKWY9aFtlXSxkJiYoZT1cIl9cIitlKSx0Lm1ldGhvZHNbZV09dC5tZXRob2RzW2VdfHxbXSx0Lm1ldGhvZHNbZV0ucHVzaChmKX1yZXR1cm4geX0sb2ZmOmZ1bmN0aW9uKCl7dmFyIGEsYixjPWFyZ3VtZW50cztmb3IoYT0wLG5hbWVzQ291bnQ9Yy5sZW5ndGg7YTxuYW1lc0NvdW50O2ErPTEpYj1jW2FdLGIgaW4gdC5tZXRob2RzJiZkZWxldGUgdC5tZXRob2RzW2JdO3JldHVybiB5fSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGQ9dC5tZXRob2RzW2FdO2QmJmQubWFwKGZ1bmN0aW9uKGEpe2IuXy50cmlnZ2VyKGEseSxbY10pfSl9O3JldHVybiBkKFwiX1wiK2EpLGQoYSkseX19O3JldHVybiBuZXcgeH1mdW5jdGlvbiBjKGEpe3ZhciBiLGM9XCJwb3NpdGlvblwiO3JldHVybiBhLmN1cnJlbnRTdHlsZT9iPWEuY3VycmVudFN0eWxlW2NdOndpbmRvdy5nZXRDb21wdXRlZFN0eWxlJiYoYj1nZXRDb21wdXRlZFN0eWxlKGEpW2NdKSxcImZpeGVkXCI9PWJ9ZnVuY3Rpb24gZCgpe2lmKGsuaGVpZ2h0KCk8PWkuaGVpZ2h0KCkpcmV0dXJuIDA7dmFyIGI9YSgnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjEwMHB4XCIgLz4nKS5hcHBlbmRUbyhcImJvZHlcIiksYz1iWzBdLm9mZnNldFdpZHRoO2IuY3NzKFwib3ZlcmZsb3dcIixcInNjcm9sbFwiKTt2YXIgZD1hKCc8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+JykuYXBwZW5kVG8oYiksZT1kWzBdLm9mZnNldFdpZHRoO3JldHVybiBiLnJlbW92ZSgpLGMtZX1mdW5jdGlvbiBlKGIsYyxkKXtpZihhLmlzUGxhaW5PYmplY3QoYykpZm9yKHZhciBlIGluIGMpZihiLGUsY1tlXSk7ZWxzZSBmKGIsYyxkKX1mdW5jdGlvbiBmKGEsYixjKXthLnNldEF0dHJpYnV0ZSgoXCJyb2xlXCI9PWI/XCJcIjpcImFyaWEtXCIpK2IsYyl9ZnVuY3Rpb24gZyhiLGMpe2EuaXNQbGFpbk9iamVjdChiKXx8KGI9e2F0dHJpYnV0ZTpjfSksYz1cIlwiO2Zvcih2YXIgZCBpbiBiKXt2YXIgZT0oXCJyb2xlXCI9PWQ/XCJcIjpcImFyaWEtXCIpK2QsZj1iW2RdO2MrPW51bGw9PWY/XCJcIjplKyc9XCInK2JbZF0rJ1wiJ31yZXR1cm4gY31mdW5jdGlvbiBoKCl7dHJ5e3JldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319dmFyIGk9YSh3aW5kb3cpLGo9YShkb2N1bWVudCksaz1hKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7cmV0dXJuIGIua2xhc3Nlcz1mdW5jdGlvbihhKXtyZXR1cm4gYT1hfHxcInBpY2tlclwiLHtwaWNrZXI6YSxvcGVuZWQ6YStcIi0tb3BlbmVkXCIsZm9jdXNlZDphK1wiLS1mb2N1c2VkXCIsaW5wdXQ6YStcIl9faW5wdXRcIixhY3RpdmU6YStcIl9faW5wdXQtLWFjdGl2ZVwiLHRhcmdldDphK1wiX19pbnB1dC0tdGFyZ2V0XCIsaG9sZGVyOmErXCJfX2hvbGRlclwiLGZyYW1lOmErXCJfX2ZyYW1lXCIsd3JhcDphK1wiX193cmFwXCIsYm94OmErXCJfX2JveFwifX0sYi5fPXtncm91cDpmdW5jdGlvbihhKXtmb3IodmFyIGMsZD1cIlwiLGU9Yi5fLnRyaWdnZXIoYS5taW4sYSk7ZTw9Yi5fLnRyaWdnZXIoYS5tYXgsYSxbZV0pO2UrPWEuaSljPWIuXy50cmlnZ2VyKGEuaXRlbSxhLFtlXSksZCs9Yi5fLm5vZGUoYS5ub2RlLGNbMF0sY1sxXSxjWzJdKTtyZXR1cm4gZH0sbm9kZTpmdW5jdGlvbihiLGMsZCxlKXtyZXR1cm4gYz8oYz1hLmlzQXJyYXkoYyk/Yy5qb2luKFwiXCIpOmMsZD1kPycgY2xhc3M9XCInK2QrJ1wiJzpcIlwiLGU9ZT9cIiBcIitlOlwiXCIsXCI8XCIrYitkK2UrXCI+XCIrYytcIjwvXCIrYitcIj5cIik6XCJcIn0sbGVhZDpmdW5jdGlvbihhKXtyZXR1cm4oYTwxMD9cIjBcIjpcIlwiKSthfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EuYXBwbHkoYixjfHxbXSk6YX0sZGlnaXRzOmZ1bmN0aW9uKGEpe3JldHVybi9cXGQvLnRlc3QoYVsxXSk/MjoxfSxpc0RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJue30udG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiRGF0ZVwiKT4tMSYmdGhpcy5pc0ludGVnZXIoYS5nZXREYXRlKCkpfSxpc0ludGVnZXI6ZnVuY3Rpb24oYSl7cmV0dXJue30udG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiTnVtYmVyXCIpPi0xJiZhJTE9PT0wfSxhcmlhQXR0cjpnfSxiLmV4dGVuZD1mdW5jdGlvbihjLGQpe2EuZm5bY109ZnVuY3Rpb24oZSxmKXt2YXIgZz10aGlzLmRhdGEoYyk7cmV0dXJuXCJwaWNrZXJcIj09ZT9nOmcmJlwic3RyaW5nXCI9PXR5cGVvZiBlP2IuXy50cmlnZ2VyKGdbZV0sZyxbZl0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBmPWEodGhpcyk7Zi5kYXRhKGMpfHxuZXcgYih0aGlzLGMsZCxlKX0pfSxhLmZuW2NdLmRlZmF1bHRzPWQuZGVmYXVsdHN9LGJ9KSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInBpY2tlclwiLFwianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcIi4vcGlja2VyLmpzXCIpLHJlcXVpcmUoXCJqcXVlcnlcIikpOmEoUGlja2VyLGpRdWVyeSl9KGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe3ZhciBjPXRoaXMsZD1hLiRub2RlWzBdLGU9ZC52YWx1ZSxmPWEuJG5vZGUuZGF0YShcInZhbHVlXCIpLGc9Znx8ZSxoPWY/Yi5mb3JtYXRTdWJtaXQ6Yi5mb3JtYXQsaT1mdW5jdGlvbigpe3JldHVybiBkLmN1cnJlbnRTdHlsZT9cInJ0bFwiPT1kLmN1cnJlbnRTdHlsZS5kaXJlY3Rpb246XCJydGxcIj09Z2V0Q29tcHV0ZWRTdHlsZShhLiRyb290WzBdKS5kaXJlY3Rpb259O2Muc2V0dGluZ3M9YixjLiRub2RlPWEuJG5vZGUsYy5xdWV1ZT17bWluOlwibWVhc3VyZSBjcmVhdGVcIixtYXg6XCJtZWFzdXJlIGNyZWF0ZVwiLG5vdzpcIm5vdyBjcmVhdGVcIixzZWxlY3Q6XCJwYXJzZSBjcmVhdGUgdmFsaWRhdGVcIixoaWdobGlnaHQ6XCJwYXJzZSBuYXZpZ2F0ZSBjcmVhdGUgdmFsaWRhdGVcIix2aWV3OlwicGFyc2UgY3JlYXRlIHZhbGlkYXRlIHZpZXdzZXRcIixkaXNhYmxlOlwiZGVhY3RpdmF0ZVwiLGVuYWJsZTpcImFjdGl2YXRlXCJ9LGMuaXRlbT17fSxjLml0ZW0uY2xlYXI9bnVsbCxjLml0ZW0uZGlzYWJsZT0oYi5kaXNhYmxlfHxbXSkuc2xpY2UoMCksYy5pdGVtLmVuYWJsZT0tZnVuY3Rpb24oYSl7cmV0dXJuIGFbMF09PT0hMD9hLnNoaWZ0KCk6LTF9KGMuaXRlbS5kaXNhYmxlKSxjLnNldChcIm1pblwiLGIubWluKS5zZXQoXCJtYXhcIixiLm1heCkuc2V0KFwibm93XCIpLGc/Yy5zZXQoXCJzZWxlY3RcIixnLHtmb3JtYXQ6aH0pOmMuc2V0KFwic2VsZWN0XCIsbnVsbCkuc2V0KFwiaGlnaGxpZ2h0XCIsYy5pdGVtLm5vdyksYy5rZXk9ezQwOjcsMzg6LTcsMzk6ZnVuY3Rpb24oKXtyZXR1cm4gaSgpPy0xOjF9LDM3OmZ1bmN0aW9uKCl7cmV0dXJuIGkoKT8xOi0xfSxnbzpmdW5jdGlvbihhKXt2YXIgYj1jLml0ZW0uaGlnaGxpZ2h0LGQ9bmV3IERhdGUoYi55ZWFyLGIubW9udGgsYi5kYXRlK2EpO2Muc2V0KFwiaGlnaGxpZ2h0XCIsZCx7aW50ZXJ2YWw6YX0pLHRoaXMucmVuZGVyKCl9fSxhLm9uKFwicmVuZGVyXCIsZnVuY3Rpb24oKXthLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RNb250aCkub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBjPXRoaXMudmFsdWU7YyYmKGEuc2V0KFwiaGlnaGxpZ2h0XCIsW2EuZ2V0KFwidmlld1wiKS55ZWFyLGMsYS5nZXQoXCJoaWdobGlnaHRcIikuZGF0ZV0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdE1vbnRoKS50cmlnZ2VyKFwiZm9jdXNcIikpfSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0WWVhcikub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBjPXRoaXMudmFsdWU7YyYmKGEuc2V0KFwiaGlnaGxpZ2h0XCIsW2MsYS5nZXQoXCJ2aWV3XCIpLm1vbnRoLGEuZ2V0KFwiaGlnaGxpZ2h0XCIpLmRhdGVdKSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RZZWFyKS50cmlnZ2VyKFwiZm9jdXNcIikpfSl9LDEpLm9uKFwib3BlblwiLGZ1bmN0aW9uKCl7dmFyIGQ9XCJcIjtjLmRpc2FibGVkKGMuZ2V0KFwibm93XCIpKSYmKGQ9XCI6bm90KC5cIitiLmtsYXNzLmJ1dHRvblRvZGF5K1wiKVwiKSxhLiRyb290LmZpbmQoXCJidXR0b25cIitkK1wiLCBzZWxlY3RcIikuYXR0cihcImRpc2FibGVkXCIsITEpfSwxKS5vbihcImNsb3NlXCIsZnVuY3Rpb24oKXthLiRyb290LmZpbmQoXCJidXR0b24sIHNlbGVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwhMCl9LDEpfXZhciBkPTcsZT02LGY9YS5fO2MucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPWQuaXRlbTtyZXR1cm4gbnVsbD09PWI/KFwiY2xlYXJcIj09YSYmKGE9XCJzZWxlY3RcIiksZVthXT1iLGQpOihlW1wiZW5hYmxlXCI9PWE/XCJkaXNhYmxlXCI6XCJmbGlwXCI9PWE/XCJlbmFibGVcIjphXT1kLnF1ZXVlW2FdLnNwbGl0KFwiIFwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGI9ZFtlXShhLGIsYyl9KS5wb3AoKSxcInNlbGVjdFwiPT1hP2Quc2V0KFwiaGlnaGxpZ2h0XCIsZS5zZWxlY3QsYyk6XCJoaWdobGlnaHRcIj09YT9kLnNldChcInZpZXdcIixlLmhpZ2hsaWdodCxjKTphLm1hdGNoKC9eKGZsaXB8bWlufG1heHxkaXNhYmxlfGVuYWJsZSkkLykmJihlLnNlbGVjdCYmZC5kaXNhYmxlZChlLnNlbGVjdCkmJmQuc2V0KFwic2VsZWN0XCIsZS5zZWxlY3QsYyksXG5lLmhpZ2hsaWdodCYmZC5kaXNhYmxlZChlLmhpZ2hsaWdodCkmJmQuc2V0KFwiaGlnaGxpZ2h0XCIsZS5oaWdobGlnaHQsYykpLGQpfSxjLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaXRlbVthXX0sYy5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxnPXRoaXM7cmV0dXJuIGM9dm9pZCAwPT09Yz9hOmMsYz09LSgxLzApfHxjPT0xLzA/ZT1jOmIuaXNQbGFpbk9iamVjdChjKSYmZi5pc0ludGVnZXIoYy5waWNrKT9jPWMub2JqOmIuaXNBcnJheShjKT8oYz1uZXcgRGF0ZShjWzBdLGNbMV0sY1syXSksYz1mLmlzRGF0ZShjKT9jOmcuY3JlYXRlKCkub2JqKTpjPWYuaXNJbnRlZ2VyKGMpfHxmLmlzRGF0ZShjKT9nLm5vcm1hbGl6ZShuZXcgRGF0ZShjKSxkKTpnLm5vdyhhLGMsZCkse3llYXI6ZXx8Yy5nZXRGdWxsWWVhcigpLG1vbnRoOmV8fGMuZ2V0TW9udGgoKSxkYXRlOmV8fGMuZ2V0RGF0ZSgpLGRheTplfHxjLmdldERheSgpLG9iajplfHxjLHBpY2s6ZXx8Yy5nZXRUaW1lKCl9fSxjLnByb3RvdHlwZS5jcmVhdGVSYW5nZT1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1mdW5jdGlvbihhKXtyZXR1cm4gYT09PSEwfHxiLmlzQXJyYXkoYSl8fGYuaXNEYXRlKGEpP2QuY3JlYXRlKGEpOmF9O3JldHVybiBmLmlzSW50ZWdlcihhKXx8KGE9ZShhKSksZi5pc0ludGVnZXIoYyl8fChjPWUoYykpLGYuaXNJbnRlZ2VyKGEpJiZiLmlzUGxhaW5PYmplY3QoYyk/YT1bYy55ZWFyLGMubW9udGgsYy5kYXRlK2FdOmYuaXNJbnRlZ2VyKGMpJiZiLmlzUGxhaW5PYmplY3QoYSkmJihjPVthLnllYXIsYS5tb250aCxhLmRhdGUrY10pLHtmcm9tOmUoYSksdG86ZShjKX19LGMucHJvdG90eXBlLndpdGhpblJhbmdlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9dGhpcy5jcmVhdGVSYW5nZShhLmZyb20sYS50byksYi5waWNrPj1hLmZyb20ucGljayYmYi5waWNrPD1hLnRvLnBpY2t9LGMucHJvdG90eXBlLm92ZXJsYXBSYW5nZXM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBhPWMuY3JlYXRlUmFuZ2UoYS5mcm9tLGEudG8pLGI9Yy5jcmVhdGVSYW5nZShiLmZyb20sYi50byksYy53aXRoaW5SYW5nZShhLGIuZnJvbSl8fGMud2l0aGluUmFuZ2UoYSxiLnRvKXx8Yy53aXRoaW5SYW5nZShiLGEuZnJvbSl8fGMud2l0aGluUmFuZ2UoYixhLnRvKX0sYy5wcm90b3R5cGUubm93PWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj1uZXcgRGF0ZSxjJiZjLnJlbCYmYi5zZXREYXRlKGIuZ2V0RGF0ZSgpK2MucmVsKSx0aGlzLm5vcm1hbGl6ZShiLGMpfSxjLnByb3RvdHlwZS5uYXZpZ2F0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZixnLGgsaT1iLmlzQXJyYXkoYyksaj1iLmlzUGxhaW5PYmplY3QoYyksaz10aGlzLml0ZW0udmlldztpZihpfHxqKXtmb3Ioaj8oZj1jLnllYXIsZz1jLm1vbnRoLGg9Yy5kYXRlKTooZj0rY1swXSxnPStjWzFdLGg9K2NbMl0pLGQmJmQubmF2JiZrJiZrLm1vbnRoIT09ZyYmKGY9ay55ZWFyLGc9ay5tb250aCksZT1uZXcgRGF0ZShmLGcrKGQmJmQubmF2P2QubmF2OjApLDEpLGY9ZS5nZXRGdWxsWWVhcigpLGc9ZS5nZXRNb250aCgpO25ldyBEYXRlKGYsZyxoKS5nZXRNb250aCgpIT09ZzspaC09MTtjPVtmLGcsaF19cmV0dXJuIGN9LGMucHJvdG90eXBlLm5vcm1hbGl6ZT1mdW5jdGlvbihhKXtyZXR1cm4gYS5zZXRIb3VycygwLDAsMCwwKSxhfSxjLnByb3RvdHlwZS5tZWFzdXJlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYj9cInN0cmluZ1wiPT10eXBlb2YgYj9iPWMucGFyc2UoYSxiKTpmLmlzSW50ZWdlcihiKSYmKGI9Yy5ub3coYSxiLHtyZWw6Yn0pKTpiPVwibWluXCI9PWE/LSgxLzApOjEvMCxifSxjLnByb3RvdHlwZS52aWV3c2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuY3JlYXRlKFtiLnllYXIsYi5tb250aCwxXSl9LGMucHJvdG90eXBlLnZhbGlkYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxnLGgsaSxqPXRoaXMsaz1jLGw9ZCYmZC5pbnRlcnZhbD9kLmludGVydmFsOjEsbT1qLml0ZW0uZW5hYmxlPT09LTEsbj1qLml0ZW0ubWluLG89ai5pdGVtLm1heCxwPW0mJmouaXRlbS5kaXNhYmxlLmZpbHRlcihmdW5jdGlvbihhKXtpZihiLmlzQXJyYXkoYSkpe3ZhciBkPWouY3JlYXRlKGEpLnBpY2s7ZDxjLnBpY2s/ZT0hMDpkPmMucGljayYmKGc9ITApfXJldHVybiBmLmlzSW50ZWdlcihhKX0pLmxlbmd0aDtpZigoIWR8fCFkLm5hdikmJighbSYmai5kaXNhYmxlZChjKXx8bSYmai5kaXNhYmxlZChjKSYmKHB8fGV8fGcpfHwhbSYmKGMucGljazw9bi5waWNrfHxjLnBpY2s+PW8ucGljaykpKWZvcihtJiYhcCYmKCFnJiZsPjB8fCFlJiZsPDApJiYobCo9LTEpO2ouZGlzYWJsZWQoYykmJihNYXRoLmFicyhsKT4xJiYoYy5tb250aDxrLm1vbnRofHxjLm1vbnRoPmsubW9udGgpJiYoYz1rLGw9bD4wPzE6LTEpLGMucGljazw9bi5waWNrPyhoPSEwLGw9MSxjPWouY3JlYXRlKFtuLnllYXIsbi5tb250aCxuLmRhdGUrKGMucGljaz09PW4ucGljaz8wOi0xKV0pKTpjLnBpY2s+PW8ucGljayYmKGk9ITAsbD0tMSxjPWouY3JlYXRlKFtvLnllYXIsby5tb250aCxvLmRhdGUrKGMucGljaz09PW8ucGljaz8wOjEpXSkpLCFofHwhaSk7KWM9ai5jcmVhdGUoW2MueWVhcixjLm1vbnRoLGMuZGF0ZStsXSk7cmV0dXJuIGN9LGMucHJvdG90eXBlLmRpc2FibGVkPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD1jLml0ZW0uZGlzYWJsZS5maWx0ZXIoZnVuY3Rpb24oZCl7cmV0dXJuIGYuaXNJbnRlZ2VyKGQpP2EuZGF5PT09KGMuc2V0dGluZ3MuZmlyc3REYXk/ZDpkLTEpJTc6Yi5pc0FycmF5KGQpfHxmLmlzRGF0ZShkKT9hLnBpY2s9PT1jLmNyZWF0ZShkKS5waWNrOmIuaXNQbGFpbk9iamVjdChkKT9jLndpdGhpblJhbmdlKGQsYSk6dm9pZCAwfSk7cmV0dXJuIGQ9ZC5sZW5ndGgmJiFkLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYi5pc0FycmF5KGEpJiZcImludmVydGVkXCI9PWFbM118fGIuaXNQbGFpbk9iamVjdChhKSYmYS5pbnZlcnRlZH0pLmxlbmd0aCxjLml0ZW0uZW5hYmxlPT09LTE/IWQ6ZHx8YS5waWNrPGMuaXRlbS5taW4ucGlja3x8YS5waWNrPmMuaXRlbS5tYXgucGlja30sYy5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT17fTtyZXR1cm4gYiYmXCJzdHJpbmdcIj09dHlwZW9mIGI/KGMmJmMuZm9ybWF0fHwoYz1jfHx7fSxjLmZvcm1hdD1kLnNldHRpbmdzLmZvcm1hdCksZC5mb3JtYXRzLnRvQXJyYXkoYy5mb3JtYXQpLm1hcChmdW5jdGlvbihhKXt2YXIgYz1kLmZvcm1hdHNbYV0sZz1jP2YudHJpZ2dlcihjLGQsW2IsZV0pOmEucmVwbGFjZSgvXiEvLFwiXCIpLmxlbmd0aDtjJiYoZVthXT1iLnN1YnN0cigwLGcpKSxiPWIuc3Vic3RyKGcpfSksW2UueXl5eXx8ZS55eSwrKGUubW18fGUubSktMSxlLmRkfHxlLmRdKTpifSxjLnByb3RvdHlwZS5mb3JtYXRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIsYyl7dmFyIGQ9YS5tYXRjaCgvXFx3Ky8pWzBdO3JldHVybiBjLm1tfHxjLm18fChjLm09Yi5pbmRleE9mKGQpKzEpLGQubGVuZ3RofWZ1bmN0aW9uIGIoYSl7cmV0dXJuIGEubWF0Y2goL1xcdysvKVswXS5sZW5ndGh9cmV0dXJue2Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT9mLmRpZ2l0cyhhKTpiLmRhdGV9LGRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/MjpmLmxlYWQoYi5kYXRlKX0sZGRkOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE/YihhKTp0aGlzLnNldHRpbmdzLndlZWtkYXlzU2hvcnRbYy5kYXldfSxkZGRkOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE/YihhKTp0aGlzLnNldHRpbmdzLndlZWtkYXlzRnVsbFtjLmRheV19LG06ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT9mLmRpZ2l0cyhhKTpiLm1vbnRoKzF9LG1tOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/MjpmLmxlYWQoYi5tb250aCsxKX0sbW1tOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy5zZXR0aW5ncy5tb250aHNTaG9ydDtyZXR1cm4gYj9hKGIsZCxjKTpkW2MubW9udGhdfSxtbW1tOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy5zZXR0aW5ncy5tb250aHNGdWxsO3JldHVybiBiP2EoYixkLGMpOmRbYy5tb250aF19LHl5OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/MjooXCJcIitiLnllYXIpLnNsaWNlKDIpfSx5eXl5OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/NDpiLnllYXJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3BsaXQoLyhkezEsNH18bXsxLDR9fHl7NH18eXl8IS4pL2cpfSx0b1N0cmluZzpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGMuZm9ybWF0cy50b0FycmF5KGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gZi50cmlnZ2VyKGMuZm9ybWF0c1thXSxjLFswLGJdKXx8YS5yZXBsYWNlKC9eIS8sXCJcIil9KS5qb2luKFwiXCIpfX19KCksYy5wcm90b3R5cGUuaXNEYXRlRXhhY3Q9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzO3JldHVybiBmLmlzSW50ZWdlcihhKSYmZi5pc0ludGVnZXIoYyl8fFwiYm9vbGVhblwiPT10eXBlb2YgYSYmXCJib29sZWFuXCI9PXR5cGVvZiBjP2E9PT1jOihmLmlzRGF0ZShhKXx8Yi5pc0FycmF5KGEpKSYmKGYuaXNEYXRlKGMpfHxiLmlzQXJyYXkoYykpP2QuY3JlYXRlKGEpLnBpY2s9PT1kLmNyZWF0ZShjKS5waWNrOiEoIWIuaXNQbGFpbk9iamVjdChhKXx8IWIuaXNQbGFpbk9iamVjdChjKSkmJihkLmlzRGF0ZUV4YWN0KGEuZnJvbSxjLmZyb20pJiZkLmlzRGF0ZUV4YWN0KGEudG8sYy50bykpfSxjLnByb3RvdHlwZS5pc0RhdGVPdmVybGFwPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWQuc2V0dGluZ3MuZmlyc3REYXk/MTowO3JldHVybiBmLmlzSW50ZWdlcihhKSYmKGYuaXNEYXRlKGMpfHxiLmlzQXJyYXkoYykpPyhhPWElNytlLGE9PT1kLmNyZWF0ZShjKS5kYXkrMSk6Zi5pc0ludGVnZXIoYykmJihmLmlzRGF0ZShhKXx8Yi5pc0FycmF5KGEpKT8oYz1jJTcrZSxjPT09ZC5jcmVhdGUoYSkuZGF5KzEpOiEoIWIuaXNQbGFpbk9iamVjdChhKXx8IWIuaXNQbGFpbk9iamVjdChjKSkmJmQub3ZlcmxhcFJhbmdlcyhhLGMpfSxjLnByb3RvdHlwZS5mbGlwRW5hYmxlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuaXRlbTtiLmVuYWJsZT1hfHwoYi5lbmFibGU9PS0xPzE6LTEpfSxjLnByb3RvdHlwZS5kZWFjdGl2YXRlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWQuaXRlbS5kaXNhYmxlLnNsaWNlKDApO3JldHVyblwiZmxpcFwiPT1jP2QuZmxpcEVuYWJsZSgpOmM9PT0hMT8oZC5mbGlwRW5hYmxlKDEpLGU9W10pOmM9PT0hMD8oZC5mbGlwRW5hYmxlKC0xKSxlPVtdKTpjLm1hcChmdW5jdGlvbihhKXtmb3IodmFyIGMsZz0wO2c8ZS5sZW5ndGg7Zys9MSlpZihkLmlzRGF0ZUV4YWN0KGEsZVtnXSkpe2M9ITA7YnJlYWt9Y3x8KGYuaXNJbnRlZ2VyKGEpfHxmLmlzRGF0ZShhKXx8Yi5pc0FycmF5KGEpfHxiLmlzUGxhaW5PYmplY3QoYSkmJmEuZnJvbSYmYS50bykmJmUucHVzaChhKX0pLGV9LGMucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWQuaXRlbS5kaXNhYmxlLGc9ZS5sZW5ndGg7cmV0dXJuXCJmbGlwXCI9PWM/ZC5mbGlwRW5hYmxlKCk6Yz09PSEwPyhkLmZsaXBFbmFibGUoMSksZT1bXSk6Yz09PSExPyhkLmZsaXBFbmFibGUoLTEpLGU9W10pOmMubWFwKGZ1bmN0aW9uKGEpe3ZhciBjLGgsaSxqO2ZvcihpPTA7aTxnO2krPTEpe2lmKGg9ZVtpXSxkLmlzRGF0ZUV4YWN0KGgsYSkpe2M9ZVtpXT1udWxsLGo9ITA7YnJlYWt9aWYoZC5pc0RhdGVPdmVybGFwKGgsYSkpe2IuaXNQbGFpbk9iamVjdChhKT8oYS5pbnZlcnRlZD0hMCxjPWEpOmIuaXNBcnJheShhKT8oYz1hLGNbM118fGMucHVzaChcImludmVydGVkXCIpKTpmLmlzRGF0ZShhKSYmKGM9W2EuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCksXCJpbnZlcnRlZFwiXSk7YnJlYWt9fWlmKGMpZm9yKGk9MDtpPGc7aSs9MSlpZihkLmlzRGF0ZUV4YWN0KGVbaV0sYSkpe2VbaV09bnVsbDticmVha31pZihqKWZvcihpPTA7aTxnO2krPTEpaWYoZC5pc0RhdGVPdmVybGFwKGVbaV0sYSkpe2VbaV09bnVsbDticmVha31jJiZlLnB1c2goYyl9KSxlLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YX0pfSxjLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9Yi5zZXR0aW5ncyxnPWIuaXRlbSxoPWcubm93LGk9Zy5zZWxlY3Qsaj1nLmhpZ2hsaWdodCxrPWcudmlldyxsPWcuZGlzYWJsZSxtPWcubWluLG49Zy5tYXgsbz1mdW5jdGlvbihhLGIpe3JldHVybiBjLmZpcnN0RGF5JiYoYS5wdXNoKGEuc2hpZnQoKSksYi5wdXNoKGIuc2hpZnQoKSkpLGYubm9kZShcInRoZWFkXCIsZi5ub2RlKFwidHJcIixmLmdyb3VwKHttaW46MCxtYXg6ZC0xLGk6MSxub2RlOlwidGhcIixpdGVtOmZ1bmN0aW9uKGQpe3JldHVyblthW2RdLGMua2xhc3Mud2Vla2RheXMsJ3Njb3BlPWNvbCB0aXRsZT1cIicrYltkXSsnXCInXX19KSkpfSgoYy5zaG93V2Vla2RheXNGdWxsP2Mud2Vla2RheXNGdWxsOmMud2Vla2RheXNMZXR0ZXIpLnNsaWNlKDApLGMud2Vla2RheXNGdWxsLnNsaWNlKDApKSxwPWZ1bmN0aW9uKGEpe3JldHVybiBmLm5vZGUoXCJkaXZcIixcIiBcIixjLmtsYXNzW1wibmF2XCIrKGE/XCJOZXh0XCI6XCJQcmV2XCIpXSsoYSYmay55ZWFyPj1uLnllYXImJmsubW9udGg+PW4ubW9udGh8fCFhJiZrLnllYXI8PW0ueWVhciYmay5tb250aDw9bS5tb250aD9cIiBcIitjLmtsYXNzLm5hdkRpc2FibGVkOlwiXCIpLFwiZGF0YS1uYXY9XCIrKGF8fC0xKStcIiBcIitmLmFyaWFBdHRyKHtyb2xlOlwiYnV0dG9uXCIsY29udHJvbHM6Yi4kbm9kZVswXS5pZCtcIl90YWJsZVwifSkrJyB0aXRsZT1cIicrKGE/Yy5sYWJlbE1vbnRoTmV4dDpjLmxhYmVsTW9udGhQcmV2KSsnXCInKX0scT1mdW5jdGlvbihkKXt2YXIgZT1jLnNob3dNb250aHNTaG9ydD9jLm1vbnRoc1Nob3J0OmMubW9udGhzRnVsbDtyZXR1cm5cInNob3J0X21vbnRoc1wiPT1kJiYoZT1jLm1vbnRoc1Nob3J0KSxjLnNlbGVjdE1vbnRocyYmdm9pZCAwPT1kP2Yubm9kZShcInNlbGVjdFwiLGYuZ3JvdXAoe21pbjowLG1heDoxMSxpOjEsbm9kZTpcIm9wdGlvblwiLGl0ZW06ZnVuY3Rpb24oYSl7cmV0dXJuW2VbYV0sMCxcInZhbHVlPVwiK2ErKGsubW9udGg9PWE/XCIgc2VsZWN0ZWRcIjpcIlwiKSsoay55ZWFyPT1tLnllYXImJmE8bS5tb250aHx8ay55ZWFyPT1uLnllYXImJmE+bi5tb250aD9cIiBkaXNhYmxlZFwiOlwiXCIpXX19KSxjLmtsYXNzLnNlbGVjdE1vbnRoK1wiIGJyb3dzZXItZGVmYXVsdFwiLChhP1wiXCI6XCJkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkK1wiX3RhYmxlXCJ9KSsnIHRpdGxlPVwiJytjLmxhYmVsTW9udGhTZWxlY3QrJ1wiJyk6XCJzaG9ydF9tb250aHNcIj09ZD9udWxsIT1pP2Yubm9kZShcImRpdlwiLGVbaS5tb250aF0pOmYubm9kZShcImRpdlwiLGVbay5tb250aF0pOmYubm9kZShcImRpdlwiLGVbay5tb250aF0sYy5rbGFzcy5tb250aCl9LHI9ZnVuY3Rpb24oZCl7dmFyIGU9ay55ZWFyLGc9Yy5zZWxlY3RZZWFycz09PSEwPzU6fn4oYy5zZWxlY3RZZWFycy8yKTtpZihnKXt2YXIgaD1tLnllYXIsaT1uLnllYXIsaj1lLWcsbD1lK2c7aWYoaD5qJiYobCs9aC1qLGo9aCksaTxsKXt2YXIgbz1qLWgscD1sLWk7ai09bz5wP3A6byxsPWl9aWYoYy5zZWxlY3RZZWFycyYmdm9pZCAwPT1kKXJldHVybiBmLm5vZGUoXCJzZWxlY3RcIixmLmdyb3VwKHttaW46aixtYXg6bCxpOjEsbm9kZTpcIm9wdGlvblwiLGl0ZW06ZnVuY3Rpb24oYSl7cmV0dXJuW2EsMCxcInZhbHVlPVwiK2ErKGU9PWE/XCIgc2VsZWN0ZWRcIjpcIlwiKV19fSksYy5rbGFzcy5zZWxlY3RZZWFyK1wiIGJyb3dzZXItZGVmYXVsdFwiLChhP1wiXCI6XCJkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkK1wiX3RhYmxlXCJ9KSsnIHRpdGxlPVwiJytjLmxhYmVsWWVhclNlbGVjdCsnXCInKX1yZXR1cm5cInJhd1wiPT1kP2Yubm9kZShcImRpdlwiLGUpOmYubm9kZShcImRpdlwiLGUsYy5rbGFzcy55ZWFyKX07cmV0dXJuIGNyZWF0ZURheUxhYmVsPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPWk/Zi5ub2RlKFwiZGl2XCIsaS5kYXRlKTpmLm5vZGUoXCJkaXZcIixoLmRhdGUpfSxjcmVhdGVXZWVrZGF5TGFiZWw9ZnVuY3Rpb24oKXt2YXIgYTthPW51bGwhPWk/aS5kYXk6aC5kYXk7dmFyIGI9Yy53ZWVrZGF5c0Z1bGxbYV07cmV0dXJuIGJ9LGYubm9kZShcImRpdlwiLGYubm9kZShcImRpdlwiLGNyZWF0ZVdlZWtkYXlMYWJlbCgpLFwicGlja2VyX193ZWVrZGF5LWRpc3BsYXlcIikrZi5ub2RlKFwiZGl2XCIscShcInNob3J0X21vbnRoc1wiKSxjLmtsYXNzLm1vbnRoX2Rpc3BsYXkpK2Yubm9kZShcImRpdlwiLGNyZWF0ZURheUxhYmVsKCksYy5rbGFzcy5kYXlfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIscihcInJhd1wiKSxjLmtsYXNzLnllYXJfZGlzcGxheSksYy5rbGFzcy5kYXRlX2Rpc3BsYXkpK2Yubm9kZShcImRpdlwiLGYubm9kZShcImRpdlwiLChjLnNlbGVjdFllYXJzP3EoKStyKCk6cSgpK3IoKSkrcCgpK3AoMSksYy5rbGFzcy5oZWFkZXIpK2Yubm9kZShcInRhYmxlXCIsbytmLm5vZGUoXCJ0Ym9keVwiLGYuZ3JvdXAoe21pbjowLG1heDplLTEsaToxLG5vZGU6XCJ0clwiLGl0ZW06ZnVuY3Rpb24oYSl7dmFyIGU9Yy5maXJzdERheSYmMD09PWIuY3JlYXRlKFtrLnllYXIsay5tb250aCwxXSkuZGF5Py03OjA7cmV0dXJuW2YuZ3JvdXAoe21pbjpkKmEtay5kYXkrZSsxLG1heDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1pbitkLTF9LGk6MSxub2RlOlwidGRcIixpdGVtOmZ1bmN0aW9uKGEpe2E9Yi5jcmVhdGUoW2sueWVhcixrLm1vbnRoLGErKGMuZmlyc3REYXk/MTowKV0pO3ZhciBkPWkmJmkucGljaz09YS5waWNrLGU9aiYmai5waWNrPT1hLnBpY2ssZz1sJiZiLmRpc2FibGVkKGEpfHxhLnBpY2s8bS5waWNrfHxhLnBpY2s+bi5waWNrLG89Zi50cmlnZ2VyKGIuZm9ybWF0cy50b1N0cmluZyxiLFtjLmZvcm1hdCxhXSk7cmV0dXJuW2Yubm9kZShcImRpdlwiLGEuZGF0ZSxmdW5jdGlvbihiKXtyZXR1cm4gYi5wdXNoKGsubW9udGg9PWEubW9udGg/Yy5rbGFzcy5pbmZvY3VzOmMua2xhc3Mub3V0Zm9jdXMpLGgucGljaz09YS5waWNrJiZiLnB1c2goYy5rbGFzcy5ub3cpLGQmJmIucHVzaChjLmtsYXNzLnNlbGVjdGVkKSxlJiZiLnB1c2goYy5rbGFzcy5oaWdobGlnaHRlZCksZyYmYi5wdXNoKGMua2xhc3MuZGlzYWJsZWQpLGIuam9pbihcIiBcIil9KFtjLmtsYXNzLmRheV0pLFwiZGF0YS1waWNrPVwiK2EucGljaytcIiBcIitmLmFyaWFBdHRyKHtyb2xlOlwiZ3JpZGNlbGxcIixsYWJlbDpvLHNlbGVjdGVkOiEoIWR8fGIuJG5vZGUudmFsKCkhPT1vKXx8bnVsbCxhY3RpdmVkZXNjZW5kYW50OiEhZXx8bnVsbCxkaXNhYmxlZDohIWd8fG51bGx9KSksXCJcIixmLmFyaWFBdHRyKHtyb2xlOlwicHJlc2VudGF0aW9uXCJ9KV19fSldfX0pKSxjLmtsYXNzLnRhYmxlLCdpZD1cIicrYi4kbm9kZVswXS5pZCsnX3RhYmxlXCIgJytmLmFyaWFBdHRyKHtyb2xlOlwiZ3JpZFwiLGNvbnRyb2xzOmIuJG5vZGVbMF0uaWQscmVhZG9ubHk6ITB9KSksYy5rbGFzcy5jYWxlbmRhcl9jb250YWluZXIpK2Yubm9kZShcImRpdlwiLGYubm9kZShcImJ1dHRvblwiLGMudG9kYXksXCJidG4tZmxhdCBwaWNrZXJfX3RvZGF5XCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLXBpY2s9XCIraC5waWNrKyhhJiYhYi5kaXNhYmxlZChoKT9cIlwiOlwiIGRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWR9KSkrZi5ub2RlKFwiYnV0dG9uXCIsYy5jbGVhcixcImJ0bi1mbGF0IHBpY2tlcl9fY2xlYXJcIixcInR5cGU9YnV0dG9uIGRhdGEtY2xlYXI9MVwiKyhhP1wiXCI6XCIgZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZH0pKStmLm5vZGUoXCJidXR0b25cIixjLmNsb3NlLFwiYnRuLWZsYXQgcGlja2VyX19jbG9zZVwiLFwidHlwZT1idXR0b24gZGF0YS1jbG9zZT10cnVlIFwiKyhhP1wiXCI6XCIgZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZH0pKSxjLmtsYXNzLmZvb3Rlcil9LGMuZGVmYXVsdHM9ZnVuY3Rpb24oYSl7cmV0dXJue2xhYmVsTW9udGhOZXh0OlwiTmV4dCBtb250aFwiLGxhYmVsTW9udGhQcmV2OlwiUHJldmlvdXMgbW9udGhcIixsYWJlbE1vbnRoU2VsZWN0OlwiU2VsZWN0IGEgbW9udGhcIixsYWJlbFllYXJTZWxlY3Q6XCJTZWxlY3QgYSB5ZWFyXCIsbW9udGhzRnVsbDpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sbW9udGhzU2hvcnQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSx3ZWVrZGF5c0Z1bGw6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sd2Vla2RheXNTaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sd2Vla2RheXNMZXR0ZXI6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSx0b2RheTpcIlRvZGF5XCIsY2xlYXI6XCJDbGVhclwiLGNsb3NlOlwiQ2xvc2VcIixmb3JtYXQ6XCJkIG1tbW0sIHl5eXlcIixrbGFzczp7dGFibGU6YStcInRhYmxlXCIsaGVhZGVyOmErXCJoZWFkZXJcIixkYXRlX2Rpc3BsYXk6YStcImRhdGUtZGlzcGxheVwiLGRheV9kaXNwbGF5OmErXCJkYXktZGlzcGxheVwiLG1vbnRoX2Rpc3BsYXk6YStcIm1vbnRoLWRpc3BsYXlcIix5ZWFyX2Rpc3BsYXk6YStcInllYXItZGlzcGxheVwiLGNhbGVuZGFyX2NvbnRhaW5lcjphK1wiY2FsZW5kYXItY29udGFpbmVyXCIsbmF2UHJldjphK1wibmF2LS1wcmV2XCIsbmF2TmV4dDphK1wibmF2LS1uZXh0XCIsbmF2RGlzYWJsZWQ6YStcIm5hdi0tZGlzYWJsZWRcIixtb250aDphK1wibW9udGhcIix5ZWFyOmErXCJ5ZWFyXCIsc2VsZWN0TW9udGg6YStcInNlbGVjdC0tbW9udGhcIixzZWxlY3RZZWFyOmErXCJzZWxlY3QtLXllYXJcIix3ZWVrZGF5czphK1wid2Vla2RheVwiLGRheTphK1wiZGF5XCIsZGlzYWJsZWQ6YStcImRheS0tZGlzYWJsZWRcIixzZWxlY3RlZDphK1wiZGF5LS1zZWxlY3RlZFwiLGhpZ2hsaWdodGVkOmErXCJkYXktLWhpZ2hsaWdodGVkXCIsbm93OmErXCJkYXktLXRvZGF5XCIsaW5mb2N1czphK1wiZGF5LS1pbmZvY3VzXCIsb3V0Zm9jdXM6YStcImRheS0tb3V0Zm9jdXNcIixmb290ZXI6YStcImZvb3RlclwiLGJ1dHRvbkNsZWFyOmErXCJidXR0b24tLWNsZWFyXCIsYnV0dG9uVG9kYXk6YStcImJ1dHRvbi0tdG9kYXlcIixidXR0b25DbG9zZTphK1wiYnV0dG9uLS1jbG9zZVwifX19KGEua2xhc3NlcygpLnBpY2tlcitcIl9fXCIpLGEuZXh0ZW5kKFwicGlja2FkYXRlXCIsYyl9KSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGI9K2EodGhpcykuYXR0cihcImRhdGEtbGVuZ3RoXCIpLGM9K2EodGhpcykudmFsKCkubGVuZ3RoLGQ9Yzw9YjthKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpLmh0bWwoYytcIi9cIitiKSxlKGQsYSh0aGlzKSl9ZnVuY3Rpb24gYyhiKXt2YXIgYz1iLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO2MubGVuZ3RofHwoYz1hKFwiPHNwYW4vPlwiKS5hZGRDbGFzcyhcImNoYXJhY3Rlci1jb3VudGVyXCIpLmNzcyhcImZsb2F0XCIsXCJyaWdodFwiKS5jc3MoXCJmb250LXNpemVcIixcIjEycHhcIikuY3NzKFwiaGVpZ2h0XCIsMSksYi5wYXJlbnQoKS5hcHBlbmQoYykpfWZ1bmN0aW9uIGQoKXthKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpLmh0bWwoXCJcIil9ZnVuY3Rpb24gZShhLGIpe3ZhciBjPWIuaGFzQ2xhc3MoXCJpbnZhbGlkXCIpO2EmJmM/Yi5yZW1vdmVDbGFzcyhcImludmFsaWRcIik6YXx8Y3x8KGIucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxiLmFkZENsYXNzKFwiaW52YWxpZFwiKSl9YS5mbi5jaGFyYWN0ZXJDb3VudGVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1lLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO2lmKCFmLmxlbmd0aCl7dmFyIGc9dm9pZCAwIT09ZS5hdHRyKFwiZGF0YS1sZW5ndGhcIik7ZyYmKGUub24oXCJpbnB1dFwiLGIpLGUub24oXCJmb2N1c1wiLGIpLGUub24oXCJibHVyXCIsZCksYyhlKSl9fSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcImlucHV0LCB0ZXh0YXJlYVwiKS5jaGFyYWN0ZXJDb3VudGVyKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17ZHVyYXRpb246MjAwLGRpc3Q6LTEwMCxzaGlmdDowLHBhZGRpbmc6MCxmdWxsV2lkdGg6ITEsaW5kaWNhdG9yczohMSxub1dyYXA6ITEsb25DeWNsZVRvOm51bGx9O2I9YS5leHRlbmQoYyxiKTt2YXIgZD1NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyhhKHRoaXMpKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGUoKXtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCYmKE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixuKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHApKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixuKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixvKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIscCksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHApLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbCl9ZnVuY3Rpb24gZihhKXtyZXR1cm4gYS50YXJnZXRUb3VjaGVzJiZhLnRhcmdldFRvdWNoZXMubGVuZ3RoPj0xP2EudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYOmEuY2xpZW50WH1mdW5jdGlvbiBnKGEpe3JldHVybiBhLnRhcmdldFRvdWNoZXMmJmEudGFyZ2V0VG91Y2hlcy5sZW5ndGg+PTE/YS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk6YS5jbGllbnRZfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGE+PXg/YSV4OmE8MD9oKHgrYSV4KTphfWZ1bmN0aW9uIGkoYyl7RT0hMCxPLmhhc0NsYXNzKFwic2Nyb2xsaW5nXCIpfHxPLmFkZENsYXNzKFwic2Nyb2xsaW5nXCIpLG51bGwhPU4mJndpbmRvdy5jbGVhclRpbWVvdXQoTiksTj13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe0U9ITEsTy5yZW1vdmVDbGFzcyhcInNjcm9sbGluZ1wiKX0sYi5kdXJhdGlvbik7dmFyIGQsZSxmLGcsaSxqLGssbD11O2lmKHQ9XCJudW1iZXJcIj09dHlwZW9mIGM/Yzp0LHU9TWF0aC5mbG9vcigodCt3LzIpL3cpLGY9dC11KncsZz1mPDA/MTotMSxpPS1nKmYqMi93LGU9eD4+MSxiLmZ1bGxXaWR0aD9rPVwidHJhbnNsYXRlWCgwKVwiOihrPVwidHJhbnNsYXRlWChcIisoT1swXS5jbGllbnRXaWR0aC1yKS8yK1wicHgpIFwiLGsrPVwidHJhbnNsYXRlWShcIisoT1swXS5jbGllbnRIZWlnaHQtcykvMitcInB4KVwiKSxQKXt2YXIgbT11JXgsbj1NLmZpbmQoXCIuaW5kaWNhdG9yLWl0ZW0uYWN0aXZlXCIpO24uaW5kZXgoKSE9PW0mJihuLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLE0uZmluZChcIi5pbmRpY2F0b3ItaXRlbVwiKS5lcShtKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSl9Zm9yKCghYi5ub1dyYXB8fHU+PTAmJnU8eCkmJihqPXFbaCh1KV0sYShqKS5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8KE8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEoaikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKy1mLzIrXCJweCkgdHJhbnNsYXRlWChcIitnKmIuc2hpZnQqaSpkK1wicHgpIHRyYW5zbGF0ZVooXCIrYi5kaXN0KmkrXCJweClcIixqLnN0eWxlLnpJbmRleD0wLGIuZnVsbFdpZHRoP3R3ZWVuZWRPcGFjaXR5PTE6dHdlZW5lZE9wYWNpdHk9MS0uMippLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxkPTE7ZDw9ZTsrK2QpYi5mdWxsV2lkdGg/KHpUcmFuc2xhdGlvbj1iLmRpc3QsdHdlZW5lZE9wYWNpdHk9ZD09PWUmJmY8MD8xLWk6MSk6KHpUcmFuc2xhdGlvbj1iLmRpc3QqKDIqZCtpKmcpLHR3ZWVuZWRPcGFjaXR5PTEtLjIqKDIqZCtpKmcpKSwoIWIubm9XcmFwfHx1K2Q8eCkmJihqPXFbaCh1K2QpXSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIisoYi5zaGlmdCsodypkLWYpLzIpK1wicHgpIHRyYW5zbGF0ZVooXCIrelRyYW5zbGF0aW9uK1wicHgpXCIsai5zdHlsZS56SW5kZXg9LWQsai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGIuZnVsbFdpZHRoPyh6VHJhbnNsYXRpb249Yi5kaXN0LHR3ZWVuZWRPcGFjaXR5PWQ9PT1lJiZmPjA/MS1pOjEpOih6VHJhbnNsYXRpb249Yi5kaXN0KigyKmQtaSpnKSx0d2VlbmVkT3BhY2l0eT0xLS4yKigyKmQtaSpnKSksKCFiLm5vV3JhcHx8dS1kPj0wKSYmKGo9cVtoKHUtZCldLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKygtYi5zaGlmdCsoLXcqZC1mKS8yKStcInB4KSB0cmFuc2xhdGVaKFwiK3pUcmFuc2xhdGlvbitcInB4KVwiLGouc3R5bGUuekluZGV4PS1kLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKTtpZigoIWIubm9XcmFwfHx1Pj0wJiZ1PHgpJiYoaj1xW2godSldLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKy1mLzIrXCJweCkgdHJhbnNsYXRlWChcIitnKmIuc2hpZnQqaStcInB4KSB0cmFuc2xhdGVaKFwiK2IuZGlzdCppK1wicHgpXCIsai5zdHlsZS56SW5kZXg9MCxiLmZ1bGxXaWR0aD90d2VlbmVkT3BhY2l0eT0xOnR3ZWVuZWRPcGFjaXR5PTEtLjIqaSxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksbCE9PXUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGIub25DeWNsZVRvKXt2YXIgbz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5lcShoKHUpKTtiLm9uQ3ljbGVUby5jYWxsKHRoaXMsbyxKKX19ZnVuY3Rpb24gaigpe3ZhciBhLGIsYyxkO2E9RGF0ZS5ub3coKSxiPWEtSCxIPWEsYz10LUcsRz10LGQ9MWUzKmMvKDErYiksRD0uOCpkKy4yKkR9ZnVuY3Rpb24gaygpe3ZhciBhLGM7QiYmKGE9RGF0ZS5ub3coKS1ILGM9QipNYXRoLmV4cCgtYS9iLmR1cmF0aW9uKSxjPjJ8fGM8LTI/KGkoQy1jKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaykpOmkoQykpfWZ1bmN0aW9uIGwoYyl7aWYoSilyZXR1cm4gYy5wcmV2ZW50RGVmYXVsdCgpLGMuc3RvcFByb3BhZ2F0aW9uKCksITE7aWYoIWIuZnVsbFdpZHRoKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KFwiLmNhcm91c2VsLWl0ZW1cIikuaW5kZXgoKSxlPXUleC1kOzAhPT1lJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGMuc3RvcFByb3BhZ2F0aW9uKCkpLG0oZCl9fWZ1bmN0aW9uIG0oYSl7dmFyIGM9dSV4LWE7Yi5ub1dyYXB8fChjPDA/TWF0aC5hYnMoYyt4KTxNYXRoLmFicyhjKSYmKGMrPXgpOmM+MCYmTWF0aC5hYnMoYy14KTxjJiYoYy09eCkpLGM8MD9PLnRyaWdnZXIoXCJjYXJvdXNlbE5leHRcIixbTWF0aC5hYnMoYyldKTpjPjAmJk8udHJpZ2dlcihcImNhcm91c2VsUHJldlwiLFtjXSl9ZnVuY3Rpb24gbihhKXthLnByZXZlbnREZWZhdWx0KCksdj0hMCxKPSExLEs9ITEsej1mKGEpLEE9ZyhhKSxEPUI9MCxHPXQsSD1EYXRlLm5vdygpLGNsZWFySW50ZXJ2YWwoSSksST1zZXRJbnRlcnZhbChqLDEwMCl9ZnVuY3Rpb24gbyhhKXt2YXIgYixjLGQ7aWYodilpZihiPWYoYSkseT1nKGEpLGM9ei1iLGQ9TWF0aC5hYnMoQS15KSxkPDMwJiYhSykoYz4yfHxjPC0yKSYmKEo9ITAsej1iLGkodCtjKSk7ZWxzZXtpZihKKXJldHVybiBhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSwhMTtLPSEwfWlmKEopcmV0dXJuIGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLCExfWZ1bmN0aW9uIHAoYSl7aWYodilyZXR1cm4gdj0hMSxjbGVhckludGVydmFsKEkpLEM9dCwoRD4xMHx8RDwtMTApJiYoQj0uOSpELEM9dCtCKSxDPU1hdGgucm91bmQoQy93KSp3LGIubm9XcmFwJiYoQz49dyooeC0xKT9DPXcqKHgtMSk6QzwwJiYoQz0wKSksQj1DLXQsSD1EYXRlLm5vdygpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSxKJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpLCExfXZhciBxLHIscyx0LHUsdix3LHgseixBLEIsQyxELEUsRixHLEgsSSxKLEssTD1kK2MsTT1hKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKSxOPW51bGwsTz1hKHRoaXMpLFA9Ty5hdHRyKFwiZGF0YS1pbmRpY2F0b3JzXCIpfHxiLmluZGljYXRvcnMsUT1mdW5jdGlvbigpe3ZhciBiPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtIGltZ1wiKS5maXJzdCgpO2lmKGIubGVuZ3RoKWIucHJvcChcImNvbXBsZXRlXCIpP08uY3NzKFwiaGVpZ2h0XCIsYi5oZWlnaHQoKSk6Yi5vbihcImxvYWRcIixmdW5jdGlvbigpe08uY3NzKFwiaGVpZ2h0XCIsYSh0aGlzKS5oZWlnaHQoKSl9KTtlbHNle3ZhciBjPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaGVpZ2h0KCk7Ty5jc3MoXCJoZWlnaHRcIixjKX19O3JldHVybiBiLmZ1bGxXaWR0aCYmKGIuZGlzdD0wLFEoKSxQJiZPLmZpbmQoXCIuY2Fyb3VzZWwtZml4ZWQtaXRlbVwiKS5hZGRDbGFzcyhcIndpdGgtaW5kaWNhdG9yc1wiKSksTy5oYXNDbGFzcyhcImluaXRpYWxpemVkXCIpPyhhKHdpbmRvdykudHJpZ2dlcihcInJlc2l6ZVwiKSxhKHRoaXMpLnRyaWdnZXIoXCJjYXJvdXNlbE5leHRcIixbMWUtNl0pLCEwKTooTy5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpLHY9ITEsdD1DPTAscT1bXSxyPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJXaWR0aCgpLHM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lckhlaWdodCgpLHc9MipyK2IucGFkZGluZyxPLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKGIpe2lmKHEucHVzaChhKHRoaXMpWzBdKSxQKXt2YXIgYz1hKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7MD09PWImJmMuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYy5jbGljayhmdW5jdGlvbihiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBjPWEodGhpcykuaW5kZXgoKTttKGMpfSksTS5hcHBlbmQoYyl9fSksUCYmTy5hcHBlbmQoTSkseD1xLmxlbmd0aCxGPVwidHJhbnNmb3JtXCIsW1wid2Via2l0XCIsXCJNb3pcIixcIk9cIixcIm1zXCJdLmV2ZXJ5KGZ1bmN0aW9uKGEpe3ZhciBiPWErXCJUcmFuc2Zvcm1cIjtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVtiXXx8KEY9YiwhMSl9KSxhKHdpbmRvdykub2ZmKFwicmVzaXplLmNhcm91c2VsLVwiK0wpLm9uKFwicmVzaXplLmNhcm91c2VsLVwiK0wsZnVuY3Rpb24oKXtiLmZ1bGxXaWR0aD8ocj1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVyV2lkdGgoKSxzPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKSx3PTIqcitiLnBhZGRpbmcsdD0yKnUqcixDPXQpOmkoKX0pLGUoKSxpKHQpLGEodGhpcykub24oXCJjYXJvdXNlbE5leHRcIixmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPTEpLEM9dypNYXRoLnJvdW5kKHQvdykrdypiLHQhPT1DJiYoQj1DLXQsSD1EYXRlLm5vdygpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSl9KSxhKHRoaXMpLm9uKFwiY2Fyb3VzZWxQcmV2XCIsZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj0xKSxDPXcqTWF0aC5yb3VuZCh0L3cpLXcqYix0IT09QyYmKEI9Qy10LEg9RGF0ZS5ub3coKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaykpfSksdm9pZCBhKHRoaXMpLm9uKFwiY2Fyb3VzZWxTZXRcIixmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPTApLG0oYil9KSl9KX0sbmV4dDpmdW5jdGlvbihiKXthKHRoaXMpLnRyaWdnZXIoXCJjYXJvdXNlbE5leHRcIixbYl0pfSxwcmV2OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsUHJldlwiLFtiXSl9LHNldDpmdW5jdGlvbihiKXthKHRoaXMpLnRyaWdnZXIoXCJjYXJvdXNlbFNldFwiLFtiXSl9fTthLmZuLmNhcm91c2VsPWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5jYXJvdXNlbFwiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YShcIiNcIithKHRoaXMpLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSksZD0oYShcImJvZHlcIiksYSh0aGlzKSksZT1kLnBhcmVudChcIi50YXAtdGFyZ2V0LXdyYXBwZXJcIiksZj1lLmZpbmQoXCIudGFwLXRhcmdldC13YXZlXCIpLGc9ZS5maW5kKFwiLnRhcC10YXJnZXQtb3JpZ2luXCIpLGg9ZC5maW5kKFwiLnRhcC10YXJnZXQtY29udGVudFwiKTtlLmxlbmd0aHx8KGU9ZC53cmFwKGEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdyYXBwZXJcIj48L2Rpdj4nKSkucGFyZW50KCkpLGgubGVuZ3RofHwoaD1hKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC1jb250ZW50XCI+PC9kaXY+JyksZC5hcHBlbmQoaCkpLGYubGVuZ3RofHwoZj1hKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13YXZlXCI+PC9kaXY+JyksZy5sZW5ndGh8fChnPWMuY2xvbmUoITAsITApLGcuYWRkQ2xhc3MoXCJ0YXAtdGFyZ2V0LW9yaWdpblwiKSxnLnJlbW92ZUF0dHIoXCJpZFwiKSxnLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxmLmFwcGVuZChnKSksZS5hcHBlbmQoZikpO3ZhciBpPWZ1bmN0aW9uKCl7ZS5pcyhcIi5vcGVuXCIpfHwoZS5hZGRDbGFzcyhcIm9wZW5cIiksc2V0VGltZW91dChmdW5jdGlvbigpe2cub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLm9uKFwiY2xpY2sudGFwVGFyZ2V0XCIsZnVuY3Rpb24oYSl7aigpLGcub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpfSksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLm9uKFwiY2xpY2sudGFwVGFyZ2V0XCIsZnVuY3Rpb24oYil7aigpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKX0pO3ZhciBiPU1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCl7aygpfSwyMDApO2Eod2luZG93KS5vZmYoXCJyZXNpemUudGFwVGFyZ2V0XCIpLm9uKFwicmVzaXplLnRhcFRhcmdldFwiLGIpfSwwKSl9LGo9ZnVuY3Rpb24oKXtlLmlzKFwiLm9wZW5cIikmJihlLnJlbW92ZUNsYXNzKFwib3BlblwiKSxnLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIiksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YXBUYXJnZXRcIikpfSxrPWZ1bmN0aW9uKCl7dmFyIGI9XCJmaXhlZFwiPT09Yy5jc3MoXCJwb3NpdGlvblwiKTtpZighYilmb3IodmFyIGc9Yy5wYXJlbnRzKCksaT0wO2k8Zy5sZW5ndGgmJiEoYj1cImZpeGVkXCI9PWEoZ1tpXSkuY3NzKFwicG9zaXRpb25cIikpO2krKyk7dmFyIGo9Yy5vdXRlcldpZHRoKCksaz1jLm91dGVySGVpZ2h0KCksbD1iP2Mub2Zmc2V0KCkudG9wLWEoZG9jdW1lbnQpLnNjcm9sbFRvcCgpOmMub2Zmc2V0KCkudG9wLG09Yj9jLm9mZnNldCgpLmxlZnQtYShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpOmMub2Zmc2V0KCkubGVmdCxuPWEod2luZG93KS53aWR0aCgpLG89YSh3aW5kb3cpLmhlaWdodCgpLHA9bi8yLHE9by8yLHI9bTw9cCxzPW0+cCx0PWw8PXEsdT1sPnEsdj1tPj0uMjUqbiYmbTw9Ljc1Km4sdz1kLm91dGVyV2lkdGgoKSx4PWQub3V0ZXJIZWlnaHQoKSx5PWwray8yLXgvMix6PW0rai8yLXcvMixBPWI/XCJmaXhlZFwiOlwiYWJzb2x1dGVcIixCPXY/dzp3LzIraixDPXgvMixEPXQ/eC8yOjAsRT0wLEY9ciYmIXY/dy8yLWo6MCxHPTAsSD1qLEk9dT9cImJvdHRvbVwiOlwidG9wXCIsSj1qPms/MipqOjIqaixLPUosTD14LzItSy8yLE09dy8yLUovMixOPXt9O04udG9wPXQ/eTpcIlwiLE4ucmlnaHQ9cz9uLXotdzpcIlwiLE4uYm90dG9tPXU/by15LXg6XCJcIixOLmxlZnQ9cj96OlwiXCIsTi5wb3NpdGlvbj1BLGUuY3NzKE4pLGguY3NzKHt3aWR0aDpCLGhlaWdodDpDLHRvcDpELHJpZ2h0OkcsYm90dG9tOkUsbGVmdDpGLHBhZGRpbmc6SCx2ZXJ0aWNhbEFsaWduOkl9KSxmLmNzcyh7dG9wOkwsbGVmdDpNLHdpZHRoOkosaGVpZ2h0Okt9KX07XCJvcGVuXCI9PWImJihrKCksaSgpKSxcImNsb3NlXCI9PWImJmooKX0pfSxvcGVuOmZ1bmN0aW9uKCl7fSxjbG9zZTpmdW5jdGlvbigpe319O2EuZm4udGFwVGFyZ2V0PWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdfHxcIm9iamVjdFwiPT10eXBlb2YgYz9iLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YXAtdGFyZ2V0XCIpfX0oalF1ZXJ5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzIiwiXG5jb25zdCBJTUFHRUZJTkRFUiA9IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvc2V0X3NldDMvYmdzZXRfYmcyL1wiO1xuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG48aW1nIHN0eWxlPXtwcm9wcy5zdHlsZX0gc3JjPXtwcm9wcy51c2VybmFtZSA/IElNQUdFRklOREVSICsgcHJvcHMudXNlcm5hbWUgOiBJTUFHRUZJTkRFUiArIHByb3BzLnVzZXJuYW1lfSBhbHQ9e3Byb3BzLnVzZXJuYW1lfSBjbGFzc05hbWU9XCJjaXJjbGUgcmVzcG9uc2l2ZS1pbWdcIiAvPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Vc2VyUGljLmpzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xubGV0IGFwb2xsb0NsaWVudCA9IG51bGxcblxuXG5mdW5jdGlvbiBfaW5pdENsaWVudCAoaGVhZGVycywgaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlcixcbiAgICBkYXRhSWRGcm9tT2JqZWN0OiByZXN1bHQgPT4gcmVzdWx0LmlkIHx8IG51bGwsXG4gICAgbmV0d29ya0ludGVyZmFjZTogY3JlYXRlTmV0d29ya0ludGVyZmFjZSh7XG4gICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvZ3JhcGhxbCcsXG4gICAgICBvcHRzOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnY3Jvc3Mtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q2xpZW50ID0gKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIF9pbml0Q2xpZW50KGhlYWRlcnMsIGluaXRpYWxTdGF0ZSlcbiAgfVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IF9pbml0Q2xpZW50KGhlYWRlcnMsIGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0Q2xpZW50LmpzIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGluaXRDbGllbnQgfSBmcm9tICcuLi9saWIvaW5pdENsaWVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KSA9PiAoXG4gIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzIDoge31cbiAgICAgIGNvbnN0IGNsaWVudCA9IGluaXRDbGllbnQoaGVhZGVycylcblxuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHVybDogeyBxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lIH0sXG4gICAgICAgIC4uLmF3YWl0IChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShhcHApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAgIGFwb2xsbzoge1xuICAgICAgICAgICAgZGF0YTogY2xpZW50LmdldEluaXRpYWxTdGF0ZSgpLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIC4uLnByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcblxuICAgICAgdGhpcy5jbGllbnQgPSBpbml0Q2xpZW50KHRoaXMucHJvcHMuaGVhZGVycywgdGhpcy5wcm9wcy5pbml0aWFsU3RhdGUpXG5cbiAgICB9XG5cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5jbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cblxuICAgICAgKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCAgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gJy4uL2RhdGFzdHVmZi9DcmVhdGVQb3N0J1xuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoKHByb3BzKSA9PiAoXG4gIDxBcHAgZGF0YT17cHJvcHN9PlxuICAgICAgICAgIDxoMz5DcmVhdGUgYSBwb3N0PC9oMz5cbiAgICAgICAgICA8cD5TaGFyZSB5b3VyIHRob3VnaHRzIHdpdGggcGVvcGxlIGFyb3VuZCB5b3UuPC9wPlxuICAgICAgICAgIDxDcmVhdGVQb3N0IHsuLi5wcm9wc30gLz5cbiAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY3JlYXRlLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICB9XG4gIGdldFVzZXIoKXtcbiAgIGlmKHByb2Nlc3MuYnJvd3NlcilcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSA6IGZhbHNlLFxuICAgICAgICB1c2VybmFtZTogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSA6IGZhbHNlLFxuICAgICAgICBmaXJzdE5hbWU6ICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdE5hbWVcIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdE5hbWVcIikgOiBmYWxzZSxcbiAgICAgICAgbGFzdE5hbWU6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3ROYW1lXCIpID8gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdE5hbWVcIikgOiBmYWxzZSxcbiAgICAgICAgbG9uZ2l0dWRlOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb25naXR1ZGVcIikgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb25naXR1ZGVcIikgOiBmYWxzZSxcbiAgICAgICAgbGF0aXR1ZGU6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhdGl0dWRlXCIpID8gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF0aXR1ZGVcIikgOiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0VmFsaWRDbGFzc05hbWVzKGZpZWxkKXtcbiAgICByZXR1cm4gKHsndmFsaWRhdGUnOiB0cnVlLCAndmFsaWQnIDogdGhpcy5nZXRVc2VyKClbZmllbGRdID8gdHJ1ZSA6IGZhbHNlfSlcbiAgfVxuICBnZXRJbml0aWFsVmFsdWUoZmllbGQpe1xuICAgIHJldHVybiAodGhpcy5nZXRVc2VyKClbZmllbGRdID8gdGhpcy5nZXRVc2VyKClbZmllbGRdIDogXCJcIilcbiAgfVxuICBzZXRWYWx1ZShlLCB2YWx1ZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpe1xuXG4gICAgfVxuICB9XG4gIGNsZWFyRmllbGQoZmllbGQpe1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbjxkaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCIgY2xhc3NOYW1lPVwiY29sIHM2IGJsdWUgei1kZXB0aC01XCIgc3R5bGU9XG4gICAge3tcbiAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICBoZWlnaHQ6IDIwMCArICdweCcsXG4gICAgekluZGV4OiAxMCxcbiAgICB3aWR0aDogNDUwICsgJ3B4JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICByaWdodDogMjc1ICsgJ3B4JyxcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgIHRvcDogMTMwICsgJ3B4JyxcbiAgICBib3JkZXJSYWRpdXM6IDgrJ3B4J1xuICB9fT5cblxuICA8L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25LZXlQcmVzcz17KGUpPT57dGhpcy5zZXRWYWx1ZShlLCdmaXJzdE5hbWUnKX19IGNsYXNzTmFtZT17dGhpcy5nZXRWYWxpZENsYXNzTmFtZXMoJ2ZpcnN0TmFtZScpfSBkZWZhdWx0VmFsdWU9e3RoaXMuZ2V0SW5pdGlhbFZhbHVlKCdmaXJzdE5hbWUnKX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cbiAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3RoaXMuZ2V0VmFsaWRDbGFzc05hbWVzKCdsYXN0TmFtZScpfSBkZWZhdWx0VmFsdWU9e3RoaXMuZ2V0SW5pdGlhbFZhbHVlKCdsYXN0TmFtZScpIH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0X25hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuZ2V0VmFsaWRDbGFzc05hbWVzKCd1c2VybmFtZScpfSBkZWZhdWx0VmFsdWU9e3RoaXMuZ2V0SW5pdGlhbFZhbHVlKCd1c2VybmFtZScpfSBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxuICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3RfdGl0bGVcIj5Qb3N0IFRpdGxlPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxuICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3N0X2JvZHlcIj5Qb3N0IEJvZHk8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbjwvZGl2PlxuPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kYXRhc3R1ZmYvQ3JlYXRlUG9zdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        