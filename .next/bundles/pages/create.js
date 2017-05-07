
          window.__NEXT_REGISTER_PAGE('/create', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 666:
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
        }, 'Share your thoughts with people around you.'));
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

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(666);


/***/ })

},[667]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz80OGQ5ODQyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzQ4ZDk4NDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/NDhkOTg0MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/NDhkOTg0MiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzPzQ4ZDk4NDIiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRDbGllbnQuanM/NDhkOTg0MiIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/NDhkOTg0MiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanM/NDhkOTg0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzZGQUd3Qjs7OzttQkFDM0I7d0JBQVEsSUFDUjt3QkFBUSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUFFZDs7O2tCQUFZLE9BQU07d0NBQUE7O2lJQUVqQjs7Ozs7d0NBRUM7YUFBTyxTQUNQO2FBQU8sSUFDUDtBQUNEOzs7OzZCQUVDOzZCQUNFLHdCQUFNLFdBQVU7b0JBQWhCO3NCQUtJO0FBTEo7T0FBQSxrQkFLSyxrQ0FBTyxVQUFVLEtBQUssTUFBTSxLQUFLLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLO29CQUExRTtzQkFDQTtBQURBOzBCQUNBLHVCQUFLLFdBQVU7b0JBQWY7c0JBRUU7QUFGRjtjQUVPLE1BS2Q7Ozs7O0VBNUIwQixnQkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNUI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7SUFFYztrQ0FDbkI7O2tCQUFZLE9BQU07d0NBQUE7O2lJQUVqQjtBQUNEO0FBQ0E7QUFD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QU8sR0FBRSxJQUFFLElBQUcsRUFBRSxJQUFFLElBQUk7WUFBSSxJQUFFLEVBQUUsR0FBRyxLQUFHLEVBQUUsS0FBUTtjQUFTO2NBQVMsRUFBRSxHQUFHO2FBQU8sRUFBRSxVQUFVLEtBQUcsSUFBRSxHQUFHLE1BQU0sS0FBSyxLQUFHLEVBQUUsT0FBTyxPQUFLLElBQUUsQ0FBQyxLQUFNO2NBQVMsRUFBRSxHQUFHO1VBQUksSUFBRSxFQUFFLEtBQUssR0FBRSxZQUFZLE9BQU8sU0FBTyxJQUFFLElBQUk7Y0FBUyxFQUFFLEdBQUc7YUFBTyxVQUFTLEdBQUc7ZUFBTyxLQUFLLE1BQU0sSUFBRSxNQUFJLElBQUs7QUFBQztjQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRztlQUFTLEVBQUUsR0FBRSxHQUFHO2VBQU8sSUFBRSxJQUFFLElBQUUsSUFBSTtnQkFBUyxFQUFFLEdBQUUsR0FBRztlQUFPLElBQUUsSUFBRSxJQUFJO2dCQUFTLEVBQUUsR0FBRztlQUFPLElBQUk7Z0JBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztlQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUUsS0FBRyxJQUFFLEVBQUUsR0FBRSxNQUFJLElBQUUsRUFBRSxNQUFNO2dCQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7ZUFBTyxJQUFFLEVBQUUsR0FBRSxLQUFHLElBQUUsSUFBRSxJQUFFLEVBQUUsR0FBRSxLQUFHLElBQUUsRUFBSztnQkFBUyxFQUFFLEdBQUUsR0FBRzthQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEdBQUc7Y0FBSSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUcsSUFBRyxNQUFJLEdBQUUsT0FBTyxFQUFFLElBQUksSUFBRSxFQUFFLEdBQUUsR0FBRSxLQUFHLEVBQUUsS0FBRyxJQUFJO2dCQUFTO2dCQUFTLElBQUk7YUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxHQUFFO1lBQUUsS0FBRyxFQUFFLElBQUUsR0FBRSxHQUFFO0FBQUc7Z0JBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztZQUFJO1lBQUU7WUFBRSxJQUFFLEtBQUs7Y0FBRSxJQUFFLENBQUMsSUFBRSxLQUFHLEdBQUUsSUFBRSxFQUFFLEdBQUUsR0FBRSxLQUFHLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO1NBQXRDLFFBQThDLEtBQUssSUFBSSxLQUFHLEtBQUcsRUFBRSxJQUFFLEdBQUcsT0FBUztnQkFBUyxFQUFFLEdBQUc7YUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsS0FBRyxLQUFHLEVBQUUsTUFBSSxHQUFFLEVBQUUsR0FBRTtlQUFHO0FBQUUsV0FBRSxNQUFNLElBQUUsQ0FBQyxJQUFFLEVBQUUsT0FBSyxFQUFFLElBQUUsS0FBRyxFQUFFO0FBQXpCLFlBQTZCLElBQUUsSUFBRSxJQUFFO1lBQUUsSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFHLE9BQU8sS0FBRyxJQUFFLEVBQUUsR0FBRSxLQUFHLEtBQUcsSUFBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLElBQUs7Z0JBQVMsSUFBSTtZQUFFLENBQUMsR0FBRSxDQUFDLEtBQUcsS0FBRyxLQUFHLE1BQVE7V0FBSSxJQUFFO1VBQUUsSUFBRTtVQUFLLElBQUU7VUFBSyxJQUFFO1VBQUcsSUFBRTtVQUFHLElBQUUsS0FBRyxJQUFFO1VBQUcsSUFBRSxrQkFBaUIsRUFBRSxJQUFHLE1BQUksVUFBVSxRQUFPLE9BQU0sQ0FBQyxFQUFFLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRTtZQUFHLFlBQVUsT0FBTyxVQUFVLE1BQUksTUFBTSxVQUFVLE9BQUssQ0FBQyxTQUFTLFVBQVUsS0FBSSxPQUFNLENBQUM7QUFBRSxXQUFFLEtBQUssSUFBSSxHQUFFLElBQUcsSUFBRSxLQUFLLElBQUksR0FBRSxJQUFHLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRyxJQUFFLEtBQUssSUFBSSxHQUFFLE9BQU8sSUFBRSxJQUFFLElBQUksYUFBYSxLQUFHLElBQUksTUFBTTtBQUF0QyxVQUF5QyxJQUFFLENBQUM7VUFBRSxJQUFFLFdBQVMsR0FBRztlQUFPLEtBQUcsS0FBSSxNQUFJLEtBQUcsTUFBSSxJQUFFLElBQUUsTUFBSSxJQUFFLElBQUUsTUFBSSxJQUFFLElBQUUsRUFBRSxFQUFFLElBQUcsR0FBSztBQUFySCxVQUF3SCxtQkFBaUIsWUFBVztlQUFNLENBQUMsRUFBQyxHQUFFLEdBQUUsR0FBRSxLQUFHLEVBQUMsR0FBRSxHQUFFLEdBQU07QUFBMUQsUUFBMkQsSUFBSSxJQUFFLG9CQUFrQixDQUFDLEdBQUUsR0FBRSxHQUFFLEtBQUcsYUFBYSxXQUFTLFlBQVc7ZUFBUztBQUEvQixTQUFrQyxDQUF6QztjQUFrRCxFQUFFLEdBQUUsR0FBRztVQUFJLElBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxLQUFHLEVBQUUsUUFBUSxPQUFLLElBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxRQUFRLE1BQUksTUFBSSxFQUFFLFNBQU8sRUFBRSxNQUFNLE1BQUssS0FBRyxFQUFFLFFBQVEsTUFBSSxNQUFJLEVBQUUsU0FBTyxFQUFFLE1BQU0sTUFBSyxFQUFFLE9BQU8sQ0FBQyxPQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsTUFBSSxNQUFJLEVBQUUsV0FBUyxFQUFFLE1BQU0sTUFBSyxJQUFHLE1BQUksQ0FBQyxNQUFJLElBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxVQUFRLEVBQUUsU0FBUyxTQUFPLElBQUs7Y0FBUyxFQUFFLEdBQUc7VUFBRyxHQUFHO1lBQUksSUFBRyxJQUFJLE9BQU07WUFBVSxJQUFFLEVBQUUsTUFBTSxNQUFNLE9BQU8sSUFBRSxRQUFNLEVBQUUsTUFBTSxRQUFNLEVBQUUsRUFBRSxNQUFNLFFBQVEsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtjQUFHLEVBQUUsTUFBTSxNQUFNLElBQUk7Z0JBQUksSUFBRSxFQUFFLE1BQU0sTUFBTTtnQkFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRSxFQUFFO2dCQUFHLElBQUUsRUFBRTtnQkFBRyxJQUFFLENBQUMsQ0FBQztnQkFBRSxJQUFFLEtBQUssTUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFNLEdBQUcsS0FBRyxJQUFFLElBQUksS0FBSSxJQUFJLElBQUUsS0FBSyxJQUFJLENBQUMsSUFBRSxLQUFHLEVBQUUsVUFBUyxJQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUUsS0FBSztrQkFBSSxJQUFFLEVBQUU7a0JBQUcsSUFBRSxFQUFFLFFBQVEsSUFBRyxFQUFFLElBQUk7b0JBQUksSUFBRSxDQUFDLEVBQUUsSUFBRyxFQUFFLFlBQVUsS0FBRyxTQUFPLEVBQUUsV0FBUyxXQUFTLEVBQUUsU0FBUztzQkFBRyxXQUFTLEVBQUUsU0FBUzt3QkFBSSxJQUFFLENBQUMsZUFBYyxZQUFXLGVBQWMsa0JBQWtCLEtBQUssR0FBRSxVQUFTLEdBQUUsR0FBRzt3QkFBRSxpQkFBaUIsR0FBRSxXQUFhO0FBQUUscUJBQTNEO3FCQUE2RCxpQkFBaUIsR0FBRSxXQUFVLEVBQVc7bUJBQUUsZUFBYSxLQUFHLGFBQVcsRUFBRSxjQUFZLEVBQUUsaUJBQWlCLEdBQUUsY0FBYSxFQUFFLFlBQVksS0FBSSxJQUFJLEtBQUssR0FBRTtzQkFBRyxjQUFZLEdBQUc7d0JBQUk7d0JBQUUsSUFBRSxFQUFFO3dCQUFHLElBQUUsRUFBRSxTQUFTLEVBQUUsVUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFRLEVBQUUsT0FBTyxJQUFHLE1BQUksR0FBRSxJQUFFLEVBQUUsY0FBYzswQkFBSSxJQUFFLEVBQUUsV0FBUyxFQUFFLFdBQVcsSUFBRyxJQUFFLEVBQUUsYUFBVyxJQUFFLEVBQUUsR0FBRSxHQUFFLElBQUcsQ0FBQyxLQUFHLE1BQUksRUFBRSxjQUFzQjt5QkFBRyxFQUFFLGVBQWEsR0FBRSxZQUFVLEdBQUUsSUFBRSxPQUFPOzBCQUFHLEVBQUUsTUFBTSxXQUFXLElBQUk7NEJBQUksSUFBRSxFQUFFLE1BQU0sUUFBUTs0QkFBRyxJQUFFLEVBQUUsR0FBRyx1QkFBdUIsR0FBRyxNQUFJLEVBQUUsb0JBQXFCOzJCQUFJLElBQUUsRUFBRSxpQkFBaUIsR0FBRSxHQUFFLEVBQUUsZ0JBQWMsTUFBSSxXQUFXLEtBQUcsS0FBRyxFQUFFLFdBQVUsRUFBRSxtQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLE9BQUssRUFBRSxHQUFHLHVCQUF1QixLQUFHLEVBQUUsZUFBZSxXQUFXLEtBQUcsRUFBRSxlQUFlLFdBQVcsR0FBRyxXQUFVLE1BQUssRUFBRSxNQUFJLEVBQUUsS0FBSSxnQkFBYyxFQUFFLE9BQUssSUFBRSxDQUFJO0FBQUM7QUFBNW9CO0FBQTRvQixtQkFBRSxZQUFVLEVBQUUsR0FBRyxlQUFlLGdCQUFjLE1BQUksRUFBRSxHQUFHLGVBQWUsY0FBWSxtQkFBa0IsSUFBRSxDQUFDLElBQUcsS0FBRyxFQUFFLG9CQUF1QjtBQUFDO2VBQUUsWUFBVSxLQUFHLFdBQVMsRUFBRSxZQUFVLEVBQUUsTUFBTSxNQUFNLEdBQUcsR0FBRyxVQUFRLENBQUMsSUFBRyxFQUFFLGVBQWEsS0FBRyxhQUFXLEVBQUUsZUFBYSxFQUFFLE1BQU0sTUFBTSxHQUFHLEdBQUcsYUFBVyxDQUFDLElBQUcsRUFBRSxZQUFVLEVBQUUsU0FBUyxLQUFLLEVBQUUsSUFBRyxFQUFFLElBQUcsR0FBRSxLQUFLLElBQUksR0FBRSxJQUFFLEVBQUUsV0FBUyxJQUFHLEdBQUUsSUFBRyxNQUFJLEtBQUcsRUFBSztBQUFqakQ7QUFBa2pEO1NBQUUsTUFBTSxhQUFXLEVBQUs7Y0FBUyxFQUFFLEdBQUUsR0FBRztVQUFHLENBQUMsRUFBRSxNQUFNLE1BQU0sSUFBRyxPQUFNLENBQUMsRUFBRSxLQUFJLElBQUksSUFBRSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUcsSUFBRSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUcsSUFBRSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUcsSUFBRSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUcsSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxLQUFLO1lBQUksSUFBRSxFQUFFLEdBQUcsUUFBUSxJQUFHLEtBQUcsRUFBRSxTQUFPLFdBQVMsRUFBRSxXQUFTLEVBQUUsaUJBQWlCLEdBQUUsV0FBVSxFQUFFLFVBQVMsYUFBVyxFQUFFLGNBQVksRUFBRSxpQkFBaUIsR0FBRSxjQUFhLEVBQUUsY0FBYSxFQUFFLFNBQU8sQ0FBQyxNQUFJLEVBQUUsTUFBTSxHQUFHLE9BQUssS0FBRyxDQUFDLDRCQUE0QixLQUFLLEVBQUUsTUFBTSxHQUFHLFFBQU0sRUFBRSxJQUFJO1lBQUUsR0FBRyxjQUFZLENBQUMsR0FBRSxFQUFFLEdBQUcseUJBQXVCLEdBQUcsSUFBSSxJQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsTUFBTSxjQUFhLFVBQVMsR0FBRSxHQUFHO2dCQUFJLElBQUUsU0FBUyxLQUFLLEtBQUcsSUFBRTtnQkFBRSxJQUFFLEVBQUUsR0FBRyxlQUFlLEdBQUcsRUFBRSxHQUFHLGVBQWUsT0FBSyxLQUFHLElBQUksT0FBTyxTQUFPLElBQUUsUUFBUSxLQUFLLE9BQUssSUFBRSxDQUFDLEdBQUUsT0FBTyxFQUFFLEdBQUcsZUFBbUI7QUFBcE0sY0FBc00sRUFBRSxhQUFXLElBQUUsQ0FBQyxHQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsY0FBYSxLQUFHLEVBQUUsb0JBQW9CLElBQUcsRUFBRSxPQUFPLFlBQVksR0FBd0I7YUFBRyxDQUFDLEtBQUcsRUFBRSxZQUFVLENBQUMsRUFBRSxRQUFNLE1BQUksSUFBRSxPQUFNO1lBQUUsU0FBUyxLQUFLLEdBQUs7QUFBekIsVUFBeUIsT0FBTSxHQUFHO3FCQUFXLFlBQVc7a0JBQVE7QUFBOUIsYUFBa0M7Y0FBRyxFQUFFLFNBQU8sQ0FBQyxLQUFHLEVBQUUsSUFBRyxFQUFFLE1BQUksRUFBRSxTQUFPLENBQUMsS0FBRyxDQUFDLFFBQU0sS0FBSyxFQUFFLEdBQUcsaUJBQWdCLFVBQVMsR0FBRSxHQUFHO29CQUFVLEtBQUssTUFBSSxRQUFNLFdBQVcsRUFBRSxjQUFZLEVBQUUsV0FBUyxHQUFFLEVBQUUsYUFBVyxNQUFLLHNCQUFzQixLQUFLLE1BQUksUUFBTSxXQUFXLEVBQUUsYUFBVyxRQUFNLEVBQUUsYUFBVyxFQUFFLFdBQVMsR0FBRSxFQUFFLGFBQWdCO0FBQTFPLFlBQTRPLEVBQUUsR0FBRSxXQUFVLEVBQUMsTUFBSyxDQUFDLEdBQUUsT0FBTSxFQUFFLFdBQVMsRUFBRSxVQUFRLENBQUMsS0FBRyxFQUFFLFFBQVEsR0FBRSxFQUFTO1NBQUUsTUFBTSxNQUFNLEtBQUcsQ0FBQyxFQUFFLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sTUFBTSxRQUFPLElBQUUsR0FBRSxLQUFJO1lBQUcsRUFBRSxNQUFNLE1BQU0sT0FBSyxDQUFDLEdBQUc7Y0FBRSxDQUFDLEVBQVE7QUFBaEY7QUFBZ0YsYUFBSSxDQUFDLE1BQUksRUFBRSxNQUFNLFlBQVUsQ0FBQyxHQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU0sRUFBRSxNQUFNLFFBQVU7U0FBSTtRQUFFLGdCQUFhO1VBQUcsRUFBRSxjQUFhLE9BQU8sRUFBRSxhQUFhLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUs7WUFBSSxJQUFFLEVBQUUsY0FBYyxPQUFPLElBQUcsRUFBRSxZQUFVLGdCQUFjLElBQUUsK0JBQThCLEVBQUUscUJBQXFCLFFBQVEsUUFBTyxPQUFPLElBQUUsTUFBTztjQUFTO0FBQWpPO1FBQW9PLGdCQUFhO1VBQUksSUFBRSxTQUFTLEVBQUUsK0JBQTZCLEVBQUUsNEJBQTBCLFVBQVMsR0FBRztZQUFJO1lBQUUsSUFBRyxJQUFJLE9BQU0saUJBQWlCLElBQUUsS0FBSyxJQUFJLEdBQUUsTUFBSSxJQUFFLEtBQUksSUFBRSxJQUFFLGNBQWEsWUFBVztZQUFFLElBQUs7QUFBN0IsV0FBaUMsRUFBckU7QUFBc0UsT0FBakw7QUFBbkI7UUFBdU0sTUFBRyxVQUFTLGtCQUFTLEdBQUc7ZUFBTSxZQUFVLE9BQVM7QUFBL0MsU0FBZ0QsU0FBUSxNQUFNLFdBQVMsVUFBUyxHQUFHO2VBQU0scUJBQW1CLE9BQU8sVUFBVSxTQUFTLEtBQVE7QUFBOUksU0FBK0ksWUFBVyxvQkFBUyxHQUFHO2VBQU0sd0JBQXNCLE9BQU8sVUFBVSxTQUFTLEtBQVE7QUFBcE8sU0FBcU8sUUFBTyxnQkFBUyxHQUFHO2VBQU8sS0FBRyxFQUFXO0FBQTdRLFNBQThRLFlBQVcsb0JBQVMsR0FBRztlQUFNLG9CQUFpQiwrREFBRyxnREFBZ0QsS0FBSyxPQUFPLFVBQVUsU0FBUyxLQUFLLE9BQUssRUFBRSxXQUFTLE1BQUksTUFBSSxFQUFFLFVBQVEsa0NBQWlCLEVBQUUsT0FBSSxFQUFFLEdBQUcsV0FBWTtBQUE3ZCxTQUE4ZCxXQUFVLG1CQUFTLEdBQUc7ZUFBTyxNQUFJLEVBQUUsVUFBUSxFQUFFLFNBQU8sRUFBRSxNQUFNLE1BQU0sSUFBUTtBQUF4aUIsU0FBeWlCLE9BQU0sZUFBUyxHQUFHO2VBQU8sRUFBRSxjQUFZLGFBQWEsRUFBYTtBQUExbUIsU0FBMm1CLGVBQWMsdUJBQVMsR0FBRzthQUFJLElBQUksS0FBSyxHQUFFO2lCQUFNLENBQUM7QUFBRSxnQkFBTSxDQUFHO0FBQXRxQjtRQUF3cUIsSUFBRSxDQUFDLEVBQUUsSUFBRyxFQUFFLE1BQUksRUFBRSxHQUFHLFVBQVEsSUFBRSxHQUFFLElBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxTQUFTLFdBQVUsS0FBRyxLQUFHLENBQUMsR0FBRSxNQUFNLElBQUksTUFBTSx3RUFBd0UsSUFBRyxLQUFHLEdBQUUsT0FBTyxNQUFLLE9BQU8sR0FBRyxXQUFTLE9BQU8sR0FBRyxhQUFhLElBQUU7QUFBTixRQUFVLElBQUU7UUFBUSxNQUFHLE9BQU0sRUFBQyxVQUFTLGlFQUFpRSxLQUFLLFVBQVUsWUFBVyxXQUFVLFdBQVcsS0FBSyxVQUFVLFlBQVcsZUFBYyx1QkFBdUIsS0FBSyxVQUFVLFlBQVcsVUFBUyxFQUFFLFFBQU8sV0FBVSxXQUFXLEtBQUssVUFBVSxZQUFXLGVBQWMsRUFBRSxjQUFjLFFBQU8sZUFBYyxJQUFHLGNBQWEsTUFBSyxvQkFBbUIsTUFBSyxtQkFBa0IsTUFBSyxXQUFVLENBQUMsR0FBRSxPQUFNLE1BQUksS0FBSSxJQUFHLFdBQVUsR0FBRSxXQUFVLElBQUcsU0FBUSxJQUFHLFNBQVEsRUFBRSxTQUFRLFVBQVMsRUFBQyxPQUFNLElBQUcsVUFBUyxHQUFFLFFBQU8sR0FBRSxPQUFNLEdBQUUsVUFBUyxHQUFFLFVBQVMsR0FBRSxTQUFRLEdBQUUsWUFBVyxHQUFFLE1BQUssQ0FBQyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFVBQVMsQ0FBQyxHQUFFLGNBQWEsQ0FBQyxLQUFHLE1BQUssY0FBUyxHQUFHO1VBQUUsS0FBSyxHQUFFLFlBQVcsRUFBQyxPQUFNLEVBQUUsTUFBTSxJQUFHLGFBQVksQ0FBQyxHQUFFLGVBQWMsTUFBSyxpQkFBZ0IsTUFBSyx3QkFBdUIsSUFBRyxnQkFBb0I7QUFBNXdCLFNBQTZ3QixNQUFLLE1BQUssTUFBSyxDQUFDLEdBQUUsU0FBUSxFQUFDLE9BQU0sR0FBRSxPQUFNLEdBQUUsT0FBTSxLQUFHLE9BQU0sQ0FBQyxJQUFHLEVBQUUsZ0JBQWMsS0FBRyxFQUFFLE1BQU0sZUFBYSxHQUFFLEVBQUUsTUFBTSxxQkFBbUIsZUFBYyxFQUFFLE1BQU0sb0JBQWtCLGtCQUFnQixFQUFFLE1BQU0sZUFBYSxFQUFFLG1CQUFpQixFQUFFLEtBQUssY0FBWSxFQUFFLE1BQUssRUFBRSxNQUFNLHFCQUFtQixjQUFhLEVBQUUsTUFBTSxvQkFBa0IsaUJBQWlCLGdCQUFhO2VBQVMsRUFBRSxHQUFHO2VBQU0sQ0FBQyxFQUFFLFVBQVEsRUFBRSxJQUFFLEVBQUUsV0FBUyxFQUFJO2dCQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7WUFBSSxJQUFFLEVBQUMsR0FBRSxFQUFFLElBQUUsRUFBRSxLQUFHLEdBQUUsR0FBRSxFQUFFLElBQUUsRUFBRSxLQUFHLEdBQUUsU0FBUSxFQUFFLFNBQVEsVUFBUyxFQUFFLFdBQVUsT0FBTSxFQUFDLElBQUcsRUFBRSxHQUFFLElBQUcsRUFBTTtnQkFBUyxFQUFFLEdBQUUsR0FBRztZQUFJLElBQUUsRUFBQyxJQUFHLEVBQUUsR0FBRSxJQUFHLEVBQUU7WUFBSSxJQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUU7WUFBRyxJQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUU7WUFBRyxJQUFFLEVBQUUsR0FBRSxHQUFFO1lBQUcsSUFBRSxJQUFFLEtBQUcsRUFBRSxLQUFHLEtBQUcsRUFBRSxLQUFHLEVBQUUsTUFBSSxFQUFFO1lBQUksSUFBRSxJQUFFLEtBQUcsRUFBRSxLQUFHLEtBQUcsRUFBRSxLQUFHLEVBQUUsTUFBSSxFQUFFLElBQUksT0FBTyxFQUFFLElBQUUsRUFBRSxJQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsRUFBRSxJQUFFLElBQUUsR0FBSTtjQUFPLFNBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztZQUFJO1lBQUU7WUFBRTtZQUFFLElBQUUsRUFBQyxHQUFFLENBQUMsR0FBRSxHQUFFLEdBQUUsU0FBUSxNQUFLLFVBQVM7WUFBTSxJQUFFLENBQUM7WUFBRyxJQUFFO1lBQUUsSUFBRTtZQUFLLElBQUUsS0FBSyxLQUFJLElBQUUsV0FBVyxNQUFJLEtBQUksSUFBRSxXQUFXLE1BQUksSUFBRyxJQUFFLEtBQUcsTUFBSyxFQUFFLFVBQVEsR0FBRSxFQUFFLFdBQVMsR0FBRSxJQUFFLFNBQU8sR0FBRSxLQUFHLElBQUUsRUFBRSxHQUFFLElBQUcsSUFBRSxJQUFFLElBQUUsS0FBRyxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUcsR0FBRSxJQUFHLEVBQUUsS0FBSyxJQUFFLEVBQUUsSUFBRyxLQUFHLElBQUcsS0FBSyxJQUFJLEVBQUUsS0FBRyxLQUFHLEtBQUssSUFBSSxFQUFFLEtBQUcsaUJBQWEsVUFBUyxHQUFHO2lCQUFPLEVBQUUsS0FBRyxFQUFFLFNBQU8sS0FBTTtBQUF6QyxZQUE0QyxDQUFuRDtBQUFvRDtBQUEzcUIsT0FBTixHQUFzckIsWUFBUyxRQUFPLGdCQUFTLEdBQUc7ZUFBUztBQUE3QixTQUE4QixPQUFNLGVBQVMsR0FBRztlQUFNLEtBQUcsS0FBSyxJQUFJLElBQUUsS0FBSyxNQUFNO0FBQS9FLFNBQWdGLFFBQU8sZ0JBQVMsR0FBRztlQUFPLElBQUUsS0FBSyxJQUFJLE1BQUksSUFBRSxLQUFLLE1BQUksS0FBSyxJQUFJLElBQUUsQ0FBSTtBQUFuSixhQUF1SixLQUFLLENBQUMsQ0FBQyxRQUFPLENBQUMsS0FBSSxJQUFHLEtBQUksS0FBSSxDQUFDLFdBQVUsQ0FBQyxLQUFJLEdBQUUsR0FBRSxLQUFJLENBQUMsWUFBVyxDQUFDLEdBQUUsR0FBRSxLQUFJLEtBQUksQ0FBQyxlQUFjLENBQUMsS0FBSSxHQUFFLEtBQUksS0FBSSxDQUFDLGNBQWEsQ0FBQyxLQUFJLEdBQUUsTUFBSyxRQUFPLENBQUMsZUFBYyxDQUFDLEtBQUksTUFBSyxNQUFLLEtBQUksQ0FBQyxpQkFBZ0IsQ0FBQyxNQUFLLEtBQUksS0FBSSxPQUFNLENBQUMsY0FBYSxDQUFDLEtBQUksTUFBSyxLQUFJLE9BQU0sQ0FBQyxlQUFjLENBQUMsS0FBSSxLQUFJLEtBQUksT0FBTSxDQUFDLGlCQUFnQixDQUFDLE1BQUssS0FBSSxNQUFLLFFBQU8sQ0FBQyxlQUFjLENBQUMsS0FBSSxNQUFLLE1BQUssT0FBTSxDQUFDLGdCQUFlLENBQUMsTUFBSyxLQUFJLE1BQUssS0FBSSxDQUFDLGtCQUFpQixDQUFDLE1BQUssTUFBSyxNQUFLLEtBQUksQ0FBQyxlQUFjLENBQUMsTUFBSyxLQUFJLE1BQUssT0FBTSxDQUFDLGdCQUFlLENBQUMsTUFBSyxLQUFJLEtBQUksS0FBSSxDQUFDLGtCQUFpQixDQUFDLEtBQUksR0FBRSxNQUFLLEtBQUksQ0FBQyxlQUFjLENBQUMsTUFBSyxLQUFJLE1BQUssT0FBTSxDQUFDLGdCQUFlLENBQUMsS0FBSSxHQUFFLEtBQUksS0FBSSxDQUFDLGtCQUFpQixDQUFDLEtBQUksR0FBRSxLQUFJLEtBQUksQ0FBQyxjQUFhLENBQUMsS0FBSSxLQUFJLE1BQUssUUFBTyxDQUFDLGVBQWMsQ0FBQyxLQUFJLEdBQUUsS0FBSSxLQUFJLENBQUMsaUJBQWdCLENBQUMsR0FBRSxHQUFFLEdBQUUsS0FBSSxDQUFDLGNBQWEsQ0FBQyxJQUFHLEtBQUksS0FBSSxRQUFPLENBQUMsZUFBYyxDQUFDLE1BQUssS0FBSSxNQUFLLEtBQUksQ0FBQyxpQkFBZ0IsQ0FBQyxNQUFLLE1BQUssS0FBSSxRQUFPLFVBQVMsR0FBRSxHQUFHO1FBQUUsUUFBUSxFQUFFLE1BQUksRUFBRSxNQUFNLE1BQUssRUFBTTtBQUFuM0IsTUFBL0osQ0FBb2hDLElBQUksSUFBRSxFQUFFLFFBQUssT0FBTSxFQUFDLE9BQU0seUJBQXdCLGFBQVkscUJBQW9CLDhCQUE2QixzQ0FBcUMsWUFBVyxnREFBOEMsT0FBTSxFQUFDLFFBQU8sQ0FBQyxRQUFPLFVBQVMsYUFBWSxTQUFRLG1CQUFrQixlQUFjLGtCQUFpQixvQkFBbUIscUJBQW9CLG1CQUFrQixpQkFBZ0IsZ0JBQWUsQ0FBQyxjQUFhLGNBQWEsU0FBUSxVQUFTLFVBQVMsU0FBUSxTQUFRLFlBQVcsY0FBYSxDQUFDLHdCQUF1QixjQUFhLFVBQVMsV0FBVSxjQUFZLFNBQU8sV0FBVSxFQUFDLFlBQVcsQ0FBQyxrQkFBaUIsc0JBQXFCLFdBQVUsQ0FBQyx5QkFBd0IsMEJBQXlCLE1BQUssQ0FBQyx5QkFBd0Isb0JBQW1CLG9CQUFtQixDQUFDLE9BQU0sVUFBUyxpQkFBZ0IsQ0FBQyxTQUFRLGdCQUFlLG1CQUFrQixDQUFDLE9BQU0sY0FBWSxZQUFXLElBQUcsVUFBUyxvQkFBVztlQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLE9BQU8sUUFBTyxLQUFLO2dCQUFJLElBQUUsWUFBVSxFQUFFLE1BQU0sT0FBTyxLQUFHLFlBQVUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLEVBQUUsTUFBTSxPQUFPLE1BQUksQ0FBQyx3QkFBMEI7ZUFBSSxHQUFFLEdBQUUsRUFBRSxJQUFHLEdBQUUsS0FBSSxLQUFLLEVBQUUsTUFBTSxXQUFXO2dCQUFFLEVBQUUsTUFBTSxVQUFVLElBQUcsSUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLElBQUksSUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLE1BQU0sWUFBWSxZQUFVLEVBQUUsT0FBSyxFQUFFLEtBQUssRUFBRSxVQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVMsRUFBRSxNQUFNLFVBQVUsS0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFLLEVBQUUsS0FBWTtnQkFBSSxLQUFLLEVBQUUsTUFBTSxXQUFXO2dCQUFFLEVBQUUsTUFBTSxVQUFVLElBQUcsSUFBRSxFQUFFLEdBQUcsTUFBTSxLQUFLLEtBQUksSUFBSSxLQUFLLEdBQUc7a0JBQUksSUFBRSxJQUFFLEVBQUU7a0JBQUcsSUFBRSxFQUFFLEVBQUUsTUFBTSxXQUFXLEtBQUcsQ0FBQyxHQUFLO0FBQUM7QUFBQztBQUFwMEIsV0FBcTBCLFNBQVEsaUJBQVMsR0FBRztjQUFJLElBQUUsRUFBRSxNQUFNLFdBQVcsR0FBRyxPQUFPLElBQUUsRUFBRSxLQUFLO0FBQXI0QixXQUFzNEIsd0JBQXVCLGdDQUFTLEdBQUUsR0FBRztpQkFBTyxFQUFFLE1BQU0sWUFBWSxLQUFLLE9BQUssSUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsS0FBSSxFQUFFLE9BQU8sZUFBZSxPQUFLLElBQUUsRUFBRSxNQUFNLFVBQVUsR0FBRyxLQUFNO0FBQTdpQyxXQUE4aUMsY0FBYSxzQkFBUyxHQUFFLEdBQUc7Y0FBSSxJQUFFLEVBQUUsTUFBTSxXQUFXLEdBQUcsSUFBRyxHQUFHO2dCQUFJLElBQUUsRUFBRTtnQkFBRyxJQUFFLEVBQUUsR0FBRyxPQUFPLElBQUUsRUFBRSxNQUFNLHVCQUF1QixHQUFFLElBQUcsRUFBRSxXQUFXLE1BQU0sRUFBRSxNQUFNLFlBQWU7a0JBQVM7QUFBN3RDLFdBQTh0QyxhQUFZLHFCQUFTLEdBQUUsR0FBRSxHQUFHO2NBQUksSUFBRSxFQUFFLE1BQU0sV0FBVyxHQUFHLElBQUcsR0FBRztnQkFBSTtnQkFBRTtnQkFBRSxJQUFFLEVBQUU7Z0JBQUcsSUFBRSxFQUFFLEdBQUcsT0FBTyxJQUFFLEVBQUUsTUFBTSx1QkFBdUIsR0FBRSxJQUFHLElBQUUsRUFBRSxXQUFXLE1BQU0sRUFBRSxNQUFNLGFBQVksRUFBRSxLQUFHLEdBQUUsSUFBRSxFQUFFLEtBQVU7a0JBQVM7QUFBdDZDLGFBQXc2QyxrQkFBZ0IsY0FBWSxNQUFLLGNBQVMsR0FBRSxHQUFFLEdBQUc7b0JBQU8sSUFBRyxLQUFXO3VCQUFNLE9BQU8sS0FBYztvQkFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixLQUFLLEtBQUcsSUFBRSxLQUFHLElBQUUsRUFBRSxXQUFXLE1BQU0sRUFBRSxNQUFNLGNBQWEsSUFBRSxJQUFFLEVBQUUsR0FBRyxRQUFRLFlBQVcsT0FBSyxJQUFHLEVBQUUsS0FBYTt1QkFBTSxVQUFRLElBQU87QUFBdlAsYUFBd1AsTUFBSyxjQUFTLEdBQUUsR0FBRSxHQUFHO29CQUFPLElBQUcsS0FBVzt1QkFBTyxFQUFFLE1BQU0sWUFBVSxXQUFTLGlCQUFpQixLQUFjO29CQUFJLElBQUUsV0FBVyxHQUFHLElBQUcsQ0FBQyxLQUFHLE1BQUksR0FBRztzQkFBSSxJQUFFLEVBQUUsV0FBVyxNQUFNLDJCQUEyQixJQUFFLElBQUUsRUFBRSxLQUFLO3dCQUFPLEVBQUUsS0FBYTt1QkFBTyxXQUFXLEtBQUcsVUFBUSxJQUFFLE1BQVk7QUFBcmdCLGFBQXNnQixTQUFRLGlCQUFTLEdBQUUsR0FBRSxHQUFHO2dCQUFHLEtBQUcsR0FBRSxRQUFPLElBQUcsS0FBVzt1QkFBTSxTQUFTLEtBQWM7b0JBQUksSUFBRSxFQUFFLFdBQVcsTUFBTSwwQkFBMEIsT0FBTyxJQUFFLElBQUUsRUFBRSxLQUFHLE1BQUksRUFBRSxLQUFhO3VCQUFPLEVBQUUsTUFBTSxPQUFLLEdBQUUsV0FBVyxNQUFJLElBQUUsS0FBRyxtQkFBaUIsU0FBUyxNQUFJLFdBQVcsSUFBRyxNQUFJLG1CQUFnQixJQUFHLEtBQVc7dUJBQU0sVUFBVSxLQUFjO3VCQUFPLEVBQUUsS0FBYTt1QkFBVSxFQUFuRjtBQUFqeEIsZUFBczJCLFVBQVMsb0JBQVc7ZUFBRyxLQUFHLEVBQUUsTUFBTSxrQkFBZ0IsRUFBRSxNQUFNLGlCQUFlLEVBQUUsTUFBTSxlQUFlLE9BQU8sRUFBRSxNQUFNLGVBQWUsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxlQUFlLFFBQU8sS0FBSTthQUFDLFlBQVc7a0JBQUksSUFBRSxFQUFFLE1BQU0sZUFBZSxLQUFLLGVBQWUsV0FBVyxLQUFHLFVBQVMsR0FBRSxHQUFFLEdBQUc7d0JBQU8sSUFBRyxLQUFXOzJCQUFNLFlBQVksS0FBYzsyQkFBTyxFQUFFLE9BQUssS0FBRyxFQUFFLEdBQUcsZUFBZSxPQUFLLElBQUUsVUFBVSxLQUFLLEtBQUcsSUFBRSxJQUFFLEVBQUUsR0FBRyxlQUFlLEdBQUcsUUFBUSxTQUFRLElBQUksS0FBYTt3QkFBSSxJQUFFLENBQUMsRUFBRSxRQUFPLEVBQUUsT0FBTyxHQUFFLEVBQUUsU0FBTyxLQUFJLEtBQWdCOzRCQUFFLENBQUMsMkJBQTJCLEtBQUssR0FBRyxNQUFNLEtBQUksT0FBTyxLQUFZOzBCQUFFLE1BQU0sYUFBVyxFQUFFLEdBQUcsZUFBZSxPQUFLLEtBQUcsSUFBRSxNQUFJLElBQUUsSUFBRyxJQUFFLENBQUMsU0FBUyxLQUFLLEdBQUcsTUFBTSxLQUFXOzRCQUFFLENBQUMsYUFBYSxLQUFLLEdBQUcsTUFBTSxLQUFhOzRCQUFFLENBQUMsYUFBYSxLQUFLLElBQUcsT0FBTyxNQUFJLEVBQUUsR0FBRyxlQUFlLEtBQUcsTUFBSSxJQUFFLE1BQUssRUFBRSxHQUFHLGVBQW1CO0FBQUMsZUFBamtCO0FBQTNDO0FBQSttQixnQkFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxPQUFPLFFBQU8sS0FBSTthQUFDLFlBQVc7a0JBQUksSUFBRSxFQUFFLE1BQU0sT0FBTyxLQUFLLGVBQWUsV0FBVyxLQUFHLFVBQVMsR0FBRSxHQUFFLEdBQUc7d0JBQU8sSUFBRyxLQUFXOzJCQUFPLEVBQUUsS0FBYzt3QkFBSSxFQUFFLElBQUcsRUFBRSxNQUFNLDZCQUE2QixLQUFLLElBQUcsSUFBRSxPQUFPOzBCQUFJOzBCQUFFLElBQUUsRUFBQyxPQUFNLGdCQUFlLE1BQUssa0JBQWlCLE1BQUssc0JBQXFCLE9BQU0sa0JBQWlCLEtBQUksa0JBQWlCLE9BQU0sdUJBQXNCLFlBQVksS0FBSyxLQUFHLElBQUUsRUFBRSxPQUFLLElBQUUsRUFBRSxLQUFHLEVBQUUsUUFBTSxFQUFFLE1BQU0sTUFBTSxLQUFLLEtBQUcsSUFBRSxTQUFPLEVBQUUsT0FBTyxTQUFTLEdBQUcsS0FBSyxPQUFLLE1BQUksWUFBWSxLQUFLLE9BQUssSUFBRSxFQUFFLFFBQU8sSUFBRSxDQUFDLEtBQUcsR0FBRyxXQUFXLE1BQU0sRUFBRSxNQUFNLGFBQWEsR0FBRyxRQUFRLFlBQWdCOzRCQUFPLEtBQUcsS0FBRyxNQUFJLEVBQUUsTUFBTSxLQUFLLFdBQVMsS0FBRyxPQUFNLEVBQUUsS0FBYTsyQkFBTyxLQUFHLElBQUUsTUFBSSxFQUFFLE1BQU0sS0FBSyxXQUFTLElBQUUsRUFBRSxNQUFNLE9BQU8sTUFBTSxHQUFFLEdBQUcsS0FBSyxRQUFNLE1BQUksRUFBRSxNQUFNLEtBQUssV0FBUyxLQUFHLE9BQU0sQ0FBQyxLQUFHLElBQUUsUUFBTSxVQUFRLE1BQUksRUFBRSxRQUFRLFFBQU8sS0FBSyxRQUFRLGlCQUFnQixNQUFTO0FBQUMsZUFBeHdCO0FBQW5DO0FBQTh5QjtBQUF2K0UsYUFBeStFLFNBQU8sV0FBVSxtQkFBUyxHQUFHO21CQUFTLFFBQVEsVUFBUyxVQUFTLEdBQUUsR0FBRzttQkFBTyxFQUFnQjtBQUFFLFdBQTFEO0FBQTlCLFdBQXlGLGNBQWEsc0JBQVMsR0FBRztjQUFJLElBQUUsNkNBQTZDLE9BQU0sQ0FBQyxLQUFHLEVBQUUsTUFBTSxhQUFXLENBQUMsRUFBRSxNQUFNLGNBQVksS0FBRyxlQUFjLElBQUksT0FBTyxPQUFLLElBQUUsTUFBSyxLQUFLLEtBQVE7QUFBNVEsV0FBNlEsYUFBWSxxQkFBUyxHQUFHO2NBQUcsRUFBRSxNQUFNLGNBQWMsSUFBRyxPQUFNLENBQUMsRUFBRSxNQUFNLGNBQWMsSUFBRyxDQUFDLEdBQUcsS0FBSSxJQUFJLElBQUUsQ0FBQyxJQUFHLFVBQVMsT0FBTSxNQUFLLE1BQUssSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxLQUFLO2dCQUFJLEVBQUUsUUFBSyxNQUFJLElBQUUsSUFBRSxFQUFFLE9BQUssUUFBUSxPQUFNLFVBQVMsR0FBRztxQkFBTyxFQUFnQjtBQUFuRCxjQUFmLEVBQW9FLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxNQUFNLEtBQUksT0FBTyxFQUFFLE1BQU0sY0FBYyxLQUFHLEdBQUUsQ0FBQyxHQUFFLENBQUk7a0JBQU0sQ0FBQyxHQUFFLENBQUk7QUFBbGxCLGFBQW9sQixVQUFRLFVBQVMsa0JBQVMsR0FBRztjQUFJO2NBQUUsSUFBRTtjQUFtQyxJQUFFLDRDQUE0QyxhQUFXLFFBQVEsR0FBRSxVQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUc7bUJBQU8sSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFJO0FBQWpELFlBQUYsRUFBcUQsSUFBRSxFQUFFLEtBQUssSUFBRyxJQUFFLENBQUMsU0FBUyxFQUFFLElBQUcsS0FBSSxTQUFTLEVBQUUsSUFBRyxLQUFJLFNBQVMsRUFBRSxJQUFHLE9BQUssQ0FBQyxHQUFFLEdBQUs7QUFBelAsV0FBMFAsZ0JBQWUsd0JBQVMsR0FBRztpQkFBTyxLQUFHLEtBQUcscURBQXFELEtBQVE7QUFBL1YsV0FBZ1csYUFBWSxxQkFBUyxHQUFHO0FBQU0sb0NBQWtCLEtBQUssS0FBRyxRQUFNLGtIQUFrSCxLQUFLLEtBQUcsS0FBUTs7QUFBaGlCLFdBQWlpQixnQkFBZSx3QkFBUyxHQUFHO2NBQUksSUFBRSxLQUFHLEVBQUUsUUFBUSxXQUFXLGlMQUErSyxLQUFLLEtBQUcsV0FBUyxVQUFVLEtBQUssS0FBRyxjQUFZLFVBQVUsS0FBSyxLQUFHLGNBQVksYUFBYSxLQUFLLEtBQUcsVUFBUSxhQUFhLEtBQUssS0FBRyxvQkFBMEI7QUFBcFQ7QUFBOW1CLFdBQW02QixVQUFTLGtCQUFTLEdBQUUsR0FBRztZQUFFLFlBQVUsRUFBRSxVQUFVLElBQUksS0FBRyxFQUFFLGFBQVcsQ0FBQyxFQUFFLFVBQVUsU0FBTyxNQUFJLE1BQU07QUFBcGdDLFdBQXFnQyxhQUFZLHFCQUFTLEdBQUUsR0FBRztZQUFFLFlBQVUsRUFBRSxVQUFVLE9BQU8sS0FBRyxFQUFFLFlBQVUsRUFBRSxVQUFVLFdBQVcsUUFBUSxJQUFJLE9BQU8sWUFBVSxFQUFFLE1BQU0sS0FBSyxLQUFLLE9BQUssV0FBVSxPQUFXO0FBQTdxQyxhQUErcUMsa0JBQWlCLDBCQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUc7aUJBQVMsRUFBRSxHQUFFLEdBQUc7bUJBQVMsSUFBSTtpQkFBRyxFQUFFLGlCQUFpQixHQUFFLFdBQWtCO2VBQUksSUFBRSxFQUFFLElBQUcsS0FBRyxHQUFFLElBQUUsRUFBRSxJQUFJLEdBQUUsUUFBUTtnQkFBSSxJQUFFLENBQUMsRUFBRSxJQUFHLG1CQUFtQixLQUFLLE1BQUksTUFBSSxFQUFFLGlCQUFpQixHQUFFLGVBQWEsSUFBRSxDQUFDLEdBQUUsRUFBRSxpQkFBaUIsR0FBRSxXQUFVLEVBQUUsT0FBTyxlQUFlLE1BQUssQ0FBQyxHQUFHO2tCQUFHLGFBQVcsS0FBRyxpQkFBZSxFQUFFLGlCQUFpQixHQUFFLGFBQWEsV0FBVyxlQUFlO29CQUFJLElBQUUsRUFBRSxnQkFBYyxXQUFXLEVBQUUsaUJBQWlCLEdBQUUsc0JBQW9CLE1BQUksV0FBVyxFQUFFLGlCQUFpQixHQUFFLHlCQUF1QixNQUFJLFdBQVcsRUFBRSxpQkFBaUIsR0FBRSxrQkFBZ0IsTUFBSSxXQUFXLEVBQUUsaUJBQWlCLEdBQUUscUJBQW1CLEdBQUcsT0FBTyxLQUFNO21CQUFHLFlBQVUsS0FBRyxpQkFBZSxFQUFFLGlCQUFpQixHQUFFLGFBQWEsV0FBVyxlQUFlO29CQUFJLElBQUUsRUFBRSxlQUFhLFdBQVcsRUFBRSxpQkFBaUIsR0FBRSx1QkFBcUIsTUFBSSxXQUFXLEVBQUUsaUJBQWlCLEdBQUUsd0JBQXNCLE1BQUksV0FBVyxFQUFFLGlCQUFpQixHQUFFLG1CQUFpQixNQUFJLFdBQVcsRUFBRSxpQkFBaUIsR0FBRSxvQkFBa0IsR0FBRyxPQUFPLEtBQU07QUFBQztpQkFBSSxFQUFFLElBQUUsRUFBRSxPQUFLLElBQUUsRUFBRSxpQkFBaUIsR0FBRSxRQUFNLEVBQUUsR0FBRyxnQkFBYyxFQUFFLEdBQUcsZ0JBQWMsRUFBRSxHQUFHLGdCQUFjLEVBQUUsaUJBQWlCLEdBQUUsT0FBTSxrQkFBZ0IsTUFBSSxJQUFFLG1CQUFrQixJQUFFLE1BQUksS0FBRyxhQUFXLElBQUUsRUFBRSxpQkFBaUIsS0FBRyxFQUFFLElBQUcsQ0FBQyxPQUFLLEtBQUcsU0FBTyxPQUFLLElBQUUsRUFBRSxNQUFNLEtBQVE7ZUFBRyxXQUFTLEtBQUcsNkJBQTZCLEtBQUssSUFBSTtnQkFBSSxJQUFFLEVBQUUsR0FBRSxZQUFZLENBQUMsWUFBVSxLQUFHLGVBQWEsS0FBRyxZQUFZLEtBQUssUUFBTSxJQUFFLEVBQUUsR0FBRyxXQUFXLEtBQVM7a0JBQVM7YUFBSSxNQUFLLEVBQUUsTUFBTSxXQUFXLElBQUk7Y0FBSSxJQUFFO2NBQUUsSUFBRSxFQUFFLE1BQU0sUUFBUSxHQUFHLE1BQUksTUFBSSxJQUFFLEVBQUUsaUJBQWlCLEdBQUUsRUFBRSxNQUFNLFlBQVksR0FBRyxNQUFLLEVBQUUsZUFBZSxXQUFXLE9BQUssSUFBRSxFQUFFLGVBQWUsV0FBVyxHQUFHLFdBQVUsR0FBRSxLQUFJLElBQUUsRUFBRSxNQUFNLGFBQWEsR0FBSztBQUFoTyxlQUFxTyxJQUFHLEVBQUUsZUFBZSxXQUFXLElBQUk7Y0FBSSxHQUFFLEVBQUUsSUFBRSxFQUFFLGVBQWUsV0FBVyxHQUFHLFFBQU8sSUFBRyxnQkFBYyxNQUFJLElBQUUsRUFBRSxHQUFFLEVBQUUsTUFBTSxZQUFZLEdBQUcsS0FBSSxFQUFFLE9BQU8sZUFBZSxNQUFJLEVBQUUsTUFBTSxVQUFVLE9BQUssSUFBRSxFQUFFLE1BQU0sVUFBVSxHQUFHLE1BQUssSUFBRSxFQUFFLGVBQWUsV0FBVyxHQUFHLFdBQVUsR0FBSzthQUFHLENBQUMsU0FBUyxLQUFLLFFBQU0sRUFBRSxNQUFJLEVBQUUsR0FBRyxTQUFPLEVBQUUsTUFBTSxhQUFhLElBQUc7Y0FBRyxvQkFBb0IsS0FBSyxRQUFPO2dCQUFFLEVBQUUsVUFBYTtBQUFyQixZQUFxQixPQUFNLEdBQUc7Z0JBQUk7QUFBakUsaUJBQXNFLElBQUUsRUFBRSxhQUFhO1NBQXBJLE1BQTRJLElBQUUsRUFBRSxHQUFFLEVBQUUsTUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsT0FBTyxlQUFlLE9BQUssSUFBRSxJQUFHLEVBQUUsU0FBTyxLQUFHLFFBQVEsSUFBSSxTQUFPLElBQUUsT0FBSyxJQUFLO0FBQXYxUSxTQUF3MVEsa0JBQWlCLDBCQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRztZQUFJLElBQUUsRUFBRSxJQUFHLGFBQVcsR0FBRSxFQUFFLFlBQVUsRUFBRSxVQUFVLFdBQVMsRUFBRSxhQUFXLElBQUUsV0FBUyxFQUFFLFlBQVUsRUFBRSxTQUFTLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWUsUUFBUSxJQUFHLEVBQUUsZUFBZSxXQUFXLE1BQUksZ0JBQWMsRUFBRSxlQUFlLFdBQVcsR0FBRyxRQUFPLElBQUcsRUFBRSxlQUFlLFdBQVcsR0FBRyxVQUFTLEdBQUUsSUFBRyxJQUFFLGFBQVksSUFBRSxFQUFFLEdBQUcsZUFBZSxRQUFRO2NBQUcsRUFBRSxNQUFNLFdBQVcsSUFBSTtnQkFBSSxJQUFFO2dCQUFFLElBQUUsRUFBRSxNQUFNLFFBQVEsR0FBRyxJQUFFLEtBQUcsRUFBRSxpQkFBaUIsR0FBRSxJQUFHLElBQUUsRUFBRSxNQUFNLFlBQVksR0FBRSxHQUFFLElBQUcsSUFBSTtlQUFHLEVBQUUsZUFBZSxXQUFXLE9BQUssSUFBRSxFQUFFLGVBQWUsV0FBVyxHQUFHLFVBQVMsR0FBRSxJQUFHLElBQUUsRUFBRSxlQUFlLFdBQVcsR0FBRyxRQUFPLEtBQUksSUFBRSxFQUFFLE1BQU0sWUFBWSxHQUFHLElBQUcsS0FBRyxPQUFNO2NBQUUsTUFBTSxLQUFLO0FBQWpCLFlBQWlCLE9BQU0sR0FBRztjQUFFLFNBQU8sUUFBUSxJQUFJLCtCQUE2QixJQUFFLFlBQVUsSUFBTztBQUEvUCxpQkFBb1EsRUFBRSxNQUFJLEVBQUUsR0FBRyxTQUFPLEVBQUUsTUFBTSxhQUFhLEtBQUcsRUFBRSxhQUFhLEdBQUUsS0FBRyxFQUFFLE1BQU0sS0FBRyxFQUFFLEVBQUUsU0FBTyxLQUFHLFFBQVEsSUFBSSxTQUFPLElBQUUsT0FBSyxJQUFFLFFBQVM7Z0JBQU0sQ0FBQyxHQUFLO0FBQWp0UyxTQUFrdFMscUJBQW9CLDZCQUFTLEdBQUc7aUJBQVMsRUFBRSxHQUFHO2lCQUFPLFdBQVcsRUFBRSxpQkFBaUIsR0FBTTthQUFJLElBQUUsT0FBTSxDQUFDLEtBQUcsRUFBRSxNQUFNLGFBQVcsQ0FBQyxFQUFFLE1BQU0sYUFBVyxFQUFFLEdBQUcsT0FBTztjQUFJLElBQUUsRUFBQyxXQUFVLENBQUMsRUFBRSxlQUFjLEVBQUUsZ0JBQWUsT0FBTSxDQUFDLEVBQUUsV0FBVSxPQUFNLENBQUMsRUFBRSxXQUFVLE9BQU0sTUFBSSxFQUFFLFdBQVMsQ0FBQyxFQUFFLFVBQVMsRUFBRSxZQUFVLENBQUMsRUFBRSxXQUFVLEVBQUUsWUFBVyxRQUFPLENBQUMsRUFBRSxZQUFXLEdBQUUsT0FBTSxLQUFLLEVBQUUsR0FBRyxnQkFBZSxVQUFTLEdBQUc7MEJBQWMsS0FBSyxLQUFHLElBQUUsY0FBWSxVQUFVLEtBQUssS0FBRyxJQUFFLFVBQVEsV0FBVyxLQUFLLE9BQUssSUFBRSxXQUFVLEVBQUUsT0FBSyxLQUFHLElBQUUsTUFBSSxFQUFFLEdBQUcsS0FBSyxPQUFLLE1BQUssT0FBTyxFQUFNO0FBQUUsV0FBM0w7QUFBclAsZUFBcWI7Y0FBSSxHQUFFLElBQUksS0FBSyxFQUFFLEdBQUcsZ0JBQWUsVUFBUyxHQUFHO21CQUFPLElBQUUsRUFBRSxHQUFHLGVBQWUsSUFBRywyQkFBeUIsS0FBRyxJQUFFLEdBQUUsQ0FBQyxNQUFJLE1BQUksS0FBRyxjQUFZLE1BQUksSUFBRSxXQUFVLE1BQUssS0FBRyxJQUFFLElBQVE7QUFBakssY0FBbUssTUFBSSxJQUFFLGdCQUFjLElBQUUsTUFBTztXQUFFLGlCQUFpQixHQUFFLGFBQWU7QUFBcjlULFlBQXk5VCxNQUFNLFlBQVcsRUFBRSxlQUFlLFlBQVcsRUFBRSxPQUFLLFVBQVMsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLGFBQVcsRUFBRSxNQUFLLEtBQUssR0FBRSxVQUFTLEdBQUUsR0FBRztZQUFHLEVBQUUsT0FBSyxLQUFHLEVBQUUsS0FBSyxJQUFHLE1BQUksR0FBRSxNQUFJLE1BQUksSUFBRSxFQUFFLElBQUksaUJBQWlCLEdBQUUsU0FBUztjQUFJLElBQUUsRUFBRSxJQUFJLGlCQUFpQixHQUFFLEdBQUUsR0FBRyxnQkFBYyxFQUFFLE1BQUksRUFBRSxJQUFJLG9CQUFvQixJQUFHLElBQUk7QUFBQztBQUExTCxRQUFQLEVBQXFNLENBQTVNO0FBQTlFLFVBQStSLElBQUUsYUFBVztlQUFTLElBQUk7ZUFBTyxJQUFFLEVBQUUsV0FBUyxPQUFPO2dCQUFTLElBQUk7aUJBQVMsRUFBRSxHQUFHO21CQUFTLEVBQUUsR0FBRSxHQUFHO2dCQUFJLElBQUU7Z0JBQUUsSUFBRTtnQkFBRSxJQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsTUFBSSxJQUFFLEVBQUUsSUFBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQUssU0FBUyxLQUFLLEVBQUUsT0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFLLEVBQUUsTUFBTSxNQUFNLEtBQUssRUFBRSxNQUFJLElBQUUsRUFBRSxLQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBSyxDQUFDLEVBQUUsTUFBTSxNQUFNLEtBQUssRUFBRSxPQUFLLEVBQUUsUUFBUSxFQUFFLFNBQU8sSUFBRSxJQUFFLEVBQUUsS0FBRyxFQUFFLEVBQUUsSUFBRyxFQUFFLFdBQVUsRUFBRSxPQUFLLE1BQUksSUFBRSxFQUFFLFFBQU0sSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLEVBQUUsU0FBUSxFQUFFLFdBQVcsT0FBSyxJQUFFLEVBQUUsS0FBSyxHQUFFLEdBQUUsS0FBSSxFQUFFLFdBQVcsT0FBSyxJQUFFLEVBQUUsS0FBSyxHQUFFLEdBQUUsS0FBSSxDQUFDLEtBQUcsR0FBRSxHQUFLO29CQUFTLEVBQUUsR0FBRSxHQUFHO2dCQUFJLEdBQUUsRUFBRSxZQUFVLEtBQUcsS0FBSyxXQUFXLGNBQWMsUUFBUSxZQUFXLFVBQVMsR0FBRztxQkFBTyxJQUFFLEdBQUs7QUFBL0UsY0FBRixFQUFtRixNQUFJLElBQUUsRUFBRSxPQUFPLFlBQVksS0FBSSxDQUFDLEdBQUs7b0JBQVMsSUFBSTtnQkFBSSxJQUFFLEVBQUMsVUFBUyxFQUFFLGNBQVksRUFBRSxNQUFLLFVBQVMsRUFBRSxpQkFBaUIsR0FBRSxhQUFZLFVBQVMsRUFBRSxpQkFBaUIsR0FBRTtnQkFBYSxJQUFFLEVBQUUsYUFBVyxFQUFFLGdCQUFjLEVBQUUsYUFBVyxFQUFFO2dCQUFXLElBQUUsRUFBRSxhQUFXLEVBQUUsYUFBYSxFQUFFLGFBQVcsRUFBRSxVQUFTLEVBQUUsZUFBYSxFQUFFLFVBQVMsRUFBRSxlQUFhLEVBQUUsYUFBYSxJQUFFO0FBQU4sZ0JBQVUsSUFBRSxHQUFHLElBQUcsS0FBRyxHQUFFLEVBQUUsU0FBTyxFQUFFLFlBQVcsRUFBRSxtQkFBaUIsRUFBRSxzQkFBcUIsRUFBRSxvQkFBa0IsRUFBRSwyQkFBMkI7a0JBQUksSUFBRSxFQUFFLEdBQUcsUUFBTSxFQUFFLGdCQUFnQiw4QkFBNkIsVUFBUSxFQUFFLGNBQWMsU0FBUyxLQUFLLElBQUcsRUFBRSxTQUFTLFlBQVksTUFBSyxLQUFLLENBQUMsWUFBVyxhQUFZLGNBQWEsVUFBUyxHQUFFLEdBQUc7a0JBQUUsSUFBSSxpQkFBaUIsR0FBRSxHQUFZO0FBQS9GLGdCQUFwQyxFQUFxSSxFQUFFLElBQUksaUJBQWlCLEdBQUUsWUFBVyxFQUFFLFdBQVUsRUFBRSxJQUFJLGlCQUFpQixHQUFFLFlBQVcsRUFBRSxXQUFVLEVBQUUsSUFBSSxpQkFBaUIsR0FBRSxhQUFZLGtCQUFpQixLQUFLLENBQUMsWUFBVyxZQUFXLFNBQVEsYUFBWSxhQUFZLFdBQVUsVUFBUyxHQUFFLEdBQUc7a0JBQUUsSUFBSSxpQkFBaUIsR0FBRSxHQUFFLElBQU87QUFBeEgsa0JBQTBILEVBQUUsSUFBSSxpQkFBaUIsR0FBRSxlQUFjLElBQUUsT0FBTSxFQUFFLG1CQUFpQixFQUFFLHVCQUFxQixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsR0FBRSxTQUFRLE1BQUssQ0FBQyxPQUFLLEtBQUcsR0FBRSxFQUFFLG9CQUFrQixFQUFFLHdCQUFzQixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsR0FBRSxVQUFTLE1BQUssQ0FBQyxPQUFLLEtBQUcsR0FBRSxFQUFFLFNBQU8sRUFBRSxhQUFXLENBQUMsV0FBVyxFQUFFLGlCQUFpQixHQUFFLG1CQUFpQixLQUFHLEdBQUUsRUFBRSxTQUFTLFlBQWU7b0JBQU8sU0FBTyxFQUFFLFlBQVUsRUFBRSxVQUFRLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFLLGdCQUFjLEtBQUksU0FBTyxFQUFFLFdBQVMsRUFBRSxTQUFPLFdBQVcsRUFBRSxjQUFZLEtBQUksRUFBRSxTQUFPLFdBQVcsRUFBRSxlQUFhLE1BQUssRUFBRSxVQUFRLEVBQUUsU0FBUSxFQUFFLFNBQU8sRUFBRSxRQUFPLEVBQUUsU0FBTyxFQUFFLFFBQU8sRUFBRSxTQUFPLEtBQUcsUUFBUSxJQUFJLGtCQUFnQix5QkFBZSxJQUFHLElBQUs7ZUFBRyxFQUFFLFNBQU8sTUFBSSxPQUFNO2NBQUUsTUFBTSxLQUFLLEdBQUs7QUFBdEIsWUFBc0IsT0FBTSxHQUFHO3VCQUFXLFlBQVc7b0JBQVE7QUFBOUIsZUFBa0M7ZUFBRyxhQUFXLEdBQUc7Z0JBQUk7Z0JBQUU7Z0JBQUU7Z0JBQUUsSUFBRSxPQUFPLEtBQUssRUFBRSxRQUFNLFNBQU87Z0JBQU0sSUFBRSxXQUFXLEVBQUUsV0FBUyxFQUFFLEVBQUUsWUFBVSxFQUFFLFVBQVUsRUFBRSxjQUFZLEVBQUUsT0FBTyxFQUFFLGNBQVksRUFBRSxZQUFVLEVBQUUsVUFBVSxNQUFJLEVBQUUsV0FBVSxJQUFFLEVBQUUsVUFBVSxXQUFTLElBQUcsSUFBRSxJQUFFLEVBQUUsR0FBRyxXQUFXLEVBQUUsaUJBQWUsS0FBRyxFQUFFLFlBQVUsUUFBTSxJQUFFLEVBQUUsTUFBTSxhQUFhLEVBQUUsTUFBTSxtQkFBaUIsS0FBSSxJQUFFLEVBQUUsTUFBTSxhQUFhLEVBQUUsTUFBTSxvQkFBa0IsV0FBUyxJQUFFLFFBQU0sV0FBVSxJQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUUsaUJBQWUsSUFBRyxJQUFFLEVBQUMsUUFBTyxFQUFDLG1CQUFrQixDQUFDLEdBQUUsWUFBVyxHQUFFLGNBQWEsR0FBRSxVQUFTLEdBQUUsVUFBUyxJQUFHLFFBQU8sRUFBRSxRQUFPLFlBQVcsRUFBQyxXQUFVLEVBQUUsV0FBVSxXQUFVLEdBQUUsZ0JBQWUsT0FBSSxTQUFRLEtBQUcsRUFBRSxTQUFPLFFBQVEsSUFBSSw4QkFBNkIsRUFBRSxRQUFVO0FBQWxxQixxQkFBMHFCLGNBQVksR0FBRztnQkFBRyxDQUFDLEVBQUUsR0FBRyxpQkFBZ0IsT0FBTyxLQUFLLEVBQUUsUUFBUSxHQUFFLEVBQUUsT0FBTyxXQUFTLEVBQUUsR0FBRyxLQUFLLFlBQVUsRUFBRSxHQUFHLEtBQUssVUFBUSxTQUFRLGFBQVcsRUFBRSxHQUFHLEtBQUssZUFBYSxFQUFFLEdBQUcsS0FBSyxhQUFXLFlBQVcsRUFBRSxHQUFHLEtBQUssT0FBSyxDQUFDLEdBQUUsRUFBRSxHQUFHLEtBQUssUUFBTSxNQUFLLEVBQUUsR0FBRyxLQUFLLFdBQVMsTUFBSyxFQUFFLFVBQVEsT0FBTyxFQUFFLFFBQU8sRUFBRSxZQUFVLE9BQU8sRUFBRSxVQUFTLElBQUUsRUFBRSxPQUFPLElBQUcsRUFBRSxHQUFHLE1BQUssR0FBRyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRyxpQkFBaUIsS0FBSSxJQUFJLEtBQUssR0FBRTtrQkFBRyxjQUFZLEdBQUc7b0JBQUksSUFBRSxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsYUFBVyxFQUFFLEdBQUcsZUFBYSxFQUFFLEdBQUcsVUFBUyxFQUFFLEdBQUcsV0FBUyxHQUFFLEVBQUUsY0FBYyxPQUFLLEVBQUUsR0FBRyxTQUFPLEVBQUUsU0FBUSxFQUFFLFNBQU8sUUFBUSxJQUFJLDhCQUE0QixJQUFFLFFBQU0seUJBQWUsRUFBRSxLQUFPO0FBQW5QO0FBQW1QLGlCQUFJO0FBQXpuQixpQkFBOG5CLElBQUcsWUFBVSxHQUFHO2dCQUFJLElBQUksR0FBRyxtQkFBaUIsRUFBRSxHQUFHLGdCQUFjLENBQUMsTUFBSSxJQUFFLEVBQUUsR0FBRyxvQkFBbUIsS0FBSyxHQUFFLFVBQVMsR0FBRSxHQUFHO2tCQUFHLE9BQU8sTUFBSSxFQUFFLE1BQU0sT0FBTyxLQUFLLFNBQU8sS0FBSyxLQUFLLElBQUk7b0JBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQztvQkFBRyxJQUFFLEVBQUU7b0JBQUcsSUFBRSxFQUFFO29CQUFHLElBQUUsRUFBRSxHQUFHLElBQUcsRUFBRSxNQUFNLE1BQU0sS0FBSyxJQUFJO3VCQUFJLElBQUksSUFBRSxDQUFDLE9BQU0sU0FBUSxTQUFRLElBQUUsRUFBRSxPQUFPLFNBQVMsSUFBRyxJQUFFLElBQUUsRUFBRSxPQUFPLFNBQVMsS0FBRyxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFLO3dCQUFJLElBQUUsQ0FBQyxFQUFFLElBQUksS0FBRyxFQUFFLEtBQUssSUFBRyxNQUFJLEtBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSSxFQUFFLElBQUUsRUFBRSxNQUFNOzBCQUFPLEVBQUs7QUFBQztBQUFDO0FBQTFULGNBQXRFLENBQWtZLEtBQUksSUFBSSxLQUFLLEdBQUc7a0JBQUksSUFBRSxFQUFFLEVBQUU7a0JBQUksSUFBRSxFQUFFO2tCQUFHLElBQUUsRUFBRTtrQkFBRyxJQUFFLEVBQUUsR0FBRyxJQUFFLEVBQUUsTUFBTSxVQUFVLE9BQU8sSUFBRSxFQUFFLE1BQU0sUUFBUTtBQUF0QixrQkFBeUIsSUFBRSxDQUFDLE1BQUssRUFBRSxHQUFHLFNBQU8sWUFBVSxLQUFHLEVBQUUsTUFBTSxZQUFZLEdBQUcsT0FBSyxDQUFDLEtBQUcsRUFBRSxlQUFlLFdBQVcsT0FBSyxHQUFHO2lCQUFDLEVBQUUsWUFBVSxLQUFHLFNBQU8sRUFBRSxXQUFTLFdBQVMsRUFBRSxXQUFTLEVBQUUsZUFBYSxLQUFHLGFBQVcsRUFBRSxlQUFhLGlCQUFpQixLQUFLLE1BQUksQ0FBQyxLQUFHLE1BQUksTUFBSSxJQUFFLElBQUcsRUFBRSxnQkFBYyxLQUFHLEVBQUUsTUFBSSxNQUFJLE1BQUksSUFBRSxFQUFFLEdBQUcsV0FBUyxFQUFFLEdBQUcsV0FBVSxJQUFFLEVBQUUsR0FBRyx1QkFBdUIsTUFBSSxFQUFFLE1BQU0sV0FBVyxLQUFHLE1BQUksS0FBRyxJQUFFLEVBQUUsaUJBQWlCLEdBQUUsSUFBRyxJQUFFLEVBQUUsaUJBQWlCLEdBQUUsR0FBRSxNQUFJLElBQUUsRUFBRSxNQUFNLFVBQVUsR0FBRyxLQUFHLE1BQUksTUFBSSxJQUFFLEVBQUUsaUJBQWlCLEdBQUUsUUFBUTtBQUFKLG9CQUFNO29CQUFFO29CQUFFLElBQUUsQ0FBQyxFQUFFLFFBQUssRUFBRSxHQUFFLElBQUcsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLEdBQUUsSUFBRyxNQUFJLEdBQUcsUUFBUSxlQUFjLFVBQVMsR0FBRSxHQUFHO3lCQUFPLElBQUUsR0FBSztBQUF2RCxrQkFBbEMsRUFBMkYsSUFBRSxFQUFFLElBQUcsSUFBRSxXQUFXLE1BQUksR0FBRSxJQUFFLFdBQVcsTUFBSSxHQUFFLFFBQU0sTUFBSSwwQkFBMEIsS0FBSyxNQUFJLEtBQUcsS0FBSSxJQUFFLFFBQU0sU0FBUyxLQUFLLE1BQUksS0FBRyxLQUFJLElBQUUsTUFBSSxxQkFBcUIsS0FBSyxPQUFLLElBQUUsSUFBRSxNQUFJLEtBQUksSUFBRSxNQUFLLFFBQVEsS0FBSyxJQUFHLElBQUUsT0FBTyxJQUFHLE1BQUksS0FBRyxNQUFJLEdBQUUsSUFBRyxNQUFJLEdBQUUsSUFBRSxPQUFPO3NCQUFFLEtBQUcsSUFBSSxJQUFJLElBQUUsb0RBQW9ELEtBQUssTUFBSSxLQUFLLEtBQUssTUFBSSxRQUFNLElBQUUsTUFDMXorQjswQkFBTyxJQUFHLEtBQVE7MkJBQUcsUUFBTSxJQUFFLEVBQUUsbUJBQWlCLEVBQUUsa0JBQWtCLE1BQU0sS0FBUzs0QkFBYzsyQkFBRyxFQUFFLElBQUUsU0FBUSxRQUFPLElBQUcsS0FBUTsyQkFBRyxLQUFHLFFBQU0sSUFBRSxFQUFFLG1CQUFpQixFQUFFLG1CQUFtQixNQUFNLEtBQVM7NEJBQWM7MkJBQUcsSUFBRSxFQUFFLElBQVc7eUJBQU8sSUFBRyxLQUFRO3dCQUFFLElBQUUsRUFBRSxNQUFNLEtBQVE7d0JBQUUsSUFBRSxFQUFFLE1BQU0sS0FBUTt3QkFBRSxJQUFFLEVBQUUsTUFBTSxLQUFRO3dCQUFFLElBQUUsR0FBRSxFQUFFLEtBQUcsRUFBQyxtQkFBa0IsR0FBRSxZQUFXLEdBQUUsY0FBYSxHQUFFLFVBQVMsR0FBRSxVQUFTLEdBQUUsUUFBTyxLQUFHLEVBQUUsU0FBTyxRQUFRLElBQUksc0JBQW9CLElBQUUsUUFBTSx5QkFBZSxFQUFFLEtBQU87QUFENDc3QixxQkFDdjc3QixFQUFFLFNBQU8sUUFBUSxJQUFJLGVBQWEsSUFBeUM7ZUFBRSxVQUFVO2FBQUUsWUFBVSxFQUFFLE9BQU8sU0FBUyxHQUFFLHVCQUFzQixFQUFFLEtBQUssSUFBRyxPQUFLLEVBQUUsVUFBUSxFQUFFLEdBQUcsa0JBQWdCLEdBQUUsRUFBRSxHQUFHLE9BQUssSUFBRyxFQUFFLEdBQUcsY0FBWSxDQUFDLEdBQUUsTUFBSSxJQUFFLEtBQUcsRUFBRSxNQUFNLE1BQU0sS0FBSyxDQUFDLEdBQUUsR0FBRSxHQUFFLE1BQUssRUFBRSxZQUFXLEVBQUUsTUFBTSxjQUFZLENBQUMsTUFBSSxFQUFFLE1BQU0sWUFBVSxDQUFDLEdBQUUsUUFBVzthQUFJO1lBQUUsSUFBRTtZQUFLLElBQUUsRUFBRSxPQUFPLElBQUcsRUFBRSxVQUFTO1lBQUcsSUFBRSxHQUFHLFVBQVMsT0FBSyxLQUFHLEVBQUUsS0FBSyxJQUFHLFdBQVcsRUFBRSxVQUFRLEVBQUUsVUFBUSxDQUFDLE9BQUssTUFBTSxHQUFFLEVBQUUsT0FBTSxVQUFTLEdBQUc7WUFBRSx5QkFBdUIsQ0FBQyxHQUFFLEVBQUUsR0FBRyxhQUFXLEVBQUMsWUFBVyxXQUFXLEdBQUUsV0FBVyxFQUFFLFNBQVEsTUFBUTtBQUFoSSxVQUF2RCxFQUF5TCxFQUFFLFNBQVMsV0FBVyxnQkFBZSxLQUFXO2NBQUUsV0FBUyxJQUFJLE1BQU0sS0FBYTtjQUFFLFdBQVMsRUFBRSxNQUFNLEtBQVc7Y0FBRSxXQUFTLElBQUksTUFBYztjQUFFLFdBQVMsV0FBVyxFQUFFLGFBQVcsS0FBSSxTQUFPLENBQUMsTUFBSSxFQUFFLFNBQU8sQ0FBQyxJQUFFLEVBQUUsV0FBUyxFQUFFLFFBQU0sS0FBRyxFQUFFLFlBQVUsV0FBVyxFQUFFLFNBQU8sR0FBRSxFQUFFLFNBQU8sV0FBVyxFQUFFLFNBQU8sS0FBSSxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sRUFBRSxXQUFVLEVBQUUsU0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVMsRUFBRSxRQUFNLE9BQU0sRUFBRSxZQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsY0FBWSxFQUFFLFdBQVMsT0FBTSxFQUFFLFlBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxjQUFZLEVBQUUsV0FBUyxPQUFNLEVBQUUsWUFBVSxLQUFHLFNBQU8sRUFBRSxZQUFVLEVBQUUsVUFBUSxFQUFFLFFBQVEsV0FBVyxlQUFjLFdBQVMsRUFBRSxZQUFVLEVBQUUsVUFBUSxFQUFFLElBQUksT0FBTyxlQUFlLE1BQUssRUFBRSxlQUFhLEtBQUcsU0FBTyxFQUFFLGVBQWEsRUFBRSxhQUFXLEVBQUUsV0FBVyxXQUFXLGdCQUFlLEVBQUUsV0FBUyxFQUFFLFlBQVUsRUFBRSxNQUFNLFlBQVUsQ0FBQyxFQUFFLE1BQU0sZUFBYyxFQUFFLFVBQVEsQ0FBQyxJQUFFLEVBQUUsUUFBTSxXQUFXLEdBQUUsRUFBRSxTQUFPLFFBQU0sTUFBTSxHQUFFLEVBQUUsT0FBTSxVQUFTLEdBQUUsR0FBRztpQkFBTyxNQUFJLENBQUMsS0FBRyxFQUFFLFdBQVMsRUFBRSxTQUFTLElBQUcsQ0FBQyxNQUFJLEVBQUUseUJBQXVCLENBQUMsR0FBRSxLQUFLLEVBQU07QUFBcEgsVUFBL29CLEVBQXF3QixPQUFLLEVBQUUsU0FBTyxTQUFPLEVBQUUsU0FBTyxpQkFBZSxFQUFFLE1BQU0sR0FBRyxNQUFJLEVBQUUsUUFBVztXQUFJO1VBQUU7VUFBRTtVQUFFO1VBQUU7VUFBRTtVQUFFLElBQUUsVUFBVSxPQUFLLFVBQVUsR0FBRyxLQUFHLEVBQUUsY0FBYyxVQUFVLEdBQUcsZUFBYSxDQUFDLFVBQVUsR0FBRyxXQUFXLFNBQU8sRUFBRSxTQUFTLFVBQVUsR0FBRyxhQUFhLElBQUcsRUFBRSxVQUFVLFNBQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsTUFBSyxJQUFFLFNBQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxVQUFVLEdBQUcsWUFBVSxVQUFVLEdBQUcsSUFBRSxVQUFVLEtBQUksSUFBRSxFQUFFLElBQUk7YUFBRyxJQUFFLFVBQVUsR0FBRyxjQUFZLFVBQVUsR0FBRyxHQUFFLElBQUUsVUFBVSxHQUFHLFdBQVMsVUFBVSxHQUFHLE1BQUksSUFBRSxVQUFVLElBQUcsSUFBRSxVQUFVLElBQUUsUUFBUSxJQUFFLEVBQUU7QUFBUixZQUFlLElBQUUsRUFBRSxJQUFHLENBQUMsbUJBQW1CLEtBQUssTUFBSSxDQUFDLEVBQUUsY0FBYyxJQUFJO2NBQUksSUFBRSxJQUFFLEVBQUUsSUFBRSxHQUFHLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxVQUFVLFFBQU8sS0FBSTtjQUFFLFFBQVEsVUFBVSxPQUFLLENBQUMsd0JBQXdCLEtBQUssVUFBVSxPQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsTUFBSSxFQUFFLFNBQVMsVUFBVSxPQUFLLEVBQUUsUUFBUSxVQUFVLE1BQUksRUFBRSxTQUFPLFVBQVUsS0FBRyxFQUFFLFdBQVcsVUFBVSxRQUFNLEVBQUUsV0FBUyxVQUFVLE1BQUksRUFBRSxXQUFTLFVBQVU7QUFBRzthQUFJLElBQUUsRUFBQyxTQUFRLE1BQUssVUFBUyxNQUFLLFVBQVMsWUFBUyxFQUFFLFlBQVUsRUFBRSxjQUFZLEVBQUUsUUFBUSxVQUFTLEdBQUUsR0FBRztZQUFFLFdBQVMsR0FBRSxFQUFFLFdBQVc7QUFBdEQsVUFBekIsRUFBa0YsSUFBSSxFQUFFLFFBQU8sSUFBRyxLQUFhO2dCQUFFLFNBQVMsTUFBTSxLQUFjO2dCQUFFLFVBQVUsTUFBTSxLQUFJLFNBQVMsS0FBVztjQUFFLEtBQUssR0FBRSxVQUFTLEdBQUUsR0FBRztnQkFBRSxNQUFJLEVBQUUsR0FBRyxlQUFhLGFBQWEsRUFBRSxHQUFHLFdBQVcsYUFBWSxFQUFFLEdBQUcsV0FBVyxRQUFNLEVBQUUsR0FBRyxXQUFXLFFBQU8sT0FBTyxFQUFFLEdBQWU7QUFBN0osZUFBK0osSUFBSSxJQUFFLEdBQUcsU0FBUyxLQUFLLEVBQUUsTUFBTSxPQUFNLFVBQVMsR0FBRSxHQUFHO3FCQUFLLEtBQUssRUFBRSxJQUFHLFVBQVMsR0FBRSxHQUFHO29CQUFJLElBQUUsTUFBSSxJQUFFLEtBQUcsU0FBUyxNQUFJLENBQUMsS0FBRyxFQUFFLEdBQUcsVUFBUSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUcsVUFBUSxDQUFDLE1BQUksT0FBTyxLQUFLLEdBQUUsVUFBUyxHQUFFLEdBQUc7d0JBQUksTUFBSSxDQUFDLE1BQUksQ0FBQyxLQUFHLEVBQUUsU0FBUyxVQUFRLEtBQUssRUFBRSxNQUFNLEdBQUUsRUFBRSxTQUFTLEtBQUcsSUFBRSxLQUFJLFVBQVMsR0FBRSxHQUFHO3NCQUFFLFdBQVcsTUFBSSxFQUFFLE1BQUssQ0FBSTtBQUEvRSxzQkFBaUYsRUFBRSxNQUFNLEdBQUUsRUFBRSxTQUFTLEtBQUcsSUFBRSxJQUFHLGlCQUFjLE9BQUssTUFBSSxFQUFFLEdBQUcsbUJBQWlCLE1BQUksQ0FBQyxPQUFLLEtBQUssRUFBRSxHQUFHLGlCQUFnQixVQUFTLEdBQUUsR0FBRztzQkFBRSxXQUFTLEVBQWU7QUFBcEUsb0JBQXBDLEVBQTBHLEVBQUUsS0FBSyxFQUE3SCxJQUFpSSxhQUFXLE1BQUksRUFBRSxHQUFHLFdBQWE7QUFBRSxpQkFBaFYsQ0FBOUQ7QUFBZ1osZUFBM2I7QUFBdEMsZ0JBQW1lLFdBQVMsUUFBTSxLQUFLLEdBQUUsVUFBUyxHQUFFLEdBQUc7Z0JBQUUsR0FBRSxDQUFJO0FBQS9CLGdCQUFpQyxFQUFFLFdBQVMsRUFBRSxTQUFTLEtBQUksSUFBWTtnQkFBRyxDQUFDLEVBQUUsY0FBYyxNQUFJLEVBQUUsY0FBYyxJQUFJO2tCQUFHLEVBQUUsU0FBUyxNQUFJLEVBQUUsVUFBVSxJQUFJO29CQUFJLElBQUUsRUFBRSxPQUFPLElBQUc7b0JBQUcsSUFBRSxFQUFFO29CQUFTLElBQUUsRUFBRSxTQUFPLFdBQVcsY0FBWSxDQUFDLE1BQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUcsR0FBRyxjQUFhLEtBQUssR0FBRSxVQUFTLEdBQUUsR0FBRzs2QkFBVyxFQUFFLFdBQVMsRUFBRSxRQUFNLElBQUUsV0FBVyxFQUFFLFdBQVMsSUFBRSxFQUFFLFdBQVcsRUFBRSxhQUFXLEVBQUUsUUFBTSxJQUFFLEVBQUUsUUFBUSxLQUFLLEdBQUUsR0FBRSxLQUFJLEVBQUUsU0FBTyxFQUFFLFdBQVMsV0FBVyxPQUFLLHdCQUF3QixLQUFLLEtBQUcsTUFBSSxJQUFHLEVBQUUsV0FBUyxLQUFLLElBQUksRUFBRSxZQUFVLEVBQUUsWUFBVSxJQUFFLElBQUUsSUFBRSxDQUFDLElBQUUsS0FBRyxJQUFHLE1BQUksRUFBRSxVQUFTLE9BQU0sRUFBRSxVQUFVLEdBQUcsS0FBSyxHQUFFLEdBQUUsS0FBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLEVBQUUsVUFBUSxJQUFLO0FBQXhWLGtCQUFsRCxFQUFnWixHQUF2WjttQkFBMlosSUFBRSwrQkFBNkIsSUFBRSxnRkFBZ0YsT0FBTyxFQUFFLFVBQVEsRUFBRSxTQUFTLElBQUksTUFBTSxNQUFJLFFBQVEsSUFBSSxJQUFPO2lCQUFFLGFBQVksSUFBRSxFQUFDLFlBQVcsTUFBSyxjQUFhLE1BQUssY0FBYSxNQUFLLHNCQUFxQixNQUFLLHVCQUFzQixNQUFLLFlBQVcsTUFBSyxTQUFRLE1BQUssUUFBTyxNQUFLLFFBQU87QUFBaEssWUFBc0ssSUFBRSxLQUFLLEtBQUssR0FBRSxVQUFTLEdBQUUsR0FBRztZQUFFLE9BQU8sTUFBSSxFQUFFLEtBQVE7QUFBOUMsZUFBb0Q7QUFBSixZQUFNLElBQUUsRUFBRSxPQUFPLElBQUcsRUFBRSxVQUFTLEdBQUcsSUFBRyxFQUFFLE9BQUssU0FBUyxFQUFFLE9BQU0sSUFBRSxJQUFFLEVBQUUsT0FBSyxHQUFFLEVBQUUsTUFBSyxLQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFLO2NBQUksSUFBRSxFQUFDLE9BQU0sRUFBRSxPQUFNLFVBQVMsRUFBRSxXQUFVLE1BQUksSUFBRSxNQUFJLEVBQUUsVUFBUSxFQUFFLFNBQVEsRUFBRSxhQUFXLEVBQUUsWUFBVyxFQUFFLFdBQVMsRUFBRSxXQUFVLEVBQUUsR0FBRSxXQUFhO2dCQUFXO0FBQUM7QUFEKy9xQixNQUM5L3FCLElBQUUsRUFBRSxPQUFPLEdBQUUsSUFBRyxFQUFFLFVBQVEsRUFBRSxJQUFJLElBQUUsRUFBRSx5QkFBdUIsV0FBVyxNQUFNLFlBQVUsRUFBRSxXQUFTLE9BQUssaUJBQWlCLG9CQUFtQixZQUFXO1FBQUUsY0FBVSxXQUFTLEdBQUc7MEJBQWtCLFlBQVc7WUFBRSxDQUFJO0FBQTVCLFdBQWlDO0FBQXRELFNBQXVELE9BQUssSUFBRSxFQUFFLHlCQUF5QjtBQUFwSixNQUFoQyxFQUFzTCxFQUFFLFdBQVMsR0FBRSxNQUFJLE1BQUksRUFBRSxHQUFHLFdBQVMsR0FBRSxFQUFFLEdBQUcsU0FBUyxXQUFTLEVBQUUsYUFBWSxLQUFLLENBQUMsUUFBTyxPQUFNLFVBQVMsR0FBRSxHQUFHO1FBQUUsVUFBVSxVQUFRLEtBQUcsVUFBUyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRztZQUFJLElBQUUsRUFBRSxPQUFPLElBQUc7WUFBRyxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUU7WUFBUyxJQUFFLEVBQUMsUUFBTyxJQUFHLFdBQVUsSUFBRyxjQUFhLElBQUcsWUFBVyxJQUFHLGVBQWM7WUFBSSxJQUFFLEtBQUssWUFBVSxNQUFJLEVBQUUsVUFBUSxXQUFTLElBQUUsYUFBVyxFQUFFLElBQUksT0FBTyxlQUFlLEtBQUcsaUJBQWUsVUFBUSxTQUFRLEVBQUUsUUFBTSxZQUFXO2VBQUcsRUFBRSxLQUFLLEdBQUUsR0FBRyxLQUFJLElBQUksS0FBSyxHQUFHO2NBQUUsS0FBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLElBQUUsRUFBRSxJQUFJLGlCQUFpQixHQUFFLEdBQUcsRUFBRSxLQUFHLFdBQVMsSUFBRSxDQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUs7YUFBRSxXQUFTLEVBQUUsTUFBTSxVQUFTLEVBQUUsTUFBTSxXQUFrQjtBQUFwUyxXQUFxUyxFQUFFLFdBQVMsWUFBVztlQUFJLElBQUksS0FBSyxHQUFFO2NBQUUsTUFBTSxLQUFHLEVBQUU7QUFBRyxnQkFBRyxFQUFFLEtBQUssR0FBRSxJQUFHLEtBQUcsRUFBRSxTQUFZO0FBQTFYLFdBQTJYLEVBQUUsR0FBRSxHQUFLO0FBQUM7QUFBaGxCLFVBQW9sQixLQUFLLENBQUMsTUFBSyxRQUFPLFVBQVMsR0FBRSxHQUFHO1FBQUUsVUFBVSxTQUFPLEtBQUcsVUFBUyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRztZQUFJLElBQUUsRUFBRSxPQUFPLElBQUc7WUFBRyxJQUFFLEVBQUMsU0FBUSxTQUFPLElBQUUsSUFBRTtZQUFHLElBQUUsRUFBRSxXQUFXLFdBQVMsTUFBSSxJQUFFLElBQUUsRUFBRSxRQUFNLE9BQUssWUFBVztlQUFHLEVBQUUsS0FBSyxHQUFFLElBQUcsS0FBRyxFQUFFLFNBQVk7QUFBM0UsV0FBNEUsRUFBRSxZQUFVLE1BQUksRUFBRSxVQUFRLFNBQU8sSUFBRSxTQUFPLFNBQVEsRUFBRSxNQUFLLEdBQUs7QUFBQztBQUFwUixRQUF3UixDQUEvbUM7QUFENndFLElBQzdwQyxPQUFPLFVBQVEsT0FBTyxTQUFPLFFBQU8sUUFBaUI7QUFEeThCLEVBQXhsSCxHQUNrcEYsV0FBVSxHQUFFLEdBQUUsR0FBRSxHQUFHO0FBQWE7O1dBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztXQUFPLFdBQVcsRUFBRSxHQUFFLElBQU07WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1dBQU0sQ0FBQyxDQUFDLE1BQU0sUUFBUSxPQUFLLEVBQUUsR0FBRSxFQUFFLElBQUcsSUFBRyxDQUFJO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztRQUFJLEVBQUUsSUFBRyxHQUFFLElBQUcsRUFBRSxTQUFRLEVBQUUsUUFBUSxHQUFFLFlBQVcsRUFBRSxXQUFTLEdBQUUsS0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVE7UUFBRSxLQUFLLEdBQUUsRUFBRSxJQUFHLEdBQUUsSUFBRztBQUF2RCxXQUFnRSxLQUFJLEtBQUssR0FBRTtRQUFFLGVBQWUsTUFBSSxFQUFFLEtBQUssR0FBRSxFQUFFLElBQUcsR0FBRTtBQUFHO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztTQUFJLElBQUksSUFBRSxvQkFBWSxJQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUTtPQUFDLENBQUMsS0FBRyxLQUFHLEVBQUUsRUFBRSxRQUFNLE9BQUssRUFBRSxFQUFFLE1BQUksRUFBRSxFQUFFLE1BQUs7QUFBSSxZQUFTO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxFQUFFLEdBQUUsR0FBRSxDQUFJO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztRQUFJO1FBQUUsSUFBRSxFQUFFLFVBQVUsSUFBRSxFQUFFLFlBQVUsc0JBQWMsSUFBRyxFQUFFLGNBQVksR0FBRSxFQUFFLFNBQU8sR0FBRSxLQUFHLEVBQUUsR0FBSztZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sWUFBVzthQUFPLEVBQUUsTUFBTSxHQUFhO0FBQUM7WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLFFBQU8sK0RBQUcsS0FBRyxFQUFFLE1BQU0sSUFBRSxFQUFFLE1BQUksSUFBRSxHQUFFLEtBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLE1BQUksSUFBRSxJQUFJO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztNQUFFLEVBQUUsSUFBRyxVQUFTLEdBQUc7UUFBRSxpQkFBaUIsR0FBRSxHQUFFLENBQUk7QUFBRTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7TUFBRSxFQUFFLElBQUcsVUFBUyxHQUFHO1FBQUUsb0JBQW9CLEdBQUUsR0FBRSxDQUFJO0FBQUU7WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFLLElBQUk7VUFBRyxLQUFHLEdBQUUsT0FBTSxDQUFDLEVBQUUsSUFBRSxFQUFhO1lBQU0sQ0FBRztZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sRUFBRSxRQUFRLEtBQUcsQ0FBRztZQUFTLEVBQUUsR0FBRztXQUFPLEVBQUUsT0FBTyxNQUFjO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztRQUFHLEVBQUUsV0FBUyxDQUFDLEdBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRyxLQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTO1VBQUcsS0FBRyxFQUFFLEdBQUcsTUFBSSxLQUFHLENBQUMsS0FBRyxFQUFFLE9BQUssR0FBRSxPQUFPLEVBQU07WUFBTSxDQUFHO1lBQVMsRUFBRSxHQUFHO1dBQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxHQUFLO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztTQUFJLElBQUksSUFBRSxJQUFHLElBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVM7VUFBSSxJQUFFLElBQUUsRUFBRSxHQUFHLEtBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRSxLQUFHLEtBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSSxFQUFFLEtBQUcsR0FBTTtZQUFPLE1BQUksVUFBTSxLQUFLLFVBQVMsR0FBRSxHQUFHO2FBQU8sRUFBRSxLQUFHLEVBQUs7QUFBdEMsTUFBRixHQUEwQyxFQUFFLFNBQVU7WUFBUyxFQUFFLEdBQUUsR0FBRztTQUFJLElBQUksR0FBRSxHQUFFLElBQUUsRUFBRSxHQUFHLGdCQUFjLEVBQUUsTUFBTSxJQUFHLElBQUUsR0FBRSxJQUFFLEdBQUcsU0FBUztVQUFHLElBQUUsR0FBRyxJQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxLQUFLLEdBQUUsT0FBTyxFQUFNO1lBQVM7WUFBUyxJQUFJO1dBQVk7WUFBUyxFQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsY0FBYyxPQUFPLEVBQUUsZUFBYSxFQUFlO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLFVBQVUsVUFBUSxHQUFFLEtBQUssV0FBUyxHQUFFLEtBQUssVUFBUSxFQUFFLFNBQVEsS0FBSyxTQUFPLEVBQUUsUUFBUSxhQUFZLEtBQUssYUFBVyxVQUFTLEdBQUc7UUFBRSxFQUFFLFFBQVEsUUFBTyxDQUFDLE9BQUssRUFBRSxRQUFXO0FBQTFKLE9BQTJKLEtBQVk7WUFBUyxFQUFFLEdBQUc7UUFBSTtRQUFFLElBQUUsRUFBRSxRQUFRLFdBQVcsT0FBTyxLQUFJLElBQUUsSUFBRSxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsS0FBRyxJQUFFLEdBQUcsR0FBSztZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsU0FBUztRQUFPLElBQUUsRUFBRSxnQkFBZ0I7UUFBTyxJQUFFLElBQUUsTUFBSSxNQUFJLElBQUU7UUFBRSxJQUFFLEtBQUcsS0FBRyxPQUFLLE1BQUksSUFBRSxFQUFFLEVBQUUsVUFBUSxDQUFDLENBQUMsR0FBRSxFQUFFLFVBQVEsQ0FBQyxDQUFDLEdBQUUsTUFBSSxFQUFFLFVBQVEsS0FBSSxFQUFFLFlBQVUsR0FBRSxFQUFFLEdBQUUsSUFBRyxFQUFFLEtBQUssZ0JBQWUsSUFBRyxFQUFFLFVBQVUsSUFBRyxFQUFFLFFBQVEsWUFBWTtZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFO1FBQVEsSUFBRSxFQUFFO1FBQVMsSUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFhLEVBQUUsYUFBVyxFQUFFLEtBQUksSUFBRSxLQUFHLENBQUMsRUFBRSxnQkFBYyxFQUFFLGdCQUFjLEVBQUUsS0FBRyxNQUFJLE1BQUksRUFBRSxnQkFBYyxDQUFDLE9BQU8sSUFBRSxFQUFFO0FBQVIsUUFBbUIsSUFBRSxFQUFFO1FBQWMsSUFBRSxJQUFFLEVBQUUsU0FBTyxFQUFFO1FBQU8sSUFBRSxFQUFFLFNBQU8sRUFBRSxHQUFHLEVBQUUsWUFBVSxNQUFLLEVBQUUsWUFBVSxFQUFFLFlBQVUsRUFBRSxXQUFVLEVBQUUsUUFBTSxFQUFFLEdBQUUsSUFBRyxFQUFFLFdBQVMsRUFBRSxHQUFFLElBQUcsRUFBRSxHQUFFLElBQUcsRUFBRSxrQkFBZ0IsRUFBRSxFQUFFLFFBQU8sRUFBRSxTQUFRLEVBQUUsUUFBTSxJQUFFLEVBQUUsRUFBRSxVQUFTLEtBQUcsR0FBRSxFQUFFLFdBQVMsSUFBRSxFQUFFLEVBQUUsVUFBUyxLQUFHLEdBQUUsRUFBRSxHQUFFLEdBQUcsSUFBSSxJQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxRQUFPLE9BQUssSUFBRSxFQUFFLFNBQVMsU0FBUSxFQUFFLFNBQVM7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRTtRQUFPLElBQUUsRUFBRSxlQUFhO1FBQUcsSUFBRSxFQUFFLGFBQVc7UUFBRyxJQUFFLEVBQUUsYUFBVyxHQUFHLENBQUMsRUFBRSxjQUFZLE1BQUksRUFBRSxjQUFZLFFBQU0sSUFBRSxFQUFFLFlBQVUsRUFBQyxHQUFFLEVBQUUsVUFBUSxHQUFFLEdBQUUsRUFBRSxVQUFRLEtBQUcsSUFBRSxFQUFFLGNBQVksRUFBQyxHQUFFLEVBQUUsR0FBRSxHQUFFLEVBQUUsTUFBSSxFQUFFLFNBQU8sRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFFLElBQUcsRUFBRSxTQUFPLEVBQUUsS0FBRyxFQUFFLElBQUUsRUFBSztZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUk7UUFBRTtRQUFFO1FBQUU7UUFBRSxJQUFFLEVBQUUsZ0JBQWM7UUFBRSxJQUFFLEVBQUUsWUFBVSxFQUFFLGNBQWEsRUFBRSxhQUFXLE9BQUssSUFBRSxNQUFJLEVBQUUsYUFBVyxJQUFJO1VBQUksSUFBRSxFQUFFLFNBQU8sRUFBRTtVQUFPLElBQUUsRUFBRSxTQUFPLEVBQUU7VUFBTyxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxHQUFHLEVBQUUsS0FBRyxHQUFHLEVBQUUsS0FBRyxFQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUcsRUFBRSxlQUFlO0FBQW5LLFdBQXdLLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxVQUFVLEVBQUUsV0FBUyxHQUFFLEVBQUUsWUFBVSxHQUFFLEVBQUUsWUFBVSxHQUFFLEVBQUUsWUFBWTtZQUFTLEVBQUUsR0FBRztTQUFJLElBQUksSUFBRSxJQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUyxTQUFRO1FBQUUsS0FBRyxFQUFDLFNBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxVQUFTLFNBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxZQUFVO0FBQUksWUFBTSxFQUFDLFdBQVUsTUFBSyxVQUFTLEdBQUUsUUFBTyxFQUFFLElBQUcsUUFBTyxFQUFFLFFBQU8sUUFBTyxFQUFVO1lBQVMsRUFBRSxHQUFHO1FBQUksSUFBRSxFQUFFLE9BQU8sSUFBRyxNQUFJLEdBQUUsT0FBTSxFQUFDLEdBQUUsR0FBRyxFQUFFLEdBQUcsVUFBUyxHQUFFLEdBQUcsRUFBRSxHQUFHLFdBQVUsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRztXQUFHLEVBQUUsR0FBRyxTQUFRLEtBQUcsRUFBRSxHQUFHLFNBQVE7QUFBSSxZQUFNLEVBQUMsR0FBRSxHQUFHLElBQUUsSUFBRyxHQUFFLEdBQUcsSUFBTTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7V0FBTSxFQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsR0FBRSxJQUFFLEtBQU07WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLE1BQUksSUFBRSxLQUFHLEdBQUcsTUFBSSxHQUFHLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxJQUFFLElBQUUsS0FBTTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLFFBQVEsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUU7QUFBbEIsUUFBc0IsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFFLElBQUUsSUFBSztZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLFFBQVEsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUU7QUFBbEIsUUFBc0IsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQUksS0FBSyxNQUFNLEdBQUUsS0FBRyxLQUFRO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQUcsTUFBSSxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQU87WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBRyxNQUFJLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBTztZQUFTLElBQUk7U0FBSyxPQUFLLElBQUcsS0FBSyxRQUFNLElBQUcsS0FBSyxRQUFNLENBQUMsR0FBRSxLQUFLLFVBQVEsQ0FBQyxHQUFFLEVBQUUsTUFBTSxNQUFnQjtZQUFTLElBQUk7U0FBSyxPQUFLLElBQUcsS0FBSyxRQUFNLElBQUcsRUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFFBQU0sS0FBSyxRQUFRLFFBQVEsZ0JBQWlCO1lBQVMsSUFBSTtTQUFLLFdBQVMsSUFBRyxLQUFLLFFBQU0sSUFBRyxLQUFLLFVBQVEsQ0FBQyxHQUFFLEVBQUUsTUFBTSxNQUFnQjtZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLEVBQUU7UUFBUyxJQUFFLEVBQUUsRUFBRSxnQkFBZ0IsT0FBTyxLQUFHLEtBQUcsUUFBTSxJQUFFLEVBQUUsRUFBRSxPQUFPLElBQUcsY0FBYSxDQUFDLEtBQUksQ0FBQyxHQUFLO1lBQVMsSUFBSTtTQUFLLFdBQVMsSUFBRyxLQUFLLFlBQVUsSUFBRyxFQUFFLE1BQU0sTUFBZ0I7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxFQUFFO1FBQVMsSUFBRSxLQUFLLFVBQVUsSUFBRyxLQUFHLEtBQUcsT0FBSyxNQUFJLEVBQUUsUUFBTyxPQUFPLEVBQUUsRUFBRSxHQUFHLGNBQVksQ0FBQyxHQUFFLENBQUMsR0FBRSxPQUFPO0FBQUosUUFBTTtRQUFFLElBQUUsRUFBRSxFQUFFO1FBQWdCLElBQUU7UUFBRyxJQUFFLEtBQUssaUJBQWMsT0FBTyxVQUFTLEdBQUc7YUFBTyxFQUFFLEVBQUUsUUFBVTtBQUExQyxNQUFGLEVBQThDLE1BQUksRUFBckQsRUFBd0QsS0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVE7UUFBRSxFQUFFLEdBQUcsY0FBWSxDQUFDLEdBQUU7QUFBSSxVQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUTtRQUFFLEVBQUUsR0FBRyxlQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUksS0FBRyxLQUFHLE9BQUssT0FBTyxFQUFFLEVBQUUsR0FBRyxhQUFZO0FBQUksWUFBTyxFQUFFLFNBQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFHLGNBQWEsQ0FBQyxJQUFHLEtBQUcsS0FBTztZQUFTLElBQUk7TUFBRSxNQUFNLE1BQUssV0FBVyxJQUFJLElBQUUsRUFBRSxLQUFLLFNBQVEsTUFBTSxLQUFLLFFBQU0sSUFBSSxFQUFFLEtBQUssU0FBUSxJQUFHLEtBQUssUUFBTSxJQUFJLEVBQUUsS0FBSyxTQUFXO1lBQVMsRUFBRSxHQUFFLEdBQUc7U0FBSyxVQUFRLEdBQUUsS0FBSyxJQUFPO1lBQVMsRUFBRSxHQUFHO1FBQUcsRUFBRSxHQUFFLEtBQUksT0FBTyxPQUFPLElBQUUsRUFBRSxHQUFFO0FBQVYsUUFBYyxJQUFFLEVBQUUsR0FBRSxJQUFJLE9BQU8sS0FBRyxJQUFFLEtBQUcsTUFBSSxLQUFHLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLEdBQUUsTUFBSSxLQUFNO1lBQVMsRUFBRSxHQUFHO1NBQUssS0FBRyxLQUFJLEtBQUssVUFBUSxNQUFLLEtBQUssVUFBUSxFQUFFLEtBQUcsSUFBRyxLQUFLLFdBQVUsS0FBSyxRQUFRLFNBQU8sRUFBRSxLQUFLLFFBQVEsUUFBTyxDQUFDLElBQUcsS0FBSyxRQUFNLElBQUcsS0FBSyxlQUFhLElBQUcsS0FBSyxjQUFlO1lBQVMsRUFBRSxHQUFHO1dBQU8sSUFBRSxLQUFHLFdBQVMsSUFBRSxLQUFHLFFBQU0sSUFBRSxLQUFHLFNBQU8sSUFBRSxLQUFHLFVBQVc7WUFBUyxFQUFFLEdBQUc7V0FBTyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsT0FBSyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsVUFBVztZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLFFBQVEsT0FBTyxJQUFFLEVBQUUsSUFBSSxLQUFLO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBZ0I7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxLQUFHLE1BQUssS0FBSyxLQUFRO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFZO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFFBQU0sQ0FBQyxHQUFFLEtBQUssVUFBUSxDQUFDLEdBQUUsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFPLE1BQUssS0FBSyxRQUFRO1lBQVMsR0FBRyxHQUFFLEdBQUc7V0FBTyxJQUFFLEtBQUcsSUFBRyxFQUFFLGNBQVksRUFBRSxFQUFFLGFBQVksR0FBRyxTQUFTLFNBQVEsSUFBSSxHQUFHLEdBQUs7WUFBUyxHQUFHLEdBQUUsR0FBRztRQUFFLEtBQUcsSUFBRyxLQUFLLFVBQVEsRUFBRSxHQUFFLEdBQUcsV0FBVSxLQUFLLFFBQVEsY0FBWSxLQUFLLFFBQVEsZUFBYSxHQUFFLEtBQUssV0FBUyxJQUFHLEtBQUssVUFBUSxJQUFHLEtBQUssY0FBWSxJQUFHLEtBQUssVUFBUSxHQUFFLEtBQUssUUFBTSxFQUFFLE9BQU0sS0FBSyxjQUFZLElBQUksRUFBRSxNQUFLLEtBQUssUUFBUSxjQUFhLEdBQUcsTUFBSyxDQUFDLE1BQUssRUFBRSxhQUFZLFVBQVMsR0FBRztVQUFJLElBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQUksRUFBRSxjQUFjLEVBQUUsS0FBSSxFQUFFLE1BQUksRUFBRSxlQUFlLEVBQU07QUFBcEgsT0FBMkg7WUFBUyxHQUFHLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxVQUFTLFVBQVMsR0FBRSxHQUFHO1FBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTSxNQUFJLElBQUUsSUFBSztBQUFFLEtBQWxFO1lBQTJFLEdBQUcsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLFlBQVksU0FBUyxFQUFFLFVBQVUsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsT0FBTyxjQUFpQjtPQUFJLEtBQUcsQ0FBQyxJQUFHLFVBQVMsT0FBTSxNQUFLLE1BQUs7TUFBSyxLQUFHLEVBQUUsY0FBYztNQUFPLEtBQUc7TUFBVyxLQUFHLEtBQUs7TUFBTSxLQUFHLEtBQUs7TUFBSSxLQUFHLEtBQUs7TUFBSSxLQUFHO01BQUUsS0FBRztNQUF3QyxLQUFHLGtCQUFpQjtNQUFFLEtBQUcsRUFBRSxHQUFFLG9CQUFrQjtNQUFFLEtBQUcsTUFBSSxHQUFHLEtBQUssVUFBVTtNQUFXLEtBQUc7TUFBUSxLQUFHO01BQU0sS0FBRztNQUFRLEtBQUc7TUFBUyxLQUFHO01BQUcsS0FBRztNQUFFLEtBQUc7TUFBRSxLQUFHO01BQUUsS0FBRztNQUFFLEtBQUc7TUFBRSxLQUFHO01BQUUsS0FBRztNQUFFLEtBQUc7TUFBRSxLQUFHO01BQUcsS0FBRyxLQUFHO01BQUcsS0FBRyxLQUFHO01BQUcsS0FBRyxLQUFHO01BQUcsS0FBRyxDQUFDLEtBQUk7TUFBSyxLQUFHLENBQUMsV0FBVSxhQUFhLGNBQVcsU0FBUSxtQkFBWSxDQUFyQixHQUFzQixNQUFLLGdCQUFXO1dBQUssUUFBTSxFQUFFLEtBQUssU0FBUSxLQUFLLE1BQUssS0FBSyxhQUFZLEtBQUssWUFBVSxFQUFFLEtBQUssUUFBTyxLQUFLLFVBQVMsS0FBSyxhQUFZLEtBQUssU0FBTyxFQUFFLEVBQUUsS0FBSyxVQUFTLEtBQUssT0FBTSxLQUFpQjtBQUFqTixPQUFrTixTQUFRLG1CQUFXO1dBQUssUUFBTSxFQUFFLEtBQUssU0FBUSxLQUFLLE1BQUssS0FBSyxhQUFZLEtBQUssWUFBVSxFQUFFLEtBQUssUUFBTyxLQUFLLFVBQVMsS0FBSyxhQUFZLEtBQUssU0FBTyxFQUFFLEVBQUUsS0FBSyxVQUFTLEtBQUssT0FBTSxLQUFpQjtBQUFoWixPQUFaLEtBQWthLEtBQUcsRUFBQyxXQUFVLElBQUcsV0FBVSxJQUFHLFNBQVE7QUFBMUMsTUFBOEMsS0FBRztNQUFZLEtBQUcsc0JBQXNCLEdBQUUsS0FBRyxTQUFRLGlCQUFTLEdBQUc7VUFBSSxJQUFFLEdBQUcsRUFBRSxNQUFNLElBQUUsTUFBSSxNQUFJLEVBQUUsV0FBUyxLQUFLLFVBQVEsQ0FBQyxJQUFHLElBQUUsTUFBSSxNQUFJLEVBQUUsVUFBUSxJQUFFLEtBQUksS0FBSyxXQUFTLEtBQUssVUFBUSxJQUFFLE9BQUssS0FBSyxVQUFRLENBQUMsSUFBRyxLQUFLLFNBQVMsS0FBSyxTQUFRLEdBQUUsRUFBQyxVQUFTLENBQUMsSUFBRyxpQkFBZ0IsQ0FBQyxJQUFHLGFBQVksSUFBRyxVQUFjO0FBQXJQLE9BQU4sTUFBa1EsS0FBRyxFQUFDLGFBQVksSUFBRyxhQUFZLElBQUcsV0FBVSxJQUFHLGVBQWMsSUFBRyxZQUFXO0FBQS9FLE1BQW1GLEtBQUcsRUFBQyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFO01BQUksS0FBRztNQUFjLEtBQUcsd0NBQXdDLG1CQUFpQixLQUFHLGlCQUFnQixLQUFHLGdEQUErQyxHQUFFLEtBQUcsU0FBUSxpQkFBUyxHQUFHO1VBQUksSUFBRSxLQUFLO1VBQU0sSUFBRSxDQUFDO1VBQUUsSUFBRSxFQUFFLEtBQUssY0FBYyxRQUFRLE1BQUs7VUFBSSxJQUFFLEdBQUc7VUFBRyxJQUFFLEdBQUcsRUFBRSxnQkFBYyxFQUFFO1VBQVksSUFBRSxLQUFHO1VBQUcsSUFBRSxFQUFFLEdBQUUsRUFBRSxXQUFVLGFBQWEsSUFBRSxPQUFLLE1BQUksRUFBRSxVQUFRLEtBQUcsSUFBRSxNQUFJLEVBQUUsS0FBSyxJQUFHLElBQUUsRUFBRSxTQUFPLEtBQUcsS0FBRyxLQUFHLFFBQU0sSUFBRSxDQUFDLElBQUcsSUFBRSxNQUFJLEVBQUUsS0FBRyxHQUFFLEtBQUssU0FBUyxLQUFLLFNBQVEsR0FBRSxFQUFDLFVBQVMsR0FBRSxpQkFBZ0IsQ0FBQyxJQUFHLGFBQVksR0FBRSxVQUFTLE1BQUksS0FBRyxFQUFFLE9BQU8sR0FBTTtBQUFwVyxPQUFOLENBQXRGLEtBQXVjLEtBQUcsRUFBQyxZQUFXLElBQUcsV0FBVSxJQUFHLFVBQVMsSUFBRyxhQUFZO0FBQTNELE1BQStELEtBQUc7TUFBYSxLQUFHLDhDQUE4QyxHQUFFLEtBQUcsU0FBUSxpQkFBUyxHQUFHO1VBQUksSUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFHLE1BQUksT0FBSyxLQUFLLFVBQVEsQ0FBQyxJQUFHLEtBQUssU0FBUztZQUFJLElBQUUsRUFBRSxLQUFLLE1BQUssR0FBRSxHQUFHLEtBQUcsS0FBRyxPQUFLLE1BQUksRUFBRSxHQUFHLFNBQU8sRUFBRSxHQUFHLFdBQVMsS0FBSyxVQUFRLENBQUMsSUFBRyxLQUFLLFNBQVMsS0FBSyxTQUFRLEdBQUUsRUFBQyxVQUFTLEVBQUUsSUFBRyxpQkFBZ0IsRUFBRSxJQUFHLGFBQVksSUFBRyxVQUFhO0FBQUM7QUFBaFEsT0FBTixNQUE2USxLQUFHLEVBQUMsWUFBVyxJQUFHLFdBQVUsSUFBRyxVQUFTLElBQUcsYUFBWTtBQUEzRCxNQUErRCxLQUFHLDhDQUE4QyxHQUFFLEtBQUcsU0FBUSxpQkFBUyxHQUFHO1VBQUksSUFBRSxHQUFHLEVBQUU7VUFBTSxJQUFFLEVBQUUsS0FBSyxNQUFLLEdBQUUsR0FBRyxLQUFHLEtBQUssU0FBUyxLQUFLLFNBQVEsR0FBRSxFQUFDLFVBQVMsRUFBRSxJQUFHLGlCQUFnQixFQUFFLElBQUcsYUFBWSxJQUFHLFVBQWE7QUFBekosT0FBTixLQUFvSyxHQUFFLEtBQUcsU0FBUSxpQkFBUyxHQUFFLEdBQUUsR0FBRztVQUFJLElBQUUsRUFBRSxlQUFhO1VBQUcsSUFBRSxFQUFFLGVBQWEsR0FBRyxJQUFHLEdBQUUsS0FBSyxNQUFNLFFBQU0sQ0FBQyxPQUFPLElBQUcsS0FBRyxDQUFDLEtBQUssTUFBTSxPQUFNLE9BQU8sS0FBRyxLQUFHLFFBQU0sS0FBSyxNQUFNLFFBQU0sQ0FBQyxJQUFHLEtBQUssU0FBUyxHQUFFLEdBQUs7QUFBeEwsT0FBeUwsU0FBUSxtQkFBVztXQUFLLE1BQU0sV0FBVSxLQUFLLE1BQWdCO0FBQXRQLE9BQU4sTUFBbVEsS0FBRyxFQUFFLEdBQUcsT0FBTTtBQUFsQixNQUFpQyxLQUFHLE9BQUs7TUFBRSxLQUFHO01BQVUsS0FBRztNQUFPLEtBQUc7TUFBZSxLQUFHO01BQU8sS0FBRztNQUFRLEtBQUcsVUFBVSxjQUFXLEtBQUksYUFBUyxHQUFHO1dBQUcsT0FBSyxJQUFFLEtBQUssWUFBVyxPQUFLLEtBQUssUUFBUSxRQUFRLE1BQU0sTUFBSSxJQUFHLEtBQUssVUFBUSxFQUFFLGNBQXFCO0FBQXRILE9BQXVILFFBQU8sa0JBQVc7V0FBSyxJQUFJLEtBQUssUUFBUSxRQUFxQjtBQUFwTCxPQUFxTCxTQUFRLG1CQUFXO1VBQUksSUFBRSxHQUFHLFNBQVMsS0FBSyxRQUFRLGFBQVksVUFBUyxHQUFHO1VBQUUsRUFBRSxRQUFRLFFBQU8sQ0FBQyxRQUFNLElBQUUsRUFBRSxPQUFPLEVBQXFCO0FBQWpHLFVBQW1HLEVBQUUsRUFBRSxLQUFXO0FBQTFVLE9BQTJVLGlCQUFnQix5QkFBUyxHQUFHO1VBQUcsQ0FBQyxJQUFJO1lBQUksSUFBRSxFQUFFO1lBQVMsSUFBRSxFQUFFLGdCQUFnQixJQUFHLEtBQUssUUFBUSxRQUFRLFdBQVUsT0FBTyxLQUFLLEVBQUUscUJBQXFCLElBQUUsS0FBSztBQUFYLFlBQW1CLElBQUUsRUFBRSxHQUFFO1lBQUksSUFBRSxFQUFFLEdBQUU7WUFBSSxJQUFFLEVBQUUsR0FBRSxJQUFJLE9BQU8sS0FBRyxLQUFHLElBQUUsTUFBSSxLQUFHLElBQUUsS0FBRyxLQUFLLFdBQVcsS0FBRyxLQUFPO0FBQUM7QUFBNWpCLE9BQTZqQixZQUFXLG9CQUFTLEdBQUc7V0FBSyxRQUFRLFFBQVEsWUFBVSxDQUFDLEdBQUUsRUFBbUI7QUFBem9CLE9BQVosS0FBMnBCLEtBQUc7QUFBUCxNQUFTLEtBQUc7TUFBRSxLQUFHO01BQUUsS0FBRztNQUFFLEtBQUc7TUFBRyxLQUFHO01BQUcsS0FBRyxLQUFLLGNBQVcsVUFBUyxJQUFHLEtBQUksYUFBUyxHQUFHO2FBQU8sRUFBRSxLQUFLLFNBQVEsSUFBRyxLQUFLLFdBQVMsS0FBSyxRQUFRLFlBQVksVUFBYztBQUEzRyxPQUE0RyxlQUFjLHVCQUFTLEdBQUc7VUFBRyxFQUFFLEdBQUUsaUJBQWdCLE9BQU0sT0FBTyxLQUFLLElBQUksSUFBRSxLQUFLLGFBQWEsT0FBTyxJQUFFLEVBQUUsR0FBRSxPQUFNLEVBQUUsRUFBRSxRQUFNLEVBQUUsRUFBRSxNQUFJLEdBQUUsRUFBRSxjQUFjLFFBQVk7QUFBMVEsT0FBMlEsbUJBQWtCLDJCQUFTLEdBQUc7YUFBTyxFQUFFLEdBQUUscUJBQW9CLFFBQU0sUUFBTSxJQUFFLEVBQUUsR0FBRSxPQUFNLE9BQU8sS0FBSyxhQUFhLEVBQUUsS0FBVTtBQUFyWSxPQUFzWSxnQkFBZSx3QkFBUyxHQUFHO1VBQUcsRUFBRSxHQUFFLGtCQUFpQixPQUFNLE9BQU8sS0FBSyxJQUFJLElBQUUsS0FBSyxZQUFZLE9BQU8sSUFBRSxFQUFFLEdBQUUsT0FBTSxDQUFDLE1BQUksRUFBRSxHQUFFLE9BQUssRUFBRSxLQUFLLElBQUcsRUFBRSxlQUFlLFFBQVk7QUFBMWlCLE9BQTJpQixvQkFBbUIsNEJBQVMsR0FBRztVQUFHLEVBQUUsR0FBRSxzQkFBcUIsT0FBTSxPQUFPLEtBQUssSUFBRSxFQUFFLEdBQUUsTUFBTSxJQUFJLElBQUUsRUFBRSxLQUFLLGFBQVksR0FBRyxPQUFPLElBQUUsQ0FBQyxLQUFHLEtBQUssWUFBWSxPQUFPLEdBQUUsSUFBUTtBQUEvc0IsT0FBZ3RCLG9CQUFtQiw4QkFBVzthQUFPLEtBQUssWUFBWSxTQUFTO0FBQS93QixPQUFneEIsa0JBQWlCLDBCQUFTLEdBQUc7YUFBTSxDQUFDLENBQUMsS0FBSyxhQUFhLEVBQU07QUFBNzBCLE9BQTgwQixNQUFLLGNBQVMsR0FBRztlQUFTLEVBQUUsR0FBRztVQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsU0FBTyxJQUFFLEVBQUUsS0FBRyxLQUFPO1dBQUksSUFBRTtVQUFLLElBQUUsS0FBSyxNQUFNLEtBQUcsS0FBRyxFQUFFLENBQUMsSUFBRyxLQUFJLEtBQUcsTUFBSSxFQUFFLENBQUk7QUFBaDlCLE9BQWk5QixTQUFRLGlCQUFTLEdBQUc7YUFBTyxLQUFLLFlBQVUsS0FBSyxLQUFLLEtBQUcsTUFBSyxLQUFLLFFBQVU7QUFBNWhDLE9BQTZoQyxTQUFRLG1CQUFXO1dBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxLQUFLLFlBQVksU0FBUztZQUFHLEVBQUUsS0FBSyxZQUFZLEdBQUcsU0FBTyxLQUFHLE1BQUssT0FBTSxDQUFDLEVBQU07Y0FBTSxDQUFHO0FBQXRwQyxPQUF1cEMsV0FBVSxtQkFBUyxHQUFHO1VBQUksSUFBRSxFQUFFLElBQUcsR0FBRyxPQUFPLEVBQUUsS0FBSyxRQUFRLFFBQU8sQ0FBQyxNQUFLLE9BQUssS0FBSyxTQUFPLEtBQUcsS0FBRyxRQUFNLEtBQUssUUFBTSxLQUFJLEtBQUssUUFBTSxLQUFLLFFBQVEsSUFBRyxNQUFLLEtBQUssU0FBTyxLQUFHLEtBQUcsS0FBRyxPQUFLLEtBQUssUUFBUSxRQUFNLEtBQUssU0FBUSxNQUFLLEtBQUssUUFBVztBQUF6M0MsT0FBMDNDLFNBQVEsbUJBQVksQ0FBOTRDLEdBQSs0QyxnQkFBZSwwQkFBWSxDQUExNkMsR0FBMjZDLE9BQU0saUJBQVksQ0FBNzdDLE9BQWk4QyxHQUFFLEtBQUcsVUFBUyxFQUFDLFVBQVMsS0FBRyxVQUFTLGtCQUFTLEdBQUc7VUFBSSxJQUFFLEtBQUssUUFBUSxTQUFTLE9BQU8sTUFBSSxLQUFHLEVBQUUsU0FBUyxXQUFXO0FBQTVHLE9BQTZHLFNBQVEsaUJBQVMsR0FBRztVQUFJLElBQUUsS0FBSztVQUFNLElBQUUsRUFBRTtVQUFVLElBQUUsS0FBRyxLQUFHO1VBQUksSUFBRSxLQUFLLFNBQVMsR0FBRyxPQUFPLE1BQUksSUFBRSxNQUFJLENBQUMsS0FBRyxJQUFFLEtBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsS0FBRyxLQUFNO0FBQXhQLE9BQU4sQ0FBMzhDLElBQThzRCxHQUFFLEtBQUcsVUFBUyxFQUFDLE9BQU0sT0FBTSxXQUFVLElBQUcsVUFBUyxHQUFFLFdBQVUsTUFBSSxnQkFBZSwwQkFBVztVQUFJLElBQUUsS0FBSyxRQUFRO1VBQVUsSUFBRSxHQUFHLE9BQU8sSUFBRSxNQUFJLEVBQUUsS0FBSyxLQUFJLElBQUUsTUFBSSxFQUFFLEtBQUssS0FBTTtBQUFwSyxPQUFxSyxlQUFjLHVCQUFTLEdBQUc7VUFBSSxJQUFFLEtBQUs7VUFBUSxJQUFFLENBQUM7VUFBRSxJQUFFLEVBQUU7VUFBUyxJQUFFLEVBQUU7VUFBVSxJQUFFLEVBQUU7VUFBTyxJQUFFLEVBQUUsT0FBTyxPQUFPLElBQUUsRUFBRSxjQUFZLEVBQUUsWUFBVSxNQUFJLElBQUUsTUFBSSxJQUFFLEtBQUcsSUFBRSxJQUFFLEtBQUcsSUFBRyxJQUFFLEtBQUcsS0FBSyxJQUFHLElBQUUsS0FBSyxJQUFJLEVBQUUsWUFBVSxJQUFFLE1BQUksSUFBRSxLQUFHLElBQUUsSUFBRSxLQUFHLElBQUcsSUFBRSxLQUFHLEtBQUssSUFBRyxJQUFFLEtBQUssSUFBSSxFQUFFLFdBQVUsRUFBRSxZQUFVLEdBQUUsS0FBRyxJQUFFLEVBQUUsYUFBVyxJQUFFLEVBQVk7QUFBL2MsT0FBZ2QsVUFBUyxrQkFBUyxHQUFHO2FBQU8sRUFBRSxVQUFVLFNBQVMsS0FBSyxNQUFLLE9BQUssS0FBSyxRQUFNLE1BQUksRUFBRSxLQUFLLFFBQU0sT0FBSyxLQUFLLGNBQWtCO0FBQXhrQixPQUF5a0IsTUFBSyxjQUFTLEdBQUc7V0FBSyxLQUFHLEVBQUUsUUFBTyxLQUFLLEtBQUcsRUFBRSxPQUFPLElBQUksSUFBRSxFQUFFLEVBQUUsV0FBVyxLQUFHLEtBQUssUUFBUSxLQUFLLEtBQUssUUFBUSxRQUFNLEdBQUUsSUFBRyxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQVE7QUFBNXRCLE9BQU4sS0FBdXVCLEdBQUUsS0FBRyxVQUFTLEVBQUMsT0FBTSxTQUFRLFdBQVUsR0FBRSxVQUFTLEtBQUcsZ0JBQWUsMEJBQVc7YUFBTSxDQUFLO0FBQXRGLE9BQXVGLFVBQVMsa0JBQVMsR0FBRzthQUFPLEtBQUssT0FBTyxTQUFTLEtBQUssTUFBSyxPQUFLLEtBQUssSUFBSSxFQUFFLFFBQU0sS0FBRyxLQUFLLFFBQVEsYUFBVyxLQUFLLFFBQVU7QUFBbE4sT0FBbU4sTUFBSyxjQUFTLEdBQUc7VUFBRyxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQUssSUFBRyxNQUFJLEVBQUUsT0FBTztZQUFJLElBQUUsRUFBRSxRQUFNLElBQUUsT0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLEtBQUssUUFBUSxRQUFNLEdBQUs7QUFBQztBQUF4VixPQUFOLEtBQW1XLElBQUcsS0FBRyxVQUFTLEVBQUMsT0FBTSxTQUFRLFVBQVMsR0FBRSxNQUFLLEtBQUksV0FBVSxLQUFHLGdCQUFlLDBCQUFXO2FBQU0sQ0FBSztBQUEvRixPQUFnRyxTQUFRLGlCQUFTLEdBQUc7VUFBSSxJQUFFLEtBQUs7VUFBUSxJQUFFLEVBQUUsU0FBUyxXQUFTLEVBQUU7VUFBUyxJQUFFLEVBQUUsV0FBUyxFQUFFO1VBQVUsSUFBRSxFQUFFLFlBQVUsRUFBRSxLQUFLLElBQUcsS0FBSyxTQUFPLEdBQUUsQ0FBQyxLQUFHLENBQUMsS0FBRyxFQUFFLGFBQVcsS0FBRyxPQUFLLENBQUMsR0FBRSxLQUFLLGlCQUFnQixFQUFFLFlBQVUsU0FBUSxTQUFRLEtBQUssV0FBUyxZQUFXO2FBQUssUUFBTSxJQUFHLEtBQWU7QUFBMUMsU0FBMkMsRUFBRSxNQUFLLEtBQTNFLENBQWxCLEtBQXdHLElBQUcsRUFBRSxZQUFVLElBQUcsT0FBTyxHQUFHLE9BQVU7QUFBdmEsT0FBd2EsT0FBTSxpQkFBVzttQkFBYSxLQUFhO0FBQW5kLE9BQW9kLE1BQUssY0FBUyxHQUFHO1dBQUssVUFBUSxPQUFLLEtBQUcsRUFBRSxZQUFVLEtBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxRQUFRLFFBQU0sTUFBSyxNQUFJLEtBQUssT0FBTyxZQUFVLE1BQUssS0FBSyxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQU0sS0FBZTtBQUF0b0IsT0FBUCxLQUFrcEIsSUFBRyxLQUFHLFVBQVMsRUFBQyxPQUFNLFVBQVMsV0FBVSxHQUFFLFVBQVMsS0FBRyxnQkFBZSwwQkFBVzthQUFNLENBQUs7QUFBdkYsT0FBd0YsVUFBUyxrQkFBUyxHQUFHO2FBQU8sS0FBSyxPQUFPLFNBQVMsS0FBSyxNQUFLLE9BQUssS0FBSyxJQUFJLEVBQUUsWUFBVSxLQUFLLFFBQVEsYUFBVyxLQUFLLFFBQVU7QUFBcE4sT0FBUCxLQUFnTyxJQUFHLEtBQUcsVUFBUyxFQUFDLE9BQU0sU0FBUSxXQUFVLElBQUcsVUFBUyxLQUFJLFdBQVUsS0FBRyxJQUFHLFVBQVMsS0FBRyxnQkFBZSwwQkFBVzthQUFPLEVBQUUsVUFBVSxlQUFlLEtBQVc7QUFBdEosT0FBdUosVUFBUyxrQkFBUyxHQUFHO1VBQUk7VUFBRSxJQUFFLEtBQUssUUFBUSxVQUFVLE9BQU8sS0FBRyxLQUFHLE1BQUksSUFBRSxFQUFFLFdBQVMsSUFBRSxLQUFHLElBQUUsRUFBRSxZQUFVLElBQUUsT0FBSyxJQUFFLEVBQUUsWUFBVyxLQUFLLE9BQU8sU0FBUyxLQUFLLE1BQUssTUFBSSxJQUFFLEVBQUUsYUFBVyxFQUFFLFdBQVMsS0FBSyxRQUFRLGFBQVcsR0FBRyxLQUFHLEtBQUssUUFBUSxZQUFVLEVBQUUsWUFBYTtBQUFuWixPQUFvWixNQUFLLGNBQVMsR0FBRztVQUFJLElBQUUsRUFBRSxFQUFFLFdBQVcsS0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLLFFBQVEsUUFBTSxHQUFFLElBQUcsS0FBSyxRQUFRLEtBQUssS0FBSyxRQUFRLE9BQVM7QUFBL2dCLE9BQVAsS0FBMmhCLElBQUcsS0FBRyxVQUFTLEVBQUMsT0FBTSxPQUFNLFVBQVMsR0FBRSxNQUFLLEdBQUUsVUFBUyxLQUFJLE1BQUssS0FBSSxXQUFVLEdBQUUsY0FBYSxNQUFJLGdCQUFlLDBCQUFXO2FBQU0sQ0FBSztBQUFqSSxPQUFrSSxTQUFRLGlCQUFTLEdBQUc7VUFBSSxJQUFFLEtBQUs7VUFBUSxJQUFFLEVBQUUsU0FBUyxXQUFTLEVBQUU7VUFBUyxJQUFFLEVBQUUsV0FBUyxFQUFFO1VBQVUsSUFBRSxFQUFFLFlBQVUsRUFBRSxLQUFLLElBQUcsS0FBSyxTQUFRLEVBQUUsWUFBVSxNQUFJLE1BQUksS0FBSyxPQUFNLE9BQU8sS0FBSyxjQUFjLElBQUcsS0FBRyxLQUFHLEdBQUc7WUFBRyxFQUFFLGFBQVcsSUFBRyxPQUFPLEtBQUssa0JBQWtCLElBQUUsQ0FBQyxLQUFLLFNBQU8sRUFBRSxZQUFVLEtBQUssUUFBTSxFQUFFO0FBQTVDLFlBQXFELElBQUUsQ0FBQyxLQUFLLFdBQVMsRUFBRSxLQUFLLFNBQVEsRUFBRSxVQUFRLEVBQUUsYUFBYSxLQUFLLFFBQU0sRUFBRSxXQUFVLEtBQUssVUFBUSxFQUFFLFFBQU8sS0FBRyxJQUFFLEtBQUssU0FBTyxJQUFFLEtBQUssUUFBTSxHQUFFLEtBQUssU0FBTyxFQUFFLElBQUksSUFBRSxLQUFLLFFBQU0sRUFBRSxLQUFLLElBQUcsTUFBSSxlQUFjLDZCQUEyQixXQUFTLFlBQVc7ZUFBSyxRQUFNLElBQUcsS0FBZTtBQUExQyxXQUEyQyxFQUFFLFVBQVMsS0FBbEUsRUFBd0UsRUFBbkcsSUFBMEcsRUFBakg7Y0FBMkg7QUFBL3RCLE9BQWd1QixhQUFZLHVCQUFXO2FBQU8sS0FBSyxXQUFTLFlBQVc7YUFBSyxRQUFTO0FBQTNCLFNBQTRCLEtBQUssUUFBUSxVQUFTLE9BQVM7QUFBcjBCLE9BQXMwQixPQUFNLGlCQUFXO21CQUFhLEtBQWE7QUFBajNCLE9BQWszQixNQUFLLGdCQUFXO1dBQUssU0FBTyxPQUFLLEtBQUssT0FBTyxXQUFTLEtBQUssT0FBTSxLQUFLLFFBQVEsS0FBSyxLQUFLLFFBQVEsT0FBTSxLQUFjO0FBQXQrQixPQUFQLEdBQWcvQixHQUFHLFVBQVEsU0FBUSxHQUFHLFdBQVMsRUFBQyxXQUFVLENBQUMsR0FBRSxhQUFZLElBQUcsUUFBTyxDQUFDLEdBQUUsYUFBWSxNQUFLLFlBQVcsTUFBSyxRQUFPLENBQUMsQ0FBQyxJQUFHLEVBQUMsUUFBTyxDQUFDLE1BQUksQ0FBQyxHQUFFLEVBQUMsUUFBTyxDQUFDLEtBQUcsQ0FBQyxZQUFXLENBQUMsSUFBRyxFQUFDLFdBQVUsT0FBSyxDQUFDLEdBQUUsRUFBQyxXQUFVLE1BQUksQ0FBQyxXQUFVLENBQUMsS0FBSSxDQUFDLElBQUcsRUFBQyxPQUFNLGFBQVksTUFBSyxLQUFHLENBQUMsU0FBUSxDQUFDLE1BQUssVUFBUyxFQUFDLFlBQVcsV0FBVSxhQUFZLFFBQU8sY0FBYSxRQUFPLGdCQUFlLFFBQU8sVUFBUyxRQUFPLG1CQUFrQix3QkFBc0IsS0FBRztBQUFQLE1BQVMsS0FBRyxLQUFLLGNBQVcsS0FBSSxhQUFTLEdBQUc7YUFBTyxFQUFFLEtBQUssU0FBUSxJQUFHLEVBQUUsZUFBYSxLQUFLLFlBQVksVUFBUyxFQUFFLGdCQUFjLEtBQUssTUFBTSxXQUFVLEtBQUssTUFBTSxTQUFPLEVBQUUsYUFBWSxLQUFLLE1BQU0sU0FBYTtBQUFoTCxPQUFpTCxNQUFLLGNBQVMsR0FBRztXQUFLLFFBQVEsVUFBUSxJQUFFLEtBQU07QUFBL04sT0FBZ08sV0FBVSxtQkFBUyxHQUFHO1VBQUksSUFBRSxLQUFLLFFBQVEsSUFBRyxDQUFDLEVBQUUsU0FBUzthQUFLLFlBQVksZ0JBQWdCLE9BQU87QUFBSixZQUFNLElBQUUsS0FBSztZQUFZLElBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxLQUFHLEtBQUcsRUFBRSxRQUFNLFFBQU0sSUFBRSxFQUFFLGdCQUFjLE1BQU0sS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUTtjQUFFLEVBQUUsSUFBRyxFQUFFLFlBQVUsTUFBSSxLQUFHLEtBQUcsS0FBRyxDQUFDLEVBQUUsaUJBQWlCLEtBQUcsRUFBRSxVQUFRLEVBQUUsVUFBVSxJQUFHLENBQUMsS0FBRyxFQUFFLFNBQU8sS0FBRyxLQUFHLFFBQU0sSUFBRSxFQUFFLGdCQUFjLElBQUc7QUFBSTtBQUFDO0FBQWhqQixPQUFpakIsS0FBSSxhQUFTLEdBQUc7VUFBRyxhQUFhLEdBQUUsT0FBTyxFQUFFLEtBQUksSUFBSSxJQUFFLEtBQUssYUFBWSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtZQUFHLEVBQUUsR0FBRyxRQUFRLFNBQU8sR0FBRSxPQUFPLEVBQUU7QUFBRyxjQUFZO0FBQTNyQixPQUE0ckIsS0FBSSxhQUFTLEdBQUc7VUFBRyxFQUFFLEdBQUUsT0FBTSxPQUFNLE9BQU8sS0FBSyxJQUFJLElBQUUsS0FBSyxJQUFJLEVBQUUsUUFBUSxPQUFPLE9BQU8sS0FBRyxLQUFLLE9BQU8sSUFBRyxLQUFLLFlBQVksS0FBSyxJQUFHLEVBQUUsVUFBUSxNQUFLLEtBQUssWUFBWSxVQUFXO0FBQXgyQixPQUF5MkIsUUFBTyxnQkFBUyxHQUFHO1VBQUcsRUFBRSxHQUFFLFVBQVMsT0FBTSxPQUFPLEtBQUssSUFBSSxJQUFFLEtBQUssWUFBWSxPQUFPLElBQUUsS0FBSyxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRSxJQUFHLElBQUcsS0FBSyxZQUFZLFVBQWM7QUFBNS9CLE9BQTYvQixJQUFHLFlBQVMsR0FBRSxHQUFHO1VBQUksSUFBRSxLQUFLLGtCQUFrQixFQUFFLElBQUcsVUFBUyxHQUFHO1VBQUUsS0FBRyxFQUFFLE1BQUksSUFBRyxFQUFFLEdBQUcsS0FBUTtBQUE5QyxVQUFxRCxJQUE1RDtBQUFsaUMsT0FBK2xDLEtBQUksYUFBUyxHQUFFLEdBQUc7VUFBSSxJQUFFLEtBQUssa0JBQWtCLEVBQUUsSUFBRyxVQUFTLEdBQUc7WUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLEVBQUUsSUFBRyxJQUFHLEtBQUcsT0FBTyxFQUFLO0FBQTFELFVBQWlFLElBQXhFO0FBQXJvQyxPQUE4c0MsTUFBSyxjQUFTLEdBQUUsR0FBRztXQUFLLFFBQVEsYUFBVyxHQUFHLEdBQUUsR0FBRyxJQUFJLElBQUUsS0FBSyxTQUFTLE1BQUksS0FBSyxTQUFTLEdBQUcsUUFBUSxJQUFHLEtBQUcsRUFBRSxRQUFRO1VBQUUsT0FBSyxHQUFFLEVBQUUsaUJBQWUsWUFBVztZQUFFLFNBQTBCO0FBQWpFLFVBQWtFLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVE7WUFBRSxHQUFHLElBQUc7QUFBSTtBQUFDO0FBQXo2QyxPQUEwNkMsU0FBUSxtQkFBVztXQUFLLFdBQVMsR0FBRyxNQUFLLENBQUMsSUFBRyxLQUFLLFdBQVMsSUFBRyxLQUFLLFVBQVEsSUFBRyxLQUFLLE1BQU0sV0FBVSxLQUFLLFVBQWE7QUFBL2hELE9BQWIsRUFBOGlELEVBQUUsSUFBRyxFQUFDLGFBQVksSUFBRyxZQUFXLElBQUcsV0FBVSxJQUFHLGNBQWEsSUFBRyxnQkFBZSxJQUFHLGFBQVksSUFBRyxlQUFjLElBQUcsYUFBWSxJQUFHLGtCQUFpQixJQUFHLGlCQUFnQixJQUFHLGNBQWEsSUFBRyxnQkFBZSxJQUFHLGdCQUFlLElBQUcsaUJBQWdCLElBQUcsY0FBYSxJQUFHLGdCQUFlLElBQUcsc0JBQXFCLElBQUcsb0JBQW1CLElBQUcsZUFBYyxJQUFHLFNBQVEsSUFBRyxPQUFNLEdBQUUsYUFBWSxHQUFFLFlBQVcsR0FBRSxZQUFXLEdBQUUsbUJBQWtCLEdBQUUsaUJBQWdCLEdBQUUsa0JBQWlCLEdBQUUsWUFBVyxHQUFFLGdCQUFlLEdBQUUsS0FBSSxJQUFHLEtBQUksR0FBRSxPQUFNLElBQUcsT0FBTSxHQUFFLFFBQU8sSUFBRyxPQUFNLElBQUcsSUFBRyxHQUFFLEtBQUksR0FBRSxNQUFLLEdBQUUsT0FBTSxHQUFFLFFBQU8sR0FBRSxTQUFRLEdBQUUsUUFBTyxHQUFFLFVBQVMsYUFBVyxxRUFBUSxNQUFJLHdCQUFPLHFDQUFXLFlBQVc7V0FBVTtBQUE1QjtBQUFBLG9HQUE5QixHQUE0RCxlQUFhLE9BQU8sVUFBUSxPQUFPLFVBQVEsT0FBTyxVQUFRLEtBQUcsRUFBRSxLQUFNO0FBQXR1akIsRUFBdXVqQixRQUFPLFVBQVMscUJBQW1CLEdBQUc7T0FBa0MsR0FBSSxpQ0FBTyxDQUFDLHlCQUFTLDZEQUFZO0FBQUE7QUFBQTtBQUFBLHVHQUFHLG9CQUFpQiwwRUFBUSxFQUFFLG1CQUFrQix1QkFBcUIsRUFBRSxRQUFlO0FBQXJLLEVBQXNLLFVBQVMsR0FBRSxHQUFHO1dBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssYUFBVyxFQUFFLEtBQUssVUFBUyxJQUFJLEVBQUUsRUFBRSxJQUFPO0tBQUUsR0FBRyxTQUFPLFVBQVMsR0FBRztnQkFBWSxLQUFLLFlBQVc7UUFBRSxNQUFRO0FBQUUsS0FBakM7QUFBL0IsS0FBaUUsRUFBRSxRQUFRLFVBQVUsaUJBQWMsR0FBRztXQUFPLFVBQVMsR0FBRSxHQUFHO1FBQUUsS0FBSyxNQUFLLEdBQUUsSUFBRyxFQUFFLEtBQUssU0FBUyxRQUFRLEVBQUMsTUFBSyxHQUFFLFNBQVk7QUFBQztBQUEvRixJQUFnRyxFQUFFLFFBQVEsVUFBZ0I7QUFBcGQsY0FBK2QsR0FBRztJQUFFLFVBQVEsY0FBWSxLQUFHLEVBQUUsY0FBZTtBQUF0RCxFQUF1RCxtQkFBaUIsR0FBRztPQUFJLElBQUksSUFBRSxHQUFFLElBQUUsQ0FBQyxVQUFTLFFBQU8sSUFBRSxFQUFFLHVCQUFzQixJQUFFLEVBQUUsc0JBQXFCLElBQUUsRUFBRSxRQUFPLEVBQUUsS0FBRyxLQUFHLENBQUMsSUFBRztRQUFFLEVBQUUsRUFBRSxLQUFHLDBCQUF5QixJQUFFLEVBQUUsRUFBRSxLQUFHO0FBQStCLFFBQUcsVUFBTSxXQUFTLEdBQUc7UUFBSSxJQUFFLENBQUMsS0FBSztRQUFNLElBQUUsS0FBSyxJQUFJLElBQUUsSUFBRyxxQkFBcUIsWUFBVztRQUFFLElBQUs7QUFBN0IsT0FBOEIsSUFBSyxFQUExQztBQUFuRCxLQUE4RixJQUFFLGVBQWMsRUFBRSx3QkFBc0IsR0FBRSxFQUFFLHVCQUF1QjtBQUF2VyxFQUF3VyxTQUFRLFlBQVksdUJBQXFCLFVBQVMsR0FBRztNQUFJLElBQUUsRUFBRSxLQUFLLGNBQVk7TUFBRyxJQUFFLEVBQUUsS0FBSyxTQUFPO01BQUcsSUFBRSxFQUFFLEtBQUssWUFBVSxHQUFHLE9BQU0sQ0FBQyxJQUFFLElBQUUsR0FBRyxRQUFRLE9BQVU7QUFEM3l4QixHQUM0eXhCLFlBQVksbUJBQWdCO1dBQVMsSUFBSTtXQUFPLEtBQUssTUFBTSxTQUFPLElBQUUsS0FBSyxXQUFXLFNBQVMsSUFBSSxVQUFhO1VBQU8sWUFBVztXQUFPLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBUTtBQUFDO0FBQXZLLEtBQTBLLFlBQVksYUFBVyxVQUFTLEdBQUc7U0FBTyxFQUFFLFFBQVEscUJBQTRCO0FBRHZqeUIsR0FDd2p5QixZQUFZLHlCQUF1QixVQUFTLEdBQUc7TUFBSSxJQUFFLEVBQUU7TUFBRyxJQUFFLEVBQUUsSUFBSSxFQUFFO01BQVcsSUFBRSxDQUFDLFdBQVcsS0FBSyxZQUFXO1FBQUcsWUFBVSxFQUFFLE1BQU0sSUFBSSxhQUFZLE9BQU8sSUFBRSxDQUFDLEdBQUUsQ0FBRztBQUF0RSxNQUEwRSxDQUFqRjtBQUQ1b3lCLE1BQ2t1eUIsVUFBUSxLQUFLLE9BQUssWUFBVztTQUFPLElBQUksT0FBZ0I7QUFBNUQsY0FBeUUsV0FBUyxVQUFTLEdBQUUsR0FBRSxHQUFHO01BQUk7TUFBRTtNQUFFO01BQUUsSUFBRTtNQUFLLElBQUUsRUFBRSxNQUFJLElBQUUsUUFBUSxJQUFFLGFBQVc7UUFBRSxFQUFFLFlBQVUsQ0FBQyxJQUFFLElBQUUsV0FBVSxJQUFFLE1BQUssSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFHLElBQUUsSUFBTztBQUE3RSxXQUFxRixZQUFXO1FBQUksSUFBRSxVQUFVLEtBQUcsRUFBRSxZQUFVLENBQUMsTUFBSSxJQUFFLEdBQUcsSUFBSSxJQUFFLEtBQUcsSUFBRSxHQUFHLE9BQU8sSUFBRSxNQUFLLElBQUUsV0FBVSxLQUFHLEtBQUcsYUFBYSxJQUFHLElBQUUsTUFBSyxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFHLElBQUUsSUFBRSxRQUFNLEtBQUcsRUFBRSxhQUFXLENBQUMsTUFBSSxJQUFFLFdBQVcsR0FBRSxLQUFNO0FBQUMsR0FBeE07QUFBbEosRUFBMlYsSUFBSSxVQUFRLFNBQU8sT0FBTyxXQUFTLElBQUUsRUFBRSxXQUFTLG9CQUFrQixHQUFHO0lBQUUsR0FBRyxjQUFZLFVBQVMsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFDLFdBQVUsS0FBSyxHQUFFLFFBQU8sS0FBSyxHQUFFLFNBQVEsS0FBSztRQUFHLElBQUUsU0FBUyxJQUFFLEVBQUUsT0FBTyxHQUFFLFNBQVEsS0FBSyxZQUFXO2VBQVMsRUFBRSxHQUFHO1lBQUUsRUFBRSxLQUFLLCtCQUE4QixFQUFFLFNBQVMsWUFBVSxFQUFFLFNBQVMsU0FBUyxZQUFVLEVBQUUsU0FBUyxZQUFZLGFBQVksU0FBUyxTQUFTLGNBQVksU0FBUyxxQkFBcUIsS0FBSyxDQUFDLEdBQUUsQ0FBQyxHQUFHLFlBQVcsVUFBUyxLQUFJLFFBQU8sZ0JBQWUsT0FBTSxDQUFDLEdBQUUsVUFBUyxvQkFBVztjQUFFLE1BQU0sSUFBSSxVQUFhO0FBQTFGLGFBQXRELENBQTlCLEtBQW1MLFNBQVMscUJBQXFCLEtBQUssQ0FBQyxHQUFFLENBQUMsR0FBRyxVQUFTLFVBQVMsS0FBSSxRQUFPLGdCQUFlLE9BQU0sQ0FBQyxHQUFFLFVBQVMsb0JBQVc7Y0FBRSxNQUFNLElBQUksVUFBYTtBQUExRixhQUFwRCxHQUFpSixFQUFFLElBQUksR0FBRyxZQUFZLFVBQVUsU0FBUyxZQUFZLGFBQVksSUFBSSxHQUFHLFNBQVMsU0FBUyxxQkFBcUIsS0FBSyxDQUFDLEdBQUUsQ0FBQyxHQUFHLEtBQUssWUFBVztZQUFFLE1BQU0sR0FBRyxpQkFBZSxNQUFNLFVBQVMsVUFBUyxLQUFJLFFBQU8sZ0JBQWUsT0FBTSxDQUFDLEdBQUUsVUFBUyxvQkFBVztnQkFBRSxNQUFNLElBQUksVUFBUyxLQUFJLEVBQUUsRUFBRSxNQUFNLFNBQWlDO0FBQUcsYUFBeEksRUFBaEI7QUFBMEosU0FBOVA7Z0JBQXVRLEVBQUUsR0FBRztVQUFFLFNBQVMsWUFBVSxFQUFFLFNBQVMsU0FBUyxZQUFVLEVBQUUsU0FBUyxZQUFZLGFBQVksU0FBUyxTQUFTLGNBQVksU0FBUyxxQkFBcUIsS0FBSyxDQUFDLEdBQUUsQ0FBQyxHQUFHLFlBQVcsVUFBUyxLQUFJLFFBQU8sZ0JBQWUsT0FBTSxDQUFDLEdBQUUsVUFBUyxvQkFBVztjQUFFLE1BQU0sSUFBSSxVQUFhO0FBQTFGLGFBQXRELENBQTlCLEtBQW1MLFNBQVMscUJBQXFCLEtBQUssQ0FBQyxHQUFFLENBQUMsR0FBRyxVQUFTLFVBQVMsS0FBSSxRQUFPLGdCQUFlLE9BQU0sQ0FBQyxHQUFFLFVBQVMsb0JBQVc7Y0FBRSxNQUFNLElBQUksVUFBYTtBQUFHLFdBQTdGLEVBQXBEO2dCQUEwSixFQUFFLEdBQUUsR0FBRzthQUFHLEVBQUUsWUFBWSxXQUFVLEVBQUUsYUFBVyxnQkFBYyxLQUFHLEtBQUssTUFBSSxJQUFFLEVBQUUsS0FBRyxFQUFFLElBQUcsRUFBSztnQkFBUyxFQUFFLEdBQUc7VUFBRSxTQUFTLFlBQVUsY0FBWSxPQUFPLEVBQUUsVUFBUSxFQUFFLE9BQU8sS0FBSyxNQUFLLEVBQUUsWUFBVSxjQUFZLE9BQU8sRUFBRSxXQUFTLEVBQUUsUUFBUSxLQUFLLE1BQUssRUFBWTtnQkFBUyxFQUFFLEdBQUc7WUFBSSxJQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUUsU0FBUztnQkFBUyxFQUFFLEdBQUc7ZUFBTyxFQUFFLFFBQW9DO2dCQUFTLElBQUk7VUFBRSxJQUFJLGtCQUErQztXQUFJLElBQUUsRUFBRTtVQUFNLElBQUUsRUFBRSxNQUFNLEtBQUs7VUFBOEIsSUFBRSxFQUFFLEtBQUssZUFBZSxJQUFHLGNBQVksR0FBRSxPQUFPLEtBQUssSUFBSSxJQUFHLEtBQUcsS0FBRyxJQUFFLEVBQUUsUUFBUTtZQUFJLElBQUUsRUFBRSxHQUFHLEdBQUcsT0FBTyxNQUFLLEVBQUUsV0FBUyxXQUFTLEtBQUcsWUFBVSxLQUFHLEVBQUUsU0FBUyxjQUFZLEVBQU07Y0FBTSxHQUFHLGtCQUFpQiw4QkFBNkIsVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQUssSUFBRSxFQUFFLEtBQUksRUFBSztBQUFyRyxVQUF1RyxFQUFFLGFBQVcsZ0JBQWMsS0FBRyxLQUFLLE1BQUksSUFBRSxFQUFFLEVBQUUsT0FBTyxXQUFXLFNBQVEsQ0FBQyxPQUFLLE9BQU8sV0FBVyxLQUFLLFlBQVc7VUFBRSxFQUFFLE9BQU0sQ0FBSTtBQUFFLE9BQXBEO0FBQXNELEtBQXhqRSxDQUF2QjtBQUF6RixPQUEycUUsVUFBVSxNQUFNLFlBQVc7TUFBRSxnQkFBOEI7QUFBRSxHQUEvRDtBQUFyckUsRUFBcXZFLG1CQUFpQixHQUFHO0lBQUUsR0FBRyxXQUFTLFVBQVMsR0FBRztXQUFPLEVBQUUsTUFBTSxVQUFVLEVBQUUsTUFBTSxjQUFZLEVBQUUsTUFBTSxTQUFTLE1BQUksRUFBRSxHQUFHLFNBQVMsTUFBVTtBQUFwSCxLQUFxSCxFQUFFLEdBQUcsV0FBUyxVQUFTLEdBQUc7UUFBSSxJQUFFLEVBQUMsWUFBVyxLQUFJLGFBQVksS0FBSSxnQkFBZSxDQUFDLEdBQUUsT0FBTSxDQUFDLEdBQUUsUUFBTyxHQUFFLGFBQVksQ0FBQyxHQUFFLFdBQVUsUUFBTyxpQkFBZ0IsQ0FBQyxzQkFBa0IsVUFBUSxLQUFLLFlBQVc7UUFBRSxNQUFNLFFBQWdCO0FBQTdDLFFBQStDLENBQUMsQ0FBNUQsZ0JBQXlFLFVBQVEsS0FBSyxZQUFXO1FBQUUsTUFBTSxRQUFpQjtBQUE5QyxRQUFnRCxDQUFDLENBQTlELElBQWlFLFVBQVUsS0FBSyxZQUFXO2VBQVMsSUFBSTthQUFLLE1BQUksRUFBRSxLQUFLLGtCQUFnQixFQUFFLGFBQVcsRUFBRSxLQUFLLGdCQUFlLEtBQUssTUFBSSxFQUFFLEtBQUssbUJBQWlCLEVBQUUsY0FBWSxFQUFFLEtBQUssaUJBQWdCLEtBQUssTUFBSSxFQUFFLEtBQUssc0JBQW9CLEVBQUUsaUJBQWUsRUFBRSxLQUFLLG9CQUFtQixLQUFLLE1BQUksRUFBRSxLQUFLLGFBQVcsRUFBRSxRQUFNLEVBQUUsS0FBSyxXQUFVLEtBQUssTUFBSSxFQUFFLEtBQUssY0FBWSxFQUFFLFNBQU8sRUFBRSxLQUFLLFlBQVcsS0FBSyxNQUFJLEVBQUUsS0FBSyxtQkFBaUIsRUFBRSxjQUFZLEVBQUUsS0FBSyxpQkFBZ0IsS0FBSyxNQUFJLEVBQUUsS0FBSyxpQkFBZSxFQUFFLFlBQVUsRUFBRSxLQUFLLGVBQWMsS0FBSyxNQUFJLEVBQUUsS0FBSyx1QkFBcUIsRUFBRSxrQkFBZ0IsRUFBRSxLQUF5QjtnQkFBUyxFQUFFLEdBQUc7b0JBQVUsTUFBSSxJQUFFLENBQUMsSUFBRyxLQUFJLEVBQUUsU0FBUyxXQUFVLEVBQUUsU0FBUyxXQUFVLEVBQUUsbUJBQWlCLENBQUMsSUFBRSxFQUFFLElBQUksU0FBUSxFQUFFLGdCQUFjLEVBQUUsSUFBSSxlQUFjLGNBQWMsSUFBRSxPQUFPO0FBQWIsWUFBeUIsSUFBRSxFQUFFO1lBQWMsSUFBRSxFQUFFLFNBQVM7WUFBSyxJQUFFLEVBQUUsU0FBUyxNQUFJLEVBQUUsUUFBUTtZQUFZLElBQUUsRUFBRTtZQUFVLElBQUU7WUFBRSxJQUFFO1lBQUUsSUFBRSxFQUFFLEVBQUUsZ0JBQWMsQ0FBQyxNQUFJLElBQUUsT0FBTyxJQUFFO0FBQU4sWUFBUSxJQUFFO1lBQUUsSUFBRSxFQUFFLFNBQVMsSUFBRyxFQUFFLEdBQUcsWUFBVSxFQUFFLEdBQUcsZUFBYSxFQUFFLEdBQUcsaUJBQWUsSUFBRSxFQUFFLEdBQUcsWUFBVyxFQUFFLEdBQUcsY0FBWSxFQUFFLEdBQUcsZ0JBQWMsSUFBRSxFQUFFLEdBQUcsY0FBYSxJQUFFLEVBQUUsZUFBYSxFQUFFLFFBQVEsVUFBUSxJQUFFLFVBQVEsSUFBRSxFQUFFLGVBQWEsRUFBRSxlQUFhLE1BQUksSUFBRSxTQUFRLElBQUUsRUFBRSxnQkFBYyxPQUFLLElBQUUsSUFBRSxFQUFFLGdCQUFjLEdBQUc7Y0FBSSxJQUFFLElBQUUsSUFBRSxFQUFFLEVBQUUsSUFBSSxjQUFnQjtBQUE1RCxlQUFpRSxNQUFJLEtBQUcsSUFBRyxLQUFHLEVBQUUsY0FBYyxJQUFHLFdBQVMsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUUsV0FBVyxPQUFLLE9BQU8sSUFBRyxZQUFVLEdBQUc7Y0FBSSxJQUFFLEVBQUUsV0FBVyxPQUFLLEVBQUUsZUFBYSxFQUFFLGFBQWEsSUFBRSxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUk7V0FBRSxJQUFJLEVBQUMsVUFBUyxZQUFXLEtBQUksRUFBRSxXQUFXLE1BQUksSUFBRSxHQUFFLE1BQUssSUFBRSxRQUFNLEtBQUssQ0FBQyxHQUFFLENBQUMsR0FBRyxJQUFJLFdBQVUsR0FBRyxZQUFXLE9BQU0sQ0FBQyxHQUFFLFVBQVMsRUFBRSxZQUFXLFFBQU8sZ0JBQWUsVUFBUyxvQkFBVztjQUFFLE1BQU0sSUFBSSxVQUFhO0FBQW5HLGFBQXpDLEVBQStJLFFBQVEsRUFBQyxTQUFRLEtBQUcsRUFBQyxPQUFNLENBQUMsR0FBRSxVQUFTLEVBQUUsWUFBVyxRQUFPLDZCQUEyQixZQUFXO1lBQUUsVUFBVSxLQUFLLFdBQVMsRUFBRSxLQUFLLE9BQU0sVUFBUyxHQUFHO2lCQUFJLEVBQUUsVUFBVSxPQUFPLFdBQVMsRUFBRSxLQUFZO0FBQUU7QUFBekgsV0FBNkg7Z0JBQVMsSUFBSTtZQUFFLENBQUMsR0FBRSxFQUFFLFFBQVEsRUFBRSxjQUFhLEVBQUUsWUFBWSxXQUFVLEVBQUUsWUFBWSxXQUFVLEVBQUUsVUFBVSxPQUFPLFdBQVMsRUFBRSxLQUFLLG1CQUFrQixZQUFXO1lBQUUsSUFBSSxjQUFpQjtBQUE3QyxXQUE4QyxFQUFlO1dBQUksSUFBRSxFQUFFO1VBQU0sSUFBRSxFQUFFLE9BQU8sSUFBRyxHQUFFO1VBQUcsSUFBRSxDQUFDO1VBQUUsSUFBRSxFQUFFLE1BQUksRUFBRSxLQUFLLHVCQUFzQixLQUFJLEVBQUUsTUFBTSxJQUFHLEVBQUUsT0FBTztZQUFJLElBQUUsQ0FBQyxJQUFJLE9BQU8sV0FBUyxFQUFFLEtBQUssVUFBUyxHQUFHLGNBQWEsVUFBUyxHQUFHO2dCQUFJLENBQUMsTUFBSSxLQUFJLElBQUUsQ0FBSTtBQUFqRCxVQUFoQyxJQUFxRixHQUFHLGNBQWEsVUFBUyxHQUFHO2NBQUksSUFBRSxFQUFFLGFBQVcsRUFBRSxjQUFjLEVBQUUsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE9BQUssRUFBRSxLQUFLLENBQUMsR0FBRSxDQUFDLElBQUcsS0FBSSxJQUFFLENBQUk7QUFBbkksY0FBdUksR0FBRyxjQUFhLFVBQVMsR0FBRztjQUFJLElBQUUsRUFBRSxhQUFXLEVBQUUsY0FBYyxFQUFFLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxPQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsQ0FBQyxJQUFHLEtBQUksSUFBRSxDQUFJO0FBQUUsU0FBcEk7QUFBNVAsZUFBdVksT0FBTyxXQUFTLEVBQUUsS0FBSyxVQUFTLEtBQUssV0FBUyxFQUFFLEtBQUssT0FBTSxVQUFTLEdBQUc7Y0FBSSxFQUFFLE1BQUksRUFBRSxpQkFBZSxFQUFFLFNBQVMsYUFBVyxNQUFJLEVBQUUsRUFBRSxRQUFRLFFBQVEscUJBQXFCLFNBQU8sRUFBRSxTQUFTLGNBQVksS0FBSSxFQUFFLFVBQVUsT0FBTyxXQUFTLEVBQUUsS0FBSyxXQUFTLEVBQUUsa0JBQWlCLEVBQUUsbUJBQWlCLEVBQUUsbUJBQWtCLEVBQWE7QUFBNVIsUUFBaEMsR0FBZ1UsR0FBRyxRQUFPLFVBQVMsR0FBRSxHQUFHO1VBQUs7QUFBL0IsVUFBaUMsRUFBRSxHQUFHLFNBQVc7QUFBRSxLQUFqd0YsQ0FBM0k7QUFBN1EsT0FBNHBHLFVBQVUsTUFBTSxZQUFXO01BQUUsb0JBQStCO0FBQUUsR0FBaEU7QUFBdHFHLEVBQXV1RyxtQkFBaUIsR0FDdHcrQjtNQUFJLElBQUU7TUFBRSxJQUFFO01BQUUsSUFBRSxhQUFXO1dBQU8sS0FBSSwrQkFBK0I7QUFBbkU7TUFBb0UsTUFBRyxNQUFLLGNBQVMsR0FBRztVQUFJLElBQUUsRUFBQyxTQUFRLElBQUcsWUFBVyxLQUFJLGFBQVksS0FBSSxPQUFNLEtBQUssR0FBRSxVQUFTLEtBQUssR0FBRSxhQUFZLENBQUMsR0FBRSxhQUFZLE1BQUssV0FBVSxlQUFjLElBQUUsRUFBRSxPQUFPLEdBQUUsU0FBUSxLQUFLLFlBQVc7WUFBSSxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUUsTUFBTSxLQUFLLFNBQU8sTUFBSSxFQUFFLE1BQU0sS0FBSztZQUFVLElBQUUsYUFBVztjQUFJLElBQUUsRUFBRSxLQUFLO2NBQWMsSUFBRSxFQUFFLE1BQUksR0FBRyxFQUFFLFlBQVksU0FBUSxFQUFFLFFBQVEsSUFBSSxFQUFDLFVBQVMsSUFBRyxPQUFNLE9BQUssRUFBRSxLQUFLLGdCQUFnQixJQUFJLGdCQUFlLEVBQUUsVUFBVSxJQUFJLGdCQUFjLElBQUcsRUFBRSxTQUFTLEVBQUMsU0FBUSxLQUFHLEVBQUMsVUFBUyxFQUFFLGFBQVksT0FBTSxDQUFDLEdBQUUsTUFBSyxzQkFBcUIsTUFBRyxVQUFTLEVBQUUsYUFBWSxPQUFNLENBQUMsR0FBRSxNQUFLLGdCQUFlLFVBQVMsb0JBQVc7Z0JBQUUsTUFBTSxJQUFJLEVBQUMsU0FBUSxXQUFTLGNBQVksT0FBTyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssTUFBSyxJQUFHLEVBQUUsVUFBYTtBQUE3SyxlQUFOLENBQXFMLEVBQUUsU0FBUyxrQkFBZ0IsRUFBRSxTQUFTLEVBQUMsUUFBTyxTQUFRLFNBQVEsS0FBRyxLQUFHLEVBQUUsU0FBUyxFQUFDLEtBQUksRUFBRSxhQUFZLFNBQVEsR0FBRSxRQUFPLE1BQU87QUFBdG5CO1lBQXVuQixJQUFFLFdBQVMsR0FBRztjQUFJLElBQUUsRUFBRTtjQUFRLElBQUUsRUFBRSxhQUFhLElBQUcsRUFBRSxJQUFJLFlBQVcsV0FBVSxFQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUUsU0FBUyxTQUFTO2dCQUFJLElBQUU7Z0JBQUksSUFBRSxFQUFFLDhDQUE0QyxFQUFFLEdBQUUsRUFBRSxLQUFLLE1BQUssR0FBRyxJQUFJLFdBQVUsTUFBSSxJQUFFLFNBQVEsRUFBRSxLQUFLLGNBQWEsR0FBRyxJQUFJLFdBQVUsTUFBSSxJQUFFLFNBQU8sSUFBRyxFQUFFLFNBQVMsU0FBUSxFQUFFLFFBQVEsT0FBTyxNQUFLLGtCQUFnQixNQUFNLFlBQVc7QUFBSTtBQUF2QixrQkFBMkIsVUFBVSxHQUFHLGdCQUFjLEdBQUUsVUFBUyxHQUFHO3FCQUFLLEVBQUUsV0FBYTtBQUEvRCxjQUF6QyxLQUE2RyxLQUFLLGdCQUFnQixHQUFHLGVBQWMsVUFBUyxHQUFHO0FBQUk7QUFBeEQsY0FBN1AsRUFBdVQsRUFBRSxJQUFJLEVBQUMsU0FBUSxTQUFRLFNBQVEsTUFBSSxFQUFFLElBQUksRUFBQyxTQUFRLFNBQVEsU0FBUSxNQUFJLEVBQUUsU0FBUyxFQUFDLFNBQVEsRUFBRSxXQUFTLEVBQUMsVUFBUyxFQUFFLFlBQVcsT0FBTSxDQUFDLEdBQUUsTUFBSyxtQkFBaUIsRUFBRSxLQUFLLHNCQUFxQixFQUFFLFFBQVEsTUFBRyxVQUFTLEVBQUUsWUFBVyxPQUFNLENBQUMsR0FBRSxNQUFLLGdCQUFlLFVBQVMsb0JBQVc7OEJBQVksT0FBTyxFQUFFLFNBQU8sRUFBRSxNQUFNLEtBQUssTUFBSyxHQUFLO0FBQTNILGlCQUFOLENBQW1JLEVBQUUsU0FBUyxrQkFBZ0IsRUFBRSxTQUFTLEVBQUMsUUFBTyxLQUFJLFNBQVEsS0FBRyxNQUFJLEVBQUUsU0FBUyxLQUFLLEdBQUUsVUFBUyxLQUFJLEVBQUUsSUFBSSxFQUFDLEtBQUksRUFBRSxnQkFBYyxFQUFFLFNBQVMsRUFBQyxLQUFJLEVBQUUsV0FBVSxTQUFRLEdBQUUsUUFBTyxPQUFTO0FBQUM7QUFBaGtELFVBQWlrRCxFQUFFLFVBQVUsSUFBSSxzQkFBcUIsY0FBWSxJQUFFLHVCQUFxQixJQUFFLE9BQU0sRUFBRSxNQUFNLElBQUksY0FBYSxFQUFFLE1BQU0sSUFBSSxpQkFBZ0IsVUFBVSxHQUFHLHNCQUFxQixjQUFZLElBQUUsdUJBQXFCLElBQUUsTUFBSyxVQUFTLEdBQUc7WUFBRSxjQUFZLENBQUMsRUFBRSxNQUFNLFNBQVMsTUFBSSxFQUFFLFFBQVEsZUFBYSxNQUFLLEVBQUUsRUFBRSxRQUFPLEVBQW1CO0FBQXhMLGNBQTRMLE1BQU0sR0FBRyxhQUFZLFlBQVc7WUFBRSxNQUFNLEtBQUssV0FBUyxNQUFJLEVBQUUsTUFBTSxLQUFLLFVBQWM7QUFBdkYsY0FBMkYsTUFBTSxHQUFHLGNBQWEsWUFBVztBQUFJO0FBQUUsU0FBekM7QUFBMkMsT0FBdmhFLENBQXZCO0FBQWpKLE9BQWdzRSxNQUFLLGdCQUFXO1FBQUUsTUFBTSxRQUFxQjtBQUE3dUUsT0FBOHVFLE9BQU0saUJBQVc7UUFBRSxNQUFNLFFBQXNCO0FBQTd4RSxVQUFpeUUsR0FBRyxRQUFNLFVBQVMsR0FBRztXQUFPLEVBQUUsS0FBRyxFQUFFLEdBQUcsTUFBTSxNQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssV0FBVSxNQUFJLG9CQUFpQiwrREFBRyxJQUFFLEtBQUssRUFBRSxNQUFNLFlBQVUsSUFBRSxxQ0FBbUMsRUFBRSxLQUFLLE1BQU0sTUFBZ0I7QUFBQyxHQUE1TTtBQUR3NTVCLEVBQzNzNUIsbUJBQWlCLEdBQUc7SUFBRSxHQUFHLGNBQVksWUFBVztnQkFBWSxLQUFLLFlBQVc7ZUFBUyxJQUFJO1lBQUUsQ0FBQyxNQUFNLElBQUUsRUFBRSxPQUFPO0FBQWYsWUFBd0MsS0FBRyxPQUFPLFlBQVcsT0FBTyxhQUFZLEVBQUUsS0FBSztZQUFVLElBQUUsRUFBRSxLQUFLLFlBQVksU0FBUyxRQUFPLENBQUMsSUFBRyxFQUFFLHdCQUF3QixTQUFTLFFBQU8sQ0FBQyxJQUFHLEVBQUUsd0JBQXdCLFNBQVMsUUFBTyxDQUFDLE1BQUssd0JBQXdCLFNBQVMsRUFBQyxTQUFRLE9BQUksVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZUFBYyxVQUFTLG9CQUFXO2dCQUFFLENBQUMsR0FBRSxFQUFFLE1BQWU7QUFBcEYsYUFBL0MsQ0FBbEgsSUFBMFAsU0FBUyxFQUFDLE9BQU0sR0FBRSxRQUFPLEdBQUUsTUFBSyxHQUFFLEtBQUksT0FBSSxVQUFTLEdBQUUsT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLFVBQVMsb0JBQVc7Y0FBRSxJQUFJLEVBQUMsUUFBTyxJQUFHLE9BQU0sSUFBRyxVQUFTLElBQUcsS0FBSSxJQUFHLE1BQUssT0FBSyxFQUFFLFdBQVcsVUFBUyxFQUFFLEtBQUssU0FBUSxJQUFHLEVBQUUsWUFBWSxXQUFVLElBQUUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxJQUFJLFlBQWU7QUFBbE4sYUFBM0MsS0FBa1Esd0JBQXdCLFNBQVMsRUFBQyxTQUFRLE9BQUksVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZUFBYyxVQUFTLG9CQUFXO2NBQUUsTUFBZTtBQUFHLFdBQWxGLEVBQS9DO1dBQW9JLENBQUMsRUFBRSxNQUFNLFNBQVMsZ0JBQWdCO1VBQUUsTUFBTSxTQUFTLG1CQUFtQjtBQUFKLFlBQU07WUFBRSxJQUFFLENBQUM7WUFBRSxJQUFFLENBQUM7WUFBRSxJQUFFO1lBQUksSUFBRTtZQUFJLElBQUUsRUFBRTtZQUFNLElBQUUsRUFBRSxlQUFlLFNBQVM7WUFBd0IsSUFBRSxFQUFFLEtBQUssV0FBVyxLQUFLLE1BQUssR0FBRyxTQUFRLFlBQVc7Y0FBSSxJQUFFLEVBQUUsT0FBTztjQUF5QixJQUFFLE9BQU87Y0FBVyxJQUFFLE9BQU87Y0FBWSxJQUFFLEVBQUU7Y0FBUSxJQUFFLEVBQUUsU0FBUyxJQUFHLE1BQUksQ0FBQyxHQUFFLE9BQU8sS0FBSSxDQUFDLEVBQUUsSUFBRyxLQUFHLE1BQUksQ0FBQyxHQUFFLE9BQU8sS0FBSSxDQUFDLEVBQUUsSUFBRSxDQUFDLEdBQUUsRUFBRSxTQUFTLFdBQVUsSUFBRSxDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUMsT0FBTSxFQUFFLEdBQUcsd0JBQXdCLE9BQU0sUUFBTyxFQUFFLEdBQUcsd0JBQXdCLFFBQU8sVUFBUyxZQUFXLEtBQUksR0FBRSxNQUFLLE1BQUksSUFBRSxLQUFLLEdBQUUsSUFBRSxFQUFFLEdBQUcsV0FBVyxPQUFLLFNBQU8sS0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFlBQVk7Z0JBQUksSUFBRSxFQUFFLEdBQUcsY0FBWSxFQUFFLElBQUksZ0JBQWMsRUFBRSxJQUFJLFlBQVcsWUFBVyxJQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsRUFBRSxJQUFJLEtBQUksSUFBRSxFQUFhO2FBQUUsSUFBSSxFQUFDLFVBQVMsWUFBVyxXQUFVLEtBQUksZUFBYyw4QkFBNkIsS0FBSyxTQUFRLEdBQUcsS0FBSyxVQUFTLE9BQU8sTUFBSSx3Q0FBd0MsSUFBSSxFQUFDLFNBQVEsS0FBSSxNQUFNLFlBQVc7a0JBQUksQ0FBQyxLQUFPO0FBQXhGLFlBQU4sQ0FBZ0csRUFBRSxPQUFPLEdBQUcsSUFBSSxJQUFFLEVBQUUsR0FBRyx3QkFBd0IsSUFBRyxFQUFFLElBQUksRUFBQyxPQUFNLEdBQUUsUUFBTyxHQUFFLE1BQUssQ0FBQyxJQUFFLEVBQUUsTUFBSyxLQUFJLENBQUMsSUFBRSxFQUFFLFFBQU0sRUFBRSxTQUFTLEVBQUMsU0FBUSxLQUFHLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sa0JBQWdCLE9BQUssRUFBRSxLQUFLLFlBQVk7Z0JBQUksSUFBRSxFQUFFLDJDQUEyQyxFQUFFLEtBQUssRUFBRSxLQUFLLGFBQVksRUFBRSxRQUFRLE9BQU8sSUFBRyxFQUFFLElBQUksRUFBQyxTQUFRLGFBQVcsRUFBRSxTQUFTLEVBQUMsU0FBUSxLQUFHLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQXVCO2VBQUksSUFBRTtjQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsSUFBRTtjQUFFLElBQUU7Y0FBRSxJQUFFLE1BQUksS0FBRyxJQUFFLElBQUUsR0FBRSxJQUFFLEtBQUcsR0FBRSxJQUFFLEtBQUcsSUFBRSxNQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsS0FBRyxJQUFFLEdBQUUsSUFBRSxLQUFHLE1BQUssU0FBUyxzQkFBb0IsU0FBUyxFQUFDLGFBQVksR0FBRSxPQUFNLE9BQUksVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFVBQVMsb0JBQVc7Z0JBQUUsSUFBSSxFQUFDLE1BQUssR0FBRSxLQUFJLEtBQUksU0FBUyxFQUFDLFFBQU8sR0FBRSxPQUFNLEdBQUUsTUFBSyxFQUFFLFVBQVUsZUFBYSxJQUFFLElBQUUsRUFBRSxPQUFPLHlCQUF5QixTQUFTLE9BQUssSUFBRSxHQUFFLEtBQUksRUFBRSxVQUFVLGNBQVksSUFBRSxJQUFFLEVBQUUsT0FBTyx5QkFBeUIsU0FBUyxNQUFJLElBQUUsT0FBSSxVQUFTLEdBQUUsT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLFVBQVMsb0JBQVc7c0JBQUUsQ0FBRztBQUFHLGlCQUF0RTtBQUFwUSxlQUFuQyxDQUE3QixLQUErWSxJQUFJLFFBQU8sR0FBRyxJQUFJLE9BQU0sR0FBRyxTQUFTLEVBQUMsUUFBTyxHQUFFLE9BQU0sR0FBRSxNQUFLLEVBQUUsVUFBVSxlQUFhLElBQUUsSUFBRSxFQUFFLE9BQU8seUJBQXlCLFNBQVMsT0FBSyxJQUFFLEdBQUUsS0FBSSxFQUFFLFVBQVUsY0FBWSxJQUFFLElBQUUsRUFBRSxPQUFPLHlCQUF5QixTQUFTLE1BQUksSUFBRSxPQUFJLFVBQVMsR0FBRSxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztrQkFBRSxDQUFHO0FBQUcsYUFBdEUsRUFBbE8sQ0FBamM7QUFBbG5DLFVBQVYsSUFBeTJELFFBQVEsT0FBTyxZQUFXO2VBQU87QUFBbkMsY0FBdUMsVUFBVSxNQUFNLFVBQVMsR0FBRztpQkFBSyxFQUFFLFdBQVMsTUFBSSxDQUFDLEtBQUcsS0FBTztBQUFFLFNBQS9EO0FBQWdFO0FBQUUsS0FBcjVGO0FBQW5DLE9BQTI3RixVQUFVLE1BQU0sWUFBVztNQUFFLGtCQUFnQztBQUFFLEdBQWpFO0FBQXI4RixFQUF1Z0csbUJBQWlCLEdBQUc7SUFBRSxHQUFHLFdBQVMsWUFBVztRQUFJLElBQUUsRUFBRSxRQUFRLG9CQUFvQixLQUFLLFVBQVMsR0FBRztlQUFTLEVBQUUsR0FBRztZQUFJLEVBQUUsSUFBRSxJQUFFLE1BQUksRUFBRSxXQUFTLElBQUUsRUFBRSxXQUFTLEVBQUUsU0FBUyxPQUFPLFdBQVMsRUFBRSxXQUFTLElBQUUsRUFBRSxXQUFTLFFBQVEsSUFBRSxFQUFFLFNBQVMsT0FBTztBQUF4QixZQUFnQyxJQUFFLEVBQUU7WUFBUyxJQUFFLElBQUU7WUFBRSxJQUFFLEVBQUUsU0FBUyxNQUFJO1lBQUUsSUFBRSxFQUFFLFNBQVM7WUFBSSxJQUFFLEVBQUUsUUFBUTtZQUFZLElBQUUsT0FBTztZQUFZLElBQUUsSUFBRTtZQUFFLElBQUUsQ0FBQyxJQUFFLE1BQUksSUFBRTtZQUFHLElBQUUsS0FBSyxNQUFNLElBQUUsR0FBRyxLQUFHLEVBQUUsSUFBSSxXQUFVLFVBQVMsSUFBRSxLQUFHLElBQUUsSUFBRSxLQUFHLEVBQUUsSUFBSSxhQUFZLHNCQUFvQixJQUFZO1dBQUksSUFBRSxFQUFFLFFBQVEsU0FBUyxlQUFjLFNBQVMsT0FBTyxJQUFJLFFBQU8sWUFBVztVQUFFLENBQUk7QUFBOUMsU0FBZ0QsS0FBSyxZQUFXO2FBQUssWUFBVSxFQUFFLE1BQU0sUUFBZ0I7QUFBdkcsUUFBdkIsSUFBa0ksUUFBUSxPQUFPLFlBQVc7WUFBRSxFQUFFLFFBQVEsU0FBUSxFQUFFLENBQUk7QUFBdEQsWUFBMEQsUUFBUSxPQUFPLFlBQVc7WUFBRSxFQUFFLFFBQVEsU0FBUSxFQUFFLENBQUk7QUFBRSxPQUF4RDtBQUEwRCxLQUFyb0IsQ0FBUDtBQUE2b0I7QUFBMXNCLEVBQTJzQixtQkFBaUIsR0FBRztNQUFJLE1BQUcsTUFBSyxjQUFTLEdBQUc7VUFBSSxJQUFFLEVBQUMsUUFBTyxNQUFLLFdBQVUsQ0FBQyxHQUFFLHFCQUFvQixJQUFFLElBQUcsSUFBRSxFQUFFLE9BQU8sR0FBRSxHQUFHLElBQUksSUFBRSxZQUFZLHFCQUFxQixFQUFFLG1CQUFtQixLQUFLLFVBQVMsR0FBRztZQUFJO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRSxJQUFFLElBQUU7WUFBRSxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUUsUUFBUTtZQUFRLElBQUUsRUFBRSxLQUFLO1lBQVksSUFBRSxFQUFFO1lBQVEsSUFBRTtZQUFJLElBQUUsS0FBSyxJQUFJLEdBQUUsRUFBRSxHQUFHLGVBQWEsRUFBRTtZQUFPLElBQUUsYUFBVztZQUFFLElBQUUsQ0FBQztZQUFFLElBQUU7WUFBSSxJQUFFLFdBQVMsR0FBRztpQkFBTyxLQUFLLEtBQUssSUFBRSxFQUFFLFdBQVcsT0FBSyxFQUFFLGVBQWEsRUFBZ0I7QUFBN087WUFBOE8sSUFBRSxXQUFTLEdBQUc7aUJBQU8sS0FBSyxNQUFNLEVBQUUsV0FBVyxPQUFLLEVBQWdCO0FBQWhUO1lBQWlULElBQUUsV0FBUyxHQUFHO2NBQUUsS0FBRyxLQUFHLEVBQUUsU0FBUyxFQUFDLE9BQU0sRUFBRSxNQUFJLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sa0JBQWdCLEVBQUUsU0FBUyxFQUFDLE1BQUssRUFBRSxNQUFJLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZUFBYyxPQUFNLFVBQU8sRUFBRSxTQUFTLEVBQUMsTUFBSyxFQUFFLE1BQUksRUFBQyxVQUFTLEdBQUUsT0FBTSxDQUFDLEdBQUUsUUFBTyxrQkFBZ0IsRUFBRSxTQUFTLEVBQUMsT0FBTSxFQUFFLE1BQUksRUFBQyxVQUFTLEdBQUUsT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLE9BQVk7QUFBMW1CLFVBQTJtQixFQUFFLGFBQVcsSUFBRSxFQUFFLHdCQUFzQixFQUFFLFlBQVUsQ0FBQyxJQUFHLElBQUUsRUFBRSxFQUFFLE9BQU8sWUFBVSxTQUFTLE9BQUssUUFBTyxNQUFJLEVBQUUsV0FBUyxJQUFFLEVBQUUsTUFBTSxLQUFLLG1CQUFtQixVQUFTLE1BQUksRUFBRSxXQUFTLElBQUUsRUFBRSxNQUFNLEtBQUssWUFBWSxVQUFTLEVBQUUsU0FBUyxXQUFVLElBQUUsRUFBRSxNQUFNLElBQUcsSUFBRSxNQUFJLElBQUUsSUFBRyxLQUFLLE1BQUksRUFBRSxPQUFLLElBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTSxFQUFFLFNBQVMsWUFBVyxFQUFFLEtBQUssY0FBYyxVQUFRLEVBQUUsT0FBTyxrQ0FBaUMsSUFBRSxFQUFFLEtBQUssZUFBYyxFQUFFLE9BQU8sSUFBRyxFQUFFLEdBQUcsMEJBQXdCLFlBQVc7WUFBRSxJQUFJLEVBQUMsT0FBTSxFQUFFLE9BQUssRUFBRSxJQUFJLEVBQUMsTUFBSyxFQUFPO0FBQTdELFdBQThELE1BQUssUUFBUSxJQUFJLGlCQUFlLEdBQUcsR0FBRyxpQkFBZSxHQUFFLFlBQVc7Y0FBRSxFQUFFLFNBQVEsSUFBRSxLQUFLLElBQUksR0FBRSxFQUFFLEdBQUcsZUFBYSxFQUFFLFFBQU8sSUFBRSxNQUFJLElBQUUsSUFBRyxNQUFJLEtBQUcsTUFBSSxNQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU0sRUFBRSxPQUFLLEVBQUUsSUFBSSxFQUFDLE1BQUssRUFBUTtBQUFyTCxZQUF1TCxFQUFFLGVBQWEsS0FBSyxZQUFXO2NBQUksSUFBRSxFQUFFLFlBQVksV0FBVyxLQUFLLE9BQU8sRUFBRSxTQUFTLGtCQUFpQixJQUFFLEVBQUUsSUFBTztBQUFwRyxZQUFzRyxJQUFFLEVBQUUsUUFBUSw4Q0FBNkMsRUFBRSxJQUFJLFdBQVUsT0FBTSwwQkFBMEIsV0FBVSxXQUFVLENBQUMsR0FBRSxRQUFPLENBQUMsR0FBRSxXQUFVLG1CQUFTLEdBQUc7Z0JBQUcsQ0FBQyxHQUFHO2tCQUFJLElBQUUsRUFBRSxJQUFFLEVBQUUsTUFBTSxJQUFHLElBQUUsRUFBRSxHQUFHLElBQUcsRUFBSztBQUFDO0FBQTFGLGFBQXJDLE9BQXFJLElBQUksR0FBRyxLQUFLLFlBQVc7WUFBRSxZQUFZLFdBQVcsS0FBSyxPQUFjO0FBQXJFLGNBQXlFLElBQUksY0FBYyxHQUFHLGNBQWEsS0FBSSxVQUFTLEdBQUc7Y0FBRyxFQUFFLE1BQU0sU0FBUyxTQUFTLGFBQVksT0FBTyxLQUFLLEVBQUUsaUJBQWlCLElBQUcsQ0FBQyxFQUFFLE1BQU0sS0FBSyxXQUFXO2dCQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsU0FBUSxJQUFFLEtBQUssSUFBSSxHQUFFLEVBQUUsR0FBRyxlQUFhLEVBQUUsUUFBTyxFQUFFLFlBQVksVUFBVSxJQUFJLElBQUUsRUFBRSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsWUFBWSxXQUFXLEtBQUssUUFBTyxJQUFFLEVBQUUsS0FBSyxZQUFZLEVBQUUsYUFBYSxTQUFTLFdBQVUsYUFBVyxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUUsUUFBTyxJQUFFLE1BQUksSUFBRSxJQUFHLEVBQUUsWUFBVSxFQUFFLFVBQVEsRUFBRSxTQUFTLE9BQU0sTUFBSSxLQUFLLE1BQUksTUFBSSxFQUFFLFFBQU8sRUFBRSxTQUFTLFdBQVUsY0FBWSxPQUFPLEVBQUUsVUFBUSxFQUFFLE9BQU8sS0FBSyxNQUFLLEtBQUksS0FBSyxNQUFJLEtBQUcsRUFBRSxHQUFHLE9BQUssRUFBRSxRQUFPLEVBQUUsWUFBWSxhQUFZLGVBQWEsWUFBVztrQkFBRSxDQUFHO0FBQTNCLGVBQTRCLEVBQWpTLEVBQW9TLEVBQUUsYUFBWSxFQUFtQjtBQUFDO0FBQUUsU0FBNW9CO0FBQThvQixPQUEvekUsQ0FBUDtBQUEzSSxPQUFrOUUsWUFBVyxvQkFBUyxHQUFHO1dBQUssS0FBSyxjQUFZLElBQUUsTUFBTSxRQUFpQjtBQUF4aEYsVUFBNGhGLEdBQUcsT0FBSyxVQUFTLEdBQUc7V0FBTyxFQUFFLEtBQUcsRUFBRSxHQUFHLE1BQU0sTUFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVUsTUFBSSxvQkFBaUIsK0RBQUcsSUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFVLElBQUUsb0NBQWtDLEVBQUUsS0FBSyxNQUFNLE1BQWdCO0FBQXpNLE9BQTRNLFVBQVUsTUFBTSxZQUFXO01BQUUsV0FBa0I7QUFBRSxHQUFuRDtBQUF0dkYsRUFBMHlGLG1CQUFpQixHQUFHO0lBQUUsR0FBRyxVQUFRLFVBQVMsR0FBRztRQUFJLElBQUU7UUFBRSxJQUFFLEVBQUMsT0FBTSxLQUFJLFNBQVEsSUFBRyxVQUFTLFVBQVMsTUFBSyxDQUFDLHdCQUFvQixVQUFRLEtBQUssWUFBVztRQUFFLE1BQUksRUFBRSxNQUFNLEtBQUssb0JBQW9CLFVBQVMsRUFBRSxNQUFNLElBQTZDO0FBQTFILFFBQTRILENBQUMsTUFBSSxJQUFFLEVBQUUsT0FBTyxHQUFFLFNBQVEsS0FBSyxZQUFXO1VBQUksSUFBRSxZQUFZO1VBQU8sSUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLHNCQUFvQixFQUFFLE1BQUksRUFBRSxLQUFLLG9CQUFvQixVQUFTLEVBQUUsS0FBSyxtQkFBa0IsT0FBTztBQUFKLFVBQU07VUFBRTtVQUFFO1VBQUU7VUFBRTtVQUFFLElBQUUsYUFBVztZQUFFLEVBQUUsS0FBSyxlQUFhLFdBQVMsRUFBRSxLQUFLLGVBQWEsRUFBRSxNQUFLLElBQUUsRUFBRSxLQUFLLGVBQWMsSUFBRSxLQUFLLE1BQUksS0FBRyxPQUFLLElBQUUsRUFBRSxRQUFNLEdBQUUsSUFBRSxFQUFFLEtBQUssa0JBQWlCLElBQUUsS0FBSyxNQUFJLEtBQUcsT0FBSyxJQUFFLEVBQUUsV0FBUyxHQUFFLElBQUUsRUFBRSxLQUFLLGlCQUFnQixJQUFFLEtBQUssTUFBSSxLQUFHLE9BQUssSUFBRSxFQUFFLFVBQVU7QUFBblEsUUFBb1EsUUFBUSxJQUFFLGFBQVc7WUFBSSxJQUFFLEVBQUUsd0NBQXdDLE9BQU8sSUFBRSxJQUFFLEVBQUUsaUJBQWlCLEtBQUssS0FBRyxFQUFFLGlCQUFpQixLQUFLLElBQUcsRUFBRSxPQUFPLEdBQUcsU0FBUyxFQUFFLFNBQVMsS0FBSyxNQUFLLElBQUcsSUFBRSxFQUFFLGlDQUFnQyxFQUFFLFNBQVMsSUFBSztBQUFuTyxRQUFvTyxJQUFFLEtBQUksRUFBRSxJQUFJLDZDQUE2QztBQUFKLFVBQU0sSUFBRSxDQUFDLElBQUksS0FBSSxzQkFBcUIsMkJBQVMsR0FBRztjQUFJLElBQUUsYUFBVztpQkFBSSxJQUFFLENBQUMsR0FBRSxFQUFFLFNBQVMsU0FBUSxFQUFFLFNBQVMsU0FBUSxFQUFFLElBQUksRUFBQyxZQUFXLFdBQVUsTUFBSyxPQUFNLEtBQUksYUFBWTtBQUFKLGdCQUFNO2dCQUFFO2dCQUFFLElBQUUsRUFBRTtnQkFBYSxJQUFFLEVBQUU7Z0JBQWMsSUFBRSxFQUFFO2dCQUFjLElBQUUsRUFBRTtnQkFBYSxJQUFFO2dCQUFNLElBQUU7Z0JBQU0sSUFBRSxFQUFFLEdBQUc7Z0JBQVksSUFBRSxFQUFFLEdBQUc7Z0JBQWEsSUFBRTtnQkFBRSxJQUFFO2dCQUFFLElBQUUsRUFBRSxVQUFRLEtBQUcsSUFBRSxFQUFFLFNBQVMsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVMsT0FBSyxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUUsU0FBUSxFQUFFLElBQUksRUFBQyxRQUFPLEdBQUUsTUFBSyxHQUFFLGNBQWEsaUJBQWdCLGlCQUFnQixZQUFXLFdBQVUsR0FBRSxZQUFXLElBQUUsSUFBRSxJQUFFLFFBQUssV0FBUyxLQUFHLElBQUUsRUFBRSxTQUFTLE1BQUksSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUyxPQUFLLElBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFFLFNBQVEsRUFBRSxJQUFJLEVBQUMsS0FBSSxRQUFPLE9BQU0sR0FBRSxPQUFNLFFBQU8sUUFBTyxRQUFPLGNBQWEsaUJBQWdCLGlCQUFnQixXQUFVLFdBQVUsSUFBRSxHQUFFLFlBQVcsUUFBSyxZQUFVLEtBQUcsSUFBRSxFQUFFLFNBQVMsTUFBSSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTLE9BQUssSUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUUsU0FBUSxFQUFFLElBQUksRUFBQyxLQUFJLFFBQU8sTUFBSyxHQUFFLE9BQU0sUUFBTyxRQUFPLFFBQU8sY0FBYSxpQkFBZ0IsaUJBQWdCLFVBQVMsV0FBVSxJQUFFLEdBQUUsWUFBVyxhQUFVLElBQUUsRUFBRSxTQUFTLE1BQUksRUFBRSxnQkFBYyxHQUFFLElBQUUsRUFBRSxTQUFTLE9BQUssSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFFLFNBQVEsRUFBRSxJQUFJLEVBQUMsS0FBSSxHQUFFLE1BQUssR0FBRSxZQUFXLElBQUUsSUFBRSxJQUFFLE9BQUssRUFBRSxJQUFJLEVBQUMsS0FBSSxFQUFFLEdBQUUsTUFBSyxFQUFFLE1BQUksSUFBRSxLQUFLLFFBQU0sSUFBRSxTQUFTLElBQUcsSUFBRSxLQUFLLFFBQU0sSUFBRSxTQUFTLElBQUcsSUFBRSxLQUFLLElBQUksR0FBRSxJQUFHLEVBQUUsU0FBUyxFQUFDLFlBQVcsR0FBRSxZQUFXLEtBQUcsRUFBQyxVQUFTLEtBQUksT0FBTSxDQUFDLEtBQUksU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLElBQUcsT0FBTSxDQUFDLE1BQUksRUFBRSxJQUFJLEVBQUMsWUFBVyxhQUFZLFNBQVMsRUFBQyxTQUFRLEtBQUcsRUFBQyxVQUFTLElBQUcsT0FBTSxHQUFFLE9BQU0sQ0FBQyxLQUFJLFNBQVMsRUFBQyxRQUFPLEdBQUUsUUFBTyxLQUFHLEVBQUMsVUFBUyxLQUFJLE9BQU0sR0FBRSxPQUFNLENBQUMsR0FBRSxRQUF5QjtBQUFqNEMsWUFBazRDLElBQUUsV0FBVyxHQUFLO0FBQXQ3QyxXQUF1N0Msc0JBQXFCLDZCQUFXO2NBQUUsQ0FBQyxHQUFFLGFBQWEsZUFBYyxZQUFXO2tCQUFJLENBQUMsTUFBSSxFQUFFLFNBQVMsRUFBQyxTQUFRLEdBQUUsWUFBVyxHQUFFLFlBQVcsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsUUFBTSxTQUFTLEVBQUMsU0FBUSxHQUFFLFFBQU8sR0FBRSxRQUFPLE9BQUksVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFVBQVMsb0JBQVc7a0JBQUUsSUFBSSxFQUFDLFlBQVcsYUFBVyxFQUFFLElBQUksRUFBQyxZQUFXLGFBQVcsSUFBRSxDQUFHO0FBQUksZUFBOUcsRUFBekM7QUFBekcsYUFBc1E7QUFBRyxXQUExdkQ7QUFBNnZELEtBQWw4RSxDQUEvSixDQUFOO0FBQXBGLFFBQWdzRixJQUFFLFdBQVMsSUFBRSxHQUFFLEdBQUUsR0FBRztRQUFJLElBQUU7UUFBRSxJQUFFLEVBQUUsT0FBTyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxPQUFPLGVBQWEsS0FBRyxJQUFFLElBQUUsT0FBTyxhQUFZLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLE9BQU8sY0FBWSxFQUFFLFFBQVEsY0FBWSxLQUFHLElBQUUsSUFBRSxPQUFPLGNBQWEsRUFBQyxHQUFFLEdBQUUsR0FBSztBQUEvTCxNQUFrTSxVQUFVLE1BQU0sWUFBVztNQUFFLGVBQXlCO0FBQUUsR0FBMUQ7QUFBeDRGLEVBQW04RixtQkFBaUIsR0FBRztBQUFhOztXQUFTLEVBQUUsR0FBRztXQUFPLFNBQU8sS0FBRyxNQUFJLEVBQVM7WUFBUyxFQUFFLEdBQUc7V0FBTyxFQUFFLEtBQUcsSUFBRSxNQUFJLEVBQUUsWUFBVSxFQUFjO1lBQVMsRUFBRSxHQUFHO1FBQUk7UUFBRTtRQUFFLElBQUUsRUFBQyxLQUFJLEdBQUUsTUFBSztRQUFHLElBQUUsS0FBRyxFQUFFLGNBQWMsT0FBTyxJQUFFLEVBQUUsaUJBQWdCLGVBQWEsT0FBTyxFQUFFLDBCQUF3QixJQUFFLEVBQUUsMEJBQXlCLElBQUUsRUFBRSxJQUFHLEVBQUMsS0FBSSxFQUFFLE1BQUksRUFBRSxjQUFZLEVBQUUsV0FBVSxNQUFLLEVBQUUsT0FBSyxFQUFFLGNBQVksRUFBYztZQUFTLEVBQUUsR0FBRztRQUFJLElBQUUsR0FBRyxLQUFJLElBQUksS0FBSyxHQUFFO1FBQUUsZUFBZSxPQUFLLEtBQUcsSUFBRSxNQUFJLEVBQUUsS0FBRztBQUFLLFlBQVM7WUFBUyxFQUFFLEdBQUc7UUFBRyxFQUFFLFdBQVcsT0FBSyxDQUFDLEdBQUUsT0FBTyxLQUFLLEtBQUksSUFBSSxJQUFFLE1BQUssSUFBRSxFQUFFLFVBQVEsRUFBRSxZQUFXLFNBQU8sRUFBRSxnQkFBZ0I7VUFBRyxFQUFFLGFBQWEsY0FBWSxFQUFFLFVBQVUsUUFBUSxvQkFBa0IsQ0FBQyxJQUFJO1lBQUUsRUFBUTtXQUFHLEVBQUUsVUFBVSxTQUFTLGlCQUFpQjtZQUFFLEVBQVE7V0FBRSxFQUFnQjtZQUFTO1lBQVMsRUFBRSxHQUFHO1FBQUksSUFBRSxFQUFFLEdBQUcsU0FBTyxNQUFJLEVBQUUsS0FBSyxHQUFFLElBQUcsa0JBQWlCLE1BQUksRUFBRSxpQkFBaUIsWUFBVyxFQUFFLE1BQUssQ0FBQyxJQUFHLEVBQUUsaUJBQWlCLGVBQWMsRUFBRSxNQUFLLENBQUMsS0FBSSxFQUFFLGlCQUFpQixXQUFVLEVBQUUsTUFBSyxDQUFDLElBQUcsRUFBRSxpQkFBaUIsY0FBYSxFQUFFLE1BQUssQ0FBSztPQUFJLElBQUUsS0FBRztNQUFHLElBQUUsU0FBUyxpQkFBaUIsS0FBSztNQUFVLE1BQUcsVUFBUyxLQUFJLE1BQUssY0FBUyxHQUFFLEdBQUc7VUFBRyxNQUFJLEVBQUUsUUFBTyxPQUFNLENBQUMsTUFBTSxJQUFFLEtBQUc7QUFBVCxVQUFjLElBQUUsU0FBUyxjQUFjLE9BQU8sRUFBRSxZQUFVLGdCQUFlLEVBQUUsWUFBWSxPQUFPLElBQUUsRUFBRTtBQUFSLFVBQVcsSUFBRSxFQUFFLFFBQU0sRUFBRTtVQUFJLElBQUUsRUFBRSxRQUFNLEVBQUU7VUFBSyxJQUFFLFdBQVMsRUFBRSxjQUFZLE1BQUksS0FBRyxJQUFJLGFBQVksTUFBSSxJQUFFLEVBQUUsUUFBUSxHQUFHLFFBQU0sRUFBRSxLQUFJLElBQUUsRUFBRSxRQUFRLEdBQUcsUUFBTSxFQUFFLE9BQU0sRUFBRSxhQUFhLGFBQVksS0FBSyxRQUFPLEVBQUUsYUFBYSxjQUFhLElBQUcsRUFBRSxhQUFhLFVBQVMsSUFBRyxFQUFFLGFBQWEsVUFBUyxHQUFHLElBQUksSUFBRSxFQUFDLEtBQUksSUFBRSxNQUFLLE1BQUssSUFBRSxPQUFNLEVBQUUsWUFBVSxFQUFFLFlBQVUsdUJBQXNCLEVBQUUsYUFBYSxTQUFRLEVBQUUsS0FBSSxFQUFFLFlBQVUsRUFBRSxVQUFVLFFBQVEsc0JBQXFCLEtBQUksRUFBRSx1QkFBcUIsR0FBRSxFQUFFLG9CQUFrQixHQUFFLEVBQUUsbUJBQWlCLEdBQUUsRUFBRSxrQkFBZ0IsR0FBRSxFQUFFLFlBQVUsR0FBRSxFQUFFLFVBQVEsS0FBSSxFQUFFLGlDQUErQixFQUFFLFdBQVMsTUFBSyxFQUFFLDhCQUE0QixFQUFFLFdBQVMsTUFBSyxFQUFFLDRCQUEwQixFQUFFLFdBQVMsTUFBSyxFQUFFLHlCQUF1QixFQUFFLFdBQVMsTUFBSyxFQUFFLHdDQUFzQyw0Q0FBMkMsRUFBRSxxQ0FBbUMsNENBQTJDLEVBQUUsbUNBQWlDLDRDQUEyQyxFQUFFLGdDQUE4Qiw0Q0FBMkMsRUFBRSxhQUFhLFNBQVEsRUFBTTtBQUE1c0MsT0FBNnNDLE1BQUssY0FBUyxHQUFHO1FBQUUsUUFBUSxPQUFPLElBQUU7QUFBTixVQUFXLEtBQUcsTUFBSSxFQUFFLGFBQVk7VUFBTSxJQUFFLEVBQUUsdUJBQXVCLGdCQUFnQixJQUFHLEVBQUUsRUFBRSxTQUFPLElBQUcsT0FBTSxDQUFDLEVBQUUsSUFBRSxFQUFFLEVBQUUsU0FBTyxPQUFPLElBQUUsRUFBRSxhQUFhO0FBQXJCLFVBQStCLElBQUUsRUFBRSxhQUFhO1VBQVUsSUFBRSxFQUFFLGFBQWE7VUFBYyxJQUFFLEtBQUssUUFBTSxPQUFPLEVBQUUsYUFBYTtVQUFjLElBQUUsTUFBSSxNQUFJLE1BQUksSUFBRSxlQUFjLFlBQVc7WUFBSSxJQUFFLEVBQUMsS0FBSSxJQUFFLE1BQUssTUFBSyxJQUFFLE1BQUssU0FBUSxLQUFJLCtCQUE4QixFQUFFLFdBQVMsTUFBSyw0QkFBMkIsRUFBRSxXQUFTLE1BQUssMEJBQXlCLEVBQUUsV0FBUyxNQUFLLHVCQUFzQixFQUFFLFdBQVMsTUFBSyxxQkFBb0IsR0FBRSxrQkFBaUIsR0FBRSxpQkFBZ0IsR0FBRSxnQkFBZSxHQUFFLFdBQVUsTUFBSyxhQUFhLFNBQVEsRUFBRSxnQkFBZSxZQUFXO2NBQUk7Y0FBRSxZQUFlO0FBQXJCLFlBQXFCLE9BQU0sR0FBRzttQkFBTSxDQUFHO0FBQUM7QUFBOUQsV0FBK0QsRUFBWSxTQUF4RztBQUFqVSxTQUE2YSxFQUF4YjtBQUF4L0MsT0FBaTdELFdBQVUsbUJBQVMsR0FBRztXQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUs7WUFBSSxJQUFFLEVBQUUsR0FBRyxJQUFHLFlBQVUsRUFBRSxRQUFRLGVBQWU7Y0FBSSxJQUFFLEVBQUUsV0FBVyxJQUFHLFFBQU0sRUFBRSxRQUFRLGlCQUFlLEVBQUUsVUFBVSxRQUFRLG9CQUFrQixDQUFDLEdBQUUsU0FBUyxJQUFJLElBQUUsU0FBUyxjQUFjLEtBQUssRUFBRSxZQUFVLEVBQUUsWUFBVSx1QkFBdUIsSUFBSSxJQUFFLEVBQUUsYUFBYSxTQUFTLE1BQUksSUFBRSxLQUFJLEVBQUUsYUFBYSxTQUFRLElBQUcsRUFBRSxZQUFVLHNCQUFxQixFQUFFLGdCQUFnQixVQUFTLEVBQUUsYUFBYSxHQUFFLElBQUcsRUFBRSxZQUFlO0FBQUM7QUFBQztBQUFqM0U7TUFBbTNFLE1BQUcsU0FBUSxHQUFFLFlBQVcsb0JBQVMsR0FBRztVQUFJLElBQUUsQ0FBQyxFQUFFLE9BQU0saUJBQWUsRUFBRSxPQUFLLEVBQUUsV0FBUyxtQkFBZSxFQUFFLFFBQU0sa0JBQWdCLEVBQUUsa0JBQWdCLFlBQVc7VUFBRSxVQUFRLE1BQUksRUFBRSxXQUFZO0FBQWxELFNBQW1ELElBQS9GLEdBQW9HLGdCQUFjLEVBQUUsUUFBTSxFQUFFLFVBQVEsTUFBSSxJQUFFLENBQUMsSUFBSztBQUFwTyxPQUFxTyxTQUFRLGlCQUFTLEdBQUc7UUFBRSxXQUFjO0FBQXpRLFVBQTZRLGdCQUFjLFVBQVMsR0FBRztRQUFFLEtBQUcsSUFBRyxjQUFhLE1BQUksRUFBRSxXQUFTLEVBQUUsV0FBVSxFQUFFLFVBQVUsRUFBRSxtQkFBa0Isa0JBQWlCLEtBQUcsU0FBUyxLQUFLLGlCQUFpQixjQUFhLEdBQUUsQ0FBQyxJQUFHLFNBQVMsS0FBSyxpQkFBaUIsYUFBWSxHQUFFLENBQUk7QUFBbk8sS0FBb08sRUFBRSxTQUFPLFVBQVMsR0FBRztnQkFBVSxFQUFFLFFBQVEsa0JBQWdCLEVBQUUsVUFBVSxDQUFDLEtBQUksSUFBRSxFQUFFLGdCQUFlLGtCQUFpQixLQUFHLEVBQUUsaUJBQWlCLGNBQWEsR0FBRSxDQUFDLElBQUcsRUFBRSxpQkFBaUIsYUFBWSxHQUFFLENBQUk7QUFBaGEsS0FBaWEsRUFBRSxRQUFNLFlBQVcsaUJBQWlCLG9CQUFtQixZQUFXO01BQWtCO0FBQTFFLEtBQTJFLENBQUk7QUFBbm9JLEVBQW9vSSxTQUFRLFlBQVksUUFBTSxVQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUc7V0FBUyxFQUFFLEdBQUc7UUFBSSxJQUFFLFNBQVMsY0FBYyxPQUFPLElBQUcsRUFBRSxVQUFVLElBQUksVUFBUyxHQUFFLEtBQUksSUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFLLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUUsS0FBSTtRQUFFLFVBQVUsSUFBSSxFQUFFO0FBQUksTUFBQyxvQkFBaUIsa0ZBQVksYUFBYSxjQUFZLEtBQUcsb0JBQWlCLCtEQUFHLFNBQU8sS0FBRyxNQUFJLEVBQUUsWUFBVSxZQUFVLE9BQU8sRUFBRSxZQUFVLEVBQUUsWUFBWSxLQUFHLGFBQWEsU0FBTyxFQUFFLFlBQVksRUFBRSxNQUFJLEVBQUUsWUFBVSxFQUFFLElBQUksSUFBRSxJQUFJLE9BQU8sR0FBRSxFQUFDLGlCQUFnQixDQUFDLGNBQWEsR0FBRyxPQUFNLFVBQVMsR0FBRztVQUFJLElBQUUsRUFBRTtVQUFPLElBQUUsR0FBRyxFQUFFLFVBQVUsU0FBUyxjQUFZLEVBQUUsVUFBVSxJQUFJLFdBQVcsSUFBSSxJQUFFLElBQUUsS0FBSyxJQUFJLElBQUUsR0FBRyxJQUFFLE1BQUksSUFBRSxJQUFHLElBQUksR0FBRSxFQUFDLE1BQUssR0FBRSxTQUFRLEtBQUcsRUFBQyxVQUFTLElBQUcsT0FBTSxDQUFDLEdBQUUsUUFBdUI7QUFBOU0sVUFBa04sR0FBRyxVQUFTLFVBQVMsR0FBRztVQUFJLElBQUUsRUFBRTtVQUFPLElBQUUsUUFBUSxJQUFJLEtBQUcsUUFBTSxHQUFFLEVBQUMsV0FBVSxhQUFVLFVBQVMsS0FBSSxRQUFPLGVBQWMsT0FBTSxDQUFDLEdBQUUsVUFBUyxvQkFBVzt3QkFBWSxPQUFPLEtBQUcsS0FBSSxFQUFFLFdBQVcsWUFBZTtBQUF0SCxXQUExQixDQUFkLElBQWtLLEVBQUUsVUFBVSxPQUFPLFlBQVcsSUFBSSxHQUFFLEVBQUMsTUFBSyxHQUFFLFNBQVEsS0FBRyxFQUFDLFVBQVMsS0FBSSxRQUFPLGVBQWMsT0FBTSxDQUFNO0FBQXRULFFBQTBULENBQWpoQjtPQUFtaEIsS0FBRyxHQUFHLElBQUksSUFBRSxTQUFTLGVBQWUsbUJBQW1CLFNBQU8sTUFBSSxJQUFFLFNBQVMsY0FBYyxRQUFPLEVBQUUsS0FBRyxtQkFBa0IsU0FBUyxLQUFLLFlBQVksSUFBSSxJQUFJLElBQUUsRUFBRSxHQUFHLEtBQUcsRUFBRSxZQUFZLElBQUcsRUFBRSxNQUFNLFVBQVEsR0FBRSxJQUFJLEdBQUUsRUFBQyxZQUFXLFNBQVEsU0FBUSxLQUFHLEVBQUMsVUFBUyxLQUFJLFFBQU8sZ0JBQWUsT0FBTSxDQUFDLFNBQVE7QUFBSixNQUFNLElBQUUsVUFBUSxNQUFJLGdCQUFjLFlBQVc7YUFBTyxFQUFFLGNBQVksT0FBTyxjQUFjLElBQUcsRUFBRSxVQUFVLFNBQVMsZUFBYSxLQUFHLFVBQU8sVUFBUSxHQUFFLEVBQUMsU0FBUSxHQUFFLFdBQVUsYUFBVSxVQUFTLEtBQUksUUFBTyxlQUFjLE9BQU0sQ0FBQyxHQUFFLFVBQVMsb0JBQVc7c0JBQVksT0FBTyxLQUFHLEtBQUksS0FBSyxHQUFHLFdBQVcsWUFBWSxLQUFTO0FBQWxJLFNBQXBDLEdBQXlLLE9BQU8sY0FBa0IsRUFBek07QUFBN0csS0FBNFQsR0FBeFU7QUFEcTFRLGFBQ25nUSxHQUFHO01BQUksTUFBRyxNQUFLLGNBQVMsR0FBRztVQUFJLElBQUUsRUFBQyxXQUFVLEtBQUksTUFBSyxRQUFPLGNBQWEsQ0FBQyxHQUFFLFdBQVUsQ0FBQyxRQUFLLEVBQUUsT0FBTyxHQUFFLE1BQUssTUFBTSxLQUFLLFlBQVc7WUFBSSxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUUsS0FBSztZQUFrQixJQUFFLEVBQUUsTUFBSSxHQUFHLE9BQUssRUFBRSxhQUFXLEVBQUUsSUFBSSxTQUFRLEVBQUUsV0FBVyxJQUFJLElBQUUsRUFBRSxnQ0FBOEIsSUFBRSxRQUFRLGFBQVcsRUFBRSxVQUFRLEVBQUUsVUFBUyxJQUFFLEVBQUUsbUNBQW1DLEtBQUssZ0JBQWUsSUFBRyxFQUFFLFFBQVEsT0FBTyxNQUFJLElBQUUsS0FBSSxVQUFRLEVBQUUsUUFBTSxFQUFFLElBQUksYUFBWSxzQkFBcUIsRUFBRSxJQUFJLEVBQUMsTUFBSyxTQUFNLEVBQUUsU0FBUyxpQkFBaUIsSUFBSSxhQUFZLHFCQUFvQixFQUFFLElBQUksRUFBQyxPQUFNLE9BQUssRUFBRSxTQUFTLFlBQVUsT0FBTyxhQUFXLE9BQUssRUFBRSxJQUFJLGFBQVksa0JBQWlCLEVBQUUsU0FBUyxjQUFZLFFBQVEsT0FBTyxZQUFXO2lCQUFPLGFBQVcsTUFBSSxNQUFJLEVBQUUsb0JBQW9CLFVBQVEsSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLElBQUksYUFBWSxvQkFBa0IsTUFBSSxDQUFDLE1BQUksV0FBUyxFQUFFLE9BQUssRUFBRSxJQUFJLGFBQVksdUJBQXFCLEVBQUUsSUFBSSxhQUFpQztBQUF2TyxVQUExWCxFQUFtbUIsRUFBRSxpQkFBZSxDQUFDLE9BQUssR0FBRyxtQkFBa0IsOEJBQTZCLFlBQVc7QUFBSTtBQUFuRSxlQUF5RSxJQUFFLFdBQVMsR0FBRztjQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxFQUFFLFFBQVEsSUFBSSxFQUFDLFVBQVMsSUFBRyxPQUFNLFNBQU8sb0JBQW9CLFNBQVMsRUFBQyxTQUFRLE9BQUksVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZUFBYyxVQUFTLG9CQUFXO2dCQUFFLE1BQWU7QUFBakYsZUFBM0MsY0FBd0ksRUFBRSxRQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU0sSUFBRyxPQUFNLElBQUcsTUFBSyxVQUFRLFNBQVMsRUFBQyxZQUFXLGFBQVUsVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZ0JBQWUsVUFBUyxvQkFBVztvQkFBSSxDQUFDLE1BQUksRUFBRSxXQUFXLFVBQVMsRUFBRSxJQUFJLFNBQVEsRUFBYztBQUE1SCxlQUFoQyxDQUFyRCxLQUFzTixFQUFFLElBQUksRUFBQyxPQUFNLElBQUcsT0FBTSxLQUFJLE1BQUssU0FBTyxTQUFTLEVBQUMsWUFBVyxZQUFTLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGdCQUFlLFVBQVMsb0JBQVc7b0JBQUksQ0FBQyxNQUFJLEVBQUUsV0FBVyxVQUFTLEVBQUUsSUFBSSxTQUFRLEVBQWM7QUFBSSxhQUFoSSxFQUEvQjtBQUEzYjtBQUFBLFlBQTJsQixJQUFFLENBQUM7WUFBRSxJQUFFLENBQUMsSUFBSSxnQkFBYyxHQUFHLFNBQVEsWUFBVztlQUFPO0FBQS9CLGNBQW1DLE9BQU8sRUFBQyxpQkFBZ0IsQ0FBQyxLQUFJLEtBQUssT0FBTSxVQUFTLEdBQUc7Y0FBRyxXQUFTLEVBQUUsUUFBUSxhQUFhO2dCQUFJLEtBQUcsRUFBRSxRQUFRLFdBQVUsRUFBRSxRQUFRLE9BQU87Z0JBQUcsS0FBRyxFQUFFLFFBQVEsT0FBTyxHQUFFLEVBQUUsUUFBUSxXQUFVLEVBQUU7Z0JBQVMsSUFBRSxFQUFFO2dCQUFvQixJQUFFLEVBQUUsYUFBYSxNQUFLLElBQUksWUFBVyxXQUFVLEVBQUUsTUFBTSxVQUFPLEVBQUUsZUFBVyxFQUFFLHVDQUFzQyxJQUFJLFdBQVUsR0FBRyxNQUFNLFlBQVc7QUFBSTtBQUF4QyxjQUF4QyxFQUFrRixFQUFFLFFBQVEsT0FBTyxFQUFsSCxDQUF0QyxFQUE0SixXQUFTLEVBQUUsU0FBTyxJQUFFLEVBQUUsWUFBVSxJQUFFLEVBQUUsWUFBVSxJQUFFLE1BQUksSUFBRSxLQUFJLFdBQVMsRUFBRSxNQUFLLElBQUUsRUFBRSxZQUFVLElBQUUsSUFBRSxDQUFDLElBQUUsS0FBRyxFQUFFLFlBQVUsTUFBSSxJQUFFLENBQUMsSUFBRyxFQUFFLElBQUksYUFBWSxpQkFBZSxJQUFFLEVBQUUsYUFBVyxZQUFZO2tCQUFFLE9BQU8sYUFBVyxFQUFFLFlBQVUsSUFBRSxJQUFFLENBQUMsSUFBRSxLQUFHLE9BQU8sYUFBVyxFQUFFLFlBQVUsTUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLElBQUUsSUFBRSxFQUFFLFlBQVUsRUFBRSxJQUFFLE1BQUksSUFBRSxJQUFHLEVBQUUsSUFBSSxhQUFZLGdCQUFjLElBQVM7aUJBQUksRUFBRSxXQUFTLEVBQUUsUUFBTSxJQUFFLElBQUUsRUFBRSxXQUFVLEVBQUUsU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsSUFBRyxPQUFNLENBQUMsR0FBRSxRQUFPLHFCQUFrQixJQUFFLEtBQUssSUFBSSxDQUFDLElBQUUsT0FBTyxjQUFZLEVBQUUsWUFBVyxFQUFFLFNBQVMsRUFBQyxTQUFRLEtBQUcsRUFBQyxVQUFTLElBQUcsT0FBTSxDQUFDLEdBQUUsUUFBd0I7QUFBQztBQUF0N0IsV0FBdzdCLEtBQUssVUFBUyxVQUFTLEdBQUc7Y0FBRyxXQUFTLEVBQUUsUUFBUSxhQUFhO2dCQUFJLElBQUUsRUFBRTtnQkFBb0IsSUFBRSxFQUFFLFFBQVE7Z0JBQVUsSUFBRSxFQUFFLFFBQVEsT0FBTztnQkFBRSxJQUFFLElBQUUsRUFBRTtnQkFBVSxJQUFFLElBQUUsRUFBRSxZQUFVLEVBQUUsSUFBRSxNQUFJLElBQUUsSUFBRyxJQUFFLE1BQUksSUFBRSxJQUFHLElBQUUsQ0FBQyxjQUFXLEVBQUUsT0FBSyxLQUFHLEtBQUcsTUFBSSxJQUFFLENBQUMsTUFBSSxNQUFJLEtBQUcsRUFBRSxTQUFTLEVBQUMsWUFBVyxDQUFDLEdBQUUsTUFBSSxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGtCQUFnQixFQUFFLFNBQVMsRUFBQyxTQUFRLEtBQUcsRUFBQyxVQUFTLElBQUcsT0FBTSxDQUFDLEdBQUUsUUFBTyxrQkFBZ0IsRUFBRSxJQUFJLEVBQUMsT0FBTSxPQUFNLE9BQU0sR0FBRSxNQUFLLE9BQUssSUFBRSxDQUFDLE1BQUksQ0FBQyxLQUFHLElBQUUsVUFBUSxRQUFRLElBQUksRUFBQyxVQUFTLElBQUcsT0FBTSxPQUFLLEVBQUUsU0FBUyxFQUFDLFlBQVcsQ0FBQyxDQUFDLElBQUUsRUFBRSxZQUFVLElBQUcsTUFBSSxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLG9CQUFrQixTQUFTLEVBQUMsU0FBUSxPQUFJLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztrQkFBRSxNQUFlO0FBQWpGLGlCQUF2QixDQUFsSSxFQUE2TyxFQUFFLElBQUksRUFBQyxPQUFNLFFBQU8sT0FBTSxJQUFHLE1BQUssSUFBNVIsQ0FBbk8sR0FBb2dCLEtBQUcsS0FBRyxDQUFDLE1BQUksSUFBRSxNQUFJLE1BQUksS0FBRyxFQUFFLFNBQVMsRUFBQyxZQUFXLENBQUMsR0FBRSxNQUFJLEVBQUMsVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFFBQU8sa0JBQWdCLEVBQUUsU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsSUFBRyxPQUFNLENBQUMsR0FBRSxRQUFPLGtCQUFnQixFQUFFLElBQUksRUFBQyxPQUFNLE9BQU0sT0FBTSxJQUFHLE1BQUssTUFBSSxJQUFFLENBQUMsTUFBSSxDQUFDLEtBQUcsSUFBRSxDQUFDLFVBQVEsUUFBUSxJQUFJLEVBQUMsVUFBUyxJQUFHLE9BQU0sT0FBSyxFQUFFLFNBQVMsRUFBQyxZQUFXLENBQUMsRUFBRSxZQUFVLElBQUcsTUFBSSxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLG9CQUFrQixTQUFTLEVBQUMsU0FBUSxPQUFJLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztrQkFBRSxNQUFlO0FBQWpGLGlCQUF2QixDQUEvSCxFQUEwTyxFQUFFLElBQUksRUFBQyxPQUFNLFFBQU8sT0FBTSxHQUFFLE1BQVcsS0FBL1I7QUFBZ1M7QUFBaG5FLFVBQS9DLEtBQW9xRSxJQUFJLGlCQUFpQixHQUFHLGlCQUFnQixZQUFXO2NBQUcsTUFBSSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsU0FBUztnQkFBSSxJQUFFLEVBQUU7Z0JBQVEsSUFBRSxFQUFFO2dCQUFvQyxJQUFFLEVBQUUsZUFBZSxJQUFJLFlBQVcsV0FBVSxFQUFFLE1BQU0sSUFBRyxFQUFFLFFBQVEsT0FBTyxJQUFHLFdBQVMsRUFBRSxRQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU0sT0FBTSxPQUFNLEdBQUUsTUFBSyxPQUFLLEVBQUUsU0FBUyxFQUFDLFlBQVcsQ0FBQyxHQUFFLENBQUMsSUFBRSxFQUFFLGNBQVksRUFBQyxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBTyxxQkFBa0IsRUFBRSxJQUFJLEVBQUMsT0FBTSxPQUFNLE9BQU0sSUFBRyxNQUFLLE1BQUksRUFBRSxTQUFTLEVBQUMsWUFBVyxDQUFDLEdBQUUsRUFBRSxjQUFZLEVBQUMsVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFFBQU8scUJBQW1CLElBQUksV0FBVSxHQUFHLE1BQU0sWUFBVztrQkFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsT0FBTSxTQUFTLEVBQUMsU0FBUSxPQUFJLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztvQkFBRSxNQUFlO0FBQUcsaUJBQXBGLEVBQXZCO0FBQWxELGNBQXZVLEVBQXNlLEVBQUUsUUFBUSxPQUFPLE1BQUssU0FBUyxFQUFDLFNBQVEsT0FBSSxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLFVBQVMsb0JBQVc7b0JBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBRztBQUFHLGVBQTdFLEVBQXZCO2tCQUEwRyxDQUFHO0FBQUUsU0FBcHdCO0FBQXN3QixPQUFqM0ksQ0FBaEI7QUFBakYsT0FBbTlJLFNBQVEsbUJBQVc7VUFBSSxJQUFFLEVBQUU7VUFBb0IsSUFBRSxFQUFFLGdDQUE4QixFQUFFLE1BQU0sS0FBSyxvQkFBa0IsTUFBTSxFQUFFLFFBQVEsVUFBUyxFQUFFLFVBQVMsRUFBRSxNQUFNLElBQUksVUFBUyxFQUFXO0FBQXZvSixPQUF3b0osTUFBSyxnQkFBVztXQUFLLFFBQWlCO0FBQTlxSixPQUErcUosTUFBSyxnQkFBVztRQUFFLG9CQUFvQixRQUFpQjtBQUF0dUosVUFBMHVKLEdBQUcsVUFBUSxVQUFTLEdBQUc7V0FBTyxFQUFFLEtBQUcsRUFBRSxHQUFHLE1BQU0sTUFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVUsTUFBSSxvQkFBaUIsK0RBQUcsSUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFVLElBQUUsdUNBQXFDLEVBQUUsS0FBSyxNQUFNLE1BQWdCO0FBQUMsR0FBaE47QUFBMXZKLEVBQTI4SixtQkFBaUIsR0FBRztXQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsYUFBYSxLQUFLLEdBQUUsVUFBUyxHQUFFLEdBQUc7VUFBRyxFQUFFLFdBQVMsR0FBRztZQUFJLElBQUUsRUFBRSxTQUFTO1lBQUksSUFBRSxFQUFFLFNBQVM7WUFBSyxJQUFFLElBQUUsRUFBRTtZQUFRLElBQUUsSUFBRSxFQUFFO1lBQVMsSUFBRSxFQUFFLElBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsR0FBRyxLQUFHLEVBQUUsS0FBUTtBQUFDO0FBQWxKLFFBQXNKLENBQTdKO1lBQXNLLEVBQUUsR0FBRztNQUFFLE1BQU0sSUFBRSxFQUFFO0FBQVIsUUFBb0IsSUFBRSxFQUFFO1FBQWEsSUFBRSxJQUFFLEVBQUU7UUFBUSxJQUFFLElBQUUsRUFBRTtRQUFTLElBQUUsRUFBRSxJQUFFLEVBQUUsTUFBSSxLQUFHLEtBQUksSUFBRSxFQUFFLE9BQU0sSUFBRSxFQUFFLFFBQU8sSUFBRSxFQUFFLFFBQVEsS0FBSyxHQUFFLFVBQVMsR0FBRSxHQUFHO1VBQUksSUFBRSxFQUFFLEtBQUssbUJBQW1CLFlBQVUsT0FBTyxLQUFHLEVBQUUsZUFBZSxvQkFBbUIsRUFBRSxLQUFLLG1CQUFxQjtBQUEzSSxVQUErSSxLQUFLLEdBQUUsVUFBUyxHQUFFLEdBQUc7VUFBSSxJQUFFLEVBQUUsS0FBSyxtQkFBbUIsWUFBVSxPQUFPLEtBQUcsTUFBSSxNQUFJLEVBQUUsZUFBZSxtQkFBa0IsRUFBRSxLQUFLLG1CQUF5QjtBQUF0SixRQUF3SixJQUFJO1lBQVMsSUFBSTtNQUFFLFFBQTZCO09BQUksSUFBRSxFQUFFO01BQVEsSUFBRTtNQUFHLElBQUU7TUFBRyxJQUFFLENBQUM7TUFBRSxJQUFFO01BQUUsSUFBRSxFQUFDLEtBQUksR0FBRSxPQUFNLEdBQUUsUUFBTyxHQUFFLE1BQUssTUFBSyxZQUFVLFVBQVMsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFDLFVBQVMsS0FBSSxjQUFhLE1BQUssSUFBRSxFQUFFLE9BQU8sR0FBRSxHQUFHLElBQUksSUFBRSxPQUFLLEVBQUUsTUFBSyxLQUFLLFVBQVMsR0FBRSxHQUFHO1FBQUUsS0FBSyxFQUFFLEtBQUksRUFBRSxHQUFHLEtBQUssZ0JBQWUsTUFBSyxjQUFZLEVBQUUsR0FBRyxLQUFLLFFBQU0sTUFBTSxNQUFNLFVBQVMsR0FBRztVQUFFLGlCQUFpQixJQUFJLElBQUUsRUFBRSxZQUFZLFdBQVcsS0FBSyxPQUFPLFNBQVMsTUFBSSxFQUFFLEVBQUUsY0FBYyxRQUFRLEVBQUMsV0FBVSxJQUFFLEVBQUUsZ0JBQWMsRUFBQyxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBd0I7QUFBRSxPQUF6TztBQUE5RCxNQUFQLEVBQWdULEVBQUUsTUFBSSxFQUFFLGFBQVcsR0FBRSxFQUFFLFFBQU0sRUFBRSxlQUFhLEdBQUUsRUFBRSxTQUFPLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLE9BQUssRUFBRSxjQUFZLE1BQU0sZ0JBQWMsU0FBUyxZQUFXO1FBQUUsRUFBZ0I7QUFBbEQsT0FBbUQsRUFBRSxZQUFVO0FBQXJFLFFBQTBFLElBQUUsYUFBVztRQUFFLFVBQVUsTUFBUztBQUE1RyxNQUE2RyxhQUFXLEVBQUUsR0FBRyxVQUFTLElBQUcsRUFBRSxHQUFHLFVBQVMsSUFBRyxJQUFFLENBQUMsSUFBRyxXQUFXLEdBQUUsTUFBSyxHQUFHLG1CQUFrQixZQUFXO1lBQUksS0FBSyxHQUFFLFVBQVMsR0FBRztlQUFPLEtBQUcsRUFBVztBQUExQyxTQUE0QyxJQUFJLElBQUUsRUFBRSxNQUFNLEVBQUUsTUFBSSxFQUFFLGNBQVksRUFBRSxHQUFHLEtBQUssUUFBTSxNQUFNLFlBQVksV0FBVSxFQUFFLEtBQUssa0JBQWdCLEVBQUUsR0FBRyxLQUFLLGtCQUFnQixFQUFFLFFBQVEsRUFBRSxTQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVEsRUFBRSxLQUFLLEVBQUUsUUFBTyxFQUFFLGNBQVksRUFBRSxHQUFHLEtBQUssUUFBTSxNQUFNLFNBQW1CO0FBQTFULE1BQTVELElBQTBYLEdBQUcsa0JBQWlCLFlBQVc7Z0JBQU8sS0FBSyxHQUFFLFVBQVMsR0FBRztlQUFPLEtBQUcsRUFBVztBQUExQyxRQUFGLEVBQThDLEVBQUUsSUFBSTtVQUFFLGNBQVksRUFBRSxHQUFHLEtBQUssUUFBTSxNQUFNLFlBQVksVUFBVSxJQUFJLElBQUUsRUFBRSxZQUFVLEtBQUssR0FBRSxVQUFTLEdBQUc7aUJBQU8sRUFBRSxLQUFLLFNBQU8sRUFBRSxLQUFXO0FBQXZELFVBQUYsRUFBMkQsRUFBRSxNQUFJLEVBQUUsY0FBWSxFQUFFLEdBQUcsS0FBSyxRQUFNLE1BQU0sU0FBbUI7QUFBQztBQUF6UixRQUE2UjtBQUFsdkMsS0FBbXZDLEVBQUUsYUFBVyxVQUFTLEdBQUc7YUFBUyxhQUFXLFlBQVc7YUFBUztBQUFqQyxPQUFrQyxJQUFFLEtBQUcsRUFBQyxVQUFTLE9BQUssRUFBRSxHQUFHLFVBQVMsWUFBWSxTQUFTLEdBQUUsRUFBRSxZQUFnQjtBQUFoNEMsS0FBaTRDLEVBQUUsR0FBRyxZQUFVLFVBQVMsR0FBRztXQUFPLEVBQUUsVUFBVSxFQUFFLE9BQVM7QUFBQztBQUFscUUsRUFBbXFFLG1CQUFpQixHQUFHO0lBQUUsVUFBVSxNQUFNLFlBQVc7YUFBUyxFQUFFLEdBQUc7VUFBSSxJQUFFLEVBQUUsSUFBSTtVQUFlLElBQUUsRUFBRSxJQUFJO1VBQWEsSUFBRSxFQUFFLElBQUksZUFBZSxLQUFHLEVBQUUsSUFBSSxhQUFZLElBQUcsS0FBRyxFQUFFLElBQUksZUFBYyxJQUFHLEtBQUcsRUFBRSxJQUFJLGVBQWMsSUFBRyxVQUFRLEVBQUUsS0FBSyxXQUFTLEVBQUUsSUFBSSxpQkFBZ0IsVUFBVSxJQUFJLGVBQWMsUUFBTyxFQUFFLEtBQUssRUFBRSxRQUFNLE1BQU0sSUFBSSxJQUFFLEVBQUUsT0FBTyxRQUFRLE9BQU0sUUFBUSxFQUFFLEtBQUssSUFBRyxFQUFFLEdBQUcsY0FBWSxFQUFFLElBQUksU0FBUSxFQUFFLFdBQVMsRUFBRSxJQUFJLFNBQVEsRUFBRSxRQUFRLFVBQVEsSUFBRyxFQUFFLEtBQUssc0JBQW9CLEVBQUUsV0FBUyxFQUFFLElBQUksVUFBUyxFQUFFLFlBQVUsRUFBRSxNQUFNLFNBQU8sRUFBRSxLQUFLLHNCQUFvQixFQUFFLElBQUksVUFBUyxFQUFFLEtBQUsscUJBQW9CLEVBQUUsS0FBSyxtQkFBa0IsRUFBRSxNQUFjO2lCQUFZLG1CQUFpQixZQUFXO1VBQUksSUFBRSxrSkFBa0osR0FBRyxLQUFLLFVBQVMsR0FBRSxHQUFHO1lBQUksSUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sU0FBTyxLQUFHLEVBQUUsYUFBVyxLQUFLLE1BQUksRUFBRSxLQUFLLGlCQUFlLEVBQUUsU0FBUyxTQUFTLFNBQVMsWUFBVSxFQUFFLEdBQUcsR0FBRyxXQUFTLEVBQUUsU0FBUyxTQUFTLFlBQVksVUFBUyxFQUFFLEdBQUcsR0FBRyxTQUFTLGFBQVcsQ0FBQyxLQUFHLEVBQUUsU0FBUyxTQUFTLFlBQXNCO0FBQUUsT0FBcFI7QUFBOUwsTUFBbWQsSUFBSSxJQUFFLGtKQUFrSixVQUFVLEdBQUcsVUFBUyxHQUFFLFlBQVc7WUFBSSxFQUFFLE1BQU0sTUFBTSxVQUFRLEtBQUssTUFBSSxFQUFFLE1BQU0sS0FBSyxrQkFBZ0IsRUFBRSxNQUFNLFNBQVMsU0FBUyxTQUFTLFdBQVUsZUFBZSxFQUFTO0FBQTFLLFVBQThLLFVBQVUsTUFBTSxZQUFXO2tCQUErQjtBQUE1RCxVQUFnRSxVQUFVLEdBQUcsU0FBUSxVQUFTLEdBQUc7VUFBSSxJQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsY0FBWSxLQUFLLEdBQUcsWUFBWSxTQUFTLFlBQVksY0FBYSxLQUFLLEdBQUcsS0FBSyxZQUFXO2VBQUssRUFBRSxNQUFNLEtBQUssWUFBVSxFQUFFLE1BQU0sU0FBUyxTQUFTLFlBQXNCO0FBQXRHLFFBQXRELElBQWdLLEtBQUssc0JBQXNCLEtBQUssWUFBVztZQUFJLElBQUUsRUFBRSxLQUFLLG9CQUFvQixPQUFPLEVBQUUsU0FBUyx5QkFBeUIsSUFBTztBQUFHLE9BQW5JLENBQTdLO0FBQXJELFVBQXlXLFVBQVUsR0FBRyxTQUFRLEdBQUUsWUFBVztRQUFFLE1BQU0sU0FBUyxrQkFBa0IsU0FBbUI7QUFBMUYsVUFBOEYsVUFBVSxHQUFHLFFBQU8sR0FBRSxZQUFXO1VBQUksSUFBRSxFQUFFO1VBQU0sSUFBRSxVQUFVLE1BQUksRUFBRSxNQUFNLFVBQVEsRUFBRSxHQUFHLFNBQVMsYUFBVyxDQUFDLEtBQUcsS0FBSyxNQUFJLEVBQUUsS0FBSyxtQkFBaUIsS0FBRyxZQUFXLEVBQUUsU0FBUyxHQUFHLFlBQVksV0FBVSxlQUFrQjtBQUFuTixRQUFxTixPQUFPLGlCQUFlLFVBQVMsR0FBRztVQUFJLElBQUUsS0FBSyxNQUFJLEVBQUUsS0FBSztVQUFlLElBQUUsU0FBUyxFQUFFLEtBQUs7VUFBZ0IsSUFBRSxFQUFFLE1BQU0sT0FBTyxNQUFJLEVBQUUsTUFBTSxVQUFRLEVBQUUsR0FBRyxTQUFTLGFBQVcsQ0FBQyxJQUFFLEVBQUUsU0FBUyxnQkFBYyxFQUFFLFlBQVksVUFBUyxFQUFFLFlBQVksY0FBWSxFQUFFLFNBQVMsZ0JBQWMsRUFBRSxHQUFHLGFBQVcsS0FBRyxLQUFHLEtBQUcsRUFBRSxHQUFHLGFBQVcsQ0FBQyxLQUFHLEVBQUUsWUFBWSxZQUFXLEVBQUUsU0FBUyxhQUFXLEVBQUUsWUFBWSxVQUFTLEVBQUUsU0FBc0I7QUFBMXhDLE1BQTJ4QyxJQUFJLElBQUUsNENBQTRDLFVBQVUsR0FBRyxlQUFjLEdBQUUsVUFBUyxHQUFHO1VBQUcsTUFBSSxFQUFFLE9BQU87VUFBRSxNQUFNLFNBQVMsVUFBVSxJQUFJLElBQUUsRUFBRSxhQUFhLE9BQU8sSUFBSSxRQUFPLFVBQVMsR0FBRztZQUFFLE1BQU0sWUFBc0I7QUFBRSxTQUF6RCxDQUFaO0FBQXNFO0FBQTFLLE9BQTRLLElBQUksSUFBRSxFQUFFLGNBQWMsUUFBUSxFQUFFLFdBQVMsSUFBRSxFQUFFLHlDQUF3QyxFQUFFLFFBQVEsT0FBTyxJQUFJLElBQUksSUFBRSwwQkFBMEIsR0FBRyxLQUFLLFlBQVc7VUFBSSxJQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssbUJBQWtCLEVBQUUsV0FBVSxFQUFFLEtBQUssbUJBQWtCLEVBQUUsTUFBYztBQUFqSCxVQUFxSCxRQUFRLEdBQUcsNEJBQTJCLEdBQUUsWUFBVztRQUFFLEVBQVM7QUFBaEUsVUFBb0UsVUFBVSxHQUFHLFVBQVMsa0NBQWlDLFlBQVc7V0FBSSxJQUFJLElBQUUsRUFBRSxNQUFNLFFBQVEsZ0JBQWUsSUFBRSxFQUFFLEtBQUssb0JBQW1CLElBQUUsRUFBRSxNQUFNLEdBQUcsT0FBTSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7VUFBRSxLQUFLLEVBQUUsR0FBRztBQUFNLFNBQUUsSUFBSSxFQUFFLEtBQUssUUFBTyxFQUFFLFFBQWtCO0FBQTlPLFdBQW9QLElBQUU7QUFBTixRQUEwQixJQUFFLENBQUMsSUFBSSxHQUFHLEtBQUssWUFBVztVQUFJLElBQUUsRUFBRSwwREFBMEQsRUFBRSxNQUFNLE1BQVM7QUFBeEcsV0FBOEcsSUFBRSxXQUFTLEdBQUc7VUFBSSxJQUFFLFNBQVMsRUFBRSxTQUFTLElBQUk7VUFBaUIsSUFBRSxDQUFDLElBQUUsSUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLFFBQU8sUUFBTyxPQUFNLFFBQU8sS0FBSSxTQUFRLFlBQVcsS0FBRyxFQUFDLFVBQVMsS0FBSSxRQUF1QjtBQUFuTDtBQUFBLFFBQW9MLElBQUUsV0FBUyxHQUFHO1VBQUksSUFBRSxFQUFFLFVBQVE7VUFBRyxJQUFFLFdBQVcsRUFBRSxLQUFLO1VBQVEsSUFBRSxXQUFXLEVBQUUsS0FBSztVQUFRLElBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBTyxNQUFJLElBQUUsR0FBRyxPQUFPLElBQUk7QUFBeFQ7UUFBeVQsSUFBRSxpQkFBaUIsVUFBVSxHQUFHLFVBQVMsR0FBRSxVQUFTLEdBQUc7VUFBSSxJQUFFLEVBQUUsTUFBTSxTQUFTLFVBQVUsRUFBRSxLQUFLLFVBQVUsS0FBSyxFQUFFLE1BQU0sUUFBTyxFQUFFLFNBQVMsYUFBVyxFQUFFLEdBQUcsSUFBSSxJQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxVQUFVLElBQUksUUFBVTtBQUEzTCxVQUErTCxVQUFVLEdBQUcsd0JBQXVCLEdBQUUsVUFBUyxHQUFHO1VBQUksSUFBRSxFQUFFLE1BQU0sU0FBUyxVQUFVLElBQUcsRUFBRSxVQUFRLE1BQUksSUFBRSxFQUFFLDJEQUEwRCxFQUFFLE1BQU0sTUFBTSxLQUFJLEVBQUUsS0FBSyxVQUFVLEtBQUssRUFBRSxNQUFNLFFBQU8sSUFBRSxDQUFDLEdBQUUsRUFBRSxNQUFNLFNBQVMsV0FBVSxFQUFFLFNBQVMsYUFBVyxFQUFFLElBQUcsWUFBVSxFQUFFLE1BQU07WUFBSSxJQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxVQUFVLElBQUksUUFBVTtBQUFDO0FBQTdWLFVBQWlXLFVBQVUsR0FBRyxvQkFBbUIsR0FBRSxZQUFXO1VBQUUsQ0FBQyxHQUFFLEVBQUUsTUFBTSxZQUFzQjtBQUFsRixVQUFzRixVQUFVLEdBQUcsNkJBQTRCLEdBQUUsVUFBUyxHQUFHO1VBQUksSUFBRSxFQUFFLE1BQU0sU0FBUztVQUFVLElBQUUsRUFBRSxNQUFNLEtBQUssR0FBRyxJQUFHLEdBQUc7VUFBRSxTQUFTLGFBQVcsRUFBRSxHQUFHLElBQUksSUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLFVBQVUsSUFBSSxRQUFPLElBQUcsRUFBRSxLQUFLLFVBQVUsS0FBSyxFQUFFLFNBQVMsR0FBVTtBQUFDO0FBQXZPLFVBQTJPLFVBQVUsR0FBRyx1QkFBc0IsR0FBRSxZQUFXO1VBQUcsQ0FBQyxHQUFHO1lBQUksSUFBRSxFQUFFLE1BQU0sU0FBUztZQUFVLElBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSTtZQUFpQixJQUFFLElBQUUsSUFBRSxLQUFLLEVBQUUsU0FBUyxhQUFXLEVBQUUsU0FBUyxFQUFDLFFBQU8sS0FBSSxPQUFNLEtBQUksS0FBSSxRQUFPLFlBQVcsS0FBRyxFQUFDLFVBQVMsUUFBTSxFQUFFLFlBQXNCO0FBQUM7QUFBdFEsUUFBd1EsRUFBRSxHQUFHLGVBQWEsVUFBUyxHQUFHO1VBQUksSUFBRSxFQUFDLE1BQUssSUFBRyxPQUFNLElBQUUsR0FBRSxnQkFBZSxNQUFLLFdBQVUsV0FBVSxJQUFFLEVBQUUsT0FBTyxHQUFFLFNBQVEsS0FBSyxZQUFXO1lBQUk7WUFBRSxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUU7WUFBSyxJQUFFO1lBQUUsSUFBRSxDQUFDO1lBQUUsSUFBRSxFQUFFLFFBQVEsZ0JBQWdCLElBQUcsQ0FBQyxFQUFFLGNBQWMsSUFBSTtjQUFJO2NBQUUsSUFBRSxFQUFFLDJEQUEyRCxFQUFFLFVBQVEsSUFBRSxFQUFFLFNBQVMsMENBQTBDLFNBQVEsRUFBRSxVQUFRLEVBQUUsT0FBTyxPQUFLLElBQUUsRUFBRSxLQUFLLDJDQUEwQyxFQUFFLFVBQVEsRUFBRSxNQUFNLEtBQUksRUFBRSxXQUFTLElBQUUsT0FBTyxJQUFFLFdBQVMsR0FBRSxHQUFHO2dCQUFJLElBQUUsRUFBRSxLQUFLO2dCQUFPLElBQUUsRUFBRSxPQUFPLGNBQWMsUUFBUSxLQUFHLEVBQUU7Z0JBQWUsSUFBRSxJQUFFLEVBQUUsU0FBTztnQkFBRSxJQUFFLEVBQUUsT0FBTyxNQUFNLEdBQUU7Z0JBQUcsSUFBRSxFQUFFLE9BQU8sTUFBTSxHQUFFLElBQUU7Z0JBQUcsSUFBRSxFQUFFLE9BQU8sTUFBTSxJQUFFLEdBQUcsRUFBRSxLQUFLLFdBQVMsSUFBRSw2QkFBMkIsSUFBRSxZQUFVLElBQUUsWUFBVyxFQUFFLFVBQVEsRUFBRSxRQUFXO0FBQTdRO0FBQUEsY0FBOFEsSUFBRSxhQUFXO2dCQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssV0FBVyxZQUFzQjtBQUF4VTtjQUF5VSxJQUFFLGFBQVc7Y0FBRSxTQUFRLEtBQUksSUFBRSxLQUFPO0FBQTdXLGNBQWdYLElBQUkscUJBQXFCLEdBQUcscUJBQW9CLFlBQVc7QUFBSTtBQUFqRSxnQkFBcUUsSUFBSSx5Q0FBeUMsR0FBRyx5Q0FBd0MsVUFBUyxHQUFHO2dCQUFFLEVBQUUsSUFBSSxJQUFFLEVBQUUsTUFBTSxjQUFjLElBQUcsT0FBSyxFQUFFLFNBQU8sT0FBSyxFQUFFLFNBQU8sT0FBSyxFQUFFLE9BQU87a0JBQUcsTUFBSSxNQUFJLEtBQUksRUFBRSxVQUFRLEVBQUUsWUFBVyxLQUFJLElBQUksS0FBSyxHQUFFO29CQUFHLEVBQUUsZUFBZSxNQUFJLEVBQUUsY0FBYyxRQUFRLE9BQUssQ0FBQyxLQUFHLEVBQUUsa0JBQWdCLEdBQUc7c0JBQUcsS0FBRyxFQUFFLE9BQU0sTUFBTSxJQUFJLElBQUUsRUFBRSxhQUFhLEVBQUUsS0FBRyxFQUFFLE9BQU8sZUFBYSxFQUFFLEtBQUcsa0NBQWdDLElBQUUsYUFBVyxFQUFFLE9BQU8sV0FBUyxJQUFFLFlBQVcsRUFBRSxPQUFPLElBQUcsRUFBRSxHQUFFLElBQU87QUFBelE7QUFBeVEsbUJBQUk7QUFBQztBQUF2ZSxnQkFBMmUsSUFBSSx3QkFBd0IsR0FBRyx3QkFBdUIsVUFBUyxHQUFHO2dCQUFJO2dCQUFFLElBQUUsRUFBRTtnQkFBTSxJQUFFLEVBQUUsU0FBUyxNQUFNO2dCQUFPLElBQUUsRUFBRSxTQUFTLFdBQVcsUUFBUSxPQUFPLE9BQUssS0FBRyxLQUFHLEtBQUcsSUFBRSxFQUFFLFNBQVMsTUFBTSxHQUFHLElBQUcsTUFBSyxFQUFFLFdBQVMsRUFBRSxRQUFRLDJCQUEwQixFQUFFLHNCQUFvQixNQUFLLE9BQUssS0FBRyxPQUFLLE1BQUksRUFBRSxrQkFDOXcrQixPQUFLLEtBQUcsSUFBRSxLQUFHLEtBQUksT0FBSyxLQUFHLElBQUUsSUFBRSxLQUFHLEtBQUksRUFBRSxZQUFZLFdBQVUsS0FBRyxLQUFHLEVBQUUsU0FBUyxNQUFNLEdBQUcsR0FBRyxTQUFxQjtBQURrNDlCLGdCQUM5MzlCLEdBQUcsa0RBQWlELE1BQUssWUFBVztnQkFBSSxJQUFFLEVBQUUsTUFBTSxPQUFPLE9BQU8sRUFBRSxJQUFJLElBQUcsRUFBRSxRQUFRLFdBQVUsS0FBSSxjQUFZLE9BQU8sRUFBRSxrQkFBZ0IsRUFBRSxlQUFlLEtBQUssTUFBUTtBQUFFLFdBQXhNO0FBQXlNO0FBQUUsT0FEaTc2QixDQUF2QjtBQUN6NTZCO0FBRGtpeEIsTUFDaGl4QixFQUFFLEdBQUcsa0JBQWdCLFVBQVMsR0FBRzthQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLEVBQUUsUUFBUTtVQUFHLElBQUUsTUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFFLEVBQUUsS0FBSyxLQUFHLEVBQUUsT0FBTyxHQUFFLElBQUcsRUFBRSxTQUFTLHVCQUF1QixLQUFLLHFCQUFxQixHQUFHLEdBQUcsWUFBWSxXQUFVLEVBQUUsS0FBSyxVQUFVLEdBQUcsR0FBRyxLQUFLLFlBQVcsSUFBRyxFQUFFLEdBQUUsSUFBSztjQUFTLEVBQUUsR0FBRSxHQUFHO1dBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxLQUFLO1lBQUksSUFBRSxFQUFFLEtBQUssVUFBVSxHQUFHLEVBQUUsSUFBSSxPQUFPLEtBQUcsTUFBSSxJQUFFLElBQUUsT0FBTztjQUFLLE1BQUksSUFBRSxFQUFFLEtBQUssbUJBQW1CLEdBQUcsR0FBRyxTQUFRLEVBQUUsU0FBUyx5QkFBeUIsSUFBTztPQUFFLE1BQU0sS0FBSyxZQUFXO1VBQUksSUFBRSxFQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUUsU0FBUyxvQkFBb0I7WUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUs7WUFBWSxJQUFFLEVBQUUsS0FBSyxhQUFhLElBQUcsTUFBSSxFQUFFLFNBQVMsS0FBSyxjQUFjLFVBQVMsRUFBRSxTQUFTLEtBQUssU0FBUyxVQUFTLEVBQUUsVUFBUyxFQUFFLHVCQUFxQixHQUFHLFdBQVUsY0FBWSxHQUFFLE9BQU8sS0FBSyxFQUFFLEtBQUssYUFBWSxNQUFNLFlBQVksZUFBZSxJQUFJLElBQUUsWUFBWSxPQUFPLEVBQUUsS0FBSyxhQUFZLEdBQUcsSUFBSSxJQUFFLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLEtBQUssY0FBYyxJQUFFLEVBQUUsNEJBQTBCLElBQUUsZ0RBQThDLElBQUUsNkJBQTJCLE1BQUk7QUFBbkgsWUFBOEgsSUFBRSxFQUFFLFNBQVM7WUFBb0IsSUFBRTtZQUFHLElBQUUsQ0FBQztZQUFFLElBQUUsRUFBRSxLQUFLLG1CQUFtQixVQUFRLEVBQUUsS0FBSyxnQkFBZ0IsVUFBUTtZQUFHLElBQUUsV0FBUyxHQUFFLEdBQUUsR0FBRztjQUFJLElBQUUsRUFBRSxHQUFHLGVBQWEsY0FBWTtjQUFHLElBQUUsc0JBQW9CLElBQUUscUJBQW1CO2NBQUcsSUFBRSxJQUFFLDJCQUF5QixJQUFFLHNCQUFvQjtjQUFHLElBQUUsRUFBRSxLQUFLO2NBQVEsSUFBRSxFQUFFLEtBQUssU0FBUyxJQUFHLEdBQUc7Z0JBQUksSUFBRSxHQUFHLE9BQU8sTUFBSSxJQUFFLGFBQVcsSUFBRSxNQUFLLEVBQUUsT0FBTyxFQUFFLGdCQUFjLElBQUUsSUFBRSx3QkFBc0IsSUFBRSxNQUFJLElBQUUsWUFBVSxJQUFFLEVBQUUsU0FBTyxrQkFBaUIsQ0FBRzthQUFFLE9BQU8sRUFBRSxnQkFBYyxJQUFFLElBQUUsYUFBVyxJQUFFLEVBQUUsU0FBd0I7QUFBcm9CLFVBQXNvQixFQUFFLFlBQVUsS0FBSyxZQUFXO2NBQUcsRUFBRSxNQUFNLEdBQUcsV0FBVSxJQUFFLEVBQUUsR0FBRSxFQUFFLE9BQU0sY0FBWSxFQUFFLEdBQUUsRUFBRSxZQUFZLElBQUcsRUFBRSxNQUFNLEdBQUcsYUFBYTtnQkFBSSxJQUFFLEVBQUUsTUFBTSxTQUFTLFlBQVksT0FBTyxFQUFFLGdDQUE4QixFQUFFLE1BQU0sS0FBSyxXQUFTLG9CQUFtQixLQUFLLFlBQVc7Z0JBQUUsR0FBRSxFQUFFLE9BQXlCO0FBQUUsYUFBbkQsQ0FBaEY7QUFBb0k7QUFBdFIsY0FBMFIsS0FBSyxxQkFBcUIsS0FBSyxVQUFTLEdBQUc7WUFBRSxNQUFNLE1BQU0sVUFBUyxHQUFHO2dCQUFHLENBQUMsRUFBRSxNQUFNLFNBQVMsZUFBYSxDQUFDLEVBQUUsTUFBTSxTQUFTLGFBQWE7a0JBQUksSUFBRSxDQUFDLEVBQUUsT0FBSywwQkFBeUIsTUFBTSxLQUFLLFdBQVUsVUFBUyxHQUFFLEdBQUc7dUJBQU0sQ0FBRztBQUF2RSxrQkFBeUUsSUFBRSxFQUFFLEdBQUUsR0FBRSxJQUFHLEVBQUUsUUFBUSxhQUFXLEVBQUUsS0FBSyxNQUFNLFlBQVksV0FBVSxFQUFFLE1BQU0sWUFBWSxXQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBUyxFQUFFLEdBQUUsRUFBRSxRQUFPLEVBQUUsS0FBSyxVQUFVLEdBQUcsR0FBRyxLQUFLLFlBQVcsSUFBRyxFQUFFLFFBQVEsV0FBVSxlQUFhLE9BQU8sS0FBTztlQUFvQjtBQUFFO0FBQWpkLFlBQW1kLEVBQUUsS0FBSyxHQUFHLElBQUksSUFBRSxFQUFFLHNDQUFzQyxFQUFFLEdBQUcsZ0JBQWMsRUFBRSxTQUFTLGdCQUFnQixJQUFFLEVBQUUsUUFBUSxNQUFLO0FBQXJCLFlBQStCLElBQUUsRUFBRSxpRUFBK0QsRUFBRSxHQUFHLGVBQWEsYUFBVyxNQUFJLHFDQUFtQyxJQUFFLGNBQVksSUFBRSxTQUFTLE9BQU8sSUFBRyxFQUFFLE9BQU8sSUFBRyxFQUFFLE1BQU0sSUFBRyxFQUFFLEdBQUcsZ0JBQWMsRUFBRSxTQUFTLEVBQUMsT0FBTSxDQUFDLE1BQUksRUFBRSxLQUFLLGVBQWEsRUFBRSxFQUFFLElBQUksS0FBSyxZQUFXLEVBQUUsS0FBSyxjQUFhLEVBQUUsU0FBUyxrQkFBaUIsS0FBSSxPQUFNLGlCQUFXO2dCQUFHLEVBQUUsc0JBQXNCLElBQUksRUFBRSxJQUFJLEdBQUcsZUFBYSxFQUFFLHlCQUF5QixRQUFRLFVBQVMsQ0FBQyxFQUFFLEdBQUcsYUFBYTtnQkFBRSxNQUFNLFFBQVEsUUFBTyxDQUFDLFVBQVUsSUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFNLEtBQUcsRUFBRSxRQUFRLFFBQU0sTUFBSSxJQUFFLEVBQUUsTUFBTSxLQUFLLFFBQVEsTUFBSSxLQUFLLE1BQU0sT0FBTyxZQUFXO3VCQUFPLEVBQUUsTUFBTSxPQUFPLGtCQUFnQixFQUFnQjtBQUFyRixpQkFBdUYsRUFBN0YsQ0FBZ0csRUFBRSxHQUFFLEdBQUUsQ0FBSTtBQUFDO0FBQWpWLGFBQWtWLE9BQU0sZUFBUyxHQUFHO2NBQW9CO0FBQXhYLGFBQUwsS0FBa1ksR0FBRyxRQUFPLFlBQVc7ZUFBRyxFQUFFLE1BQU0sUUFBUSxVQUFTLEVBQUUsS0FBSyxlQUFlLFlBQXdCO0FBQWpHLFVBQXZpQixJQUE0b0IsTUFBTSxZQUFXO2NBQUUsQ0FBRztBQUF4QixXQUF5QixZQUFXO2NBQUUsQ0FBRztBQUF6QyxZQUEyQyxFQUFFLFFBQVEsS0FBSSxPQUFNLGlCQUFXO2tCQUFJLEtBQUcsRUFBRSxRQUFrQjtBQUE3QyxnQkFBZ0QsT0FBSyxLQUFLLGtDQUFrQyxLQUFLLFlBQVc7Y0FBSSxJQUFFLEVBQUUsTUFBTSxRQUFRLEVBQUUsR0FBRSxHQUFFLElBQUcsRUFBRSxLQUFLLE1BQU0sR0FBRyxHQUFHLEtBQUssYUFBYSxLQUFLLFdBQVUsQ0FBSTtBQUFoSixlQUFzSixJQUFFLFdBQVMsR0FBRSxHQUFFLEdBQUc7Y0FBRyxHQUFHO2NBQUUsS0FBSyxlQUFlLFlBQVksWUFBWSxJQUFJLElBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxhQUFZLEtBQUcsQ0FBQyxLQUFHLEVBQUUsU0FBWTtBQUFDO0FBQWxJO0FBQUEsWUFBbUksSUFBRTtZQUFHLElBQUUsV0FBUyxHQUFHO2NBQUcsS0FBRyxFQUFFLE9BQU0sT0FBTyxLQUFLLEVBQUUsUUFBUSxTQUFTLElBQUcsTUFBSSxFQUFFLFNBQU8sQ0FBQyxFQUFFLEdBQUcsYUFBWSxPQUFPLEtBQUssRUFBRSxRQUFRLFFBQVEsSUFBRyxNQUFJLEVBQUUsU0FBTyxFQUFFLEdBQUcsYUFBYTtjQUFFLHFCQUFxQixJQUFFLE9BQU8sYUFBYSxFQUFFLE9BQU87QUFBbkMsZ0JBQWlELElBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUksSUFBRyxLQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVMsQ0FBQyxHQUFHO2dCQUFFLEtBQUssT0FBTyxJQUFFLEVBQUUsS0FBSztBQUFiLGtCQUFpQixNQUFJLEtBQUssTUFBTSxPQUFPLFlBQVc7dUJBQU8sTUFBSSxFQUFFLE1BQU0sT0FBTyxjQUFjLFFBQVc7QUFBbEYsaUJBQW9GLEdBQUcsS0FBRyxFQUFFLEdBQUs7aUJBQUcsTUFBSSxFQUFFLE9BQU87a0JBQUksSUFBRSxFQUFFLEtBQUssOEJBQThCLEdBQUcsTUFBSSxFQUFFLEdBQUcsUUFBUSxVQUFTLEtBQUcsRUFBRSxRQUFrQjttQkFBSSxFQUFFLFVBQVEsSUFBRSxFQUFFLEtBQUssZUFBZSxTQUFPLEVBQUUsS0FBSyxlQUFlLEtBQUsscUJBQXFCLEtBQUcsRUFBRSxLQUFLLHFCQUFxQixJQUFHLEVBQUUsR0FBRSxLQUFJLE1BQUksRUFBRSxTQUFPLEVBQUUsUUFBUSxVQUFTLE1BQUksRUFBRSxVQUFRLElBQUUsRUFBRSxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsSUFBRyxLQUFHLEVBQUUsR0FBRSxnQkFBZSxZQUFXO2tCQUFLO0FBQTNCLGVBQWlDO0FBQUM7QUFBOTVCLFVBQSs1QixFQUFFLEdBQUcsV0FBYTtBQUFDO0FBQUU7QUFBQztBQUR1cm9CLEVBQ3Ryb0IsbUJBQWlCLEdBQUc7TUFBSSxNQUFHLE1BQUssY0FBUyxHQUFHO1VBQUksSUFBRSxFQUFDLFlBQVcsQ0FBQyxHQUFFLFFBQU8sS0FBSSxZQUFXLEtBQUksVUFBUyxhQUFZLElBQUUsRUFBRSxPQUFPLEdBQUUsU0FBUSxLQUFLLFlBQVc7aUJBQVMsRUFBRSxHQUFFLEdBQUc7WUFBRSxTQUFTLGtCQUFnQixFQUFFLFNBQVMsRUFBQyxTQUFRLEdBQUUsWUFBVyxDQUFDLE9BQUssRUFBQyxVQUFTLEdBQUUsT0FBTSxDQUFDLE9BQUksRUFBRSxTQUFTLGlCQUFlLEVBQUUsU0FBUyxFQUFDLFNBQVEsR0FBRSxZQUFXLE9BQUssRUFBQyxVQUFTLEdBQUUsT0FBTSxDQUFDLE9BQUksRUFBRSxTQUFTLGlCQUFlLEVBQUUsU0FBUyxFQUFDLFNBQVEsR0FBRSxZQUFXLENBQUMsT0FBSyxFQUFDLFVBQVMsR0FBRSxPQUFNLENBQUs7a0JBQVMsRUFBRSxHQUFHO2VBQUcsRUFBRSxTQUFPLElBQUUsSUFBRSxJQUFFLE1BQUksSUFBRSxFQUFFLFNBQU8sSUFBRyxJQUFFLEVBQUUsS0FBSyxXQUFXLFNBQVEsS0FBRyxVQUFNLEVBQUUsR0FBRyxJQUFHLFdBQVMsRUFBRSxLQUFLLGFBQVksRUFBRSxZQUFZLGFBQVksU0FBUyxFQUFDLFNBQVEsT0FBSSxVQUFTLEVBQUUsWUFBVyxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztnQkFBRSxJQUFJLFdBQVcsU0FBUyxFQUFDLFNBQVEsR0FBRSxZQUFXLEdBQUUsWUFBVyxLQUFHLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBSztBQUFoSyxlQUF2QixDQUE5RCxFQUF3UCxFQUFFLFVBQVMsRUFBRSxhQUFZLEVBQUUsY0FBWSxFQUFFLEdBQUcsR0FBRyxZQUFZLFdBQVUsRUFBRSxHQUFHLEdBQUcsU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsRUFBRSxZQUFXLE9BQU0sQ0FBQyxHQUFFLFFBQU8sa0JBQWdCLEVBQUUsR0FBRyxHQUFHLEtBQUssWUFBWSxTQUFTLEVBQUMsU0FBUSxHQUFFLFlBQVcsR0FBRSxZQUFXLEtBQUcsRUFBQyxVQUFTLEVBQUUsWUFBVyxPQUFNLEVBQUUsWUFBVyxPQUFNLENBQUMsR0FBRSxRQUFPLGtCQUFnQixFQUFFLEdBQUcsR0FBRyxTQUFTLFdBQVUsRUFBRSxjQUFZLEVBQUUsR0FBRyxHQUFHLFNBQW9CO2FBQUk7WUFBRTtZQUFFO1lBQUUsSUFBRSxFQUFFO1lBQU0sSUFBRSxFQUFFLEtBQUssYUFBYTtZQUFRLElBQUUsRUFBRSxLQUFLO1lBQVEsSUFBRSxFQUFFLEtBQUssV0FBVyxhQUFXLENBQUMsTUFBSSxJQUFFLEVBQUUsR0FBRyxLQUFJLEVBQUUsU0FBUyxrQkFBZ0IsRUFBRSxhQUFXLEVBQUUsT0FBTyxFQUFFLFNBQU8sTUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVcsS0FBSyxZQUFZLEtBQUssWUFBVztZQUFFLEVBQUUsT0FBUztBQUFoRCxVQUF4SCxJQUE0SyxLQUFLLE9BQU8sS0FBSyxZQUFXO2NBQUksSUFBRSxxRkFBcUYsRUFBRSxNQUFNLEtBQUssV0FBUyxNQUFJLEVBQUUsTUFBTSxJQUFJLG9CQUFtQixTQUFPLEVBQUUsTUFBTSxLQUFLLFNBQU8sTUFBSyxFQUFFLE1BQU0sS0FBSyxPQUFVO0FBQXpPLFlBQTJPLEVBQUUsbUJBQWUsRUFBRSxtQ0FBa0MsS0FBSyxVQUFTLEdBQUc7Y0FBSSxJQUFFLEVBQUUsc0NBQXNDLE1BQU0sWUFBVztnQkFBSSxJQUFFLEVBQUU7Z0JBQVMsSUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLFVBQVUsSUFBRyxjQUFjLElBQUcsZ0JBQWMsWUFBVztrQkFBRSxFQUFFLEtBQUssV0FBVyxTQUFRLEVBQUUsVUFBUSxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUcsR0FBRSxFQUFLO0FBQS9FLGVBQWdGLEVBQUUsYUFBVyxFQUFZLFNBQWpJO0FBQTlELGNBQWlNLEVBQUUsT0FBVTtBQUE1USxVQUFwQyxFQUFrVCxFQUFFLE9BQU8sSUFBRyxJQUFFLEVBQUUsS0FBSyxpQkFBaUIsS0FBSyx1QkFBc0IsSUFBRSxFQUFFLFVBQVEsRUFBRSxRQUFRLFNBQVMsVUFBVSxTQUFTLEVBQUMsU0FBUSxLQUFHLEVBQUMsVUFBUyxFQUFFLFlBQVcsT0FBTSxDQUFDLEdBQUUsUUFBTyxrQkFBZ0IsSUFBRSxHQUFFLElBQUUsRUFBRSxHQUFHLElBQUcsRUFBRSxjQUFZLEVBQUUsR0FBRyxHQUFHLFNBQVMsY0FBYSxLQUFLLE9BQU8sS0FBSyxZQUFXO1lBQUUsS0FBSyxZQUFZLFNBQVMsRUFBQyxTQUFRLEdBQUUsWUFBVyxHQUFFLFlBQVcsS0FBRyxFQUFDLFVBQVMsRUFBRSxZQUFXLE9BQU0sQ0FBQyxHQUFFLFFBQXVCO0FBQXZKLFlBQXlKLGdCQUFjLFlBQVc7Y0FBRSxFQUFFLEtBQUssV0FBVyxTQUFRLEVBQUUsSUFBSztBQUExRCxXQUEyRCxFQUFFLGFBQVcsRUFBRSxjQUFjLElBQUUsQ0FBQztBQUFQLFlBQVMsSUFBRSxDQUFDO1lBQUUsSUFBRSxDQUFDLElBQUksT0FBTyxFQUFDLGlCQUFnQixDQUFDLEtBQUksS0FBSyxPQUFNLFVBQVMsR0FBRztjQUFHLFlBQVUsRUFBRSxRQUFRLGFBQWE7MEJBQWMsT0FBTyxJQUFFLEVBQUUsUUFBUTtBQUFoQixnQkFBMEIsSUFBRSxFQUFFLFFBQVE7Z0JBQU8sSUFBRSxFQUFFLFFBQVE7Z0JBQVUsSUFBRSxFQUFFLFFBQVEsVUFBVSxjQUFZLEVBQUUsS0FBSyxZQUFXLEtBQUssSUFBSSxLQUFHLEtBQUssSUFBSSxNQUFJLFlBQVksU0FBUyxFQUFDLFlBQVcsS0FBRyxFQUFDLFVBQVMsSUFBRyxPQUFNLENBQUMsR0FBRSxRQUFPLGtCQUFnQixNQUFJLE1BQUksSUFBRSxFQUFFLGVBQWEsS0FBRyxJQUFFLENBQUMsT0FBSyxJQUFFLENBQUMsSUFBRSxNQUFJLE1BQUksSUFBRSxDQUFDLElBQUUsRUFBRSxlQUFhLEtBQUcsSUFBRSxTQUFPLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxNQUFJLElBQUUsWUFBWSxRQUFPLE1BQUksRUFBRSxXQUFTLElBQUUsRUFBRSxVQUFTLEVBQUUsU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLG1CQUFpQixNQUFJLElBQUUsWUFBWSxRQUFPLE1BQUksRUFBRSxXQUFTLElBQUUsRUFBRSxTQUFRLEVBQUUsU0FBUyxFQUFDLFNBQVEsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUF3QjtBQUFDO0FBQS9wQixXQUFpcUIsS0FBSyxVQUFTLFVBQVMsR0FBRztzQkFBVSxFQUFFLFFBQVEsOEJBQTBCLEVBQUUsS0FBSyxZQUFXLElBQUUsQ0FBQyxHQUFFLGFBQVcsRUFBRSxLQUFLLFdBQVcsU0FBUSxDQUFDLEtBQUcsQ0FBQyxLQUFHLEVBQUUsVUFBUSxJQUFFLFlBQVksU0FBUyxFQUFDLFlBQVcsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLHdCQUFtQixFQUFFLGFBQVcsZ0JBQWUsU0FBUyxFQUFDLFlBQVcsQ0FBQyxJQUFFLEVBQUUsa0JBQWUsVUFBUyxLQUFJLE9BQU0sQ0FBQyxHQUFFLFFBQU8sZUFBYyxVQUFTLG9CQUFXOzBCQUFZLFNBQVMsRUFBQyxTQUFRLEdBQUUsWUFBVyxLQUFHLEVBQUMsVUFBUyxHQUFFLE9BQU0sQ0FBSztBQUFySSxlQUFwRCxDQUFuQixVQUFvTixFQUFFLGFBQVcsZ0JBQWUsU0FBUyxFQUFDLFlBQVcsRUFBRSxrQkFBZSxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLFVBQVMsb0JBQVc7MEJBQVksU0FBUyxFQUFDLFNBQVEsR0FBRSxZQUFXLEtBQUcsRUFBQyxVQUFTLEdBQUUsT0FBTSxDQUFLO0FBQXJJLGVBQWpELENBQXBCLENBQTlYLEVBQTRrQixJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxjQUFjLElBQUcsZ0JBQWMsWUFBVztnQkFBRSxFQUFFLEtBQUssV0FBVyxTQUFRLEVBQUUsVUFBUSxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUcsR0FBRSxFQUFLO0FBQS9FLGFBQWdGLEVBQUUsYUFBVyxFQUFhO0FBQWg3QyxjQUFvN0MsR0FBRyxlQUFjLFlBQVc7d0JBQWlCO0FBQS9DLGNBQW1ELEdBQUcsZUFBYyxZQUFXO3dCQUFjLElBQUcsZ0JBQWMsWUFBVztnQkFBRSxFQUFFLEtBQUssV0FBVyxTQUFRLEVBQUUsVUFBUSxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUcsR0FBRSxFQUFLO0FBQS9FLGFBQWdGLEVBQUUsYUFBVyxFQUFZO0FBQTFKLGNBQThKLEdBQUcsY0FBYSxZQUFXO2NBQUUsRUFBRSxLQUFLLFdBQVcsU0FBUSxFQUFFLElBQUs7QUFBaEUsY0FBb0UsR0FBRyxjQUFhLFlBQVc7Y0FBRSxFQUFFLEtBQUssV0FBVyxTQUFRLEVBQUUsSUFBSztBQUFFLFNBQWxFO0FBQW9FLE9BQXBoSSxDQUF2QjtBQUEvRSxPQUEybkksT0FBTSxpQkFBVztRQUFFLE1BQU0sUUFBdUI7QUFBM3FJLE9BQTRxSSxPQUFNLGlCQUFXO1FBQUUsTUFBTSxRQUF1QjtBQUE1dEksT0FBNnRJLE1BQUssZ0JBQVc7UUFBRSxNQUFNLFFBQXNCO0FBQTN3SSxPQUE0d0ksTUFBSyxnQkFBVztRQUFFLE1BQU0sUUFBc0I7QUFBMXpJLFVBQTh6SSxHQUFHLFNBQU8sVUFBUyxHQUFHO1dBQU8sRUFBRSxLQUFHLEVBQUUsR0FBRyxNQUFNLE1BQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFVLE1BQUksb0JBQWlCLCtEQUFHLElBQUUsS0FBSyxFQUFFLE1BQU0sWUFBVSxJQUFFLHVDQUFxQyxFQUFFLEtBQUssTUFBTSxNQUFnQjtBQUFDLEdBQS9NO0FBQTkwSSxFQUE4aEosbUJBQWlCLEdBQUc7SUFBRSxVQUFVLE1BQU0sWUFBVztNQUFFLFVBQVUsR0FBRyxjQUFhLFNBQVEsVUFBUyxHQUFHO1FBQUUsTUFBTSxLQUFLLGtCQUFrQixhQUFXLEVBQUUsUUFBUSxHQUFHLEVBQUUsZ0NBQThCLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxtQ0FBaUMsTUFBTSxLQUFLLGdCQUFnQixTQUFTLEVBQUMsWUFBVyxPQUFJLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGlCQUFnQixVQUFTLG9CQUFXO1lBQUUsTUFBTSxJQUFJLEVBQUMsU0FBaUI7QUFBaEcsV0FBckQsQ0FBL0YsR0FBdVAsQ0FBQyxFQUFFLEVBQUUsUUFBUSxHQUFHLEVBQUUsd0JBQXNCLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSw0QkFBMEIsRUFBRSxFQUFFLFFBQVEsUUFBUSxTQUFTLElBQUksWUFBVyxXQUFVLEVBQUUsTUFBTSxLQUFLLGdCQUFnQixJQUFJLEVBQUMsU0FBUSxXQUFVLFNBQVMsUUFBTyxDQUFDLEdBQUcsU0FBUyxFQUFDLFlBQVcsV0FBUyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUEyQjtBQUFFO0FBQUU7QUFBN3BCLEVBQThwQixtQkFBaUIsR0FBRztNQUFJLElBQUUsRUFBQyxNQUFLLElBQUcsYUFBWSxJQUFHLHNCQUFxQixJQUFHLHFCQUFvQixPQUFNLFVBQVUsTUFBTSxZQUFXO01BQUUsVUFBVSxHQUFHLFNBQVEsZ0JBQWUsVUFBUyxHQUFHO1VBQUksSUFBRSxFQUFFLE1BQU0sUUFBUSxVQUFVLEVBQUUsS0FBSyx1QkFBcUIsRUFBRSxNQUFNLFFBQVEsU0FBa0I7QUFBRTtBQUEvSyxNQUFpTCxFQUFFLEdBQUcsZ0JBQWMsVUFBUyxHQUFHO1FBQUksSUFBRSxLQUFLLElBQUcsS0FBSyxNQUFJLEVBQUUsT0FBTSxLQUFLLFlBQVUsRUFBRSxXQUFVLEtBQUssT0FBSyxFQUFDLE9BQU0sVUFBUyxNQUFLLFNBQVEsT0FBTSxTQUFRLFFBQU8sbUJBQWtCLGVBQWMsZUFBYSxXQUFTLEdBQUUsT0FBTyxLQUFLLElBQUksS0FBSyxTQUFTLElBQUksSUFBRSxFQUFFLE9BQU8sSUFBRyxHQUFFLEtBQUssa0JBQWdCLENBQUMsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLE9BQU0sS0FBSyxPQUFLLFlBQVc7VUFBSSxJQUFFLElBQUksSUFBSSxLQUFLLFlBQVc7WUFBSSxJQUFFLEVBQUU7WUFBTSxJQUFFLFlBQVksT0FBTyxFQUFFLFNBQU8sR0FBRSxFQUFFLFFBQU0sRUFBRSxnQkFBZ0IsVUFBUSxFQUFFLE9BQUssS0FBSSxFQUFFLEtBQUssU0FBUSxFQUFFLE9BQU0sRUFBRSxLQUFLLGNBQWEsSUFBRyxFQUFFLEtBQUssb0JBQW1CLENBQUMsSUFBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLFVBQVEsRUFBRSxTQUFTLFVBQVMsRUFBRSxNQUFNLEdBQUUsSUFBTztBQUFFLE9BQTlQO0FBQTVGLE9BQTJWLEtBQUssZUFBYSxZQUFXO1VBQUksSUFBRSxFQUFFLE9BQU8sVUFBVSxJQUFJLHFCQUFvQixFQUFFLE9BQU8sR0FBRyxxQkFBb0IsRUFBRSxPQUFNLFVBQVMsR0FBRztVQUFFLEVBQUUsUUFBUSxLQUFLLEVBQUUsT0FBZTtBQUExSCxZQUE4SCxVQUFVLElBQUksc0JBQXFCLEVBQUUsTUFBTSxHQUFHLHNCQUFxQixFQUFFLE1BQUssVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUUsUUFBUSxJQUFHLEVBQUUsUUFBUTtjQUFJLElBQUUsRUFBRSxTQUFTO2NBQVksSUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLFlBQVksYUFBWSxLQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVc7QUFBQztBQUF6TyxZQUE2TyxVQUFVLElBQUksaUJBQWlCLEdBQUcsaUJBQWdCLFVBQVMsR0FBRztZQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsR0FBRyxvQkFBb0I7Y0FBSTtjQUFFLElBQUUsRUFBRSxVQUFVLEtBQUssRUFBRSxPQUFLLEVBQUU7Y0FBZSxJQUFFLEVBQUUsUUFBUSxFQUFFO2NBQU8sSUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sSUFBRyxFQUFFLFlBQVUsTUFBSSxFQUFFLFNBQU8sT0FBSyxFQUFFLE9BQU87Y0FBRSxrQkFBaUIsSUFBRSxFQUFFLFNBQVEsRUFBRSxXQUFXLEdBQUUsR0FBRyxJQUFJLElBQUUsS0FBSyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsTUFBSSxLQUFHLElBQUUsTUFBSSxNQUFJLElBQUUsSUFBRSxJQUFHLElBQUUsTUFBSSxJQUFFLE9BQU0sU0FBTyxLQUFHLEVBQUUsV0FBVyxHQUFFLElBQUcsS0FBRyxFQUFFLEtBQUssU0FBaUI7QUFBak0scUJBQXlNLE9BQUssRUFBRSxPQUFPO2dCQUFHLElBQUUsRUFBRSxVQUFRLEdBQUUsSUFBRSxHQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sWUFBWSxhQUFZLEVBQUUsV0FBVyxHQUFLO0FBQWpHLGlCQUFzRyxJQUFHLE9BQUssRUFBRSxPQUFPO2dCQUFHLElBQUUsRUFBRSxVQUFRLEdBQUUsRUFBRSxFQUFFLE1BQU0sWUFBWSxhQUFZLElBQUUsR0FBRSxPQUFPLEtBQUssRUFBRSxLQUFLLFNBQVMsUUFBUSxFQUFFLFdBQVcsR0FBSztBQUFDO0FBQUM7QUFBam9CLFlBQXFvQixVQUFVLElBQUksaUJBQWdCLEVBQUUsUUFBTSxNQUFJLEVBQUUsT0FBTyxHQUFHLGlCQUFnQixFQUFFLFFBQU0sTUFBSSxFQUFFLE9BQU0sVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUUsUUFBUSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsVUFBUyxFQUFFLFNBQVMsa0JBQWtCLFNBQVMsV0FBVSxFQUFFLEVBQUUsTUFBTSxZQUF3QjtBQUFqUCxZQUFxUCxVQUFVLElBQUksa0JBQWlCLEVBQUUsUUFBTSxNQUFJLEVBQUUsT0FBTyxHQUFHLGtCQUFpQixFQUFFLFFBQU0sTUFBSSxFQUFFLE9BQU0sVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUUsUUFBUSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksVUFBUyxFQUFFLEtBQUssU0FBUyxVQUFRLEVBQUUsU0FBUyxTQUFTLFlBQVksV0FBVSxFQUFFLFNBQVMsV0FBVyxZQUFzQjtBQUFsUixZQUFzUixVQUFVLElBQUkscUJBQW9CLEVBQUUsUUFBTSxNQUFJLEVBQUUsT0FBTyxHQUFHLHFCQUFvQixFQUFFLFFBQU0sTUFBSSxFQUFFLE9BQU0sVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUU7WUFBUSxJQUFFLEVBQUUsUUFBUSxFQUFFO1lBQU8sSUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sSUFBRyxPQUFLLEVBQUUsT0FBTztjQUFHLEVBQUUsbUJBQWlCLEVBQUUsS0FBSywwQ0FBMEMsVUFBUSxFQUFFLEtBQUssMENBQTBDLFdBQVcsUUFBTyxPQUFPLE9BQU8sRUFBRSxrQkFBaUIsRUFBRSxRQUFRLEVBQUMsS0FBSSxFQUFFLFNBQU8sSUFBRyxLQUFLLEVBQUUsSUFBUTthQUFHLENBQUMsTUFBSSxFQUFFLFdBQVMsT0FBSyxFQUFFLFlBQVUsT0FBSyxFQUFFLFNBQU8sR0FBRSxPQUFPLEVBQUUsa0JBQWlCLEVBQUUsV0FBVyxJQUFFLEdBQUUsSUFBRyxLQUFLLEVBQVM7QUFBamhCLFlBQXFoQixVQUFVLElBQUksc0JBQXFCLEVBQUUsUUFBTSxNQUFJLEVBQUUsUUFBUSxHQUFHLHNCQUFxQixFQUFFLFFBQU0sTUFBSSxFQUFFLFFBQU8sVUFBUyxHQUFHO1lBQUksSUFBRSxFQUFFLEVBQUU7WUFBUSxJQUFFLEVBQUUsUUFBUSxFQUFFO1lBQU8sSUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsbUJBQWtCLEVBQUUsV0FBVyxFQUFFLFNBQVEsSUFBRyxFQUFFLEtBQUssU0FBaUI7QUFBRSxPQUF2UDtBQUF6NEUsT0FBaW9GLEtBQUssUUFBTSxVQUFTLEdBQUUsR0FBRztRQUFFLFdBQVUsS0FBSyxTQUFTLFFBQVEsVUFBUyxHQUFHO1VBQUUsT0FBTyxFQUFFLFdBQWU7QUFBOUQsVUFBZ0UsRUFBRSxPQUFPLEVBQUUsZ0JBQWMsSUFBRSxxQ0FBb0MsRUFBRSxlQUFlLEdBQUcsSUFBSSxJQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsV0FBUyxFQUFFLEtBQUssT0FBTSxJQUFHLEVBQUUsS0FBSyxTQUFTLFVBQVEsRUFBRSxTQUFTLFdBQVcsSUFBSSxJQUFFLEVBQUUsTUFBSSxLQUFLLHNCQUFvQixvQkFBb0IsaUJBQWUsVUFBUyxHQUFHO1VBQUUsUUFBUSxFQUFDLEtBQUksS0FBRyxJQUFHLEVBQUUsSUFBSSxLQUFJLEVBQVU7QUFBMUYsU0FBMkYsRUFBRSxhQUFhLEVBQXdCLG9CQUF0SjtBQUFyNkYsT0FBNGpHLEtBQUssYUFBVyxVQUFTLEdBQUc7VUFBRyxFQUFFLEtBQUs7WUFBSSxJQUFFLEVBQUUsNEJBQTRCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBSyxFQUFFLE9BQU8sRUFBRSwrQ0FBZ0Q7QUFBQztBQUF2dEcsT0FBd3RHLEtBQUssaUJBQWUsVUFBUyxHQUFHO1FBQUUsS0FBSyxTQUFTLFVBQVEsRUFBRSxjQUFZLEVBQUUsS0FBSyxTQUFTLEtBQUssZUFBYyxFQUFFLGVBQWEsQ0FBQyxFQUFFLEtBQUssU0FBUyxVQUFRLEVBQUUsd0JBQXNCLEVBQUUsS0FBSyxTQUFTLEtBQUssZUFBYyxFQUF3QjtBQUE1N0csT0FBNjdHLEtBQUssVUFBUSxVQUFTLEdBQUUsR0FBRztXQUFJLElBQUksSUFBRSxFQUFFLEtBQUssVUFBUyxJQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtZQUFHLEVBQUUsR0FBRyxRQUFNLEVBQUUsS0FBSSxPQUFPLE1BQUssSUFBRSxDQUFDO0FBQUcsY0FBTSxPQUFLLEVBQUUsT0FBSyxDQUFHO0FBQXJrSCxPQUFza0gsS0FBSyxVQUFRLFVBQVMsR0FBRSxHQUFHO1VBQUcsRUFBRSxRQUFRLEdBQUUsSUFBSTthQUFJLElBQUksSUFBRSxFQUFFLFdBQVcsSUFBRyxJQUFFLElBQUcsSUFBRSxFQUFFLEtBQUssVUFBUyxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtZQUFFLEtBQUssRUFBRTtBQUFJLFdBQUUsS0FBSyxJQUFHLEVBQUUsS0FBSyxTQUFRLElBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxXQUFVLEVBQUUsUUFBUSxZQUFXLElBQUcsRUFBRSxlQUFrQjtBQUFDO0FBQTl5SCxPQUEreUgsS0FBSyxhQUFXLFVBQVMsR0FBRSxHQUFHO1VBQUksSUFBRSxFQUFFLEtBQUssU0FBUyxHQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUcsR0FBRyxTQUFTLEtBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxFQUFFLEtBQUssVUFBUyxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtjQUFJLEtBQUcsRUFBRSxLQUFLLEVBQUU7QUFBSSxTQUFFLEtBQUssU0FBUSxJQUFHLEVBQUUsUUFBUSxlQUFjLElBQUcsRUFBRSxlQUFrQjtBQUE1Z0ksT0FBNmdJLEtBQUssYUFBVyxVQUFTLEdBQUUsR0FBRztVQUFJLElBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRyxHQUFHLEtBQUcsQ0FBQyxNQUFJLEVBQUUsU0FBUyxnQkFBYyxFQUFFLFNBQVMsYUFBWSxFQUFFLFFBQVEsZUFBYyxFQUFFLEtBQUssU0FBYztBQUE1cUksT0FBNnFJLEtBQUssa0JBQWdCLFVBQVMsR0FBRSxHQUFHO2FBQU8sRUFBRSxHQUFNO0FBQS90SSxPQUFndUksS0FBSyxRQUFPLEtBQW9CO0FBQUM7QUFBOXdKLEVBQSt3SixtQkFBaUIsR0FBRztJQUFFLEdBQUcsVUFBUSxVQUFTLEdBQUc7UUFBSSxJQUFFLEVBQUMsS0FBSSxHQUFFLFFBQU8sSUFBRSxHQUFFLFFBQU8sd0JBQW9CLFVBQVEsS0FBSyxZQUFXO09BQUMsS0FBRyxFQUFFLE1BQU0sS0FBSyxtQkFBaUIsRUFBRSxRQUFRLElBQUksWUFBVSxLQUFJLEVBQUUsTUFBTSxXQUFXLGNBQWMsWUFBWSw2QkFBNkIsV0FBcUI7QUFBbEwsUUFBb0wsQ0FBQyxNQUFJLElBQUUsRUFBRSxPQUFPLEdBQUUsSUFBRyxTQUFPLFFBQU8sS0FBSyxZQUFXO2VBQVMsRUFBRSxHQUFHO1VBQUUsWUFBWSxZQUFXLEVBQUUsWUFBWSxXQUFVLEVBQUUsWUFBMEI7Z0JBQVMsRUFBRSxHQUFFLEdBQUc7VUFBRSxLQUFLLFlBQVc7WUFBRSxPQUFLLEtBQUcsRUFBRSxVQUFRLEtBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxjQUFZLEVBQUUsRUFBRSxRQUFPLEVBQUUsTUFBTSxJQUFJLE9BQU0sRUFBRSxTQUFRLEVBQUUsTUFBTSxTQUFTLFlBQVcsSUFBRSxFQUFFLE9BQUssQ0FBQyxFQUFFLE1BQU0sU0FBUyxlQUFhLEVBQUUsRUFBRSxRQUFPLEVBQUUsTUFBTSxJQUFJLE9BQU0sSUFBRyxFQUFFLE1BQU0sU0FBUyxhQUFZLElBQUUsRUFBRSxVQUFRLENBQUMsRUFBRSxNQUFNLFNBQVMsa0JBQWdCLEVBQUUsRUFBRSxRQUFPLEVBQUUsTUFBTSxTQUFTLGVBQWMsRUFBRSxNQUFNLElBQUksT0FBTSxFQUFFLFNBQVc7QUFBRTtXQUFJLElBQUUsWUFBWTtVQUFPLElBQUUsRUFBRTtVQUFNLElBQUUsRUFBRSxNQUFNLFNBQVMsTUFBTSxNQUFNLEtBQUssY0FBYSxJQUFHLEVBQUUsR0FBRSxFQUFFLFFBQVEsZ0JBQWUsUUFBUSxHQUFHLFlBQVUsR0FBRSxZQUFXO1lBQUksSUFBRSxFQUFFLFFBQVEsY0FBWSxFQUFFLE9BQU8sRUFBRSxHQUFLO0FBQUUsT0FBbEYsQ0FBeEQ7QUFBNkksS0FBL3FCLENBQWhPLENBQU47QUFBczVCO0FBQTc5QixFQUE4OUIsbUJBQWlCLEdBQUc7SUFBRSxVQUFVLE1BQU0sWUFBVztNQUFFLEdBQUcsVUFBUSxHQUFHLFdBQVUsVUFBVSxHQUFHLDZCQUE0Qix5REFBd0QsVUFBUyxHQUFHO1VBQUksSUFBRSxFQUFFLE1BQU0sRUFBSztBQUFsSSxVQUFzSSxVQUFVLEdBQUcsNkJBQTRCLHlEQUF3RCxVQUFTLEdBQUc7VUFBSSxJQUFFLEVBQUUsTUFBTSxFQUFLO0FBQWxJLFVBQXNJLFVBQVUsR0FBRyx3QkFBdUIseUNBQXdDLFVBQVMsR0FBRztVQUFJLElBQUUsRUFBRTtVQUFNLElBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxZQUFVLEVBQUUsS0FBRyxFQUFLO0FBQXBKLFVBQXdKLFVBQVUsR0FBRyxvQkFBbUIsaUNBQWdDLFVBQVMsR0FBRztVQUFJLElBQUUsRUFBRTtVQUFNLElBQUUsRUFBRSxTQUFTLEVBQUs7QUFBRSxLQUFoSDtBQUFuZCxNQUFxa0IsRUFBRSxHQUFHLFNBQVEsU0FBUSxtQkFBVztRQUFFLEVBQVM7QUFBL0IsT0FBZ0MsVUFBUyxvQkFBVztRQUFFLEVBQVM7QUFBL0QsT0FBZ0UsYUFBWSx1QkFBVztRQUFFLEVBQVM7QUFBbEcsT0FBbUcsY0FBYSx3QkFBVztRQUFFLEVBQVM7QUFBdEksYUFBNkksSUFBRSxXQUFTLEtBQUc7UUFBSSxJQUFFLElBQUUsSUFBRyxFQUFFLFNBQVMsY0FBWSxDQUFDLEdBQUc7VUFBSTtVQUFFO1VBQUUsSUFBRSxFQUFFLFNBQVMsY0FBYyxNQUFJLENBQUMsSUFBRSxJQUFFLEtBQUcsSUFBRSxJQUFHLEVBQUUsU0FBUyxXQUFVLEVBQUUsS0FBSyxvQkFBb0IsU0FBUyxFQUFDLFFBQU8sTUFBSyxRQUFPLE1BQUssWUFBVyxJQUFFLE1BQUssWUFBVyxJQUFFLFFBQU0sRUFBQyxVQUFTLEtBQUksSUFBSSxJQUFFLElBQUksS0FBSyxvQkFBb0IsVUFBVSxLQUFLLFlBQVc7VUFBRSxNQUFNLFNBQVMsRUFBQyxTQUFRLEtBQUksUUFBTyxLQUFJLFFBQU8sS0FBSSxZQUFXLEtBQUksWUFBVyxPQUFLLEVBQUMsVUFBUyxJQUFHLE9BQU0sTUFBSSxLQUFNO0FBQUUsT0FBdks7QUFBd0s7QUFBamE7QUFBQSxNQUFrYSxJQUFFLFdBQVMsR0FBRztRQUFJO1FBQUU7UUFBRSxJQUFFO1FBQUUsSUFBRSxFQUFFLFNBQVMsY0FBYyxNQUFJLENBQUMsSUFBRSxJQUFFLEtBQUcsSUFBRSxJQUFHLEVBQUUsWUFBWSxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsU0FBUyxRQUFPLENBQUMsSUFBRyxFQUFFLEtBQUssb0JBQW9CLFNBQVMsRUFBQyxTQUFRLEtBQUksUUFBTyxNQUFLLFFBQU8sTUFBSyxZQUFXLElBQUUsTUFBSyxZQUFXLElBQUUsUUFBTSxFQUFDLFVBQWM7QUFBNXFCO01BQTZxQixJQUFFLFdBQVMsR0FBRztRQUFHLFdBQVMsRUFBRSxLQUFLLGNBQWM7VUFBSTtVQUFFO1VBQUU7VUFBRSxJQUFFLE9BQU87VUFBVyxJQUFFLE9BQU87VUFBWSxJQUFFLEVBQUUsR0FBRztVQUF3QixJQUFFLEVBQUUsS0FBSyxPQUFPO1VBQVEsSUFBRSxFQUFFLEtBQUssUUFBUTtVQUFRLElBQUUsRUFBRTtVQUFvQyxJQUFFLEVBQUUsSUFBSSxzQkFBc0IsT0FBTyxJQUFHLElBQUUsRUFBRSxPQUFLLElBQUUsSUFBRSxFQUFFLFFBQU0sR0FBRSxJQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRSxFQUFFLFNBQVEsRUFBRSxLQUFLLHNCQUFxQixFQUFFLFNBQVEsRUFBRSxLQUFLLG9CQUFtQixFQUFFLE9BQU0sRUFBRSxLQUFLLHFCQUFvQixFQUFFLFFBQU8sRUFBRSxTQUFTLFdBQVUsRUFBRSxLQUFLLGFBQVksQ0FBQyxJQUFHLEVBQUUsSUFBSSxFQUFDLGNBQWEsVUFBUyxPQUFNLFFBQU8sUUFBTyxHQUFFLE1BQUssR0FBRSxXQUFVLGdCQUFjLElBQUUsT0FBTSxZQUFXLFdBQVMsRUFBRSxJQUFJLEVBQUMsV0FBVSxnQkFBYyxDQUFDLElBQUUsT0FBTSxZQUFXLFdBQVMsRUFBRSxJQUFJLEVBQUMsb0JBQW1CLGlCQUFlLFlBQVc7VUFBRSxJQUFJLEVBQUMsV0FBVSxJQUFHLFlBQVcsNkZBQTJGLEVBQUUsSUFBSSxFQUFDLFVBQVMsV0FBVSxXQUFVLElBQUcsWUFBVywrQkFBNkIsWUFBVztZQUFFLElBQUksRUFBQyxVQUFTLFVBQVMsb0JBQW1CLE1BQUksRUFBRSxJQUFJLEVBQUMsV0FBVSxXQUFTLElBQUUsS0FBSSxZQUFXLDZEQUEyRCxFQUFFLEtBQUssWUFBWSxJQUFJLEVBQUMsU0FBUSxRQUFNLFFBQVEsR0FBRywwQkFBeUIsWUFBVztjQUFFLElBQUcsRUFBRSxRQUFRLElBQUksMkJBQTBCLEVBQUUsVUFBVSxJQUE2QjtBQUF2SSxnQkFBMkksVUFBVSxHQUFHLHlCQUF3QixVQUFTLEdBQUc7Y0FBRSxFQUFFLFFBQVEsUUFBUSxHQUFHLFdBQVMsRUFBRSxJQUFHLEVBQUUsUUFBUSxJQUFJLDJCQUEwQixFQUFFLFVBQVUsSUFBOEI7QUFBRSxXQUE1SztBQUF6VixXQUEyZ0I7QUFBL3RCLFNBQW11QixFQUFqb0M7QUFBa29DO0FBQXJpRTtNQUFzaUUsSUFBRSxXQUFTLEdBQUc7UUFBRyxXQUFTLEVBQUUsS0FBSyxjQUFjO1VBQUk7VUFBRTtVQUFFO1VBQUUsSUFBRSxPQUFPO1VBQVcsSUFBRSxPQUFPO1VBQVksSUFBRSxFQUFFLEtBQUs7VUFBcUIsSUFBRSxFQUFFLEtBQUs7VUFBc0IsSUFBRSxFQUFFLEtBQUs7VUFBb0IsSUFBRSxFQUFFLEtBQUssbUJBQW1CO1VBQVEsSUFBRSxFQUFFLEtBQUssUUFBUTtVQUFRLElBQUUsRUFBRSxLQUFLO1VBQWlCLElBQUUsRUFBRSxJQUFJLHdCQUFzQixJQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEVBQUUsU0FBUSxFQUFFLFlBQVksV0FBVSxFQUFFLEtBQUssYUFBWSxDQUFDLElBQUcsRUFBRSxJQUFJLEVBQUMsb0JBQW1CLGVBQWMsWUFBVyxXQUFTLEVBQUUsSUFBSSxFQUFDLFlBQVcsV0FBUyxFQUFFLElBQUksRUFBQyxXQUFVLFlBQVcsb0JBQW1CLE1BQUksRUFBRSxLQUFLLFlBQVksSUFBSSxFQUFDLFNBQVEsa0JBQWdCLFlBQVc7VUFBRSxVQUFTLEVBQUUsSUFBSSxFQUFDLGNBQWEsSUFBRyxPQUFNLElBQUcsUUFBTyxJQUFHLE1BQUssSUFBRyxVQUFTLElBQUcsb0JBQW1CLElBQUcsV0FBVSxpQkFBZSxDQUFDLElBQUUsY0FBWSxFQUFFLElBQUksRUFBQyxVQUFTLElBQUcsV0FBVSxtQkFBaUIsSUFBRSx1QkFBcUIsWUFBVztZQUFFLElBQUksRUFBQyxXQUFVLHNCQUFxQixZQUFXLG9CQUFrQixFQUFFLElBQUksRUFBQyxXQUFVLHNCQUFxQixZQUFzRTtBQUFyTSxXQUEwTTtBQUFqYSxTQUF1YSxJQUFycUI7QUFBc3FCO0FBQUM7QUFBbHVILEVBQW11SCxtQkFBaUIsR0FBRztjQUFZLGNBQVksVUFBUyxHQUFHO1FBQUksRUFBRSxJQUFHLFlBQVUsT0FBTyxHQUFFLElBQUUsRUFBRSxRQUFRO1VBQUcsb0JBQWlCLDZEQUFFLE9BQU8sSUFBSTtPQUFFLElBQUksRUFBQyxTQUFRLE1BQUksRUFBRSxHQUFHLFNBQVMsRUFBQyxTQUFRLEtBQUcsRUFBQyxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBTyxvQkFBa0IsR0FBRyxTQUFTLEVBQUMsU0FBUSxPQUFJLFVBQVMsTUFBSyxPQUFNLENBQUMsR0FBRSxRQUFPLFNBQVEsTUFBSyxjQUFTLEdBQUUsR0FBRztVQUFFLFFBQU0sUUFBUSxJQUFFLElBQUU7QUFBUixZQUFZLElBQUUsTUFBSSxDQUFDLE1BQUksS0FBRyxLQUFLLElBQUUsUUFBTSxJQUFFLE1BQUssS0FBRyxLQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUMsa0JBQWlCLGVBQWEsSUFBRSxpQkFBZSxJQUFFLE1BQUssUUFBTyxlQUFhLElBQUUsaUJBQWUsSUFBUztBQUFHLE9BQTlPLEVBQTFCO0FBQXhNLEtBQWlkLFlBQVksb0JBQWtCLFVBQVMsR0FBRztRQUFJLEVBQUUsSUFBRyxZQUFVLE9BQU8sR0FBRSxJQUFFLEVBQUUsUUFBUTtVQUFHLG9CQUFpQiw2REFBRSxPQUFPLElBQUk7U0FBSSxJQUFFLElBQUksS0FBSyxNQUFNLFNBQVMsRUFBQyxZQUFXLFlBQVUsRUFBQyxVQUFTLFFBQU0sS0FBSyxNQUFNLEtBQUssWUFBVztRQUFFLE1BQU0sU0FBUyxFQUFDLFNBQVEsS0FBSSxZQUFXLE9BQUssRUFBQyxVQUFTLEtBQUksT0FBTSxHQUFFLFFBQU8sQ0FBQyxJQUFHLFFBQU0sS0FBTztBQUFFLEtBQTNILENBQTFEO0FBQTVrQixPQUFvd0IsVUFBVSxNQUFNLFlBQVc7UUFBSSxJQUFFLENBQUM7UUFBRSxJQUFFLENBQUMsSUFBSSxnQkFBZ0IsS0FBSyxZQUFXO1FBQUUsTUFBTSxPQUFPLEVBQUMsaUJBQWdCLENBQUMsS0FBSSxLQUFLLE9BQU0sVUFBUyxHQUFHO1lBQUcsWUFBVSxFQUFFLFFBQVEsYUFBYTtjQUFJLElBQUUsRUFBRTtjQUFNLElBQUUsRUFBRSxRQUFRO2NBQVUsSUFBRSxFQUFFLFFBQVE7Y0FBTyxJQUFFLEVBQUUsUUFBUSxVQUFVLEVBQUUsU0FBUyxFQUFDLFlBQVcsS0FBRyxFQUFDLFVBQVMsSUFBRyxPQUFNLENBQUMsR0FBRSxRQUFPLGtCQUFnQixNQUFJLE1BQUksSUFBRSxFQUFFLGVBQWEsS0FBRyxJQUFFLENBQUMsU0FBTyxJQUFFLENBQUMsSUFBRyxNQUFJLE1BQUksSUFBRSxDQUFDLElBQUUsRUFBRSxlQUFhLEtBQUcsSUFBRSxTQUFPLElBQUUsQ0FBSTtBQUFDO0FBQS9VLFNBQWlWLEtBQUssVUFBUyxVQUFTLEdBQUc7WUFBRyxLQUFLLElBQUksRUFBRSxRQUFRLFVBQVEsRUFBRSxNQUFNLGVBQWEsTUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsSUFBRyxZQUFVLEVBQUUsUUFBUSxhQUFhO2NBQUksSUFBRSxFQUFFLFVBQVMsS0FBRyxHQUFHO2dCQUFJLEVBQUUsSUFBRSxJQUFFLEVBQUUsZUFBYSxDQUFDLElBQUUsRUFBRSxnQkFBZSxTQUFTLEVBQUMsWUFBVyxPQUFJLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGVBQWMsVUFBUyxvQkFBVztrQkFBRSxJQUFJLFVBQVMsV0FBVSxTQUFTLEVBQUMsUUFBTyxHQUFFLFNBQVEsT0FBSSxVQUFTLEtBQUksT0FBTSxDQUFDLEdBQUUsUUFBTyxlQUFjLFVBQVMsb0JBQVc7c0JBQVc7QUFBRyxtQkFBOUUsRUFBaEM7QUFBaUgsZUFBeE0sRUFBMUI7QUFBcEQsaUJBQTJSLEVBQUUsU0FBUyxFQUFDLFlBQVcsS0FBRyxFQUFDLFVBQVMsS0FBSSxPQUFNLENBQUMsR0FBRSxRQUFPLGlCQUFnQixJQUFFLENBQUMsR0FBRSxJQUFFLENBQUc7QUFBQztBQUFFO0FBQUUsS0FBaDNCO0FBQWszQixHQUE3NUI7QUFBOXdCLEVBQTRxRCxtQkFBaUIsR0FBRztNQUFJLElBQUUsQ0FBQyxjQUFjLGFBQVcsVUFBUyxHQUFHO1FBQUksSUFBRSxhQUFXO1dBQUksSUFBSSxJQUFFLE9BQU8sY0FBWSxPQUFPLGFBQVksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUs7WUFBSSxJQUFFLEVBQUU7WUFBRyxJQUFFLEVBQUU7WUFBUyxJQUFFLEVBQUU7WUFBTyxJQUFFLEVBQUU7WUFBUyxJQUFFLFNBQVMsY0FBYyxHQUFHLElBQUcsU0FBTyxHQUFHO2NBQUksSUFBRSxFQUFFLHdCQUF3QixNQUFJLE9BQU8sWUFBWSxJQUFHLElBQUUsSUFBRSxLQUFHLEVBQUUsU0FBTyxDQUFDLEdBQUc7Z0JBQUcsY0FBWSxPQUFPLEdBQUUsRUFBRSxLQUFLLE1BQUssUUFBUSxJQUFHLFlBQVUsT0FBTyxHQUFHO2tCQUFJLElBQUUsSUFBSSxTQUFTLEdBQUcsRUFBSztlQUFFLE9BQUssQ0FBRztBQUFDO0FBQUM7QUFBQztBQUF2VztRQUF3VyxnQkFBYyxTQUFTLFlBQVc7QUFBSTtBQUFwQyxPQUFxQyxFQUFFLFlBQVUsS0FBSyxNQUFJLE9BQU8saUJBQWlCLFVBQVMsSUFBRyxPQUFPLGlCQUFpQixVQUFTLElBQUcsSUFBRSxDQUFDLElBQUcsV0FBVyxHQUFLO0FBQUMsR0FBdGlCO0FBQXJCLEVBQTRqQixtQkFBaUIsR0FBRztPQUFrQyxHQUFJLGlDQUFnQixDQUFDLDREQUFVO0FBQUE7QUFBQSx1SEFBRyxvQkFBaUIsMEVBQVEsT0FBTyxVQUFRLEVBQUUscUJBQW1CLEtBQUssU0FBTyxFQUFVO0FBQW5LLEVBQW9LLFVBQVMsR0FBRztXQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRzthQUFTLElBQUk7YUFBTyxFQUFFLEVBQUUsS0FBSyxPQUFNLEVBQUUsRUFBRSxLQUFLLE9BQU0sRUFBRSxFQUFFLEtBQUssT0FBTSxFQUFFLEVBQUUsS0FBSyxPQUFNLEVBQUUsVUFBVSxNQUFNLEVBQUUsT0FBTSxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsUUFBTyxFQUFVO2NBQVMsSUFBSTtRQUFFLEtBQUssR0FBRSxHQUFHLFNBQVMsRUFBRSxPQUFPLEtBQUssWUFBVyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUssV0FBUyxFQUFFLElBQUksVUFBUyxFQUFFLFVBQVEsRUFBRSxRQUFPLEVBQUUsY0FBWSxHQUFHLFdBQVMsRUFBRSxLQUFHLFlBQVUsRUFBRSxJQUFHLFVBQVMsR0FBRztVQUFFLGtCQUFpQixFQUFFLE1BQU0sR0FBRyxHQUFXO0FBQXZGLFNBQXlGLEdBQUcsYUFBVyxFQUFFLElBQUcsSUFBRyxFQUFFLEdBQUUsRUFBQyxVQUFTLENBQUMsR0FBRSxVQUFTLENBQUMsR0FBRSxVQUFTLENBQUMsR0FBRSxNQUFLLEVBQUUsS0FBYTtjQUFTLElBQUk7UUFBRSxNQUFNLEtBQUksU0FBUSxHQUFFLFNBQVEsaUJBQVMsR0FBRztZQUFFLE1BQU0sWUFBWSxFQUFFLFVBQVMsRUFBb0I7QUFBbEYsV0FBbUYsbUJBQWtCLHdCQUFTLEdBQUc7Y0FBSSxJQUFFLEVBQUUsT0FBTyxLQUFHLEVBQUUsTUFBTSxXQUFXLE9BQUssRUFBRSxtQkFBa0IsZUFBYSxFQUFFLFFBQU0sRUFBRSxHQUFHLEdBQUcsK0NBQTZDLEVBQUUsa0JBQWlCLEVBQUUsTUFBTSxHQUFHLEdBQWE7QUFBcFMsYUFBdVMsS0FBSSxPQUFNLGlCQUFXO1lBQUUsU0FBUyxFQUFVO0FBQXZDLFdBQXdDLE1BQUssZ0JBQVc7WUFBRSxZQUFZLEVBQVU7QUFBaEYsYUFBbUYsR0FBRyxnQkFBZSxHQUFHLEdBQUcsU0FBUSx1REFBc0QsWUFBVztZQUFJLElBQUUsRUFBRTtZQUFNLElBQUUsRUFBRTtZQUFPLElBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWMsRUFBRSxTQUFTLEVBQUU7WUFBVSxJQUFFLElBQUksSUFBRSxNQUFJLEVBQUUsUUFBTSxFQUFFLE9BQU0sQ0FBQyxLQUFHLEtBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUcsT0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLFNBQVEsQ0FBQyxLQUFHLEVBQUUsTUFBSSxFQUFFLElBQUksYUFBWSxFQUFFLFVBQVUsS0FBSyxXQUFVLEVBQUMsS0FBSSxFQUFFLFNBQU0sQ0FBQyxLQUFHLFVBQVMsSUFBRSxFQUFFLElBQUksVUFBUyxFQUFFLFFBQU0sRUFBRSxRQUFNLEVBQUUsUUFBUSxNQUFNLENBQUMsS0FBRyxFQUFFLFNBQU8sRUFBRSxNQUFNLENBQUk7QUFBdHlCLFVBQXd5QixFQUFFLEVBQUUsTUFBTSxJQUFHLFVBQVMsQ0FBSTtjQUFTLElBQUk7VUFBSSxJQUFJLGVBQWEsQ0FBQyxLQUFHLElBQUUsRUFBRSxNQUFLLEVBQUUsT0FBSyxPQUFLLElBQUUsQ0FBQyxZQUFVLE9BQU8sRUFBRSxlQUFhLEVBQUUsZUFBYSxJQUFHLFlBQVUsT0FBTyxFQUFFLGVBQWEsRUFBRSxlQUFhLFlBQVcsSUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFLLEVBQUUsS0FBSSxFQUFFLFVBQVEsRUFBRSw4QkFBNEIsSUFBRSxPQUFLLEVBQUUsS0FBSyxZQUFVLEVBQUUsUUFBTSxhQUFXLEVBQUUsSUFBSSxVQUFTLEVBQUUsZ0JBQWMsTUFBSSxNQUFJLEtBQUssTUFBSyxHQUFHLFlBQVUsRUFBRSxJQUFHLFlBQVc7VUFBRSxRQUFRLFFBQU0sRUFBRSxRQUFNLEVBQUUsSUFBSSxVQUFTLEVBQUUsZ0JBQWlCO0FBQXpGLFFBQTdTLEVBQXdZLEVBQUUsWUFBVSxFQUFFLEVBQUUsV0FBVyxPQUFPLEVBQUUsV0FBUyxFQUFFLE1BQU0sRUFBVztjQUFTLEVBQUUsR0FBRztVQUFJLElBQUUsRUFBRTtVQUFRLElBQUUsV0FBVyxLQUFLLEdBQUcsT0FBTyxNQUFJLEtBQUcsRUFBRSxTQUFRLENBQUMsS0FBRyxNQUFLLENBQUMsTUFBSSxLQUFHLEtBQUcsQ0FBQyxFQUFFLFFBQU0sRUFBRSxVQUFVLElBQUksUUFBTSxFQUFFLGtCQUFpQixFQUFFLG1CQUFrQixJQUFFLEVBQUUsUUFBUSxVQUFRLEVBQVc7Y0FBUyxFQUFFLEdBQUc7UUFBRSxtQkFBa0IsV0FBUyxFQUFFLFFBQU0sRUFBRSxNQUFNLFNBQVMsRUFBRSxVQUFTLEVBQVM7U0FBRyxDQUFDLEdBQUUsT0FBTyxNQUFNLElBQUUsQ0FBQztBQUFQLFFBQVMsSUFBRSxFQUFDLElBQUcsRUFBRSxNQUFJLE1BQUksS0FBSyxJQUFJLENBQUMsRUFBRSxLQUFLLFdBQVMsSUFBSTtRQUFRLElBQUUsSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUcsRUFBRSxVQUFTLEtBQUcsS0FBRztRQUFHLElBQUUsRUFBRSxPQUFPLElBQUcsRUFBRSxXQUFVLEVBQUU7UUFBTyxJQUFFLEVBQUU7UUFBRyxJQUFFLGFBQVc7YUFBTyxLQUFhO0FBQWpMO1FBQWtMLElBQUUsRUFBRSxjQUFXLGFBQVksR0FBRSxPQUFNLEdBQUUsT0FBTSxpQkFBVztlQUFPLEtBQUcsRUFBRSxRQUFNLEtBQUcsRUFBRSxVQUFRLElBQUcsRUFBRSxRQUFNLENBQUMsR0FBRSxFQUFFLE9BQUssQ0FBQyxHQUFFLEVBQUUsT0FBSyxFQUFFLE1BQUssRUFBRSxZQUFVLEtBQUcsS0FBSSxFQUFFLFdBQVMsQ0FBQyxFQUFFLFVBQVMsRUFBRSxLQUFHLEVBQUUsTUFBSSxFQUFFLElBQUcsVUFBUSxFQUFFLFNBQU8sRUFBRSxPQUFLLFNBQVEsRUFBRSxZQUFVLElBQUksRUFBRSxHQUFFLElBQUcsRUFBRSxRQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBTSxLQUFJLEVBQUUsUUFBTyxTQUFPLEVBQUUsS0FBRyx5QkFBd0IsS0FBSSxFQUFFLGdCQUFjLEtBQUksS0FBSSxFQUFFLFlBQVUsRUFBRSxFQUFFLFdBQVcsT0FBTyxFQUFFLFNBQU8sRUFBRSxNQUFNLEVBQUUsUUFBTyxFQUFFLEdBQUcsRUFBQyxPQUFNLEVBQUUsVUFBVSxTQUFRLFFBQU8sRUFBRSxVQUFVLFVBQVMsTUFBSyxFQUFFLFVBQVUsUUFBTyxNQUFLLEVBQUUsVUFBVSxRQUFPLE9BQU0sRUFBRSxVQUFVLFNBQVEsS0FBSSxFQUFFLFVBQVUsU0FBUSxHQUFHLEVBQUMsT0FBTSxFQUFFLFNBQVEsUUFBTyxFQUFFLFVBQVMsTUFBSyxFQUFFLFFBQU8sTUFBSyxFQUFFLFFBQU8sT0FBTSxFQUFFLFNBQVEsS0FBSSxFQUFFLFVBQVEsSUFBRSxFQUFFLEVBQUUsTUFBTSxXQUFXLEtBQUksRUFBRSxhQUFXLEVBQUUsUUFBTyxFQUFFLFFBQVEsU0FBUyxRQUFtQjtBQUFydEIsU0FBc3RCLFFBQU8sZ0JBQVMsR0FBRztlQUFPLElBQUUsRUFBRSxNQUFNLEtBQUssT0FBSyxFQUFFLE1BQU0sS0FBSyxNQUFJLEVBQUUsS0FBSyxLQUFLLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBTyxFQUFFLFFBQWtCO0FBQWgxQixTQUFpMUIsTUFBSyxnQkFBVztlQUFPLEVBQUUsV0FBUyxTQUFRLEVBQUUsV0FBUyxFQUFFLFFBQVEsV0FBVyxZQUFZLEVBQUUsVUFBUyxFQUFFLE1BQU0sVUFBUyxFQUFFLFlBQVksRUFBRSxPQUFPLFdBQVcsZUFBYyxZQUFXO1lBQUUsSUFBSSxNQUFJLEVBQU07QUFBdEMsV0FBdUMsRUFBOUosRUFBaUssRUFBRSxPQUFLLEVBQUUsTUFBSyxFQUFFLFdBQVMsQ0FBQyxHQUFFLEVBQUUsUUFBUSxTQUFRLEVBQUUsVUFBUSxJQUFHLEVBQUUsUUFBTSxDQUFDLEdBQUUsS0FBSztBQUE3bEMsU0FBOGxDLE1BQUssY0FBUyxHQUFHO2VBQU8sRUFBRSxPQUFLLE9BQUssU0FBUyxFQUFFLFNBQVEsRUFBRSxHQUFFLFlBQVcsQ0FBQyxlQUFjLFlBQVc7WUFBRSxNQUFNLFNBQVMsRUFBRSxTQUFRLEVBQUUsRUFBRSxNQUFNLElBQUcsVUFBUyxDQUFJO0FBQTNFLFdBQTRFLFVBQU8sQ0FBQyxNQUFJLEVBQUUsT0FBSyxDQUFDLEdBQUUsS0FBRyxFQUFFLElBQUksWUFBVyxVQUFVLElBQUksaUJBQWdCLE9BQUssTUFBSyxFQUFFLE1BQU0sR0FBRyxHQUFHLFdBQVUsR0FBRyxXQUFTLEVBQUUsS0FBRyxjQUFZLEVBQUUsSUFBRyxVQUFTLEdBQUc7Y0FBSSxJQUFFLEVBQUUsT0FBTyxLQUFHLEtBQUcsS0FBRyxZQUFVLEtBQUcsRUFBRSxTQUFPLEVBQUUsTUFBTSxNQUFJLEVBQUUsTUFBTSxXQUFlO0FBQWpJLFdBQW1JLEdBQUcsYUFBVyxFQUFFLElBQUcsVUFBUyxHQUFHO2NBQUksSUFBRSxFQUFFO2NBQVEsSUFBRSxFQUFFLFVBQVUsSUFBSTtjQUFHLElBQUUsRUFBRSxPQUFPLE1BQUksSUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFHLEtBQUcsRUFBRSxNQUFNLE1BQUksQ0FBQyxLQUFHLE1BQUksSUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUcsTUFBSSxNQUFJLE1BQUksRUFBRSxrQkFBaUIsRUFBRSxZQUFVLEVBQUUsa0JBQWlCLElBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLElBQUksSUFBRyxHQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsT0FBSyxFQUFFLE1BQU0sS0FBSyxNQUFJLEVBQUUsYUFBYSxTQUFTLEVBQUUsYUFBVyxFQUFFLElBQUksVUFBUyxFQUFFLFVBQVUsS0FBSyxXQUFvQjtBQUFoZixVQUFyRyxDQUF2SCxFQUErc0IsRUFBRSxRQUFpQjtBQUFsMkQsU0FBbTJELE9BQU0sZUFBUyxHQUFHO3FCQUFXLEVBQUUsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsb0JBQW1CLFlBQVc7WUFBRSxNQUFNLEdBQUcsZ0JBQWtCO0FBQW5ELFdBQW9ELEVBQWxHLEdBQXNHLEVBQUUsWUFBWSxFQUFFLFNBQVEsRUFBRSxHQUFFLFlBQVcsQ0FBQyxlQUFjLFlBQVc7WUFBRSxNQUFNLFlBQVksRUFBRSxTQUFPLE1BQUksRUFBRSxVQUFTLEVBQUUsRUFBRSxNQUFNLElBQUcsVUFBUyxDQUFJO0FBQTVGLFdBQTZGLElBQUcsRUFBRSxRQUFNLEVBQUUsT0FBSyxDQUFDLEdBQUUsS0FBRyxFQUFFLElBQUksWUFBVyxJQUFJLElBQUksaUJBQWdCLE9BQUssTUFBSyxFQUFFLElBQUksTUFBSSxFQUFFLEtBQUksRUFBRSxRQUFRLFlBQVk7QUFBM3RFLFNBQTR0RSxPQUFNLGVBQVMsR0FBRztlQUFPLEVBQUUsSUFBSSxTQUFRLE1BQVE7QUFBM3dFLFNBQTR3RSxLQUFJLGFBQVMsR0FBRSxHQUFFLEdBQUc7WUFBSTtZQUFFO1lBQUUsSUFBRSxFQUFFLGNBQWM7WUFBRyxJQUFFLElBQUUsSUFBRSxHQUFHLElBQUcsSUFBRSxLQUFHLEVBQUUsY0FBYyxLQUFHLElBQUUsS0FBRyxJQUFHLEdBQUc7Z0JBQUksRUFBRSxLQUFHLEdBQUcsS0FBSSxLQUFLLEdBQUU7Z0JBQUUsRUFBRSxJQUFHLEtBQUssRUFBRSxVQUFVLFNBQU8sS0FBSyxNQUFJLE1BQUksSUFBRSxPQUFNLEVBQUUsVUFBVSxJQUFJLEdBQUUsR0FBRSxLQUFJLFlBQVUsS0FBRyxXQUFTLEtBQUcsRUFBRSxJQUFJLFdBQVMsSUFBRSxLQUFHLEVBQUUsSUFBSSxHQUFFLEVBQUUsU0FBUyxRQUFRO0FBQVUsYUFBVztnQkFBTyxFQUFFLFFBQU0sSUFBRSxFQUFFLFFBQVEsT0FBUztBQUFobEYsU0FBaWxGLEtBQUksYUFBUyxHQUFFLEdBQUc7WUFBRyxJQUFFLEtBQUcsU0FBUSxRQUFNLEVBQUUsSUFBRyxPQUFPLEVBQUUsR0FBRyxJQUFHLGlCQUFlLEdBQUc7Y0FBRyxFQUFFLFNBQVEsT0FBTyxFQUFFLFFBQVEsTUFBTSxJQUFVO2FBQUcsV0FBUyxHQUFFLE9BQU8sRUFBRSxNQUFNLElBQUcsS0FBSyxFQUFFLFVBQVUsTUFBTTtjQUFHLFlBQVUsT0FBTyxHQUFHO2dCQUFJLElBQUUsRUFBRSxVQUFVLElBQUksR0FBRyxPQUFPLElBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLFFBQVEsVUFBUyxFQUFFLFdBQVUsQ0FBQyxHQUFFLE1BQU87a0JBQU8sRUFBRSxVQUFVLElBQU87QUFBQztBQUF2NUYsU0FBdzVGLElBQUcsWUFBUyxHQUFFLEdBQUUsR0FBRztZQUFJO1lBQUU7WUFBRSxJQUFFLEVBQUUsY0FBYztZQUFHLElBQUUsSUFBRSxJQUFFLEdBQUcsSUFBRyxHQUFHO2dCQUFJLEVBQUUsS0FBRyxHQUFHLEtBQUksS0FBSyxHQUFFO2dCQUFFLEVBQUUsSUFBRyxNQUFJLElBQUUsTUFBSSxJQUFHLEVBQUUsUUFBUSxLQUFHLEVBQUUsUUFBUSxNQUFJLElBQUcsRUFBRSxRQUFRLEdBQUcsS0FBSztBQUFHO2dCQUFTO0FBQTlqRyxTQUErakcsS0FBSSxlQUFXO1lBQUk7WUFBRTtZQUFFLElBQUUsVUFBVSxLQUFJLElBQUUsR0FBRSxhQUFXLEVBQUUsUUFBTyxJQUFFLFlBQVcsS0FBRyxHQUFFO2NBQUUsRUFBRSxJQUFHLEtBQUssRUFBRSxXQUFTLE9BQU8sRUFBRSxRQUFRO0FBQUcsZ0JBQVM7QUFBcHNHLFNBQXFzRyxTQUFRLGlCQUFTLEdBQUUsR0FBRztZQUFJLElBQUUsV0FBUyxHQUFHO2NBQUksSUFBRSxFQUFFLFFBQVEsVUFBUSxJQUFJLFVBQVMsR0FBRztjQUFFLEVBQUUsUUFBUSxHQUFFLEdBQUUsQ0FBSztBQUFFLFdBQXpDLENBQUg7QUFBckMsVUFBa0YsT0FBTyxFQUFFLE1BQUksSUFBRyxFQUFFLElBQUs7QUFBcDBHLFVBQXMwRyxPQUFPLElBQU07WUFBUyxFQUFFLEdBQUc7UUFBSTtRQUFFLElBQUUsV0FBVyxPQUFPLEVBQUUsZUFBYSxJQUFFLEVBQUUsYUFBYSxLQUFHLE9BQU8scUJBQW1CLElBQUUsaUJBQWlCLEdBQUcsS0FBSSxXQUFXO1lBQVMsSUFBSTtRQUFHLEVBQUUsWUFBVSxFQUFFLFVBQVMsT0FBTyxNQUFNLElBQUUsRUFBRSxpREFBaUQsU0FBUztBQUFsRSxRQUEwRSxJQUFFLEVBQUUsR0FBRyxZQUFZLEVBQUUsSUFBSSxZQUFXLGNBQWMsSUFBRSxFQUFFLDhCQUE4QixTQUFTO0FBQS9DLFFBQWtELElBQUUsRUFBRSxHQUFHLFlBQVksT0FBTyxFQUFFLFVBQVMsSUFBSTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7UUFBRyxFQUFFLGNBQWMsSUFBRyxLQUFJLElBQUksS0FBSyxHQUFFO1FBQUUsR0FBRSxHQUFFLEVBQUU7QUFBN0MsV0FBc0QsRUFBRSxHQUFFLEdBQUs7WUFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO01BQUUsYUFBYSxDQUFDLFVBQVEsSUFBRSxLQUFHLFdBQVMsR0FBSztZQUFTLEVBQUUsR0FBRSxHQUFHO01BQUUsY0FBYyxPQUFLLElBQUUsRUFBQyxXQUFVLE1BQUksSUFBRSxHQUFHLEtBQUksSUFBSSxLQUFLLEdBQUc7VUFBSSxJQUFFLENBQUMsVUFBUSxJQUFFLEtBQUcsV0FBUztVQUFFLElBQUUsRUFBRSxHQUFHLEtBQUcsUUFBTSxJQUFFLEtBQUcsSUFBRSxPQUFLLEVBQUUsS0FBTztZQUFTO1lBQVMsSUFBSTtRQUFJO2FBQU8sU0FBdUI7QUFBbEMsTUFBa0MsT0FBTSxHQUFJLENBQUM7T0FBSSxJQUFFLEVBQUU7TUFBUSxJQUFFLEVBQUU7TUFBVSxJQUFFLEVBQUUsU0FBUywwQkFBMEIsVUFBUSxVQUFTLEdBQUc7V0FBTyxJQUFFLEtBQUcsVUFBUyxFQUFDLFFBQU8sR0FBRSxRQUFPLElBQUUsWUFBVyxTQUFRLElBQUUsYUFBWSxPQUFNLElBQUUsV0FBVSxRQUFPLElBQUUsbUJBQWtCLFFBQU8sSUFBRSxtQkFBa0IsUUFBTyxJQUFFLFlBQVcsT0FBTSxJQUFFLFdBQVUsTUFBSyxJQUFFLFVBQVMsS0FBSSxJQUFXO0FBQTVPLEtBQTZPLEVBQUUsTUFBRyxPQUFNLGVBQVMsR0FBRztXQUFJLElBQUksR0FBRSxJQUFFLElBQUcsSUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUksSUFBRyxLQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSSxHQUFFLENBQUMsS0FBSSxLQUFHLEVBQUUsR0FBRTtZQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBSyxHQUFFLENBQUMsS0FBSSxLQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBSyxFQUFFLElBQUcsRUFBRSxJQUFHLEVBQUU7QUFBSSxjQUFTO0FBQXBLLE9BQXFLLE1BQUssY0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFHO2FBQU8sS0FBRyxJQUFFLEVBQUUsUUFBUSxLQUFHLEVBQUUsS0FBSyxNQUFJLEdBQUUsSUFBRSxJQUFFLGFBQVcsSUFBRSxNQUFJLElBQUcsSUFBRSxJQUFFLE1BQUksSUFBRSxJQUFHLE1BQUksSUFBRSxJQUFFLElBQUUsTUFBSSxJQUFFLE9BQUssSUFBRSxPQUFRO0FBQXRTLE9BQXVTLE1BQUssY0FBUyxHQUFHO2FBQU0sQ0FBQyxJQUFFLEtBQUcsTUFBSSxNQUFNO0FBQTlVLE9BQStVLFNBQVEsaUJBQVMsR0FBRSxHQUFFLEdBQUc7YUFBTSxjQUFZLE9BQU8sSUFBRSxFQUFFLE1BQU0sR0FBRSxLQUFHLE1BQU07QUFBclosT0FBc1osUUFBTyxnQkFBUyxHQUFHO0FBQU0sbUJBQUssS0FBSyxFQUFFLE1BQUksSUFBSTs7QUFBbmMsT0FBb2MsUUFBTyxnQkFBUyxHQUFHO2FBQU0sR0FBRyxTQUFTLEtBQUssR0FBRyxRQUFRLFVBQVEsQ0FBQyxLQUFHLEtBQUssVUFBVSxFQUFhO0FBQWppQixPQUFraUIsV0FBVSxtQkFBUyxHQUFHO2FBQU0sR0FBRyxTQUFTLEtBQUssR0FBRyxRQUFRLFlBQVUsQ0FBQyxLQUFHLElBQUUsTUFBTTtBQUFobkIsT0FBaW5CLFVBQVMsS0FBRyxFQUFFLFNBQU8sVUFBUyxHQUFFLEdBQUc7TUFBRSxHQUFHLEtBQUcsVUFBUyxHQUFFLEdBQUc7VUFBSSxJQUFFLEtBQUssS0FBSyxVQUFTLFlBQVUsSUFBRSxJQUFFLEtBQUcsWUFBVSxPQUFPLElBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFHLEdBQUUsQ0FBQyxXQUFTLEtBQUssWUFBVztZQUFJLElBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFJLElBQUksRUFBRSxNQUFLLEdBQUUsR0FBSztBQUFFLE9BQWxFLENBQWxFO0FBQXpDLE9BQThLLEVBQUUsR0FBRyxHQUFHLFdBQVMsRUFBVztBQUEva0MsS0FBa2xDLENBQXpsQztBQUE5Z04sY0FBa25QLEdBQUc7T0FBa0MsR0FBSSxpQ0FBTyxDQUFDLDRCQUFTLDREQUFVO0FBQUE7QUFBQTtBQUFBLHVHQUFHLG9CQUFpQiwwRUFBUSxPQUFPLFVBQVEsRUFBRSx3QkFBdUIscUJBQW1CLEVBQUUsUUFBZTtBQUFyTCxFQUFzTCxVQUFTLEdBQUUsR0FBRztXQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRTtRQUFLLElBQUUsRUFBRSxNQUFNO1FBQUcsSUFBRSxFQUFFO1FBQU0sSUFBRSxFQUFFLE1BQU0sS0FBSztRQUFTLElBQUUsS0FBRztRQUFFLElBQUUsSUFBRSxFQUFFLGVBQWEsRUFBRTtRQUFPLElBQUUsYUFBVzthQUFPLEVBQUUsZUFBYSxTQUFPLEVBQUUsYUFBYSxZQUFVLFNBQU8saUJBQWlCLEVBQUUsTUFBTSxJQUFjO0FBQTlNLE1BQStNLEVBQUUsV0FBUyxHQUFFLEVBQUUsUUFBTSxFQUFFLE9BQU0sRUFBRSxRQUFNLEVBQUMsS0FBSSxrQkFBaUIsS0FBSSxrQkFBaUIsS0FBSSxjQUFhLFFBQU8seUJBQXdCLFdBQVUsa0NBQWlDLE1BQUssaUNBQWdDLFNBQVEsY0FBYSxRQUFPLGNBQVksRUFBRSxPQUFLLElBQUcsRUFBRSxLQUFLLFFBQU0sTUFBSyxFQUFFLEtBQUssVUFBUSxDQUFDLEVBQUUsV0FBUyxJQUFJLE1BQU0sSUFBRyxFQUFFLEtBQUssU0FBTyxXQUFVLEdBQUc7YUFBTyxFQUFFLE9BQUssQ0FBQyxJQUFFLEVBQUUsVUFBUSxDQUFHO0FBQTFDLE1BQTJDLEVBQUUsS0FBSyxVQUFTLEVBQUUsSUFBSSxPQUFNLEVBQUUsS0FBSyxJQUFJLE9BQU0sRUFBRSxLQUFLLElBQUksUUFBTyxJQUFFLEVBQUUsSUFBSSxVQUFTLEdBQUUsRUFBQyxRQUFPLE9BQUksRUFBRSxJQUFJLFVBQVMsTUFBTSxJQUFJLGFBQVksRUFBRSxLQUFLLE1BQUssRUFBRSxRQUFLLElBQUcsR0FBRSxJQUFHLENBQUMsR0FBRSxJQUFHLGFBQVc7ZUFBTyxNQUFJLENBQUMsSUFBSTtBQUExQyxTQUEyQyxJQUFHLGFBQVc7ZUFBTyxNQUFJLElBQUUsQ0FBRztBQUF6RSxTQUEwRSxJQUFHLFlBQVMsR0FBRztZQUFJLElBQUUsRUFBRSxLQUFLO1lBQVUsSUFBRSxJQUFJLEtBQUssRUFBRSxNQUFLLEVBQUUsT0FBTSxFQUFFLE9BQUssR0FBRyxFQUFFLElBQUksYUFBWSxHQUFFLEVBQUMsVUFBUyxNQUFJLEtBQWM7QUFBcE0sYUFBd00sR0FBRyxVQUFTLFlBQVc7UUFBRSxNQUFNLEtBQUssTUFBSSxFQUFFLE1BQU0sYUFBYSxHQUFHLFVBQVMsWUFBVztZQUFJLElBQUUsS0FBSyxNQUFNLE1BQUksRUFBRSxJQUFJLGFBQVksQ0FBQyxFQUFFLElBQUksUUFBUSxNQUFLLEdBQUUsRUFBRSxJQUFJLGFBQWEsUUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFJLEVBQUUsTUFBTSxhQUFhLFFBQWtCO0FBQTVNLFlBQWdOLE1BQU0sS0FBSyxNQUFJLEVBQUUsTUFBTSxZQUFZLEdBQUcsVUFBUyxZQUFXO1lBQUksSUFBRSxLQUFLLE1BQU0sTUFBSSxFQUFFLElBQUksYUFBWSxDQUFDLEdBQUUsRUFBRSxJQUFJLFFBQVEsT0FBTSxFQUFFLElBQUksYUFBYSxRQUFPLEVBQUUsTUFBTSxLQUFLLE1BQUksRUFBRSxNQUFNLFlBQVksUUFBa0I7QUFBRSxPQUE3TTtBQUF2TyxPQUFxYixHQUFHLEdBQUcsUUFBTyxZQUFXO1VBQUksSUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksWUFBVSxJQUFFLFdBQVMsRUFBRSxNQUFNLGNBQVksTUFBSyxFQUFFLE1BQU0sS0FBSyxXQUFTLElBQUUsWUFBWSxLQUFLLFlBQVcsQ0FBSTtBQUE3a0IsT0FBOGtCLEdBQUcsR0FBRyxTQUFRLFlBQVc7UUFBRSxNQUFNLEtBQUssa0JBQWtCLEtBQUssWUFBVyxDQUFJO0FBQTFwQixPQUE4cEI7T0FBSSxJQUFFO01BQUUsSUFBRTtNQUFFLElBQUUsRUFBRSxJQUFJLFVBQVUsTUFBSSxVQUFTLEdBQUUsR0FBRSxHQUFHO1FBQUksSUFBRTtRQUFLLElBQUUsRUFBRSxLQUFLLE9BQU8sU0FBTyxLQUFHLFdBQVMsTUFBSSxJQUFFLFdBQVUsRUFBRSxLQUFHLEdBQUUsUUFBTSxZQUFVLElBQUUsWUFBVSxVQUFRLElBQUUsV0FBUyxPQUFLLE1BQU0sR0FBRyxNQUFNLEtBQUssSUFBSSxVQUFTLEdBQUc7YUFBTyxJQUFFLEVBQUUsR0FBRyxHQUFFLEdBQUs7QUFBM0QsT0FBNkQsS0FBM0csRUFBaUgsWUFBVSxJQUFFLEVBQUUsSUFBSSxhQUFZLEVBQUUsUUFBTyxLQUFHLGVBQWEsSUFBRSxFQUFFLElBQUksUUFBTyxFQUFFLFdBQVUsS0FBRyxFQUFFLE1BQU0sdUNBQXFDLEVBQUUsVUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFTLEVBQUUsSUFBSSxVQUFTLEVBQUUsUUFBTyxJQUNqMytCLEVBQUUsYUFBVyxFQUFFLFNBQVMsRUFBRSxjQUFZLEVBQUUsSUFBSSxhQUFZLEVBQUUsV0FBVSxLQUFPO0FBRGs1OUIsS0FDajU5QixFQUFFLFVBQVUsTUFBSSxVQUFTLEdBQUc7V0FBTyxLQUFLLEtBQVE7QUFEaTI5QixLQUNoMjlCLEVBQUUsVUFBVSxTQUFPLFVBQVMsR0FBRSxHQUFFLEdBQUc7UUFBSTtRQUFFLElBQUUsS0FBSyxPQUFPLElBQUUsS0FBSyxNQUFJLElBQUUsSUFBRSxHQUFFLEtBQUcsRUFBRSxJQUFFLE1BQUksS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFLEVBQUUsY0FBYyxNQUFJLEVBQUUsVUFBVSxFQUFFLFFBQU0sSUFBRSxFQUFFLE1BQUksRUFBRSxRQUFRLE1BQUksSUFBRSxJQUFJLEtBQUssRUFBRSxJQUFHLEVBQUUsSUFBRyxFQUFFLEtBQUksSUFBRSxFQUFFLE9BQU8sS0FBRyxJQUFFLEVBQUUsU0FBUyxPQUFLLElBQUUsRUFBRSxVQUFVLE1BQUksRUFBRSxPQUFPLEtBQUcsRUFBRSxVQUFVLElBQUksS0FBSyxJQUFHLEtBQUcsRUFBRSxJQUFJLEdBQUUsR0FBRSxJQUFHLEVBQUMsTUFBSyxLQUFHLEVBQUUsZUFBYyxPQUFNLEtBQUcsRUFBRSxZQUFXLE1BQUssS0FBRyxFQUFFLFdBQVUsS0FBSSxLQUFHLEVBQUUsVUFBUyxLQUFJLEtBQUcsR0FBRSxNQUFLLEtBQUcsRUFBYTtBQURnOThCLEtBQy84OEIsRUFBRSxVQUFVLGNBQVksVUFBUyxHQUFFLEdBQUc7UUFBSSxJQUFFO1FBQUssSUFBRSxXQUFTLEdBQUc7YUFBTyxNQUFJLENBQUMsS0FBRyxFQUFFLFFBQVEsTUFBSSxFQUFFLE9BQU8sS0FBRyxFQUFFLE9BQU8sS0FBSztBQUFoRixNQUFpRixPQUFPLEVBQUUsVUFBVSxPQUFLLElBQUUsRUFBRSxLQUFJLEVBQUUsVUFBVSxPQUFLLElBQUUsRUFBRSxLQUFJLEVBQUUsVUFBVSxNQUFJLEVBQUUsY0FBYyxLQUFHLElBQUUsQ0FBQyxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsT0FBSyxLQUFHLEVBQUUsVUFBVSxNQUFJLEVBQUUsY0FBYyxPQUFLLElBQUUsQ0FBQyxFQUFFLE1BQUssRUFBRSxPQUFNLEVBQUUsT0FBSyxLQUFJLEVBQUMsTUFBSyxFQUFFLElBQUcsSUFBRyxFQUFNO0FBRDBvOEIsS0FDem84QixFQUFFLFVBQVUsY0FBWSxVQUFTLEdBQUUsR0FBRztXQUFPLElBQUUsS0FBSyxZQUFZLEVBQUUsTUFBSyxFQUFFLEtBQUksRUFBRSxRQUFNLEVBQUUsS0FBSyxRQUFNLEVBQUUsUUFBTSxFQUFFLEdBQVE7QUFEcWg4QixLQUNwaDhCLEVBQUUsVUFBVSxnQkFBYyxVQUFTLEdBQUUsR0FBRztRQUFJLElBQUUsS0FBSyxPQUFPLElBQUUsRUFBRSxZQUFZLEVBQUUsTUFBSyxFQUFFLEtBQUksSUFBRSxFQUFFLFlBQVksRUFBRSxNQUFLLEVBQUUsS0FBSSxFQUFFLFlBQVksR0FBRSxFQUFFLFNBQU8sRUFBRSxZQUFZLEdBQUUsRUFBRSxPQUFLLEVBQUUsWUFBWSxHQUFFLEVBQUUsU0FBTyxFQUFFLFlBQVksR0FBRSxFQUFNO0FBRGkwN0IsS0FDaDA3QixFQUFFLFVBQVUsTUFBSSxVQUFTLEdBQUUsR0FBRSxHQUFHO1dBQU8sSUFBRSxJQUFJLFFBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxRQUFRLEVBQUUsWUFBVSxFQUFFLE1BQUssS0FBSyxVQUFVLEdBQUs7QUFEbXQ3QixLQUNsdDdCLEVBQUUsVUFBVSxXQUFTLFVBQVMsR0FBRSxHQUFFLEdBQUc7UUFBSTtRQUFFO1FBQUU7UUFBRTtRQUFFLElBQUUsRUFBRSxRQUFRO1FBQUcsSUFBRSxFQUFFLGNBQWM7UUFBRyxJQUFFLEtBQUssS0FBSyxLQUFLLElBQUcsS0FBRyxHQUFHO1dBQUksS0FBRyxJQUFFLEVBQUUsTUFBSyxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsU0FBTyxJQUFFLENBQUMsRUFBRSxJQUFHLElBQUUsQ0FBQyxFQUFFLElBQUcsSUFBRSxDQUFDLEVBQUUsS0FBSSxLQUFHLEVBQUUsT0FBSyxLQUFHLEVBQUUsVUFBUSxNQUFJLElBQUUsRUFBRSxNQUFLLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBSSxLQUFLLEdBQUUsS0FBRyxLQUFHLEVBQUUsTUFBSSxFQUFFLE1BQUksSUFBRyxJQUFHLElBQUUsRUFBRSxlQUFjLElBQUUsRUFBRSxZQUFXLElBQUksS0FBSyxHQUFFLEdBQUUsR0FBRyxlQUFhLElBQUc7YUFBRztBQUFFLFdBQUUsQ0FBQyxHQUFFLEdBQUs7WUFBUztBQUR3MzZCLEtBQ3YzNkIsRUFBRSxVQUFVLFlBQVUsVUFBUyxHQUFHO1dBQU8sRUFBRSxTQUFTLEdBQUUsR0FBRSxHQUFFLElBQUs7QUFEd3o2QixLQUN2ejZCLEVBQUUsVUFBVSxVQUFRLFVBQVMsR0FBRSxHQUFHO1FBQUksSUFBRSxLQUFLLE9BQU8sSUFBRSxZQUFVLE9BQU8sSUFBRSxJQUFFLEVBQUUsTUFBTSxHQUFFLEtBQUcsRUFBRSxVQUFVLE9BQUssSUFBRSxFQUFFLElBQUksR0FBRSxHQUFFLEVBQUMsS0FBSSxRQUFLLElBQUUsU0FBTyxJQUFFLEVBQUUsSUFBRSxLQUFHLElBQUUsR0FBSTtBQURncTZCLEtBQy9wNkIsRUFBRSxVQUFVLFVBQVEsVUFBUyxHQUFFLEdBQUc7V0FBTyxLQUFLLE9BQU8sQ0FBQyxFQUFFLE1BQUssRUFBRSxPQUFVO0FBRHNsNkIsS0FDcmw2QixFQUFFLFVBQVUsV0FBUyxVQUFTLEdBQUUsR0FBRSxHQUFHO1FBQUk7UUFBRTtRQUFFO1FBQUU7UUFBRSxJQUFFO1FBQUssSUFBRTtRQUFFLElBQUUsS0FBRyxFQUFFLFdBQVMsRUFBRSxXQUFTO1FBQUUsSUFBRSxFQUFFLEtBQUssV0FBUyxDQUFDO1FBQUUsSUFBRSxFQUFFLEtBQUs7UUFBSSxJQUFFLEVBQUUsS0FBSztRQUFJLElBQUUsT0FBSyxLQUFLLFFBQVEsT0FBTyxVQUFTLEdBQUc7VUFBRyxFQUFFLFFBQVEsSUFBSTtZQUFJLElBQUUsRUFBRSxPQUFPLEdBQUcsS0FBSyxJQUFFLEVBQUUsT0FBSyxJQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsU0FBTyxJQUFFLENBQUk7Y0FBTyxFQUFFLFVBQWE7QUFBL0gsT0FBaUksT0FBTyxJQUFHLENBQUMsQ0FBQyxLQUFHLENBQUMsRUFBRSxTQUFPLENBQUMsS0FBRyxFQUFFLFNBQVMsTUFBSSxLQUFHLEVBQUUsU0FBUyxPQUFLLEtBQUcsS0FBRyxNQUFJLENBQUMsTUFBSSxFQUFFLFFBQU0sRUFBRSxRQUFNLEVBQUUsUUFBTSxFQUFFLFFBQU8sS0FBSSxLQUFHLENBQUMsTUFBSSxDQUFDLEtBQUcsSUFBRSxLQUFHLENBQUMsS0FBRyxJQUFFLE9BQUssS0FBRyxDQUFDLElBQUcsRUFBRSxTQUFTLE9BQUssS0FBSyxJQUFJLEtBQUcsTUFBSSxFQUFFLFFBQU0sRUFBRSxTQUFPLEVBQUUsUUFBTSxFQUFFLFdBQVMsSUFBRSxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsQ0FBQyxJQUFHLEVBQUUsUUFBTSxFQUFFLFFBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFLLEVBQUUsT0FBTSxFQUFFLFFBQU0sRUFBRSxTQUFPLEVBQUUsT0FBSyxJQUFFLENBQUMsUUFBTSxFQUFFLFFBQU0sRUFBRSxTQUFPLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFLLEVBQUUsT0FBTSxFQUFFLFFBQU0sRUFBRSxTQUFPLEVBQUUsT0FBSyxJQUFFLE9BQU0sQ0FBQyxLQUFHLENBQUMsS0FBSTtVQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsTUFBSyxFQUFFLE9BQU0sRUFBRSxPQUFLO0FBQUksWUFBUztBQUQwMzRCLEtBQ3ozNEIsRUFBRSxVQUFVLFdBQVMsVUFBUyxHQUFHO1FBQUksSUFBRTtRQUFLLE1BQUksS0FBSyxRQUFRLE9BQU8sVUFBUyxHQUFHO2FBQU8sRUFBRSxVQUFVLEtBQUcsRUFBRSxRQUFNLENBQUMsRUFBRSxTQUFTLFdBQVMsSUFBRSxJQUFFLEtBQUcsSUFBRSxFQUFFLFFBQVEsTUFBSSxFQUFFLE9BQU8sS0FBRyxFQUFFLFNBQU8sRUFBRSxPQUFPLEdBQUcsT0FBSyxFQUFFLGNBQWMsS0FBRyxFQUFF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QUE7a0NBQUE7QUFBQTs7ZUFBQTtBQStCWDtBQS9CVzs7b0JBK0JFLE9BQU87MENBQUE7O3dJQUdsQjs7WUFBSyxTQUFTLDRCQUFXLE1BQUssTUFBTSxTQUFTLE1BQUssTUFBTTs7YUFFekQ7QUFwQ1U7OztXQUFBOytCQXdDVDsrQkFDTyw2Q0FBZSxRQUFRLEtBQUs7c0JBQTdCO3dCQUNRO0FBRFI7U0FBQSxnQ0FDUyxzQ0FBYyxLQUFLOztzQkFBcEI7d0JBSWY7QUFKZTtBQUFBO0FBMUNMO0FBQUE7O1dBQUE7SUFDQyxnQkFBTTtBQUR0QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTzs7OztBQUdQOzs7Ozs7OzBDQUF3QixVQUFDLE9BQUQ7K0JBQ3JCLCtCQUFJLE1BQU07a0NBQVg7b0NBQ1E7QUFEUjtTQUFBLGtCQUNROztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsV0FDQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBO0FBSEssRyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsU3RhdGUoc3RhdGUpe1xuICAgIGNvbnNvbGUubG9nKFwiSEFWRSBTVEFURVwiKVxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHdpbmRvdy4kID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbiAgICByZXF1aXJlKFwiLi4vc3RhdGljL21hdGVyaWFsaXplLm1pbi5qc1wiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZGFya2VuLTJcIj5cbiAgICAgICAgey8qIGlmKHByb2Nlc3MuV2luZG93KXtcbiAgICAgICAgICB2YXIgdGhpbmcgPSBjcmVhdGVGcmFnbWVudCg8TG9hZGVyIHN0eWxlPXt7ZGlzcGxheTogZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gXCJub25lXCIgOiBcImJsb2NrXCJ9fS8+KSAqL31cblxuXG4gICAgICAgICAgPEhlYWRlciBwYXRobmFtZT17dGhpcy5wcm9wcy5kYXRhLnVybC5wYXRobmFtZX0gdXNlcm5hbWU9e3RoaXMucHJvcHMuZGF0YS51c2VybmFtZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlcm5hbWVGaWVsZCBmcm9tICcuL3VzZXJuYW1lRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMgIT0gbmV4dFByb3BzO1xuICAvLyB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPVwiYmx1ZSBkYXJrZW4tMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyByaWdodFwiPlxuICAgICAgICAgIDxVc2VybmFtZUZpZWxkIHVzZXJuYW1lPXt0aGlzLnByb3BzLnVzZXJuYW1lfSAvPjwvZGl2PlxuICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJsZWZ0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSA9PT0gJy8nICYmICdhY3RpdmUnfT5cbiAgICAgICAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgICAgICAgIFx0XHRcdDxhID5Ib21lIDwvYT5cbiAgICAgICAgICBcdFx0XHQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9kaXNjb3ZlcicgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvZGlzY292ZXInPlxuICAgICAgICAgICAgICA8YSA+RGlzY292ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9jcmVhdGUnICYmICdhY3RpdmUnfT5cbiAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nL2NyZWF0ZSc+XG4gICAgICAgICAgICAgIDxhID5DcmVhdGUgYSBQb3N0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj4pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcm5hbWVGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudXNlcm5hbWUpe1xuICAgICAgICAgIHJldHVybiAoPGg0PldlbGNvbWUsIHt0aGlzLnByb3BzLnVzZXJuYW1lfS48L2g0PilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHByZWZpeFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpY29uX3ByZWZpeFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsID5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91c2VybmFtZUZpZWxkLmpzIiwiLyohXG4gKiBNYXRlcmlhbGl6ZSB2MC45OC4yIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBNYXRlcmlhbGl6ZVxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxuICovXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXt2YXIgalF1ZXJ5O2pRdWVyeT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlPyQ9cmVxdWlyZShcImpxdWVyeVwiKTokfWpRdWVyeS5lYXNpbmcuanN3aW5nPWpRdWVyeS5lYXNpbmcuc3dpbmcsalF1ZXJ5LmV4dGVuZChqUXVlcnkuZWFzaW5nLHtkZWY6XCJlYXNlT3V0UXVhZFwiLHN3aW5nOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGpRdWVyeS5lYXNpbmdbalF1ZXJ5LmVhc2luZy5kZWZdKGEsYixjLGQsZSl9LGVhc2VJblF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYitjfSxlYXNlT3V0UXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihiLz1lKSooYi0yKStjfSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6LWQvMiooLS1iKihiLTIpLTEpK2N9LGVhc2VJbkN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYitjfSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooKGI9Yi9lLTEpKmIqYisxKStjfSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiK2M6ZC8yKigoYi09MikqYipiKzIpK2N9LGVhc2VJblF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiK2N9LGVhc2VPdXRRdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKigoYj1iL2UtMSkqYipiKmItMSkrY30sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYipiK2M6LWQvMiooKGItPTIpKmIqYipiLTIpK2N9LGVhc2VJblF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiKmIrY30sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKChiPWIvZS0xKSpiKmIqYipiKzEpK2N9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIqYipiK2M6ZC8yKigoYi09MikqYipiKmIqYisyKStjfSxlYXNlSW5TaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqTWF0aC5jb3MoYi9lKihNYXRoLlBJLzIpKStkK2N9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqTWF0aC5zaW4oYi9lKihNYXRoLlBJLzIpKStjfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQvMiooTWF0aC5jb3MoTWF0aC5QSSpiL2UpLTEpK2N9LGVhc2VJbkV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gMD09Yj9jOmQqTWF0aC5wb3coMiwxMCooYi9lLTEpKStjfSxlYXNlT3V0RXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiPT1lP2MrZDpkKigtTWF0aC5wb3coMiwtMTAqYi9lKSsxKStjfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIDA9PWI/YzpiPT1lP2MrZDooYi89ZS8yKTwxP2QvMipNYXRoLnBvdygyLDEwKihiLTEpKStjOmQvMiooLU1hdGgucG93KDIsLTEwKi0tYikrMikrY30sZWFzZUluQ2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihNYXRoLnNxcnQoMS0oYi89ZSkqYiktMSkrY30sZWFzZU91dENpcmM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCpNYXRoLnNxcnQoMS0oYj1iL2UtMSkqYikrY30sZWFzZUluT3V0Q2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/LWQvMiooTWF0aC5zcXJ0KDEtYipiKS0xKStjOmQvMiooTWF0aC5zcXJ0KDEtKGItPTIpKmIpKzEpK2N9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigxPT0oYi89ZSkpcmV0dXJuIGMrZDtpZihnfHwoZz0uMyplKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4tKGgqTWF0aC5wb3coMiwxMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykpK2N9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9MS43MDE1OCxnPTAsaD1kO2lmKDA9PWIpcmV0dXJuIGM7aWYoMT09KGIvPWUpKXJldHVybiBjK2Q7aWYoZ3x8KGc9LjMqZSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuIGgqTWF0aC5wb3coMiwtMTAqYikqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKStkK2N9LGVhc2VJbk91dEVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigyPT0oYi89ZS8yKSlyZXR1cm4gYytkO2lmKGd8fChnPWUqKC4zKjEuNSkpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybiBiPDE/LS41KihoKk1hdGgucG93KDIsMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKStjOmgqTWF0aC5wb3coMiwtMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKi41K2QrY30sZWFzZUluQmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooYi89ZSkqYiooKGYrMSkqYi1mKStjfSxlYXNlT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooKGI9Yi9lLTEpKmIqKChmKzEpKmIrZikrMSkrY30sZWFzZUluT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksKGIvPWUvMik8MT9kLzIqKGIqYiooKChmKj0xLjUyNSkrMSkqYi1mKSkrYzpkLzIqKChiLT0yKSpiKigoKGYqPTEuNTI1KSsxKSpiK2YpKzIpK2N9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkLWpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShhLGUtYiwwLGQsZSkrY30sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lKTwxLzIuNzU/ZCooNy41NjI1KmIqYikrYzpiPDIvMi43NT9kKig3LjU2MjUqKGItPTEuNS8yLjc1KSpiKy43NSkrYzpiPDIuNS8yLjc1P2QqKDcuNTYyNSooYi09Mi4yNS8yLjc1KSpiKy45Mzc1KStjOmQqKDcuNTYyNSooYi09Mi42MjUvMi43NSkqYisuOTg0Mzc1KStjfSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gYjxlLzI/LjUqalF1ZXJ5LmVhc2luZy5lYXNlSW5Cb3VuY2UoYSwyKmIsMCxkLGUpK2M6LjUqalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGEsMipiLWUsMCxkLGUpKy41KmQrY319KSxqUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcse2Vhc2VJbk91dE1hdGVyaWFsOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6ZC80KigoYi09MikqYipiKzIpK2N9fSksalF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBiPWEubGVuZ3RoLGQ9Yy50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWQmJiFjLmlzV2luZG93KGEpJiYoISgxIT09YS5ub2RlVHlwZXx8IWIpfHwoXCJhcnJheVwiPT09ZHx8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKSl9aWYoIWEualF1ZXJ5KXt2YXIgYz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgYy5mbi5pbml0KGEsYil9O2MuaXNXaW5kb3c9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PWEud2luZG93fSxjLnR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2VbZy5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sYy5pc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiYXJyYXlcIj09PWMudHlwZShhKX0sYy5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKGEpe3ZhciBiO2lmKCFhfHxcIm9iamVjdFwiIT09Yy50eXBlKGEpfHxhLm5vZGVUeXBlfHxjLmlzV2luZG93KGEpKXJldHVybiExO3RyeXtpZihhLmNvbnN0cnVjdG9yJiYhZi5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWYuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goZCl7cmV0dXJuITF9Zm9yKGIgaW4gYSk7cmV0dXJuIHZvaWQgMD09PWJ8fGYuY2FsbChhLGIpfSxjLmVhY2g9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9MCxnPWEubGVuZ3RoLGg9YihhKTtpZihkKXtpZihoKWZvcig7Zz5mJiYoZT1jLmFwcGx5KGFbZl0sZCksZSE9PSExKTtmKyspO2Vsc2UgZm9yKGYgaW4gYSlpZihlPWMuYXBwbHkoYVtmXSxkKSxlPT09ITEpYnJlYWt9ZWxzZSBpZihoKWZvcig7Zz5mJiYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGUhPT0hMSk7ZisrKTtlbHNlIGZvcihmIGluIGEpaWYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGU9PT0hMSlicmVhaztyZXR1cm4gYX0sYy5kYXRhPWZ1bmN0aW9uKGEsYixlKXtpZih2b2lkIDA9PT1lKXt2YXIgZj1hW2MuZXhwYW5kb10sZz1mJiZkW2ZdO2lmKHZvaWQgMD09PWIpcmV0dXJuIGc7aWYoZyYmYiBpbiBnKXJldHVybiBnW2JdfWVsc2UgaWYodm9pZCAwIT09Yil7dmFyIGY9YVtjLmV4cGFuZG9dfHwoYVtjLmV4cGFuZG9dPSsrYy51dWlkKTtyZXR1cm4gZFtmXT1kW2ZdfHx7fSxkW2ZdW2JdPWUsZX19LGMucmVtb3ZlRGF0YT1mdW5jdGlvbihhLGIpe3ZhciBlPWFbYy5leHBhbmRvXSxmPWUmJmRbZV07ZiYmYy5lYWNoKGIsZnVuY3Rpb24oYSxiKXtkZWxldGUgZltiXX0pfSxjLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsZCxlLGYsZyxoPWFyZ3VtZW50c1swXXx8e30saT0xLGo9YXJndW1lbnRzLmxlbmd0aCxrPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGgmJihrPWgsaD1hcmd1bWVudHNbaV18fHt9LGkrKyksXCJvYmplY3RcIiE9dHlwZW9mIGgmJlwiZnVuY3Rpb25cIiE9PWMudHlwZShoKSYmKGg9e30pLGk9PT1qJiYoaD10aGlzLGktLSk7aj5pO2krKylpZihudWxsIT0oZj1hcmd1bWVudHNbaV0pKWZvcihlIGluIGYpYT1oW2VdLGQ9ZltlXSxoIT09ZCYmKGsmJmQmJihjLmlzUGxhaW5PYmplY3QoZCl8fChiPWMuaXNBcnJheShkKSkpPyhiPyhiPSExLGc9YSYmYy5pc0FycmF5KGEpP2E6W10pOmc9YSYmYy5pc1BsYWluT2JqZWN0KGEpP2E6e30saFtlXT1jLmV4dGVuZChrLGcsZCkpOnZvaWQgMCE9PWQmJihoW2VdPWQpKTtyZXR1cm4gaH0sYy5xdWV1ZT1mdW5jdGlvbihhLGQsZSl7ZnVuY3Rpb24gZihhLGMpe3ZhciBkPWN8fFtdO3JldHVybiBudWxsIT1hJiYoYihPYmplY3QoYSkpPyFmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kOylhW2UrK109YltkKytdO2lmKGMhPT1jKWZvcig7dm9pZCAwIT09YltkXTspYVtlKytdPWJbZCsrXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfShkLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpbXS5wdXNoLmNhbGwoZCxhKSksZH1pZihhKXtkPShkfHxcImZ4XCIpK1wicXVldWVcIjt2YXIgZz1jLmRhdGEoYSxkKTtyZXR1cm4gZT8oIWd8fGMuaXNBcnJheShlKT9nPWMuZGF0YShhLGQsZihlKSk6Zy5wdXNoKGUpLGcpOmd8fFtdfX0sYy5kZXF1ZXVlPWZ1bmN0aW9uKGEsYil7Yy5lYWNoKGEubm9kZVR5cGU/W2FdOmEsZnVuY3Rpb24oYSxkKXtiPWJ8fFwiZnhcIjt2YXIgZT1jLnF1ZXVlKGQsYiksZj1lLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCI9PT1mJiYoZj1lLnNoaWZ0KCkpLGYmJihcImZ4XCI9PT1iJiZlLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGYuY2FsbChkLGZ1bmN0aW9uKCl7Yy5kZXF1ZXVlKGQsYil9KSl9KX0sYy5mbj1jLnByb3RvdHlwZT17aW5pdDpmdW5jdGlvbihhKXtpZihhLm5vZGVUeXBlKXJldHVybiB0aGlzWzBdPWEsdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIil9LG9mZnNldDpmdW5jdGlvbigpe3ZhciBiPXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3RoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3RvcDowLGxlZnQ6MH07cmV0dXJue3RvcDpiLnRvcCsoYS5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsVG9wfHwwKS0oZG9jdW1lbnQuY2xpZW50VG9wfHwwKSxsZWZ0OmIubGVmdCsoYS5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsTGVmdHx8MCktKGRvY3VtZW50LmNsaWVudExlZnR8fDApfX0scG9zaXRpb246ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Zm9yKHZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxkb2N1bWVudDthJiZcImh0bWxcIj09PSFhLm5vZGVUeXBlLnRvTG93ZXJDYXNlJiZcInN0YXRpY1wiPT09YS5zdHlsZS5wb3NpdGlvbjspYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8ZG9jdW1lbnR9dmFyIGI9dGhpc1swXSxhPWEuYXBwbHkoYiksZD10aGlzLm9mZnNldCgpLGU9L14oPzpib2R5fGh0bWwpJC9pLnRlc3QoYS5ub2RlTmFtZSk/e3RvcDowLGxlZnQ6MH06YyhhKS5vZmZzZXQoKTtyZXR1cm4gZC50b3AtPXBhcnNlRmxvYXQoYi5zdHlsZS5tYXJnaW5Ub3ApfHwwLGQubGVmdC09cGFyc2VGbG9hdChiLnN0eWxlLm1hcmdpbkxlZnQpfHwwLGEuc3R5bGUmJihlLnRvcCs9cGFyc2VGbG9hdChhLnN0eWxlLmJvcmRlclRvcFdpZHRoKXx8MCxlLmxlZnQrPXBhcnNlRmxvYXQoYS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpfHwwKSx7dG9wOmQudG9wLWUudG9wLGxlZnQ6ZC5sZWZ0LWUubGVmdH19fTt2YXIgZD17fTtjLmV4cGFuZG89XCJ2ZWxvY2l0eVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGMudXVpZD0wO2Zvcih2YXIgZT17fSxmPWUuaGFzT3duUHJvcGVydHksZz1lLnRvU3RyaW5nLGg9XCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGk9MDtpPGgubGVuZ3RoO2krKyllW1wiW29iamVjdCBcIitoW2ldK1wiXVwiXT1oW2ldLnRvTG93ZXJDYXNlKCk7Yy5mbi5pbml0LnByb3RvdHlwZT1jLmZuLGEuVmVsb2NpdHk9e1V0aWxpdGllczpjfX19KHdpbmRvdyksZnVuY3Rpb24oYSl7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGEpOmEoKX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXtmb3IodmFyIGI9LTEsYz1hP2EubGVuZ3RoOjAsZD1bXTsrK2I8Yzspe3ZhciBlPWFbYl07ZSYmZC5wdXNoKGUpfXJldHVybiBkfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIHAuaXNXcmFwcGVkKGEpP2E9W10uc2xpY2UuY2FsbChhKTpwLmlzTm9kZShhKSYmKGE9W2FdKSxhfWZ1bmN0aW9uIGcoYSl7dmFyIGI9bS5kYXRhKGEsXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbD09PWI/ZDpifWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBNYXRoLnJvdW5kKGIqYSkqKDEvYSl9fWZ1bmN0aW9uIGkoYSxjLGQsZSl7ZnVuY3Rpb24gZihhLGIpe3JldHVybiAxLTMqYiszKmF9ZnVuY3Rpb24gZyhhLGIpe3JldHVybiAzKmItNiphfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIDMqYX1mdW5jdGlvbiBpKGEsYixjKXtyZXR1cm4oKGYoYixjKSphK2coYixjKSkqYStoKGIpKSphfWZ1bmN0aW9uIGooYSxiLGMpe3JldHVybiAzKmYoYixjKSphKmErMipnKGIsYykqYStoKGIpfWZ1bmN0aW9uIGsoYixjKXtmb3IodmFyIGU9MDtwPmU7KytlKXt2YXIgZj1qKGMsYSxkKTtpZigwPT09ZilyZXR1cm4gYzt2YXIgZz1pKGMsYSxkKS1iO2MtPWcvZn1yZXR1cm4gY31mdW5jdGlvbiBsKCl7Zm9yKHZhciBiPTA7dD5iOysrYil4W2JdPWkoYip1LGEsZCl9ZnVuY3Rpb24gbShiLGMsZSl7dmFyIGYsZyxoPTA7ZG8gZz1jKyhlLWMpLzIsZj1pKGcsYSxkKS1iLGY+MD9lPWc6Yz1nO3doaWxlKE1hdGguYWJzKGYpPnImJisraDxzKTtyZXR1cm4gZ31mdW5jdGlvbiBuKGIpe2Zvcih2YXIgYz0wLGU9MSxmPXQtMTtlIT1mJiZ4W2VdPD1iOysrZSljKz11Oy0tZTt2YXIgZz0oYi14W2VdKS8oeFtlKzFdLXhbZV0pLGg9YytnKnUsaT1qKGgsYSxkKTtyZXR1cm4gaT49cT9rKGIsaCk6MD09aT9oOm0oYixjLGMrdSl9ZnVuY3Rpb24gbygpe3k9ITAsKGEhPWN8fGQhPWUpJiZsKCl9dmFyIHA9NCxxPS4wMDEscj0xZS03LHM9MTAsdD0xMSx1PTEvKHQtMSksdj1cIkZsb2F0MzJBcnJheVwiaW4gYjtpZig0IT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIHc9MDs0Pnc7Kyt3KWlmKFwibnVtYmVyXCIhPXR5cGVvZiBhcmd1bWVudHNbd118fGlzTmFOKGFyZ3VtZW50c1t3XSl8fCFpc0Zpbml0ZShhcmd1bWVudHNbd10pKXJldHVybiExO2E9TWF0aC5taW4oYSwxKSxkPU1hdGgubWluKGQsMSksYT1NYXRoLm1heChhLDApLGQ9TWF0aC5tYXgoZCwwKTt2YXIgeD12P25ldyBGbG9hdDMyQXJyYXkodCk6bmV3IEFycmF5KHQpLHk9ITEsej1mdW5jdGlvbihiKXtyZXR1cm4geXx8bygpLGE9PT1jJiZkPT09ZT9iOjA9PT1iPzA6MT09PWI/MTppKG4oYiksYyxlKX07ei5nZXRDb250cm9sUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW3t4OmEseTpjfSx7eDpkLHk6ZX1dfTt2YXIgQT1cImdlbmVyYXRlQmV6aWVyKFwiK1thLGMsZCxlXStcIilcIjtyZXR1cm4gei50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBBfSx6fWZ1bmN0aW9uIGooYSxiKXt2YXIgYz1hO3JldHVybiBwLmlzU3RyaW5nKGEpP3QuRWFzaW5nc1thXXx8KGM9ITEpOmM9cC5pc0FycmF5KGEpJiYxPT09YS5sZW5ndGg/aC5hcHBseShudWxsLGEpOnAuaXNBcnJheShhKSYmMj09PWEubGVuZ3RoP3UuYXBwbHkobnVsbCxhLmNvbmNhdChbYl0pKTohKCFwLmlzQXJyYXkoYSl8fDQhPT1hLmxlbmd0aCkmJmkuYXBwbHkobnVsbCxhKSxjPT09ITEmJihjPXQuRWFzaW5nc1t0LmRlZmF1bHRzLmVhc2luZ10/dC5kZWZhdWx0cy5lYXNpbmc6cyksY31mdW5jdGlvbiBrKGEpe2lmKGEpe3ZhciBiPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9dC5TdGF0ZS5jYWxscy5sZW5ndGg7Yz4xZTQmJih0LlN0YXRlLmNhbGxzPWUodC5TdGF0ZS5jYWxscykpO2Zvcih2YXIgZj0wO2M+ZjtmKyspaWYodC5TdGF0ZS5jYWxsc1tmXSl7dmFyIGg9dC5TdGF0ZS5jYWxsc1tmXSxpPWhbMF0saj1oWzJdLG49aFszXSxvPSEhbixxPW51bGw7bnx8KG49dC5TdGF0ZS5jYWxsc1tmXVszXT1iLTE2KTtmb3IodmFyIHI9TWF0aC5taW4oKGItbikvai5kdXJhdGlvbiwxKSxzPTAsdT1pLmxlbmd0aDt1PnM7cysrKXt2YXIgdz1pW3NdLHk9dy5lbGVtZW50O2lmKGcoeSkpe3ZhciB6PSExO2lmKGouZGlzcGxheSE9PWQmJm51bGwhPT1qLmRpc3BsYXkmJlwibm9uZVwiIT09ai5kaXNwbGF5KXtpZihcImZsZXhcIj09PWouZGlzcGxheSl7dmFyIEE9W1wiLXdlYmtpdC1ib3hcIixcIi1tb3otYm94XCIsXCItbXMtZmxleGJveFwiLFwiLXdlYmtpdC1mbGV4XCJdO20uZWFjaChBLGZ1bmN0aW9uKGEsYil7di5zZXRQcm9wZXJ0eVZhbHVlKHksXCJkaXNwbGF5XCIsYil9KX12LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixqLmRpc3BsYXkpfWoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZSh5LFwidmlzaWJpbGl0eVwiLGoudmlzaWJpbGl0eSk7Zm9yKHZhciBCIGluIHcpaWYoXCJlbGVtZW50XCIhPT1CKXt2YXIgQyxEPXdbQl0sRT1wLmlzU3RyaW5nKEQuZWFzaW5nKT90LkVhc2luZ3NbRC5lYXNpbmddOkQuZWFzaW5nO2lmKDE9PT1yKUM9RC5lbmRWYWx1ZTtlbHNle3ZhciBGPUQuZW5kVmFsdWUtRC5zdGFydFZhbHVlO2lmKEM9RC5zdGFydFZhbHVlK0YqRShyLGosRiksIW8mJkM9PT1ELmN1cnJlbnRWYWx1ZSljb250aW51ZX1pZihELmN1cnJlbnRWYWx1ZT1DLFwidHdlZW5cIj09PUIpcT1DO2Vsc2V7aWYodi5Ib29rcy5yZWdpc3RlcmVkW0JdKXt2YXIgRz12Lkhvb2tzLmdldFJvb3QoQiksSD1nKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR107SCYmKEQucm9vdFByb3BlcnR5VmFsdWU9SCl9dmFyIEk9di5zZXRQcm9wZXJ0eVZhbHVlKHksQixELmN1cnJlbnRWYWx1ZSsoMD09PXBhcnNlRmxvYXQoQyk/XCJcIjpELnVuaXRUeXBlKSxELnJvb3RQcm9wZXJ0eVZhbHVlLEQuc2Nyb2xsRGF0YSk7di5Ib29rcy5yZWdpc3RlcmVkW0JdJiYoZyh5KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ddPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXT92Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbR10oXCJleHRyYWN0XCIsbnVsbCxJWzFdKTpJWzFdKSxcInRyYW5zZm9ybVwiPT09SVswXSYmKHo9ITApfX1qLm1vYmlsZUhBJiZnKHkpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPT09ZCYmKGcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9XCIoMHB4LCAwcHgsIDBweClcIix6PSEwKSx6JiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUoeSl9fWouZGlzcGxheSE9PWQmJlwibm9uZVwiIT09ai5kaXNwbGF5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS5kaXNwbGF5PSExKSxqLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09ai52aXNpYmlsaXR5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS52aXNpYmlsaXR5PSExKSxqLnByb2dyZXNzJiZqLnByb2dyZXNzLmNhbGwoaFsxXSxoWzFdLHIsTWF0aC5tYXgoMCxuK2ouZHVyYXRpb24tYiksbixxKSwxPT09ciYmbChmKX19dC5TdGF0ZS5pc1RpY2tpbmcmJngoayl9ZnVuY3Rpb24gbChhLGIpe2lmKCF0LlN0YXRlLmNhbGxzW2FdKXJldHVybiExO2Zvcih2YXIgYz10LlN0YXRlLmNhbGxzW2FdWzBdLGU9dC5TdGF0ZS5jYWxsc1thXVsxXSxmPXQuU3RhdGUuY2FsbHNbYV1bMl0saD10LlN0YXRlLmNhbGxzW2FdWzRdLGk9ITEsaj0wLGs9Yy5sZW5ndGg7az5qO2orKyl7dmFyIGw9Y1tqXS5lbGVtZW50O2lmKGJ8fGYubG9vcHx8KFwibm9uZVwiPT09Zi5kaXNwbGF5JiZ2LnNldFByb3BlcnR5VmFsdWUobCxcImRpc3BsYXlcIixmLmRpc3BsYXkpLFwiaGlkZGVuXCI9PT1mLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwidmlzaWJpbGl0eVwiLGYudmlzaWJpbGl0eSkpLGYubG9vcCE9PSEwJiYobS5xdWV1ZShsKVsxXT09PWR8fCEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QobS5xdWV1ZShsKVsxXSkpJiZnKGwpKXtnKGwpLmlzQW5pbWF0aW5nPSExLGcobCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZT17fTt2YXIgbj0hMTttLmVhY2godi5MaXN0cy50cmFuc2Zvcm1zM0QsZnVuY3Rpb24oYSxiKXt2YXIgYz0vXnNjYWxlLy50ZXN0KGIpPzE6MCxlPWcobCkudHJhbnNmb3JtQ2FjaGVbYl07ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSE9PWQmJm5ldyBSZWdFeHAoXCJeXFxcXChcIitjK1wiW14uXVwiKS50ZXN0KGUpJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSl9KSxmLm1vYmlsZUhBJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZCksbiYmdi5mbHVzaFRyYW5zZm9ybUNhY2hlKGwpLHYuVmFsdWVzLnJlbW92ZUNsYXNzKGwsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIil9aWYoIWImJmYuY29tcGxldGUmJiFmLmxvb3AmJmo9PT1rLTEpdHJ5e2YuY29tcGxldGUuY2FsbChlLGUpfWNhdGNoKG8pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBvfSwxKX1oJiZmLmxvb3AhPT0hMCYmaChlKSxnKGwpJiZmLmxvb3A9PT0hMCYmIWImJihtLmVhY2goZyhsKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXsvXnJvdGF0ZS8udGVzdChhKSYmMzYwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmKGIuZW5kVmFsdWU9MCxiLnN0YXJ0VmFsdWU9MzYwKSwvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChhKSYmMTAwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmXCIlXCI9PT1iLnVuaXRUeXBlJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0xMDApfSksdChsLFwicmV2ZXJzZVwiLHtsb29wOiEwLGRlbGF5OmYuZGVsYXl9KSksZi5xdWV1ZSE9PSExJiZtLmRlcXVldWUobCxmLnF1ZXVlKX10LlN0YXRlLmNhbGxzW2FdPSExO2Zvcih2YXIgcD0wLHE9dC5TdGF0ZS5jYWxscy5sZW5ndGg7cT5wO3ArKylpZih0LlN0YXRlLmNhbGxzW3BdIT09ITEpe2k9ITA7YnJlYWt9aT09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITEsZGVsZXRlIHQuU3RhdGUuY2FsbHMsdC5TdGF0ZS5jYWxscz1bXSl9dmFyIG0sbj1mdW5jdGlvbigpe2lmKGMuZG9jdW1lbnRNb2RlKXJldHVybiBjLmRvY3VtZW50TW9kZTtmb3IodmFyIGE9NzthPjQ7YS0tKXt2YXIgYj1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5pbm5lckhUTUw9XCI8IS0tW2lmIElFIFwiK2ErXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIixiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKS5sZW5ndGgpcmV0dXJuIGI9bnVsbCxhfXJldHVybiBkfSgpLG89ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiBiLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGIpe3ZhciBjLGQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIGM9TWF0aC5tYXgoMCwxNi0oZC1hKSksYT1kK2Msc2V0VGltZW91dChmdW5jdGlvbigpe2IoZCtjKX0sYyl9fSgpLHA9e2lzU3RyaW5nOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSl9LGlzTm9kZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS5ub2RlVHlwZX0saXNOb2RlTGlzdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYSYmL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSkmJmEubGVuZ3RoIT09ZCYmKDA9PT1hLmxlbmd0aHx8XCJvYmplY3RcIj09dHlwZW9mIGFbMF0mJmFbMF0ubm9kZVR5cGU+MCl9LGlzV3JhcHBlZDpmdW5jdGlvbihhKXtyZXR1cm4gYSYmKGEuanF1ZXJ5fHxiLlplcHRvJiZiLlplcHRvLnplcHRvLmlzWihhKSl9LGlzU1ZHOmZ1bmN0aW9uKGEpe3JldHVybiBiLlNWR0VsZW1lbnQmJmEgaW5zdGFuY2VvZiBiLlNWR0VsZW1lbnR9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9fSxxPSExO2lmKGEuZm4mJmEuZm4uanF1ZXJ5PyhtPWEscT0hMCk6bT1iLlZlbG9jaXR5LlV0aWxpdGllcyw4Pj1uJiYhcSl0aHJvdyBuZXcgRXJyb3IoXCJWZWxvY2l0eTogSUU4IGFuZCBiZWxvdyByZXF1aXJlIGpRdWVyeSB0byBiZSBsb2FkZWQgYmVmb3JlIFZlbG9jaXR5LlwiKTtpZig3Pj1uKXJldHVybiB2b2lkKGpRdWVyeS5mbi52ZWxvY2l0eT1qUXVlcnkuZm4uYW5pbWF0ZSk7dmFyIHI9NDAwLHM9XCJzd2luZ1wiLHQ9e1N0YXRlOntpc01vYmlsZTovQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNBbmRyb2lkOi9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0dpbmdlcmJyZWFkOi9BbmRyb2lkIDJcXC4zXFwuWzMtN10vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQ2hyb21lOmIuY2hyb21lLGlzRmlyZWZveDovRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkscHJlZml4RWxlbWVudDpjLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscHJlZml4TWF0Y2hlczp7fSxzY3JvbGxBbmNob3I6bnVsbCxzY3JvbGxQcm9wZXJ0eUxlZnQ6bnVsbCxzY3JvbGxQcm9wZXJ0eVRvcDpudWxsLGlzVGlja2luZzohMSxjYWxsczpbXX0sQ1NTOnt9LFV0aWxpdGllczptLFJlZGlyZWN0czp7fSxFYXNpbmdzOnt9LFByb21pc2U6Yi5Qcm9taXNlLGRlZmF1bHRzOntxdWV1ZTpcIlwiLGR1cmF0aW9uOnIsZWFzaW5nOnMsYmVnaW46ZCxjb21wbGV0ZTpkLHByb2dyZXNzOmQsZGlzcGxheTpkLHZpc2liaWxpdHk6ZCxsb29wOiExLGRlbGF5OiExLG1vYmlsZUhBOiEwLF9jYWNoZVZhbHVlczohMH0saW5pdDpmdW5jdGlvbihhKXttLmRhdGEoYSxcInZlbG9jaXR5XCIse2lzU1ZHOnAuaXNTVkcoYSksaXNBbmltYXRpbmc6ITEsY29tcHV0ZWRTdHlsZTpudWxsLHR3ZWVuc0NvbnRhaW5lcjpudWxsLHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6e30sdHJhbnNmb3JtQ2FjaGU6e319KX0saG9vazpudWxsLG1vY2s6ITEsdmVyc2lvbjp7bWFqb3I6MSxtaW5vcjoyLHBhdGNoOjJ9LGRlYnVnOiExfTtiLnBhZ2VZT2Zmc2V0IT09ZD8odC5TdGF0ZS5zY3JvbGxBbmNob3I9Yix0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInBhZ2VYT2Zmc2V0XCIsdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInBhZ2VZT2Zmc2V0XCIpOih0LlN0YXRlLnNjcm9sbEFuY2hvcj1jLmRvY3VtZW50RWxlbWVudHx8Yy5ib2R5LnBhcmVudE5vZGV8fGMuYm9keSx0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInNjcm9sbExlZnRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwic2Nyb2xsVG9wXCIpO3ZhciB1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4tYS50ZW5zaW9uKmEueC1hLmZyaWN0aW9uKmEudn1mdW5jdGlvbiBiKGIsYyxkKXt2YXIgZT17eDpiLngrZC5keCpjLHY6Yi52K2QuZHYqYyx0ZW5zaW9uOmIudGVuc2lvbixmcmljdGlvbjpiLmZyaWN0aW9ufTtyZXR1cm57ZHg6ZS52LGR2OmEoZSl9fWZ1bmN0aW9uIGMoYyxkKXt2YXIgZT17ZHg6Yy52LGR2OmEoYyl9LGY9YihjLC41KmQsZSksZz1iKGMsLjUqZCxmKSxoPWIoYyxkLGcpLGk9MS82KihlLmR4KzIqKGYuZHgrZy5keCkraC5keCksaj0xLzYqKGUuZHYrMiooZi5kditnLmR2KStoLmR2KTtyZXR1cm4gYy54PWMueCtpKmQsYy52PWMuditqKmQsY31yZXR1cm4gZnVuY3Rpb24gZChhLGIsZSl7dmFyIGYsZyxoLGk9e3g6LTEsdjowLHRlbnNpb246bnVsbCxmcmljdGlvbjpudWxsfSxqPVswXSxrPTAsbD0xZS00LG09LjAxNjtmb3IoYT1wYXJzZUZsb2F0KGEpfHw1MDAsYj1wYXJzZUZsb2F0KGIpfHwyMCxlPWV8fG51bGwsaS50ZW5zaW9uPWEsaS5mcmljdGlvbj1iLGY9bnVsbCE9PWUsZj8oaz1kKGEsYiksZz1rL2UqbSk6Zz1tO2g9YyhofHxpLGcpLGoucHVzaCgxK2gueCksays9MTYsTWF0aC5hYnMoaC54KT5sJiZNYXRoLmFicyhoLnYpPmw7KTtyZXR1cm4gZj9mdW5jdGlvbihhKXtyZXR1cm4galthKihqLmxlbmd0aC0xKXwwXX06a319KCk7dC5FYXNpbmdzPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sc3ByaW5nOmZ1bmN0aW9uKGEpe3JldHVybiAxLU1hdGguY29zKDQuNSphKk1hdGguUEkpKk1hdGguZXhwKDYqLWEpfX0sbS5lYWNoKFtbXCJlYXNlXCIsWy4yNSwuMSwuMjUsMV1dLFtcImVhc2UtaW5cIixbLjQyLDAsMSwxXV0sW1wiZWFzZS1vdXRcIixbMCwwLC41OCwxXV0sW1wiZWFzZS1pbi1vdXRcIixbLjQyLDAsLjU4LDFdXSxbXCJlYXNlSW5TaW5lXCIsWy40NywwLC43NDUsLjcxNV1dLFtcImVhc2VPdXRTaW5lXCIsWy4zOSwuNTc1LC41NjUsMV1dLFtcImVhc2VJbk91dFNpbmVcIixbLjQ0NSwuMDUsLjU1LC45NV1dLFtcImVhc2VJblF1YWRcIixbLjU1LC4wODUsLjY4LC41M11dLFtcImVhc2VPdXRRdWFkXCIsWy4yNSwuNDYsLjQ1LC45NF1dLFtcImVhc2VJbk91dFF1YWRcIixbLjQ1NSwuMDMsLjUxNSwuOTU1XV0sW1wiZWFzZUluQ3ViaWNcIixbLjU1LC4wNTUsLjY3NSwuMTldXSxbXCJlYXNlT3V0Q3ViaWNcIixbLjIxNSwuNjEsLjM1NSwxXV0sW1wiZWFzZUluT3V0Q3ViaWNcIixbLjY0NSwuMDQ1LC4zNTUsMV1dLFtcImVhc2VJblF1YXJ0XCIsWy44OTUsLjAzLC42ODUsLjIyXV0sW1wiZWFzZU91dFF1YXJ0XCIsWy4xNjUsLjg0LC40NCwxXV0sW1wiZWFzZUluT3V0UXVhcnRcIixbLjc3LDAsLjE3NSwxXV0sW1wiZWFzZUluUXVpbnRcIixbLjc1NSwuMDUsLjg1NSwuMDZdXSxbXCJlYXNlT3V0UXVpbnRcIixbLjIzLDEsLjMyLDFdXSxbXCJlYXNlSW5PdXRRdWludFwiLFsuODYsMCwuMDcsMV1dLFtcImVhc2VJbkV4cG9cIixbLjk1LC4wNSwuNzk1LC4wMzVdXSxbXCJlYXNlT3V0RXhwb1wiLFsuMTksMSwuMjIsMV1dLFtcImVhc2VJbk91dEV4cG9cIixbMSwwLDAsMV1dLFtcImVhc2VJbkNpcmNcIixbLjYsLjA0LC45OCwuMzM1XV0sW1wiZWFzZU91dENpcmNcIixbLjA3NSwuODIsLjE2NSwxXV0sW1wiZWFzZUluT3V0Q2lyY1wiLFsuNzg1LC4xMzUsLjE1LC44Nl1dXSxmdW5jdGlvbihhLGIpe3QuRWFzaW5nc1tiWzBdXT1pLmFwcGx5KG51bGwsYlsxXSl9KTt2YXIgdj10LkNTUz17UmVnRXg6e2lzSGV4Oi9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSx2YWx1ZVVud3JhcDovXltBLXpdK1xcKCguKilcXCkkL2ksd3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDovWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sdmFsdWVTcGxpdDovKFtBLXpdK1xcKC4rXFwpKXwoKFtBLXowLTkjLS5dKz8pKD89XFxzfCQpKS9naX0sTGlzdHM6e2NvbG9yczpbXCJmaWxsXCIsXCJzdHJva2VcIixcInN0b3BDb2xvclwiLFwiY29sb3JcIixcImJhY2tncm91bmRDb2xvclwiLFwiYm9yZGVyQ29sb3JcIixcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyTGVmdENvbG9yXCIsXCJvdXRsaW5lQ29sb3JcIl0sdHJhbnNmb3Jtc0Jhc2U6W1widHJhbnNsYXRlWFwiLFwidHJhbnNsYXRlWVwiLFwic2NhbGVcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJza2V3WFwiLFwic2tld1lcIixcInJvdGF0ZVpcIl0sdHJhbnNmb3JtczNEOltcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsXCJ0cmFuc2xhdGVaXCIsXCJzY2FsZVpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIl19LEhvb2tzOnt0ZW1wbGF0ZXM6e3RleHRTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXJcIixcImJsYWNrIDBweCAwcHggMHB4XCJdLGJveFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIixcImJsYWNrIDBweCAwcHggMHB4IDBweFwiXSxjbGlwOltcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLFwiMHB4IDBweCAwcHggMHB4XCJdLGJhY2tncm91bmRQb3NpdGlvbjpbXCJYIFlcIixcIjAlIDAlXCJdLHRyYW5zZm9ybU9yaWdpbjpbXCJYIFkgWlwiLFwiNTAlIDUwJSAwcHhcIl0scGVyc3BlY3RpdmVPcmlnaW46W1wiWCBZXCIsXCI1MCUgNTAlXCJdfSxyZWdpc3RlcmVkOnt9LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKXt2YXIgYj1cImNvbG9yXCI9PT12Lkxpc3RzLmNvbG9yc1thXT9cIjAgMCAwIDFcIjpcIjI1NSAyNTUgMjU1IDFcIjt2Lkhvb2tzLnRlbXBsYXRlc1t2Lkxpc3RzLmNvbG9yc1thXV09W1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIixiXX12YXIgYyxkLGU7aWYobilmb3IoYyBpbiB2Lkhvb2tzLnRlbXBsYXRlcyl7ZD12Lkhvb2tzLnRlbXBsYXRlc1tjXSxlPWRbMF0uc3BsaXQoXCIgXCIpO3ZhciBmPWRbMV0ubWF0Y2godi5SZWdFeC52YWx1ZVNwbGl0KTtcIkNvbG9yXCI9PT1lWzBdJiYoZS5wdXNoKGUuc2hpZnQoKSksZi5wdXNoKGYuc2hpZnQoKSksdi5Ib29rcy50ZW1wbGF0ZXNbY109W2Uuam9pbihcIiBcIiksZi5qb2luKFwiIFwiKV0pfWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7Zm9yKHZhciBhIGluIGUpe3ZhciBnPWMrZVthXSxoPWE7di5Ib29rcy5yZWdpc3RlcmVkW2ddPVtjLGhdfX19LGdldFJvb3Q6ZnVuY3Rpb24oYSl7dmFyIGI9di5Ib29rcy5yZWdpc3RlcmVkW2FdO3JldHVybiBiP2JbMF06YX0sY2xlYW5Sb290UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihhLGIpe3JldHVybiB2LlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QoYikmJihiPWIubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcClbMV0pLHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGIpJiYoYj12Lkhvb2tzLnRlbXBsYXRlc1thXVsxXSksYn0sZXh0cmFjdFZhbHVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGMpe3ZhciBkPWNbMF0sZT1jWzFdO3JldHVybiBiPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShkLGIpLGIudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpW2VdfXJldHVybiBifSxpbmplY3RWYWx1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGQpe3ZhciBlLGYsZz1kWzBdLGg9ZFsxXTtyZXR1cm4gYz12Lkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoZyxjKSxlPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpLGVbaF09YixmPWUuam9pbihcIiBcIil9cmV0dXJuIGN9fSxOb3JtYWxpemF0aW9uczp7cmVnaXN0ZXJlZDp7Y2xpcDpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImNsaXBcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGQ7cmV0dXJuIHYuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KGMpP2Q9YzooZD1jLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcCksZD1kP2RbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIik6YyksZDtjYXNlXCJpbmplY3RcIjpyZXR1cm5cInJlY3QoXCIrYytcIilcIn19LGJsdXI6ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuIHQuU3RhdGUuaXNGaXJlZm94P1wiZmlsdGVyXCI6XCItd2Via2l0LWZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1wYXJzZUZsb2F0KGMpO2lmKCFkJiYwIT09ZCl7dmFyIGU9Yy50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7ZD1lP2VbMV06MH1yZXR1cm4gZDtjYXNlXCJpbmplY3RcIjpyZXR1cm4gcGFyc2VGbG9hdChjKT9cImJsdXIoXCIrYytcIilcIjpcIm5vbmVcIn19LG9wYWNpdHk6ZnVuY3Rpb24oYSxiLGMpe2lmKDg+PW4pc3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1jLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO3JldHVybiBjPWQ/ZFsxXS8xMDA6MTtjYXNlXCJpbmplY3RcIjpyZXR1cm4gYi5zdHlsZS56b29tPTEscGFyc2VGbG9hdChjKT49MT9cIlwiOlwiYWxwaGEob3BhY2l0eT1cIitwYXJzZUludCgxMDAqcGFyc2VGbG9hdChjKSwxMCkrXCIpXCJ9ZWxzZSBzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwib3BhY2l0eVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gYztjYXNlXCJpbmplY3RcIjpyZXR1cm4gY319fSxyZWdpc3RlcjpmdW5jdGlvbigpezk+PW58fHQuU3RhdGUuaXNHaW5nZXJicmVhZHx8KHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2U9di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQodi5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IodmFyIGE9MDthPHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoO2ErKykhZnVuY3Rpb24oKXt2YXIgYj12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cInRyYW5zZm9ybVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gZyhjKT09PWR8fGcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kPy9ec2NhbGUvaS50ZXN0KGIpPzE6MDpnKGMpLnRyYW5zZm9ybUNhY2hlW2JdLnJlcGxhY2UoL1soKV0vZyxcIlwiKTtjYXNlXCJpbmplY3RcIjp2YXIgZj0hMTtzd2l0Y2goYi5zdWJzdHIoMCxiLmxlbmd0aC0xKSl7Y2FzZVwidHJhbnNsYXRlXCI6Zj0hLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2NhbFwiOmNhc2VcInNjYWxlXCI6dC5TdGF0ZS5pc0FuZHJvaWQmJmcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kJiYxPmUmJihlPTEpLGY9IS8oXFxkKSQvaS50ZXN0KGUpO2JyZWFrO2Nhc2VcInNrZXdcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwicm90YXRlXCI6Zj0hLyhkZWd8XFxkKSQvaS50ZXN0KGUpfXJldHVybiBmfHwoZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT1cIihcIitlK1wiKVwiKSxnKGMpLnRyYW5zZm9ybUNhY2hlW2JdfX19KCk7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMuY29sb3JzW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYjtjYXNlXCJleHRyYWN0XCI6dmFyIGY7aWYodi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoZSkpZj1lO2Vsc2V7dmFyIGcsaD17YmxhY2s6XCJyZ2IoMCwgMCwgMClcIixibHVlOlwicmdiKDAsIDAsIDI1NSlcIixncmF5OlwicmdiKDEyOCwgMTI4LCAxMjgpXCIsZ3JlZW46XCJyZ2IoMCwgMTI4LCAwKVwiLHJlZDpcInJnYigyNTUsIDAsIDApXCIsd2hpdGU6XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIn07L15bQS16XSskL2kudGVzdChlKT9nPWhbZV0hPT1kP2hbZV06aC5ibGFjazp2LlJlZ0V4LmlzSGV4LnRlc3QoZSk/Zz1cInJnYihcIit2LlZhbHVlcy5oZXhUb1JnYihlKS5qb2luKFwiIFwiKStcIilcIjovXnJnYmE/XFwoL2kudGVzdChlKXx8KGc9aC5ibGFjayksZj0oZ3x8ZSkudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKX1yZXR1cm4gOD49bnx8MyE9PWYuc3BsaXQoXCIgXCIpLmxlbmd0aHx8KGYrPVwiIDFcIiksZjtjYXNlXCJpbmplY3RcIjpyZXR1cm4gOD49bj80PT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZT1lLnNwbGl0KC9cXHMrLykuc2xpY2UoMCwzKS5qb2luKFwiIFwiKSk6Mz09PWUuc3BsaXQoXCIgXCIpLmxlbmd0aCYmKGUrPVwiIDFcIiksKDg+PW4/XCJyZ2JcIjpcInJnYmFcIikrXCIoXCIrZS5yZXBsYWNlKC9cXHMrL2csXCIsXCIpLnJlcGxhY2UoL1xcLihcXGQpKyg/PSwpL2csXCJcIikrXCIpXCJ9fX0oKX19LE5hbWVzOntjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvLShcXHcpL2csZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSl9LFNWR0F0dHJpYnV0ZTpmdW5jdGlvbihhKXt2YXIgYj1cIndpZHRofGhlaWdodHx4fHl8Y3h8Y3l8cnxyeHxyeXx4MXx4Mnx5MXx5MlwiO3JldHVybihufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiYoYis9XCJ8dHJhbnNmb3JtXCIpLG5ldyBSZWdFeHAoXCJeKFwiK2IrXCIpJFwiLFwiaVwiKS50ZXN0KGEpfSxwcmVmaXhDaGVjazpmdW5jdGlvbihhKXtpZih0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV0pcmV0dXJuW3QuU3RhdGUucHJlZml4TWF0Y2hlc1thXSwhMF07Zm9yKHZhciBiPVtcIlwiLFwiV2Via2l0XCIsXCJNb3pcIixcIm1zXCIsXCJPXCJdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspe3ZhciBlO2lmKGU9MD09PWM/YTpiW2NdK2EucmVwbGFjZSgvXlxcdy8sZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9VcHBlckNhc2UoKX0pLHAuaXNTdHJpbmcodC5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW2VdKSlyZXR1cm4gdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdPWUsW2UsITBdfXJldHVyblthLCExXX19LFZhbHVlczp7aGV4VG9SZ2I6ZnVuY3Rpb24oYSl7dmFyIGIsYz0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGQ9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTtyZXR1cm4gYT1hLnJlcGxhY2UoYyxmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYitiK2MrYytkK2R9KSxiPWQuZXhlYyhhKSxiP1twYXJzZUludChiWzFdLDE2KSxwYXJzZUludChiWzJdLDE2KSxwYXJzZUludChiWzNdLDE2KV06WzAsMCwwXX0saXNDU1NOdWxsVmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIDA9PWF8fC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGEpfSxnZXRVbml0VHlwZTpmdW5jdGlvbihhKXtyZXR1cm4vXihyb3RhdGV8c2tldykvaS50ZXN0KGEpP1wiZGVnXCI6LyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChhKT9cIlwiOlwicHhcIn0sZ2V0RGlzcGxheVR5cGU6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4vXihifGJpZ3xpfHNtYWxsfHR0fGFiYnJ8YWNyb255bXxjaXRlfGNvZGV8ZGZufGVtfGtiZHxzdHJvbmd8c2FtcHx2YXJ8YXxiZG98YnJ8aW1nfG1hcHxvYmplY3R8cXxzY3JpcHR8c3BhbnxzdWJ8c3VwfGJ1dHRvbnxpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpJC9pLnRlc3QoYik/XCJpbmxpbmVcIjovXihsaSkkL2kudGVzdChiKT9cImxpc3QtaXRlbVwiOi9eKHRyKSQvaS50ZXN0KGIpP1widGFibGUtcm93XCI6L14odGFibGUpJC9pLnRlc3QoYik/XCJ0YWJsZVwiOi9eKHRib2R5KSQvaS50ZXN0KGIpP1widGFibGUtcm93LWdyb3VwXCI6XCJibG9ja1wifSxhZGRDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LmFkZChiKTphLmNsYXNzTmFtZSs9KGEuY2xhc3NOYW1lLmxlbmd0aD9cIiBcIjpcIlwiKStifSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LnJlbW92ZShiKTphLmNsYXNzTmFtZT1hLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2Iuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKFxcXFxzfCQpXCIsXCJnaVwiKSxcIiBcIil9fSxnZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxlLGYpe2Z1bmN0aW9uIGgoYSxjKXtmdW5jdGlvbiBlKCl7aiYmdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsXCJub25lXCIpfXZhciBpPTA7aWYoOD49bilpPW0uY3NzKGEsYyk7ZWxzZXt2YXIgaj0hMTtpZigvXih3aWR0aHxoZWlnaHQpJC8udGVzdChjKSYmMD09PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiZGlzcGxheVwiKSYmKGo9ITAsdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsdi5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoYSkpKSwhZil7aWYoXCJoZWlnaHRcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgaz1hLm9mZnNldEhlaWdodC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlclRvcFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJCb3R0b21XaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1RvcFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0JvdHRvbVwiKSl8fDApO3JldHVybiBlKCksa31pZihcIndpZHRoXCI9PT1jJiZcImJvcmRlci1ib3hcIiE9PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGw9YS5vZmZzZXRXaWR0aC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckxlZnRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyUmlnaHRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0xlZnRcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdSaWdodFwiKSl8fDApO3JldHVybiBlKCksbH19dmFyIG87bz1nKGEpPT09ZD9iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKTpnKGEpLmNvbXB1dGVkU3R5bGU/ZyhhKS5jb21wdXRlZFN0eWxlOmcoYSkuY29tcHV0ZWRTdHlsZT1iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKSxcImJvcmRlckNvbG9yXCI9PT1jJiYoYz1cImJvcmRlclRvcENvbG9yXCIpLGk9OT09PW4mJlwiZmlsdGVyXCI9PT1jP28uZ2V0UHJvcGVydHlWYWx1ZShjKTpvW2NdLChcIlwiPT09aXx8bnVsbD09PWkpJiYoaT1hLnN0eWxlW2NdKSxlKCl9aWYoXCJhdXRvXCI9PT1pJiYvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3QoYykpe3ZhciBwPWgoYSxcInBvc2l0aW9uXCIpOyhcImZpeGVkXCI9PT1wfHxcImFic29sdXRlXCI9PT1wJiYvdG9wfGxlZnQvaS50ZXN0KGMpKSYmKGk9bShhKS5wb3NpdGlvbigpW2NdK1wicHhcIil9cmV0dXJuIGl9dmFyIGk7aWYodi5Ib29rcy5yZWdpc3RlcmVkW2NdKXt2YXIgaj1jLGs9di5Ib29rcy5nZXRSb290KGopO2U9PT1kJiYoZT12LmdldFByb3BlcnR5VmFsdWUoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGspWzBdKSksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2tdJiYoZT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10oXCJleHRyYWN0XCIsYSxlKSksaT12Lkhvb2tzLmV4dHJhY3RWYWx1ZShqLGUpfWVsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKXt2YXIgbCxvO2w9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpLFwidHJhbnNmb3JtXCIhPT1sJiYobz1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhsKVswXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobykmJnYuSG9va3MudGVtcGxhdGVzW2NdJiYobz12Lkhvb2tzLnRlbXBsYXRlc1tjXVsxXSkpLGk9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLGEsbyl9aWYoIS9eW1xcZC1dLy50ZXN0KGkpKWlmKGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpKWlmKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChjKSl0cnl7aT1hLmdldEJCb3goKVtjXX1jYXRjaChwKXtpPTB9ZWxzZSBpPWEuZ2V0QXR0cmlidXRlKGMpO2Vsc2UgaT1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSk7cmV0dXJuIHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGkpJiYoaT0wKSx0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIkdldCBcIitjK1wiOiBcIitpKSxpfSxzZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxkLGUsZil7dmFyIGg9YztpZihcInNjcm9sbFwiPT09YylmLmNvbnRhaW5lcj9mLmNvbnRhaW5lcltcInNjcm9sbFwiK2YuZGlyZWN0aW9uXT1kOlwiTGVmdFwiPT09Zi5kaXJlY3Rpb24/Yi5zY3JvbGxUbyhkLGYuYWx0ZXJuYXRlVmFsdWUpOmIuc2Nyb2xsVG8oZi5hbHRlcm5hdGVWYWx1ZSxkKTtlbHNlIGlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmXCJ0cmFuc2Zvcm1cIj09PXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSl2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJpbmplY3RcIixhLGQpLGg9XCJ0cmFuc2Zvcm1cIixkPWcoYSkudHJhbnNmb3JtQ2FjaGVbY107ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBpPWMsaj12Lkhvb2tzLmdldFJvb3QoYyk7ZT1lfHx2LmdldFByb3BlcnR5VmFsdWUoYSxqKSxkPXYuSG9va3MuaW5qZWN0VmFsdWUoaSxkLGUpLGM9an1pZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihkPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksYz12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSkpLGg9di5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSw4Pj1uKXRyeXthLnN0eWxlW2hdPWR9Y2F0Y2goayl7dC5kZWJ1ZyYmY29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiK2QrXCJdIGZvciBbXCIraCtcIl1cIil9ZWxzZSBnKGEpJiZnKGEpLmlzU1ZHJiZ2Lk5hbWVzLlNWR0F0dHJpYnV0ZShjKT9hLnNldEF0dHJpYnV0ZShjLGQpOmEuc3R5bGVbaF09ZDt0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIlNldCBcIitjK1wiIChcIitoK1wiKTogXCIrZCl9cmV0dXJuW2gsZF19LGZsdXNoVHJhbnNmb3JtQ2FjaGU6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gcGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxiKSl9dmFyIGM9XCJcIjtpZigobnx8dC5TdGF0ZS5pc0FuZHJvaWQmJiF0LlN0YXRlLmlzQ2hyb21lKSYmZyhhKS5pc1NWRyl7dmFyIGQ9e3RyYW5zbGF0ZTpbYihcInRyYW5zbGF0ZVhcIiksYihcInRyYW5zbGF0ZVlcIildLHNrZXdYOltiKFwic2tld1hcIildLHNrZXdZOltiKFwic2tld1lcIildLHNjYWxlOjEhPT1iKFwic2NhbGVcIik/W2IoXCJzY2FsZVwiKSxiKFwic2NhbGVcIildOltiKFwic2NhbGVYXCIpLGIoXCJzY2FsZVlcIildLHJvdGF0ZTpbYihcInJvdGF0ZVpcIiksMCwwXX07bS5lYWNoKGcoYSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24oYSl7L150cmFuc2xhdGUvaS50ZXN0KGEpP2E9XCJ0cmFuc2xhdGVcIjovXnNjYWxlL2kudGVzdChhKT9hPVwic2NhbGVcIjovXnJvdGF0ZS9pLnRlc3QoYSkmJihhPVwicm90YXRlXCIpLGRbYV0mJihjKz1hK1wiKFwiK2RbYV0uam9pbihcIiBcIikrXCIpIFwiLGRlbGV0ZSBkW2FdKX0pfWVsc2V7dmFyIGUsZjttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihiKXtyZXR1cm4gZT1nKGEpLnRyYW5zZm9ybUNhY2hlW2JdLFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIj09PWI/KGY9ZSwhMCk6KDk9PT1uJiZcInJvdGF0ZVpcIj09PWImJihiPVwicm90YXRlXCIpLHZvaWQoYys9YitlK1wiIFwiKSl9KSxmJiYoYz1cInBlcnNwZWN0aXZlXCIrZitcIiBcIitjKX12LnNldFByb3BlcnR5VmFsdWUoYSxcInRyYW5zZm9ybVwiLGMpfX07di5Ib29rcy5yZWdpc3RlcigpLHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKSx0Lmhvb2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlPWQ7cmV0dXJuIGE9ZihhKSxtLmVhY2goYSxmdW5jdGlvbihhLGYpe2lmKGcoZik9PT1kJiZ0LmluaXQoZiksYz09PWQpZT09PWQmJihlPXQuQ1NTLmdldFByb3BlcnR5VmFsdWUoZixiKSk7ZWxzZXt2YXIgaD10LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGYsYixjKTtcInRyYW5zZm9ybVwiPT09aFswXSYmdC5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShmKSxlPWh9fSksZX07dmFyIHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGg/Qi5wcm9taXNlfHxudWxsOml9ZnVuY3Rpb24gZSgpe2Z1bmN0aW9uIGEoYSl7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWQsZT1kLGc9ZDtyZXR1cm4gcC5pc0FycmF5KGEpPyhjPWFbMF0sIXAuaXNBcnJheShhWzFdKSYmL15bXFxkLV0vLnRlc3QoYVsxXSl8fHAuaXNGdW5jdGlvbihhWzFdKXx8di5SZWdFeC5pc0hleC50ZXN0KGFbMV0pP2c9YVsxXToocC5pc1N0cmluZyhhWzFdKSYmIXYuUmVnRXguaXNIZXgudGVzdChhWzFdKXx8cC5pc0FycmF5KGFbMV0pKSYmKGU9Yj9hWzFdOmooYVsxXSxoLmR1cmF0aW9uKSxhWzJdIT09ZCYmKGc9YVsyXSkpKTpjPWEsYnx8KGU9ZXx8aC5lYXNpbmcpLHAuaXNGdW5jdGlvbihjKSYmKGM9Yy5jYWxsKGYseSx4KSkscC5pc0Z1bmN0aW9uKGcpJiYoZz1nLmNhbGwoZix5LHgpKSxbY3x8MCxlLGddfWZ1bmN0aW9uIG4oYSxiKXt2YXIgYyxkO3JldHVybiBkPShifHxcIjBcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1slQS16XSskLyxmdW5jdGlvbihhKXtyZXR1cm4gYz1hLFwiXCJ9KSxjfHwoYz12LlZhbHVlcy5nZXRVbml0VHlwZShhKSksW2QsY119ZnVuY3Rpb24gcigpe3ZhciBhPXtteVBhcmVudDpmLnBhcmVudE5vZGV8fGMuYm9keSxwb3NpdGlvbjp2LmdldFByb3BlcnR5VmFsdWUoZixcInBvc2l0aW9uXCIpLGZvbnRTaXplOnYuZ2V0UHJvcGVydHlWYWx1ZShmLFwiZm9udFNpemVcIil9LGQ9YS5wb3NpdGlvbj09PUkubGFzdFBvc2l0aW9uJiZhLm15UGFyZW50PT09SS5sYXN0UGFyZW50LGU9YS5mb250U2l6ZT09PUkubGFzdEZvbnRTaXplO0kubGFzdFBhcmVudD1hLm15UGFyZW50LEkubGFzdFBvc2l0aW9uPWEucG9zaXRpb24sSS5sYXN0Rm9udFNpemU9YS5mb250U2l6ZTt2YXIgaD0xMDAsaT17fTtpZihlJiZkKWkuZW1Ub1B4PUkubGFzdEVtVG9QeCxpLnBlcmNlbnRUb1B4V2lkdGg9SS5sYXN0UGVyY2VudFRvUHhXaWR0aCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0O2Vsc2V7dmFyIGo9ZyhmKS5pc1NWRz9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJyZWN0XCIpOmMuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmluaXQoaiksYS5teVBhcmVudC5hcHBlbmRDaGlsZChqKSxtLmVhY2goW1wib3ZlcmZsb3dcIixcIm92ZXJmbG93WFwiLFwib3ZlcmZsb3dZXCJdLGZ1bmN0aW9uKGEsYil7dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLGIsXCJoaWRkZW5cIil9KSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJwb3NpdGlvblwiLGEucG9zaXRpb24pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcImZvbnRTaXplXCIsYS5mb250U2l6ZSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwiYm94U2l6aW5nXCIsXCJjb250ZW50LWJveFwiKSxtLmVhY2goW1wibWluV2lkdGhcIixcIm1heFdpZHRoXCIsXCJ3aWR0aFwiLFwibWluSGVpZ2h0XCIsXCJtYXhIZWlnaHRcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe3QuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixiLGgrXCIlXCIpfSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwicGFkZGluZ0xlZnRcIixoK1wiZW1cIiksaS5wZXJjZW50VG9QeFdpZHRoPUkubGFzdFBlcmNlbnRUb1B4V2lkdGg9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJ3aWR0aFwiLG51bGwsITApKXx8MSkvaCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0PShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwiaGVpZ2h0XCIsbnVsbCwhMCkpfHwxKS9oLGkuZW1Ub1B4PUkubGFzdEVtVG9QeD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcInBhZGRpbmdMZWZ0XCIpKXx8MSkvaCxhLm15UGFyZW50LnJlbW92ZUNoaWxkKGopfXJldHVybiBudWxsPT09SS5yZW1Ub1B4JiYoSS5yZW1Ub1B4PXBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGMuYm9keSxcImZvbnRTaXplXCIpKXx8MTYpLG51bGw9PT1JLnZ3VG9QeCYmKEkudndUb1B4PXBhcnNlRmxvYXQoYi5pbm5lcldpZHRoKS8xMDAsSS52aFRvUHg9cGFyc2VGbG9hdChiLmlubmVySGVpZ2h0KS8xMDApLGkucmVtVG9QeD1JLnJlbVRvUHgsaS52d1RvUHg9SS52d1RvUHgsaS52aFRvUHg9SS52aFRvUHgsdC5kZWJ1Zz49MSYmY29uc29sZS5sb2coXCJVbml0IHJhdGlvczogXCIrSlNPTi5zdHJpbmdpZnkoaSksZiksaX1pZihoLmJlZ2luJiYwPT09eSl0cnl7aC5iZWdpbi5jYWxsKG8sbyl9Y2F0Y2godSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHV9LDEpfWlmKFwic2Nyb2xsXCI9PT1DKXt2YXIgdyx6LEEsRD0vXngkL2kudGVzdChoLmF4aXMpP1wiTGVmdFwiOlwiVG9wXCIsRT1wYXJzZUZsb2F0KGgub2Zmc2V0KXx8MDtoLmNvbnRhaW5lcj9wLmlzV3JhcHBlZChoLmNvbnRhaW5lcil8fHAuaXNOb2RlKGguY29udGFpbmVyKT8oaC5jb250YWluZXI9aC5jb250YWluZXJbMF18fGguY29udGFpbmVyLHc9aC5jb250YWluZXJbXCJzY3JvbGxcIitEXSxBPXcrbShmKS5wb3NpdGlvbigpW0QudG9Mb3dlckNhc2UoKV0rRSk6aC5jb250YWluZXI9bnVsbDoodz10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIitEXV0sej10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIisoXCJMZWZ0XCI9PT1EP1wiVG9wXCI6XCJMZWZ0XCIpXV0sQT1tKGYpLm9mZnNldCgpW0QudG9Mb3dlckNhc2UoKV0rRSksaT17c2Nyb2xsOntyb290UHJvcGVydHlWYWx1ZTohMSxzdGFydFZhbHVlOncsY3VycmVudFZhbHVlOncsZW5kVmFsdWU6QSx1bml0VHlwZTpcIlwiLGVhc2luZzpoLmVhc2luZyxzY3JvbGxEYXRhOntjb250YWluZXI6aC5jb250YWluZXIsZGlyZWN0aW9uOkQsYWx0ZXJuYXRlVmFsdWU6en19LGVsZW1lbnQ6Zn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKHNjcm9sbCk6IFwiLGkuc2Nyb2xsLGYpfWVsc2UgaWYoXCJyZXZlcnNlXCI9PT1DKXtpZighZyhmKS50d2VlbnNDb250YWluZXIpcmV0dXJuIHZvaWQgbS5kZXF1ZXVlKGYsaC5xdWV1ZSk7XCJub25lXCI9PT1nKGYpLm9wdHMuZGlzcGxheSYmKGcoZikub3B0cy5kaXNwbGF5PVwiYXV0b1wiKSxcImhpZGRlblwiPT09ZyhmKS5vcHRzLnZpc2liaWxpdHkmJihnKGYpLm9wdHMudmlzaWJpbGl0eT1cInZpc2libGVcIiksZyhmKS5vcHRzLmxvb3A9ITEsZyhmKS5vcHRzLmJlZ2luPW51bGwsZyhmKS5vcHRzLmNvbXBsZXRlPW51bGwscy5lYXNpbmd8fGRlbGV0ZSBoLmVhc2luZyxzLmR1cmF0aW9ufHxkZWxldGUgaC5kdXJhdGlvbixoPW0uZXh0ZW5kKHt9LGcoZikub3B0cyxoKTt2YXIgRj1tLmV4dGVuZCghMCx7fSxnKGYpLnR3ZWVuc0NvbnRhaW5lcik7Zm9yKHZhciBHIGluIEYpaWYoXCJlbGVtZW50XCIhPT1HKXt2YXIgSD1GW0ddLnN0YXJ0VmFsdWU7RltHXS5zdGFydFZhbHVlPUZbR10uY3VycmVudFZhbHVlPUZbR10uZW5kVmFsdWUsRltHXS5lbmRWYWx1ZT1ILHAuaXNFbXB0eU9iamVjdChzKXx8KEZbR10uZWFzaW5nPWguZWFzaW5nKSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInJldmVyc2UgdHdlZW5zQ29udGFpbmVyIChcIitHK1wiKTogXCIrSlNPTi5zdHJpbmdpZnkoRltHXSksZil9aT1GfWVsc2UgaWYoXCJzdGFydFwiPT09Qyl7dmFyIEY7ZyhmKS50d2VlbnNDb250YWluZXImJmcoZikuaXNBbmltYXRpbmc9PT0hMCYmKEY9ZyhmKS50d2VlbnNDb250YWluZXIpLG0uZWFjaChxLGZ1bmN0aW9uKGEsYil7aWYoUmVnRXhwKFwiXlwiK3YuTGlzdHMuY29sb3JzLmpvaW4oXCIkfF5cIikrXCIkXCIpLnRlc3QoYSkpe3ZhciBjPWwoYiwhMCksZT1jWzBdLGY9Y1sxXSxnPWNbMl07aWYodi5SZWdFeC5pc0hleC50ZXN0KGUpKXtmb3IodmFyIGg9W1wiUmVkXCIsXCJHcmVlblwiLFwiQmx1ZVwiXSxpPXYuVmFsdWVzLmhleFRvUmdiKGUpLGo9Zz92LlZhbHVlcy5oZXhUb1JnYihnKTpkLGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIG09W2lba11dO2YmJm0ucHVzaChmKSxqIT09ZCYmbS5wdXNoKGpba10pLHFbYStoW2tdXT1tfWRlbGV0ZSBxW2FdfX19KTtmb3IodmFyIEsgaW4gcSl7dmFyIEw9bChxW0tdKSxNPUxbMF0sTj1MWzFdLE89TFsyXTtLPXYuTmFtZXMuY2FtZWxDYXNlKEspO3ZhciBQPXYuSG9va3MuZ2V0Um9vdChLKSxRPSExO2lmKGcoZikuaXNTVkd8fFwidHdlZW5cIj09PVB8fHYuTmFtZXMucHJlZml4Q2hlY2soUClbMV0hPT0hMXx8di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW1BdIT09ZCl7KGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJlwibm9uZVwiIT09aC5kaXNwbGF5fHxoLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09aC52aXNpYmlsaXR5KSYmL29wYWNpdHl8ZmlsdGVyLy50ZXN0KEspJiYhTyYmMCE9PU0mJihPPTApLGguX2NhY2hlVmFsdWVzJiZGJiZGW0tdPyhPPT09ZCYmKE89RltLXS5lbmRWYWx1ZStGW0tdLnVuaXRUeXBlKSxRPWcoZikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtQXSk6di5Ib29rcy5yZWdpc3RlcmVkW0tdP089PT1kPyhRPXYuZ2V0UHJvcGVydHlWYWx1ZShmLFApLE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSyxRKSk6UT12Lkhvb2tzLnRlbXBsYXRlc1tQXVsxXTpPPT09ZCYmKE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSykpO3ZhciBSLFMsVCxVPSExO2lmKFI9bihLLE8pLE89UlswXSxUPVJbMV0sUj1uKEssTSksTT1SWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sZnVuY3Rpb24oYSxiKXtyZXR1cm4gVT1iLFwiXCJ9KSxTPVJbMV0sTz1wYXJzZUZsb2F0KE8pfHwwLE09cGFyc2VGbG9hdChNKXx8MCxcIiVcIj09PVMmJigvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3QoSyk/KE0vPTEwMCxTPVwiZW1cIik6L15zY2FsZS8udGVzdChLKT8oTS89MTAwLFM9XCJcIik6LyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdChLKSYmKE09TS8xMDAqMjU1LFM9XCJcIikpLC9bXFwvKl0vLnRlc3QoVSkpUz1UO2Vsc2UgaWYoVCE9PVMmJjAhPT1PKWlmKDA9PT1NKVM9VDtlbHNle2U9ZXx8cigpO3ZhciBWPS9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KEspfHwvWCQvLnRlc3QoSyl8fFwieFwiPT09Sz9cInhcIjpcInlcIjtcbnN3aXRjaChUKXtjYXNlXCIlXCI6Tyo9XCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpPKj1lW1QrXCJUb1B4XCJdfXN3aXRjaChTKXtjYXNlXCIlXCI6Tyo9MS8oXCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6Tyo9MS9lW1MrXCJUb1B4XCJdfX1zd2l0Y2goVSl7Y2FzZVwiK1wiOk09TytNO2JyZWFrO2Nhc2VcIi1cIjpNPU8tTTticmVhaztjYXNlXCIqXCI6TT1PKk07YnJlYWs7Y2FzZVwiL1wiOk09Ty9NfWlbS109e3Jvb3RQcm9wZXJ0eVZhbHVlOlEsc3RhcnRWYWx1ZTpPLGN1cnJlbnRWYWx1ZTpPLGVuZFZhbHVlOk0sdW5pdFR5cGU6UyxlYXNpbmc6Tn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK0srXCIpOiBcIitKU09OLnN0cmluZ2lmeShpW0tdKSxmKX1lbHNlIHQuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK1ArXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1pLmVsZW1lbnQ9Zn1pLmVsZW1lbnQmJih2LlZhbHVlcy5hZGRDbGFzcyhmLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLEoucHVzaChpKSxcIlwiPT09aC5xdWV1ZSYmKGcoZikudHdlZW5zQ29udGFpbmVyPWksZyhmKS5vcHRzPWgpLGcoZikuaXNBbmltYXRpbmc9ITAseT09PXgtMT8odC5TdGF0ZS5jYWxscy5wdXNoKFtKLG8saCxudWxsLEIucmVzb2x2ZXJdKSx0LlN0YXRlLmlzVGlja2luZz09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITAsaygpKSk6eSsrKX12YXIgZSxmPXRoaXMsaD1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpLGk9e307c3dpdGNoKGcoZik9PT1kJiZ0LmluaXQoZikscGFyc2VGbG9hdChoLmRlbGF5KSYmaC5xdWV1ZSE9PSExJiZtLnF1ZXVlKGYsaC5xdWV1ZSxmdW5jdGlvbihhKXt0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsZyhmKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoYSxwYXJzZUZsb2F0KGguZGVsYXkpKSxuZXh0OmF9fSksaC5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpoLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpoLmR1cmF0aW9uPXI7YnJlYWs7Y2FzZVwic2xvd1wiOmguZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6aC5kdXJhdGlvbj1wYXJzZUZsb2F0KGguZHVyYXRpb24pfHwxfXQubW9jayE9PSExJiYodC5tb2NrPT09ITA/aC5kdXJhdGlvbj1oLmRlbGF5PTE6KGguZHVyYXRpb24qPXBhcnNlRmxvYXQodC5tb2NrKXx8MSxoLmRlbGF5Kj1wYXJzZUZsb2F0KHQubW9jayl8fDEpKSxoLmVhc2luZz1qKGguZWFzaW5nLGguZHVyYXRpb24pLGguYmVnaW4mJiFwLmlzRnVuY3Rpb24oaC5iZWdpbikmJihoLmJlZ2luPW51bGwpLGgucHJvZ3Jlc3MmJiFwLmlzRnVuY3Rpb24oaC5wcm9ncmVzcykmJihoLnByb2dyZXNzPW51bGwpLGguY29tcGxldGUmJiFwLmlzRnVuY3Rpb24oaC5jb21wbGV0ZSkmJihoLmNvbXBsZXRlPW51bGwpLGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJihoLmRpc3BsYXk9aC5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PWguZGlzcGxheSYmKGguZGlzcGxheT10LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZikpKSxoLnZpc2liaWxpdHkhPT1kJiZudWxsIT09aC52aXNpYmlsaXR5JiYoaC52aXNpYmlsaXR5PWgudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLGgubW9iaWxlSEE9aC5tb2JpbGVIQSYmdC5TdGF0ZS5pc01vYmlsZSYmIXQuU3RhdGUuaXNHaW5nZXJicmVhZCxoLnF1ZXVlPT09ITE/aC5kZWxheT9zZXRUaW1lb3V0KGEsaC5kZWxheSk6YSgpOm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9PT0hMD8oQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pLCEwKToodC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgYShiKSl9KSxcIlwiIT09aC5xdWV1ZSYmXCJmeFwiIT09aC5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1tLnF1ZXVlKGYpWzBdfHxtLmRlcXVldWUoZil9dmFyIGgsaSxuLG8scSxzLHU9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fG0uaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8cC5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKHAuaXNXcmFwcGVkKHRoaXMpPyhoPSExLG49MCxvPXRoaXMsaT10aGlzKTooaD0hMCxuPTEsbz11P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxvPWYobykpe3U/KHE9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHM9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKToocT1hcmd1bWVudHNbbl0scz1hcmd1bWVudHNbbisxXSk7dmFyIHg9by5sZW5ndGgseT0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdChxKSYmIW0uaXNQbGFpbk9iamVjdChzKSl7dmFyIHo9bisxO3M9e307Zm9yKHZhciBBPXo7QTxhcmd1bWVudHMubGVuZ3RoO0ErKylwLmlzQXJyYXkoYXJndW1lbnRzW0FdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW0FdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tBXSk/cC5pc1N0cmluZyhhcmd1bWVudHNbQV0pfHxwLmlzQXJyYXkoYXJndW1lbnRzW0FdKT9zLmVhc2luZz1hcmd1bWVudHNbQV06cC5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tBXSkmJihzLmNvbXBsZXRlPWFyZ3VtZW50c1tBXSk6cy5kdXJhdGlvbj1hcmd1bWVudHNbQV19dmFyIEI9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O2gmJnQuUHJvbWlzZSYmKEIucHJvbWlzZT1uZXcgdC5Qcm9taXNlKGZ1bmN0aW9uKGEsYil7Qi5yZXNvbHZlcj1hLEIucmVqZWN0ZXI9Yn0pKTt2YXIgQztzd2l0Y2gocSl7Y2FzZVwic2Nyb2xsXCI6Qz1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpDPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjptLmVhY2gobyxmdW5jdGlvbihhLGIpe2coYikmJmcoYikuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChnKGIpLmRlbGF5VGltZXIuc2V0VGltZW91dCksZyhiKS5kZWxheVRpbWVyLm5leHQmJmcoYikuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGcoYikuZGVsYXlUaW1lcil9KTt2YXIgRD1bXTtyZXR1cm4gbS5lYWNoKHQuU3RhdGUuY2FsbHMsZnVuY3Rpb24oYSxiKXtiJiZtLmVhY2goYlsxXSxmdW5jdGlvbihjLGUpe3ZhciBmPXM9PT1kP1wiXCI6cztyZXR1cm4gZiE9PSEwJiZiWzJdLnF1ZXVlIT09ZiYmKHMhPT1kfHxiWzJdLnF1ZXVlIT09ITEpfHx2b2lkIG0uZWFjaChvLGZ1bmN0aW9uKGMsZCl7ZD09PWUmJigocz09PSEwfHxwLmlzU3RyaW5nKHMpKSYmKG0uZWFjaChtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIpLGZ1bmN0aW9uKGEsYil7cC5pc0Z1bmN0aW9uKGIpJiZiKG51bGwsITApfSksbS5xdWV1ZShkLHAuaXNTdHJpbmcocyk/czpcIlwiLFtdKSksXCJzdG9wXCI9PT1xPyhnKGQpJiZnKGQpLnR3ZWVuc0NvbnRhaW5lciYmZiE9PSExJiZtLmVhY2goZyhkKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXtiLmVuZFZhbHVlPWIuY3VycmVudFZhbHVlfSksRC5wdXNoKGEpKTpcImZpbmlzaFwiPT09cSYmKGJbMl0uZHVyYXRpb249MSkpfSl9KX0pLFwic3RvcFwiPT09cSYmKG0uZWFjaChELGZ1bmN0aW9uKGEsYil7bChiLCEwKX0pLEIucHJvbWlzZSYmQi5yZXNvbHZlcihvKSksYSgpO2RlZmF1bHQ6aWYoIW0uaXNQbGFpbk9iamVjdChxKXx8cC5pc0VtcHR5T2JqZWN0KHEpKXtpZihwLmlzU3RyaW5nKHEpJiZ0LlJlZGlyZWN0c1txXSl7dmFyIEU9bS5leHRlbmQoe30scyksRj1FLmR1cmF0aW9uLEc9RS5kZWxheXx8MDtyZXR1cm4gRS5iYWNrd2FyZHM9PT0hMCYmKG89bS5leHRlbmQoITAsW10sbykucmV2ZXJzZSgpKSxtLmVhY2gobyxmdW5jdGlvbihhLGIpe3BhcnNlRmxvYXQoRS5zdGFnZ2VyKT9FLmRlbGF5PUcrcGFyc2VGbG9hdChFLnN0YWdnZXIpKmE6cC5pc0Z1bmN0aW9uKEUuc3RhZ2dlcikmJihFLmRlbGF5PUcrRS5zdGFnZ2VyLmNhbGwoYixhLHgpKSxFLmRyYWcmJihFLmR1cmF0aW9uPXBhcnNlRmxvYXQoRil8fCgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHEpPzFlMzpyKSxFLmR1cmF0aW9uPU1hdGgubWF4KEUuZHVyYXRpb24qKEUuYmFja3dhcmRzPzEtYS94OihhKzEpL3gpLC43NSpFLmR1cmF0aW9uLDIwMCkpLHQuUmVkaXJlY3RzW3FdLmNhbGwoYixiLEV8fHt9LGEseCxvLEIucHJvbWlzZT9COmQpfSksYSgpfXZhciBIPVwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIitxK1wiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtyZXR1cm4gQi5wcm9taXNlP0IucmVqZWN0ZXIobmV3IEVycm9yKEgpKTpjb25zb2xlLmxvZyhIKSxhKCl9Qz1cInN0YXJ0XCJ9dmFyIEk9e2xhc3RQYXJlbnQ6bnVsbCxsYXN0UG9zaXRpb246bnVsbCxsYXN0Rm9udFNpemU6bnVsbCxsYXN0UGVyY2VudFRvUHhXaWR0aDpudWxsLGxhc3RQZXJjZW50VG9QeEhlaWdodDpudWxsLGxhc3RFbVRvUHg6bnVsbCxyZW1Ub1B4Om51bGwsdndUb1B4Om51bGwsdmhUb1B4Om51bGx9LEo9W107bS5lYWNoKG8sZnVuY3Rpb24oYSxiKXtwLmlzTm9kZShiKSYmZS5jYWxsKGIpfSk7dmFyIEssRT1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpO2lmKEUubG9vcD1wYXJzZUludChFLmxvb3ApLEs9MipFLmxvb3AtMSxFLmxvb3ApZm9yKHZhciBMPTA7Sz5MO0wrKyl7dmFyIE09e2RlbGF5OkUuZGVsYXkscHJvZ3Jlc3M6RS5wcm9ncmVzc307TD09PUstMSYmKE0uZGlzcGxheT1FLmRpc3BsYXksTS52aXNpYmlsaXR5PUUudmlzaWJpbGl0eSxNLmNvbXBsZXRlPUUuY29tcGxldGUpLHcobyxcInJldmVyc2VcIixNKX1yZXR1cm4gYSgpfX07dD1tLmV4dGVuZCh3LHQpLHQuYW5pbWF0ZT13O3ZhciB4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvO3JldHVybiB0LlN0YXRlLmlzTW9iaWxlfHxjLmhpZGRlbj09PWR8fGMuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe2MuaGlkZGVuPyh4PWZ1bmN0aW9uKGEpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSghMCl9LDE2KX0saygpKTp4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvfSksYS5WZWxvY2l0eT10LGEhPT1iJiYoYS5mbi52ZWxvY2l0eT13LGEuZm4udmVsb2NpdHkuZGVmYXVsdHM9dC5kZWZhdWx0cyksbS5lYWNoKFtcIkRvd25cIixcIlVwXCJdLGZ1bmN0aW9uKGEsYil7dC5SZWRpcmVjdHNbXCJzbGlkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPWkuYmVnaW4saz1pLmNvbXBsZXRlLGw9e2hlaWdodDpcIlwiLG1hcmdpblRvcDpcIlwiLG1hcmdpbkJvdHRvbTpcIlwiLHBhZGRpbmdUb3A6XCJcIixwYWRkaW5nQm90dG9tOlwiXCJ9LG49e307aS5kaXNwbGF5PT09ZCYmKGkuZGlzcGxheT1cIkRvd25cIj09PWI/XCJpbmxpbmVcIj09PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKT9cImlubGluZS1ibG9ja1wiOlwiYmxvY2tcIjpcIm5vbmVcIiksaS5iZWdpbj1mdW5jdGlvbigpe2omJmouY2FsbChnLGcpO2Zvcih2YXIgYyBpbiBsKXtuW2NdPWEuc3R5bGVbY107dmFyIGQ9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShhLGMpO2xbY109XCJEb3duXCI9PT1iP1tkLDBdOlswLGRdfW4ub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdyxhLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGkuY29tcGxldGU9ZnVuY3Rpb24oKXtmb3IodmFyIGIgaW4gbilhLnN0eWxlW2JdPW5bYl07ayYmay5jYWxsKGcsZyksaCYmaC5yZXNvbHZlcihnKX0sdChhLGwsaSl9fSksbS5lYWNoKFtcIkluXCIsXCJPdXRcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcImZhZGVcIitiXT1mdW5jdGlvbihhLGMsZSxmLGcsaCl7dmFyIGk9bS5leHRlbmQoe30sYyksaj17b3BhY2l0eTpcIkluXCI9PT1iPzE6MH0saz1pLmNvbXBsZXRlO2kuY29tcGxldGU9ZSE9PWYtMT9pLmJlZ2luPW51bGw6ZnVuY3Rpb24oKXtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSxpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiSW5cIj09PWI/XCJhdXRvXCI6XCJub25lXCIpLHQodGhpcyxqLGkpfX0pLHR9KHdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0b3x8d2luZG93LHdpbmRvdyxkb2N1bWVudCl9KSksIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KGsoYSxjKSxiKX1mdW5jdGlvbiBmKGEsYixjKXtyZXR1cm4hIUFycmF5LmlzQXJyYXkoYSkmJihnKGEsY1tiXSxjKSwhMCl9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfWZ1bmN0aW9uIGkoYSxiKXtyZXR1cm4gaChhLGIsITApfWZ1bmN0aW9uIGooYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmgoZCxjKX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBsKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1rYT9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gbShhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gbihhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbyhhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gcChhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24gcihhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24gcyhhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHQoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gdShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTtzKGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIHYoYSxiKXtmb3IodmFyIGMsZSxmPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9MDtnPGlhLmxlbmd0aDspe2lmKGM9aWFbZ10sZT1jP2MrZjpiLGUgaW4gYSlyZXR1cm4gZTtnKyt9cmV0dXJuIGR9ZnVuY3Rpb24gdygpe3JldHVybiBvYSsrfWZ1bmN0aW9uIHgoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiB5KGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe2woYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIHooYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gbmV3KGI9Yz9jOnJhP046c2E/UTpxYT9TOk0pKGEsQSl9ZnVuY3Rpb24gQShhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJnlhJiYwPT09ZC1lLGc9YiYoQWF8QmEpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLEIoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9RShiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1FKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9RihkKTtiLnRpbWVTdGFtcD1uYSgpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9SihoLGkpLGIuZGlzdGFuY2U9SShoLGkpLEMoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1IKGIuZGVsdGFYLGIuZGVsdGFZKSxiLnNjYWxlPWc/TChnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP0soZy5wb2ludGVycyxkKTowLEQoYyxiKTt2YXIgaj1hLmVsZW1lbnQ7cChiLnNyY0V2ZW50LnRhcmdldCxqKSYmKGo9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWp9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09eWF8fGYuZXZlbnRUeXBlPT09QWEpJiYoZT1hLnByZXZEZWx0YT17eDpmLmRlbHRhWHx8MCx5OmYuZGVsdGFZfHwwfSxkPWEub2Zmc2V0RGVsdGE9e3g6Yy54LHk6Yy55fSksYi5kZWx0YVg9ZS54KyhjLngtZC54KSxiLmRlbHRhWT1lLnkrKGMueS1kLnkpfWZ1bmN0aW9uIEQoYSxiKXt2YXIgYyxlLGYsZyxoPWEubGFzdEludGVydmFsfHxiLGk9Yi50aW1lU3RhbXAtaC50aW1lU3RhbXA7aWYoYi5ldmVudFR5cGUhPUJhJiYoaT54YXx8aC52ZWxvY2l0eT09PWQpKXt2YXIgaj1oLmRlbHRhWC1iLmRlbHRhWCxrPWguZGVsdGFZLWIuZGVsdGFZLGw9RyhpLGosayk7ZT1sLngsZj1sLnksYz1tYShsLngpPm1hKGwueSk/bC54OmwueSxnPUgoaixrKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgYz1oLnZlbG9jaXR5LGU9aC52ZWxvY2l0eVgsZj1oLnZlbG9jaXR5WSxnPWguZGlyZWN0aW9uO2IudmVsb2NpdHk9YyxiLnZlbG9jaXR5WD1lLGIudmVsb2NpdHlZPWYsYi5kaXJlY3Rpb249Z31mdW5jdGlvbiBFKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLnBvaW50ZXJzLmxlbmd0aDspYltjXT17Y2xpZW50WDpsYShhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6bGEoYS5wb2ludGVyc1tjXS5jbGllbnRZKX0sYysrO3JldHVybnt0aW1lU3RhbXA6bmEoKSxwb2ludGVyczpiLGNlbnRlcjpGKGIpLGRlbHRhWDphLmRlbHRhWCxkZWx0YVk6YS5kZWx0YVl9fWZ1bmN0aW9uIEYoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6bGEoYVswXS5jbGllbnRYKSx5OmxhKGFbMF0uY2xpZW50WSl9O2Zvcih2YXIgYz0wLGQ9MCxlPTA7Yj5lOyljKz1hW2VdLmNsaWVudFgsZCs9YVtlXS5jbGllbnRZLGUrKztyZXR1cm57eDpsYShjL2IpLHk6bGEoZC9iKX19ZnVuY3Rpb24gRyhhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBIKGEsYil7cmV0dXJuIGE9PT1iP0NhOm1hKGEpPj1tYShiKT9hPjA/RGE6RWE6Yj4wP0ZhOkdhfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPUthKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBKKGEsYixjKXtjfHwoYz1LYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBKKGJbMV0sYlswXSxMYSktSihhWzFdLGFbMF0sTGEpfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm4gSShiWzBdLGJbMV0sTGEpL0koYVswXSxhWzFdLExhKX1mdW5jdGlvbiBNKCl7dGhpcy5ldkVsPU5hLHRoaXMuZXZXaW49T2EsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEseS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTigpe3RoaXMuZXZFbD1SYSx0aGlzLmV2V2luPVNhLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBPKCl7dGhpcy5ldlRhcmdldD1VYSx0aGlzLmV2V2luPVZhLHRoaXMuc3RhcnRlZD0hMSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBQKGEsYil7dmFyIGM9dChhLnRvdWNoZXMpLGQ9dChhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoQWF8QmEpJiYoYz11KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUSgpe3RoaXMuZXZUYXJnZXQ9WGEsdGhpcy50YXJnZXRJZHM9e30seS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUihhLGIpe3ZhciBjPXQoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKHlhfHphKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXQoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIHAoYS50YXJnZXQsaSl9KSxiPT09eWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoQWF8QmEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3UoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBTKCl7eS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9ayh0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUSh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTSh0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gVChhLGIpe3RoaXMubWFuYWdlcj1hLHRoaXMuc2V0KGIpfWZ1bmN0aW9uIFUoYSl7aWYocShhLGJiKSlyZXR1cm4gYmI7dmFyIGI9cShhLGNiKSxjPXEoYSxkYik7cmV0dXJuIGImJmM/Y2IrXCIgXCIrZGI6Ynx8Yz9iP2NiOmRiOnEoYSxhYik/YWI6X2F9ZnVuY3Rpb24gVihhKXt0aGlzLmlkPXcoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9aShhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPW0odGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1lYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFcoYSl7cmV0dXJuIGEmamI/XCJjYW5jZWxcIjphJmhiP1wiZW5kXCI6YSZnYj9cIm1vdmVcIjphJmZiP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uIFgoYSl7cmV0dXJuIGE9PUdhP1wiZG93blwiOmE9PUZhP1widXBcIjphPT1EYT9cImxlZnRcIjphPT1FYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBZKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gWigpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uICQoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIF8oKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBhYSgpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBiYSgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGNhKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGEoKXtWLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGVhKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1tKGIucmVjb2duaXplcnMsZWEuZGVmYXVsdHMucHJlc2V0KSxuZXcgZmEoYSxiKX1mdW5jdGlvbiBmYShhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPWkoYixlYS5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eih0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBUKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxnYSh0aGlzLCEwKSxnKGIucmVjb2duaXplcnMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGQobmV3IGFbMF0oYVsxXSkpO2FbMl0mJmIucmVjb2duaXplV2l0aChhWzJdKSxhWzNdJiZiLnJlcXVpcmVGYWlsdXJlKGFbM10pfSx0aGlzKX1mdW5jdGlvbiBnYShhLGIpe3ZhciBjPWEuZWxlbWVudDtnKGEub3B0aW9ucy5jc3NQcm9wcyxmdW5jdGlvbihhLGQpe2Muc3R5bGVbdihjLnN0eWxlLGQpXT1iP2E6XCJcIn0pfWZ1bmN0aW9uIGhhKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGlhPVtcIlwiLFwid2Via2l0XCIsXCJtb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxqYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksa2E9XCJmdW5jdGlvblwiLGxhPU1hdGgucm91bmQsbWE9TWF0aC5hYnMsbmE9RGF0ZS5ub3csb2E9MSxwYT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2kscWE9XCJvbnRvdWNoc3RhcnRcImluIGEscmE9dihhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCxzYT1xYSYmcGEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx0YT1cInRvdWNoXCIsdWE9XCJwZW5cIix2YT1cIm1vdXNlXCIsd2E9XCJraW5lY3RcIix4YT0yNSx5YT0xLHphPTIsQWE9NCxCYT04LENhPTEsRGE9MixFYT00LEZhPTgsR2E9MTYsSGE9RGF8RWEsSWE9RmF8R2EsSmE9SGF8SWEsS2E9W1wieFwiLFwieVwiXSxMYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3kucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZuKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZuKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZuKHgodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm8odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm8odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm8oeCh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBNYT17bW91c2Vkb3duOnlhLG1vdXNlbW92ZTp6YSxtb3VzZXVwOkFhfSxOYT1cIm1vdXNlZG93blwiLE9hPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtqKE0seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1NYVthLnR5cGVdO2ImeWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZ6YSYmMSE9PWEud2hpY2gmJihiPUFhKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJkFhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTp2YSxzcmNFdmVudDphfSkpfX0pO3ZhciBQYT17cG9pbnRlcmRvd246eWEscG9pbnRlcm1vdmU6emEscG9pbnRlcnVwOkFhLHBvaW50ZXJjYW5jZWw6QmEscG9pbnRlcm91dDpCYX0sUWE9ezI6dGEsMzp1YSw0OnZhLDU6d2F9LFJhPVwicG9pbnRlcmRvd25cIixTYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmKFJhPVwiTVNQb2ludGVyRG93blwiLFNhPVwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIiksaihOLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1QYVtkXSxmPVFhW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09dGEsaD1zKGIsYS5wb2ludGVySWQsXCJwb2ludGVySWRcIik7ZSZ5YSYmKDA9PT1hLmJ1dHRvbnx8Zyk/MD5oJiYoYi5wdXNoKGEpLGg9Yi5sZW5ndGgtMSk6ZSYoQWF8QmEpJiYoYz0hMCksMD5ofHwoYltoXT1hLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGUse3BvaW50ZXJzOmIsY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpmLHNyY0V2ZW50OmF9KSxjJiZiLnNwbGljZShoLDEpKX19KTt2YXIgVGE9e3RvdWNoc3RhcnQ6eWEsdG91Y2htb3ZlOnphLHRvdWNoZW5kOkFhLHRvdWNoY2FuY2VsOkJhfSxVYT1cInRvdWNoc3RhcnRcIixWYT1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aihPLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9VGFbYS50eXBlXTtpZihiPT09eWEmJih0aGlzLnN0YXJ0ZWQ9ITApLHRoaXMuc3RhcnRlZCl7dmFyIGM9UC5jYWxsKHRoaXMsYSxiKTtiJihBYXxCYSkmJjA9PT1jWzBdLmxlbmd0aC1jWzFdLmxlbmd0aCYmKHRoaXMuc3RhcnRlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp0YSxzcmNFdmVudDphfSl9fX0pO3ZhciBXYT17dG91Y2hzdGFydDp5YSx0b3VjaG1vdmU6emEsdG91Y2hlbmQ6QWEsdG91Y2hjYW5jZWw6QmF9LFhhPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtqKFEseSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1XYVthLnR5cGVdLGM9Ui5jYWxsKHRoaXMsYSxiKTtjJiZ0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnRhLHNyY0V2ZW50OmF9KX19KSxqKFMseSx7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09dGEsZT1jLnBvaW50ZXJUeXBlPT12YTtpZihkKXRoaXMubW91c2UuYWxsb3c9ITE7ZWxzZSBpZihlJiYhdGhpcy5tb3VzZS5hbGxvdylyZXR1cm47YiYoQWF8QmEpJiYodGhpcy5tb3VzZS5hbGxvdz0hMCksdGhpcy5jYWxsYmFjayhhLGIsYyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgWWE9dihqYS5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLFphPVlhIT09ZCwkYT1cImNvbXB1dGVcIixfYT1cImF1dG9cIixhYj1cIm1hbmlwdWxhdGlvblwiLGJiPVwibm9uZVwiLGNiPVwicGFuLXhcIixkYj1cInBhbi15XCI7VC5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXthPT0kYSYmKGE9dGhpcy5jb21wdXRlKCkpLFphJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbWWFdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gZyh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7bChiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksVShhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFaYSl7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gdm9pZCBiLnByZXZlbnREZWZhdWx0KCk7dmFyIGQ9dGhpcy5hY3Rpb25zLGU9cShkLGJiKSxmPXEoZCxkYiksZz1xKGQsY2IpO3JldHVybiBlfHxmJiZjJkhhfHxnJiZjJklhP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgZWI9MSxmYj0yLGdiPTQsaGI9OCxpYj1oYixqYj0xNixrYj0zMjtWLnByb3RvdHlwZT17ZGVmYXVsdHM6e30sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1ZKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9WShhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPVkoYSx0aGlzKSwtMT09PXMoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1ZKGEsdGhpcyk7dmFyIGI9cyh0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChjLm9wdGlvbnMuZXZlbnQrKGI/VyhkKTpcIlwiKSxhKX12YXIgYz10aGlzLGQ9dGhpcy5zdGF0ZTtoYj5kJiZiKCEwKSxiKCksZD49aGImJmIoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPWtiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKGtifGViKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9aCh7fSxhKTtyZXR1cm4gbCh0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoaWJ8amJ8a2IpJiYodGhpcy5zdGF0ZT1lYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdm9pZCh0aGlzLnN0YXRlJihmYnxnYnxoYnxqYikmJnRoaXMudHJ5RW1pdChiKSkpOih0aGlzLnJlc2V0KCksdm9pZCh0aGlzLnN0YXRlPWtiKSl9LHByb2Nlc3M6ZnVuY3Rpb24oKXt9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7fSxyZXNldDpmdW5jdGlvbigpe319LGooWixWLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKGZifGdiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkJhfHwhZSk/YnxqYjpkfHxlP2MmQWE/YnxoYjpiJmZiP2J8Z2I6ZmI6a2J9fSksaigkLFose2RlZmF1bHRzOntldmVudDpcInBhblwiLHRocmVzaG9sZDoxMCxwb2ludGVyczoxLGRpcmVjdGlvbjpKYX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmSGEmJmIucHVzaChkYiksYSZJYSYmYi5wdXNoKGNiKSxifSxkaXJlY3Rpb25UZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPSEwLGQ9YS5kaXN0YW5jZSxlPWEuZGlyZWN0aW9uLGY9YS5kZWx0YVgsZz1hLmRlbHRhWTtyZXR1cm4gZSZiLmRpcmVjdGlvbnx8KGIuZGlyZWN0aW9uJkhhPyhlPTA9PT1mP0NhOjA+Zj9EYTpFYSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP0NhOjA+Zz9GYTpHYSxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBaLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJmZifHwhKHRoaXMuc3RhdGUmZmIpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj1YKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxqKF8sWix7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltiYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmZmIpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpLDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSl9fX0pLGooYWEsVix7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6NTAwLHRocmVzaG9sZDo1fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltfYV19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEFhfEJhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmeWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPWliLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZBYSlyZXR1cm4gaWI7cmV0dXJuIGtifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PWliJiYoYSYmYS5ldmVudFR5cGUmQWE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPW5hKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGooYmEsWix7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYmJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZmYil9fSksaihjYSxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJzd2lwZVwiLHRocmVzaG9sZDoxMCx2ZWxvY2l0eTouNjUsZGlyZWN0aW9uOkhhfElhLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuICQucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYyYoSGF8SWEpP2I9YS52ZWxvY2l0eTpjJkhhP2I9YS52ZWxvY2l0eVg6YyZJYSYmKGI9YS52ZWxvY2l0eVkpLHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmYyZhLmRpcmVjdGlvbiYmYS5kaXN0YW5jZT50aGlzLm9wdGlvbnMudGhyZXNob2xkJiZtYShiKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJkFhfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPVgoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxqKGRhLFYse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6Mixwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2FiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZ5YSYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZmJiZjKXtpZihhLmV2ZW50VHlwZSE9QWEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZz0hdGhpcy5wVGltZXx8YS50aW1lU3RhbXAtdGhpcy5wVGltZTxiLmludGVydmFsLGg9IXRoaXMucENlbnRlcnx8SSh0aGlzLnBDZW50ZXIsYS5jZW50ZXIpPGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWU9YS50aW1lU3RhbXAsdGhpcy5wQ2VudGVyPWEuY2VudGVyLGgmJmc/dGhpcy5jb3VudCs9MTp0aGlzLmNvdW50PTEsdGhpcy5faW5wdXQ9YTt2YXIgaT10aGlzLmNvdW50JWIudGFwcztpZigwPT09aSlyZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKT8odGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9aWIsdGhpcy50cnlFbWl0KCl9LGIuaW50ZXJ2YWwsdGhpcyksZmIpOmlifXJldHVybiBrYn0sZmFpbFRpbWVvdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9a2J9LHRoaXMub3B0aW9ucy5pbnRlcnZhbCx0aGlzKSxrYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT09aWImJih0aGlzLl9pbnB1dC50YXBDb3VudD10aGlzLmNvdW50LHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpfX0pLGVhLlZFUlNJT049XCIyLjAuNFwiLGVhLmRlZmF1bHRzPXtkb21FdmVudHM6ITEsdG91Y2hBY3Rpb246JGEsZW5hYmxlOiEwLGlucHV0VGFyZ2V0Om51bGwsaW5wdXRDbGFzczpudWxsLHByZXNldDpbW2JhLHtlbmFibGU6ITF9XSxbXyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtjYSx7ZGlyZWN0aW9uOkhhfV0sWyQse2RpcmVjdGlvbjpIYX0sW1wic3dpcGVcIl1dLFtkYV0sW2RhLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbYWFdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcImRlZmF1bHRcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgbGI9MSxtYj0yO2ZhLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSxhLnRvdWNoQWN0aW9uJiZ0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGEuaW5wdXRUYXJnZXQmJih0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmlucHV0LnRhcmdldD1hLmlucHV0VGFyZ2V0LHRoaXMuaW5wdXQuaW5pdCgpKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKGEpe3RoaXMuc2Vzc2lvbi5zdG9wcGVkPWE/bWI6bGJ9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNlc3Npb247aWYoIWIuc3RvcHBlZCl7dGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsZD10aGlzLnJlY29nbml6ZXJzLGU9Yi5jdXJSZWNvZ25pemVyOyghZXx8ZSYmZS5zdGF0ZSZpYikmJihlPWIuY3VyUmVjb2duaXplcj1udWxsKTtmb3IodmFyIGY9MDtmPGQubGVuZ3RoOyljPWRbZl0sYi5zdG9wcGVkPT09bWJ8fGUmJmMhPWUmJiFjLmNhblJlY29nbml6ZVdpdGgoZSk/Yy5yZXNldCgpOmMucmVjb2duaXplKGEpLCFlJiZjLnN0YXRlJihmYnxnYnxoYikmJihlPWIuY3VyUmVjb2duaXplcj1jKSxmKyt9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFYpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHMoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UocyhjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJmhhKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmdhKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0saChlYSx7SU5QVVRfU1RBUlQ6eWEsSU5QVVRfTU9WRTp6YSxJTlBVVF9FTkQ6QWEsSU5QVVRfQ0FOQ0VMOkJhLFNUQVRFX1BPU1NJQkxFOmViLFNUQVRFX0JFR0FOOmZiLFNUQVRFX0NIQU5HRUQ6Z2IsU1RBVEVfRU5ERUQ6aGIsU1RBVEVfUkVDT0dOSVpFRDppYixTVEFURV9DQU5DRUxMRUQ6amIsU1RBVEVfRkFJTEVEOmtiLERJUkVDVElPTl9OT05FOkNhLERJUkVDVElPTl9MRUZUOkRhLERJUkVDVElPTl9SSUdIVDpFYSxESVJFQ1RJT05fVVA6RmEsRElSRUNUSU9OX0RPV046R2EsRElSRUNUSU9OX0hPUklaT05UQUw6SGEsRElSRUNUSU9OX1ZFUlRJQ0FMOklhLERJUkVDVElPTl9BTEw6SmEsTWFuYWdlcjpmYSxJbnB1dDp5LFRvdWNoQWN0aW9uOlQsVG91Y2hJbnB1dDpRLE1vdXNlSW5wdXQ6TSxQb2ludGVyRXZlbnRJbnB1dDpOLFRvdWNoTW91c2VJbnB1dDpTLFNpbmdsZVRvdWNoSW5wdXQ6TyxSZWNvZ25pemVyOlYsQXR0clJlY29nbml6ZXI6WixUYXA6ZGEsUGFuOiQsU3dpcGU6Y2EsUGluY2g6XyxSb3RhdGU6YmEsUHJlc3M6YWEsb246bixvZmY6byxlYWNoOmcsbWVyZ2U6aSxleHRlbmQ6aCxpbmhlcml0OmosYmluZEZuOmsscHJlZml4ZWQ6dn0pLHR5cGVvZiBkZWZpbmU9PWthJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBlYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWVhOmFbY109ZWF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiaGFtbWVyanNcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/YShyZXF1aXJlKFwianF1ZXJ5XCIpLHJlcXVpcmUoXCJoYW1tZXJqc1wiKSk6YShqUXVlcnksSGFtbWVyKX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGMsZCl7dmFyIGU9YShjKTtlLmRhdGEoXCJoYW1tZXJcIil8fGUuZGF0YShcImhhbW1lclwiLG5ldyBiKGVbMF0sZCkpfWEuZm4uaGFtbWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtjKHRoaXMsYSl9KX0sYi5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihjLGQpe2IuY2FsbCh0aGlzLGMsZCksYSh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoe3R5cGU6YyxnZXN0dXJlOmR9KX19KGIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCl9KSxmdW5jdGlvbihhKXthLlBhY2thZ2U/TWF0ZXJpYWxpemU9e306YS5NYXRlcmlhbGl6ZT17fX0od2luZG93KSxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPVtcIndlYmtpdFwiLFwibW96XCJdLGQ9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZT1hLmNhbmNlbEFuaW1hdGlvbkZyYW1lLGY9Yy5sZW5ndGg7LS1mPj0wJiYhZDspZD1hW2NbZl0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sZT1hW2NbZl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZCYmZXx8KGQ9ZnVuY3Rpb24oYSl7dmFyIGM9K0RhdGUubm93KCksZD1NYXRoLm1heChiKzE2LGMpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YShiPWQpfSxkLWMpfSxlPWNsZWFyVGltZW91dCksYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZCxhLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWV9KHdpbmRvdyksTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmc9ZnVuY3Rpb24oYSl7dmFyIGI9YS5wcm9wKFwidGFnTmFtZVwiKXx8XCJcIixjPWEuYXR0cihcImlkXCIpfHxcIlwiLGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCI7cmV0dXJuKGIrYytkKS5yZXBsYWNlKC9cXHMvZyxcIlwiKX0sTWF0ZXJpYWxpemUuZ3VpZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gTWF0aC5mbG9vcig2NTUzNiooMStNYXRoLnJhbmRvbSgpKSkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYSgpK2EoKStcIi1cIithKCkrXCItXCIrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrYSgpK2EoKX19KCksTWF0ZXJpYWxpemUuZXNjYXBlSGFzaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD0pL2csXCJcXFxcJDFcIil9LE1hdGVyaWFsaXplLmVsZW1lbnRPclBhcmVudElzRml4ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9JChhKSxjPWIuYWRkKGIucGFyZW50cygpKSxkPSExO3JldHVybiBjLmVhY2goZnVuY3Rpb24oKXtpZihcImZpeGVkXCI9PT0kKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpKXJldHVybiBkPSEwLCExfSksZH07dmFyIGdldFRpbWU9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9O01hdGVyaWFsaXplLnRocm90dGxlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1udWxsLGg9MDtjfHwoYz17fSk7dmFyIGk9ZnVuY3Rpb24oKXtoPWMubGVhZGluZz09PSExPzA6Z2V0VGltZSgpLGc9bnVsbCxmPWEuYXBwbHkoZCxlKSxkPWU9bnVsbH07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGo9Z2V0VGltZSgpO2h8fGMubGVhZGluZyE9PSExfHwoaD1qKTt2YXIgaz1iLShqLWgpO3JldHVybiBkPXRoaXMsZT1hcmd1bWVudHMsazw9MD8oY2xlYXJUaW1lb3V0KGcpLGc9bnVsbCxoPWosZj1hLmFwcGx5KGQsZSksZD1lPW51bGwpOmd8fGMudHJhaWxpbmc9PT0hMXx8KGc9c2V0VGltZW91dChpLGspKSxmfX07dmFyIFZlbDtWZWw9alF1ZXJ5P2pRdWVyeS5WZWxvY2l0eTokPyQuVmVsb2NpdHk6VmVsb2NpdHksZnVuY3Rpb24oYSl7YS5mbi5jb2xsYXBzaWJsZT1mdW5jdGlvbihiLGMpe3ZhciBkPXthY2NvcmRpb246dm9pZCAwLG9uT3Blbjp2b2lkIDAsb25DbG9zZTp2b2lkIDB9LGU9YjtyZXR1cm4gYj1hLmV4dGVuZChkLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGQoYil7bT1sLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxiLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2IucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik6Yi5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLnBhcmVudCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2Iuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZURvd24oe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSk6Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSksbS5ub3QoYikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksbS5ub3QoYikucGFyZW50KCkuY2hpbGRyZW4oXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5pcyhcIjp2aXNpYmxlXCIpJiZhKHRoaXMpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIiksaChhKHRoaXMpLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWhlYWRlclwiKSl9fSl9KX1mdW5jdGlvbiBmKGIpe2IuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTpiLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIucGFyZW50KCkuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlRG93bih7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KTpiLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KX1mdW5jdGlvbiBnKGEsYyl7Y3x8YS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxiLmFjY29yZGlvbnx8XCJhY2NvcmRpb25cIj09PW58fHZvaWQgMD09PW4/ZChhKTpmKGEpLGgoYSl9ZnVuY3Rpb24gaChhKXthLmhhc0NsYXNzKFwiYWN0aXZlXCIpP1wiZnVuY3Rpb25cIj09dHlwZW9mIGIub25PcGVuJiZiLm9uT3Blbi5jYWxsKHRoaXMsYS5wYXJlbnQoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkNsb3NlJiZiLm9uQ2xvc2UuY2FsbCh0aGlzLGEucGFyZW50KCkpfWZ1bmN0aW9uIGkoYSl7dmFyIGI9aihhKTtyZXR1cm4gYi5sZW5ndGg+MH1mdW5jdGlvbiBqKGEpe3JldHVybiBhLmNsb3Nlc3QoXCJsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIil9ZnVuY3Rpb24gaygpe2wub2ZmKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpfXZhciBsPWEodGhpcyksbT1hKHRoaXMpLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxuPWwuZGF0YShcImNvbGxhcHNpYmxlXCIpO2lmKFwiZGVzdHJveVwiPT09ZSlyZXR1cm4gdm9pZCBrKCk7aWYoYz49MCYmYzxtLmxlbmd0aCl7dmFyIG89bS5lcShjKTtyZXR1cm4gdm9pZChvLmxlbmd0aCYmKFwib3BlblwiPT09ZXx8XCJjbG9zZVwiPT09ZSYmby5oYXNDbGFzcyhcImFjdGl2ZVwiKSkmJmcobykpfWsoKSxsLm9uKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIsZnVuY3Rpb24oYil7dmFyIGM9YShiLnRhcmdldCk7aShjKSYmKGM9aihjKSksZyhjKX0pLGIuYWNjb3JkaW9ufHxcImFjY29yZGlvblwiPT09bnx8dm9pZCAwPT09bj9nKG0uZmlsdGVyKFwiLmFjdGl2ZVwiKS5maXJzdCgpLCEwKTptLmZpbHRlcihcIi5hY3RpdmVcIikuZWFjaChmdW5jdGlvbigpe2coYSh0aGlzKSwhMCl9KX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIuY29sbGFwc2libGVcIikuY29sbGFwc2libGUoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4uc2Nyb2xsVG89ZnVuY3Rpb24oYil7cmV0dXJuIGEodGhpcykuc2Nyb2xsVG9wKGEodGhpcykuc2Nyb2xsVG9wKCktYSh0aGlzKS5vZmZzZXQoKS50b3ArYShiKS5vZmZzZXQoKS50b3ApLHRoaXN9LGEuZm4uZHJvcGRvd249ZnVuY3Rpb24oYil7dmFyIGM9e2luRHVyYXRpb246MzAwLG91dER1cmF0aW9uOjIyNSxjb25zdHJhaW5XaWR0aDohMCxob3ZlcjohMSxndXR0ZXI6MCxiZWxvd09yaWdpbjohMSxhbGlnbm1lbnQ6XCJsZWZ0XCIsc3RvcFByb3BhZ2F0aW9uOiExfTtyZXR1cm5cIm9wZW5cIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcIm9wZW5cIil9KSwhMSk6XCJjbG9zZVwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VcIil9KSwhMSk6dm9pZCB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBkKCl7dm9pZCAwIT09Zy5kYXRhKFwiaW5kdXJhdGlvblwiKSYmKGguaW5EdXJhdGlvbj1nLmRhdGEoXCJpbmR1cmF0aW9uXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJvdXRkdXJhdGlvblwiKSYmKGgub3V0RHVyYXRpb249Zy5kYXRhKFwib3V0ZHVyYXRpb25cIikpLHZvaWQgMCE9PWcuZGF0YShcImNvbnN0cmFpbndpZHRoXCIpJiYoaC5jb25zdHJhaW5XaWR0aD1nLmRhdGEoXCJjb25zdHJhaW53aWR0aFwiKSksdm9pZCAwIT09Zy5kYXRhKFwiaG92ZXJcIikmJihoLmhvdmVyPWcuZGF0YShcImhvdmVyXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJndXR0ZXJcIikmJihoLmd1dHRlcj1nLmRhdGEoXCJndXR0ZXJcIikpLHZvaWQgMCE9PWcuZGF0YShcImJlbG93b3JpZ2luXCIpJiYoaC5iZWxvd09yaWdpbj1nLmRhdGEoXCJiZWxvd29yaWdpblwiKSksdm9pZCAwIT09Zy5kYXRhKFwiYWxpZ25tZW50XCIpJiYoaC5hbGlnbm1lbnQ9Zy5kYXRhKFwiYWxpZ25tZW50XCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikmJihoLnN0b3BQcm9wYWdhdGlvbj1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikpfWZ1bmN0aW9uIGUoYil7XCJmb2N1c1wiPT09YiYmKGk9ITApLGQoKSxqLmFkZENsYXNzKFwiYWN0aXZlXCIpLGcuYWRkQ2xhc3MoXCJhY3RpdmVcIiksaC5jb25zdHJhaW5XaWR0aD09PSEwP2ouY3NzKFwid2lkdGhcIixnLm91dGVyV2lkdGgoKSk6ai5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwibm93cmFwXCIpO3ZhciBjPXdpbmRvdy5pbm5lckhlaWdodCxlPWcuaW5uZXJIZWlnaHQoKSxrPWcub2Zmc2V0KCkubGVmdCxsPWcub2Zmc2V0KCkudG9wLWEod2luZG93KS5zY3JvbGxUb3AoKSxtPWguYWxpZ25tZW50LG49MCxvPTAscD0wO2guYmVsb3dPcmlnaW49PT0hMCYmKHA9ZSk7dmFyIHE9MCxyPTAscz1nLnBhcmVudCgpO2lmKHMuaXMoXCJib2R5XCIpfHwoc1swXS5zY3JvbGxIZWlnaHQ+c1swXS5jbGllbnRIZWlnaHQmJihxPXNbMF0uc2Nyb2xsVG9wKSxzWzBdLnNjcm9sbFdpZHRoPnNbMF0uY2xpZW50V2lkdGgmJihyPXNbMF0uc2Nyb2xsTGVmdCkpLGsrai5pbm5lcldpZHRoKCk+YSh3aW5kb3cpLndpZHRoKCk/bT1cInJpZ2h0XCI6ay1qLmlubmVyV2lkdGgoKStnLmlubmVyV2lkdGgoKTwwJiYobT1cImxlZnRcIiksbCtqLmlubmVySGVpZ2h0KCk+YylpZihsK2Utai5pbm5lckhlaWdodCgpPDApe3ZhciB0PWMtbC1wO2ouY3NzKFwibWF4LWhlaWdodFwiLHQpfWVsc2UgcHx8KHArPWUpLHAtPWouaW5uZXJIZWlnaHQoKTtpZihcImxlZnRcIj09PW0pbj1oLmd1dHRlcixvPWcucG9zaXRpb24oKS5sZWZ0K247ZWxzZSBpZihcInJpZ2h0XCI9PT1tKXt2YXIgdT1nLnBvc2l0aW9uKCkubGVmdCtnLm91dGVyV2lkdGgoKS1qLm91dGVyV2lkdGgoKTtuPS1oLmd1dHRlcixvPXUrbn1qLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpnLnBvc2l0aW9uKCkudG9wK3ArcSxsZWZ0Om8rcn0pLGouc3RvcCghMCwhMCkuY3NzKFwib3BhY2l0eVwiLDApLnNsaWRlRG93bih7cXVldWU6ITEsZHVyYXRpb246aC5pbkR1cmF0aW9uLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KS5hbmltYXRlKHtvcGFjaXR5OjF9LHtxdWV1ZTohMSxkdXJhdGlvbjpoLmluRHVyYXRpb24sZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7ZigpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKX0pfSwwKX1mdW5jdGlvbiBmKCl7aT0hMSxqLmZhZGVPdXQoaC5vdXREdXJhdGlvbiksai5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ai5jc3MoXCJtYXgtaGVpZ2h0XCIsXCJcIil9LGgub3V0RHVyYXRpb24pfXZhciBnPWEodGhpcyksaD1hLmV4dGVuZCh7fSxjLGIpLGk9ITEsaj1hKFwiI1wiK2cuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKTtpZihkKCksZy5hZnRlcihqKSxoLmhvdmVyKXt2YXIgaz0hMTtnLnVuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpKSxnLm9uKFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKGEpe2s9PT0hMSYmKGUoKSxrPSEwKX0pLGcub24oXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oYil7dmFyIGM9Yi50b0VsZW1lbnR8fGIucmVsYXRlZFRhcmdldDthKGMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5pcyhqKXx8KGouc3RvcCghMCwhMCksZigpLGs9ITEpfSksai5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihiKXt2YXIgYz1iLnRvRWxlbWVudHx8Yi5yZWxhdGVkVGFyZ2V0O2EoYykuY2xvc2VzdChcIi5kcm9wZG93bi1idXR0b25cIikuaXMoZyl8fChqLnN0b3AoITAsITApLGYoKSxrPSExKX0pfWVsc2UgZy51bmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSksZy5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7aXx8KGdbMF0hPWIuY3VycmVudFRhcmdldHx8Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8MCE9PWEoYi50YXJnZXQpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5sZW5ndGg/Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGYoKSxhKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSkpOihiLnByZXZlbnREZWZhdWx0KCksaC5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCksZShcImNsaWNrXCIpKSl9KTtnLm9uKFwib3BlblwiLGZ1bmN0aW9uKGEsYil7ZShiKX0pLGcub24oXCJjbG9zZVwiLGYpfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5kcm9wZG93bi1idXR0b25cIikuZHJvcGRvd24oKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1xudmFyIGI9MCxjPTAsZD1mdW5jdGlvbigpe3JldHVybiBjKyssXCJtYXRlcmlhbGl6ZS1tb2RhbC1vdmVybGF5LVwiK2N9LGU9e2luaXQ6ZnVuY3Rpb24oYyl7dmFyIGU9e29wYWNpdHk6LjUsaW5EdXJhdGlvbjozNTAsb3V0RHVyYXRpb246MjUwLHJlYWR5OnZvaWQgMCxjb21wbGV0ZTp2b2lkIDAsZGlzbWlzc2libGU6ITAsc3RhcnRpbmdUb3A6XCI0JVwiLGVuZGluZ1RvcDpcIjEwJVwifTtyZXR1cm4gYz1hLmV4dGVuZChlLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1hKHRoaXMpLmF0dHIoXCJpZFwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpLGc9ZnVuY3Rpb24oKXt2YXIgZD1lLmRhdGEoXCJvdmVybGF5LWlkXCIpLGY9YShcIiNcIitkKTtlLnJlbW92ZUNsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vZmYoXCJjbGljay5jbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJrZXl1cC5tb2RhbFwiK2QpLGYudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRRdWFydFwifSk7dmFyIGc9e2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLmNvbXBsZXRlJiZjLmNvbXBsZXRlLmNhbGwodGhpcyxlKSxmLnJlbW92ZSgpLGItLX19O2UuaGFzQ2xhc3MoXCJib3R0b20tc2hlZXRcIik/ZS52ZWxvY2l0eSh7Ym90dG9tOlwiLTEwMCVcIixvcGFjaXR5OjB9LGcpOmUudmVsb2NpdHkoe3RvcDpjLnN0YXJ0aW5nVG9wLG9wYWNpdHk6MCxzY2FsZVg6Ljd9LGcpfSxoPWZ1bmN0aW9uKGYpe3ZhciBoPWEoXCJib2R5XCIpLGk9aC5pbm5lcldpZHRoKCk7aWYoaC5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGgud2lkdGgoaSksIWUuaGFzQ2xhc3MoXCJvcGVuXCIpKXt2YXIgaj1kKCksaz1hKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO2xTdGFjaz0rK2Isay5hdHRyKFwiaWRcIixqKS5jc3MoXCJ6LWluZGV4XCIsMWUzKzIqbFN0YWNrKSxlLmRhdGEoXCJvdmVybGF5LWlkXCIsaikuY3NzKFwiei1pbmRleFwiLDFlMysyKmxTdGFjaysxKSxlLmFkZENsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5hcHBlbmQoayksYy5kaXNtaXNzaWJsZSYmKGsuY2xpY2soZnVuY3Rpb24oKXtnKCl9KSxhKGRvY3VtZW50KS5vbihcImtleXVwLm1vZGFsXCIraixmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmZygpfSkpLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vbihcImNsaWNrLmNsb3NlXCIsZnVuY3Rpb24oYSl7ZygpfSksay5jc3Moe2Rpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6MH0pLGUuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OjB9KSxrLnZlbG9jaXR5KHtvcGFjaXR5OmMub3BhY2l0eX0se2R1cmF0aW9uOmMuaW5EdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCJ9KSxlLmRhdGEoXCJhc3NvY2lhdGVkLW92ZXJsYXlcIixrWzBdKTt2YXIgbD17ZHVyYXRpb246Yy5pbkR1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGMucmVhZHkmJmMucmVhZHkuY2FsbCh0aGlzLGUsZil9fTtlLmhhc0NsYXNzKFwiYm90dG9tLXNoZWV0XCIpP2UudmVsb2NpdHkoe2JvdHRvbTpcIjBcIixvcGFjaXR5OjF9LGwpOihhLlZlbG9jaXR5Lmhvb2soZSxcInNjYWxlWFwiLC43KSxlLmNzcyh7dG9wOmMuc3RhcnRpbmdUb3B9KSxlLnZlbG9jaXR5KHt0b3A6Yy5lbmRpbmdUb3Asb3BhY2l0eToxLHNjYWxlWDpcIjFcIn0sbCkpfX07YShkb2N1bWVudCkub2ZmKFwiY2xpY2subW9kYWxUcmlnZ2VyXCIsJ2FbaHJlZj1cIiMnK2YrJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJytmKydcIl0nKSxhKHRoaXMpLm9mZihcIm9wZW5Nb2RhbFwiKSxhKHRoaXMpLm9mZihcImNsb3NlTW9kYWxcIiksYShkb2N1bWVudCkub24oXCJjbGljay5tb2RhbFRyaWdnZXJcIiwnYVtocmVmPVwiIycrZisnXCJdLCBbZGF0YS10YXJnZXQ9XCInK2YrJ1wiXScsZnVuY3Rpb24oYil7Yy5zdGFydGluZ1RvcD0oYSh0aGlzKS5vZmZzZXQoKS50b3AtYSh3aW5kb3cpLnNjcm9sbFRvcCgpKS8xLjE1LGgoYSh0aGlzKSksYi5wcmV2ZW50RGVmYXVsdCgpfSksYSh0aGlzKS5vbihcIm9wZW5Nb2RhbFwiLGZ1bmN0aW9uKCl7YSh0aGlzKS5hdHRyKFwiaHJlZlwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpO2goKX0pLGEodGhpcykub24oXCJjbG9zZU1vZGFsXCIsZnVuY3Rpb24oKXtnKCl9KX0pfSxvcGVuOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwib3Blbk1vZGFsXCIpfSxjbG9zZTpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcImNsb3NlTW9kYWxcIil9fTthLmZuLm1vZGFsPWZ1bmN0aW9uKGIpe3JldHVybiBlW2JdP2VbYl0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBiJiZiP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitiK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbFwiKTplLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLm1hdGVyaWFsYm94PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtmPSExO3ZhciBiPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGQ9KHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCxpLmRhdGEoXCJ3aWR0aFwiKSksZz1pLmRhdGEoXCJoZWlnaHRcIik7aS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIiNtYXRlcmlhbGJveC1vdmVybGF5XCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiLm1hdGVyaWFsYm94LWNhcHRpb25cIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIjbWF0ZXJpYWxib3gtb3ZlcmxheVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZT0hMSxhKHRoaXMpLnJlbW92ZSgpfX0pLGkudmVsb2NpdHkoe3dpZHRoOmQsaGVpZ2h0OmcsbGVmdDowLHRvcDowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Yi5jc3Moe2hlaWdodDpcIlwiLHdpZHRoOlwiXCIscG9zaXRpb246XCJcIix0b3A6XCJcIixsZWZ0OlwiXCJ9KSxpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxpLmF0dHIoXCJzdHlsZVwiLGspLGkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZj0hMCxjJiZjLmNzcyhcIm92ZXJmbG93XCIsXCJcIil9fSksYShcIi5tYXRlcmlhbGJveC1jYXB0aW9uXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfWlmKCFhKHRoaXMpLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIikpe2EodGhpcykuYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgYyxkLGU9ITEsZj0hMCxnPTI3NSxoPTIwMCxpPWEodGhpcyksaj1hKFwiPGRpdj48L2Rpdj5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1wbGFjZWhvbGRlclwiKSxrPWkuYXR0cihcInN0eWxlXCIpO2kud3JhcChqKSxpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBoPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGo9d2luZG93LmlubmVyV2lkdGgsaz13aW5kb3cuaW5uZXJIZWlnaHQsbD1pLndpZHRoKCksbT1pLmhlaWdodCgpO2lmKGY9PT0hMSlyZXR1cm4gYigpLCExO2lmKGUmJmY9PT0hMClyZXR1cm4gYigpLCExO2Y9ITEsaS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlPSEwLGguY3NzKHt3aWR0aDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLGhlaWdodDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxwb3NpdGlvbjpcInJlbGF0aXZlXCIsdG9wOjAsbGVmdDowfSksYz12b2lkIDAsZD1oWzBdLnBhcmVudE5vZGU7Zm9yKDtudWxsIT09ZCYmIWEoZCkuaXMoZG9jdW1lbnQpOyl7dmFyIG49YShkKTtcInZpc2libGVcIiE9PW4uY3NzKFwib3ZlcmZsb3dcIikmJihuLmNzcyhcIm92ZXJmbG93XCIsXCJ2aXNpYmxlXCIpLGM9dm9pZCAwPT09Yz9uOmMuYWRkKG4pKSxkPWQucGFyZW50Tm9kZX1pLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLFwiei1pbmRleFwiOjFlMyxcIndpbGwtY2hhbmdlXCI6XCJsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcIn0pLmRhdGEoXCJ3aWR0aFwiLGwpLmRhdGEoXCJoZWlnaHRcIixtKTt2YXIgbz1hKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpLmNzcyh7b3BhY2l0eTowfSkuY2xpY2soZnVuY3Rpb24oKXtmPT09ITAmJmIoKX0pO2kuYmVmb3JlKG8pO3ZhciBwPW9bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoby5jc3Moe3dpZHRoOmosaGVpZ2h0OmssbGVmdDotMSpwLmxlZnQsdG9wOi0xKnAudG9wfSksby52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksXCJcIiE9PWkuZGF0YShcImNhcHRpb25cIikpe3ZhciBxPWEoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7cS50ZXh0KGkuZGF0YShcImNhcHRpb25cIikpLGEoXCJib2R5XCIpLmFwcGVuZChxKSxxLmNzcyh7ZGlzcGxheTpcImlubGluZVwifSkscS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9dmFyIHI9MCxzPWwvaix0PW0vayx1PTAsdj0wO3M+dD8ocj1tL2wsdT0uOSpqLHY9LjkqaipyKToocj1sL20sdT0uOSprKnIsdj0uOSprKSxpLmhhc0NsYXNzKFwicmVzcG9uc2l2ZS1pbWdcIik/aS52ZWxvY2l0eSh7XCJtYXgtd2lkdGhcIjp1LHdpZHRoOmx9LHtkdXJhdGlvbjowLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aS5jc3Moe2xlZnQ6MCx0b3A6MH0pLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfX0pOmkuY3NzKFwibGVmdFwiLDApLmNzcyhcInRvcFwiLDApLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2UmJmIoKX0pLGEoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZmPT09ITAmJmUmJmIoKX0pfX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIubWF0ZXJpYWxib3hlZFwiKS5tYXRlcmlhbGJveCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5wYXJhbGxheD1mdW5jdGlvbigpe3ZhciBiPWEod2luZG93KS53aWR0aCgpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChjKXt2YXIgZDtkPWI8NjAxP2UuaGVpZ2h0KCk+MD9lLmhlaWdodCgpOmUuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk6ZS5oZWlnaHQoKT4wP2UuaGVpZ2h0KCk6NTAwO3ZhciBmPWUuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKSxnPWYuaGVpZ2h0KCksaD1nLWQsaT1lLm9mZnNldCgpLnRvcCtkLGo9ZS5vZmZzZXQoKS50b3Asaz1hKHdpbmRvdykuc2Nyb2xsVG9wKCksbD13aW5kb3cuaW5uZXJIZWlnaHQsbT1rK2wsbj0obS1qKS8oZCtsKSxvPU1hdGgucm91bmQoaCpuKTtjJiZmLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpLGk+ayYmajxrK2wmJmYuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUzRCgtNTAlLFwiK28rXCJweCwgMClcIil9dmFyIGU9YSh0aGlzKTtlLmFkZENsYXNzKFwicGFyYWxsYXhcIiksZS5jaGlsZHJlbihcImltZ1wiKS5vbmUoXCJsb2FkXCIsZnVuY3Rpb24oKXtkKCEwKX0pLmVhY2goZnVuY3Rpb24oKXt0aGlzLmNvbXBsZXRlJiZhKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2I9YSh3aW5kb3cpLndpZHRoKCksZCghMSl9KSxhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7Yj1hKHdpbmRvdykud2lkdGgoKSxkKCExKX0pfSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtvblNob3c6bnVsbCxzd2lwZWFibGU6ITEscmVzcG9uc2l2ZVRocmVzaG9sZDoxLzB9O2I9YS5leHRlbmQoYyxiKTt2YXIgZD1NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyhhKHRoaXMpKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlLGYsZyxoLGksaj1kK2Msaz1hKHRoaXMpLGw9YSh3aW5kb3cpLndpZHRoKCksbT1rLmZpbmQoXCJsaS50YWIgYVwiKSxuPWsud2lkdGgoKSxvPWEoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgscT1wcmV2X2luZGV4PTAscj0hMSxzPTMwMCx0PWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmNlaWwobi1hLnBvc2l0aW9uKCkubGVmdC1hLm91dGVyV2lkdGgoKS1rLnNjcm9sbExlZnQoKSl9LHU9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5wb3NpdGlvbigpLmxlZnQray5zY3JvbGxMZWZ0KCkpfSx2PWZ1bmN0aW9uKGEpe3EtYT49MD8oaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGgudmVsb2NpdHkoe2xlZnQ6dShlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKTooaC52ZWxvY2l0eSh7bGVmdDp1KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKX07Yi5zd2lwZWFibGUmJmw+Yi5yZXNwb25zaXZlVGhyZXNob2xkJiYoYi5zd2lwZWFibGU9ITEpLGU9YShtLmZpbHRlcignW2hyZWY9XCInK2xvY2F0aW9uLmhhc2grJ1wiXScpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhLmFjdGl2ZVwiKS5maXJzdCgpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhXCIpLmZpcnN0KCkpLGUuYWRkQ2xhc3MoXCJhY3RpdmVcIikscT1tLmluZGV4KGUpLHE8MCYmKHE9MCksdm9pZCAwIT09ZVswXSYmKGY9YShlWzBdLmhhc2gpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGsuZmluZChcIi5pbmRpY2F0b3JcIikubGVuZ3RofHxrLmFwcGVuZCgnPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PicpLGg9ay5maW5kKFwiLmluZGljYXRvclwiKSxrLmFwcGVuZChoKSxrLmlzKFwiOnZpc2libGVcIikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtoLmNzcyh7cmlnaHQ6dChlKX0pLGguY3NzKHtsZWZ0OnUoZSl9KX0sMCksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YWJzLVwiK2opLm9uKFwicmVzaXplLnRhYnMtXCIraixmdW5jdGlvbigpe249ay53aWR0aCgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxxPDAmJihxPTApLDAhPT1wJiYwIT09biYmKGguY3NzKHtyaWdodDp0KGUpfSksaC5jc3Moe2xlZnQ6dShlKX0pKX0pLGIuc3dpcGVhYmxlPyhtLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7Yi5hZGRDbGFzcyhcImNhcm91c2VsLWl0ZW1cIiksbz1vLmFkZChiKX0pLGc9by53cmFwQWxsKCc8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50IGNhcm91c2VsXCI+PC9kaXY+Jyksby5jc3MoXCJkaXNwbGF5XCIsXCJcIiksYShcIi50YWJzLWNvbnRlbnQuY2Fyb3VzZWxcIikuY2Fyb3VzZWwoe2Z1bGxXaWR0aDohMCxub1dyYXA6ITAsb25DeWNsZVRvOmZ1bmN0aW9uKGEpe2lmKCFyKXt2YXIgYj1xO3E9Zy5pbmRleChhKSxlPW0uZXEocSksdihiKX19fSkpOm0ubm90KGUpLmVhY2goZnVuY3Rpb24oKXthKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpfSksay5vZmYoXCJjbGljay50YWJzXCIpLm9uKFwiY2xpY2sudGFic1wiLFwiYVwiLGZ1bmN0aW9uKGMpe2lmKGEodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSlyZXR1cm4gdm9pZCBjLnByZXZlbnREZWZhdWx0KCk7aWYoIWEodGhpcykuYXR0cihcInRhcmdldFwiKSl7cj0hMCxuPWsud2lkdGgoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgsZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgZD1mO2U9YSh0aGlzKSxmPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKSxtPWsuZmluZChcImxpLnRhYiBhXCIpO2UucG9zaXRpb24oKTtlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHByZXZfaW5kZXg9cSxxPW0uaW5kZXgoYSh0aGlzKSkscTwwJiYocT0wKSxiLnN3aXBlYWJsZT9vLmxlbmd0aCYmby5jYXJvdXNlbChcInNldFwiLHEpOih2b2lkIDAhPT1mJiYoZi5zaG93KCksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uU2hvdyYmYi5vblNob3cuY2FsbCh0aGlzLGYpKSx2b2lkIDA9PT1kfHxkLmlzKGYpfHwoZC5oaWRlKCksZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSkpLGk9c2V0VGltZW91dChmdW5jdGlvbigpe3I9ITF9LHMpLHYocHJldl9pbmRleCksYy5wcmV2ZW50RGVmYXVsdCgpfX0pfSl9LHNlbGVjdF90YWI6ZnVuY3Rpb24oYSl7dGhpcy5maW5kKCdhW2hyZWY9XCIjJythKydcIl0nKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnRhYnM9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhYnNcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwidWwudGFic1wiKS50YWJzKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnRvb2x0aXA9ZnVuY3Rpb24oYyl7dmFyIGQ9NSxlPXtkZWxheTozNTAsdG9vbHRpcDpcIlwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaHRtbDohMX07cmV0dXJuXCJyZW1vdmVcIj09PWM/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EoXCIjXCIrYSh0aGlzKS5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpKS5yZW1vdmUoKSxhKHRoaXMpLm9mZihcIm1vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXBcIil9KSwhMSk6KGM9YS5leHRlbmQoZSxjKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1NYXRlcmlhbGl6ZS5ndWlkKCksZj1hKHRoaXMpO2YuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSYmYShcIiNcIitmLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikpLnJlbW92ZSgpLGYuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiLGUpO3ZhciBnLGgsaSxqLGssbCxtPWZ1bmN0aW9uKCl7Zz1mLmF0dHIoXCJkYXRhLWh0bWxcIik/XCJ0cnVlXCI9PT1mLmF0dHIoXCJkYXRhLWh0bWxcIik6Yy5odG1sLGg9Zi5hdHRyKFwiZGF0YS1kZWxheVwiKSxoPXZvaWQgMD09PWh8fFwiXCI9PT1oP2MuZGVsYXk6aCxpPWYuYXR0cihcImRhdGEtcG9zaXRpb25cIiksaT12b2lkIDA9PT1pfHxcIlwiPT09aT9jLnBvc2l0aW9uOmksaj1mLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiksaj12b2lkIDA9PT1qfHxcIlwiPT09aj9jLnRvb2x0aXA6an07bSgpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGI9YSgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtyZXR1cm4gaj1nP2EoXCI8c3Bhbj48L3NwYW4+XCIpLmh0bWwoaik6YShcIjxzcGFuPjwvc3Bhbj5cIikudGV4dChqKSxiLmFwcGVuZChqKS5hcHBlbmRUbyhhKFwiYm9keVwiKSkuYXR0cihcImlkXCIsZSksbD1hKCc8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj4nKSxsLmFwcGVuZFRvKGIpLGJ9O2s9bigpLGYub2ZmKFwibW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcFwiKTt2YXIgbyxwPSExO2Yub24oe1wibW91c2VlbnRlci50b29sdGlwXCI6ZnVuY3Rpb24oYSl7dmFyIGM9ZnVuY3Rpb24oKXttKCkscD0hMCxrLnZlbG9jaXR5KFwic3RvcFwiKSxsLnZlbG9jaXR5KFwic3RvcFwiKSxrLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCJ9KTt2YXIgYSxjLGUsZz1mLm91dGVyV2lkdGgoKSxoPWYub3V0ZXJIZWlnaHQoKSxqPWsub3V0ZXJIZWlnaHQoKSxuPWsub3V0ZXJXaWR0aCgpLG89XCIwcHhcIixxPVwiMHB4XCIscj1sWzBdLm9mZnNldFdpZHRoLHM9bFswXS5vZmZzZXRIZWlnaHQsdD04LHU9OCx2PTA7XCJ0b3BcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3Atai1kLGM9Zi5vZmZzZXQoKS5sZWZ0K2cvMi1uLzIsZT1iKGMsYSxuLGopLG89XCItMTBweFwiLGwuY3NzKHtib3R0b206MCxsZWZ0OjAsYm9yZGVyUmFkaXVzOlwiMTRweCAxNHB4IDAgMFwiLHRyYW5zZm9ybU9yaWdpbjpcIjUwJSAxMDAlXCIsbWFyZ2luVG9wOmosbWFyZ2luTGVmdDpuLzItci8yfSkpOlwibGVmdFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcCtoLzItai8yLGM9Zi5vZmZzZXQoKS5sZWZ0LW4tZCxlPWIoYyxhLG4saikscT1cIi0xMHB4XCIsbC5jc3Moe3RvcDpcIi03cHhcIixyaWdodDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIxNHB4IDAgMCAxNHB4XCIsdHJhbnNmb3JtT3JpZ2luOlwiOTUlIDUwJVwiLG1hcmdpblRvcDpqLzIsbWFyZ2luTGVmdDpufSkpOlwicmlnaHRcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3AraC8yLWovMixjPWYub2Zmc2V0KCkubGVmdCtnK2QsZT1iKGMsYSxuLGopLHE9XCIrMTBweFwiLGwuY3NzKHt0b3A6XCItN3B4XCIsbGVmdDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIwIDE0cHggMTRweCAwXCIsdHJhbnNmb3JtT3JpZ2luOlwiNSUgNTAlXCIsbWFyZ2luVG9wOmovMixtYXJnaW5MZWZ0OlwiMHB4XCJ9KSk6KGE9Zi5vZmZzZXQoKS50b3ArZi5vdXRlckhlaWdodCgpK2QsYz1mLm9mZnNldCgpLmxlZnQrZy8yLW4vMixlPWIoYyxhLG4saiksbz1cIisxMHB4XCIsbC5jc3Moe3RvcDowLGxlZnQ6MCxtYXJnaW5MZWZ0Om4vMi1yLzJ9KSksay5jc3Moe3RvcDplLnksbGVmdDplLnh9KSx0PU1hdGguU1FSVDIqbi9wYXJzZUludChyKSx1PU1hdGguU1FSVDIqai9wYXJzZUludChzKSx2PU1hdGgubWF4KHQsdSksay52ZWxvY2l0eSh7dHJhbnNsYXRlWTpvLHRyYW5zbGF0ZVg6cX0se2R1cmF0aW9uOjM1MCxxdWV1ZTohMX0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZGVsYXk6NTAscXVldWU6ITF9KSxsLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1NSxkZWxheTowLHF1ZXVlOiExfSkudmVsb2NpdHkoe3NjYWxlWDp2LHNjYWxlWTp2fSx7ZHVyYXRpb246MzAwLGRlbGF5OjAscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwifSl9O289c2V0VGltZW91dChjLGgpfSxcIm1vdXNlbGVhdmUudG9vbHRpcFwiOmZ1bmN0aW9uKCl7cD0hMSxjbGVhclRpbWVvdXQobyksc2V0VGltZW91dChmdW5jdGlvbigpe3AhPT0hMCYmKGsudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVZOjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExfSksbC52ZWxvY2l0eSh7b3BhY2l0eTowLHNjYWxlWDoxLHNjYWxlWToxfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7bC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGsuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxwPSExfX0pKX0sMjI1KX19KX0pKX07dmFyIGI9ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9YixnPWM7cmV0dXJuIGY8MD9mPTQ6ZitkPndpbmRvdy5pbm5lcldpZHRoJiYoZi09ZitkLXdpbmRvdy5pbm5lcldpZHRoKSxnPDA/Zz00OmcrZT53aW5kb3cuaW5uZXJIZWlnaHQrYSh3aW5kb3cpLnNjcm9sbFRvcCYmKGctPWcrZS13aW5kb3cuaW5uZXJIZWlnaHQpLHt4OmYseTpnfX07YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLnRvb2x0aXBwZWRcIikudG9vbHRpcCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhKXtyZXR1cm4gbnVsbCE9PWEmJmE9PT1hLndpbmRvd31mdW5jdGlvbiBjKGEpe3JldHVybiBiKGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9ZnVuY3Rpb24gZChhKXt2YXIgYixkLGU9e3RvcDowLGxlZnQ6MH0sZj1hJiZhLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYoZT1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxkPWMoZikse3RvcDplLnRvcCtkLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2QucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fX1mdW5jdGlvbiBlKGEpe3ZhciBiPVwiXCI7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGIrPWMrXCI6XCIrYVtjXStcIjtcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gZihhKXtpZihrLmFsbG93RXZlbnQoYSk9PT0hMSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9bnVsbCxjPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQ7bnVsbCE9PWMucGFyZW50RWxlbWVudDspe2lmKCEoYyBpbnN0YW5jZW9mIFNWR0VsZW1lbnR8fGMuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIik9PT0tMSkpe2I9YzticmVha31pZihjLmNsYXNzTGlzdC5jb250YWlucyhcIndhdmVzLWVmZmVjdFwiKSl7Yj1jO2JyZWFrfWM9Yy5wYXJlbnRFbGVtZW50fXJldHVybiBifWZ1bmN0aW9uIGcoYil7dmFyIGM9ZihiKTtudWxsIT09YyYmKGouc2hvdyhiLGMpLFwib250b3VjaHN0YXJ0XCJpbiBhJiYoYy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixqLmhpZGUsITEpLGMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsai5oaWRlLCExKSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGouaGlkZSwhMSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGouaGlkZSwhMSkpfXZhciBoPWh8fHt9LGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KSxqPXtkdXJhdGlvbjo3NTAsc2hvdzpmdW5jdGlvbihhLGIpe2lmKDI9PT1hLmJ1dHRvbilyZXR1cm4hMTt2YXIgYz1ifHx0aGlzLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmLmNsYXNzTmFtZT1cIndhdmVzLXJpcHBsZVwiLGMuYXBwZW5kQ2hpbGQoZik7dmFyIGc9ZChjKSxoPWEucGFnZVktZy50b3AsaT1hLnBhZ2VYLWcubGVmdCxrPVwic2NhbGUoXCIrYy5jbGllbnRXaWR0aC8xMDAqMTArXCIpXCI7XCJ0b3VjaGVzXCJpbiBhJiYoaD1hLnRvdWNoZXNbMF0ucGFnZVktZy50b3AsaT1hLnRvdWNoZXNbMF0ucGFnZVgtZy5sZWZ0KSxmLnNldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiLERhdGUubm93KCkpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiLGspLGYuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsaSksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIixoKTt2YXIgbD17dG9wOmgrXCJweFwiLGxlZnQ6aStcInB4XCJ9O2YuY2xhc3NOYW1lPWYuY2xhc3NOYW1lK1wiIHdhdmVzLW5vdHJhbnNpdGlvblwiLGYuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGwpKSxmLmNsYXNzTmFtZT1mLmNsYXNzTmFtZS5yZXBsYWNlKFwid2F2ZXMtbm90cmFuc2l0aW9uXCIsXCJcIiksbFtcIi13ZWJraXQtdHJhbnNmb3JtXCJdPWssbFtcIi1tb3otdHJhbnNmb3JtXCJdPWssbFtcIi1tcy10cmFuc2Zvcm1cIl09ayxsW1wiLW8tdHJhbnNmb3JtXCJdPWssbC50cmFuc2Zvcm09ayxsLm9wYWNpdHk9XCIxXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1wiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixsW1widHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUobCkpfSxoaWRlOmZ1bmN0aW9uKGEpe2sudG91Y2h1cChhKTt2YXIgYj10aGlzLGM9KDEuNCpiLmNsaWVudFdpZHRoLG51bGwpLGQ9Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2F2ZXMtcmlwcGxlXCIpO2lmKCEoZC5sZW5ndGg+MCkpcmV0dXJuITE7Yz1kW2QubGVuZ3RoLTFdO3ZhciBmPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpLGc9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiksaD1jLmdldEF0dHJpYnV0ZShcImRhdGEtc2NhbGVcIiksaT1EYXRlLm5vdygpLU51bWJlcihjLmdldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiKSksbD0zNTAtaTtsPDAmJihsPTApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT17dG9wOmcrXCJweFwiLGxlZnQ6ZitcInB4XCIsb3BhY2l0eTpcIjBcIixcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItd2Via2l0LXRyYW5zZm9ybVwiOmgsXCItbW96LXRyYW5zZm9ybVwiOmgsXCItbXMtdHJhbnNmb3JtXCI6aCxcIi1vLXRyYW5zZm9ybVwiOmgsdHJhbnNmb3JtOmh9O2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGEpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHJ5e2IucmVtb3ZlQ2hpbGQoYyl9Y2F0Y2goYSl7cmV0dXJuITF9fSxqLmR1cmF0aW9uKX0sbCl9LHdyYXBJbnB1dDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihcImlucHV0XCI9PT1jLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGQ9Yy5wYXJlbnROb2RlO2lmKFwiaVwiPT09ZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJmQuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIikhPT0tMSljb250aW51ZTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtlLmNsYXNzTmFtZT1jLmNsYXNzTmFtZStcIiB3YXZlcy1pbnB1dC13cmFwcGVyXCI7dmFyIGY9Yy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtmfHwoZj1cIlwiKSxlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZiksYy5jbGFzc05hbWU9XCJ3YXZlcy1idXR0b24taW5wdXRcIixjLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLGQucmVwbGFjZUNoaWxkKGUsYyksZS5hcHBlbmRDaGlsZChjKX19fX0saz17dG91Y2hlczowLGFsbG93RXZlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9ITA7cmV0dXJuXCJ0b3VjaHN0YXJ0XCI9PT1hLnR5cGU/ay50b3VjaGVzKz0xOlwidG91Y2hlbmRcIj09PWEudHlwZXx8XCJ0b3VjaGNhbmNlbFwiPT09YS50eXBlP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnRvdWNoZXM+MCYmKGsudG91Y2hlcy09MSl9LDUwMCk6XCJtb3VzZWRvd25cIj09PWEudHlwZSYmay50b3VjaGVzPjAmJihiPSExKSxifSx0b3VjaHVwOmZ1bmN0aW9uKGEpe2suYWxsb3dFdmVudChhKX19O2guZGlzcGxheUVmZmVjdD1mdW5jdGlvbihiKXtiPWJ8fHt9LFwiZHVyYXRpb25cImluIGImJihqLmR1cmF0aW9uPWIuZHVyYXRpb24pLGoud3JhcElucHV0KGkoXCIud2F2ZXMtZWZmZWN0XCIpKSxcIm9udG91Y2hzdGFydFwiaW4gYSYmZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpLGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGcsITEpfSxoLmF0dGFjaD1mdW5jdGlvbihiKXtcImlucHV0XCI9PT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKGoud3JhcElucHV0KFtiXSksYj1iLnBhcmVudEVsZW1lbnQpLFwib250b3VjaHN0YXJ0XCJpbiBhJiZiLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSksYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZywhMSl9LGEuV2F2ZXM9aCxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7aC5kaXNwbGF5RWZmZWN0KCl9LCExKX0od2luZG93KSxNYXRlcmlhbGl6ZS50b2FzdD1mdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIiksYylmb3IodmFyIGU9Yy5zcGxpdChcIiBcIiksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKyliLmNsYXNzTGlzdC5hZGQoZVtmXSk7KFwib2JqZWN0XCI9PXR5cGVvZiBIVE1MRWxlbWVudD9hIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6YSYmXCJvYmplY3RcIj09dHlwZW9mIGEmJm51bGwhPT1hJiYxPT09YS5ub2RlVHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIGEubm9kZU5hbWUpP2IuYXBwZW5kQ2hpbGQoYSk6YSBpbnN0YW5jZW9mIGpRdWVyeT9iLmFwcGVuZENoaWxkKGFbMF0pOmIuaW5uZXJIVE1MPWE7dmFyIGg9bmV3IEhhbW1lcihiLHtwcmV2ZW50X2RlZmF1bHQ6ITF9KTtyZXR1cm4gaC5vbihcInBhblwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGQ9ODA7Yi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHxiLmNsYXNzTGlzdC5hZGQoXCJwYW5uaW5nXCIpO3ZhciBlPTEtTWF0aC5hYnMoYy9kKTtlPDAmJihlPTApLFZlbChiLHtsZWZ0OmMsb3BhY2l0eTplfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfSksaC5vbihcInBhbmVuZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGU9ODA7TWF0aC5hYnMoYyk+ZT9WZWwoYix7bWFyZ2luVG9wOlwiLTQwcHhcIn0se2R1cmF0aW9uOjM3NSxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCgpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19KTooYi5jbGFzc0xpc3QucmVtb3ZlKFwicGFubmluZ1wiKSxWZWwoYix7bGVmdDowLG9wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExfSkpfSksYn1jPWN8fFwiXCI7dmFyIGY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2FzdC1jb250YWluZXJcIik7bnVsbD09PWYmJihmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZi5pZD1cInRvYXN0LWNvbnRhaW5lclwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZikpO3ZhciBnPWUoYSk7YSYmZi5hcHBlbmRDaGlsZChnKSxnLnN0eWxlLm9wYWNpdHk9MCxWZWwoZyx7dHJhbnNsYXRlWTpcIi0zNXB4XCIsb3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLHF1ZXVlOiExfSk7dmFyIGgsaT1iO251bGwhPWkmJihoPXNldEludGVydmFsKGZ1bmN0aW9uKCl7bnVsbD09PWcucGFyZW50Tm9kZSYmd2luZG93LmNsZWFySW50ZXJ2YWwoaCksZy5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHwoaS09MjApLGk8PTAmJihWZWwoZyx7b3BhY2l0eTowLG1hcmdpblRvcDpcIi00MHB4XCJ9LHtkdXJhdGlvbjozNzUsZWFzaW5nOlwiZWFzZU91dEV4cG9cIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmQoKSx0aGlzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1swXSl9fSksd2luZG93LmNsZWFySW50ZXJ2YWwoaCkpfSwyMCkpfSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17bWVudVdpZHRoOjMwMCxlZGdlOlwibGVmdFwiLGNsb3NlT25DbGljazohMSxkcmFnZ2FibGU6ITB9O2I9YS5leHRlbmQoYyxiKSxhKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIiksZT1hKFwiI1wiK2QpOzMwMCE9Yi5tZW51V2lkdGgmJmUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCk7dmFyIGY9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrZCsnXCJdJyk7Yi5kcmFnZ2FibGU/KGYubGVuZ3RoJiZmLnJlbW92ZSgpLGY9YSgnPGRpdiBjbGFzcz1cImRyYWctdGFyZ2V0XCI+PC9kaXY+JykuYXR0cihcImRhdGEtc2lkZW5hdlwiLGQpLGEoXCJib2R5XCIpLmFwcGVuZChmKSk6Zj1hKCksXCJsZWZ0XCI9PWIuZWRnZT8oZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoLTEwMCUpXCIpLGYuY3NzKHtsZWZ0OjB9KSk6KGUuYWRkQ2xhc3MoXCJyaWdodC1hbGlnbmVkXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSxmLmNzcyh7cmlnaHQ6MH0pKSxlLmhhc0NsYXNzKFwiZml4ZWRcIikmJndpbmRvdy5pbm5lcldpZHRoPjk5MiYmZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMClcIiksZS5oYXNDbGFzcyhcImZpeGVkXCIpJiZhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7d2luZG93LmlubmVyV2lkdGg+OTkyPzAhPT1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS5sZW5ndGgmJmk/ZyghMCk6ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMCUpXCIpOmk9PT0hMSYmKFwibGVmdFwiPT09Yi5lZGdlP2UuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKC0xMDAlKVwiKTplLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSl9KSxiLmNsb3NlT25DbGljaz09PSEwJiZlLm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLGZ1bmN0aW9uKCl7ZygpfSk7dmFyIGc9ZnVuY3Rpb24oYyl7aD0hMSxpPSExLGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksYShcIiNzaWRlbmF2LW92ZXJsYXlcIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxcImxlZnRcIj09PWIuZWRnZT8oZi5jc3Moe3dpZHRoOlwiXCIscmlnaHQ6XCJcIixsZWZ0OlwiMFwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIi0xMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSk6KGYuY3NzKHt3aWR0aDpcIlwiLHJpZ2h0OlwiMFwiLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCIxMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSl9LGg9ITEsaT0hMTtiLmRyYWdnYWJsZSYmKGYub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7aSYmZygpfSksZi5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihjKXtpZihcInRvdWNoXCI9PWMuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGQ9KGMuZ2VzdHVyZS5kaXJlY3Rpb24sYy5nZXN0dXJlLmNlbnRlci54KSxmPShjLmdlc3R1cmUuY2VudGVyLnksYy5nZXN0dXJlLnZlbG9jaXR5WCxhKFwiYm9keVwiKSksaD1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKSxqPWYuaW5uZXJXaWR0aCgpO2lmKGYuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxmLndpZHRoKGopLDA9PT1oLmxlbmd0aCYmKGg9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGguY3NzKFwib3BhY2l0eVwiLDApLmNsaWNrKGZ1bmN0aW9uKCl7ZygpfSksYShcImJvZHlcIikuYXBwZW5kKGgpKSxcImxlZnRcIj09PWIuZWRnZSYmKGQ+Yi5tZW51V2lkdGg/ZD1iLm1lbnVXaWR0aDpkPDAmJihkPTApKSxcImxlZnRcIj09PWIuZWRnZSlkPGIubWVudVdpZHRoLzI/aT0hMTpkPj1iLm1lbnVXaWR0aC8yJiYoaT0hMCksZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoXCIrKGQtYi5tZW51V2lkdGgpK1wicHgpXCIpO2Vsc2V7ZDx3aW5kb3cuaW5uZXJXaWR0aC1iLm1lbnVXaWR0aC8yP2k9ITA6ZD49d2luZG93LmlubmVyV2lkdGgtYi5tZW51V2lkdGgvMiYmKGk9ITEpO3ZhciBrPWQtYi5tZW51V2lkdGgvMjtrPDAmJihrPTApLGUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKFwiK2srXCJweClcIil9dmFyIGw7XCJsZWZ0XCI9PT1iLmVkZ2U/KGw9ZC9iLm1lbnVXaWR0aCxoLnZlbG9jaXR5KHtvcGFjaXR5Omx9LHtkdXJhdGlvbjoxMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpOihsPU1hdGguYWJzKChkLXdpbmRvdy5pbm5lcldpZHRoKS9iLm1lbnVXaWR0aCksaC52ZWxvY2l0eSh7b3BhY2l0eTpsfSx7ZHVyYXRpb246MTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oYyl7aWYoXCJ0b3VjaFwiPT1jLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBkPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGc9Yy5nZXN0dXJlLnZlbG9jaXR5WCxqPWMuZ2VzdHVyZS5jZW50ZXIueCxrPWotYi5tZW51V2lkdGgsbD1qLWIubWVudVdpZHRoLzI7az4wJiYoaz0wKSxsPDAmJihsPTApLGg9ITEsXCJsZWZ0XCI9PT1iLmVkZ2U/aSYmZzw9LjN8fGc8LS41PygwIT09ayYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxrXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OjAsbGVmdDpcIlwifSksaT0hMCk6KCFpfHxnPi4zKSYmKGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbLTEqYi5tZW51V2lkdGgtMTAsa119LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxmLmNzcyh7d2lkdGg6XCIxMHB4XCIscmlnaHQ6XCJcIixsZWZ0OjB9KSk6aSYmZz49LS4zfHxnPi41PygwIT09bCYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxsXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksaT0hMCk6KCFpfHxnPC0uMykmJihhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6W2IubWVudVdpZHRoKzEwLGxdfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSksZi5jc3Moe3dpZHRoOlwiMTBweFwiLHJpZ2h0OjAsbGVmdDpcIlwifSkpfX0pKSxjLm9mZihcImNsaWNrLnNpZGVuYXZcIikub24oXCJjbGljay5zaWRlbmF2XCIsZnVuY3Rpb24oKXtpZihpPT09ITApaT0hMSxoPSExLGcoKTtlbHNle3ZhciBjPWEoXCJib2R5XCIpLGQ9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGo9Yy5pbm5lcldpZHRoKCk7Yy5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGMud2lkdGgoaiksYShcImJvZHlcIikuYXBwZW5kKGYpLFwibGVmdFwiPT09Yi5lZGdlPyhmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDowLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsLTEqYi5tZW51V2lkdGhdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSk6KGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxiLm1lbnVXaWR0aF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKSxkLmNzcyhcIm9wYWNpdHlcIiwwKS5jbGljayhmdW5jdGlvbigpe2k9ITEsaD0hMSxnKCksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfSksYShcImJvZHlcIikuYXBwZW5kKGQpLGQudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aT0hMCxoPSExfX0pfXJldHVybiExfSl9KX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBiPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGM9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrYSh0aGlzKS5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikrJ1wiXScpO2IudHJpZ2dlcihcImNsaWNrXCIpLGMucmVtb3ZlKCksYSh0aGlzKS5vZmYoXCJjbGlja1wiKSxiLnJlbW92ZSgpfSxzaG93OmZ1bmN0aW9uKCl7dGhpcy50cmlnZ2VyKFwiY2xpY2tcIil9LGhpZGU6ZnVuY3Rpb24oKXthKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnNpZGVOYXY9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXZcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiLGMsZCxlKXt2YXIgZz1hKCk7cmV0dXJuIGEuZWFjaChmLGZ1bmN0aW9uKGEsZil7aWYoZi5oZWlnaHQoKT4wKXt2YXIgaD1mLm9mZnNldCgpLnRvcCxpPWYub2Zmc2V0KCkubGVmdCxqPWkrZi53aWR0aCgpLGs9aCtmLmhlaWdodCgpLGw9IShpPmN8fGo8ZXx8aD5kfHxrPGIpO2wmJmcucHVzaChmKX19KSxnfWZ1bmN0aW9uIGMoYyl7KytpO3ZhciBkPWUuc2Nyb2xsVG9wKCksZj1lLnNjcm9sbExlZnQoKSxoPWYrZS53aWR0aCgpLGs9ZCtlLmhlaWdodCgpLGw9YihkK2oudG9wK2N8fDIwMCxoK2oucmlnaHQsaytqLmJvdHRvbSxmK2oubGVmdCk7YS5lYWNoKGwsZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIik7XCJudW1iZXJcIiE9dHlwZW9mIGMmJmIudHJpZ2dlckhhbmRsZXIoXCJzY3JvbGxTcHk6ZW50ZXJcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsaSl9KSxhLmVhY2goZyxmdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiKTtcIm51bWJlclwiPT10eXBlb2YgYyYmYyE9PWkmJihiLnRyaWdnZXJIYW5kbGVyKFwic2Nyb2xsU3B5OmV4aXRcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsbnVsbCkpfSksZz1sfWZ1bmN0aW9uIGQoKXtlLnRyaWdnZXIoXCJzY3JvbGxTcHk6d2luU2l6ZVwiKX12YXIgZT1hKHdpbmRvdyksZj1bXSxnPVtdLGg9ITEsaT0wLGo9e3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowfTthLnNjcm9sbFNweT1mdW5jdGlvbihiLGQpe3ZhciBnPXt0aHJvdHRsZToxMDAsc2Nyb2xsT2Zmc2V0OjIwMH07ZD1hLmV4dGVuZChnLGQpO3ZhciBpPVtdO2I9YShiKSxiLmVhY2goZnVuY3Rpb24oYixjKXtmLnB1c2goYShjKSksYShjKS5kYXRhKFwic2Nyb2xsU3B5OmlkXCIsYiksYSgnYVtocmVmPVwiIycrYShjKS5hdHRyKFwiaWRcIikrJ1wiXScpLmNsaWNrKGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt2YXIgYz1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkub2Zmc2V0KCkudG9wKzE7YShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOmMtZC5zY3JvbGxPZmZzZXR9LHtkdXJhdGlvbjo0MDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9KX0pfSksai50b3A9ZC5vZmZzZXRUb3B8fDAsai5yaWdodD1kLm9mZnNldFJpZ2h0fHwwLGouYm90dG9tPWQub2Zmc2V0Qm90dG9tfHwwLGoubGVmdD1kLm9mZnNldExlZnR8fDA7dmFyIGs9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtjKGQuc2Nyb2xsT2Zmc2V0KX0sZC50aHJvdHRsZXx8MTAwKSxsPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkucmVhZHkoayl9O3JldHVybiBofHwoZS5vbihcInNjcm9sbFwiLGwpLGUub24oXCJyZXNpemVcIixsKSxoPSEwKSxzZXRUaW1lb3V0KGwsMCksYi5vbihcInNjcm9sbFNweTplbnRlclwiLGZ1bmN0aW9uKCl7aT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pO3ZhciBiPWEodGhpcyk7aVswXT8oYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIuZGF0YShcInNjcm9sbFNweTppZFwiKTxpWzBdLmRhdGEoXCJzY3JvbGxTcHk6aWRcIik/aS51bnNoaWZ0KGEodGhpcykpOmkucHVzaChhKHRoaXMpKSk6aS5wdXNoKGEodGhpcykpLGEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLGIub24oXCJzY3JvbGxTcHk6ZXhpdFwiLGZ1bmN0aW9uKCl7aWYoaT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pLGlbMF0pe2EoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgYj1hKHRoaXMpO2k9YS5ncmVwKGksZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXR0cihcImlkXCIpIT1iLmF0dHIoXCJpZFwiKX0pLGlbMF0mJmEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX19KSxifSxhLndpblNpemVTcHk9ZnVuY3Rpb24oYil7cmV0dXJuIGEud2luU2l6ZVNweT1mdW5jdGlvbigpe3JldHVybiBlfSxiPWJ8fHt0aHJvdHRsZToxMDB9LGUub24oXCJyZXNpemVcIixNYXRlcmlhbGl6ZS50aHJvdHRsZShkLGIudGhyb3R0bGV8fDEwMCkpfSxhLmZuLnNjcm9sbFNweT1mdW5jdGlvbihiKXtyZXR1cm4gYS5zY3JvbGxTcHkoYSh0aGlzKSxiKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPWIuY3NzKFwiZm9udC1mYW1pbHlcIiksZD1iLmNzcyhcImZvbnQtc2l6ZVwiKSxmPWIuY3NzKFwibGluZS1oZWlnaHRcIik7ZCYmZS5jc3MoXCJmb250LXNpemVcIixkKSxjJiZlLmNzcyhcImZvbnQtZmFtaWx5XCIsYyksZiYmZS5jc3MoXCJsaW5lLWhlaWdodFwiLGYpLFwib2ZmXCI9PT1iLmF0dHIoXCJ3cmFwXCIpJiZlLmNzcyhcIm92ZXJmbG93LXdyYXBcIixcIm5vcm1hbFwiKS5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwicHJlXCIpLGUudGV4dChiLnZhbCgpK1wiXFxuXCIpO3ZhciBnPWUuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKTtlLmh0bWwoZyksYi5pcyhcIjp2aXNpYmxlXCIpP2UuY3NzKFwid2lkdGhcIixiLndpZHRoKCkpOmUuY3NzKFwid2lkdGhcIixhKHdpbmRvdykud2lkdGgoKS8yKSxiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIik8PWUuaGVpZ2h0KCk/Yi5jc3MoXCJoZWlnaHRcIixlLmhlaWdodCgpKTpiLnZhbCgpLmxlbmd0aDxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIikmJmIuY3NzKFwiaGVpZ2h0XCIsYi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpKSxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIixiLnZhbCgpLmxlbmd0aCl9TWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcz1mdW5jdGlvbigpe3ZhciBiPVwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhXCI7YShiKS5lYWNoKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YSh0aGlzKTthKGMpLnZhbCgpLmxlbmd0aD4wfHxjLmF1dG9mb2N1c3x8dm9pZCAwIT09ZC5hdHRyKFwicGxhY2Vob2xkZXJcIik/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmEoYylbMF0udmFsaWRpdHk/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsYShjKVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSEwKTpkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KX07dmFyIGM9XCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWFcIjthKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLGMsZnVuY3Rpb24oKXswPT09YSh0aGlzKS52YWwoKS5sZW5ndGgmJnZvaWQgMD09PWEodGhpcykuYXR0cihcInBsYWNlaG9sZGVyXCIpfHxhKHRoaXMpLnNpYmxpbmdzKFwibGFiZWxcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdmFsaWRhdGVfZmllbGQoYSh0aGlzKSl9KSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe01hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMoKX0pLGEoZG9jdW1lbnQpLm9uKFwicmVzZXRcIixmdW5jdGlvbihiKXt2YXIgZD1hKGIudGFyZ2V0KTtkLmlzKFwiZm9ybVwiKSYmKGQuZmluZChjKS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSxkLmZpbmQoYykuZWFjaChmdW5jdGlvbigpe1wiXCI9PT1hKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSYmYSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksZC5maW5kKFwic2VsZWN0LmluaXRpYWxpemVkXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYT1kLmZpbmQoXCJvcHRpb25bc2VsZWN0ZWRdXCIpLnRleHQoKTtkLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChhKX0pKX0pLGEoZG9jdW1lbnQpLm9uKFwiZm9jdXNcIixjLGZ1bmN0aW9uKCl7YSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJibHVyXCIsYyxmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1cIi5wcmVmaXhcIjswPT09Yi52YWwoKS5sZW5ndGgmJmJbMF0udmFsaWRpdHkuYmFkSW5wdXQhPT0hMCYmdm9pZCAwPT09Yi5hdHRyKFwicGxhY2Vob2xkZXJcIikmJihjKz1cIiwgbGFiZWxcIiksYi5zaWJsaW5ncyhjKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx2YWxpZGF0ZV9maWVsZChiKX0pLHdpbmRvdy52YWxpZGF0ZV9maWVsZD1mdW5jdGlvbihhKXt2YXIgYj12b2lkIDAhPT1hLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSxjPXBhcnNlSW50KGEuYXR0cihcImRhdGEtbGVuZ3RoXCIpKSxkPWEudmFsKCkubGVuZ3RoOzA9PT1hLnZhbCgpLmxlbmd0aCYmYVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSExP2EuaGFzQ2xhc3MoXCJ2YWxpZGF0ZVwiKSYmKGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSk6YS5oYXNDbGFzcyhcInZhbGlkYXRlXCIpJiYoYS5pcyhcIjp2YWxpZFwiKSYmYiYmZDw9Y3x8YS5pcyhcIjp2YWxpZFwiKSYmIWI/KGEucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLGEuYWRkQ2xhc3MoXCJ2YWxpZFwiKSk6KGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLmFkZENsYXNzKFwiaW52YWxpZFwiKSkpfTt2YXIgZD1cImlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiO2EoZG9jdW1lbnQpLm9uKFwia2V5dXAucmFkaW9cIixkLGZ1bmN0aW9uKGIpe2lmKDk9PT1iLndoaWNoKXthKHRoaXMpLmFkZENsYXNzKFwidGFiYmVkXCIpO3ZhciBjPWEodGhpcyk7cmV0dXJuIHZvaWQgYy5vbmUoXCJibHVyXCIsZnVuY3Rpb24oYil7YSh0aGlzKS5yZW1vdmVDbGFzcyhcInRhYmJlZFwiKX0pfX0pO3ZhciBlPWEoXCIuaGlkZGVuZGl2XCIpLmZpcnN0KCk7ZS5sZW5ndGh8fChlPWEoJzxkaXYgY2xhc3M9XCJoaWRkZW5kaXYgY29tbW9uXCI+PC9kaXY+JyksYShcImJvZHlcIikuYXBwZW5kKGUpKTt2YXIgZj1cIi5tYXRlcmlhbGl6ZS10ZXh0YXJlYVwiO2EoZikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIsYi5oZWlnaHQoKSksYi5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsYi52YWwoKS5sZW5ndGgpfSksYShcImJvZHlcIikub24oXCJrZXl1cCBrZXlkb3duIGF1dG9yZXNpemVcIixmLGZ1bmN0aW9uKCl7YihhKHRoaXMpKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxmdW5jdGlvbigpe2Zvcih2YXIgYj1hKHRoaXMpLmNsb3Nlc3QoXCIuZmlsZS1maWVsZFwiKSxjPWIuZmluZChcImlucHV0LmZpbGUtcGF0aFwiKSxkPWEodGhpcylbMF0uZmlsZXMsZT1bXSxmPTA7ZjxkLmxlbmd0aDtmKyspZS5wdXNoKGRbZl0ubmFtZSk7Yy52YWwoZS5qb2luKFwiLCBcIikpLGMudHJpZ2dlcihcImNoYW5nZVwiKX0pO3ZhciBnPVwiaW5wdXRbdHlwZT1yYW5nZV1cIixoPSExO2EoZykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTthKHRoaXMpLmFmdGVyKGIpfSk7dmFyIGk9ZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5wYXJlbnQoKS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLGM9LTcrYitcInB4XCI7YS52ZWxvY2l0eSh7aGVpZ2h0OlwiMzBweFwiLHdpZHRoOlwiMzBweFwiLHRvcDpcIi0zMHB4XCIsbWFyZ2luTGVmdDpjfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRFeHBvXCJ9KX0saj1mdW5jdGlvbihhKXt2YXIgYj1hLndpZHRoKCktMTUsYz1wYXJzZUZsb2F0KGEuYXR0cihcIm1heFwiKSksZD1wYXJzZUZsb2F0KGEuYXR0cihcIm1pblwiKSksZT0ocGFyc2VGbG9hdChhLnZhbCgpKS1kKS8oYy1kKTtyZXR1cm4gZSpifSxrPVwiLnJhbmdlLWZpZWxkXCI7YShkb2N1bWVudCkub24oXCJjaGFuZ2VcIixnLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuc2libGluZ3MoXCIudGh1bWJcIik7Yy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYSh0aGlzKS52YWwoKSksYy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKTt2YXIgZD1qKGEodGhpcykpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGQpfSksYShkb2N1bWVudCkub24oXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLGcsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5zaWJsaW5ncyhcIi50aHVtYlwiKTtpZihjLmxlbmd0aDw9MCYmKGM9YSgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpLGEodGhpcykuYWZ0ZXIoYykpLGMuZmluZChcIi52YWx1ZVwiKS5odG1sKGEodGhpcykudmFsKCkpLGg9ITAsYSh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpLFwiaW5wdXRcIiE9PWIudHlwZSl7dmFyIGQ9aihhKHRoaXMpKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixkKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNldXAgdG91Y2hlbmRcIixrLGZ1bmN0aW9uKCl7aD0hMSxhKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJpbnB1dCBtb3VzZW1vdmUgdG91Y2htb3ZlXCIsayxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLmNoaWxkcmVuKFwiLnRodW1iXCIpLGQ9YSh0aGlzKS5maW5kKGcpO2lmKGgpe2MuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyk7dmFyIGU9aihkKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixlKSxjLmZpbmQoXCIudmFsdWVcIikuaHRtbChjLnNpYmxpbmdzKGcpLnZhbCgpKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlb3V0IHRvdWNobGVhdmVcIixrLGZ1bmN0aW9uKCl7aWYoIWgpe3ZhciBiPWEodGhpcykuY2hpbGRyZW4oXCIudGh1bWJcIiksYz1wYXJzZUludChhKHRoaXMpLmNzcyhcInBhZGRpbmctbGVmdFwiKSksZD03K2MrXCJweFwiO2IuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJmIudmVsb2NpdHkoe2hlaWdodDpcIjBcIix3aWR0aDpcIjBcIix0b3A6XCIxMHB4XCIsbWFyZ2luTGVmdDpkfSx7ZHVyYXRpb246MTAwfSksYi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX19KSxhLmZuLmF1dG9jb21wbGV0ZT1mdW5jdGlvbihiKXt2YXIgYz17ZGF0YTp7fSxsaW1pdDoxLzAsb25BdXRvY29tcGxldGU6bnVsbCxtaW5MZW5ndGg6MX07cmV0dXJuIGI9YS5leHRlbmQoYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYyxkPWEodGhpcyksZT1iLmRhdGEsZj0wLGc9LTEsaD1kLmNsb3Nlc3QoXCIuaW5wdXQtZmllbGRcIik7aWYoIWEuaXNFbXB0eU9iamVjdChlKSl7dmFyIGksaj1hKCc8dWwgY2xhc3M9XCJhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50XCI+PC91bD4nKTtoLmxlbmd0aD8oaT1oLmNoaWxkcmVuKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikuZmlyc3QoKSxpLmxlbmd0aHx8aC5hcHBlbmQoaikpOihpPWQubmV4dChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLGkubGVuZ3RofHxkLmFmdGVyKGopKSxpLmxlbmd0aCYmKGo9aSk7dmFyIGs9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCJpbWdcIiksZD1iLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJcIithLnRvTG93ZXJDYXNlKCkpLGU9ZCthLmxlbmd0aC0xLGY9Yi50ZXh0KCkuc2xpY2UoMCxkKSxnPWIudGV4dCgpLnNsaWNlKGQsZSsxKSxoPWIudGV4dCgpLnNsaWNlKGUrMSk7Yi5odG1sKFwiPHNwYW4+XCIrZitcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlwiK2crXCI8L3NwYW4+XCIraCtcIjwvc3Bhbj5cIiksYy5sZW5ndGgmJmIucHJlcGVuZChjKX0sbD1mdW5jdGlvbigpe2c9LTEsai5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0sbT1mdW5jdGlvbigpe2ouZW1wdHkoKSxsKCksYz12b2lkIDB9O2Qub2ZmKFwiYmx1ci5hdXRvY29tcGxldGVcIikub24oXCJibHVyLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKCl7bSgpfSksZC5vZmYoXCJrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlXCIpLm9uKFwia2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGcpe2Y9MDt2YXIgaD1kLnZhbCgpLnRvTG93ZXJDYXNlKCk7aWYoMTMhPT1nLndoaWNoJiYzOCE9PWcud2hpY2gmJjQwIT09Zy53aGljaCl7aWYoYyE9PWgmJihtKCksaC5sZW5ndGg+PWIubWluTGVuZ3RoKSlmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpJiZpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihoKSE9PS0xJiZpLnRvTG93ZXJDYXNlKCkhPT1oKXtpZihmPj1iLmxpbWl0KWJyZWFrO3ZhciBsPWEoXCI8bGk+PC9saT5cIik7ZVtpXT9sLmFwcGVuZCgnPGltZyBzcmM9XCInK2VbaV0rJ1wiIGNsYXNzPVwicmlnaHQgY2lyY2xlXCI+PHNwYW4+JytpK1wiPC9zcGFuPlwiKTpsLmFwcGVuZChcIjxzcGFuPlwiK2krXCI8L3NwYW4+XCIpLGouYXBwZW5kKGwpLGsoaCxsKSxmKyt9Yz1ofX0pLGQub2ZmKFwia2V5ZG93bi5hdXRvY29tcGxldGVcIikub24oXCJrZXlkb3duLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBiLGM9YS53aGljaCxkPWouY2hpbGRyZW4oXCJsaVwiKS5sZW5ndGgsZT1qLmNoaWxkcmVuKFwiLmFjdGl2ZVwiKS5maXJzdCgpO3JldHVybiAxMz09PWMmJmc+PTA/KGI9ai5jaGlsZHJlbihcImxpXCIpLmVxKGcpLHZvaWQoYi5sZW5ndGgmJihiLnRyaWdnZXIoXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlXCIpLGEucHJldmVudERlZmF1bHQoKSkpKTp2b2lkKDM4IT09YyYmNDAhPT1jfHwoYS5wcmV2ZW50RGVmYXVsdCgpLFxuMzg9PT1jJiZnPjAmJmctLSw0MD09PWMmJmc8ZC0xJiZnKyssZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnPj0wJiZqLmNoaWxkcmVuKFwibGlcIikuZXEoZykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpKX0pLGoub24oXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlXCIsXCJsaVwiLGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKS50ZXh0KCkudHJpbSgpO2QudmFsKGMpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxtKCksXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkF1dG9jb21wbGV0ZSYmYi5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsYyl9KX19KX19KSxhLmZuLm1hdGVyaWFsX3NlbGVjdD1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEsYixjKXt2YXIgZT1hLmluZGV4T2YoYiksZj1lPT09LTE7cmV0dXJuIGY/YS5wdXNoKGIpOmEuc3BsaWNlKGUsMSksYy5zaWJsaW5ncyhcInVsLmRyb3Bkb3duLWNvbnRlbnRcIikuZmluZChcImxpOm5vdCgub3B0Z3JvdXApXCIpLmVxKGIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLGMuZmluZChcIm9wdGlvblwiKS5lcShiKS5wcm9wKFwic2VsZWN0ZWRcIixmKSxkKGEsYyksZn1mdW5jdGlvbiBkKGEsYil7Zm9yKHZhciBjPVwiXCIsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyl7dmFyIGY9Yi5maW5kKFwib3B0aW9uXCIpLmVxKGFbZF0pLnRleHQoKTtjKz0wPT09ZD9mOlwiLCBcIitmfVwiXCI9PT1jJiYoYz1iLmZpbmQoXCJvcHRpb246ZGlzYWJsZWRcIikuZXEoMCkudGV4dCgpKSxiLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChjKX1hKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpO2lmKCFkLmhhc0NsYXNzKFwiYnJvd3Nlci1kZWZhdWx0XCIpKXt2YXIgZT0hIWQuYXR0cihcIm11bHRpcGxlXCIpLGY9ZC5kYXRhKFwic2VsZWN0LWlkXCIpO2lmKGYmJihkLnBhcmVudCgpLmZpbmQoXCJzcGFuLmNhcmV0XCIpLnJlbW92ZSgpLGQucGFyZW50KCkuZmluZChcImlucHV0XCIpLnJlbW92ZSgpLGQudW53cmFwKCksYShcInVsI3NlbGVjdC1vcHRpb25zLVwiK2YpLnJlbW92ZSgpKSxcImRlc3Ryb3lcIj09PWIpcmV0dXJuIHZvaWQgZC5kYXRhKFwic2VsZWN0LWlkXCIsbnVsbCkucmVtb3ZlQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgZz1NYXRlcmlhbGl6ZS5ndWlkKCk7ZC5kYXRhKFwic2VsZWN0LWlkXCIsZyk7dmFyIGg9YSgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7aC5hZGRDbGFzcyhkLmF0dHIoXCJjbGFzc1wiKSk7dmFyIGk9YSgnPHVsIGlkPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcrKGU/XCJtdWx0aXBsZS1zZWxlY3QtZHJvcGRvd25cIjpcIlwiKSsnXCI+PC91bD4nKSxqPWQuY2hpbGRyZW4oXCJvcHRpb24sIG9wdGdyb3VwXCIpLGs9W10sbD0hMSxtPWQuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCl8fGQuZmluZChcIm9wdGlvbjpmaXJzdFwiKS5odG1sKCl8fFwiXCIsbj1mdW5jdGlvbihiLGMsZCl7dmFyIGY9Yy5pcyhcIjpkaXNhYmxlZFwiKT9cImRpc2FibGVkIFwiOlwiXCIsZz1cIm9wdGdyb3VwLW9wdGlvblwiPT09ZD9cIm9wdGdyb3VwLW9wdGlvbiBcIjpcIlwiLGg9ZT8nPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJytmK1wiLz48bGFiZWw+PC9sYWJlbD5cIjpcIlwiLGo9Yy5kYXRhKFwiaWNvblwiKSxrPWMuYXR0cihcImNsYXNzXCIpO2lmKGope3ZhciBsPVwiXCI7cmV0dXJuIGsmJihsPScgY2xhc3M9XCInK2srJ1wiJyksaS5hcHBlbmQoYSgnPGxpIGNsYXNzPVwiJytmK2crJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJytqKydcIicrbCtcIj48c3Bhbj5cIitoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKSwhMH1pLmFwcGVuZChhKCc8bGkgY2xhc3M9XCInK2YrZysnXCI+PHNwYW4+JytoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKX07ai5sZW5ndGgmJmouZWFjaChmdW5jdGlvbigpe2lmKGEodGhpcykuaXMoXCJvcHRpb25cIikpZT9uKGQsYSh0aGlzKSxcIm11bHRpcGxlXCIpOm4oZCxhKHRoaXMpKTtlbHNlIGlmKGEodGhpcykuaXMoXCJvcHRncm91cFwiKSl7dmFyIGI9YSh0aGlzKS5jaGlsZHJlbihcIm9wdGlvblwiKTtpLmFwcGVuZChhKCc8bGkgY2xhc3M9XCJvcHRncm91cFwiPjxzcGFuPicrYSh0aGlzKS5hdHRyKFwibGFiZWxcIikrXCI8L3NwYW4+PC9saT5cIikpLGIuZWFjaChmdW5jdGlvbigpe24oZCxhKHRoaXMpLFwib3B0Z3JvdXAtb3B0aW9uXCIpfSl9fSksaS5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZWFjaChmdW5jdGlvbihmKXthKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGcpe2lmKCFhKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikmJiFhKHRoaXMpLmhhc0NsYXNzKFwib3B0Z3JvdXBcIikpe3ZhciBoPSEwO2U/KGEoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsdGhpcykucHJvcChcImNoZWNrZWRcIixmdW5jdGlvbihhLGIpe3JldHVybiFifSksaD1jKGssZixkKSxxLnRyaWdnZXIoXCJmb2N1c1wiKSk6KGkuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikscS52YWwoYSh0aGlzKS50ZXh0KCkpKSxyKGksYSh0aGlzKSksZC5maW5kKFwib3B0aW9uXCIpLmVxKGYpLnByb3AoXCJzZWxlY3RlZFwiLGgpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYiYmYigpfWcuc3RvcFByb3BhZ2F0aW9uKCl9KX0pLGQud3JhcChoKTt2YXIgbz1hKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtkLmlzKFwiOmRpc2FibGVkXCIpJiZvLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7dmFyIHA9bS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpLHE9YSgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnKyhkLmlzKFwiOmRpc2FibGVkXCIpP1wiZGlzYWJsZWRcIjpcIlwiKSsnIGRhdGEtYWN0aXZhdGVzPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiB2YWx1ZT1cIicrcCsnXCIvPicpO2QuYmVmb3JlKHEpLHEuYmVmb3JlKG8pLHEuYWZ0ZXIoaSksZC5pcyhcIjpkaXNhYmxlZFwiKXx8cS5kcm9wZG93bih7aG92ZXI6ITF9KSxkLmF0dHIoXCJ0YWJpbmRleFwiKSYmYShxWzBdKS5hdHRyKFwidGFiaW5kZXhcIixkLmF0dHIoXCJ0YWJpbmRleFwiKSksZC5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpLHEub24oe2ZvY3VzOmZ1bmN0aW9uKCl7aWYoYShcInVsLnNlbGVjdC1kcm9wZG93blwiKS5ub3QoaVswXSkuaXMoXCI6dmlzaWJsZVwiKSYmYShcImlucHV0LnNlbGVjdC1kcm9wZG93blwiKS50cmlnZ2VyKFwiY2xvc2VcIiksIWkuaXMoXCI6dmlzaWJsZVwiKSl7YSh0aGlzKS50cmlnZ2VyKFwib3BlblwiLFtcImZvY3VzXCJdKTt2YXIgYj1hKHRoaXMpLnZhbCgpO2UmJmIuaW5kZXhPZihcIixcIik+PTAmJihiPWIuc3BsaXQoXCIsXCIpWzBdKTt2YXIgYz1pLmZpbmQoXCJsaVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0pWzBdO3IoaSxjLCEwKX19LGNsaWNrOmZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9fSkscS5vbihcImJsdXJcIixmdW5jdGlvbigpe2V8fGEodGhpcykudHJpZ2dlcihcImNsb3NlXCIpLGkuZmluZChcImxpLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIil9KSxpLmhvdmVyKGZ1bmN0aW9uKCl7bD0hMH0sZnVuY3Rpb24oKXtsPSExfSksYSh3aW5kb3cpLm9uKHtjbGljazpmdW5jdGlvbigpe2UmJihsfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9fSksZSYmZC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmluZGV4KCk7YyhrLGIsZCksaS5maW5kKFwibGlcIikuZXEoYikuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCEwKX0pO3ZhciByPWZ1bmN0aW9uKGIsYyxkKXtpZihjKXtiLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO3ZhciBmPWEoYyk7Zi5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLGUmJiFkfHxpLnNjcm9sbFRvKGYpfX0scz1bXSx0PWZ1bmN0aW9uKGIpe2lmKDk9PWIud2hpY2gpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwiY2xvc2VcIik7aWYoNDA9PWIud2hpY2gmJiFpLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwib3BlblwiKTtpZigxMyE9Yi53aGljaHx8aS5pcyhcIjp2aXNpYmxlXCIpKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9U3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKS50b0xvd2VyQ2FzZSgpLGQ9WzksMTMsMjcsMzgsNDBdO2lmKGMmJmQuaW5kZXhPZihiLndoaWNoKT09PS0xKXtzLnB1c2goYyk7dmFyIGY9cy5qb2luKFwiXCIpLGc9aS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1hKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZil9KVswXTtnJiZyKGksZyl9aWYoMTM9PWIud2hpY2gpe3ZhciBoPWkuZmluZChcImxpLnNlbGVjdGVkOm5vdCguZGlzYWJsZWQpXCIpWzBdO2gmJihhKGgpLnRyaWdnZXIoXCJjbGlja1wiKSxlfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9NDA9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLmxlbmd0aD9pLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5uZXh0KFwibGk6bm90KC5kaXNhYmxlZClcIilbMF06aS5maW5kKFwibGk6bm90KC5kaXNhYmxlZClcIilbMF0scihpLGcpKSwyNz09Yi53aGljaCYmcS50cmlnZ2VyKFwiY2xvc2VcIiksMzg9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLnByZXYoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXSxnJiZyKGksZykpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPVtdfSwxZTMpfX07cS5vbihcImtleWRvd25cIix0KX19KX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e2luZGljYXRvcnM6ITAsaGVpZ2h0OjQwMCx0cmFuc2l0aW9uOjUwMCxpbnRlcnZhbDo2ZTN9O3JldHVybiBiPWEuZXh0ZW5kKGMsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyhhLGIpe2EuaGFzQ2xhc3MoXCJjZW50ZXItYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVk6LTEwMH0se2R1cmF0aW9uOmIscXVldWU6ITF9KTphLmhhc0NsYXNzKFwicmlnaHQtYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pOmEuaGFzQ2xhc3MoXCJsZWZ0LWFsaWduXCIpJiZhLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDotMTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pfWZ1bmN0aW9uIGQoYSl7YT49ai5sZW5ndGg/YT0wOmE8MCYmKGE9ai5sZW5ndGgtMSksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksayE9YSYmKGU9ai5lcShrKSwkY2FwdGlvbj1lLmZpbmQoXCIuY2FwdGlvblwiKSxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGUudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ai5ub3QoXCIuYWN0aXZlXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowLHRyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSxjKCRjYXB0aW9uLGIudHJhbnNpdGlvbiksYi5pbmRpY2F0b3JzJiZmLmVxKGspLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGouZXEoYSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLGRlbGF5OmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxiLmluZGljYXRvcnMmJmYuZXEoYSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfXZhciBlLGYsZyxoPWEodGhpcyksaT1oLmZpbmQoXCJ1bC5zbGlkZXNcIikuZmlyc3QoKSxqPWkuZmluZChcIj4gbGlcIiksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCk7ayE9LTEmJihlPWouZXEoaykpLGguaGFzQ2xhc3MoXCJmdWxsc2NyZWVuXCIpfHwoYi5pbmRpY2F0b3JzP2guaGVpZ2h0KGIuaGVpZ2h0KzQwKTpoLmhlaWdodChiLmhlaWdodCksaS5oZWlnaHQoYi5oZWlnaHQpKSxqLmZpbmQoXCIuY2FwdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7YyhhKHRoaXMpLDApfSksai5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjthKHRoaXMpLmF0dHIoXCJzcmNcIikhPT1iJiYoYSh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIrYSh0aGlzKS5hdHRyKFwic3JjXCIpK1wiKVwiKSxhKHRoaXMpLmF0dHIoXCJzcmNcIixiKSl9KSxiLmluZGljYXRvcnMmJihmPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLGouZWFjaChmdW5jdGlvbihjKXt2YXIgZT1hKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7ZS5jbGljayhmdW5jdGlvbigpe3ZhciBjPWkucGFyZW50KCksZT1jLmZpbmQoYSh0aGlzKSkuaW5kZXgoKTtkKGUpLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpfSksZi5hcHBlbmQoZSl9KSxoLmFwcGVuZChmKSxmPWguZmluZChcInVsLmluZGljYXRvcnNcIikuZmluZChcImxpLmluZGljYXRvci1pdGVtXCIpKSxlP2Uuc2hvdygpOihqLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaz0wLGU9ai5lcShrKSxiLmluZGljYXRvcnMmJmYuZXEoaykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGUuZmluZChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCl7ZS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX0pLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGsrMSl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKTt2YXIgbD0hMSxtPSExLG49ITE7aC5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihhKXtpZihcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUpe2NsZWFySW50ZXJ2YWwoZyk7dmFyIGI9YS5nZXN0dXJlLmRpcmVjdGlvbixjPWEuZ2VzdHVyZS5kZWx0YVgsZD1hLmdlc3R1cmUudmVsb2NpdHlYLGU9YS5nZXN0dXJlLnZlbG9jaXR5WTskY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLE1hdGguYWJzKGQpPk1hdGguYWJzKGUpJiYkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpjfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLDQ9PT1iJiYoYz5oLmlubmVyV2lkdGgoKS8yfHxkPC0uNjUpP249ITA6Mj09PWImJihjPC0xKmguaW5uZXJXaWR0aCgpLzJ8fGQ+LjY1KSYmKG09ITApO3ZhciBmO20mJihmPSRjdXJyX3NsaWRlLm5leHQoKSwwPT09Zi5sZW5ndGgmJihmPWouZmlyc3QoKSksZi52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSksbiYmKGY9JGN1cnJfc2xpZGUucHJldigpLDA9PT1mLmxlbmd0aCYmKGY9ai5sYXN0KCkpLGYudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihhKXtcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUmJigkY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLGw9ITEsY3Vycl9pbmRleD1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksIW4mJiFtfHxqLmxlbmd0aDw9MT8kY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KTptPyhkKGN1cnJfaW5kZXgrMSksJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6LTEqaC5pbm5lcldpZHRoKCl9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpeyRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pKTpuJiYoZChjdXJyX2luZGV4LTEpLCRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmguaW5uZXJXaWR0aCgpfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXskY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSksbT0hMSxuPSExLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpKX0pLGgub24oXCJzbGlkZXJQYXVzZVwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKX0pLGgub24oXCJzbGlkZXJTdGFydFwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCl9KSxoLm9uKFwic2xpZGVyTmV4dFwiLGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrKzEpfSksaC5vbihcInNsaWRlclByZXZcIixmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoay0xKX0pfSl9LHBhdXNlOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUGF1c2VcIil9LHN0YXJ0OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyU3RhcnRcIil9LG5leHQ6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJOZXh0XCIpfSxwcmV2OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUHJldlwiKX19O2EuZm4uc2xpZGVyPWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50b29sdGlwXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkub24oXCJjbGljay5jYXJkXCIsXCIuY2FyZFwiLGZ1bmN0aW9uKGIpe2EodGhpcykuZmluZChcIj4gLmNhcmQtcmV2ZWFsXCIpLmxlbmd0aCYmKGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGVcIikpfHxhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGlcIikpP2EodGhpcykuZmluZChcIi5jYXJkLXJldmVhbFwiKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKHtkaXNwbGF5Olwibm9uZVwifSl9fSk6KGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZCAuYWN0aXZhdG9yXCIpKXx8YShiLnRhcmdldCkuaXMoYShcIi5jYXJkIC5hY3RpdmF0b3IgaVwiKSkpJiYoYShiLnRhcmdldCkuY2xvc2VzdChcIi5jYXJkXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksYSh0aGlzKS5maW5kKFwiLmNhcmQtcmV2ZWFsXCIpLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KS52ZWxvY2l0eShcInN0b3BcIiwhMSkudmVsb2NpdHkoe3RyYW5zbGF0ZVk6XCItMTAwJVwifSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIn0pKSl9KX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtkYXRhOltdLHBsYWNlaG9sZGVyOlwiXCIsc2Vjb25kYXJ5UGxhY2Vob2xkZXI6XCJcIixhdXRvY29tcGxldGVPcHRpb25zOnt9fTthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixcIi5jaGlwIC5jbG9zZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2xvc2VzdChcIi5jaGlwc1wiKTtjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIpfHxhKHRoaXMpLmNsb3Nlc3QoXCIuY2hpcFwiKS5yZW1vdmUoKX0pfSksYS5mbi5tYXRlcmlhbF9jaGlwPWZ1bmN0aW9uKGMpe3ZhciBkPXRoaXM7aWYodGhpcy4kZWw9YSh0aGlzKSx0aGlzLiRkb2N1bWVudD1hKGRvY3VtZW50KSx0aGlzLlNFTFM9e0NISVBTOlwiLmNoaXBzXCIsQ0hJUDpcIi5jaGlwXCIsSU5QVVQ6XCJpbnB1dFwiLERFTEVURTpcIi5tYXRlcmlhbC1pY29uc1wiLFNFTEVDVEVEX0NISVA6XCIuc2VsZWN0ZWRcIn0sXCJkYXRhXCI9PT1jKXJldHVybiB0aGlzLiRlbC5kYXRhKFwiY2hpcHNcIik7dmFyIGU9YS5leHRlbmQoe30sYixjKTtkLmhhc0F1dG9jb21wbGV0ZT0hYS5pc0VtcHR5T2JqZWN0KGUuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhKSx0aGlzLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYj0wO2QuJGVsLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGY9TWF0ZXJpYWxpemUuZ3VpZCgpO2QuY2hpcElkPWYsZS5kYXRhJiZlLmRhdGEgaW5zdGFuY2VvZiBBcnJheXx8KGUuZGF0YT1bXSksYy5kYXRhKFwiY2hpcHNcIixlLmRhdGEpLGMuYXR0cihcImRhdGEtaW5kZXhcIixiKSxjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIsITApLGMuaGFzQ2xhc3MoZC5TRUxTLkNISVBTKXx8Yy5hZGRDbGFzcyhcImNoaXBzXCIpLGQuY2hpcHMoYyxmKSxiKyt9KX0sdGhpcy5oYW5kbGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgYj1kLlNFTFM7ZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZm9jdXNcIixiLkNISVBTKS5vbihcImNsaWNrLmNoaXBzLWZvY3VzXCIsYi5DSElQUyxmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5maW5kKGIuSU5QVVQpLmZvY3VzKCl9KSxkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1zZWxlY3RcIixiLkNISVApLm9uKFwiY2xpY2suY2hpcHMtc2VsZWN0XCIsYi5DSElQLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpO2lmKGUubGVuZ3RoKXt2YXIgZj1lLmhhc0NsYXNzKFwic2VsZWN0ZWRcIiksZz1lLmNsb3Nlc3QoYi5DSElQUyk7YShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZnx8ZC5zZWxlY3RDaGlwKGUuaW5kZXgoKSxnKX19KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzXCIpLm9uKFwia2V5ZG93bi5jaGlwc1wiLGZ1bmN0aW9uKGMpe2lmKCFhKGMudGFyZ2V0KS5pcyhcImlucHV0LCB0ZXh0YXJlYVwiKSl7dmFyIGUsZj1kLiRkb2N1bWVudC5maW5kKGIuQ0hJUCtiLlNFTEVDVEVEX0NISVApLGc9Zi5jbG9zZXN0KGIuQ0hJUFMpLGg9Zi5zaWJsaW5ncyhiLkNISVApLmxlbmd0aDtpZihmLmxlbmd0aClpZig4PT09Yy53aGljaHx8NDY9PT1jLndoaWNoKXtjLnByZXZlbnREZWZhdWx0KCksZT1mLmluZGV4KCksZC5kZWxldGVDaGlwKGUsZyk7dmFyIGk9bnVsbDtlKzE8aD9pPWU6ZSE9PWgmJmUrMSE9PWh8fChpPWgtMSksaTwwJiYoaT1udWxsKSxudWxsIT09aSYmZC5zZWxlY3RDaGlwKGksZyksaHx8Zy5maW5kKFwiaW5wdXRcIikuZm9jdXMoKX1lbHNlIGlmKDM3PT09Yy53aGljaCl7aWYoZT1mLmluZGV4KCktMSxlPDApcmV0dXJuO2EoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGQuc2VsZWN0Q2hpcChlLGcpfWVsc2UgaWYoMzk9PT1jLndoaWNoKXtpZihlPWYuaW5kZXgoKSsxLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGU+aClyZXR1cm4gdm9pZCBnLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpO2Quc2VsZWN0Q2hpcChlLGcpfX19KSxkLiRkb2N1bWVudC5vZmYoXCJmb2N1c2luLmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImZvY3VzaW4uY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLmFkZENsYXNzKFwiZm9jdXNcIiksZC5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpfSksZC4kZG9jdW1lbnQub2ZmKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLnJlbW92ZUNsYXNzKFwiZm9jdXNcIiksZC5kYXRhKFwiY2hpcHNcIikubGVuZ3RofHxkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZC5zaWJsaW5ncyhcIi5wcmVmaXhcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZT1hKGMudGFyZ2V0KSxmPWUuY2xvc2VzdChiLkNISVBTKSxnPWYuY2hpbGRyZW4oYi5DSElQKS5sZW5ndGg7aWYoMTM9PT1jLndoaWNoKXtpZihkLmhhc0F1dG9jb21wbGV0ZSYmZi5maW5kKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikubGVuZ3RoJiZmLmZpbmQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5jaGlsZHJlbigpLmxlbmd0aClyZXR1cm47cmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxkLmFkZENoaXAoe3RhZzplLnZhbCgpfSxmKSx2b2lkIGUudmFsKFwiXCIpfWlmKCg4PT09Yy5rZXlDb2RlfHwzNz09PWMua2V5Q29kZSkmJlwiXCI9PT1lLnZhbCgpJiZnKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksZC5zZWxlY3RDaGlwKGctMSxmKSx2b2lkIGUuYmx1cigpfSksZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZGVsZXRlXCIsYi5DSElQUytcIiBcIitiLkRFTEVURSkub24oXCJjbGljay5jaGlwcy1kZWxldGVcIixiLkNISVBTK1wiIFwiK2IuREVMRVRFLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpLGY9ZS5jbG9zZXN0KGIuQ0hJUFMpLGc9ZS5jbG9zZXN0KGIuQ0hJUCk7Yy5zdG9wUHJvcGFnYXRpb24oKSxkLmRlbGV0ZUNoaXAoZy5pbmRleCgpLGYpLGYuZmluZChcImlucHV0XCIpLmZvY3VzKCl9KX0sdGhpcy5jaGlwcz1mdW5jdGlvbihiLGMpe2IuZW1wdHkoKSxiLmRhdGEoXCJjaGlwc1wiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYXBwZW5kKGQucmVuZGVyQ2hpcChhKSl9KSxiLmFwcGVuZChhKCc8aW5wdXQgaWQ9XCInK2MrJ1wiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiPicpKSxkLnNldFBsYWNlaG9sZGVyKGIpO3ZhciBmPWIubmV4dChcImxhYmVsXCIpO2YubGVuZ3RoJiYoZi5hdHRyKFwiZm9yXCIsYyksYi5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZmLmFkZENsYXNzKFwiYWN0aXZlXCIpKTt2YXIgZz1hKFwiI1wiK2MpO2QuaGFzQXV0b2NvbXBsZXRlJiYoZS5hdXRvY29tcGxldGVPcHRpb25zLm9uQXV0b2NvbXBsZXRlPWZ1bmN0aW9uKGEpe2QuYWRkQ2hpcCh7dGFnOmF9LGIpLGcudmFsKFwiXCIpLGcuZm9jdXMoKX0sZy5hdXRvY29tcGxldGUoZS5hdXRvY29tcGxldGVPcHRpb25zKSl9LHRoaXMucmVuZGVyQ2hpcD1mdW5jdGlvbihiKXtpZihiLnRhZyl7dmFyIGM9YSgnPGRpdiBjbGFzcz1cImNoaXBcIj48L2Rpdj4nKTtyZXR1cm4gYy50ZXh0KGIudGFnKSxjLmFwcGVuZChhKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+Y2xvc2U8L2k+JykpLGN9fSx0aGlzLnNldFBsYWNlaG9sZGVyPWZ1bmN0aW9uKGEpe2EuZGF0YShcImNoaXBzXCIpLmxlbmd0aCYmZS5wbGFjZWhvbGRlcj9hLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnBsYWNlaG9sZGVyKTohYS5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZlLnNlY29uZGFyeVBsYWNlaG9sZGVyJiZhLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnNlY29uZGFyeVBsYWNlaG9sZGVyKX0sdGhpcy5pc1ZhbGlkPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuZGF0YShcImNoaXBzXCIpLGQ9ITEsZT0wO2U8Yy5sZW5ndGg7ZSsrKWlmKGNbZV0udGFnPT09Yi50YWcpcmV0dXJuIHZvaWQoZD0hMCk7cmV0dXJuXCJcIiE9PWIudGFnJiYhZH0sdGhpcy5hZGRDaGlwPWZ1bmN0aW9uKGEsYil7aWYoZC5pc1ZhbGlkKGIsYSkpe2Zvcih2YXIgYz1kLnJlbmRlckNoaXAoYSksZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKyllLnB1c2goZltnXSk7ZS5wdXNoKGEpLGIuZGF0YShcImNoaXBzXCIsZSksYy5pbnNlcnRCZWZvcmUoYi5maW5kKFwiaW5wdXRcIikpLGIudHJpZ2dlcihcImNoaXAuYWRkXCIsYSksZC5zZXRQbGFjZWhvbGRlcihiKX19LHRoaXMuZGVsZXRlQ2hpcD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcImNoaXBzXCIpW2FdO2IuZmluZChcIi5jaGlwXCIpLmVxKGEpLnJlbW92ZSgpO2Zvcih2YXIgZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKylnIT09YSYmZS5wdXNoKGZbZ10pO2IuZGF0YShcImNoaXBzXCIsZSksYi50cmlnZ2VyKFwiY2hpcC5kZWxldGVcIixjKSxkLnNldFBsYWNlaG9sZGVyKGIpfSx0aGlzLnNlbGVjdENoaXA9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCIuY2hpcFwiKS5lcShhKTtjJiYhMT09PWMuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSYmKGMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKSxiLnRyaWdnZXIoXCJjaGlwLnNlbGVjdFwiLGIuZGF0YShcImNoaXBzXCIpW2FdKSl9LHRoaXMuZ2V0Q2hpcHNFbGVtZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIuZXEoYSl9LHRoaXMuaW5pdCgpLHRoaXMuaGFuZGxlRXZlbnRzKCl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ucHVzaHBpbj1mdW5jdGlvbihiKXt2YXIgYz17dG9wOjAsYm90dG9tOjEvMCxvZmZzZXQ6MH07cmV0dXJuXCJyZW1vdmVcIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpeyhpZD1hKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIpKSYmKGEod2luZG93KS5vZmYoXCJzY3JvbGwuXCIraWQpLGEodGhpcykucmVtb3ZlRGF0YShcInB1c2hwaW4taWRcIikucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wIHBpbm5lZCBwaW4tYm90dG9tXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSl9KSwhMSk6KGI9YS5leHRlbmQoYyxiKSwkaW5kZXg9MCx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEpe2EucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wXCIpLGEucmVtb3ZlQ2xhc3MoXCJwaW5uZWRcIiksYS5yZW1vdmVDbGFzcyhcInBpbi1ib3R0b21cIil9ZnVuY3Rpb24gZChkLGUpe2QuZWFjaChmdW5jdGlvbigpe2IudG9wPD1lJiZiLmJvdHRvbT49ZSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW5uZWRcIikmJihjKGEodGhpcykpLGEodGhpcykuY3NzKFwidG9wXCIsYi5vZmZzZXQpLGEodGhpcykuYWRkQ2xhc3MoXCJwaW5uZWRcIikpLGU8Yi50b3AmJiFhKHRoaXMpLmhhc0NsYXNzKFwicGluLXRvcFwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5jc3MoXCJ0b3BcIiwwKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLXRvcFwiKSksZT5iLmJvdHRvbSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW4tYm90dG9tXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLWJvdHRvbVwiKSxhKHRoaXMpLmNzcyhcInRvcFwiLGIuYm90dG9tLWcpKX0pfXZhciBlPU1hdGVyaWFsaXplLmd1aWQoKSxmPWEodGhpcyksZz1hKHRoaXMpLm9mZnNldCgpLnRvcDthKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIsZSksZChmLGEod2luZG93KS5zY3JvbGxUb3AoKSksYSh3aW5kb3cpLm9uKFwic2Nyb2xsLlwiK2UsZnVuY3Rpb24oKXt2YXIgYz1hKHdpbmRvdykuc2Nyb2xsVG9wKCkrYi5vZmZzZXQ7ZChmLGMpfSl9KSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YS5mbi5yZXZlcnNlPVtdLnJldmVyc2UsYShkb2N1bWVudCkub24oXCJtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKVwiLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyk7YihkKX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZS5maXhlZEFjdGlvbkJ0blwiLFwiLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhcilcIixmdW5jdGlvbihiKXt2YXIgZD1hKHRoaXMpO2MoZCl9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYkNsaWNrVG9nZ2xlXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhXCIsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCk7Zi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9jKGYpOmIoZil9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYlRvb2xiYXJcIixcIi5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgPiBhXCIsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKSxlPWMucGFyZW50KCk7ZChlKX0pfSksYS5mbi5leHRlbmQoe29wZW5GQUI6ZnVuY3Rpb24oKXtiKGEodGhpcykpfSxjbG9zZUZBQjpmdW5jdGlvbigpe2MoYSh0aGlzKSl9LG9wZW5Ub29sYmFyOmZ1bmN0aW9uKCl7ZChhKHRoaXMpKX0sY2xvc2VUb29sYmFyOmZ1bmN0aW9uKCl7ZShhKHRoaXMpKX19KTt2YXIgYj1mdW5jdGlvbihiKXt2YXIgYz1iO2lmKGMuaGFzQ2xhc3MoXCJhY3RpdmVcIik9PT0hMSl7dmFyIGQsZSxmPWMuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpO2Y9PT0hMD9lPTQwOmQ9NDAsYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KHtzY2FsZVk6XCIuNFwiLHNjYWxlWDpcIi40XCIsdHJhbnNsYXRlWTpkK1wicHhcIix0cmFuc2xhdGVYOmUrXCJweFwifSx7ZHVyYXRpb246MH0pO3ZhciBnPTA7Yy5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS5yZXZlcnNlKCkuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsc2NhbGVYOlwiMVwiLHNjYWxlWTpcIjFcIix0cmFuc2xhdGVZOlwiMFwiLHRyYW5zbGF0ZVg6XCIwXCJ9LHtkdXJhdGlvbjo4MCxkZWxheTpnfSksZys9NDB9KX19LGM9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPWEsZT1kLmhhc0NsYXNzKFwiaG9yaXpvbnRhbFwiKTtlPT09ITA/Yz00MDpiPTQwLGQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7ZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjBcIixzY2FsZVg6XCIuNFwiLHNjYWxlWTpcIi40XCIsdHJhbnNsYXRlWTpiK1wicHhcIix0cmFuc2xhdGVYOmMrXCJweFwifSx7ZHVyYXRpb246ODB9KX0sZD1mdW5jdGlvbihiKXtpZihcInRydWVcIiE9PWIuYXR0cihcImRhdGEtb3BlblwiKSl7dmFyIGMsZCxmLGc9d2luZG93LmlubmVyV2lkdGgsaD13aW5kb3cuaW5uZXJIZWlnaHQsaT1iWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGo9Yi5maW5kKFwiPiBhXCIpLmZpcnN0KCksaz1iLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+JyksbT1qLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7ai5hcHBlbmQobCksYz1pLmxlZnQtZy8yK2kud2lkdGgvMixkPWgtaS5ib3R0b20sZj1nL2wud2lkdGgoKSxiLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIixpLmJvdHRvbSksYi5hdHRyKFwiZGF0YS1vcmlnaW4tbGVmdFwiLGkubGVmdCksYi5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIixpLndpZHRoKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLGIuYXR0cihcImRhdGEtb3BlblwiLCEwKSxiLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJjZW50ZXJcIix3aWR0aDpcIjEwMCVcIixib3R0b206MCxsZWZ0OjAsdHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIitjK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGouY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVZKFwiKy1kK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGwuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjptfSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHt0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnNcIn0pLGouY3NzKHtvdmVyZmxvdzpcInZpc2libGVcIix0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLFwiYmFja2dyb3VuZC1jb2xvclwiOm19KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoXCIrZitcIilcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCJ9KSxrLmZpbmQoXCI+IGxpID4gYVwiKS5jc3Moe29wYWNpdHk6MX0pLGEod2luZG93KS5vbihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbigpe2UoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpfSksYShkb2N1bWVudCkub24oXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5jbG9zZXN0KGspLmxlbmd0aHx8KGUoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpKX0pfSwxMDApfSwwKX19LGU9ZnVuY3Rpb24oYSl7aWYoXCJ0cnVlXCI9PT1hLmF0dHIoXCJkYXRhLW9wZW5cIikpe3ZhciBiLGMsZCxlPXdpbmRvdy5pbm5lcldpZHRoLGY9d2luZG93LmlubmVySGVpZ2h0LGc9YS5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIiksaD1hLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIiksaT1hLmF0dHIoXCJkYXRhLW9yaWdpbi1sZWZ0XCIpLGo9YS5maW5kKFwiPiAuYnRuLWZsb2F0aW5nXCIpLmZpcnN0KCksaz1hLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hLmZpbmQoXCIuZmFiLWJhY2tkcm9wXCIpLG09ai5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO2I9aS1lLzIrZy8yLGM9Zi1oLGQ9ZS9sLndpZHRoKCksYS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhLmF0dHIoXCJkYXRhLW9wZW5cIiwhMSksYS5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOlwidHJhbnNwYXJlbnRcIix0cmFuc2l0aW9uOlwibm9uZVwifSksai5jc3Moe3RyYW5zaXRpb246XCJub25lXCJ9KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoMClcIixcImJhY2tncm91bmQtY29sb3JcIjptfSksay5maW5kKFwiPiBsaSA+IGFcIikuY3NzKHtvcGFjaXR5OlwiXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZW1vdmUoKSxhLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJcIix3aWR0aDpcIlwiLGJvdHRvbTpcIlwiLGxlZnQ6XCJcIixvdmVyZmxvdzpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwiXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrLWIrXCJweCwwLDApXCJ9KSxqLmNzcyh7b3ZlcmZsb3c6XCJcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLFwiK2MrXCJweCwwKVwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2EuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLDAsMClcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksai5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIn0pfSwyMCl9LDIwMCl9fX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtNYXRlcmlhbGl6ZS5mYWRlSW5JbWFnZT1mdW5jdGlvbihiKXt2YXIgYztpZihcInN0cmluZ1wiPT10eXBlb2YgYiljPWEoYik7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYilyZXR1cm47Yz1ifWMuY3NzKHtvcGFjaXR5OjB9KSxhKGMpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo2NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLGEoYykudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjEzMDAscXVldWU6ITEsZWFzaW5nOlwic3dpbmdcIixzdGVwOmZ1bmN0aW9uKGIsYyl7Yy5zdGFydD0xMDA7dmFyIGQ9Yi8xMDAsZT0xNTAtKDEwMC1iKS8xLjc1O2U8MTAwJiYoZT0xMDApLGI+PTAmJmEodGhpcykuY3NzKHtcIi13ZWJraXQtZmlsdGVyXCI6XCJncmF5c2NhbGUoXCIrZCtcIilicmlnaHRuZXNzKFwiK2UrXCIlKVwiLGZpbHRlcjpcImdyYXlzY2FsZShcIitkK1wiKWJyaWdodG5lc3MoXCIrZStcIiUpXCJ9KX19KX0sTWF0ZXJpYWxpemUuc2hvd1N0YWdnZXJlZExpc3Q9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpYz1hKGIpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGIpcmV0dXJuO2M9Yn12YXIgZD0wO2MuZmluZChcImxpXCIpLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiLTEwMHB4XCJ9LHtkdXJhdGlvbjowfSksYy5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsdHJhbnNsYXRlWDpcIjBcIn0se2R1cmF0aW9uOjgwMCxkZWxheTpkLGVhc2luZzpbNjAsMTBdfSksZCs9MTIwfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7dmFyIGI9ITEsYz0hMTthKFwiLmRpc21pc3NhYmxlXCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGQpe2lmKFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKSxmPWQuZ2VzdHVyZS5kaXJlY3Rpb24sZz1kLmdlc3R1cmUuZGVsdGFYLGg9ZC5nZXN0dXJlLnZlbG9jaXR5WDtlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmd9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksND09PWYmJihnPmUuaW5uZXJXaWR0aCgpLzJ8fGg8LS43NSkmJihiPSEwKSwyPT09ZiYmKGc8LTEqZS5pbm5lcldpZHRoKCkvMnx8aD4uNzUpJiYoYz0hMCl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGQpe2lmKE1hdGguYWJzKGQuZ2VzdHVyZS5kZWx0YVgpPGEodGhpcykuaW5uZXJXaWR0aCgpLzImJihjPSExLGI9ITEpLFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKTtpZihifHxjKXt2YXIgZjtmPWI/ZS5pbm5lcldpZHRoKCk6LTEqZS5pbm5lcldpZHRoKCksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpmfSx7ZHVyYXRpb246MTAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlLmNzcyhcImJvcmRlclwiLFwibm9uZVwiKSxlLnZlbG9jaXR5KHtoZWlnaHQ6MCxwYWRkaW5nOjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2UucmVtb3ZlKCl9fSl9fSl9ZWxzZSBlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjoxMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pO2I9ITEsYz0hMX19KX0pfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9ITE7TWF0ZXJpYWxpemUuc2Nyb2xsRmlyZT1mdW5jdGlvbihhKXt2YXIgYz1mdW5jdGlvbigpe2Zvcih2YXIgYj13aW5kb3cucGFnZVlPZmZzZXQrd2luZG93LmlubmVySGVpZ2h0LGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuc2VsZWN0b3IsZj1kLm9mZnNldCxnPWQuY2FsbGJhY2ssaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKG51bGwhPT1oKXt2YXIgaT1oLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQ7aWYoYj5pK2YmJmQuZG9uZSE9PSEwKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBnKWcuY2FsbCh0aGlzLGgpO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGcpe3ZhciBqPW5ldyBGdW5jdGlvbihnKTtqKGgpfWQuZG9uZT0hMH19fX0sZD1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2MoKX0sYS50aHJvdHRsZXx8MTAwKTtifHwod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixkKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQpLGI9ITApLHNldFRpbWVvdXQoZCwwKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcInBpY2tlclwiLFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOnRoaXMuUGlja2VyPWEoalF1ZXJ5KX0oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihmLGcsaSxsKXtmdW5jdGlvbiBtKCl7cmV0dXJuIGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIseS5jb21wb25lbnQubm9kZXModC5vcGVuKSx2LmJveCksdi53cmFwKSx2LmZyYW1lKSx2LmhvbGRlcil9ZnVuY3Rpb24gbigpe3cuZGF0YShnLHkpLmFkZENsYXNzKHYuaW5wdXQpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKS52YWwody5kYXRhKFwidmFsdWVcIik/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdCk6Zi52YWx1ZSksdS5lZGl0YWJsZXx8dy5vbihcImZvY3VzLlwiK3QuaWQrXCIgY2xpY2suXCIrdC5pZCxmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCkseS4kcm9vdC5lcSgwKS5mb2N1cygpfSkub24oXCJrZXlkb3duLlwiK3QuaWQscSksZShmLHtoYXNwb3B1cDohMCxleHBhbmRlZDohMSxyZWFkb25seTohMSxvd25zOmYuaWQrXCJfcm9vdFwifSl9ZnVuY3Rpb24gbygpe3kuJHJvb3Qub24oe2tleWRvd246cSxmb2N1c2luOmZ1bmN0aW9uKGEpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5mb2N1c2VkKSxhLnN0b3BQcm9wYWdhdGlvbigpfSxcIm1vdXNlZG93biBjbGlja1wiOmZ1bmN0aW9uKGIpe3ZhciBjPWIudGFyZ2V0O2MhPXkuJHJvb3QuY2hpbGRyZW4oKVswXSYmKGIuc3RvcFByb3BhZ2F0aW9uKCksXCJtb3VzZWRvd25cIiE9Yi50eXBlfHxhKGMpLmlzKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb3B0aW9uXCIpfHwoYi5wcmV2ZW50RGVmYXVsdCgpLHkuJHJvb3QuZXEoMCkuZm9jdXMoKSkpfX0pLm9uKHtmb2N1czpmdW5jdGlvbigpe3cuYWRkQ2xhc3Modi50YXJnZXQpfSxibHVyOmZ1bmN0aW9uKCl7dy5yZW1vdmVDbGFzcyh2LnRhcmdldCl9fSkub24oXCJmb2N1cy50b09wZW5cIixyKS5vbihcImNsaWNrXCIsXCJbZGF0YS1waWNrXSwgW2RhdGEtbmF2XSwgW2RhdGEtY2xlYXJdLCBbZGF0YS1jbG9zZV1cIixmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoKSxkPWIuaGFzQ2xhc3Modi5uYXZEaXNhYmxlZCl8fGIuaGFzQ2xhc3Modi5kaXNhYmxlZCksZT1oKCk7ZT1lJiYoZS50eXBlfHxlLmhyZWYpLChkfHxlJiYhYS5jb250YWlucyh5LiRyb290WzBdLGUpKSYmeS4kcm9vdC5lcSgwKS5mb2N1cygpLCFkJiZjLm5hdj95LnNldChcImhpZ2hsaWdodFwiLHkuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0LHtuYXY6Yy5uYXZ9KTohZCYmXCJwaWNrXCJpbiBjP3kuc2V0KFwic2VsZWN0XCIsYy5waWNrKTpjLmNsZWFyP3kuY2xlYXIoKS5jbG9zZSghMCk6Yy5jbG9zZSYmeS5jbG9zZSghMCl9KSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9ZnVuY3Rpb24gcCgpe3ZhciBiO3UuaGlkZGVuTmFtZT09PSEwPyhiPWYubmFtZSxmLm5hbWU9XCJcIik6KGI9W1wic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblByZWZpeD91LmhpZGRlblByZWZpeDpcIlwiLFwic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblN1ZmZpeD91LmhpZGRlblN1ZmZpeDpcIl9zdWJtaXRcIl0sYj1iWzBdK2YubmFtZStiWzFdKSx5Ll9oaWRkZW49YSgnPGlucHV0IHR5cGU9aGlkZGVuIG5hbWU9XCInK2IrJ1wiJysody5kYXRhKFwidmFsdWVcIil8fGYudmFsdWU/JyB2YWx1ZT1cIicreS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCkrJ1wiJzpcIlwiKStcIj5cIilbMF0sdy5vbihcImNoYW5nZS5cIit0LmlkLGZ1bmN0aW9uKCl7eS5faGlkZGVuLnZhbHVlPWYudmFsdWU/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCk6XCJcIn0pLHUuY29udGFpbmVyP2EodS5jb250YWluZXIpLmFwcGVuZCh5Ll9oaWRkZW4pOncuYWZ0ZXIoeS5faGlkZGVuKX1mdW5jdGlvbiBxKGEpe3ZhciBiPWEua2V5Q29kZSxjPS9eKDh8NDYpJC8udGVzdChiKTtyZXR1cm4gMjc9PWI/KHkuY2xvc2UoKSwhMSk6dm9pZCgoMzI9PWJ8fGN8fCF0Lm9wZW4mJnkuY29tcG9uZW50LmtleVtiXSkmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSxjP3kuY2xlYXIoKS5jbG9zZSgpOnkub3BlbigpKSl9ZnVuY3Rpb24gcihhKXthLnN0b3BQcm9wYWdhdGlvbigpLFwiZm9jdXNcIj09YS50eXBlJiZ5LiRyb290LmFkZENsYXNzKHYuZm9jdXNlZCkseS5vcGVuKCl9aWYoIWYpcmV0dXJuIGI7dmFyIHM9ITEsdD17aWQ6Zi5pZHx8XCJQXCIrTWF0aC5hYnMofn4oTWF0aC5yYW5kb20oKSpuZXcgRGF0ZSkpfSx1PWk/YS5leHRlbmQoITAse30saS5kZWZhdWx0cyxsKTpsfHx7fSx2PWEuZXh0ZW5kKHt9LGIua2xhc3NlcygpLHUua2xhc3MpLHc9YShmKSx4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhcnQoKX0seT14LnByb3RvdHlwZT17Y29uc3RydWN0b3I6eCwkbm9kZTp3LHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHQmJnQuc3RhcnQ/eToodC5tZXRob2RzPXt9LHQuc3RhcnQ9ITAsdC5vcGVuPSExLHQudHlwZT1mLnR5cGUsZi5hdXRvZm9jdXM9Zj09aCgpLGYucmVhZE9ubHk9IXUuZWRpdGFibGUsZi5pZD1mLmlkfHx0LmlkLFwidGV4dFwiIT1mLnR5cGUmJihmLnR5cGU9XCJ0ZXh0XCIpLHkuY29tcG9uZW50PW5ldyBpKHksdSkseS4kcm9vdD1hKGIuXy5ub2RlKFwiZGl2XCIsbSgpLHYucGlja2VyLCdpZD1cIicrZi5pZCsnX3Jvb3RcIiB0YWJpbmRleD1cIjBcIicpKSxvKCksdS5mb3JtYXRTdWJtaXQmJnAoKSxuKCksdS5jb250YWluZXI/YSh1LmNvbnRhaW5lcikuYXBwZW5kKHkuJHJvb3QpOncuYWZ0ZXIoeS4kcm9vdCkseS5vbih7c3RhcnQ6eS5jb21wb25lbnQub25TdGFydCxyZW5kZXI6eS5jb21wb25lbnQub25SZW5kZXIsc3RvcDp5LmNvbXBvbmVudC5vblN0b3Asb3Blbjp5LmNvbXBvbmVudC5vbk9wZW4sY2xvc2U6eS5jb21wb25lbnQub25DbG9zZSxzZXQ6eS5jb21wb25lbnQub25TZXR9KS5vbih7c3RhcnQ6dS5vblN0YXJ0LHJlbmRlcjp1Lm9uUmVuZGVyLHN0b3A6dS5vblN0b3Asb3Blbjp1Lm9uT3BlbixjbG9zZTp1Lm9uQ2xvc2Usc2V0OnUub25TZXR9KSxzPWMoeS4kcm9vdC5jaGlsZHJlbigpWzBdKSxmLmF1dG9mb2N1cyYmeS5vcGVuKCkseS50cmlnZ2VyKFwic3RhcnRcIikudHJpZ2dlcihcInJlbmRlclwiKSl9LHJlbmRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYT95LiRyb290Lmh0bWwobSgpKTp5LiRyb290LmZpbmQoXCIuXCIrdi5ib3gpLmh0bWwoeS5jb21wb25lbnQubm9kZXModC5vcGVuKSkseS50cmlnZ2VyKFwicmVuZGVyXCIpfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIHQuc3RhcnQ/KHkuY2xvc2UoKSx5Ll9oaWRkZW4mJnkuX2hpZGRlbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHkuX2hpZGRlbikseS4kcm9vdC5yZW1vdmUoKSx3LnJlbW92ZUNsYXNzKHYuaW5wdXQpLnJlbW92ZURhdGEoZyksc2V0VGltZW91dChmdW5jdGlvbigpe3cub2ZmKFwiLlwiK3QuaWQpfSwwKSxmLnR5cGU9dC50eXBlLGYucmVhZE9ubHk9ITEseS50cmlnZ2VyKFwic3RvcFwiKSx0Lm1ldGhvZHM9e30sdC5zdGFydD0hMSx5KTp5fSxvcGVuOmZ1bmN0aW9uKGMpe3JldHVybiB0Lm9wZW4/eToody5hZGRDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMCksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QuYWRkQ2xhc3Modi5vcGVuZWQpLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCExKX0sMCksYyE9PSExJiYodC5vcGVuPSEwLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCIrPVwiK2QoKSkseS4kcm9vdC5lcSgwKS5mb2N1cygpLGoub24oXCJjbGljay5cIit0LmlkK1wiIGZvY3VzaW4uXCIrdC5pZCxmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtiIT1mJiZiIT1kb2N1bWVudCYmMyE9YS53aGljaCYmeS5jbG9zZShiPT09eS4kcm9vdC5jaGlsZHJlbigpWzBdKX0pLm9uKFwia2V5ZG93bi5cIit0LmlkLGZ1bmN0aW9uKGMpe3ZhciBkPWMua2V5Q29kZSxlPXkuY29tcG9uZW50LmtleVtkXSxmPWMudGFyZ2V0OzI3PT1kP3kuY2xvc2UoITApOmYhPXkuJHJvb3RbMF18fCFlJiYxMyE9ZD9hLmNvbnRhaW5zKHkuJHJvb3RbMF0sZikmJjEzPT1kJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGYuY2xpY2soKSk6KGMucHJldmVudERlZmF1bHQoKSxlP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmtleS5nbyx5LFtiLl8udHJpZ2dlcihlKV0pOnkuJHJvb3QuZmluZChcIi5cIit2LmhpZ2hsaWdodGVkKS5oYXNDbGFzcyh2LmRpc2FibGVkKXx8eS5zZXQoXCJzZWxlY3RcIix5LmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCkuY2xvc2UoKSl9KSkseS50cmlnZ2VyKFwib3BlblwiKSl9LGNsb3NlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoeS4kcm9vdC5vZmYoXCJmb2N1cy50b09wZW5cIikuZXEoMCkuZm9jdXMoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5vbihcImZvY3VzLnRvT3BlblwiLHIpfSwwKSksdy5yZW1vdmVDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMSksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5vcGVuZWQrXCIgXCIrdi5mb2N1c2VkKSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9LDApLHQub3Blbj8odC5vcGVuPSExLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcIlwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCItPVwiK2QoKSksai5vZmYoXCIuXCIrdC5pZCkseS50cmlnZ2VyKFwiY2xvc2VcIikpOnl9LGNsZWFyOmZ1bmN0aW9uKGEpe3JldHVybiB5LnNldChcImNsZWFyXCIsbnVsbCxhKX0sc2V0OmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGQ9ZyYmYS5pc1BsYWluT2JqZWN0KGMpP2M6ZHx8e30sYil7Z3x8KGhbYl09Yyk7Zm9yKGUgaW4gaClmPWhbZV0sZSBpbiB5LmNvbXBvbmVudC5pdGVtJiYodm9pZCAwPT09ZiYmKGY9bnVsbCkseS5jb21wb25lbnQuc2V0KGUsZixkKSksXCJzZWxlY3RcIiE9ZSYmXCJjbGVhclwiIT1lfHx3LnZhbChcImNsZWFyXCI9PWU/XCJcIjp5LmdldChlLHUuZm9ybWF0KSkudHJpZ2dlcihcImNoYW5nZVwiKTt5LnJlbmRlcigpfXJldHVybiBkLm11dGVkP3k6eS50cmlnZ2VyKFwic2V0XCIsaCl9LGdldDpmdW5jdGlvbihhLGMpe2lmKGE9YXx8XCJ2YWx1ZVwiLG51bGwhPXRbYV0pcmV0dXJuIHRbYV07aWYoXCJ2YWx1ZVN1Ym1pdFwiPT1hKXtpZih5Ll9oaWRkZW4pcmV0dXJuIHkuX2hpZGRlbi52YWx1ZTthPVwidmFsdWVcIn1pZihcInZhbHVlXCI9PWEpcmV0dXJuIGYudmFsdWU7aWYoYSBpbiB5LmNvbXBvbmVudC5pdGVtKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYyl7dmFyIGQ9eS5jb21wb25lbnQuZ2V0KGEpO3JldHVybiBkP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmZvcm1hdHMudG9TdHJpbmcseS5jb21wb25lbnQsW2MsZF0pOlwiXCJ9cmV0dXJuIHkuY29tcG9uZW50LmdldChhKX19LG9uOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGIpe2d8fChoW2JdPWMpO2ZvcihlIGluIGgpZj1oW2VdLGQmJihlPVwiX1wiK2UpLHQubWV0aG9kc1tlXT10Lm1ldGhvZHNbZV18fFtdLHQubWV0aG9kc1tlXS5wdXNoKGYpfXJldHVybiB5fSxvZmY6ZnVuY3Rpb24oKXt2YXIgYSxiLGM9YXJndW1lbnRzO2ZvcihhPTAsbmFtZXNDb3VudD1jLmxlbmd0aDthPG5hbWVzQ291bnQ7YSs9MSliPWNbYV0sYiBpbiB0Lm1ldGhvZHMmJmRlbGV0ZSB0Lm1ldGhvZHNbYl07cmV0dXJuIHl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgZD10Lm1ldGhvZHNbYV07ZCYmZC5tYXAoZnVuY3Rpb24oYSl7Yi5fLnRyaWdnZXIoYSx5LFtjXSl9KX07cmV0dXJuIGQoXCJfXCIrYSksZChhKSx5fX07cmV0dXJuIG5ldyB4fWZ1bmN0aW9uIGMoYSl7dmFyIGIsYz1cInBvc2l0aW9uXCI7cmV0dXJuIGEuY3VycmVudFN0eWxlP2I9YS5jdXJyZW50U3R5bGVbY106d2luZG93LmdldENvbXB1dGVkU3R5bGUmJihiPWdldENvbXB1dGVkU3R5bGUoYSlbY10pLFwiZml4ZWRcIj09Yn1mdW5jdGlvbiBkKCl7aWYoay5oZWlnaHQoKTw9aS5oZWlnaHQoKSlyZXR1cm4gMDt2YXIgYj1hKCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MTAwcHhcIiAvPicpLmFwcGVuZFRvKFwiYm9keVwiKSxjPWJbMF0ub2Zmc2V0V2lkdGg7Yi5jc3MoXCJvdmVyZmxvd1wiLFwic2Nyb2xsXCIpO3ZhciBkPWEoJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz4nKS5hcHBlbmRUbyhiKSxlPWRbMF0ub2Zmc2V0V2lkdGg7cmV0dXJuIGIucmVtb3ZlKCksYy1lfWZ1bmN0aW9uIGUoYixjLGQpe2lmKGEuaXNQbGFpbk9iamVjdChjKSlmb3IodmFyIGUgaW4gYylmKGIsZSxjW2VdKTtlbHNlIGYoYixjLGQpfWZ1bmN0aW9uIGYoYSxiLGMpe2Euc2V0QXR0cmlidXRlKChcInJvbGVcIj09Yj9cIlwiOlwiYXJpYS1cIikrYixjKX1mdW5jdGlvbiBnKGIsYyl7YS5pc1BsYWluT2JqZWN0KGIpfHwoYj17YXR0cmlidXRlOmN9KSxjPVwiXCI7Zm9yKHZhciBkIGluIGIpe3ZhciBlPShcInJvbGVcIj09ZD9cIlwiOlwiYXJpYS1cIikrZCxmPWJbZF07Yys9bnVsbD09Zj9cIlwiOmUrJz1cIicrYltkXSsnXCInfXJldHVybiBjfWZ1bmN0aW9uIGgoKXt0cnl7cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX12YXIgaT1hKHdpbmRvdyksaj1hKGRvY3VtZW50KSxrPWEoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtyZXR1cm4gYi5rbGFzc2VzPWZ1bmN0aW9uKGEpe3JldHVybiBhPWF8fFwicGlja2VyXCIse3BpY2tlcjphLG9wZW5lZDphK1wiLS1vcGVuZWRcIixmb2N1c2VkOmErXCItLWZvY3VzZWRcIixpbnB1dDphK1wiX19pbnB1dFwiLGFjdGl2ZTphK1wiX19pbnB1dC0tYWN0aXZlXCIsdGFyZ2V0OmErXCJfX2lucHV0LS10YXJnZXRcIixob2xkZXI6YStcIl9faG9sZGVyXCIsZnJhbWU6YStcIl9fZnJhbWVcIix3cmFwOmErXCJfX3dyYXBcIixib3g6YStcIl9fYm94XCJ9fSxiLl89e2dyb3VwOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVwiXCIsZT1iLl8udHJpZ2dlcihhLm1pbixhKTtlPD1iLl8udHJpZ2dlcihhLm1heCxhLFtlXSk7ZSs9YS5pKWM9Yi5fLnRyaWdnZXIoYS5pdGVtLGEsW2VdKSxkKz1iLl8ubm9kZShhLm5vZGUsY1swXSxjWzFdLGNbMl0pO3JldHVybiBkfSxub2RlOmZ1bmN0aW9uKGIsYyxkLGUpe3JldHVybiBjPyhjPWEuaXNBcnJheShjKT9jLmpvaW4oXCJcIik6YyxkPWQ/JyBjbGFzcz1cIicrZCsnXCInOlwiXCIsZT1lP1wiIFwiK2U6XCJcIixcIjxcIitiK2QrZStcIj5cIitjK1wiPC9cIitiK1wiPlwiKTpcIlwifSxsZWFkOmZ1bmN0aW9uKGEpe3JldHVybihhPDEwP1wiMFwiOlwiXCIpK2F9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5hcHBseShiLGN8fFtdKTphfSxkaWdpdHM6ZnVuY3Rpb24oYSl7cmV0dXJuL1xcZC8udGVzdChhWzFdKT8yOjF9LGlzRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJEYXRlXCIpPi0xJiZ0aGlzLmlzSW50ZWdlcihhLmdldERhdGUoKSl9LGlzSW50ZWdlcjpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJOdW1iZXJcIik+LTEmJmElMT09PTB9LGFyaWFBdHRyOmd9LGIuZXh0ZW5kPWZ1bmN0aW9uKGMsZCl7YS5mbltjXT1mdW5jdGlvbihlLGYpe3ZhciBnPXRoaXMuZGF0YShjKTtyZXR1cm5cInBpY2tlclwiPT1lP2c6ZyYmXCJzdHJpbmdcIj09dHlwZW9mIGU/Yi5fLnRyaWdnZXIoZ1tlXSxnLFtmXSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGY9YSh0aGlzKTtmLmRhdGEoYyl8fG5ldyBiKHRoaXMsYyxkLGUpfSl9LGEuZm5bY10uZGVmYXVsdHM9ZC5kZWZhdWx0c30sYn0pLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicGlja2VyXCIsXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwiLi9waWNrZXIuanNcIikscmVxdWlyZShcImpxdWVyeVwiKSk6YShQaWNrZXIsalF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7dmFyIGM9dGhpcyxkPWEuJG5vZGVbMF0sZT1kLnZhbHVlLGY9YS4kbm9kZS5kYXRhKFwidmFsdWVcIiksZz1mfHxlLGg9Zj9iLmZvcm1hdFN1Ym1pdDpiLmZvcm1hdCxpPWZ1bmN0aW9uKCl7cmV0dXJuIGQuY3VycmVudFN0eWxlP1wicnRsXCI9PWQuY3VycmVudFN0eWxlLmRpcmVjdGlvbjpcInJ0bFwiPT1nZXRDb21wdXRlZFN0eWxlKGEuJHJvb3RbMF0pLmRpcmVjdGlvbn07Yy5zZXR0aW5ncz1iLGMuJG5vZGU9YS4kbm9kZSxjLnF1ZXVlPXttaW46XCJtZWFzdXJlIGNyZWF0ZVwiLG1heDpcIm1lYXN1cmUgY3JlYXRlXCIsbm93Olwibm93IGNyZWF0ZVwiLHNlbGVjdDpcInBhcnNlIGNyZWF0ZSB2YWxpZGF0ZVwiLGhpZ2hsaWdodDpcInBhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZVwiLHZpZXc6XCJwYXJzZSBjcmVhdGUgdmFsaWRhdGUgdmlld3NldFwiLGRpc2FibGU6XCJkZWFjdGl2YXRlXCIsZW5hYmxlOlwiYWN0aXZhdGVcIn0sYy5pdGVtPXt9LGMuaXRlbS5jbGVhcj1udWxsLGMuaXRlbS5kaXNhYmxlPShiLmRpc2FibGV8fFtdKS5zbGljZSgwKSxjLml0ZW0uZW5hYmxlPS1mdW5jdGlvbihhKXtyZXR1cm4gYVswXT09PSEwP2Euc2hpZnQoKTotMX0oYy5pdGVtLmRpc2FibGUpLGMuc2V0KFwibWluXCIsYi5taW4pLnNldChcIm1heFwiLGIubWF4KS5zZXQoXCJub3dcIiksZz9jLnNldChcInNlbGVjdFwiLGcse2Zvcm1hdDpofSk6Yy5zZXQoXCJzZWxlY3RcIixudWxsKS5zZXQoXCJoaWdobGlnaHRcIixjLml0ZW0ubm93KSxjLmtleT17NDA6NywzODotNywzOTpmdW5jdGlvbigpe3JldHVybiBpKCk/LTE6MX0sMzc6ZnVuY3Rpb24oKXtyZXR1cm4gaSgpPzE6LTF9LGdvOmZ1bmN0aW9uKGEpe3ZhciBiPWMuaXRlbS5oaWdobGlnaHQsZD1uZXcgRGF0ZShiLnllYXIsYi5tb250aCxiLmRhdGUrYSk7Yy5zZXQoXCJoaWdobGlnaHRcIixkLHtpbnRlcnZhbDphfSksdGhpcy5yZW5kZXIoKX19LGEub24oXCJyZW5kZXJcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdE1vbnRoKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYS5nZXQoXCJ2aWV3XCIpLnllYXIsYyxhLmdldChcImhpZ2hsaWdodFwiKS5kYXRlXSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0TW9udGgpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RZZWFyKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYyxhLmdldChcInZpZXdcIikubW9udGgsYS5nZXQoXCJoaWdobGlnaHRcIikuZGF0ZV0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdFllYXIpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KX0sMSkub24oXCJvcGVuXCIsZnVuY3Rpb24oKXt2YXIgZD1cIlwiO2MuZGlzYWJsZWQoYy5nZXQoXCJub3dcIikpJiYoZD1cIjpub3QoLlwiK2Iua2xhc3MuYnV0dG9uVG9kYXkrXCIpXCIpLGEuJHJvb3QuZmluZChcImJ1dHRvblwiK2QrXCIsIHNlbGVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwhMSl9LDEpLm9uKFwiY2xvc2VcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcImJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCEwKX0sMSl9dmFyIGQ9NyxlPTYsZj1hLl87Yy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9ZC5pdGVtO3JldHVybiBudWxsPT09Yj8oXCJjbGVhclwiPT1hJiYoYT1cInNlbGVjdFwiKSxlW2FdPWIsZCk6KGVbXCJlbmFibGVcIj09YT9cImRpc2FibGVcIjpcImZsaXBcIj09YT9cImVuYWJsZVwiOmFdPWQucXVldWVbYV0uc3BsaXQoXCIgXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gYj1kW2VdKGEsYixjKX0pLnBvcCgpLFwic2VsZWN0XCI9PWE/ZC5zZXQoXCJoaWdobGlnaHRcIixlLnNlbGVjdCxjKTpcImhpZ2hsaWdodFwiPT1hP2Quc2V0KFwidmlld1wiLGUuaGlnaGxpZ2h0LGMpOmEubWF0Y2goL14oZmxpcHxtaW58bWF4fGRpc2FibGV8ZW5hYmxlKSQvKSYmKGUuc2VsZWN0JiZkLmRpc2FibGVkKGUuc2VsZWN0KSYmZC5zZXQoXCJzZWxlY3RcIixlLnNlbGVjdCxjKSxcbmUuaGlnaGxpZ2h0JiZkLmRpc2FibGVkKGUuaGlnaGxpZ2h0KSYmZC5zZXQoXCJoaWdobGlnaHRcIixlLmhpZ2hsaWdodCxjKSksZCl9LGMucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVtW2FdfSxjLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGc9dGhpcztyZXR1cm4gYz12b2lkIDA9PT1jP2E6YyxjPT0tKDEvMCl8fGM9PTEvMD9lPWM6Yi5pc1BsYWluT2JqZWN0KGMpJiZmLmlzSW50ZWdlcihjLnBpY2spP2M9Yy5vYmo6Yi5pc0FycmF5KGMpPyhjPW5ldyBEYXRlKGNbMF0sY1sxXSxjWzJdKSxjPWYuaXNEYXRlKGMpP2M6Zy5jcmVhdGUoKS5vYmopOmM9Zi5pc0ludGVnZXIoYyl8fGYuaXNEYXRlKGMpP2cubm9ybWFsaXplKG5ldyBEYXRlKGMpLGQpOmcubm93KGEsYyxkKSx7eWVhcjplfHxjLmdldEZ1bGxZZWFyKCksbW9udGg6ZXx8Yy5nZXRNb250aCgpLGRhdGU6ZXx8Yy5nZXREYXRlKCksZGF5OmV8fGMuZ2V0RGF5KCksb2JqOmV8fGMscGljazplfHxjLmdldFRpbWUoKX19LGMucHJvdG90eXBlLmNyZWF0ZVJhbmdlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09ITB8fGIuaXNBcnJheShhKXx8Zi5pc0RhdGUoYSk/ZC5jcmVhdGUoYSk6YX07cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfHwoYT1lKGEpKSxmLmlzSW50ZWdlcihjKXx8KGM9ZShjKSksZi5pc0ludGVnZXIoYSkmJmIuaXNQbGFpbk9iamVjdChjKT9hPVtjLnllYXIsYy5tb250aCxjLmRhdGUrYV06Zi5pc0ludGVnZXIoYykmJmIuaXNQbGFpbk9iamVjdChhKSYmKGM9W2EueWVhcixhLm1vbnRoLGEuZGF0ZStjXSkse2Zyb206ZShhKSx0bzplKGMpfX0sYy5wcm90b3R5cGUud2l0aGluUmFuZ2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT10aGlzLmNyZWF0ZVJhbmdlKGEuZnJvbSxhLnRvKSxiLnBpY2s+PWEuZnJvbS5waWNrJiZiLnBpY2s8PWEudG8ucGlja30sYy5wcm90b3R5cGUub3ZlcmxhcFJhbmdlcz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGE9Yy5jcmVhdGVSYW5nZShhLmZyb20sYS50byksYj1jLmNyZWF0ZVJhbmdlKGIuZnJvbSxiLnRvKSxjLndpdGhpblJhbmdlKGEsYi5mcm9tKXx8Yy53aXRoaW5SYW5nZShhLGIudG8pfHxjLndpdGhpblJhbmdlKGIsYS5mcm9tKXx8Yy53aXRoaW5SYW5nZShiLGEudG8pfSxjLnByb3RvdHlwZS5ub3c9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPW5ldyBEYXRlLGMmJmMucmVsJiZiLnNldERhdGUoYi5nZXREYXRlKCkrYy5yZWwpLHRoaXMubm9ybWFsaXplKGIsYyl9LGMucHJvdG90eXBlLm5hdmlnYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmLGcsaCxpPWIuaXNBcnJheShjKSxqPWIuaXNQbGFpbk9iamVjdChjKSxrPXRoaXMuaXRlbS52aWV3O2lmKGl8fGope2ZvcihqPyhmPWMueWVhcixnPWMubW9udGgsaD1jLmRhdGUpOihmPStjWzBdLGc9K2NbMV0saD0rY1syXSksZCYmZC5uYXYmJmsmJmsubW9udGghPT1nJiYoZj1rLnllYXIsZz1rLm1vbnRoKSxlPW5ldyBEYXRlKGYsZysoZCYmZC5uYXY/ZC5uYXY6MCksMSksZj1lLmdldEZ1bGxZZWFyKCksZz1lLmdldE1vbnRoKCk7bmV3IERhdGUoZixnLGgpLmdldE1vbnRoKCkhPT1nOyloLT0xO2M9W2YsZyxoXX1yZXR1cm4gY30sYy5wcm90b3R5cGUubm9ybWFsaXplPWZ1bmN0aW9uKGEpe3JldHVybiBhLnNldEhvdXJzKDAsMCwwLDApLGF9LGMucHJvdG90eXBlLm1lYXN1cmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBiP1wic3RyaW5nXCI9PXR5cGVvZiBiP2I9Yy5wYXJzZShhLGIpOmYuaXNJbnRlZ2VyKGIpJiYoYj1jLm5vdyhhLGIse3JlbDpifSkpOmI9XCJtaW5cIj09YT8tKDEvMCk6MS8wLGJ9LGMucHJvdG90eXBlLnZpZXdzZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5jcmVhdGUoW2IueWVhcixiLm1vbnRoLDFdKX0sYy5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGcsaCxpLGo9dGhpcyxrPWMsbD1kJiZkLmludGVydmFsP2QuaW50ZXJ2YWw6MSxtPWouaXRlbS5lbmFibGU9PT0tMSxuPWouaXRlbS5taW4sbz1qLml0ZW0ubWF4LHA9bSYmai5pdGVtLmRpc2FibGUuZmlsdGVyKGZ1bmN0aW9uKGEpe2lmKGIuaXNBcnJheShhKSl7dmFyIGQ9ai5jcmVhdGUoYSkucGljaztkPGMucGljaz9lPSEwOmQ+Yy5waWNrJiYoZz0hMCl9cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfSkubGVuZ3RoO2lmKCghZHx8IWQubmF2KSYmKCFtJiZqLmRpc2FibGVkKGMpfHxtJiZqLmRpc2FibGVkKGMpJiYocHx8ZXx8Zyl8fCFtJiYoYy5waWNrPD1uLnBpY2t8fGMucGljaz49by5waWNrKSkpZm9yKG0mJiFwJiYoIWcmJmw+MHx8IWUmJmw8MCkmJihsKj0tMSk7ai5kaXNhYmxlZChjKSYmKE1hdGguYWJzKGwpPjEmJihjLm1vbnRoPGsubW9udGh8fGMubW9udGg+ay5tb250aCkmJihjPWssbD1sPjA/MTotMSksYy5waWNrPD1uLnBpY2s/KGg9ITAsbD0xLGM9ai5jcmVhdGUoW24ueWVhcixuLm1vbnRoLG4uZGF0ZSsoYy5waWNrPT09bi5waWNrPzA6LTEpXSkpOmMucGljaz49by5waWNrJiYoaT0hMCxsPS0xLGM9ai5jcmVhdGUoW28ueWVhcixvLm1vbnRoLG8uZGF0ZSsoYy5waWNrPT09by5waWNrPzA6MSldKSksIWh8fCFpKTspYz1qLmNyZWF0ZShbYy55ZWFyLGMubW9udGgsYy5kYXRlK2xdKTtyZXR1cm4gY30sYy5wcm90b3R5cGUuZGlzYWJsZWQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPWMuaXRlbS5kaXNhYmxlLmZpbHRlcihmdW5jdGlvbihkKXtyZXR1cm4gZi5pc0ludGVnZXIoZCk/YS5kYXk9PT0oYy5zZXR0aW5ncy5maXJzdERheT9kOmQtMSklNzpiLmlzQXJyYXkoZCl8fGYuaXNEYXRlKGQpP2EucGljaz09PWMuY3JlYXRlKGQpLnBpY2s6Yi5pc1BsYWluT2JqZWN0KGQpP2Mud2l0aGluUmFuZ2UoZCxhKTp2b2lkIDB9KTtyZXR1cm4gZD1kLmxlbmd0aCYmIWQuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBiLmlzQXJyYXkoYSkmJlwiaW52ZXJ0ZWRcIj09YVszXXx8Yi5pc1BsYWluT2JqZWN0KGEpJiZhLmludmVydGVkfSkubGVuZ3RoLGMuaXRlbS5lbmFibGU9PT0tMT8hZDpkfHxhLnBpY2s8Yy5pdGVtLm1pbi5waWNrfHxhLnBpY2s+Yy5pdGVtLm1heC5waWNrfSxjLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPXt9O3JldHVybiBiJiZcInN0cmluZ1wiPT10eXBlb2YgYj8oYyYmYy5mb3JtYXR8fChjPWN8fHt9LGMuZm9ybWF0PWQuc2V0dGluZ3MuZm9ybWF0KSxkLmZvcm1hdHMudG9BcnJheShjLmZvcm1hdCkubWFwKGZ1bmN0aW9uKGEpe3ZhciBjPWQuZm9ybWF0c1thXSxnPWM/Zi50cmlnZ2VyKGMsZCxbYixlXSk6YS5yZXBsYWNlKC9eIS8sXCJcIikubGVuZ3RoO2MmJihlW2FdPWIuc3Vic3RyKDAsZykpLGI9Yi5zdWJzdHIoZyl9KSxbZS55eXl5fHxlLnl5LCsoZS5tbXx8ZS5tKS0xLGUuZGR8fGUuZF0pOmJ9LGMucHJvdG90eXBlLmZvcm1hdHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjKXt2YXIgZD1hLm1hdGNoKC9cXHcrLylbMF07cmV0dXJuIGMubW18fGMubXx8KGMubT1iLmluZGV4T2YoZCkrMSksZC5sZW5ndGh9ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5tYXRjaCgvXFx3Ky8pWzBdLmxlbmd0aH1yZXR1cm57ZDpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIuZGF0ZX0sZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLmRhdGUpfSxkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNTaG9ydFtjLmRheV19LGRkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNGdWxsW2MuZGF5XX0sbTpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIubW9udGgrMX0sbW06ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLm1vbnRoKzEpfSxtbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc1Nob3J0O3JldHVybiBiP2EoYixkLGMpOmRbYy5tb250aF19LG1tbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc0Z1bGw7cmV0dXJuIGI/YShiLGQsYyk6ZFtjLm1vbnRoXX0seXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOihcIlwiK2IueWVhcikuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT80OmIueWVhcn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gYS5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyl9LHRvU3RyaW5nOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5mb3JtYXRzLnRvQXJyYXkoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBmLnRyaWdnZXIoYy5mb3JtYXRzW2FdLGMsWzAsYl0pfHxhLnJlcGxhY2UoL14hLyxcIlwiKX0pLmpvaW4oXCJcIil9fX0oKSxjLnByb3RvdHlwZS5pc0RhdGVFeGFjdD1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXM7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiZmLmlzSW50ZWdlcihjKXx8XCJib29sZWFuXCI9PXR5cGVvZiBhJiZcImJvb2xlYW5cIj09dHlwZW9mIGM/YT09PWM6KGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/ZC5jcmVhdGUoYSkucGljaz09PWQuY3JlYXRlKGMpLnBpY2s6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmKGQuaXNEYXRlRXhhY3QoYS5mcm9tLGMuZnJvbSkmJmQuaXNEYXRlRXhhY3QoYS50byxjLnRvKSl9LGMucHJvdG90eXBlLmlzRGF0ZU92ZXJsYXA9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5zZXR0aW5ncy5maXJzdERheT8xOjA7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/KGE9YSU3K2UsYT09PWQuY3JlYXRlKGMpLmRheSsxKTpmLmlzSW50ZWdlcihjKSYmKGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpPyhjPWMlNytlLGM9PT1kLmNyZWF0ZShhKS5kYXkrMSk6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmZC5vdmVybGFwUmFuZ2VzKGEsYyl9LGMucHJvdG90eXBlLmZsaXBFbmFibGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5pdGVtO2IuZW5hYmxlPWF8fChiLmVuYWJsZT09LTE/MTotMSl9LGMucHJvdG90eXBlLmRlYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUuc2xpY2UoMCk7cmV0dXJuXCJmbGlwXCI9PWM/ZC5mbGlwRW5hYmxlKCk6Yz09PSExPyhkLmZsaXBFbmFibGUoMSksZT1bXSk6Yz09PSEwPyhkLmZsaXBFbmFibGUoLTEpLGU9W10pOmMubWFwKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxnPTA7ZzxlLmxlbmd0aDtnKz0xKWlmKGQuaXNEYXRlRXhhY3QoYSxlW2ddKSl7Yz0hMDticmVha31jfHwoZi5pc0ludGVnZXIoYSl8fGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSl8fGIuaXNQbGFpbk9iamVjdChhKSYmYS5mcm9tJiZhLnRvKSYmZS5wdXNoKGEpfSksZX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUsZz1lLmxlbmd0aDtyZXR1cm5cImZsaXBcIj09Yz9kLmZsaXBFbmFibGUoKTpjPT09ITA/KGQuZmxpcEVuYWJsZSgxKSxlPVtdKTpjPT09ITE/KGQuZmxpcEVuYWJsZSgtMSksZT1bXSk6Yy5tYXAoZnVuY3Rpb24oYSl7dmFyIGMsaCxpLGo7Zm9yKGk9MDtpPGc7aSs9MSl7aWYoaD1lW2ldLGQuaXNEYXRlRXhhY3QoaCxhKSl7Yz1lW2ldPW51bGwsaj0hMDticmVha31pZihkLmlzRGF0ZU92ZXJsYXAoaCxhKSl7Yi5pc1BsYWluT2JqZWN0KGEpPyhhLmludmVydGVkPSEwLGM9YSk6Yi5pc0FycmF5KGEpPyhjPWEsY1szXXx8Yy5wdXNoKFwiaW52ZXJ0ZWRcIikpOmYuaXNEYXRlKGEpJiYoYz1bYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSxcImludmVydGVkXCJdKTticmVha319aWYoYylmb3IoaT0wO2k8ZztpKz0xKWlmKGQuaXNEYXRlRXhhY3QoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWlmKGopZm9yKGk9MDtpPGc7aSs9MSlpZihkLmlzRGF0ZU92ZXJsYXAoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWMmJmUucHVzaChjKX0pLGUuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hfSl9LGMucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLnNldHRpbmdzLGc9Yi5pdGVtLGg9Zy5ub3csaT1nLnNlbGVjdCxqPWcuaGlnaGxpZ2h0LGs9Zy52aWV3LGw9Zy5kaXNhYmxlLG09Zy5taW4sbj1nLm1heCxvPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuZmlyc3REYXkmJihhLnB1c2goYS5zaGlmdCgpKSxiLnB1c2goYi5zaGlmdCgpKSksZi5ub2RlKFwidGhlYWRcIixmLm5vZGUoXCJ0clwiLGYuZ3JvdXAoe21pbjowLG1heDpkLTEsaToxLG5vZGU6XCJ0aFwiLGl0ZW06ZnVuY3Rpb24oZCl7cmV0dXJuW2FbZF0sYy5rbGFzcy53ZWVrZGF5cywnc2NvcGU9Y29sIHRpdGxlPVwiJytiW2RdKydcIiddfX0pKSl9KChjLnNob3dXZWVrZGF5c0Z1bGw/Yy53ZWVrZGF5c0Z1bGw6Yy53ZWVrZGF5c0xldHRlcikuc2xpY2UoMCksYy53ZWVrZGF5c0Z1bGwuc2xpY2UoMCkpLHA9ZnVuY3Rpb24oYSl7cmV0dXJuIGYubm9kZShcImRpdlwiLFwiIFwiLGMua2xhc3NbXCJuYXZcIisoYT9cIk5leHRcIjpcIlByZXZcIildKyhhJiZrLnllYXI+PW4ueWVhciYmay5tb250aD49bi5tb250aHx8IWEmJmsueWVhcjw9bS55ZWFyJiZrLm1vbnRoPD1tLm1vbnRoP1wiIFwiK2Mua2xhc3MubmF2RGlzYWJsZWQ6XCJcIiksXCJkYXRhLW5hdj1cIisoYXx8LTEpK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJidXR0b25cIixjb250cm9sczpiLiRub2RlWzBdLmlkK1wiX3RhYmxlXCJ9KSsnIHRpdGxlPVwiJysoYT9jLmxhYmVsTW9udGhOZXh0OmMubGFiZWxNb250aFByZXYpKydcIicpfSxxPWZ1bmN0aW9uKGQpe3ZhciBlPWMuc2hvd01vbnRoc1Nob3J0P2MubW9udGhzU2hvcnQ6Yy5tb250aHNGdWxsO3JldHVyblwic2hvcnRfbW9udGhzXCI9PWQmJihlPWMubW9udGhzU2hvcnQpLGMuc2VsZWN0TW9udGhzJiZ2b2lkIDA9PWQ/Zi5ub2RlKFwic2VsZWN0XCIsZi5ncm91cCh7bWluOjAsbWF4OjExLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bZVthXSwwLFwidmFsdWU9XCIrYSsoay5tb250aD09YT9cIiBzZWxlY3RlZFwiOlwiXCIpKyhrLnllYXI9PW0ueWVhciYmYTxtLm1vbnRofHxrLnllYXI9PW4ueWVhciYmYT5uLm1vbnRoP1wiIGRpc2FibGVkXCI6XCJcIildfX0pLGMua2xhc3Muc2VsZWN0TW9udGgrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxNb250aFNlbGVjdCsnXCInKTpcInNob3J0X21vbnRoc1wiPT1kP251bGwhPWk/Zi5ub2RlKFwiZGl2XCIsZVtpLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSxjLmtsYXNzLm1vbnRoKX0scj1mdW5jdGlvbihkKXt2YXIgZT1rLnllYXIsZz1jLnNlbGVjdFllYXJzPT09ITA/NTp+fihjLnNlbGVjdFllYXJzLzIpO2lmKGcpe3ZhciBoPW0ueWVhcixpPW4ueWVhcixqPWUtZyxsPWUrZztpZihoPmomJihsKz1oLWosaj1oKSxpPGwpe3ZhciBvPWotaCxwPWwtaTtqLT1vPnA/cDpvLGw9aX1pZihjLnNlbGVjdFllYXJzJiZ2b2lkIDA9PWQpcmV0dXJuIGYubm9kZShcInNlbGVjdFwiLGYuZ3JvdXAoe21pbjpqLG1heDpsLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bYSwwLFwidmFsdWU9XCIrYSsoZT09YT9cIiBzZWxlY3RlZFwiOlwiXCIpXX19KSxjLmtsYXNzLnNlbGVjdFllYXIrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxZZWFyU2VsZWN0KydcIicpfXJldHVyblwicmF3XCI9PWQ/Zi5ub2RlKFwiZGl2XCIsZSk6Zi5ub2RlKFwiZGl2XCIsZSxjLmtsYXNzLnllYXIpfTtyZXR1cm4gY3JlYXRlRGF5TGFiZWw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9aT9mLm5vZGUoXCJkaXZcIixpLmRhdGUpOmYubm9kZShcImRpdlwiLGguZGF0ZSl9LGNyZWF0ZVdlZWtkYXlMYWJlbD1mdW5jdGlvbigpe3ZhciBhO2E9bnVsbCE9aT9pLmRheTpoLmRheTt2YXIgYj1jLndlZWtkYXlzRnVsbFthXTtyZXR1cm4gYn0sZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsY3JlYXRlV2Vla2RheUxhYmVsKCksXCJwaWNrZXJfX3dlZWtkYXktZGlzcGxheVwiKStmLm5vZGUoXCJkaXZcIixxKFwic2hvcnRfbW9udGhzXCIpLGMua2xhc3MubW9udGhfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsY3JlYXRlRGF5TGFiZWwoKSxjLmtsYXNzLmRheV9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixyKFwicmF3XCIpLGMua2xhc3MueWVhcl9kaXNwbGF5KSxjLmtsYXNzLmRhdGVfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsKGMuc2VsZWN0WWVhcnM/cSgpK3IoKTpxKCkrcigpKStwKCkrcCgxKSxjLmtsYXNzLmhlYWRlcikrZi5ub2RlKFwidGFibGVcIixvK2Yubm9kZShcInRib2R5XCIsZi5ncm91cCh7bWluOjAsbWF4OmUtMSxpOjEsbm9kZTpcInRyXCIsaXRlbTpmdW5jdGlvbihhKXt2YXIgZT1jLmZpcnN0RGF5JiYwPT09Yi5jcmVhdGUoW2sueWVhcixrLm1vbnRoLDFdKS5kYXk/LTc6MDtyZXR1cm5bZi5ncm91cCh7bWluOmQqYS1rLmRheStlKzEsbWF4OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWluK2QtMX0saToxLG5vZGU6XCJ0ZFwiLGl0ZW06ZnVuY3Rpb24oYSl7YT1iLmNyZWF0ZShbay55ZWFyLGsubW9udGgsYSsoYy5maXJzdERheT8xOjApXSk7dmFyIGQ9aSYmaS5waWNrPT1hLnBpY2ssZT1qJiZqLnBpY2s9PWEucGljayxnPWwmJmIuZGlzYWJsZWQoYSl8fGEucGljazxtLnBpY2t8fGEucGljaz5uLnBpY2ssbz1mLnRyaWdnZXIoYi5mb3JtYXRzLnRvU3RyaW5nLGIsW2MuZm9ybWF0LGFdKTtyZXR1cm5bZi5ub2RlKFwiZGl2XCIsYS5kYXRlLGZ1bmN0aW9uKGIpe3JldHVybiBiLnB1c2goay5tb250aD09YS5tb250aD9jLmtsYXNzLmluZm9jdXM6Yy5rbGFzcy5vdXRmb2N1cyksaC5waWNrPT1hLnBpY2smJmIucHVzaChjLmtsYXNzLm5vdyksZCYmYi5wdXNoKGMua2xhc3Muc2VsZWN0ZWQpLGUmJmIucHVzaChjLmtsYXNzLmhpZ2hsaWdodGVkKSxnJiZiLnB1c2goYy5rbGFzcy5kaXNhYmxlZCksYi5qb2luKFwiIFwiKX0oW2Mua2xhc3MuZGF5XSksXCJkYXRhLXBpY2s9XCIrYS5waWNrK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkY2VsbFwiLGxhYmVsOm8sc2VsZWN0ZWQ6ISghZHx8Yi4kbm9kZS52YWwoKSE9PW8pfHxudWxsLGFjdGl2ZWRlc2NlbmRhbnQ6ISFlfHxudWxsLGRpc2FibGVkOiEhZ3x8bnVsbH0pKSxcIlwiLGYuYXJpYUF0dHIoe3JvbGU6XCJwcmVzZW50YXRpb25cIn0pXX19KV19fSkpLGMua2xhc3MudGFibGUsJ2lkPVwiJytiLiRub2RlWzBdLmlkKydfdGFibGVcIiAnK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkXCIsY29udHJvbHM6Yi4kbm9kZVswXS5pZCxyZWFkb25seTohMH0pKSxjLmtsYXNzLmNhbGVuZGFyX2NvbnRhaW5lcikrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiYnV0dG9uXCIsYy50b2RheSxcImJ0bi1mbGF0IHBpY2tlcl9fdG9kYXlcIixcInR5cGU9YnV0dG9uIGRhdGEtcGljaz1cIitoLnBpY2srKGEmJiFiLmRpc2FibGVkKGgpP1wiXCI6XCIgZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZH0pKStmLm5vZGUoXCJidXR0b25cIixjLmNsZWFyLFwiYnRuLWZsYXQgcGlja2VyX19jbGVhclwiLFwidHlwZT1idXR0b24gZGF0YS1jbGVhcj0xXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpK2Yubm9kZShcImJ1dHRvblwiLGMuY2xvc2UsXCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlXCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLWNsb3NlPXRydWUgXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpLGMua2xhc3MuZm9vdGVyKX0sYy5kZWZhdWx0cz1mdW5jdGlvbihhKXtyZXR1cm57bGFiZWxNb250aE5leHQ6XCJOZXh0IG1vbnRoXCIsbGFiZWxNb250aFByZXY6XCJQcmV2aW91cyBtb250aFwiLGxhYmVsTW9udGhTZWxlY3Q6XCJTZWxlY3QgYSBtb250aFwiLGxhYmVsWWVhclNlbGVjdDpcIlNlbGVjdCBhIHllYXJcIixtb250aHNGdWxsOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHdlZWtkYXlzRnVsbDpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSx3ZWVrZGF5c1Nob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSx3ZWVrZGF5c0xldHRlcjpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsY2xvc2U6XCJDbG9zZVwiLGZvcm1hdDpcImQgbW1tbSwgeXl5eVwiLGtsYXNzOnt0YWJsZTphK1widGFibGVcIixoZWFkZXI6YStcImhlYWRlclwiLGRhdGVfZGlzcGxheTphK1wiZGF0ZS1kaXNwbGF5XCIsZGF5X2Rpc3BsYXk6YStcImRheS1kaXNwbGF5XCIsbW9udGhfZGlzcGxheTphK1wibW9udGgtZGlzcGxheVwiLHllYXJfZGlzcGxheTphK1wieWVhci1kaXNwbGF5XCIsY2FsZW5kYXJfY29udGFpbmVyOmErXCJjYWxlbmRhci1jb250YWluZXJcIixuYXZQcmV2OmErXCJuYXYtLXByZXZcIixuYXZOZXh0OmErXCJuYXYtLW5leHRcIixuYXZEaXNhYmxlZDphK1wibmF2LS1kaXNhYmxlZFwiLG1vbnRoOmErXCJtb250aFwiLHllYXI6YStcInllYXJcIixzZWxlY3RNb250aDphK1wic2VsZWN0LS1tb250aFwiLHNlbGVjdFllYXI6YStcInNlbGVjdC0teWVhclwiLHdlZWtkYXlzOmErXCJ3ZWVrZGF5XCIsZGF5OmErXCJkYXlcIixkaXNhYmxlZDphK1wiZGF5LS1kaXNhYmxlZFwiLHNlbGVjdGVkOmErXCJkYXktLXNlbGVjdGVkXCIsaGlnaGxpZ2h0ZWQ6YStcImRheS0taGlnaGxpZ2h0ZWRcIixub3c6YStcImRheS0tdG9kYXlcIixpbmZvY3VzOmErXCJkYXktLWluZm9jdXNcIixvdXRmb2N1czphK1wiZGF5LS1vdXRmb2N1c1wiLGZvb3RlcjphK1wiZm9vdGVyXCIsYnV0dG9uQ2xlYXI6YStcImJ1dHRvbi0tY2xlYXJcIixidXR0b25Ub2RheTphK1wiYnV0dG9uLS10b2RheVwiLGJ1dHRvbkNsb3NlOmErXCJidXR0b24tLWNsb3NlXCJ9fX0oYS5rbGFzc2VzKCkucGlja2VyK1wiX19cIiksYS5leHRlbmQoXCJwaWNrYWRhdGVcIixjKX0pLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYj0rYSh0aGlzKS5hdHRyKFwiZGF0YS1sZW5ndGhcIiksYz0rYSh0aGlzKS52YWwoKS5sZW5ndGgsZD1jPD1iO2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChjK1wiL1wiK2IpLGUoZCxhKHRoaXMpKX1mdW5jdGlvbiBjKGIpe3ZhciBjPWIucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7Yy5sZW5ndGh8fChjPWEoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKFwiY2hhcmFjdGVyLWNvdW50ZXJcIikuY3NzKFwiZmxvYXRcIixcInJpZ2h0XCIpLmNzcyhcImZvbnQtc2l6ZVwiLFwiMTJweFwiKS5jc3MoXCJoZWlnaHRcIiwxKSxiLnBhcmVudCgpLmFwcGVuZChjKSl9ZnVuY3Rpb24gZCgpe2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChcIlwiKX1mdW5jdGlvbiBlKGEsYil7dmFyIGM9Yi5oYXNDbGFzcyhcImludmFsaWRcIik7YSYmYz9iLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTphfHxjfHwoYi5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGIuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpKX1hLmZuLmNoYXJhY3RlckNvdW50ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7aWYoIWYubGVuZ3RoKXt2YXIgZz12b2lkIDAhPT1lLmF0dHIoXCJkYXRhLWxlbmd0aFwiKTtnJiYoZS5vbihcImlucHV0XCIsYiksZS5vbihcImZvY3VzXCIsYiksZS5vbihcImJsdXJcIixkKSxjKGUpKX19KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiaW5wdXQsIHRleHRhcmVhXCIpLmNoYXJhY3RlckNvdW50ZXIoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtkdXJhdGlvbjoyMDAsZGlzdDotMTAwLHNoaWZ0OjAscGFkZGluZzowLGZ1bGxXaWR0aDohMSxpbmRpY2F0b3JzOiExLG5vV3JhcDohMSxvbkN5Y2xlVG86bnVsbH07Yj1hLmV4dGVuZChjLGIpO3ZhciBkPU1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKGEodGhpcykpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZSgpe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0JiYoT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIscCkpLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixwKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIscCksT1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixsKX1mdW5jdGlvbiBmKGEpe3JldHVybiBhLnRhcmdldFRvdWNoZXMmJmEudGFyZ2V0VG91Y2hlcy5sZW5ndGg+PTE/YS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg6YS5jbGllbnRYfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEudGFyZ2V0VG91Y2hlcyYmYS50YXJnZXRUb3VjaGVzLmxlbmd0aD49MT9hLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTphLmNsaWVudFl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYT49eD9hJXg6YTwwP2goeCthJXgpOmF9ZnVuY3Rpb24gaShjKXtFPSEwLE8uaGFzQ2xhc3MoXCJzY3JvbGxpbmdcIil8fE8uYWRkQ2xhc3MoXCJzY3JvbGxpbmdcIiksbnVsbCE9TiYmd2luZG93LmNsZWFyVGltZW91dChOKSxOPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RT0hMSxPLnJlbW92ZUNsYXNzKFwic2Nyb2xsaW5nXCIpfSxiLmR1cmF0aW9uKTt2YXIgZCxlLGYsZyxpLGosayxsPXU7aWYodD1cIm51bWJlclwiPT10eXBlb2YgYz9jOnQsdT1NYXRoLmZsb29yKCh0K3cvMikvdyksZj10LXUqdyxnPWY8MD8xOi0xLGk9LWcqZioyL3csZT14Pj4xLGIuZnVsbFdpZHRoP2s9XCJ0cmFuc2xhdGVYKDApXCI6KGs9XCJ0cmFuc2xhdGVYKFwiKyhPWzBdLmNsaWVudFdpZHRoLXIpLzIrXCJweCkgXCIsays9XCJ0cmFuc2xhdGVZKFwiKyhPWzBdLmNsaWVudEhlaWdodC1zKS8yK1wicHgpXCIpLFApe3ZhciBtPXUleCxuPU0uZmluZChcIi5pbmRpY2F0b3ItaXRlbS5hY3RpdmVcIik7bi5pbmRleCgpIT09bSYmKG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksTS5maW5kKFwiLmluZGljYXRvci1pdGVtXCIpLmVxKG0pLmFkZENsYXNzKFwiYWN0aXZlXCIpKX1mb3IoKCFiLm5vV3JhcHx8dT49MCYmdTx4KSYmKGo9cVtoKHUpXSxhKGopLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwoTy5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYShqKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppKmQrXCJweCkgdHJhbnNsYXRlWihcIitiLmRpc3QqaStcInB4KVwiLGouc3R5bGUuekluZGV4PTAsYi5mdWxsV2lkdGg/dHdlZW5lZE9wYWNpdHk9MTp0d2VlbmVkT3BhY2l0eT0xLS4yKmksai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGQ9MTtkPD1lOysrZCliLmZ1bGxXaWR0aD8oelRyYW5zbGF0aW9uPWIuZGlzdCx0d2VlbmVkT3BhY2l0eT1kPT09ZSYmZjwwPzEtaToxKTooelRyYW5zbGF0aW9uPWIuZGlzdCooMipkK2kqZyksdHdlZW5lZE9wYWNpdHk9MS0uMiooMipkK2kqZykpLCghYi5ub1dyYXB8fHUrZDx4KSYmKGo9cVtoKHUrZCldLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKyhiLnNoaWZ0Kyh3KmQtZikvMikrXCJweCkgdHJhbnNsYXRlWihcIit6VHJhbnNsYXRpb24rXCJweClcIixqLnN0eWxlLnpJbmRleD0tZCxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksYi5mdWxsV2lkdGg/KHpUcmFuc2xhdGlvbj1iLmRpc3QsdHdlZW5lZE9wYWNpdHk9ZD09PWUmJmY+MD8xLWk6MSk6KHpUcmFuc2xhdGlvbj1iLmRpc3QqKDIqZC1pKmcpLHR3ZWVuZWRPcGFjaXR5PTEtLjIqKDIqZC1pKmcpKSwoIWIubm9XcmFwfHx1LWQ+PTApJiYoaj1xW2godS1kKV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrKC1iLnNoaWZ0KygtdypkLWYpLzIpK1wicHgpIHRyYW5zbGF0ZVooXCIrelRyYW5zbGF0aW9uK1wicHgpXCIsai5zdHlsZS56SW5kZXg9LWQsai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpO2lmKCghYi5ub1dyYXB8fHU+PTAmJnU8eCkmJihqPXFbaCh1KV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppK1wicHgpIHRyYW5zbGF0ZVooXCIrYi5kaXN0KmkrXCJweClcIixqLnN0eWxlLnpJbmRleD0wLGIuZnVsbFdpZHRoP3R3ZWVuZWRPcGFjaXR5PTE6dHdlZW5lZE9wYWNpdHk9MS0uMippLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxsIT09dSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkN5Y2xlVG8pe3ZhciBvPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVxKGgodSkpO2Iub25DeWNsZVRvLmNhbGwodGhpcyxvLEopfX1mdW5jdGlvbiBqKCl7dmFyIGEsYixjLGQ7YT1EYXRlLm5vdygpLGI9YS1ILEg9YSxjPXQtRyxHPXQsZD0xZTMqYy8oMStiKSxEPS44KmQrLjIqRH1mdW5jdGlvbiBrKCl7dmFyIGEsYztCJiYoYT1EYXRlLm5vdygpLUgsYz1CKk1hdGguZXhwKC1hL2IuZHVyYXRpb24pLGM+Mnx8YzwtMj8oaShDLWMpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSk6aShDKSl9ZnVuY3Rpb24gbChjKXtpZihKKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSwhMTtpZighYi5mdWxsV2lkdGgpe3ZhciBkPWEoYy50YXJnZXQpLmNsb3Nlc3QoXCIuY2Fyb3VzZWwtaXRlbVwiKS5pbmRleCgpLGU9dSV4LWQ7MCE9PWUmJihjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSksbShkKX19ZnVuY3Rpb24gbShhKXt2YXIgYz11JXgtYTtiLm5vV3JhcHx8KGM8MD9NYXRoLmFicyhjK3gpPE1hdGguYWJzKGMpJiYoYys9eCk6Yz4wJiZNYXRoLmFicyhjLXgpPGMmJihjLT14KSksYzwwP08udHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtNYXRoLmFicyhjKV0pOmM+MCYmTy50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2NdKX1mdW5jdGlvbiBuKGEpe2EucHJldmVudERlZmF1bHQoKSx2PSEwLEo9ITEsSz0hMSx6PWYoYSksQT1nKGEpLEQ9Qj0wLEc9dCxIPURhdGUubm93KCksY2xlYXJJbnRlcnZhbChJKSxJPXNldEludGVydmFsKGosMTAwKX1mdW5jdGlvbiBvKGEpe3ZhciBiLGMsZDtpZih2KWlmKGI9ZihhKSx5PWcoYSksYz16LWIsZD1NYXRoLmFicyhBLXkpLGQ8MzAmJiFLKShjPjJ8fGM8LTIpJiYoSj0hMCx6PWIsaSh0K2MpKTtlbHNle2lmKEopcmV0dXJuIGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLCExO0s9ITB9aWYoSilyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksITF9ZnVuY3Rpb24gcChhKXtpZih2KXJldHVybiB2PSExLGNsZWFySW50ZXJ2YWwoSSksQz10LChEPjEwfHxEPC0xMCkmJihCPS45KkQsQz10K0IpLEM9TWF0aC5yb3VuZChDL3cpKncsYi5ub1dyYXAmJihDPj13Kih4LTEpP0M9dyooeC0xKTpDPDAmJihDPTApKSxCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspLEomJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSksITF9dmFyIHEscixzLHQsdSx2LHcseCx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMPWQrYyxNPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLE49bnVsbCxPPWEodGhpcyksUD1PLmF0dHIoXCJkYXRhLWluZGljYXRvcnNcIil8fGIuaW5kaWNhdG9ycyxRPWZ1bmN0aW9uKCl7dmFyIGI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW0gaW1nXCIpLmZpcnN0KCk7aWYoYi5sZW5ndGgpYi5wcm9wKFwiY29tcGxldGVcIik/Ty5jc3MoXCJoZWlnaHRcIixiLmhlaWdodCgpKTpiLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7Ty5jc3MoXCJoZWlnaHRcIixhKHRoaXMpLmhlaWdodCgpKX0pO2Vsc2V7dmFyIGM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5oZWlnaHQoKTtPLmNzcyhcImhlaWdodFwiLGMpfX07cmV0dXJuIGIuZnVsbFdpZHRoJiYoYi5kaXN0PTAsUSgpLFAmJk8uZmluZChcIi5jYXJvdXNlbC1maXhlZC1pdGVtXCIpLmFkZENsYXNzKFwid2l0aC1pbmRpY2F0b3JzXCIpKSxPLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIik/KGEod2luZG93KS50cmlnZ2VyKFwicmVzaXplXCIpLGEodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFsxZS02XSksITApOihPLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIiksdj0hMSx0PUM9MCxxPVtdLHI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lcldpZHRoKCkscz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVySGVpZ2h0KCksdz0yKnIrYi5wYWRkaW5nLE8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVhY2goZnVuY3Rpb24oYil7aWYocS5wdXNoKGEodGhpcylbMF0pLFApe3ZhciBjPWEoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTswPT09YiYmYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmNsaWNrKGZ1bmN0aW9uKGIpe2Iuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGM9YSh0aGlzKS5pbmRleCgpO20oYyl9KSxNLmFwcGVuZChjKX19KSxQJiZPLmFwcGVuZChNKSx4PXEubGVuZ3RoLEY9XCJ0cmFuc2Zvcm1cIixbXCJ3ZWJraXRcIixcIk1velwiLFwiT1wiLFwibXNcIl0uZXZlcnkoZnVuY3Rpb24oYSl7dmFyIGI9YStcIlRyYW5zZm9ybVwiO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW2JdfHwoRj1iLCExKX0pLGEod2luZG93KS5vZmYoXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCkub24oXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCxmdW5jdGlvbigpe2IuZnVsbFdpZHRoPyhyPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJXaWR0aCgpLHM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lckhlaWdodCgpLHc9MipyK2IucGFkZGluZyx0PTIqdSpyLEM9dCk6aSgpfSksZSgpLGkodCksYSh0aGlzKS5vbihcImNhcm91c2VsTmV4dFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MSksQz13Kk1hdGgucm91bmQodC93KSt3KmIsdCE9PUMmJihCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKX0pLGEodGhpcykub24oXCJjYXJvdXNlbFByZXZcIixmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPTEpLEM9dypNYXRoLnJvdW5kKHQvdyktdypiLHQhPT1DJiYoQj1DLXQsSD1EYXRlLm5vdygpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSl9KSx2b2lkIGEodGhpcykub24oXCJjYXJvdXNlbFNldFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MCksbShiKX0pKX0pfSxuZXh0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtiXSl9LHByZXY6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2JdKX0sc2V0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsU2V0XCIsW2JdKX19O2EuZm4uY2Fyb3VzZWw9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmNhcm91c2VsXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKFwiI1wiK2EodGhpcykuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKSxkPShhKFwiYm9keVwiKSxhKHRoaXMpKSxlPWQucGFyZW50KFwiLnRhcC10YXJnZXQtd3JhcHBlclwiKSxmPWUuZmluZChcIi50YXAtdGFyZ2V0LXdhdmVcIiksZz1lLmZpbmQoXCIudGFwLXRhcmdldC1vcmlnaW5cIiksaD1kLmZpbmQoXCIudGFwLXRhcmdldC1jb250ZW50XCIpO2UubGVuZ3RofHwoZT1kLndyYXAoYSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd3JhcHBlclwiPjwvZGl2PicpKS5wYXJlbnQoKSksaC5sZW5ndGh8fChoPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LWNvbnRlbnRcIj48L2Rpdj4nKSxkLmFwcGVuZChoKSksZi5sZW5ndGh8fChmPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdhdmVcIj48L2Rpdj4nKSxnLmxlbmd0aHx8KGc9Yy5jbG9uZSghMCwhMCksZy5hZGRDbGFzcyhcInRhcC10YXJnZXQtb3JpZ2luXCIpLGcucmVtb3ZlQXR0cihcImlkXCIpLGcucmVtb3ZlQXR0cihcInN0eWxlXCIpLGYuYXBwZW5kKGcpKSxlLmFwcGVuZChmKSk7dmFyIGk9ZnVuY3Rpb24oKXtlLmlzKFwiLm9wZW5cIil8fChlLmFkZENsYXNzKFwib3BlblwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihhKXtqKCksZy5vZmYoXCJjbGljay50YXBUYXJnZXRcIil9KSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihiKXtqKCksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpfSk7dmFyIGI9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtrKCl9LDIwMCk7YSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YXBUYXJnZXRcIikub24oXCJyZXNpemUudGFwVGFyZ2V0XCIsYil9LDApKX0saj1mdW5jdGlvbigpe2UuaXMoXCIub3BlblwiKSYmKGUucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGcub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnRhcFRhcmdldFwiKSl9LGs9ZnVuY3Rpb24oKXt2YXIgYj1cImZpeGVkXCI9PT1jLmNzcyhcInBvc2l0aW9uXCIpO2lmKCFiKWZvcih2YXIgZz1jLnBhcmVudHMoKSxpPTA7aTxnLmxlbmd0aCYmIShiPVwiZml4ZWRcIj09YShnW2ldKS5jc3MoXCJwb3NpdGlvblwiKSk7aSsrKTt2YXIgaj1jLm91dGVyV2lkdGgoKSxrPWMub3V0ZXJIZWlnaHQoKSxsPWI/Yy5vZmZzZXQoKS50b3AtYShkb2N1bWVudCkuc2Nyb2xsVG9wKCk6Yy5vZmZzZXQoKS50b3AsbT1iP2Mub2Zmc2V0KCkubGVmdC1hKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCk6Yy5vZmZzZXQoKS5sZWZ0LG49YSh3aW5kb3cpLndpZHRoKCksbz1hKHdpbmRvdykuaGVpZ2h0KCkscD1uLzIscT1vLzIscj1tPD1wLHM9bT5wLHQ9bDw9cSx1PWw+cSx2PW0+PS4yNSpuJiZtPD0uNzUqbix3PWQub3V0ZXJXaWR0aCgpLHg9ZC5vdXRlckhlaWdodCgpLHk9bCtrLzIteC8yLHo9bStqLzItdy8yLEE9Yj9cImZpeGVkXCI6XCJhYnNvbHV0ZVwiLEI9dj93OncvMitqLEM9eC8yLEQ9dD94LzI6MCxFPTAsRj1yJiYhdj93LzItajowLEc9MCxIPWosST11P1wiYm90dG9tXCI6XCJ0b3BcIixKPWo+az8yKmo6MipqLEs9SixMPXgvMi1LLzIsTT13LzItSi8yLE49e307Ti50b3A9dD95OlwiXCIsTi5yaWdodD1zP24tei13OlwiXCIsTi5ib3R0b209dT9vLXkteDpcIlwiLE4ubGVmdD1yP3o6XCJcIixOLnBvc2l0aW9uPUEsZS5jc3MoTiksaC5jc3Moe3dpZHRoOkIsaGVpZ2h0OkMsdG9wOkQscmlnaHQ6Ryxib3R0b206RSxsZWZ0OkYscGFkZGluZzpILHZlcnRpY2FsQWxpZ246SX0pLGYuY3NzKHt0b3A6TCxsZWZ0Ok0sd2lkdGg6SixoZWlnaHQ6S30pfTtcIm9wZW5cIj09YiYmKGsoKSxpKCkpLFwiY2xvc2VcIj09YiYmaigpfSl9LG9wZW46ZnVuY3Rpb24oKXt9LGNsb3NlOmZ1bmN0aW9uKCl7fX07YS5mbi50YXBUYXJnZXQ9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY118fFwib2JqZWN0XCI9PXR5cGVvZiBjP2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXRcIil9fShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRpYy9tYXRlcmlhbGl6ZS5taW4uanMiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG5cbmZ1bmN0aW9uIF9pbml0Q2xpZW50IChoZWFkZXJzLCBpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLFxuICAgIGRhdGFJZEZyb21PYmplY3Q6IHJlc3VsdCA9PiByZXN1bHQuaWQgfHwgbnVsbCxcbiAgICBuZXR3b3JrSW50ZXJmYWNlOiBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlKHtcbiAgICAgIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsJyxcbiAgICAgIG9wdHM6IHtcbiAgICAgICAgY3JlZGVudGlhbHM6ICdjcm9zcy1vcmlnaW4nLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDbGllbnQgPSAoaGVhZGVycywgaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIGFwb2xsb0NsaWVudFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luaXRDbGllbnQuanMiLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgaW5pdENsaWVudCB9IGZyb20gJy4uL2xpYi9pbml0Q2xpZW50J1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IChcbiAgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGN0eC5yZXEgPyBjdHgucmVxLmhlYWRlcnMgOiB7fVxuICAgICAgY29uc3QgY2xpZW50ID0gaW5pdENsaWVudChoZWFkZXJzKVxuXG4gICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgdXJsOiB7IHF1ZXJ5OiBjdHgucXVlcnksIHBhdGhuYW1lOiBjdHgucGF0aG5hbWUgfSxcbiAgICAgICAgLi4uYXdhaXQgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBwID0gKFxuICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKGFwcClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgICAgYXBvbGxvOiB7XG4gICAgICAgICAgICBkYXRhOiBjbGllbnQuZ2V0SW5pdGlhbFN0YXRlKCkuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgLi4ucHJvcHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICB0aGlzLmNsaWVudCA9IGluaXRDbGllbnQodGhpcy5wcm9wcy5oZWFkZXJzLCB0aGlzLnByb3BzLmluaXRpYWxTdGF0ZSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmNsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuXG4gICAgICApXG4gICAgfVxuICB9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiLCJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0ICB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgocHJvcHMpID0+IChcbiAgPEFwcCBkYXRhPXtwcm9wc30+XG4gICAgICAgICAgPGgzPkNyZWF0ZSBhIHBvc3Q8L2gzPlxuICAgICAgICAgIDxwPlNoYXJlIHlvdXIgdGhvdWdodHMgd2l0aCBwZW9wbGUgYXJvdW5kIHlvdS48L3A+XG4gIDwvQXBwPlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NyZWF0ZS5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        