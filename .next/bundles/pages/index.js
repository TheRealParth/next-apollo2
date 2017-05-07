
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(52);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(50);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

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

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialState',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(state) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("HAVE STATE");
                console.log(state);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialState(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialState;
    }()
  }]);

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
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', { className: 'darken-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_Header2.default, { pathname: this.props.data.url.pathname, username: this.props.data.username, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.children));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); } } })();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'blue darken-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', { className: 'nav-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('div', { href: '#', className: 'brand-logo right', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_usernameField2.default, { username: this.props.username, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement('ul', { id: 'nav', className: 'left hide-on-med-and-down', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('li', { className: this.props.pathname === '/' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Home '))), _react2.default.createElement('li', { className: this.props.pathname === '/discover' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/discover', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Discover'))), _react2.default.createElement('li', { className: this.props.pathname === '/create' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/create', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Create a Post'))))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); } } })();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/graphql/next-apollo/components/usernameField.js";


var UsernameField = function (_React$Component) {
  (0, _inherits3.default)(UsernameField, _React$Component);

  function UsernameField(props) {
    (0, _classCallCheck3.default)(this, UsernameField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UsernameField.__proto__ || (0, _getPrototypeOf2.default)(UsernameField)).call(this, props));

    _this.render = function () {
      if (_this.props.username) {
        return _react2.default.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }, "Welcome, ", _this.props.username, ".");
      } else {
        return _react2.default.createElement("div", { className: "input-field col s6", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, _react2.default.createElement("i", { className: "material-icons prefix", __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }), _react2.default.createElement("input", { id: "icon_prefix", type: "text", className: "validate", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }), _react2.default.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, "Username"));
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(529);

var _App2 = _interopRequireDefault(_App);

var _withData = __webpack_require__(659);

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
      return _react2.default.createElement(_App2.default, { data: props, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 4
            }
      }, _react2.default.createElement('h3', {
            __source: {
                  fileName: _jsxFileName,
                  lineNumber: 5
            }
      }, ' Hello '), _react2.default.createElement('p', {
            __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6
            }
      }, ' This is a yik yak style app that shows you posts that people posted near you. ', _react2.default.createElement('br', {
            __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6
            }
      }), ' Check out the discover section! '));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(603);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62)))

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(14);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(52);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(97);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(50);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(15);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(642);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(603);

var _initClient = __webpack_require__(658);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62)))

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(611);


/***/ })

},[665]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz82Yjk1ZWQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzZiOTVlZDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/NmI5NWVkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/NmI5NWVkMCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzPzZiOTVlZDAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmI5NWVkMCIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdENsaWVudC5qcz82Yjk1ZWQwIiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz82Yjk1ZWQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkZBR3dCOzs7O21CQUMzQjt3QkFBUSxJQUNSO3dCQUFRLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQUVkOzs7a0JBQVksT0FBTTt3Q0FBQTs7aUlBRWpCOzs7Ozt3Q0FFQzthQUFPLFNBQ1A7YUFBTyxJQUNQO0FBQ0Q7Ozs7NkJBRUM7NkJBQ0Usd0JBQU0sV0FBVTtvQkFBaEI7c0JBS0k7QUFMSjtPQUFBLGtCQUtLLGtDQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssSUFBSSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUs7b0JBQTFFO3NCQUNBO0FBREE7MEJBQ0EsdUJBQUssV0FBVTtvQkFBZjtzQkFFRTtBQUZGO2NBRU8sTUFLZDs7Ozs7RUE1QjBCLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztJQUVjO2tDQUNuQjs7a0JBQVksT0FBTTt3Q0FBQTs7aUlBRWpCO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7NkJB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QUUsSUFBRyxFQUFFLElBQUUsSUFBSTtZQUFJLElBQUUsRUFBRSxHQUFHLEtBQUcsRUFBRSxLQUFRO2NBQVM7Y0FBUyxFQUFFLEdBQUc7YUFBTyxFQUFFLFVBQVUsS0FBRyxJQUFFLEdBQUcsTUFBTSxLQUFLLEtBQUcsRUFBRSxPQUFPLE9BQUssSUFBRSxDQUFDLEtBQU07Y0FBUyxFQUFFLEdBQUc7VUFBSSxJQUFFLEVBQUUsS0FBSyxHQUFFLFlBQVksT0FBTyxTQUFPLElBQUUsSUFBSTtjQUFTLEVBQUUsR0FBRzthQUFPLFVBQVMsR0FBRztlQUFPLEtBQUssTUFBTSxJQUFFLE1BQUksSUFBSztBQUFDO2NBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFHO2VBQVMsRUFBRSxHQUFFLEdBQUc7ZUFBTyxJQUFFLElBQUUsSUFBRSxJQUFJO2dCQUFTLEVBQUUsR0FBRSxHQUFHO2VBQU8sSUFBRSxJQUFFLElBQUk7Z0JBQVMsRUFBRSxHQUFHO2VBQU8sSUFBSTtnQkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO2VBQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRSxLQUFHLElBQUUsRUFBRSxHQUFFLE1BQUksSUFBRSxFQUFFLE1BQU07Z0JBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztlQUFPLElBQUUsRUFBRSxHQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsRUFBRSxHQUFFLEtBQUcsSUFBRSxFQUFLO2dCQUFTLEVBQUUsR0FBRSxHQUFHO2FBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRztjQUFJLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRyxJQUFHLE1BQUksR0FBRSxPQUFPLEVBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRSxHQUFFLEtBQUcsRUFBRSxLQUFHLElBQUk7Z0JBQVM7Z0JBQVMsSUFBSTthQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEdBQUU7WUFBRSxLQUFHLEVBQUUsSUFBRSxHQUFFLEdBQUU7QUFBRztnQkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1lBQUk7WUFBRTtZQUFF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LENBQUk7QUFBRTtZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQUssSUFBSTtVQUFHLEtBQUcsR0FBRSxPQUFNLENBQUMsRUFBRSxJQUFFLEVBQWE7WUFBTSxDQUFHO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxFQUFFLFFBQVEsS0FBRyxDQUFHO1lBQVMsRUFBRSxHQUFHO1dBQU8sRUFBRSxPQUFPLE1BQWM7WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1FBQUcsRUFBRSxXQUFTLENBQUMsR0FBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVM7VUFBRyxLQUFHLEVBQUUsR0FBRyxNQUFJLEtBQUcsQ0FBQyxLQUFHLEVBQUUsT0FBSyxHQUFFLE9BQU8sRUFBTTtZQUFNLENBQUc7WUFBUyxFQUFFLEdBQUc7V0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLEdBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1NBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxJQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUztVQUFJLElBQUUsSUFBRSxFQUFFLEdBQUcsS0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFFLEtBQUcsS0FBRyxFQUFFLEtBQUssRUFBRSxLQUFJLEVBQUUsS0FBRyxHQUFNO1lBQU8sTUFBSSxVQUFNLEtBQUssVUFBUyxHQUFFLEdBQUc7YUFBTyxFQUFFLEtBQUcsRUFBSztBQUF0QyxNQUFGLEdBQTBDLEVBQUUsU0FBVTtZQUFTLEVBQUUsR0FBRSxHQUFHO1NBQUksSUFBSSxHQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUcsZ0JBQWMsRUFBRSxNQUFNLElBQUcsSUFBRSxHQUFFLElBQUUsR0FBRyxTQUFTO1VBQUcsSUFBRSxHQUFHLElBQUcsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLEtBQUssR0FBRSxPQUFPLEVBQU07WUFBUztZQUFTLElBQUk7V0FBWTtZQUFTLEVBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxjQUFjLE9BQU8sRUFBRSxlQUFhLEVBQWU7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsVUFBVSxVQUFRLEdBQUUsS0FBSyxXQUFTLEdBQUUsS0FBSyxVQUFRLEVBQUUsU0FBUSxLQUFLLFNBQU8sRUFBRSxRQUFRLGFBQVksS0FBSyxhQUFXLFVBQVMsR0FBRztRQUFFLEVBQUUsUUFBUSxRQUFPLENBQUMsT0FBSyxFQUFFLFFBQVc7QUFBMUosT0FBMkosS0FBWTtZQUFTLEVBQUUsR0FBRztRQUFJO1FBQUUsSUFBRSxFQUFFLFFBQVEsV0FBVyxPQUFPLEtBQUksSUFBRSxJQUFFLElBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsR0FBRyxHQUFLO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxTQUFTO1FBQU8sSUFBRSxFQUFFLGdCQUFnQjtRQUFPLElBQUUsSUFBRSxNQUFJLE1BQUksSUFBRTtRQUFFLElBQUUsS0FBRyxLQUFHLE9BQUssTUFBSSxJQUFFLEVBQUUsRUFBRSxVQUFRLENBQUMsQ0FBQyxHQUFFLEVBQUUsVUFBUSxDQUFDLENBQUMsR0FBRSxNQUFJLEVBQUUsVUFBUSxLQUFJLEVBQUUsWUFBVSxHQUFFLEVBQUUsR0FBRSxJQUFHLEVBQUUsS0FBSyxnQkFBZSxJQUFHLEVBQUUsVUFBVSxJQUFHLEVBQUUsUUFBUSxZQUFZO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUU7UUFBUSxJQUFFLEVBQUU7UUFBUyxJQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWEsRUFBRSxhQUFXLEVBQUUsS0FBSSxJQUFFLEtBQUcsQ0FBQyxFQUFFLGdCQUFjLEVBQUUsZ0JBQWMsRUFBRSxLQUFHLE1BQUksTUFBSSxFQUFFLGdCQUFjLENBQUMsT0FBTyxJQUFFLEVBQUU7QUFBUixRQUFtQixJQUFFLEVBQUU7UUFBYyxJQUFFLElBQUUsRUFBRSxTQUFPLEVBQUU7UUFBTyxJQUFFLEVBQUUsU0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFVLE1BQUssRUFBRSxZQUFVLEVBQUUsWUFBVSxFQUFFLFdBQVUsRUFBRSxRQUFNLEVBQUUsR0FBRSxJQUFHLEVBQUUsV0FBUyxFQUFFLEdBQUUsSUFBRyxFQUFFLEdBQUUsSUFBRyxFQUFFLGtCQUFnQixFQUFFLEVBQUUsUUFBTyxFQUFFLFNBQVEsRUFBRSxRQUFNLElBQUUsRUFBRSxFQUFFLFVBQVMsS0FBRyxHQUFFLEVBQUUsV0FBUyxJQUFFLEVBQUUsRUFBRSxVQUFTLEtBQUcsR0FBRSxFQUFFLEdBQUUsR0FBRyxJQUFJLElBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLFFBQU8sT0FBSyxJQUFFLEVBQUUsU0FBUyxTQUFRLEVBQUUsU0FBUztZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFO1FBQU8sSUFBRSxFQUFFLGVBQWE7UUFBRyxJQUFFLEVBQUUsYUFBVztRQUFHLElBQUUsRUFBRSxhQUFXLEdBQUcsQ0FBQyxFQUFFLGNBQVksTUFBSSxFQUFFLGNBQVksUUFBTSxJQUFFLEVBQUUsWUFBVSxFQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUUsR0FBRSxFQUFFLFVBQVEsS0FBRyxJQUFFLEVBQUUsY0FBWSxFQUFDLEdBQUUsRUFBRSxHQUFFLEdBQUUsRUFBRSxNQUFJLEVBQUUsU0FBTyxFQUFFLEtBQUcsRUFBRSxJQUFFLEVBQUUsSUFBRyxFQUFFLFNBQU8sRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFLO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSTtRQUFFO1FBQUU7UUFBRTtRQUFFLElBQUUsRUFBRSxnQkFBYztRQUFFLElBQUUsRUFBRSxZQUFVLEVBQUUsY0FBYSxFQUFFLGFBQVcsT0FBSyxJQUFFLE1BQUksRUFBRSxhQUFXLElBQUk7VUFBSSxJQUFFLEVBQUUsU0FBTyxFQUFFO1VBQU8sSUFBRSxFQUFFLFNBQU8sRUFBRTtVQUFPLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEdBQUcsRUFBRSxLQUFHLEdBQUcsRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRyxFQUFFLGVBQWU7QUFBbkssV0FBd0ssSUFBRSxFQUFFLFVBQVMsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFTLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFZO1lBQVMsRUFBRSxHQUFHO1NBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTLFNBQVE7UUFBRSxLQUFHLEVBQUMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFVBQVMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFlBQVU7QUFBSSxZQUFNLEVBQUMsV0FBVSxNQUFLLFVBQVMsR0FBRSxRQUFPLEVBQUUsSUFBRyxRQUFPLEVBQUUsUUFBTyxRQUFPLEVBQVU7WUFBUyxFQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsT0FBTyxJQUFHLE1BQUksR0FBRSxPQUFNLEVBQUMsR0FBRSxHQUFHLEVBQUUsR0FBRyxVQUFTLEdBQUUsR0FBRyxFQUFFLEdBQUcsV0FBVSxLQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFHO1dBQUcsRUFBRSxHQUFHLFNBQVEsS0FBRyxFQUFFLEdBQUcsU0FBUTtBQUFJLFlBQU0sRUFBQyxHQUFFLEdBQUcsSUFBRSxJQUFHLEdBQUUsR0FBRyxJQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztXQUFNLEVBQUMsR0FBRSxJQUFFLEtBQUcsR0FBRSxHQUFFLElBQUUsS0FBTTtZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sTUFBSSxJQUFFLEtBQUcsR0FBRyxNQUFJLEdBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFHLElBQUUsSUFBRSxLQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztVQUFJLElBQUUsUUFBUSxJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRTtBQUFsQixRQUFzQixJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUUs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WUFBUyxFQUFFLEdBQUc7V0FBTyxJQUFFLEtBQUcsV0FBUyxJQUFFLEtBQUcsUUFBTSxJQUFFLEtBQUcsU0FBTyxJQUFFLEtBQUcsVUFBVztZQUFTLEVBQUUsR0FBRztXQUFPLEtBQUcsS0FBRyxTQUFPLEtBQUcsS0FBRyxPQUFLLEtBQUcsS0FBRyxTQUFPLEtBQUcsS0FBRyxVQUFXO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsUUFBUSxPQUFPLElBQUUsRUFBRSxJQUFJLEtBQUs7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFnQjtZQUFTLElBQUk7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLEtBQUcsTUFBSyxLQUFLLEtBQVE7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFNBQU8sTUFBSyxLQUFLLFNBQVk7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQWdCO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBSyxZQUFXLEtBQUssUUFBTSxDQUFDLEdBQUUsS0FBSyxVQUFRLENBQUMsR0FBRSxLQUFLLFNBQU8sTUFBSyxLQUFLLFNBQU8sTUFBSyxLQUFLLFFBQVE7WUFBUyxHQUFHLEdBQUUsR0FBRztXQUFPLElBQUUsS0FBRyxJQUFHLEVBQUUsY0FBWSxFQUFFLEVBQUUsYUFBWSxHQUFHLFNBQVMsU0FBUSxJQUFJLEdBQUcsR0FBSztZQUFTLEdBQUcsR0FBRSxHQUFHO1FBQUUsS0FBRyxJQUFHLEtBQUssVUFBUSxFQUFFLEdBQUUsR0FBRyxXQUFVLEtBQUssUUFBUSxjQUFZLEtBQUssUUFBUSxlQUFhLEdBQUUsS0FBSyxXQUFTLElBQUcsS0FBSyxVQUFRLElBQUcsS0FBSyxjQUFZLElBQUcsS0FBSyxVQUFRLEdBQUUsS0FBSyxRQUFNLEVBQUUsT0FBTSxLQUFLLGNBQVksSUFBSSxFQUFFLE1BQUssS0FBSyxRQUFRLGNBQWEsR0FBRyxNQUFLLENBQUMsTUFBSyxFQUFFLGFBQVksVUFBUyxH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Q0FBQyxFQUFFLFNBQU8sQ0FBQyxLQUFHLEVBQUUsU0FBUyxNQUFJLEtBQUcsRUFBRSxTQUFTLE9BQUssS0FBRyxLQUFHLE1BQUksQ0FBQyxNQUFJLEVBQUUsUUFBTSxFQUFFLFFBQU0sRUFBRSxRQUFNLEVBQUUsUUFBTyxLQUFJLEtBQUcsQ0FBQyxNQUFJLENBQUMsS0FBRyxJQUFFLEtBQUcsQ0FBQyxLQUFHLElBQUUsT0FBSyxLQUFHLENBQUMsSUFBRyxFQUFFLFNBQVMsT0FBSyxLQUFLLElBQUksS0FBRyxNQUFJLEVBQUUsUUFBTSxFQUFFLFNBQU8sRUFBRSxRQUFNLEVBQUUsV0FBUyxJQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxDQUFDLElBQUcsRUFBRSxRQUFNLEVBQUUsUUFBTSxJQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsUUFBTSxFQUFFLFNBQU8sRUFBRSxPQUFLLElBQUUsQ0FBQyxRQUFNLEVBQUUsUUFBTSxFQUFFLFNBQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsUUFBTSxFQUFFLFNBQU8sRUFBRSxPQUFLLElBQUUsT0FBTSxDQUFDLEtBQUcsQ0FBQyxLQUFJO1VBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFLLEVBQUUsT0FBTSxFQUFFLE9BQUs7QUFBSSxZQUFTO0FBRDAzNEIsS0FDejM0QixFQUFFLFVBQVUsV0FBUyxVQUFTLEdBQUc7UUFBSSxJQUFFO1FBQUssTUFBSSxLQUFLLFFBQVEsT0FBTyxVQUFTLEdBQUc7YUFBTyxFQUFFLFVBQVUsS0FBRyxFQUFFLFFBQU0sQ0FBQyxFQUFFLFNBQVMsV0FBUyxJQUFFLElBQUUsS0FBRyxJQUFFLEVBQUUsUUFBUSxNQUFJLEVBQUUsT0FBTyxLQUFHLEVBQUUsU0FBTyxFQUFFLE9BQU8sR0FBRyxPQUFLLEVBQUUsY0FBYyxLQUFHLEVBQUUsWUFBWSxHQUFF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O0FBWUQ7O0FBWkMsd0NBYUosNkNBQWUsUUFBUTtnQ0FBeEI7a0NBQ1U7QUFEVjttQkFBQSxnQ0FDVyxzQ0FBYzs7Z0NBQWY7a0NBQUE7QUFBQTtBQUFBO2tDQWRMO3lCQWlCRCxrQ0FBZ0I7O3FCQWpCZjs7Ozs4QkF1QkcsT0FBTyxrQkFHakI7QUFISTtBQURGOzZCQXRCSztBQXFCUCxxQkFNRzs7cUJBM0JJO3FCQUFBO2tDQUFBOztBQUFBO3NCQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUErQlg7QUEvQlc7O29CQStCRSxPQUFPOzBDQUFBOzt3SUFHbEI7O1lBQUssU0FBUyw0QkFBVyxNQUFLLE1BQU0sU0FBUyxNQUFLLE1BQU07O2FBRXpEO0FBcENVOzs7V0FBQTsrQkF3Q1Q7K0JBQ08sNkNBQWUsUUFBUSxLQUFLO3NCQUE3Qjt3QkFDUTtBQURSO1NBQUEsZ0NBQ1Msc0NBQWMsS0FBSzs7c0JBQXBCO3dCQUlmO0FBSmU7QUFBQTtBQTFDTDtBQUFBOztXQUFBO0lBQ0MsZ0JBQU07QUFEdEIsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxTdGF0ZShzdGF0ZSl7XG4gICAgY29uc29sZS5sb2coXCJIQVZFIFNUQVRFXCIpXG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4gICAgd2luZG93LiQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrZW4tMlwiPlxuICAgICAgICB7LyogaWYocHJvY2Vzcy5XaW5kb3cpe1xuICAgICAgICAgIHZhciB0aGluZyA9IGNyZWF0ZUZyYWdtZW50KDxMb2FkZXIgc3R5bGU9e3tkaXNwbGF5OiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn19Lz4pICovfVxuXG5cbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXt0aGlzLnByb3BzLmRhdGEudXJsLnBhdGhuYW1lfSB1c2VybmFtZT17dGhpcy5wcm9wcy5kYXRhLnVzZXJuYW1lfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VybmFtZUZpZWxkIGZyb20gJy4vdXNlcm5hbWVGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIC8vIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJibHVlIGRhcmtlbi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIHJpZ2h0XCI+XG4gICAgICAgICAgPFVzZXJuYW1lRmllbGQgdXNlcm5hbWU9e3RoaXMucHJvcHMudXNlcm5hbWV9IC8+PC9kaXY+XG4gICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImxlZnQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lID09PSAnLycgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgICAgXHRcdFx0PGEgPkhvbWUgPC9hPlxuICAgICAgICAgIFx0XHRcdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Rpc2NvdmVyJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9kaXNjb3Zlcic+XG4gICAgICAgICAgICAgIDxhID5EaXNjb3ZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2NyZWF0ZScgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvY3JlYXRlJz5cbiAgICAgICAgICAgICAgPGEgPkNyZWF0ZSBhIFBvc3Q8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZGl2LnByb2dyZXNzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2FkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VybmFtZUZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VybmFtZSl7XG4gICAgICAgICAgcmV0dXJuICg8aDQ+V2VsY29tZSwge3RoaXMucHJvcHMudXNlcm5hbWV9LjwvaDQ+KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImljb25fcHJlZml4XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanMiLCIvKiFcbiAqIE1hdGVyaWFsaXplIHYwLjk4LjIgKGh0dHA6Ly9tYXRlcmlhbGl6ZWNzcy5jb20pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IE1hdGVyaWFsaXplXG4gKiBNSVQgTGljZW5zZSAoaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpe3ZhciBqUXVlcnk7alF1ZXJ5PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmU/JD1yZXF1aXJlKFwianF1ZXJ5XCIpOiR9alF1ZXJ5LmVhc2luZy5qc3dpbmc9alF1ZXJ5LmVhc2luZy5zd2luZyxqUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcse2RlZjpcImVhc2VPdXRRdWFkXCIsc3dpbmc6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4galF1ZXJ5LmVhc2luZ1tqUXVlcnkuZWFzaW5nLmRlZl0oYSxiLGMsZCxlKX0sZWFzZUluUXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKihiLz1lKSpiK2N9LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKGIvPWUpKihiLTIpK2N9LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIrYzotZC8yKigtLWIqKGItMiktMSkrY30sZWFzZUluQ3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiK2N9LGVhc2VPdXRDdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKigoYj1iL2UtMSkqYipiKzEpK2N9LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIrYzpkLzIqKChiLT0yKSpiKmIrMikrY30sZWFzZUluUXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiKmIrY30sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKChiPWIvZS0xKSpiKmIqYi0xKStjfSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiKmIrYzotZC8yKigoYi09MikqYipiKmItMikrY30sZWFzZUluUXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiKmIqYitjfSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooKGI9Yi9lLTEpKmIqYipiKmIrMSkrY30sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYipiKmIrYzpkLzIqKChiLT0yKSpiKmIqYipiKzIpK2N9LGVhc2VJblNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZCpNYXRoLmNvcyhiL2UqKE1hdGguUEkvMikpK2QrY30sZWFzZU91dFNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCpNYXRoLnNpbihiL2UqKE1hdGguUEkvMikpK2N9LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZC8yKihNYXRoLmNvcyhNYXRoLlBJKmIvZSktMSkrY30sZWFzZUluRXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiAwPT1iP2M6ZCpNYXRoLnBvdygyLDEwKihiL2UtMSkpK2N9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGI9PWU/YytkOmQqKC1NYXRoLnBvdygyLC0xMCpiL2UpKzEpK2N9LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gMD09Yj9jOmI9PWU/YytkOihiLz1lLzIpPDE/ZC8yKk1hdGgucG93KDIsMTAqKGItMSkpK2M6ZC8yKigtTWF0aC5wb3coMiwtMTAqLS1iKSsyKStjfSxlYXNlSW5DaXJjOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKE1hdGguc3FydCgxLShiLz1lKSpiKS0xKStjfSxlYXNlT3V0Q2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKk1hdGguc3FydCgxLShiPWIvZS0xKSpiKStjfSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT8tZC8yKihNYXRoLnNxcnQoMS1iKmIpLTEpK2M6ZC8yKihNYXRoLnNxcnQoMS0oYi09MikqYikrMSkrY30sZWFzZUluRWxhc3RpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPTEuNzAxNTgsZz0wLGg9ZDtpZigwPT1iKXJldHVybiBjO2lmKDE9PShiLz1lKSlyZXR1cm4gYytkO2lmKGd8fChnPS4zKmUpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybi0oaCpNYXRoLnBvdygyLDEwKihiLT0xKSkqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKSkrY30sZWFzZU91dEVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigxPT0oYi89ZSkpcmV0dXJuIGMrZDtpZihnfHwoZz0uMyplKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4gaCpNYXRoLnBvdygyLC0xMCpiKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpK2QrY30sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPTEuNzAxNTgsZz0wLGg9ZDtpZigwPT1iKXJldHVybiBjO2lmKDI9PShiLz1lLzIpKXJldHVybiBjK2Q7aWYoZ3x8KGc9ZSooLjMqMS41KSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuIGI8MT8tLjUqKGgqTWF0aC5wb3coMiwxMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykpK2M6aCpNYXRoLnBvdygyLC0xMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykqLjUrZCtjfSxlYXNlSW5CYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSxkKihiLz1lKSpiKigoZisxKSpiLWYpK2N9LGVhc2VPdXRCYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSxkKigoYj1iL2UtMSkqYiooKGYrMSkqYitmKSsxKStjfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSwoYi89ZS8yKTwxP2QvMiooYipiKigoKGYqPTEuNTI1KSsxKSpiLWYpKStjOmQvMiooKGItPTIpKmIqKCgoZio9MS41MjUpKzEpKmIrZikrMikrY30sZWFzZUluQm91bmNlOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQtalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGEsZS1iLDAsZCxlKStjfSxlYXNlT3V0Qm91bmNlOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUpPDEvMi43NT9kKig3LjU2MjUqYipiKStjOmI8Mi8yLjc1P2QqKDcuNTYyNSooYi09MS41LzIuNzUpKmIrLjc1KStjOmI8Mi41LzIuNzU/ZCooNy41NjI1KihiLT0yLjI1LzIuNzUpKmIrLjkzNzUpK2M6ZCooNy41NjI1KihiLT0yLjYyNS8yLjc1KSpiKy45ODQzNzUpK2N9LGVhc2VJbk91dEJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiPGUvMj8uNSpqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZShhLDIqYiwwLGQsZSkrYzouNSpqUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UoYSwyKmItZSwwLGQsZSkrLjUqZCtjfX0pLGpRdWVyeS5leHRlbmQoalF1ZXJ5LmVhc2luZyx7ZWFzZUluT3V0TWF0ZXJpYWw6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIrYzpkLzQqKChiLT0yKSpiKmIrMikrY319KSxqUXVlcnkuVmVsb2NpdHk/Y29uc29sZS5sb2coXCJWZWxvY2l0eSBpcyBhbHJlYWR5IGxvYWRlZC4gWW91IG1heSBiZSBuZWVkbGVzc2x5IGltcG9ydGluZyBWZWxvY2l0eSBhZ2Fpbjsgbm90ZSB0aGF0IE1hdGVyaWFsaXplIGluY2x1ZGVzIFZlbG9jaXR5LlwiKTooIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGI9YS5sZW5ndGgsZD1jLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09ZCYmIWMuaXNXaW5kb3coYSkmJighKDEhPT1hLm5vZGVUeXBlfHwhYil8fChcImFycmF5XCI9PT1kfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpKX1pZighYS5qUXVlcnkpe3ZhciBjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBjLmZuLmluaXQoYSxiKX07Yy5pc1dpbmRvdz1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09YS53aW5kb3d9LGMudHlwZT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/ZVtnLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxjLmlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT09Yy50eXBlKGEpfSxjLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGI7aWYoIWF8fFwib2JqZWN0XCIhPT1jLnR5cGUoYSl8fGEubm9kZVR5cGV8fGMuaXNXaW5kb3coYSkpcmV0dXJuITE7dHJ5e2lmKGEuY29uc3RydWN0b3ImJiFmLmNhbGwoYSxcImNvbnN0cnVjdG9yXCIpJiYhZi5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChkKXtyZXR1cm4hMX1mb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8Zi5jYWxsKGEsYil9LGMuZWFjaD1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZj0wLGc9YS5sZW5ndGgsaD1iKGEpO2lmKGQpe2lmKGgpZm9yKDtnPmYmJihlPWMuYXBwbHkoYVtmXSxkKSxlIT09ITEpO2YrKyk7ZWxzZSBmb3IoZiBpbiBhKWlmKGU9Yy5hcHBseShhW2ZdLGQpLGU9PT0hMSlicmVha31lbHNlIGlmKGgpZm9yKDtnPmYmJihlPWMuY2FsbChhW2ZdLGYsYVtmXSksZSE9PSExKTtmKyspO2Vsc2UgZm9yKGYgaW4gYSlpZihlPWMuY2FsbChhW2ZdLGYsYVtmXSksZT09PSExKWJyZWFrO3JldHVybiBhfSxjLmRhdGE9ZnVuY3Rpb24oYSxiLGUpe2lmKHZvaWQgMD09PWUpe3ZhciBmPWFbYy5leHBhbmRvXSxnPWYmJmRbZl07aWYodm9pZCAwPT09YilyZXR1cm4gZztpZihnJiZiIGluIGcpcmV0dXJuIGdbYl19ZWxzZSBpZih2b2lkIDAhPT1iKXt2YXIgZj1hW2MuZXhwYW5kb118fChhW2MuZXhwYW5kb109KytjLnV1aWQpO3JldHVybiBkW2ZdPWRbZl18fHt9LGRbZl1bYl09ZSxlfX0sYy5yZW1vdmVEYXRhPWZ1bmN0aW9uKGEsYil7dmFyIGU9YVtjLmV4cGFuZG9dLGY9ZSYmZFtlXTtmJiZjLmVhY2goYixmdW5jdGlvbihhLGIpe2RlbGV0ZSBmW2JdfSl9LGMuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixkLGUsZixnLGg9YXJndW1lbnRzWzBdfHx7fSxpPTEsaj1hcmd1bWVudHMubGVuZ3RoLGs9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgaCYmKGs9aCxoPWFyZ3VtZW50c1tpXXx8e30saSsrKSxcIm9iamVjdFwiIT10eXBlb2YgaCYmXCJmdW5jdGlvblwiIT09Yy50eXBlKGgpJiYoaD17fSksaT09PWomJihoPXRoaXMsaS0tKTtqPmk7aSsrKWlmKG51bGwhPShmPWFyZ3VtZW50c1tpXSkpZm9yKGUgaW4gZilhPWhbZV0sZD1mW2VdLGghPT1kJiYoayYmZCYmKGMuaXNQbGFpbk9iamVjdChkKXx8KGI9Yy5pc0FycmF5KGQpKSk/KGI/KGI9ITEsZz1hJiZjLmlzQXJyYXkoYSk/YTpbXSk6Zz1hJiZjLmlzUGxhaW5PYmplY3QoYSk/YTp7fSxoW2VdPWMuZXh0ZW5kKGssZyxkKSk6dm9pZCAwIT09ZCYmKGhbZV09ZCkpO3JldHVybiBofSxjLnF1ZXVlPWZ1bmN0aW9uKGEsZCxlKXtmdW5jdGlvbiBmKGEsYyl7dmFyIGQ9Y3x8W107cmV0dXJuIG51bGwhPWEmJihiKE9iamVjdChhKSk/IWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7KWFbZSsrXT1iW2QrK107aWYoYyE9PWMpZm9yKDt2b2lkIDAhPT1iW2RdOylhW2UrK109YltkKytdO3JldHVybiBhLmxlbmd0aD1lLGF9KGQsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOltdLnB1c2guY2FsbChkLGEpKSxkfWlmKGEpe2Q9KGR8fFwiZnhcIikrXCJxdWV1ZVwiO3ZhciBnPWMuZGF0YShhLGQpO3JldHVybiBlPyghZ3x8Yy5pc0FycmF5KGUpP2c9Yy5kYXRhKGEsZCxmKGUpKTpnLnB1c2goZSksZyk6Z3x8W119fSxjLmRlcXVldWU9ZnVuY3Rpb24oYSxiKXtjLmVhY2goYS5ub2RlVHlwZT9bYV06YSxmdW5jdGlvbihhLGQpe2I9Ynx8XCJmeFwiO3ZhciBlPWMucXVldWUoZCxiKSxmPWUuc2hpZnQoKTtcImlucHJvZ3Jlc3NcIj09PWYmJihmPWUuc2hpZnQoKSksZiYmKFwiZnhcIj09PWImJmUudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZi5jYWxsKGQsZnVuY3Rpb24oKXtjLmRlcXVldWUoZCxiKX0pKX0pfSxjLmZuPWMucHJvdG90eXBlPXtpbml0OmZ1bmN0aW9uKGEpe2lmKGEubm9kZVR5cGUpcmV0dXJuIHRoaXNbMF09YSx0aGlzO3Rocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKX0sb2Zmc2V0OmZ1bmN0aW9uKCl7dmFyIGI9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTp7dG9wOjAsbGVmdDowfTtyZXR1cm57dG9wOmIudG9wKyhhLnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxUb3B8fDApLShkb2N1bWVudC5jbGllbnRUb3B8fDApLGxlZnQ6Yi5sZWZ0KyhhLnBhZ2VYT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxMZWZ0fHwwKS0oZG9jdW1lbnQuY2xpZW50TGVmdHx8MCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtmb3IodmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fGRvY3VtZW50O2EmJlwiaHRtbFwiPT09IWEubm9kZVR5cGUudG9Mb3dlckNhc2UmJlwic3RhdGljXCI9PT1hLnN0eWxlLnBvc2l0aW9uOylhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxkb2N1bWVudH12YXIgYj10aGlzWzBdLGE9YS5hcHBseShiKSxkPXRoaXMub2Zmc2V0KCksZT0vXig/OmJvZHl8aHRtbCkkL2kudGVzdChhLm5vZGVOYW1lKT97dG9wOjAsbGVmdDowfTpjKGEpLm9mZnNldCgpO3JldHVybiBkLnRvcC09cGFyc2VGbG9hdChiLnN0eWxlLm1hcmdpblRvcCl8fDAsZC5sZWZ0LT1wYXJzZUZsb2F0KGIuc3R5bGUubWFyZ2luTGVmdCl8fDAsYS5zdHlsZSYmKGUudG9wKz1wYXJzZUZsb2F0KGEuc3R5bGUuYm9yZGVyVG9wV2lkdGgpfHwwLGUubGVmdCs9cGFyc2VGbG9hdChhLnN0eWxlLmJvcmRlckxlZnRXaWR0aCl8fDApLHt0b3A6ZC50b3AtZS50b3AsbGVmdDpkLmxlZnQtZS5sZWZ0fX19O3ZhciBkPXt9O2MuZXhwYW5kbz1cInZlbG9jaXR5XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksYy51dWlkPTA7Zm9yKHZhciBlPXt9LGY9ZS5oYXNPd25Qcm9wZXJ0eSxnPWUudG9TdHJpbmcsaD1cIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksaT0wO2k8aC5sZW5ndGg7aSsrKWVbXCJbb2JqZWN0IFwiK2hbaV0rXCJdXCJdPWhbaV0udG9Mb3dlckNhc2UoKTtjLmZuLmluaXQucHJvdG90eXBlPWMuZm4sYS5WZWxvY2l0eT17VXRpbGl0aWVzOmN9fX0od2luZG93KSxmdW5jdGlvbihhKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoYSk6YSgpfShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe2Zvcih2YXIgYj0tMSxjPWE/YS5sZW5ndGg6MCxkPVtdOysrYjxjOyl7dmFyIGU9YVtiXTtlJiZkLnB1c2goZSl9cmV0dXJuIGR9ZnVuY3Rpb24gZihhKXtyZXR1cm4gcC5pc1dyYXBwZWQoYSk/YT1bXS5zbGljZS5jYWxsKGEpOnAuaXNOb2RlKGEpJiYoYT1bYV0pLGF9ZnVuY3Rpb24gZyhhKXt2YXIgYj1tLmRhdGEoYSxcInZlbG9jaXR5XCIpO3JldHVybiBudWxsPT09Yj9kOmJ9ZnVuY3Rpb24gaChhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIE1hdGgucm91bmQoYiphKSooMS9hKX19ZnVuY3Rpb24gaShhLGMsZCxlKXtmdW5jdGlvbiBmKGEsYil7cmV0dXJuIDEtMypiKzMqYX1mdW5jdGlvbiBnKGEsYil7cmV0dXJuIDMqYi02KmF9ZnVuY3Rpb24gaChhKXtyZXR1cm4gMyphfWZ1bmN0aW9uIGkoYSxiLGMpe3JldHVybigoZihiLGMpKmErZyhiLGMpKSphK2goYikpKmF9ZnVuY3Rpb24gaihhLGIsYyl7cmV0dXJuIDMqZihiLGMpKmEqYSsyKmcoYixjKSphK2goYil9ZnVuY3Rpb24gayhiLGMpe2Zvcih2YXIgZT0wO3A+ZTsrK2Upe3ZhciBmPWooYyxhLGQpO2lmKDA9PT1mKXJldHVybiBjO3ZhciBnPWkoYyxhLGQpLWI7Yy09Zy9mfXJldHVybiBjfWZ1bmN0aW9uIGwoKXtmb3IodmFyIGI9MDt0PmI7KytiKXhbYl09aShiKnUsYSxkKX1mdW5jdGlvbiBtKGIsYyxlKXt2YXIgZixnLGg9MDtkbyBnPWMrKGUtYykvMixmPWkoZyxhLGQpLWIsZj4wP2U9ZzpjPWc7d2hpbGUoTWF0aC5hYnMoZik+ciYmKytoPHMpO3JldHVybiBnfWZ1bmN0aW9uIG4oYil7Zm9yKHZhciBjPTAsZT0xLGY9dC0xO2UhPWYmJnhbZV08PWI7KytlKWMrPXU7LS1lO3ZhciBnPShiLXhbZV0pLyh4W2UrMV0teFtlXSksaD1jK2cqdSxpPWooaCxhLGQpO3JldHVybiBpPj1xP2soYixoKTowPT1pP2g6bShiLGMsYyt1KX1mdW5jdGlvbiBvKCl7eT0hMCwoYSE9Y3x8ZCE9ZSkmJmwoKX12YXIgcD00LHE9LjAwMSxyPTFlLTcscz0xMCx0PTExLHU9MS8odC0xKSx2PVwiRmxvYXQzMkFycmF5XCJpbiBiO2lmKDQhPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgdz0wOzQ+dzsrK3cpaWYoXCJudW1iZXJcIiE9dHlwZW9mIGFyZ3VtZW50c1t3XXx8aXNOYU4oYXJndW1lbnRzW3ddKXx8IWlzRmluaXRlKGFyZ3VtZW50c1t3XSkpcmV0dXJuITE7YT1NYXRoLm1pbihhLDEpLGQ9TWF0aC5taW4oZCwxKSxhPU1hdGgubWF4KGEsMCksZD1NYXRoLm1heChkLDApO3ZhciB4PXY/bmV3IEZsb2F0MzJBcnJheSh0KTpuZXcgQXJyYXkodCkseT0hMSx6PWZ1bmN0aW9uKGIpe3JldHVybiB5fHxvKCksYT09PWMmJmQ9PT1lP2I6MD09PWI/MDoxPT09Yj8xOmkobihiKSxjLGUpfTt6LmdldENvbnRyb2xQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm5be3g6YSx5OmN9LHt4OmQseTplfV19O3ZhciBBPVwiZ2VuZXJhdGVCZXppZXIoXCIrW2EsYyxkLGVdK1wiKVwiO3JldHVybiB6LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEF9LHp9ZnVuY3Rpb24gaihhLGIpe3ZhciBjPWE7cmV0dXJuIHAuaXNTdHJpbmcoYSk/dC5FYXNpbmdzW2FdfHwoYz0hMSk6Yz1wLmlzQXJyYXkoYSkmJjE9PT1hLmxlbmd0aD9oLmFwcGx5KG51bGwsYSk6cC5pc0FycmF5KGEpJiYyPT09YS5sZW5ndGg/dS5hcHBseShudWxsLGEuY29uY2F0KFtiXSkpOiEoIXAuaXNBcnJheShhKXx8NCE9PWEubGVuZ3RoKSYmaS5hcHBseShudWxsLGEpLGM9PT0hMSYmKGM9dC5FYXNpbmdzW3QuZGVmYXVsdHMuZWFzaW5nXT90LmRlZmF1bHRzLmVhc2luZzpzKSxjfWZ1bmN0aW9uIGsoYSl7aWYoYSl7dmFyIGI9KG5ldyBEYXRlKS5nZXRUaW1lKCksYz10LlN0YXRlLmNhbGxzLmxlbmd0aDtjPjFlNCYmKHQuU3RhdGUuY2FsbHM9ZSh0LlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBmPTA7Yz5mO2YrKylpZih0LlN0YXRlLmNhbGxzW2ZdKXt2YXIgaD10LlN0YXRlLmNhbGxzW2ZdLGk9aFswXSxqPWhbMl0sbj1oWzNdLG89ISFuLHE9bnVsbDtufHwobj10LlN0YXRlLmNhbGxzW2ZdWzNdPWItMTYpO2Zvcih2YXIgcj1NYXRoLm1pbigoYi1uKS9qLmR1cmF0aW9uLDEpLHM9MCx1PWkubGVuZ3RoO3U+cztzKyspe3ZhciB3PWlbc10seT13LmVsZW1lbnQ7aWYoZyh5KSl7dmFyIHo9ITE7aWYoai5kaXNwbGF5IT09ZCYmbnVsbCE9PWouZGlzcGxheSYmXCJub25lXCIhPT1qLmRpc3BsYXkpe2lmKFwiZmxleFwiPT09ai5kaXNwbGF5KXt2YXIgQT1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07bS5lYWNoKEEsZnVuY3Rpb24oYSxiKXt2LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixiKX0pfXYuc2V0UHJvcGVydHlWYWx1ZSh5LFwiZGlzcGxheVwiLGouZGlzcGxheSl9ai52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWoudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKHksXCJ2aXNpYmlsaXR5XCIsai52aXNpYmlsaXR5KTtmb3IodmFyIEIgaW4gdylpZihcImVsZW1lbnRcIiE9PUIpe3ZhciBDLEQ9d1tCXSxFPXAuaXNTdHJpbmcoRC5lYXNpbmcpP3QuRWFzaW5nc1tELmVhc2luZ106RC5lYXNpbmc7aWYoMT09PXIpQz1ELmVuZFZhbHVlO2Vsc2V7dmFyIEY9RC5lbmRWYWx1ZS1ELnN0YXJ0VmFsdWU7aWYoQz1ELnN0YXJ0VmFsdWUrRipFKHIsaixGKSwhbyYmQz09PUQuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEQuY3VycmVudFZhbHVlPUMsXCJ0d2VlblwiPT09QilxPUM7ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0pe3ZhciBHPXYuSG9va3MuZ2V0Um9vdChCKSxIPWcoeSkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtHXTtIJiYoRC5yb290UHJvcGVydHlWYWx1ZT1IKX12YXIgST12LnNldFByb3BlcnR5VmFsdWUoeSxCLEQuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChDKT9cIlwiOkQudW5pdFR5cGUpLEQucm9vdFByb3BlcnR5VmFsdWUsRC5zY3JvbGxEYXRhKTt2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0mJihnKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR109di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ddP3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXShcImV4dHJhY3RcIixudWxsLElbMV0pOklbMV0pLFwidHJhbnNmb3JtXCI9PT1JWzBdJiYoej0hMCl9fWoubW9iaWxlSEEmJmcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1kJiYoZyh5KS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLHo9ITApLHomJnYuZmx1c2hUcmFuc2Zvcm1DYWNoZSh5KX19ai5kaXNwbGF5IT09ZCYmXCJub25lXCIhPT1qLmRpc3BsYXkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLmRpc3BsYXk9ITEpLGoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLnZpc2liaWxpdHk9ITEpLGoucHJvZ3Jlc3MmJmoucHJvZ3Jlc3MuY2FsbChoWzFdLGhbMV0scixNYXRoLm1heCgwLG4rai5kdXJhdGlvbi1iKSxuLHEpLDE9PT1yJiZsKGYpfX10LlN0YXRlLmlzVGlja2luZyYmeChrKX1mdW5jdGlvbiBsKGEsYil7aWYoIXQuU3RhdGUuY2FsbHNbYV0pcmV0dXJuITE7Zm9yKHZhciBjPXQuU3RhdGUuY2FsbHNbYV1bMF0sZT10LlN0YXRlLmNhbGxzW2FdWzFdLGY9dC5TdGF0ZS5jYWxsc1thXVsyXSxoPXQuU3RhdGUuY2FsbHNbYV1bNF0saT0hMSxqPTAsaz1jLmxlbmd0aDtrPmo7aisrKXt2YXIgbD1jW2pdLmVsZW1lbnQ7aWYoYnx8Zi5sb29wfHwoXCJub25lXCI9PT1mLmRpc3BsYXkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwiZGlzcGxheVwiLGYuZGlzcGxheSksXCJoaWRkZW5cIj09PWYudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKGwsXCJ2aXNpYmlsaXR5XCIsZi52aXNpYmlsaXR5KSksZi5sb29wIT09ITAmJihtLnF1ZXVlKGwpWzFdPT09ZHx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChtLnF1ZXVlKGwpWzFdKSkmJmcobCkpe2cobCkuaXNBbmltYXRpbmc9ITEsZyhsKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBuPSExO20uZWFjaCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihhLGIpe3ZhciBjPS9ec2NhbGUvLnRlc3QoYik/MTowLGU9ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXTtnKGwpLnRyYW5zZm9ybUNhY2hlW2JdIT09ZCYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK2MrXCJbXi5dXCIpLnRlc3QoZSkmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlW2JdKX0pLGYubW9iaWxlSEEmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxuJiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUobCksdi5WYWx1ZXMucmVtb3ZlQ2xhc3MobCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighYiYmZi5jb21wbGV0ZSYmIWYubG9vcCYmaj09PWstMSl0cnl7Zi5jb21wbGV0ZS5jYWxsKGUsZSl9Y2F0Y2gobyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IG99LDEpfWgmJmYubG9vcCE9PSEwJiZoKGUpLGcobCkmJmYubG9vcD09PSEwJiYhYiYmKG0uZWFjaChnKGwpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpey9ecm90YXRlLy50ZXN0KGEpJiYzNjA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGEpJiYxMDA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiZcIiVcIj09PWIudW5pdFR5cGUmJihiLmVuZFZhbHVlPTAsYi5zdGFydFZhbHVlPTEwMCl9KSx0KGwsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6Zi5kZWxheX0pKSxmLnF1ZXVlIT09ITEmJm0uZGVxdWV1ZShsLGYucXVldWUpfXQuU3RhdGUuY2FsbHNbYV09ITE7Zm9yKHZhciBwPTAscT10LlN0YXRlLmNhbGxzLmxlbmd0aDtxPnA7cCsrKWlmKHQuU3RhdGUuY2FsbHNbcF0hPT0hMSl7aT0hMDticmVha31pPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgdC5TdGF0ZS5jYWxscyx0LlN0YXRlLmNhbGxzPVtdKX12YXIgbSxuPWZ1bmN0aW9uKCl7aWYoYy5kb2N1bWVudE1vZGUpcmV0dXJuIGMuZG9jdW1lbnRNb2RlO2Zvcih2YXIgYT03O2E+NDthLS0pe3ZhciBiPWMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihiLmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrYStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gYj1udWxsLGF9cmV0dXJuIGR9KCksbz1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYil7dmFyIGMsZD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gYz1NYXRoLm1heCgwLDE2LShkLWEpKSxhPWQrYyxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihkK2MpfSxjKX19KCkscD17aXNTdHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNOb2RlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSYmYS5sZW5ndGghPT1kJiYoMD09PWEubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgYVswXSYmYVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoYS5qcXVlcnl8fGIuWmVwdG8mJmIuWmVwdG8uemVwdG8uaXNaKGEpKX0saXNTVkc6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuU1ZHRWxlbWVudCYmYSBpbnN0YW5jZW9mIGIuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH19LHE9ITE7aWYoYS5mbiYmYS5mbi5qcXVlcnk/KG09YSxxPSEwKTptPWIuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PW4mJiFxKXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PW4pcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgcj00MDAscz1cInN3aW5nXCIsdD17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6Yi5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OmMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOm0sUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTpiLlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246cixlYXNpbmc6cyxiZWdpbjpkLGNvbXBsZXRlOmQscHJvZ3Jlc3M6ZCxkaXNwbGF5OmQsdmlzaWJpbGl0eTpkLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGEpe20uZGF0YShhLFwidmVsb2NpdHlcIix7aXNTVkc6cC5pc1NWRyhhKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O2IucGFnZVlPZmZzZXQhPT1kPyh0LlN0YXRlLnNjcm9sbEFuY2hvcj1iLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KHQuU3RhdGUuc2Nyb2xsQW5jaG9yPWMuZG9jdW1lbnRFbGVtZW50fHxjLmJvZHkucGFyZW50Tm9kZXx8Yy5ib2R5LHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybi1hLnRlbnNpb24qYS54LWEuZnJpY3Rpb24qYS52fWZ1bmN0aW9uIGIoYixjLGQpe3ZhciBlPXt4OmIueCtkLmR4KmMsdjpiLnYrZC5kdipjLHRlbnNpb246Yi50ZW5zaW9uLGZyaWN0aW9uOmIuZnJpY3Rpb259O3JldHVybntkeDplLnYsZHY6YShlKX19ZnVuY3Rpb24gYyhjLGQpe3ZhciBlPXtkeDpjLnYsZHY6YShjKX0sZj1iKGMsLjUqZCxlKSxnPWIoYywuNSpkLGYpLGg9YihjLGQsZyksaT0xLzYqKGUuZHgrMiooZi5keCtnLmR4KStoLmR4KSxqPTEvNiooZS5kdisyKihmLmR2K2cuZHYpK2guZHYpO3JldHVybiBjLng9Yy54K2kqZCxjLnY9Yy52K2oqZCxjfXJldHVybiBmdW5jdGlvbiBkKGEsYixlKXt2YXIgZixnLGgsaT17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LGo9WzBdLGs9MCxsPTFlLTQsbT0uMDE2O2ZvcihhPXBhcnNlRmxvYXQoYSl8fDUwMCxiPXBhcnNlRmxvYXQoYil8fDIwLGU9ZXx8bnVsbCxpLnRlbnNpb249YSxpLmZyaWN0aW9uPWIsZj1udWxsIT09ZSxmPyhrPWQoYSxiKSxnPWsvZSptKTpnPW07aD1jKGh8fGksZyksai5wdXNoKDEraC54KSxrKz0xNixNYXRoLmFicyhoLngpPmwmJk1hdGguYWJzKGgudik+bDspO3JldHVybiBmP2Z1bmN0aW9uKGEpe3JldHVybiBqW2EqKGoubGVuZ3RoLTEpfDBdfTprfX0oKTt0LkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmEqTWF0aC5QSSkqTWF0aC5leHAoNiotYSl9fSxtLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGEsYil7dC5FYXNpbmdzW2JbMF1dPWkuYXBwbHkobnVsbCxiWzFdKX0pO3ZhciB2PXQuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspe3ZhciBiPVwiY29sb3JcIj09PXYuTGlzdHMuY29sb3JzW2FdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO3YuSG9va3MudGVtcGxhdGVzW3YuTGlzdHMuY29sb3JzW2FdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLGJdfXZhciBjLGQsZTtpZihuKWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7dmFyIGY9ZFsxXS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PWVbMF0mJihlLnB1c2goZS5zaGlmdCgpKSxmLnB1c2goZi5zaGlmdCgpKSx2Lkhvb2tzLnRlbXBsYXRlc1tjXT1bZS5qb2luKFwiIFwiKSxmLmpvaW4oXCIgXCIpXSl9Zm9yKGMgaW4gdi5Ib29rcy50ZW1wbGF0ZXMpe2Q9di5Ib29rcy50ZW1wbGF0ZXNbY10sZT1kWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGEgaW4gZSl7dmFyIGc9YytlW2FdLGg9YTt2Lkhvb2tzLnJlZ2lzdGVyZWRbZ109W2MsaF19fX0sZ2V0Um9vdDpmdW5jdGlvbihhKXt2YXIgYj12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07cmV0dXJuIGI/YlswXTphfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHYuUmVnRXgudmFsdWVVbndyYXAudGVzdChiKSYmKGI9Yi5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoYikmJihiPXYuSG9va3MudGVtcGxhdGVzW2FdWzFdKSxifSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoYyl7dmFyIGQ9Y1swXSxlPWNbMV07cmV0dXJuIGI9di5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGQsYiksYi50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdClbZV19cmV0dXJuIGJ9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoZCl7dmFyIGUsZixnPWRbMF0saD1kWzFdO3JldHVybiBjPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShnLGMpLGU9Yy50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdCksZVtoXT1iLGY9ZS5qb2luKFwiIFwiKX1yZXR1cm4gY319LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZDtyZXR1cm4gdi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoYyk/ZD1jOihkPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKSxkPWQ/ZFsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpjKSxkO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIitjK1wiKVwifX0sYmx1cjpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gdC5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPXBhcnNlRmxvYXQoYyk7aWYoIWQmJjAhPT1kKXt2YXIgZT1jLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTtkPWU/ZVsxXTowfXJldHVybiBkO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KGMpP1wiYmx1cihcIitjK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihhLGIsYyl7aWYoOD49bilzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPWMudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIGM9ZD9kWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiBiLnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KGMpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KGMpLDEwKStcIilcIn1lbHNlIHN3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBjO2Nhc2VcImluamVjdFwiOnJldHVybiBjfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49bnx8dC5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwodi5MaXN0cy50cmFuc2Zvcm1zQmFzZT12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgYT0wO2E8di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBnKGMpPT09ZHx8ZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQ/L15zY2FsZS9pLnRlc3QoYik/MTowOmcoYykudHJhbnNmb3JtQ2FjaGVbYl0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBmPSExO3N3aXRjaChiLnN1YnN0cigwLGIubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpmPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjp0LlN0YXRlLmlzQW5kcm9pZCYmZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQmJjE+ZSYmKGU9MSksZj0hLyhcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2tld1wiOmY9IS8oZGVnfFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJyb3RhdGVcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSl9cmV0dXJuIGZ8fChnKGMpLnRyYW5zZm9ybUNhY2hlW2JdPVwiKFwiK2UrXCIpXCIpLGcoYykudHJhbnNmb3JtQ2FjaGVbYl19fX0oKTtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspIWZ1bmN0aW9uKCl7dmFyIGI9di5MaXN0cy5jb2xvcnNbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVybiBiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZjtpZih2LlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChlKSlmPWU7ZWxzZXt2YXIgZyxoPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KGUpP2c9aFtlXSE9PWQ/aFtlXTpoLmJsYWNrOnYuUmVnRXguaXNIZXgudGVzdChlKT9nPVwicmdiKFwiK3YuVmFsdWVzLmhleFRvUmdiKGUpLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KGUpfHwoZz1oLmJsYWNrKSxmPShnfHxlKS50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1ufHwzIT09Zi5zcGxpdChcIiBcIikubGVuZ3RofHwoZis9XCIgMVwiKSxmO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1uPzQ9PT1lLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihlPWUuc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZSs9XCIgMVwiKSwoOD49bj9cInJnYlwiOlwicmdiYVwiKStcIihcIitlLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGEpe3ZhciBiPVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKG58fHQuU3RhdGUuaXNBbmRyb2lkJiYhdC5TdGF0ZS5pc0Nocm9tZSkmJihiKz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrYitcIikkXCIsXCJpXCIpLnRlc3QoYSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGEpe2lmKHQuU3RhdGUucHJlZml4TWF0Y2hlc1thXSlyZXR1cm5bdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdLCEwXTtmb3IodmFyIGI9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0sYz0wLGQ9Yi5sZW5ndGg7ZD5jO2MrKyl7dmFyIGU7aWYoZT0wPT09Yz9hOmJbY10rYS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihhKXtyZXR1cm4gYS50b1VwcGVyQ2FzZSgpfSkscC5pc1N0cmluZyh0LlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbZV0pKXJldHVybiB0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV09ZSxbZSwhMF19cmV0dXJuW2EsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihhKXt2YXIgYixjPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZD0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBhPWEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBiK2IrYytjK2QrZH0pLGI9ZC5leGVjKGEpLGI/W3BhcnNlSW50KGJbMV0sMTYpLHBhcnNlSW50KGJbMl0sMTYpLHBhcnNlSW50KGJbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihhKXtyZXR1cm4gMD09YXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoYSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGEpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoYSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGEpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdChiKT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KGIpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdChiKT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QuYWRkKGIpOmEuY2xhc3NOYW1lKz0oYS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK2J9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QucmVtb3ZlKGIpOmEuY2xhc3NOYW1lPWEuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrYi5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGUsZil7ZnVuY3Rpb24gaChhLGMpe2Z1bmN0aW9uIGUoKXtqJiZ2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGk9MDtpZig4Pj1uKWk9bS5jc3MoYSxjKTtlbHNle3ZhciBqPSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KGMpJiYwPT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIpJiYoaj0hMCx2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIix2LlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKSkpLCFmKXtpZihcImhlaWdodFwiPT09YyYmXCJib3JkZXItYm94XCIhPT12LmdldFByb3BlcnR5VmFsdWUoYSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBrPWEub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIGUoKSxrfWlmKFwid2lkdGhcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgbD1hLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIGUoKSxsfX12YXIgbztvPWcoYSk9PT1kP2IuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpOmcoYSkuY29tcHV0ZWRTdHlsZT9nKGEpLmNvbXB1dGVkU3R5bGU6ZyhhKS5jb21wdXRlZFN0eWxlPWIuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PWMmJihjPVwiYm9yZGVyVG9wQ29sb3JcIiksaT05PT09biYmXCJmaWx0ZXJcIj09PWM/by5nZXRQcm9wZXJ0eVZhbHVlKGMpOm9bY10sKFwiXCI9PT1pfHxudWxsPT09aSkmJihpPWEuc3R5bGVbY10pLGUoKX1pZihcImF1dG9cIj09PWkmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChjKSl7dmFyIHA9aChhLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PXB8fFwiYWJzb2x1dGVcIj09PXAmJi90b3B8bGVmdC9pLnRlc3QoYykpJiYoaT1tKGEpLnBvc2l0aW9uKClbY10rXCJweFwiKX1yZXR1cm4gaX12YXIgaTtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBqPWMsaz12Lkhvb2tzLmdldFJvb3Qoaik7ZT09PWQmJihlPXYuZ2V0UHJvcGVydHlWYWx1ZShhLHYuTmFtZXMucHJlZml4Q2hlY2soaylbMF0pKSx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10mJihlPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtrXShcImV4dHJhY3RcIixhLGUpKSxpPXYuSG9va3MuZXh0cmFjdFZhbHVlKGosZSl9ZWxzZSBpZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10pe3ZhciBsLG87bD12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSksXCJ0cmFuc2Zvcm1cIiE9PWwmJihvPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGwpWzBdKSx2LlZhbHVlcy5pc0NTU051bGxWYWx1ZShvKSYmdi5Ib29rcy50ZW1wbGF0ZXNbY10mJihvPXYuSG9va3MudGVtcGxhdGVzW2NdWzFdKSksaT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJleHRyYWN0XCIsYSxvKX1pZighL15bXFxkLV0vLnRlc3QoaSkpaWYoZyhhKSYmZyhhKS5pc1NWRyYmdi5OYW1lcy5TVkdBdHRyaWJ1dGUoYykpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KGMpKXRyeXtpPWEuZ2V0QkJveCgpW2NdfWNhdGNoKHApe2k9MH1lbHNlIGk9YS5nZXRBdHRyaWJ1dGUoYyk7ZWxzZSBpPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKTtyZXR1cm4gdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoaSkmJihpPTApLHQuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK2MrXCI6IFwiK2kpLGl9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGQsZSxmKXt2YXIgaD1jO2lmKFwic2Nyb2xsXCI9PT1jKWYuY29udGFpbmVyP2YuY29udGFpbmVyW1wic2Nyb2xsXCIrZi5kaXJlY3Rpb25dPWQ6XCJMZWZ0XCI9PT1mLmRpcmVjdGlvbj9iLnNjcm9sbFRvKGQsZi5hbHRlcm5hdGVWYWx1ZSk6Yi5zY3JvbGxUbyhmLmFsdGVybmF0ZVZhbHVlLGQpO2Vsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdJiZcInRyYW5zZm9ybVwiPT09di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpKXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksaD1cInRyYW5zZm9ybVwiLGQ9ZyhhKS50cmFuc2Zvcm1DYWNoZVtjXTtlbHNle2lmKHYuSG9va3MucmVnaXN0ZXJlZFtjXSl7dmFyIGk9YyxqPXYuSG9va3MuZ2V0Um9vdChjKTtlPWV8fHYuZ2V0UHJvcGVydHlWYWx1ZShhLGopLGQ9di5Ib29rcy5pbmplY3RWYWx1ZShpLGQsZSksYz1qfWlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmKGQ9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiaW5qZWN0XCIsYSxkKSxjPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSksaD12Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdLDg+PW4pdHJ5e2Euc3R5bGVbaF09ZH1jYXRjaChrKXt0LmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrZCtcIl0gZm9yIFtcIitoK1wiXVwiKX1lbHNlIGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpP2Euc2V0QXR0cmlidXRlKGMsZCk6YS5zdHlsZVtoXT1kO3QuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK2MrXCIgKFwiK2grXCIpOiBcIitkKX1yZXR1cm5baCxkXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLGIpKX12YXIgYz1cIlwiO2lmKChufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiZnKGEpLmlzU1ZHKXt2YXIgZD17dHJhbnNsYXRlOltiKFwidHJhbnNsYXRlWFwiKSxiKFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W2IoXCJza2V3WFwiKV0sc2tld1k6W2IoXCJza2V3WVwiKV0sc2NhbGU6MSE9PWIoXCJzY2FsZVwiKT9bYihcInNjYWxlXCIpLGIoXCJzY2FsZVwiKV06W2IoXCJzY2FsZVhcIiksYihcInNjYWxlWVwiKV0scm90YXRlOltiKFwicm90YXRlWlwiKSwwLDBdfTttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihhKXsvXnRyYW5zbGF0ZS9pLnRlc3QoYSk/YT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGEpP2E9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChhKSYmKGE9XCJyb3RhdGVcIiksZFthXSYmKGMrPWErXCIoXCIrZFthXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGRbYV0pfSl9ZWxzZXt2YXIgZSxmO20uZWFjaChnKGEpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGIpe3JldHVybiBlPWcoYSkudHJhbnNmb3JtQ2FjaGVbYl0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09Yj8oZj1lLCEwKTooOT09PW4mJlwicm90YXRlWlwiPT09YiYmKGI9XCJyb3RhdGVcIiksdm9pZChjKz1iK2UrXCIgXCIpKX0pLGYmJihjPVwicGVyc3BlY3RpdmVcIitmK1wiIFwiK2MpfXYuc2V0UHJvcGVydHlWYWx1ZShhLFwidHJhbnNmb3JtXCIsYyl9fTt2Lkhvb2tzLnJlZ2lzdGVyKCksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLHQuaG9vaz1mdW5jdGlvbihhLGIsYyl7dmFyIGU9ZDtyZXR1cm4gYT1mKGEpLG0uZWFjaChhLGZ1bmN0aW9uKGEsZil7aWYoZyhmKT09PWQmJnQuaW5pdChmKSxjPT09ZCllPT09ZCYmKGU9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShmLGIpKTtlbHNle3ZhciBoPXQuQ1NTLnNldFByb3BlcnR5VmFsdWUoZixiLGMpO1widHJhbnNmb3JtXCI9PT1oWzBdJiZ0LkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGYpLGU9aH19KSxlfTt2YXIgdz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gaD9CLnByb21pc2V8fG51bGw6aX1mdW5jdGlvbiBlKCl7ZnVuY3Rpb24gYShhKXtmdW5jdGlvbiBsKGEsYil7dmFyIGM9ZCxlPWQsZz1kO3JldHVybiBwLmlzQXJyYXkoYSk/KGM9YVswXSwhcC5pc0FycmF5KGFbMV0pJiYvXltcXGQtXS8udGVzdChhWzFdKXx8cC5pc0Z1bmN0aW9uKGFbMV0pfHx2LlJlZ0V4LmlzSGV4LnRlc3QoYVsxXSk/Zz1hWzFdOihwLmlzU3RyaW5nKGFbMV0pJiYhdi5SZWdFeC5pc0hleC50ZXN0KGFbMV0pfHxwLmlzQXJyYXkoYVsxXSkpJiYoZT1iP2FbMV06aihhWzFdLGguZHVyYXRpb24pLGFbMl0hPT1kJiYoZz1hWzJdKSkpOmM9YSxifHwoZT1lfHxoLmVhc2luZykscC5pc0Z1bmN0aW9uKGMpJiYoYz1jLmNhbGwoZix5LHgpKSxwLmlzRnVuY3Rpb24oZykmJihnPWcuY2FsbChmLHkseCkpLFtjfHwwLGUsZ119ZnVuY3Rpb24gbihhLGIpe3ZhciBjLGQ7cmV0dXJuIGQ9KGJ8fFwiMFwiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyVBLXpdKyQvLGZ1bmN0aW9uKGEpe3JldHVybiBjPWEsXCJcIn0pLGN8fChjPXYuVmFsdWVzLmdldFVuaXRUeXBlKGEpKSxbZCxjXX1mdW5jdGlvbiByKCl7dmFyIGE9e215UGFyZW50OmYucGFyZW50Tm9kZXx8Yy5ib2R5LHBvc2l0aW9uOnYuZ2V0UHJvcGVydHlWYWx1ZShmLFwicG9zaXRpb25cIiksZm9udFNpemU6di5nZXRQcm9wZXJ0eVZhbHVlKGYsXCJmb250U2l6ZVwiKX0sZD1hLnBvc2l0aW9uPT09SS5sYXN0UG9zaXRpb24mJmEubXlQYXJlbnQ9PT1JLmxhc3RQYXJlbnQsZT1hLmZvbnRTaXplPT09SS5sYXN0Rm9udFNpemU7SS5sYXN0UGFyZW50PWEubXlQYXJlbnQsSS5sYXN0UG9zaXRpb249YS5wb3NpdGlvbixJLmxhc3RGb250U2l6ZT1hLmZvbnRTaXplO3ZhciBoPTEwMCxpPXt9O2lmKGUmJmQpaS5lbVRvUHg9SS5sYXN0RW1Ub1B4LGkucGVyY2VudFRvUHhXaWR0aD1JLmxhc3RQZXJjZW50VG9QeFdpZHRoLGkucGVyY2VudFRvUHhIZWlnaHQ9SS5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZXt2YXIgaj1nKGYpLmlzU1ZHP2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInJlY3RcIik6Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5pdChqKSxhLm15UGFyZW50LmFwcGVuZENoaWxkKGopLG0uZWFjaChbXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3dYXCIsXCJvdmVyZmxvd1lcIl0sZnVuY3Rpb24oYSxiKXt0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosYixcImhpZGRlblwiKX0pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcInBvc2l0aW9uXCIsYS5wb3NpdGlvbiksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwiZm9udFNpemVcIixhLmZvbnRTaXplKSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJib3hTaXppbmdcIixcImNvbnRlbnQtYm94XCIpLG0uZWFjaChbXCJtaW5XaWR0aFwiLFwibWF4V2lkdGhcIixcIndpZHRoXCIsXCJtaW5IZWlnaHRcIixcIm1heEhlaWdodFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGEsYil7dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLGIsaCtcIiVcIil9KSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJwYWRkaW5nTGVmdFwiLGgrXCJlbVwiKSxpLnBlcmNlbnRUb1B4V2lkdGg9SS5sYXN0UGVyY2VudFRvUHhXaWR0aD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcIndpZHRoXCIsbnVsbCwhMCkpfHwxKS9oLGkucGVyY2VudFRvUHhIZWlnaHQ9SS5sYXN0UGVyY2VudFRvUHhIZWlnaHQ9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJoZWlnaHRcIixudWxsLCEwKSl8fDEpL2gsaS5lbVRvUHg9SS5sYXN0RW1Ub1B4PShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwicGFkZGluZ0xlZnRcIikpfHwxKS9oLGEubXlQYXJlbnQucmVtb3ZlQ2hpbGQoail9cmV0dXJuIG51bGw9PT1JLnJlbVRvUHgmJihJLnJlbVRvUHg9cGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYy5ib2R5LFwiZm9udFNpemVcIikpfHwxNiksbnVsbD09PUkudndUb1B4JiYoSS52d1RvUHg9cGFyc2VGbG9hdChiLmlubmVyV2lkdGgpLzEwMCxJLnZoVG9QeD1wYXJzZUZsb2F0KGIuaW5uZXJIZWlnaHQpLzEwMCksaS5yZW1Ub1B4PUkucmVtVG9QeCxpLnZ3VG9QeD1JLnZ3VG9QeCxpLnZoVG9QeD1JLnZoVG9QeCx0LmRlYnVnPj0xJiZjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIitKU09OLnN0cmluZ2lmeShpKSxmKSxpfWlmKGguYmVnaW4mJjA9PT15KXRyeXtoLmJlZ2luLmNhbGwobyxvKX1jYXRjaCh1KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgdX0sMSl9aWYoXCJzY3JvbGxcIj09PUMpe3ZhciB3LHosQSxEPS9eeCQvaS50ZXN0KGguYXhpcyk/XCJMZWZ0XCI6XCJUb3BcIixFPXBhcnNlRmxvYXQoaC5vZmZzZXQpfHwwO2guY29udGFpbmVyP3AuaXNXcmFwcGVkKGguY29udGFpbmVyKXx8cC5pc05vZGUoaC5jb250YWluZXIpPyhoLmNvbnRhaW5lcj1oLmNvbnRhaW5lclswXXx8aC5jb250YWluZXIsdz1oLmNvbnRhaW5lcltcInNjcm9sbFwiK0RdLEE9dyttKGYpLnBvc2l0aW9uKClbRC50b0xvd2VyQ2FzZSgpXStFKTpoLmNvbnRhaW5lcj1udWxsOih3PXQuU3RhdGUuc2Nyb2xsQW5jaG9yW3QuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiK0RdXSx6PXQuU3RhdGUuc2Nyb2xsQW5jaG9yW3QuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiKyhcIkxlZnRcIj09PUQ/XCJUb3BcIjpcIkxlZnRcIildXSxBPW0oZikub2Zmc2V0KClbRC50b0xvd2VyQ2FzZSgpXStFKSxpPXtzY3JvbGw6e3Jvb3RQcm9wZXJ0eVZhbHVlOiExLHN0YXJ0VmFsdWU6dyxjdXJyZW50VmFsdWU6dyxlbmRWYWx1ZTpBLHVuaXRUeXBlOlwiXCIsZWFzaW5nOmguZWFzaW5nLHNjcm9sbERhdGE6e2NvbnRhaW5lcjpoLmNvbnRhaW5lcixkaXJlY3Rpb246RCxhbHRlcm5hdGVWYWx1ZTp6fX0sZWxlbWVudDpmfSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsaS5zY3JvbGwsZil9ZWxzZSBpZihcInJldmVyc2VcIj09PUMpe2lmKCFnKGYpLnR3ZWVuc0NvbnRhaW5lcilyZXR1cm4gdm9pZCBtLmRlcXVldWUoZixoLnF1ZXVlKTtcIm5vbmVcIj09PWcoZikub3B0cy5kaXNwbGF5JiYoZyhmKS5vcHRzLmRpc3BsYXk9XCJhdXRvXCIpLFwiaGlkZGVuXCI9PT1nKGYpLm9wdHMudmlzaWJpbGl0eSYmKGcoZikub3B0cy52aXNpYmlsaXR5PVwidmlzaWJsZVwiKSxnKGYpLm9wdHMubG9vcD0hMSxnKGYpLm9wdHMuYmVnaW49bnVsbCxnKGYpLm9wdHMuY29tcGxldGU9bnVsbCxzLmVhc2luZ3x8ZGVsZXRlIGguZWFzaW5nLHMuZHVyYXRpb258fGRlbGV0ZSBoLmR1cmF0aW9uLGg9bS5leHRlbmQoe30sZyhmKS5vcHRzLGgpO3ZhciBGPW0uZXh0ZW5kKCEwLHt9LGcoZikudHdlZW5zQ29udGFpbmVyKTtmb3IodmFyIEcgaW4gRilpZihcImVsZW1lbnRcIiE9PUcpe3ZhciBIPUZbR10uc3RhcnRWYWx1ZTtGW0ddLnN0YXJ0VmFsdWU9RltHXS5jdXJyZW50VmFsdWU9RltHXS5lbmRWYWx1ZSxGW0ddLmVuZFZhbHVlPUgscC5pc0VtcHR5T2JqZWN0KHMpfHwoRltHXS5lYXNpbmc9aC5lYXNpbmcpLHQuZGVidWcmJmNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiK0crXCIpOiBcIitKU09OLnN0cmluZ2lmeShGW0ddKSxmKX1pPUZ9ZWxzZSBpZihcInN0YXJ0XCI9PT1DKXt2YXIgRjtnKGYpLnR3ZWVuc0NvbnRhaW5lciYmZyhmKS5pc0FuaW1hdGluZz09PSEwJiYoRj1nKGYpLnR3ZWVuc0NvbnRhaW5lciksbS5lYWNoKHEsZnVuY3Rpb24oYSxiKXtpZihSZWdFeHAoXCJeXCIrdi5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKStcIiRcIikudGVzdChhKSl7dmFyIGM9bChiLCEwKSxlPWNbMF0sZj1jWzFdLGc9Y1syXTtpZih2LlJlZ0V4LmlzSGV4LnRlc3QoZSkpe2Zvcih2YXIgaD1bXCJSZWRcIixcIkdyZWVuXCIsXCJCbHVlXCJdLGk9di5WYWx1ZXMuaGV4VG9SZ2IoZSksaj1nP3YuVmFsdWVzLmhleFRvUmdiKGcpOmQsaz0wO2s8aC5sZW5ndGg7aysrKXt2YXIgbT1baVtrXV07ZiYmbS5wdXNoKGYpLGohPT1kJiZtLnB1c2goaltrXSkscVthK2hba11dPW19ZGVsZXRlIHFbYV19fX0pO2Zvcih2YXIgSyBpbiBxKXt2YXIgTD1sKHFbS10pLE09TFswXSxOPUxbMV0sTz1MWzJdO0s9di5OYW1lcy5jYW1lbENhc2UoSyk7dmFyIFA9di5Ib29rcy5nZXRSb290KEspLFE9ITE7aWYoZyhmKS5pc1NWR3x8XCJ0d2VlblwiPT09UHx8di5OYW1lcy5wcmVmaXhDaGVjayhQKVsxXSE9PSExfHx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbUF0hPT1kKXsoaC5kaXNwbGF5IT09ZCYmbnVsbCE9PWguZGlzcGxheSYmXCJub25lXCIhPT1oLmRpc3BsYXl8fGgudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1oLnZpc2liaWxpdHkpJiYvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoSykmJiFPJiYwIT09TSYmKE89MCksaC5fY2FjaGVWYWx1ZXMmJkYmJkZbS10/KE89PT1kJiYoTz1GW0tdLmVuZFZhbHVlK0ZbS10udW5pdFR5cGUpLFE9ZyhmKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW1BdKTp2Lkhvb2tzLnJlZ2lzdGVyZWRbS10/Tz09PWQ/KFE9di5nZXRQcm9wZXJ0eVZhbHVlKGYsUCksTz12LmdldFByb3BlcnR5VmFsdWUoZixLLFEpKTpRPXYuSG9va3MudGVtcGxhdGVzW1BdWzFdOk89PT1kJiYoTz12LmdldFByb3BlcnR5VmFsdWUoZixLKSk7dmFyIFIsUyxULFU9ITE7aWYoUj1uKEssTyksTz1SWzBdLFQ9UlsxXSxSPW4oSyxNKSxNPVJbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LyxmdW5jdGlvbihhLGIpe3JldHVybiBVPWIsXCJcIn0pLFM9UlsxXSxPPXBhcnNlRmxvYXQoTyl8fDAsTT1wYXJzZUZsb2F0KE0pfHwwLFwiJVwiPT09UyYmKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdChLKT8oTS89MTAwLFM9XCJlbVwiKTovXnNjYWxlLy50ZXN0KEspPyhNLz0xMDAsUz1cIlwiKTovKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KEspJiYoTT1NLzEwMCoyNTUsUz1cIlwiKSksL1tcXC8qXS8udGVzdChVKSlTPVQ7ZWxzZSBpZihUIT09UyYmMCE9PU8paWYoMD09PU0pUz1UO2Vsc2V7ZT1lfHxyKCk7dmFyIFY9L21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3QoSyl8fC9YJC8udGVzdChLKXx8XCJ4XCI9PT1LP1wieFwiOlwieVwiO1xuc3dpdGNoKFQpe2Nhc2VcIiVcIjpPKj1cInhcIj09PVY/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQ7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok8qPWVbVCtcIlRvUHhcIl19c3dpdGNoKFMpe2Nhc2VcIiVcIjpPKj0xLyhcInhcIj09PVY/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpPKj0xL2VbUytcIlRvUHhcIl19fXN3aXRjaChVKXtjYXNlXCIrXCI6TT1PK007YnJlYWs7Y2FzZVwiLVwiOk09Ty1NO2JyZWFrO2Nhc2VcIipcIjpNPU8qTTticmVhaztjYXNlXCIvXCI6TT1PL019aVtLXT17cm9vdFByb3BlcnR5VmFsdWU6USxzdGFydFZhbHVlOk8sY3VycmVudFZhbHVlOk8sZW5kVmFsdWU6TSx1bml0VHlwZTpTLGVhc2luZzpOfSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIrSytcIik6IFwiK0pTT04uc3RyaW5naWZ5KGlbS10pLGYpfWVsc2UgdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJTa2lwcGluZyBbXCIrUCtcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpfWkuZWxlbWVudD1mfWkuZWxlbWVudCYmKHYuVmFsdWVzLmFkZENsYXNzKGYsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksSi5wdXNoKGkpLFwiXCI9PT1oLnF1ZXVlJiYoZyhmKS50d2VlbnNDb250YWluZXI9aSxnKGYpLm9wdHM9aCksZyhmKS5pc0FuaW1hdGluZz0hMCx5PT09eC0xPyh0LlN0YXRlLmNhbGxzLnB1c2goW0osbyxoLG51bGwsQi5yZXNvbHZlcl0pLHQuU3RhdGUuaXNUaWNraW5nPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMCxrKCkpKTp5KyspfXZhciBlLGY9dGhpcyxoPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyksaT17fTtzd2l0Y2goZyhmKT09PWQmJnQuaW5pdChmKSxwYXJzZUZsb2F0KGguZGVsYXkpJiZoLnF1ZXVlIT09ITEmJm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGEpe3QudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCxnKGYpLmRlbGF5VGltZXI9e3NldFRpbWVvdXQ6c2V0VGltZW91dChhLHBhcnNlRmxvYXQoaC5kZWxheSkpLG5leHQ6YX19KSxoLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7Y2FzZVwiZmFzdFwiOmguZHVyYXRpb249MjAwO2JyZWFrO2Nhc2VcIm5vcm1hbFwiOmguZHVyYXRpb249cjticmVhaztjYXNlXCJzbG93XCI6aC5kdXJhdGlvbj02MDA7YnJlYWs7ZGVmYXVsdDpoLmR1cmF0aW9uPXBhcnNlRmxvYXQoaC5kdXJhdGlvbil8fDF9dC5tb2NrIT09ITEmJih0Lm1vY2s9PT0hMD9oLmR1cmF0aW9uPWguZGVsYXk9MTooaC5kdXJhdGlvbio9cGFyc2VGbG9hdCh0Lm1vY2spfHwxLGguZGVsYXkqPXBhcnNlRmxvYXQodC5tb2NrKXx8MSkpLGguZWFzaW5nPWooaC5lYXNpbmcsaC5kdXJhdGlvbiksaC5iZWdpbiYmIXAuaXNGdW5jdGlvbihoLmJlZ2luKSYmKGguYmVnaW49bnVsbCksaC5wcm9ncmVzcyYmIXAuaXNGdW5jdGlvbihoLnByb2dyZXNzKSYmKGgucHJvZ3Jlc3M9bnVsbCksaC5jb21wbGV0ZSYmIXAuaXNGdW5jdGlvbihoLmNvbXBsZXRlKSYmKGguY29tcGxldGU9bnVsbCksaC5kaXNwbGF5IT09ZCYmbnVsbCE9PWguZGlzcGxheSYmKGguZGlzcGxheT1oLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFwiYXV0b1wiPT09aC5kaXNwbGF5JiYoaC5kaXNwbGF5PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShmKSkpLGgudmlzaWJpbGl0eSE9PWQmJm51bGwhPT1oLnZpc2liaWxpdHkmJihoLnZpc2liaWxpdHk9aC52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSksaC5tb2JpbGVIQT1oLm1vYmlsZUhBJiZ0LlN0YXRlLmlzTW9iaWxlJiYhdC5TdGF0ZS5pc0dpbmdlcmJyZWFkLGgucXVldWU9PT0hMT9oLmRlbGF5P3NldFRpbWVvdXQoYSxoLmRlbGF5KTphKCk6bS5xdWV1ZShmLGgucXVldWUsZnVuY3Rpb24oYixjKXtyZXR1cm4gYz09PSEwPyhCLnByb21pc2UmJkIucmVzb2x2ZXIobyksITApOih0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsdm9pZCBhKGIpKX0pLFwiXCIhPT1oLnF1ZXVlJiZcImZ4XCIhPT1oLnF1ZXVlfHxcImlucHJvZ3Jlc3NcIj09PW0ucXVldWUoZilbMF18fG0uZGVxdWV1ZShmKX12YXIgaCxpLG4sbyxxLHMsdT1hcmd1bWVudHNbMF0mJihhcmd1bWVudHNbMF0ucHx8bS5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSYmIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzfHxwLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSk7aWYocC5pc1dyYXBwZWQodGhpcyk/KGg9ITEsbj0wLG89dGhpcyxpPXRoaXMpOihoPSEwLG49MSxvPXU/YXJndW1lbnRzWzBdLmVsZW1lbnRzfHxhcmd1bWVudHNbMF0uZTphcmd1bWVudHNbMF0pLG89ZihvKSl7dT8ocT1hcmd1bWVudHNbMF0ucHJvcGVydGllc3x8YXJndW1lbnRzWzBdLnAscz1hcmd1bWVudHNbMF0ub3B0aW9uc3x8YXJndW1lbnRzWzBdLm8pOihxPWFyZ3VtZW50c1tuXSxzPWFyZ3VtZW50c1tuKzFdKTt2YXIgeD1vLmxlbmd0aCx5PTA7aWYoIS9eKHN0b3B8ZmluaXNoKSQvaS50ZXN0KHEpJiYhbS5pc1BsYWluT2JqZWN0KHMpKXt2YXIgej1uKzE7cz17fTtmb3IodmFyIEE9ejtBPGFyZ3VtZW50cy5sZW5ndGg7QSsrKXAuaXNBcnJheShhcmd1bWVudHNbQV0pfHwhL14oZmFzdHxub3JtYWx8c2xvdykkL2kudGVzdChhcmd1bWVudHNbQV0pJiYhL15cXGQvLnRlc3QoYXJndW1lbnRzW0FdKT9wLmlzU3RyaW5nKGFyZ3VtZW50c1tBXSl8fHAuaXNBcnJheShhcmd1bWVudHNbQV0pP3MuZWFzaW5nPWFyZ3VtZW50c1tBXTpwLmlzRnVuY3Rpb24oYXJndW1lbnRzW0FdKSYmKHMuY29tcGxldGU9YXJndW1lbnRzW0FdKTpzLmR1cmF0aW9uPWFyZ3VtZW50c1tBXX12YXIgQj17cHJvbWlzZTpudWxsLHJlc29sdmVyOm51bGwscmVqZWN0ZXI6bnVsbH07aCYmdC5Qcm9taXNlJiYoQi5wcm9taXNlPW5ldyB0LlByb21pc2UoZnVuY3Rpb24oYSxiKXtCLnJlc29sdmVyPWEsQi5yZWplY3Rlcj1ifSkpO3ZhciBDO3N3aXRjaChxKXtjYXNlXCJzY3JvbGxcIjpDPVwic2Nyb2xsXCI7YnJlYWs7Y2FzZVwicmV2ZXJzZVwiOkM9XCJyZXZlcnNlXCI7YnJlYWs7Y2FzZVwiZmluaXNoXCI6Y2FzZVwic3RvcFwiOm0uZWFjaChvLGZ1bmN0aW9uKGEsYil7ZyhiKSYmZyhiKS5kZWxheVRpbWVyJiYoY2xlYXJUaW1lb3V0KGcoYikuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSxnKGIpLmRlbGF5VGltZXIubmV4dCYmZyhiKS5kZWxheVRpbWVyLm5leHQoKSxkZWxldGUgZyhiKS5kZWxheVRpbWVyKX0pO3ZhciBEPVtdO3JldHVybiBtLmVhY2godC5TdGF0ZS5jYWxscyxmdW5jdGlvbihhLGIpe2ImJm0uZWFjaChiWzFdLGZ1bmN0aW9uKGMsZSl7dmFyIGY9cz09PWQ/XCJcIjpzO3JldHVybiBmIT09ITAmJmJbMl0ucXVldWUhPT1mJiYocyE9PWR8fGJbMl0ucXVldWUhPT0hMSl8fHZvaWQgbS5lYWNoKG8sZnVuY3Rpb24oYyxkKXtkPT09ZSYmKChzPT09ITB8fHAuaXNTdHJpbmcocykpJiYobS5lYWNoKG0ucXVldWUoZCxwLmlzU3RyaW5nKHMpP3M6XCJcIiksZnVuY3Rpb24oYSxiKXtwLmlzRnVuY3Rpb24oYikmJmIobnVsbCwhMCl9KSxtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIsW10pKSxcInN0b3BcIj09PXE/KGcoZCkmJmcoZCkudHdlZW5zQ29udGFpbmVyJiZmIT09ITEmJm0uZWFjaChnKGQpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpe2IuZW5kVmFsdWU9Yi5jdXJyZW50VmFsdWV9KSxELnB1c2goYSkpOlwiZmluaXNoXCI9PT1xJiYoYlsyXS5kdXJhdGlvbj0xKSl9KX0pfSksXCJzdG9wXCI9PT1xJiYobS5lYWNoKEQsZnVuY3Rpb24oYSxiKXtsKGIsITApfSksQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pKSxhKCk7ZGVmYXVsdDppZighbS5pc1BsYWluT2JqZWN0KHEpfHxwLmlzRW1wdHlPYmplY3QocSkpe2lmKHAuaXNTdHJpbmcocSkmJnQuUmVkaXJlY3RzW3FdKXt2YXIgRT1tLmV4dGVuZCh7fSxzKSxGPUUuZHVyYXRpb24sRz1FLmRlbGF5fHwwO3JldHVybiBFLmJhY2t3YXJkcz09PSEwJiYobz1tLmV4dGVuZCghMCxbXSxvKS5yZXZlcnNlKCkpLG0uZWFjaChvLGZ1bmN0aW9uKGEsYil7cGFyc2VGbG9hdChFLnN0YWdnZXIpP0UuZGVsYXk9RytwYXJzZUZsb2F0KEUuc3RhZ2dlcikqYTpwLmlzRnVuY3Rpb24oRS5zdGFnZ2VyKSYmKEUuZGVsYXk9RytFLnN0YWdnZXIuY2FsbChiLGEseCkpLEUuZHJhZyYmKEUuZHVyYXRpb249cGFyc2VGbG9hdChGKXx8KC9eKGNhbGxvdXR8dHJhbnNpdGlvbikvLnRlc3QocSk/MWUzOnIpLEUuZHVyYXRpb249TWF0aC5tYXgoRS5kdXJhdGlvbiooRS5iYWNrd2FyZHM/MS1hL3g6KGErMSkveCksLjc1KkUuZHVyYXRpb24sMjAwKSksdC5SZWRpcmVjdHNbcV0uY2FsbChiLGIsRXx8e30sYSx4LG8sQi5wcm9taXNlP0I6ZCl9KSxhKCl9dmFyIEg9XCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiK3ErXCIpIHdhcyBub3QgYSBwcm9wZXJ0eSBtYXAsIGEga25vd24gYWN0aW9uLCBvciBhIHJlZ2lzdGVyZWQgcmVkaXJlY3QuIEFib3J0aW5nLlwiO3JldHVybiBCLnByb21pc2U/Qi5yZWplY3RlcihuZXcgRXJyb3IoSCkpOmNvbnNvbGUubG9nKEgpLGEoKX1DPVwic3RhcnRcIn12YXIgST17bGFzdFBhcmVudDpudWxsLGxhc3RQb3NpdGlvbjpudWxsLGxhc3RGb250U2l6ZTpudWxsLGxhc3RQZXJjZW50VG9QeFdpZHRoOm51bGwsbGFzdFBlcmNlbnRUb1B4SGVpZ2h0Om51bGwsbGFzdEVtVG9QeDpudWxsLHJlbVRvUHg6bnVsbCx2d1RvUHg6bnVsbCx2aFRvUHg6bnVsbH0sSj1bXTttLmVhY2gobyxmdW5jdGlvbihhLGIpe3AuaXNOb2RlKGIpJiZlLmNhbGwoYil9KTt2YXIgSyxFPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyk7aWYoRS5sb29wPXBhcnNlSW50KEUubG9vcCksSz0yKkUubG9vcC0xLEUubG9vcClmb3IodmFyIEw9MDtLPkw7TCsrKXt2YXIgTT17ZGVsYXk6RS5kZWxheSxwcm9ncmVzczpFLnByb2dyZXNzfTtMPT09Sy0xJiYoTS5kaXNwbGF5PUUuZGlzcGxheSxNLnZpc2liaWxpdHk9RS52aXNpYmlsaXR5LE0uY29tcGxldGU9RS5jb21wbGV0ZSksdyhvLFwicmV2ZXJzZVwiLE0pfXJldHVybiBhKCl9fTt0PW0uZXh0ZW5kKHcsdCksdC5hbmltYXRlPXc7dmFyIHg9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG87cmV0dXJuIHQuU3RhdGUuaXNNb2JpbGV8fGMuaGlkZGVuPT09ZHx8Yy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7Yy5oaWRkZW4/KHg9ZnVuY3Rpb24oYSl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKCEwKX0sMTYpfSxrKCkpOng9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG99KSxhLlZlbG9jaXR5PXQsYSE9PWImJihhLmZuLnZlbG9jaXR5PXcsYS5mbi52ZWxvY2l0eS5kZWZhdWx0cz10LmRlZmF1bHRzKSxtLmVhY2goW1wiRG93blwiLFwiVXBcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcInNsaWRlXCIrYl09ZnVuY3Rpb24oYSxjLGUsZixnLGgpe3ZhciBpPW0uZXh0ZW5kKHt9LGMpLGo9aS5iZWdpbixrPWkuY29tcGxldGUsbD17aGVpZ2h0OlwiXCIsbWFyZ2luVG9wOlwiXCIsbWFyZ2luQm90dG9tOlwiXCIscGFkZGluZ1RvcDpcIlwiLHBhZGRpbmdCb3R0b206XCJcIn0sbj17fTtpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiRG93blwiPT09Yj9cImlubGluZVwiPT09dC5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGEpP1wiaW5saW5lLWJsb2NrXCI6XCJibG9ja1wiOlwibm9uZVwiKSxpLmJlZ2luPWZ1bmN0aW9uKCl7aiYmai5jYWxsKGcsZyk7Zm9yKHZhciBjIGluIGwpe25bY109YS5zdHlsZVtjXTt2YXIgZD10LkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGEsYyk7bFtjXT1cIkRvd25cIj09PWI/W2QsMF06WzAsZF19bi5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93LGEuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0saS5jb21wbGV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgYiBpbiBuKWEuc3R5bGVbYl09bltiXTtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSx0KGEsbCxpKX19KSxtLmVhY2goW1wiSW5cIixcIk91dFwiXSxmdW5jdGlvbihhLGIpe3QuUmVkaXJlY3RzW1wiZmFkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPXtvcGFjaXR5OlwiSW5cIj09PWI/MTowfSxrPWkuY29tcGxldGU7aS5jb21wbGV0ZT1lIT09Zi0xP2kuYmVnaW49bnVsbDpmdW5jdGlvbigpe2smJmsuY2FsbChnLGcpLGgmJmgucmVzb2x2ZXIoZyl9LGkuZGlzcGxheT09PWQmJihpLmRpc3BsYXk9XCJJblwiPT09Yj9cImF1dG9cIjpcIm5vbmVcIiksdCh0aGlzLGosaSl9fSksdH0od2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvfHx3aW5kb3csd2luZG93LGRvY3VtZW50KX0pKSwhZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoayhhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiEhQXJyYXkuaXNBcnJheShhKSYmKGcoYSxjW2JdLGMpLCEwKX1mdW5jdGlvbiBnKGEsYixjKXt2YXIgZTtpZihhKWlmKGEuZm9yRWFjaClhLmZvckVhY2goYixjKTtlbHNlIGlmKGEubGVuZ3RoIT09ZClmb3IoZT0wO2U8YS5sZW5ndGg7KWIuY2FsbChjLGFbZV0sZSxhKSxlKys7ZWxzZSBmb3IoZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJmIuY2FsbChjLGFbZV0sZSxhKX1mdW5jdGlvbiBoKGEsYixjKXtmb3IodmFyIGU9T2JqZWN0LmtleXMoYiksZj0wO2Y8ZS5sZW5ndGg7KSghY3x8YyYmYVtlW2ZdXT09PWQpJiYoYVtlW2ZdXT1iW2VbZl1dKSxmKys7cmV0dXJuIGF9ZnVuY3Rpb24gaShhLGIpe3JldHVybiBoKGEsYiwhMCl9ZnVuY3Rpb24gaihhLGIsYyl7dmFyIGQsZT1iLnByb3RvdHlwZTtkPWEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSksZC5jb25zdHJ1Y3Rvcj1hLGQuX3N1cGVyPWUsYyYmaChkLGMpfWZ1bmN0aW9uIGsoYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PWthP2EuYXBwbHkoYj9iWzBdfHxkOmQsYik6YX1mdW5jdGlvbiBtKGEsYil7cmV0dXJuIGE9PT1kP2I6YX1mdW5jdGlvbiBuKGEsYixjKXtnKHIoYiksZnVuY3Rpb24oYil7YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBvKGEsYixjKXtnKHIoYiksZnVuY3Rpb24oYil7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBwKGEsYil7Zm9yKDthOyl7aWYoYT09YilyZXR1cm4hMDthPWEucGFyZW50Tm9kZX1yZXR1cm4hMX1mdW5jdGlvbiBxKGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKT4tMX1mdW5jdGlvbiByKGEpe3JldHVybiBhLnRyaW0oKS5zcGxpdCgvXFxzKy9nKX1mdW5jdGlvbiBzKGEsYixjKXtpZihhLmluZGV4T2YmJiFjKXJldHVybiBhLmluZGV4T2YoYik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDspe2lmKGMmJmFbZF1bY109PWJ8fCFjJiZhW2RdPT09YilyZXR1cm4gZDtkKyt9cmV0dXJuLTF9ZnVuY3Rpb24gdChhKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwwKX1mdW5jdGlvbiB1KGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPTA7ZjxhLmxlbmd0aDspe3ZhciBnPWI/YVtmXVtiXTphW2ZdO3MoZSxnKTwwJiZkLnB1c2goYVtmXSksZVtmXT1nLGYrK31yZXR1cm4gYyYmKGQ9Yj9kLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYVtiXT5jW2JdfSk6ZC5zb3J0KCkpLGR9ZnVuY3Rpb24gdihhLGIpe2Zvcih2YXIgYyxlLGY9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZz0wO2c8aWEubGVuZ3RoOyl7aWYoYz1pYVtnXSxlPWM/YytmOmIsZSBpbiBhKXJldHVybiBlO2crK31yZXR1cm4gZH1mdW5jdGlvbiB3KCl7cmV0dXJuIG9hKyt9ZnVuY3Rpb24geChhKXt2YXIgYj1hLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGIuZGVmYXVsdFZpZXd8fGIucGFyZW50V2luZG93fWZ1bmN0aW9uIHkoYSxiKXt2YXIgYz10aGlzO3RoaXMubWFuYWdlcj1hLHRoaXMuY2FsbGJhY2s9Yix0aGlzLmVsZW1lbnQ9YS5lbGVtZW50LHRoaXMudGFyZ2V0PWEub3B0aW9ucy5pbnB1dFRhcmdldCx0aGlzLmRvbUhhbmRsZXI9ZnVuY3Rpb24oYil7bChhLm9wdGlvbnMuZW5hYmxlLFthXSkmJmMuaGFuZGxlcihiKX0sdGhpcy5pbml0KCl9ZnVuY3Rpb24geihhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBuZXcoYj1jP2M6cmE/TjpzYT9ROnFhP1M6TSkoYSxBKX1mdW5jdGlvbiBBKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJzLmxlbmd0aCxlPWMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxmPWImeWEmJjA9PT1kLWUsZz1iJihBYXxCYSkmJjA9PT1kLWU7Yy5pc0ZpcnN0PSEhZixjLmlzRmluYWw9ISFnLGYmJihhLnNlc3Npb249e30pLGMuZXZlbnRUeXBlPWIsQihhLGMpLGEuZW1pdChcImhhbW1lci5pbnB1dFwiLGMpLGEucmVjb2duaXplKGMpLGEuc2Vzc2lvbi5wcmV2SW5wdXQ9Y31mdW5jdGlvbiBCKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1FKGIpKSxlPjEmJiFjLmZpcnN0TXVsdGlwbGU/Yy5maXJzdE11bHRpcGxlPUUoYik6MT09PWUmJihjLmZpcnN0TXVsdGlwbGU9ITEpO3ZhciBmPWMuZmlyc3RJbnB1dCxnPWMuZmlyc3RNdWx0aXBsZSxoPWc/Zy5jZW50ZXI6Zi5jZW50ZXIsaT1iLmNlbnRlcj1GKGQpO2IudGltZVN0YW1wPW5hKCksYi5kZWx0YVRpbWU9Yi50aW1lU3RhbXAtZi50aW1lU3RhbXAsYi5hbmdsZT1KKGgsaSksYi5kaXN0YW5jZT1JKGgsaSksQyhjLGIpLGIub2Zmc2V0RGlyZWN0aW9uPUgoYi5kZWx0YVgsYi5kZWx0YVkpLGIuc2NhbGU9Zz9MKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SyhnLnBvaW50ZXJzLGQpOjAsRChjLGIpO3ZhciBqPWEuZWxlbWVudDtwKGIuc3JjRXZlbnQudGFyZ2V0LGopJiYoaj1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9an1mdW5jdGlvbiBDKGEsYil7dmFyIGM9Yi5jZW50ZXIsZD1hLm9mZnNldERlbHRhfHx7fSxlPWEucHJldkRlbHRhfHx7fSxmPWEucHJldklucHV0fHx7fTsoYi5ldmVudFR5cGU9PT15YXx8Zi5ldmVudFR5cGU9PT1BYSkmJihlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gRChhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9QmEmJihpPnhhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWguZGVsdGFYLWIuZGVsdGFYLGs9aC5kZWx0YVktYi5kZWx0YVksbD1HKGksaixrKTtlPWwueCxmPWwueSxjPW1hKGwueCk+bWEobC55KT9sLng6bC55LGc9SChqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEUoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOmxhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpsYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpuYSgpLHBvaW50ZXJzOmIsY2VudGVyOkYoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRihhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpsYShhWzBdLmNsaWVudFgpLHk6bGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OmxhKGMvYikseTpsYShkL2IpfX1mdW5jdGlvbiBHKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEgoYSxiKXtyZXR1cm4gYT09PWI/Q2E6bWEoYSk+PW1hKGIpP2E+MD9EYTpFYTpiPjA/RmE6R2F9ZnVuY3Rpb24gSShhLGIsYyl7Y3x8KGM9S2EpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEooYSxiLGMpe2N8fChjPUthKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBLKGEsYil7cmV0dXJuIEooYlsxXSxiWzBdLExhKS1KKGFbMV0sYVswXSxMYSl9ZnVuY3Rpb24gTChhLGIpe3JldHVybiBJKGJbMF0sYlsxXSxMYSkvSShhWzBdLGFbMV0sTGEpfWZ1bmN0aW9uIE0oKXt0aGlzLmV2RWw9TmEsdGhpcy5ldldpbj1PYSx0aGlzLmFsbG93PSEwLHRoaXMucHJlc3NlZD0hMSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBOKCl7dGhpcy5ldkVsPVJhLHRoaXMuZXZXaW49U2EseS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdG9yZT10aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzPVtdfWZ1bmN0aW9uIE8oKXt0aGlzLmV2VGFyZ2V0PVVhLHRoaXMuZXZXaW49VmEsdGhpcy5zdGFydGVkPSExLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIFAoYSxiKXt2YXIgYz10KGEudG91Y2hlcyksZD10KGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiJihBYXxCYSkmJihjPXUoYy5jb25jYXQoZCksXCJpZGVudGlmaWVyXCIsITApKSxbYyxkXX1mdW5jdGlvbiBRKCl7dGhpcy5ldlRhcmdldD1YYSx0aGlzLnRhcmdldElkcz17fSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBSKGEsYil7dmFyIGM9dChhLnRvdWNoZXMpLGQ9dGhpcy50YXJnZXRJZHM7aWYoYiYoeWF8emEpJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9dChhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gcChhLnRhcmdldCxpKX0pLGI9PT15YSlmb3IoZT0wO2U8Zi5sZW5ndGg7KWRbZltlXS5pZGVudGlmaWVyXT0hMCxlKys7Zm9yKGU9MDtlPGcubGVuZ3RoOylkW2dbZV0uaWRlbnRpZmllcl0mJmgucHVzaChnW2VdKSxiJihBYXxCYSkmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bdShmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIFMoKXt5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYT1rKHRoaXMuaGFuZGxlcix0aGlzKTt0aGlzLnRvdWNoPW5ldyBRKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyBNKHRoaXMubWFuYWdlcixhKX1mdW5jdGlvbiBUKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVShhKXtpZihxKGEsYmIpKXJldHVybiBiYjt2YXIgYj1xKGEsY2IpLGM9cShhLGRiKTtyZXR1cm4gYiYmYz9jYitcIiBcIitkYjpifHxjP2I/Y2I6ZGI6cShhLGFiKT9hYjpfYX1mdW5jdGlvbiBWKGEpe3RoaXMuaWQ9dygpLHRoaXMubWFuYWdlcj1udWxsLHRoaXMub3B0aW9ucz1pKGF8fHt9LHRoaXMuZGVmYXVsdHMpLHRoaXMub3B0aW9ucy5lbmFibGU9bSh0aGlzLm9wdGlvbnMuZW5hYmxlLCEwKSx0aGlzLnN0YXRlPWViLHRoaXMuc2ltdWx0YW5lb3VzPXt9LHRoaXMucmVxdWlyZUZhaWw9W119ZnVuY3Rpb24gVyhhKXtyZXR1cm4gYSZqYj9cImNhbmNlbFwiOmEmaGI/XCJlbmRcIjphJmdiP1wibW92ZVwiOmEmZmI/XCJzdGFydFwiOlwiXCJ9ZnVuY3Rpb24gWChhKXtyZXR1cm4gYT09R2E/XCJkb3duXCI6YT09RmE/XCJ1cFwiOmE9PURhP1wibGVmdFwiOmE9PUVhP1wicmlnaHRcIjpcIlwifWZ1bmN0aW9uIFkoYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBaKCl7Vi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gJCgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFg9bnVsbCx0aGlzLnBZPW51bGx9ZnVuY3Rpb24gXygpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGFhKCl7Vi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGJhKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gY2EoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBkYSgpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFRpbWU9ITEsdGhpcy5wQ2VudGVyPSExLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLmNvdW50PTB9ZnVuY3Rpb24gZWEoYSxiKXtyZXR1cm4gYj1ifHx7fSxiLnJlY29nbml6ZXJzPW0oYi5yZWNvZ25pemVycyxlYS5kZWZhdWx0cy5wcmVzZXQpLG5ldyBmYShhLGIpfWZ1bmN0aW9uIGZhKGEsYil7Yj1ifHx7fSx0aGlzLm9wdGlvbnM9aShiLGVhLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQ9dGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0fHxhLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMucmVjb2duaXplcnM9W10sdGhpcy5lbGVtZW50PWEsdGhpcy5pbnB1dD16KHRoaXMpLHRoaXMudG91Y2hBY3Rpb249bmV3IFQodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGdhKHRoaXMsITApLGcoYi5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGdhKGEsYil7dmFyIGM9YS5lbGVtZW50O2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGEsZCl7Yy5zdHlsZVt2KGMuc3R5bGUsZCldPWI/YTpcIlwifSl9ZnVuY3Rpb24gaGEoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgaWE9W1wiXCIsXCJ3ZWJraXRcIixcIm1velwiLFwiTVNcIixcIm1zXCIsXCJvXCJdLGphPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxrYT1cImZ1bmN0aW9uXCIsbGE9TWF0aC5yb3VuZCxtYT1NYXRoLmFicyxuYT1EYXRlLm5vdyxvYT0xLHBhPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaSxxYT1cIm9udG91Y2hzdGFydFwiaW4gYSxyYT12KGEsXCJQb2ludGVyRXZlbnRcIikhPT1kLHNhPXFhJiZwYS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHRhPVwidG91Y2hcIix1YT1cInBlblwiLHZhPVwibW91c2VcIix3YT1cImtpbmVjdFwiLHhhPTI1LHlhPTEsemE9MixBYT00LEJhPTgsQ2E9MSxEYT0yLEVhPTQsRmE9OCxHYT0xNixIYT1EYXxFYSxJYT1GYXxHYSxKYT1IYXxJYSxLYT1bXCJ4XCIsXCJ5XCJdLExhPVtcImNsaWVudFhcIixcImNsaWVudFlcIl07eS5wcm90b3R5cGU9e2hhbmRsZXI6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4oeCh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbyh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbyh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbyh4KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfX07dmFyIE1hPXttb3VzZWRvd246eWEsbW91c2Vtb3ZlOnphLG1vdXNldXA6QWF9LE5hPVwibW91c2Vkb3duXCIsT2E9XCJtb3VzZW1vdmUgbW91c2V1cFwiO2ooTSx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPU1hW2EudHlwZV07YiZ5YSYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJnphJiYxIT09YS53aGljaCYmKGI9QWEpLHRoaXMucHJlc3NlZCYmdGhpcy5hbGxvdyYmKGImQWEmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOnZhLHNyY0V2ZW50OmF9KSl9fSk7dmFyIFBhPXtwb2ludGVyZG93bjp5YSxwb2ludGVybW92ZTp6YSxwb2ludGVydXA6QWEscG9pbnRlcmNhbmNlbDpCYSxwb2ludGVyb3V0OkJhfSxRYT17Mjp0YSwzOnVhLDQ6dmEsNTp3YX0sUmE9XCJwb2ludGVyZG93blwiLFNhPVwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50JiYoUmE9XCJNU1BvaW50ZXJEb3duXCIsU2E9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxqKE4seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVBhW2RdLGY9UWFbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT10YSxoPXMoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJnlhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihBYXxCYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBUYT17dG91Y2hzdGFydDp5YSx0b3VjaG1vdmU6emEsdG91Y2hlbmQ6QWEsdG91Y2hjYW5jZWw6QmF9LFVhPVwidG91Y2hzdGFydFwiLFZhPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtqKE8seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1UYVthLnR5cGVdO2lmKGI9PT15YSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1QLmNhbGwodGhpcyxhLGIpO2ImKEFhfEJhKSYmMD09PWNbMF0ubGVuZ3RoLWNbMV0ubGVuZ3RoJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnRhLHNyY0V2ZW50OmF9KX19fSk7dmFyIFdhPXt0b3VjaHN0YXJ0OnlhLHRvdWNobW92ZTp6YSx0b3VjaGVuZDpBYSx0b3VjaGNhbmNlbDpCYX0sWGE9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2ooUSx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVdhW2EudHlwZV0sYz1SLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6dGEsc3JjRXZlbnQ6YX0pfX0pLGooUyx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT10YSxlPWMucG9pbnRlclR5cGU9PXZhO2lmKGQpdGhpcy5tb3VzZS5hbGxvdz0hMTtlbHNlIGlmKGUmJiF0aGlzLm1vdXNlLmFsbG93KXJldHVybjtiJihBYXxCYSkmJih0aGlzLm1vdXNlLmFsbG93PSEwKSx0aGlzLmNhbGxiYWNrKGEsYixjKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBZYT12KGphLnN0eWxlLFwidG91Y2hBY3Rpb25cIiksWmE9WWEhPT1kLCRhPVwiY29tcHV0ZVwiLF9hPVwiYXV0b1wiLGFiPVwibWFuaXB1bGF0aW9uXCIsYmI9XCJub25lXCIsY2I9XCJwYW4teFwiLGRiPVwicGFuLXlcIjtULnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PSRhJiYoYT10aGlzLmNvbXB1dGUoKSksWmEmJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtZYV09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBnKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtsKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxVKGEuam9pbihcIiBcIikpfSxwcmV2ZW50RGVmYXVsdHM6ZnVuY3Rpb24oYSl7aWYoIVphKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1xKGQsYmIpLGY9cShkLGRiKSxnPXEoZCxjYik7cmV0dXJuIGV8fGYmJmMmSGF8fGcmJmMmSWE/dGhpcy5wcmV2ZW50U3JjKGIpOnZvaWQgMH19LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBlYj0xLGZiPTIsZ2I9NCxoYj04LGliPWhiLGpiPTE2LGtiPTMyO1YucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGgodGhpcy5vcHRpb25zLGEpLHRoaXMubWFuYWdlciYmdGhpcy5tYW5hZ2VyLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LHJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVjb2duaXplV2l0aFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhPVkoYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGYoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1ZKGEsdGhpcyksZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLHRoaXMpfSxyZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGE9WShhLHRoaXMpLC0xPT09cyhiLGEpJiYoYi5wdXNoKGEpLGEucmVxdWlyZUZhaWx1cmUodGhpcykpLHRoaXN9LGRyb3BSZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJkcm9wUmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczthPVkoYSx0aGlzKTt2YXIgYj1zKHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe2MubWFuYWdlci5lbWl0KGMub3B0aW9ucy5ldmVudCsoYj9XKGQpOlwiXCIpLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO2hiPmQmJmIoITApLGIoKSxkPj1oYiYmYighMCl9LHRyeUVtaXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2FuRW1pdCgpP3RoaXMuZW1pdChhKTp2b2lkKHRoaXMuc3RhdGU9a2IpfSxjYW5FbWl0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aDspe2lmKCEodGhpcy5yZXF1aXJlRmFpbFthXS5zdGF0ZSYoa2J8ZWIpKSlyZXR1cm4hMTthKyt9cmV0dXJuITB9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj1oKHt9LGEpO3JldHVybiBsKHRoaXMub3B0aW9ucy5lbmFibGUsW3RoaXMsYl0pPyh0aGlzLnN0YXRlJihpYnxqYnxrYikmJih0aGlzLnN0YXRlPWViKSx0aGlzLnN0YXRlPXRoaXMucHJvY2VzcyhiKSx2b2lkKHRoaXMuc3RhdGUmKGZifGdifGhifGpiKSYmdGhpcy50cnlFbWl0KGIpKSk6KHRoaXMucmVzZXQoKSx2b2lkKHRoaXMuc3RhdGU9a2IpKX0scHJvY2VzczpmdW5jdGlvbigpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saihaLFYse2RlZmF1bHRzOntwb2ludGVyczoxfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDA9PT1ifHxhLnBvaW50ZXJzLmxlbmd0aD09PWJ9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdGF0ZSxjPWEuZXZlbnRUeXBlLGQ9YiYoZmJ8Z2IpLGU9dGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCYmKGMmQmF8fCFlKT9ifGpiOmR8fGU/YyZBYT9ifGhiOmImZmI/YnxnYjpmYjprYn19KSxqKCQsWix7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOkphfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZIYSYmYi5wdXNoKGRiKSxhJklhJiZiLnB1c2goY2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mSGE/KGU9MD09PWY/Q2E6MD5mP0RhOkVhLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/Q2E6MD5nP0ZhOkdhLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIFoucHJvdG90eXBlLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKHRoaXMuc3RhdGUmZmJ8fCEodGhpcy5zdGF0ZSZmYikmJnRoaXMuZGlyZWN0aW9uVGVzdChhKSl9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5wWD1hLmRlbHRhWCx0aGlzLnBZPWEuZGVsdGFZO3ZhciBiPVgoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGooXyxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJwaW5jaFwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2JiXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEuc2NhbGUtMSk+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZmYil9LGVtaXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSksMSE9PWEuc2NhbGUpe3ZhciBiPWEuc2NhbGU8MT9cImluXCI6XCJvdXRcIjt0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKX19fSksaihhYSxWLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZTo1MDAsdGhyZXNob2xkOjV9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW19hXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoQWF8QmEpJiYhZil0aGlzLnJlc2V0KCk7ZWxzZSBpZihhLmV2ZW50VHlwZSZ5YSl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9aWIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJkFhKXJldHVybiBpYjtyZXR1cm4ga2J9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnN0YXRlPT09aWImJihhJiZhLmV2ZW50VHlwZSZBYT90aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrXCJ1cFwiLGEpOih0aGlzLl9pbnB1dC50aW1lU3RhbXA9bmEoKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSksaihiYSxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJyb3RhdGVcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltiYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnJvdGF0aW9uKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJmZiKX19KSxqKGNhLFose2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi42NSxkaXJlY3Rpb246SGF8SWEscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gJC5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihIYXxJYSk/Yj1hLnZlbG9jaXR5OmMmSGE/Yj1hLnZlbG9jaXR5WDpjJklhJiYoYj1hLnZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEuZGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJm1hKGIpPnRoaXMub3B0aW9ucy52ZWxvY2l0eSYmYS5ldmVudFR5cGUmQWF9LGVtaXQ6ZnVuY3Rpb24oYSl7dmFyIGI9WChhLmRpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LGEpfX0pLGooZGEsVix7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDoyLHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYWJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZj1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJnlhJiYwPT09dGhpcy5jb3VudClyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO2lmKGQmJmYmJmMpe2lmKGEuZXZlbnRUeXBlIT1BYSlyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO3ZhciBnPSF0aGlzLnBUaW1lfHxhLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWwsaD0hdGhpcy5wQ2VudGVyfHxJKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1pYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxmYik6aWJ9cmV0dXJuIGtifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1rYn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLGtifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1pYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksZWEuVkVSU0lPTj1cIjIuMC40XCIsZWEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjokYSxlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbYmEse2VuYWJsZTohMX1dLFtfLHtlbmFibGU6ITF9LFtcInJvdGF0ZVwiXV0sW2NhLHtkaXJlY3Rpb246SGF9XSxbJCx7ZGlyZWN0aW9uOkhhfSxbXCJzd2lwZVwiXV0sW2RhXSxbZGEse2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFthYV1dLGNzc1Byb3BzOnt1c2VyU2VsZWN0OlwiZGVmYXVsdFwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciBsYj0xLG1iPTI7ZmEucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGgodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT9tYjpsYn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJmliKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT1tYnx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKGZifGdifGhiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgVilyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVjb2duaXplcnM7cmV0dXJuIGE9dGhpcy5nZXQoYSksYi5zcGxpY2UocyhiLGEpLDEpLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30sb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHIoYSksZnVuY3Rpb24oYSl7Y1thXT1jW2FdfHxbXSxjW2FdLnB1c2goYil9KSx0aGlzfSxvZmY6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHIoYSksZnVuY3Rpb24oYSl7Yj9jW2FdLnNwbGljZShzKGNbYV0sYiksMSk6ZGVsZXRlIGNbYV19KSx0aGlzfSxlbWl0OmZ1bmN0aW9uKGEsYil7dGhpcy5vcHRpb25zLmRvbUV2ZW50cyYmaGEoYSxiKTt2YXIgYz10aGlzLmhhbmRsZXJzW2FdJiZ0aGlzLmhhbmRsZXJzW2FdLnNsaWNlKCk7aWYoYyYmYy5sZW5ndGgpe2IudHlwZT1hLGIucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtiLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCl9O2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7KWNbZF0oYiksZCsrfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudCYmZ2EodGhpcywhMSksdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5lbGVtZW50PW51bGx9fSxoKGVhLHtJTlBVVF9TVEFSVDp5YSxJTlBVVF9NT1ZFOnphLElOUFVUX0VORDpBYSxJTlBVVF9DQU5DRUw6QmEsU1RBVEVfUE9TU0lCTEU6ZWIsU1RBVEVfQkVHQU46ZmIsU1RBVEVfQ0hBTkdFRDpnYixTVEFURV9FTkRFRDpoYixTVEFURV9SRUNPR05JWkVEOmliLFNUQVRFX0NBTkNFTExFRDpqYixTVEFURV9GQUlMRUQ6a2IsRElSRUNUSU9OX05PTkU6Q2EsRElSRUNUSU9OX0xFRlQ6RGEsRElSRUNUSU9OX1JJR0hUOkVhLERJUkVDVElPTl9VUDpGYSxESVJFQ1RJT05fRE9XTjpHYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpIYSxESVJFQ1RJT05fVkVSVElDQUw6SWEsRElSRUNUSU9OX0FMTDpKYSxNYW5hZ2VyOmZhLElucHV0OnksVG91Y2hBY3Rpb246VCxUb3VjaElucHV0OlEsTW91c2VJbnB1dDpNLFBvaW50ZXJFdmVudElucHV0Ok4sVG91Y2hNb3VzZUlucHV0OlMsU2luZ2xlVG91Y2hJbnB1dDpPLFJlY29nbml6ZXI6VixBdHRyUmVjb2duaXplcjpaLFRhcDpkYSxQYW46JCxTd2lwZTpjYSxQaW5jaDpfLFJvdGF0ZTpiYSxQcmVzczphYSxvbjpuLG9mZjpvLGVhY2g6ZyxtZXJnZTppLGV4dGVuZDpoLGluaGVyaXQ6aixiaW5kRm46ayxwcmVmaXhlZDp2fSksdHlwZW9mIGRlZmluZT09a2EmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGVhfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZWE6YVtjXT1lYX0od2luZG93LGRvY3VtZW50LFwiSGFtbWVyXCIpLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCIsXCJoYW1tZXJqc1wiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9hKHJlcXVpcmUoXCJqcXVlcnlcIikscmVxdWlyZShcImhhbW1lcmpzXCIpKTphKGpRdWVyeSxIYW1tZXIpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYyxkKXt2YXIgZT1hKGMpO2UuZGF0YShcImhhbW1lclwiKXx8ZS5kYXRhKFwiaGFtbWVyXCIsbmV3IGIoZVswXSxkKSl9YS5mbi5oYW1tZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2ModGhpcyxhKX0pfSxiLk1hbmFnZXIucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7Yi5jYWxsKHRoaXMsYyxkKSxhKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7dHlwZTpjLGdlc3R1cmU6ZH0pfX0oYi5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0KX0pLGZ1bmN0aW9uKGEpe2EuUGFja2FnZT9NYXRlcmlhbGl6ZT17fTphLk1hdGVyaWFsaXplPXt9fSh3aW5kb3cpLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9W1wid2Via2l0XCIsXCJtb3pcIl0sZD1hLnJlcXVlc3RBbmltYXRpb25GcmFtZSxlPWEuY2FuY2VsQW5pbWF0aW9uRnJhbWUsZj1jLmxlbmd0aDstLWY+PTAmJiFkOylkPWFbY1tmXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxlPWFbY1tmXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtkJiZlfHwoZD1mdW5jdGlvbihhKXt2YXIgYz0rRGF0ZS5ub3coKSxkPU1hdGgubWF4KGIrMTYsYyk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKGI9ZCl9LGQtYyl9LGU9Y2xlYXJUaW1lb3V0KSxhLnJlcXVlc3RBbmltYXRpb25GcmFtZT1kLGEuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZX0od2luZG93KSxNYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZz1mdW5jdGlvbihhKXt2YXIgYj1hLnByb3AoXCJ0YWdOYW1lXCIpfHxcIlwiLGM9YS5hdHRyKFwiaWRcIil8fFwiXCIsZD1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIjtyZXR1cm4oYitjK2QpLnJlcGxhY2UoL1xccy9nLFwiXCIpfSxNYXRlcmlhbGl6ZS5ndWlkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBNYXRoLmZsb29yKDY1NTM2KigxK01hdGgucmFuZG9tKCkpKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhKCkrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrXCItXCIrYSgpK1wiLVwiK2EoKSthKCkrYSgpfX0oKSxNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCx8PSkvZyxcIlxcXFwkMVwiKX0sTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZD1mdW5jdGlvbihhKXt2YXIgYj0kKGEpLGM9Yi5hZGQoYi5wYXJlbnRzKCkpLGQ9ITE7cmV0dXJuIGMuZWFjaChmdW5jdGlvbigpe2lmKFwiZml4ZWRcIj09PSQodGhpcykuY3NzKFwicG9zaXRpb25cIikpcmV0dXJuIGQ9ITAsITF9KSxkfTt2YXIgZ2V0VGltZT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX07TWF0ZXJpYWxpemUudGhyb3R0bGU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPW51bGwsaD0wO2N8fChjPXt9KTt2YXIgaT1mdW5jdGlvbigpe2g9Yy5sZWFkaW5nPT09ITE/MDpnZXRUaW1lKCksZz1udWxsLGY9YS5hcHBseShkLGUpLGQ9ZT1udWxsfTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaj1nZXRUaW1lKCk7aHx8Yy5sZWFkaW5nIT09ITF8fChoPWopO3ZhciBrPWItKGotaCk7cmV0dXJuIGQ9dGhpcyxlPWFyZ3VtZW50cyxrPD0wPyhjbGVhclRpbWVvdXQoZyksZz1udWxsLGg9aixmPWEuYXBwbHkoZCxlKSxkPWU9bnVsbCk6Z3x8Yy50cmFpbGluZz09PSExfHwoZz1zZXRUaW1lb3V0KGksaykpLGZ9fTt2YXIgVmVsO1ZlbD1qUXVlcnk/alF1ZXJ5LlZlbG9jaXR5OiQ/JC5WZWxvY2l0eTpWZWxvY2l0eSxmdW5jdGlvbihhKXthLmZuLmNvbGxhcHNpYmxlPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9e2FjY29yZGlvbjp2b2lkIDAsb25PcGVuOnZvaWQgMCxvbkNsb3NlOnZvaWQgMH0sZT1iO3JldHVybiBiPWEuZXh0ZW5kKGQsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZChiKXttPWwuZmluZChcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpLGIuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTpiLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIucGFyZW50KCkuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlRG93bih7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KTpiLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KSxtLm5vdChiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxtLm5vdChiKS5wYXJlbnQoKS5jaGlsZHJlbihcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmlzKFwiOnZpc2libGVcIikmJmEodGhpcykuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKSxoKGEodGhpcykuc2libGluZ3MoXCIuY29sbGFwc2libGUtaGVhZGVyXCIpKX19KX0pfWZ1bmN0aW9uIGYoYil7Yi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmIucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYi5wYXJlbnQoKS5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVEb3duKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pOmIuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZVVwKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pfWZ1bmN0aW9uIGcoYSxjKXtjfHxhLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLGIuYWNjb3JkaW9ufHxcImFjY29yZGlvblwiPT09bnx8dm9pZCAwPT09bj9kKGEpOmYoYSksaChhKX1mdW5jdGlvbiBoKGEpe2EuaGFzQ2xhc3MoXCJhY3RpdmVcIik/XCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbk9wZW4mJmIub25PcGVuLmNhbGwodGhpcyxhLnBhcmVudCgpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQ2xvc2UmJmIub25DbG9zZS5jYWxsKHRoaXMsYS5wYXJlbnQoKSl9ZnVuY3Rpb24gaShhKXt2YXIgYj1qKGEpO3JldHVybiBiLmxlbmd0aD4wfWZ1bmN0aW9uIGooYSl7cmV0dXJuIGEuY2xvc2VzdChcImxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKX1mdW5jdGlvbiBrKCl7bC5vZmYoXCJjbGljay5jb2xsYXBzZVwiLFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIil9dmFyIGw9YSh0aGlzKSxtPWEodGhpcykuZmluZChcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpLG49bC5kYXRhKFwiY29sbGFwc2libGVcIik7aWYoXCJkZXN0cm95XCI9PT1lKXJldHVybiB2b2lkIGsoKTtpZihjPj0wJiZjPG0ubGVuZ3RoKXt2YXIgbz1tLmVxKGMpO3JldHVybiB2b2lkKG8ubGVuZ3RoJiYoXCJvcGVuXCI9PT1lfHxcImNsb3NlXCI9PT1lJiZvLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSYmZyhvKSl9aygpLGwub24oXCJjbGljay5jb2xsYXBzZVwiLFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIixmdW5jdGlvbihiKXt2YXIgYz1hKGIudGFyZ2V0KTtpKGMpJiYoYz1qKGMpKSxnKGMpfSksYi5hY2NvcmRpb258fFwiYWNjb3JkaW9uXCI9PT1ufHx2b2lkIDA9PT1uP2cobS5maWx0ZXIoXCIuYWN0aXZlXCIpLmZpcnN0KCksITApOm0uZmlsdGVyKFwiLmFjdGl2ZVwiKS5lYWNoKGZ1bmN0aW9uKCl7ZyhhKHRoaXMpLCEwKX0pfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5jb2xsYXBzaWJsZVwiKS5jb2xsYXBzaWJsZSgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5zY3JvbGxUbz1mdW5jdGlvbihiKXtyZXR1cm4gYSh0aGlzKS5zY3JvbGxUb3AoYSh0aGlzKS5zY3JvbGxUb3AoKS1hKHRoaXMpLm9mZnNldCgpLnRvcCthKGIpLm9mZnNldCgpLnRvcCksdGhpc30sYS5mbi5kcm9wZG93bj1mdW5jdGlvbihiKXt2YXIgYz17aW5EdXJhdGlvbjozMDAsb3V0RHVyYXRpb246MjI1LGNvbnN0cmFpbldpZHRoOiEwLGhvdmVyOiExLGd1dHRlcjowLGJlbG93T3JpZ2luOiExLGFsaWdubWVudDpcImxlZnRcIixzdG9wUHJvcGFnYXRpb246ITF9O3JldHVyblwib3BlblwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwib3BlblwiKX0pLCExKTpcImNsb3NlXCI9PT1iPyh0aGlzLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJjbG9zZVwiKX0pLCExKTp2b2lkIHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGQoKXt2b2lkIDAhPT1nLmRhdGEoXCJpbmR1cmF0aW9uXCIpJiYoaC5pbkR1cmF0aW9uPWcuZGF0YShcImluZHVyYXRpb25cIikpLHZvaWQgMCE9PWcuZGF0YShcIm91dGR1cmF0aW9uXCIpJiYoaC5vdXREdXJhdGlvbj1nLmRhdGEoXCJvdXRkdXJhdGlvblwiKSksdm9pZCAwIT09Zy5kYXRhKFwiY29uc3RyYWlud2lkdGhcIikmJihoLmNvbnN0cmFpbldpZHRoPWcuZGF0YShcImNvbnN0cmFpbndpZHRoXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJob3ZlclwiKSYmKGguaG92ZXI9Zy5kYXRhKFwiaG92ZXJcIikpLHZvaWQgMCE9PWcuZGF0YShcImd1dHRlclwiKSYmKGguZ3V0dGVyPWcuZGF0YShcImd1dHRlclwiKSksdm9pZCAwIT09Zy5kYXRhKFwiYmVsb3dvcmlnaW5cIikmJihoLmJlbG93T3JpZ2luPWcuZGF0YShcImJlbG93b3JpZ2luXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJhbGlnbm1lbnRcIikmJihoLmFsaWdubWVudD1nLmRhdGEoXCJhbGlnbm1lbnRcIikpLHZvaWQgMCE9PWcuZGF0YShcInN0b3Bwcm9wYWdhdGlvblwiKSYmKGguc3RvcFByb3BhZ2F0aW9uPWcuZGF0YShcInN0b3Bwcm9wYWdhdGlvblwiKSl9ZnVuY3Rpb24gZShiKXtcImZvY3VzXCI9PT1iJiYoaT0hMCksZCgpLGouYWRkQ2xhc3MoXCJhY3RpdmVcIiksZy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxoLmNvbnN0cmFpbldpZHRoPT09ITA/ai5jc3MoXCJ3aWR0aFwiLGcub3V0ZXJXaWR0aCgpKTpqLmNzcyhcIndoaXRlLXNwYWNlXCIsXCJub3dyYXBcIik7dmFyIGM9d2luZG93LmlubmVySGVpZ2h0LGU9Zy5pbm5lckhlaWdodCgpLGs9Zy5vZmZzZXQoKS5sZWZ0LGw9Zy5vZmZzZXQoKS50b3AtYSh3aW5kb3cpLnNjcm9sbFRvcCgpLG09aC5hbGlnbm1lbnQsbj0wLG89MCxwPTA7aC5iZWxvd09yaWdpbj09PSEwJiYocD1lKTt2YXIgcT0wLHI9MCxzPWcucGFyZW50KCk7aWYocy5pcyhcImJvZHlcIil8fChzWzBdLnNjcm9sbEhlaWdodD5zWzBdLmNsaWVudEhlaWdodCYmKHE9c1swXS5zY3JvbGxUb3ApLHNbMF0uc2Nyb2xsV2lkdGg+c1swXS5jbGllbnRXaWR0aCYmKHI9c1swXS5zY3JvbGxMZWZ0KSksaytqLmlubmVyV2lkdGgoKT5hKHdpbmRvdykud2lkdGgoKT9tPVwicmlnaHRcIjprLWouaW5uZXJXaWR0aCgpK2cuaW5uZXJXaWR0aCgpPDAmJihtPVwibGVmdFwiKSxsK2ouaW5uZXJIZWlnaHQoKT5jKWlmKGwrZS1qLmlubmVySGVpZ2h0KCk8MCl7dmFyIHQ9Yy1sLXA7ai5jc3MoXCJtYXgtaGVpZ2h0XCIsdCl9ZWxzZSBwfHwocCs9ZSkscC09ai5pbm5lckhlaWdodCgpO2lmKFwibGVmdFwiPT09bSluPWguZ3V0dGVyLG89Zy5wb3NpdGlvbigpLmxlZnQrbjtlbHNlIGlmKFwicmlnaHRcIj09PW0pe3ZhciB1PWcucG9zaXRpb24oKS5sZWZ0K2cub3V0ZXJXaWR0aCgpLWoub3V0ZXJXaWR0aCgpO249LWguZ3V0dGVyLG89dStufWouY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOmcucG9zaXRpb24oKS50b3ArcCtxLGxlZnQ6bytyfSksai5zdG9wKCEwLCEwKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2xpZGVEb3duKHtxdWV1ZTohMSxkdXJhdGlvbjpoLmluRHVyYXRpb24sZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pLmFuaW1hdGUoe29wYWNpdHk6MX0se3F1ZXVlOiExLGR1cmF0aW9uOmguaW5EdXJhdGlvbixlYXNpbmc6XCJlYXNlT3V0U2luZVwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2EoZG9jdW1lbnQpLmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSxmdW5jdGlvbihiKXtmKCksYShkb2N1bWVudCkudW5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIikpfSl9LDApfWZ1bmN0aW9uIGYoKXtpPSExLGouZmFkZU91dChoLm91dER1cmF0aW9uKSxqLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGcucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYShkb2N1bWVudCkudW5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIikpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtqLmNzcyhcIm1heC1oZWlnaHRcIixcIlwiKX0saC5vdXREdXJhdGlvbil9dmFyIGc9YSh0aGlzKSxoPWEuZXh0ZW5kKHt9LGMsYiksaT0hMSxqPWEoXCIjXCIrZy5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikpO2lmKGQoKSxnLmFmdGVyKGopLGguaG92ZXIpe3ZhciBrPSExO2cudW5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIikpLGcub24oXCJtb3VzZWVudGVyXCIsZnVuY3Rpb24oYSl7az09PSExJiYoZSgpLGs9ITApfSksZy5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihiKXt2YXIgYz1iLnRvRWxlbWVudHx8Yi5yZWxhdGVkVGFyZ2V0O2EoYykuY2xvc2VzdChcIi5kcm9wZG93bi1jb250ZW50XCIpLmlzKGopfHwoai5zdG9wKCEwLCEwKSxmKCksaz0hMSl9KSxqLm9uKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWIudG9FbGVtZW50fHxiLnJlbGF0ZWRUYXJnZXQ7YShjKS5jbG9zZXN0KFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5pcyhnKXx8KGouc3RvcCghMCwhMCksZigpLGs9ITEpfSl9ZWxzZSBnLnVuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpKSxnLmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSxmdW5jdGlvbihiKXtpfHwoZ1swXSE9Yi5jdXJyZW50VGFyZ2V0fHxnLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwwIT09YShiLnRhcmdldCkuY2xvc2VzdChcIi5kcm9wZG93bi1jb250ZW50XCIpLmxlbmd0aD9nLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZigpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKSk6KGIucHJldmVudERlZmF1bHQoKSxoLnN0b3BQcm9wYWdhdGlvbiYmYi5zdG9wUHJvcGFnYXRpb24oKSxlKFwiY2xpY2tcIikpKX0pO2cub24oXCJvcGVuXCIsZnVuY3Rpb24oYSxiKXtlKGIpfSksZy5vbihcImNsb3NlXCIsZil9KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5kcm9wZG93bigpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7XG52YXIgYj0wLGM9MCxkPWZ1bmN0aW9uKCl7cmV0dXJuIGMrKyxcIm1hdGVyaWFsaXplLW1vZGFsLW92ZXJsYXktXCIrY30sZT17aW5pdDpmdW5jdGlvbihjKXt2YXIgZT17b3BhY2l0eTouNSxpbkR1cmF0aW9uOjM1MCxvdXREdXJhdGlvbjoyNTAscmVhZHk6dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxkaXNtaXNzaWJsZTohMCxzdGFydGluZ1RvcDpcIjQlXCIsZW5kaW5nVG9wOlwiMTAlXCJ9O3JldHVybiBjPWEuZXh0ZW5kKGUsYyksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWEodGhpcykuYXR0cihcImlkXCIpfHxcIiNcIithKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIiksZz1mdW5jdGlvbigpe3ZhciBkPWUuZGF0YShcIm92ZXJsYXktaWRcIiksZj1hKFwiI1wiK2QpO2UucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9mZihcImNsaWNrLmNsb3NlXCIpLGEoZG9jdW1lbnQpLm9mZihcImtleXVwLm1vZGFsXCIrZCksZi52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246Yy5vdXREdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dFF1YXJ0XCJ9KTt2YXIgZz17ZHVyYXRpb246Yy5vdXREdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMuY29tcGxldGUmJmMuY29tcGxldGUuY2FsbCh0aGlzLGUpLGYucmVtb3ZlKCksYi0tfX07ZS5oYXNDbGFzcyhcImJvdHRvbS1zaGVldFwiKT9lLnZlbG9jaXR5KHtib3R0b206XCItMTAwJVwiLG9wYWNpdHk6MH0sZyk6ZS52ZWxvY2l0eSh7dG9wOmMuc3RhcnRpbmdUb3Asb3BhY2l0eTowLHNjYWxlWDouN30sZyl9LGg9ZnVuY3Rpb24oZil7dmFyIGg9YShcImJvZHlcIiksaT1oLmlubmVyV2lkdGgoKTtpZihoLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksaC53aWR0aChpKSwhZS5oYXNDbGFzcyhcIm9wZW5cIikpe3ZhciBqPWQoKSxrPWEoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7bFN0YWNrPSsrYixrLmF0dHIoXCJpZFwiLGopLmNzcyhcInotaW5kZXhcIiwxZTMrMipsU3RhY2spLGUuZGF0YShcIm92ZXJsYXktaWRcIixqKS5jc3MoXCJ6LWluZGV4XCIsMWUzKzIqbFN0YWNrKzEpLGUuYWRkQ2xhc3MoXCJvcGVuXCIpLGEoXCJib2R5XCIpLmFwcGVuZChrKSxjLmRpc21pc3NpYmxlJiYoay5jbGljayhmdW5jdGlvbigpe2coKX0pLGEoZG9jdW1lbnQpLm9uKFwia2V5dXAubW9kYWxcIitqLGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZnKCl9KSksZS5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9uKFwiY2xpY2suY2xvc2VcIixmdW5jdGlvbihhKXtnKCl9KSxrLmNzcyh7ZGlzcGxheTpcImJsb2NrXCIsb3BhY2l0eTowfSksZS5jc3Moe2Rpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6MH0pLGsudmVsb2NpdHkoe29wYWNpdHk6Yy5vcGFjaXR5fSx7ZHVyYXRpb246Yy5pbkR1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIn0pLGUuZGF0YShcImFzc29jaWF0ZWQtb3ZlcmxheVwiLGtbMF0pO3ZhciBsPXtkdXJhdGlvbjpjLmluRHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgYy5yZWFkeSYmYy5yZWFkeS5jYWxsKHRoaXMsZSxmKX19O2UuaGFzQ2xhc3MoXCJib3R0b20tc2hlZXRcIik/ZS52ZWxvY2l0eSh7Ym90dG9tOlwiMFwiLG9wYWNpdHk6MX0sbCk6KGEuVmVsb2NpdHkuaG9vayhlLFwic2NhbGVYXCIsLjcpLGUuY3NzKHt0b3A6Yy5zdGFydGluZ1RvcH0pLGUudmVsb2NpdHkoe3RvcDpjLmVuZGluZ1RvcCxvcGFjaXR5OjEsc2NhbGVYOlwiMVwifSxsKSl9fTthKGRvY3VtZW50KS5vZmYoXCJjbGljay5tb2RhbFRyaWdnZXJcIiwnYVtocmVmPVwiIycrZisnXCJdLCBbZGF0YS10YXJnZXQ9XCInK2YrJ1wiXScpLGEodGhpcykub2ZmKFwib3Blbk1vZGFsXCIpLGEodGhpcykub2ZmKFwiY2xvc2VNb2RhbFwiKSxhKGRvY3VtZW50KS5vbihcImNsaWNrLm1vZGFsVHJpZ2dlclwiLCdhW2hyZWY9XCIjJytmKydcIl0sIFtkYXRhLXRhcmdldD1cIicrZisnXCJdJyxmdW5jdGlvbihiKXtjLnN0YXJ0aW5nVG9wPShhKHRoaXMpLm9mZnNldCgpLnRvcC1hKHdpbmRvdykuc2Nyb2xsVG9wKCkpLzEuMTUsaChhKHRoaXMpKSxiLnByZXZlbnREZWZhdWx0KCl9KSxhKHRoaXMpLm9uKFwib3Blbk1vZGFsXCIsZnVuY3Rpb24oKXthKHRoaXMpLmF0dHIoXCJocmVmXCIpfHxcIiNcIithKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIik7aCgpfSksYSh0aGlzKS5vbihcImNsb3NlTW9kYWxcIixmdW5jdGlvbigpe2coKX0pfSl9LG9wZW46ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJvcGVuTW9kYWxcIil9LGNsb3NlOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VNb2RhbFwiKX19O2EuZm4ubW9kYWw9ZnVuY3Rpb24oYil7cmV0dXJuIGVbYl0/ZVtiXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGImJmI/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2IrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5Lm1vZGFsXCIpOmUuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ubWF0ZXJpYWxib3g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2Y9ITE7dmFyIGI9aS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIiksZD0od2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0LGkuZGF0YShcIndpZHRoXCIpKSxnPWkuZGF0YShcImhlaWdodFwiKTtpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiI21hdGVyaWFsYm94LW92ZXJsYXlcIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIubWF0ZXJpYWxib3gtY2FwdGlvblwiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIiNtYXRlcmlhbGJveC1vdmVybGF5XCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlPSExLGEodGhpcykucmVtb3ZlKCl9fSksaS52ZWxvY2l0eSh7d2lkdGg6ZCxoZWlnaHQ6ZyxsZWZ0OjAsdG9wOjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtiLmNzcyh7aGVpZ2h0OlwiXCIsd2lkdGg6XCJcIixwb3NpdGlvbjpcIlwiLHRvcDpcIlwiLGxlZnQ6XCJcIn0pLGkucmVtb3ZlQXR0cihcInN0eWxlXCIpLGkuYXR0cihcInN0eWxlXCIsayksaS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxmPSEwLGMmJmMuY3NzKFwib3ZlcmZsb3dcIixcIlwiKX19KSxhKFwiLm1hdGVyaWFsYm94LWNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmgscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSl9aWYoIWEodGhpcykuaGFzQ2xhc3MoXCJpbml0aWFsaXplZFwiKSl7YSh0aGlzKS5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpO3ZhciBjLGQsZT0hMSxmPSEwLGc9Mjc1LGg9MjAwLGk9YSh0aGlzKSxqPWEoXCI8ZGl2PjwvZGl2PlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGs9aS5hdHRyKFwic3R5bGVcIik7aS53cmFwKGopLGkub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIGg9aS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIiksaj13aW5kb3cuaW5uZXJXaWR0aCxrPXdpbmRvdy5pbm5lckhlaWdodCxsPWkud2lkdGgoKSxtPWkuaGVpZ2h0KCk7aWYoZj09PSExKXJldHVybiBiKCksITE7aWYoZSYmZj09PSEwKXJldHVybiBiKCksITE7Zj0hMSxpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGU9ITAsaC5jc3Moe3dpZHRoOmhbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsaGVpZ2h0OmhbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LHBvc2l0aW9uOlwicmVsYXRpdmVcIix0b3A6MCxsZWZ0OjB9KSxjPXZvaWQgMCxkPWhbMF0ucGFyZW50Tm9kZTtmb3IoO251bGwhPT1kJiYhYShkKS5pcyhkb2N1bWVudCk7KXt2YXIgbj1hKGQpO1widmlzaWJsZVwiIT09bi5jc3MoXCJvdmVyZmxvd1wiKSYmKG4uY3NzKFwib3ZlcmZsb3dcIixcInZpc2libGVcIiksYz12b2lkIDA9PT1jP246Yy5hZGQobikpLGQ9ZC5wYXJlbnROb2RlfWkuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsXCJ6LWluZGV4XCI6MWUzLFwid2lsbC1jaGFuZ2VcIjpcImxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFwifSkuZGF0YShcIndpZHRoXCIsbCkuZGF0YShcImhlaWdodFwiLG0pO3ZhciBvPWEoJzxkaXYgaWQ9XCJtYXRlcmlhbGJveC1vdmVybGF5XCI+PC9kaXY+JykuY3NzKHtvcGFjaXR5OjB9KS5jbGljayhmdW5jdGlvbigpe2Y9PT0hMCYmYigpfSk7aS5iZWZvcmUobyk7dmFyIHA9b1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihvLmNzcyh7d2lkdGg6aixoZWlnaHQ6ayxsZWZ0Oi0xKnAubGVmdCx0b3A6LTEqcC50b3B9KSxvLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxcIlwiIT09aS5kYXRhKFwiY2FwdGlvblwiKSl7dmFyIHE9YSgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsYm94LWNhcHRpb25cIj48L2Rpdj4nKTtxLnRleHQoaS5kYXRhKFwiY2FwdGlvblwiKSksYShcImJvZHlcIikuYXBwZW5kKHEpLHEuY3NzKHtkaXNwbGF5OlwiaW5saW5lXCJ9KSxxLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX12YXIgcj0wLHM9bC9qLHQ9bS9rLHU9MCx2PTA7cz50PyhyPW0vbCx1PS45Kmosdj0uOSpqKnIpOihyPWwvbSx1PS45Kmsqcix2PS45KmspLGkuaGFzQ2xhc3MoXCJyZXNwb25zaXZlLWltZ1wiKT9pLnZlbG9jaXR5KHtcIm1heC13aWR0aFwiOnUsd2lkdGg6bH0se2R1cmF0aW9uOjAscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtpLmNzcyh7bGVmdDowLHRvcDowfSkudmVsb2NpdHkoe2hlaWdodDp2LHdpZHRoOnUsbGVmdDphKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkrai8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLmxlZnQtdS8yLHRvcDphKGRvY3VtZW50KS5zY3JvbGxUb3AoKStrLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkudG9wLXYvMn0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2Y9ITB9fSl9fSk6aS5jc3MoXCJsZWZ0XCIsMCkuY3NzKFwidG9wXCIsMCkudmVsb2NpdHkoe2hlaWdodDp2LHdpZHRoOnUsbGVmdDphKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkrai8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLmxlZnQtdS8yLHRvcDphKGRvY3VtZW50KS5zY3JvbGxUb3AoKStrLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkudG9wLXYvMn0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2Y9ITB9fSl9KSxhKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7ZSYmYigpfSksYShkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oYSl7Mjc9PT1hLmtleUNvZGUmJmY9PT0hMCYmZSYmYigpfSl9fSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5tYXRlcmlhbGJveGVkXCIpLm1hdGVyaWFsYm94KCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnBhcmFsbGF4PWZ1bmN0aW9uKCl7dmFyIGI9YSh3aW5kb3cpLndpZHRoKCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGMpe3ZhciBkO2Q9Yjw2MDE/ZS5oZWlnaHQoKT4wP2UuaGVpZ2h0KCk6ZS5jaGlsZHJlbihcImltZ1wiKS5oZWlnaHQoKTplLmhlaWdodCgpPjA/ZS5oZWlnaHQoKTo1MDA7dmFyIGY9ZS5jaGlsZHJlbihcImltZ1wiKS5maXJzdCgpLGc9Zi5oZWlnaHQoKSxoPWctZCxpPWUub2Zmc2V0KCkudG9wK2Qsaj1lLm9mZnNldCgpLnRvcCxrPWEod2luZG93KS5zY3JvbGxUb3AoKSxsPXdpbmRvdy5pbm5lckhlaWdodCxtPWsrbCxuPShtLWopLyhkK2wpLG89TWF0aC5yb3VuZChoKm4pO2MmJmYuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIiksaT5rJiZqPGsrbCYmZi5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZTNEKC01MCUsXCIrbytcInB4LCAwKVwiKX12YXIgZT1hKHRoaXMpO2UuYWRkQ2xhc3MoXCJwYXJhbGxheFwiKSxlLmNoaWxkcmVuKFwiaW1nXCIpLm9uZShcImxvYWRcIixmdW5jdGlvbigpe2QoITApfSkuZWFjaChmdW5jdGlvbigpe3RoaXMuY29tcGxldGUmJmEodGhpcykudHJpZ2dlcihcImxvYWRcIil9KSxhKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7Yj1hKHdpbmRvdykud2lkdGgoKSxkKCExKX0pLGEod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtiPWEod2luZG93KS53aWR0aCgpLGQoITEpfSl9KX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e29uU2hvdzpudWxsLHN3aXBlYWJsZTohMSxyZXNwb25zaXZlVGhyZXNob2xkOjEvMH07Yj1hLmV4dGVuZChjLGIpO3ZhciBkPU1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKGEodGhpcykpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGUsZixnLGgsaSxqPWQrYyxrPWEodGhpcyksbD1hKHdpbmRvdykud2lkdGgoKSxtPWsuZmluZChcImxpLnRhYiBhXCIpLG49ay53aWR0aCgpLG89YSgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxxPXByZXZfaW5kZXg9MCxyPSExLHM9MzAwLHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguY2VpbChuLWEucG9zaXRpb24oKS5sZWZ0LWEub3V0ZXJXaWR0aCgpLWsuc2Nyb2xsTGVmdCgpKX0sdT1mdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5mbG9vcihhLnBvc2l0aW9uKCkubGVmdCtrLnNjcm9sbExlZnQoKSl9LHY9ZnVuY3Rpb24oYSl7cS1hPj0wPyhoLnZlbG9jaXR5KHtyaWdodDp0KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaC52ZWxvY2l0eSh7bGVmdDp1KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGRlbGF5OjkwfSkpOihoLnZlbG9jaXR5KHtsZWZ0OnUoZSl9LHtkdXJhdGlvbjpzLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxoLnZlbG9jaXR5KHtyaWdodDp0KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGRlbGF5OjkwfSkpfTtiLnN3aXBlYWJsZSYmbD5iLnJlc3BvbnNpdmVUaHJlc2hvbGQmJihiLnN3aXBlYWJsZT0hMSksZT1hKG0uZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpLDA9PT1lLmxlbmd0aCYmKGU9YSh0aGlzKS5maW5kKFwibGkudGFiIGEuYWN0aXZlXCIpLmZpcnN0KCkpLDA9PT1lLmxlbmd0aCYmKGU9YSh0aGlzKS5maW5kKFwibGkudGFiIGFcIikuZmlyc3QoKSksZS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxxPW0uaW5kZXgoZSkscTwwJiYocT0wKSx2b2lkIDAhPT1lWzBdJiYoZj1hKGVbMF0uaGFzaCksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSksay5maW5kKFwiLmluZGljYXRvclwiKS5sZW5ndGh8fGsuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+JyksaD1rLmZpbmQoXCIuaW5kaWNhdG9yXCIpLGsuYXBwZW5kKGgpLGsuaXMoXCI6dmlzaWJsZVwiKSYmc2V0VGltZW91dChmdW5jdGlvbigpe2guY3NzKHtyaWdodDp0KGUpfSksaC5jc3Moe2xlZnQ6dShlKX0pfSwwKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnRhYnMtXCIraikub24oXCJyZXNpemUudGFicy1cIitqLGZ1bmN0aW9uKCl7bj1rLndpZHRoKCkscD1NYXRoLm1heChuLGtbMF0uc2Nyb2xsV2lkdGgpL20ubGVuZ3RoLHE8MCYmKHE9MCksMCE9PXAmJjAhPT1uJiYoaC5jc3Moe3JpZ2h0OnQoZSl9KSxoLmNzcyh7bGVmdDp1KGUpfSkpfSksYi5zd2lwZWFibGU/KG0uZWFjaChmdW5jdGlvbigpe3ZhciBiPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKTtiLmFkZENsYXNzKFwiY2Fyb3VzZWwtaXRlbVwiKSxvPW8uYWRkKGIpfSksZz1vLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnQgY2Fyb3VzZWxcIj48L2Rpdj4nKSxvLmNzcyhcImRpc3BsYXlcIixcIlwiKSxhKFwiLnRhYnMtY29udGVudC5jYXJvdXNlbFwiKS5jYXJvdXNlbCh7ZnVsbFdpZHRoOiEwLG5vV3JhcDohMCxvbkN5Y2xlVG86ZnVuY3Rpb24oYSl7aWYoIXIpe3ZhciBiPXE7cT1nLmluZGV4KGEpLGU9bS5lcShxKSx2KGIpfX19KSk6bS5ub3QoZSkuZWFjaChmdW5jdGlvbigpe2EoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5oaWRlKCl9KSxrLm9mZihcImNsaWNrLnRhYnNcIikub24oXCJjbGljay50YWJzXCIsXCJhXCIsZnVuY3Rpb24oYyl7aWYoYSh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKXJldHVybiB2b2lkIGMucHJldmVudERlZmF1bHQoKTtpZighYSh0aGlzKS5hdHRyKFwidGFyZ2V0XCIpKXtyPSEwLG49ay53aWR0aCgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBkPWY7ZT1hKHRoaXMpLGY9YShNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLG09ay5maW5kKFwibGkudGFiIGFcIik7ZS5wb3NpdGlvbigpO2UuYWRkQ2xhc3MoXCJhY3RpdmVcIikscHJldl9pbmRleD1xLHE9bS5pbmRleChhKHRoaXMpKSxxPDAmJihxPTApLGIuc3dpcGVhYmxlP28ubGVuZ3RoJiZvLmNhcm91c2VsKFwic2V0XCIscSk6KHZvaWQgMCE9PWYmJihmLnNob3coKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGIub25TaG93JiZiLm9uU2hvdy5jYWxsKHRoaXMsZikpLHZvaWQgMD09PWR8fGQuaXMoZil8fChkLmhpZGUoKSxkLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpKSksaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cj0hMX0scyksdihwcmV2X2luZGV4KSxjLnByZXZlbnREZWZhdWx0KCl9fSl9KX0sc2VsZWN0X3RhYjpmdW5jdGlvbihhKXt0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnK2ErJ1wiXScpLnRyaWdnZXIoXCJjbGlja1wiKX19O2EuZm4udGFicz1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFic1wiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCJ1bC50YWJzXCIpLnRhYnMoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4udG9vbHRpcD1mdW5jdGlvbihjKXt2YXIgZD01LGU9e2RlbGF5OjM1MCx0b29sdGlwOlwiXCIscG9zaXRpb246XCJib3R0b21cIixodG1sOiExfTtyZXR1cm5cInJlbW92ZVwiPT09Yz8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YShcIiNcIithKHRoaXMpLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikpLnJlbW92ZSgpLGEodGhpcykub2ZmKFwibW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcFwiKX0pLCExKTooYz1hLmV4dGVuZChlLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPU1hdGVyaWFsaXplLmd1aWQoKSxmPWEodGhpcyk7Zi5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpJiZhKFwiI1wiK2YuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSkucmVtb3ZlKCksZi5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIsZSk7dmFyIGcsaCxpLGosayxsLG09ZnVuY3Rpb24oKXtnPWYuYXR0cihcImRhdGEtaHRtbFwiKT9cInRydWVcIj09PWYuYXR0cihcImRhdGEtaHRtbFwiKTpjLmh0bWwsaD1mLmF0dHIoXCJkYXRhLWRlbGF5XCIpLGg9dm9pZCAwPT09aHx8XCJcIj09PWg/Yy5kZWxheTpoLGk9Zi5hdHRyKFwiZGF0YS1wb3NpdGlvblwiKSxpPXZvaWQgMD09PWl8fFwiXCI9PT1pP2MucG9zaXRpb246aSxqPWYuYXR0cihcImRhdGEtdG9vbHRpcFwiKSxqPXZvaWQgMD09PWp8fFwiXCI9PT1qP2MudG9vbHRpcDpqfTttKCk7dmFyIG49ZnVuY3Rpb24oKXt2YXIgYj1hKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiPjwvZGl2PicpO3JldHVybiBqPWc/YShcIjxzcGFuPjwvc3Bhbj5cIikuaHRtbChqKTphKFwiPHNwYW4+PC9zcGFuPlwiKS50ZXh0KGopLGIuYXBwZW5kKGopLmFwcGVuZFRvKGEoXCJib2R5XCIpKS5hdHRyKFwiaWRcIixlKSxsPWEoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpLGwuYXBwZW5kVG8oYiksYn07az1uKCksZi5vZmYoXCJtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwXCIpO3ZhciBvLHA9ITE7Zi5vbih7XCJtb3VzZWVudGVyLnRvb2x0aXBcIjpmdW5jdGlvbihhKXt2YXIgYz1mdW5jdGlvbigpe20oKSxwPSEwLGsudmVsb2NpdHkoXCJzdG9wXCIpLGwudmVsb2NpdHkoXCJzdG9wXCIpLGsuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwiLGxlZnQ6XCIwcHhcIix0b3A6XCIwcHhcIn0pO3ZhciBhLGMsZSxnPWYub3V0ZXJXaWR0aCgpLGg9Zi5vdXRlckhlaWdodCgpLGo9ay5vdXRlckhlaWdodCgpLG49ay5vdXRlcldpZHRoKCksbz1cIjBweFwiLHE9XCIwcHhcIixyPWxbMF0ub2Zmc2V0V2lkdGgscz1sWzBdLm9mZnNldEhlaWdodCx0PTgsdT04LHY9MDtcInRvcFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcC1qLWQsYz1mLm9mZnNldCgpLmxlZnQrZy8yLW4vMixlPWIoYyxhLG4saiksbz1cIi0xMHB4XCIsbC5jc3Moe2JvdHRvbTowLGxlZnQ6MCxib3JkZXJSYWRpdXM6XCIxNHB4IDE0cHggMCAwXCIsdHJhbnNmb3JtT3JpZ2luOlwiNTAlIDEwMCVcIixtYXJnaW5Ub3A6aixtYXJnaW5MZWZ0Om4vMi1yLzJ9KSk6XCJsZWZ0XCI9PT1pPyhhPWYub2Zmc2V0KCkudG9wK2gvMi1qLzIsYz1mLm9mZnNldCgpLmxlZnQtbi1kLGU9YihjLGEsbixqKSxxPVwiLTEwcHhcIixsLmNzcyh7dG9wOlwiLTdweFwiLHJpZ2h0OjAsd2lkdGg6XCIxNHB4XCIsaGVpZ2h0OlwiMTRweFwiLGJvcmRlclJhZGl1czpcIjE0cHggMCAwIDE0cHhcIix0cmFuc2Zvcm1PcmlnaW46XCI5NSUgNTAlXCIsbWFyZ2luVG9wOmovMixtYXJnaW5MZWZ0Om59KSk6XCJyaWdodFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcCtoLzItai8yLGM9Zi5vZmZzZXQoKS5sZWZ0K2crZCxlPWIoYyxhLG4saikscT1cIisxMHB4XCIsbC5jc3Moe3RvcDpcIi03cHhcIixsZWZ0OjAsd2lkdGg6XCIxNHB4XCIsaGVpZ2h0OlwiMTRweFwiLGJvcmRlclJhZGl1czpcIjAgMTRweCAxNHB4IDBcIix0cmFuc2Zvcm1PcmlnaW46XCI1JSA1MCVcIixtYXJnaW5Ub3A6ai8yLG1hcmdpbkxlZnQ6XCIwcHhcIn0pKTooYT1mLm9mZnNldCgpLnRvcCtmLm91dGVySGVpZ2h0KCkrZCxjPWYub2Zmc2V0KCkubGVmdCtnLzItbi8yLGU9YihjLGEsbixqKSxvPVwiKzEwcHhcIixsLmNzcyh7dG9wOjAsbGVmdDowLG1hcmdpbkxlZnQ6bi8yLXIvMn0pKSxrLmNzcyh7dG9wOmUueSxsZWZ0OmUueH0pLHQ9TWF0aC5TUVJUMipuL3BhcnNlSW50KHIpLHU9TWF0aC5TUVJUMipqL3BhcnNlSW50KHMpLHY9TWF0aC5tYXgodCx1KSxrLnZlbG9jaXR5KHt0cmFuc2xhdGVZOm8sdHJhbnNsYXRlWDpxfSx7ZHVyYXRpb246MzUwLHF1ZXVlOiExfSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxkZWxheTo1MCxxdWV1ZTohMX0pLGwuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjU1LGRlbGF5OjAscXVldWU6ITF9KS52ZWxvY2l0eSh7c2NhbGVYOnYsc2NhbGVZOnZ9LHtkdXJhdGlvbjozMDAsZGVsYXk6MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlSW5PdXRRdWFkXCJ9KX07bz1zZXRUaW1lb3V0KGMsaCl9LFwibW91c2VsZWF2ZS50b29sdGlwXCI6ZnVuY3Rpb24oKXtwPSExLGNsZWFyVGltZW91dChvKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cCE9PSEwJiYoay52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVk6MCx0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjoyMjUscXVldWU6ITF9KSxsLnZlbG9jaXR5KHtvcGFjaXR5OjAsc2NhbGVYOjEsc2NhbGVZOjF9LHtkdXJhdGlvbjoyMjUscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtsLmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksay5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLHA9ITF9fSkpfSwyMjUpfX0pfSkpfTt2YXIgYj1mdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1iLGc9YztyZXR1cm4gZjwwP2Y9NDpmK2Q+d2luZG93LmlubmVyV2lkdGgmJihmLT1mK2Qtd2luZG93LmlubmVyV2lkdGgpLGc8MD9nPTQ6ZytlPndpbmRvdy5pbm5lckhlaWdodCthKHdpbmRvdykuc2Nyb2xsVG9wJiYoZy09ZytlLXdpbmRvdy5pbm5lckhlaWdodCkse3g6Zix5Omd9fTthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIudG9vbHRpcHBlZFwiKS50b29sdGlwKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEpe3JldHVybiBudWxsIT09YSYmYT09PWEud2luZG93fWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGIoYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31mdW5jdGlvbiBkKGEpe3ZhciBiLGQsZT17dG9wOjAsbGVmdDowfSxmPWEmJmEub3duZXJEb2N1bWVudDtyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QmJihlPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGQ9YyhmKSx7dG9wOmUudG9wK2QucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrZC5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9fWZ1bmN0aW9uIGUoYSl7dmFyIGI9XCJcIjtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYis9YytcIjpcIithW2NdK1wiO1wiKTtyZXR1cm4gYn1mdW5jdGlvbiBmKGEpe2lmKGsuYWxsb3dFdmVudChhKT09PSExKXJldHVybiBudWxsO2Zvcih2YXIgYj1udWxsLGM9YS50YXJnZXR8fGEuc3JjRWxlbWVudDtudWxsIT09Yy5wYXJlbnRFbGVtZW50Oyl7aWYoIShjIGluc3RhbmNlb2YgU1ZHRWxlbWVudHx8Yy5jbGFzc05hbWUuaW5kZXhPZihcIndhdmVzLWVmZmVjdFwiKT09PS0xKSl7Yj1jO2JyZWFrfWlmKGMuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2F2ZXMtZWZmZWN0XCIpKXtiPWM7YnJlYWt9Yz1jLnBhcmVudEVsZW1lbnR9cmV0dXJuIGJ9ZnVuY3Rpb24gZyhiKXt2YXIgYz1mKGIpO251bGwhPT1jJiYoai5zaG93KGIsYyksXCJvbnRvdWNoc3RhcnRcImluIGEmJihjLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGouaGlkZSwhMSksYy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIixqLmhpZGUsITEpKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsai5oaWRlLCExKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsai5oaWRlLCExKSl9dmFyIGg9aHx8e30saT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpLGo9e2R1cmF0aW9uOjc1MCxzaG93OmZ1bmN0aW9uKGEsYil7aWYoMj09PWEuYnV0dG9uKXJldHVybiExO3ZhciBjPWJ8fHRoaXMsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuY2xhc3NOYW1lPVwid2F2ZXMtcmlwcGxlXCIsYy5hcHBlbmRDaGlsZChmKTt2YXIgZz1kKGMpLGg9YS5wYWdlWS1nLnRvcCxpPWEucGFnZVgtZy5sZWZ0LGs9XCJzY2FsZShcIitjLmNsaWVudFdpZHRoLzEwMCoxMCtcIilcIjtcInRvdWNoZXNcImluIGEmJihoPWEudG91Y2hlc1swXS5wYWdlWS1nLnRvcCxpPWEudG91Y2hlc1swXS5wYWdlWC1nLmxlZnQpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIsRGF0ZS5ub3coKSksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjYWxlXCIsayksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIixpKSxmLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLGgpO3ZhciBsPXt0b3A6aCtcInB4XCIsbGVmdDppK1wicHhcIn07Zi5jbGFzc05hbWU9Zi5jbGFzc05hbWUrXCIgd2F2ZXMtbm90cmFuc2l0aW9uXCIsZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUobCkpLGYuY2xhc3NOYW1lPWYuY2xhc3NOYW1lLnJlcGxhY2UoXCJ3YXZlcy1ub3RyYW5zaXRpb25cIixcIlwiKSxsW1wiLXdlYmtpdC10cmFuc2Zvcm1cIl09ayxsW1wiLW1vei10cmFuc2Zvcm1cIl09ayxsW1wiLW1zLXRyYW5zZm9ybVwiXT1rLGxbXCItby10cmFuc2Zvcm1cIl09ayxsLnRyYW5zZm9ybT1rLGwub3BhY2l0eT1cIjFcIixsW1wiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcInRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixmLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZShsKSl9LGhpZGU6ZnVuY3Rpb24oYSl7ay50b3VjaHVwKGEpO3ZhciBiPXRoaXMsYz0oMS40KmIuY2xpZW50V2lkdGgsbnVsbCksZD1iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3YXZlcy1yaXBwbGVcIik7aWYoIShkLmxlbmd0aD4wKSlyZXR1cm4hMTtjPWRbZC5sZW5ndGgtMV07dmFyIGY9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiksZz1jLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSxoPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiKSxpPURhdGUubm93KCktTnVtYmVyKGMuZ2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIpKSxsPTM1MC1pO2w8MCYmKGw9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPXt0b3A6ZytcInB4XCIsbGVmdDpmK1wicHhcIixvcGFjaXR5OlwiMFwiLFwiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcInRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcIi13ZWJraXQtdHJhbnNmb3JtXCI6aCxcIi1tb3otdHJhbnNmb3JtXCI6aCxcIi1tcy10cmFuc2Zvcm1cIjpoLFwiLW8tdHJhbnNmb3JtXCI6aCx0cmFuc2Zvcm06aH07Yy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUoYSkpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cnl7Yi5yZW1vdmVDaGlsZChjKX1jYXRjaChhKXtyZXR1cm4hMX19LGouZHVyYXRpb24pfSxsKX0sd3JhcElucHV0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKFwiaW5wdXRcIj09PWMudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgZD1jLnBhcmVudE5vZGU7aWYoXCJpXCI9PT1kLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmZC5jbGFzc05hbWUuaW5kZXhPZihcIndhdmVzLWVmZmVjdFwiKSE9PS0xKWNvbnRpbnVlO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO2UuY2xhc3NOYW1lPWMuY2xhc3NOYW1lK1wiIHdhdmVzLWlucHV0LXdyYXBwZXJcIjt2YXIgZj1jLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO2Z8fChmPVwiXCIpLGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixmKSxjLmNsYXNzTmFtZT1cIndhdmVzLWJ1dHRvbi1pbnB1dFwiLGMucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZC5yZXBsYWNlQ2hpbGQoZSxjKSxlLmFwcGVuZENoaWxkKGMpfX19fSxrPXt0b3VjaGVzOjAsYWxsb3dFdmVudDpmdW5jdGlvbihhKXt2YXIgYj0hMDtyZXR1cm5cInRvdWNoc3RhcnRcIj09PWEudHlwZT9rLnRvdWNoZXMrPTE6XCJ0b3VjaGVuZFwiPT09YS50eXBlfHxcInRvdWNoY2FuY2VsXCI9PT1hLnR5cGU/c2V0VGltZW91dChmdW5jdGlvbigpe2sudG91Y2hlcz4wJiYoay50b3VjaGVzLT0xKX0sNTAwKTpcIm1vdXNlZG93blwiPT09YS50eXBlJiZrLnRvdWNoZXM+MCYmKGI9ITEpLGJ9LHRvdWNodXA6ZnVuY3Rpb24oYSl7ay5hbGxvd0V2ZW50KGEpfX07aC5kaXNwbGF5RWZmZWN0PWZ1bmN0aW9uKGIpe2I9Ynx8e30sXCJkdXJhdGlvblwiaW4gYiYmKGouZHVyYXRpb249Yi5kdXJhdGlvbiksai53cmFwSW5wdXQoaShcIi53YXZlcy1lZmZlY3RcIikpLFwib250b3VjaHN0YXJ0XCJpbiBhJiZkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZywhMSl9LGguYXR0YWNoPWZ1bmN0aW9uKGIpe1wiaW5wdXRcIj09PWIudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYoai53cmFwSW5wdXQoW2JdKSxiPWIucGFyZW50RWxlbWVudCksXCJvbnRvdWNoc3RhcnRcImluIGEmJmIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixnLCExKX0sYS5XYXZlcz1oLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtoLmRpc3BsYXlFZmZlY3QoKX0sITEpfSh3aW5kb3cpLE1hdGVyaWFsaXplLnRvYXN0PWZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihiLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKSxjKWZvcih2YXIgZT1jLnNwbGl0KFwiIFwiKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWIuY2xhc3NMaXN0LmFkZChlW2ZdKTsoXCJvYmplY3RcIj09dHlwZW9mIEhUTUxFbGVtZW50P2EgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDphJiZcIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9PWEmJjE9PT1hLm5vZGVUeXBlJiZcInN0cmluZ1wiPT10eXBlb2YgYS5ub2RlTmFtZSk/Yi5hcHBlbmRDaGlsZChhKTphIGluc3RhbmNlb2YgalF1ZXJ5P2IuYXBwZW5kQ2hpbGQoYVswXSk6Yi5pbm5lckhUTUw9YTt2YXIgaD1uZXcgSGFtbWVyKGIse3ByZXZlbnRfZGVmYXVsdDohMX0pO3JldHVybiBoLm9uKFwicGFuXCIsZnVuY3Rpb24oYSl7dmFyIGM9YS5kZWx0YVgsZD04MDtiLmNsYXNzTGlzdC5jb250YWlucyhcInBhbm5pbmdcIil8fGIuY2xhc3NMaXN0LmFkZChcInBhbm5pbmdcIik7dmFyIGU9MS1NYXRoLmFicyhjL2QpO2U8MCYmKGU9MCksVmVsKGIse2xlZnQ6YyxvcGFjaXR5OmV9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9KSxoLm9uKFwicGFuZW5kXCIsZnVuY3Rpb24oYSl7dmFyIGM9YS5kZWx0YVgsZT04MDtNYXRoLmFicyhjKT5lP1ZlbChiLHttYXJnaW5Ub3A6XCItNDBweFwifSx7ZHVyYXRpb246Mzc1LGVhc2luZzpcImVhc2VPdXRFeHBvXCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZkKCksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfX0pOihiLmNsYXNzTGlzdC5yZW1vdmUoXCJwYW5uaW5nXCIpLFZlbChiLHtsZWZ0OjAsb3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRFeHBvXCIscXVldWU6ITF9KSl9KSxifWM9Y3x8XCJcIjt2YXIgZj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvYXN0LWNvbnRhaW5lclwiKTtudWxsPT09ZiYmKGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmLmlkPVwidG9hc3QtY29udGFpbmVyXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKSk7dmFyIGc9ZShhKTthJiZmLmFwcGVuZENoaWxkKGcpLGcuc3R5bGUub3BhY2l0eT0wLFZlbChnLHt0cmFuc2xhdGVZOlwiLTM1cHhcIixvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIscXVldWU6ITF9KTt2YXIgaCxpPWI7bnVsbCE9aSYmKGg9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtudWxsPT09Zy5wYXJlbnROb2RlJiZ3aW5kb3cuY2xlYXJJbnRlcnZhbChoKSxnLmNsYXNzTGlzdC5jb250YWlucyhcInBhbm5pbmdcIil8fChpLT0yMCksaTw9MCYmKFZlbChnLHtvcGFjaXR5OjAsbWFyZ2luVG9wOlwiLTQwcHhcIn0se2R1cmF0aW9uOjM3NSxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCgpLHRoaXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzWzBdKX19KSx3aW5kb3cuY2xlYXJJbnRlcnZhbChoKSl9LDIwKSl9LGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXttZW51V2lkdGg6MzAwLGVkZ2U6XCJsZWZ0XCIsY2xvc2VPbkNsaWNrOiExLGRyYWdnYWJsZTohMH07Yj1hLmV4dGVuZChjLGIpLGEodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSxlPWEoXCIjXCIrZCk7MzAwIT1iLm1lbnVXaWR0aCYmZS5jc3MoXCJ3aWR0aFwiLGIubWVudVdpZHRoKTt2YXIgZj1hKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJytkKydcIl0nKTtiLmRyYWdnYWJsZT8oZi5sZW5ndGgmJmYucmVtb3ZlKCksZj1hKCc8ZGl2IGNsYXNzPVwiZHJhZy10YXJnZXRcIj48L2Rpdj4nKS5hdHRyKFwiZGF0YS1zaWRlbmF2XCIsZCksYShcImJvZHlcIikuYXBwZW5kKGYpKTpmPWEoKSxcImxlZnRcIj09Yi5lZGdlPyhlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgtMTAwJSlcIiksZi5jc3Moe2xlZnQ6MH0pKTooZS5hZGRDbGFzcyhcInJpZ2h0LWFsaWduZWRcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDEwMCUpXCIpLGYuY3NzKHtyaWdodDowfSkpLGUuaGFzQ2xhc3MoXCJmaXhlZFwiKSYmd2luZG93LmlubmVyV2lkdGg+OTkyJiZlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgwKVwiKSxlLmhhc0NsYXNzKFwiZml4ZWRcIikmJmEod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXt3aW5kb3cuaW5uZXJXaWR0aD45OTI/MCE9PWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLmxlbmd0aCYmaT9nKCEwKTplLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgwJSlcIik6aT09PSExJiYoXCJsZWZ0XCI9PT1iLmVkZ2U/ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoLTEwMCUpXCIpOmUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDEwMCUpXCIpKX0pLGIuY2xvc2VPbkNsaWNrPT09ITAmJmUub24oXCJjbGljay5pdGVtY2xpY2tcIixcImE6bm90KC5jb2xsYXBzaWJsZS1oZWFkZXIpXCIsZnVuY3Rpb24oKXtnKCl9KTt2YXIgZz1mdW5jdGlvbihjKXtoPSExLGk9ITEsYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxhKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pLFwibGVmdFwiPT09Yi5lZGdlPyhmLmNzcyh7d2lkdGg6XCJcIixyaWdodDpcIlwiLGxlZnQ6XCIwXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiLTEwMCVcIn0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2M9PT0hMCYmKGUucmVtb3ZlQXR0cihcInN0eWxlXCIpLGUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCkpfX0pKTooZi5jc3Moe3dpZHRoOlwiXCIscmlnaHQ6XCIwXCIsbGVmdDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIjEwMCVcIn0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2M9PT0hMCYmKGUucmVtb3ZlQXR0cihcInN0eWxlXCIpLGUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCkpfX0pKX0saD0hMSxpPSExO2IuZHJhZ2dhYmxlJiYoZi5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtpJiZnKCl9KSxmLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGMpe2lmKFwidG91Y2hcIj09Yy5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZD0oYy5nZXN0dXJlLmRpcmVjdGlvbixjLmdlc3R1cmUuY2VudGVyLngpLGY9KGMuZ2VzdHVyZS5jZW50ZXIueSxjLmdlc3R1cmUudmVsb2NpdHlYLGEoXCJib2R5XCIpKSxoPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGo9Zi5pbm5lcldpZHRoKCk7aWYoZi5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGYud2lkdGgoaiksMD09PWgubGVuZ3RoJiYoaD1hKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+JyksaC5jc3MoXCJvcGFjaXR5XCIsMCkuY2xpY2soZnVuY3Rpb24oKXtnKCl9KSxhKFwiYm9keVwiKS5hcHBlbmQoaCkpLFwibGVmdFwiPT09Yi5lZGdlJiYoZD5iLm1lbnVXaWR0aD9kPWIubWVudVdpZHRoOmQ8MCYmKGQ9MCkpLFwibGVmdFwiPT09Yi5lZGdlKWQ8Yi5tZW51V2lkdGgvMj9pPSExOmQ+PWIubWVudVdpZHRoLzImJihpPSEwKSxlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIisoZC1iLm1lbnVXaWR0aCkrXCJweClcIik7ZWxzZXtkPHdpbmRvdy5pbm5lcldpZHRoLWIubWVudVdpZHRoLzI/aT0hMDpkPj13aW5kb3cuaW5uZXJXaWR0aC1iLm1lbnVXaWR0aC8yJiYoaT0hMSk7dmFyIGs9ZC1iLm1lbnVXaWR0aC8yO2s8MCYmKGs9MCksZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoXCIraytcInB4KVwiKX12YXIgbDtcImxlZnRcIj09PWIuZWRnZT8obD1kL2IubWVudVdpZHRoLGgudmVsb2NpdHkoe29wYWNpdHk6bH0se2R1cmF0aW9uOjEwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSk6KGw9TWF0aC5hYnMoKGQtd2luZG93LmlubmVyV2lkdGgpL2IubWVudVdpZHRoKSxoLnZlbG9jaXR5KHtvcGFjaXR5Omx9LHtkdXJhdGlvbjoxMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihjKXtpZihcInRvdWNoXCI9PWMuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGQ9YShcIiNzaWRlbmF2LW92ZXJsYXlcIiksZz1jLmdlc3R1cmUudmVsb2NpdHlYLGo9Yy5nZXN0dXJlLmNlbnRlci54LGs9ai1iLm1lbnVXaWR0aCxsPWotYi5tZW51V2lkdGgvMjtrPjAmJihrPTApLGw8MCYmKGw9MCksaD0hMSxcImxlZnRcIj09PWIuZWRnZT9pJiZnPD0uM3x8ZzwtLjU/KDAhPT1rJiZlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGtdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6MCxsZWZ0OlwiXCJ9KSxpPSEwKTooIWl8fGc+LjMpJiYoYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlstMSpiLm1lbnVXaWR0aC0xMCxrXX0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pLGYuY3NzKHt3aWR0aDpcIjEwcHhcIixyaWdodDpcIlwiLGxlZnQ6MH0pKTppJiZnPj0tLjN8fGc+LjU/KDAhPT1sJiZlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGxdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6XCJcIixsZWZ0OjB9KSxpPSEwKTooIWl8fGc8LS4zKSYmKGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbYi5tZW51V2lkdGgrMTAsbF19LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxmLmNzcyh7d2lkdGg6XCIxMHB4XCIscmlnaHQ6MCxsZWZ0OlwiXCJ9KSl9fSkpLGMub2ZmKFwiY2xpY2suc2lkZW5hdlwiKS5vbihcImNsaWNrLnNpZGVuYXZcIixmdW5jdGlvbigpe2lmKGk9PT0hMClpPSExLGg9ITEsZygpO2Vsc2V7dmFyIGM9YShcImJvZHlcIiksZD1hKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyksaj1jLmlubmVyV2lkdGgoKTtjLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksYy53aWR0aChqKSxhKFwiYm9keVwiKS5hcHBlbmQoZiksXCJsZWZ0XCI9PT1iLmVkZ2U/KGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OjAsbGVmdDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCwtMSpiLm1lbnVXaWR0aF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKTooZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6XCJcIixsZWZ0OjB9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGIubWVudVdpZHRoXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpLGQuY3NzKFwib3BhY2l0eVwiLDApLmNsaWNrKGZ1bmN0aW9uKCl7aT0hMSxoPSExLGcoKSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSl9KSxhKFwiYm9keVwiKS5hcHBlbmQoZCksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtpPSEwLGg9ITF9fSl9cmV0dXJuITF9KX0pfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGI9YShcIiNzaWRlbmF2LW92ZXJsYXlcIiksYz1hKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJythKHRoaXMpLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSsnXCJdJyk7Yi50cmlnZ2VyKFwiY2xpY2tcIiksYy5yZW1vdmUoKSxhKHRoaXMpLm9mZihcImNsaWNrXCIpLGIucmVtb3ZlKCl9LHNob3c6ZnVuY3Rpb24oKXt0aGlzLnRyaWdnZXIoXCJjbGlja1wiKX0saGlkZTpmdW5jdGlvbigpe2EoXCIjc2lkZW5hdi1vdmVybGF5XCIpLnRyaWdnZXIoXCJjbGlja1wiKX19O2EuZm4uc2lkZU5hdj1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc2lkZU5hdlwiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIsYyxkLGUpe3ZhciBnPWEoKTtyZXR1cm4gYS5lYWNoKGYsZnVuY3Rpb24oYSxmKXtpZihmLmhlaWdodCgpPjApe3ZhciBoPWYub2Zmc2V0KCkudG9wLGk9Zi5vZmZzZXQoKS5sZWZ0LGo9aStmLndpZHRoKCksaz1oK2YuaGVpZ2h0KCksbD0hKGk+Y3x8ajxlfHxoPmR8fGs8Yik7bCYmZy5wdXNoKGYpfX0pLGd9ZnVuY3Rpb24gYyhjKXsrK2k7dmFyIGQ9ZS5zY3JvbGxUb3AoKSxmPWUuc2Nyb2xsTGVmdCgpLGg9ZitlLndpZHRoKCksaz1kK2UuaGVpZ2h0KCksbD1iKGQrai50b3ArY3x8MjAwLGgrai5yaWdodCxrK2ouYm90dG9tLGYrai5sZWZ0KTthLmVhY2gobCxmdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiKTtcIm51bWJlclwiIT10eXBlb2YgYyYmYi50cmlnZ2VySGFuZGxlcihcInNjcm9sbFNweTplbnRlclwiKSxiLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIixpKX0pLGEuZWFjaChnLGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIpO1wibnVtYmVyXCI9PXR5cGVvZiBjJiZjIT09aSYmKGIudHJpZ2dlckhhbmRsZXIoXCJzY3JvbGxTcHk6ZXhpdFwiKSxiLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIixudWxsKSl9KSxnPWx9ZnVuY3Rpb24gZCgpe2UudHJpZ2dlcihcInNjcm9sbFNweTp3aW5TaXplXCIpfXZhciBlPWEod2luZG93KSxmPVtdLGc9W10saD0hMSxpPTAsaj17dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9O2Euc2Nyb2xsU3B5PWZ1bmN0aW9uKGIsZCl7dmFyIGc9e3Rocm90dGxlOjEwMCxzY3JvbGxPZmZzZXQ6MjAwfTtkPWEuZXh0ZW5kKGcsZCk7dmFyIGk9W107Yj1hKGIpLGIuZWFjaChmdW5jdGlvbihiLGMpe2YucHVzaChhKGMpKSxhKGMpLmRhdGEoXCJzY3JvbGxTcHk6aWRcIixiKSxhKCdhW2hyZWY9XCIjJythKGMpLmF0dHIoXCJpZFwiKSsnXCJdJykuY2xpY2soZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBjPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5vZmZzZXQoKS50b3ArMTthKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6Yy1kLnNjcm9sbE9mZnNldH0se2R1cmF0aW9uOjQwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIn0pfSl9KSxqLnRvcD1kLm9mZnNldFRvcHx8MCxqLnJpZ2h0PWQub2Zmc2V0UmlnaHR8fDAsai5ib3R0b209ZC5vZmZzZXRCb3R0b218fDAsai5sZWZ0PWQub2Zmc2V0TGVmdHx8MDt2YXIgaz1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2MoZC5zY3JvbGxPZmZzZXQpfSxkLnRocm90dGxlfHwxMDApLGw9ZnVuY3Rpb24oKXthKGRvY3VtZW50KS5yZWFkeShrKX07cmV0dXJuIGh8fChlLm9uKFwic2Nyb2xsXCIsbCksZS5vbihcInJlc2l6ZVwiLGwpLGg9ITApLHNldFRpbWVvdXQobCwwKSxiLm9uKFwic2Nyb2xsU3B5OmVudGVyXCIsZnVuY3Rpb24oKXtpPWEuZ3JlcChpLGZ1bmN0aW9uKGEpe3JldHVybiAwIT1hLmhlaWdodCgpfSk7dmFyIGI9YSh0aGlzKTtpWzBdPyhhKCdhW2hyZWY9XCIjJytpWzBdLmF0dHIoXCJpZFwiKSsnXCJdJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYi5kYXRhKFwic2Nyb2xsU3B5OmlkXCIpPGlbMF0uZGF0YShcInNjcm9sbFNweTppZFwiKT9pLnVuc2hpZnQoYSh0aGlzKSk6aS5wdXNoKGEodGhpcykpKTppLnB1c2goYSh0aGlzKSksYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksYi5vbihcInNjcm9sbFNweTpleGl0XCIsZnVuY3Rpb24oKXtpZihpPWEuZ3JlcChpLGZ1bmN0aW9uKGEpe3JldHVybiAwIT1hLmhlaWdodCgpfSksaVswXSl7YSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBiPWEodGhpcyk7aT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gYS5hdHRyKFwiaWRcIikhPWIuYXR0cihcImlkXCIpfSksaVswXSYmYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpfX0pLGJ9LGEud2luU2l6ZVNweT1mdW5jdGlvbihiKXtyZXR1cm4gYS53aW5TaXplU3B5PWZ1bmN0aW9uKCl7cmV0dXJuIGV9LGI9Ynx8e3Rocm90dGxlOjEwMH0sZS5vbihcInJlc2l6ZVwiLE1hdGVyaWFsaXplLnRocm90dGxlKGQsYi50aHJvdHRsZXx8MTAwKSl9LGEuZm4uc2Nyb2xsU3B5PWZ1bmN0aW9uKGIpe3JldHVybiBhLnNjcm9sbFNweShhKHRoaXMpLGIpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7dmFyIGM9Yi5jc3MoXCJmb250LWZhbWlseVwiKSxkPWIuY3NzKFwiZm9udC1zaXplXCIpLGY9Yi5jc3MoXCJsaW5lLWhlaWdodFwiKTtkJiZlLmNzcyhcImZvbnQtc2l6ZVwiLGQpLGMmJmUuY3NzKFwiZm9udC1mYW1pbHlcIixjKSxmJiZlLmNzcyhcImxpbmUtaGVpZ2h0XCIsZiksXCJvZmZcIj09PWIuYXR0cihcIndyYXBcIikmJmUuY3NzKFwib3ZlcmZsb3ctd3JhcFwiLFwibm9ybWFsXCIpLmNzcyhcIndoaXRlLXNwYWNlXCIsXCJwcmVcIiksZS50ZXh0KGIudmFsKCkrXCJcXG5cIik7dmFyIGc9ZS5odG1sKCkucmVwbGFjZSgvXFxuL2csXCI8YnI+XCIpO2UuaHRtbChnKSxiLmlzKFwiOnZpc2libGVcIik/ZS5jc3MoXCJ3aWR0aFwiLGIud2lkdGgoKSk6ZS5jc3MoXCJ3aWR0aFwiLGEod2luZG93KS53aWR0aCgpLzIpLGIuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKTw9ZS5oZWlnaHQoKT9iLmNzcyhcImhlaWdodFwiLGUuaGVpZ2h0KCkpOmIudmFsKCkubGVuZ3RoPGIuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiKSYmYi5jc3MoXCJoZWlnaHRcIixiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIikpLGIuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiLGIudmFsKCkubGVuZ3RoKX1NYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzPWZ1bmN0aW9uKCl7dmFyIGI9XCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWFcIjthKGIpLmVhY2goZnVuY3Rpb24oYixjKXt2YXIgZD1hKHRoaXMpO2EoYykudmFsKCkubGVuZ3RoPjB8fGMuYXV0b2ZvY3VzfHx2b2lkIDAhPT1kLmF0dHIoXCJwbGFjZWhvbGRlclwiKT9kLnNpYmxpbmdzKFwibGFiZWxcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik6YShjKVswXS52YWxpZGl0eT9kLnNpYmxpbmdzKFwibGFiZWxcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIixhKGMpWzBdLnZhbGlkaXR5LmJhZElucHV0PT09ITApOmQuc2libGluZ3MoXCJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pfTt2YXIgYz1cImlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYVwiO2EoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsYyxmdW5jdGlvbigpezA9PT1hKHRoaXMpLnZhbCgpLmxlbmd0aCYmdm9pZCAwPT09YSh0aGlzKS5hdHRyKFwicGxhY2Vob2xkZXJcIil8fGEodGhpcykuc2libGluZ3MoXCJsYWJlbFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSx2YWxpZGF0ZV9maWVsZChhKHRoaXMpKX0pLGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7TWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcygpfSksYShkb2N1bWVudCkub24oXCJyZXNldFwiLGZ1bmN0aW9uKGIpe3ZhciBkPWEoYi50YXJnZXQpO2QuaXMoXCJmb3JtXCIpJiYoZC5maW5kKGMpLnJlbW92ZUNsYXNzKFwidmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLGQuZmluZChjKS5lYWNoKGZ1bmN0aW9uKCl7XCJcIj09PWEodGhpcykuYXR0cihcInZhbHVlXCIpJiZhKHRoaXMpLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxkLmZpbmQoXCJzZWxlY3QuaW5pdGlhbGl6ZWRcIikuZWFjaChmdW5jdGlvbigpe3ZhciBhPWQuZmluZChcIm9wdGlvbltzZWxlY3RlZF1cIikudGV4dCgpO2Quc2libGluZ3MoXCJpbnB1dC5zZWxlY3QtZHJvcGRvd25cIikudmFsKGEpfSkpfSksYShkb2N1bWVudCkub24oXCJmb2N1c1wiLGMsZnVuY3Rpb24oKXthKHRoaXMpLnNpYmxpbmdzKFwibGFiZWwsIC5wcmVmaXhcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSxhKGRvY3VtZW50KS5vbihcImJsdXJcIixjLGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPVwiLnByZWZpeFwiOzA9PT1iLnZhbCgpLmxlbmd0aCYmYlswXS52YWxpZGl0eS5iYWRJbnB1dCE9PSEwJiZ2b2lkIDA9PT1iLmF0dHIoXCJwbGFjZWhvbGRlclwiKSYmKGMrPVwiLCBsYWJlbFwiKSxiLnNpYmxpbmdzKGMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHZhbGlkYXRlX2ZpZWxkKGIpfSksd2luZG93LnZhbGlkYXRlX2ZpZWxkPWZ1bmN0aW9uKGEpe3ZhciBiPXZvaWQgMCE9PWEuYXR0cihcImRhdGEtbGVuZ3RoXCIpLGM9cGFyc2VJbnQoYS5hdHRyKFwiZGF0YS1sZW5ndGhcIikpLGQ9YS52YWwoKS5sZW5ndGg7MD09PWEudmFsKCkubGVuZ3RoJiZhWzBdLnZhbGlkaXR5LmJhZElucHV0PT09ITE/YS5oYXNDbGFzcyhcInZhbGlkYXRlXCIpJiYoYS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGEucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpKTphLmhhc0NsYXNzKFwidmFsaWRhdGVcIikmJihhLmlzKFwiOnZhbGlkXCIpJiZiJiZkPD1jfHxhLmlzKFwiOnZhbGlkXCIpJiYhYj8oYS5yZW1vdmVDbGFzcyhcImludmFsaWRcIiksYS5hZGRDbGFzcyhcInZhbGlkXCIpKTooYS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGEuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpKSl9O3ZhciBkPVwiaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdXCI7YShkb2N1bWVudCkub24oXCJrZXl1cC5yYWRpb1wiLGQsZnVuY3Rpb24oYil7aWYoOT09PWIud2hpY2gpe2EodGhpcykuYWRkQ2xhc3MoXCJ0YWJiZWRcIik7dmFyIGM9YSh0aGlzKTtyZXR1cm4gdm9pZCBjLm9uZShcImJsdXJcIixmdW5jdGlvbihiKXthKHRoaXMpLnJlbW92ZUNsYXNzKFwidGFiYmVkXCIpfSl9fSk7dmFyIGU9YShcIi5oaWRkZW5kaXZcIikuZmlyc3QoKTtlLmxlbmd0aHx8KGU9YSgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKSxhKFwiYm9keVwiKS5hcHBlbmQoZSkpO3ZhciBmPVwiLm1hdGVyaWFsaXplLXRleHRhcmVhXCI7YShmKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIixiLmhlaWdodCgpKSxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIixiLnZhbCgpLmxlbmd0aCl9KSxhKFwiYm9keVwiKS5vbihcImtleXVwIGtleWRvd24gYXV0b3Jlc2l6ZVwiLGYsZnVuY3Rpb24oKXtiKGEodGhpcykpfSksYShkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwnLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1cImZpbGVcIl0nLGZ1bmN0aW9uKCl7Zm9yKHZhciBiPWEodGhpcykuY2xvc2VzdChcIi5maWxlLWZpZWxkXCIpLGM9Yi5maW5kKFwiaW5wdXQuZmlsZS1wYXRoXCIpLGQ9YSh0aGlzKVswXS5maWxlcyxlPVtdLGY9MDtmPGQubGVuZ3RoO2YrKyllLnB1c2goZFtmXS5uYW1lKTtjLnZhbChlLmpvaW4oXCIsIFwiKSksYy50cmlnZ2VyKFwiY2hhbmdlXCIpfSk7dmFyIGc9XCJpbnB1dFt0eXBlPXJhbmdlXVwiLGg9ITE7YShnKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO2EodGhpcykuYWZ0ZXIoYil9KTt2YXIgaT1mdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLnBhcmVudCgpLmNzcyhcInBhZGRpbmctbGVmdFwiKSksYz0tNytiK1wicHhcIjthLnZlbG9jaXR5KHtoZWlnaHQ6XCIzMHB4XCIsd2lkdGg6XCIzMHB4XCIsdG9wOlwiLTMwcHhcIixtYXJnaW5MZWZ0OmN9LHtkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEV4cG9cIn0pfSxqPWZ1bmN0aW9uKGEpe3ZhciBiPWEud2lkdGgoKS0xNSxjPXBhcnNlRmxvYXQoYS5hdHRyKFwibWF4XCIpKSxkPXBhcnNlRmxvYXQoYS5hdHRyKFwibWluXCIpKSxlPShwYXJzZUZsb2F0KGEudmFsKCkpLWQpLyhjLWQpO3JldHVybiBlKmJ9LGs9XCIucmFuZ2UtZmllbGRcIjthKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLGcsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5zaWJsaW5ncyhcIi50aHVtYlwiKTtjLmZpbmQoXCIudmFsdWVcIikuaHRtbChhKHRoaXMpLnZhbCgpKSxjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpO3ZhciBkPWooYSh0aGlzKSk7Yy5hZGRDbGFzcyhcImFjdGl2ZVwiKS5jc3MoXCJsZWZ0XCIsZCl9KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsZyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLnNpYmxpbmdzKFwiLnRodW1iXCIpO2lmKGMubGVuZ3RoPD0wJiYoYz1hKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+JyksYSh0aGlzKS5hZnRlcihjKSksYy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYSh0aGlzKS52YWwoKSksaD0hMCxhKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyksXCJpbnB1dFwiIT09Yi50eXBlKXt2YXIgZD1qKGEodGhpcykpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGQpfX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2V1cCB0b3VjaGVuZFwiLGssZnVuY3Rpb24oKXtoPSExLGEodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxhKGRvY3VtZW50KS5vbihcImlucHV0IG1vdXNlbW92ZSB0b3VjaG1vdmVcIixrLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2hpbGRyZW4oXCIudGh1bWJcIiksZD1hKHRoaXMpLmZpbmQoZyk7aWYoaCl7Yy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKTt2YXIgZT1qKGQpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGUpLGMuZmluZChcIi52YWx1ZVwiKS5odG1sKGMuc2libGluZ3MoZykudmFsKCkpfX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2VvdXQgdG91Y2hsZWF2ZVwiLGssZnVuY3Rpb24oKXtpZighaCl7dmFyIGI9YSh0aGlzKS5jaGlsZHJlbihcIi50aHVtYlwiKSxjPXBhcnNlSW50KGEodGhpcykuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSxkPTcrYytcInB4XCI7Yi5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmYi52ZWxvY2l0eSh7aGVpZ2h0OlwiMFwiLHdpZHRoOlwiMFwiLHRvcDpcIjEwcHhcIixtYXJnaW5MZWZ0OmR9LHtkdXJhdGlvbjoxMDB9KSxiLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfX0pLGEuZm4uYXV0b2NvbXBsZXRlPWZ1bmN0aW9uKGIpe3ZhciBjPXtkYXRhOnt9LGxpbWl0OjEvMCxvbkF1dG9jb21wbGV0ZTpudWxsLG1pbkxlbmd0aDoxfTtyZXR1cm4gYj1hLmV4dGVuZChjLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjLGQ9YSh0aGlzKSxlPWIuZGF0YSxmPTAsZz0tMSxoPWQuY2xvc2VzdChcIi5pbnB1dC1maWVsZFwiKTtpZighYS5pc0VtcHR5T2JqZWN0KGUpKXt2YXIgaSxqPWEoJzx1bCBjbGFzcz1cImF1dG9jb21wbGV0ZS1jb250ZW50IGRyb3Bkb3duLWNvbnRlbnRcIj48L3VsPicpO2gubGVuZ3RoPyhpPWguY2hpbGRyZW4oXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5maXJzdCgpLGkubGVuZ3RofHxoLmFwcGVuZChqKSk6KGk9ZC5uZXh0KFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIiksaS5sZW5ndGh8fGQuYWZ0ZXIoaikpLGkubGVuZ3RoJiYoaj1pKTt2YXIgaz1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZmluZChcImltZ1wiKSxkPWIudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIlwiK2EudG9Mb3dlckNhc2UoKSksZT1kK2EubGVuZ3RoLTEsZj1iLnRleHQoKS5zbGljZSgwLGQpLGc9Yi50ZXh0KCkuc2xpY2UoZCxlKzEpLGg9Yi50ZXh0KCkuc2xpY2UoZSsxKTtiLmh0bWwoXCI8c3Bhbj5cIitmK1wiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIrZytcIjwvc3Bhbj5cIitoK1wiPC9zcGFuPlwiKSxjLmxlbmd0aCYmYi5wcmVwZW5kKGMpfSxsPWZ1bmN0aW9uKCl7Zz0tMSxqLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSxtPWZ1bmN0aW9uKCl7ai5lbXB0eSgpLGwoKSxjPXZvaWQgMH07ZC5vZmYoXCJibHVyLmF1dG9jb21wbGV0ZVwiKS5vbihcImJsdXIuYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oKXttKCl9KSxkLm9mZihcImtleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGVcIikub24oXCJrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oZyl7Zj0wO3ZhciBoPWQudmFsKCkudG9Mb3dlckNhc2UoKTtpZigxMyE9PWcud2hpY2gmJjM4IT09Zy53aGljaCYmNDAhPT1nLndoaWNoKXtpZihjIT09aCYmKG0oKSxoLmxlbmd0aD49Yi5taW5MZW5ndGgpKWZvcih2YXIgaSBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkoaSkmJmkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGgpIT09LTEmJmkudG9Mb3dlckNhc2UoKSE9PWgpe2lmKGY+PWIubGltaXQpYnJlYWs7dmFyIGw9YShcIjxsaT48L2xpPlwiKTtlW2ldP2wuYXBwZW5kKCc8aW1nIHNyYz1cIicrZVtpXSsnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nK2krXCI8L3NwYW4+XCIpOmwuYXBwZW5kKFwiPHNwYW4+XCIraStcIjwvc3Bhbj5cIiksai5hcHBlbmQobCksayhoLGwpLGYrK31jPWh9fSksZC5vZmYoXCJrZXlkb3duLmF1dG9jb21wbGV0ZVwiKS5vbihcImtleWRvd24uYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oYSl7dmFyIGIsYz1hLndoaWNoLGQ9ai5jaGlsZHJlbihcImxpXCIpLmxlbmd0aCxlPWouY2hpbGRyZW4oXCIuYWN0aXZlXCIpLmZpcnN0KCk7cmV0dXJuIDEzPT09YyYmZz49MD8oYj1qLmNoaWxkcmVuKFwibGlcIikuZXEoZyksdm9pZChiLmxlbmd0aCYmKGIudHJpZ2dlcihcIm1vdXNlZG93bi5hdXRvY29tcGxldGVcIiksYS5wcmV2ZW50RGVmYXVsdCgpKSkpOnZvaWQoMzghPT1jJiY0MCE9PWN8fChhLnByZXZlbnREZWZhdWx0KCksXG4zOD09PWMmJmc+MCYmZy0tLDQwPT09YyYmZzxkLTEmJmcrKyxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGc+PTAmJmouY2hpbGRyZW4oXCJsaVwiKS5lcShnKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSkpfSksai5vbihcIm1vdXNlZG93bi5hdXRvY29tcGxldGUgdG91Y2hzdGFydC5hdXRvY29tcGxldGVcIixcImxpXCIsZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLnRleHQoKS50cmltKCk7ZC52YWwoYyksZC50cmlnZ2VyKFwiY2hhbmdlXCIpLG0oKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQXV0b2NvbXBsZXRlJiZiLm9uQXV0b2NvbXBsZXRlLmNhbGwodGhpcyxjKX0pfX0pfX0pLGEuZm4ubWF0ZXJpYWxfc2VsZWN0PWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYSxiLGMpe3ZhciBlPWEuaW5kZXhPZihiKSxmPWU9PT0tMTtyZXR1cm4gZj9hLnB1c2goYik6YS5zcGxpY2UoZSwxKSxjLnNpYmxpbmdzKFwidWwuZHJvcGRvd24tY29udGVudFwiKS5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZXEoYikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiksYy5maW5kKFwib3B0aW9uXCIpLmVxKGIpLnByb3AoXCJzZWxlY3RlZFwiLGYpLGQoYSxjKSxmfWZ1bmN0aW9uIGQoYSxiKXtmb3IodmFyIGM9XCJcIixkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKXt2YXIgZj1iLmZpbmQoXCJvcHRpb25cIikuZXEoYVtkXSkudGV4dCgpO2MrPTA9PT1kP2Y6XCIsIFwiK2Z9XCJcIj09PWMmJihjPWIuZmluZChcIm9wdGlvbjpkaXNhYmxlZFwiKS5lcSgwKS50ZXh0KCkpLGIuc2libGluZ3MoXCJpbnB1dC5zZWxlY3QtZHJvcGRvd25cIikudmFsKGMpfWEodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyk7aWYoIWQuaGFzQ2xhc3MoXCJicm93c2VyLWRlZmF1bHRcIikpe3ZhciBlPSEhZC5hdHRyKFwibXVsdGlwbGVcIiksZj1kLmRhdGEoXCJzZWxlY3QtaWRcIik7aWYoZiYmKGQucGFyZW50KCkuZmluZChcInNwYW4uY2FyZXRcIikucmVtb3ZlKCksZC5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikucmVtb3ZlKCksZC51bndyYXAoKSxhKFwidWwjc2VsZWN0LW9wdGlvbnMtXCIrZikucmVtb3ZlKCkpLFwiZGVzdHJveVwiPT09YilyZXR1cm4gdm9pZCBkLmRhdGEoXCJzZWxlY3QtaWRcIixudWxsKS5yZW1vdmVDbGFzcyhcImluaXRpYWxpemVkXCIpO3ZhciBnPU1hdGVyaWFsaXplLmd1aWQoKTtkLmRhdGEoXCJzZWxlY3QtaWRcIixnKTt2YXIgaD1hKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj48L2Rpdj4nKTtoLmFkZENsYXNzKGQuYXR0cihcImNsYXNzXCIpKTt2YXIgaT1hKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nK2crJ1wiIGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBzZWxlY3QtZHJvcGRvd24gJysoZT9cIm11bHRpcGxlLXNlbGVjdC1kcm9wZG93blwiOlwiXCIpKydcIj48L3VsPicpLGo9ZC5jaGlsZHJlbihcIm9wdGlvbiwgb3B0Z3JvdXBcIiksaz1bXSxsPSExLG09ZC5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLmh0bWwoKXx8ZC5maW5kKFwib3B0aW9uOmZpcnN0XCIpLmh0bWwoKXx8XCJcIixuPWZ1bmN0aW9uKGIsYyxkKXt2YXIgZj1jLmlzKFwiOmRpc2FibGVkXCIpP1wiZGlzYWJsZWQgXCI6XCJcIixnPVwib3B0Z3JvdXAtb3B0aW9uXCI9PT1kP1wib3B0Z3JvdXAtb3B0aW9uIFwiOlwiXCIsaD1lPyc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCInK2YrXCIvPjxsYWJlbD48L2xhYmVsPlwiOlwiXCIsaj1jLmRhdGEoXCJpY29uXCIpLGs9Yy5hdHRyKFwiY2xhc3NcIik7aWYoail7dmFyIGw9XCJcIjtyZXR1cm4gayYmKGw9JyBjbGFzcz1cIicraysnXCInKSxpLmFwcGVuZChhKCc8bGkgY2xhc3M9XCInK2YrZysnXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInK2orJ1wiJytsK1wiPjxzcGFuPlwiK2grYy5odG1sKCkrXCI8L3NwYW4+PC9saT5cIikpLCEwfWkuYXBwZW5kKGEoJzxsaSBjbGFzcz1cIicrZitnKydcIj48c3Bhbj4nK2grYy5odG1sKCkrXCI8L3NwYW4+PC9saT5cIikpfTtqLmxlbmd0aCYmai5lYWNoKGZ1bmN0aW9uKCl7aWYoYSh0aGlzKS5pcyhcIm9wdGlvblwiKSllP24oZCxhKHRoaXMpLFwibXVsdGlwbGVcIik6bihkLGEodGhpcykpO2Vsc2UgaWYoYSh0aGlzKS5pcyhcIm9wdGdyb3VwXCIpKXt2YXIgYj1hKHRoaXMpLmNoaWxkcmVuKFwib3B0aW9uXCIpO2kuYXBwZW5kKGEoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JythKHRoaXMpLmF0dHIoXCJsYWJlbFwiKStcIjwvc3Bhbj48L2xpPlwiKSksYi5lYWNoKGZ1bmN0aW9uKCl7bihkLGEodGhpcyksXCJvcHRncm91cC1vcHRpb25cIil9KX19KSxpLmZpbmQoXCJsaTpub3QoLm9wdGdyb3VwKVwiKS5lYWNoKGZ1bmN0aW9uKGYpe2EodGhpcykuY2xpY2soZnVuY3Rpb24oZyl7aWYoIWEodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSYmIWEodGhpcykuaGFzQ2xhc3MoXCJvcHRncm91cFwiKSl7dmFyIGg9ITA7ZT8oYSgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyx0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIWJ9KSxoPWMoayxmLGQpLHEudHJpZ2dlcihcImZvY3VzXCIpKTooaS5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYSh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxxLnZhbChhKHRoaXMpLnRleHQoKSkpLHIoaSxhKHRoaXMpKSxkLmZpbmQoXCJvcHRpb25cIikuZXEoZikucHJvcChcInNlbGVjdGVkXCIsaCksZC50cmlnZ2VyKFwiY2hhbmdlXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiJiZiKCl9Zy5zdG9wUHJvcGFnYXRpb24oKX0pfSksZC53cmFwKGgpO3ZhciBvPWEoJzxzcGFuIGNsYXNzPVwiY2FyZXRcIj4mIzk2NjA7PC9zcGFuPicpO2QuaXMoXCI6ZGlzYWJsZWRcIikmJm8uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTt2YXIgcD1tLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikscT1hKCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlbGVjdC1kcm9wZG93blwiIHJlYWRvbmx5PVwidHJ1ZVwiICcrKGQuaXMoXCI6ZGlzYWJsZWRcIik/XCJkaXNhYmxlZFwiOlwiXCIpKycgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nK2crJ1wiIHZhbHVlPVwiJytwKydcIi8+Jyk7ZC5iZWZvcmUocSkscS5iZWZvcmUobykscS5hZnRlcihpKSxkLmlzKFwiOmRpc2FibGVkXCIpfHxxLmRyb3Bkb3duKHtob3ZlcjohMX0pLGQuYXR0cihcInRhYmluZGV4XCIpJiZhKHFbMF0pLmF0dHIoXCJ0YWJpbmRleFwiLGQuYXR0cihcInRhYmluZGV4XCIpKSxkLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIikscS5vbih7Zm9jdXM6ZnVuY3Rpb24oKXtpZihhKFwidWwuc2VsZWN0LWRyb3Bkb3duXCIpLm5vdChpWzBdKS5pcyhcIjp2aXNpYmxlXCIpJiZhKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnRyaWdnZXIoXCJjbG9zZVwiKSwhaS5pcyhcIjp2aXNpYmxlXCIpKXthKHRoaXMpLnRyaWdnZXIoXCJvcGVuXCIsW1wiZm9jdXNcIl0pO3ZhciBiPWEodGhpcykudmFsKCk7ZSYmYi5pbmRleE9mKFwiLFwiKT49MCYmKGI9Yi5zcGxpdChcIixcIilbMF0pO3ZhciBjPWkuZmluZChcImxpXCIpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiBhKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSlbMF07cihpLGMsITApfX0sY2xpY2s6ZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX19KSxxLm9uKFwiYmx1clwiLGZ1bmN0aW9uKCl7ZXx8YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VcIiksaS5maW5kKFwibGkuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKX0pLGkuaG92ZXIoZnVuY3Rpb24oKXtsPSEwfSxmdW5jdGlvbigpe2w9ITF9KSxhKHdpbmRvdykub24oe2NsaWNrOmZ1bmN0aW9uKCl7ZSYmKGx8fHEudHJpZ2dlcihcImNsb3NlXCIpKX19KSxlJiZkLmZpbmQoXCJvcHRpb246c2VsZWN0ZWQ6bm90KDpkaXNhYmxlZClcIikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuaW5kZXgoKTtjKGssYixkKSxpLmZpbmQoXCJsaVwiKS5lcShiKS5maW5kKFwiOmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsITApfSk7dmFyIHI9ZnVuY3Rpb24oYixjLGQpe2lmKGMpe2IuZmluZChcImxpLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7dmFyIGY9YShjKTtmLmFkZENsYXNzKFwic2VsZWN0ZWRcIiksZSYmIWR8fGkuc2Nyb2xsVG8oZil9fSxzPVtdLHQ9ZnVuY3Rpb24oYil7aWYoOT09Yi53aGljaClyZXR1cm4gdm9pZCBxLnRyaWdnZXIoXCJjbG9zZVwiKTtpZig0MD09Yi53aGljaCYmIWkuaXMoXCI6dmlzaWJsZVwiKSlyZXR1cm4gdm9pZCBxLnRyaWdnZXIoXCJvcGVuXCIpO2lmKDEzIT1iLndoaWNofHxpLmlzKFwiOnZpc2libGVcIikpe2IucHJldmVudERlZmF1bHQoKTt2YXIgYz1TdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpLnRvTG93ZXJDYXNlKCksZD1bOSwxMywyNywzOCw0MF07aWYoYyYmZC5pbmRleE9mKGIud2hpY2gpPT09LTEpe3MucHVzaChjKTt2YXIgZj1zLmpvaW4oXCJcIiksZz1pLmZpbmQoXCJsaVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gMD09PWEodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmKX0pWzBdO2cmJnIoaSxnKX1pZigxMz09Yi53aGljaCl7dmFyIGg9aS5maW5kKFwibGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZClcIilbMF07aCYmKGEoaCkudHJpZ2dlcihcImNsaWNrXCIpLGV8fHEudHJpZ2dlcihcImNsb3NlXCIpKX00MD09Yi53aGljaCYmKGc9aS5maW5kKFwibGkuc2VsZWN0ZWRcIikubGVuZ3RoP2kuZmluZChcImxpLnNlbGVjdGVkXCIpLm5leHQoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXTppLmZpbmQoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXSxyKGksZykpLDI3PT1iLndoaWNoJiZxLnRyaWdnZXIoXCJjbG9zZVwiKSwzOD09Yi53aGljaCYmKGc9aS5maW5kKFwibGkuc2VsZWN0ZWRcIikucHJldihcImxpOm5vdCguZGlzYWJsZWQpXCIpWzBdLGcmJnIoaSxnKSksc2V0VGltZW91dChmdW5jdGlvbigpe3M9W119LDFlMyl9fTtxLm9uKFwia2V5ZG93blwiLHQpfX0pfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17aW5kaWNhdG9yczohMCxoZWlnaHQ6NDAwLHRyYW5zaXRpb246NTAwLGludGVydmFsOjZlM307cmV0dXJuIGI9YS5leHRlbmQoYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEsYil7YS5oYXNDbGFzcyhcImNlbnRlci1hbGlnblwiKT9hLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWTotMTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pOmEuaGFzQ2xhc3MoXCJyaWdodC1hbGlnblwiKT9hLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDoxMDB9LHtkdXJhdGlvbjpiLHF1ZXVlOiExfSk6YS5oYXNDbGFzcyhcImxlZnQtYWxpZ25cIikmJmEudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOi0xMDB9LHtkdXJhdGlvbjpiLHF1ZXVlOiExfSl9ZnVuY3Rpb24gZChhKXthPj1qLmxlbmd0aD9hPTA6YTwwJiYoYT1qLmxlbmd0aC0xKSxrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxrIT1hJiYoZT1qLmVxKGspLCRjYXB0aW9uPWUuZmluZChcIi5jYXB0aW9uXCIpLGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtqLm5vdChcIi5hY3RpdmVcIikudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pLGMoJGNhcHRpb24sYi50cmFuc2l0aW9uKSxiLmluZGljYXRvcnMmJmYuZXEoaykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksai5lcShhKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxqLmVxKGEpLmZpbmQoXCIuY2FwdGlvblwiKS52ZWxvY2l0eSh7b3BhY2l0eToxLHRyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24sZGVsYXk6Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxqLmVxKGEpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGIuaW5kaWNhdG9ycyYmZi5lcShhKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSl9dmFyIGUsZixnLGg9YSh0aGlzKSxpPWguZmluZChcInVsLnNsaWRlc1wiKS5maXJzdCgpLGo9aS5maW5kKFwiPiBsaVwiKSxrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKTtrIT0tMSYmKGU9ai5lcShrKSksaC5oYXNDbGFzcyhcImZ1bGxzY3JlZW5cIil8fChiLmluZGljYXRvcnM/aC5oZWlnaHQoYi5oZWlnaHQrNDApOmguaGVpZ2h0KGIuaGVpZ2h0KSxpLmhlaWdodChiLmhlaWdodCkpLGouZmluZChcIi5jYXB0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtjKGEodGhpcyksMCl9KSxqLmZpbmQoXCJpbWdcIikuZWFjaChmdW5jdGlvbigpe3ZhciBiPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO2EodGhpcykuYXR0cihcInNyY1wiKSE9PWImJihhKHRoaXMpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIixcInVybChcIithKHRoaXMpLmF0dHIoXCJzcmNcIikrXCIpXCIpLGEodGhpcykuYXR0cihcInNyY1wiLGIpKX0pLGIuaW5kaWNhdG9ycyYmKGY9YSgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyksai5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlPWEoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTtlLmNsaWNrKGZ1bmN0aW9uKCl7dmFyIGM9aS5wYXJlbnQoKSxlPWMuZmluZChhKHRoaXMpKS5pbmRleCgpO2QoZSksY2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCl9KSxmLmFwcGVuZChlKX0pLGguYXBwZW5kKGYpLGY9aC5maW5kKFwidWwuaW5kaWNhdG9yc1wiKS5maW5kKFwibGkuaW5kaWNhdG9yLWl0ZW1cIikpLGU/ZS5zaG93KCk6KGouZmlyc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxrPTAsZT1qLmVxKGspLGIuaW5kaWNhdG9ycyYmZi5lcShrKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksZS5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXtlLmZpbmQoXCIuY2FwdGlvblwiKS52ZWxvY2l0eSh7b3BhY2l0eToxLHRyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfSksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoaysxKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpO3ZhciBsPSExLG09ITEsbj0hMTtoLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGEpe2lmKFwidG91Y2hcIj09PWEuZ2VzdHVyZS5wb2ludGVyVHlwZSl7Y2xlYXJJbnRlcnZhbChnKTt2YXIgYj1hLmdlc3R1cmUuZGlyZWN0aW9uLGM9YS5nZXN0dXJlLmRlbHRhWCxkPWEuZ2VzdHVyZS52ZWxvY2l0eVgsZT1hLmdlc3R1cmUudmVsb2NpdHlZOyRjdXJyX3NsaWRlPWkuZmluZChcIi5hY3RpdmVcIiksTWF0aC5hYnMoZCk+TWF0aC5hYnMoZSkmJiRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmN9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksND09PWImJihjPmguaW5uZXJXaWR0aCgpLzJ8fGQ8LS42NSk/bj0hMDoyPT09YiYmKGM8LTEqaC5pbm5lcldpZHRoKCkvMnx8ZD4uNjUpJiYobT0hMCk7dmFyIGY7bSYmKGY9JGN1cnJfc2xpZGUubmV4dCgpLDA9PT1mLmxlbmd0aCYmKGY9ai5maXJzdCgpKSxmLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKSxuJiYoZj0kY3Vycl9zbGlkZS5wcmV2KCksMD09PWYubGVuZ3RoJiYoZj1qLmxhc3QoKSksZi52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGEpe1widG91Y2hcIj09PWEuZ2VzdHVyZS5wb2ludGVyVHlwZSYmKCRjdXJyX3NsaWRlPWkuZmluZChcIi5hY3RpdmVcIiksbD0hMSxjdXJyX2luZGV4PWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSwhbiYmIW18fGoubGVuZ3RoPD0xPyRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pOm0/KGQoY3Vycl9pbmRleCsxKSwkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDotMSpoLmlubmVyV2lkdGgoKX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7JGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjowLHF1ZXVlOiExfSl9fSkpOm4mJihkKGN1cnJfaW5kZXgtMSksJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6aC5pbm5lcldpZHRoKCl9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpeyRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pKSxtPSExLG49ITEsY2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCkpfSksaC5vbihcInNsaWRlclBhdXNlXCIsZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGcpfSksaC5vbihcInNsaWRlclN0YXJ0XCIsZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGcpLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxqLmxlbmd0aD09aysxP2s9MDprKz0xLGQoayl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKX0pLGgub24oXCJzbGlkZXJOZXh0XCIsZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGsrMSl9KSxoLm9uKFwic2xpZGVyUHJldlwiLGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrLTEpfSl9KX0scGF1c2U6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJQYXVzZVwiKX0sc3RhcnQ6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJTdGFydFwiKX0sbmV4dDpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcInNsaWRlck5leHRcIil9LHByZXY6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJQcmV2XCIpfX07YS5mbi5zbGlkZXI9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRvb2x0aXBcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vbihcImNsaWNrLmNhcmRcIixcIi5jYXJkXCIsZnVuY3Rpb24oYil7YSh0aGlzKS5maW5kKFwiPiAuY2FyZC1yZXZlYWxcIikubGVuZ3RoJiYoYShiLnRhcmdldCkuaXMoYShcIi5jYXJkLXJldmVhbCAuY2FyZC10aXRsZVwiKSl8fGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUgaVwiKSk/YSh0aGlzKS5maW5kKFwiLmNhcmQtcmV2ZWFsXCIpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjoyMjUscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KX19KTooYShiLnRhcmdldCkuaXMoYShcIi5jYXJkIC5hY3RpdmF0b3JcIikpfHxhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQgLmFjdGl2YXRvciBpXCIpKSkmJihhKGIudGFyZ2V0KS5jbG9zZXN0KFwiLmNhcmRcIikuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxhKHRoaXMpLmZpbmQoXCIuY2FyZC1yZXZlYWxcIikuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLnZlbG9jaXR5KFwic3RvcFwiLCExKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTpcIi0xMDAlXCJ9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwifSkpKX0pfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2RhdGE6W10scGxhY2Vob2xkZXI6XCJcIixzZWNvbmRhcnlQbGFjZWhvbGRlcjpcIlwiLGF1dG9jb21wbGV0ZU9wdGlvbnM6e319O2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkub24oXCJjbGlja1wiLFwiLmNoaXAgLmNsb3NlXCIsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5jbG9zZXN0KFwiLmNoaXBzXCIpO2MuYXR0cihcImRhdGEtaW5pdGlhbGl6ZWRcIil8fGEodGhpcykuY2xvc2VzdChcIi5jaGlwXCIpLnJlbW92ZSgpfSl9KSxhLmZuLm1hdGVyaWFsX2NoaXA9ZnVuY3Rpb24oYyl7dmFyIGQ9dGhpcztpZih0aGlzLiRlbD1hKHRoaXMpLHRoaXMuJGRvY3VtZW50PWEoZG9jdW1lbnQpLHRoaXMuU0VMUz17Q0hJUFM6XCIuY2hpcHNcIixDSElQOlwiLmNoaXBcIixJTlBVVDpcImlucHV0XCIsREVMRVRFOlwiLm1hdGVyaWFsLWljb25zXCIsU0VMRUNURURfQ0hJUDpcIi5zZWxlY3RlZFwifSxcImRhdGFcIj09PWMpcmV0dXJuIHRoaXMuJGVsLmRhdGEoXCJjaGlwc1wiKTt2YXIgZT1hLmV4dGVuZCh7fSxiLGMpO2QuaGFzQXV0b2NvbXBsZXRlPSFhLmlzRW1wdHlPYmplY3QoZS5hdXRvY29tcGxldGVPcHRpb25zLmRhdGEpLHRoaXMuaW5pdD1mdW5jdGlvbigpe3ZhciBiPTA7ZC4kZWwuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZj1NYXRlcmlhbGl6ZS5ndWlkKCk7ZC5jaGlwSWQ9ZixlLmRhdGEmJmUuZGF0YSBpbnN0YW5jZW9mIEFycmF5fHwoZS5kYXRhPVtdKSxjLmRhdGEoXCJjaGlwc1wiLGUuZGF0YSksYy5hdHRyKFwiZGF0YS1pbmRleFwiLGIpLGMuYXR0cihcImRhdGEtaW5pdGlhbGl6ZWRcIiwhMCksYy5oYXNDbGFzcyhkLlNFTFMuQ0hJUFMpfHxjLmFkZENsYXNzKFwiY2hpcHNcIiksZC5jaGlwcyhjLGYpLGIrK30pfSx0aGlzLmhhbmRsZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPWQuU0VMUztkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1mb2N1c1wiLGIuQ0hJUFMpLm9uKFwiY2xpY2suY2hpcHMtZm9jdXNcIixiLkNISVBTLGZ1bmN0aW9uKGMpe2EoYy50YXJnZXQpLmZpbmQoYi5JTlBVVCkuZm9jdXMoKX0pLGQuJGRvY3VtZW50Lm9mZihcImNsaWNrLmNoaXBzLXNlbGVjdFwiLGIuQ0hJUCkub24oXCJjbGljay5jaGlwcy1zZWxlY3RcIixiLkNISVAsZnVuY3Rpb24oYyl7dmFyIGU9YShjLnRhcmdldCk7aWYoZS5sZW5ndGgpe3ZhciBmPWUuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSxnPWUuY2xvc2VzdChiLkNISVBTKTthKGIuQ0hJUCkucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKSxmfHxkLnNlbGVjdENoaXAoZS5pbmRleCgpLGcpfX0pLGQuJGRvY3VtZW50Lm9mZihcImtleWRvd24uY2hpcHNcIikub24oXCJrZXlkb3duLmNoaXBzXCIsZnVuY3Rpb24oYyl7aWYoIWEoYy50YXJnZXQpLmlzKFwiaW5wdXQsIHRleHRhcmVhXCIpKXt2YXIgZSxmPWQuJGRvY3VtZW50LmZpbmQoYi5DSElQK2IuU0VMRUNURURfQ0hJUCksZz1mLmNsb3Nlc3QoYi5DSElQUyksaD1mLnNpYmxpbmdzKGIuQ0hJUCkubGVuZ3RoO2lmKGYubGVuZ3RoKWlmKDg9PT1jLndoaWNofHw0Nj09PWMud2hpY2gpe2MucHJldmVudERlZmF1bHQoKSxlPWYuaW5kZXgoKSxkLmRlbGV0ZUNoaXAoZSxnKTt2YXIgaT1udWxsO2UrMTxoP2k9ZTplIT09aCYmZSsxIT09aHx8KGk9aC0xKSxpPDAmJihpPW51bGwpLG51bGwhPT1pJiZkLnNlbGVjdENoaXAoaSxnKSxofHxnLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpfWVsc2UgaWYoMzc9PT1jLndoaWNoKXtpZihlPWYuaW5kZXgoKS0xLGU8MClyZXR1cm47YShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZC5zZWxlY3RDaGlwKGUsZyl9ZWxzZSBpZigzOT09PWMud2hpY2gpe2lmKGU9Zi5pbmRleCgpKzEsYShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZT5oKXJldHVybiB2b2lkIGcuZmluZChcImlucHV0XCIpLmZvY3VzKCk7ZC5zZWxlY3RDaGlwKGUsZyl9fX0pLGQuJGRvY3VtZW50Lm9mZihcImZvY3VzaW4uY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwiZm9jdXNpbi5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KGIuQ0hJUFMpO2QuYWRkQ2xhc3MoXCJmb2N1c1wiKSxkLnNpYmxpbmdzKFwibGFiZWwsIC5wcmVmaXhcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIil9KSxkLiRkb2N1bWVudC5vZmYoXCJmb2N1c291dC5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJmb2N1c291dC5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KGIuQ0hJUFMpO2QucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKSxkLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGh8fGQuc2libGluZ3MoXCJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxkLnNpYmxpbmdzKFwiLnByZWZpeFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLGQuJGRvY3VtZW50Lm9mZihcImtleWRvd24uY2hpcHMtYWRkXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImtleWRvd24uY2hpcHMtYWRkXCIsYi5DSElQUytcIiBcIitiLklOUFVULGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpLGY9ZS5jbG9zZXN0KGIuQ0hJUFMpLGc9Zi5jaGlsZHJlbihiLkNISVApLmxlbmd0aDtpZigxMz09PWMud2hpY2gpe2lmKGQuaGFzQXV0b2NvbXBsZXRlJiZmLmZpbmQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5sZW5ndGgmJmYuZmluZChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLmNoaWxkcmVuKCkubGVuZ3RoKXJldHVybjtyZXR1cm4gYy5wcmV2ZW50RGVmYXVsdCgpLGQuYWRkQ2hpcCh7dGFnOmUudmFsKCl9LGYpLHZvaWQgZS52YWwoXCJcIil9aWYoKDg9PT1jLmtleUNvZGV8fDM3PT09Yy5rZXlDb2RlKSYmXCJcIj09PWUudmFsKCkmJmcpcmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxkLnNlbGVjdENoaXAoZy0xLGYpLHZvaWQgZS5ibHVyKCl9KSxkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1kZWxldGVcIixiLkNISVBTK1wiIFwiK2IuREVMRVRFKS5vbihcImNsaWNrLmNoaXBzLWRlbGV0ZVwiLGIuQ0hJUFMrXCIgXCIrYi5ERUxFVEUsZnVuY3Rpb24oYyl7dmFyIGU9YShjLnRhcmdldCksZj1lLmNsb3Nlc3QoYi5DSElQUyksZz1lLmNsb3Nlc3QoYi5DSElQKTtjLnN0b3BQcm9wYWdhdGlvbigpLGQuZGVsZXRlQ2hpcChnLmluZGV4KCksZiksZi5maW5kKFwiaW5wdXRcIikuZm9jdXMoKX0pfSx0aGlzLmNoaXBzPWZ1bmN0aW9uKGIsYyl7Yi5lbXB0eSgpLGIuZGF0YShcImNoaXBzXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hcHBlbmQoZC5yZW5kZXJDaGlwKGEpKX0pLGIuYXBwZW5kKGEoJzxpbnB1dCBpZD1cIicrYysnXCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiXCI+JykpLGQuc2V0UGxhY2Vob2xkZXIoYik7dmFyIGY9Yi5uZXh0KFwibGFiZWxcIik7Zi5sZW5ndGgmJihmLmF0dHIoXCJmb3JcIixjKSxiLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGgmJmYuYWRkQ2xhc3MoXCJhY3RpdmVcIikpO3ZhciBnPWEoXCIjXCIrYyk7ZC5oYXNBdXRvY29tcGxldGUmJihlLmF1dG9jb21wbGV0ZU9wdGlvbnMub25BdXRvY29tcGxldGU9ZnVuY3Rpb24oYSl7ZC5hZGRDaGlwKHt0YWc6YX0sYiksZy52YWwoXCJcIiksZy5mb2N1cygpfSxnLmF1dG9jb21wbGV0ZShlLmF1dG9jb21wbGV0ZU9wdGlvbnMpKX0sdGhpcy5yZW5kZXJDaGlwPWZ1bmN0aW9uKGIpe2lmKGIudGFnKXt2YXIgYz1hKCc8ZGl2IGNsYXNzPVwiY2hpcFwiPjwvZGl2PicpO3JldHVybiBjLnRleHQoYi50YWcpLGMuYXBwZW5kKGEoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2xvc2VcIj5jbG9zZTwvaT4nKSksY319LHRoaXMuc2V0UGxhY2Vob2xkZXI9ZnVuY3Rpb24oYSl7YS5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZlLnBsYWNlaG9sZGVyP2EuZmluZChcImlucHV0XCIpLnByb3AoXCJwbGFjZWhvbGRlclwiLGUucGxhY2Vob2xkZXIpOiFhLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGgmJmUuc2Vjb25kYXJ5UGxhY2Vob2xkZXImJmEuZmluZChcImlucHV0XCIpLnByb3AoXCJwbGFjZWhvbGRlclwiLGUuc2Vjb25kYXJ5UGxhY2Vob2xkZXIpfSx0aGlzLmlzVmFsaWQ9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5kYXRhKFwiY2hpcHNcIiksZD0hMSxlPTA7ZTxjLmxlbmd0aDtlKyspaWYoY1tlXS50YWc9PT1iLnRhZylyZXR1cm4gdm9pZChkPSEwKTtyZXR1cm5cIlwiIT09Yi50YWcmJiFkfSx0aGlzLmFkZENoaXA9ZnVuY3Rpb24oYSxiKXtpZihkLmlzVmFsaWQoYixhKSl7Zm9yKHZhciBjPWQucmVuZGVyQ2hpcChhKSxlPVtdLGY9Yi5kYXRhKFwiY2hpcHNcIiksZz0wO2c8Zi5sZW5ndGg7ZysrKWUucHVzaChmW2ddKTtlLnB1c2goYSksYi5kYXRhKFwiY2hpcHNcIixlKSxjLmluc2VydEJlZm9yZShiLmZpbmQoXCJpbnB1dFwiKSksYi50cmlnZ2VyKFwiY2hpcC5hZGRcIixhKSxkLnNldFBsYWNlaG9sZGVyKGIpfX0sdGhpcy5kZWxldGVDaGlwPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5kYXRhKFwiY2hpcHNcIilbYV07Yi5maW5kKFwiLmNoaXBcIikuZXEoYSkucmVtb3ZlKCk7Zm9yKHZhciBlPVtdLGY9Yi5kYXRhKFwiY2hpcHNcIiksZz0wO2c8Zi5sZW5ndGg7ZysrKWchPT1hJiZlLnB1c2goZltnXSk7Yi5kYXRhKFwiY2hpcHNcIixlKSxiLnRyaWdnZXIoXCJjaGlwLmRlbGV0ZVwiLGMpLGQuc2V0UGxhY2Vob2xkZXIoYil9LHRoaXMuc2VsZWN0Q2hpcD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZmluZChcIi5jaGlwXCIpLmVxKGEpO2MmJiExPT09Yy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpJiYoYy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLGIudHJpZ2dlcihcImNoaXAuc2VsZWN0XCIsYi5kYXRhKFwiY2hpcHNcIilbYV0pKX0sdGhpcy5nZXRDaGlwc0VsZW1lbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5lcShhKX0sdGhpcy5pbml0KCksdGhpcy5oYW5kbGVFdmVudHMoKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5wdXNocGluPWZ1bmN0aW9uKGIpe3ZhciBjPXt0b3A6MCxib3R0b206MS8wLG9mZnNldDowfTtyZXR1cm5cInJlbW92ZVwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7KGlkPWEodGhpcykuZGF0YShcInB1c2hwaW4taWRcIikpJiYoYSh3aW5kb3cpLm9mZihcInNjcm9sbC5cIitpZCksYSh0aGlzKS5yZW1vdmVEYXRhKFwicHVzaHBpbi1pZFwiKS5yZW1vdmVDbGFzcyhcInBpbi10b3AgcGlubmVkIHBpbi1ib3R0b21cIikucmVtb3ZlQXR0cihcInN0eWxlXCIpKX0pLCExKTooYj1hLmV4dGVuZChjLGIpLCRpbmRleD0wLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGMoYSl7YS5yZW1vdmVDbGFzcyhcInBpbi10b3BcIiksYS5yZW1vdmVDbGFzcyhcInBpbm5lZFwiKSxhLnJlbW92ZUNsYXNzKFwicGluLWJvdHRvbVwiKX1mdW5jdGlvbiBkKGQsZSl7ZC5lYWNoKGZ1bmN0aW9uKCl7Yi50b3A8PWUmJmIuYm90dG9tPj1lJiYhYSh0aGlzKS5oYXNDbGFzcyhcInBpbm5lZFwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5jc3MoXCJ0b3BcIixiLm9mZnNldCksYSh0aGlzKS5hZGRDbGFzcyhcInBpbm5lZFwiKSksZTxiLnRvcCYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW4tdG9wXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmNzcyhcInRvcFwiLDApLGEodGhpcykuYWRkQ2xhc3MoXCJwaW4tdG9wXCIpKSxlPmIuYm90dG9tJiYhYSh0aGlzKS5oYXNDbGFzcyhcInBpbi1ib3R0b21cIikmJihjKGEodGhpcykpLGEodGhpcykuYWRkQ2xhc3MoXCJwaW4tYm90dG9tXCIpLGEodGhpcykuY3NzKFwidG9wXCIsYi5ib3R0b20tZykpfSl9dmFyIGU9TWF0ZXJpYWxpemUuZ3VpZCgpLGY9YSh0aGlzKSxnPWEodGhpcykub2Zmc2V0KCkudG9wO2EodGhpcykuZGF0YShcInB1c2hwaW4taWRcIixlKSxkKGYsYSh3aW5kb3cpLnNjcm9sbFRvcCgpKSxhKHdpbmRvdykub24oXCJzY3JvbGwuXCIrZSxmdW5jdGlvbigpe3ZhciBjPWEod2luZG93KS5zY3JvbGxUb3AoKStiLm9mZnNldDtkKGYsYyl9KX0pKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthLmZuLnJldmVyc2U9W10ucmV2ZXJzZSxhKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXIuZml4ZWRBY3Rpb25CdG5cIixcIi5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpXCIsZnVuY3Rpb24oYyl7dmFyIGQ9YSh0aGlzKTtiKGQpfSksYShkb2N1bWVudCkub24oXCJtb3VzZWxlYXZlLmZpeGVkQWN0aW9uQnRuXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKVwiLGZ1bmN0aW9uKGIpe3ZhciBkPWEodGhpcyk7YyhkKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suZmFiQ2xpY2tUb2dnbGVcIixcIi5maXhlZC1hY3Rpb24tYnRuLmNsaWNrLXRvLXRvZ2dsZSA+IGFcIixmdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpLGY9ZS5wYXJlbnQoKTtmLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2MoZik6YihmKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suZmFiVG9vbGJhclwiLFwiLmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciA+IGFcIixmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLGU9Yy5wYXJlbnQoKTtkKGUpfSl9KSxhLmZuLmV4dGVuZCh7b3BlbkZBQjpmdW5jdGlvbigpe2IoYSh0aGlzKSl9LGNsb3NlRkFCOmZ1bmN0aW9uKCl7YyhhKHRoaXMpKX0sb3BlblRvb2xiYXI6ZnVuY3Rpb24oKXtkKGEodGhpcykpfSxjbG9zZVRvb2xiYXI6ZnVuY3Rpb24oKXtlKGEodGhpcykpfX0pO3ZhciBiPWZ1bmN0aW9uKGIpe3ZhciBjPWI7aWYoYy5oYXNDbGFzcyhcImFjdGl2ZVwiKT09PSExKXt2YXIgZCxlLGY9Yy5oYXNDbGFzcyhcImhvcml6b250YWxcIik7Zj09PSEwP2U9NDA6ZD00MCxjLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuZmluZChcInVsIC5idG4tZmxvYXRpbmdcIikudmVsb2NpdHkoe3NjYWxlWTpcIi40XCIsc2NhbGVYOlwiLjRcIix0cmFuc2xhdGVZOmQrXCJweFwiLHRyYW5zbGF0ZVg6ZStcInB4XCJ9LHtkdXJhdGlvbjowfSk7dmFyIGc9MDtjLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnJldmVyc2UoKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjFcIixzY2FsZVg6XCIxXCIsc2NhbGVZOlwiMVwiLHRyYW5zbGF0ZVk6XCIwXCIsdHJhbnNsYXRlWDpcIjBcIn0se2R1cmF0aW9uOjgwLGRlbGF5Omd9KSxnKz00MH0pfX0sYz1mdW5jdGlvbihhKXt2YXIgYixjLGQ9YSxlPWQuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpO2U9PT0hMD9jPTQwOmI9NDAsZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtkLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxkLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KHtvcGFjaXR5OlwiMFwiLHNjYWxlWDpcIi40XCIsc2NhbGVZOlwiLjRcIix0cmFuc2xhdGVZOmIrXCJweFwiLHRyYW5zbGF0ZVg6YytcInB4XCJ9LHtkdXJhdGlvbjo4MH0pfSxkPWZ1bmN0aW9uKGIpe2lmKFwidHJ1ZVwiIT09Yi5hdHRyKFwiZGF0YS1vcGVuXCIpKXt2YXIgYyxkLGYsZz13aW5kb3cuaW5uZXJXaWR0aCxoPXdpbmRvdy5pbm5lckhlaWdodCxpPWJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaj1iLmZpbmQoXCI+IGFcIikuZmlyc3QoKSxrPWIuZmluZChcIj4gdWxcIikuZmlyc3QoKSxsPWEoJzxkaXYgY2xhc3M9XCJmYWItYmFja2Ryb3BcIj48L2Rpdj4nKSxtPWouY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtqLmFwcGVuZChsKSxjPWkubGVmdC1nLzIraS53aWR0aC8yLGQ9aC1pLmJvdHRvbSxmPWcvbC53aWR0aCgpLGIuYXR0cihcImRhdGEtb3JpZ2luLWJvdHRvbVwiLGkuYm90dG9tKSxiLmF0dHIoXCJkYXRhLW9yaWdpbi1sZWZ0XCIsaS5sZWZ0KSxiLmF0dHIoXCJkYXRhLW9yaWdpbi13aWR0aFwiLGkud2lkdGgpLGIuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYi5hdHRyKFwiZGF0YS1vcGVuXCIsITApLGIuY3NzKHtcInRleHQtYWxpZ25cIjpcImNlbnRlclwiLHdpZHRoOlwiMTAwJVwiLGJvdHRvbTowLGxlZnQ6MCx0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiK2MrXCJweClcIix0cmFuc2l0aW9uOlwibm9uZVwifSksai5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVkoXCIrLWQrXCJweClcIix0cmFuc2l0aW9uOlwibm9uZVwifSksbC5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOm19KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jc3Moe3RyYW5zZm9ybTpcIlwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCksIGJhY2tncm91bmQtY29sb3IgMHMgbGluZWFyIC4yc1wifSksai5jc3Moe292ZXJmbG93OlwidmlzaWJsZVwiLHRyYW5zZm9ybTpcIlwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6bX0pLGwuY3NzKHt0cmFuc2Zvcm06XCJzY2FsZShcIitmK1wiKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIn0pLGsuZmluZChcIj4gbGkgPiBhXCIpLmNzcyh7b3BhY2l0eToxfSksYSh3aW5kb3cpLm9uKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiLGZ1bmN0aW9uKCl7ZShiKSxhKHdpbmRvdykub2ZmKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIil9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYlRvb2xiYXJDbG9zZVwiLGZ1bmN0aW9uKGMpe2EoYy50YXJnZXQpLmNsb3Nlc3QoaykubGVuZ3RofHwoZShiKSxhKHdpbmRvdykub2ZmKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIikpfSl9LDEwMCl9LDApfX0sZT1mdW5jdGlvbihhKXtpZihcInRydWVcIj09PWEuYXR0cihcImRhdGEtb3BlblwiKSl7dmFyIGIsYyxkLGU9d2luZG93LmlubmVyV2lkdGgsZj13aW5kb3cuaW5uZXJIZWlnaHQsZz1hLmF0dHIoXCJkYXRhLW9yaWdpbi13aWR0aFwiKSxoPWEuYXR0cihcImRhdGEtb3JpZ2luLWJvdHRvbVwiKSxpPWEuYXR0cihcImRhdGEtb3JpZ2luLWxlZnRcIiksaj1hLmZpbmQoXCI+IC5idG4tZmxvYXRpbmdcIikuZmlyc3QoKSxrPWEuZmluZChcIj4gdWxcIikuZmlyc3QoKSxsPWEuZmluZChcIi5mYWItYmFja2Ryb3BcIiksbT1qLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7Yj1pLWUvMitnLzIsYz1mLWgsZD1lL2wud2lkdGgoKSxhLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEuYXR0cihcImRhdGEtb3BlblwiLCExKSxhLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJ0cmFuc3BhcmVudFwiLHRyYW5zaXRpb246XCJub25lXCJ9KSxqLmNzcyh7dHJhbnNpdGlvbjpcIm5vbmVcIn0pLGwuY3NzKHt0cmFuc2Zvcm06XCJzY2FsZSgwKVwiLFwiYmFja2dyb3VuZC1jb2xvclwiOm19KSxrLmZpbmQoXCI+IGxpID4gYVwiKS5jc3Moe29wYWNpdHk6XCJcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJlbW92ZSgpLGEuY3NzKHtcInRleHQtYWxpZ25cIjpcIlwiLHdpZHRoOlwiXCIsYm90dG9tOlwiXCIsbGVmdDpcIlwiLG92ZXJmbG93OlwiXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZChcIistYitcInB4LDAsMClcIn0pLGouY3NzKHtvdmVyZmxvdzpcIlwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsXCIrYytcInB4LDApXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzXCJ9KSxqLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMCwwLDApXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKVwifSl9LDIwKX0sMjAwKX19fShqUXVlcnkpLGZ1bmN0aW9uKGEpe01hdGVyaWFsaXplLmZhZGVJbkltYWdlPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWM9YShiKTtlbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBiKXJldHVybjtjPWJ9Yy5jc3Moe29wYWNpdHk6MH0pLGEoYykudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjY1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0U2luZVwifSksYShjKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MTMwMCxxdWV1ZTohMSxlYXNpbmc6XCJzd2luZ1wiLHN0ZXA6ZnVuY3Rpb24oYixjKXtjLnN0YXJ0PTEwMDt2YXIgZD1iLzEwMCxlPTE1MC0oMTAwLWIpLzEuNzU7ZTwxMDAmJihlPTEwMCksYj49MCYmYSh0aGlzKS5jc3Moe1wiLXdlYmtpdC1maWx0ZXJcIjpcImdyYXlzY2FsZShcIitkK1wiKWJyaWdodG5lc3MoXCIrZStcIiUpXCIsZmlsdGVyOlwiZ3JheXNjYWxlKFwiK2QrXCIpYnJpZ2h0bmVzcyhcIitlK1wiJSlcIn0pfX0pfSxNYXRlcmlhbGl6ZS5zaG93U3RhZ2dlcmVkTGlzdD1mdW5jdGlvbihiKXt2YXIgYztpZihcInN0cmluZ1wiPT10eXBlb2YgYiljPWEoYik7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYilyZXR1cm47Yz1ifXZhciBkPTA7Yy5maW5kKFwibGlcIikudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCItMTAwcHhcIn0se2R1cmF0aW9uOjB9KSxjLmZpbmQoXCJsaVwiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjFcIix0cmFuc2xhdGVYOlwiMFwifSx7ZHVyYXRpb246ODAwLGRlbGF5OmQsZWFzaW5nOls2MCwxMF19KSxkKz0xMjB9KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXt2YXIgYj0hMSxjPSExO2EoXCIuZGlzbWlzc2FibGVcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykuaGFtbWVyKHtwcmV2ZW50X2RlZmF1bHQ6ITF9KS5iaW5kKFwicGFuXCIsZnVuY3Rpb24oZCl7aWYoXCJ0b3VjaFwiPT09ZC5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZT1hKHRoaXMpLGY9ZC5nZXN0dXJlLmRpcmVjdGlvbixnPWQuZ2VzdHVyZS5kZWx0YVgsaD1kLmdlc3R1cmUudmVsb2NpdHlYO2UudmVsb2NpdHkoe3RyYW5zbGF0ZVg6Z30se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSw0PT09ZiYmKGc+ZS5pbm5lcldpZHRoKCkvMnx8aDwtLjc1KSYmKGI9ITApLDI9PT1mJiYoZzwtMSplLmlubmVyV2lkdGgoKS8yfHxoPi43NSkmJihjPSEwKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oZCl7aWYoTWF0aC5hYnMoZC5nZXN0dXJlLmRlbHRhWCk8YSh0aGlzKS5pbm5lcldpZHRoKCkvMiYmKGM9ITEsYj0hMSksXCJ0b3VjaFwiPT09ZC5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZT1hKHRoaXMpO2lmKGJ8fGMpe3ZhciBmO2Y9Yj9lLmlubmVyV2lkdGgoKTotMSplLmlubmVyV2lkdGgoKSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmZ9LHtkdXJhdGlvbjoxMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2UuY3NzKFwiYm9yZGVyXCIsXCJub25lXCIpLGUudmVsb2NpdHkoe2hlaWdodDowLHBhZGRpbmc6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZS5yZW1vdmUoKX19KX19KX1lbHNlIGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjEwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSk7Yj0hMSxjPSExfX0pfSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj0hMTtNYXRlcmlhbGl6ZS5zY3JvbGxGaXJlPWZ1bmN0aW9uKGEpe3ZhciBjPWZ1bmN0aW9uKCl7Zm9yKHZhciBiPXdpbmRvdy5wYWdlWU9mZnNldCt3aW5kb3cuaW5uZXJIZWlnaHQsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5zZWxlY3RvcixmPWQub2Zmc2V0LGc9ZC5jYWxsYmFjayxoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYobnVsbCE9PWgpe3ZhciBpPWguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK3dpbmRvdy5wYWdlWU9mZnNldDtpZihiPmkrZiYmZC5kb25lIT09ITApe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGcpZy5jYWxsKHRoaXMsaCk7ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgZyl7dmFyIGo9bmV3IEZ1bmN0aW9uKGcpO2ooaCl9ZC5kb25lPSEwfX19fSxkPU1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCl7YygpfSxhLnRocm90dGxlfHwxMDApO2J8fCh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCksYj0hMCksc2V0VGltZW91dChkLDApfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwicGlja2VyXCIsW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6dGhpcy5QaWNrZXI9YShqUXVlcnkpfShmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGYsZyxpLGwpe2Z1bmN0aW9uIG0oKXtyZXR1cm4gYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIix5LmNvbXBvbmVudC5ub2Rlcyh0Lm9wZW4pLHYuYm94KSx2LndyYXApLHYuZnJhbWUpLHYuaG9sZGVyKX1mdW5jdGlvbiBuKCl7dy5kYXRhKGcseSkuYWRkQ2xhc3Modi5pbnB1dCkuYXR0cihcInRhYmluZGV4XCIsLTEpLnZhbCh3LmRhdGEoXCJ2YWx1ZVwiKT95LmdldChcInNlbGVjdFwiLHUuZm9ybWF0KTpmLnZhbHVlKSx1LmVkaXRhYmxlfHx3Lm9uKFwiZm9jdXMuXCIrdC5pZCtcIiBjbGljay5cIit0LmlkLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKSx5LiRyb290LmVxKDApLmZvY3VzKCl9KS5vbihcImtleWRvd24uXCIrdC5pZCxxKSxlKGYse2hhc3BvcHVwOiEwLGV4cGFuZGVkOiExLHJlYWRvbmx5OiExLG93bnM6Zi5pZCtcIl9yb290XCJ9KX1mdW5jdGlvbiBvKCl7eS4kcm9vdC5vbih7a2V5ZG93bjpxLGZvY3VzaW46ZnVuY3Rpb24oYSl7eS4kcm9vdC5yZW1vdmVDbGFzcyh2LmZvY3VzZWQpLGEuc3RvcFByb3BhZ2F0aW9uKCl9LFwibW91c2Vkb3duIGNsaWNrXCI6ZnVuY3Rpb24oYil7dmFyIGM9Yi50YXJnZXQ7YyE9eS4kcm9vdC5jaGlsZHJlbigpWzBdJiYoYi5zdG9wUHJvcGFnYXRpb24oKSxcIm1vdXNlZG93blwiIT1iLnR5cGV8fGEoYykuaXMoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBvcHRpb25cIil8fChiLnByZXZlbnREZWZhdWx0KCkseS4kcm9vdC5lcSgwKS5mb2N1cygpKSl9fSkub24oe2ZvY3VzOmZ1bmN0aW9uKCl7dy5hZGRDbGFzcyh2LnRhcmdldCl9LGJsdXI6ZnVuY3Rpb24oKXt3LnJlbW92ZUNsYXNzKHYudGFyZ2V0KX19KS5vbihcImZvY3VzLnRvT3BlblwiLHIpLm9uKFwiY2xpY2tcIixcIltkYXRhLXBpY2tdLCBbZGF0YS1uYXZdLCBbZGF0YS1jbGVhcl0sIFtkYXRhLWNsb3NlXVwiLGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuZGF0YSgpLGQ9Yi5oYXNDbGFzcyh2Lm5hdkRpc2FibGVkKXx8Yi5oYXNDbGFzcyh2LmRpc2FibGVkKSxlPWgoKTtlPWUmJihlLnR5cGV8fGUuaHJlZiksKGR8fGUmJiFhLmNvbnRhaW5zKHkuJHJvb3RbMF0sZSkpJiZ5LiRyb290LmVxKDApLmZvY3VzKCksIWQmJmMubmF2P3kuc2V0KFwiaGlnaGxpZ2h0XCIseS5jb21wb25lbnQuaXRlbS5oaWdobGlnaHQse25hdjpjLm5hdn0pOiFkJiZcInBpY2tcImluIGM/eS5zZXQoXCJzZWxlY3RcIixjLnBpY2spOmMuY2xlYXI/eS5jbGVhcigpLmNsb3NlKCEwKTpjLmNsb3NlJiZ5LmNsb3NlKCEwKX0pLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCEwKX1mdW5jdGlvbiBwKCl7dmFyIGI7dS5oaWRkZW5OYW1lPT09ITA/KGI9Zi5uYW1lLGYubmFtZT1cIlwiKTooYj1bXCJzdHJpbmdcIj09dHlwZW9mIHUuaGlkZGVuUHJlZml4P3UuaGlkZGVuUHJlZml4OlwiXCIsXCJzdHJpbmdcIj09dHlwZW9mIHUuaGlkZGVuU3VmZml4P3UuaGlkZGVuU3VmZml4OlwiX3N1Ym1pdFwiXSxiPWJbMF0rZi5uYW1lK2JbMV0pLHkuX2hpZGRlbj1hKCc8aW5wdXQgdHlwZT1oaWRkZW4gbmFtZT1cIicrYisnXCInKyh3LmRhdGEoXCJ2YWx1ZVwiKXx8Zi52YWx1ZT8nIHZhbHVlPVwiJyt5LmdldChcInNlbGVjdFwiLHUuZm9ybWF0U3VibWl0KSsnXCInOlwiXCIpK1wiPlwiKVswXSx3Lm9uKFwiY2hhbmdlLlwiK3QuaWQsZnVuY3Rpb24oKXt5Ll9oaWRkZW4udmFsdWU9Zi52YWx1ZT95LmdldChcInNlbGVjdFwiLHUuZm9ybWF0U3VibWl0KTpcIlwifSksdS5jb250YWluZXI/YSh1LmNvbnRhaW5lcikuYXBwZW5kKHkuX2hpZGRlbik6dy5hZnRlcih5Ll9oaWRkZW4pfWZ1bmN0aW9uIHEoYSl7dmFyIGI9YS5rZXlDb2RlLGM9L14oOHw0NikkLy50ZXN0KGIpO3JldHVybiAyNz09Yj8oeS5jbG9zZSgpLCExKTp2b2lkKCgzMj09Ynx8Y3x8IXQub3BlbiYmeS5jb21wb25lbnQua2V5W2JdKSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLGM/eS5jbGVhcigpLmNsb3NlKCk6eS5vcGVuKCkpKX1mdW5jdGlvbiByKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCksXCJmb2N1c1wiPT1hLnR5cGUmJnkuJHJvb3QuYWRkQ2xhc3Modi5mb2N1c2VkKSx5Lm9wZW4oKX1pZighZilyZXR1cm4gYjt2YXIgcz0hMSx0PXtpZDpmLmlkfHxcIlBcIitNYXRoLmFicyh+fihNYXRoLnJhbmRvbSgpKm5ldyBEYXRlKSl9LHU9aT9hLmV4dGVuZCghMCx7fSxpLmRlZmF1bHRzLGwpOmx8fHt9LHY9YS5leHRlbmQoe30sYi5rbGFzc2VzKCksdS5rbGFzcyksdz1hKGYpLHg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGFydCgpfSx5PXgucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjp4LCRub2RlOncsc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCYmdC5zdGFydD95Oih0Lm1ldGhvZHM9e30sdC5zdGFydD0hMCx0Lm9wZW49ITEsdC50eXBlPWYudHlwZSxmLmF1dG9mb2N1cz1mPT1oKCksZi5yZWFkT25seT0hdS5lZGl0YWJsZSxmLmlkPWYuaWR8fHQuaWQsXCJ0ZXh0XCIhPWYudHlwZSYmKGYudHlwZT1cInRleHRcIikseS5jb21wb25lbnQ9bmV3IGkoeSx1KSx5LiRyb290PWEoYi5fLm5vZGUoXCJkaXZcIixtKCksdi5waWNrZXIsJ2lkPVwiJytmLmlkKydfcm9vdFwiIHRhYmluZGV4PVwiMFwiJykpLG8oKSx1LmZvcm1hdFN1Ym1pdCYmcCgpLG4oKSx1LmNvbnRhaW5lcj9hKHUuY29udGFpbmVyKS5hcHBlbmQoeS4kcm9vdCk6dy5hZnRlcih5LiRyb290KSx5Lm9uKHtzdGFydDp5LmNvbXBvbmVudC5vblN0YXJ0LHJlbmRlcjp5LmNvbXBvbmVudC5vblJlbmRlcixzdG9wOnkuY29tcG9uZW50Lm9uU3RvcCxvcGVuOnkuY29tcG9uZW50Lm9uT3BlbixjbG9zZTp5LmNvbXBvbmVudC5vbkNsb3NlLHNldDp5LmNvbXBvbmVudC5vblNldH0pLm9uKHtzdGFydDp1Lm9uU3RhcnQscmVuZGVyOnUub25SZW5kZXIsc3RvcDp1Lm9uU3RvcCxvcGVuOnUub25PcGVuLGNsb3NlOnUub25DbG9zZSxzZXQ6dS5vblNldH0pLHM9Yyh5LiRyb290LmNoaWxkcmVuKClbMF0pLGYuYXV0b2ZvY3VzJiZ5Lm9wZW4oKSx5LnRyaWdnZXIoXCJzdGFydFwiKS50cmlnZ2VyKFwicmVuZGVyXCIpKX0scmVuZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhP3kuJHJvb3QuaHRtbChtKCkpOnkuJHJvb3QuZmluZChcIi5cIit2LmJveCkuaHRtbCh5LmNvbXBvbmVudC5ub2Rlcyh0Lm9wZW4pKSx5LnRyaWdnZXIoXCJyZW5kZXJcIil9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gdC5zdGFydD8oeS5jbG9zZSgpLHkuX2hpZGRlbiYmeS5faGlkZGVuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeS5faGlkZGVuKSx5LiRyb290LnJlbW92ZSgpLHcucmVtb3ZlQ2xhc3Modi5pbnB1dCkucmVtb3ZlRGF0YShnKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dy5vZmYoXCIuXCIrdC5pZCl9LDApLGYudHlwZT10LnR5cGUsZi5yZWFkT25seT0hMSx5LnRyaWdnZXIoXCJzdG9wXCIpLHQubWV0aG9kcz17fSx0LnN0YXJ0PSExLHkpOnl9LG9wZW46ZnVuY3Rpb24oYyl7cmV0dXJuIHQub3Blbj95Oih3LmFkZENsYXNzKHYuYWN0aXZlKSxlKGYsXCJleHBhbmRlZFwiLCEwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5hZGRDbGFzcyh2Lm9wZW5lZCksZSh5LiRyb290WzBdLFwiaGlkZGVuXCIsITEpfSwwKSxjIT09ITEmJih0Lm9wZW49ITAscyYmay5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLmNzcyhcInBhZGRpbmctcmlnaHRcIixcIis9XCIrZCgpKSx5LiRyb290LmVxKDApLmZvY3VzKCksai5vbihcImNsaWNrLlwiK3QuaWQrXCIgZm9jdXNpbi5cIit0LmlkLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O2IhPWYmJmIhPWRvY3VtZW50JiYzIT1hLndoaWNoJiZ5LmNsb3NlKGI9PT15LiRyb290LmNoaWxkcmVuKClbMF0pfSkub24oXCJrZXlkb3duLlwiK3QuaWQsZnVuY3Rpb24oYyl7dmFyIGQ9Yy5rZXlDb2RlLGU9eS5jb21wb25lbnQua2V5W2RdLGY9Yy50YXJnZXQ7Mjc9PWQ/eS5jbG9zZSghMCk6ZiE9eS4kcm9vdFswXXx8IWUmJjEzIT1kP2EuY29udGFpbnMoeS4kcm9vdFswXSxmKSYmMTM9PWQmJihjLnByZXZlbnREZWZhdWx0KCksZi5jbGljaygpKTooYy5wcmV2ZW50RGVmYXVsdCgpLGU/Yi5fLnRyaWdnZXIoeS5jb21wb25lbnQua2V5LmdvLHksW2IuXy50cmlnZ2VyKGUpXSk6eS4kcm9vdC5maW5kKFwiLlwiK3YuaGlnaGxpZ2h0ZWQpLmhhc0NsYXNzKHYuZGlzYWJsZWQpfHx5LnNldChcInNlbGVjdFwiLHkuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0KS5jbG9zZSgpKX0pKSx5LnRyaWdnZXIoXCJvcGVuXCIpKX0sY2xvc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJih5LiRyb290Lm9mZihcImZvY3VzLnRvT3BlblwiKS5lcSgwKS5mb2N1cygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LiRyb290Lm9uKFwiZm9jdXMudG9PcGVuXCIscil9LDApKSx3LnJlbW92ZUNsYXNzKHYuYWN0aXZlKSxlKGYsXCJleHBhbmRlZFwiLCExKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5yZW1vdmVDbGFzcyh2Lm9wZW5lZCtcIiBcIit2LmZvY3VzZWQpLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCEwKX0sMCksdC5vcGVuPyh0Lm9wZW49ITEscyYmay5jc3MoXCJvdmVyZmxvd1wiLFwiXCIpLmNzcyhcInBhZGRpbmctcmlnaHRcIixcIi09XCIrZCgpKSxqLm9mZihcIi5cIit0LmlkKSx5LnRyaWdnZXIoXCJjbG9zZVwiKSk6eX0sY2xlYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHkuc2V0KFwiY2xlYXJcIixudWxsLGEpfSxzZXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZz1hLmlzUGxhaW5PYmplY3QoYiksaD1nP2I6e307aWYoZD1nJiZhLmlzUGxhaW5PYmplY3QoYyk/YzpkfHx7fSxiKXtnfHwoaFtiXT1jKTtmb3IoZSBpbiBoKWY9aFtlXSxlIGluIHkuY29tcG9uZW50Lml0ZW0mJih2b2lkIDA9PT1mJiYoZj1udWxsKSx5LmNvbXBvbmVudC5zZXQoZSxmLGQpKSxcInNlbGVjdFwiIT1lJiZcImNsZWFyXCIhPWV8fHcudmFsKFwiY2xlYXJcIj09ZT9cIlwiOnkuZ2V0KGUsdS5mb3JtYXQpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO3kucmVuZGVyKCl9cmV0dXJuIGQubXV0ZWQ/eTp5LnRyaWdnZXIoXCJzZXRcIixoKX0sZ2V0OmZ1bmN0aW9uKGEsYyl7aWYoYT1hfHxcInZhbHVlXCIsbnVsbCE9dFthXSlyZXR1cm4gdFthXTtpZihcInZhbHVlU3VibWl0XCI9PWEpe2lmKHkuX2hpZGRlbilyZXR1cm4geS5faGlkZGVuLnZhbHVlO2E9XCJ2YWx1ZVwifWlmKFwidmFsdWVcIj09YSlyZXR1cm4gZi52YWx1ZTtpZihhIGluIHkuY29tcG9uZW50Lml0ZW0pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjKXt2YXIgZD15LmNvbXBvbmVudC5nZXQoYSk7cmV0dXJuIGQ/Yi5fLnRyaWdnZXIoeS5jb21wb25lbnQuZm9ybWF0cy50b1N0cmluZyx5LmNvbXBvbmVudCxbYyxkXSk6XCJcIn1yZXR1cm4geS5jb21wb25lbnQuZ2V0KGEpfX0sb246ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZz1hLmlzUGxhaW5PYmplY3QoYiksaD1nP2I6e307aWYoYil7Z3x8KGhbYl09Yyk7Zm9yKGUgaW4gaClmPWhbZV0sZCYmKGU9XCJfXCIrZSksdC5tZXRob2RzW2VdPXQubWV0aG9kc1tlXXx8W10sdC5tZXRob2RzW2VdLnB1c2goZil9cmV0dXJuIHl9LG9mZjpmdW5jdGlvbigpe3ZhciBhLGIsYz1hcmd1bWVudHM7Zm9yKGE9MCxuYW1lc0NvdW50PWMubGVuZ3RoO2E8bmFtZXNDb3VudDthKz0xKWI9Y1thXSxiIGluIHQubWV0aG9kcyYmZGVsZXRlIHQubWV0aG9kc1tiXTtyZXR1cm4geX0sdHJpZ2dlcjpmdW5jdGlvbihhLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBkPXQubWV0aG9kc1thXTtkJiZkLm1hcChmdW5jdGlvbihhKXtiLl8udHJpZ2dlcihhLHksW2NdKX0pfTtyZXR1cm4gZChcIl9cIithKSxkKGEpLHl9fTtyZXR1cm4gbmV3IHh9ZnVuY3Rpb24gYyhhKXt2YXIgYixjPVwicG9zaXRpb25cIjtyZXR1cm4gYS5jdXJyZW50U3R5bGU/Yj1hLmN1cnJlbnRTdHlsZVtjXTp3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSYmKGI9Z2V0Q29tcHV0ZWRTdHlsZShhKVtjXSksXCJmaXhlZFwiPT1ifWZ1bmN0aW9uIGQoKXtpZihrLmhlaWdodCgpPD1pLmhlaWdodCgpKXJldHVybiAwO3ZhciBiPWEoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDoxMDBweFwiIC8+JykuYXBwZW5kVG8oXCJib2R5XCIpLGM9YlswXS5vZmZzZXRXaWR0aDtiLmNzcyhcIm92ZXJmbG93XCIsXCJzY3JvbGxcIik7dmFyIGQ9YSgnPGRpdiBzdHlsZT1cIndpZHRoOjEwMCVcIiAvPicpLmFwcGVuZFRvKGIpLGU9ZFswXS5vZmZzZXRXaWR0aDtyZXR1cm4gYi5yZW1vdmUoKSxjLWV9ZnVuY3Rpb24gZShiLGMsZCl7aWYoYS5pc1BsYWluT2JqZWN0KGMpKWZvcih2YXIgZSBpbiBjKWYoYixlLGNbZV0pO2Vsc2UgZihiLGMsZCl9ZnVuY3Rpb24gZihhLGIsYyl7YS5zZXRBdHRyaWJ1dGUoKFwicm9sZVwiPT1iP1wiXCI6XCJhcmlhLVwiKStiLGMpfWZ1bmN0aW9uIGcoYixjKXthLmlzUGxhaW5PYmplY3QoYil8fChiPXthdHRyaWJ1dGU6Y30pLGM9XCJcIjtmb3IodmFyIGQgaW4gYil7dmFyIGU9KFwicm9sZVwiPT1kP1wiXCI6XCJhcmlhLVwiKStkLGY9YltkXTtjKz1udWxsPT1mP1wiXCI6ZSsnPVwiJytiW2RdKydcIid9cmV0dXJuIGN9ZnVuY3Rpb24gaCgpe3RyeXtyZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fXZhciBpPWEod2luZG93KSxqPWEoZG9jdW1lbnQpLGs9YShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO3JldHVybiBiLmtsYXNzZXM9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YXx8XCJwaWNrZXJcIix7cGlja2VyOmEsb3BlbmVkOmErXCItLW9wZW5lZFwiLGZvY3VzZWQ6YStcIi0tZm9jdXNlZFwiLGlucHV0OmErXCJfX2lucHV0XCIsYWN0aXZlOmErXCJfX2lucHV0LS1hY3RpdmVcIix0YXJnZXQ6YStcIl9faW5wdXQtLXRhcmdldFwiLGhvbGRlcjphK1wiX19ob2xkZXJcIixmcmFtZTphK1wiX19mcmFtZVwiLHdyYXA6YStcIl9fd3JhcFwiLGJveDphK1wiX19ib3hcIn19LGIuXz17Z3JvdXA6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9XCJcIixlPWIuXy50cmlnZ2VyKGEubWluLGEpO2U8PWIuXy50cmlnZ2VyKGEubWF4LGEsW2VdKTtlKz1hLmkpYz1iLl8udHJpZ2dlcihhLml0ZW0sYSxbZV0pLGQrPWIuXy5ub2RlKGEubm9kZSxjWzBdLGNbMV0sY1syXSk7cmV0dXJuIGR9LG5vZGU6ZnVuY3Rpb24oYixjLGQsZSl7cmV0dXJuIGM/KGM9YS5pc0FycmF5KGMpP2Muam9pbihcIlwiKTpjLGQ9ZD8nIGNsYXNzPVwiJytkKydcIic6XCJcIixlPWU/XCIgXCIrZTpcIlwiLFwiPFwiK2IrZCtlK1wiPlwiK2MrXCI8L1wiK2IrXCI+XCIpOlwiXCJ9LGxlYWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE8MTA/XCIwXCI6XCJcIikrYX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLmFwcGx5KGIsY3x8W10pOmF9LGRpZ2l0czpmdW5jdGlvbihhKXtyZXR1cm4vXFxkLy50ZXN0KGFbMV0pPzI6MX0saXNEYXRlOmZ1bmN0aW9uKGEpe3JldHVybnt9LnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIkRhdGVcIik+LTEmJnRoaXMuaXNJbnRlZ2VyKGEuZ2V0RGF0ZSgpKX0saXNJbnRlZ2VyOmZ1bmN0aW9uKGEpe3JldHVybnt9LnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIk51bWJlclwiKT4tMSYmYSUxPT09MH0sYXJpYUF0dHI6Z30sYi5leHRlbmQ9ZnVuY3Rpb24oYyxkKXthLmZuW2NdPWZ1bmN0aW9uKGUsZil7dmFyIGc9dGhpcy5kYXRhKGMpO3JldHVyblwicGlja2VyXCI9PWU/ZzpnJiZcInN0cmluZ1wiPT10eXBlb2YgZT9iLl8udHJpZ2dlcihnW2VdLGcsW2ZdKTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZj1hKHRoaXMpO2YuZGF0YShjKXx8bmV3IGIodGhpcyxjLGQsZSl9KX0sYS5mbltjXS5kZWZhdWx0cz1kLmRlZmF1bHRzfSxifSksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJwaWNrZXJcIixcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCIuL3BpY2tlci5qc1wiKSxyZXF1aXJlKFwianF1ZXJ5XCIpKTphKFBpY2tlcixqUXVlcnkpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXt2YXIgYz10aGlzLGQ9YS4kbm9kZVswXSxlPWQudmFsdWUsZj1hLiRub2RlLmRhdGEoXCJ2YWx1ZVwiKSxnPWZ8fGUsaD1mP2IuZm9ybWF0U3VibWl0OmIuZm9ybWF0LGk9ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXJyZW50U3R5bGU/XCJydGxcIj09ZC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uOlwicnRsXCI9PWdldENvbXB1dGVkU3R5bGUoYS4kcm9vdFswXSkuZGlyZWN0aW9ufTtjLnNldHRpbmdzPWIsYy4kbm9kZT1hLiRub2RlLGMucXVldWU9e21pbjpcIm1lYXN1cmUgY3JlYXRlXCIsbWF4OlwibWVhc3VyZSBjcmVhdGVcIixub3c6XCJub3cgY3JlYXRlXCIsc2VsZWN0OlwicGFyc2UgY3JlYXRlIHZhbGlkYXRlXCIsaGlnaGxpZ2h0OlwicGFyc2UgbmF2aWdhdGUgY3JlYXRlIHZhbGlkYXRlXCIsdmlldzpcInBhcnNlIGNyZWF0ZSB2YWxpZGF0ZSB2aWV3c2V0XCIsZGlzYWJsZTpcImRlYWN0aXZhdGVcIixlbmFibGU6XCJhY3RpdmF0ZVwifSxjLml0ZW09e30sYy5pdGVtLmNsZWFyPW51bGwsYy5pdGVtLmRpc2FibGU9KGIuZGlzYWJsZXx8W10pLnNsaWNlKDApLGMuaXRlbS5lbmFibGU9LWZ1bmN0aW9uKGEpe3JldHVybiBhWzBdPT09ITA/YS5zaGlmdCgpOi0xfShjLml0ZW0uZGlzYWJsZSksYy5zZXQoXCJtaW5cIixiLm1pbikuc2V0KFwibWF4XCIsYi5tYXgpLnNldChcIm5vd1wiKSxnP2Muc2V0KFwic2VsZWN0XCIsZyx7Zm9ybWF0Omh9KTpjLnNldChcInNlbGVjdFwiLG51bGwpLnNldChcImhpZ2hsaWdodFwiLGMuaXRlbS5ub3cpLGMua2V5PXs0MDo3LDM4Oi03LDM5OmZ1bmN0aW9uKCl7cmV0dXJuIGkoKT8tMToxfSwzNzpmdW5jdGlvbigpe3JldHVybiBpKCk/MTotMX0sZ286ZnVuY3Rpb24oYSl7dmFyIGI9Yy5pdGVtLmhpZ2hsaWdodCxkPW5ldyBEYXRlKGIueWVhcixiLm1vbnRoLGIuZGF0ZSthKTtjLnNldChcImhpZ2hsaWdodFwiLGQse2ludGVydmFsOmF9KSx0aGlzLnJlbmRlcigpfX0sYS5vbihcInJlbmRlclwiLGZ1bmN0aW9uKCl7YS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0TW9udGgpLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYz10aGlzLnZhbHVlO2MmJihhLnNldChcImhpZ2hsaWdodFwiLFthLmdldChcInZpZXdcIikueWVhcixjLGEuZ2V0KFwiaGlnaGxpZ2h0XCIpLmRhdGVdKSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RNb250aCkudHJpZ2dlcihcImZvY3VzXCIpKX0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdFllYXIpLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYz10aGlzLnZhbHVlO2MmJihhLnNldChcImhpZ2hsaWdodFwiLFtjLGEuZ2V0KFwidmlld1wiKS5tb250aCxhLmdldChcImhpZ2hsaWdodFwiKS5kYXRlXSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0WWVhcikudHJpZ2dlcihcImZvY3VzXCIpKX0pfSwxKS5vbihcIm9wZW5cIixmdW5jdGlvbigpe3ZhciBkPVwiXCI7Yy5kaXNhYmxlZChjLmdldChcIm5vd1wiKSkmJihkPVwiOm5vdCguXCIrYi5rbGFzcy5idXR0b25Ub2RheStcIilcIiksYS4kcm9vdC5maW5kKFwiYnV0dG9uXCIrZCtcIiwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCExKX0sMSkub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7YS4kcm9vdC5maW5kKFwiYnV0dG9uLCBzZWxlY3RcIikuYXR0cihcImRpc2FibGVkXCIsITApfSwxKX12YXIgZD03LGU9NixmPWEuXztjLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW07cmV0dXJuIG51bGw9PT1iPyhcImNsZWFyXCI9PWEmJihhPVwic2VsZWN0XCIpLGVbYV09YixkKTooZVtcImVuYWJsZVwiPT1hP1wiZGlzYWJsZVwiOlwiZmxpcFwiPT1hP1wiZW5hYmxlXCI6YV09ZC5xdWV1ZVthXS5zcGxpdChcIiBcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBiPWRbZV0oYSxiLGMpfSkucG9wKCksXCJzZWxlY3RcIj09YT9kLnNldChcImhpZ2hsaWdodFwiLGUuc2VsZWN0LGMpOlwiaGlnaGxpZ2h0XCI9PWE/ZC5zZXQoXCJ2aWV3XCIsZS5oaWdobGlnaHQsYyk6YS5tYXRjaCgvXihmbGlwfG1pbnxtYXh8ZGlzYWJsZXxlbmFibGUpJC8pJiYoZS5zZWxlY3QmJmQuZGlzYWJsZWQoZS5zZWxlY3QpJiZkLnNldChcInNlbGVjdFwiLGUuc2VsZWN0LGMpLFxuZS5oaWdobGlnaHQmJmQuZGlzYWJsZWQoZS5oaWdobGlnaHQpJiZkLnNldChcImhpZ2hsaWdodFwiLGUuaGlnaGxpZ2h0LGMpKSxkKX0sYy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLml0ZW1bYV19LGMucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZz10aGlzO3JldHVybiBjPXZvaWQgMD09PWM/YTpjLGM9PS0oMS8wKXx8Yz09MS8wP2U9YzpiLmlzUGxhaW5PYmplY3QoYykmJmYuaXNJbnRlZ2VyKGMucGljayk/Yz1jLm9iajpiLmlzQXJyYXkoYyk/KGM9bmV3IERhdGUoY1swXSxjWzFdLGNbMl0pLGM9Zi5pc0RhdGUoYyk/YzpnLmNyZWF0ZSgpLm9iaik6Yz1mLmlzSW50ZWdlcihjKXx8Zi5pc0RhdGUoYyk/Zy5ub3JtYWxpemUobmV3IERhdGUoYyksZCk6Zy5ub3coYSxjLGQpLHt5ZWFyOmV8fGMuZ2V0RnVsbFllYXIoKSxtb250aDplfHxjLmdldE1vbnRoKCksZGF0ZTplfHxjLmdldERhdGUoKSxkYXk6ZXx8Yy5nZXREYXkoKSxvYmo6ZXx8YyxwaWNrOmV8fGMuZ2V0VGltZSgpfX0sYy5wcm90b3R5cGUuY3JlYXRlUmFuZ2U9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT0hMHx8Yi5pc0FycmF5KGEpfHxmLmlzRGF0ZShhKT9kLmNyZWF0ZShhKTphfTtyZXR1cm4gZi5pc0ludGVnZXIoYSl8fChhPWUoYSkpLGYuaXNJbnRlZ2VyKGMpfHwoYz1lKGMpKSxmLmlzSW50ZWdlcihhKSYmYi5pc1BsYWluT2JqZWN0KGMpP2E9W2MueWVhcixjLm1vbnRoLGMuZGF0ZSthXTpmLmlzSW50ZWdlcihjKSYmYi5pc1BsYWluT2JqZWN0KGEpJiYoYz1bYS55ZWFyLGEubW9udGgsYS5kYXRlK2NdKSx7ZnJvbTplKGEpLHRvOmUoYyl9fSxjLnByb3RvdHlwZS53aXRoaW5SYW5nZT1mdW5jdGlvbihhLGIpe3JldHVybiBhPXRoaXMuY3JlYXRlUmFuZ2UoYS5mcm9tLGEudG8pLGIucGljaz49YS5mcm9tLnBpY2smJmIucGljazw9YS50by5waWNrfSxjLnByb3RvdHlwZS5vdmVybGFwUmFuZ2VzPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYT1jLmNyZWF0ZVJhbmdlKGEuZnJvbSxhLnRvKSxiPWMuY3JlYXRlUmFuZ2UoYi5mcm9tLGIudG8pLGMud2l0aGluUmFuZ2UoYSxiLmZyb20pfHxjLndpdGhpblJhbmdlKGEsYi50byl8fGMud2l0aGluUmFuZ2UoYixhLmZyb20pfHxjLndpdGhpblJhbmdlKGIsYS50byl9LGMucHJvdG90eXBlLm5vdz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9bmV3IERhdGUsYyYmYy5yZWwmJmIuc2V0RGF0ZShiLmdldERhdGUoKStjLnJlbCksdGhpcy5ub3JtYWxpemUoYixjKX0sYy5wcm90b3R5cGUubmF2aWdhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGYsZyxoLGk9Yi5pc0FycmF5KGMpLGo9Yi5pc1BsYWluT2JqZWN0KGMpLGs9dGhpcy5pdGVtLnZpZXc7aWYoaXx8ail7Zm9yKGo/KGY9Yy55ZWFyLGc9Yy5tb250aCxoPWMuZGF0ZSk6KGY9K2NbMF0sZz0rY1sxXSxoPStjWzJdKSxkJiZkLm5hdiYmayYmay5tb250aCE9PWcmJihmPWsueWVhcixnPWsubW9udGgpLGU9bmV3IERhdGUoZixnKyhkJiZkLm5hdj9kLm5hdjowKSwxKSxmPWUuZ2V0RnVsbFllYXIoKSxnPWUuZ2V0TW9udGgoKTtuZXcgRGF0ZShmLGcsaCkuZ2V0TW9udGgoKSE9PWc7KWgtPTE7Yz1bZixnLGhdfXJldHVybiBjfSxjLnByb3RvdHlwZS5ub3JtYWxpemU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2V0SG91cnMoMCwwLDAsMCksYX0sYy5wcm90b3R5cGUubWVhc3VyZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGI/XCJzdHJpbmdcIj09dHlwZW9mIGI/Yj1jLnBhcnNlKGEsYik6Zi5pc0ludGVnZXIoYikmJihiPWMubm93KGEsYix7cmVsOmJ9KSk6Yj1cIm1pblwiPT1hPy0oMS8wKToxLzAsYn0sYy5wcm90b3R5cGUudmlld3NldD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmNyZWF0ZShbYi55ZWFyLGIubW9udGgsMV0pfSxjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZyxoLGksaj10aGlzLGs9YyxsPWQmJmQuaW50ZXJ2YWw/ZC5pbnRlcnZhbDoxLG09ai5pdGVtLmVuYWJsZT09PS0xLG49ai5pdGVtLm1pbixvPWouaXRlbS5tYXgscD1tJiZqLml0ZW0uZGlzYWJsZS5maWx0ZXIoZnVuY3Rpb24oYSl7aWYoYi5pc0FycmF5KGEpKXt2YXIgZD1qLmNyZWF0ZShhKS5waWNrO2Q8Yy5waWNrP2U9ITA6ZD5jLnBpY2smJihnPSEwKX1yZXR1cm4gZi5pc0ludGVnZXIoYSl9KS5sZW5ndGg7aWYoKCFkfHwhZC5uYXYpJiYoIW0mJmouZGlzYWJsZWQoYyl8fG0mJmouZGlzYWJsZWQoYykmJihwfHxlfHxnKXx8IW0mJihjLnBpY2s8PW4ucGlja3x8Yy5waWNrPj1vLnBpY2spKSlmb3IobSYmIXAmJighZyYmbD4wfHwhZSYmbDwwKSYmKGwqPS0xKTtqLmRpc2FibGVkKGMpJiYoTWF0aC5hYnMobCk+MSYmKGMubW9udGg8ay5tb250aHx8Yy5tb250aD5rLm1vbnRoKSYmKGM9ayxsPWw+MD8xOi0xKSxjLnBpY2s8PW4ucGljaz8oaD0hMCxsPTEsYz1qLmNyZWF0ZShbbi55ZWFyLG4ubW9udGgsbi5kYXRlKyhjLnBpY2s9PT1uLnBpY2s/MDotMSldKSk6Yy5waWNrPj1vLnBpY2smJihpPSEwLGw9LTEsYz1qLmNyZWF0ZShbby55ZWFyLG8ubW9udGgsby5kYXRlKyhjLnBpY2s9PT1vLnBpY2s/MDoxKV0pKSwhaHx8IWkpOyljPWouY3JlYXRlKFtjLnllYXIsYy5tb250aCxjLmRhdGUrbF0pO3JldHVybiBjfSxjLnByb3RvdHlwZS5kaXNhYmxlZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9Yy5pdGVtLmRpc2FibGUuZmlsdGVyKGZ1bmN0aW9uKGQpe3JldHVybiBmLmlzSW50ZWdlcihkKT9hLmRheT09PShjLnNldHRpbmdzLmZpcnN0RGF5P2Q6ZC0xKSU3OmIuaXNBcnJheShkKXx8Zi5pc0RhdGUoZCk/YS5waWNrPT09Yy5jcmVhdGUoZCkucGljazpiLmlzUGxhaW5PYmplY3QoZCk/Yy53aXRoaW5SYW5nZShkLGEpOnZvaWQgMH0pO3JldHVybiBkPWQubGVuZ3RoJiYhZC5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGIuaXNBcnJheShhKSYmXCJpbnZlcnRlZFwiPT1hWzNdfHxiLmlzUGxhaW5PYmplY3QoYSkmJmEuaW52ZXJ0ZWR9KS5sZW5ndGgsYy5pdGVtLmVuYWJsZT09PS0xPyFkOmR8fGEucGljazxjLml0ZW0ubWluLnBpY2t8fGEucGljaz5jLml0ZW0ubWF4LnBpY2t9LGMucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9e307cmV0dXJuIGImJlwic3RyaW5nXCI9PXR5cGVvZiBiPyhjJiZjLmZvcm1hdHx8KGM9Y3x8e30sYy5mb3JtYXQ9ZC5zZXR0aW5ncy5mb3JtYXQpLGQuZm9ybWF0cy50b0FycmF5KGMuZm9ybWF0KS5tYXAoZnVuY3Rpb24oYSl7dmFyIGM9ZC5mb3JtYXRzW2FdLGc9Yz9mLnRyaWdnZXIoYyxkLFtiLGVdKTphLnJlcGxhY2UoL14hLyxcIlwiKS5sZW5ndGg7YyYmKGVbYV09Yi5zdWJzdHIoMCxnKSksYj1iLnN1YnN0cihnKX0pLFtlLnl5eXl8fGUueXksKyhlLm1tfHxlLm0pLTEsZS5kZHx8ZS5kXSk6Yn0sYy5wcm90b3R5cGUuZm9ybWF0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiLGMpe3ZhciBkPWEubWF0Y2goL1xcdysvKVswXTtyZXR1cm4gYy5tbXx8Yy5tfHwoYy5tPWIuaW5kZXhPZihkKSsxKSxkLmxlbmd0aH1mdW5jdGlvbiBiKGEpe3JldHVybiBhLm1hdGNoKC9cXHcrLylbMF0ubGVuZ3RofXJldHVybntkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/Zi5kaWdpdHMoYSk6Yi5kYXRlfSxkZDpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6Zi5sZWFkKGIuZGF0ZSl9LGRkZDpmdW5jdGlvbihhLGMpe3JldHVybiBhP2IoYSk6dGhpcy5zZXR0aW5ncy53ZWVrZGF5c1Nob3J0W2MuZGF5XX0sZGRkZDpmdW5jdGlvbihhLGMpe3JldHVybiBhP2IoYSk6dGhpcy5zZXR0aW5ncy53ZWVrZGF5c0Z1bGxbYy5kYXldfSxtOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/Zi5kaWdpdHMoYSk6Yi5tb250aCsxfSxtbTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6Zi5sZWFkKGIubW9udGgrMSl9LG1tbTpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuc2V0dGluZ3MubW9udGhzU2hvcnQ7cmV0dXJuIGI/YShiLGQsYyk6ZFtjLm1vbnRoXX0sbW1tbTpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuc2V0dGluZ3MubW9udGhzRnVsbDtyZXR1cm4gYj9hKGIsZCxjKTpkW2MubW9udGhdfSx5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6KFwiXCIrYi55ZWFyKS5zbGljZSgyKX0seXl5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzQ6Yi55ZWFyfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBhLnNwbGl0KC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nKX0sdG9TdHJpbmc6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBjLmZvcm1hdHMudG9BcnJheShhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGYudHJpZ2dlcihjLmZvcm1hdHNbYV0sYyxbMCxiXSl8fGEucmVwbGFjZSgvXiEvLFwiXCIpfSkuam9pbihcIlwiKX19fSgpLGMucHJvdG90eXBlLmlzRGF0ZUV4YWN0PWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcztyZXR1cm4gZi5pc0ludGVnZXIoYSkmJmYuaXNJbnRlZ2VyKGMpfHxcImJvb2xlYW5cIj09dHlwZW9mIGEmJlwiYm9vbGVhblwiPT10eXBlb2YgYz9hPT09YzooZi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKSkmJihmLmlzRGF0ZShjKXx8Yi5pc0FycmF5KGMpKT9kLmNyZWF0ZShhKS5waWNrPT09ZC5jcmVhdGUoYykucGljazohKCFiLmlzUGxhaW5PYmplY3QoYSl8fCFiLmlzUGxhaW5PYmplY3QoYykpJiYoZC5pc0RhdGVFeGFjdChhLmZyb20sYy5mcm9tKSYmZC5pc0RhdGVFeGFjdChhLnRvLGMudG8pKX0sYy5wcm90b3R5cGUuaXNEYXRlT3ZlcmxhcD1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLnNldHRpbmdzLmZpcnN0RGF5PzE6MDtyZXR1cm4gZi5pc0ludGVnZXIoYSkmJihmLmlzRGF0ZShjKXx8Yi5pc0FycmF5KGMpKT8oYT1hJTcrZSxhPT09ZC5jcmVhdGUoYykuZGF5KzEpOmYuaXNJbnRlZ2VyKGMpJiYoZi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKSk/KGM9YyU3K2UsYz09PWQuY3JlYXRlKGEpLmRheSsxKTohKCFiLmlzUGxhaW5PYmplY3QoYSl8fCFiLmlzUGxhaW5PYmplY3QoYykpJiZkLm92ZXJsYXBSYW5nZXMoYSxjKX0sYy5wcm90b3R5cGUuZmxpcEVuYWJsZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLml0ZW07Yi5lbmFibGU9YXx8KGIuZW5hYmxlPT0tMT8xOi0xKX0sYy5wcm90b3R5cGUuZGVhY3RpdmF0ZT1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW0uZGlzYWJsZS5zbGljZSgwKTtyZXR1cm5cImZsaXBcIj09Yz9kLmZsaXBFbmFibGUoKTpjPT09ITE/KGQuZmxpcEVuYWJsZSgxKSxlPVtdKTpjPT09ITA/KGQuZmxpcEVuYWJsZSgtMSksZT1bXSk6Yy5tYXAoZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGc9MDtnPGUubGVuZ3RoO2crPTEpaWYoZC5pc0RhdGVFeGFjdChhLGVbZ10pKXtjPSEwO2JyZWFrfWN8fChmLmlzSW50ZWdlcihhKXx8Zi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKXx8Yi5pc1BsYWluT2JqZWN0KGEpJiZhLmZyb20mJmEudG8pJiZlLnB1c2goYSl9KSxlfSxjLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW0uZGlzYWJsZSxnPWUubGVuZ3RoO3JldHVyblwiZmxpcFwiPT1jP2QuZmxpcEVuYWJsZSgpOmM9PT0hMD8oZC5mbGlwRW5hYmxlKDEpLGU9W10pOmM9PT0hMT8oZC5mbGlwRW5hYmxlKC0xKSxlPVtdKTpjLm1hcChmdW5jdGlvbihhKXt2YXIgYyxoLGksajtmb3IoaT0wO2k8ZztpKz0xKXtpZihoPWVbaV0sZC5pc0RhdGVFeGFjdChoLGEpKXtjPWVbaV09bnVsbCxqPSEwO2JyZWFrfWlmKGQuaXNEYXRlT3ZlcmxhcChoLGEpKXtiLmlzUGxhaW5PYmplY3QoYSk/KGEuaW52ZXJ0ZWQ9ITAsYz1hKTpiLmlzQXJyYXkoYSk/KGM9YSxjWzNdfHxjLnB1c2goXCJpbnZlcnRlZFwiKSk6Zi5pc0RhdGUoYSkmJihjPVthLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpLFwiaW52ZXJ0ZWRcIl0pO2JyZWFrfX1pZihjKWZvcihpPTA7aTxnO2krPTEpaWYoZC5pc0RhdGVFeGFjdChlW2ldLGEpKXtlW2ldPW51bGw7YnJlYWt9aWYoailmb3IoaT0wO2k8ZztpKz0xKWlmKGQuaXNEYXRlT3ZlcmxhcChlW2ldLGEpKXtlW2ldPW51bGw7YnJlYWt9YyYmZS5wdXNoKGMpfSksZS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWF9KX0sYy5wcm90b3R5cGUubm9kZXM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuc2V0dGluZ3MsZz1iLml0ZW0saD1nLm5vdyxpPWcuc2VsZWN0LGo9Zy5oaWdobGlnaHQsaz1nLnZpZXcsbD1nLmRpc2FibGUsbT1nLm1pbixuPWcubWF4LG89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYy5maXJzdERheSYmKGEucHVzaChhLnNoaWZ0KCkpLGIucHVzaChiLnNoaWZ0KCkpKSxmLm5vZGUoXCJ0aGVhZFwiLGYubm9kZShcInRyXCIsZi5ncm91cCh7bWluOjAsbWF4OmQtMSxpOjEsbm9kZTpcInRoXCIsaXRlbTpmdW5jdGlvbihkKXtyZXR1cm5bYVtkXSxjLmtsYXNzLndlZWtkYXlzLCdzY29wZT1jb2wgdGl0bGU9XCInK2JbZF0rJ1wiJ119fSkpKX0oKGMuc2hvd1dlZWtkYXlzRnVsbD9jLndlZWtkYXlzRnVsbDpjLndlZWtkYXlzTGV0dGVyKS5zbGljZSgwKSxjLndlZWtkYXlzRnVsbC5zbGljZSgwKSkscD1mdW5jdGlvbihhKXtyZXR1cm4gZi5ub2RlKFwiZGl2XCIsXCIgXCIsYy5rbGFzc1tcIm5hdlwiKyhhP1wiTmV4dFwiOlwiUHJldlwiKV0rKGEmJmsueWVhcj49bi55ZWFyJiZrLm1vbnRoPj1uLm1vbnRofHwhYSYmay55ZWFyPD1tLnllYXImJmsubW9udGg8PW0ubW9udGg/XCIgXCIrYy5rbGFzcy5uYXZEaXNhYmxlZDpcIlwiKSxcImRhdGEtbmF2PVwiKyhhfHwtMSkrXCIgXCIrZi5hcmlhQXR0cih7cm9sZTpcImJ1dHRvblwiLGNvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInKyhhP2MubGFiZWxNb250aE5leHQ6Yy5sYWJlbE1vbnRoUHJldikrJ1wiJyl9LHE9ZnVuY3Rpb24oZCl7dmFyIGU9Yy5zaG93TW9udGhzU2hvcnQ/Yy5tb250aHNTaG9ydDpjLm1vbnRoc0Z1bGw7cmV0dXJuXCJzaG9ydF9tb250aHNcIj09ZCYmKGU9Yy5tb250aHNTaG9ydCksYy5zZWxlY3RNb250aHMmJnZvaWQgMD09ZD9mLm5vZGUoXCJzZWxlY3RcIixmLmdyb3VwKHttaW46MCxtYXg6MTEsaToxLG5vZGU6XCJvcHRpb25cIixpdGVtOmZ1bmN0aW9uKGEpe3JldHVybltlW2FdLDAsXCJ2YWx1ZT1cIithKyhrLm1vbnRoPT1hP1wiIHNlbGVjdGVkXCI6XCJcIikrKGsueWVhcj09bS55ZWFyJiZhPG0ubW9udGh8fGsueWVhcj09bi55ZWFyJiZhPm4ubW9udGg/XCIgZGlzYWJsZWRcIjpcIlwiKV19fSksYy5rbGFzcy5zZWxlY3RNb250aCtcIiBicm93c2VyLWRlZmF1bHRcIiwoYT9cIlwiOlwiZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZCtcIl90YWJsZVwifSkrJyB0aXRsZT1cIicrYy5sYWJlbE1vbnRoU2VsZWN0KydcIicpOlwic2hvcnRfbW9udGhzXCI9PWQ/bnVsbCE9aT9mLm5vZGUoXCJkaXZcIixlW2kubW9udGhdKTpmLm5vZGUoXCJkaXZcIixlW2subW9udGhdKTpmLm5vZGUoXCJkaXZcIixlW2subW9udGhdLGMua2xhc3MubW9udGgpfSxyPWZ1bmN0aW9uKGQpe3ZhciBlPWsueWVhcixnPWMuc2VsZWN0WWVhcnM9PT0hMD81On5+KGMuc2VsZWN0WWVhcnMvMik7aWYoZyl7dmFyIGg9bS55ZWFyLGk9bi55ZWFyLGo9ZS1nLGw9ZStnO2lmKGg+aiYmKGwrPWgtaixqPWgpLGk8bCl7dmFyIG89ai1oLHA9bC1pO2otPW8+cD9wOm8sbD1pfWlmKGMuc2VsZWN0WWVhcnMmJnZvaWQgMD09ZClyZXR1cm4gZi5ub2RlKFwic2VsZWN0XCIsZi5ncm91cCh7bWluOmosbWF4OmwsaToxLG5vZGU6XCJvcHRpb25cIixpdGVtOmZ1bmN0aW9uKGEpe3JldHVyblthLDAsXCJ2YWx1ZT1cIithKyhlPT1hP1wiIHNlbGVjdGVkXCI6XCJcIildfX0pLGMua2xhc3Muc2VsZWN0WWVhcitcIiBicm93c2VyLWRlZmF1bHRcIiwoYT9cIlwiOlwiZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZCtcIl90YWJsZVwifSkrJyB0aXRsZT1cIicrYy5sYWJlbFllYXJTZWxlY3QrJ1wiJyl9cmV0dXJuXCJyYXdcIj09ZD9mLm5vZGUoXCJkaXZcIixlKTpmLm5vZGUoXCJkaXZcIixlLGMua2xhc3MueWVhcil9O3JldHVybiBjcmVhdGVEYXlMYWJlbD1mdW5jdGlvbigpe3JldHVybiBudWxsIT1pP2Yubm9kZShcImRpdlwiLGkuZGF0ZSk6Zi5ub2RlKFwiZGl2XCIsaC5kYXRlKX0sY3JlYXRlV2Vla2RheUxhYmVsPWZ1bmN0aW9uKCl7dmFyIGE7YT1udWxsIT1pP2kuZGF5OmguZGF5O3ZhciBiPWMud2Vla2RheXNGdWxsW2FdO3JldHVybiBifSxmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJkaXZcIixjcmVhdGVXZWVrZGF5TGFiZWwoKSxcInBpY2tlcl9fd2Vla2RheS1kaXNwbGF5XCIpK2Yubm9kZShcImRpdlwiLHEoXCJzaG9ydF9tb250aHNcIiksYy5rbGFzcy5tb250aF9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixjcmVhdGVEYXlMYWJlbCgpLGMua2xhc3MuZGF5X2Rpc3BsYXkpK2Yubm9kZShcImRpdlwiLHIoXCJyYXdcIiksYy5rbGFzcy55ZWFyX2Rpc3BsYXkpLGMua2xhc3MuZGF0ZV9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJkaXZcIiwoYy5zZWxlY3RZZWFycz9xKCkrcigpOnEoKStyKCkpK3AoKStwKDEpLGMua2xhc3MuaGVhZGVyKStmLm5vZGUoXCJ0YWJsZVwiLG8rZi5ub2RlKFwidGJvZHlcIixmLmdyb3VwKHttaW46MCxtYXg6ZS0xLGk6MSxub2RlOlwidHJcIixpdGVtOmZ1bmN0aW9uKGEpe3ZhciBlPWMuZmlyc3REYXkmJjA9PT1iLmNyZWF0ZShbay55ZWFyLGsubW9udGgsMV0pLmRheT8tNzowO3JldHVybltmLmdyb3VwKHttaW46ZCphLWsuZGF5K2UrMSxtYXg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5taW4rZC0xfSxpOjEsbm9kZTpcInRkXCIsaXRlbTpmdW5jdGlvbihhKXthPWIuY3JlYXRlKFtrLnllYXIsay5tb250aCxhKyhjLmZpcnN0RGF5PzE6MCldKTt2YXIgZD1pJiZpLnBpY2s9PWEucGljayxlPWomJmoucGljaz09YS5waWNrLGc9bCYmYi5kaXNhYmxlZChhKXx8YS5waWNrPG0ucGlja3x8YS5waWNrPm4ucGljayxvPWYudHJpZ2dlcihiLmZvcm1hdHMudG9TdHJpbmcsYixbYy5mb3JtYXQsYV0pO3JldHVybltmLm5vZGUoXCJkaXZcIixhLmRhdGUsZnVuY3Rpb24oYil7cmV0dXJuIGIucHVzaChrLm1vbnRoPT1hLm1vbnRoP2Mua2xhc3MuaW5mb2N1czpjLmtsYXNzLm91dGZvY3VzKSxoLnBpY2s9PWEucGljayYmYi5wdXNoKGMua2xhc3Mubm93KSxkJiZiLnB1c2goYy5rbGFzcy5zZWxlY3RlZCksZSYmYi5wdXNoKGMua2xhc3MuaGlnaGxpZ2h0ZWQpLGcmJmIucHVzaChjLmtsYXNzLmRpc2FibGVkKSxiLmpvaW4oXCIgXCIpfShbYy5rbGFzcy5kYXldKSxcImRhdGEtcGljaz1cIithLnBpY2srXCIgXCIrZi5hcmlhQXR0cih7cm9sZTpcImdyaWRjZWxsXCIsbGFiZWw6byxzZWxlY3RlZDohKCFkfHxiLiRub2RlLnZhbCgpIT09byl8fG51bGwsYWN0aXZlZGVzY2VuZGFudDohIWV8fG51bGwsZGlzYWJsZWQ6ISFnfHxudWxsfSkpLFwiXCIsZi5hcmlhQXR0cih7cm9sZTpcInByZXNlbnRhdGlvblwifSldfX0pXX19KSksYy5rbGFzcy50YWJsZSwnaWQ9XCInK2IuJG5vZGVbMF0uaWQrJ190YWJsZVwiICcrZi5hcmlhQXR0cih7cm9sZTpcImdyaWRcIixjb250cm9sczpiLiRub2RlWzBdLmlkLHJlYWRvbmx5OiEwfSkpLGMua2xhc3MuY2FsZW5kYXJfY29udGFpbmVyKStmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJidXR0b25cIixjLnRvZGF5LFwiYnRuLWZsYXQgcGlja2VyX190b2RheVwiLFwidHlwZT1idXR0b24gZGF0YS1waWNrPVwiK2gucGljaysoYSYmIWIuZGlzYWJsZWQoaCk/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpK2Yubm9kZShcImJ1dHRvblwiLGMuY2xlYXIsXCJidG4tZmxhdCBwaWNrZXJfX2NsZWFyXCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLWNsZWFyPTFcIisoYT9cIlwiOlwiIGRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWR9KSkrZi5ub2RlKFwiYnV0dG9uXCIsYy5jbG9zZSxcImJ0bi1mbGF0IHBpY2tlcl9fY2xvc2VcIixcInR5cGU9YnV0dG9uIGRhdGEtY2xvc2U9dHJ1ZSBcIisoYT9cIlwiOlwiIGRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWR9KSksYy5rbGFzcy5mb290ZXIpfSxjLmRlZmF1bHRzPWZ1bmN0aW9uKGEpe3JldHVybntsYWJlbE1vbnRoTmV4dDpcIk5leHQgbW9udGhcIixsYWJlbE1vbnRoUHJldjpcIlByZXZpb3VzIG1vbnRoXCIsbGFiZWxNb250aFNlbGVjdDpcIlNlbGVjdCBhIG1vbnRoXCIsbGFiZWxZZWFyU2VsZWN0OlwiU2VsZWN0IGEgeWVhclwiLG1vbnRoc0Z1bGw6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoc1Nob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sd2Vla2RheXNGdWxsOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLHdlZWtkYXlzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLHdlZWtkYXlzTGV0dGVyOltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sdG9kYXk6XCJUb2RheVwiLGNsZWFyOlwiQ2xlYXJcIixjbG9zZTpcIkNsb3NlXCIsZm9ybWF0OlwiZCBtbW1tLCB5eXl5XCIsa2xhc3M6e3RhYmxlOmErXCJ0YWJsZVwiLGhlYWRlcjphK1wiaGVhZGVyXCIsZGF0ZV9kaXNwbGF5OmErXCJkYXRlLWRpc3BsYXlcIixkYXlfZGlzcGxheTphK1wiZGF5LWRpc3BsYXlcIixtb250aF9kaXNwbGF5OmErXCJtb250aC1kaXNwbGF5XCIseWVhcl9kaXNwbGF5OmErXCJ5ZWFyLWRpc3BsYXlcIixjYWxlbmRhcl9jb250YWluZXI6YStcImNhbGVuZGFyLWNvbnRhaW5lclwiLG5hdlByZXY6YStcIm5hdi0tcHJldlwiLG5hdk5leHQ6YStcIm5hdi0tbmV4dFwiLG5hdkRpc2FibGVkOmErXCJuYXYtLWRpc2FibGVkXCIsbW9udGg6YStcIm1vbnRoXCIseWVhcjphK1wieWVhclwiLHNlbGVjdE1vbnRoOmErXCJzZWxlY3QtLW1vbnRoXCIsc2VsZWN0WWVhcjphK1wic2VsZWN0LS15ZWFyXCIsd2Vla2RheXM6YStcIndlZWtkYXlcIixkYXk6YStcImRheVwiLGRpc2FibGVkOmErXCJkYXktLWRpc2FibGVkXCIsc2VsZWN0ZWQ6YStcImRheS0tc2VsZWN0ZWRcIixoaWdobGlnaHRlZDphK1wiZGF5LS1oaWdobGlnaHRlZFwiLG5vdzphK1wiZGF5LS10b2RheVwiLGluZm9jdXM6YStcImRheS0taW5mb2N1c1wiLG91dGZvY3VzOmErXCJkYXktLW91dGZvY3VzXCIsZm9vdGVyOmErXCJmb290ZXJcIixidXR0b25DbGVhcjphK1wiYnV0dG9uLS1jbGVhclwiLGJ1dHRvblRvZGF5OmErXCJidXR0b24tLXRvZGF5XCIsYnV0dG9uQ2xvc2U6YStcImJ1dHRvbi0tY2xvc2VcIn19fShhLmtsYXNzZXMoKS5waWNrZXIrXCJfX1wiKSxhLmV4dGVuZChcInBpY2thZGF0ZVwiLGMpfSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe3ZhciBiPSthKHRoaXMpLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSxjPSthKHRoaXMpLnZhbCgpLmxlbmd0aCxkPWM8PWI7YSh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKS5odG1sKGMrXCIvXCIrYiksZShkLGEodGhpcykpfWZ1bmN0aW9uIGMoYil7dmFyIGM9Yi5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtjLmxlbmd0aHx8KGM9YShcIjxzcGFuLz5cIikuYWRkQ2xhc3MoXCJjaGFyYWN0ZXItY291bnRlclwiKS5jc3MoXCJmbG9hdFwiLFwicmlnaHRcIikuY3NzKFwiZm9udC1zaXplXCIsXCIxMnB4XCIpLmNzcyhcImhlaWdodFwiLDEpLGIucGFyZW50KCkuYXBwZW5kKGMpKX1mdW5jdGlvbiBkKCl7YSh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKS5odG1sKFwiXCIpfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1iLmhhc0NsYXNzKFwiaW52YWxpZFwiKTthJiZjP2IucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpOmF8fGN8fChiLnJlbW92ZUNsYXNzKFwidmFsaWRcIiksYi5hZGRDbGFzcyhcImludmFsaWRcIikpfWEuZm4uY2hhcmFjdGVyQ291bnRlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1hKHRoaXMpLGY9ZS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtpZighZi5sZW5ndGgpe3ZhciBnPXZvaWQgMCE9PWUuYXR0cihcImRhdGEtbGVuZ3RoXCIpO2cmJihlLm9uKFwiaW5wdXRcIixiKSxlLm9uKFwiZm9jdXNcIixiKSxlLm9uKFwiYmx1clwiLGQpLGMoZSkpfX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCJpbnB1dCwgdGV4dGFyZWFcIikuY2hhcmFjdGVyQ291bnRlcigpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e2R1cmF0aW9uOjIwMCxkaXN0Oi0xMDAsc2hpZnQ6MCxwYWRkaW5nOjAsZnVsbFdpZHRoOiExLGluZGljYXRvcnM6ITEsbm9XcmFwOiExLG9uQ3ljbGVUbzpudWxsfTtiPWEuZXh0ZW5kKGMsYik7dmFyIGQ9TWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoYSh0aGlzKSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtmdW5jdGlvbiBlKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQmJihPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsbiksT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixwKSksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsbiksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbyksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHApLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixwKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGwpfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEudGFyZ2V0VG91Y2hlcyYmYS50YXJnZXRUb3VjaGVzLmxlbmd0aD49MT9hLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDphLmNsaWVudFh9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYS50YXJnZXRUb3VjaGVzJiZhLnRhcmdldFRvdWNoZXMubGVuZ3RoPj0xP2EudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZOmEuY2xpZW50WX1mdW5jdGlvbiBoKGEpe3JldHVybiBhPj14P2EleDphPDA/aCh4K2EleCk6YX1mdW5jdGlvbiBpKGMpe0U9ITAsTy5oYXNDbGFzcyhcInNjcm9sbGluZ1wiKXx8Ty5hZGRDbGFzcyhcInNjcm9sbGluZ1wiKSxudWxsIT1OJiZ3aW5kb3cuY2xlYXJUaW1lb3V0KE4pLE49d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFPSExLE8ucmVtb3ZlQ2xhc3MoXCJzY3JvbGxpbmdcIil9LGIuZHVyYXRpb24pO3ZhciBkLGUsZixnLGksaixrLGw9dTtpZih0PVwibnVtYmVyXCI9PXR5cGVvZiBjP2M6dCx1PU1hdGguZmxvb3IoKHQrdy8yKS93KSxmPXQtdSp3LGc9ZjwwPzE6LTEsaT0tZypmKjIvdyxlPXg+PjEsYi5mdWxsV2lkdGg/az1cInRyYW5zbGF0ZVgoMClcIjooaz1cInRyYW5zbGF0ZVgoXCIrKE9bMF0uY2xpZW50V2lkdGgtcikvMitcInB4KSBcIixrKz1cInRyYW5zbGF0ZVkoXCIrKE9bMF0uY2xpZW50SGVpZ2h0LXMpLzIrXCJweClcIiksUCl7dmFyIG09dSV4LG49TS5maW5kKFwiLmluZGljYXRvci1pdGVtLmFjdGl2ZVwiKTtuLmluZGV4KCkhPT1tJiYobi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxNLmZpbmQoXCIuaW5kaWNhdG9yLWl0ZW1cIikuZXEobSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfWZvcigoIWIubm9XcmFwfHx1Pj0wJiZ1PHgpJiYoaj1xW2godSldLGEoaikuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChPLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhKGopLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIistZi8yK1wicHgpIHRyYW5zbGF0ZVgoXCIrZypiLnNoaWZ0KmkqZCtcInB4KSB0cmFuc2xhdGVaKFwiK2IuZGlzdCppK1wicHgpXCIsai5zdHlsZS56SW5kZXg9MCxiLmZ1bGxXaWR0aD90d2VlbmVkT3BhY2l0eT0xOnR3ZWVuZWRPcGFjaXR5PTEtLjIqaSxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksZD0xO2Q8PWU7KytkKWIuZnVsbFdpZHRoPyh6VHJhbnNsYXRpb249Yi5kaXN0LHR3ZWVuZWRPcGFjaXR5PWQ9PT1lJiZmPDA/MS1pOjEpOih6VHJhbnNsYXRpb249Yi5kaXN0KigyKmQraSpnKSx0d2VlbmVkT3BhY2l0eT0xLS4yKigyKmQraSpnKSksKCFiLm5vV3JhcHx8dStkPHgpJiYoaj1xW2godStkKV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrKGIuc2hpZnQrKHcqZC1mKS8yKStcInB4KSB0cmFuc2xhdGVaKFwiK3pUcmFuc2xhdGlvbitcInB4KVwiLGouc3R5bGUuekluZGV4PS1kLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxiLmZ1bGxXaWR0aD8oelRyYW5zbGF0aW9uPWIuZGlzdCx0d2VlbmVkT3BhY2l0eT1kPT09ZSYmZj4wPzEtaToxKTooelRyYW5zbGF0aW9uPWIuZGlzdCooMipkLWkqZyksdHdlZW5lZE9wYWNpdHk9MS0uMiooMipkLWkqZykpLCghYi5ub1dyYXB8fHUtZD49MCkmJihqPXFbaCh1LWQpXSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIisoLWIuc2hpZnQrKC13KmQtZikvMikrXCJweCkgdHJhbnNsYXRlWihcIit6VHJhbnNsYXRpb24rXCJweClcIixqLnN0eWxlLnpJbmRleD0tZCxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIik7aWYoKCFiLm5vV3JhcHx8dT49MCYmdTx4KSYmKGo9cVtoKHUpXSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIistZi8yK1wicHgpIHRyYW5zbGF0ZVgoXCIrZypiLnNoaWZ0KmkrXCJweCkgdHJhbnNsYXRlWihcIitiLmRpc3QqaStcInB4KVwiLGouc3R5bGUuekluZGV4PTAsYi5mdWxsV2lkdGg/dHdlZW5lZE9wYWNpdHk9MTp0d2VlbmVkT3BhY2l0eT0xLS4yKmksai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGwhPT11JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQ3ljbGVUbyl7dmFyIG89Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZXEoaCh1KSk7Yi5vbkN5Y2xlVG8uY2FsbCh0aGlzLG8sSil9fWZ1bmN0aW9uIGooKXt2YXIgYSxiLGMsZDthPURhdGUubm93KCksYj1hLUgsSD1hLGM9dC1HLEc9dCxkPTFlMypjLygxK2IpLEQ9LjgqZCsuMipEfWZ1bmN0aW9uIGsoKXt2YXIgYSxjO0ImJihhPURhdGUubm93KCktSCxjPUIqTWF0aC5leHAoLWEvYi5kdXJhdGlvbiksYz4yfHxjPC0yPyhpKEMtYykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKTppKEMpKX1mdW5jdGlvbiBsKGMpe2lmKEopcmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxjLnN0b3BQcm9wYWdhdGlvbigpLCExO2lmKCFiLmZ1bGxXaWR0aCl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChcIi5jYXJvdXNlbC1pdGVtXCIpLmluZGV4KCksZT11JXgtZDswIT09ZSYmKGMucHJldmVudERlZmF1bHQoKSxjLnN0b3BQcm9wYWdhdGlvbigpKSxtKGQpfX1mdW5jdGlvbiBtKGEpe3ZhciBjPXUleC1hO2Iubm9XcmFwfHwoYzwwP01hdGguYWJzKGMreCk8TWF0aC5hYnMoYykmJihjKz14KTpjPjAmJk1hdGguYWJzKGMteCk8YyYmKGMtPXgpKSxjPDA/Ty50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsW01hdGguYWJzKGMpXSk6Yz4wJiZPLnRyaWdnZXIoXCJjYXJvdXNlbFByZXZcIixbY10pfWZ1bmN0aW9uIG4oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLHY9ITAsSj0hMSxLPSExLHo9ZihhKSxBPWcoYSksRD1CPTAsRz10LEg9RGF0ZS5ub3coKSxjbGVhckludGVydmFsKEkpLEk9c2V0SW50ZXJ2YWwoaiwxMDApfWZ1bmN0aW9uIG8oYSl7dmFyIGIsYyxkO2lmKHYpaWYoYj1mKGEpLHk9ZyhhKSxjPXotYixkPU1hdGguYWJzKEEteSksZDwzMCYmIUspKGM+Mnx8YzwtMikmJihKPSEwLHo9YixpKHQrYykpO2Vsc2V7aWYoSilyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksITE7Sz0hMH1pZihKKXJldHVybiBhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSwhMX1mdW5jdGlvbiBwKGEpe2lmKHYpcmV0dXJuIHY9ITEsY2xlYXJJbnRlcnZhbChJKSxDPXQsKEQ+MTB8fEQ8LTEwKSYmKEI9LjkqRCxDPXQrQiksQz1NYXRoLnJvdW5kKEMvdykqdyxiLm5vV3JhcCYmKEM+PXcqKHgtMSk/Qz13Kih4LTEpOkM8MCYmKEM9MCkpLEI9Qy10LEg9RGF0ZS5ub3coKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoayksSiYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSwhMX12YXIgcSxyLHMsdCx1LHYsdyx4LHosQSxCLEMsRCxFLEYsRyxILEksSixLLEw9ZCtjLE09YSgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+JyksTj1udWxsLE89YSh0aGlzKSxQPU8uYXR0cihcImRhdGEtaW5kaWNhdG9yc1wiKXx8Yi5pbmRpY2F0b3JzLFE9ZnVuY3Rpb24oKXt2YXIgYj1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbSBpbWdcIikuZmlyc3QoKTtpZihiLmxlbmd0aCliLnByb3AoXCJjb21wbGV0ZVwiKT9PLmNzcyhcImhlaWdodFwiLGIuaGVpZ2h0KCkpOmIub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtPLmNzcyhcImhlaWdodFwiLGEodGhpcykuaGVpZ2h0KCkpfSk7ZWxzZXt2YXIgYz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmhlaWdodCgpO08uY3NzKFwiaGVpZ2h0XCIsYyl9fTtyZXR1cm4gYi5mdWxsV2lkdGgmJihiLmRpc3Q9MCxRKCksUCYmTy5maW5kKFwiLmNhcm91c2VsLWZpeGVkLWl0ZW1cIikuYWRkQ2xhc3MoXCJ3aXRoLWluZGljYXRvcnNcIikpLE8uaGFzQ2xhc3MoXCJpbml0aWFsaXplZFwiKT8oYSh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemVcIiksYSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsWzFlLTZdKSwhMCk6KE8uYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKSx2PSExLHQ9Qz0wLHE9W10scj1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVyV2lkdGgoKSxzPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKSx3PTIqcitiLnBhZGRpbmcsTy5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihiKXtpZihxLnB1c2goYSh0aGlzKVswXSksUCl7dmFyIGM9YSgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpOzA9PT1iJiZjLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuY2xpY2soZnVuY3Rpb24oYil7Yi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYz1hKHRoaXMpLmluZGV4KCk7bShjKX0pLE0uYXBwZW5kKGMpfX0pLFAmJk8uYXBwZW5kKE0pLHg9cS5sZW5ndGgsRj1cInRyYW5zZm9ybVwiLFtcIndlYmtpdFwiLFwiTW96XCIsXCJPXCIsXCJtc1wiXS5ldmVyeShmdW5jdGlvbihhKXt2YXIgYj1hK1wiVHJhbnNmb3JtXCI7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbYl18fChGPWIsITEpfSksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS5jYXJvdXNlbC1cIitMKS5vbihcInJlc2l6ZS5jYXJvdXNlbC1cIitMLGZ1bmN0aW9uKCl7Yi5mdWxsV2lkdGg/KHI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lcldpZHRoKCkscz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVySGVpZ2h0KCksdz0yKnIrYi5wYWRkaW5nLHQ9Mip1KnIsQz10KTppKCl9KSxlKCksaSh0KSxhKHRoaXMpLm9uKFwiY2Fyb3VzZWxOZXh0XCIsZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj0xKSxDPXcqTWF0aC5yb3VuZCh0L3cpK3cqYix0IT09QyYmKEI9Qy10LEg9RGF0ZS5ub3coKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaykpfSksYSh0aGlzKS5vbihcImNhcm91c2VsUHJldlwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MSksQz13Kk1hdGgucm91bmQodC93KS13KmIsdCE9PUMmJihCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKX0pLHZvaWQgYSh0aGlzKS5vbihcImNhcm91c2VsU2V0XCIsZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj0wKSxtKGIpfSkpfSl9LG5leHQ6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsW2JdKX0scHJldjpmdW5jdGlvbihiKXthKHRoaXMpLnRyaWdnZXIoXCJjYXJvdXNlbFByZXZcIixbYl0pfSxzZXQ6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxTZXRcIixbYl0pfX07YS5mbi5jYXJvdXNlbD1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuY2Fyb3VzZWxcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEoXCIjXCIrYSh0aGlzKS5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikpLGQ9KGEoXCJib2R5XCIpLGEodGhpcykpLGU9ZC5wYXJlbnQoXCIudGFwLXRhcmdldC13cmFwcGVyXCIpLGY9ZS5maW5kKFwiLnRhcC10YXJnZXQtd2F2ZVwiKSxnPWUuZmluZChcIi50YXAtdGFyZ2V0LW9yaWdpblwiKSxoPWQuZmluZChcIi50YXAtdGFyZ2V0LWNvbnRlbnRcIik7ZS5sZW5ndGh8fChlPWQud3JhcChhKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13cmFwcGVyXCI+PC9kaXY+JykpLnBhcmVudCgpKSxoLmxlbmd0aHx8KGg9YSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPjwvZGl2PicpLGQuYXBwZW5kKGgpKSxmLmxlbmd0aHx8KGY9YSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd2F2ZVwiPjwvZGl2PicpLGcubGVuZ3RofHwoZz1jLmNsb25lKCEwLCEwKSxnLmFkZENsYXNzKFwidGFwLXRhcmdldC1vcmlnaW5cIiksZy5yZW1vdmVBdHRyKFwiaWRcIiksZy5yZW1vdmVBdHRyKFwic3R5bGVcIiksZi5hcHBlbmQoZykpLGUuYXBwZW5kKGYpKTt2YXIgaT1mdW5jdGlvbigpe2UuaXMoXCIub3BlblwiKXx8KGUuYWRkQ2xhc3MoXCJvcGVuXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtnLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKS5vbihcImNsaWNrLnRhcFRhcmdldFwiLGZ1bmN0aW9uKGEpe2ooKSxnLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKX0pLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKS5vbihcImNsaWNrLnRhcFRhcmdldFwiLGZ1bmN0aW9uKGIpe2ooKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIil9KTt2YXIgYj1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2soKX0sMjAwKTthKHdpbmRvdykub2ZmKFwicmVzaXplLnRhcFRhcmdldFwiKS5vbihcInJlc2l6ZS50YXBUYXJnZXRcIixiKX0sMCkpfSxqPWZ1bmN0aW9uKCl7ZS5pcyhcIi5vcGVuXCIpJiYoZS5yZW1vdmVDbGFzcyhcIm9wZW5cIiksZy5vZmYoXCJjbGljay50YXBUYXJnZXRcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLGEod2luZG93KS5vZmYoXCJyZXNpemUudGFwVGFyZ2V0XCIpKX0saz1mdW5jdGlvbigpe3ZhciBiPVwiZml4ZWRcIj09PWMuY3NzKFwicG9zaXRpb25cIik7aWYoIWIpZm9yKHZhciBnPWMucGFyZW50cygpLGk9MDtpPGcubGVuZ3RoJiYhKGI9XCJmaXhlZFwiPT1hKGdbaV0pLmNzcyhcInBvc2l0aW9uXCIpKTtpKyspO3ZhciBqPWMub3V0ZXJXaWR0aCgpLGs9Yy5vdXRlckhlaWdodCgpLGw9Yj9jLm9mZnNldCgpLnRvcC1hKGRvY3VtZW50KS5zY3JvbGxUb3AoKTpjLm9mZnNldCgpLnRvcCxtPWI/Yy5vZmZzZXQoKS5sZWZ0LWEoZG9jdW1lbnQpLnNjcm9sbExlZnQoKTpjLm9mZnNldCgpLmxlZnQsbj1hKHdpbmRvdykud2lkdGgoKSxvPWEod2luZG93KS5oZWlnaHQoKSxwPW4vMixxPW8vMixyPW08PXAscz1tPnAsdD1sPD1xLHU9bD5xLHY9bT49LjI1Km4mJm08PS43NSpuLHc9ZC5vdXRlcldpZHRoKCkseD1kLm91dGVySGVpZ2h0KCkseT1sK2svMi14LzIsej1tK2ovMi13LzIsQT1iP1wiZml4ZWRcIjpcImFic29sdXRlXCIsQj12P3c6dy8yK2osQz14LzIsRD10P3gvMjowLEU9MCxGPXImJiF2P3cvMi1qOjAsRz0wLEg9aixJPXU/XCJib3R0b21cIjpcInRvcFwiLEo9aj5rPzIqajoyKmosSz1KLEw9eC8yLUsvMixNPXcvMi1KLzIsTj17fTtOLnRvcD10P3k6XCJcIixOLnJpZ2h0PXM/bi16LXc6XCJcIixOLmJvdHRvbT11P28teS14OlwiXCIsTi5sZWZ0PXI/ejpcIlwiLE4ucG9zaXRpb249QSxlLmNzcyhOKSxoLmNzcyh7d2lkdGg6QixoZWlnaHQ6Qyx0b3A6RCxyaWdodDpHLGJvdHRvbTpFLGxlZnQ6RixwYWRkaW5nOkgsdmVydGljYWxBbGlnbjpJfSksZi5jc3Moe3RvcDpMLGxlZnQ6TSx3aWR0aDpKLGhlaWdodDpLfSl9O1wib3BlblwiPT1iJiYoaygpLGkoKSksXCJjbG9zZVwiPT1iJiZqKCl9KX0sb3BlbjpmdW5jdGlvbigpe30sY2xvc2U6ZnVuY3Rpb24oKXt9fTthLmZuLnRhcFRhcmdldD1mdW5jdGlvbihjKXtyZXR1cm4gYltjXXx8XCJvYmplY3RcIj09dHlwZW9mIGM/Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFwLXRhcmdldFwiKX19KGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljL21hdGVyaWFsaXplLm1pbi5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICAgICAgPEFwcCBkYXRhPXtwcm9wc30+XG4gICAgICAgICAgICA8aDM+IEhlbGxvIDwvaDM+XG4gICAgICAgICAgICA8cD4gVGhpcyBpcyBhIHlpayB5YWsgc3R5bGUgYXBwIHRoYXQgc2hvd3MgeW91IHBvc3RzIHRoYXQgcGVvcGxlIHBvc3RlZCBuZWFyIHlvdS4gPGJyLz4gQ2hlY2sgb3V0IHRoZSBkaXNjb3ZlciBzZWN0aW9uISA8L3A+XG4gICAgICA8L0FwcD5cbikpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cblxuZnVuY3Rpb24gX2luaXRDbGllbnQgKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsXG4gICAgZGF0YUlkRnJvbU9iamVjdDogcmVzdWx0ID0+IHJlc3VsdC5pZCB8fCBudWxsLFxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dyYXBocWwnLFxuICAgICAgb3B0czoge1xuICAgICAgICBjcmVkZW50aWFsczogJ2Nyb3NzLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5pdENsaWVudCA9IChoZWFkZXJzLCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdENsaWVudC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpbml0Q2xpZW50IH0gZnJvbSAnLi4vbGliL2luaXRDbGllbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4gKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gY3R4LnJlcSA/IGN0eC5yZXEuaGVhZGVycyA6IHt9XG4gICAgICBjb25zdCBjbGllbnQgPSBpbml0Q2xpZW50KGhlYWRlcnMpXG5cbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICB1cmw6IHsgcXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZSB9LFxuICAgICAgICAuLi5hd2FpdCAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcHAgPSAoXG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIGRhdGE6IGNsaWVudC5nZXRJbml0aWFsU3RhdGUoKS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgIHRoaXMuY2xpZW50ID0gaW5pdENsaWVudCh0aGlzLnByb3BzLmhlYWRlcnMsIHRoaXMucHJvcHMuaW5pdGlhbFN0YXRlKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuY2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG5cbiAgICAgIClcbiAgICB9XG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        