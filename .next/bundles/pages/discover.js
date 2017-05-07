
          window.__NEXT_REGISTER_PAGE('/discover', function() {
            var comp = module.exports =
webpackJsonp([7],{

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

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(529);

var _App2 = _interopRequireDefault(_App);

var _link = __webpack_require__(437);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(659);

var _withData2 = _interopRequireDefault(_withData);

var _PostList = __webpack_require__(677);

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/discover.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, { data: props, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'container col m8', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Discover'), _react2.default.createElement('div', { className: 'col s12 m8 offset-m2 l6 offset-l3', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_PostList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }))));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/discover.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/discover.js"); } } })();
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
    })(module.exports.default || module.exports, "/discover")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(668);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(603);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/PostDownVoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($id: Int!) {\n    voteDownPost(id: $id) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation ($id: Int!) {\n    voteDownPost(id: $id) {\n      id\n      votes\n    }\n  }\n']);

function PostDownVoter(_ref) {
  var voteDownPost = _ref.voteDownPost,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('a', { className: 'btn-floating btn-small waves-effect waves-light red', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('i', { onClick: function onClick() {
      return voteDownPost(id);
    }, className: 'small material-icons', style: { color: '#ffffff' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'thumb_down'));
}

var voteDownPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(voteDownPost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      voteDownPost: function voteDownPost(id) {
        return mutate({
          variables: { id: id },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id
            }
          }
        });
      }
    };
  }
})(PostDownVoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostDownVoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostDownVoter.js"); } } })();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(98);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(95);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(668);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(239);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(603);

var _post = __webpack_require__(679);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(first: $first, skip: $skip) {\n      id\n      title\n      body\n      votes\n      url\n      author{\n        id\n        firstName\n        lastName\n        username\n      }\n    },\n\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(first: $first, skip: $skip) {\n      id\n      title\n      body\n      votes\n      url\n      author{\n        id\n        firstName\n        lastName\n        username\n      }\n    },\n\n  }\n']);

var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      allPosts = _ref$data.allPosts,
      loading = _ref$data.loading,
      loadMorePosts = _ref.loadMorePosts;

  if (allPosts && allPosts.length) {
    var areMorePosts = false;
    return _react2.default.createElement('section', {
      'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement(_post2.default, { key: post.id, post: post, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    }), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, 'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: 1990168462,
      css: 'section[data-jsx="1990168462"] {padding-bottom: 20px;}li[data-jsx="1990168462"] {display: block;margin-bottom: 10px;}div[data-jsx="1990168462"] {align-items: center;display:-webkit-flex; display:flex;}a[data-jsx="1990168462"] {font-size: 14px;margin-right: 10px;text-decoration: none;padding-bottom: 0;border: 0;}span[data-jsx="1990168462"] {font-size: 14px;margin-right: 5px;}ul[data-jsx="1990168462"] {margin: 0;padding: 0;}button[data-jsx="1990168462"]:before {align-self: center;border-style: solid;border-width: 6px 4px 0 4px;border-color: #ffffff transparent transparent transparent;content: "";height: 0;margin-right: 5px;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzdHVmZi9Qb3N0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBQ0QsZ0NBQ2MscUJBQ3RCLENBQ0csMkJBQ2EsZUFDSyxvQkFDckIsQ0FDSSw0QkFDaUIsb0JBQ04sbUNBQ2YsQ0FDRSwwQkFDZSxnQkFDRyxtQkFDRyxzQkFDSixrQkFDUixVQUNYLENBQ0ssNkJBQ1ksZ0JBQ0Usa0JBQ25CLENBQ0csMkJBQ1EsVUFDQyxXQUNaLENBQ2Msc0NBQ00sbUJBQ0Msb0JBQ1EsNEJBQzhCLDBEQUM5QyxZQUNGLFVBQ1Esa0JBQ1QsU0FDViIsImZpbGUiOiJkYXRhc3R1ZmYvUG9zdExpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhcnRoL0RvY3VtZW50cy9ncmFwaHFsL25leHQtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5pbXBvcnQgUG9zdCBmcm9tICcuL3Bvc3QnXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwXG5cbmZ1bmN0aW9uIFBvc3RMaXN0ICh7IGRhdGE6IHsgYWxsUG9zdHMsIGxvYWRpbmcgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChhbGxQb3N0cyAmJiBhbGxQb3N0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cblxuICAgICAgICAgICAgICAgIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cblxuICAgICAgICAgICl9XG5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IGFsbFBvc3RzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxQb3N0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBib2R5XG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBhdXRob3J7XG4gICAgICAgIGlkXG4gICAgICAgIGZpcnN0TmFtZVxuICAgICAgICBsYXN0TmFtZVxuICAgICAgICB1c2VybmFtZVxuICAgICAgfVxuICAgIH0sXG5cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG4gICAgfVxuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShQb3N0TGlzdClcbiJdfQ== */\n/*@ sourceURL=datastuff/PostList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, 'Loading');
}

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat((0, _toConsumableArray3.default)(previousResult.allPosts), (0, _toConsumableArray3.default)(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostList.js"); } } })();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(668);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(603);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($id: Int!) {\n    voteUpPost(id: $id) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation ($id: Int!) {\n    voteUpPost(id: $id) {\n      id\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var voteUpPost = _ref.voteUpPost,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('a', { className: 'btn-floating btn-small waves-effect waves-light green', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('i', { onClick: function onClick() {
      return voteUpPost(id);
    }, className: 'small material-icons', style: { color: '#ffffff' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'thumb_up'));
}

var voteUpPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(voteUpPost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      voteUpPost: function voteUpPost(id) {
        return mutate({
          variables: { id: id },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/PostUpvoter.js"); } } })();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _PostUpvoter = __webpack_require__(678);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownVoter = __webpack_require__(676);

var _PostDownVoter2 = _interopRequireDefault(_PostDownVoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js';

var IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'card-panel grey lighten-5 z-depth-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'row valign-wrapper', style: { marginBottom: -5 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'col s3 m3', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'row', style: { marginBottom: -15 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'col s12 m8', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('img', { src: props.post.author.username ? IMAGEFINDER + props.post.author.username : IMAGEFINDER + props.post.author.username, alt: '', className: 'circle responsive-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('div', { className: 'row', style: { textAlign: 'center', marginTop: -15 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'col s12 m12', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.post.author.username ? props.post.author.username : "Anonymous"))))), _react2.default.createElement('div', { className: 'row', style: { marginBottom: 0 + 'px', textAlign: 'center', marginTop: 5 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('div', { className: 'col s12', style: { color: props.post.votes >= 0 ? '#00e676' : '#FF1744', fontSize: 1.5 + 'em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.post.votes))), _react2.default.createElement('div', { className: 'col s10', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { className: 'postTitle', style: { marginBottom: 8 + 'px', fontSize: 20 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, props.post.title ? props.post.title : "< Empty > "), _react2.default.createElement('span', { className: 'black-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, props.post.body ? props.post.body : "< Empty >")), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_PostDownVoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_PostUpvoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); } } })();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(669);


/***/ })

},[680]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz81YjQ1YTY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzViNDVhNjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/NWI0NWE2NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/NWI0NWE2NSIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzPzViNDVhNjUiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRDbGllbnQuanM/NWI0NWE2NSIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/NWI0NWE2NSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kaXNjb3Zlci5qcz81YjQ1YTY1Iiwid2VicGFjazovLy8uL2RhdGFzdHVmZi9Qb3N0RG93blZvdGVyLmpzPzViNDVhNjUiLCJ3ZWJwYWNrOi8vLy4vZGF0YXN0dWZmL1Bvc3RMaXN0LmpzPzViNDVhNjUiLCJ3ZWJwYWNrOi8vLy4vZGF0YXN0dWZmL1Bvc3RVcHZvdGVyLmpzPzViNDVhNjUiLCJ3ZWJwYWNrOi8vLy4vZGF0YXN0dWZmL3Bvc3QuanM/NWI0NWE2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzZGQUd3Qjs7OzttQkFDM0I7d0JBQVEsSUFDUjt3QkFBUSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUFFZDs7O2tCQUFZLE9BQU07d0NBQUE7O2lJQUVqQjs7Ozs7d0NBRUM7YUFBTyxTQUNQO2FBQU8sSUFDUDtBQUNEOzs7OzZCQUVDOzZCQUNFLHdCQUFNLFdBQVU7b0JBQWhCO3NCQUtJO0FBTEo7T0FBQSxrQkFLSyxrQ0FBTyxVQUFVLEtBQUssTUFBTSxLQUFLLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLO29CQUExRTtzQkFD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VyxJQUFJO1VBQUksSUFBRSxFQUFFLFNBQU8sRUFBRTtVQUFPLElBQUUsRUFBRSxTQUFPLEVBQUU7VUFBTyxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUcsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxHQUFHLEVBQUUsS0FBRyxHQUFHLEVBQUUsS0FBRyxFQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUcsRUFBRSxlQUFlO0FBQW5LLFdBQXdLLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxVQUFVLEVBQUUsV0FBUyxHQUFFLEVBQUUsWUFBVSxHQUFFLEVBQUUsWUFBVSxHQUFFLEVBQUUsWUFBWTtZQUFTLEVBQUUsR0FBRztTQUFJLElBQUksSUFBRSxJQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUyxTQUFRO1FBQUUsS0FBRyxFQUFDLFNBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxVQUFTLFNBQVEsR0FBRyxFQUFFLFNBQVMsR0FBRyxZQUFVO0FBQUksWUFBTSxFQUFDLFdBQVUsTUFBSyxVQUFTLEdBQUUsUUFBTyxFQUFFLElBQUcsUUFBTyxFQUFFLFFBQU8sUUFBTyxFQUFVO1lBQVMsRUFBRSxHQUFHO1FBQUksSUFBRSxFQUFFLE9BQU8sSUFBRyxNQUFJLEdBQUUsT0FBTSxFQUFDLEdBQUUsR0FBRyxFQUFFLEdBQUcsVUFBUyxHQUFFLEdBQUcsRUFBRSxHQUFHLFdBQVUsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRztXQUFHLEVBQUUsR0FBRyxTQUFRLEtBQUcsRUFBRSxHQUFHLFNBQVE7QUFBSSxZQUFNLEVBQUMsR0FBRSxHQUFHLElBQUUsSUFBRyxHQUFFLEdBQUcsSUFBTTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7V0FBTSxFQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsR0FBRSxJQUFFLEtBQU07WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLE1BQUksSUFBRSxLQUFHLEdBQUcsTUFBSSxHQUFHLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxJQUFFLElBQUUsS0FBTTtZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLFFBQVEsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUU7QUFBbEIsUUFBc0IsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFFLElBQUUsSUFBSztZQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUc7VUFBSSxJQUFFLFFBQVEsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUU7QUFBbEIsUUFBc0IsSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQUksS0FBSyxNQUFNLEdBQUUsS0FBRyxLQUFRO1lBQVMsRUFBRSxHQUFFLEdBQUc7V0FBTyxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQUcsTUFBSSxFQUFFLEVBQUUsSUFBRyxFQUFFLElBQU87WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBRyxNQUFJLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBTztZQUFTLElBQUk7U0FBSyxPQUFLLElBQUcsS0FBSyxRQUFNLElBQUcsS0FBSyxRQUFNLENBQUMsR0FBRSxLQUFLLFVBQVEsQ0FBQyxHQUFFLEVBQUUsTUFBTSxNQUFnQjtZQUFTLElBQUk7U0FBSyxPQUFLLElBQUcsS0FBSyxRQUFNLElBQUcsRUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFFBQU0sS0FBSyxRQUFRLFFBQVEsZ0JBQWlCO1lBQVMsSUFBSTtTQUFLLFdBQVMsSUFBRyxLQUFLLFFBQU0sSUFBRyxLQUFLLFVBQVEsQ0FBQyxHQUFFLEVBQUUsTUFBTSxNQUFnQjtZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLEVBQUU7UUFBUyxJQUFFLEVBQUUsRUFBRSxnQkFBZ0IsT0FBTyxLQUFHLEtBQUcsUUFBTSxJQUFFLEVBQUUsRUFBRSxPQUFPLElBQUcsY0FBYSxDQUFDLEtBQUksQ0FBQyxHQUFLO1lBQVMsSUFBSTtTQUFLLFdBQVMsSUFBRyxLQUFLLFlBQVUsSUFBRyxFQUFFLE1BQU0sTUFBZ0I7WUFBUyxFQUFFLEdBQUUsR0FBRztRQUFJLElBQUUsRUFBRSxFQUFFO1FBQVMsSUFBRSxLQUFLLFVBQVUsSUFBRyxLQUFHLEtBQUcsT0FBSyxNQUFJLEVBQUUsUUFBTyxPQUFPLEVBQUUsRUFBRSxHQUFHLGNBQVksQ0FBQyxHQUFFLENBQUMsR0FBRSxPQUFPO0FBQUosUUFBTTtRQUFFLElBQUUsRUFBRSxFQUFFO1FBQWdCLElBQUU7UUFBRyxJQUFFLEtBQUssaUJBQWMsT0FBTyxVQUFTLEdBQUc7YUFBTyxFQUFFLEVBQUUsUUFBVTtBQUExQyxNQUFGLEVBQThDLE1BQUksRUFBckQsRUFBd0QsS0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVE7UUFBRSxFQUFFLEdBQUcsY0FBWSxDQUFDLEdBQUU7QUFBSSxVQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUTtRQUFFLEVBQUUsR0FBRyxlQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUksS0FBRyxLQUFHLE9BQUssT0FBTyxFQUFFLEVBQUUsR0FBRyxhQUFZO0FBQUksWUFBTyxFQUFFLFNBQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFHLGNBQWEsQ0FBQyxJQUFHLEtBQUcsS0FBTztZQUFTLElBQUk7TUFBRSxNQUFNLE1BQUssV0FBVyxJQUFJLElBQUUsRUFBRSxLQUFLLFNBQVEsTUFBTSxLQUFLLFFBQU0sSUFBSSxFQUFFLEtBQUssU0FBUSxJQUFHLEtBQUssUUFBTSxJQUFJLEVBQUUsS0FBSyxTQUFXO1lBQVMsRUFBRSxHQUFFLEdBQUc7U0FBSyxVQUFRLEdBQUUsS0FBSyxJQUFPO1lBQVMsRUFBRSxHQUFHO1FBQUcsRUFBRSxHQUFFLEtBQUksT0FBTyxPQUFPLElBQUUsRUFBRSxHQUFFO0FBQVYsUUFBYyxJQUFFLEVBQUUsR0FBRSxJQUFJLE9BQU8sS0FBRyxJQUFFLEtBQUcsTUFBSSxLQUFHLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxFQUFFLEdBQUUsTUFBSSxLQUFNO1lBQVMsRUFBRSxHQUFHO1NBQUssS0FBRyxLQUFJLEtBQUssVUFBUSxNQUFLLEtBQUssVUFBUSxFQUFFLEtBQUcsSUFBRyxLQUFLLFdBQVUsS0FBSyxRQUFRLFNBQU8sRUFBRSxLQUFLLFFBQVEsUUFBTyxDQUFDLElBQUcsS0FBSyxRQUFNLElBQUcsS0FBSyxlQUFhLElBQUcsS0FBSyxjQUFlO1lBQVMsRUFBRSxHQUFHO1dBQU8sSUFBRSxLQUFHLFdBQVMsSUFBRSxLQUFHLFFBQU0sSUFBRSxLQUFHLFNBQU8sSUFBRSxLQUFHLFVBQVc7WUFBUyxFQUFFLEdBQUc7V0FBTyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsT0FBSyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsVUFBVztZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLFFBQVEsT0FBTyxJQUFFLEVBQUUsSUFBSSxLQUFLO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBZ0I7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxLQUFHLE1BQUssS0FBSyxLQUFRO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFZO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFFBQU0sQ0FBQyxHQUFFLEtBQUssVUFBUSxDQUFDLEdBQUUsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFPLE1BQUssS0FBSyxRQUFRO1lBQVMsR0FBRyxHQUFFLEdBQUc7V0FBTyxJQUFFLEtBQUcsSUFBRyxFQUFFLGNBQVksRUFBRSxFQUFFLGFBQVksR0FBRyxTQUFTLFNBQVEsSUFBSSxHQUFHLEdBQUs7WUFBUyxHQUFHLEdBQUUsR0FBRztRQUFFLEtBQUcsSUFBRyxLQUFLLFVBQVEsRUFBRSxHQUFFLEdBQUcs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RUFBRSxVQUFVLGVBQWEsRUFBRSxTQUFTO2NBQUssSUFBRSxFQUFFLFFBQVE7Y0FBUSxJQUFFLEVBQUUsUUFBUTtjQUFTLElBQUUsSUFBRTtjQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsS0FBRztjQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsS0FBRztjQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsS0FBRyxNQUFJLEtBQUcsS0FBRyxNQUFJO2NBQUUsSUFBRSxFQUFFO2NBQWEsSUFBRSxFQUFFO2NBQWMsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxJQUFFLFVBQVE7Y0FBVyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFLElBQUU7Y0FBRSxJQUFFLElBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRTtjQUFFLElBQUUsS0FBRyxDQUFDLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFO2NBQUUsSUFBRTtjQUFFLElBQUUsSUFBRSxXQUFTO2NBQU0sSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFO2NBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFLEdBQUcsRUFBRSxNQUFJLElBQUUsSUFBRSxJQUFHLEVBQUUsUUFBTSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUcsRUFBRSxTQUFPLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRyxFQUFFLE9BQUssSUFBRSxJQUFFLElBQUcsRUFBRSxXQUFTLEdBQUUsRUFBRSxJQUFJLElBQUcsRUFBRSxJQUFJLEVBQUMsT0FBTSxHQUFFLFFBQU8sR0FBRSxLQUFJLEdBQUUsT0FBTSxHQUFFLFFBQU8sR0FBRSxNQUFLLEdBQUUsU0FBUSxHQUFFLGVBQWMsTUFBSSxFQUFFLElBQUksRUFBQyxLQUFJLEdBQUUsTUFBSyxHQUFFLE9BQU0sR0FBRSxRQUFXO0FBQXJ6QyxVQUFzekMsVUFBUSxNQUFJLEtBQUksTUFBSyxX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QTtrQkFBTztBQUFQO0FBQUEsV0FBYSxLQUFLLE9BQU8sV0FBVyxNQUFNLEtBQUssT0FBTyxXQUkzRix5REFBSyxXQUFVLE9BQU0sT0FBTyxFQUFDLGNBQWMsSUFBSSxNQUFPLFdBQVcsVUFBVyxXQUFXLElBQUk7Z0JBQTNGO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVSxXQUFVLE9BQU8sRUFBQyxPQUFPLE1BQU0sS0FBSyxTQUFTLElBQUksWUFBWSxXQUFVLFVBQVUsTUFBTTtnQkFBdEc7a0JBQ0c7QUFESDtXQUNTLEtBSWIsaURBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVUsYUFBWSxPQUFPLEVBQUMsY0FBYyxJQUFJLE1BQU0sVUFBVSxLQUFLO2dCQUExRTtrQkFBa0Y7QUFBbEY7V0FBd0YsS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUNoSCx1REFBTSxXQUFVO2dCQUFoQjtrQkFDRztBQURIO1dBQ1MsS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUdsQyxzREFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNHLHlDQUFjLElBQUksTUFBTSxLQUFLO2dCQUE5QjtrQkFFRjtBQUZFO3VCQUVGLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtxQkFDRyx1Q0FBWSxJQUFJLE1BQU0sS0FBSztnQkFBNUI7a0JBQUE7QUFBQTs7QUFoQ1IsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2Rpc2NvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxTdGF0ZShzdGF0ZSl7XG4gICAgY29uc29sZS5sb2coXCJIQVZFIFNUQVRFXCIpXG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4gICAgd2luZG93LiQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrZW4tMlwiPlxuICAgICAgICB7LyogaWYocHJvY2Vzcy5XaW5kb3cpe1xuICAgICAgICAgIHZhciB0aGluZyA9IGNyZWF0ZUZyYWdtZW50KDxMb2FkZXIgc3R5bGU9e3tkaXNwbGF5OiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIn19Lz4pICovfVxuXG5cbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXt0aGlzLnByb3BzLmRhdGEudXJsLnBhdGhuYW1lfSB1c2VybmFtZT17dGhpcy5wcm9wcy5kYXRhLnVzZXJuYW1lfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VybmFtZUZpZWxkIGZyb20gJy4vdXNlcm5hbWVGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIC8vIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJibHVlIGRhcmtlbi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIHJpZ2h0XCI+XG4gICAgICAgICAgPFVzZXJuYW1lRmllbGQgdXNlcm5hbWU9e3RoaXMucHJvcHMudXNlcm5hbWV9IC8+PC9kaXY+XG4gICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImxlZnQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lID09PSAnLycgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgICAgXHRcdFx0PGEgPkhvbWUgPC9hPlxuICAgICAgICAgIFx0XHRcdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Rpc2NvdmVyJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9kaXNjb3Zlcic+XG4gICAgICAgICAgICAgIDxhID5EaXNjb3ZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2NyZWF0ZScgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvY3JlYXRlJz5cbiAgICAgICAgICAgICAgPGEgPkNyZWF0ZSBhIFBvc3Q8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZGl2LnByb2dyZXNzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2FkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VybmFtZUZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VybmFtZSl7XG4gICAgICAgICAgcmV0dXJuICg8aDQ+V2VsY29tZSwge3RoaXMucHJvcHMudXNlcm5hbWV9LjwvaDQ+KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImljb25fcHJlZml4XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanMiLCIvKiFcbiAqIE1hdGVyaWFsaXplIHYwLjk4LjIgKGh0dHA6Ly9tYXRlcmlhbGl6ZWNzcy5jb20pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IE1hdGVyaWFsaXplXG4gKiBNSVQgTGljZW5zZSAoaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0RvZ2ZhbG8vbWF0ZXJpYWxpemUvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpe3ZhciBqUXVlcnk7alF1ZXJ5PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmU/JD1yZXF1aXJlKFwianF1ZXJ5XCIpOiR9alF1ZXJ5LmVhc2luZy5qc3dpbmc9alF1ZXJ5LmVhc2luZy5zd2luZyxqUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcse2RlZjpcImVhc2VPdXRRdWFkXCIsc3dpbmc6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4galF1ZXJ5LmVhc2luZ1tqUXVlcnkuZWFzaW5nLmRlZl0oYSxiLGMsZCxlKX0sZWFzZUluUXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKihiLz1lKSpiK2N9LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKGIvPWUpKihiLTIpK2N9LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIrYzotZC8yKigtLWIqKGItMiktMSkrY30sZWFzZUluQ3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiK2N9LGVhc2VPdXRDdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKigoYj1iL2UtMSkqYipiKzEpK2N9LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIrYzpkLzIqKChiLT0yKSpiKmIrMikrY30sZWFzZUluUXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiKmIrY30sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKChiPWIvZS0xKSpiKmIqYi0xKStjfSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiKmIrYzotZC8yKigoYi09MikqYipiKmItMikrY30sZWFzZUluUXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYipiKmIqYitjfSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooKGI9Yi9lLTEpKmIqYipiKmIrMSkrY30sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYipiKmIrYzpkLzIqKChiLT0yKSpiKmIqYipiKzIpK2N9LGVhc2VJblNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZCpNYXRoLmNvcyhiL2UqKE1hdGguUEkvMikpK2QrY30sZWFzZU91dFNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCpNYXRoLnNpbihiL2UqKE1hdGguUEkvMikpK2N9LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4tZC8yKihNYXRoLmNvcyhNYXRoLlBJKmIvZSktMSkrY30sZWFzZUluRXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiAwPT1iP2M6ZCpNYXRoLnBvdygyLDEwKihiL2UtMSkpK2N9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGI9PWU/YytkOmQqKC1NYXRoLnBvdygyLC0xMCpiL2UpKzEpK2N9LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gMD09Yj9jOmI9PWU/YytkOihiLz1lLzIpPDE/ZC8yKk1hdGgucG93KDIsMTAqKGItMSkpK2M6ZC8yKigtTWF0aC5wb3coMiwtMTAqLS1iKSsyKStjfSxlYXNlSW5DaXJjOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqKE1hdGguc3FydCgxLShiLz1lKSpiKS0xKStjfSxlYXNlT3V0Q2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkKk1hdGguc3FydCgxLShiPWIvZS0xKSpiKStjfSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT8tZC8yKihNYXRoLnNxcnQoMS1iKmIpLTEpK2M6ZC8yKihNYXRoLnNxcnQoMS0oYi09MikqYikrMSkrY30sZWFzZUluRWxhc3RpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPTEuNzAxNTgsZz0wLGg9ZDtpZigwPT1iKXJldHVybiBjO2lmKDE9PShiLz1lKSlyZXR1cm4gYytkO2lmKGd8fChnPS4zKmUpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybi0oaCpNYXRoLnBvdygyLDEwKihiLT0xKSkqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKSkrY30sZWFzZU91dEVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigxPT0oYi89ZSkpcmV0dXJuIGMrZDtpZihnfHwoZz0uMyplKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4gaCpNYXRoLnBvdygyLC0xMCpiKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpK2QrY30sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPTEuNzAxNTgsZz0wLGg9ZDtpZigwPT1iKXJldHVybiBjO2lmKDI9PShiLz1lLzIpKXJldHVybiBjK2Q7aWYoZ3x8KGc9ZSooLjMqMS41KSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuIGI8MT8tLjUqKGgqTWF0aC5wb3coMiwxMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykpK2M6aCpNYXRoLnBvdygyLC0xMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykqLjUrZCtjfSxlYXNlSW5CYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSxkKihiLz1lKSpiKigoZisxKSpiLWYpK2N9LGVhc2VPdXRCYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSxkKigoYj1iL2UtMSkqYiooKGYrMSkqYitmKSsxKStjfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdm9pZCAwPT1mJiYoZj0xLjcwMTU4KSwoYi89ZS8yKTwxP2QvMiooYipiKigoKGYqPTEuNTI1KSsxKSpiLWYpKStjOmQvMiooKGItPTIpKmIqKCgoZio9MS41MjUpKzEpKmIrZikrMikrY30sZWFzZUluQm91bmNlOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQtalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGEsZS1iLDAsZCxlKStjfSxlYXNlT3V0Qm91bmNlOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUpPDEvMi43NT9kKig3LjU2MjUqYipiKStjOmI8Mi8yLjc1P2QqKDcuNTYyNSooYi09MS41LzIuNzUpKmIrLjc1KStjOmI8Mi41LzIuNzU/ZCooNy41NjI1KihiLT0yLjI1LzIuNzUpKmIrLjkzNzUpK2M6ZCooNy41NjI1KihiLT0yLjYyNS8yLjc1KSpiKy45ODQzNzUpK2N9LGVhc2VJbk91dEJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiPGUvMj8uNSpqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZShhLDIqYiwwLGQsZSkrYzouNSpqUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UoYSwyKmItZSwwLGQsZSkrLjUqZCtjfX0pLGpRdWVyeS5leHRlbmQoalF1ZXJ5LmVhc2luZyx7ZWFzZUluT3V0TWF0ZXJpYWw6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIrYzpkLzQqKChiLT0yKSpiKmIrMikrY319KSxqUXVlcnkuVmVsb2NpdHk/Y29uc29sZS5sb2coXCJWZWxvY2l0eSBpcyBhbHJlYWR5IGxvYWRlZC4gWW91IG1heSBiZSBuZWVkbGVzc2x5IGltcG9ydGluZyBWZWxvY2l0eSBhZ2Fpbjsgbm90ZSB0aGF0IE1hdGVyaWFsaXplIGluY2x1ZGVzIFZlbG9jaXR5LlwiKTooIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGI9YS5sZW5ndGgsZD1jLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09ZCYmIWMuaXNXaW5kb3coYSkmJighKDEhPT1hLm5vZGVUeXBlfHwhYil8fChcImFycmF5XCI9PT1kfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpKX1pZighYS5qUXVlcnkpe3ZhciBjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBjLmZuLmluaXQoYSxiKX07Yy5pc1dpbmRvdz1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09YS53aW5kb3d9LGMudHlwZT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/ZVtnLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxjLmlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT09Yy50eXBlKGEpfSxjLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGI7aWYoIWF8fFwib2JqZWN0XCIhPT1jLnR5cGUoYSl8fGEubm9kZVR5cGV8fGMuaXNXaW5kb3coYSkpcmV0dXJuITE7dHJ5e2lmKGEuY29uc3RydWN0b3ImJiFmLmNhbGwoYSxcImNvbnN0cnVjdG9yXCIpJiYhZi5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChkKXtyZXR1cm4hMX1mb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8Zi5jYWxsKGEsYil9LGMuZWFjaD1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZj0wLGc9YS5sZW5ndGgsaD1iKGEpO2lmKGQpe2lmKGgpZm9yKDtnPmYmJihlPWMuYXBwbHkoYVtmXSxkKSxlIT09ITEpO2YrKyk7ZWxzZSBmb3IoZiBpbiBhKWlmKGU9Yy5hcHBseShhW2ZdLGQpLGU9PT0hMSlicmVha31lbHNlIGlmKGgpZm9yKDtnPmYmJihlPWMuY2FsbChhW2ZdLGYsYVtmXSksZSE9PSExKTtmKyspO2Vsc2UgZm9yKGYgaW4gYSlpZihlPWMuY2FsbChhW2ZdLGYsYVtmXSksZT09PSExKWJyZWFrO3JldHVybiBhfSxjLmRhdGE9ZnVuY3Rpb24oYSxiLGUpe2lmKHZvaWQgMD09PWUpe3ZhciBmPWFbYy5leHBhbmRvXSxnPWYmJmRbZl07aWYodm9pZCAwPT09YilyZXR1cm4gZztpZihnJiZiIGluIGcpcmV0dXJuIGdbYl19ZWxzZSBpZih2b2lkIDAhPT1iKXt2YXIgZj1hW2MuZXhwYW5kb118fChhW2MuZXhwYW5kb109KytjLnV1aWQpO3JldHVybiBkW2ZdPWRbZl18fHt9LGRbZl1bYl09ZSxlfX0sYy5yZW1vdmVEYXRhPWZ1bmN0aW9uKGEsYil7dmFyIGU9YVtjLmV4cGFuZG9dLGY9ZSYmZFtlXTtmJiZjLmVhY2goYixmdW5jdGlvbihhLGIpe2RlbGV0ZSBmW2JdfSl9LGMuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixkLGUsZixnLGg9YXJndW1lbnRzWzBdfHx7fSxpPTEsaj1hcmd1bWVudHMubGVuZ3RoLGs9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgaCYmKGs9aCxoPWFyZ3VtZW50c1tpXXx8e30saSsrKSxcIm9iamVjdFwiIT10eXBlb2YgaCYmXCJmdW5jdGlvblwiIT09Yy50eXBlKGgpJiYoaD17fSksaT09PWomJihoPXRoaXMsaS0tKTtqPmk7aSsrKWlmKG51bGwhPShmPWFyZ3VtZW50c1tpXSkpZm9yKGUgaW4gZilhPWhbZV0sZD1mW2VdLGghPT1kJiYoayYmZCYmKGMuaXNQbGFpbk9iamVjdChkKXx8KGI9Yy5pc0FycmF5KGQpKSk/KGI/KGI9ITEsZz1hJiZjLmlzQXJyYXkoYSk/YTpbXSk6Zz1hJiZjLmlzUGxhaW5PYmplY3QoYSk/YTp7fSxoW2VdPWMuZXh0ZW5kKGssZyxkKSk6dm9pZCAwIT09ZCYmKGhbZV09ZCkpO3JldHVybiBofSxjLnF1ZXVlPWZ1bmN0aW9uKGEsZCxlKXtmdW5jdGlvbiBmKGEsYyl7dmFyIGQ9Y3x8W107cmV0dXJuIG51bGwhPWEmJihiKE9iamVjdChhKSk/IWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7KWFbZSsrXT1iW2QrK107aWYoYyE9PWMpZm9yKDt2b2lkIDAhPT1iW2RdOylhW2UrK109YltkKytdO3JldHVybiBhLmxlbmd0aD1lLGF9KGQsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOltdLnB1c2guY2FsbChkLGEpKSxkfWlmKGEpe2Q9KGR8fFwiZnhcIikrXCJxdWV1ZVwiO3ZhciBnPWMuZGF0YShhLGQpO3JldHVybiBlPyghZ3x8Yy5pc0FycmF5KGUpP2c9Yy5kYXRhKGEsZCxmKGUpKTpnLnB1c2goZSksZyk6Z3x8W119fSxjLmRlcXVldWU9ZnVuY3Rpb24oYSxiKXtjLmVhY2goYS5ub2RlVHlwZT9bYV06YSxmdW5jdGlvbihhLGQpe2I9Ynx8XCJmeFwiO3ZhciBlPWMucXVldWUoZCxiKSxmPWUuc2hpZnQoKTtcImlucHJvZ3Jlc3NcIj09PWYmJihmPWUuc2hpZnQoKSksZiYmKFwiZnhcIj09PWImJmUudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZi5jYWxsKGQsZnVuY3Rpb24oKXtjLmRlcXVldWUoZCxiKX0pKX0pfSxjLmZuPWMucHJvdG90eXBlPXtpbml0OmZ1bmN0aW9uKGEpe2lmKGEubm9kZVR5cGUpcmV0dXJuIHRoaXNbMF09YSx0aGlzO3Rocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKX0sb2Zmc2V0OmZ1bmN0aW9uKCl7dmFyIGI9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTp7dG9wOjAsbGVmdDowfTtyZXR1cm57dG9wOmIudG9wKyhhLnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxUb3B8fDApLShkb2N1bWVudC5jbGllbnRUb3B8fDApLGxlZnQ6Yi5sZWZ0KyhhLnBhZ2VYT2Zmc2V0fHxkb2N1bWVudC5zY3JvbGxMZWZ0fHwwKS0oZG9jdW1lbnQuY2xpZW50TGVmdHx8MCl9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtmb3IodmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fGRvY3VtZW50O2EmJlwiaHRtbFwiPT09IWEubm9kZVR5cGUudG9Mb3dlckNhc2UmJlwic3RhdGljXCI9PT1hLnN0eWxlLnBvc2l0aW9uOylhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxkb2N1bWVudH12YXIgYj10aGlzWzBdLGE9YS5hcHBseShiKSxkPXRoaXMub2Zmc2V0KCksZT0vXig/OmJvZHl8aHRtbCkkL2kudGVzdChhLm5vZGVOYW1lKT97dG9wOjAsbGVmdDowfTpjKGEpLm9mZnNldCgpO3JldHVybiBkLnRvcC09cGFyc2VGbG9hdChiLnN0eWxlLm1hcmdpblRvcCl8fDAsZC5sZWZ0LT1wYXJzZUZsb2F0KGIuc3R5bGUubWFyZ2luTGVmdCl8fDAsYS5zdHlsZSYmKGUudG9wKz1wYXJzZUZsb2F0KGEuc3R5bGUuYm9yZGVyVG9wV2lkdGgpfHwwLGUubGVmdCs9cGFyc2VGbG9hdChhLnN0eWxlLmJvcmRlckxlZnRXaWR0aCl8fDApLHt0b3A6ZC50b3AtZS50b3AsbGVmdDpkLmxlZnQtZS5sZWZ0fX19O3ZhciBkPXt9O2MuZXhwYW5kbz1cInZlbG9jaXR5XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksYy51dWlkPTA7Zm9yKHZhciBlPXt9LGY9ZS5oYXNPd25Qcm9wZXJ0eSxnPWUudG9TdHJpbmcsaD1cIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksaT0wO2k8aC5sZW5ndGg7aSsrKWVbXCJbb2JqZWN0IFwiK2hbaV0rXCJdXCJdPWhbaV0udG9Mb3dlckNhc2UoKTtjLmZuLmluaXQucHJvdG90eXBlPWMuZm4sYS5WZWxvY2l0eT17VXRpbGl0aWVzOmN9fX0od2luZG93KSxmdW5jdGlvbihhKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoYSk6YSgpfShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe2Zvcih2YXIgYj0tMSxjPWE/YS5sZW5ndGg6MCxkPVtdOysrYjxjOyl7dmFyIGU9YVtiXTtlJiZkLnB1c2goZSl9cmV0dXJuIGR9ZnVuY3Rpb24gZihhKXtyZXR1cm4gcC5pc1dyYXBwZWQoYSk/YT1bXS5zbGljZS5jYWxsKGEpOnAuaXNOb2RlKGEpJiYoYT1bYV0pLGF9ZnVuY3Rpb24gZyhhKXt2YXIgYj1tLmRhdGEoYSxcInZlbG9jaXR5XCIpO3JldHVybiBudWxsPT09Yj9kOmJ9ZnVuY3Rpb24gaChhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIE1hdGgucm91bmQoYiphKSooMS9hKX19ZnVuY3Rpb24gaShhLGMsZCxlKXtmdW5jdGlvbiBmKGEsYil7cmV0dXJuIDEtMypiKzMqYX1mdW5jdGlvbiBnKGEsYil7cmV0dXJuIDMqYi02KmF9ZnVuY3Rpb24gaChhKXtyZXR1cm4gMyphfWZ1bmN0aW9uIGkoYSxiLGMpe3JldHVybigoZihiLGMpKmErZyhiLGMpKSphK2goYikpKmF9ZnVuY3Rpb24gaihhLGIsYyl7cmV0dXJuIDMqZihiLGMpKmEqYSsyKmcoYixjKSphK2goYil9ZnVuY3Rpb24gayhiLGMpe2Zvcih2YXIgZT0wO3A+ZTsrK2Upe3ZhciBmPWooYyxhLGQpO2lmKDA9PT1mKXJldHVybiBjO3ZhciBnPWkoYyxhLGQpLWI7Yy09Zy9mfXJldHVybiBjfWZ1bmN0aW9uIGwoKXtmb3IodmFyIGI9MDt0PmI7KytiKXhbYl09aShiKnUsYSxkKX1mdW5jdGlvbiBtKGIsYyxlKXt2YXIgZixnLGg9MDtkbyBnPWMrKGUtYykvMixmPWkoZyxhLGQpLWIsZj4wP2U9ZzpjPWc7d2hpbGUoTWF0aC5hYnMoZik+ciYmKytoPHMpO3JldHVybiBnfWZ1bmN0aW9uIG4oYil7Zm9yKHZhciBjPTAsZT0xLGY9dC0xO2UhPWYmJnhbZV08PWI7KytlKWMrPXU7LS1lO3ZhciBnPShiLXhbZV0pLyh4W2UrMV0teFtlXSksaD1jK2cqdSxpPWooaCxhLGQpO3JldHVybiBpPj1xP2soYixoKTowPT1pP2g6bShiLGMsYyt1KX1mdW5jdGlvbiBvKCl7eT0hMCwoYSE9Y3x8ZCE9ZSkmJmwoKX12YXIgcD00LHE9LjAwMSxyPTFlLTcscz0xMCx0PTExLHU9MS8odC0xKSx2PVwiRmxvYXQzMkFycmF5XCJpbiBiO2lmKDQhPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgdz0wOzQ+dzsrK3cpaWYoXCJudW1iZXJcIiE9dHlwZW9mIGFyZ3VtZW50c1t3XXx8aXNOYU4oYXJndW1lbnRzW3ddKXx8IWlzRmluaXRlKGFyZ3VtZW50c1t3XSkpcmV0dXJuITE7YT1NYXRoLm1pbihhLDEpLGQ9TWF0aC5taW4oZCwxKSxhPU1hdGgubWF4KGEsMCksZD1NYXRoLm1heChkLDApO3ZhciB4PXY/bmV3IEZsb2F0MzJBcnJheSh0KTpuZXcgQXJyYXkodCkseT0hMSx6PWZ1bmN0aW9uKGIpe3JldHVybiB5fHxvKCksYT09PWMmJmQ9PT1lP2I6MD09PWI/MDoxPT09Yj8xOmkobihiKSxjLGUpfTt6LmdldENvbnRyb2xQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm5be3g6YSx5OmN9LHt4OmQseTplfV19O3ZhciBBPVwiZ2VuZXJhdGVCZXppZXIoXCIrW2EsYyxkLGVdK1wiKVwiO3JldHVybiB6LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEF9LHp9ZnVuY3Rpb24gaihhLGIpe3ZhciBjPWE7cmV0dXJuIHAuaXNTdHJpbmcoYSk/dC5FYXNpbmdzW2FdfHwoYz0hMSk6Yz1wLmlzQXJyYXkoYSkmJjE9PT1hLmxlbmd0aD9oLmFwcGx5KG51bGwsYSk6cC5pc0FycmF5KGEpJiYyPT09YS5sZW5ndGg/dS5hcHBseShudWxsLGEuY29uY2F0KFtiXSkpOiEoIXAuaXNBcnJheShhKXx8NCE9PWEubGVuZ3RoKSYmaS5hcHBseShudWxsLGEpLGM9PT0hMSYmKGM9dC5FYXNpbmdzW3QuZGVmYXVsdHMuZWFzaW5nXT90LmRlZmF1bHRzLmVhc2luZzpzKSxjfWZ1bmN0aW9uIGsoYSl7aWYoYSl7dmFyIGI9KG5ldyBEYXRlKS5nZXRUaW1lKCksYz10LlN0YXRlLmNhbGxzLmxlbmd0aDtjPjFlNCYmKHQuU3RhdGUuY2FsbHM9ZSh0LlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBmPTA7Yz5mO2YrKylpZih0LlN0YXRlLmNhbGxzW2ZdKXt2YXIgaD10LlN0YXRlLmNhbGxzW2ZdLGk9aFswXSxqPWhbMl0sbj1oWzNdLG89ISFuLHE9bnVsbDtufHwobj10LlN0YXRlLmNhbGxzW2ZdWzNdPWItMTYpO2Zvcih2YXIgcj1NYXRoLm1pbigoYi1uKS9qLmR1cmF0aW9uLDEpLHM9MCx1PWkubGVuZ3RoO3U+cztzKyspe3ZhciB3PWlbc10seT13LmVsZW1lbnQ7aWYoZyh5KSl7dmFyIHo9ITE7aWYoai5kaXNwbGF5IT09ZCYmbnVsbCE9PWouZGlzcGxheSYmXCJub25lXCIhPT1qLmRpc3BsYXkpe2lmKFwiZmxleFwiPT09ai5kaXNwbGF5KXt2YXIgQT1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07bS5lYWNoKEEsZnVuY3Rpb24oYSxiKXt2LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixiKX0pfXYuc2V0UHJvcGVydHlWYWx1ZSh5LFwiZGlzcGxheVwiLGouZGlzcGxheSl9ai52aXNpYmlsaXR5IT09ZCYmXCJoaWRkZW5cIiE9PWoudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKHksXCJ2aXNpYmlsaXR5XCIsai52aXNpYmlsaXR5KTtmb3IodmFyIEIgaW4gdylpZihcImVsZW1lbnRcIiE9PUIpe3ZhciBDLEQ9d1tCXSxFPXAuaXNTdHJpbmcoRC5lYXNpbmcpP3QuRWFzaW5nc1tELmVhc2luZ106RC5lYXNpbmc7aWYoMT09PXIpQz1ELmVuZFZhbHVlO2Vsc2V7dmFyIEY9RC5lbmRWYWx1ZS1ELnN0YXJ0VmFsdWU7aWYoQz1ELnN0YXJ0VmFsdWUrRipFKHIsaixGKSwhbyYmQz09PUQuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEQuY3VycmVudFZhbHVlPUMsXCJ0d2VlblwiPT09QilxPUM7ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0pe3ZhciBHPXYuSG9va3MuZ2V0Um9vdChCKSxIPWcoeSkucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtHXTtIJiYoRC5yb290UHJvcGVydHlWYWx1ZT1IKX12YXIgST12LnNldFByb3BlcnR5VmFsdWUoeSxCLEQuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChDKT9cIlwiOkQudW5pdFR5cGUpLEQucm9vdFByb3BlcnR5VmFsdWUsRC5zY3JvbGxEYXRhKTt2Lkhvb2tzLnJlZ2lzdGVyZWRbQl0mJihnKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR109di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ddP3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXShcImV4dHJhY3RcIixudWxsLElbMV0pOklbMV0pLFwidHJhbnNmb3JtXCI9PT1JWzBdJiYoej0hMCl9fWoubW9iaWxlSEEmJmcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1kJiYoZyh5KS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLHo9ITApLHomJnYuZmx1c2hUcmFuc2Zvcm1DYWNoZSh5KX19ai5kaXNwbGF5IT09ZCYmXCJub25lXCIhPT1qLmRpc3BsYXkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLmRpc3BsYXk9ITEpLGoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJih0LlN0YXRlLmNhbGxzW2ZdWzJdLnZpc2liaWxpdHk9ITEpLGoucHJvZ3Jlc3MmJmoucHJvZ3Jlc3MuY2FsbChoWzFdLGhbMV0scixNYXRoLm1heCgwLG4rai5kdXJhdGlvbi1iKSxuLHEpLDE9PT1yJiZsKGYpfX10LlN0YXRlLmlzVGlja2luZyYmeChrKX1mdW5jdGlvbiBsKGEsYil7aWYoIXQuU3RhdGUuY2FsbHNbYV0pcmV0dXJuITE7Zm9yKHZhciBjPXQuU3RhdGUuY2FsbHNbYV1bMF0sZT10LlN0YXRlLmNhbGxzW2FdWzFdLGY9dC5TdGF0ZS5jYWxsc1thXVsyXSxoPXQuU3RhdGUuY2FsbHNbYV1bNF0saT0hMSxqPTAsaz1jLmxlbmd0aDtrPmo7aisrKXt2YXIgbD1jW2pdLmVsZW1lbnQ7aWYoYnx8Zi5sb29wfHwoXCJub25lXCI9PT1mLmRpc3BsYXkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwiZGlzcGxheVwiLGYuZGlzcGxheSksXCJoaWRkZW5cIj09PWYudmlzaWJpbGl0eSYmdi5zZXRQcm9wZXJ0eVZhbHVlKGwsXCJ2aXNpYmlsaXR5XCIsZi52aXNpYmlsaXR5KSksZi5sb29wIT09ITAmJihtLnF1ZXVlKGwpWzFdPT09ZHx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChtLnF1ZXVlKGwpWzFdKSkmJmcobCkpe2cobCkuaXNBbmltYXRpbmc9ITEsZyhsKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBuPSExO20uZWFjaCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihhLGIpe3ZhciBjPS9ec2NhbGUvLnRlc3QoYik/MTowLGU9ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXTtnKGwpLnRyYW5zZm9ybUNhY2hlW2JdIT09ZCYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK2MrXCJbXi5dXCIpLnRlc3QoZSkmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlW2JdKX0pLGYubW9iaWxlSEEmJihuPSEwLGRlbGV0ZSBnKGwpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxuJiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUobCksdi5WYWx1ZXMucmVtb3ZlQ2xhc3MobCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighYiYmZi5jb21wbGV0ZSYmIWYubG9vcCYmaj09PWstMSl0cnl7Zi5jb21wbGV0ZS5jYWxsKGUsZSl9Y2F0Y2gobyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IG99LDEpfWgmJmYubG9vcCE9PSEwJiZoKGUpLGcobCkmJmYubG9vcD09PSEwJiYhYiYmKG0uZWFjaChnKGwpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpey9ecm90YXRlLy50ZXN0KGEpJiYzNjA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGEpJiYxMDA9PT1wYXJzZUZsb2F0KGIuZW5kVmFsdWUpJiZcIiVcIj09PWIudW5pdFR5cGUmJihiLmVuZFZhbHVlPTAsYi5zdGFydFZhbHVlPTEwMCl9KSx0KGwsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6Zi5kZWxheX0pKSxmLnF1ZXVlIT09ITEmJm0uZGVxdWV1ZShsLGYucXVldWUpfXQuU3RhdGUuY2FsbHNbYV09ITE7Zm9yKHZhciBwPTAscT10LlN0YXRlLmNhbGxzLmxlbmd0aDtxPnA7cCsrKWlmKHQuU3RhdGUuY2FsbHNbcF0hPT0hMSl7aT0hMDticmVha31pPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgdC5TdGF0ZS5jYWxscyx0LlN0YXRlLmNhbGxzPVtdKX12YXIgbSxuPWZ1bmN0aW9uKCl7aWYoYy5kb2N1bWVudE1vZGUpcmV0dXJuIGMuZG9jdW1lbnRNb2RlO2Zvcih2YXIgYT03O2E+NDthLS0pe3ZhciBiPWMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihiLmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrYStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gYj1udWxsLGF9cmV0dXJuIGR9KCksbz1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYil7dmFyIGMsZD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gYz1NYXRoLm1heCgwLDE2LShkLWEpKSxhPWQrYyxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihkK2MpfSxjKX19KCkscD17aXNTdHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNOb2RlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSYmYS5sZW5ndGghPT1kJiYoMD09PWEubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgYVswXSYmYVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoYS5qcXVlcnl8fGIuWmVwdG8mJmIuWmVwdG8uemVwdG8uaXNaKGEpKX0saXNTVkc6ZnVuY3Rpb24oYSl7cmV0dXJuIGIuU1ZHRWxlbWVudCYmYSBpbnN0YW5jZW9mIGIuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH19LHE9ITE7aWYoYS5mbiYmYS5mbi5qcXVlcnk/KG09YSxxPSEwKTptPWIuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PW4mJiFxKXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PW4pcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgcj00MDAscz1cInN3aW5nXCIsdD17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6Yi5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OmMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOm0sUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTpiLlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246cixlYXNpbmc6cyxiZWdpbjpkLGNvbXBsZXRlOmQscHJvZ3Jlc3M6ZCxkaXNwbGF5OmQsdmlzaWJpbGl0eTpkLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGEpe20uZGF0YShhLFwidmVsb2NpdHlcIix7aXNTVkc6cC5pc1NWRyhhKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O2IucGFnZVlPZmZzZXQhPT1kPyh0LlN0YXRlLnNjcm9sbEFuY2hvcj1iLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KHQuU3RhdGUuc2Nyb2xsQW5jaG9yPWMuZG9jdW1lbnRFbGVtZW50fHxjLmJvZHkucGFyZW50Tm9kZXx8Yy5ib2R5LHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLHQuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybi1hLnRlbnNpb24qYS54LWEuZnJpY3Rpb24qYS52fWZ1bmN0aW9uIGIoYixjLGQpe3ZhciBlPXt4OmIueCtkLmR4KmMsdjpiLnYrZC5kdipjLHRlbnNpb246Yi50ZW5zaW9uLGZyaWN0aW9uOmIuZnJpY3Rpb259O3JldHVybntkeDplLnYsZHY6YShlKX19ZnVuY3Rpb24gYyhjLGQpe3ZhciBlPXtkeDpjLnYsZHY6YShjKX0sZj1iKGMsLjUqZCxlKSxnPWIoYywuNSpkLGYpLGg9YihjLGQsZyksaT0xLzYqKGUuZHgrMiooZi5keCtnLmR4KStoLmR4KSxqPTEvNiooZS5kdisyKihmLmR2K2cuZHYpK2guZHYpO3JldHVybiBjLng9Yy54K2kqZCxjLnY9Yy52K2oqZCxjfXJldHVybiBmdW5jdGlvbiBkKGEsYixlKXt2YXIgZixnLGgsaT17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LGo9WzBdLGs9MCxsPTFlLTQsbT0uMDE2O2ZvcihhPXBhcnNlRmxvYXQoYSl8fDUwMCxiPXBhcnNlRmxvYXQoYil8fDIwLGU9ZXx8bnVsbCxpLnRlbnNpb249YSxpLmZyaWN0aW9uPWIsZj1udWxsIT09ZSxmPyhrPWQoYSxiKSxnPWsvZSptKTpnPW07aD1jKGh8fGksZyksai5wdXNoKDEraC54KSxrKz0xNixNYXRoLmFicyhoLngpPmwmJk1hdGguYWJzKGgudik+bDspO3JldHVybiBmP2Z1bmN0aW9uKGEpe3JldHVybiBqW2EqKGoubGVuZ3RoLTEpfDBdfTprfX0oKTt0LkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmEqTWF0aC5QSSkqTWF0aC5leHAoNiotYSl9fSxtLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGEsYil7dC5FYXNpbmdzW2JbMF1dPWkuYXBwbHkobnVsbCxiWzFdKX0pO3ZhciB2PXQuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspe3ZhciBiPVwiY29sb3JcIj09PXYuTGlzdHMuY29sb3JzW2FdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO3YuSG9va3MudGVtcGxhdGVzW3YuTGlzdHMuY29sb3JzW2FdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLGJdfXZhciBjLGQsZTtpZihuKWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7dmFyIGY9ZFsxXS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PWVbMF0mJihlLnB1c2goZS5zaGlmdCgpKSxmLnB1c2goZi5zaGlmdCgpKSx2Lkhvb2tzLnRlbXBsYXRlc1tjXT1bZS5qb2luKFwiIFwiKSxmLmpvaW4oXCIgXCIpXSl9Zm9yKGMgaW4gdi5Ib29rcy50ZW1wbGF0ZXMpe2Q9di5Ib29rcy50ZW1wbGF0ZXNbY10sZT1kWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGEgaW4gZSl7dmFyIGc9YytlW2FdLGg9YTt2Lkhvb2tzLnJlZ2lzdGVyZWRbZ109W2MsaF19fX0sZ2V0Um9vdDpmdW5jdGlvbihhKXt2YXIgYj12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07cmV0dXJuIGI/YlswXTphfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHYuUmVnRXgudmFsdWVVbndyYXAudGVzdChiKSYmKGI9Yi5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoYikmJihiPXYuSG9va3MudGVtcGxhdGVzW2FdWzFdKSxifSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoYyl7dmFyIGQ9Y1swXSxlPWNbMV07cmV0dXJuIGI9di5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGQsYiksYi50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdClbZV19cmV0dXJuIGJ9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD12Lkhvb2tzLnJlZ2lzdGVyZWRbYV07aWYoZCl7dmFyIGUsZixnPWRbMF0saD1kWzFdO3JldHVybiBjPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShnLGMpLGU9Yy50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVTcGxpdCksZVtoXT1iLGY9ZS5qb2luKFwiIFwiKX1yZXR1cm4gY319LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZDtyZXR1cm4gdi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoYyk/ZD1jOihkPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKSxkPWQ/ZFsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpjKSxkO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIitjK1wiKVwifX0sYmx1cjpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gdC5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPXBhcnNlRmxvYXQoYyk7aWYoIWQmJjAhPT1kKXt2YXIgZT1jLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTtkPWU/ZVsxXTowfXJldHVybiBkO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KGMpP1wiYmx1cihcIitjK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihhLGIsYyl7aWYoOD49bilzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBkPWMudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIGM9ZD9kWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiBiLnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KGMpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KGMpLDEwKStcIilcIn1lbHNlIHN3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBjO2Nhc2VcImluamVjdFwiOnJldHVybiBjfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49bnx8dC5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwodi5MaXN0cy50cmFuc2Zvcm1zQmFzZT12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdCh2Lkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgYT0wO2E8di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBnKGMpPT09ZHx8ZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQ/L15zY2FsZS9pLnRlc3QoYik/MTowOmcoYykudHJhbnNmb3JtQ2FjaGVbYl0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBmPSExO3N3aXRjaChiLnN1YnN0cigwLGIubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpmPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjp0LlN0YXRlLmlzQW5kcm9pZCYmZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT09PWQmJjE+ZSYmKGU9MSksZj0hLyhcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2tld1wiOmY9IS8oZGVnfFxcZCkkL2kudGVzdChlKTticmVhaztjYXNlXCJyb3RhdGVcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSl9cmV0dXJuIGZ8fChnKGMpLnRyYW5zZm9ybUNhY2hlW2JdPVwiKFwiK2UrXCIpXCIpLGcoYykudHJhbnNmb3JtQ2FjaGVbYl19fX0oKTtmb3IodmFyIGE9MDthPHYuTGlzdHMuY29sb3JzLmxlbmd0aDthKyspIWZ1bmN0aW9uKCl7dmFyIGI9di5MaXN0cy5jb2xvcnNbYV07di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2JdPWZ1bmN0aW9uKGEsYyxlKXtzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVybiBiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZjtpZih2LlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChlKSlmPWU7ZWxzZXt2YXIgZyxoPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KGUpP2c9aFtlXSE9PWQ/aFtlXTpoLmJsYWNrOnYuUmVnRXguaXNIZXgudGVzdChlKT9nPVwicmdiKFwiK3YuVmFsdWVzLmhleFRvUmdiKGUpLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KGUpfHwoZz1oLmJsYWNrKSxmPShnfHxlKS50b1N0cmluZygpLm1hdGNoKHYuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1ufHwzIT09Zi5zcGxpdChcIiBcIikubGVuZ3RofHwoZis9XCIgMVwiKSxmO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1uPzQ9PT1lLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihlPWUuc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZSs9XCIgMVwiKSwoOD49bj9cInJnYlwiOlwicmdiYVwiKStcIihcIitlLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGEpe3ZhciBiPVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKG58fHQuU3RhdGUuaXNBbmRyb2lkJiYhdC5TdGF0ZS5pc0Nocm9tZSkmJihiKz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrYitcIikkXCIsXCJpXCIpLnRlc3QoYSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGEpe2lmKHQuU3RhdGUucHJlZml4TWF0Y2hlc1thXSlyZXR1cm5bdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdLCEwXTtmb3IodmFyIGI9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0sYz0wLGQ9Yi5sZW5ndGg7ZD5jO2MrKyl7dmFyIGU7aWYoZT0wPT09Yz9hOmJbY10rYS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihhKXtyZXR1cm4gYS50b1VwcGVyQ2FzZSgpfSkscC5pc1N0cmluZyh0LlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbZV0pKXJldHVybiB0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV09ZSxbZSwhMF19cmV0dXJuW2EsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihhKXt2YXIgYixjPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZD0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBhPWEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBiK2IrYytjK2QrZH0pLGI9ZC5leGVjKGEpLGI/W3BhcnNlSW50KGJbMV0sMTYpLHBhcnNlSW50KGJbMl0sMTYpLHBhcnNlSW50KGJbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihhKXtyZXR1cm4gMD09YXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoYSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGEpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoYSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGEpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdChiKT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KGIpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdChiKT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QoYik/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QuYWRkKGIpOmEuY2xhc3NOYW1lKz0oYS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK2J9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYil7YS5jbGFzc0xpc3Q/YS5jbGFzc0xpc3QucmVtb3ZlKGIpOmEuY2xhc3NOYW1lPWEuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrYi5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGUsZil7ZnVuY3Rpb24gaChhLGMpe2Z1bmN0aW9uIGUoKXtqJiZ2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGk9MDtpZig4Pj1uKWk9bS5jc3MoYSxjKTtlbHNle3ZhciBqPSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KGMpJiYwPT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIpJiYoaj0hMCx2LnNldFByb3BlcnR5VmFsdWUoYSxcImRpc3BsYXlcIix2LlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKSkpLCFmKXtpZihcImhlaWdodFwiPT09YyYmXCJib3JkZXItYm94XCIhPT12LmdldFByb3BlcnR5VmFsdWUoYSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBrPWEub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIGUoKSxrfWlmKFwid2lkdGhcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgbD1hLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIGUoKSxsfX12YXIgbztvPWcoYSk9PT1kP2IuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpOmcoYSkuY29tcHV0ZWRTdHlsZT9nKGEpLmNvbXB1dGVkU3R5bGU6ZyhhKS5jb21wdXRlZFN0eWxlPWIuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PWMmJihjPVwiYm9yZGVyVG9wQ29sb3JcIiksaT05PT09biYmXCJmaWx0ZXJcIj09PWM/by5nZXRQcm9wZXJ0eVZhbHVlKGMpOm9bY10sKFwiXCI9PT1pfHxudWxsPT09aSkmJihpPWEuc3R5bGVbY10pLGUoKX1pZihcImF1dG9cIj09PWkmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChjKSl7dmFyIHA9aChhLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PXB8fFwiYWJzb2x1dGVcIj09PXAmJi90b3B8bGVmdC9pLnRlc3QoYykpJiYoaT1tKGEpLnBvc2l0aW9uKClbY10rXCJweFwiKX1yZXR1cm4gaX12YXIgaTtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBqPWMsaz12Lkhvb2tzLmdldFJvb3Qoaik7ZT09PWQmJihlPXYuZ2V0UHJvcGVydHlWYWx1ZShhLHYuTmFtZXMucHJlZml4Q2hlY2soaylbMF0pKSx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10mJihlPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtrXShcImV4dHJhY3RcIixhLGUpKSxpPXYuSG9va3MuZXh0cmFjdFZhbHVlKGosZSl9ZWxzZSBpZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10pe3ZhciBsLG87bD12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSksXCJ0cmFuc2Zvcm1cIiE9PWwmJihvPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGwpWzBdKSx2LlZhbHVlcy5pc0NTU051bGxWYWx1ZShvKSYmdi5Ib29rcy50ZW1wbGF0ZXNbY10mJihvPXYuSG9va3MudGVtcGxhdGVzW2NdWzFdKSksaT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJleHRyYWN0XCIsYSxvKX1pZighL15bXFxkLV0vLnRlc3QoaSkpaWYoZyhhKSYmZyhhKS5pc1NWRyYmdi5OYW1lcy5TVkdBdHRyaWJ1dGUoYykpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KGMpKXRyeXtpPWEuZ2V0QkJveCgpW2NdfWNhdGNoKHApe2k9MH1lbHNlIGk9YS5nZXRBdHRyaWJ1dGUoYyk7ZWxzZSBpPWgoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKTtyZXR1cm4gdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUoaSkmJihpPTApLHQuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK2MrXCI6IFwiK2kpLGl9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oYSxjLGQsZSxmKXt2YXIgaD1jO2lmKFwic2Nyb2xsXCI9PT1jKWYuY29udGFpbmVyP2YuY29udGFpbmVyW1wic2Nyb2xsXCIrZi5kaXJlY3Rpb25dPWQ6XCJMZWZ0XCI9PT1mLmRpcmVjdGlvbj9iLnNjcm9sbFRvKGQsZi5hbHRlcm5hdGVWYWx1ZSk6Yi5zY3JvbGxUbyhmLmFsdGVybmF0ZVZhbHVlLGQpO2Vsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdJiZcInRyYW5zZm9ybVwiPT09di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpKXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksaD1cInRyYW5zZm9ybVwiLGQ9ZyhhKS50cmFuc2Zvcm1DYWNoZVtjXTtlbHNle2lmKHYuSG9va3MucmVnaXN0ZXJlZFtjXSl7dmFyIGk9YyxqPXYuSG9va3MuZ2V0Um9vdChjKTtlPWV8fHYuZ2V0UHJvcGVydHlWYWx1ZShhLGopLGQ9di5Ib29rcy5pbmplY3RWYWx1ZShpLGQsZSksYz1qfWlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmKGQ9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiaW5qZWN0XCIsYSxkKSxjPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSksaD12Lk5hbWVzLnByZWZpeENoZWNrKGMpWzBdLDg+PW4pdHJ5e2Euc3R5bGVbaF09ZH1jYXRjaChrKXt0LmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrZCtcIl0gZm9yIFtcIitoK1wiXVwiKX1lbHNlIGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpP2Euc2V0QXR0cmlidXRlKGMsZCk6YS5zdHlsZVtoXT1kO3QuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK2MrXCIgKFwiK2grXCIpOiBcIitkKX1yZXR1cm5baCxkXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLGIpKX12YXIgYz1cIlwiO2lmKChufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiZnKGEpLmlzU1ZHKXt2YXIgZD17dHJhbnNsYXRlOltiKFwidHJhbnNsYXRlWFwiKSxiKFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W2IoXCJza2V3WFwiKV0sc2tld1k6W2IoXCJza2V3WVwiKV0sc2NhbGU6MSE9PWIoXCJzY2FsZVwiKT9bYihcInNjYWxlXCIpLGIoXCJzY2FsZVwiKV06W2IoXCJzY2FsZVhcIiksYihcInNjYWxlWVwiKV0scm90YXRlOltiKFwicm90YXRlWlwiKSwwLDBdfTttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihhKXsvXnRyYW5zbGF0ZS9pLnRlc3QoYSk/YT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGEpP2E9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChhKSYmKGE9XCJyb3RhdGVcIiksZFthXSYmKGMrPWErXCIoXCIrZFthXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGRbYV0pfSl9ZWxzZXt2YXIgZSxmO20uZWFjaChnKGEpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGIpe3JldHVybiBlPWcoYSkudHJhbnNmb3JtQ2FjaGVbYl0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09Yj8oZj1lLCEwKTooOT09PW4mJlwicm90YXRlWlwiPT09YiYmKGI9XCJyb3RhdGVcIiksdm9pZChjKz1iK2UrXCIgXCIpKX0pLGYmJihjPVwicGVyc3BlY3RpdmVcIitmK1wiIFwiK2MpfXYuc2V0UHJvcGVydHlWYWx1ZShhLFwidHJhbnNmb3JtXCIsYyl9fTt2Lkhvb2tzLnJlZ2lzdGVyKCksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLHQuaG9vaz1mdW5jdGlvbihhLGIsYyl7dmFyIGU9ZDtyZXR1cm4gYT1mKGEpLG0uZWFjaChhLGZ1bmN0aW9uKGEsZil7aWYoZyhmKT09PWQmJnQuaW5pdChmKSxjPT09ZCllPT09ZCYmKGU9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShmLGIpKTtlbHNle3ZhciBoPXQuQ1NTLnNldFByb3BlcnR5VmFsdWUoZixiLGMpO1widHJhbnNmb3JtXCI9PT1oWzBdJiZ0LkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKGYpLGU9aH19KSxlfTt2YXIgdz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gaD9CLnByb21pc2V8fG51bGw6aX1mdW5jdGlvbiBlKCl7ZnVuY3Rpb24gYShhKXtmdW5jdGlvbiBsKGEsYil7dmFyIGM9ZCxlPWQsZz1kO3JldHVybiBwLmlzQXJyYXkoYSk/KGM9YVswXSwhcC5pc0FycmF5KGFbMV0pJiYvXltcXGQtXS8udGVzdChhWzFdKXx8cC5pc0Z1bmN0aW9uKGFbMV0pfHx2LlJlZ0V4LmlzSGV4LnRlc3QoYVsxXSk/Zz1hWzFdOihwLmlzU3RyaW5nKGFbMV0pJiYhdi5SZWdFeC5pc0hleC50ZXN0KGFbMV0pfHxwLmlzQXJyYXkoYVsxXSkpJiYoZT1iP2FbMV06aihhWzFdLGguZHVyYXRpb24pLGFbMl0hPT1kJiYoZz1hWzJdKSkpOmM9YSxifHwoZT1lfHxoLmVhc2luZykscC5pc0Z1bmN0aW9uKGMpJiYoYz1jLmNhbGwoZix5LHgpKSxwLmlzRnVuY3Rpb24oZykmJihnPWcuY2FsbChmLHkseCkpLFtjfHwwLGUsZ119ZnVuY3Rpb24gbihhLGIpe3ZhciBjLGQ7cmV0dXJuIGQ9KGJ8fFwiMFwiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyVBLXpdKyQvLGZ1bmN0aW9uKGEpe3JldHVybiBjPWEsXCJcIn0pLGN8fChjPXYuVmFsdWVzLmdldFVuaXRUeXBlKGEpKSxbZCxjXX1mdW5jdGlvbiByKCl7dmFyIGE9e215UGFyZW50OmYucGFyZW50Tm9kZXx8Yy5ib2R5LHBvc2l0aW9uOnYuZ2V0UHJvcGVydHlWYWx1ZShmLFwicG9zaXRpb25cIiksZm9udFNpemU6di5nZXRQcm9wZXJ0eVZhbHVlKGYsXCJmb250U2l6ZVwiKX0sZD1hLnBvc2l0aW9uPT09SS5sYXN0UG9zaXRpb24mJmEubXlQYXJlbnQ9PT1JLmxhc3RQYXJlbnQsZT1hLmZvbnRTaXplPT09SS5sYXN0Rm9udFNpemU7SS5sYXN0UGFyZW50PWEubXlQYXJlbnQsSS5sYXN0UG9zaXRpb249YS5wb3NpdGlvbixJLmxhc3RGb250U2l6ZT1hLmZvbnRTaXplO3ZhciBoPTEwMCxpPXt9O2lmKGUmJmQpaS5lbVRvUHg9SS5sYXN0RW1Ub1B4LGkucGVyY2VudFRvUHhXaWR0aD1JLmxhc3RQZXJjZW50VG9QeFdpZHRoLGkucGVyY2VudFRvUHhIZWlnaHQ9SS5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZXt2YXIgaj1nKGYpLmlzU1ZHP2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInJlY3RcIik6Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5pdChqKSxhLm15UGFyZW50LmFwcGVuZENoaWxkKGopLG0uZWFjaChbXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3dYXCIsXCJvdmVyZmxvd1lcIl0sZnVuY3Rpb24oYSxiKXt0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosYixcImhpZGRlblwiKX0pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcInBvc2l0aW9uXCIsYS5wb3NpdGlvbiksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwiZm9udFNpemVcIixhLmZvbnRTaXplKSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJib3hTaXppbmdcIixcImNvbnRlbnQtYm94XCIpLG0uZWFjaChbXCJtaW5XaWR0aFwiLFwibWF4V2lkdGhcIixcIndpZHRoXCIsXCJtaW5IZWlnaHRcIixcIm1heEhlaWdodFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGEsYil7dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLGIsaCtcIiVcIil9KSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJwYWRkaW5nTGVmdFwiLGgrXCJlbVwiKSxpLnBlcmNlbnRUb1B4V2lkdGg9SS5sYXN0UGVyY2VudFRvUHhXaWR0aD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcIndpZHRoXCIsbnVsbCwhMCkpfHwxKS9oLGkucGVyY2VudFRvUHhIZWlnaHQ9SS5sYXN0UGVyY2VudFRvUHhIZWlnaHQ9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJoZWlnaHRcIixudWxsLCEwKSl8fDEpL2gsaS5lbVRvUHg9SS5sYXN0RW1Ub1B4PShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwicGFkZGluZ0xlZnRcIikpfHwxKS9oLGEubXlQYXJlbnQucmVtb3ZlQ2hpbGQoail9cmV0dXJuIG51bGw9PT1JLnJlbVRvUHgmJihJLnJlbVRvUHg9cGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYy5ib2R5LFwiZm9udFNpemVcIikpfHwxNiksbnVsbD09PUkudndUb1B4JiYoSS52d1RvUHg9cGFyc2VGbG9hdChiLmlubmVyV2lkdGgpLzEwMCxJLnZoVG9QeD1wYXJzZUZsb2F0KGIuaW5uZXJIZWlnaHQpLzEwMCksaS5yZW1Ub1B4PUkucmVtVG9QeCxpLnZ3VG9QeD1JLnZ3VG9QeCxpLnZoVG9QeD1JLnZoVG9QeCx0LmRlYnVnPj0xJiZjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIitKU09OLnN0cmluZ2lmeShpKSxmKSxpfWlmKGguYmVnaW4mJjA9PT15KXRyeXtoLmJlZ2luLmNhbGwobyxvKX1jYXRjaCh1KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgdX0sMSl9aWYoXCJzY3JvbGxcIj09PUMpe3ZhciB3LHosQSxEPS9eeCQvaS50ZXN0KGguYXhpcyk/XCJMZWZ0XCI6XCJUb3BcIixFPXBhcnNlRmxvYXQoaC5vZmZzZXQpfHwwO2guY29udGFpbmVyP3AuaXNXcmFwcGVkKGguY29udGFpbmVyKXx8cC5pc05vZGUoaC5jb250YWluZXIpPyhoLmNvbnRhaW5lcj1oLmNvbnRhaW5lclswXXx8aC5jb250YWluZXIsdz1oLmNvbnRhaW5lcltcInNjcm9sbFwiK0RdLEE9dyttKGYpLnBvc2l0aW9uKClbRC50b0xvd2VyQ2FzZSgpXStFKTpoLmNvbnRhaW5lcj1udWxsOih3PXQuU3RhdGUuc2Nyb2xsQW5jaG9yW3QuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiK0RdXSx6PXQuU3RhdGUuc2Nyb2xsQW5jaG9yW3QuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiKyhcIkxlZnRcIj09PUQ/XCJUb3BcIjpcIkxlZnRcIildXSxBPW0oZikub2Zmc2V0KClbRC50b0xvd2VyQ2FzZSgpXStFKSxpPXtzY3JvbGw6e3Jvb3RQcm9wZXJ0eVZhbHVlOiExLHN0YXJ0VmFsdWU6dyxjdXJyZW50VmFsdWU6dyxlbmRWYWx1ZTpBLHVuaXRUeXBlOlwiXCIsZWFzaW5nOmguZWFzaW5nLHNjcm9sbERhdGE6e2NvbnRhaW5lcjpoLmNvbnRhaW5lcixkaXJlY3Rpb246RCxhbHRlcm5hdGVWYWx1ZTp6fX0sZWxlbWVudDpmfSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsaS5zY3JvbGwsZil9ZWxzZSBpZihcInJldmVyc2VcIj09PUMpe2lmKCFnKGYpLnR3ZWVuc0NvbnRhaW5lcilyZXR1cm4gdm9pZCBtLmRlcXVldWUoZixoLnF1ZXVlKTtcIm5vbmVcIj09PWcoZikub3B0cy5kaXNwbGF5JiYoZyhmKS5vcHRzLmRpc3BsYXk9XCJhdXRvXCIpLFwiaGlkZGVuXCI9PT1nKGYpLm9wdHMudmlzaWJpbGl0eSYmKGcoZikub3B0cy52aXNpYmlsaXR5PVwidmlzaWJsZVwiKSxnKGYpLm9wdHMubG9vcD0hMSxnKGYpLm9wdHMuYmVnaW49bnVsbCxnKGYpLm9wdHMuY29tcGxldGU9bnVsbCxzLmVhc2luZ3x8ZGVsZXRlIGguZWFzaW5nLHMuZHVyYXRpb258fGRlbGV0ZSBoLmR1cmF0aW9uLGg9bS5leHRlbmQoe30sZyhmKS5vcHRzLGgpO3ZhciBGPW0uZXh0ZW5kKCEwLHt9LGcoZikudHdlZW5zQ29udGFpbmVyKTtmb3IodmFyIEcgaW4gRilpZihcImVsZW1lbnRcIiE9PUcpe3ZhciBIPUZbR10uc3RhcnRWYWx1ZTtGW0ddLnN0YXJ0VmFsdWU9RltHXS5jdXJyZW50VmFsdWU9RltHXS5lbmRWYWx1ZSxGW0ddLmVuZFZhbHVlPUgscC5pc0VtcHR5T2JqZWN0KHMpfHwoRltHXS5lYXNpbmc9aC5lYXNpbmcpLHQuZGVidWcmJmNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiK0crXCIpOiBcIitKU09OLnN0cmluZ2lmeShGW0ddKSxmKX1pPUZ9ZWxzZSBpZihcInN0YXJ0XCI9PT1DKXt2YXIgRjtnKGYpLnR3ZWVuc0NvbnRhaW5lciYmZyhmKS5pc0FuaW1hdGluZz09PSEwJiYoRj1nKGYpLnR3ZWVuc0NvbnRhaW5lciksbS5lYWNoKHEsZnVuY3Rpb24oYSxiKXtpZihSZWdFeHAoXCJeXCIrdi5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKStcIiRcIikudGVzdChhKSl7dmFyIGM9bChiLCEwKSxlPWNbMF0sZj1jWzFdLGc9Y1syXTtpZih2LlJlZ0V4LmlzSGV4LnRlc3QoZSkpe2Zvcih2YXIgaD1bXCJSZWRcIixcIkdyZWVuXCIsXCJCbHVlXCJdLGk9di5WYWx1ZXMuaGV4VG9SZ2IoZSksaj1nP3YuVmFsdWVzLmhleFRvUmdiKGcpOmQsaz0wO2s8aC5sZW5ndGg7aysrKXt2YXIgbT1baVtrXV07ZiYmbS5wdXNoKGYpLGohPT1kJiZtLnB1c2goaltrXSkscVthK2hba11dPW19ZGVsZXRlIHFbYV19fX0pO2Zvcih2YXIgSyBpbiBxKXt2YXIgTD1sKHFbS10pLE09TFswXSxOPUxbMV0sTz1MWzJdO0s9di5OYW1lcy5jYW1lbENhc2UoSyk7dmFyIFA9di5Ib29rcy5nZXRSb290KEspLFE9ITE7aWYoZyhmKS5pc1NWR3x8XCJ0d2VlblwiPT09UHx8di5OYW1lcy5wcmVmaXhDaGVjayhQKVsxXSE9PSExfHx2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbUF0hPT1kKXsoaC5kaXNwbGF5IT09ZCYmbnVsbCE9PWguZGlzcGxheSYmXCJub25lXCIhPT1oLmRpc3BsYXl8fGgudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1oLnZpc2liaWxpdHkpJiYvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoSykmJiFPJiYwIT09TSYmKE89MCksaC5fY2FjaGVWYWx1ZXMmJkYmJkZbS10/KE89PT1kJiYoTz1GW0tdLmVuZFZhbHVlK0ZbS10udW5pdFR5cGUpLFE9ZyhmKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW1BdKTp2Lkhvb2tzLnJlZ2lzdGVyZWRbS10/Tz09PWQ/KFE9di5nZXRQcm9wZXJ0eVZhbHVlKGYsUCksTz12LmdldFByb3BlcnR5VmFsdWUoZixLLFEpKTpRPXYuSG9va3MudGVtcGxhdGVzW1BdWzFdOk89PT1kJiYoTz12LmdldFByb3BlcnR5VmFsdWUoZixLKSk7dmFyIFIsUyxULFU9ITE7aWYoUj1uKEssTyksTz1SWzBdLFQ9UlsxXSxSPW4oSyxNKSxNPVJbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LyxmdW5jdGlvbihhLGIpe3JldHVybiBVPWIsXCJcIn0pLFM9UlsxXSxPPXBhcnNlRmxvYXQoTyl8fDAsTT1wYXJzZUZsb2F0KE0pfHwwLFwiJVwiPT09UyYmKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdChLKT8oTS89MTAwLFM9XCJlbVwiKTovXnNjYWxlLy50ZXN0KEspPyhNLz0xMDAsUz1cIlwiKTovKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KEspJiYoTT1NLzEwMCoyNTUsUz1cIlwiKSksL1tcXC8qXS8udGVzdChVKSlTPVQ7ZWxzZSBpZihUIT09UyYmMCE9PU8paWYoMD09PU0pUz1UO2Vsc2V7ZT1lfHxyKCk7dmFyIFY9L21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3QoSyl8fC9YJC8udGVzdChLKXx8XCJ4XCI9PT1LP1wieFwiOlwieVwiO1xuc3dpdGNoKFQpe2Nhc2VcIiVcIjpPKj1cInhcIj09PVY/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQ7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok8qPWVbVCtcIlRvUHhcIl19c3dpdGNoKFMpe2Nhc2VcIiVcIjpPKj0xLyhcInhcIj09PVY/ZS5wZXJjZW50VG9QeFdpZHRoOmUucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpPKj0xL2VbUytcIlRvUHhcIl19fXN3aXRjaChVKXtjYXNlXCIrXCI6TT1PK007YnJlYWs7Y2FzZVwiLVwiOk09Ty1NO2JyZWFrO2Nhc2VcIipcIjpNPU8qTTticmVhaztjYXNlXCIvXCI6TT1PL019aVtLXT17cm9vdFByb3BlcnR5VmFsdWU6USxzdGFydFZhbHVlOk8sY3VycmVudFZhbHVlOk8sZW5kVmFsdWU6TSx1bml0VHlwZTpTLGVhc2luZzpOfSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIrSytcIik6IFwiK0pTT04uc3RyaW5naWZ5KGlbS10pLGYpfWVsc2UgdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJTa2lwcGluZyBbXCIrUCtcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpfWkuZWxlbWVudD1mfWkuZWxlbWVudCYmKHYuVmFsdWVzLmFkZENsYXNzKGYsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksSi5wdXNoKGkpLFwiXCI9PT1oLnF1ZXVlJiYoZyhmKS50d2VlbnNDb250YWluZXI9aSxnKGYpLm9wdHM9aCksZyhmKS5pc0FuaW1hdGluZz0hMCx5PT09eC0xPyh0LlN0YXRlLmNhbGxzLnB1c2goW0osbyxoLG51bGwsQi5yZXNvbHZlcl0pLHQuU3RhdGUuaXNUaWNraW5nPT09ITEmJih0LlN0YXRlLmlzVGlja2luZz0hMCxrKCkpKTp5KyspfXZhciBlLGY9dGhpcyxoPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyksaT17fTtzd2l0Y2goZyhmKT09PWQmJnQuaW5pdChmKSxwYXJzZUZsb2F0KGguZGVsYXkpJiZoLnF1ZXVlIT09ITEmJm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGEpe3QudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCxnKGYpLmRlbGF5VGltZXI9e3NldFRpbWVvdXQ6c2V0VGltZW91dChhLHBhcnNlRmxvYXQoaC5kZWxheSkpLG5leHQ6YX19KSxoLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7Y2FzZVwiZmFzdFwiOmguZHVyYXRpb249MjAwO2JyZWFrO2Nhc2VcIm5vcm1hbFwiOmguZHVyYXRpb249cjticmVhaztjYXNlXCJzbG93XCI6aC5kdXJhdGlvbj02MDA7YnJlYWs7ZGVmYXVsdDpoLmR1cmF0aW9uPXBhcnNlRmxvYXQoaC5kdXJhdGlvbil8fDF9dC5tb2NrIT09ITEmJih0Lm1vY2s9PT0hMD9oLmR1cmF0aW9uPWguZGVsYXk9MTooaC5kdXJhdGlvbio9cGFyc2VGbG9hdCh0Lm1vY2spfHwxLGguZGVsYXkqPXBhcnNlRmxvYXQodC5tb2NrKXx8MSkpLGguZWFzaW5nPWooaC5lYXNpbmcsaC5kdXJhdGlvbiksaC5iZWdpbiYmIXAuaXNGdW5jdGlvbihoLmJlZ2luKSYmKGguYmVnaW49bnVsbCksaC5wcm9ncmVzcyYmIXAuaXNGdW5jdGlvbihoLnByb2dyZXNzKSYmKGgucHJvZ3Jlc3M9bnVsbCksaC5jb21wbGV0ZSYmIXAuaXNGdW5jdGlvbihoLmNvbXBsZXRlKSYmKGguY29tcGxldGU9bnVsbCksaC5kaXNwbGF5IT09ZCYmbnVsbCE9PWguZGlzcGxheSYmKGguZGlzcGxheT1oLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFwiYXV0b1wiPT09aC5kaXNwbGF5JiYoaC5kaXNwbGF5PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShmKSkpLGgudmlzaWJpbGl0eSE9PWQmJm51bGwhPT1oLnZpc2liaWxpdHkmJihoLnZpc2liaWxpdHk9aC52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSksaC5tb2JpbGVIQT1oLm1vYmlsZUhBJiZ0LlN0YXRlLmlzTW9iaWxlJiYhdC5TdGF0ZS5pc0dpbmdlcmJyZWFkLGgucXVldWU9PT0hMT9oLmRlbGF5P3NldFRpbWVvdXQoYSxoLmRlbGF5KTphKCk6bS5xdWV1ZShmLGgucXVldWUsZnVuY3Rpb24oYixjKXtyZXR1cm4gYz09PSEwPyhCLnByb21pc2UmJkIucmVzb2x2ZXIobyksITApOih0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsdm9pZCBhKGIpKX0pLFwiXCIhPT1oLnF1ZXVlJiZcImZ4XCIhPT1oLnF1ZXVlfHxcImlucHJvZ3Jlc3NcIj09PW0ucXVldWUoZilbMF18fG0uZGVxdWV1ZShmKX12YXIgaCxpLG4sbyxxLHMsdT1hcmd1bWVudHNbMF0mJihhcmd1bWVudHNbMF0ucHx8bS5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSYmIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzfHxwLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSk7aWYocC5pc1dyYXBwZWQodGhpcyk/KGg9ITEsbj0wLG89dGhpcyxpPXRoaXMpOihoPSEwLG49MSxvPXU/YXJndW1lbnRzWzBdLmVsZW1lbnRzfHxhcmd1bWVudHNbMF0uZTphcmd1bWVudHNbMF0pLG89ZihvKSl7dT8ocT1hcmd1bWVudHNbMF0ucHJvcGVydGllc3x8YXJndW1lbnRzWzBdLnAscz1hcmd1bWVudHNbMF0ub3B0aW9uc3x8YXJndW1lbnRzWzBdLm8pOihxPWFyZ3VtZW50c1tuXSxzPWFyZ3VtZW50c1tuKzFdKTt2YXIgeD1vLmxlbmd0aCx5PTA7aWYoIS9eKHN0b3B8ZmluaXNoKSQvaS50ZXN0KHEpJiYhbS5pc1BsYWluT2JqZWN0KHMpKXt2YXIgej1uKzE7cz17fTtmb3IodmFyIEE9ejtBPGFyZ3VtZW50cy5sZW5ndGg7QSsrKXAuaXNBcnJheShhcmd1bWVudHNbQV0pfHwhL14oZmFzdHxub3JtYWx8c2xvdykkL2kudGVzdChhcmd1bWVudHNbQV0pJiYhL15cXGQvLnRlc3QoYXJndW1lbnRzW0FdKT9wLmlzU3RyaW5nKGFyZ3VtZW50c1tBXSl8fHAuaXNBcnJheShhcmd1bWVudHNbQV0pP3MuZWFzaW5nPWFyZ3VtZW50c1tBXTpwLmlzRnVuY3Rpb24oYXJndW1lbnRzW0FdKSYmKHMuY29tcGxldGU9YXJndW1lbnRzW0FdKTpzLmR1cmF0aW9uPWFyZ3VtZW50c1tBXX12YXIgQj17cHJvbWlzZTpudWxsLHJlc29sdmVyOm51bGwscmVqZWN0ZXI6bnVsbH07aCYmdC5Qcm9taXNlJiYoQi5wcm9taXNlPW5ldyB0LlByb21pc2UoZnVuY3Rpb24oYSxiKXtCLnJlc29sdmVyPWEsQi5yZWplY3Rlcj1ifSkpO3ZhciBDO3N3aXRjaChxKXtjYXNlXCJzY3JvbGxcIjpDPVwic2Nyb2xsXCI7YnJlYWs7Y2FzZVwicmV2ZXJzZVwiOkM9XCJyZXZlcnNlXCI7YnJlYWs7Y2FzZVwiZmluaXNoXCI6Y2FzZVwic3RvcFwiOm0uZWFjaChvLGZ1bmN0aW9uKGEsYil7ZyhiKSYmZyhiKS5kZWxheVRpbWVyJiYoY2xlYXJUaW1lb3V0KGcoYikuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSxnKGIpLmRlbGF5VGltZXIubmV4dCYmZyhiKS5kZWxheVRpbWVyLm5leHQoKSxkZWxldGUgZyhiKS5kZWxheVRpbWVyKX0pO3ZhciBEPVtdO3JldHVybiBtLmVhY2godC5TdGF0ZS5jYWxscyxmdW5jdGlvbihhLGIpe2ImJm0uZWFjaChiWzFdLGZ1bmN0aW9uKGMsZSl7dmFyIGY9cz09PWQ/XCJcIjpzO3JldHVybiBmIT09ITAmJmJbMl0ucXVldWUhPT1mJiYocyE9PWR8fGJbMl0ucXVldWUhPT0hMSl8fHZvaWQgbS5lYWNoKG8sZnVuY3Rpb24oYyxkKXtkPT09ZSYmKChzPT09ITB8fHAuaXNTdHJpbmcocykpJiYobS5lYWNoKG0ucXVldWUoZCxwLmlzU3RyaW5nKHMpP3M6XCJcIiksZnVuY3Rpb24oYSxiKXtwLmlzRnVuY3Rpb24oYikmJmIobnVsbCwhMCl9KSxtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIsW10pKSxcInN0b3BcIj09PXE/KGcoZCkmJmcoZCkudHdlZW5zQ29udGFpbmVyJiZmIT09ITEmJm0uZWFjaChnKGQpLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihhLGIpe2IuZW5kVmFsdWU9Yi5jdXJyZW50VmFsdWV9KSxELnB1c2goYSkpOlwiZmluaXNoXCI9PT1xJiYoYlsyXS5kdXJhdGlvbj0xKSl9KX0pfSksXCJzdG9wXCI9PT1xJiYobS5lYWNoKEQsZnVuY3Rpb24oYSxiKXtsKGIsITApfSksQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pKSxhKCk7ZGVmYXVsdDppZighbS5pc1BsYWluT2JqZWN0KHEpfHxwLmlzRW1wdHlPYmplY3QocSkpe2lmKHAuaXNTdHJpbmcocSkmJnQuUmVkaXJlY3RzW3FdKXt2YXIgRT1tLmV4dGVuZCh7fSxzKSxGPUUuZHVyYXRpb24sRz1FLmRlbGF5fHwwO3JldHVybiBFLmJhY2t3YXJkcz09PSEwJiYobz1tLmV4dGVuZCghMCxbXSxvKS5yZXZlcnNlKCkpLG0uZWFjaChvLGZ1bmN0aW9uKGEsYil7cGFyc2VGbG9hdChFLnN0YWdnZXIpP0UuZGVsYXk9RytwYXJzZUZsb2F0KEUuc3RhZ2dlcikqYTpwLmlzRnVuY3Rpb24oRS5zdGFnZ2VyKSYmKEUuZGVsYXk9RytFLnN0YWdnZXIuY2FsbChiLGEseCkpLEUuZHJhZyYmKEUuZHVyYXRpb249cGFyc2VGbG9hdChGKXx8KC9eKGNhbGxvdXR8dHJhbnNpdGlvbikvLnRlc3QocSk/MWUzOnIpLEUuZHVyYXRpb249TWF0aC5tYXgoRS5kdXJhdGlvbiooRS5iYWNrd2FyZHM/MS1hL3g6KGErMSkveCksLjc1KkUuZHVyYXRpb24sMjAwKSksdC5SZWRpcmVjdHNbcV0uY2FsbChiLGIsRXx8e30sYSx4LG8sQi5wcm9taXNlP0I6ZCl9KSxhKCl9dmFyIEg9XCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiK3ErXCIpIHdhcyBub3QgYSBwcm9wZXJ0eSBtYXAsIGEga25vd24gYWN0aW9uLCBvciBhIHJlZ2lzdGVyZWQgcmVkaXJlY3QuIEFib3J0aW5nLlwiO3JldHVybiBCLnByb21pc2U/Qi5yZWplY3RlcihuZXcgRXJyb3IoSCkpOmNvbnNvbGUubG9nKEgpLGEoKX1DPVwic3RhcnRcIn12YXIgST17bGFzdFBhcmVudDpudWxsLGxhc3RQb3NpdGlvbjpudWxsLGxhc3RGb250U2l6ZTpudWxsLGxhc3RQZXJjZW50VG9QeFdpZHRoOm51bGwsbGFzdFBlcmNlbnRUb1B4SGVpZ2h0Om51bGwsbGFzdEVtVG9QeDpudWxsLHJlbVRvUHg6bnVsbCx2d1RvUHg6bnVsbCx2aFRvUHg6bnVsbH0sSj1bXTttLmVhY2gobyxmdW5jdGlvbihhLGIpe3AuaXNOb2RlKGIpJiZlLmNhbGwoYil9KTt2YXIgSyxFPW0uZXh0ZW5kKHt9LHQuZGVmYXVsdHMscyk7aWYoRS5sb29wPXBhcnNlSW50KEUubG9vcCksSz0yKkUubG9vcC0xLEUubG9vcClmb3IodmFyIEw9MDtLPkw7TCsrKXt2YXIgTT17ZGVsYXk6RS5kZWxheSxwcm9ncmVzczpFLnByb2dyZXNzfTtMPT09Sy0xJiYoTS5kaXNwbGF5PUUuZGlzcGxheSxNLnZpc2liaWxpdHk9RS52aXNpYmlsaXR5LE0uY29tcGxldGU9RS5jb21wbGV0ZSksdyhvLFwicmV2ZXJzZVwiLE0pfXJldHVybiBhKCl9fTt0PW0uZXh0ZW5kKHcsdCksdC5hbmltYXRlPXc7dmFyIHg9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG87cmV0dXJuIHQuU3RhdGUuaXNNb2JpbGV8fGMuaGlkZGVuPT09ZHx8Yy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7Yy5oaWRkZW4/KHg9ZnVuY3Rpb24oYSl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKCEwKX0sMTYpfSxrKCkpOng9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fG99KSxhLlZlbG9jaXR5PXQsYSE9PWImJihhLmZuLnZlbG9jaXR5PXcsYS5mbi52ZWxvY2l0eS5kZWZhdWx0cz10LmRlZmF1bHRzKSxtLmVhY2goW1wiRG93blwiLFwiVXBcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcInNsaWRlXCIrYl09ZnVuY3Rpb24oYSxjLGUsZixnLGgpe3ZhciBpPW0uZXh0ZW5kKHt9LGMpLGo9aS5iZWdpbixrPWkuY29tcGxldGUsbD17aGVpZ2h0OlwiXCIsbWFyZ2luVG9wOlwiXCIsbWFyZ2luQm90dG9tOlwiXCIscGFkZGluZ1RvcDpcIlwiLHBhZGRpbmdCb3R0b206XCJcIn0sbj17fTtpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiRG93blwiPT09Yj9cImlubGluZVwiPT09dC5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGEpP1wiaW5saW5lLWJsb2NrXCI6XCJibG9ja1wiOlwibm9uZVwiKSxpLmJlZ2luPWZ1bmN0aW9uKCl7aiYmai5jYWxsKGcsZyk7Zm9yKHZhciBjIGluIGwpe25bY109YS5zdHlsZVtjXTt2YXIgZD10LkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGEsYyk7bFtjXT1cIkRvd25cIj09PWI/W2QsMF06WzAsZF19bi5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93LGEuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIn0saS5jb21wbGV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgYiBpbiBuKWEuc3R5bGVbYl09bltiXTtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSx0KGEsbCxpKX19KSxtLmVhY2goW1wiSW5cIixcIk91dFwiXSxmdW5jdGlvbihhLGIpe3QuUmVkaXJlY3RzW1wiZmFkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPXtvcGFjaXR5OlwiSW5cIj09PWI/MTowfSxrPWkuY29tcGxldGU7aS5jb21wbGV0ZT1lIT09Zi0xP2kuYmVnaW49bnVsbDpmdW5jdGlvbigpe2smJmsuY2FsbChnLGcpLGgmJmgucmVzb2x2ZXIoZyl9LGkuZGlzcGxheT09PWQmJihpLmRpc3BsYXk9XCJJblwiPT09Yj9cImF1dG9cIjpcIm5vbmVcIiksdCh0aGlzLGosaSl9fSksdH0od2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvfHx3aW5kb3csd2luZG93LGRvY3VtZW50KX0pKSwhZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoayhhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiEhQXJyYXkuaXNBcnJheShhKSYmKGcoYSxjW2JdLGMpLCEwKX1mdW5jdGlvbiBnKGEsYixjKXt2YXIgZTtpZihhKWlmKGEuZm9yRWFjaClhLmZvckVhY2goYixjKTtlbHNlIGlmKGEubGVuZ3RoIT09ZClmb3IoZT0wO2U8YS5sZW5ndGg7KWIuY2FsbChjLGFbZV0sZSxhKSxlKys7ZWxzZSBmb3IoZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJmIuY2FsbChjLGFbZV0sZSxhKX1mdW5jdGlvbiBoKGEsYixjKXtmb3IodmFyIGU9T2JqZWN0LmtleXMoYiksZj0wO2Y8ZS5sZW5ndGg7KSghY3x8YyYmYVtlW2ZdXT09PWQpJiYoYVtlW2ZdXT1iW2VbZl1dKSxmKys7cmV0dXJuIGF9ZnVuY3Rpb24gaShhLGIpe3JldHVybiBoKGEsYiwhMCl9ZnVuY3Rpb24gaihhLGIsYyl7dmFyIGQsZT1iLnByb3RvdHlwZTtkPWEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSksZC5jb25zdHJ1Y3Rvcj1hLGQuX3N1cGVyPWUsYyYmaChkLGMpfWZ1bmN0aW9uIGsoYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PWthP2EuYXBwbHkoYj9iWzBdfHxkOmQsYik6YX1mdW5jdGlvbiBtKGEsYil7cmV0dXJuIGE9PT1kP2I6YX1mdW5jdGlvbiBuKGEsYixjKXtnKHIoYiksZnVuY3Rpb24oYil7YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBvKGEsYixjKXtnKHIoYiksZnVuY3Rpb24oYil7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBwKGEsYil7Zm9yKDthOyl7aWYoYT09YilyZXR1cm4hMDthPWEucGFyZW50Tm9kZX1yZXR1cm4hMX1mdW5jdGlvbiBxKGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKT4tMX1mdW5jdGlvbiByKGEpe3JldHVybiBhLnRyaW0oKS5zcGxpdCgvXFxzKy9nKX1mdW5jdGlvbiBzKGEsYixjKXtpZihhLmluZGV4T2YmJiFjKXJldHVybiBhLmluZGV4T2YoYik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDspe2lmKGMmJmFbZF1bY109PWJ8fCFjJiZhW2RdPT09YilyZXR1cm4gZDtkKyt9cmV0dXJuLTF9ZnVuY3Rpb24gdChhKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwwKX1mdW5jdGlvbiB1KGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPTA7ZjxhLmxlbmd0aDspe3ZhciBnPWI/YVtmXVtiXTphW2ZdO3MoZSxnKTwwJiZkLnB1c2goYVtmXSksZVtmXT1nLGYrK31yZXR1cm4gYyYmKGQ9Yj9kLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYVtiXT5jW2JdfSk6ZC5zb3J0KCkpLGR9ZnVuY3Rpb24gdihhLGIpe2Zvcih2YXIgYyxlLGY9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZz0wO2c8aWEubGVuZ3RoOyl7aWYoYz1pYVtnXSxlPWM/YytmOmIsZSBpbiBhKXJldHVybiBlO2crK31yZXR1cm4gZH1mdW5jdGlvbiB3KCl7cmV0dXJuIG9hKyt9ZnVuY3Rpb24geChhKXt2YXIgYj1hLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGIuZGVmYXVsdFZpZXd8fGIucGFyZW50V2luZG93fWZ1bmN0aW9uIHkoYSxiKXt2YXIgYz10aGlzO3RoaXMubWFuYWdlcj1hLHRoaXMuY2FsbGJhY2s9Yix0aGlzLmVsZW1lbnQ9YS5lbGVtZW50LHRoaXMudGFyZ2V0PWEub3B0aW9ucy5pbnB1dFRhcmdldCx0aGlzLmRvbUhhbmRsZXI9ZnVuY3Rpb24oYil7bChhLm9wdGlvbnMuZW5hYmxlLFthXSkmJmMuaGFuZGxlcihiKX0sdGhpcy5pbml0KCl9ZnVuY3Rpb24geihhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBuZXcoYj1jP2M6cmE/TjpzYT9ROnFhP1M6TSkoYSxBKX1mdW5jdGlvbiBBKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJzLmxlbmd0aCxlPWMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxmPWImeWEmJjA9PT1kLWUsZz1iJihBYXxCYSkmJjA9PT1kLWU7Yy5pc0ZpcnN0PSEhZixjLmlzRmluYWw9ISFnLGYmJihhLnNlc3Npb249e30pLGMuZXZlbnRUeXBlPWIsQihhLGMpLGEuZW1pdChcImhhbW1lci5pbnB1dFwiLGMpLGEucmVjb2duaXplKGMpLGEuc2Vzc2lvbi5wcmV2SW5wdXQ9Y31mdW5jdGlvbiBCKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1FKGIpKSxlPjEmJiFjLmZpcnN0TXVsdGlwbGU/Yy5maXJzdE11bHRpcGxlPUUoYik6MT09PWUmJihjLmZpcnN0TXVsdGlwbGU9ITEpO3ZhciBmPWMuZmlyc3RJbnB1dCxnPWMuZmlyc3RNdWx0aXBsZSxoPWc/Zy5jZW50ZXI6Zi5jZW50ZXIsaT1iLmNlbnRlcj1GKGQpO2IudGltZVN0YW1wPW5hKCksYi5kZWx0YVRpbWU9Yi50aW1lU3RhbXAtZi50aW1lU3RhbXAsYi5hbmdsZT1KKGgsaSksYi5kaXN0YW5jZT1JKGgsaSksQyhjLGIpLGIub2Zmc2V0RGlyZWN0aW9uPUgoYi5kZWx0YVgsYi5kZWx0YVkpLGIuc2NhbGU9Zz9MKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SyhnLnBvaW50ZXJzLGQpOjAsRChjLGIpO3ZhciBqPWEuZWxlbWVudDtwKGIuc3JjRXZlbnQudGFyZ2V0LGopJiYoaj1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9an1mdW5jdGlvbiBDKGEsYil7dmFyIGM9Yi5jZW50ZXIsZD1hLm9mZnNldERlbHRhfHx7fSxlPWEucHJldkRlbHRhfHx7fSxmPWEucHJldklucHV0fHx7fTsoYi5ldmVudFR5cGU9PT15YXx8Zi5ldmVudFR5cGU9PT1BYSkmJihlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gRChhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9QmEmJihpPnhhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWguZGVsdGFYLWIuZGVsdGFYLGs9aC5kZWx0YVktYi5kZWx0YVksbD1HKGksaixrKTtlPWwueCxmPWwueSxjPW1hKGwueCk+bWEobC55KT9sLng6bC55LGc9SChqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEUoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOmxhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpsYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpuYSgpLHBvaW50ZXJzOmIsY2VudGVyOkYoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRihhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpsYShhWzBdLmNsaWVudFgpLHk6bGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OmxhKGMvYikseTpsYShkL2IpfX1mdW5jdGlvbiBHKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEgoYSxiKXtyZXR1cm4gYT09PWI/Q2E6bWEoYSk+PW1hKGIpP2E+MD9EYTpFYTpiPjA/RmE6R2F9ZnVuY3Rpb24gSShhLGIsYyl7Y3x8KGM9S2EpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEooYSxiLGMpe2N8fChjPUthKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBLKGEsYil7cmV0dXJuIEooYlsxXSxiWzBdLExhKS1KKGFbMV0sYVswXSxMYSl9ZnVuY3Rpb24gTChhLGIpe3JldHVybiBJKGJbMF0sYlsxXSxMYSkvSShhWzBdLGFbMV0sTGEpfWZ1bmN0aW9uIE0oKXt0aGlzLmV2RWw9TmEsdGhpcy5ldldpbj1PYSx0aGlzLmFsbG93PSEwLHRoaXMucHJlc3NlZD0hMSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBOKCl7dGhpcy5ldkVsPVJhLHRoaXMuZXZXaW49U2EseS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdG9yZT10aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzPVtdfWZ1bmN0aW9uIE8oKXt0aGlzLmV2VGFyZ2V0PVVhLHRoaXMuZXZXaW49VmEsdGhpcy5zdGFydGVkPSExLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIFAoYSxiKXt2YXIgYz10KGEudG91Y2hlcyksZD10KGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiJihBYXxCYSkmJihjPXUoYy5jb25jYXQoZCksXCJpZGVudGlmaWVyXCIsITApKSxbYyxkXX1mdW5jdGlvbiBRKCl7dGhpcy5ldlRhcmdldD1YYSx0aGlzLnRhcmdldElkcz17fSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBSKGEsYil7dmFyIGM9dChhLnRvdWNoZXMpLGQ9dGhpcy50YXJnZXRJZHM7aWYoYiYoeWF8emEpJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9dChhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gcChhLnRhcmdldCxpKX0pLGI9PT15YSlmb3IoZT0wO2U8Zi5sZW5ndGg7KWRbZltlXS5pZGVudGlmaWVyXT0hMCxlKys7Zm9yKGU9MDtlPGcubGVuZ3RoOylkW2dbZV0uaWRlbnRpZmllcl0mJmgucHVzaChnW2VdKSxiJihBYXxCYSkmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bdShmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIFMoKXt5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYT1rKHRoaXMuaGFuZGxlcix0aGlzKTt0aGlzLnRvdWNoPW5ldyBRKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyBNKHRoaXMubWFuYWdlcixhKX1mdW5jdGlvbiBUKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVShhKXtpZihxKGEsYmIpKXJldHVybiBiYjt2YXIgYj1xKGEsY2IpLGM9cShhLGRiKTtyZXR1cm4gYiYmYz9jYitcIiBcIitkYjpifHxjP2I/Y2I6ZGI6cShhLGFiKT9hYjpfYX1mdW5jdGlvbiBWKGEpe3RoaXMuaWQ9dygpLHRoaXMubWFuYWdlcj1udWxsLHRoaXMub3B0aW9ucz1pKGF8fHt9LHRoaXMuZGVmYXVsdHMpLHRoaXMub3B0aW9ucy5lbmFibGU9bSh0aGlzLm9wdGlvbnMuZW5hYmxlLCEwKSx0aGlzLnN0YXRlPWViLHRoaXMuc2ltdWx0YW5lb3VzPXt9LHRoaXMucmVxdWlyZUZhaWw9W119ZnVuY3Rpb24gVyhhKXtyZXR1cm4gYSZqYj9cImNhbmNlbFwiOmEmaGI/XCJlbmRcIjphJmdiP1wibW92ZVwiOmEmZmI/XCJzdGFydFwiOlwiXCJ9ZnVuY3Rpb24gWChhKXtyZXR1cm4gYT09R2E/XCJkb3duXCI6YT09RmE/XCJ1cFwiOmE9PURhP1wibGVmdFwiOmE9PUVhP1wicmlnaHRcIjpcIlwifWZ1bmN0aW9uIFkoYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBaKCl7Vi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gJCgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFg9bnVsbCx0aGlzLnBZPW51bGx9ZnVuY3Rpb24gXygpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGFhKCl7Vi5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGJhKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gY2EoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBkYSgpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFRpbWU9ITEsdGhpcy5wQ2VudGVyPSExLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLmNvdW50PTB9ZnVuY3Rpb24gZWEoYSxiKXtyZXR1cm4gYj1ifHx7fSxiLnJlY29nbml6ZXJzPW0oYi5yZWNvZ25pemVycyxlYS5kZWZhdWx0cy5wcmVzZXQpLG5ldyBmYShhLGIpfWZ1bmN0aW9uIGZhKGEsYil7Yj1ifHx7fSx0aGlzLm9wdGlvbnM9aShiLGVhLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQ9dGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0fHxhLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMucmVjb2duaXplcnM9W10sdGhpcy5lbGVtZW50PWEsdGhpcy5pbnB1dD16KHRoaXMpLHRoaXMudG91Y2hBY3Rpb249bmV3IFQodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGdhKHRoaXMsITApLGcoYi5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGdhKGEsYil7dmFyIGM9YS5lbGVtZW50O2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGEsZCl7Yy5zdHlsZVt2KGMuc3R5bGUsZCldPWI/YTpcIlwifSl9ZnVuY3Rpb24gaGEoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgaWE9W1wiXCIsXCJ3ZWJraXRcIixcIm1velwiLFwiTVNcIixcIm1zXCIsXCJvXCJdLGphPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxrYT1cImZ1bmN0aW9uXCIsbGE9TWF0aC5yb3VuZCxtYT1NYXRoLmFicyxuYT1EYXRlLm5vdyxvYT0xLHBhPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaSxxYT1cIm9udG91Y2hzdGFydFwiaW4gYSxyYT12KGEsXCJQb2ludGVyRXZlbnRcIikhPT1kLHNhPXFhJiZwYS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHRhPVwidG91Y2hcIix1YT1cInBlblwiLHZhPVwibW91c2VcIix3YT1cImtpbmVjdFwiLHhhPTI1LHlhPTEsemE9MixBYT00LEJhPTgsQ2E9MSxEYT0yLEVhPTQsRmE9OCxHYT0xNixIYT1EYXxFYSxJYT1GYXxHYSxKYT1IYXxJYSxLYT1bXCJ4XCIsXCJ5XCJdLExhPVtcImNsaWVudFhcIixcImNsaWVudFlcIl07eS5wcm90b3R5cGU9e2hhbmRsZXI6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4oeCh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbyh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbyh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbyh4KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfX07dmFyIE1hPXttb3VzZWRvd246eWEsbW91c2Vtb3ZlOnphLG1vdXNldXA6QWF9LE5hPVwibW91c2Vkb3duXCIsT2E9XCJtb3VzZW1vdmUgbW91c2V1cFwiO2ooTSx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPU1hW2EudHlwZV07YiZ5YSYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJnphJiYxIT09YS53aGljaCYmKGI9QWEpLHRoaXMucHJlc3NlZCYmdGhpcy5hbGxvdyYmKGImQWEmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOnZhLHNyY0V2ZW50OmF9KSl9fSk7dmFyIFBhPXtwb2ludGVyZG93bjp5YSxwb2ludGVybW92ZTp6YSxwb2ludGVydXA6QWEscG9pbnRlcmNhbmNlbDpCYSxwb2ludGVyb3V0OkJhfSxRYT17Mjp0YSwzOnVhLDQ6dmEsNTp3YX0sUmE9XCJwb2ludGVyZG93blwiLFNhPVwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50JiYoUmE9XCJNU1BvaW50ZXJEb3duXCIsU2E9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxqKE4seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVBhW2RdLGY9UWFbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT10YSxoPXMoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJnlhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihBYXxCYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBUYT17dG91Y2hzdGFydDp5YSx0b3VjaG1vdmU6emEsdG91Y2hlbmQ6QWEsdG91Y2hjYW5jZWw6QmF9LFVhPVwidG91Y2hzdGFydFwiLFZhPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtqKE8seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1UYVthLnR5cGVdO2lmKGI9PT15YSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1QLmNhbGwodGhpcyxhLGIpO2ImKEFhfEJhKSYmMD09PWNbMF0ubGVuZ3RoLWNbMV0ubGVuZ3RoJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnRhLHNyY0V2ZW50OmF9KX19fSk7dmFyIFdhPXt0b3VjaHN0YXJ0OnlhLHRvdWNobW92ZTp6YSx0b3VjaGVuZDpBYSx0b3VjaGNhbmNlbDpCYX0sWGE9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2ooUSx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVdhW2EudHlwZV0sYz1SLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6dGEsc3JjRXZlbnQ6YX0pfX0pLGooUyx5LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT10YSxlPWMucG9pbnRlclR5cGU9PXZhO2lmKGQpdGhpcy5tb3VzZS5hbGxvdz0hMTtlbHNlIGlmKGUmJiF0aGlzLm1vdXNlLmFsbG93KXJldHVybjtiJihBYXxCYSkmJih0aGlzLm1vdXNlLmFsbG93PSEwKSx0aGlzLmNhbGxiYWNrKGEsYixjKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBZYT12KGphLnN0eWxlLFwidG91Y2hBY3Rpb25cIiksWmE9WWEhPT1kLCRhPVwiY29tcHV0ZVwiLF9hPVwiYXV0b1wiLGFiPVwibWFuaXB1bGF0aW9uXCIsYmI9XCJub25lXCIsY2I9XCJwYW4teFwiLGRiPVwicGFuLXlcIjtULnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PSRhJiYoYT10aGlzLmNvbXB1dGUoKSksWmEmJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtZYV09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBnKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtsKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxVKGEuam9pbihcIiBcIikpfSxwcmV2ZW50RGVmYXVsdHM6ZnVuY3Rpb24oYSl7aWYoIVphKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1xKGQsYmIpLGY9cShkLGRiKSxnPXEoZCxjYik7cmV0dXJuIGV8fGYmJmMmSGF8fGcmJmMmSWE/dGhpcy5wcmV2ZW50U3JjKGIpOnZvaWQgMH19LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBlYj0xLGZiPTIsZ2I9NCxoYj04LGliPWhiLGpiPTE2LGtiPTMyO1YucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGgodGhpcy5vcHRpb25zLGEpLHRoaXMubWFuYWdlciYmdGhpcy5tYW5hZ2VyLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LHJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVjb2duaXplV2l0aFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhPVkoYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGYoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1ZKGEsdGhpcyksZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLHRoaXMpfSxyZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGE9WShhLHRoaXMpLC0xPT09cyhiLGEpJiYoYi5wdXNoKGEpLGEucmVxdWlyZUZhaWx1cmUodGhpcykpLHRoaXN9LGRyb3BSZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJkcm9wUmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczthPVkoYSx0aGlzKTt2YXIgYj1zKHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe2MubWFuYWdlci5lbWl0KGMub3B0aW9ucy5ldmVudCsoYj9XKGQpOlwiXCIpLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO2hiPmQmJmIoITApLGIoKSxkPj1oYiYmYighMCl9LHRyeUVtaXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2FuRW1pdCgpP3RoaXMuZW1pdChhKTp2b2lkKHRoaXMuc3RhdGU9a2IpfSxjYW5FbWl0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aDspe2lmKCEodGhpcy5yZXF1aXJlRmFpbFthXS5zdGF0ZSYoa2J8ZWIpKSlyZXR1cm4hMTthKyt9cmV0dXJuITB9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj1oKHt9LGEpO3JldHVybiBsKHRoaXMub3B0aW9ucy5lbmFibGUsW3RoaXMsYl0pPyh0aGlzLnN0YXRlJihpYnxqYnxrYikmJih0aGlzLnN0YXRlPWViKSx0aGlzLnN0YXRlPXRoaXMucHJvY2VzcyhiKSx2b2lkKHRoaXMuc3RhdGUmKGZifGdifGhifGpiKSYmdGhpcy50cnlFbWl0KGIpKSk6KHRoaXMucmVzZXQoKSx2b2lkKHRoaXMuc3RhdGU9a2IpKX0scHJvY2VzczpmdW5jdGlvbigpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saihaLFYse2RlZmF1bHRzOntwb2ludGVyczoxfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDA9PT1ifHxhLnBvaW50ZXJzLmxlbmd0aD09PWJ9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdGF0ZSxjPWEuZXZlbnRUeXBlLGQ9YiYoZmJ8Z2IpLGU9dGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCYmKGMmQmF8fCFlKT9ifGpiOmR8fGU/YyZBYT9ifGhiOmImZmI/YnxnYjpmYjprYn19KSxqKCQsWix7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOkphfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZIYSYmYi5wdXNoKGRiKSxhJklhJiZiLnB1c2goY2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mSGE/KGU9MD09PWY/Q2E6MD5mP0RhOkVhLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/Q2E6MD5nP0ZhOkdhLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIFoucHJvdG90eXBlLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKHRoaXMuc3RhdGUmZmJ8fCEodGhpcy5zdGF0ZSZmYikmJnRoaXMuZGlyZWN0aW9uVGVzdChhKSl9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5wWD1hLmRlbHRhWCx0aGlzLnBZPWEuZGVsdGFZO3ZhciBiPVgoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGooXyxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJwaW5jaFwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2JiXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEuc2NhbGUtMSk+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZmYil9LGVtaXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSksMSE9PWEuc2NhbGUpe3ZhciBiPWEuc2NhbGU8MT9cImluXCI6XCJvdXRcIjt0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKX19fSksaihhYSxWLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZTo1MDAsdGhyZXNob2xkOjV9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW19hXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoQWF8QmEpJiYhZil0aGlzLnJlc2V0KCk7ZWxzZSBpZihhLmV2ZW50VHlwZSZ5YSl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9aWIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJkFhKXJldHVybiBpYjtyZXR1cm4ga2J9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnN0YXRlPT09aWImJihhJiZhLmV2ZW50VHlwZSZBYT90aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrXCJ1cFwiLGEpOih0aGlzLl9pbnB1dC50aW1lU3RhbXA9bmEoKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSksaihiYSxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJyb3RhdGVcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltiYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnJvdGF0aW9uKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJmZiKX19KSxqKGNhLFose2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi42NSxkaXJlY3Rpb246SGF8SWEscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gJC5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihIYXxJYSk/Yj1hLnZlbG9jaXR5OmMmSGE/Yj1hLnZlbG9jaXR5WDpjJklhJiYoYj1hLnZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEuZGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJm1hKGIpPnRoaXMub3B0aW9ucy52ZWxvY2l0eSYmYS5ldmVudFR5cGUmQWF9LGVtaXQ6ZnVuY3Rpb24oYSl7dmFyIGI9WChhLmRpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LGEpfX0pLGooZGEsVix7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDoyLHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYWJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZj1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJnlhJiYwPT09dGhpcy5jb3VudClyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO2lmKGQmJmYmJmMpe2lmKGEuZXZlbnRUeXBlIT1BYSlyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO3ZhciBnPSF0aGlzLnBUaW1lfHxhLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWwsaD0hdGhpcy5wQ2VudGVyfHxJKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1pYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxmYik6aWJ9cmV0dXJuIGtifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1rYn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLGtifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1pYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksZWEuVkVSU0lPTj1cIjIuMC40XCIsZWEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjokYSxlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbYmEse2VuYWJsZTohMX1dLFtfLHtlbmFibGU6ITF9LFtcInJvdGF0ZVwiXV0sW2NhLHtkaXJlY3Rpb246SGF9XSxbJCx7ZGlyZWN0aW9uOkhhfSxbXCJzd2lwZVwiXV0sW2RhXSxbZGEse2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFthYV1dLGNzc1Byb3BzOnt1c2VyU2VsZWN0OlwiZGVmYXVsdFwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciBsYj0xLG1iPTI7ZmEucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGgodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT9tYjpsYn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJmliKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT1tYnx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKGZifGdifGhiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgVilyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVjb2duaXplcnM7cmV0dXJuIGE9dGhpcy5nZXQoYSksYi5zcGxpY2UocyhiLGEpLDEpLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30sb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHIoYSksZnVuY3Rpb24oYSl7Y1thXT1jW2FdfHxbXSxjW2FdLnB1c2goYil9KSx0aGlzfSxvZmY6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHIoYSksZnVuY3Rpb24oYSl7Yj9jW2FdLnNwbGljZShzKGNbYV0sYiksMSk6ZGVsZXRlIGNbYV19KSx0aGlzfSxlbWl0OmZ1bmN0aW9uKGEsYil7dGhpcy5vcHRpb25zLmRvbUV2ZW50cyYmaGEoYSxiKTt2YXIgYz10aGlzLmhhbmRsZXJzW2FdJiZ0aGlzLmhhbmRsZXJzW2FdLnNsaWNlKCk7aWYoYyYmYy5sZW5ndGgpe2IudHlwZT1hLGIucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtiLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCl9O2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7KWNbZF0oYiksZCsrfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudCYmZ2EodGhpcywhMSksdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5lbGVtZW50PW51bGx9fSxoKGVhLHtJTlBVVF9TVEFSVDp5YSxJTlBVVF9NT1ZFOnphLElOUFVUX0VORDpBYSxJTlBVVF9DQU5DRUw6QmEsU1RBVEVfUE9TU0lCTEU6ZWIsU1RBVEVfQkVHQU46ZmIsU1RBVEVfQ0hBTkdFRDpnYixTVEFURV9FTkRFRDpoYixTVEFURV9SRUNPR05JWkVEOmliLFNUQVRFX0NBTkNFTExFRDpqYixTVEFURV9GQUlMRUQ6a2IsRElSRUNUSU9OX05PTkU6Q2EsRElSRUNUSU9OX0xFRlQ6RGEsRElSRUNUSU9OX1JJR0hUOkVhLERJUkVDVElPTl9VUDpGYSxESVJFQ1RJT05fRE9XTjpHYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpIYSxESVJFQ1RJT05fVkVSVElDQUw6SWEsRElSRUNUSU9OX0FMTDpKYSxNYW5hZ2VyOmZhLElucHV0OnksVG91Y2hBY3Rpb246VCxUb3VjaElucHV0OlEsTW91c2VJbnB1dDpNLFBvaW50ZXJFdmVudElucHV0Ok4sVG91Y2hNb3VzZUlucHV0OlMsU2luZ2xlVG91Y2hJbnB1dDpPLFJlY29nbml6ZXI6VixBdHRyUmVjb2duaXplcjpaLFRhcDpkYSxQYW46JCxTd2lwZTpjYSxQaW5jaDpfLFJvdGF0ZTpiYSxQcmVzczphYSxvbjpuLG9mZjpvLGVhY2g6ZyxtZXJnZTppLGV4dGVuZDpoLGluaGVyaXQ6aixiaW5kRm46ayxwcmVmaXhlZDp2fSksdHlwZW9mIGRlZmluZT09a2EmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGVhfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZWE6YVtjXT1lYX0od2luZG93LGRvY3VtZW50LFwiSGFtbWVyXCIpLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCIsXCJoYW1tZXJqc1wiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9hKHJlcXVpcmUoXCJqcXVlcnlcIikscmVxdWlyZShcImhhbW1lcmpzXCIpKTphKGpRdWVyeSxIYW1tZXIpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYyxkKXt2YXIgZT1hKGMpO2UuZGF0YShcImhhbW1lclwiKXx8ZS5kYXRhKFwiaGFtbWVyXCIsbmV3IGIoZVswXSxkKSl9YS5mbi5oYW1tZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2ModGhpcyxhKX0pfSxiLk1hbmFnZXIucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7Yi5jYWxsKHRoaXMsYyxkKSxhKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7dHlwZTpjLGdlc3R1cmU6ZH0pfX0oYi5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0KX0pLGZ1bmN0aW9uKGEpe2EuUGFja2FnZT9NYXRlcmlhbGl6ZT17fTphLk1hdGVyaWFsaXplPXt9fSh3aW5kb3cpLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9W1wid2Via2l0XCIsXCJtb3pcIl0sZD1hLnJlcXVlc3RBbmltYXRpb25GcmFtZSxlPWEuY2FuY2VsQW5pbWF0aW9uRnJhbWUsZj1jLmxlbmd0aDstLWY+PTAmJiFkOylkPWFbY1tmXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxlPWFbY1tmXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtkJiZlfHwoZD1mdW5jdGlvbihhKXt2YXIgYz0rRGF0ZS5ub3coKSxkPU1hdGgubWF4KGIrMTYsYyk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKGI9ZCl9LGQtYyl9LGU9Y2xlYXJUaW1lb3V0KSxhLnJlcXVlc3RBbmltYXRpb25GcmFtZT1kLGEuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZX0od2luZG93KSxNYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZz1mdW5jdGlvbihhKXt2YXIgYj1hLnByb3AoXCJ0YWdOYW1lXCIpfHxcIlwiLGM9YS5hdHRyKFwiaWRcIil8fFwiXCIsZD1hLmF0dHIoXCJjbGFzc1wiKXx8XCJcIjtyZXR1cm4oYitjK2QpLnJlcGxhY2UoL1xccy9nLFwiXCIpfSxNYXRlcmlhbGl6ZS5ndWlkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3JldHVybiBNYXRoLmZsb29yKDY1NTM2KigxK01hdGgucmFuZG9tKCkpKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhKCkrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrXCItXCIrYSgpK1wiLVwiK2EoKSthKCkrYSgpfX0oKSxNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCx8PSkvZyxcIlxcXFwkMVwiKX0sTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZD1mdW5jdGlvbihhKXt2YXIgYj0kKGEpLGM9Yi5hZGQoYi5wYXJlbnRzKCkpLGQ9ITE7cmV0dXJuIGMuZWFjaChmdW5jdGlvbigpe2lmKFwiZml4ZWRcIj09PSQodGhpcykuY3NzKFwicG9zaXRpb25cIikpcmV0dXJuIGQ9ITAsITF9KSxkfTt2YXIgZ2V0VGltZT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX07TWF0ZXJpYWxpemUudGhyb3R0bGU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPW51bGwsaD0wO2N8fChjPXt9KTt2YXIgaT1mdW5jdGlvbigpe2g9Yy5sZWFkaW5nPT09ITE/MDpnZXRUaW1lKCksZz1udWxsLGY9YS5hcHBseShkLGUpLGQ9ZT1udWxsfTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaj1nZXRUaW1lKCk7aHx8Yy5sZWFkaW5nIT09ITF8fChoPWopO3ZhciBrPWItKGotaCk7cmV0dXJuIGQ9dGhpcyxlPWFyZ3VtZW50cyxrPD0wPyhjbGVhclRpbWVvdXQoZyksZz1udWxsLGg9aixmPWEuYXBwbHkoZCxlKSxkPWU9bnVsbCk6Z3x8Yy50cmFpbGluZz09PSExfHwoZz1zZXRUaW1lb3V0KGksaykpLGZ9fTt2YXIgVmVsO1ZlbD1qUXVlcnk/alF1ZXJ5LlZlbG9jaXR5OiQ/JC5WZWxvY2l0eTpWZWxvY2l0eSxmdW5jdGlvbihhKXthLmZuLmNvbGxhcHNpYmxlPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9e2FjY29yZGlvbjp2b2lkIDAsb25PcGVuOnZvaWQgMCxvbkNsb3NlOnZvaWQgMH0sZT1iO3JldHVybiBiPWEuZXh0ZW5kKGQsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZChiKXttPWwuZmluZChcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpLGIuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTpiLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIucGFyZW50KCkuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlRG93bih7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KTpiLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KSxtLm5vdChiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxtLm5vdChiKS5wYXJlbnQoKS5jaGlsZHJlbihcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmlzKFwiOnZpc2libGVcIikmJmEodGhpcykuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKSxoKGEodGhpcykuc2libGluZ3MoXCIuY29sbGFwc2libGUtaGVhZGVyXCIpKX19KX0pfWZ1bmN0aW9uIGYoYil7Yi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmIucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYi5wYXJlbnQoKS5oYXNDbGFzcyhcImFjdGl2ZVwiKT9iLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVEb3duKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pOmIuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZVVwKHtkdXJhdGlvbjozNTAsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pfWZ1bmN0aW9uIGcoYSxjKXtjfHxhLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLGIuYWNjb3JkaW9ufHxcImFjY29yZGlvblwiPT09bnx8dm9pZCAwPT09bj9kKGEpOmYoYSksaChhKX1mdW5jdGlvbiBoKGEpe2EuaGFzQ2xhc3MoXCJhY3RpdmVcIik/XCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbk9wZW4mJmIub25PcGVuLmNhbGwodGhpcyxhLnBhcmVudCgpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQ2xvc2UmJmIub25DbG9zZS5jYWxsKHRoaXMsYS5wYXJlbnQoKSl9ZnVuY3Rpb24gaShhKXt2YXIgYj1qKGEpO3JldHVybiBiLmxlbmd0aD4wfWZ1bmN0aW9uIGooYSl7cmV0dXJuIGEuY2xvc2VzdChcImxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKX1mdW5jdGlvbiBrKCl7bC5vZmYoXCJjbGljay5jb2xsYXBzZVwiLFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIil9dmFyIGw9YSh0aGlzKSxtPWEodGhpcykuZmluZChcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpLG49bC5kYXRhKFwiY29sbGFwc2libGVcIik7aWYoXCJkZXN0cm95XCI9PT1lKXJldHVybiB2b2lkIGsoKTtpZihjPj0wJiZjPG0ubGVuZ3RoKXt2YXIgbz1tLmVxKGMpO3JldHVybiB2b2lkKG8ubGVuZ3RoJiYoXCJvcGVuXCI9PT1lfHxcImNsb3NlXCI9PT1lJiZvLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSYmZyhvKSl9aygpLGwub24oXCJjbGljay5jb2xsYXBzZVwiLFwiPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIixmdW5jdGlvbihiKXt2YXIgYz1hKGIudGFyZ2V0KTtpKGMpJiYoYz1qKGMpKSxnKGMpfSksYi5hY2NvcmRpb258fFwiYWNjb3JkaW9uXCI9PT1ufHx2b2lkIDA9PT1uP2cobS5maWx0ZXIoXCIuYWN0aXZlXCIpLmZpcnN0KCksITApOm0uZmlsdGVyKFwiLmFjdGl2ZVwiKS5lYWNoKGZ1bmN0aW9uKCl7ZyhhKHRoaXMpLCEwKX0pfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5jb2xsYXBzaWJsZVwiKS5jb2xsYXBzaWJsZSgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5zY3JvbGxUbz1mdW5jdGlvbihiKXtyZXR1cm4gYSh0aGlzKS5zY3JvbGxUb3AoYSh0aGlzKS5zY3JvbGxUb3AoKS1hKHRoaXMpLm9mZnNldCgpLnRvcCthKGIpLm9mZnNldCgpLnRvcCksdGhpc30sYS5mbi5kcm9wZG93bj1mdW5jdGlvbihiKXt2YXIgYz17aW5EdXJhdGlvbjozMDAsb3V0RHVyYXRpb246MjI1LGNvbnN0cmFpbldpZHRoOiEwLGhvdmVyOiExLGd1dHRlcjowLGJlbG93T3JpZ2luOiExLGFsaWdubWVudDpcImxlZnRcIixzdG9wUHJvcGFnYXRpb246ITF9O3JldHVyblwib3BlblwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwib3BlblwiKX0pLCExKTpcImNsb3NlXCI9PT1iPyh0aGlzLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJjbG9zZVwiKX0pLCExKTp2b2lkIHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGQoKXt2b2lkIDAhPT1nLmRhdGEoXCJpbmR1cmF0aW9uXCIpJiYoaC5pbkR1cmF0aW9uPWcuZGF0YShcImluZHVyYXRpb25cIikpLHZvaWQgMCE9PWcuZGF0YShcIm91dGR1cmF0aW9uXCIpJiYoaC5vdXREdXJhdGlvbj1nLmRhdGEoXCJvdXRkdXJhdGlvblwiKSksdm9pZCAwIT09Zy5kYXRhKFwiY29uc3RyYWlud2lkdGhcIikmJihoLmNvbnN0cmFpbldpZHRoPWcuZGF0YShcImNvbnN0cmFpbndpZHRoXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJob3ZlclwiKSYmKGguaG92ZXI9Zy5kYXRhKFwiaG92ZXJcIikpLHZvaWQgMCE9PWcuZGF0YShcImd1dHRlclwiKSYmKGguZ3V0dGVyPWcuZGF0YShcImd1dHRlclwiKSksdm9pZCAwIT09Zy5kYXRhKFwiYmVsb3dvcmlnaW5cIikmJihoLmJlbG93T3JpZ2luPWcuZGF0YShcImJlbG93b3JpZ2luXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJhbGlnbm1lbnRcIikmJihoLmFsaWdubWVudD1nLmRhdGEoXCJhbGlnbm1lbnRcIikpLHZvaWQgMCE9PWcuZGF0YShcInN0b3Bwcm9wYWdhdGlvblwiKSYmKGguc3RvcFByb3BhZ2F0aW9uPWcuZGF0YShcInN0b3Bwcm9wYWdhdGlvblwiKSl9ZnVuY3Rpb24gZShiKXtcImZvY3VzXCI9PT1iJiYoaT0hMCksZCgpLGouYWRkQ2xhc3MoXCJhY3RpdmVcIiksZy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxoLmNvbnN0cmFpbldpZHRoPT09ITA/ai5jc3MoXCJ3aWR0aFwiLGcub3V0ZXJXaWR0aCgpKTpqLmNzcyhcIndoaXRlLXNwYWNlXCIsXCJub3dyYXBcIik7dmFyIGM9d2luZG93LmlubmVySGVpZ2h0LGU9Zy5pbm5lckhlaWdodCgpLGs9Zy5vZmZzZXQoKS5sZWZ0LGw9Zy5vZmZzZXQoKS50b3AtYSh3aW5kb3cpLnNjcm9sbFRvcCgpLG09aC5hbGlnbm1lbnQsbj0wLG89MCxwPTA7aC5iZWxvd09yaWdpbj09PSEwJiYocD1lKTt2YXIgcT0wLHI9MCxzPWcucGFyZW50KCk7aWYocy5pcyhcImJvZHlcIil8fChzWzBdLnNjcm9sbEhlaWdodD5zWzBdLmNsaWVudEhlaWdodCYmKHE9c1swXS5zY3JvbGxUb3ApLHNbMF0uc2Nyb2xsV2lkdGg+c1swXS5jbGllbnRXaWR0aCYmKHI9c1swXS5zY3JvbGxMZWZ0KSksaytqLmlubmVyV2lkdGgoKT5hKHdpbmRvdykud2lkdGgoKT9tPVwicmlnaHRcIjprLWouaW5uZXJXaWR0aCgpK2cuaW5uZXJXaWR0aCgpPDAmJihtPVwibGVmdFwiKSxsK2ouaW5uZXJIZWlnaHQoKT5jKWlmKGwrZS1qLmlubmVySGVpZ2h0KCk8MCl7dmFyIHQ9Yy1sLXA7ai5jc3MoXCJtYXgtaGVpZ2h0XCIsdCl9ZWxzZSBwfHwocCs9ZSkscC09ai5pbm5lckhlaWdodCgpO2lmKFwibGVmdFwiPT09bSluPWguZ3V0dGVyLG89Zy5wb3NpdGlvbigpLmxlZnQrbjtlbHNlIGlmKFwicmlnaHRcIj09PW0pe3ZhciB1PWcucG9zaXRpb24oKS5sZWZ0K2cub3V0ZXJXaWR0aCgpLWoub3V0ZXJXaWR0aCgpO249LWguZ3V0dGVyLG89dStufWouY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOmcucG9zaXRpb24oKS50b3ArcCtxLGxlZnQ6bytyfSksai5zdG9wKCEwLCEwKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2xpZGVEb3duKHtxdWV1ZTohMSxkdXJhdGlvbjpoLmluRHVyYXRpb24sZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyhcImhlaWdodFwiLFwiXCIpfX0pLmFuaW1hdGUoe29wYWNpdHk6MX0se3F1ZXVlOiExLGR1cmF0aW9uOmguaW5EdXJhdGlvbixlYXNpbmc6XCJlYXNlT3V0U2luZVwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2EoZG9jdW1lbnQpLmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSxmdW5jdGlvbihiKXtmKCksYShkb2N1bWVudCkudW5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIikpfSl9LDApfWZ1bmN0aW9uIGYoKXtpPSExLGouZmFkZU91dChoLm91dER1cmF0aW9uKSxqLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGcucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYShkb2N1bWVudCkudW5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIikpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtqLmNzcyhcIm1heC1oZWlnaHRcIixcIlwiKX0saC5vdXREdXJhdGlvbil9dmFyIGc9YSh0aGlzKSxoPWEuZXh0ZW5kKHt9LGMsYiksaT0hMSxqPWEoXCIjXCIrZy5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikpO2lmKGQoKSxnLmFmdGVyKGopLGguaG92ZXIpe3ZhciBrPSExO2cudW5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIikpLGcub24oXCJtb3VzZWVudGVyXCIsZnVuY3Rpb24oYSl7az09PSExJiYoZSgpLGs9ITApfSksZy5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihiKXt2YXIgYz1iLnRvRWxlbWVudHx8Yi5yZWxhdGVkVGFyZ2V0O2EoYykuY2xvc2VzdChcIi5kcm9wZG93bi1jb250ZW50XCIpLmlzKGopfHwoai5zdG9wKCEwLCEwKSxmKCksaz0hMSl9KSxqLm9uKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWIudG9FbGVtZW50fHxiLnJlbGF0ZWRUYXJnZXQ7YShjKS5jbG9zZXN0KFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5pcyhnKXx8KGouc3RvcCghMCwhMCksZigpLGs9ITEpfSl9ZWxzZSBnLnVuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpKSxnLmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSxmdW5jdGlvbihiKXtpfHwoZ1swXSE9Yi5jdXJyZW50VGFyZ2V0fHxnLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwwIT09YShiLnRhcmdldCkuY2xvc2VzdChcIi5kcm9wZG93bi1jb250ZW50XCIpLmxlbmd0aD9nLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZigpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKSk6KGIucHJldmVudERlZmF1bHQoKSxoLnN0b3BQcm9wYWdhdGlvbiYmYi5zdG9wUHJvcGFnYXRpb24oKSxlKFwiY2xpY2tcIikpKX0pO2cub24oXCJvcGVuXCIsZnVuY3Rpb24oYSxiKXtlKGIpfSksZy5vbihcImNsb3NlXCIsZil9KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5kcm9wZG93bigpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7XG52YXIgYj0wLGM9MCxkPWZ1bmN0aW9uKCl7cmV0dXJuIGMrKyxcIm1hdGVyaWFsaXplLW1vZGFsLW92ZXJsYXktXCIrY30sZT17aW5pdDpmdW5jdGlvbihjKXt2YXIgZT17b3BhY2l0eTouNSxpbkR1cmF0aW9uOjM1MCxvdXREdXJhdGlvbjoyNTAscmVhZHk6dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxkaXNtaXNzaWJsZTohMCxzdGFydGluZ1RvcDpcIjQlXCIsZW5kaW5nVG9wOlwiMTAlXCJ9O3JldHVybiBjPWEuZXh0ZW5kKGUsYyksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWEodGhpcykuYXR0cihcImlkXCIpfHxcIiNcIithKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIiksZz1mdW5jdGlvbigpe3ZhciBkPWUuZGF0YShcIm92ZXJsYXktaWRcIiksZj1hKFwiI1wiK2QpO2UucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9mZihcImNsaWNrLmNsb3NlXCIpLGEoZG9jdW1lbnQpLm9mZihcImtleXVwLm1vZGFsXCIrZCksZi52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246Yy5vdXREdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dFF1YXJ0XCJ9KTt2YXIgZz17ZHVyYXRpb246Yy5vdXREdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMuY29tcGxldGUmJmMuY29tcGxldGUuY2FsbCh0aGlzLGUpLGYucmVtb3ZlKCksYi0tfX07ZS5oYXNDbGFzcyhcImJvdHRvbS1zaGVldFwiKT9lLnZlbG9jaXR5KHtib3R0b206XCItMTAwJVwiLG9wYWNpdHk6MH0sZyk6ZS52ZWxvY2l0eSh7dG9wOmMuc3RhcnRpbmdUb3Asb3BhY2l0eTowLHNjYWxlWDouN30sZyl9LGg9ZnVuY3Rpb24oZil7dmFyIGg9YShcImJvZHlcIiksaT1oLmlubmVyV2lkdGgoKTtpZihoLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksaC53aWR0aChpKSwhZS5oYXNDbGFzcyhcIm9wZW5cIikpe3ZhciBqPWQoKSxrPWEoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7bFN0YWNrPSsrYixrLmF0dHIoXCJpZFwiLGopLmNzcyhcInotaW5kZXhcIiwxZTMrMipsU3RhY2spLGUuZGF0YShcIm92ZXJsYXktaWRcIixqKS5jc3MoXCJ6LWluZGV4XCIsMWUzKzIqbFN0YWNrKzEpLGUuYWRkQ2xhc3MoXCJvcGVuXCIpLGEoXCJib2R5XCIpLmFwcGVuZChrKSxjLmRpc21pc3NpYmxlJiYoay5jbGljayhmdW5jdGlvbigpe2coKX0pLGEoZG9jdW1lbnQpLm9uKFwia2V5dXAubW9kYWxcIitqLGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZnKCl9KSksZS5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9uKFwiY2xpY2suY2xvc2VcIixmdW5jdGlvbihhKXtnKCl9KSxrLmNzcyh7ZGlzcGxheTpcImJsb2NrXCIsb3BhY2l0eTowfSksZS5jc3Moe2Rpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6MH0pLGsudmVsb2NpdHkoe29wYWNpdHk6Yy5vcGFjaXR5fSx7ZHVyYXRpb246Yy5pbkR1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIn0pLGUuZGF0YShcImFzc29jaWF0ZWQtb3ZlcmxheVwiLGtbMF0pO3ZhciBsPXtkdXJhdGlvbjpjLmluRHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgYy5yZWFkeSYmYy5yZWFkeS5jYWxsKHRoaXMsZSxmKX19O2UuaGFzQ2xhc3MoXCJib3R0b20tc2hlZXRcIik/ZS52ZWxvY2l0eSh7Ym90dG9tOlwiMFwiLG9wYWNpdHk6MX0sbCk6KGEuVmVsb2NpdHkuaG9vayhlLFwic2NhbGVYXCIsLjcpLGUuY3NzKHt0b3A6Yy5zdGFydGluZ1RvcH0pLGUudmVsb2NpdHkoe3RvcDpjLmVuZGluZ1RvcCxvcGFjaXR5OjEsc2NhbGVYOlwiMVwifSxsKSl9fTthKGRvY3VtZW50KS5vZmYoXCJjbGljay5tb2RhbFRyaWdnZXJcIiwnYVtocmVmPVwiIycrZisnXCJdLCBbZGF0YS10YXJnZXQ9XCInK2YrJ1wiXScpLGEodGhpcykub2ZmKFwib3Blbk1vZGFsXCIpLGEodGhpcykub2ZmKFwiY2xvc2VNb2RhbFwiKSxhKGRvY3VtZW50KS5vbihcImNsaWNrLm1vZGFsVHJpZ2dlclwiLCdhW2hyZWY9XCIjJytmKydcIl0sIFtkYXRhLXRhcmdldD1cIicrZisnXCJdJyxmdW5jdGlvbihiKXtjLnN0YXJ0aW5nVG9wPShhKHRoaXMpLm9mZnNldCgpLnRvcC1hKHdpbmRvdykuc2Nyb2xsVG9wKCkpLzEuMTUsaChhKHRoaXMpKSxiLnByZXZlbnREZWZhdWx0KCl9KSxhKHRoaXMpLm9uKFwib3Blbk1vZGFsXCIsZnVuY3Rpb24oKXthKHRoaXMpLmF0dHIoXCJocmVmXCIpfHxcIiNcIithKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIik7aCgpfSksYSh0aGlzKS5vbihcImNsb3NlTW9kYWxcIixmdW5jdGlvbigpe2coKX0pfSl9LG9wZW46ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJvcGVuTW9kYWxcIil9LGNsb3NlOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VNb2RhbFwiKX19O2EuZm4ubW9kYWw9ZnVuY3Rpb24oYil7cmV0dXJuIGVbYl0/ZVtiXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGImJmI/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2IrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5Lm1vZGFsXCIpOmUuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ubWF0ZXJpYWxib3g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2Y9ITE7dmFyIGI9aS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIiksZD0od2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0LGkuZGF0YShcIndpZHRoXCIpKSxnPWkuZGF0YShcImhlaWdodFwiKTtpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiI21hdGVyaWFsYm94LW92ZXJsYXlcIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIubWF0ZXJpYWxib3gtY2FwdGlvblwiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIiNtYXRlcmlhbGJveC1vdmVybGF5XCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlPSExLGEodGhpcykucmVtb3ZlKCl9fSksaS52ZWxvY2l0eSh7d2lkdGg6ZCxoZWlnaHQ6ZyxsZWZ0OjAsdG9wOjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtiLmNzcyh7aGVpZ2h0OlwiXCIsd2lkdGg6XCJcIixwb3NpdGlvbjpcIlwiLHRvcDpcIlwiLGxlZnQ6XCJcIn0pLGkucmVtb3ZlQXR0cihcInN0eWxlXCIpLGkuYXR0cihcInN0eWxlXCIsayksaS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxmPSEwLGMmJmMuY3NzKFwib3ZlcmZsb3dcIixcIlwiKX19KSxhKFwiLm1hdGVyaWFsYm94LWNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmgscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSl9aWYoIWEodGhpcykuaGFzQ2xhc3MoXCJpbml0aWFsaXplZFwiKSl7YSh0aGlzKS5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpO3ZhciBjLGQsZT0hMSxmPSEwLGc9Mjc1LGg9MjAwLGk9YSh0aGlzKSxqPWEoXCI8ZGl2PjwvZGl2PlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGs9aS5hdHRyKFwic3R5bGVcIik7aS53cmFwKGopLGkub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7dmFyIGg9aS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIiksaj13aW5kb3cuaW5uZXJXaWR0aCxrPXdpbmRvdy5pbm5lckhlaWdodCxsPWkud2lkdGgoKSxtPWkuaGVpZ2h0KCk7aWYoZj09PSExKXJldHVybiBiKCksITE7aWYoZSYmZj09PSEwKXJldHVybiBiKCksITE7Zj0hMSxpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGU9ITAsaC5jc3Moe3dpZHRoOmhbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsaGVpZ2h0OmhbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LHBvc2l0aW9uOlwicmVsYXRpdmVcIix0b3A6MCxsZWZ0OjB9KSxjPXZvaWQgMCxkPWhbMF0ucGFyZW50Tm9kZTtmb3IoO251bGwhPT1kJiYhYShkKS5pcyhkb2N1bWVudCk7KXt2YXIgbj1hKGQpO1widmlzaWJsZVwiIT09bi5jc3MoXCJvdmVyZmxvd1wiKSYmKG4uY3NzKFwib3ZlcmZsb3dcIixcInZpc2libGVcIiksYz12b2lkIDA9PT1jP246Yy5hZGQobikpLGQ9ZC5wYXJlbnROb2RlfWkuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsXCJ6LWluZGV4XCI6MWUzLFwid2lsbC1jaGFuZ2VcIjpcImxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFwifSkuZGF0YShcIndpZHRoXCIsbCkuZGF0YShcImhlaWdodFwiLG0pO3ZhciBvPWEoJzxkaXYgaWQ9XCJtYXRlcmlhbGJveC1vdmVybGF5XCI+PC9kaXY+JykuY3NzKHtvcGFjaXR5OjB9KS5jbGljayhmdW5jdGlvbigpe2Y9PT0hMCYmYigpfSk7aS5iZWZvcmUobyk7dmFyIHA9b1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihvLmNzcyh7d2lkdGg6aixoZWlnaHQ6ayxsZWZ0Oi0xKnAubGVmdCx0b3A6LTEqcC50b3B9KSxvLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxcIlwiIT09aS5kYXRhKFwiY2FwdGlvblwiKSl7dmFyIHE9YSgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsYm94LWNhcHRpb25cIj48L2Rpdj4nKTtxLnRleHQoaS5kYXRhKFwiY2FwdGlvblwiKSksYShcImJvZHlcIikuYXBwZW5kKHEpLHEuY3NzKHtkaXNwbGF5OlwiaW5saW5lXCJ9KSxxLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX12YXIgcj0wLHM9bC9qLHQ9bS9rLHU9MCx2PTA7cz50PyhyPW0vbCx1PS45Kmosdj0uOSpqKnIpOihyPWwvbSx1PS45Kmsqcix2PS45KmspLGkuaGFzQ2xhc3MoXCJyZXNwb25zaXZlLWltZ1wiKT9pLnZlbG9jaXR5KHtcIm1heC13aWR0aFwiOnUsd2lkdGg6bH0se2R1cmF0aW9uOjAscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtpLmNzcyh7bGVmdDowLHRvcDowfSkudmVsb2NpdHkoe2hlaWdodDp2LHdpZHRoOnUsbGVmdDphKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkrai8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLmxlZnQtdS8yLHRvcDphKGRvY3VtZW50KS5zY3JvbGxUb3AoKStrLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkudG9wLXYvMn0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2Y9ITB9fSl9fSk6aS5jc3MoXCJsZWZ0XCIsMCkuY3NzKFwidG9wXCIsMCkudmVsb2NpdHkoe2hlaWdodDp2LHdpZHRoOnUsbGVmdDphKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkrai8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLmxlZnQtdS8yLHRvcDphKGRvY3VtZW50KS5zY3JvbGxUb3AoKStrLzItaS5wYXJlbnQoXCIubWF0ZXJpYWwtcGxhY2Vob2xkZXJcIikub2Zmc2V0KCkudG9wLXYvMn0se2R1cmF0aW9uOmcscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2Y9ITB9fSl9KSxhKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7ZSYmYigpfSksYShkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oYSl7Mjc9PT1hLmtleUNvZGUmJmY9PT0hMCYmZSYmYigpfSl9fSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5tYXRlcmlhbGJveGVkXCIpLm1hdGVyaWFsYm94KCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnBhcmFsbGF4PWZ1bmN0aW9uKCl7dmFyIGI9YSh3aW5kb3cpLndpZHRoKCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGMpe3ZhciBkO2Q9Yjw2MDE/ZS5oZWlnaHQoKT4wP2UuaGVpZ2h0KCk6ZS5jaGlsZHJlbihcImltZ1wiKS5oZWlnaHQoKTplLmhlaWdodCgpPjA/ZS5oZWlnaHQoKTo1MDA7dmFyIGY9ZS5jaGlsZHJlbihcImltZ1wiKS5maXJzdCgpLGc9Zi5oZWlnaHQoKSxoPWctZCxpPWUub2Zmc2V0KCkudG9wK2Qsaj1lLm9mZnNldCgpLnRvcCxrPWEod2luZG93KS5zY3JvbGxUb3AoKSxsPXdpbmRvdy5pbm5lckhlaWdodCxtPWsrbCxuPShtLWopLyhkK2wpLG89TWF0aC5yb3VuZChoKm4pO2MmJmYuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIiksaT5rJiZqPGsrbCYmZi5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZTNEKC01MCUsXCIrbytcInB4LCAwKVwiKX12YXIgZT1hKHRoaXMpO2UuYWRkQ2xhc3MoXCJwYXJhbGxheFwiKSxlLmNoaWxkcmVuKFwiaW1nXCIpLm9uZShcImxvYWRcIixmdW5jdGlvbigpe2QoITApfSkuZWFjaChmdW5jdGlvbigpe3RoaXMuY29tcGxldGUmJmEodGhpcykudHJpZ2dlcihcImxvYWRcIil9KSxhKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7Yj1hKHdpbmRvdykud2lkdGgoKSxkKCExKX0pLGEod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtiPWEod2luZG93KS53aWR0aCgpLGQoITEpfSl9KX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e29uU2hvdzpudWxsLHN3aXBlYWJsZTohMSxyZXNwb25zaXZlVGhyZXNob2xkOjEvMH07Yj1hLmV4dGVuZChjLGIpO3ZhciBkPU1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKGEodGhpcykpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGUsZixnLGgsaSxqPWQrYyxrPWEodGhpcyksbD1hKHdpbmRvdykud2lkdGgoKSxtPWsuZmluZChcImxpLnRhYiBhXCIpLG49ay53aWR0aCgpLG89YSgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxxPXByZXZfaW5kZXg9MCxyPSExLHM9MzAwLHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguY2VpbChuLWEucG9zaXRpb24oKS5sZWZ0LWEub3V0ZXJXaWR0aCgpLWsuc2Nyb2xsTGVmdCgpKX0sdT1mdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5mbG9vcihhLnBvc2l0aW9uKCkubGVmdCtrLnNjcm9sbExlZnQoKSl9LHY9ZnVuY3Rpb24oYSl7cS1hPj0wPyhoLnZlbG9jaXR5KHtyaWdodDp0KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaC52ZWxvY2l0eSh7bGVmdDp1KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGRlbGF5OjkwfSkpOihoLnZlbG9jaXR5KHtsZWZ0OnUoZSl9LHtkdXJhdGlvbjpzLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxoLnZlbG9jaXR5KHtyaWdodDp0KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGRlbGF5OjkwfSkpfTtiLnN3aXBlYWJsZSYmbD5iLnJlc3BvbnNpdmVUaHJlc2hvbGQmJihiLnN3aXBlYWJsZT0hMSksZT1hKG0uZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpLDA9PT1lLmxlbmd0aCYmKGU9YSh0aGlzKS5maW5kKFwibGkudGFiIGEuYWN0aXZlXCIpLmZpcnN0KCkpLDA9PT1lLmxlbmd0aCYmKGU9YSh0aGlzKS5maW5kKFwibGkudGFiIGFcIikuZmlyc3QoKSksZS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxxPW0uaW5kZXgoZSkscTwwJiYocT0wKSx2b2lkIDAhPT1lWzBdJiYoZj1hKGVbMF0uaGFzaCksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSksay5maW5kKFwiLmluZGljYXRvclwiKS5sZW5ndGh8fGsuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+JyksaD1rLmZpbmQoXCIuaW5kaWNhdG9yXCIpLGsuYXBwZW5kKGgpLGsuaXMoXCI6dmlzaWJsZVwiKSYmc2V0VGltZW91dChmdW5jdGlvbigpe2guY3NzKHtyaWdodDp0KGUpfSksaC5jc3Moe2xlZnQ6dShlKX0pfSwwKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnRhYnMtXCIraikub24oXCJyZXNpemUudGFicy1cIitqLGZ1bmN0aW9uKCl7bj1rLndpZHRoKCkscD1NYXRoLm1heChuLGtbMF0uc2Nyb2xsV2lkdGgpL20ubGVuZ3RoLHE8MCYmKHE9MCksMCE9PXAmJjAhPT1uJiYoaC5jc3Moe3JpZ2h0OnQoZSl9KSxoLmNzcyh7bGVmdDp1KGUpfSkpfSksYi5zd2lwZWFibGU/KG0uZWFjaChmdW5jdGlvbigpe3ZhciBiPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKTtiLmFkZENsYXNzKFwiY2Fyb3VzZWwtaXRlbVwiKSxvPW8uYWRkKGIpfSksZz1vLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnQgY2Fyb3VzZWxcIj48L2Rpdj4nKSxvLmNzcyhcImRpc3BsYXlcIixcIlwiKSxhKFwiLnRhYnMtY29udGVudC5jYXJvdXNlbFwiKS5jYXJvdXNlbCh7ZnVsbFdpZHRoOiEwLG5vV3JhcDohMCxvbkN5Y2xlVG86ZnVuY3Rpb24oYSl7aWYoIXIpe3ZhciBiPXE7cT1nLmluZGV4KGEpLGU9bS5lcShxKSx2KGIpfX19KSk6bS5ub3QoZSkuZWFjaChmdW5jdGlvbigpe2EoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5oaWRlKCl9KSxrLm9mZihcImNsaWNrLnRhYnNcIikub24oXCJjbGljay50YWJzXCIsXCJhXCIsZnVuY3Rpb24oYyl7aWYoYSh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKXJldHVybiB2b2lkIGMucHJldmVudERlZmF1bHQoKTtpZighYSh0aGlzKS5hdHRyKFwidGFyZ2V0XCIpKXtyPSEwLG49ay53aWR0aCgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBkPWY7ZT1hKHRoaXMpLGY9YShNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLG09ay5maW5kKFwibGkudGFiIGFcIik7ZS5wb3NpdGlvbigpO2UuYWRkQ2xhc3MoXCJhY3RpdmVcIikscHJldl9pbmRleD1xLHE9bS5pbmRleChhKHRoaXMpKSxxPDAmJihxPTApLGIuc3dpcGVhYmxlP28ubGVuZ3RoJiZvLmNhcm91c2VsKFwic2V0XCIscSk6KHZvaWQgMCE9PWYmJihmLnNob3coKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGIub25TaG93JiZiLm9uU2hvdy5jYWxsKHRoaXMsZikpLHZvaWQgMD09PWR8fGQuaXMoZil8fChkLmhpZGUoKSxkLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpKSksaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cj0hMX0scyksdihwcmV2X2luZGV4KSxjLnByZXZlbnREZWZhdWx0KCl9fSl9KX0sc2VsZWN0X3RhYjpmdW5jdGlvbihhKXt0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnK2ErJ1wiXScpLnRyaWdnZXIoXCJjbGlja1wiKX19O2EuZm4udGFicz1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFic1wiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCJ1bC50YWJzXCIpLnRhYnMoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4udG9vbHRpcD1mdW5jdGlvbihjKXt2YXIgZD01LGU9e2RlbGF5OjM1MCx0b29sdGlwOlwiXCIscG9zaXRpb246XCJib3R0b21cIixodG1sOiExfTtyZXR1cm5cInJlbW92ZVwiPT09Yz8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YShcIiNcIithKHRoaXMpLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikpLnJlbW92ZSgpLGEodGhpcykub2ZmKFwibW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcFwiKX0pLCExKTooYz1hLmV4dGVuZChlLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPU1hdGVyaWFsaXplLmd1aWQoKSxmPWEodGhpcyk7Zi5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpJiZhKFwiI1wiK2YuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSkucmVtb3ZlKCksZi5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIsZSk7dmFyIGcsaCxpLGosayxsLG09ZnVuY3Rpb24oKXtnPWYuYXR0cihcImRhdGEtaHRtbFwiKT9cInRydWVcIj09PWYuYXR0cihcImRhdGEtaHRtbFwiKTpjLmh0bWwsaD1mLmF0dHIoXCJkYXRhLWRlbGF5XCIpLGg9dm9pZCAwPT09aHx8XCJcIj09PWg/Yy5kZWxheTpoLGk9Zi5hdHRyKFwiZGF0YS1wb3NpdGlvblwiKSxpPXZvaWQgMD09PWl8fFwiXCI9PT1pP2MucG9zaXRpb246aSxqPWYuYXR0cihcImRhdGEtdG9vbHRpcFwiKSxqPXZvaWQgMD09PWp8fFwiXCI9PT1qP2MudG9vbHRpcDpqfTttKCk7dmFyIG49ZnVuY3Rpb24oKXt2YXIgYj1hKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiPjwvZGl2PicpO3JldHVybiBqPWc/YShcIjxzcGFuPjwvc3Bhbj5cIikuaHRtbChqKTphKFwiPHNwYW4+PC9zcGFuPlwiKS50ZXh0KGopLGIuYXBwZW5kKGopLmFwcGVuZFRvKGEoXCJib2R5XCIpKS5hdHRyKFwiaWRcIixlKSxsPWEoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpLGwuYXBwZW5kVG8oYiksYn07az1uKCksZi5vZmYoXCJtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwXCIpO3ZhciBvLHA9ITE7Zi5vbih7XCJtb3VzZWVudGVyLnRvb2x0aXBcIjpmdW5jdGlvbihhKXt2YXIgYz1mdW5jdGlvbigpe20oKSxwPSEwLGsudmVsb2NpdHkoXCJzdG9wXCIpLGwudmVsb2NpdHkoXCJzdG9wXCIpLGsuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwiLGxlZnQ6XCIwcHhcIix0b3A6XCIwcHhcIn0pO3ZhciBhLGMsZSxnPWYub3V0ZXJXaWR0aCgpLGg9Zi5vdXRlckhlaWdodCgpLGo9ay5vdXRlckhlaWdodCgpLG49ay5vdXRlcldpZHRoKCksbz1cIjBweFwiLHE9XCIwcHhcIixyPWxbMF0ub2Zmc2V0V2lkdGgscz1sWzBdLm9mZnNldEhlaWdodCx0PTgsdT04LHY9MDtcInRvcFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcC1qLWQsYz1mLm9mZnNldCgpLmxlZnQrZy8yLW4vMixlPWIoYyxhLG4saiksbz1cIi0xMHB4XCIsbC5jc3Moe2JvdHRvbTowLGxlZnQ6MCxib3JkZXJSYWRpdXM6XCIxNHB4IDE0cHggMCAwXCIsdHJhbnNmb3JtT3JpZ2luOlwiNTAlIDEwMCVcIixtYXJnaW5Ub3A6aixtYXJnaW5MZWZ0Om4vMi1yLzJ9KSk6XCJsZWZ0XCI9PT1pPyhhPWYub2Zmc2V0KCkudG9wK2gvMi1qLzIsYz1mLm9mZnNldCgpLmxlZnQtbi1kLGU9YihjLGEsbixqKSxxPVwiLTEwcHhcIixsLmNzcyh7dG9wOlwiLTdweFwiLHJpZ2h0OjAsd2lkdGg6XCIxNHB4XCIsaGVpZ2h0OlwiMTRweFwiLGJvcmRlclJhZGl1czpcIjE0cHggMCAwIDE0cHhcIix0cmFuc2Zvcm1PcmlnaW46XCI5NSUgNTAlXCIsbWFyZ2luVG9wOmovMixtYXJnaW5MZWZ0Om59KSk6XCJyaWdodFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcCtoLzItai8yLGM9Zi5vZmZzZXQoKS5sZWZ0K2crZCxlPWIoYyxhLG4saikscT1cIisxMHB4XCIsbC5jc3Moe3RvcDpcIi03cHhcIixsZWZ0OjAsd2lkdGg6XCIxNHB4XCIsaGVpZ2h0OlwiMTRweFwiLGJvcmRlclJhZGl1czpcIjAgMTRweCAxNHB4IDBcIix0cmFuc2Zvcm1PcmlnaW46XCI1JSA1MCVcIixtYXJnaW5Ub3A6ai8yLG1hcmdpbkxlZnQ6XCIwcHhcIn0pKTooYT1mLm9mZnNldCgpLnRvcCtmLm91dGVySGVpZ2h0KCkrZCxjPWYub2Zmc2V0KCkubGVmdCtnLzItbi8yLGU9YihjLGEsbixqKSxvPVwiKzEwcHhcIixsLmNzcyh7dG9wOjAsbGVmdDowLG1hcmdpbkxlZnQ6bi8yLXIvMn0pKSxrLmNzcyh7dG9wOmUueSxsZWZ0OmUueH0pLHQ9TWF0aC5TUVJUMipuL3BhcnNlSW50KHIpLHU9TWF0aC5TUVJUMipqL3BhcnNlSW50KHMpLHY9TWF0aC5tYXgodCx1KSxrLnZlbG9jaXR5KHt0cmFuc2xhdGVZOm8sdHJhbnNsYXRlWDpxfSx7ZHVyYXRpb246MzUwLHF1ZXVlOiExfSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxkZWxheTo1MCxxdWV1ZTohMX0pLGwuY3NzKHt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjU1LGRlbGF5OjAscXVldWU6ITF9KS52ZWxvY2l0eSh7c2NhbGVYOnYsc2NhbGVZOnZ9LHtkdXJhdGlvbjozMDAsZGVsYXk6MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlSW5PdXRRdWFkXCJ9KX07bz1zZXRUaW1lb3V0KGMsaCl9LFwibW91c2VsZWF2ZS50b29sdGlwXCI6ZnVuY3Rpb24oKXtwPSExLGNsZWFyVGltZW91dChvKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cCE9PSEwJiYoay52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVk6MCx0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjoyMjUscXVldWU6ITF9KSxsLnZlbG9jaXR5KHtvcGFjaXR5OjAsc2NhbGVYOjEsc2NhbGVZOjF9LHtkdXJhdGlvbjoyMjUscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtsLmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwifSksay5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLHA9ITF9fSkpfSwyMjUpfX0pfSkpfTt2YXIgYj1mdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1iLGc9YztyZXR1cm4gZjwwP2Y9NDpmK2Q+d2luZG93LmlubmVyV2lkdGgmJihmLT1mK2Qtd2luZG93LmlubmVyV2lkdGgpLGc8MD9nPTQ6ZytlPndpbmRvdy5pbm5lckhlaWdodCthKHdpbmRvdykuc2Nyb2xsVG9wJiYoZy09ZytlLXdpbmRvdy5pbm5lckhlaWdodCkse3g6Zix5Omd9fTthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIudG9vbHRpcHBlZFwiKS50b29sdGlwKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEpe3JldHVybiBudWxsIT09YSYmYT09PWEud2luZG93fWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGIoYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31mdW5jdGlvbiBkKGEpe3ZhciBiLGQsZT17dG9wOjAsbGVmdDowfSxmPWEmJmEub3duZXJEb2N1bWVudDtyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QmJihlPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGQ9YyhmKSx7dG9wOmUudG9wK2QucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrZC5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9fWZ1bmN0aW9uIGUoYSl7dmFyIGI9XCJcIjtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYis9YytcIjpcIithW2NdK1wiO1wiKTtyZXR1cm4gYn1mdW5jdGlvbiBmKGEpe2lmKGsuYWxsb3dFdmVudChhKT09PSExKXJldHVybiBudWxsO2Zvcih2YXIgYj1udWxsLGM9YS50YXJnZXR8fGEuc3JjRWxlbWVudDtudWxsIT09Yy5wYXJlbnRFbGVtZW50Oyl7aWYoIShjIGluc3RhbmNlb2YgU1ZHRWxlbWVudHx8Yy5jbGFzc05hbWUuaW5kZXhPZihcIndhdmVzLWVmZmVjdFwiKT09PS0xKSl7Yj1jO2JyZWFrfWlmKGMuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2F2ZXMtZWZmZWN0XCIpKXtiPWM7YnJlYWt9Yz1jLnBhcmVudEVsZW1lbnR9cmV0dXJuIGJ9ZnVuY3Rpb24gZyhiKXt2YXIgYz1mKGIpO251bGwhPT1jJiYoai5zaG93KGIsYyksXCJvbnRvdWNoc3RhcnRcImluIGEmJihjLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGouaGlkZSwhMSksYy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIixqLmhpZGUsITEpKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsai5oaWRlLCExKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsai5oaWRlLCExKSl9dmFyIGg9aHx8e30saT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpLGo9e2R1cmF0aW9uOjc1MCxzaG93OmZ1bmN0aW9uKGEsYil7aWYoMj09PWEuYnV0dG9uKXJldHVybiExO3ZhciBjPWJ8fHRoaXMsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuY2xhc3NOYW1lPVwid2F2ZXMtcmlwcGxlXCIsYy5hcHBlbmRDaGlsZChmKTt2YXIgZz1kKGMpLGg9YS5wYWdlWS1nLnRvcCxpPWEucGFnZVgtZy5sZWZ0LGs9XCJzY2FsZShcIitjLmNsaWVudFdpZHRoLzEwMCoxMCtcIilcIjtcInRvdWNoZXNcImluIGEmJihoPWEudG91Y2hlc1swXS5wYWdlWS1nLnRvcCxpPWEudG91Y2hlc1swXS5wYWdlWC1nLmxlZnQpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIsRGF0ZS5ub3coKSksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjYWxlXCIsayksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIixpKSxmLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLGgpO3ZhciBsPXt0b3A6aCtcInB4XCIsbGVmdDppK1wicHhcIn07Zi5jbGFzc05hbWU9Zi5jbGFzc05hbWUrXCIgd2F2ZXMtbm90cmFuc2l0aW9uXCIsZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUobCkpLGYuY2xhc3NOYW1lPWYuY2xhc3NOYW1lLnJlcGxhY2UoXCJ3YXZlcy1ub3RyYW5zaXRpb25cIixcIlwiKSxsW1wiLXdlYmtpdC10cmFuc2Zvcm1cIl09ayxsW1wiLW1vei10cmFuc2Zvcm1cIl09ayxsW1wiLW1zLXRyYW5zZm9ybVwiXT1rLGxbXCItby10cmFuc2Zvcm1cIl09ayxsLnRyYW5zZm9ybT1rLGwub3BhY2l0eT1cIjFcIixsW1wiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcInRyYW5zaXRpb24tZHVyYXRpb25cIl09ai5kdXJhdGlvbitcIm1zXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixmLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZShsKSl9LGhpZGU6ZnVuY3Rpb24oYSl7ay50b3VjaHVwKGEpO3ZhciBiPXRoaXMsYz0oMS40KmIuY2xpZW50V2lkdGgsbnVsbCksZD1iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3YXZlcy1yaXBwbGVcIik7aWYoIShkLmxlbmd0aD4wKSlyZXR1cm4hMTtjPWRbZC5sZW5ndGgtMV07dmFyIGY9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiksZz1jLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSxoPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiKSxpPURhdGUubm93KCktTnVtYmVyKGMuZ2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIpKSxsPTM1MC1pO2w8MCYmKGw9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPXt0b3A6ZytcInB4XCIsbGVmdDpmK1wicHhcIixvcGFjaXR5OlwiMFwiLFwiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcInRyYW5zaXRpb24tZHVyYXRpb25cIjpqLmR1cmF0aW9uK1wibXNcIixcIi13ZWJraXQtdHJhbnNmb3JtXCI6aCxcIi1tb3otdHJhbnNmb3JtXCI6aCxcIi1tcy10cmFuc2Zvcm1cIjpoLFwiLW8tdHJhbnNmb3JtXCI6aCx0cmFuc2Zvcm06aH07Yy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUoYSkpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cnl7Yi5yZW1vdmVDaGlsZChjKX1jYXRjaChhKXtyZXR1cm4hMX19LGouZHVyYXRpb24pfSxsKX0sd3JhcElucHV0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKFwiaW5wdXRcIj09PWMudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgZD1jLnBhcmVudE5vZGU7aWYoXCJpXCI9PT1kLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmZC5jbGFzc05hbWUuaW5kZXhPZihcIndhdmVzLWVmZmVjdFwiKSE9PS0xKWNvbnRpbnVlO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO2UuY2xhc3NOYW1lPWMuY2xhc3NOYW1lK1wiIHdhdmVzLWlucHV0LXdyYXBwZXJcIjt2YXIgZj1jLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO2Z8fChmPVwiXCIpLGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixmKSxjLmNsYXNzTmFtZT1cIndhdmVzLWJ1dHRvbi1pbnB1dFwiLGMucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZC5yZXBsYWNlQ2hpbGQoZSxjKSxlLmFwcGVuZENoaWxkKGMpfX19fSxrPXt0b3VjaGVzOjAsYWxsb3dFdmVudDpmdW5jdGlvbihhKXt2YXIgYj0hMDtyZXR1cm5cInRvdWNoc3RhcnRcIj09PWEudHlwZT9rLnRvdWNoZXMrPTE6XCJ0b3VjaGVuZFwiPT09YS50eXBlfHxcInRvdWNoY2FuY2VsXCI9PT1hLnR5cGU/c2V0VGltZW91dChmdW5jdGlvbigpe2sudG91Y2hlcz4wJiYoay50b3VjaGVzLT0xKX0sNTAwKTpcIm1vdXNlZG93blwiPT09YS50eXBlJiZrLnRvdWNoZXM+MCYmKGI9ITEpLGJ9LHRvdWNodXA6ZnVuY3Rpb24oYSl7ay5hbGxvd0V2ZW50KGEpfX07aC5kaXNwbGF5RWZmZWN0PWZ1bmN0aW9uKGIpe2I9Ynx8e30sXCJkdXJhdGlvblwiaW4gYiYmKGouZHVyYXRpb249Yi5kdXJhdGlvbiksai53cmFwSW5wdXQoaShcIi53YXZlcy1lZmZlY3RcIikpLFwib250b3VjaHN0YXJ0XCJpbiBhJiZkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZywhMSl9LGguYXR0YWNoPWZ1bmN0aW9uKGIpe1wiaW5wdXRcIj09PWIudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYoai53cmFwSW5wdXQoW2JdKSxiPWIucGFyZW50RWxlbWVudCksXCJvbnRvdWNoc3RhcnRcImluIGEmJmIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixnLCExKX0sYS5XYXZlcz1oLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtoLmRpc3BsYXlFZmZlY3QoKX0sITEpfSh3aW5kb3cpLE1hdGVyaWFsaXplLnRvYXN0PWZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihiLmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKSxjKWZvcih2YXIgZT1jLnNwbGl0KFwiIFwiKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWIuY2xhc3NMaXN0LmFkZChlW2ZdKTsoXCJvYmplY3RcIj09dHlwZW9mIEhUTUxFbGVtZW50P2EgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDphJiZcIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9PWEmJjE9PT1hLm5vZGVUeXBlJiZcInN0cmluZ1wiPT10eXBlb2YgYS5ub2RlTmFtZSk/Yi5hcHBlbmRDaGlsZChhKTphIGluc3RhbmNlb2YgalF1ZXJ5P2IuYXBwZW5kQ2hpbGQoYVswXSk6Yi5pbm5lckhUTUw9YTt2YXIgaD1uZXcgSGFtbWVyKGIse3ByZXZlbnRfZGVmYXVsdDohMX0pO3JldHVybiBoLm9uKFwicGFuXCIsZnVuY3Rpb24oYSl7dmFyIGM9YS5kZWx0YVgsZD04MDtiLmNsYXNzTGlzdC5jb250YWlucyhcInBhbm5pbmdcIil8fGIuY2xhc3NMaXN0LmFkZChcInBhbm5pbmdcIik7dmFyIGU9MS1NYXRoLmFicyhjL2QpO2U8MCYmKGU9MCksVmVsKGIse2xlZnQ6YyxvcGFjaXR5OmV9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9KSxoLm9uKFwicGFuZW5kXCIsZnVuY3Rpb24oYSl7dmFyIGM9YS5kZWx0YVgsZT04MDtNYXRoLmFicyhjKT5lP1ZlbChiLHttYXJnaW5Ub3A6XCItNDBweFwifSx7ZHVyYXRpb246Mzc1LGVhc2luZzpcImVhc2VPdXRFeHBvXCIscXVldWU6ITEsY29tcGxldGU6ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZkKCksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfX0pOihiLmNsYXNzTGlzdC5yZW1vdmUoXCJwYW5uaW5nXCIpLFZlbChiLHtsZWZ0OjAsb3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRFeHBvXCIscXVldWU6ITF9KSl9KSxifWM9Y3x8XCJcIjt2YXIgZj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvYXN0LWNvbnRhaW5lclwiKTtudWxsPT09ZiYmKGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmLmlkPVwidG9hc3QtY29udGFpbmVyXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKSk7dmFyIGc9ZShhKTthJiZmLmFwcGVuZENoaWxkKGcpLGcuc3R5bGUub3BhY2l0eT0wLFZlbChnLHt0cmFuc2xhdGVZOlwiLTM1cHhcIixvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIscXVldWU6ITF9KTt2YXIgaCxpPWI7bnVsbCE9aSYmKGg9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtudWxsPT09Zy5wYXJlbnROb2RlJiZ3aW5kb3cuY2xlYXJJbnRlcnZhbChoKSxnLmNsYXNzTGlzdC5jb250YWlucyhcInBhbm5pbmdcIil8fChpLT0yMCksaTw9MCYmKFZlbChnLHtvcGFjaXR5OjAsbWFyZ2luVG9wOlwiLTQwcHhcIn0se2R1cmF0aW9uOjM3NSxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCgpLHRoaXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzWzBdKX19KSx3aW5kb3cuY2xlYXJJbnRlcnZhbChoKSl9LDIwKSl9LGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXttZW51V2lkdGg6MzAwLGVkZ2U6XCJsZWZ0XCIsY2xvc2VPbkNsaWNrOiExLGRyYWdnYWJsZTohMH07Yj1hLmV4dGVuZChjLGIpLGEodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSxlPWEoXCIjXCIrZCk7MzAwIT1iLm1lbnVXaWR0aCYmZS5jc3MoXCJ3aWR0aFwiLGIubWVudVdpZHRoKTt2YXIgZj1hKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJytkKydcIl0nKTtiLmRyYWdnYWJsZT8oZi5sZW5ndGgmJmYucmVtb3ZlKCksZj1hKCc8ZGl2IGNsYXNzPVwiZHJhZy10YXJnZXRcIj48L2Rpdj4nKS5hdHRyKFwiZGF0YS1zaWRlbmF2XCIsZCksYShcImJvZHlcIikuYXBwZW5kKGYpKTpmPWEoKSxcImxlZnRcIj09Yi5lZGdlPyhlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgtMTAwJSlcIiksZi5jc3Moe2xlZnQ6MH0pKTooZS5hZGRDbGFzcyhcInJpZ2h0LWFsaWduZWRcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDEwMCUpXCIpLGYuY3NzKHtyaWdodDowfSkpLGUuaGFzQ2xhc3MoXCJmaXhlZFwiKSYmd2luZG93LmlubmVyV2lkdGg+OTkyJiZlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgwKVwiKSxlLmhhc0NsYXNzKFwiZml4ZWRcIikmJmEod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXt3aW5kb3cuaW5uZXJXaWR0aD45OTI/MCE9PWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLmxlbmd0aCYmaT9nKCEwKTplLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgwJSlcIik6aT09PSExJiYoXCJsZWZ0XCI9PT1iLmVkZ2U/ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoLTEwMCUpXCIpOmUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKDEwMCUpXCIpKX0pLGIuY2xvc2VPbkNsaWNrPT09ITAmJmUub24oXCJjbGljay5pdGVtY2xpY2tcIixcImE6bm90KC5jb2xsYXBzaWJsZS1oZWFkZXIpXCIsZnVuY3Rpb24oKXtnKCl9KTt2YXIgZz1mdW5jdGlvbihjKXtoPSExLGk9ITEsYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxhKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pLFwibGVmdFwiPT09Yi5lZGdlPyhmLmNzcyh7d2lkdGg6XCJcIixyaWdodDpcIlwiLGxlZnQ6XCIwXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiLTEwMCVcIn0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2M9PT0hMCYmKGUucmVtb3ZlQXR0cihcInN0eWxlXCIpLGUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCkpfX0pKTooZi5jc3Moe3dpZHRoOlwiXCIscmlnaHQ6XCIwXCIsbGVmdDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIjEwMCVcIn0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe2M9PT0hMCYmKGUucmVtb3ZlQXR0cihcInN0eWxlXCIpLGUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCkpfX0pKX0saD0hMSxpPSExO2IuZHJhZ2dhYmxlJiYoZi5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtpJiZnKCl9KSxmLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGMpe2lmKFwidG91Y2hcIj09Yy5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZD0oYy5nZXN0dXJlLmRpcmVjdGlvbixjLmdlc3R1cmUuY2VudGVyLngpLGY9KGMuZ2VzdHVyZS5jZW50ZXIueSxjLmdlc3R1cmUudmVsb2NpdHlYLGEoXCJib2R5XCIpKSxoPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGo9Zi5pbm5lcldpZHRoKCk7aWYoZi5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGYud2lkdGgoaiksMD09PWgubGVuZ3RoJiYoaD1hKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+JyksaC5jc3MoXCJvcGFjaXR5XCIsMCkuY2xpY2soZnVuY3Rpb24oKXtnKCl9KSxhKFwiYm9keVwiKS5hcHBlbmQoaCkpLFwibGVmdFwiPT09Yi5lZGdlJiYoZD5iLm1lbnVXaWR0aD9kPWIubWVudVdpZHRoOmQ8MCYmKGQ9MCkpLFwibGVmdFwiPT09Yi5lZGdlKWQ8Yi5tZW51V2lkdGgvMj9pPSExOmQ+PWIubWVudVdpZHRoLzImJihpPSEwKSxlLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIisoZC1iLm1lbnVXaWR0aCkrXCJweClcIik7ZWxzZXtkPHdpbmRvdy5pbm5lcldpZHRoLWIubWVudVdpZHRoLzI/aT0hMDpkPj13aW5kb3cuaW5uZXJXaWR0aC1iLm1lbnVXaWR0aC8yJiYoaT0hMSk7dmFyIGs9ZC1iLm1lbnVXaWR0aC8yO2s8MCYmKGs9MCksZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoXCIraytcInB4KVwiKX12YXIgbDtcImxlZnRcIj09PWIuZWRnZT8obD1kL2IubWVudVdpZHRoLGgudmVsb2NpdHkoe29wYWNpdHk6bH0se2R1cmF0aW9uOjEwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSk6KGw9TWF0aC5hYnMoKGQtd2luZG93LmlubmVyV2lkdGgpL2IubWVudVdpZHRoKSxoLnZlbG9jaXR5KHtvcGFjaXR5Omx9LHtkdXJhdGlvbjoxMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihjKXtpZihcInRvdWNoXCI9PWMuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGQ9YShcIiNzaWRlbmF2LW92ZXJsYXlcIiksZz1jLmdlc3R1cmUudmVsb2NpdHlYLGo9Yy5nZXN0dXJlLmNlbnRlci54LGs9ai1iLm1lbnVXaWR0aCxsPWotYi5tZW51V2lkdGgvMjtrPjAmJihrPTApLGw8MCYmKGw9MCksaD0hMSxcImxlZnRcIj09PWIuZWRnZT9pJiZnPD0uM3x8ZzwtLjU/KDAhPT1rJiZlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGtdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6MCxsZWZ0OlwiXCJ9KSxpPSEwKTooIWl8fGc+LjMpJiYoYShcImJvZHlcIikuY3NzKHtvdmVyZmxvdzpcIlwiLHdpZHRoOlwiXCJ9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlstMSpiLm1lbnVXaWR0aC0xMCxrXX0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pLGYuY3NzKHt3aWR0aDpcIjEwcHhcIixyaWdodDpcIlwiLGxlZnQ6MH0pKTppJiZnPj0tLjN8fGc+LjU/KDAhPT1sJiZlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGxdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6XCJcIixsZWZ0OjB9KSxpPSEwKTooIWl8fGc8LS4zKSYmKGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbYi5tZW51V2lkdGgrMTAsbF19LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxmLmNzcyh7d2lkdGg6XCIxMHB4XCIscmlnaHQ6MCxsZWZ0OlwiXCJ9KSl9fSkpLGMub2ZmKFwiY2xpY2suc2lkZW5hdlwiKS5vbihcImNsaWNrLnNpZGVuYXZcIixmdW5jdGlvbigpe2lmKGk9PT0hMClpPSExLGg9ITEsZygpO2Vsc2V7dmFyIGM9YShcImJvZHlcIiksZD1hKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyksaj1jLmlubmVyV2lkdGgoKTtjLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksYy53aWR0aChqKSxhKFwiYm9keVwiKS5hcHBlbmQoZiksXCJsZWZ0XCI9PT1iLmVkZ2U/KGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OjAsbGVmdDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCwtMSpiLm1lbnVXaWR0aF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKTooZi5jc3Moe3dpZHRoOlwiNTAlXCIscmlnaHQ6XCJcIixsZWZ0OjB9KSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlswLGIubWVudVdpZHRoXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpLGQuY3NzKFwib3BhY2l0eVwiLDApLmNsaWNrKGZ1bmN0aW9uKCl7aT0hMSxoPSExLGcoKSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSl9KSxhKFwiYm9keVwiKS5hcHBlbmQoZCksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtpPSEwLGg9ITF9fSl9cmV0dXJuITF9KX0pfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGI9YShcIiNzaWRlbmF2LW92ZXJsYXlcIiksYz1hKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJythKHRoaXMpLmF0dHIoXCJkYXRhLWFjdGl2YXRlc1wiKSsnXCJdJyk7Yi50cmlnZ2VyKFwiY2xpY2tcIiksYy5yZW1vdmUoKSxhKHRoaXMpLm9mZihcImNsaWNrXCIpLGIucmVtb3ZlKCl9LHNob3c6ZnVuY3Rpb24oKXt0aGlzLnRyaWdnZXIoXCJjbGlja1wiKX0saGlkZTpmdW5jdGlvbigpe2EoXCIjc2lkZW5hdi1vdmVybGF5XCIpLnRyaWdnZXIoXCJjbGlja1wiKX19O2EuZm4uc2lkZU5hdj1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc2lkZU5hdlwiKTpiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIsYyxkLGUpe3ZhciBnPWEoKTtyZXR1cm4gYS5lYWNoKGYsZnVuY3Rpb24oYSxmKXtpZihmLmhlaWdodCgpPjApe3ZhciBoPWYub2Zmc2V0KCkudG9wLGk9Zi5vZmZzZXQoKS5sZWZ0LGo9aStmLndpZHRoKCksaz1oK2YuaGVpZ2h0KCksbD0hKGk+Y3x8ajxlfHxoPmR8fGs8Yik7bCYmZy5wdXNoKGYpfX0pLGd9ZnVuY3Rpb24gYyhjKXsrK2k7dmFyIGQ9ZS5zY3JvbGxUb3AoKSxmPWUuc2Nyb2xsTGVmdCgpLGg9ZitlLndpZHRoKCksaz1kK2UuaGVpZ2h0KCksbD1iKGQrai50b3ArY3x8MjAwLGgrai5yaWdodCxrK2ouYm90dG9tLGYrai5sZWZ0KTthLmVhY2gobCxmdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiKTtcIm51bWJlclwiIT10eXBlb2YgYyYmYi50cmlnZ2VySGFuZGxlcihcInNjcm9sbFNweTplbnRlclwiKSxiLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIixpKX0pLGEuZWFjaChnLGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIpO1wibnVtYmVyXCI9PXR5cGVvZiBjJiZjIT09aSYmKGIudHJpZ2dlckhhbmRsZXIoXCJzY3JvbGxTcHk6ZXhpdFwiKSxiLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIixudWxsKSl9KSxnPWx9ZnVuY3Rpb24gZCgpe2UudHJpZ2dlcihcInNjcm9sbFNweTp3aW5TaXplXCIpfXZhciBlPWEod2luZG93KSxmPVtdLGc9W10saD0hMSxpPTAsaj17dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9O2Euc2Nyb2xsU3B5PWZ1bmN0aW9uKGIsZCl7dmFyIGc9e3Rocm90dGxlOjEwMCxzY3JvbGxPZmZzZXQ6MjAwfTtkPWEuZXh0ZW5kKGcsZCk7dmFyIGk9W107Yj1hKGIpLGIuZWFjaChmdW5jdGlvbihiLGMpe2YucHVzaChhKGMpKSxhKGMpLmRhdGEoXCJzY3JvbGxTcHk6aWRcIixiKSxhKCdhW2hyZWY9XCIjJythKGMpLmF0dHIoXCJpZFwiKSsnXCJdJykuY2xpY2soZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBjPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5vZmZzZXQoKS50b3ArMTthKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6Yy1kLnNjcm9sbE9mZnNldH0se2R1cmF0aW9uOjQwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIn0pfSl9KSxqLnRvcD1kLm9mZnNldFRvcHx8MCxqLnJpZ2h0PWQub2Zmc2V0UmlnaHR8fDAsai5ib3R0b209ZC5vZmZzZXRCb3R0b218fDAsai5sZWZ0PWQub2Zmc2V0TGVmdHx8MDt2YXIgaz1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2MoZC5zY3JvbGxPZmZzZXQpfSxkLnRocm90dGxlfHwxMDApLGw9ZnVuY3Rpb24oKXthKGRvY3VtZW50KS5yZWFkeShrKX07cmV0dXJuIGh8fChlLm9uKFwic2Nyb2xsXCIsbCksZS5vbihcInJlc2l6ZVwiLGwpLGg9ITApLHNldFRpbWVvdXQobCwwKSxiLm9uKFwic2Nyb2xsU3B5OmVudGVyXCIsZnVuY3Rpb24oKXtpPWEuZ3JlcChpLGZ1bmN0aW9uKGEpe3JldHVybiAwIT1hLmhlaWdodCgpfSk7dmFyIGI9YSh0aGlzKTtpWzBdPyhhKCdhW2hyZWY9XCIjJytpWzBdLmF0dHIoXCJpZFwiKSsnXCJdJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYi5kYXRhKFwic2Nyb2xsU3B5OmlkXCIpPGlbMF0uZGF0YShcInNjcm9sbFNweTppZFwiKT9pLnVuc2hpZnQoYSh0aGlzKSk6aS5wdXNoKGEodGhpcykpKTppLnB1c2goYSh0aGlzKSksYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksYi5vbihcInNjcm9sbFNweTpleGl0XCIsZnVuY3Rpb24oKXtpZihpPWEuZ3JlcChpLGZ1bmN0aW9uKGEpe3JldHVybiAwIT1hLmhlaWdodCgpfSksaVswXSl7YSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO3ZhciBiPWEodGhpcyk7aT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gYS5hdHRyKFwiaWRcIikhPWIuYXR0cihcImlkXCIpfSksaVswXSYmYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpfX0pLGJ9LGEud2luU2l6ZVNweT1mdW5jdGlvbihiKXtyZXR1cm4gYS53aW5TaXplU3B5PWZ1bmN0aW9uKCl7cmV0dXJuIGV9LGI9Ynx8e3Rocm90dGxlOjEwMH0sZS5vbihcInJlc2l6ZVwiLE1hdGVyaWFsaXplLnRocm90dGxlKGQsYi50aHJvdHRsZXx8MTAwKSl9LGEuZm4uc2Nyb2xsU3B5PWZ1bmN0aW9uKGIpe3JldHVybiBhLnNjcm9sbFNweShhKHRoaXMpLGIpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7dmFyIGM9Yi5jc3MoXCJmb250LWZhbWlseVwiKSxkPWIuY3NzKFwiZm9udC1zaXplXCIpLGY9Yi5jc3MoXCJsaW5lLWhlaWdodFwiKTtkJiZlLmNzcyhcImZvbnQtc2l6ZVwiLGQpLGMmJmUuY3NzKFwiZm9udC1mYW1pbHlcIixjKSxmJiZlLmNzcyhcImxpbmUtaGVpZ2h0XCIsZiksXCJvZmZcIj09PWIuYXR0cihcIndyYXBcIikmJmUuY3NzKFwib3ZlcmZsb3ctd3JhcFwiLFwibm9ybWFsXCIpLmNzcyhcIndoaXRlLXNwYWNlXCIsXCJwcmVcIiksZS50ZXh0KGIudmFsKCkrXCJcXG5cIik7dmFyIGc9ZS5odG1sKCkucmVwbGFjZSgvXFxuL2csXCI8YnI+XCIpO2UuaHRtbChnKSxiLmlzKFwiOnZpc2libGVcIik/ZS5jc3MoXCJ3aWR0aFwiLGIud2lkdGgoKSk6ZS5jc3MoXCJ3aWR0aFwiLGEod2luZG93KS53aWR0aCgpLzIpLGIuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKTw9ZS5oZWlnaHQoKT9iLmNzcyhcImhlaWdodFwiLGUuaGVpZ2h0KCkpOmIudmFsKCkubGVuZ3RoPGIuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiKSYmYi5jc3MoXCJoZWlnaHRcIixiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIikpLGIuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiLGIudmFsKCkubGVuZ3RoKX1NYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzPWZ1bmN0aW9uKCl7dmFyIGI9XCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWFcIjthKGIpLmVhY2goZnVuY3Rpb24oYixjKXt2YXIgZD1hKHRoaXMpO2EoYykudmFsKCkubGVuZ3RoPjB8fGMuYXV0b2ZvY3VzfHx2b2lkIDAhPT1kLmF0dHIoXCJwbGFjZWhvbGRlclwiKT9kLnNpYmxpbmdzKFwibGFiZWxcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik6YShjKVswXS52YWxpZGl0eT9kLnNpYmxpbmdzKFwibGFiZWxcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIixhKGMpWzBdLnZhbGlkaXR5LmJhZElucHV0PT09ITApOmQuc2libGluZ3MoXCJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pfTt2YXIgYz1cImlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYVwiO2EoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsYyxmdW5jdGlvbigpezA9PT1hKHRoaXMpLnZhbCgpLmxlbmd0aCYmdm9pZCAwPT09YSh0aGlzKS5hdHRyKFwicGxhY2Vob2xkZXJcIil8fGEodGhpcykuc2libGluZ3MoXCJsYWJlbFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSx2YWxpZGF0ZV9maWVsZChhKHRoaXMpKX0pLGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7TWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcygpfSksYShkb2N1bWVudCkub24oXCJyZXNldFwiLGZ1bmN0aW9uKGIpe3ZhciBkPWEoYi50YXJnZXQpO2QuaXMoXCJmb3JtXCIpJiYoZC5maW5kKGMpLnJlbW92ZUNsYXNzKFwidmFsaWRcIikucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLGQuZmluZChjKS5lYWNoKGZ1bmN0aW9uKCl7XCJcIj09PWEodGhpcykuYXR0cihcInZhbHVlXCIpJiZhKHRoaXMpLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxkLmZpbmQoXCJzZWxlY3QuaW5pdGlhbGl6ZWRcIikuZWFjaChmdW5jdGlvbigpe3ZhciBhPWQuZmluZChcIm9wdGlvbltzZWxlY3RlZF1cIikudGV4dCgpO2Quc2libGluZ3MoXCJpbnB1dC5zZWxlY3QtZHJvcGRvd25cIikudmFsKGEpfSkpfSksYShkb2N1bWVudCkub24oXCJmb2N1c1wiLGMsZnVuY3Rpb24oKXthKHRoaXMpLnNpYmxpbmdzKFwibGFiZWwsIC5wcmVmaXhcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSxhKGRvY3VtZW50KS5vbihcImJsdXJcIixjLGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPVwiLnByZWZpeFwiOzA9PT1iLnZhbCgpLmxlbmd0aCYmYlswXS52YWxpZGl0eS5iYWRJbnB1dCE9PSEwJiZ2b2lkIDA9PT1iLmF0dHIoXCJwbGFjZWhvbGRlclwiKSYmKGMrPVwiLCBsYWJlbFwiKSxiLnNpYmxpbmdzKGMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHZhbGlkYXRlX2ZpZWxkKGIpfSksd2luZG93LnZhbGlkYXRlX2ZpZWxkPWZ1bmN0aW9uKGEpe3ZhciBiPXZvaWQgMCE9PWEuYXR0cihcImRhdGEtbGVuZ3RoXCIpLGM9cGFyc2VJbnQoYS5hdHRyKFwiZGF0YS1sZW5ndGhcIikpLGQ9YS52YWwoKS5sZW5ndGg7MD09PWEudmFsKCkubGVuZ3RoJiZhWzBdLnZhbGlkaXR5LmJhZElucHV0PT09ITE/YS5oYXNDbGFzcyhcInZhbGlkYXRlXCIpJiYoYS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGEucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpKTphLmhhc0NsYXNzKFwidmFsaWRhdGVcIikmJihhLmlzKFwiOnZhbGlkXCIpJiZiJiZkPD1jfHxhLmlzKFwiOnZhbGlkXCIpJiYhYj8oYS5yZW1vdmVDbGFzcyhcImludmFsaWRcIiksYS5hZGRDbGFzcyhcInZhbGlkXCIpKTooYS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGEuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpKSl9O3ZhciBkPVwiaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdXCI7YShkb2N1bWVudCkub24oXCJrZXl1cC5yYWRpb1wiLGQsZnVuY3Rpb24oYil7aWYoOT09PWIud2hpY2gpe2EodGhpcykuYWRkQ2xhc3MoXCJ0YWJiZWRcIik7dmFyIGM9YSh0aGlzKTtyZXR1cm4gdm9pZCBjLm9uZShcImJsdXJcIixmdW5jdGlvbihiKXthKHRoaXMpLnJlbW92ZUNsYXNzKFwidGFiYmVkXCIpfSl9fSk7dmFyIGU9YShcIi5oaWRkZW5kaXZcIikuZmlyc3QoKTtlLmxlbmd0aHx8KGU9YSgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKSxhKFwiYm9keVwiKS5hcHBlbmQoZSkpO3ZhciBmPVwiLm1hdGVyaWFsaXplLXRleHRhcmVhXCI7YShmKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIixiLmhlaWdodCgpKSxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIixiLnZhbCgpLmxlbmd0aCl9KSxhKFwiYm9keVwiKS5vbihcImtleXVwIGtleWRvd24gYXV0b3Jlc2l6ZVwiLGYsZnVuY3Rpb24oKXtiKGEodGhpcykpfSksYShkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwnLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1cImZpbGVcIl0nLGZ1bmN0aW9uKCl7Zm9yKHZhciBiPWEodGhpcykuY2xvc2VzdChcIi5maWxlLWZpZWxkXCIpLGM9Yi5maW5kKFwiaW5wdXQuZmlsZS1wYXRoXCIpLGQ9YSh0aGlzKVswXS5maWxlcyxlPVtdLGY9MDtmPGQubGVuZ3RoO2YrKyllLnB1c2goZFtmXS5uYW1lKTtjLnZhbChlLmpvaW4oXCIsIFwiKSksYy50cmlnZ2VyKFwiY2hhbmdlXCIpfSk7dmFyIGc9XCJpbnB1dFt0eXBlPXJhbmdlXVwiLGg9ITE7YShnKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO2EodGhpcykuYWZ0ZXIoYil9KTt2YXIgaT1mdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLnBhcmVudCgpLmNzcyhcInBhZGRpbmctbGVmdFwiKSksYz0tNytiK1wicHhcIjthLnZlbG9jaXR5KHtoZWlnaHQ6XCIzMHB4XCIsd2lkdGg6XCIzMHB4XCIsdG9wOlwiLTMwcHhcIixtYXJnaW5MZWZ0OmN9LHtkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEV4cG9cIn0pfSxqPWZ1bmN0aW9uKGEpe3ZhciBiPWEud2lkdGgoKS0xNSxjPXBhcnNlRmxvYXQoYS5hdHRyKFwibWF4XCIpKSxkPXBhcnNlRmxvYXQoYS5hdHRyKFwibWluXCIpKSxlPShwYXJzZUZsb2F0KGEudmFsKCkpLWQpLyhjLWQpO3JldHVybiBlKmJ9LGs9XCIucmFuZ2UtZmllbGRcIjthKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLGcsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5zaWJsaW5ncyhcIi50aHVtYlwiKTtjLmZpbmQoXCIudmFsdWVcIikuaHRtbChhKHRoaXMpLnZhbCgpKSxjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpO3ZhciBkPWooYSh0aGlzKSk7Yy5hZGRDbGFzcyhcImFjdGl2ZVwiKS5jc3MoXCJsZWZ0XCIsZCl9KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsZyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLnNpYmxpbmdzKFwiLnRodW1iXCIpO2lmKGMubGVuZ3RoPD0wJiYoYz1hKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+JyksYSh0aGlzKS5hZnRlcihjKSksYy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYSh0aGlzKS52YWwoKSksaD0hMCxhKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyksXCJpbnB1dFwiIT09Yi50eXBlKXt2YXIgZD1qKGEodGhpcykpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGQpfX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2V1cCB0b3VjaGVuZFwiLGssZnVuY3Rpb24oKXtoPSExLGEodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxhKGRvY3VtZW50KS5vbihcImlucHV0IG1vdXNlbW92ZSB0b3VjaG1vdmVcIixrLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2hpbGRyZW4oXCIudGh1bWJcIiksZD1hKHRoaXMpLmZpbmQoZyk7aWYoaCl7Yy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKTt2YXIgZT1qKGQpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGUpLGMuZmluZChcIi52YWx1ZVwiKS5odG1sKGMuc2libGluZ3MoZykudmFsKCkpfX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2VvdXQgdG91Y2hsZWF2ZVwiLGssZnVuY3Rpb24oKXtpZighaCl7dmFyIGI9YSh0aGlzKS5jaGlsZHJlbihcIi50aHVtYlwiKSxjPXBhcnNlSW50KGEodGhpcykuY3NzKFwicGFkZGluZy1sZWZ0XCIpKSxkPTcrYytcInB4XCI7Yi5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmYi52ZWxvY2l0eSh7aGVpZ2h0OlwiMFwiLHdpZHRoOlwiMFwiLHRvcDpcIjEwcHhcIixtYXJnaW5MZWZ0OmR9LHtkdXJhdGlvbjoxMDB9KSxiLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfX0pLGEuZm4uYXV0b2NvbXBsZXRlPWZ1bmN0aW9uKGIpe3ZhciBjPXtkYXRhOnt9LGxpbWl0OjEvMCxvbkF1dG9jb21wbGV0ZTpudWxsLG1pbkxlbmd0aDoxfTtyZXR1cm4gYj1hLmV4dGVuZChjLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjLGQ9YSh0aGlzKSxlPWIuZGF0YSxmPTAsZz0tMSxoPWQuY2xvc2VzdChcIi5pbnB1dC1maWVsZFwiKTtpZighYS5pc0VtcHR5T2JqZWN0KGUpKXt2YXIgaSxqPWEoJzx1bCBjbGFzcz1cImF1dG9jb21wbGV0ZS1jb250ZW50IGRyb3Bkb3duLWNvbnRlbnRcIj48L3VsPicpO2gubGVuZ3RoPyhpPWguY2hpbGRyZW4oXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5maXJzdCgpLGkubGVuZ3RofHxoLmFwcGVuZChqKSk6KGk9ZC5uZXh0KFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIiksaS5sZW5ndGh8fGQuYWZ0ZXIoaikpLGkubGVuZ3RoJiYoaj1pKTt2YXIgaz1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZmluZChcImltZ1wiKSxkPWIudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIlwiK2EudG9Mb3dlckNhc2UoKSksZT1kK2EubGVuZ3RoLTEsZj1iLnRleHQoKS5zbGljZSgwLGQpLGc9Yi50ZXh0KCkuc2xpY2UoZCxlKzEpLGg9Yi50ZXh0KCkuc2xpY2UoZSsxKTtiLmh0bWwoXCI8c3Bhbj5cIitmK1wiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIrZytcIjwvc3Bhbj5cIitoK1wiPC9zcGFuPlwiKSxjLmxlbmd0aCYmYi5wcmVwZW5kKGMpfSxsPWZ1bmN0aW9uKCl7Zz0tMSxqLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSxtPWZ1bmN0aW9uKCl7ai5lbXB0eSgpLGwoKSxjPXZvaWQgMH07ZC5vZmYoXCJibHVyLmF1dG9jb21wbGV0ZVwiKS5vbihcImJsdXIuYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oKXttKCl9KSxkLm9mZihcImtleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGVcIikub24oXCJrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oZyl7Zj0wO3ZhciBoPWQudmFsKCkudG9Mb3dlckNhc2UoKTtpZigxMyE9PWcud2hpY2gmJjM4IT09Zy53aGljaCYmNDAhPT1nLndoaWNoKXtpZihjIT09aCYmKG0oKSxoLmxlbmd0aD49Yi5taW5MZW5ndGgpKWZvcih2YXIgaSBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkoaSkmJmkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGgpIT09LTEmJmkudG9Mb3dlckNhc2UoKSE9PWgpe2lmKGY+PWIubGltaXQpYnJlYWs7dmFyIGw9YShcIjxsaT48L2xpPlwiKTtlW2ldP2wuYXBwZW5kKCc8aW1nIHNyYz1cIicrZVtpXSsnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nK2krXCI8L3NwYW4+XCIpOmwuYXBwZW5kKFwiPHNwYW4+XCIraStcIjwvc3Bhbj5cIiksai5hcHBlbmQobCksayhoLGwpLGYrK31jPWh9fSksZC5vZmYoXCJrZXlkb3duLmF1dG9jb21wbGV0ZVwiKS5vbihcImtleWRvd24uYXV0b2NvbXBsZXRlXCIsZnVuY3Rpb24oYSl7dmFyIGIsYz1hLndoaWNoLGQ9ai5jaGlsZHJlbihcImxpXCIpLmxlbmd0aCxlPWouY2hpbGRyZW4oXCIuYWN0aXZlXCIpLmZpcnN0KCk7cmV0dXJuIDEzPT09YyYmZz49MD8oYj1qLmNoaWxkcmVuKFwibGlcIikuZXEoZyksdm9pZChiLmxlbmd0aCYmKGIudHJpZ2dlcihcIm1vdXNlZG93bi5hdXRvY29tcGxldGVcIiksYS5wcmV2ZW50RGVmYXVsdCgpKSkpOnZvaWQoMzghPT1jJiY0MCE9PWN8fChhLnByZXZlbnREZWZhdWx0KCksXG4zOD09PWMmJmc+MCYmZy0tLDQwPT09YyYmZzxkLTEmJmcrKyxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGc+PTAmJmouY2hpbGRyZW4oXCJsaVwiKS5lcShnKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSkpfSksai5vbihcIm1vdXNlZG93bi5hdXRvY29tcGxldGUgdG91Y2hzdGFydC5hdXRvY29tcGxldGVcIixcImxpXCIsZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLnRleHQoKS50cmltKCk7ZC52YWwoYyksZC50cmlnZ2VyKFwiY2hhbmdlXCIpLG0oKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQXV0b2NvbXBsZXRlJiZiLm9uQXV0b2NvbXBsZXRlLmNhbGwodGhpcyxjKX0pfX0pfX0pLGEuZm4ubWF0ZXJpYWxfc2VsZWN0PWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYSxiLGMpe3ZhciBlPWEuaW5kZXhPZihiKSxmPWU9PT0tMTtyZXR1cm4gZj9hLnB1c2goYik6YS5zcGxpY2UoZSwxKSxjLnNpYmxpbmdzKFwidWwuZHJvcGRvd24tY29udGVudFwiKS5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZXEoYikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiksYy5maW5kKFwib3B0aW9uXCIpLmVxKGIpLnByb3AoXCJzZWxlY3RlZFwiLGYpLGQoYSxjKSxmfWZ1bmN0aW9uIGQoYSxiKXtmb3IodmFyIGM9XCJcIixkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKXt2YXIgZj1iLmZpbmQoXCJvcHRpb25cIikuZXEoYVtkXSkudGV4dCgpO2MrPTA9PT1kP2Y6XCIsIFwiK2Z9XCJcIj09PWMmJihjPWIuZmluZChcIm9wdGlvbjpkaXNhYmxlZFwiKS5lcSgwKS50ZXh0KCkpLGIuc2libGluZ3MoXCJpbnB1dC5zZWxlY3QtZHJvcGRvd25cIikudmFsKGMpfWEodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyk7aWYoIWQuaGFzQ2xhc3MoXCJicm93c2VyLWRlZmF1bHRcIikpe3ZhciBlPSEhZC5hdHRyKFwibXVsdGlwbGVcIiksZj1kLmRhdGEoXCJzZWxlY3QtaWRcIik7aWYoZiYmKGQucGFyZW50KCkuZmluZChcInNwYW4uY2FyZXRcIikucmVtb3ZlKCksZC5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikucmVtb3ZlKCksZC51bndyYXAoKSxhKFwidWwjc2VsZWN0LW9wdGlvbnMtXCIrZikucmVtb3ZlKCkpLFwiZGVzdHJveVwiPT09YilyZXR1cm4gdm9pZCBkLmRhdGEoXCJzZWxlY3QtaWRcIixudWxsKS5yZW1vdmVDbGFzcyhcImluaXRpYWxpemVkXCIpO3ZhciBnPU1hdGVyaWFsaXplLmd1aWQoKTtkLmRhdGEoXCJzZWxlY3QtaWRcIixnKTt2YXIgaD1hKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj48L2Rpdj4nKTtoLmFkZENsYXNzKGQuYXR0cihcImNsYXNzXCIpKTt2YXIgaT1hKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nK2crJ1wiIGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBzZWxlY3QtZHJvcGRvd24gJysoZT9cIm11bHRpcGxlLXNlbGVjdC1kcm9wZG93blwiOlwiXCIpKydcIj48L3VsPicpLGo9ZC5jaGlsZHJlbihcIm9wdGlvbiwgb3B0Z3JvdXBcIiksaz1bXSxsPSExLG09ZC5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLmh0bWwoKXx8ZC5maW5kKFwib3B0aW9uOmZpcnN0XCIpLmh0bWwoKXx8XCJcIixuPWZ1bmN0aW9uKGIsYyxkKXt2YXIgZj1jLmlzKFwiOmRpc2FibGVkXCIpP1wiZGlzYWJsZWQgXCI6XCJcIixnPVwib3B0Z3JvdXAtb3B0aW9uXCI9PT1kP1wib3B0Z3JvdXAtb3B0aW9uIFwiOlwiXCIsaD1lPyc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCInK2YrXCIvPjxsYWJlbD48L2xhYmVsPlwiOlwiXCIsaj1jLmRhdGEoXCJpY29uXCIpLGs9Yy5hdHRyKFwiY2xhc3NcIik7aWYoail7dmFyIGw9XCJcIjtyZXR1cm4gayYmKGw9JyBjbGFzcz1cIicraysnXCInKSxpLmFwcGVuZChhKCc8bGkgY2xhc3M9XCInK2YrZysnXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInK2orJ1wiJytsK1wiPjxzcGFuPlwiK2grYy5odG1sKCkrXCI8L3NwYW4+PC9saT5cIikpLCEwfWkuYXBwZW5kKGEoJzxsaSBjbGFzcz1cIicrZitnKydcIj48c3Bhbj4nK2grYy5odG1sKCkrXCI8L3NwYW4+PC9saT5cIikpfTtqLmxlbmd0aCYmai5lYWNoKGZ1bmN0aW9uKCl7aWYoYSh0aGlzKS5pcyhcIm9wdGlvblwiKSllP24oZCxhKHRoaXMpLFwibXVsdGlwbGVcIik6bihkLGEodGhpcykpO2Vsc2UgaWYoYSh0aGlzKS5pcyhcIm9wdGdyb3VwXCIpKXt2YXIgYj1hKHRoaXMpLmNoaWxkcmVuKFwib3B0aW9uXCIpO2kuYXBwZW5kKGEoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JythKHRoaXMpLmF0dHIoXCJsYWJlbFwiKStcIjwvc3Bhbj48L2xpPlwiKSksYi5lYWNoKGZ1bmN0aW9uKCl7bihkLGEodGhpcyksXCJvcHRncm91cC1vcHRpb25cIil9KX19KSxpLmZpbmQoXCJsaTpub3QoLm9wdGdyb3VwKVwiKS5lYWNoKGZ1bmN0aW9uKGYpe2EodGhpcykuY2xpY2soZnVuY3Rpb24oZyl7aWYoIWEodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSYmIWEodGhpcykuaGFzQ2xhc3MoXCJvcHRncm91cFwiKSl7dmFyIGg9ITA7ZT8oYSgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyx0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIWJ9KSxoPWMoayxmLGQpLHEudHJpZ2dlcihcImZvY3VzXCIpKTooaS5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYSh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxxLnZhbChhKHRoaXMpLnRleHQoKSkpLHIoaSxhKHRoaXMpKSxkLmZpbmQoXCJvcHRpb25cIikuZXEoZikucHJvcChcInNlbGVjdGVkXCIsaCksZC50cmlnZ2VyKFwiY2hhbmdlXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiJiZiKCl9Zy5zdG9wUHJvcGFnYXRpb24oKX0pfSksZC53cmFwKGgpO3ZhciBvPWEoJzxzcGFuIGNsYXNzPVwiY2FyZXRcIj4mIzk2NjA7PC9zcGFuPicpO2QuaXMoXCI6ZGlzYWJsZWRcIikmJm8uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTt2YXIgcD1tLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikscT1hKCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlbGVjdC1kcm9wZG93blwiIHJlYWRvbmx5PVwidHJ1ZVwiICcrKGQuaXMoXCI6ZGlzYWJsZWRcIik/XCJkaXNhYmxlZFwiOlwiXCIpKycgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nK2crJ1wiIHZhbHVlPVwiJytwKydcIi8+Jyk7ZC5iZWZvcmUocSkscS5iZWZvcmUobykscS5hZnRlcihpKSxkLmlzKFwiOmRpc2FibGVkXCIpfHxxLmRyb3Bkb3duKHtob3ZlcjohMX0pLGQuYXR0cihcInRhYmluZGV4XCIpJiZhKHFbMF0pLmF0dHIoXCJ0YWJpbmRleFwiLGQuYXR0cihcInRhYmluZGV4XCIpKSxkLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIikscS5vbih7Zm9jdXM6ZnVuY3Rpb24oKXtpZihhKFwidWwuc2VsZWN0LWRyb3Bkb3duXCIpLm5vdChpWzBdKS5pcyhcIjp2aXNpYmxlXCIpJiZhKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnRyaWdnZXIoXCJjbG9zZVwiKSwhaS5pcyhcIjp2aXNpYmxlXCIpKXthKHRoaXMpLnRyaWdnZXIoXCJvcGVuXCIsW1wiZm9jdXNcIl0pO3ZhciBiPWEodGhpcykudmFsKCk7ZSYmYi5pbmRleE9mKFwiLFwiKT49MCYmKGI9Yi5zcGxpdChcIixcIilbMF0pO3ZhciBjPWkuZmluZChcImxpXCIpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiBhKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSlbMF07cihpLGMsITApfX0sY2xpY2s6ZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX19KSxxLm9uKFwiYmx1clwiLGZ1bmN0aW9uKCl7ZXx8YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VcIiksaS5maW5kKFwibGkuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKX0pLGkuaG92ZXIoZnVuY3Rpb24oKXtsPSEwfSxmdW5jdGlvbigpe2w9ITF9KSxhKHdpbmRvdykub24oe2NsaWNrOmZ1bmN0aW9uKCl7ZSYmKGx8fHEudHJpZ2dlcihcImNsb3NlXCIpKX19KSxlJiZkLmZpbmQoXCJvcHRpb246c2VsZWN0ZWQ6bm90KDpkaXNhYmxlZClcIikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuaW5kZXgoKTtjKGssYixkKSxpLmZpbmQoXCJsaVwiKS5lcShiKS5maW5kKFwiOmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsITApfSk7dmFyIHI9ZnVuY3Rpb24oYixjLGQpe2lmKGMpe2IuZmluZChcImxpLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7dmFyIGY9YShjKTtmLmFkZENsYXNzKFwic2VsZWN0ZWRcIiksZSYmIWR8fGkuc2Nyb2xsVG8oZil9fSxzPVtdLHQ9ZnVuY3Rpb24oYil7aWYoOT09Yi53aGljaClyZXR1cm4gdm9pZCBxLnRyaWdnZXIoXCJjbG9zZVwiKTtpZig0MD09Yi53aGljaCYmIWkuaXMoXCI6dmlzaWJsZVwiKSlyZXR1cm4gdm9pZCBxLnRyaWdnZXIoXCJvcGVuXCIpO2lmKDEzIT1iLndoaWNofHxpLmlzKFwiOnZpc2libGVcIikpe2IucHJldmVudERlZmF1bHQoKTt2YXIgYz1TdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpLnRvTG93ZXJDYXNlKCksZD1bOSwxMywyNywzOCw0MF07aWYoYyYmZC5pbmRleE9mKGIud2hpY2gpPT09LTEpe3MucHVzaChjKTt2YXIgZj1zLmpvaW4oXCJcIiksZz1pLmZpbmQoXCJsaVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gMD09PWEodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmKX0pWzBdO2cmJnIoaSxnKX1pZigxMz09Yi53aGljaCl7dmFyIGg9aS5maW5kKFwibGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZClcIilbMF07aCYmKGEoaCkudHJpZ2dlcihcImNsaWNrXCIpLGV8fHEudHJpZ2dlcihcImNsb3NlXCIpKX00MD09Yi53aGljaCYmKGc9aS5maW5kKFwibGkuc2VsZWN0ZWRcIikubGVuZ3RoP2kuZmluZChcImxpLnNlbGVjdGVkXCIpLm5leHQoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXTppLmZpbmQoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXSxyKGksZykpLDI3PT1iLndoaWNoJiZxLnRyaWdnZXIoXCJjbG9zZVwiKSwzOD09Yi53aGljaCYmKGc9aS5maW5kKFwibGkuc2VsZWN0ZWRcIikucHJldihcImxpOm5vdCguZGlzYWJsZWQpXCIpWzBdLGcmJnIoaSxnKSksc2V0VGltZW91dChmdW5jdGlvbigpe3M9W119LDFlMyl9fTtxLm9uKFwia2V5ZG93blwiLHQpfX0pfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17aW5kaWNhdG9yczohMCxoZWlnaHQ6NDAwLHRyYW5zaXRpb246NTAwLGludGVydmFsOjZlM307cmV0dXJuIGI9YS5leHRlbmQoYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEsYil7YS5oYXNDbGFzcyhcImNlbnRlci1hbGlnblwiKT9hLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWTotMTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pOmEuaGFzQ2xhc3MoXCJyaWdodC1hbGlnblwiKT9hLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDoxMDB9LHtkdXJhdGlvbjpiLHF1ZXVlOiExfSk6YS5oYXNDbGFzcyhcImxlZnQtYWxpZ25cIikmJmEudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOi0xMDB9LHtkdXJhdGlvbjpiLHF1ZXVlOiExfSl9ZnVuY3Rpb24gZChhKXthPj1qLmxlbmd0aD9hPTA6YTwwJiYoYT1qLmxlbmd0aC0xKSxrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxrIT1hJiYoZT1qLmVxKGspLCRjYXB0aW9uPWUuZmluZChcIi5jYXB0aW9uXCIpLGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtqLm5vdChcIi5hY3RpdmVcIikudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pLGMoJGNhcHRpb24sYi50cmFuc2l0aW9uKSxiLmluZGljYXRvcnMmJmYuZXEoaykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksai5lcShhKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxqLmVxKGEpLmZpbmQoXCIuY2FwdGlvblwiKS52ZWxvY2l0eSh7b3BhY2l0eToxLHRyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24sZGVsYXk6Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxqLmVxKGEpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGIuaW5kaWNhdG9ycyYmZi5lcShhKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSl9dmFyIGUsZixnLGg9YSh0aGlzKSxpPWguZmluZChcInVsLnNsaWRlc1wiKS5maXJzdCgpLGo9aS5maW5kKFwiPiBsaVwiKSxrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKTtrIT0tMSYmKGU9ai5lcShrKSksaC5oYXNDbGFzcyhcImZ1bGxzY3JlZW5cIil8fChiLmluZGljYXRvcnM/aC5oZWlnaHQoYi5oZWlnaHQrNDApOmguaGVpZ2h0KGIuaGVpZ2h0KSxpLmhlaWdodChiLmhlaWdodCkpLGouZmluZChcIi5jYXB0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXtjKGEodGhpcyksMCl9KSxqLmZpbmQoXCJpbWdcIikuZWFjaChmdW5jdGlvbigpe3ZhciBiPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO2EodGhpcykuYXR0cihcInNyY1wiKSE9PWImJihhKHRoaXMpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIixcInVybChcIithKHRoaXMpLmF0dHIoXCJzcmNcIikrXCIpXCIpLGEodGhpcykuYXR0cihcInNyY1wiLGIpKX0pLGIuaW5kaWNhdG9ycyYmKGY9YSgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyksai5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlPWEoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTtlLmNsaWNrKGZ1bmN0aW9uKCl7dmFyIGM9aS5wYXJlbnQoKSxlPWMuZmluZChhKHRoaXMpKS5pbmRleCgpO2QoZSksY2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCl9KSxmLmFwcGVuZChlKX0pLGguYXBwZW5kKGYpLGY9aC5maW5kKFwidWwuaW5kaWNhdG9yc1wiKS5maW5kKFwibGkuaW5kaWNhdG9yLWl0ZW1cIikpLGU/ZS5zaG93KCk6KGouZmlyc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxrPTAsZT1qLmVxKGspLGIuaW5kaWNhdG9ycyYmZi5lcShrKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksZS5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXtlLmZpbmQoXCIuY2FwdGlvblwiKS52ZWxvY2l0eSh7b3BhY2l0eToxLHRyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjpiLnRyYW5zaXRpb24scXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfSksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoaysxKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpO3ZhciBsPSExLG09ITEsbj0hMTtoLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGEpe2lmKFwidG91Y2hcIj09PWEuZ2VzdHVyZS5wb2ludGVyVHlwZSl7Y2xlYXJJbnRlcnZhbChnKTt2YXIgYj1hLmdlc3R1cmUuZGlyZWN0aW9uLGM9YS5nZXN0dXJlLmRlbHRhWCxkPWEuZ2VzdHVyZS52ZWxvY2l0eVgsZT1hLmdlc3R1cmUudmVsb2NpdHlZOyRjdXJyX3NsaWRlPWkuZmluZChcIi5hY3RpdmVcIiksTWF0aC5hYnMoZCk+TWF0aC5hYnMoZSkmJiRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmN9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksND09PWImJihjPmguaW5uZXJXaWR0aCgpLzJ8fGQ8LS42NSk/bj0hMDoyPT09YiYmKGM8LTEqaC5pbm5lcldpZHRoKCkvMnx8ZD4uNjUpJiYobT0hMCk7dmFyIGY7bSYmKGY9JGN1cnJfc2xpZGUubmV4dCgpLDA9PT1mLmxlbmd0aCYmKGY9ai5maXJzdCgpKSxmLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKSxuJiYoZj0kY3Vycl9zbGlkZS5wcmV2KCksMD09PWYubGVuZ3RoJiYoZj1qLmxhc3QoKSksZi52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGEpe1widG91Y2hcIj09PWEuZ2VzdHVyZS5wb2ludGVyVHlwZSYmKCRjdXJyX3NsaWRlPWkuZmluZChcIi5hY3RpdmVcIiksbD0hMSxjdXJyX2luZGV4PWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSwhbiYmIW18fGoubGVuZ3RoPD0xPyRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pOm0/KGQoY3Vycl9pbmRleCsxKSwkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDotMSpoLmlubmVyV2lkdGgoKX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7JGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjowLHF1ZXVlOiExfSl9fSkpOm4mJihkKGN1cnJfaW5kZXgtMSksJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6aC5pbm5lcldpZHRoKCl9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpeyRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pKSxtPSExLG49ITEsY2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCkpfSksaC5vbihcInNsaWRlclBhdXNlXCIsZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGcpfSksaC5vbihcInNsaWRlclN0YXJ0XCIsZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGcpLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxqLmxlbmd0aD09aysxP2s9MDprKz0xLGQoayl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKX0pLGgub24oXCJzbGlkZXJOZXh0XCIsZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGsrMSl9KSxoLm9uKFwic2xpZGVyUHJldlwiLGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrLTEpfSl9KX0scGF1c2U6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJQYXVzZVwiKX0sc3RhcnQ6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJTdGFydFwiKX0sbmV4dDpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcInNsaWRlck5leHRcIil9LHByZXY6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJQcmV2XCIpfX07YS5mbi5zbGlkZXI9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRvb2x0aXBcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vbihcImNsaWNrLmNhcmRcIixcIi5jYXJkXCIsZnVuY3Rpb24oYil7YSh0aGlzKS5maW5kKFwiPiAuY2FyZC1yZXZlYWxcIikubGVuZ3RoJiYoYShiLnRhcmdldCkuaXMoYShcIi5jYXJkLXJldmVhbCAuY2FyZC10aXRsZVwiKSl8fGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUgaVwiKSk/YSh0aGlzKS5maW5kKFwiLmNhcmQtcmV2ZWFsXCIpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOjB9LHtkdXJhdGlvbjoyMjUscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KX19KTooYShiLnRhcmdldCkuaXMoYShcIi5jYXJkIC5hY3RpdmF0b3JcIikpfHxhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQgLmFjdGl2YXRvciBpXCIpKSkmJihhKGIudGFyZ2V0KS5jbG9zZXN0KFwiLmNhcmRcIikuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxhKHRoaXMpLmZpbmQoXCIuY2FyZC1yZXZlYWxcIikuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLnZlbG9jaXR5KFwic3RvcFwiLCExKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTpcIi0xMDAlXCJ9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwifSkpKX0pfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2RhdGE6W10scGxhY2Vob2xkZXI6XCJcIixzZWNvbmRhcnlQbGFjZWhvbGRlcjpcIlwiLGF1dG9jb21wbGV0ZU9wdGlvbnM6e319O2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkub24oXCJjbGlja1wiLFwiLmNoaXAgLmNsb3NlXCIsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5jbG9zZXN0KFwiLmNoaXBzXCIpO2MuYXR0cihcImRhdGEtaW5pdGlhbGl6ZWRcIil8fGEodGhpcykuY2xvc2VzdChcIi5jaGlwXCIpLnJlbW92ZSgpfSl9KSxhLmZuLm1hdGVyaWFsX2NoaXA9ZnVuY3Rpb24oYyl7dmFyIGQ9dGhpcztpZih0aGlzLiRlbD1hKHRoaXMpLHRoaXMuJGRvY3VtZW50PWEoZG9jdW1lbnQpLHRoaXMuU0VMUz17Q0hJUFM6XCIuY2hpcHNcIixDSElQOlwiLmNoaXBcIixJTlBVVDpcImlucHV0XCIsREVMRVRFOlwiLm1hdGVyaWFsLWljb25zXCIsU0VMRUNURURfQ0hJUDpcIi5zZWxlY3RlZFwifSxcImRhdGFcIj09PWMpcmV0dXJuIHRoaXMuJGVsLmRhdGEoXCJjaGlwc1wiKTt2YXIgZT1hLmV4dGVuZCh7fSxiLGMpO2QuaGFzQXV0b2NvbXBsZXRlPSFhLmlzRW1wdHlPYmplY3QoZS5hdXRvY29tcGxldGVPcHRpb25zLmRhdGEpLHRoaXMuaW5pdD1mdW5jdGlvbigpe3ZhciBiPTA7ZC4kZWwuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZj1NYXRlcmlhbGl6ZS5ndWlkKCk7ZC5jaGlwSWQ9ZixlLmRhdGEmJmUuZGF0YSBpbnN0YW5jZW9mIEFycmF5fHwoZS5kYXRhPVtdKSxjLmRhdGEoXCJjaGlwc1wiLGUuZGF0YSksYy5hdHRyKFwiZGF0YS1pbmRleFwiLGIpLGMuYXR0cihcImRhdGEtaW5pdGlhbGl6ZWRcIiwhMCksYy5oYXNDbGFzcyhkLlNFTFMuQ0hJUFMpfHxjLmFkZENsYXNzKFwiY2hpcHNcIiksZC5jaGlwcyhjLGYpLGIrK30pfSx0aGlzLmhhbmRsZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPWQuU0VMUztkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1mb2N1c1wiLGIuQ0hJUFMpLm9uKFwiY2xpY2suY2hpcHMtZm9jdXNcIixiLkNISVBTLGZ1bmN0aW9uKGMpe2EoYy50YXJnZXQpLmZpbmQoYi5JTlBVVCkuZm9jdXMoKX0pLGQuJGRvY3VtZW50Lm9mZihcImNsaWNrLmNoaXBzLXNlbGVjdFwiLGIuQ0hJUCkub24oXCJjbGljay5jaGlwcy1zZWxlY3RcIixiLkNISVAsZnVuY3Rpb24oYyl7dmFyIGU9YShjLnRhcmdldCk7aWYoZS5sZW5ndGgpe3ZhciBmPWUuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSxnPWUuY2xvc2VzdChiLkNISVBTKTthKGIuQ0hJUCkucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKSxmfHxkLnNlbGVjdENoaXAoZS5pbmRleCgpLGcpfX0pLGQuJGRvY3VtZW50Lm9mZihcImtleWRvd24uY2hpcHNcIikub24oXCJrZXlkb3duLmNoaXBzXCIsZnVuY3Rpb24oYyl7aWYoIWEoYy50YXJnZXQpLmlzKFwiaW5wdXQsIHRleHRhcmVhXCIpKXt2YXIgZSxmPWQuJGRvY3VtZW50LmZpbmQoYi5DSElQK2IuU0VMRUNURURfQ0hJUCksZz1mLmNsb3Nlc3QoYi5DSElQUyksaD1mLnNpYmxpbmdzKGIuQ0hJUCkubGVuZ3RoO2lmKGYubGVuZ3RoKWlmKDg9PT1jLndoaWNofHw0Nj09PWMud2hpY2gpe2MucHJldmVudERlZmF1bHQoKSxlPWYuaW5kZXgoKSxkLmRlbGV0ZUNoaXAoZSxnKTt2YXIgaT1udWxsO2UrMTxoP2k9ZTplIT09aCYmZSsxIT09aHx8KGk9aC0xKSxpPDAmJihpPW51bGwpLG51bGwhPT1pJiZkLnNlbGVjdENoaXAoaSxnKSxofHxnLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpfWVsc2UgaWYoMzc9PT1jLndoaWNoKXtpZihlPWYuaW5kZXgoKS0xLGU8MClyZXR1cm47YShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZC5zZWxlY3RDaGlwKGUsZyl9ZWxzZSBpZigzOT09PWMud2hpY2gpe2lmKGU9Zi5pbmRleCgpKzEsYShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZT5oKXJldHVybiB2b2lkIGcuZmluZChcImlucHV0XCIpLmZvY3VzKCk7ZC5zZWxlY3RDaGlwKGUsZyl9fX0pLGQuJGRvY3VtZW50Lm9mZihcImZvY3VzaW4uY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwiZm9jdXNpbi5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KGIuQ0hJUFMpO2QuYWRkQ2xhc3MoXCJmb2N1c1wiKSxkLnNpYmxpbmdzKFwibGFiZWwsIC5wcmVmaXhcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIil9KSxkLiRkb2N1bWVudC5vZmYoXCJmb2N1c291dC5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJmb2N1c291dC5jaGlwc1wiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KGIuQ0hJUFMpO2QucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKSxkLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGh8fGQuc2libGluZ3MoXCJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxkLnNpYmxpbmdzKFwiLnByZWZpeFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLGQuJGRvY3VtZW50Lm9mZihcImtleWRvd24uY2hpcHMtYWRkXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImtleWRvd24uY2hpcHMtYWRkXCIsYi5DSElQUytcIiBcIitiLklOUFVULGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpLGY9ZS5jbG9zZXN0KGIuQ0hJUFMpLGc9Zi5jaGlsZHJlbihiLkNISVApLmxlbmd0aDtpZigxMz09PWMud2hpY2gpe2lmKGQuaGFzQXV0b2NvbXBsZXRlJiZmLmZpbmQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5sZW5ndGgmJmYuZmluZChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLmNoaWxkcmVuKCkubGVuZ3RoKXJldHVybjtyZXR1cm4gYy5wcmV2ZW50RGVmYXVsdCgpLGQuYWRkQ2hpcCh7dGFnOmUudmFsKCl9LGYpLHZvaWQgZS52YWwoXCJcIil9aWYoKDg9PT1jLmtleUNvZGV8fDM3PT09Yy5rZXlDb2RlKSYmXCJcIj09PWUudmFsKCkmJmcpcmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxkLnNlbGVjdENoaXAoZy0xLGYpLHZvaWQgZS5ibHVyKCl9KSxkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1kZWxldGVcIixiLkNISVBTK1wiIFwiK2IuREVMRVRFKS5vbihcImNsaWNrLmNoaXBzLWRlbGV0ZVwiLGIuQ0hJUFMrXCIgXCIrYi5ERUxFVEUsZnVuY3Rpb24oYyl7dmFyIGU9YShjLnRhcmdldCksZj1lLmNsb3Nlc3QoYi5DSElQUyksZz1lLmNsb3Nlc3QoYi5DSElQKTtjLnN0b3BQcm9wYWdhdGlvbigpLGQuZGVsZXRlQ2hpcChnLmluZGV4KCksZiksZi5maW5kKFwiaW5wdXRcIikuZm9jdXMoKX0pfSx0aGlzLmNoaXBzPWZ1bmN0aW9uKGIsYyl7Yi5lbXB0eSgpLGIuZGF0YShcImNoaXBzXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hcHBlbmQoZC5yZW5kZXJDaGlwKGEpKX0pLGIuYXBwZW5kKGEoJzxpbnB1dCBpZD1cIicrYysnXCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiXCI+JykpLGQuc2V0UGxhY2Vob2xkZXIoYik7dmFyIGY9Yi5uZXh0KFwibGFiZWxcIik7Zi5sZW5ndGgmJihmLmF0dHIoXCJmb3JcIixjKSxiLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGgmJmYuYWRkQ2xhc3MoXCJhY3RpdmVcIikpO3ZhciBnPWEoXCIjXCIrYyk7ZC5oYXNBdXRvY29tcGxldGUmJihlLmF1dG9jb21wbGV0ZU9wdGlvbnMub25BdXRvY29tcGxldGU9ZnVuY3Rpb24oYSl7ZC5hZGRDaGlwKHt0YWc6YX0sYiksZy52YWwoXCJcIiksZy5mb2N1cygpfSxnLmF1dG9jb21wbGV0ZShlLmF1dG9jb21wbGV0ZU9wdGlvbnMpKX0sdGhpcy5yZW5kZXJDaGlwPWZ1bmN0aW9uKGIpe2lmKGIudGFnKXt2YXIgYz1hKCc8ZGl2IGNsYXNzPVwiY2hpcFwiPjwvZGl2PicpO3JldHVybiBjLnRleHQoYi50YWcpLGMuYXBwZW5kKGEoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2xvc2VcIj5jbG9zZTwvaT4nKSksY319LHRoaXMuc2V0UGxhY2Vob2xkZXI9ZnVuY3Rpb24oYSl7YS5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZlLnBsYWNlaG9sZGVyP2EuZmluZChcImlucHV0XCIpLnByb3AoXCJwbGFjZWhvbGRlclwiLGUucGxhY2Vob2xkZXIpOiFhLmRhdGEoXCJjaGlwc1wiKS5sZW5ndGgmJmUuc2Vjb25kYXJ5UGxhY2Vob2xkZXImJmEuZmluZChcImlucHV0XCIpLnByb3AoXCJwbGFjZWhvbGRlclwiLGUuc2Vjb25kYXJ5UGxhY2Vob2xkZXIpfSx0aGlzLmlzVmFsaWQ9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5kYXRhKFwiY2hpcHNcIiksZD0hMSxlPTA7ZTxjLmxlbmd0aDtlKyspaWYoY1tlXS50YWc9PT1iLnRhZylyZXR1cm4gdm9pZChkPSEwKTtyZXR1cm5cIlwiIT09Yi50YWcmJiFkfSx0aGlzLmFkZENoaXA9ZnVuY3Rpb24oYSxiKXtpZihkLmlzVmFsaWQoYixhKSl7Zm9yKHZhciBjPWQucmVuZGVyQ2hpcChhKSxlPVtdLGY9Yi5kYXRhKFwiY2hpcHNcIiksZz0wO2c8Zi5sZW5ndGg7ZysrKWUucHVzaChmW2ddKTtlLnB1c2goYSksYi5kYXRhKFwiY2hpcHNcIixlKSxjLmluc2VydEJlZm9yZShiLmZpbmQoXCJpbnB1dFwiKSksYi50cmlnZ2VyKFwiY2hpcC5hZGRcIixhKSxkLnNldFBsYWNlaG9sZGVyKGIpfX0sdGhpcy5kZWxldGVDaGlwPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5kYXRhKFwiY2hpcHNcIilbYV07Yi5maW5kKFwiLmNoaXBcIikuZXEoYSkucmVtb3ZlKCk7Zm9yKHZhciBlPVtdLGY9Yi5kYXRhKFwiY2hpcHNcIiksZz0wO2c8Zi5sZW5ndGg7ZysrKWchPT1hJiZlLnB1c2goZltnXSk7Yi5kYXRhKFwiY2hpcHNcIixlKSxiLnRyaWdnZXIoXCJjaGlwLmRlbGV0ZVwiLGMpLGQuc2V0UGxhY2Vob2xkZXIoYil9LHRoaXMuc2VsZWN0Q2hpcD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZmluZChcIi5jaGlwXCIpLmVxKGEpO2MmJiExPT09Yy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpJiYoYy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLGIudHJpZ2dlcihcImNoaXAuc2VsZWN0XCIsYi5kYXRhKFwiY2hpcHNcIilbYV0pKX0sdGhpcy5nZXRDaGlwc0VsZW1lbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5lcShhKX0sdGhpcy5pbml0KCksdGhpcy5oYW5kbGVFdmVudHMoKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5wdXNocGluPWZ1bmN0aW9uKGIpe3ZhciBjPXt0b3A6MCxib3R0b206MS8wLG9mZnNldDowfTtyZXR1cm5cInJlbW92ZVwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7KGlkPWEodGhpcykuZGF0YShcInB1c2hwaW4taWRcIikpJiYoYSh3aW5kb3cpLm9mZihcInNjcm9sbC5cIitpZCksYSh0aGlzKS5yZW1vdmVEYXRhKFwicHVzaHBpbi1pZFwiKS5yZW1vdmVDbGFzcyhcInBpbi10b3AgcGlubmVkIHBpbi1ib3R0b21cIikucmVtb3ZlQXR0cihcInN0eWxlXCIpKX0pLCExKTooYj1hLmV4dGVuZChjLGIpLCRpbmRleD0wLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGMoYSl7YS5yZW1vdmVDbGFzcyhcInBpbi10b3BcIiksYS5yZW1vdmVDbGFzcyhcInBpbm5lZFwiKSxhLnJlbW92ZUNsYXNzKFwicGluLWJvdHRvbVwiKX1mdW5jdGlvbiBkKGQsZSl7ZC5lYWNoKGZ1bmN0aW9uKCl7Yi50b3A8PWUmJmIuYm90dG9tPj1lJiYhYSh0aGlzKS5oYXNDbGFzcyhcInBpbm5lZFwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5jc3MoXCJ0b3BcIixiLm9mZnNldCksYSh0aGlzKS5hZGRDbGFzcyhcInBpbm5lZFwiKSksZTxiLnRvcCYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW4tdG9wXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmNzcyhcInRvcFwiLDApLGEodGhpcykuYWRkQ2xhc3MoXCJwaW4tdG9wXCIpKSxlPmIuYm90dG9tJiYhYSh0aGlzKS5oYXNDbGFzcyhcInBpbi1ib3R0b21cIikmJihjKGEodGhpcykpLGEodGhpcykuYWRkQ2xhc3MoXCJwaW4tYm90dG9tXCIpLGEodGhpcykuY3NzKFwidG9wXCIsYi5ib3R0b20tZykpfSl9dmFyIGU9TWF0ZXJpYWxpemUuZ3VpZCgpLGY9YSh0aGlzKSxnPWEodGhpcykub2Zmc2V0KCkudG9wO2EodGhpcykuZGF0YShcInB1c2hwaW4taWRcIixlKSxkKGYsYSh3aW5kb3cpLnNjcm9sbFRvcCgpKSxhKHdpbmRvdykub24oXCJzY3JvbGwuXCIrZSxmdW5jdGlvbigpe3ZhciBjPWEod2luZG93KS5zY3JvbGxUb3AoKStiLm9mZnNldDtkKGYsYyl9KX0pKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthLmZuLnJldmVyc2U9W10ucmV2ZXJzZSxhKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXIuZml4ZWRBY3Rpb25CdG5cIixcIi5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpXCIsZnVuY3Rpb24oYyl7dmFyIGQ9YSh0aGlzKTtiKGQpfSksYShkb2N1bWVudCkub24oXCJtb3VzZWxlYXZlLmZpeGVkQWN0aW9uQnRuXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKVwiLGZ1bmN0aW9uKGIpe3ZhciBkPWEodGhpcyk7YyhkKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suZmFiQ2xpY2tUb2dnbGVcIixcIi5maXhlZC1hY3Rpb24tYnRuLmNsaWNrLXRvLXRvZ2dsZSA+IGFcIixmdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpLGY9ZS5wYXJlbnQoKTtmLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2MoZik6YihmKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suZmFiVG9vbGJhclwiLFwiLmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciA+IGFcIixmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLGU9Yy5wYXJlbnQoKTtkKGUpfSl9KSxhLmZuLmV4dGVuZCh7b3BlbkZBQjpmdW5jdGlvbigpe2IoYSh0aGlzKSl9LGNsb3NlRkFCOmZ1bmN0aW9uKCl7YyhhKHRoaXMpKX0sb3BlblRvb2xiYXI6ZnVuY3Rpb24oKXtkKGEodGhpcykpfSxjbG9zZVRvb2xiYXI6ZnVuY3Rpb24oKXtlKGEodGhpcykpfX0pO3ZhciBiPWZ1bmN0aW9uKGIpe3ZhciBjPWI7aWYoYy5oYXNDbGFzcyhcImFjdGl2ZVwiKT09PSExKXt2YXIgZCxlLGY9Yy5oYXNDbGFzcyhcImhvcml6b250YWxcIik7Zj09PSEwP2U9NDA6ZD00MCxjLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuZmluZChcInVsIC5idG4tZmxvYXRpbmdcIikudmVsb2NpdHkoe3NjYWxlWTpcIi40XCIsc2NhbGVYOlwiLjRcIix0cmFuc2xhdGVZOmQrXCJweFwiLHRyYW5zbGF0ZVg6ZStcInB4XCJ9LHtkdXJhdGlvbjowfSk7dmFyIGc9MDtjLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnJldmVyc2UoKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjFcIixzY2FsZVg6XCIxXCIsc2NhbGVZOlwiMVwiLHRyYW5zbGF0ZVk6XCIwXCIsdHJhbnNsYXRlWDpcIjBcIn0se2R1cmF0aW9uOjgwLGRlbGF5Omd9KSxnKz00MH0pfX0sYz1mdW5jdGlvbihhKXt2YXIgYixjLGQ9YSxlPWQuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpO2U9PT0hMD9jPTQwOmI9NDAsZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtkLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxkLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KHtvcGFjaXR5OlwiMFwiLHNjYWxlWDpcIi40XCIsc2NhbGVZOlwiLjRcIix0cmFuc2xhdGVZOmIrXCJweFwiLHRyYW5zbGF0ZVg6YytcInB4XCJ9LHtkdXJhdGlvbjo4MH0pfSxkPWZ1bmN0aW9uKGIpe2lmKFwidHJ1ZVwiIT09Yi5hdHRyKFwiZGF0YS1vcGVuXCIpKXt2YXIgYyxkLGYsZz13aW5kb3cuaW5uZXJXaWR0aCxoPXdpbmRvdy5pbm5lckhlaWdodCxpPWJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaj1iLmZpbmQoXCI+IGFcIikuZmlyc3QoKSxrPWIuZmluZChcIj4gdWxcIikuZmlyc3QoKSxsPWEoJzxkaXYgY2xhc3M9XCJmYWItYmFja2Ryb3BcIj48L2Rpdj4nKSxtPWouY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtqLmFwcGVuZChsKSxjPWkubGVmdC1nLzIraS53aWR0aC8yLGQ9aC1pLmJvdHRvbSxmPWcvbC53aWR0aCgpLGIuYXR0cihcImRhdGEtb3JpZ2luLWJvdHRvbVwiLGkuYm90dG9tKSxiLmF0dHIoXCJkYXRhLW9yaWdpbi1sZWZ0XCIsaS5sZWZ0KSxiLmF0dHIoXCJkYXRhLW9yaWdpbi13aWR0aFwiLGkud2lkdGgpLGIuYWRkQ2xhc3MoXCJhY3RpdmVcIiksYi5hdHRyKFwiZGF0YS1vcGVuXCIsITApLGIuY3NzKHtcInRleHQtYWxpZ25cIjpcImNlbnRlclwiLHdpZHRoOlwiMTAwJVwiLGJvdHRvbTowLGxlZnQ6MCx0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKFwiK2MrXCJweClcIix0cmFuc2l0aW9uOlwibm9uZVwifSksai5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZVkoXCIrLWQrXCJweClcIix0cmFuc2l0aW9uOlwibm9uZVwifSksbC5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOm19KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jc3Moe3RyYW5zZm9ybTpcIlwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCksIGJhY2tncm91bmQtY29sb3IgMHMgbGluZWFyIC4yc1wifSksai5jc3Moe292ZXJmbG93OlwidmlzaWJsZVwiLHRyYW5zZm9ybTpcIlwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6bX0pLGwuY3NzKHt0cmFuc2Zvcm06XCJzY2FsZShcIitmK1wiKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIn0pLGsuZmluZChcIj4gbGkgPiBhXCIpLmNzcyh7b3BhY2l0eToxfSksYSh3aW5kb3cpLm9uKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiLGZ1bmN0aW9uKCl7ZShiKSxhKHdpbmRvdykub2ZmKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIil9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYlRvb2xiYXJDbG9zZVwiLGZ1bmN0aW9uKGMpe2EoYy50YXJnZXQpLmNsb3Nlc3QoaykubGVuZ3RofHwoZShiKSxhKHdpbmRvdykub2ZmKFwic2Nyb2xsLmZhYlRvb2xiYXJDbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIikpfSl9LDEwMCl9LDApfX0sZT1mdW5jdGlvbihhKXtpZihcInRydWVcIj09PWEuYXR0cihcImRhdGEtb3BlblwiKSl7dmFyIGIsYyxkLGU9d2luZG93LmlubmVyV2lkdGgsZj13aW5kb3cuaW5uZXJIZWlnaHQsZz1hLmF0dHIoXCJkYXRhLW9yaWdpbi13aWR0aFwiKSxoPWEuYXR0cihcImRhdGEtb3JpZ2luLWJvdHRvbVwiKSxpPWEuYXR0cihcImRhdGEtb3JpZ2luLWxlZnRcIiksaj1hLmZpbmQoXCI+IC5idG4tZmxvYXRpbmdcIikuZmlyc3QoKSxrPWEuZmluZChcIj4gdWxcIikuZmlyc3QoKSxsPWEuZmluZChcIi5mYWItYmFja2Ryb3BcIiksbT1qLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7Yj1pLWUvMitnLzIsYz1mLWgsZD1lL2wud2lkdGgoKSxhLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEuYXR0cihcImRhdGEtb3BlblwiLCExKSxhLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJ0cmFuc3BhcmVudFwiLHRyYW5zaXRpb246XCJub25lXCJ9KSxqLmNzcyh7dHJhbnNpdGlvbjpcIm5vbmVcIn0pLGwuY3NzKHt0cmFuc2Zvcm06XCJzY2FsZSgwKVwiLFwiYmFja2dyb3VuZC1jb2xvclwiOm19KSxrLmZpbmQoXCI+IGxpID4gYVwiKS5jc3Moe29wYWNpdHk6XCJcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJlbW92ZSgpLGEuY3NzKHtcInRleHQtYWxpZ25cIjpcIlwiLHdpZHRoOlwiXCIsYm90dG9tOlwiXCIsbGVmdDpcIlwiLG92ZXJmbG93OlwiXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZChcIistYitcInB4LDAsMClcIn0pLGouY3NzKHtvdmVyZmxvdzpcIlwiLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsXCIrYytcInB4LDApXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzXCJ9KSxqLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMCwwLDApXCIsdHJhbnNpdGlvbjpcInRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKVwifSl9LDIwKX0sMjAwKX19fShqUXVlcnkpLGZ1bmN0aW9uKGEpe01hdGVyaWFsaXplLmZhZGVJbkltYWdlPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWM9YShiKTtlbHNle2lmKFwib2JqZWN0XCIhPXR5cGVvZiBiKXJldHVybjtjPWJ9Yy5jc3Moe29wYWNpdHk6MH0pLGEoYykudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjY1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0U2luZVwifSksYShjKS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MTMwMCxxdWV1ZTohMSxlYXNpbmc6XCJzd2luZ1wiLHN0ZXA6ZnVuY3Rpb24oYixjKXtjLnN0YXJ0PTEwMDt2YXIgZD1iLzEwMCxlPTE1MC0oMTAwLWIpLzEuNzU7ZTwxMDAmJihlPTEwMCksYj49MCYmYSh0aGlzKS5jc3Moe1wiLXdlYmtpdC1maWx0ZXJcIjpcImdyYXlzY2FsZShcIitkK1wiKWJyaWdodG5lc3MoXCIrZStcIiUpXCIsZmlsdGVyOlwiZ3JheXNjYWxlKFwiK2QrXCIpYnJpZ2h0bmVzcyhcIitlK1wiJSlcIn0pfX0pfSxNYXRlcmlhbGl6ZS5zaG93U3RhZ2dlcmVkTGlzdD1mdW5jdGlvbihiKXt2YXIgYztpZihcInN0cmluZ1wiPT10eXBlb2YgYiljPWEoYik7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYilyZXR1cm47Yz1ifXZhciBkPTA7Yy5maW5kKFwibGlcIikudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCItMTAwcHhcIn0se2R1cmF0aW9uOjB9KSxjLmZpbmQoXCJsaVwiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjFcIix0cmFuc2xhdGVYOlwiMFwifSx7ZHVyYXRpb246ODAwLGRlbGF5OmQsZWFzaW5nOls2MCwxMF19KSxkKz0xMjB9KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXt2YXIgYj0hMSxjPSExO2EoXCIuZGlzbWlzc2FibGVcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykuaGFtbWVyKHtwcmV2ZW50X2RlZmF1bHQ6ITF9KS5iaW5kKFwicGFuXCIsZnVuY3Rpb24oZCl7aWYoXCJ0b3VjaFwiPT09ZC5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZT1hKHRoaXMpLGY9ZC5nZXN0dXJlLmRpcmVjdGlvbixnPWQuZ2VzdHVyZS5kZWx0YVgsaD1kLmdlc3R1cmUudmVsb2NpdHlYO2UudmVsb2NpdHkoe3RyYW5zbGF0ZVg6Z30se2R1cmF0aW9uOjUwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSw0PT09ZiYmKGc+ZS5pbm5lcldpZHRoKCkvMnx8aDwtLjc1KSYmKGI9ITApLDI9PT1mJiYoZzwtMSplLmlubmVyV2lkdGgoKS8yfHxoPi43NSkmJihjPSEwKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oZCl7aWYoTWF0aC5hYnMoZC5nZXN0dXJlLmRlbHRhWCk8YSh0aGlzKS5pbm5lcldpZHRoKCkvMiYmKGM9ITEsYj0hMSksXCJ0b3VjaFwiPT09ZC5nZXN0dXJlLnBvaW50ZXJUeXBlKXt2YXIgZT1hKHRoaXMpO2lmKGJ8fGMpe3ZhciBmO2Y9Yj9lLmlubmVyV2lkdGgoKTotMSplLmlubmVyV2lkdGgoKSxlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmZ9LHtkdXJhdGlvbjoxMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2UuY3NzKFwiYm9yZGVyXCIsXCJub25lXCIpLGUudmVsb2NpdHkoe2hlaWdodDowLHBhZGRpbmc6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZS5yZW1vdmUoKX19KX19KX1lbHNlIGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjEwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSk7Yj0hMSxjPSExfX0pfSl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXt2YXIgYj0hMTtNYXRlcmlhbGl6ZS5zY3JvbGxGaXJlPWZ1bmN0aW9uKGEpe3ZhciBjPWZ1bmN0aW9uKCl7Zm9yKHZhciBiPXdpbmRvdy5wYWdlWU9mZnNldCt3aW5kb3cuaW5uZXJIZWlnaHQsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5zZWxlY3RvcixmPWQub2Zmc2V0LGc9ZC5jYWxsYmFjayxoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYobnVsbCE9PWgpe3ZhciBpPWguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK3dpbmRvdy5wYWdlWU9mZnNldDtpZihiPmkrZiYmZC5kb25lIT09ITApe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGcpZy5jYWxsKHRoaXMsaCk7ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgZyl7dmFyIGo9bmV3IEZ1bmN0aW9uKGcpO2ooaCl9ZC5kb25lPSEwfX19fSxkPU1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCl7YygpfSxhLnRocm90dGxlfHwxMDApO2J8fCh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCksYj0hMCksc2V0VGltZW91dChkLDApfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwicGlja2VyXCIsW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6dGhpcy5QaWNrZXI9YShqUXVlcnkpfShmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGYsZyxpLGwpe2Z1bmN0aW9uIG0oKXtyZXR1cm4gYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIix5LmNvbXBvbmVudC5ub2Rlcyh0Lm9wZW4pLHYuYm94KSx2LndyYXApLHYuZnJhbWUpLHYuaG9sZGVyKX1mdW5jdGlvbiBuKCl7dy5kYXRhKGcseSkuYWRkQ2xhc3Modi5pbnB1dCkuYXR0cihcInRhYmluZGV4XCIsLTEpLnZhbCh3LmRhdGEoXCJ2YWx1ZVwiKT95LmdldChcInNlbGVjdFwiLHUuZm9ybWF0KTpmLnZhbHVlKSx1LmVkaXRhYmxlfHx3Lm9uKFwiZm9jdXMuXCIrdC5pZCtcIiBjbGljay5cIit0LmlkLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKSx5LiRyb290LmVxKDApLmZvY3VzKCl9KS5vbihcImtleWRvd24uXCIrdC5pZCxxKSxlKGYse2hhc3BvcHVwOiEwLGV4cGFuZGVkOiExLHJlYWRvbmx5OiExLG93bnM6Zi5pZCtcIl9yb290XCJ9KX1mdW5jdGlvbiBvKCl7eS4kcm9vdC5vbih7a2V5ZG93bjpxLGZvY3VzaW46ZnVuY3Rpb24oYSl7eS4kcm9vdC5yZW1vdmVDbGFzcyh2LmZvY3VzZWQpLGEuc3RvcFByb3BhZ2F0aW9uKCl9LFwibW91c2Vkb3duIGNsaWNrXCI6ZnVuY3Rpb24oYil7dmFyIGM9Yi50YXJnZXQ7YyE9eS4kcm9vdC5jaGlsZHJlbigpWzBdJiYoYi5zdG9wUHJvcGFnYXRpb24oKSxcIm1vdXNlZG93blwiIT1iLnR5cGV8fGEoYykuaXMoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBvcHRpb25cIil8fChiLnByZXZlbnREZWZhdWx0KCkseS4kcm9vdC5lcSgwKS5mb2N1cygpKSl9fSkub24oe2ZvY3VzOmZ1bmN0aW9uKCl7dy5hZGRDbGFzcyh2LnRhcmdldCl9LGJsdXI6ZnVuY3Rpb24oKXt3LnJlbW92ZUNsYXNzKHYudGFyZ2V0KX19KS5vbihcImZvY3VzLnRvT3BlblwiLHIpLm9uKFwiY2xpY2tcIixcIltkYXRhLXBpY2tdLCBbZGF0YS1uYXZdLCBbZGF0YS1jbGVhcl0sIFtkYXRhLWNsb3NlXVwiLGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuZGF0YSgpLGQ9Yi5oYXNDbGFzcyh2Lm5hdkRpc2FibGVkKXx8Yi5oYXNDbGFzcyh2LmRpc2FibGVkKSxlPWgoKTtlPWUmJihlLnR5cGV8fGUuaHJlZiksKGR8fGUmJiFhLmNvbnRhaW5zKHkuJHJvb3RbMF0sZSkpJiZ5LiRyb290LmVxKDApLmZvY3VzKCksIWQmJmMubmF2P3kuc2V0KFwiaGlnaGxpZ2h0XCIseS5jb21wb25lbnQuaXRlbS5oaWdobGlnaHQse25hdjpjLm5hdn0pOiFkJiZcInBpY2tcImluIGM/eS5zZXQoXCJzZWxlY3RcIixjLnBpY2spOmMuY2xlYXI/eS5jbGVhcigpLmNsb3NlKCEwKTpjLmNsb3NlJiZ5LmNsb3NlKCEwKX0pLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCEwKX1mdW5jdGlvbiBwKCl7dmFyIGI7dS5oaWRkZW5OYW1lPT09ITA/KGI9Zi5uYW1lLGYubmFtZT1cIlwiKTooYj1bXCJzdHJpbmdcIj09dHlwZW9mIHUuaGlkZGVuUHJlZml4P3UuaGlkZGVuUHJlZml4OlwiXCIsXCJzdHJpbmdcIj09dHlwZW9mIHUuaGlkZGVuU3VmZml4P3UuaGlkZGVuU3VmZml4OlwiX3N1Ym1pdFwiXSxiPWJbMF0rZi5uYW1lK2JbMV0pLHkuX2hpZGRlbj1hKCc8aW5wdXQgdHlwZT1oaWRkZW4gbmFtZT1cIicrYisnXCInKyh3LmRhdGEoXCJ2YWx1ZVwiKXx8Zi52YWx1ZT8nIHZhbHVlPVwiJyt5LmdldChcInNlbGVjdFwiLHUuZm9ybWF0U3VibWl0KSsnXCInOlwiXCIpK1wiPlwiKVswXSx3Lm9uKFwiY2hhbmdlLlwiK3QuaWQsZnVuY3Rpb24oKXt5Ll9oaWRkZW4udmFsdWU9Zi52YWx1ZT95LmdldChcInNlbGVjdFwiLHUuZm9ybWF0U3VibWl0KTpcIlwifSksdS5jb250YWluZXI/YSh1LmNvbnRhaW5lcikuYXBwZW5kKHkuX2hpZGRlbik6dy5hZnRlcih5Ll9oaWRkZW4pfWZ1bmN0aW9uIHEoYSl7dmFyIGI9YS5rZXlDb2RlLGM9L14oOHw0NikkLy50ZXN0KGIpO3JldHVybiAyNz09Yj8oeS5jbG9zZSgpLCExKTp2b2lkKCgzMj09Ynx8Y3x8IXQub3BlbiYmeS5jb21wb25lbnQua2V5W2JdKSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLGM/eS5jbGVhcigpLmNsb3NlKCk6eS5vcGVuKCkpKX1mdW5jdGlvbiByKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCksXCJmb2N1c1wiPT1hLnR5cGUmJnkuJHJvb3QuYWRkQ2xhc3Modi5mb2N1c2VkKSx5Lm9wZW4oKX1pZighZilyZXR1cm4gYjt2YXIgcz0hMSx0PXtpZDpmLmlkfHxcIlBcIitNYXRoLmFicyh+fihNYXRoLnJhbmRvbSgpKm5ldyBEYXRlKSl9LHU9aT9hLmV4dGVuZCghMCx7fSxpLmRlZmF1bHRzLGwpOmx8fHt9LHY9YS5leHRlbmQoe30sYi5rbGFzc2VzKCksdS5rbGFzcyksdz1hKGYpLHg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGFydCgpfSx5PXgucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjp4LCRub2RlOncsc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCYmdC5zdGFydD95Oih0Lm1ldGhvZHM9e30sdC5zdGFydD0hMCx0Lm9wZW49ITEsdC50eXBlPWYudHlwZSxmLmF1dG9mb2N1cz1mPT1oKCksZi5yZWFkT25seT0hdS5lZGl0YWJsZSxmLmlkPWYuaWR8fHQuaWQsXCJ0ZXh0XCIhPWYudHlwZSYmKGYudHlwZT1cInRleHRcIikseS5jb21wb25lbnQ9bmV3IGkoeSx1KSx5LiRyb290PWEoYi5fLm5vZGUoXCJkaXZcIixtKCksdi5waWNrZXIsJ2lkPVwiJytmLmlkKydfcm9vdFwiIHRhYmluZGV4PVwiMFwiJykpLG8oKSx1LmZvcm1hdFN1Ym1pdCYmcCgpLG4oKSx1LmNvbnRhaW5lcj9hKHUuY29udGFpbmVyKS5hcHBlbmQoeS4kcm9vdCk6dy5hZnRlcih5LiRyb290KSx5Lm9uKHtzdGFydDp5LmNvbXBvbmVudC5vblN0YXJ0LHJlbmRlcjp5LmNvbXBvbmVudC5vblJlbmRlcixzdG9wOnkuY29tcG9uZW50Lm9uU3RvcCxvcGVuOnkuY29tcG9uZW50Lm9uT3BlbixjbG9zZTp5LmNvbXBvbmVudC5vbkNsb3NlLHNldDp5LmNvbXBvbmVudC5vblNldH0pLm9uKHtzdGFydDp1Lm9uU3RhcnQscmVuZGVyOnUub25SZW5kZXIsc3RvcDp1Lm9uU3RvcCxvcGVuOnUub25PcGVuLGNsb3NlOnUub25DbG9zZSxzZXQ6dS5vblNldH0pLHM9Yyh5LiRyb290LmNoaWxkcmVuKClbMF0pLGYuYXV0b2ZvY3VzJiZ5Lm9wZW4oKSx5LnRyaWdnZXIoXCJzdGFydFwiKS50cmlnZ2VyKFwicmVuZGVyXCIpKX0scmVuZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhP3kuJHJvb3QuaHRtbChtKCkpOnkuJHJvb3QuZmluZChcIi5cIit2LmJveCkuaHRtbCh5LmNvbXBvbmVudC5ub2Rlcyh0Lm9wZW4pKSx5LnRyaWdnZXIoXCJyZW5kZXJcIil9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gdC5zdGFydD8oeS5jbG9zZSgpLHkuX2hpZGRlbiYmeS5faGlkZGVuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeS5faGlkZGVuKSx5LiRyb290LnJlbW92ZSgpLHcucmVtb3ZlQ2xhc3Modi5pbnB1dCkucmVtb3ZlRGF0YShnKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dy5vZmYoXCIuXCIrdC5pZCl9LDApLGYudHlwZT10LnR5cGUsZi5yZWFkT25seT0hMSx5LnRyaWdnZXIoXCJzdG9wXCIpLHQubWV0aG9kcz17fSx0LnN0YXJ0PSExLHkpOnl9LG9wZW46ZnVuY3Rpb24oYyl7cmV0dXJuIHQub3Blbj95Oih3LmFkZENsYXNzKHYuYWN0aXZlKSxlKGYsXCJleHBhbmRlZFwiLCEwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5hZGRDbGFzcyh2Lm9wZW5lZCksZSh5LiRyb290WzBdLFwiaGlkZGVuXCIsITEpfSwwKSxjIT09ITEmJih0Lm9wZW49ITAscyYmay5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLmNzcyhcInBhZGRpbmctcmlnaHRcIixcIis9XCIrZCgpKSx5LiRyb290LmVxKDApLmZvY3VzKCksai5vbihcImNsaWNrLlwiK3QuaWQrXCIgZm9jdXNpbi5cIit0LmlkLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O2IhPWYmJmIhPWRvY3VtZW50JiYzIT1hLndoaWNoJiZ5LmNsb3NlKGI9PT15LiRyb290LmNoaWxkcmVuKClbMF0pfSkub24oXCJrZXlkb3duLlwiK3QuaWQsZnVuY3Rpb24oYyl7dmFyIGQ9Yy5rZXlDb2RlLGU9eS5jb21wb25lbnQua2V5W2RdLGY9Yy50YXJnZXQ7Mjc9PWQ/eS5jbG9zZSghMCk6ZiE9eS4kcm9vdFswXXx8IWUmJjEzIT1kP2EuY29udGFpbnMoeS4kcm9vdFswXSxmKSYmMTM9PWQmJihjLnByZXZlbnREZWZhdWx0KCksZi5jbGljaygpKTooYy5wcmV2ZW50RGVmYXVsdCgpLGU/Yi5fLnRyaWdnZXIoeS5jb21wb25lbnQua2V5LmdvLHksW2IuXy50cmlnZ2VyKGUpXSk6eS4kcm9vdC5maW5kKFwiLlwiK3YuaGlnaGxpZ2h0ZWQpLmhhc0NsYXNzKHYuZGlzYWJsZWQpfHx5LnNldChcInNlbGVjdFwiLHkuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0KS5jbG9zZSgpKX0pKSx5LnRyaWdnZXIoXCJvcGVuXCIpKX0sY2xvc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJih5LiRyb290Lm9mZihcImZvY3VzLnRvT3BlblwiKS5lcSgwKS5mb2N1cygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LiRyb290Lm9uKFwiZm9jdXMudG9PcGVuXCIscil9LDApKSx3LnJlbW92ZUNsYXNzKHYuYWN0aXZlKSxlKGYsXCJleHBhbmRlZFwiLCExKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5yZW1vdmVDbGFzcyh2Lm9wZW5lZCtcIiBcIit2LmZvY3VzZWQpLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCEwKX0sMCksdC5vcGVuPyh0Lm9wZW49ITEscyYmay5jc3MoXCJvdmVyZmxvd1wiLFwiXCIpLmNzcyhcInBhZGRpbmctcmlnaHRcIixcIi09XCIrZCgpKSxqLm9mZihcIi5cIit0LmlkKSx5LnRyaWdnZXIoXCJjbG9zZVwiKSk6eX0sY2xlYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHkuc2V0KFwiY2xlYXJcIixudWxsLGEpfSxzZXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZz1hLmlzUGxhaW5PYmplY3QoYiksaD1nP2I6e307aWYoZD1nJiZhLmlzUGxhaW5PYmplY3QoYyk/YzpkfHx7fSxiKXtnfHwoaFtiXT1jKTtmb3IoZSBpbiBoKWY9aFtlXSxlIGluIHkuY29tcG9uZW50Lml0ZW0mJih2b2lkIDA9PT1mJiYoZj1udWxsKSx5LmNvbXBvbmVudC5zZXQoZSxmLGQpKSxcInNlbGVjdFwiIT1lJiZcImNsZWFyXCIhPWV8fHcudmFsKFwiY2xlYXJcIj09ZT9cIlwiOnkuZ2V0KGUsdS5mb3JtYXQpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO3kucmVuZGVyKCl9cmV0dXJuIGQubXV0ZWQ/eTp5LnRyaWdnZXIoXCJzZXRcIixoKX0sZ2V0OmZ1bmN0aW9uKGEsYyl7aWYoYT1hfHxcInZhbHVlXCIsbnVsbCE9dFthXSlyZXR1cm4gdFthXTtpZihcInZhbHVlU3VibWl0XCI9PWEpe2lmKHkuX2hpZGRlbilyZXR1cm4geS5faGlkZGVuLnZhbHVlO2E9XCJ2YWx1ZVwifWlmKFwidmFsdWVcIj09YSlyZXR1cm4gZi52YWx1ZTtpZihhIGluIHkuY29tcG9uZW50Lml0ZW0pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjKXt2YXIgZD15LmNvbXBvbmVudC5nZXQoYSk7cmV0dXJuIGQ/Yi5fLnRyaWdnZXIoeS5jb21wb25lbnQuZm9ybWF0cy50b1N0cmluZyx5LmNvbXBvbmVudCxbYyxkXSk6XCJcIn1yZXR1cm4geS5jb21wb25lbnQuZ2V0KGEpfX0sb246ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZz1hLmlzUGxhaW5PYmplY3QoYiksaD1nP2I6e307aWYoYil7Z3x8KGhbYl09Yyk7Zm9yKGUgaW4gaClmPWhbZV0sZCYmKGU9XCJfXCIrZSksdC5tZXRob2RzW2VdPXQubWV0aG9kc1tlXXx8W10sdC5tZXRob2RzW2VdLnB1c2goZil9cmV0dXJuIHl9LG9mZjpmdW5jdGlvbigpe3ZhciBhLGIsYz1hcmd1bWVudHM7Zm9yKGE9MCxuYW1lc0NvdW50PWMubGVuZ3RoO2E8bmFtZXNDb3VudDthKz0xKWI9Y1thXSxiIGluIHQubWV0aG9kcyYmZGVsZXRlIHQubWV0aG9kc1tiXTtyZXR1cm4geX0sdHJpZ2dlcjpmdW5jdGlvbihhLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBkPXQubWV0aG9kc1thXTtkJiZkLm1hcChmdW5jdGlvbihhKXtiLl8udHJpZ2dlcihhLHksW2NdKX0pfTtyZXR1cm4gZChcIl9cIithKSxkKGEpLHl9fTtyZXR1cm4gbmV3IHh9ZnVuY3Rpb24gYyhhKXt2YXIgYixjPVwicG9zaXRpb25cIjtyZXR1cm4gYS5jdXJyZW50U3R5bGU/Yj1hLmN1cnJlbnRTdHlsZVtjXTp3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSYmKGI9Z2V0Q29tcHV0ZWRTdHlsZShhKVtjXSksXCJmaXhlZFwiPT1ifWZ1bmN0aW9uIGQoKXtpZihrLmhlaWdodCgpPD1pLmhlaWdodCgpKXJldHVybiAwO3ZhciBiPWEoJzxkaXYgc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDoxMDBweFwiIC8+JykuYXBwZW5kVG8oXCJib2R5XCIpLGM9YlswXS5vZmZzZXRXaWR0aDtiLmNzcyhcIm92ZXJmbG93XCIsXCJzY3JvbGxcIik7dmFyIGQ9YSgnPGRpdiBzdHlsZT1cIndpZHRoOjEwMCVcIiAvPicpLmFwcGVuZFRvKGIpLGU9ZFswXS5vZmZzZXRXaWR0aDtyZXR1cm4gYi5yZW1vdmUoKSxjLWV9ZnVuY3Rpb24gZShiLGMsZCl7aWYoYS5pc1BsYWluT2JqZWN0KGMpKWZvcih2YXIgZSBpbiBjKWYoYixlLGNbZV0pO2Vsc2UgZihiLGMsZCl9ZnVuY3Rpb24gZihhLGIsYyl7YS5zZXRBdHRyaWJ1dGUoKFwicm9sZVwiPT1iP1wiXCI6XCJhcmlhLVwiKStiLGMpfWZ1bmN0aW9uIGcoYixjKXthLmlzUGxhaW5PYmplY3QoYil8fChiPXthdHRyaWJ1dGU6Y30pLGM9XCJcIjtmb3IodmFyIGQgaW4gYil7dmFyIGU9KFwicm9sZVwiPT1kP1wiXCI6XCJhcmlhLVwiKStkLGY9YltkXTtjKz1udWxsPT1mP1wiXCI6ZSsnPVwiJytiW2RdKydcIid9cmV0dXJuIGN9ZnVuY3Rpb24gaCgpe3RyeXtyZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fXZhciBpPWEod2luZG93KSxqPWEoZG9jdW1lbnQpLGs9YShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO3JldHVybiBiLmtsYXNzZXM9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YXx8XCJwaWNrZXJcIix7cGlja2VyOmEsb3BlbmVkOmErXCItLW9wZW5lZFwiLGZvY3VzZWQ6YStcIi0tZm9jdXNlZFwiLGlucHV0OmErXCJfX2lucHV0XCIsYWN0aXZlOmErXCJfX2lucHV0LS1hY3RpdmVcIix0YXJnZXQ6YStcIl9faW5wdXQtLXRhcmdldFwiLGhvbGRlcjphK1wiX19ob2xkZXJcIixmcmFtZTphK1wiX19mcmFtZVwiLHdyYXA6YStcIl9fd3JhcFwiLGJveDphK1wiX19ib3hcIn19LGIuXz17Z3JvdXA6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9XCJcIixlPWIuXy50cmlnZ2VyKGEubWluLGEpO2U8PWIuXy50cmlnZ2VyKGEubWF4LGEsW2VdKTtlKz1hLmkpYz1iLl8udHJpZ2dlcihhLml0ZW0sYSxbZV0pLGQrPWIuXy5ub2RlKGEubm9kZSxjWzBdLGNbMV0sY1syXSk7cmV0dXJuIGR9LG5vZGU6ZnVuY3Rpb24oYixjLGQsZSl7cmV0dXJuIGM/KGM9YS5pc0FycmF5KGMpP2Muam9pbihcIlwiKTpjLGQ9ZD8nIGNsYXNzPVwiJytkKydcIic6XCJcIixlPWU/XCIgXCIrZTpcIlwiLFwiPFwiK2IrZCtlK1wiPlwiK2MrXCI8L1wiK2IrXCI+XCIpOlwiXCJ9LGxlYWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE8MTA/XCIwXCI6XCJcIikrYX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLmFwcGx5KGIsY3x8W10pOmF9LGRpZ2l0czpmdW5jdGlvbihhKXtyZXR1cm4vXFxkLy50ZXN0KGFbMV0pPzI6MX0saXNEYXRlOmZ1bmN0aW9uKGEpe3JldHVybnt9LnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIkRhdGVcIik+LTEmJnRoaXMuaXNJbnRlZ2VyKGEuZ2V0RGF0ZSgpKX0saXNJbnRlZ2VyOmZ1bmN0aW9uKGEpe3JldHVybnt9LnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIk51bWJlclwiKT4tMSYmYSUxPT09MH0sYXJpYUF0dHI6Z30sYi5leHRlbmQ9ZnVuY3Rpb24oYyxkKXthLmZuW2NdPWZ1bmN0aW9uKGUsZil7dmFyIGc9dGhpcy5kYXRhKGMpO3JldHVyblwicGlja2VyXCI9PWU/ZzpnJiZcInN0cmluZ1wiPT10eXBlb2YgZT9iLl8udHJpZ2dlcihnW2VdLGcsW2ZdKTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZj1hKHRoaXMpO2YuZGF0YShjKXx8bmV3IGIodGhpcyxjLGQsZSl9KX0sYS5mbltjXS5kZWZhdWx0cz1kLmRlZmF1bHRzfSxifSksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJwaWNrZXJcIixcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCIuL3BpY2tlci5qc1wiKSxyZXF1aXJlKFwianF1ZXJ5XCIpKTphKFBpY2tlcixqUXVlcnkpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXt2YXIgYz10aGlzLGQ9YS4kbm9kZVswXSxlPWQudmFsdWUsZj1hLiRub2RlLmRhdGEoXCJ2YWx1ZVwiKSxnPWZ8fGUsaD1mP2IuZm9ybWF0U3VibWl0OmIuZm9ybWF0LGk9ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXJyZW50U3R5bGU/XCJydGxcIj09ZC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uOlwicnRsXCI9PWdldENvbXB1dGVkU3R5bGUoYS4kcm9vdFswXSkuZGlyZWN0aW9ufTtjLnNldHRpbmdzPWIsYy4kbm9kZT1hLiRub2RlLGMucXVldWU9e21pbjpcIm1lYXN1cmUgY3JlYXRlXCIsbWF4OlwibWVhc3VyZSBjcmVhdGVcIixub3c6XCJub3cgY3JlYXRlXCIsc2VsZWN0OlwicGFyc2UgY3JlYXRlIHZhbGlkYXRlXCIsaGlnaGxpZ2h0OlwicGFyc2UgbmF2aWdhdGUgY3JlYXRlIHZhbGlkYXRlXCIsdmlldzpcInBhcnNlIGNyZWF0ZSB2YWxpZGF0ZSB2aWV3c2V0XCIsZGlzYWJsZTpcImRlYWN0aXZhdGVcIixlbmFibGU6XCJhY3RpdmF0ZVwifSxjLml0ZW09e30sYy5pdGVtLmNsZWFyPW51bGwsYy5pdGVtLmRpc2FibGU9KGIuZGlzYWJsZXx8W10pLnNsaWNlKDApLGMuaXRlbS5lbmFibGU9LWZ1bmN0aW9uKGEpe3JldHVybiBhWzBdPT09ITA/YS5zaGlmdCgpOi0xfShjLml0ZW0uZGlzYWJsZSksYy5zZXQoXCJtaW5cIixiLm1pbikuc2V0KFwibWF4XCIsYi5tYXgpLnNldChcIm5vd1wiKSxnP2Muc2V0KFwic2VsZWN0XCIsZyx7Zm9ybWF0Omh9KTpjLnNldChcInNlbGVjdFwiLG51bGwpLnNldChcImhpZ2hsaWdodFwiLGMuaXRlbS5ub3cpLGMua2V5PXs0MDo3LDM4Oi03LDM5OmZ1bmN0aW9uKCl7cmV0dXJuIGkoKT8tMToxfSwzNzpmdW5jdGlvbigpe3JldHVybiBpKCk/MTotMX0sZ286ZnVuY3Rpb24oYSl7dmFyIGI9Yy5pdGVtLmhpZ2hsaWdodCxkPW5ldyBEYXRlKGIueWVhcixiLm1vbnRoLGIuZGF0ZSthKTtjLnNldChcImhpZ2hsaWdodFwiLGQse2ludGVydmFsOmF9KSx0aGlzLnJlbmRlcigpfX0sYS5vbihcInJlbmRlclwiLGZ1bmN0aW9uKCl7YS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0TW9udGgpLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYz10aGlzLnZhbHVlO2MmJihhLnNldChcImhpZ2hsaWdodFwiLFthLmdldChcInZpZXdcIikueWVhcixjLGEuZ2V0KFwiaGlnaGxpZ2h0XCIpLmRhdGVdKSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RNb250aCkudHJpZ2dlcihcImZvY3VzXCIpKX0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdFllYXIpLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYz10aGlzLnZhbHVlO2MmJihhLnNldChcImhpZ2hsaWdodFwiLFtjLGEuZ2V0KFwidmlld1wiKS5tb250aCxhLmdldChcImhpZ2hsaWdodFwiKS5kYXRlXSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0WWVhcikudHJpZ2dlcihcImZvY3VzXCIpKX0pfSwxKS5vbihcIm9wZW5cIixmdW5jdGlvbigpe3ZhciBkPVwiXCI7Yy5kaXNhYmxlZChjLmdldChcIm5vd1wiKSkmJihkPVwiOm5vdCguXCIrYi5rbGFzcy5idXR0b25Ub2RheStcIilcIiksYS4kcm9vdC5maW5kKFwiYnV0dG9uXCIrZCtcIiwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCExKX0sMSkub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7YS4kcm9vdC5maW5kKFwiYnV0dG9uLCBzZWxlY3RcIikuYXR0cihcImRpc2FibGVkXCIsITApfSwxKX12YXIgZD03LGU9NixmPWEuXztjLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW07cmV0dXJuIG51bGw9PT1iPyhcImNsZWFyXCI9PWEmJihhPVwic2VsZWN0XCIpLGVbYV09YixkKTooZVtcImVuYWJsZVwiPT1hP1wiZGlzYWJsZVwiOlwiZmxpcFwiPT1hP1wiZW5hYmxlXCI6YV09ZC5xdWV1ZVthXS5zcGxpdChcIiBcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBiPWRbZV0oYSxiLGMpfSkucG9wKCksXCJzZWxlY3RcIj09YT9kLnNldChcImhpZ2hsaWdodFwiLGUuc2VsZWN0LGMpOlwiaGlnaGxpZ2h0XCI9PWE/ZC5zZXQoXCJ2aWV3XCIsZS5oaWdobGlnaHQsYyk6YS5tYXRjaCgvXihmbGlwfG1pbnxtYXh8ZGlzYWJsZXxlbmFibGUpJC8pJiYoZS5zZWxlY3QmJmQuZGlzYWJsZWQoZS5zZWxlY3QpJiZkLnNldChcInNlbGVjdFwiLGUuc2VsZWN0LGMpLFxuZS5oaWdobGlnaHQmJmQuZGlzYWJsZWQoZS5oaWdobGlnaHQpJiZkLnNldChcImhpZ2hsaWdodFwiLGUuaGlnaGxpZ2h0LGMpKSxkKX0sYy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLml0ZW1bYV19LGMucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZz10aGlzO3JldHVybiBjPXZvaWQgMD09PWM/YTpjLGM9PS0oMS8wKXx8Yz09MS8wP2U9YzpiLmlzUGxhaW5PYmplY3QoYykmJmYuaXNJbnRlZ2VyKGMucGljayk/Yz1jLm9iajpiLmlzQXJyYXkoYyk/KGM9bmV3IERhdGUoY1swXSxjWzFdLGNbMl0pLGM9Zi5pc0RhdGUoYyk/YzpnLmNyZWF0ZSgpLm9iaik6Yz1mLmlzSW50ZWdlcihjKXx8Zi5pc0RhdGUoYyk/Zy5ub3JtYWxpemUobmV3IERhdGUoYyksZCk6Zy5ub3coYSxjLGQpLHt5ZWFyOmV8fGMuZ2V0RnVsbFllYXIoKSxtb250aDplfHxjLmdldE1vbnRoKCksZGF0ZTplfHxjLmdldERhdGUoKSxkYXk6ZXx8Yy5nZXREYXkoKSxvYmo6ZXx8YyxwaWNrOmV8fGMuZ2V0VGltZSgpfX0sYy5wcm90b3R5cGUuY3JlYXRlUmFuZ2U9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT0hMHx8Yi5pc0FycmF5KGEpfHxmLmlzRGF0ZShhKT9kLmNyZWF0ZShhKTphfTtyZXR1cm4gZi5pc0ludGVnZXIoYSl8fChhPWUoYSkpLGYuaXNJbnRlZ2VyKGMpfHwoYz1lKGMpKSxmLmlzSW50ZWdlcihhKSYmYi5pc1BsYWluT2JqZWN0KGMpP2E9W2MueWVhcixjLm1vbnRoLGMuZGF0ZSthXTpmLmlzSW50ZWdlcihjKSYmYi5pc1BsYWluT2JqZWN0KGEpJiYoYz1bYS55ZWFyLGEubW9udGgsYS5kYXRlK2NdKSx7ZnJvbTplKGEpLHRvOmUoYyl9fSxjLnByb3RvdHlwZS53aXRoaW5SYW5nZT1mdW5jdGlvbihhLGIpe3JldHVybiBhPXRoaXMuY3JlYXRlUmFuZ2UoYS5mcm9tLGEudG8pLGIucGljaz49YS5mcm9tLnBpY2smJmIucGljazw9YS50by5waWNrfSxjLnByb3RvdHlwZS5vdmVybGFwUmFuZ2VzPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYT1jLmNyZWF0ZVJhbmdlKGEuZnJvbSxhLnRvKSxiPWMuY3JlYXRlUmFuZ2UoYi5mcm9tLGIudG8pLGMud2l0aGluUmFuZ2UoYSxiLmZyb20pfHxjLndpdGhpblJhbmdlKGEsYi50byl8fGMud2l0aGluUmFuZ2UoYixhLmZyb20pfHxjLndpdGhpblJhbmdlKGIsYS50byl9LGMucHJvdG90eXBlLm5vdz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9bmV3IERhdGUsYyYmYy5yZWwmJmIuc2V0RGF0ZShiLmdldERhdGUoKStjLnJlbCksdGhpcy5ub3JtYWxpemUoYixjKX0sYy5wcm90b3R5cGUubmF2aWdhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGYsZyxoLGk9Yi5pc0FycmF5KGMpLGo9Yi5pc1BsYWluT2JqZWN0KGMpLGs9dGhpcy5pdGVtLnZpZXc7aWYoaXx8ail7Zm9yKGo/KGY9Yy55ZWFyLGc9Yy5tb250aCxoPWMuZGF0ZSk6KGY9K2NbMF0sZz0rY1sxXSxoPStjWzJdKSxkJiZkLm5hdiYmayYmay5tb250aCE9PWcmJihmPWsueWVhcixnPWsubW9udGgpLGU9bmV3IERhdGUoZixnKyhkJiZkLm5hdj9kLm5hdjowKSwxKSxmPWUuZ2V0RnVsbFllYXIoKSxnPWUuZ2V0TW9udGgoKTtuZXcgRGF0ZShmLGcsaCkuZ2V0TW9udGgoKSE9PWc7KWgtPTE7Yz1bZixnLGhdfXJldHVybiBjfSxjLnByb3RvdHlwZS5ub3JtYWxpemU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2V0SG91cnMoMCwwLDAsMCksYX0sYy5wcm90b3R5cGUubWVhc3VyZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGI/XCJzdHJpbmdcIj09dHlwZW9mIGI/Yj1jLnBhcnNlKGEsYik6Zi5pc0ludGVnZXIoYikmJihiPWMubm93KGEsYix7cmVsOmJ9KSk6Yj1cIm1pblwiPT1hPy0oMS8wKToxLzAsYn0sYy5wcm90b3R5cGUudmlld3NldD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmNyZWF0ZShbYi55ZWFyLGIubW9udGgsMV0pfSxjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGUsZyxoLGksaj10aGlzLGs9YyxsPWQmJmQuaW50ZXJ2YWw/ZC5pbnRlcnZhbDoxLG09ai5pdGVtLmVuYWJsZT09PS0xLG49ai5pdGVtLm1pbixvPWouaXRlbS5tYXgscD1tJiZqLml0ZW0uZGlzYWJsZS5maWx0ZXIoZnVuY3Rpb24oYSl7aWYoYi5pc0FycmF5KGEpKXt2YXIgZD1qLmNyZWF0ZShhKS5waWNrO2Q8Yy5waWNrP2U9ITA6ZD5jLnBpY2smJihnPSEwKX1yZXR1cm4gZi5pc0ludGVnZXIoYSl9KS5sZW5ndGg7aWYoKCFkfHwhZC5uYXYpJiYoIW0mJmouZGlzYWJsZWQoYyl8fG0mJmouZGlzYWJsZWQoYykmJihwfHxlfHxnKXx8IW0mJihjLnBpY2s8PW4ucGlja3x8Yy5waWNrPj1vLnBpY2spKSlmb3IobSYmIXAmJighZyYmbD4wfHwhZSYmbDwwKSYmKGwqPS0xKTtqLmRpc2FibGVkKGMpJiYoTWF0aC5hYnMobCk+MSYmKGMubW9udGg8ay5tb250aHx8Yy5tb250aD5rLm1vbnRoKSYmKGM9ayxsPWw+MD8xOi0xKSxjLnBpY2s8PW4ucGljaz8oaD0hMCxsPTEsYz1qLmNyZWF0ZShbbi55ZWFyLG4ubW9udGgsbi5kYXRlKyhjLnBpY2s9PT1uLnBpY2s/MDotMSldKSk6Yy5waWNrPj1vLnBpY2smJihpPSEwLGw9LTEsYz1qLmNyZWF0ZShbby55ZWFyLG8ubW9udGgsby5kYXRlKyhjLnBpY2s9PT1vLnBpY2s/MDoxKV0pKSwhaHx8IWkpOyljPWouY3JlYXRlKFtjLnllYXIsYy5tb250aCxjLmRhdGUrbF0pO3JldHVybiBjfSxjLnByb3RvdHlwZS5kaXNhYmxlZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9Yy5pdGVtLmRpc2FibGUuZmlsdGVyKGZ1bmN0aW9uKGQpe3JldHVybiBmLmlzSW50ZWdlcihkKT9hLmRheT09PShjLnNldHRpbmdzLmZpcnN0RGF5P2Q6ZC0xKSU3OmIuaXNBcnJheShkKXx8Zi5pc0RhdGUoZCk/YS5waWNrPT09Yy5jcmVhdGUoZCkucGljazpiLmlzUGxhaW5PYmplY3QoZCk/Yy53aXRoaW5SYW5nZShkLGEpOnZvaWQgMH0pO3JldHVybiBkPWQubGVuZ3RoJiYhZC5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGIuaXNBcnJheShhKSYmXCJpbnZlcnRlZFwiPT1hWzNdfHxiLmlzUGxhaW5PYmplY3QoYSkmJmEuaW52ZXJ0ZWR9KS5sZW5ndGgsYy5pdGVtLmVuYWJsZT09PS0xPyFkOmR8fGEucGljazxjLml0ZW0ubWluLnBpY2t8fGEucGljaz5jLml0ZW0ubWF4LnBpY2t9LGMucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9e307cmV0dXJuIGImJlwic3RyaW5nXCI9PXR5cGVvZiBiPyhjJiZjLmZvcm1hdHx8KGM9Y3x8e30sYy5mb3JtYXQ9ZC5zZXR0aW5ncy5mb3JtYXQpLGQuZm9ybWF0cy50b0FycmF5KGMuZm9ybWF0KS5tYXAoZnVuY3Rpb24oYSl7dmFyIGM9ZC5mb3JtYXRzW2FdLGc9Yz9mLnRyaWdnZXIoYyxkLFtiLGVdKTphLnJlcGxhY2UoL14hLyxcIlwiKS5sZW5ndGg7YyYmKGVbYV09Yi5zdWJzdHIoMCxnKSksYj1iLnN1YnN0cihnKX0pLFtlLnl5eXl8fGUueXksKyhlLm1tfHxlLm0pLTEsZS5kZHx8ZS5kXSk6Yn0sYy5wcm90b3R5cGUuZm9ybWF0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiLGMpe3ZhciBkPWEubWF0Y2goL1xcdysvKVswXTtyZXR1cm4gYy5tbXx8Yy5tfHwoYy5tPWIuaW5kZXhPZihkKSsxKSxkLmxlbmd0aH1mdW5jdGlvbiBiKGEpe3JldHVybiBhLm1hdGNoKC9cXHcrLylbMF0ubGVuZ3RofXJldHVybntkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/Zi5kaWdpdHMoYSk6Yi5kYXRlfSxkZDpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6Zi5sZWFkKGIuZGF0ZSl9LGRkZDpmdW5jdGlvbihhLGMpe3JldHVybiBhP2IoYSk6dGhpcy5zZXR0aW5ncy53ZWVrZGF5c1Nob3J0W2MuZGF5XX0sZGRkZDpmdW5jdGlvbihhLGMpe3JldHVybiBhP2IoYSk6dGhpcy5zZXR0aW5ncy53ZWVrZGF5c0Z1bGxbYy5kYXldfSxtOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE/Zi5kaWdpdHMoYSk6Yi5tb250aCsxfSxtbTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6Zi5sZWFkKGIubW9udGgrMSl9LG1tbTpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuc2V0dGluZ3MubW9udGhzU2hvcnQ7cmV0dXJuIGI/YShiLGQsYyk6ZFtjLm1vbnRoXX0sbW1tbTpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuc2V0dGluZ3MubW9udGhzRnVsbDtyZXR1cm4gYj9hKGIsZCxjKTpkW2MubW9udGhdfSx5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzI6KFwiXCIrYi55ZWFyKS5zbGljZSgyKX0seXl5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhPzQ6Yi55ZWFyfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBhLnNwbGl0KC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nKX0sdG9TdHJpbmc6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBjLmZvcm1hdHMudG9BcnJheShhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGYudHJpZ2dlcihjLmZvcm1hdHNbYV0sYyxbMCxiXSl8fGEucmVwbGFjZSgvXiEvLFwiXCIpfSkuam9pbihcIlwiKX19fSgpLGMucHJvdG90eXBlLmlzRGF0ZUV4YWN0PWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcztyZXR1cm4gZi5pc0ludGVnZXIoYSkmJmYuaXNJbnRlZ2VyKGMpfHxcImJvb2xlYW5cIj09dHlwZW9mIGEmJlwiYm9vbGVhblwiPT10eXBlb2YgYz9hPT09YzooZi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKSkmJihmLmlzRGF0ZShjKXx8Yi5pc0FycmF5KGMpKT9kLmNyZWF0ZShhKS5waWNrPT09ZC5jcmVhdGUoYykucGljazohKCFiLmlzUGxhaW5PYmplY3QoYSl8fCFiLmlzUGxhaW5PYmplY3QoYykpJiYoZC5pc0RhdGVFeGFjdChhLmZyb20sYy5mcm9tKSYmZC5pc0RhdGVFeGFjdChhLnRvLGMudG8pKX0sYy5wcm90b3R5cGUuaXNEYXRlT3ZlcmxhcD1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLnNldHRpbmdzLmZpcnN0RGF5PzE6MDtyZXR1cm4gZi5pc0ludGVnZXIoYSkmJihmLmlzRGF0ZShjKXx8Yi5pc0FycmF5KGMpKT8oYT1hJTcrZSxhPT09ZC5jcmVhdGUoYykuZGF5KzEpOmYuaXNJbnRlZ2VyKGMpJiYoZi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKSk/KGM9YyU3K2UsYz09PWQuY3JlYXRlKGEpLmRheSsxKTohKCFiLmlzUGxhaW5PYmplY3QoYSl8fCFiLmlzUGxhaW5PYmplY3QoYykpJiZkLm92ZXJsYXBSYW5nZXMoYSxjKX0sYy5wcm90b3R5cGUuZmxpcEVuYWJsZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLml0ZW07Yi5lbmFibGU9YXx8KGIuZW5hYmxlPT0tMT8xOi0xKX0sYy5wcm90b3R5cGUuZGVhY3RpdmF0ZT1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW0uZGlzYWJsZS5zbGljZSgwKTtyZXR1cm5cImZsaXBcIj09Yz9kLmZsaXBFbmFibGUoKTpjPT09ITE/KGQuZmxpcEVuYWJsZSgxKSxlPVtdKTpjPT09ITA/KGQuZmxpcEVuYWJsZSgtMSksZT1bXSk6Yy5tYXAoZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGc9MDtnPGUubGVuZ3RoO2crPTEpaWYoZC5pc0RhdGVFeGFjdChhLGVbZ10pKXtjPSEwO2JyZWFrfWN8fChmLmlzSW50ZWdlcihhKXx8Zi5pc0RhdGUoYSl8fGIuaXNBcnJheShhKXx8Yi5pc1BsYWluT2JqZWN0KGEpJiZhLmZyb20mJmEudG8pJiZlLnB1c2goYSl9KSxlfSxjLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMsZT1kLml0ZW0uZGlzYWJsZSxnPWUubGVuZ3RoO3JldHVyblwiZmxpcFwiPT1jP2QuZmxpcEVuYWJsZSgpOmM9PT0hMD8oZC5mbGlwRW5hYmxlKDEpLGU9W10pOmM9PT0hMT8oZC5mbGlwRW5hYmxlKC0xKSxlPVtdKTpjLm1hcChmdW5jdGlvbihhKXt2YXIgYyxoLGksajtmb3IoaT0wO2k8ZztpKz0xKXtpZihoPWVbaV0sZC5pc0RhdGVFeGFjdChoLGEpKXtjPWVbaV09bnVsbCxqPSEwO2JyZWFrfWlmKGQuaXNEYXRlT3ZlcmxhcChoLGEpKXtiLmlzUGxhaW5PYmplY3QoYSk/KGEuaW52ZXJ0ZWQ9ITAsYz1hKTpiLmlzQXJyYXkoYSk/KGM9YSxjWzNdfHxjLnB1c2goXCJpbnZlcnRlZFwiKSk6Zi5pc0RhdGUoYSkmJihjPVthLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpLFwiaW52ZXJ0ZWRcIl0pO2JyZWFrfX1pZihjKWZvcihpPTA7aTxnO2krPTEpaWYoZC5pc0RhdGVFeGFjdChlW2ldLGEpKXtlW2ldPW51bGw7YnJlYWt9aWYoailmb3IoaT0wO2k8ZztpKz0xKWlmKGQuaXNEYXRlT3ZlcmxhcChlW2ldLGEpKXtlW2ldPW51bGw7YnJlYWt9YyYmZS5wdXNoKGMpfSksZS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWF9KX0sYy5wcm90b3R5cGUubm9kZXM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuc2V0dGluZ3MsZz1iLml0ZW0saD1nLm5vdyxpPWcuc2VsZWN0LGo9Zy5oaWdobGlnaHQsaz1nLnZpZXcsbD1nLmRpc2FibGUsbT1nLm1pbixuPWcubWF4LG89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYy5maXJzdERheSYmKGEucHVzaChhLnNoaWZ0KCkpLGIucHVzaChiLnNoaWZ0KCkpKSxmLm5vZGUoXCJ0aGVhZFwiLGYubm9kZShcInRyXCIsZi5ncm91cCh7bWluOjAsbWF4OmQtMSxpOjEsbm9kZTpcInRoXCIsaXRlbTpmdW5jdGlvbihkKXtyZXR1cm5bYVtkXSxjLmtsYXNzLndlZWtkYXlzLCdzY29wZT1jb2wgdGl0bGU9XCInK2JbZF0rJ1wiJ119fSkpKX0oKGMuc2hvd1dlZWtkYXlzRnVsbD9jLndlZWtkYXlzRnVsbDpjLndlZWtkYXlzTGV0dGVyKS5zbGljZSgwKSxjLndlZWtkYXlzRnVsbC5zbGljZSgwKSkscD1mdW5jdGlvbihhKXtyZXR1cm4gZi5ub2RlKFwiZGl2XCIsXCIgXCIsYy5rbGFzc1tcIm5hdlwiKyhhP1wiTmV4dFwiOlwiUHJldlwiKV0rKGEmJmsueWVhcj49bi55ZWFyJiZrLm1vbnRoPj1uLm1vbnRofHwhYSYmay55ZWFyPD1tLnllYXImJmsubW9udGg8PW0ubW9udGg/XCIgXCIrYy5rbGFzcy5uYXZEaXNhYmxlZDpcIlwiKSxcImRhdGEtbmF2PVwiKyhhfHwtMSkrXCIgXCIrZi5hcmlhQXR0cih7cm9sZTpcImJ1dHRvblwiLGNvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInKyhhP2MubGFiZWxNb250aE5leHQ6Yy5sYWJlbE1vbnRoUHJldikrJ1wiJyl9LHE9ZnVuY3Rpb24oZCl7dmFyIGU9Yy5zaG93TW9udGhzU2hvcnQ/Yy5tb250aHNTaG9ydDpjLm1vbnRoc0Z1bGw7cmV0dXJuXCJzaG9ydF9tb250aHNcIj09ZCYmKGU9Yy5tb250aHNTaG9ydCksYy5zZWxlY3RNb250aHMmJnZvaWQgMD09ZD9mLm5vZGUoXCJzZWxlY3RcIixmLmdyb3VwKHttaW46MCxtYXg6MTEsaToxLG5vZGU6XCJvcHRpb25cIixpdGVtOmZ1bmN0aW9uKGEpe3JldHVybltlW2FdLDAsXCJ2YWx1ZT1cIithKyhrLm1vbnRoPT1hP1wiIHNlbGVjdGVkXCI6XCJcIikrKGsueWVhcj09bS55ZWFyJiZhPG0ubW9udGh8fGsueWVhcj09bi55ZWFyJiZhPm4ubW9udGg/XCIgZGlzYWJsZWRcIjpcIlwiKV19fSksYy5rbGFzcy5zZWxlY3RNb250aCtcIiBicm93c2VyLWRlZmF1bHRcIiwoYT9cIlwiOlwiZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZCtcIl90YWJsZVwifSkrJyB0aXRsZT1cIicrYy5sYWJlbE1vbnRoU2VsZWN0KydcIicpOlwic2hvcnRfbW9udGhzXCI9PWQ/bnVsbCE9aT9mLm5vZGUoXCJkaXZcIixlW2kubW9udGhdKTpmLm5vZGUoXCJkaXZcIixlW2subW9udGhdKTpmLm5vZGUoXCJkaXZcIixlW2subW9udGhdLGMua2xhc3MubW9udGgpfSxyPWZ1bmN0aW9uKGQpe3ZhciBlPWsueWVhcixnPWMuc2VsZWN0WWVhcnM9PT0hMD81On5+KGMuc2VsZWN0WWVhcnMvMik7aWYoZyl7dmFyIGg9bS55ZWFyLGk9bi55ZWFyLGo9ZS1nLGw9ZStnO2lmKGg+aiYmKGwrPWgtaixqPWgpLGk8bCl7dmFyIG89ai1oLHA9bC1pO2otPW8+cD9wOm8sbD1pfWlmKGMuc2VsZWN0WWVhcnMmJnZvaWQgMD09ZClyZXR1cm4gZi5ub2RlKFwic2VsZWN0XCIsZi5ncm91cCh7bWluOmosbWF4OmwsaToxLG5vZGU6XCJvcHRpb25cIixpdGVtOmZ1bmN0aW9uKGEpe3JldHVyblthLDAsXCJ2YWx1ZT1cIithKyhlPT1hP1wiIHNlbGVjdGVkXCI6XCJcIildfX0pLGMua2xhc3Muc2VsZWN0WWVhcitcIiBicm93c2VyLWRlZmF1bHRcIiwoYT9cIlwiOlwiZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZCtcIl90YWJsZVwifSkrJyB0aXRsZT1cIicrYy5sYWJlbFllYXJTZWxlY3QrJ1wiJyl9cmV0dXJuXCJyYXdcIj09ZD9mLm5vZGUoXCJkaXZcIixlKTpmLm5vZGUoXCJkaXZcIixlLGMua2xhc3MueWVhcil9O3JldHVybiBjcmVhdGVEYXlMYWJlbD1mdW5jdGlvbigpe3JldHVybiBudWxsIT1pP2Yubm9kZShcImRpdlwiLGkuZGF0ZSk6Zi5ub2RlKFwiZGl2XCIsaC5kYXRlKX0sY3JlYXRlV2Vla2RheUxhYmVsPWZ1bmN0aW9uKCl7dmFyIGE7YT1udWxsIT1pP2kuZGF5OmguZGF5O3ZhciBiPWMud2Vla2RheXNGdWxsW2FdO3JldHVybiBifSxmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJkaXZcIixjcmVhdGVXZWVrZGF5TGFiZWwoKSxcInBpY2tlcl9fd2Vla2RheS1kaXNwbGF5XCIpK2Yubm9kZShcImRpdlwiLHEoXCJzaG9ydF9tb250aHNcIiksYy5rbGFzcy5tb250aF9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixjcmVhdGVEYXlMYWJlbCgpLGMua2xhc3MuZGF5X2Rpc3BsYXkpK2Yubm9kZShcImRpdlwiLHIoXCJyYXdcIiksYy5rbGFzcy55ZWFyX2Rpc3BsYXkpLGMua2xhc3MuZGF0ZV9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJkaXZcIiwoYy5zZWxlY3RZZWFycz9xKCkrcigpOnEoKStyKCkpK3AoKStwKDEpLGMua2xhc3MuaGVhZGVyKStmLm5vZGUoXCJ0YWJsZVwiLG8rZi5ub2RlKFwidGJvZHlcIixmLmdyb3VwKHttaW46MCxtYXg6ZS0xLGk6MSxub2RlOlwidHJcIixpdGVtOmZ1bmN0aW9uKGEpe3ZhciBlPWMuZmlyc3REYXkmJjA9PT1iLmNyZWF0ZShbay55ZWFyLGsubW9udGgsMV0pLmRheT8tNzowO3JldHVybltmLmdyb3VwKHttaW46ZCphLWsuZGF5K2UrMSxtYXg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5taW4rZC0xfSxpOjEsbm9kZTpcInRkXCIsaXRlbTpmdW5jdGlvbihhKXthPWIuY3JlYXRlKFtrLnllYXIsay5tb250aCxhKyhjLmZpcnN0RGF5PzE6MCldKTt2YXIgZD1pJiZpLnBpY2s9PWEucGljayxlPWomJmoucGljaz09YS5waWNrLGc9bCYmYi5kaXNhYmxlZChhKXx8YS5waWNrPG0ucGlja3x8YS5waWNrPm4ucGljayxvPWYudHJpZ2dlcihiLmZvcm1hdHMudG9TdHJpbmcsYixbYy5mb3JtYXQsYV0pO3JldHVybltmLm5vZGUoXCJkaXZcIixhLmRhdGUsZnVuY3Rpb24oYil7cmV0dXJuIGIucHVzaChrLm1vbnRoPT1hLm1vbnRoP2Mua2xhc3MuaW5mb2N1czpjLmtsYXNzLm91dGZvY3VzKSxoLnBpY2s9PWEucGljayYmYi5wdXNoKGMua2xhc3Mubm93KSxkJiZiLnB1c2goYy5rbGFzcy5zZWxlY3RlZCksZSYmYi5wdXNoKGMua2xhc3MuaGlnaGxpZ2h0ZWQpLGcmJmIucHVzaChjLmtsYXNzLmRpc2FibGVkKSxiLmpvaW4oXCIgXCIpfShbYy5rbGFzcy5kYXldKSxcImRhdGEtcGljaz1cIithLnBpY2srXCIgXCIrZi5hcmlhQXR0cih7cm9sZTpcImdyaWRjZWxsXCIsbGFiZWw6byxzZWxlY3RlZDohKCFkfHxiLiRub2RlLnZhbCgpIT09byl8fG51bGwsYWN0aXZlZGVzY2VuZGFudDohIWV8fG51bGwsZGlzYWJsZWQ6ISFnfHxudWxsfSkpLFwiXCIsZi5hcmlhQXR0cih7cm9sZTpcInByZXNlbnRhdGlvblwifSldfX0pXX19KSksYy5rbGFzcy50YWJsZSwnaWQ9XCInK2IuJG5vZGVbMF0uaWQrJ190YWJsZVwiICcrZi5hcmlhQXR0cih7cm9sZTpcImdyaWRcIixjb250cm9sczpiLiRub2RlWzBdLmlkLHJlYWRvbmx5OiEwfSkpLGMua2xhc3MuY2FsZW5kYXJfY29udGFpbmVyKStmLm5vZGUoXCJkaXZcIixmLm5vZGUoXCJidXR0b25cIixjLnRvZGF5LFwiYnRuLWZsYXQgcGlja2VyX190b2RheVwiLFwidHlwZT1idXR0b24gZGF0YS1waWNrPVwiK2gucGljaysoYSYmIWIuZGlzYWJsZWQoaCk/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpK2Yubm9kZShcImJ1dHRvblwiLGMuY2xlYXIsXCJidG4tZmxhdCBwaWNrZXJfX2NsZWFyXCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLWNsZWFyPTFcIisoYT9cIlwiOlwiIGRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWR9KSkrZi5ub2RlKFwiYnV0dG9uXCIsYy5jbG9zZSxcImJ0bi1mbGF0IHBpY2tlcl9fY2xvc2VcIixcInR5cGU9YnV0dG9uIGRhdGEtY2xvc2U9dHJ1ZSBcIisoYT9cIlwiOlwiIGRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWR9KSksYy5rbGFzcy5mb290ZXIpfSxjLmRlZmF1bHRzPWZ1bmN0aW9uKGEpe3JldHVybntsYWJlbE1vbnRoTmV4dDpcIk5leHQgbW9udGhcIixsYWJlbE1vbnRoUHJldjpcIlByZXZpb3VzIG1vbnRoXCIsbGFiZWxNb250aFNlbGVjdDpcIlNlbGVjdCBhIG1vbnRoXCIsbGFiZWxZZWFyU2VsZWN0OlwiU2VsZWN0IGEgeWVhclwiLG1vbnRoc0Z1bGw6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoc1Nob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sd2Vla2RheXNGdWxsOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLHdlZWtkYXlzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLHdlZWtkYXlzTGV0dGVyOltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sdG9kYXk6XCJUb2RheVwiLGNsZWFyOlwiQ2xlYXJcIixjbG9zZTpcIkNsb3NlXCIsZm9ybWF0OlwiZCBtbW1tLCB5eXl5XCIsa2xhc3M6e3RhYmxlOmErXCJ0YWJsZVwiLGhlYWRlcjphK1wiaGVhZGVyXCIsZGF0ZV9kaXNwbGF5OmErXCJkYXRlLWRpc3BsYXlcIixkYXlfZGlzcGxheTphK1wiZGF5LWRpc3BsYXlcIixtb250aF9kaXNwbGF5OmErXCJtb250aC1kaXNwbGF5XCIseWVhcl9kaXNwbGF5OmErXCJ5ZWFyLWRpc3BsYXlcIixjYWxlbmRhcl9jb250YWluZXI6YStcImNhbGVuZGFyLWNvbnRhaW5lclwiLG5hdlByZXY6YStcIm5hdi0tcHJldlwiLG5hdk5leHQ6YStcIm5hdi0tbmV4dFwiLG5hdkRpc2FibGVkOmErXCJuYXYtLWRpc2FibGVkXCIsbW9udGg6YStcIm1vbnRoXCIseWVhcjphK1wieWVhclwiLHNlbGVjdE1vbnRoOmErXCJzZWxlY3QtLW1vbnRoXCIsc2VsZWN0WWVhcjphK1wic2VsZWN0LS15ZWFyXCIsd2Vla2RheXM6YStcIndlZWtkYXlcIixkYXk6YStcImRheVwiLGRpc2FibGVkOmErXCJkYXktLWRpc2FibGVkXCIsc2VsZWN0ZWQ6YStcImRheS0tc2VsZWN0ZWRcIixoaWdobGlnaHRlZDphK1wiZGF5LS1oaWdobGlnaHRlZFwiLG5vdzphK1wiZGF5LS10b2RheVwiLGluZm9jdXM6YStcImRheS0taW5mb2N1c1wiLG91dGZvY3VzOmErXCJkYXktLW91dGZvY3VzXCIsZm9vdGVyOmErXCJmb290ZXJcIixidXR0b25DbGVhcjphK1wiYnV0dG9uLS1jbGVhclwiLGJ1dHRvblRvZGF5OmErXCJidXR0b24tLXRvZGF5XCIsYnV0dG9uQ2xvc2U6YStcImJ1dHRvbi0tY2xvc2VcIn19fShhLmtsYXNzZXMoKS5waWNrZXIrXCJfX1wiKSxhLmV4dGVuZChcInBpY2thZGF0ZVwiLGMpfSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe3ZhciBiPSthKHRoaXMpLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSxjPSthKHRoaXMpLnZhbCgpLmxlbmd0aCxkPWM8PWI7YSh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKS5odG1sKGMrXCIvXCIrYiksZShkLGEodGhpcykpfWZ1bmN0aW9uIGMoYil7dmFyIGM9Yi5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtjLmxlbmd0aHx8KGM9YShcIjxzcGFuLz5cIikuYWRkQ2xhc3MoXCJjaGFyYWN0ZXItY291bnRlclwiKS5jc3MoXCJmbG9hdFwiLFwicmlnaHRcIikuY3NzKFwiZm9udC1zaXplXCIsXCIxMnB4XCIpLmNzcyhcImhlaWdodFwiLDEpLGIucGFyZW50KCkuYXBwZW5kKGMpKX1mdW5jdGlvbiBkKCl7YSh0aGlzKS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKS5odG1sKFwiXCIpfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1iLmhhc0NsYXNzKFwiaW52YWxpZFwiKTthJiZjP2IucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpOmF8fGN8fChiLnJlbW92ZUNsYXNzKFwidmFsaWRcIiksYi5hZGRDbGFzcyhcImludmFsaWRcIikpfWEuZm4uY2hhcmFjdGVyQ291bnRlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1hKHRoaXMpLGY9ZS5wYXJlbnQoKS5maW5kKCdzcGFuW2NsYXNzPVwiY2hhcmFjdGVyLWNvdW50ZXJcIl0nKTtpZighZi5sZW5ndGgpe3ZhciBnPXZvaWQgMCE9PWUuYXR0cihcImRhdGEtbGVuZ3RoXCIpO2cmJihlLm9uKFwiaW5wdXRcIixiKSxlLm9uKFwiZm9jdXNcIixiKSxlLm9uKFwiYmx1clwiLGQpLGMoZSkpfX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCJpbnB1dCwgdGV4dGFyZWFcIikuY2hhcmFjdGVyQ291bnRlcigpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e2R1cmF0aW9uOjIwMCxkaXN0Oi0xMDAsc2hpZnQ6MCxwYWRkaW5nOjAsZnVsbFdpZHRoOiExLGluZGljYXRvcnM6ITEsbm9XcmFwOiExLG9uQ3ljbGVUbzpudWxsfTtiPWEuZXh0ZW5kKGMsYik7dmFyIGQ9TWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoYSh0aGlzKSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtmdW5jdGlvbiBlKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQmJihPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsbiksT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixwKSksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsbiksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbyksT1swXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHApLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixwKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGwpfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEudGFyZ2V0VG91Y2hlcyYmYS50YXJnZXRUb3VjaGVzLmxlbmd0aD49MT9hLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDphLmNsaWVudFh9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYS50YXJnZXRUb3VjaGVzJiZhLnRhcmdldFRvdWNoZXMubGVuZ3RoPj0xP2EudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZOmEuY2xpZW50WX1mdW5jdGlvbiBoKGEpe3JldHVybiBhPj14P2EleDphPDA/aCh4K2EleCk6YX1mdW5jdGlvbiBpKGMpe0U9ITAsTy5oYXNDbGFzcyhcInNjcm9sbGluZ1wiKXx8Ty5hZGRDbGFzcyhcInNjcm9sbGluZ1wiKSxudWxsIT1OJiZ3aW5kb3cuY2xlYXJUaW1lb3V0KE4pLE49d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFPSExLE8ucmVtb3ZlQ2xhc3MoXCJzY3JvbGxpbmdcIil9LGIuZHVyYXRpb24pO3ZhciBkLGUsZixnLGksaixrLGw9dTtpZih0PVwibnVtYmVyXCI9PXR5cGVvZiBjP2M6dCx1PU1hdGguZmxvb3IoKHQrdy8yKS93KSxmPXQtdSp3LGc9ZjwwPzE6LTEsaT0tZypmKjIvdyxlPXg+PjEsYi5mdWxsV2lkdGg/az1cInRyYW5zbGF0ZVgoMClcIjooaz1cInRyYW5zbGF0ZVgoXCIrKE9bMF0uY2xpZW50V2lkdGgtcikvMitcInB4KSBcIixrKz1cInRyYW5zbGF0ZVkoXCIrKE9bMF0uY2xpZW50SGVpZ2h0LXMpLzIrXCJweClcIiksUCl7dmFyIG09dSV4LG49TS5maW5kKFwiLmluZGljYXRvci1pdGVtLmFjdGl2ZVwiKTtuLmluZGV4KCkhPT1tJiYobi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxNLmZpbmQoXCIuaW5kaWNhdG9yLWl0ZW1cIikuZXEobSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfWZvcigoIWIubm9XcmFwfHx1Pj0wJiZ1PHgpJiYoaj1xW2godSldLGEoaikuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChPLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhKGopLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIistZi8yK1wicHgpIHRyYW5zbGF0ZVgoXCIrZypiLnNoaWZ0KmkqZCtcInB4KSB0cmFuc2xhdGVaKFwiK2IuZGlzdCppK1wicHgpXCIsai5zdHlsZS56SW5kZXg9MCxiLmZ1bGxXaWR0aD90d2VlbmVkT3BhY2l0eT0xOnR3ZWVuZWRPcGFjaXR5PTEtLjIqaSxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksZD0xO2Q8PWU7KytkKWIuZnVsbFdpZHRoPyh6VHJhbnNsYXRpb249Yi5kaXN0LHR3ZWVuZWRPcGFjaXR5PWQ9PT1lJiZmPDA/MS1pOjEpOih6VHJhbnNsYXRpb249Yi5kaXN0KigyKmQraSpnKSx0d2VlbmVkT3BhY2l0eT0xLS4yKigyKmQraSpnKSksKCFiLm5vV3JhcHx8dStkPHgpJiYoaj1xW2godStkKV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrKGIuc2hpZnQrKHcqZC1mKS8yKStcInB4KSB0cmFuc2xhdGVaKFwiK3pUcmFuc2xhdGlvbitcInB4KVwiLGouc3R5bGUuekluZGV4PS1kLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxiLmZ1bGxXaWR0aD8oelRyYW5zbGF0aW9uPWIuZGlzdCx0d2VlbmVkT3BhY2l0eT1kPT09ZSYmZj4wPzEtaToxKTooelRyYW5zbGF0aW9uPWIuZGlzdCooMipkLWkqZyksdHdlZW5lZE9wYWNpdHk9MS0uMiooMipkLWkqZykpLCghYi5ub1dyYXB8fHUtZD49MCkmJihqPXFbaCh1LWQpXSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIisoLWIuc2hpZnQrKC13KmQtZikvMikrXCJweCkgdHJhbnNsYXRlWihcIit6VHJhbnNsYXRpb24rXCJweClcIixqLnN0eWxlLnpJbmRleD0tZCxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIik7aWYoKCFiLm5vV3JhcHx8dT49MCYmdTx4KSYmKGo9cVtoKHUpXSxqLnN0eWxlW0ZdPWsrXCIgdHJhbnNsYXRlWChcIistZi8yK1wicHgpIHRyYW5zbGF0ZVgoXCIrZypiLnNoaWZ0KmkrXCJweCkgdHJhbnNsYXRlWihcIitiLmRpc3QqaStcInB4KVwiLGouc3R5bGUuekluZGV4PTAsYi5mdWxsV2lkdGg/dHdlZW5lZE9wYWNpdHk9MTp0d2VlbmVkT3BhY2l0eT0xLS4yKmksai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGwhPT11JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uQ3ljbGVUbyl7dmFyIG89Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZXEoaCh1KSk7Yi5vbkN5Y2xlVG8uY2FsbCh0aGlzLG8sSil9fWZ1bmN0aW9uIGooKXt2YXIgYSxiLGMsZDthPURhdGUubm93KCksYj1hLUgsSD1hLGM9dC1HLEc9dCxkPTFlMypjLygxK2IpLEQ9LjgqZCsuMipEfWZ1bmN0aW9uIGsoKXt2YXIgYSxjO0ImJihhPURhdGUubm93KCktSCxjPUIqTWF0aC5leHAoLWEvYi5kdXJhdGlvbiksYz4yfHxjPC0yPyhpKEMtYykscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKTppKEMpKX1mdW5jdGlvbiBsKGMpe2lmKEopcmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxjLnN0b3BQcm9wYWdhdGlvbigpLCExO2lmKCFiLmZ1bGxXaWR0aCl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChcIi5jYXJvdXNlbC1pdGVtXCIpLmluZGV4KCksZT11JXgtZDswIT09ZSYmKGMucHJldmVudERlZmF1bHQoKSxjLnN0b3BQcm9wYWdhdGlvbigpKSxtKGQpfX1mdW5jdGlvbiBtKGEpe3ZhciBjPXUleC1hO2Iubm9XcmFwfHwoYzwwP01hdGguYWJzKGMreCk8TWF0aC5hYnMoYykmJihjKz14KTpjPjAmJk1hdGguYWJzKGMteCk8YyYmKGMtPXgpKSxjPDA/Ty50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsW01hdGguYWJzKGMpXSk6Yz4wJiZPLnRyaWdnZXIoXCJjYXJvdXNlbFByZXZcIixbY10pfWZ1bmN0aW9uIG4oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLHY9ITAsSj0hMSxLPSExLHo9ZihhKSxBPWcoYSksRD1CPTAsRz10LEg9RGF0ZS5ub3coKSxjbGVhckludGVydmFsKEkpLEk9c2V0SW50ZXJ2YWwoaiwxMDApfWZ1bmN0aW9uIG8oYSl7dmFyIGIsYyxkO2lmKHYpaWYoYj1mKGEpLHk9ZyhhKSxjPXotYixkPU1hdGguYWJzKEEteSksZDwzMCYmIUspKGM+Mnx8YzwtMikmJihKPSEwLHo9YixpKHQrYykpO2Vsc2V7aWYoSilyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksITE7Sz0hMH1pZihKKXJldHVybiBhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSwhMX1mdW5jdGlvbiBwKGEpe2lmKHYpcmV0dXJuIHY9ITEsY2xlYXJJbnRlcnZhbChJKSxDPXQsKEQ+MTB8fEQ8LTEwKSYmKEI9LjkqRCxDPXQrQiksQz1NYXRoLnJvdW5kKEMvdykqdyxiLm5vV3JhcCYmKEM+PXcqKHgtMSk/Qz13Kih4LTEpOkM8MCYmKEM9MCkpLEI9Qy10LEg9RGF0ZS5ub3coKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoayksSiYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSwhMX12YXIgcSxyLHMsdCx1LHYsdyx4LHosQSxCLEMsRCxFLEYsRyxILEksSixLLEw9ZCtjLE09YSgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+JyksTj1udWxsLE89YSh0aGlzKSxQPU8uYXR0cihcImRhdGEtaW5kaWNhdG9yc1wiKXx8Yi5pbmRpY2F0b3JzLFE9ZnVuY3Rpb24oKXt2YXIgYj1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbSBpbWdcIikuZmlyc3QoKTtpZihiLmxlbmd0aCliLnByb3AoXCJjb21wbGV0ZVwiKT9PLmNzcyhcImhlaWdodFwiLGIuaGVpZ2h0KCkpOmIub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtPLmNzcyhcImhlaWdodFwiLGEodGhpcykuaGVpZ2h0KCkpfSk7ZWxzZXt2YXIgYz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmhlaWdodCgpO08uY3NzKFwiaGVpZ2h0XCIsYyl9fTtyZXR1cm4gYi5mdWxsV2lkdGgmJihiLmRpc3Q9MCxRKCksUCYmTy5maW5kKFwiLmNhcm91c2VsLWZpeGVkLWl0ZW1cIikuYWRkQ2xhc3MoXCJ3aXRoLWluZGljYXRvcnNcIikpLE8uaGFzQ2xhc3MoXCJpbml0aWFsaXplZFwiKT8oYSh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemVcIiksYSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsWzFlLTZdKSwhMCk6KE8uYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKSx2PSExLHQ9Qz0wLHE9W10scj1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVyV2lkdGgoKSxzPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKSx3PTIqcitiLnBhZGRpbmcsTy5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihiKXtpZihxLnB1c2goYSh0aGlzKVswXSksUCl7dmFyIGM9YSgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpOzA9PT1iJiZjLmFkZENsYXNzKFwiYWN0aXZlXCIpLGMuY2xpY2soZnVuY3Rpb24oYil7Yi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYz1hKHRoaXMpLmluZGV4KCk7bShjKX0pLE0uYXBwZW5kKGMpfX0pLFAmJk8uYXBwZW5kKE0pLHg9cS5sZW5ndGgsRj1cInRyYW5zZm9ybVwiLFtcIndlYmtpdFwiLFwiTW96XCIsXCJPXCIsXCJtc1wiXS5ldmVyeShmdW5jdGlvbihhKXt2YXIgYj1hK1wiVHJhbnNmb3JtXCI7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbYl18fChGPWIsITEpfSksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS5jYXJvdXNlbC1cIitMKS5vbihcInJlc2l6ZS5jYXJvdXNlbC1cIitMLGZ1bmN0aW9uKCl7Yi5mdWxsV2lkdGg/KHI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lcldpZHRoKCkscz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVySGVpZ2h0KCksdz0yKnIrYi5wYWRkaW5nLHQ9Mip1KnIsQz10KTppKCl9KSxlKCksaSh0KSxhKHRoaXMpLm9uKFwiY2Fyb3VzZWxOZXh0XCIsZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj0xKSxDPXcqTWF0aC5yb3VuZCh0L3cpK3cqYix0IT09QyYmKEI9Qy10LEg9RGF0ZS5ub3coKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaykpfSksYSh0aGlzKS5vbihcImNhcm91c2VsUHJldlwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MSksQz13Kk1hdGgucm91bmQodC93KS13KmIsdCE9PUMmJihCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKX0pLHZvaWQgYSh0aGlzKS5vbihcImNhcm91c2VsU2V0XCIsZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj0wKSxtKGIpfSkpfSl9LG5leHQ6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxOZXh0XCIsW2JdKX0scHJldjpmdW5jdGlvbihiKXthKHRoaXMpLnRyaWdnZXIoXCJjYXJvdXNlbFByZXZcIixbYl0pfSxzZXQ6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxTZXRcIixbYl0pfX07YS5mbi5jYXJvdXNlbD1mdW5jdGlvbihjKXtyZXR1cm4gYltjXT9iW2NdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTpcIm9iamVjdFwiIT10eXBlb2YgYyYmYz92b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuY2Fyb3VzZWxcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEoXCIjXCIrYSh0aGlzKS5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikpLGQ9KGEoXCJib2R5XCIpLGEodGhpcykpLGU9ZC5wYXJlbnQoXCIudGFwLXRhcmdldC13cmFwcGVyXCIpLGY9ZS5maW5kKFwiLnRhcC10YXJnZXQtd2F2ZVwiKSxnPWUuZmluZChcIi50YXAtdGFyZ2V0LW9yaWdpblwiKSxoPWQuZmluZChcIi50YXAtdGFyZ2V0LWNvbnRlbnRcIik7ZS5sZW5ndGh8fChlPWQud3JhcChhKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13cmFwcGVyXCI+PC9kaXY+JykpLnBhcmVudCgpKSxoLmxlbmd0aHx8KGg9YSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPjwvZGl2PicpLGQuYXBwZW5kKGgpKSxmLmxlbmd0aHx8KGY9YSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd2F2ZVwiPjwvZGl2PicpLGcubGVuZ3RofHwoZz1jLmNsb25lKCEwLCEwKSxnLmFkZENsYXNzKFwidGFwLXRhcmdldC1vcmlnaW5cIiksZy5yZW1vdmVBdHRyKFwiaWRcIiksZy5yZW1vdmVBdHRyKFwic3R5bGVcIiksZi5hcHBlbmQoZykpLGUuYXBwZW5kKGYpKTt2YXIgaT1mdW5jdGlvbigpe2UuaXMoXCIub3BlblwiKXx8KGUuYWRkQ2xhc3MoXCJvcGVuXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtnLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKS5vbihcImNsaWNrLnRhcFRhcmdldFwiLGZ1bmN0aW9uKGEpe2ooKSxnLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKX0pLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKS5vbihcImNsaWNrLnRhcFRhcmdldFwiLGZ1bmN0aW9uKGIpe2ooKSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIil9KTt2YXIgYj1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2soKX0sMjAwKTthKHdpbmRvdykub2ZmKFwicmVzaXplLnRhcFRhcmdldFwiKS5vbihcInJlc2l6ZS50YXBUYXJnZXRcIixiKX0sMCkpfSxqPWZ1bmN0aW9uKCl7ZS5pcyhcIi5vcGVuXCIpJiYoZS5yZW1vdmVDbGFzcyhcIm9wZW5cIiksZy5vZmYoXCJjbGljay50YXBUYXJnZXRcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLGEod2luZG93KS5vZmYoXCJyZXNpemUudGFwVGFyZ2V0XCIpKX0saz1mdW5jdGlvbigpe3ZhciBiPVwiZml4ZWRcIj09PWMuY3NzKFwicG9zaXRpb25cIik7aWYoIWIpZm9yKHZhciBnPWMucGFyZW50cygpLGk9MDtpPGcubGVuZ3RoJiYhKGI9XCJmaXhlZFwiPT1hKGdbaV0pLmNzcyhcInBvc2l0aW9uXCIpKTtpKyspO3ZhciBqPWMub3V0ZXJXaWR0aCgpLGs9Yy5vdXRlckhlaWdodCgpLGw9Yj9jLm9mZnNldCgpLnRvcC1hKGRvY3VtZW50KS5zY3JvbGxUb3AoKTpjLm9mZnNldCgpLnRvcCxtPWI/Yy5vZmZzZXQoKS5sZWZ0LWEoZG9jdW1lbnQpLnNjcm9sbExlZnQoKTpjLm9mZnNldCgpLmxlZnQsbj1hKHdpbmRvdykud2lkdGgoKSxvPWEod2luZG93KS5oZWlnaHQoKSxwPW4vMixxPW8vMixyPW08PXAscz1tPnAsdD1sPD1xLHU9bD5xLHY9bT49LjI1Km4mJm08PS43NSpuLHc9ZC5vdXRlcldpZHRoKCkseD1kLm91dGVySGVpZ2h0KCkseT1sK2svMi14LzIsej1tK2ovMi13LzIsQT1iP1wiZml4ZWRcIjpcImFic29sdXRlXCIsQj12P3c6dy8yK2osQz14LzIsRD10P3gvMjowLEU9MCxGPXImJiF2P3cvMi1qOjAsRz0wLEg9aixJPXU/XCJib3R0b21cIjpcInRvcFwiLEo9aj5rPzIqajoyKmosSz1KLEw9eC8yLUsvMixNPXcvMi1KLzIsTj17fTtOLnRvcD10P3k6XCJcIixOLnJpZ2h0PXM/bi16LXc6XCJcIixOLmJvdHRvbT11P28teS14OlwiXCIsTi5sZWZ0PXI/ejpcIlwiLE4ucG9zaXRpb249QSxlLmNzcyhOKSxoLmNzcyh7d2lkdGg6QixoZWlnaHQ6Qyx0b3A6RCxyaWdodDpHLGJvdHRvbTpFLGxlZnQ6RixwYWRkaW5nOkgsdmVydGljYWxBbGlnbjpJfSksZi5jc3Moe3RvcDpMLGxlZnQ6TSx3aWR0aDpKLGhlaWdodDpLfSl9O1wib3BlblwiPT1iJiYoaygpLGkoKSksXCJjbG9zZVwiPT1iJiZqKCl9KX0sb3BlbjpmdW5jdGlvbigpe30sY2xvc2U6ZnVuY3Rpb24oKXt9fTthLmZuLnRhcFRhcmdldD1mdW5jdGlvbihjKXtyZXR1cm4gYltjXXx8XCJvYmplY3RcIj09dHlwZW9mIGM/Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIGEuZXJyb3IoXCJNZXRob2QgXCIrYytcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudGFwLXRhcmdldFwiKX19KGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljL21hdGVyaWFsaXplLm1pbi5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cblxuZnVuY3Rpb24gX2luaXRDbGllbnQgKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsXG4gICAgZGF0YUlkRnJvbU9iamVjdDogcmVzdWx0ID0+IHJlc3VsdC5pZCB8fCBudWxsLFxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dyYXBocWwnLFxuICAgICAgb3B0czoge1xuICAgICAgICBjcmVkZW50aWFsczogJ2Nyb3NzLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5pdENsaWVudCA9IChoZWFkZXJzLCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdENsaWVudC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpbml0Q2xpZW50IH0gZnJvbSAnLi4vbGliL2luaXRDbGllbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4gKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gY3R4LnJlcSA/IGN0eC5yZXEuaGVhZGVycyA6IHt9XG4gICAgICBjb25zdCBjbGllbnQgPSBpbml0Q2xpZW50KGhlYWRlcnMpXG5cbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICB1cmw6IHsgcXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZSB9LFxuICAgICAgICAuLi5hd2FpdCAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcHAgPSAoXG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIGRhdGE6IGNsaWVudC5nZXRJbml0aWFsU3RhdGUoKS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgIHRoaXMuY2xpZW50ID0gaW5pdENsaWVudCh0aGlzLnByb3BzLmhlYWRlcnMsIHRoaXMucHJvcHMuaW5pdGlhbFN0YXRlKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuY2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG5cbiAgICAgIClcbiAgICB9XG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5pbXBvcnQgUG9zdExpc3QgIGZyb20gJy4uL2RhdGFzdHVmZi9Qb3N0TGlzdC5qcyc7XG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgocHJvcHMpID0+IChcbiAgICA8QXBwIGRhdGE9e3Byb3BzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbCBtOFwiPlxuICAgICAgPGgzPkRpc2NvdmVyPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtOCBvZmZzZXQtbTIgbDYgb2Zmc2V0LWwzXCI+XG4gICAgICAgIDxQb3N0TGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGlzY292ZXIuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFBvc3REb3duVm90ZXIgKHsgdm90ZURvd25Qb3N0LCB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuXG4gICAgICA8YSBjbGFzc05hbWU9XCJidG4tZmxvYXRpbmcgYnRuLXNtYWxsIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCByZWRcIj5cbiAgICAgICAgPGkgb25DbGljaz17KCkgPT4gdm90ZURvd25Qb3N0KGlkKX0gY2xhc3NOYW1lPVwic21hbGwgbWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT17eyBjb2xvcjogJyNmZmZmZmYnfX0+dGh1bWJfZG93bjwvaT5cbiAgICAgIDwvYT5cbiAgKVxufVxuXG5jb25zdCB2b3RlRG93blBvc3QgPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IEludCEpIHtcbiAgICB2b3RlRG93blBvc3QoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHZvdGVzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodm90ZURvd25Qb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdm90ZURvd25Qb3N0OiAoaWQpID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICB1cGRhdGVQb3N0OiB7XG4gICAgICAgICAgaWQ6IG93blByb3BzLmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoUG9zdERvd25Wb3RlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGFzdHVmZi9Qb3N0RG93blZvdGVyLmpzIiwiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5pbXBvcnQgUG9zdCBmcm9tICcuL3Bvc3QnXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwXG5cbmZ1bmN0aW9uIFBvc3RMaXN0ICh7IGRhdGE6IHsgYWxsUG9zdHMsIGxvYWRpbmcgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChhbGxQb3N0cyAmJiBhbGxQb3N0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cblxuICAgICAgICAgICAgICAgIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cblxuICAgICAgICAgICl9XG5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IGFsbFBvc3RzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxQb3N0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBib2R5XG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBhdXRob3J7XG4gICAgICAgIGlkXG4gICAgICAgIGZpcnN0TmFtZVxuICAgICAgICBsYXN0TmFtZVxuICAgICAgICB1c2VybmFtZVxuICAgICAgfVxuICAgIH0sXG5cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG4gICAgfVxuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShQb3N0TGlzdClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGFzdHVmZi9Qb3N0TGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdm90ZVVwUG9zdCwgdm90ZXMsIGlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1mbG9hdGluZyBidG4tc21hbGwgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGdyZWVuXCI+XG4gICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHZvdGVVcFBvc3QoaWQpfSBjbGFzc05hbWU9XCJzbWFsbCBtYXRlcmlhbC1pY29uc1wiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZmZmZid9fT50aHVtYl91cDwvaT5cbiAgICAgIDwvYT5cbiAgKVxufVxuXG5jb25zdCB2b3RlVXBQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlkOiBJbnQhKSB7XG4gICAgdm90ZVVwUG9zdChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh2b3RlVXBQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdm90ZVVwUG9zdDogKGlkKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICAgIGlkOiBvd25Qcm9wcy5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YXN0dWZmL1Bvc3RVcHZvdGVyLmpzIiwiaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5pbXBvcnQgUG9zdERvd25Wb3RlciBmcm9tICcuL1Bvc3REb3duVm90ZXInXG5jb25zdCBJTUFHRUZJTkRFUiA9IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvc2V0X3NldDMvYmdzZXRfYmcyL1wiO1xuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsIGdyZXkgbGlnaHRlbi01IHotZGVwdGgtMlwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB2YWxpZ24td3JhcHBlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAtNSArICdweCd9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogLTE1ICsgJ3B4J319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3QuYXV0aG9yLnVzZXJuYW1lID8gSU1BR0VGSU5ERVIgKyBwcm9wcy5wb3N0LmF1dGhvci51c2VybmFtZSA6IElNQUdFRklOREVSICsgcHJvcHMucG9zdC5hdXRob3IudXNlcm5hbWV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImNpcmNsZSByZXNwb25zaXZlLWltZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogLTE1ICsgJ3B4J319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTEyXCI+PHNwYW4+e3Byb3BzLnBvc3QuYXV0aG9yLnVzZXJuYW1lID8gcHJvcHMucG9zdC5hdXRob3IudXNlcm5hbWUgOiBcIkFub255bW91c1wifTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDAgKyAncHgnLCAgdGV4dEFsaWduOiAnY2VudGVyJywgIG1hcmdpblRvcDogNSArICdweCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyXCIgc3R5bGU9e3tjb2xvcjogcHJvcHMucG9zdC52b3RlcyA+PSAwID8gJyMwMGU2NzYnIDogJyNGRjE3NDQnLGZvbnRTaXplOiAxLjUgKyAnZW0nfX0+XG4gICAgICAgICAge3Byb3BzLnBvc3Qudm90ZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUaXRsZVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA4ICsgJ3B4JywgZm9udFNpemU6IDIwICsgJ3B4J319Pntwcm9wcy5wb3N0LnRpdGxlID8gcHJvcHMucG9zdC50aXRsZSA6IFwiPCBFbXB0eSA+IFwifTwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxhY2stdGV4dFwiPlxuICAgICAgICB7cHJvcHMucG9zdC5ib2R5ID8gcHJvcHMucG9zdC5ib2R5IDogXCI8IEVtcHR5ID5cIn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczVcIj5cbiAgICAgICAgPFBvc3REb3duVm90ZXIgaWQ9e3Byb3BzLnBvc3QuaWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM1XCI+XG4gICAgICAgIDxQb3N0VXB2b3RlciBpZD17cHJvcHMucG9zdC5pZH0vPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuXG4gIDwvZGl2PlxuXG48L2Rpdj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kYXRhc3R1ZmYvcG9zdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        