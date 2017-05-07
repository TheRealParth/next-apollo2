
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _style = __webpack_require__(239);

var _style2 = _interopRequireDefault(_style);

var _document = __webpack_require__(442);

var _document2 = _interopRequireDefault(_document);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(529);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(238);

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
    key: 'componentDidMount',
    value: function componentDidMount() {

      window.jQuery = __webpack_require__(44);
      window.$ = __webpack_require__(44);
      __webpack_require__(681);
      __webpack_require__(533);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('script', { type: 'text/javascript', src: 'https://code.jquery.com/jquery-2.1.1.min.js', 'data-jsx': 3846708427,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 3846708427,
        css: '\n         @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n         @import url(\'https://fonts.googleapis.com/icon?family=Material+Icons\');\n         @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n        * {\n          font-family: Roboto;\n\n        }\n        body {\n          color: #404040;\n        }\n        h3{\n          font-weight: 200;\n        }\n      '
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 3846708427,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('title', {
        'data-jsx': 3846708427,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, ' Fun Project ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })));
    }
  }]);

  return _class;
}(_document2.default);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _keys = __webpack_require__(150);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(95);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

var _create = __webpack_require__(148);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) {
  "use strict";

  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }function i(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = (0, _create2.default)(e), d.constructor = a, d._super = e, c && la(d, c);
  }function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function k(a, b) {
    return (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }function l(a, b) {
    return a === d ? b : a;
  }function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function o(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function p(a, b) {
    return a.indexOf(b) > -1;
  }function q(a) {
    return a.trim().split(/\s+/g);
  }function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function s(a) {
    return Array.prototype.slice.call(a, 0);
  }function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
    }return d;
  }function v() {
    return ua++;
  }function w(b) {
    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
  }function x(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function y(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
    }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function E(a) {
    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: pa(c / b), y: pa(d / b) };
  }function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }function H(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function I(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
    }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }function R() {
    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }function T(a) {
    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
      };setTimeout(e, cb);
    }
  }function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
    }return !1;
  }function V(a, b) {
    this.manager = a, this.set(b);
  }function W(a) {
    if (p(a, jb)) return jb;var b = p(a, kb),
        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }function X() {
    if (!fb) return !1;var b = {},
        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }function _(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function aa() {
    Y.apply(this, arguments);
  }function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }function ca() {
    aa.apply(this, arguments);
  }function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }function ea() {
    aa.apply(this, arguments);
  }function fa() {
    aa.apply(this, arguments);
  }function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ja(a, b) {
    var c = a.element;if (c.style) {
      var d;g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }function ka(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;la = "function" != typeof _assign2.default ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
        e.hasOwnProperty(f) && (b[f] = e[f]);
      }
    }return b;
  } : _assign2.default;var sa = h(function (a, b, c) {
    for (var e = (0, _keys2.default)(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = "ontouchstart" in a,
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
      var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
      }
    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
    } });var cb = 2500,
      db = 25;i(R, x, { handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();V.prototype = { set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;if (h && i && j) return;
      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }var c = this,
          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    }, emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
      }this._super.emit.call(this, a);
    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [hb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    }, emit: function emit(a) {
      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ib];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }return tb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
      vb = 2;ia.prototype = { set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function get(a) {
      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
      }return this;
    }, on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    }, off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    }, emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return ha;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/static/hammer.min.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/static/hammer.min.js"); } } })();

/***/ })

},[569]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/YTc2OTZiZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz9hNzY5NmJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2E3Njk2YmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/YTc2OTZiZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/YTc2OTZiZCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbWF0ZXJpYWxpemUubWluLmpzP2E3Njk2YmQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2hhbW1lci5taW4uanM/YTc2OTZiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCOzs7O0FBQ3hCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUpQOzs7O2tDQU9FOztrQkFBWSxPQUFNO3dDQUFBOztpSUFHakI7Ozs7O3dDQUdDOzthQUFPLFNBQ1A7YUFBTyxJQUNQO0FBQ0E7QUFDRDs7Ozs2QkFFQzs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEsbURBQ1UsTUFBSyxtQkFBa0IsS0FBSSwyREFBbkM7O29CQUFBO3NCQUFBO0FBQUE7O2lCQURGO2FBa0JJO0FBbEJKLGtEQWtCVSxNQUFLLFlBQVcsU0FBUSxxREFBOUI7O29CQUFBO3NCQUNBO0FBREE7MEJBQ0E7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVKOztvQkFBQTtzQkFDSTtBQURKO0FBQUEseUJBQ0s7O29CQUFEO3NCQUNGO0FBREU7QUFBQSwwQkFDRDs7b0JBQUQ7c0JBTVA7QUFOTztBQUFBOzs7OztBQXRDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO2VBQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRSxLQUFHLElBQUUsRUFBRSxHQUFFLE1BQUksSUFBRSxFQUFFLE1BQU07Z0JBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztlQUFPLElBQUUsRUFBRSxHQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsRUFBRSxHQUFFLEtBQUcsSUFBRSxFQUFLO2dCQUFTLEVBQUUsR0FBRSxHQUFHO2FBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRztjQUFJLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRyxJQUFHLE1BQUksR0FBRSxPQUFPLEVBQUUsSUFBSSxJQUFFLEVBQUUsR0FBRSxHQUFFLEtBQUcsRUFBRSxLQUFHLElBQUk7Z0JBQVM7Z0JBQVMsSUFBSTthQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEdBQUU7WUFBRSxLQUFHLEVBQUUsSUFBRSxHQUFFLEdBQUU7QUFBRztnQkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFHO1lBQUk7WUFBRTtZQUFFLElBQUUsS0FBSztjQUFFLElBQUUsQ0FBQyxJQUFFLEtBQUcsR0FBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEtBQUcsR0FBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7U0FBdEMsUUFBOEMsS0FBSyxJQUFJLEtBQUcsS0FBRyxFQUFFLElBQUUsR0FBRyxPQUFTO2dCQUFTLEVBQUUsR0FBRzthQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsR0FBRSxLQUFHLEtBQUcsRUFBRSxNQUFJLEdBQUUsRUFBRSxHQUFFO2VBQUc7QUFBRSxXQUFFLE1BQU0sSUFBRSxDQUFDLElBQUUsRUFBRSxPQUFLLEVBQUUsSUFBRSxLQUFHLEVBQUU7QUFBekIsWUFBNkIsSUFBRSxJQUFFLElBQUU7WUFBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUcsT0FBTyxLQUFHLElBQUUsRUFBRSxHQUFFLEtBQUcsS0FBRyxJQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUs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QUFRLEdBQUUsR0FBRSxFQUFFLFVBQVEsS0FBRyxJQUFFLEVBQUUsY0FBWSxFQUFDLEdBQUUsRUFBRSxHQUFFLEdBQUUsRUFBRSxNQUFJLEVBQUUsU0FBTyxFQUFFLEtBQUcsRUFBRSxJQUFFLEVBQUUsSUFBRyxFQUFFLFNBQU8sRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFLO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSTtRQUFFO1FBQUU7UUFBRTtRQUFFLElBQUUsRUFBRSxnQkFBYztRQUFFLElBQUUsRUFBRSxZQUFVLEVBQUUsY0FBYSxFQUFFLGFBQVcsT0FBSyxJQUFFLE1BQUksRUFBRSxhQUFXLElBQUk7VUFBSSxJQUFFLEVBQUUsU0FBTyxFQUFFO1VBQU8sSUFBRSxFQUFFLFNBQU8sRUFBRTtVQUFPLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEdBQUcsRUFBRSxLQUFHLEdBQUcsRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRyxFQUFFLGVBQWU7QUFBbkssV0FBd0ssSUFBRSxFQUFFLFVBQVMsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFTLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFZO1lBQVMsRUFBRSxHQUFHO1NBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTLFNBQVE7UUFBRSxLQUFHLEVBQUMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFVBQVMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFlBQVU7QUFBSSxZQUFNLEVBQUMsV0FBVSxNQUFLLFVBQVMsR0FBRSxRQUFPLEVBQUUsSUFBRyxRQUFPLEVBQUUsUUFBTyxRQUFPLEVBQVU7WUFBUyxFQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsT0FBTyxJQUFHLE1BQUksR0FBRSxPQUFNLEVBQUMsR0FBRSxHQUFHLEVBQUUsR0FBRyxVQUFTLEdBQUUsR0FBRyxFQUFFLEdBQUcsV0FBVSxLQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFHO1dBQUcsRUFBRSxHQUFHLFNBQVEsS0FBRyxFQUFFLEdBQUcsU0FBUTtBQUFJLFlBQU0sRUFBQyxHQUFFLEdBQUcsSUFBRSxJQUFHLEdBQUUsR0FBRyxJQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztXQUFNLEVBQUMsR0FBRSxJQUFFLEtBQUcsR0FBRSxHQUFFLElBQUUsS0FBTTtZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sTUFBSSxJQUFFLEtBQUcsR0FBRyxNQUFJLEdBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFHLElBQUUsSUFBRSxLQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztVQUFJLElBQUUsUUFBUSxJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRTtBQUFsQixRQUFzQixJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUUsSUFBRSxJQUFLO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztVQUFJLElBQUUsUUFBUSxJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRTtBQUFsQixRQUFzQixJQUFFLEVBQUUsRUFBRSxNQUFJLEVBQUUsRUFBRSxJQUFJLE9BQU8sTUFBSSxLQUFLLE1BQU0sR0FBRSxLQUFHLEtBQVE7WUFBUyxFQUFFLEdBQUUsR0FBRztXQUFPLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBRyxNQUFJLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBTztZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sRUFBRSxFQUFFLElBQUcsRUFBRSxJQUFHLE1BQUksRUFBRSxFQUFFLElBQUcsRUFBRSxJQUFPO1lBQVMsSUFBSTtTQUFLLE9BQUssSUFBRyxLQUFLLFFBQU0sSUFBRyxLQUFLLFFBQU0sQ0FBQyxHQUFFLEtBQUssVUFBUSxDQUFDLEdBQUUsRUFBRSxNQUFNLE1BQWdCO1lBQVMsSUFBSTtTQUFLLE9BQUssSUFBRyxLQUFLLFFBQU0sSUFBRyxFQUFFLE1BQU0sTUFBSyxZQUFXLEtBQUssUUFBTSxLQUFLLFFBQVEsUUFBUSxnQkFBaUI7WUFBUyxJQUFJO1NBQUssV0FBUyxJQUFHLEtBQUssUUFBTSxJQUFHLEtBQUssVUFBUSxDQUFDLEdBQUUsRUFBRSxNQUFNLE1BQWdCO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsRUFBRTtRQUFTLElBQUUsRUFBRSxFQUFFLGdCQUFnQixPQUFPLEtBQUcsS0FBRyxRQUFNLElBQUUsRUFBRSxFQUFFLE9BQU8sSUFBRyxjQUFhLENBQUMsS0FBSSxDQUFDLEdBQUs7WUFBUyxJQUFJO1NBQUssV0FBUyxJQUFHLEtBQUssWUFBVSxJQUFHLEVBQUUsTUFBTSxNQUFnQjtZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLEVBQUU7UUFBUyxJQUFFLEtBQUssVUFBVSxJQUFHLEtBQUcsS0FBRyxPQUFLLE1BQUksRUFBRSxRQUFPLE9BQU8sRUFBRSxFQUFFLEdBQUcsY0FBWSxDQUFDLEdBQUUsQ0FBQyxHQUFFLE9BQU87QUFBSixRQUFNO1FBQUUsSUFBRSxFQUFFLEVBQUU7UUFBZ0IsSUFBRTtRQUFHLElBQUUsS0FBSyxpQkFBYyxPQUFPLFVBQVMsR0FBRzthQUFPLEVBQUUsRUFBRSxRQUFVO0FBQTFDLE1BQUYsRUFBOEMsTUFBSSxFQUFyRCxFQUF3RCxLQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBUTtRQUFFLEVBQUUsR0FBRyxjQUFZLENBQUMsR0FBRTtBQUFJLFVBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFRO1FBQUUsRUFBRSxHQUFHLGVBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSSxLQUFHLEtBQUcsT0FBSyxPQUFPLEVBQUUsRUFBRSxHQUFHLGFBQVk7QUFBSSxZQUFPLEVBQUUsU0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUcsY0FBYSxDQUFDLElBQUcsS0FBRyxLQUFPO1lBQVMsSUFBSTtNQUFFLE1BQU0sTUFBSyxXQUFXLElBQUksSUFBRSxFQUFFLEtBQUssU0FBUSxNQUFNLEtBQUssUUFBTSxJQUFJLEVBQUUsS0FBSyxTQUFRLElBQUcsS0FBSyxRQUFNLElBQUksRUFBRSxLQUFLLFNBQVc7WUFBUyxFQUFFLEdBQUUsR0FBRztTQUFLLFVBQVEsR0FBRSxLQUFLLElBQU87WUFBUyxFQUFFLEdBQUc7UUFBRyxFQUFFLEdBQUUsS0FBSSxPQUFPLE9BQU8sSUFBRSxFQUFFLEdBQUU7QUFBVixRQUFjLElBQUUsRUFBRSxHQUFFLElBQUksT0FBTyxLQUFHLElBQUUsS0FBRyxNQUFJLEtBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsR0FBRSxNQUFJLEtBQU07WUFBUyxFQUFFLEdBQUc7U0FBSyxLQUFHLEtBQUksS0FBSyxVQUFRLE1BQUssS0FBSyxVQUFRLEVBQUUsS0FBRyxJQUFHLEtBQUssV0FBVSxLQUFLLFFBQVEsU0FBTyxFQUFFLEtBQUssUUFBUSxRQUFPLENBQUMsSUFBRyxLQUFLLFFBQU0sSUFBRyxLQUFLLGVBQWEsSUFBRyxLQUFLLGNBQWU7WUFBUyxFQUFFLEdBQUc7V0FBTyxJQUFFLEtBQUcsV0FBUyxJQUFFLEtBQUcsUUFBTSxJQUFFLEtBQUcsU0FBTyxJQUFFLEtBQUcsVUFBVztZQUFTLEVBQUUsR0FBRztXQUFPLEtBQUcsS0FBRyxTQUFPLEtBQUcsS0FBRyxPQUFLLEtBQUcsS0FBRyxTQUFPLEtBQUcsS0FBRyxVQUFXO1lBQVMsRUFBRSxHQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsUUFBUSxPQUFPLElBQUUsRUFBRSxJQUFJLEtBQUs7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFnQjtZQUFTLElBQUk7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLEtBQUcsTUFBSyxLQUFLLEtBQVE7WUFBUyxJQUFJO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFNBQU8sTUFBSyxLQUFLLFNBQVk7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFB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TUFBSSxLQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsTUFBSSxlQUFhLEVBQUUsUUFBTSxJQUFFLElBQUUsSUFBRSxJQUFHLGlCQUFlLElBQUUsTUFBSSxJQUFFLElBQUUsSUFBRSxLQUFJLENBQUMsQ0FBQyxFQUFFLFVBQVEsSUFBRSxJQUFFLE9BQUssSUFBRSxFQUFFLEVBQUUsSUFBRSxLQUFJLEVBQUUsTUFBTSxLQUFHLElBQUUsa0JBQWdCLEVBQUUsUUFBTSxDQUFDLElBQUUsSUFBRSxLQUFHLEtBQUcsb0JBQWtCLGVBQWEsT0FBTSxFQUFFLE1BQU0sU0FBTyxDQUFDLEdBQUUsRUFBRSxNQUFNLFVBQVEsZ0JBQWUsRUFBRSxNQUFNLFVBQVEsVUFBUyxFQUFFLGFBQVcsZUFBYSxFQUFFLE1BQUssaUJBQWUsTUFBSSxLQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsTUFBSSxlQUFhLEVBQUUsUUFBTSxJQUFFLElBQUUsSUFBRSxJQUFHLGlCQUFlLElBQUUsTUFBSSxJQUFFLElBQUUsSUFBRSxLQUFJLENBQUMsQ0FBQyxFQUFFLFVBQVEsSUFBRSxLQUFHLE9BQUssSUFBRSxFQUFFLEVBQUUsSUFBRSxLQUFJLEVBQUUsTUFBTSxLQUFHLElBQUUsa0JBQWdCLENBQUMsRUFBRSxRQUFNLENBQUMsQ0FBQyxJQUFFLElBQUUsS0FBRyxLQUFHLG9CQUFrQixlQUFhLE9BQU0sRUFBRSxNQUFNLFNBQU8sQ0FBQyxHQUFFLEVBQUUsTUFBTSxVQUFRLGdCQUFlLEVBQUUsTUFBTSxVQUFRO0FBQVMsZUFBRyxDQUFDLENBQUMsRUFBRSxVQUFRLEtBQUcsS0FBRyxJQUFFLE9BQUssSUFBRSxFQUFFLEVBQUUsS0FBSSxFQUFFLE1BQU0sS0FBRyxJQUFFLGlCQUFlLENBQUMsSUFBRSxJQUFFLG9CQUFrQixJQUFFLEVBQUUsUUFBTSxJQUFFLG9CQUFrQixFQUFFLE9BQUssSUFBRSxPQUFNLEVBQUUsTUFBTSxTQUFPLEdBQUUsRUFBRSxZQUFVLGlCQUFlLElBQUUsaUJBQWUsSUFBRSxLQUFHLEdBQUUsRUFBRSxNQUFNLFVBQVEsZ0JBQWUsRUFBRSxNQUFNLFVBQVEsVUFBUyxNQUFJLEtBQUcsY0FBWSxPQUFPLEVBQUUsV0FBVztnQkFBSSxJQUFFLEVBQUUsS0FBSyxrQkFBa0IsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEtBQUssTUFBSyxHQUFLO0FBQUM7a0JBQVMsSUFBSTtjQUFJLEdBQUUsR0FBRSxHQUFFLEVBQUUsSUFBRSxLQUFLLE9BQU0sSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLE1BQUksS0FBRyxJQUFFLElBQUcsSUFBRSxLQUFHLElBQUUsS0FBSztrQkFBUyxJQUFJO2NBQUksR0FBRSxFQUFFLE1BQUksSUFBRSxLQUFLLFFBQU0sR0FBRSxJQUFFLElBQUUsS0FBSyxJQUFJLENBQUMsSUFBRSxFQUFFLFdBQVUsSUFBRSxLQUFHLElBQUUsQ0FBQyxLQUFHLEVBQUUsSUFBRSxJQUFHLHNCQUFzQixNQUFJLEVBQU07a0JBQVMsRUFBRSxHQUFHO2NBQUcsR0FBRSxPQUFPLEVBQUUsa0JBQWlCLEVBQUUsbUJBQWtCLENBQUMsRUFBRSxJQUFHLENBQUMsRUFBRSxXQUFXO2dCQUFJLElBQUUsRUFBRSxFQUFFLFFBQVEsUUFBUSxrQkFBa0I7Z0JBQVEsSUFBRSxJQUFFLElBQUUsRUFBRSxNQUFJLE1BQUksRUFBRSxrQkFBaUIsRUFBRSxvQkFBbUIsRUFBSztBQUFDO2tCQUFTLEVBQUUsR0FBRztjQUFJLElBQUUsSUFBRSxJQUFFLEVBQUUsRUFBRSxXQUFTLElBQUUsSUFBRSxLQUFLLElBQUksSUFBRSxLQUFHLEtBQUssSUFBSSxPQUFLLEtBQUcsS0FBRyxJQUFFLEtBQUcsS0FBSyxJQUFJLElBQUUsS0FBRyxNQUFJLEtBQUcsS0FBSSxJQUFFLElBQUUsRUFBRSxRQUFRLGdCQUFlLENBQUMsS0FBSyxJQUFJLE9BQUssSUFBRSxLQUFHLEVBQUUsUUFBUSxnQkFBZSxDQUFLO2tCQUFTLEVBQUUsR0FBRztZQUFFLGtCQUFpQixJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxLQUFLLE9BQU0sY0FBYyxJQUFHLElBQUUsWUFBWSxHQUFPO2tCQUFTLEVBQUUsR0FBRztjQUFJLEdBQUUsR0FBRSxFQUFFLElBQUcsR0FBRSxJQUFHLElBQUUsRUFBRSxJQUFHLElBQUUsRUFBRSxJQUFHLElBQUUsSUFBRSxHQUFFLElBQUUsS0FBSyxJQUFJLElBQUUsSUFBRyxJQUFFLE1BQUksQ0FBQyxHQUFFLENBQUMsSUFBRSxLQUFHLElBQUUsQ0FBQyxPQUFLLElBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsU0FBUztnQkFBRyxHQUFFLE9BQU8sRUFBRSxrQkFBaUIsRUFBRSxtQkFBa0IsQ0FBQyxFQUFFLElBQUUsQ0FBRztlQUFHLEdBQUUsT0FBTyxFQUFFLGtCQUFpQixFQUFFLG1CQUFrQixDQUFHO2tCQUFTLEVBQUUsR0FBRztjQUFHLEdBQUUsT0FBTyxJQUFFLENBQUMsR0FBRSxjQUFjLElBQUcsSUFBRSxHQUFFLENBQUMsSUFBRSxNQUFJLElBQUUsQ0FBQyxRQUFNLElBQUUsS0FBRyxHQUFFLElBQUUsSUFBRSxJQUFHLElBQUUsS0FBSyxNQUFNLElBQUUsS0FBRyxHQUFFLEVBQUUsV0FBUyxLQUFHLEtBQUcsSUFBRSxLQUFHLElBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxNQUFJLElBQUUsS0FBSSxJQUFFLElBQUUsR0FBRSxJQUFFLEtBQUssT0FBTSxzQkFBc0IsSUFBRyxNQUFJLEVBQUUsa0JBQWlCLEVBQUUsb0JBQW1CLENBQUc7YUFBSTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUUsSUFBRSxJQUFFO1lBQUUsSUFBRSxFQUFFO1lBQWdDLElBQUU7WUFBSyxJQUFFLEVBQUU7WUFBTSxJQUFFLEVBQUUsS0FBSyxzQkFBb0IsRUFBRTtZQUFXLElBQUUsYUFBVztjQUFJLElBQUUsRUFBRSxLQUFLLHNCQUFzQixZQUFXLEVBQUUsVUFBUyxLQUFLLGNBQVksRUFBRSxJQUFJLFVBQVMsRUFBRSxjQUFZLEdBQUcsUUFBTyxZQUFXO2NBQUUsSUFBSSxVQUFTLEVBQUUsTUFBZ0I7QUFBeEQsWUFBOUMsQ0FBWixLQUF5SDtnQkFBSSxJQUFFLEVBQUUsS0FBSyxrQkFBa0IsUUFBUSxTQUFTLEVBQUUsSUFBSSxVQUFZO0FBQUM7QUFBclksVUFBc1ksT0FBTyxFQUFFLGNBQVksRUFBRSxPQUFLLEdBQUUsS0FBSSxLQUFHLEVBQUUsS0FBSyx3QkFBd0IsU0FBUyx1QkFBc0IsU0FBUyxrQkFBZ0IsRUFBRSxRQUFRLFFBQVEsV0FBVSxFQUFFLE1BQU0sUUFBUSxnQkFBZSxDQUFDLFFBQU8sQ0FBQyxRQUFNLFNBQVMsZ0JBQWUsSUFBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFHLElBQUUsRUFBRSxLQUFLLGtCQUFrQixRQUFRLGNBQWEsSUFBRSxFQUFFLEtBQUssa0JBQWtCLFFBQVEsZUFBYyxJQUFFLElBQUUsSUFBRSxFQUFFLFdBQVUsS0FBSyxrQkFBa0IsS0FBSyxVQUFTLEdBQUc7Y0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQUksR0FBRztnQkFBSSxJQUFFLEVBQUUsMENBQXdDLEtBQUcsRUFBRSxTQUFTLGFBQVksTUFBTSxVQUFTLEdBQUc7Z0JBQUUsa0JBQWtCLElBQUksSUFBRSxFQUFFLE1BQU0sUUFBUSxFQUFLO0FBQW5FLGNBQTVCLEVBQWlHLEVBQUUsT0FBVTtBQUFDO0FBQTdOLFVBQTNKLEVBQTBYLEtBQUcsRUFBRSxPQUFPLElBQUcsSUFBRSxFQUFFLFFBQU8sSUFBRSxjQUFhLFVBQVMsT0FBTSxLQUFJLE1BQU0sTUFBTSxVQUFTLEdBQUc7Y0FBSSxJQUFFLElBQUUsWUFBWSxPQUFNLGVBQWEsT0FBTyxTQUFTLEtBQUssTUFBTSxPQUFLLElBQUUsR0FBRSxDQUFJO0FBQTNILGNBQStILFFBQVEsSUFBSSxxQkFBbUIsR0FBRyxHQUFHLHFCQUFtQixHQUFFLFlBQVc7WUFBRSxhQUFXLElBQUUsRUFBRSxLQUFLLGtCQUFrQixRQUFRLGNBQWEsSUFBRSxFQUFFLEtBQUssa0JBQWtCLFFBQVEsZUFBYyxJQUFFLElBQUUsSUFBRSxFQUFFLFNBQVEsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEtBQU87QUFBdE4sWUFBd04sS0FBSSxFQUFFLE1BQUssTUFBTSxHQUFHLGdCQUFlLFVBQVMsR0FBRSxHQUFHO2VBQUssTUFBSSxNQUFJLElBQUUsSUFBRyxJQUFFLElBQUUsS0FBSyxNQUFNLElBQUUsS0FBRyxJQUFFLEdBQUUsTUFBSSxNQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsS0FBSyxPQUFNLHNCQUEwQjtBQUF2SSxjQUEySSxNQUFNLEdBQUcsZ0JBQWUsVUFBUyxHQUFFLEdBQUc7ZUFBSyxNQUFJLE1BQUksSUFBRSxJQUFHLElBQUUsSUFBRSxLQUFLLE1BQU0sSUFBRSxLQUFHLElBQUUsR0FBRSxNQUFJLE1BQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxLQUFLLE9BQU0sc0JBQTBCO0FBQXZJLFlBQXlJLE9BQU8sTUFBTSxHQUFHLGVBQWMsVUFBUyxHQUFFLEdBQUc7ZUFBSyxNQUFJLE1BQUksSUFBRSxJQUFHLEVBQUs7QUFBRyxTQUFqRSxDQUExbkM7QUFBNnJDLE9BQTN5SyxDQUFQO0FBQXZMLE9BQTArSyxNQUFLLGNBQVMsR0FBRztRQUFFLE1BQU0sUUFBUSxnQkFBZSxDQUFLO0FBQS9oTCxPQUFnaUwsTUFBSyxjQUFTLEdBQUc7UUFBRSxNQUFNLFFBQVEsZ0JBQWUsQ0FBSztBQUFybEwsT0FBc2xMLEtBQUksYUFBUyxHQUFHO1FBQUUsTUFBTSxRQUFRLGVBQWMsQ0FBSztBQUF6b0wsVUFBNm9MLEdBQUcsV0FBUyxVQUFTLEdBQUc7V0FBTyxFQUFFLEtBQUcsRUFBRSxHQUFHLE1BQU0sTUFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVUsTUFBSSxvQkFBaUIsK0RBQUcsSUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFVLElBQUUsd0NBQXNDLEVBQUUsS0FBSyxNQUFNLE1BQWdCO0FBQUMsR0FBbE47QUFBN3BMLEVBQWczTCxtQkFBaUIsR0FBRztNQUFJLE1BQUcsTUFBSyxjQUFTLEdBQUc7a0JBQVksS0FBSyxZQUFXO1lBQUksSUFBRSxFQUFFLE1BQUksRUFBRSxNQUFNLEtBQUs7WUFBbUIsS0FBRyxFQUFFLFNBQVEsRUFBRTtZQUFPLElBQUUsRUFBRSxPQUFPO1lBQXVCLElBQUUsRUFBRSxLQUFLO1lBQW9CLElBQUUsRUFBRSxLQUFLO1lBQXNCLElBQUUsRUFBRSxLQUFLLHVCQUF1QixFQUFFLFdBQVMsSUFBRSxFQUFFLEtBQUssRUFBRSwyQ0FBMkMsV0FBVSxFQUFFLFdBQVMsSUFBRSxFQUFFLDJDQUEwQyxFQUFFLE9BQU8sS0FBSSxFQUFFLFdBQVMsSUFBRSxFQUFFLHdDQUF1QyxFQUFFLFdBQVMsSUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLENBQUMsSUFBRyxFQUFFLFNBQVMsc0JBQXFCLEVBQUUsV0FBVyxPQUFNLEVBQUUsV0FBVyxVQUFTLEVBQUUsT0FBTyxLQUFJLEVBQUUsT0FBTyxRQUFRLElBQUUsYUFBVztZQUFFLEdBQUcsYUFBVyxFQUFFLFNBQVMsb0JBQW1CLFlBQVc7Y0FBRSxJQUFJLG1CQUFtQixHQUFHLG1CQUFrQixVQUFTLEdBQUc7bUJBQUksRUFBRSxJQUF1QjtBQUF2RixrQkFBMkYsVUFBVSxJQUFJLG1CQUFtQixHQUFHLG1CQUFrQixVQUFTLEdBQUc7bUJBQUksRUFBRSxVQUFVLElBQXVCO0FBQTNHLGVBQTZHLElBQUksZ0JBQWMsU0FBUyxZQUFXO0FBQUk7QUFBcEMsZUFBcUMsS0FBSyxFQUFFLFFBQVEsSUFBSSxvQkFBb0IsR0FBRyxvQkFBc0I7QUFBdlUsYUFBNFU7QUFBaFk7QUFBQSxZQUFpWSxJQUFFLGFBQVc7WUFBRSxHQUFHLGFBQVcsRUFBRSxZQUFZLFNBQVEsRUFBRSxJQUFJLG9CQUFtQixFQUFFLFVBQVUsSUFBSSxvQkFBbUIsRUFBRSxRQUFRLElBQXlCO0FBQW5oQjtZQUFvaEIsSUFBRSxhQUFXO2NBQUksSUFBRSxZQUFVLEVBQUUsSUFBSSxZQUFZLElBQUcsQ0FBQyxHQUFFLEtBQUksSUFBSSxJQUFFLEVBQUUsV0FBVSxJQUFFLEdBQUUsSUFBRSxFQUFFLFVBQVEsRUFBRSxJQUFFLFdBQVMsRUFBRSxFQUFFLElBQUksSUFBSSxjQUFhLFdBQVMsSUFBRSxFQUFFO0FBQVIsY0FBcUIsSUFBRSxFQUFFO2NBQWMsSUFBRSxJQUFFLEVBQUUsU0FBUyxNQUFJLEVBQUUsVUFBVSxjQUFZLEVBQUUsU0FBUztjQUFJLElBQUUsSUFBRSxFQUFFLFNBQVMsT0FBSyxFQUFFLFVBQVUsZUFBYSxFQUFFLFNBQVM7Y0FBSyxJQUFFLEVBQUUsUUFBUTtjQUFRLElBQUUsRUFBRSxRQUFRO2NBQVMsSUFBRSxJQUFFO2NBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxLQUFHO2NBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxLQUFHO2NBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxLQUFHLE1BQUksS0FBRyxLQUFHLE1BQUk7Y0FBRSxJQUFFLEVBQUU7Y0FBYSxJQUFFLEVBQUU7Y0FBYyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFLElBQUUsVUFBUTtjQUFXLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7Y0FBRSxJQUFFO2NBQUUsSUFBRSxLQUFHLENBQUMsSUFBRSxJQUFFLElBQUUsSUFBRTtjQUFFLElBQUU7Y0FBRSxJQUFFO2NBQUUsSUFBRSxJQUFFLFdBQVM7Y0FBTSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtjQUFFLElBQUU7Y0FBRSxJQUFFLElBQUUsSUFBRSxJQUFFO2NBQUUsSUFBRSxJQUFFLElBQUUsSUFBRTtjQUFFLElBQUUsR0FBRyxFQUFFLE1BQUksSUFBRSxJQUFFLElBQUcsRUFBRSxRQUFNLElBQUUsSUFBRSxJQUFFLElB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LFNBQU8sRUFBRTtVQUFPLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRyxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEdBQUcsRUFBRSxLQUFHLEdBQUcsRUFBRSxLQUFHLEVBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRyxFQUFFLGVBQWU7QUFBbkssV0FBd0ssSUFBRSxFQUFFLFVBQVMsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFdBQVUsSUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFTLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxZQUFZO1lBQVMsRUFBRSxHQUFHO1NBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFTLFNBQVE7UUFBRSxLQUFHLEVBQUMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFVBQVMsU0FBUSxHQUFHLEVBQUUsU0FBUyxHQUFHLFlBQVU7QUFBSSxZQUFNLEVBQUMsV0FBVSxNQUFLLFVBQVMsR0FBRSxRQUFPLEVBQUUsSUFBRyxRQUFPLEVBQUUsUUFBTyxRQUFPLEVBQVU7WUFBUyxFQUFFLEdBQUc7UUFBSSxJQUFFLEVBQUUsT0FBTyxJQUFHLE1BQUksR0FBRSxPQUFNLEVBQUMsR0FBRSxHQUFHLEVBQUUsR0FBRyxVQUFTLEdBQUUsR0FBRyxFQUFFLEdBQUcsV0FBVSxLQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFHO1dBQUcsRUFBRSxHQUFHLFNBQVEsS0FBRyxFQUFFLEdBQUcsU0FBUTtBQUFJLFlBQU0sRUFBQyxHQUFFLEdBQUcsSUFBRSxJQUFHLEdBQUUsR0FBRyxJQUFNO1lBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRztXQUFNLEVBQUMsR0FBRSxJQUFFLEtBQUcsR0FBRSxHQUFFLElBQUUsS0FBTTtZQUFTLEVBQUUsR0FBRSxHQUFHO1dBQU8sTUFBSSxJQUFFLEtBQUcsR0FBRyxNQUFJLEdBQUcsS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFHLElB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S0FBSyxRQUFNLElBQUcsS0FBSyxlQUFhLElBQUcsS0FBSyxjQUFlO1lBQVMsRUFBRSxHQUFHO1dBQU8sSUFBRSxLQUFHLFdBQVMsSUFBRSxLQUFHLFFBQU0sSUFBRSxLQUFHLFNBQU8sSUFBRSxLQUFHLFVBQVc7WUFBUyxFQUFFLEdBQUc7V0FBTyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsT0FBSyxLQUFHLEtBQUcsU0FBTyxLQUFHLEtBQUcsVUFBVztZQUFTLEVBQUUsR0FBRSxHQUFHO1FBQUksSUFBRSxFQUFFLFFBQVEsT0FBTyxJQUFFLEVBQUUsSUFBSSxLQUFLO1lBQVMsS0FBSztNQUFFLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO09BQUcsTUFBTSxNQUFLLFlBQVcsS0FBSyxLQUFHLE1BQUssS0FBSyxLQUFRO1lBQVMsS0FBSztPQUFHLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO01BQUUsTUFBTSxNQUFLLFlBQVcsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFZO1lBQVMsS0FBSztPQUFHLE1BQU0sTUFBZ0I7WUFBUyxLQUFLO09BQUcsTUFBTSxNQUFnQjtZQUFTLEtBQUs7TUFBRSxNQUFNLE1BQUssWUFBVyxLQUFLLFFBQU0sQ0FBQyxHQUFFLEtBQUssVUFBUSxDQUFDLEdBQUUsS0FBSyxTQUFPLE1BQUssS0FBSyxTQUFPLE1BQUssS0FBSyxRQUFRO1lBQVMsR0FBRyxHQUFFLEdBQUc7V0FBTyxJQUFFLEtBQUcsSUFBRyxFQUFFLGNBQVksRUFBRSxFQUFFLGFBQVksR0FBRyxTQUFTLFNBQVEsSUFBSSxHQUFHLEdBQUs7WUFBUyxHQUFHLEdBQUUsR0FBRztTQUFLLFVBQVEsR0FBRyxJQUFHLEdBQUcsVUFBUyxLQUFHLEtBQUksS0FBSyxRQUFRLGNBQVksS0FBSyxRQUFRLGVBQWEsR0FBRSxLQUFLLFdBQVMsSUFBRyxLQUFLLFVBQVEsSUFBRyxLQUFLLGNBQVksSUFBRyxLQUFLLGNBQVksSUFBRyxLQUFLLFVBQVEsR0FBRSxLQUFLLFFBQU0sRUFBRSxPQUFNLEtBQUssY0FBWSxJQUFJLEVBQUUsTUFBSyxL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LElBQUcsS0FBSSxJQUFHLE9BQU0sSUFBRyxPQUFNLElBQUcsUUFBTyxJQUFHLE9BQU0sSUFBRyxJQUFHLEdBQUUsS0FBSSxHQUFFLE1BQUssR0FBRSxPQUFNLElBQUcsUUFBTyxJQUFHLFFBQU8sSUFBRyxTQUFRLEdBQUUsUUFBTyxHQUFFLFVBQVMsS0FBSSxJQUFJLEtBQUcsZUFBYSxPQUFPLElBQUUsSUFBRSxlQUFhLE9BQU8sT0FBSyxPQUFLLE1BQU0sU0FBTyxTQUFxQyxxQ0FBVyxZQUFXO1dBQVU7QUFBNUI7QUFBQSxvR0FBdEMsR0FBb0UsZUFBYSxPQUFPLFVBQVEsT0FBTyxVQUFRLE9BQU8sVUFBUSxLQUFHLEVBQUUsS0FBTSxFQUF0SjtBQUFuN25CLEVBQTBrb0IsUUFBTyxVQUFTO0FBQzNsb0Isc0MiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3BhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IERvY3VtZW50LCB7ICBNYWluLEhlYWQsIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4gICAgd2luZG93LiQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHJlcXVpcmUoXCIuLi9zdGF0aWMvaGFtbWVyLm1pbi5qc1wiKTtcbiAgICByZXF1aXJlKFwiLi4vc3RhdGljL21hdGVyaWFsaXplLm1pbi5qc1wiKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTIuMS4xLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCcpO1xuICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcbiAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjIvY3NzL21hdGVyaWFsaXplLm1pbi5jc3MnKTtcbiAgICAgICAgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcblxuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgICAgIGgze1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPiBGdW4gUHJvamVjdCA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cblxuXG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsU3RhdGUoc3RhdGUpe1xuICAgIGNvbnNvbGUubG9nKFwiSEFWRSBTVEFURVwiKVxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIHdpbmRvdy4kID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbiAgICByZXF1aXJlKFwiLi4vc3RhdGljL21hdGVyaWFsaXplLm1pbi5qc1wiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZGFya2VuLTJcIj5cbiAgICAgICAgey8qIGlmKHByb2Nlc3MuV2luZG93KXtcbiAgICAgICAgICB2YXIgdGhpbmcgPSBjcmVhdGVGcmFnbWVudCg8TG9hZGVyIHN0eWxlPXt7ZGlzcGxheTogZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gXCJub25lXCIgOiBcImJsb2NrXCJ9fS8+KSAqL31cblxuXG4gICAgICAgICAgPEhlYWRlciBwYXRobmFtZT17dGhpcy5wcm9wcy5kYXRhLnVybC5wYXRobmFtZX0gdXNlcm5hbWU9e3RoaXMucHJvcHMuZGF0YS51c2VybmFtZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlcm5hbWVGaWVsZCBmcm9tICcuL3VzZXJuYW1lRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMgIT0gbmV4dFByb3BzO1xuICAvLyB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPVwiYmx1ZSBkYXJrZW4tMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyByaWdodFwiPlxuICAgICAgICAgIDxVc2VybmFtZUZpZWxkIHVzZXJuYW1lPXt0aGlzLnByb3BzLnVzZXJuYW1lfSAvPjwvZGl2PlxuICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJsZWZ0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSA9PT0gJy8nICYmICdhY3RpdmUnfT5cbiAgICAgICAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgICAgICAgIFx0XHRcdDxhID5Ib21lIDwvYT5cbiAgICAgICAgICBcdFx0XHQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9kaXNjb3ZlcicgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvZGlzY292ZXInPlxuICAgICAgICAgICAgICA8YSA+RGlzY292ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9jcmVhdGUnICYmICdhY3RpdmUnfT5cbiAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nL2NyZWF0ZSc+XG4gICAgICAgICAgICAgIDxhID5DcmVhdGUgYSBQb3N0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj4pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcm5hbWVGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudXNlcm5hbWUpe1xuICAgICAgICAgIHJldHVybiAoPGg0PldlbGNvbWUsIHt0aGlzLnByb3BzLnVzZXJuYW1lfS48L2g0PilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHByZWZpeFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpY29uX3ByZWZpeFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsID5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91c2VybmFtZUZpZWxkLmpzIiwiLyohXG4gKiBNYXRlcmlhbGl6ZSB2MC45OC4yIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBNYXRlcmlhbGl6ZVxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxuICovXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXt2YXIgalF1ZXJ5O2pRdWVyeT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlPyQ9cmVxdWlyZShcImpxdWVyeVwiKTokfWpRdWVyeS5lYXNpbmcuanN3aW5nPWpRdWVyeS5lYXNpbmcuc3dpbmcsalF1ZXJ5LmV4dGVuZChqUXVlcnkuZWFzaW5nLHtkZWY6XCJlYXNlT3V0UXVhZFwiLHN3aW5nOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGpRdWVyeS5lYXNpbmdbalF1ZXJ5LmVhc2luZy5kZWZdKGEsYixjLGQsZSl9LGVhc2VJblF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYitjfSxlYXNlT3V0UXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihiLz1lKSooYi0yKStjfSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6LWQvMiooLS1iKihiLTIpLTEpK2N9LGVhc2VJbkN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYitjfSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooKGI9Yi9lLTEpKmIqYisxKStjfSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiK2M6ZC8yKigoYi09MikqYipiKzIpK2N9LGVhc2VJblF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiK2N9LGVhc2VPdXRRdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKigoYj1iL2UtMSkqYipiKmItMSkrY30sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYipiK2M6LWQvMiooKGItPTIpKmIqYipiLTIpK2N9LGVhc2VJblF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiKmIrY30sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKChiPWIvZS0xKSpiKmIqYipiKzEpK2N9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIqYipiK2M6ZC8yKigoYi09MikqYipiKmIqYisyKStjfSxlYXNlSW5TaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqTWF0aC5jb3MoYi9lKihNYXRoLlBJLzIpKStkK2N9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqTWF0aC5zaW4oYi9lKihNYXRoLlBJLzIpKStjfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQvMiooTWF0aC5jb3MoTWF0aC5QSSpiL2UpLTEpK2N9LGVhc2VJbkV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gMD09Yj9jOmQqTWF0aC5wb3coMiwxMCooYi9lLTEpKStjfSxlYXNlT3V0RXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiPT1lP2MrZDpkKigtTWF0aC5wb3coMiwtMTAqYi9lKSsxKStjfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIDA9PWI/YzpiPT1lP2MrZDooYi89ZS8yKTwxP2QvMipNYXRoLnBvdygyLDEwKihiLTEpKStjOmQvMiooLU1hdGgucG93KDIsLTEwKi0tYikrMikrY30sZWFzZUluQ2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihNYXRoLnNxcnQoMS0oYi89ZSkqYiktMSkrY30sZWFzZU91dENpcmM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCpNYXRoLnNxcnQoMS0oYj1iL2UtMSkqYikrY30sZWFzZUluT3V0Q2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/LWQvMiooTWF0aC5zcXJ0KDEtYipiKS0xKStjOmQvMiooTWF0aC5zcXJ0KDEtKGItPTIpKmIpKzEpK2N9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigxPT0oYi89ZSkpcmV0dXJuIGMrZDtpZihnfHwoZz0uMyplKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4tKGgqTWF0aC5wb3coMiwxMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykpK2N9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9MS43MDE1OCxnPTAsaD1kO2lmKDA9PWIpcmV0dXJuIGM7aWYoMT09KGIvPWUpKXJldHVybiBjK2Q7aWYoZ3x8KGc9LjMqZSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuIGgqTWF0aC5wb3coMiwtMTAqYikqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKStkK2N9LGVhc2VJbk91dEVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigyPT0oYi89ZS8yKSlyZXR1cm4gYytkO2lmKGd8fChnPWUqKC4zKjEuNSkpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybiBiPDE/LS41KihoKk1hdGgucG93KDIsMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKStjOmgqTWF0aC5wb3coMiwtMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKi41K2QrY30sZWFzZUluQmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooYi89ZSkqYiooKGYrMSkqYi1mKStjfSxlYXNlT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooKGI9Yi9lLTEpKmIqKChmKzEpKmIrZikrMSkrY30sZWFzZUluT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksKGIvPWUvMik8MT9kLzIqKGIqYiooKChmKj0xLjUyNSkrMSkqYi1mKSkrYzpkLzIqKChiLT0yKSpiKigoKGYqPTEuNTI1KSsxKSpiK2YpKzIpK2N9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkLWpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShhLGUtYiwwLGQsZSkrY30sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lKTwxLzIuNzU/ZCooNy41NjI1KmIqYikrYzpiPDIvMi43NT9kKig3LjU2MjUqKGItPTEuNS8yLjc1KSpiKy43NSkrYzpiPDIuNS8yLjc1P2QqKDcuNTYyNSooYi09Mi4yNS8yLjc1KSpiKy45Mzc1KStjOmQqKDcuNTYyNSooYi09Mi42MjUvMi43NSkqYisuOTg0Mzc1KStjfSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gYjxlLzI/LjUqalF1ZXJ5LmVhc2luZy5lYXNlSW5Cb3VuY2UoYSwyKmIsMCxkLGUpK2M6LjUqalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGEsMipiLWUsMCxkLGUpKy41KmQrY319KSxqUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcse2Vhc2VJbk91dE1hdGVyaWFsOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6ZC80KigoYi09MikqYipiKzIpK2N9fSksalF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBiPWEubGVuZ3RoLGQ9Yy50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWQmJiFjLmlzV2luZG93KGEpJiYoISgxIT09YS5ub2RlVHlwZXx8IWIpfHwoXCJhcnJheVwiPT09ZHx8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKSl9aWYoIWEualF1ZXJ5KXt2YXIgYz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgYy5mbi5pbml0KGEsYil9O2MuaXNXaW5kb3c9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PWEud2luZG93fSxjLnR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2VbZy5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sYy5pc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiYXJyYXlcIj09PWMudHlwZShhKX0sYy5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKGEpe3ZhciBiO2lmKCFhfHxcIm9iamVjdFwiIT09Yy50eXBlKGEpfHxhLm5vZGVUeXBlfHxjLmlzV2luZG93KGEpKXJldHVybiExO3RyeXtpZihhLmNvbnN0cnVjdG9yJiYhZi5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWYuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goZCl7cmV0dXJuITF9Zm9yKGIgaW4gYSk7cmV0dXJuIHZvaWQgMD09PWJ8fGYuY2FsbChhLGIpfSxjLmVhY2g9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9MCxnPWEubGVuZ3RoLGg9YihhKTtpZihkKXtpZihoKWZvcig7Zz5mJiYoZT1jLmFwcGx5KGFbZl0sZCksZSE9PSExKTtmKyspO2Vsc2UgZm9yKGYgaW4gYSlpZihlPWMuYXBwbHkoYVtmXSxkKSxlPT09ITEpYnJlYWt9ZWxzZSBpZihoKWZvcig7Zz5mJiYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGUhPT0hMSk7ZisrKTtlbHNlIGZvcihmIGluIGEpaWYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGU9PT0hMSlicmVhaztyZXR1cm4gYX0sYy5kYXRhPWZ1bmN0aW9uKGEsYixlKXtpZih2b2lkIDA9PT1lKXt2YXIgZj1hW2MuZXhwYW5kb10sZz1mJiZkW2ZdO2lmKHZvaWQgMD09PWIpcmV0dXJuIGc7aWYoZyYmYiBpbiBnKXJldHVybiBnW2JdfWVsc2UgaWYodm9pZCAwIT09Yil7dmFyIGY9YVtjLmV4cGFuZG9dfHwoYVtjLmV4cGFuZG9dPSsrYy51dWlkKTtyZXR1cm4gZFtmXT1kW2ZdfHx7fSxkW2ZdW2JdPWUsZX19LGMucmVtb3ZlRGF0YT1mdW5jdGlvbihhLGIpe3ZhciBlPWFbYy5leHBhbmRvXSxmPWUmJmRbZV07ZiYmYy5lYWNoKGIsZnVuY3Rpb24oYSxiKXtkZWxldGUgZltiXX0pfSxjLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsZCxlLGYsZyxoPWFyZ3VtZW50c1swXXx8e30saT0xLGo9YXJndW1lbnRzLmxlbmd0aCxrPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGgmJihrPWgsaD1hcmd1bWVudHNbaV18fHt9LGkrKyksXCJvYmplY3RcIiE9dHlwZW9mIGgmJlwiZnVuY3Rpb25cIiE9PWMudHlwZShoKSYmKGg9e30pLGk9PT1qJiYoaD10aGlzLGktLSk7aj5pO2krKylpZihudWxsIT0oZj1hcmd1bWVudHNbaV0pKWZvcihlIGluIGYpYT1oW2VdLGQ9ZltlXSxoIT09ZCYmKGsmJmQmJihjLmlzUGxhaW5PYmplY3QoZCl8fChiPWMuaXNBcnJheShkKSkpPyhiPyhiPSExLGc9YSYmYy5pc0FycmF5KGEpP2E6W10pOmc9YSYmYy5pc1BsYWluT2JqZWN0KGEpP2E6e30saFtlXT1jLmV4dGVuZChrLGcsZCkpOnZvaWQgMCE9PWQmJihoW2VdPWQpKTtyZXR1cm4gaH0sYy5xdWV1ZT1mdW5jdGlvbihhLGQsZSl7ZnVuY3Rpb24gZihhLGMpe3ZhciBkPWN8fFtdO3JldHVybiBudWxsIT1hJiYoYihPYmplY3QoYSkpPyFmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kOylhW2UrK109YltkKytdO2lmKGMhPT1jKWZvcig7dm9pZCAwIT09YltkXTspYVtlKytdPWJbZCsrXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfShkLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpbXS5wdXNoLmNhbGwoZCxhKSksZH1pZihhKXtkPShkfHxcImZ4XCIpK1wicXVldWVcIjt2YXIgZz1jLmRhdGEoYSxkKTtyZXR1cm4gZT8oIWd8fGMuaXNBcnJheShlKT9nPWMuZGF0YShhLGQsZihlKSk6Zy5wdXNoKGUpLGcpOmd8fFtdfX0sYy5kZXF1ZXVlPWZ1bmN0aW9uKGEsYil7Yy5lYWNoKGEubm9kZVR5cGU/W2FdOmEsZnVuY3Rpb24oYSxkKXtiPWJ8fFwiZnhcIjt2YXIgZT1jLnF1ZXVlKGQsYiksZj1lLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCI9PT1mJiYoZj1lLnNoaWZ0KCkpLGYmJihcImZ4XCI9PT1iJiZlLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGYuY2FsbChkLGZ1bmN0aW9uKCl7Yy5kZXF1ZXVlKGQsYil9KSl9KX0sYy5mbj1jLnByb3RvdHlwZT17aW5pdDpmdW5jdGlvbihhKXtpZihhLm5vZGVUeXBlKXJldHVybiB0aGlzWzBdPWEsdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIil9LG9mZnNldDpmdW5jdGlvbigpe3ZhciBiPXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3RoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3RvcDowLGxlZnQ6MH07cmV0dXJue3RvcDpiLnRvcCsoYS5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsVG9wfHwwKS0oZG9jdW1lbnQuY2xpZW50VG9wfHwwKSxsZWZ0OmIubGVmdCsoYS5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsTGVmdHx8MCktKGRvY3VtZW50LmNsaWVudExlZnR8fDApfX0scG9zaXRpb246ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Zm9yKHZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxkb2N1bWVudDthJiZcImh0bWxcIj09PSFhLm5vZGVUeXBlLnRvTG93ZXJDYXNlJiZcInN0YXRpY1wiPT09YS5zdHlsZS5wb3NpdGlvbjspYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8ZG9jdW1lbnR9dmFyIGI9dGhpc1swXSxhPWEuYXBwbHkoYiksZD10aGlzLm9mZnNldCgpLGU9L14oPzpib2R5fGh0bWwpJC9pLnRlc3QoYS5ub2RlTmFtZSk/e3RvcDowLGxlZnQ6MH06YyhhKS5vZmZzZXQoKTtyZXR1cm4gZC50b3AtPXBhcnNlRmxvYXQoYi5zdHlsZS5tYXJnaW5Ub3ApfHwwLGQubGVmdC09cGFyc2VGbG9hdChiLnN0eWxlLm1hcmdpbkxlZnQpfHwwLGEuc3R5bGUmJihlLnRvcCs9cGFyc2VGbG9hdChhLnN0eWxlLmJvcmRlclRvcFdpZHRoKXx8MCxlLmxlZnQrPXBhcnNlRmxvYXQoYS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpfHwwKSx7dG9wOmQudG9wLWUudG9wLGxlZnQ6ZC5sZWZ0LWUubGVmdH19fTt2YXIgZD17fTtjLmV4cGFuZG89XCJ2ZWxvY2l0eVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGMudXVpZD0wO2Zvcih2YXIgZT17fSxmPWUuaGFzT3duUHJvcGVydHksZz1lLnRvU3RyaW5nLGg9XCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGk9MDtpPGgubGVuZ3RoO2krKyllW1wiW29iamVjdCBcIitoW2ldK1wiXVwiXT1oW2ldLnRvTG93ZXJDYXNlKCk7Yy5mbi5pbml0LnByb3RvdHlwZT1jLmZuLGEuVmVsb2NpdHk9e1V0aWxpdGllczpjfX19KHdpbmRvdyksZnVuY3Rpb24oYSl7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGEpOmEoKX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXtmb3IodmFyIGI9LTEsYz1hP2EubGVuZ3RoOjAsZD1bXTsrK2I8Yzspe3ZhciBlPWFbYl07ZSYmZC5wdXNoKGUpfXJldHVybiBkfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIHAuaXNXcmFwcGVkKGEpP2E9W10uc2xpY2UuY2FsbChhKTpwLmlzTm9kZShhKSYmKGE9W2FdKSxhfWZ1bmN0aW9uIGcoYSl7dmFyIGI9bS5kYXRhKGEsXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbD09PWI/ZDpifWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBNYXRoLnJvdW5kKGIqYSkqKDEvYSl9fWZ1bmN0aW9uIGkoYSxjLGQsZSl7ZnVuY3Rpb24gZihhLGIpe3JldHVybiAxLTMqYiszKmF9ZnVuY3Rpb24gZyhhLGIpe3JldHVybiAzKmItNiphfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIDMqYX1mdW5jdGlvbiBpKGEsYixjKXtyZXR1cm4oKGYoYixjKSphK2coYixjKSkqYStoKGIpKSphfWZ1bmN0aW9uIGooYSxiLGMpe3JldHVybiAzKmYoYixjKSphKmErMipnKGIsYykqYStoKGIpfWZ1bmN0aW9uIGsoYixjKXtmb3IodmFyIGU9MDtwPmU7KytlKXt2YXIgZj1qKGMsYSxkKTtpZigwPT09ZilyZXR1cm4gYzt2YXIgZz1pKGMsYSxkKS1iO2MtPWcvZn1yZXR1cm4gY31mdW5jdGlvbiBsKCl7Zm9yKHZhciBiPTA7dD5iOysrYil4W2JdPWkoYip1LGEsZCl9ZnVuY3Rpb24gbShiLGMsZSl7dmFyIGYsZyxoPTA7ZG8gZz1jKyhlLWMpLzIsZj1pKGcsYSxkKS1iLGY+MD9lPWc6Yz1nO3doaWxlKE1hdGguYWJzKGYpPnImJisraDxzKTtyZXR1cm4gZ31mdW5jdGlvbiBuKGIpe2Zvcih2YXIgYz0wLGU9MSxmPXQtMTtlIT1mJiZ4W2VdPD1iOysrZSljKz11Oy0tZTt2YXIgZz0oYi14W2VdKS8oeFtlKzFdLXhbZV0pLGg9YytnKnUsaT1qKGgsYSxkKTtyZXR1cm4gaT49cT9rKGIsaCk6MD09aT9oOm0oYixjLGMrdSl9ZnVuY3Rpb24gbygpe3k9ITAsKGEhPWN8fGQhPWUpJiZsKCl9dmFyIHA9NCxxPS4wMDEscj0xZS03LHM9MTAsdD0xMSx1PTEvKHQtMSksdj1cIkZsb2F0MzJBcnJheVwiaW4gYjtpZig0IT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIHc9MDs0Pnc7Kyt3KWlmKFwibnVtYmVyXCIhPXR5cGVvZiBhcmd1bWVudHNbd118fGlzTmFOKGFyZ3VtZW50c1t3XSl8fCFpc0Zpbml0ZShhcmd1bWVudHNbd10pKXJldHVybiExO2E9TWF0aC5taW4oYSwxKSxkPU1hdGgubWluKGQsMSksYT1NYXRoLm1heChhLDApLGQ9TWF0aC5tYXgoZCwwKTt2YXIgeD12P25ldyBGbG9hdDMyQXJyYXkodCk6bmV3IEFycmF5KHQpLHk9ITEsej1mdW5jdGlvbihiKXtyZXR1cm4geXx8bygpLGE9PT1jJiZkPT09ZT9iOjA9PT1iPzA6MT09PWI/MTppKG4oYiksYyxlKX07ei5nZXRDb250cm9sUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW3t4OmEseTpjfSx7eDpkLHk6ZX1dfTt2YXIgQT1cImdlbmVyYXRlQmV6aWVyKFwiK1thLGMsZCxlXStcIilcIjtyZXR1cm4gei50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBBfSx6fWZ1bmN0aW9uIGooYSxiKXt2YXIgYz1hO3JldHVybiBwLmlzU3RyaW5nKGEpP3QuRWFzaW5nc1thXXx8KGM9ITEpOmM9cC5pc0FycmF5KGEpJiYxPT09YS5sZW5ndGg/aC5hcHBseShudWxsLGEpOnAuaXNBcnJheShhKSYmMj09PWEubGVuZ3RoP3UuYXBwbHkobnVsbCxhLmNvbmNhdChbYl0pKTohKCFwLmlzQXJyYXkoYSl8fDQhPT1hLmxlbmd0aCkmJmkuYXBwbHkobnVsbCxhKSxjPT09ITEmJihjPXQuRWFzaW5nc1t0LmRlZmF1bHRzLmVhc2luZ10/dC5kZWZhdWx0cy5lYXNpbmc6cyksY31mdW5jdGlvbiBrKGEpe2lmKGEpe3ZhciBiPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9dC5TdGF0ZS5jYWxscy5sZW5ndGg7Yz4xZTQmJih0LlN0YXRlLmNhbGxzPWUodC5TdGF0ZS5jYWxscykpO2Zvcih2YXIgZj0wO2M+ZjtmKyspaWYodC5TdGF0ZS5jYWxsc1tmXSl7dmFyIGg9dC5TdGF0ZS5jYWxsc1tmXSxpPWhbMF0saj1oWzJdLG49aFszXSxvPSEhbixxPW51bGw7bnx8KG49dC5TdGF0ZS5jYWxsc1tmXVszXT1iLTE2KTtmb3IodmFyIHI9TWF0aC5taW4oKGItbikvai5kdXJhdGlvbiwxKSxzPTAsdT1pLmxlbmd0aDt1PnM7cysrKXt2YXIgdz1pW3NdLHk9dy5lbGVtZW50O2lmKGcoeSkpe3ZhciB6PSExO2lmKGouZGlzcGxheSE9PWQmJm51bGwhPT1qLmRpc3BsYXkmJlwibm9uZVwiIT09ai5kaXNwbGF5KXtpZihcImZsZXhcIj09PWouZGlzcGxheSl7dmFyIEE9W1wiLXdlYmtpdC1ib3hcIixcIi1tb3otYm94XCIsXCItbXMtZmxleGJveFwiLFwiLXdlYmtpdC1mbGV4XCJdO20uZWFjaChBLGZ1bmN0aW9uKGEsYil7di5zZXRQcm9wZXJ0eVZhbHVlKHksXCJkaXNwbGF5XCIsYil9KX12LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixqLmRpc3BsYXkpfWoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZSh5LFwidmlzaWJpbGl0eVwiLGoudmlzaWJpbGl0eSk7Zm9yKHZhciBCIGluIHcpaWYoXCJlbGVtZW50XCIhPT1CKXt2YXIgQyxEPXdbQl0sRT1wLmlzU3RyaW5nKEQuZWFzaW5nKT90LkVhc2luZ3NbRC5lYXNpbmddOkQuZWFzaW5nO2lmKDE9PT1yKUM9RC5lbmRWYWx1ZTtlbHNle3ZhciBGPUQuZW5kVmFsdWUtRC5zdGFydFZhbHVlO2lmKEM9RC5zdGFydFZhbHVlK0YqRShyLGosRiksIW8mJkM9PT1ELmN1cnJlbnRWYWx1ZSljb250aW51ZX1pZihELmN1cnJlbnRWYWx1ZT1DLFwidHdlZW5cIj09PUIpcT1DO2Vsc2V7aWYodi5Ib29rcy5yZWdpc3RlcmVkW0JdKXt2YXIgRz12Lkhvb2tzLmdldFJvb3QoQiksSD1nKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR107SCYmKEQucm9vdFByb3BlcnR5VmFsdWU9SCl9dmFyIEk9di5zZXRQcm9wZXJ0eVZhbHVlKHksQixELmN1cnJlbnRWYWx1ZSsoMD09PXBhcnNlRmxvYXQoQyk/XCJcIjpELnVuaXRUeXBlKSxELnJvb3RQcm9wZXJ0eVZhbHVlLEQuc2Nyb2xsRGF0YSk7di5Ib29rcy5yZWdpc3RlcmVkW0JdJiYoZyh5KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ddPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXT92Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbR10oXCJleHRyYWN0XCIsbnVsbCxJWzFdKTpJWzFdKSxcInRyYW5zZm9ybVwiPT09SVswXSYmKHo9ITApfX1qLm1vYmlsZUhBJiZnKHkpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPT09ZCYmKGcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9XCIoMHB4LCAwcHgsIDBweClcIix6PSEwKSx6JiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUoeSl9fWouZGlzcGxheSE9PWQmJlwibm9uZVwiIT09ai5kaXNwbGF5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS5kaXNwbGF5PSExKSxqLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09ai52aXNpYmlsaXR5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS52aXNpYmlsaXR5PSExKSxqLnByb2dyZXNzJiZqLnByb2dyZXNzLmNhbGwoaFsxXSxoWzFdLHIsTWF0aC5tYXgoMCxuK2ouZHVyYXRpb24tYiksbixxKSwxPT09ciYmbChmKX19dC5TdGF0ZS5pc1RpY2tpbmcmJngoayl9ZnVuY3Rpb24gbChhLGIpe2lmKCF0LlN0YXRlLmNhbGxzW2FdKXJldHVybiExO2Zvcih2YXIgYz10LlN0YXRlLmNhbGxzW2FdWzBdLGU9dC5TdGF0ZS5jYWxsc1thXVsxXSxmPXQuU3RhdGUuY2FsbHNbYV1bMl0saD10LlN0YXRlLmNhbGxzW2FdWzRdLGk9ITEsaj0wLGs9Yy5sZW5ndGg7az5qO2orKyl7dmFyIGw9Y1tqXS5lbGVtZW50O2lmKGJ8fGYubG9vcHx8KFwibm9uZVwiPT09Zi5kaXNwbGF5JiZ2LnNldFByb3BlcnR5VmFsdWUobCxcImRpc3BsYXlcIixmLmRpc3BsYXkpLFwiaGlkZGVuXCI9PT1mLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwidmlzaWJpbGl0eVwiLGYudmlzaWJpbGl0eSkpLGYubG9vcCE9PSEwJiYobS5xdWV1ZShsKVsxXT09PWR8fCEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QobS5xdWV1ZShsKVsxXSkpJiZnKGwpKXtnKGwpLmlzQW5pbWF0aW5nPSExLGcobCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZT17fTt2YXIgbj0hMTttLmVhY2godi5MaXN0cy50cmFuc2Zvcm1zM0QsZnVuY3Rpb24oYSxiKXt2YXIgYz0vXnNjYWxlLy50ZXN0KGIpPzE6MCxlPWcobCkudHJhbnNmb3JtQ2FjaGVbYl07ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSE9PWQmJm5ldyBSZWdFeHAoXCJeXFxcXChcIitjK1wiW14uXVwiKS50ZXN0KGUpJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSl9KSxmLm1vYmlsZUhBJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZCksbiYmdi5mbHVzaFRyYW5zZm9ybUNhY2hlKGwpLHYuVmFsdWVzLnJlbW92ZUNsYXNzKGwsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIil9aWYoIWImJmYuY29tcGxldGUmJiFmLmxvb3AmJmo9PT1rLTEpdHJ5e2YuY29tcGxldGUuY2FsbChlLGUpfWNhdGNoKG8pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBvfSwxKX1oJiZmLmxvb3AhPT0hMCYmaChlKSxnKGwpJiZmLmxvb3A9PT0hMCYmIWImJihtLmVhY2goZyhsKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXsvXnJvdGF0ZS8udGVzdChhKSYmMzYwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmKGIuZW5kVmFsdWU9MCxiLnN0YXJ0VmFsdWU9MzYwKSwvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChhKSYmMTAwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmXCIlXCI9PT1iLnVuaXRUeXBlJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0xMDApfSksdChsLFwicmV2ZXJzZVwiLHtsb29wOiEwLGRlbGF5OmYuZGVsYXl9KSksZi5xdWV1ZSE9PSExJiZtLmRlcXVldWUobCxmLnF1ZXVlKX10LlN0YXRlLmNhbGxzW2FdPSExO2Zvcih2YXIgcD0wLHE9dC5TdGF0ZS5jYWxscy5sZW5ndGg7cT5wO3ArKylpZih0LlN0YXRlLmNhbGxzW3BdIT09ITEpe2k9ITA7YnJlYWt9aT09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITEsZGVsZXRlIHQuU3RhdGUuY2FsbHMsdC5TdGF0ZS5jYWxscz1bXSl9dmFyIG0sbj1mdW5jdGlvbigpe2lmKGMuZG9jdW1lbnRNb2RlKXJldHVybiBjLmRvY3VtZW50TW9kZTtmb3IodmFyIGE9NzthPjQ7YS0tKXt2YXIgYj1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5pbm5lckhUTUw9XCI8IS0tW2lmIElFIFwiK2ErXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIixiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKS5sZW5ndGgpcmV0dXJuIGI9bnVsbCxhfXJldHVybiBkfSgpLG89ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiBiLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGIpe3ZhciBjLGQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIGM9TWF0aC5tYXgoMCwxNi0oZC1hKSksYT1kK2Msc2V0VGltZW91dChmdW5jdGlvbigpe2IoZCtjKX0sYyl9fSgpLHA9e2lzU3RyaW5nOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSl9LGlzTm9kZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS5ub2RlVHlwZX0saXNOb2RlTGlzdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYSYmL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSkmJmEubGVuZ3RoIT09ZCYmKDA9PT1hLmxlbmd0aHx8XCJvYmplY3RcIj09dHlwZW9mIGFbMF0mJmFbMF0ubm9kZVR5cGU+MCl9LGlzV3JhcHBlZDpmdW5jdGlvbihhKXtyZXR1cm4gYSYmKGEuanF1ZXJ5fHxiLlplcHRvJiZiLlplcHRvLnplcHRvLmlzWihhKSl9LGlzU1ZHOmZ1bmN0aW9uKGEpe3JldHVybiBiLlNWR0VsZW1lbnQmJmEgaW5zdGFuY2VvZiBiLlNWR0VsZW1lbnR9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9fSxxPSExO2lmKGEuZm4mJmEuZm4uanF1ZXJ5PyhtPWEscT0hMCk6bT1iLlZlbG9jaXR5LlV0aWxpdGllcyw4Pj1uJiYhcSl0aHJvdyBuZXcgRXJyb3IoXCJWZWxvY2l0eTogSUU4IGFuZCBiZWxvdyByZXF1aXJlIGpRdWVyeSB0byBiZSBsb2FkZWQgYmVmb3JlIFZlbG9jaXR5LlwiKTtpZig3Pj1uKXJldHVybiB2b2lkKGpRdWVyeS5mbi52ZWxvY2l0eT1qUXVlcnkuZm4uYW5pbWF0ZSk7dmFyIHI9NDAwLHM9XCJzd2luZ1wiLHQ9e1N0YXRlOntpc01vYmlsZTovQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNBbmRyb2lkOi9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0dpbmdlcmJyZWFkOi9BbmRyb2lkIDJcXC4zXFwuWzMtN10vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQ2hyb21lOmIuY2hyb21lLGlzRmlyZWZveDovRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkscHJlZml4RWxlbWVudDpjLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscHJlZml4TWF0Y2hlczp7fSxzY3JvbGxBbmNob3I6bnVsbCxzY3JvbGxQcm9wZXJ0eUxlZnQ6bnVsbCxzY3JvbGxQcm9wZXJ0eVRvcDpudWxsLGlzVGlja2luZzohMSxjYWxsczpbXX0sQ1NTOnt9LFV0aWxpdGllczptLFJlZGlyZWN0czp7fSxFYXNpbmdzOnt9LFByb21pc2U6Yi5Qcm9taXNlLGRlZmF1bHRzOntxdWV1ZTpcIlwiLGR1cmF0aW9uOnIsZWFzaW5nOnMsYmVnaW46ZCxjb21wbGV0ZTpkLHByb2dyZXNzOmQsZGlzcGxheTpkLHZpc2liaWxpdHk6ZCxsb29wOiExLGRlbGF5OiExLG1vYmlsZUhBOiEwLF9jYWNoZVZhbHVlczohMH0saW5pdDpmdW5jdGlvbihhKXttLmRhdGEoYSxcInZlbG9jaXR5XCIse2lzU1ZHOnAuaXNTVkcoYSksaXNBbmltYXRpbmc6ITEsY29tcHV0ZWRTdHlsZTpudWxsLHR3ZWVuc0NvbnRhaW5lcjpudWxsLHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6e30sdHJhbnNmb3JtQ2FjaGU6e319KX0saG9vazpudWxsLG1vY2s6ITEsdmVyc2lvbjp7bWFqb3I6MSxtaW5vcjoyLHBhdGNoOjJ9LGRlYnVnOiExfTtiLnBhZ2VZT2Zmc2V0IT09ZD8odC5TdGF0ZS5zY3JvbGxBbmNob3I9Yix0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInBhZ2VYT2Zmc2V0XCIsdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInBhZ2VZT2Zmc2V0XCIpOih0LlN0YXRlLnNjcm9sbEFuY2hvcj1jLmRvY3VtZW50RWxlbWVudHx8Yy5ib2R5LnBhcmVudE5vZGV8fGMuYm9keSx0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInNjcm9sbExlZnRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwic2Nyb2xsVG9wXCIpO3ZhciB1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4tYS50ZW5zaW9uKmEueC1hLmZyaWN0aW9uKmEudn1mdW5jdGlvbiBiKGIsYyxkKXt2YXIgZT17eDpiLngrZC5keCpjLHY6Yi52K2QuZHYqYyx0ZW5zaW9uOmIudGVuc2lvbixmcmljdGlvbjpiLmZyaWN0aW9ufTtyZXR1cm57ZHg6ZS52LGR2OmEoZSl9fWZ1bmN0aW9uIGMoYyxkKXt2YXIgZT17ZHg6Yy52LGR2OmEoYyl9LGY9YihjLC41KmQsZSksZz1iKGMsLjUqZCxmKSxoPWIoYyxkLGcpLGk9MS82KihlLmR4KzIqKGYuZHgrZy5keCkraC5keCksaj0xLzYqKGUuZHYrMiooZi5kditnLmR2KStoLmR2KTtyZXR1cm4gYy54PWMueCtpKmQsYy52PWMuditqKmQsY31yZXR1cm4gZnVuY3Rpb24gZChhLGIsZSl7dmFyIGYsZyxoLGk9e3g6LTEsdjowLHRlbnNpb246bnVsbCxmcmljdGlvbjpudWxsfSxqPVswXSxrPTAsbD0xZS00LG09LjAxNjtmb3IoYT1wYXJzZUZsb2F0KGEpfHw1MDAsYj1wYXJzZUZsb2F0KGIpfHwyMCxlPWV8fG51bGwsaS50ZW5zaW9uPWEsaS5mcmljdGlvbj1iLGY9bnVsbCE9PWUsZj8oaz1kKGEsYiksZz1rL2UqbSk6Zz1tO2g9YyhofHxpLGcpLGoucHVzaCgxK2gueCksays9MTYsTWF0aC5hYnMoaC54KT5sJiZNYXRoLmFicyhoLnYpPmw7KTtyZXR1cm4gZj9mdW5jdGlvbihhKXtyZXR1cm4galthKihqLmxlbmd0aC0xKXwwXX06a319KCk7dC5FYXNpbmdzPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sc3ByaW5nOmZ1bmN0aW9uKGEpe3JldHVybiAxLU1hdGguY29zKDQuNSphKk1hdGguUEkpKk1hdGguZXhwKDYqLWEpfX0sbS5lYWNoKFtbXCJlYXNlXCIsWy4yNSwuMSwuMjUsMV1dLFtcImVhc2UtaW5cIixbLjQyLDAsMSwxXV0sW1wiZWFzZS1vdXRcIixbMCwwLC41OCwxXV0sW1wiZWFzZS1pbi1vdXRcIixbLjQyLDAsLjU4LDFdXSxbXCJlYXNlSW5TaW5lXCIsWy40NywwLC43NDUsLjcxNV1dLFtcImVhc2VPdXRTaW5lXCIsWy4zOSwuNTc1LC41NjUsMV1dLFtcImVhc2VJbk91dFNpbmVcIixbLjQ0NSwuMDUsLjU1LC45NV1dLFtcImVhc2VJblF1YWRcIixbLjU1LC4wODUsLjY4LC41M11dLFtcImVhc2VPdXRRdWFkXCIsWy4yNSwuNDYsLjQ1LC45NF1dLFtcImVhc2VJbk91dFF1YWRcIixbLjQ1NSwuMDMsLjUxNSwuOTU1XV0sW1wiZWFzZUluQ3ViaWNcIixbLjU1LC4wNTUsLjY3NSwuMTldXSxbXCJlYXNlT3V0Q3ViaWNcIixbLjIxNSwuNjEsLjM1NSwxXV0sW1wiZWFzZUluT3V0Q3ViaWNcIixbLjY0NSwuMDQ1LC4zNTUsMV1dLFtcImVhc2VJblF1YXJ0XCIsWy44OTUsLjAzLC42ODUsLjIyXV0sW1wiZWFzZU91dFF1YXJ0XCIsWy4xNjUsLjg0LC40NCwxXV0sW1wiZWFzZUluT3V0UXVhcnRcIixbLjc3LDAsLjE3NSwxXV0sW1wiZWFzZUluUXVpbnRcIixbLjc1NSwuMDUsLjg1NSwuMDZdXSxbXCJlYXNlT3V0UXVpbnRcIixbLjIzLDEsLjMyLDFdXSxbXCJlYXNlSW5PdXRRdWludFwiLFsuODYsMCwuMDcsMV1dLFtcImVhc2VJbkV4cG9cIixbLjk1LC4wNSwuNzk1LC4wMzVdXSxbXCJlYXNlT3V0RXhwb1wiLFsuMTksMSwuMjIsMV1dLFtcImVhc2VJbk91dEV4cG9cIixbMSwwLDAsMV1dLFtcImVhc2VJbkNpcmNcIixbLjYsLjA0LC45OCwuMzM1XV0sW1wiZWFzZU91dENpcmNcIixbLjA3NSwuODIsLjE2NSwxXV0sW1wiZWFzZUluT3V0Q2lyY1wiLFsuNzg1LC4xMzUsLjE1LC44Nl1dXSxmdW5jdGlvbihhLGIpe3QuRWFzaW5nc1tiWzBdXT1pLmFwcGx5KG51bGwsYlsxXSl9KTt2YXIgdj10LkNTUz17UmVnRXg6e2lzSGV4Oi9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSx2YWx1ZVVud3JhcDovXltBLXpdK1xcKCguKilcXCkkL2ksd3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDovWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sdmFsdWVTcGxpdDovKFtBLXpdK1xcKC4rXFwpKXwoKFtBLXowLTkjLS5dKz8pKD89XFxzfCQpKS9naX0sTGlzdHM6e2NvbG9yczpbXCJmaWxsXCIsXCJzdHJva2VcIixcInN0b3BDb2xvclwiLFwiY29sb3JcIixcImJhY2tncm91bmRDb2xvclwiLFwiYm9yZGVyQ29sb3JcIixcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyTGVmdENvbG9yXCIsXCJvdXRsaW5lQ29sb3JcIl0sdHJhbnNmb3Jtc0Jhc2U6W1widHJhbnNsYXRlWFwiLFwidHJhbnNsYXRlWVwiLFwic2NhbGVcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJza2V3WFwiLFwic2tld1lcIixcInJvdGF0ZVpcIl0sdHJhbnNmb3JtczNEOltcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsXCJ0cmFuc2xhdGVaXCIsXCJzY2FsZVpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIl19LEhvb2tzOnt0ZW1wbGF0ZXM6e3RleHRTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXJcIixcImJsYWNrIDBweCAwcHggMHB4XCJdLGJveFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIixcImJsYWNrIDBweCAwcHggMHB4IDBweFwiXSxjbGlwOltcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLFwiMHB4IDBweCAwcHggMHB4XCJdLGJhY2tncm91bmRQb3NpdGlvbjpbXCJYIFlcIixcIjAlIDAlXCJdLHRyYW5zZm9ybU9yaWdpbjpbXCJYIFkgWlwiLFwiNTAlIDUwJSAwcHhcIl0scGVyc3BlY3RpdmVPcmlnaW46W1wiWCBZXCIsXCI1MCUgNTAlXCJdfSxyZWdpc3RlcmVkOnt9LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKXt2YXIgYj1cImNvbG9yXCI9PT12Lkxpc3RzLmNvbG9yc1thXT9cIjAgMCAwIDFcIjpcIjI1NSAyNTUgMjU1IDFcIjt2Lkhvb2tzLnRlbXBsYXRlc1t2Lkxpc3RzLmNvbG9yc1thXV09W1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIixiXX12YXIgYyxkLGU7aWYobilmb3IoYyBpbiB2Lkhvb2tzLnRlbXBsYXRlcyl7ZD12Lkhvb2tzLnRlbXBsYXRlc1tjXSxlPWRbMF0uc3BsaXQoXCIgXCIpO3ZhciBmPWRbMV0ubWF0Y2godi5SZWdFeC52YWx1ZVNwbGl0KTtcIkNvbG9yXCI9PT1lWzBdJiYoZS5wdXNoKGUuc2hpZnQoKSksZi5wdXNoKGYuc2hpZnQoKSksdi5Ib29rcy50ZW1wbGF0ZXNbY109W2Uuam9pbihcIiBcIiksZi5qb2luKFwiIFwiKV0pfWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7Zm9yKHZhciBhIGluIGUpe3ZhciBnPWMrZVthXSxoPWE7di5Ib29rcy5yZWdpc3RlcmVkW2ddPVtjLGhdfX19LGdldFJvb3Q6ZnVuY3Rpb24oYSl7dmFyIGI9di5Ib29rcy5yZWdpc3RlcmVkW2FdO3JldHVybiBiP2JbMF06YX0sY2xlYW5Sb290UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihhLGIpe3JldHVybiB2LlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QoYikmJihiPWIubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcClbMV0pLHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGIpJiYoYj12Lkhvb2tzLnRlbXBsYXRlc1thXVsxXSksYn0sZXh0cmFjdFZhbHVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGMpe3ZhciBkPWNbMF0sZT1jWzFdO3JldHVybiBiPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShkLGIpLGIudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpW2VdfXJldHVybiBifSxpbmplY3RWYWx1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGQpe3ZhciBlLGYsZz1kWzBdLGg9ZFsxXTtyZXR1cm4gYz12Lkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoZyxjKSxlPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpLGVbaF09YixmPWUuam9pbihcIiBcIil9cmV0dXJuIGN9fSxOb3JtYWxpemF0aW9uczp7cmVnaXN0ZXJlZDp7Y2xpcDpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImNsaXBcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGQ7cmV0dXJuIHYuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KGMpP2Q9YzooZD1jLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcCksZD1kP2RbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIik6YyksZDtjYXNlXCJpbmplY3RcIjpyZXR1cm5cInJlY3QoXCIrYytcIilcIn19LGJsdXI6ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuIHQuU3RhdGUuaXNGaXJlZm94P1wiZmlsdGVyXCI6XCItd2Via2l0LWZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1wYXJzZUZsb2F0KGMpO2lmKCFkJiYwIT09ZCl7dmFyIGU9Yy50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7ZD1lP2VbMV06MH1yZXR1cm4gZDtjYXNlXCJpbmplY3RcIjpyZXR1cm4gcGFyc2VGbG9hdChjKT9cImJsdXIoXCIrYytcIilcIjpcIm5vbmVcIn19LG9wYWNpdHk6ZnVuY3Rpb24oYSxiLGMpe2lmKDg+PW4pc3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1jLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO3JldHVybiBjPWQ/ZFsxXS8xMDA6MTtjYXNlXCJpbmplY3RcIjpyZXR1cm4gYi5zdHlsZS56b29tPTEscGFyc2VGbG9hdChjKT49MT9cIlwiOlwiYWxwaGEob3BhY2l0eT1cIitwYXJzZUludCgxMDAqcGFyc2VGbG9hdChjKSwxMCkrXCIpXCJ9ZWxzZSBzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwib3BhY2l0eVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gYztjYXNlXCJpbmplY3RcIjpyZXR1cm4gY319fSxyZWdpc3RlcjpmdW5jdGlvbigpezk+PW58fHQuU3RhdGUuaXNHaW5nZXJicmVhZHx8KHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2U9di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQodi5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IodmFyIGE9MDthPHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoO2ErKykhZnVuY3Rpb24oKXt2YXIgYj12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cInRyYW5zZm9ybVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gZyhjKT09PWR8fGcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kPy9ec2NhbGUvaS50ZXN0KGIpPzE6MDpnKGMpLnRyYW5zZm9ybUNhY2hlW2JdLnJlcGxhY2UoL1soKV0vZyxcIlwiKTtjYXNlXCJpbmplY3RcIjp2YXIgZj0hMTtzd2l0Y2goYi5zdWJzdHIoMCxiLmxlbmd0aC0xKSl7Y2FzZVwidHJhbnNsYXRlXCI6Zj0hLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2NhbFwiOmNhc2VcInNjYWxlXCI6dC5TdGF0ZS5pc0FuZHJvaWQmJmcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kJiYxPmUmJihlPTEpLGY9IS8oXFxkKSQvaS50ZXN0KGUpO2JyZWFrO2Nhc2VcInNrZXdcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwicm90YXRlXCI6Zj0hLyhkZWd8XFxkKSQvaS50ZXN0KGUpfXJldHVybiBmfHwoZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT1cIihcIitlK1wiKVwiKSxnKGMpLnRyYW5zZm9ybUNhY2hlW2JdfX19KCk7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMuY29sb3JzW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYjtjYXNlXCJleHRyYWN0XCI6dmFyIGY7aWYodi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoZSkpZj1lO2Vsc2V7dmFyIGcsaD17YmxhY2s6XCJyZ2IoMCwgMCwgMClcIixibHVlOlwicmdiKDAsIDAsIDI1NSlcIixncmF5OlwicmdiKDEyOCwgMTI4LCAxMjgpXCIsZ3JlZW46XCJyZ2IoMCwgMTI4LCAwKVwiLHJlZDpcInJnYigyNTUsIDAsIDApXCIsd2hpdGU6XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIn07L15bQS16XSskL2kudGVzdChlKT9nPWhbZV0hPT1kP2hbZV06aC5ibGFjazp2LlJlZ0V4LmlzSGV4LnRlc3QoZSk/Zz1cInJnYihcIit2LlZhbHVlcy5oZXhUb1JnYihlKS5qb2luKFwiIFwiKStcIilcIjovXnJnYmE/XFwoL2kudGVzdChlKXx8KGc9aC5ibGFjayksZj0oZ3x8ZSkudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKX1yZXR1cm4gOD49bnx8MyE9PWYuc3BsaXQoXCIgXCIpLmxlbmd0aHx8KGYrPVwiIDFcIiksZjtjYXNlXCJpbmplY3RcIjpyZXR1cm4gOD49bj80PT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZT1lLnNwbGl0KC9cXHMrLykuc2xpY2UoMCwzKS5qb2luKFwiIFwiKSk6Mz09PWUuc3BsaXQoXCIgXCIpLmxlbmd0aCYmKGUrPVwiIDFcIiksKDg+PW4/XCJyZ2JcIjpcInJnYmFcIikrXCIoXCIrZS5yZXBsYWNlKC9cXHMrL2csXCIsXCIpLnJlcGxhY2UoL1xcLihcXGQpKyg/PSwpL2csXCJcIikrXCIpXCJ9fX0oKX19LE5hbWVzOntjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvLShcXHcpL2csZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSl9LFNWR0F0dHJpYnV0ZTpmdW5jdGlvbihhKXt2YXIgYj1cIndpZHRofGhlaWdodHx4fHl8Y3h8Y3l8cnxyeHxyeXx4MXx4Mnx5MXx5MlwiO3JldHVybihufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiYoYis9XCJ8dHJhbnNmb3JtXCIpLG5ldyBSZWdFeHAoXCJeKFwiK2IrXCIpJFwiLFwiaVwiKS50ZXN0KGEpfSxwcmVmaXhDaGVjazpmdW5jdGlvbihhKXtpZih0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV0pcmV0dXJuW3QuU3RhdGUucHJlZml4TWF0Y2hlc1thXSwhMF07Zm9yKHZhciBiPVtcIlwiLFwiV2Via2l0XCIsXCJNb3pcIixcIm1zXCIsXCJPXCJdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspe3ZhciBlO2lmKGU9MD09PWM/YTpiW2NdK2EucmVwbGFjZSgvXlxcdy8sZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9VcHBlckNhc2UoKX0pLHAuaXNTdHJpbmcodC5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW2VdKSlyZXR1cm4gdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdPWUsW2UsITBdfXJldHVyblthLCExXX19LFZhbHVlczp7aGV4VG9SZ2I6ZnVuY3Rpb24oYSl7dmFyIGIsYz0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGQ9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTtyZXR1cm4gYT1hLnJlcGxhY2UoYyxmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYitiK2MrYytkK2R9KSxiPWQuZXhlYyhhKSxiP1twYXJzZUludChiWzFdLDE2KSxwYXJzZUludChiWzJdLDE2KSxwYXJzZUludChiWzNdLDE2KV06WzAsMCwwXX0saXNDU1NOdWxsVmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIDA9PWF8fC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGEpfSxnZXRVbml0VHlwZTpmdW5jdGlvbihhKXtyZXR1cm4vXihyb3RhdGV8c2tldykvaS50ZXN0KGEpP1wiZGVnXCI6LyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChhKT9cIlwiOlwicHhcIn0sZ2V0RGlzcGxheVR5cGU6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4vXihifGJpZ3xpfHNtYWxsfHR0fGFiYnJ8YWNyb255bXxjaXRlfGNvZGV8ZGZufGVtfGtiZHxzdHJvbmd8c2FtcHx2YXJ8YXxiZG98YnJ8aW1nfG1hcHxvYmplY3R8cXxzY3JpcHR8c3BhbnxzdWJ8c3VwfGJ1dHRvbnxpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpJC9pLnRlc3QoYik/XCJpbmxpbmVcIjovXihsaSkkL2kudGVzdChiKT9cImxpc3QtaXRlbVwiOi9eKHRyKSQvaS50ZXN0KGIpP1widGFibGUtcm93XCI6L14odGFibGUpJC9pLnRlc3QoYik/XCJ0YWJsZVwiOi9eKHRib2R5KSQvaS50ZXN0KGIpP1widGFibGUtcm93LWdyb3VwXCI6XCJibG9ja1wifSxhZGRDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LmFkZChiKTphLmNsYXNzTmFtZSs9KGEuY2xhc3NOYW1lLmxlbmd0aD9cIiBcIjpcIlwiKStifSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LnJlbW92ZShiKTphLmNsYXNzTmFtZT1hLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2Iuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKFxcXFxzfCQpXCIsXCJnaVwiKSxcIiBcIil9fSxnZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxlLGYpe2Z1bmN0aW9uIGgoYSxjKXtmdW5jdGlvbiBlKCl7aiYmdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsXCJub25lXCIpfXZhciBpPTA7aWYoOD49bilpPW0uY3NzKGEsYyk7ZWxzZXt2YXIgaj0hMTtpZigvXih3aWR0aHxoZWlnaHQpJC8udGVzdChjKSYmMD09PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiZGlzcGxheVwiKSYmKGo9ITAsdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsdi5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoYSkpKSwhZil7aWYoXCJoZWlnaHRcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgaz1hLm9mZnNldEhlaWdodC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlclRvcFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJCb3R0b21XaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1RvcFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0JvdHRvbVwiKSl8fDApO3JldHVybiBlKCksa31pZihcIndpZHRoXCI9PT1jJiZcImJvcmRlci1ib3hcIiE9PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGw9YS5vZmZzZXRXaWR0aC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckxlZnRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyUmlnaHRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0xlZnRcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdSaWdodFwiKSl8fDApO3JldHVybiBlKCksbH19dmFyIG87bz1nKGEpPT09ZD9iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKTpnKGEpLmNvbXB1dGVkU3R5bGU/ZyhhKS5jb21wdXRlZFN0eWxlOmcoYSkuY29tcHV0ZWRTdHlsZT1iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKSxcImJvcmRlckNvbG9yXCI9PT1jJiYoYz1cImJvcmRlclRvcENvbG9yXCIpLGk9OT09PW4mJlwiZmlsdGVyXCI9PT1jP28uZ2V0UHJvcGVydHlWYWx1ZShjKTpvW2NdLChcIlwiPT09aXx8bnVsbD09PWkpJiYoaT1hLnN0eWxlW2NdKSxlKCl9aWYoXCJhdXRvXCI9PT1pJiYvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3QoYykpe3ZhciBwPWgoYSxcInBvc2l0aW9uXCIpOyhcImZpeGVkXCI9PT1wfHxcImFic29sdXRlXCI9PT1wJiYvdG9wfGxlZnQvaS50ZXN0KGMpKSYmKGk9bShhKS5wb3NpdGlvbigpW2NdK1wicHhcIil9cmV0dXJuIGl9dmFyIGk7aWYodi5Ib29rcy5yZWdpc3RlcmVkW2NdKXt2YXIgaj1jLGs9di5Ib29rcy5nZXRSb290KGopO2U9PT1kJiYoZT12LmdldFByb3BlcnR5VmFsdWUoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGspWzBdKSksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2tdJiYoZT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10oXCJleHRyYWN0XCIsYSxlKSksaT12Lkhvb2tzLmV4dHJhY3RWYWx1ZShqLGUpfWVsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKXt2YXIgbCxvO2w9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpLFwidHJhbnNmb3JtXCIhPT1sJiYobz1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhsKVswXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobykmJnYuSG9va3MudGVtcGxhdGVzW2NdJiYobz12Lkhvb2tzLnRlbXBsYXRlc1tjXVsxXSkpLGk9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLGEsbyl9aWYoIS9eW1xcZC1dLy50ZXN0KGkpKWlmKGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpKWlmKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChjKSl0cnl7aT1hLmdldEJCb3goKVtjXX1jYXRjaChwKXtpPTB9ZWxzZSBpPWEuZ2V0QXR0cmlidXRlKGMpO2Vsc2UgaT1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSk7cmV0dXJuIHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGkpJiYoaT0wKSx0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIkdldCBcIitjK1wiOiBcIitpKSxpfSxzZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxkLGUsZil7dmFyIGg9YztpZihcInNjcm9sbFwiPT09YylmLmNvbnRhaW5lcj9mLmNvbnRhaW5lcltcInNjcm9sbFwiK2YuZGlyZWN0aW9uXT1kOlwiTGVmdFwiPT09Zi5kaXJlY3Rpb24/Yi5zY3JvbGxUbyhkLGYuYWx0ZXJuYXRlVmFsdWUpOmIuc2Nyb2xsVG8oZi5hbHRlcm5hdGVWYWx1ZSxkKTtlbHNlIGlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmXCJ0cmFuc2Zvcm1cIj09PXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSl2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJpbmplY3RcIixhLGQpLGg9XCJ0cmFuc2Zvcm1cIixkPWcoYSkudHJhbnNmb3JtQ2FjaGVbY107ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBpPWMsaj12Lkhvb2tzLmdldFJvb3QoYyk7ZT1lfHx2LmdldFByb3BlcnR5VmFsdWUoYSxqKSxkPXYuSG9va3MuaW5qZWN0VmFsdWUoaSxkLGUpLGM9an1pZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihkPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksYz12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSkpLGg9di5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSw4Pj1uKXRyeXthLnN0eWxlW2hdPWR9Y2F0Y2goayl7dC5kZWJ1ZyYmY29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiK2QrXCJdIGZvciBbXCIraCtcIl1cIil9ZWxzZSBnKGEpJiZnKGEpLmlzU1ZHJiZ2Lk5hbWVzLlNWR0F0dHJpYnV0ZShjKT9hLnNldEF0dHJpYnV0ZShjLGQpOmEuc3R5bGVbaF09ZDt0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIlNldCBcIitjK1wiIChcIitoK1wiKTogXCIrZCl9cmV0dXJuW2gsZF19LGZsdXNoVHJhbnNmb3JtQ2FjaGU6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gcGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxiKSl9dmFyIGM9XCJcIjtpZigobnx8dC5TdGF0ZS5pc0FuZHJvaWQmJiF0LlN0YXRlLmlzQ2hyb21lKSYmZyhhKS5pc1NWRyl7dmFyIGQ9e3RyYW5zbGF0ZTpbYihcInRyYW5zbGF0ZVhcIiksYihcInRyYW5zbGF0ZVlcIildLHNrZXdYOltiKFwic2tld1hcIildLHNrZXdZOltiKFwic2tld1lcIildLHNjYWxlOjEhPT1iKFwic2NhbGVcIik/W2IoXCJzY2FsZVwiKSxiKFwic2NhbGVcIildOltiKFwic2NhbGVYXCIpLGIoXCJzY2FsZVlcIildLHJvdGF0ZTpbYihcInJvdGF0ZVpcIiksMCwwXX07bS5lYWNoKGcoYSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24oYSl7L150cmFuc2xhdGUvaS50ZXN0KGEpP2E9XCJ0cmFuc2xhdGVcIjovXnNjYWxlL2kudGVzdChhKT9hPVwic2NhbGVcIjovXnJvdGF0ZS9pLnRlc3QoYSkmJihhPVwicm90YXRlXCIpLGRbYV0mJihjKz1hK1wiKFwiK2RbYV0uam9pbihcIiBcIikrXCIpIFwiLGRlbGV0ZSBkW2FdKX0pfWVsc2V7dmFyIGUsZjttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihiKXtyZXR1cm4gZT1nKGEpLnRyYW5zZm9ybUNhY2hlW2JdLFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIj09PWI/KGY9ZSwhMCk6KDk9PT1uJiZcInJvdGF0ZVpcIj09PWImJihiPVwicm90YXRlXCIpLHZvaWQoYys9YitlK1wiIFwiKSl9KSxmJiYoYz1cInBlcnNwZWN0aXZlXCIrZitcIiBcIitjKX12LnNldFByb3BlcnR5VmFsdWUoYSxcInRyYW5zZm9ybVwiLGMpfX07di5Ib29rcy5yZWdpc3RlcigpLHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKSx0Lmhvb2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlPWQ7cmV0dXJuIGE9ZihhKSxtLmVhY2goYSxmdW5jdGlvbihhLGYpe2lmKGcoZik9PT1kJiZ0LmluaXQoZiksYz09PWQpZT09PWQmJihlPXQuQ1NTLmdldFByb3BlcnR5VmFsdWUoZixiKSk7ZWxzZXt2YXIgaD10LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGYsYixjKTtcInRyYW5zZm9ybVwiPT09aFswXSYmdC5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShmKSxlPWh9fSksZX07dmFyIHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGg/Qi5wcm9taXNlfHxudWxsOml9ZnVuY3Rpb24gZSgpe2Z1bmN0aW9uIGEoYSl7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWQsZT1kLGc9ZDtyZXR1cm4gcC5pc0FycmF5KGEpPyhjPWFbMF0sIXAuaXNBcnJheShhWzFdKSYmL15bXFxkLV0vLnRlc3QoYVsxXSl8fHAuaXNGdW5jdGlvbihhWzFdKXx8di5SZWdFeC5pc0hleC50ZXN0KGFbMV0pP2c9YVsxXToocC5pc1N0cmluZyhhWzFdKSYmIXYuUmVnRXguaXNIZXgudGVzdChhWzFdKXx8cC5pc0FycmF5KGFbMV0pKSYmKGU9Yj9hWzFdOmooYVsxXSxoLmR1cmF0aW9uKSxhWzJdIT09ZCYmKGc9YVsyXSkpKTpjPWEsYnx8KGU9ZXx8aC5lYXNpbmcpLHAuaXNGdW5jdGlvbihjKSYmKGM9Yy5jYWxsKGYseSx4KSkscC5pc0Z1bmN0aW9uKGcpJiYoZz1nLmNhbGwoZix5LHgpKSxbY3x8MCxlLGddfWZ1bmN0aW9uIG4oYSxiKXt2YXIgYyxkO3JldHVybiBkPShifHxcIjBcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1slQS16XSskLyxmdW5jdGlvbihhKXtyZXR1cm4gYz1hLFwiXCJ9KSxjfHwoYz12LlZhbHVlcy5nZXRVbml0VHlwZShhKSksW2QsY119ZnVuY3Rpb24gcigpe3ZhciBhPXtteVBhcmVudDpmLnBhcmVudE5vZGV8fGMuYm9keSxwb3NpdGlvbjp2LmdldFByb3BlcnR5VmFsdWUoZixcInBvc2l0aW9uXCIpLGZvbnRTaXplOnYuZ2V0UHJvcGVydHlWYWx1ZShmLFwiZm9udFNpemVcIil9LGQ9YS5wb3NpdGlvbj09PUkubGFzdFBvc2l0aW9uJiZhLm15UGFyZW50PT09SS5sYXN0UGFyZW50LGU9YS5mb250U2l6ZT09PUkubGFzdEZvbnRTaXplO0kubGFzdFBhcmVudD1hLm15UGFyZW50LEkubGFzdFBvc2l0aW9uPWEucG9zaXRpb24sSS5sYXN0Rm9udFNpemU9YS5mb250U2l6ZTt2YXIgaD0xMDAsaT17fTtpZihlJiZkKWkuZW1Ub1B4PUkubGFzdEVtVG9QeCxpLnBlcmNlbnRUb1B4V2lkdGg9SS5sYXN0UGVyY2VudFRvUHhXaWR0aCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0O2Vsc2V7dmFyIGo9ZyhmKS5pc1NWRz9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJyZWN0XCIpOmMuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmluaXQoaiksYS5teVBhcmVudC5hcHBlbmRDaGlsZChqKSxtLmVhY2goW1wib3ZlcmZsb3dcIixcIm92ZXJmbG93WFwiLFwib3ZlcmZsb3dZXCJdLGZ1bmN0aW9uKGEsYil7dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLGIsXCJoaWRkZW5cIil9KSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJwb3NpdGlvblwiLGEucG9zaXRpb24pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcImZvbnRTaXplXCIsYS5mb250U2l6ZSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwiYm94U2l6aW5nXCIsXCJjb250ZW50LWJveFwiKSxtLmVhY2goW1wibWluV2lkdGhcIixcIm1heFdpZHRoXCIsXCJ3aWR0aFwiLFwibWluSGVpZ2h0XCIsXCJtYXhIZWlnaHRcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe3QuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixiLGgrXCIlXCIpfSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwicGFkZGluZ0xlZnRcIixoK1wiZW1cIiksaS5wZXJjZW50VG9QeFdpZHRoPUkubGFzdFBlcmNlbnRUb1B4V2lkdGg9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJ3aWR0aFwiLG51bGwsITApKXx8MSkvaCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0PShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwiaGVpZ2h0XCIsbnVsbCwhMCkpfHwxKS9oLGkuZW1Ub1B4PUkubGFzdEVtVG9QeD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcInBhZGRpbmdMZWZ0XCIpKXx8MSkvaCxhLm15UGFyZW50LnJlbW92ZUNoaWxkKGopfXJldHVybiBudWxsPT09SS5yZW1Ub1B4JiYoSS5yZW1Ub1B4PXBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGMuYm9keSxcImZvbnRTaXplXCIpKXx8MTYpLG51bGw9PT1JLnZ3VG9QeCYmKEkudndUb1B4PXBhcnNlRmxvYXQoYi5pbm5lcldpZHRoKS8xMDAsSS52aFRvUHg9cGFyc2VGbG9hdChiLmlubmVySGVpZ2h0KS8xMDApLGkucmVtVG9QeD1JLnJlbVRvUHgsaS52d1RvUHg9SS52d1RvUHgsaS52aFRvUHg9SS52aFRvUHgsdC5kZWJ1Zz49MSYmY29uc29sZS5sb2coXCJVbml0IHJhdGlvczogXCIrSlNPTi5zdHJpbmdpZnkoaSksZiksaX1pZihoLmJlZ2luJiYwPT09eSl0cnl7aC5iZWdpbi5jYWxsKG8sbyl9Y2F0Y2godSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHV9LDEpfWlmKFwic2Nyb2xsXCI9PT1DKXt2YXIgdyx6LEEsRD0vXngkL2kudGVzdChoLmF4aXMpP1wiTGVmdFwiOlwiVG9wXCIsRT1wYXJzZUZsb2F0KGgub2Zmc2V0KXx8MDtoLmNvbnRhaW5lcj9wLmlzV3JhcHBlZChoLmNvbnRhaW5lcil8fHAuaXNOb2RlKGguY29udGFpbmVyKT8oaC5jb250YWluZXI9aC5jb250YWluZXJbMF18fGguY29udGFpbmVyLHc9aC5jb250YWluZXJbXCJzY3JvbGxcIitEXSxBPXcrbShmKS5wb3NpdGlvbigpW0QudG9Mb3dlckNhc2UoKV0rRSk6aC5jb250YWluZXI9bnVsbDoodz10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIitEXV0sej10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIisoXCJMZWZ0XCI9PT1EP1wiVG9wXCI6XCJMZWZ0XCIpXV0sQT1tKGYpLm9mZnNldCgpW0QudG9Mb3dlckNhc2UoKV0rRSksaT17c2Nyb2xsOntyb290UHJvcGVydHlWYWx1ZTohMSxzdGFydFZhbHVlOncsY3VycmVudFZhbHVlOncsZW5kVmFsdWU6QSx1bml0VHlwZTpcIlwiLGVhc2luZzpoLmVhc2luZyxzY3JvbGxEYXRhOntjb250YWluZXI6aC5jb250YWluZXIsZGlyZWN0aW9uOkQsYWx0ZXJuYXRlVmFsdWU6en19LGVsZW1lbnQ6Zn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKHNjcm9sbCk6IFwiLGkuc2Nyb2xsLGYpfWVsc2UgaWYoXCJyZXZlcnNlXCI9PT1DKXtpZighZyhmKS50d2VlbnNDb250YWluZXIpcmV0dXJuIHZvaWQgbS5kZXF1ZXVlKGYsaC5xdWV1ZSk7XCJub25lXCI9PT1nKGYpLm9wdHMuZGlzcGxheSYmKGcoZikub3B0cy5kaXNwbGF5PVwiYXV0b1wiKSxcImhpZGRlblwiPT09ZyhmKS5vcHRzLnZpc2liaWxpdHkmJihnKGYpLm9wdHMudmlzaWJpbGl0eT1cInZpc2libGVcIiksZyhmKS5vcHRzLmxvb3A9ITEsZyhmKS5vcHRzLmJlZ2luPW51bGwsZyhmKS5vcHRzLmNvbXBsZXRlPW51bGwscy5lYXNpbmd8fGRlbGV0ZSBoLmVhc2luZyxzLmR1cmF0aW9ufHxkZWxldGUgaC5kdXJhdGlvbixoPW0uZXh0ZW5kKHt9LGcoZikub3B0cyxoKTt2YXIgRj1tLmV4dGVuZCghMCx7fSxnKGYpLnR3ZWVuc0NvbnRhaW5lcik7Zm9yKHZhciBHIGluIEYpaWYoXCJlbGVtZW50XCIhPT1HKXt2YXIgSD1GW0ddLnN0YXJ0VmFsdWU7RltHXS5zdGFydFZhbHVlPUZbR10uY3VycmVudFZhbHVlPUZbR10uZW5kVmFsdWUsRltHXS5lbmRWYWx1ZT1ILHAuaXNFbXB0eU9iamVjdChzKXx8KEZbR10uZWFzaW5nPWguZWFzaW5nKSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInJldmVyc2UgdHdlZW5zQ29udGFpbmVyIChcIitHK1wiKTogXCIrSlNPTi5zdHJpbmdpZnkoRltHXSksZil9aT1GfWVsc2UgaWYoXCJzdGFydFwiPT09Qyl7dmFyIEY7ZyhmKS50d2VlbnNDb250YWluZXImJmcoZikuaXNBbmltYXRpbmc9PT0hMCYmKEY9ZyhmKS50d2VlbnNDb250YWluZXIpLG0uZWFjaChxLGZ1bmN0aW9uKGEsYil7aWYoUmVnRXhwKFwiXlwiK3YuTGlzdHMuY29sb3JzLmpvaW4oXCIkfF5cIikrXCIkXCIpLnRlc3QoYSkpe3ZhciBjPWwoYiwhMCksZT1jWzBdLGY9Y1sxXSxnPWNbMl07aWYodi5SZWdFeC5pc0hleC50ZXN0KGUpKXtmb3IodmFyIGg9W1wiUmVkXCIsXCJHcmVlblwiLFwiQmx1ZVwiXSxpPXYuVmFsdWVzLmhleFRvUmdiKGUpLGo9Zz92LlZhbHVlcy5oZXhUb1JnYihnKTpkLGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIG09W2lba11dO2YmJm0ucHVzaChmKSxqIT09ZCYmbS5wdXNoKGpba10pLHFbYStoW2tdXT1tfWRlbGV0ZSBxW2FdfX19KTtmb3IodmFyIEsgaW4gcSl7dmFyIEw9bChxW0tdKSxNPUxbMF0sTj1MWzFdLE89TFsyXTtLPXYuTmFtZXMuY2FtZWxDYXNlKEspO3ZhciBQPXYuSG9va3MuZ2V0Um9vdChLKSxRPSExO2lmKGcoZikuaXNTVkd8fFwidHdlZW5cIj09PVB8fHYuTmFtZXMucHJlZml4Q2hlY2soUClbMV0hPT0hMXx8di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW1BdIT09ZCl7KGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJlwibm9uZVwiIT09aC5kaXNwbGF5fHxoLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09aC52aXNpYmlsaXR5KSYmL29wYWNpdHl8ZmlsdGVyLy50ZXN0KEspJiYhTyYmMCE9PU0mJihPPTApLGguX2NhY2hlVmFsdWVzJiZGJiZGW0tdPyhPPT09ZCYmKE89RltLXS5lbmRWYWx1ZStGW0tdLnVuaXRUeXBlKSxRPWcoZikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtQXSk6di5Ib29rcy5yZWdpc3RlcmVkW0tdP089PT1kPyhRPXYuZ2V0UHJvcGVydHlWYWx1ZShmLFApLE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSyxRKSk6UT12Lkhvb2tzLnRlbXBsYXRlc1tQXVsxXTpPPT09ZCYmKE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSykpO3ZhciBSLFMsVCxVPSExO2lmKFI9bihLLE8pLE89UlswXSxUPVJbMV0sUj1uKEssTSksTT1SWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sZnVuY3Rpb24oYSxiKXtyZXR1cm4gVT1iLFwiXCJ9KSxTPVJbMV0sTz1wYXJzZUZsb2F0KE8pfHwwLE09cGFyc2VGbG9hdChNKXx8MCxcIiVcIj09PVMmJigvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3QoSyk/KE0vPTEwMCxTPVwiZW1cIik6L15zY2FsZS8udGVzdChLKT8oTS89MTAwLFM9XCJcIik6LyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdChLKSYmKE09TS8xMDAqMjU1LFM9XCJcIikpLC9bXFwvKl0vLnRlc3QoVSkpUz1UO2Vsc2UgaWYoVCE9PVMmJjAhPT1PKWlmKDA9PT1NKVM9VDtlbHNle2U9ZXx8cigpO3ZhciBWPS9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KEspfHwvWCQvLnRlc3QoSyl8fFwieFwiPT09Sz9cInhcIjpcInlcIjtcbnN3aXRjaChUKXtjYXNlXCIlXCI6Tyo9XCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpPKj1lW1QrXCJUb1B4XCJdfXN3aXRjaChTKXtjYXNlXCIlXCI6Tyo9MS8oXCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6Tyo9MS9lW1MrXCJUb1B4XCJdfX1zd2l0Y2goVSl7Y2FzZVwiK1wiOk09TytNO2JyZWFrO2Nhc2VcIi1cIjpNPU8tTTticmVhaztjYXNlXCIqXCI6TT1PKk07YnJlYWs7Y2FzZVwiL1wiOk09Ty9NfWlbS109e3Jvb3RQcm9wZXJ0eVZhbHVlOlEsc3RhcnRWYWx1ZTpPLGN1cnJlbnRWYWx1ZTpPLGVuZFZhbHVlOk0sdW5pdFR5cGU6UyxlYXNpbmc6Tn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK0srXCIpOiBcIitKU09OLnN0cmluZ2lmeShpW0tdKSxmKX1lbHNlIHQuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK1ArXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1pLmVsZW1lbnQ9Zn1pLmVsZW1lbnQmJih2LlZhbHVlcy5hZGRDbGFzcyhmLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLEoucHVzaChpKSxcIlwiPT09aC5xdWV1ZSYmKGcoZikudHdlZW5zQ29udGFpbmVyPWksZyhmKS5vcHRzPWgpLGcoZikuaXNBbmltYXRpbmc9ITAseT09PXgtMT8odC5TdGF0ZS5jYWxscy5wdXNoKFtKLG8saCxudWxsLEIucmVzb2x2ZXJdKSx0LlN0YXRlLmlzVGlja2luZz09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITAsaygpKSk6eSsrKX12YXIgZSxmPXRoaXMsaD1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpLGk9e307c3dpdGNoKGcoZik9PT1kJiZ0LmluaXQoZikscGFyc2VGbG9hdChoLmRlbGF5KSYmaC5xdWV1ZSE9PSExJiZtLnF1ZXVlKGYsaC5xdWV1ZSxmdW5jdGlvbihhKXt0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsZyhmKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoYSxwYXJzZUZsb2F0KGguZGVsYXkpKSxuZXh0OmF9fSksaC5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpoLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpoLmR1cmF0aW9uPXI7YnJlYWs7Y2FzZVwic2xvd1wiOmguZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6aC5kdXJhdGlvbj1wYXJzZUZsb2F0KGguZHVyYXRpb24pfHwxfXQubW9jayE9PSExJiYodC5tb2NrPT09ITA/aC5kdXJhdGlvbj1oLmRlbGF5PTE6KGguZHVyYXRpb24qPXBhcnNlRmxvYXQodC5tb2NrKXx8MSxoLmRlbGF5Kj1wYXJzZUZsb2F0KHQubW9jayl8fDEpKSxoLmVhc2luZz1qKGguZWFzaW5nLGguZHVyYXRpb24pLGguYmVnaW4mJiFwLmlzRnVuY3Rpb24oaC5iZWdpbikmJihoLmJlZ2luPW51bGwpLGgucHJvZ3Jlc3MmJiFwLmlzRnVuY3Rpb24oaC5wcm9ncmVzcykmJihoLnByb2dyZXNzPW51bGwpLGguY29tcGxldGUmJiFwLmlzRnVuY3Rpb24oaC5jb21wbGV0ZSkmJihoLmNvbXBsZXRlPW51bGwpLGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJihoLmRpc3BsYXk9aC5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PWguZGlzcGxheSYmKGguZGlzcGxheT10LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZikpKSxoLnZpc2liaWxpdHkhPT1kJiZudWxsIT09aC52aXNpYmlsaXR5JiYoaC52aXNpYmlsaXR5PWgudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLGgubW9iaWxlSEE9aC5tb2JpbGVIQSYmdC5TdGF0ZS5pc01vYmlsZSYmIXQuU3RhdGUuaXNHaW5nZXJicmVhZCxoLnF1ZXVlPT09ITE/aC5kZWxheT9zZXRUaW1lb3V0KGEsaC5kZWxheSk6YSgpOm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9PT0hMD8oQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pLCEwKToodC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgYShiKSl9KSxcIlwiIT09aC5xdWV1ZSYmXCJmeFwiIT09aC5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1tLnF1ZXVlKGYpWzBdfHxtLmRlcXVldWUoZil9dmFyIGgsaSxuLG8scSxzLHU9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fG0uaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8cC5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKHAuaXNXcmFwcGVkKHRoaXMpPyhoPSExLG49MCxvPXRoaXMsaT10aGlzKTooaD0hMCxuPTEsbz11P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxvPWYobykpe3U/KHE9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHM9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKToocT1hcmd1bWVudHNbbl0scz1hcmd1bWVudHNbbisxXSk7dmFyIHg9by5sZW5ndGgseT0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdChxKSYmIW0uaXNQbGFpbk9iamVjdChzKSl7dmFyIHo9bisxO3M9e307Zm9yKHZhciBBPXo7QTxhcmd1bWVudHMubGVuZ3RoO0ErKylwLmlzQXJyYXkoYXJndW1lbnRzW0FdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW0FdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tBXSk/cC5pc1N0cmluZyhhcmd1bWVudHNbQV0pfHxwLmlzQXJyYXkoYXJndW1lbnRzW0FdKT9zLmVhc2luZz1hcmd1bWVudHNbQV06cC5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tBXSkmJihzLmNvbXBsZXRlPWFyZ3VtZW50c1tBXSk6cy5kdXJhdGlvbj1hcmd1bWVudHNbQV19dmFyIEI9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O2gmJnQuUHJvbWlzZSYmKEIucHJvbWlzZT1uZXcgdC5Qcm9taXNlKGZ1bmN0aW9uKGEsYil7Qi5yZXNvbHZlcj1hLEIucmVqZWN0ZXI9Yn0pKTt2YXIgQztzd2l0Y2gocSl7Y2FzZVwic2Nyb2xsXCI6Qz1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpDPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjptLmVhY2gobyxmdW5jdGlvbihhLGIpe2coYikmJmcoYikuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChnKGIpLmRlbGF5VGltZXIuc2V0VGltZW91dCksZyhiKS5kZWxheVRpbWVyLm5leHQmJmcoYikuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGcoYikuZGVsYXlUaW1lcil9KTt2YXIgRD1bXTtyZXR1cm4gbS5lYWNoKHQuU3RhdGUuY2FsbHMsZnVuY3Rpb24oYSxiKXtiJiZtLmVhY2goYlsxXSxmdW5jdGlvbihjLGUpe3ZhciBmPXM9PT1kP1wiXCI6cztyZXR1cm4gZiE9PSEwJiZiWzJdLnF1ZXVlIT09ZiYmKHMhPT1kfHxiWzJdLnF1ZXVlIT09ITEpfHx2b2lkIG0uZWFjaChvLGZ1bmN0aW9uKGMsZCl7ZD09PWUmJigocz09PSEwfHxwLmlzU3RyaW5nKHMpKSYmKG0uZWFjaChtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIpLGZ1bmN0aW9uKGEsYil7cC5pc0Z1bmN0aW9uKGIpJiZiKG51bGwsITApfSksbS5xdWV1ZShkLHAuaXNTdHJpbmcocyk/czpcIlwiLFtdKSksXCJzdG9wXCI9PT1xPyhnKGQpJiZnKGQpLnR3ZWVuc0NvbnRhaW5lciYmZiE9PSExJiZtLmVhY2goZyhkKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXtiLmVuZFZhbHVlPWIuY3VycmVudFZhbHVlfSksRC5wdXNoKGEpKTpcImZpbmlzaFwiPT09cSYmKGJbMl0uZHVyYXRpb249MSkpfSl9KX0pLFwic3RvcFwiPT09cSYmKG0uZWFjaChELGZ1bmN0aW9uKGEsYil7bChiLCEwKX0pLEIucHJvbWlzZSYmQi5yZXNvbHZlcihvKSksYSgpO2RlZmF1bHQ6aWYoIW0uaXNQbGFpbk9iamVjdChxKXx8cC5pc0VtcHR5T2JqZWN0KHEpKXtpZihwLmlzU3RyaW5nKHEpJiZ0LlJlZGlyZWN0c1txXSl7dmFyIEU9bS5leHRlbmQoe30scyksRj1FLmR1cmF0aW9uLEc9RS5kZWxheXx8MDtyZXR1cm4gRS5iYWNrd2FyZHM9PT0hMCYmKG89bS5leHRlbmQoITAsW10sbykucmV2ZXJzZSgpKSxtLmVhY2gobyxmdW5jdGlvbihhLGIpe3BhcnNlRmxvYXQoRS5zdGFnZ2VyKT9FLmRlbGF5PUcrcGFyc2VGbG9hdChFLnN0YWdnZXIpKmE6cC5pc0Z1bmN0aW9uKEUuc3RhZ2dlcikmJihFLmRlbGF5PUcrRS5zdGFnZ2VyLmNhbGwoYixhLHgpKSxFLmRyYWcmJihFLmR1cmF0aW9uPXBhcnNlRmxvYXQoRil8fCgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHEpPzFlMzpyKSxFLmR1cmF0aW9uPU1hdGgubWF4KEUuZHVyYXRpb24qKEUuYmFja3dhcmRzPzEtYS94OihhKzEpL3gpLC43NSpFLmR1cmF0aW9uLDIwMCkpLHQuUmVkaXJlY3RzW3FdLmNhbGwoYixiLEV8fHt9LGEseCxvLEIucHJvbWlzZT9COmQpfSksYSgpfXZhciBIPVwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIitxK1wiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtyZXR1cm4gQi5wcm9taXNlP0IucmVqZWN0ZXIobmV3IEVycm9yKEgpKTpjb25zb2xlLmxvZyhIKSxhKCl9Qz1cInN0YXJ0XCJ9dmFyIEk9e2xhc3RQYXJlbnQ6bnVsbCxsYXN0UG9zaXRpb246bnVsbCxsYXN0Rm9udFNpemU6bnVsbCxsYXN0UGVyY2VudFRvUHhXaWR0aDpudWxsLGxhc3RQZXJjZW50VG9QeEhlaWdodDpudWxsLGxhc3RFbVRvUHg6bnVsbCxyZW1Ub1B4Om51bGwsdndUb1B4Om51bGwsdmhUb1B4Om51bGx9LEo9W107bS5lYWNoKG8sZnVuY3Rpb24oYSxiKXtwLmlzTm9kZShiKSYmZS5jYWxsKGIpfSk7dmFyIEssRT1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpO2lmKEUubG9vcD1wYXJzZUludChFLmxvb3ApLEs9MipFLmxvb3AtMSxFLmxvb3ApZm9yKHZhciBMPTA7Sz5MO0wrKyl7dmFyIE09e2RlbGF5OkUuZGVsYXkscHJvZ3Jlc3M6RS5wcm9ncmVzc307TD09PUstMSYmKE0uZGlzcGxheT1FLmRpc3BsYXksTS52aXNpYmlsaXR5PUUudmlzaWJpbGl0eSxNLmNvbXBsZXRlPUUuY29tcGxldGUpLHcobyxcInJldmVyc2VcIixNKX1yZXR1cm4gYSgpfX07dD1tLmV4dGVuZCh3LHQpLHQuYW5pbWF0ZT13O3ZhciB4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvO3JldHVybiB0LlN0YXRlLmlzTW9iaWxlfHxjLmhpZGRlbj09PWR8fGMuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe2MuaGlkZGVuPyh4PWZ1bmN0aW9uKGEpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSghMCl9LDE2KX0saygpKTp4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvfSksYS5WZWxvY2l0eT10LGEhPT1iJiYoYS5mbi52ZWxvY2l0eT13LGEuZm4udmVsb2NpdHkuZGVmYXVsdHM9dC5kZWZhdWx0cyksbS5lYWNoKFtcIkRvd25cIixcIlVwXCJdLGZ1bmN0aW9uKGEsYil7dC5SZWRpcmVjdHNbXCJzbGlkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPWkuYmVnaW4saz1pLmNvbXBsZXRlLGw9e2hlaWdodDpcIlwiLG1hcmdpblRvcDpcIlwiLG1hcmdpbkJvdHRvbTpcIlwiLHBhZGRpbmdUb3A6XCJcIixwYWRkaW5nQm90dG9tOlwiXCJ9LG49e307aS5kaXNwbGF5PT09ZCYmKGkuZGlzcGxheT1cIkRvd25cIj09PWI/XCJpbmxpbmVcIj09PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKT9cImlubGluZS1ibG9ja1wiOlwiYmxvY2tcIjpcIm5vbmVcIiksaS5iZWdpbj1mdW5jdGlvbigpe2omJmouY2FsbChnLGcpO2Zvcih2YXIgYyBpbiBsKXtuW2NdPWEuc3R5bGVbY107dmFyIGQ9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShhLGMpO2xbY109XCJEb3duXCI9PT1iP1tkLDBdOlswLGRdfW4ub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdyxhLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGkuY29tcGxldGU9ZnVuY3Rpb24oKXtmb3IodmFyIGIgaW4gbilhLnN0eWxlW2JdPW5bYl07ayYmay5jYWxsKGcsZyksaCYmaC5yZXNvbHZlcihnKX0sdChhLGwsaSl9fSksbS5lYWNoKFtcIkluXCIsXCJPdXRcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcImZhZGVcIitiXT1mdW5jdGlvbihhLGMsZSxmLGcsaCl7dmFyIGk9bS5leHRlbmQoe30sYyksaj17b3BhY2l0eTpcIkluXCI9PT1iPzE6MH0saz1pLmNvbXBsZXRlO2kuY29tcGxldGU9ZSE9PWYtMT9pLmJlZ2luPW51bGw6ZnVuY3Rpb24oKXtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSxpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiSW5cIj09PWI/XCJhdXRvXCI6XCJub25lXCIpLHQodGhpcyxqLGkpfX0pLHR9KHdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0b3x8d2luZG93LHdpbmRvdyxkb2N1bWVudCl9KSksIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KGsoYSxjKSxiKX1mdW5jdGlvbiBmKGEsYixjKXtyZXR1cm4hIUFycmF5LmlzQXJyYXkoYSkmJihnKGEsY1tiXSxjKSwhMCl9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfWZ1bmN0aW9uIGkoYSxiKXtyZXR1cm4gaChhLGIsITApfWZ1bmN0aW9uIGooYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmgoZCxjKX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBsKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1rYT9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gbShhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gbihhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbyhhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gcChhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24gcihhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24gcyhhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHQoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gdShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTtzKGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIHYoYSxiKXtmb3IodmFyIGMsZSxmPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9MDtnPGlhLmxlbmd0aDspe2lmKGM9aWFbZ10sZT1jP2MrZjpiLGUgaW4gYSlyZXR1cm4gZTtnKyt9cmV0dXJuIGR9ZnVuY3Rpb24gdygpe3JldHVybiBvYSsrfWZ1bmN0aW9uIHgoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiB5KGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe2woYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIHooYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gbmV3KGI9Yz9jOnJhP046c2E/UTpxYT9TOk0pKGEsQSl9ZnVuY3Rpb24gQShhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJnlhJiYwPT09ZC1lLGc9YiYoQWF8QmEpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLEIoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9RShiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1FKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9RihkKTtiLnRpbWVTdGFtcD1uYSgpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9SihoLGkpLGIuZGlzdGFuY2U9SShoLGkpLEMoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1IKGIuZGVsdGFYLGIuZGVsdGFZKSxiLnNjYWxlPWc/TChnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP0soZy5wb2ludGVycyxkKTowLEQoYyxiKTt2YXIgaj1hLmVsZW1lbnQ7cChiLnNyY0V2ZW50LnRhcmdldCxqKSYmKGo9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWp9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09eWF8fGYuZXZlbnRUeXBlPT09QWEpJiYoZT1hLnByZXZEZWx0YT17eDpmLmRlbHRhWHx8MCx5OmYuZGVsdGFZfHwwfSxkPWEub2Zmc2V0RGVsdGE9e3g6Yy54LHk6Yy55fSksYi5kZWx0YVg9ZS54KyhjLngtZC54KSxiLmRlbHRhWT1lLnkrKGMueS1kLnkpfWZ1bmN0aW9uIEQoYSxiKXt2YXIgYyxlLGYsZyxoPWEubGFzdEludGVydmFsfHxiLGk9Yi50aW1lU3RhbXAtaC50aW1lU3RhbXA7aWYoYi5ldmVudFR5cGUhPUJhJiYoaT54YXx8aC52ZWxvY2l0eT09PWQpKXt2YXIgaj1oLmRlbHRhWC1iLmRlbHRhWCxrPWguZGVsdGFZLWIuZGVsdGFZLGw9RyhpLGosayk7ZT1sLngsZj1sLnksYz1tYShsLngpPm1hKGwueSk/bC54OmwueSxnPUgoaixrKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgYz1oLnZlbG9jaXR5LGU9aC52ZWxvY2l0eVgsZj1oLnZlbG9jaXR5WSxnPWguZGlyZWN0aW9uO2IudmVsb2NpdHk9YyxiLnZlbG9jaXR5WD1lLGIudmVsb2NpdHlZPWYsYi5kaXJlY3Rpb249Z31mdW5jdGlvbiBFKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLnBvaW50ZXJzLmxlbmd0aDspYltjXT17Y2xpZW50WDpsYShhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6bGEoYS5wb2ludGVyc1tjXS5jbGllbnRZKX0sYysrO3JldHVybnt0aW1lU3RhbXA6bmEoKSxwb2ludGVyczpiLGNlbnRlcjpGKGIpLGRlbHRhWDphLmRlbHRhWCxkZWx0YVk6YS5kZWx0YVl9fWZ1bmN0aW9uIEYoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6bGEoYVswXS5jbGllbnRYKSx5OmxhKGFbMF0uY2xpZW50WSl9O2Zvcih2YXIgYz0wLGQ9MCxlPTA7Yj5lOyljKz1hW2VdLmNsaWVudFgsZCs9YVtlXS5jbGllbnRZLGUrKztyZXR1cm57eDpsYShjL2IpLHk6bGEoZC9iKX19ZnVuY3Rpb24gRyhhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBIKGEsYil7cmV0dXJuIGE9PT1iP0NhOm1hKGEpPj1tYShiKT9hPjA/RGE6RWE6Yj4wP0ZhOkdhfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPUthKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBKKGEsYixjKXtjfHwoYz1LYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBKKGJbMV0sYlswXSxMYSktSihhWzFdLGFbMF0sTGEpfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm4gSShiWzBdLGJbMV0sTGEpL0koYVswXSxhWzFdLExhKX1mdW5jdGlvbiBNKCl7dGhpcy5ldkVsPU5hLHRoaXMuZXZXaW49T2EsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEseS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTigpe3RoaXMuZXZFbD1SYSx0aGlzLmV2V2luPVNhLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBPKCl7dGhpcy5ldlRhcmdldD1VYSx0aGlzLmV2V2luPVZhLHRoaXMuc3RhcnRlZD0hMSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBQKGEsYil7dmFyIGM9dChhLnRvdWNoZXMpLGQ9dChhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoQWF8QmEpJiYoYz11KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUSgpe3RoaXMuZXZUYXJnZXQ9WGEsdGhpcy50YXJnZXRJZHM9e30seS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUihhLGIpe3ZhciBjPXQoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKHlhfHphKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXQoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIHAoYS50YXJnZXQsaSl9KSxiPT09eWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoQWF8QmEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3UoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBTKCl7eS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9ayh0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUSh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTSh0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gVChhLGIpe3RoaXMubWFuYWdlcj1hLHRoaXMuc2V0KGIpfWZ1bmN0aW9uIFUoYSl7aWYocShhLGJiKSlyZXR1cm4gYmI7dmFyIGI9cShhLGNiKSxjPXEoYSxkYik7cmV0dXJuIGImJmM/Y2IrXCIgXCIrZGI6Ynx8Yz9iP2NiOmRiOnEoYSxhYik/YWI6X2F9ZnVuY3Rpb24gVihhKXt0aGlzLmlkPXcoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9aShhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPW0odGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1lYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFcoYSl7cmV0dXJuIGEmamI/XCJjYW5jZWxcIjphJmhiP1wiZW5kXCI6YSZnYj9cIm1vdmVcIjphJmZiP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uIFgoYSl7cmV0dXJuIGE9PUdhP1wiZG93blwiOmE9PUZhP1widXBcIjphPT1EYT9cImxlZnRcIjphPT1FYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBZKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gWigpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uICQoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIF8oKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBhYSgpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBiYSgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGNhKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGEoKXtWLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGVhKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1tKGIucmVjb2duaXplcnMsZWEuZGVmYXVsdHMucHJlc2V0KSxuZXcgZmEoYSxiKX1mdW5jdGlvbiBmYShhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPWkoYixlYS5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eih0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBUKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxnYSh0aGlzLCEwKSxnKGIucmVjb2duaXplcnMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGQobmV3IGFbMF0oYVsxXSkpO2FbMl0mJmIucmVjb2duaXplV2l0aChhWzJdKSxhWzNdJiZiLnJlcXVpcmVGYWlsdXJlKGFbM10pfSx0aGlzKX1mdW5jdGlvbiBnYShhLGIpe3ZhciBjPWEuZWxlbWVudDtnKGEub3B0aW9ucy5jc3NQcm9wcyxmdW5jdGlvbihhLGQpe2Muc3R5bGVbdihjLnN0eWxlLGQpXT1iP2E6XCJcIn0pfWZ1bmN0aW9uIGhhKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGlhPVtcIlwiLFwid2Via2l0XCIsXCJtb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxqYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksa2E9XCJmdW5jdGlvblwiLGxhPU1hdGgucm91bmQsbWE9TWF0aC5hYnMsbmE9RGF0ZS5ub3csb2E9MSxwYT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2kscWE9XCJvbnRvdWNoc3RhcnRcImluIGEscmE9dihhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCxzYT1xYSYmcGEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx0YT1cInRvdWNoXCIsdWE9XCJwZW5cIix2YT1cIm1vdXNlXCIsd2E9XCJraW5lY3RcIix4YT0yNSx5YT0xLHphPTIsQWE9NCxCYT04LENhPTEsRGE9MixFYT00LEZhPTgsR2E9MTYsSGE9RGF8RWEsSWE9RmF8R2EsSmE9SGF8SWEsS2E9W1wieFwiLFwieVwiXSxMYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3kucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZuKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZuKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZuKHgodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm8odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm8odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm8oeCh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBNYT17bW91c2Vkb3duOnlhLG1vdXNlbW92ZTp6YSxtb3VzZXVwOkFhfSxOYT1cIm1vdXNlZG93blwiLE9hPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtqKE0seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1NYVthLnR5cGVdO2ImeWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZ6YSYmMSE9PWEud2hpY2gmJihiPUFhKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJkFhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTp2YSxzcmNFdmVudDphfSkpfX0pO3ZhciBQYT17cG9pbnRlcmRvd246eWEscG9pbnRlcm1vdmU6emEscG9pbnRlcnVwOkFhLHBvaW50ZXJjYW5jZWw6QmEscG9pbnRlcm91dDpCYX0sUWE9ezI6dGEsMzp1YSw0OnZhLDU6d2F9LFJhPVwicG9pbnRlcmRvd25cIixTYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmKFJhPVwiTVNQb2ludGVyRG93blwiLFNhPVwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIiksaihOLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1QYVtkXSxmPVFhW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09dGEsaD1zKGIsYS5wb2ludGVySWQsXCJwb2ludGVySWRcIik7ZSZ5YSYmKDA9PT1hLmJ1dHRvbnx8Zyk/MD5oJiYoYi5wdXNoKGEpLGg9Yi5sZW5ndGgtMSk6ZSYoQWF8QmEpJiYoYz0hMCksMD5ofHwoYltoXT1hLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGUse3BvaW50ZXJzOmIsY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpmLHNyY0V2ZW50OmF9KSxjJiZiLnNwbGljZShoLDEpKX19KTt2YXIgVGE9e3RvdWNoc3RhcnQ6eWEsdG91Y2htb3ZlOnphLHRvdWNoZW5kOkFhLHRvdWNoY2FuY2VsOkJhfSxVYT1cInRvdWNoc3RhcnRcIixWYT1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aihPLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9VGFbYS50eXBlXTtpZihiPT09eWEmJih0aGlzLnN0YXJ0ZWQ9ITApLHRoaXMuc3RhcnRlZCl7dmFyIGM9UC5jYWxsKHRoaXMsYSxiKTtiJihBYXxCYSkmJjA9PT1jWzBdLmxlbmd0aC1jWzFdLmxlbmd0aCYmKHRoaXMuc3RhcnRlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp0YSxzcmNFdmVudDphfSl9fX0pO3ZhciBXYT17dG91Y2hzdGFydDp5YSx0b3VjaG1vdmU6emEsdG91Y2hlbmQ6QWEsdG91Y2hjYW5jZWw6QmF9LFhhPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtqKFEseSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1XYVthLnR5cGVdLGM9Ui5jYWxsKHRoaXMsYSxiKTtjJiZ0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnRhLHNyY0V2ZW50OmF9KX19KSxqKFMseSx7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09dGEsZT1jLnBvaW50ZXJUeXBlPT12YTtpZihkKXRoaXMubW91c2UuYWxsb3c9ITE7ZWxzZSBpZihlJiYhdGhpcy5tb3VzZS5hbGxvdylyZXR1cm47YiYoQWF8QmEpJiYodGhpcy5tb3VzZS5hbGxvdz0hMCksdGhpcy5jYWxsYmFjayhhLGIsYyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgWWE9dihqYS5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLFphPVlhIT09ZCwkYT1cImNvbXB1dGVcIixfYT1cImF1dG9cIixhYj1cIm1hbmlwdWxhdGlvblwiLGJiPVwibm9uZVwiLGNiPVwicGFuLXhcIixkYj1cInBhbi15XCI7VC5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXthPT0kYSYmKGE9dGhpcy5jb21wdXRlKCkpLFphJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbWWFdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gZyh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7bChiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksVShhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFaYSl7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gdm9pZCBiLnByZXZlbnREZWZhdWx0KCk7dmFyIGQ9dGhpcy5hY3Rpb25zLGU9cShkLGJiKSxmPXEoZCxkYiksZz1xKGQsY2IpO3JldHVybiBlfHxmJiZjJkhhfHxnJiZjJklhP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgZWI9MSxmYj0yLGdiPTQsaGI9OCxpYj1oYixqYj0xNixrYj0zMjtWLnByb3RvdHlwZT17ZGVmYXVsdHM6e30sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1ZKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9WShhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPVkoYSx0aGlzKSwtMT09PXMoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1ZKGEsdGhpcyk7dmFyIGI9cyh0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChjLm9wdGlvbnMuZXZlbnQrKGI/VyhkKTpcIlwiKSxhKX12YXIgYz10aGlzLGQ9dGhpcy5zdGF0ZTtoYj5kJiZiKCEwKSxiKCksZD49aGImJmIoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPWtiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKGtifGViKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9aCh7fSxhKTtyZXR1cm4gbCh0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoaWJ8amJ8a2IpJiYodGhpcy5zdGF0ZT1lYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdm9pZCh0aGlzLnN0YXRlJihmYnxnYnxoYnxqYikmJnRoaXMudHJ5RW1pdChiKSkpOih0aGlzLnJlc2V0KCksdm9pZCh0aGlzLnN0YXRlPWtiKSl9LHByb2Nlc3M6ZnVuY3Rpb24oKXt9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7fSxyZXNldDpmdW5jdGlvbigpe319LGooWixWLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKGZifGdiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkJhfHwhZSk/YnxqYjpkfHxlP2MmQWE/YnxoYjpiJmZiP2J8Z2I6ZmI6a2J9fSksaigkLFose2RlZmF1bHRzOntldmVudDpcInBhblwiLHRocmVzaG9sZDoxMCxwb2ludGVyczoxLGRpcmVjdGlvbjpKYX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmSGEmJmIucHVzaChkYiksYSZJYSYmYi5wdXNoKGNiKSxifSxkaXJlY3Rpb25UZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPSEwLGQ9YS5kaXN0YW5jZSxlPWEuZGlyZWN0aW9uLGY9YS5kZWx0YVgsZz1hLmRlbHRhWTtyZXR1cm4gZSZiLmRpcmVjdGlvbnx8KGIuZGlyZWN0aW9uJkhhPyhlPTA9PT1mP0NhOjA+Zj9EYTpFYSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP0NhOjA+Zz9GYTpHYSxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBaLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJmZifHwhKHRoaXMuc3RhdGUmZmIpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj1YKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxqKF8sWix7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltiYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmZmIpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpLDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSl9fX0pLGooYWEsVix7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6NTAwLHRocmVzaG9sZDo1fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltfYV19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEFhfEJhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmeWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPWliLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZBYSlyZXR1cm4gaWI7cmV0dXJuIGtifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PWliJiYoYSYmYS5ldmVudFR5cGUmQWE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPW5hKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGooYmEsWix7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYmJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZmYil9fSksaihjYSxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJzd2lwZVwiLHRocmVzaG9sZDoxMCx2ZWxvY2l0eTouNjUsZGlyZWN0aW9uOkhhfElhLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuICQucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYyYoSGF8SWEpP2I9YS52ZWxvY2l0eTpjJkhhP2I9YS52ZWxvY2l0eVg6YyZJYSYmKGI9YS52ZWxvY2l0eVkpLHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmYyZhLmRpcmVjdGlvbiYmYS5kaXN0YW5jZT50aGlzLm9wdGlvbnMudGhyZXNob2xkJiZtYShiKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJkFhfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPVgoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxqKGRhLFYse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6Mixwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2FiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZ5YSYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZmJiZjKXtpZihhLmV2ZW50VHlwZSE9QWEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZz0hdGhpcy5wVGltZXx8YS50aW1lU3RhbXAtdGhpcy5wVGltZTxiLmludGVydmFsLGg9IXRoaXMucENlbnRlcnx8SSh0aGlzLnBDZW50ZXIsYS5jZW50ZXIpPGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWU9YS50aW1lU3RhbXAsdGhpcy5wQ2VudGVyPWEuY2VudGVyLGgmJmc/dGhpcy5jb3VudCs9MTp0aGlzLmNvdW50PTEsdGhpcy5faW5wdXQ9YTt2YXIgaT10aGlzLmNvdW50JWIudGFwcztpZigwPT09aSlyZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKT8odGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9aWIsdGhpcy50cnlFbWl0KCl9LGIuaW50ZXJ2YWwsdGhpcyksZmIpOmlifXJldHVybiBrYn0sZmFpbFRpbWVvdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9a2J9LHRoaXMub3B0aW9ucy5pbnRlcnZhbCx0aGlzKSxrYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT09aWImJih0aGlzLl9pbnB1dC50YXBDb3VudD10aGlzLmNvdW50LHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpfX0pLGVhLlZFUlNJT049XCIyLjAuNFwiLGVhLmRlZmF1bHRzPXtkb21FdmVudHM6ITEsdG91Y2hBY3Rpb246JGEsZW5hYmxlOiEwLGlucHV0VGFyZ2V0Om51bGwsaW5wdXRDbGFzczpudWxsLHByZXNldDpbW2JhLHtlbmFibGU6ITF9XSxbXyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtjYSx7ZGlyZWN0aW9uOkhhfV0sWyQse2RpcmVjdGlvbjpIYX0sW1wic3dpcGVcIl1dLFtkYV0sW2RhLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbYWFdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcImRlZmF1bHRcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgbGI9MSxtYj0yO2ZhLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSxhLnRvdWNoQWN0aW9uJiZ0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGEuaW5wdXRUYXJnZXQmJih0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmlucHV0LnRhcmdldD1hLmlucHV0VGFyZ2V0LHRoaXMuaW5wdXQuaW5pdCgpKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKGEpe3RoaXMuc2Vzc2lvbi5zdG9wcGVkPWE/bWI6bGJ9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNlc3Npb247aWYoIWIuc3RvcHBlZCl7dGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsZD10aGlzLnJlY29nbml6ZXJzLGU9Yi5jdXJSZWNvZ25pemVyOyghZXx8ZSYmZS5zdGF0ZSZpYikmJihlPWIuY3VyUmVjb2duaXplcj1udWxsKTtmb3IodmFyIGY9MDtmPGQubGVuZ3RoOyljPWRbZl0sYi5zdG9wcGVkPT09bWJ8fGUmJmMhPWUmJiFjLmNhblJlY29nbml6ZVdpdGgoZSk/Yy5yZXNldCgpOmMucmVjb2duaXplKGEpLCFlJiZjLnN0YXRlJihmYnxnYnxoYikmJihlPWIuY3VyUmVjb2duaXplcj1jKSxmKyt9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFYpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHMoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UocyhjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJmhhKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmdhKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0saChlYSx7SU5QVVRfU1RBUlQ6eWEsSU5QVVRfTU9WRTp6YSxJTlBVVF9FTkQ6QWEsSU5QVVRfQ0FOQ0VMOkJhLFNUQVRFX1BPU1NJQkxFOmViLFNUQVRFX0JFR0FOOmZiLFNUQVRFX0NIQU5HRUQ6Z2IsU1RBVEVfRU5ERUQ6aGIsU1RBVEVfUkVDT0dOSVpFRDppYixTVEFURV9DQU5DRUxMRUQ6amIsU1RBVEVfRkFJTEVEOmtiLERJUkVDVElPTl9OT05FOkNhLERJUkVDVElPTl9MRUZUOkRhLERJUkVDVElPTl9SSUdIVDpFYSxESVJFQ1RJT05fVVA6RmEsRElSRUNUSU9OX0RPV046R2EsRElSRUNUSU9OX0hPUklaT05UQUw6SGEsRElSRUNUSU9OX1ZFUlRJQ0FMOklhLERJUkVDVElPTl9BTEw6SmEsTWFuYWdlcjpmYSxJbnB1dDp5LFRvdWNoQWN0aW9uOlQsVG91Y2hJbnB1dDpRLE1vdXNlSW5wdXQ6TSxQb2ludGVyRXZlbnRJbnB1dDpOLFRvdWNoTW91c2VJbnB1dDpTLFNpbmdsZVRvdWNoSW5wdXQ6TyxSZWNvZ25pemVyOlYsQXR0clJlY29nbml6ZXI6WixUYXA6ZGEsUGFuOiQsU3dpcGU6Y2EsUGluY2g6XyxSb3RhdGU6YmEsUHJlc3M6YWEsb246bixvZmY6byxlYWNoOmcsbWVyZ2U6aSxleHRlbmQ6aCxpbmhlcml0OmosYmluZEZuOmsscHJlZml4ZWQ6dn0pLHR5cGVvZiBkZWZpbmU9PWthJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBlYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWVhOmFbY109ZWF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiaGFtbWVyanNcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/YShyZXF1aXJlKFwianF1ZXJ5XCIpLHJlcXVpcmUoXCJoYW1tZXJqc1wiKSk6YShqUXVlcnksSGFtbWVyKX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGMsZCl7dmFyIGU9YShjKTtlLmRhdGEoXCJoYW1tZXJcIil8fGUuZGF0YShcImhhbW1lclwiLG5ldyBiKGVbMF0sZCkpfWEuZm4uaGFtbWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtjKHRoaXMsYSl9KX0sYi5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihjLGQpe2IuY2FsbCh0aGlzLGMsZCksYSh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoe3R5cGU6YyxnZXN0dXJlOmR9KX19KGIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCl9KSxmdW5jdGlvbihhKXthLlBhY2thZ2U/TWF0ZXJpYWxpemU9e306YS5NYXRlcmlhbGl6ZT17fX0od2luZG93KSxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPVtcIndlYmtpdFwiLFwibW96XCJdLGQ9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZT1hLmNhbmNlbEFuaW1hdGlvbkZyYW1lLGY9Yy5sZW5ndGg7LS1mPj0wJiYhZDspZD1hW2NbZl0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sZT1hW2NbZl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZCYmZXx8KGQ9ZnVuY3Rpb24oYSl7dmFyIGM9K0RhdGUubm93KCksZD1NYXRoLm1heChiKzE2LGMpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YShiPWQpfSxkLWMpfSxlPWNsZWFyVGltZW91dCksYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZCxhLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWV9KHdpbmRvdyksTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmc9ZnVuY3Rpb24oYSl7dmFyIGI9YS5wcm9wKFwidGFnTmFtZVwiKXx8XCJcIixjPWEuYXR0cihcImlkXCIpfHxcIlwiLGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCI7cmV0dXJuKGIrYytkKS5yZXBsYWNlKC9cXHMvZyxcIlwiKX0sTWF0ZXJpYWxpemUuZ3VpZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gTWF0aC5mbG9vcig2NTUzNiooMStNYXRoLnJhbmRvbSgpKSkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYSgpK2EoKStcIi1cIithKCkrXCItXCIrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrYSgpK2EoKX19KCksTWF0ZXJpYWxpemUuZXNjYXBlSGFzaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD0pL2csXCJcXFxcJDFcIil9LE1hdGVyaWFsaXplLmVsZW1lbnRPclBhcmVudElzRml4ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9JChhKSxjPWIuYWRkKGIucGFyZW50cygpKSxkPSExO3JldHVybiBjLmVhY2goZnVuY3Rpb24oKXtpZihcImZpeGVkXCI9PT0kKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpKXJldHVybiBkPSEwLCExfSksZH07dmFyIGdldFRpbWU9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9O01hdGVyaWFsaXplLnRocm90dGxlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1udWxsLGg9MDtjfHwoYz17fSk7dmFyIGk9ZnVuY3Rpb24oKXtoPWMubGVhZGluZz09PSExPzA6Z2V0VGltZSgpLGc9bnVsbCxmPWEuYXBwbHkoZCxlKSxkPWU9bnVsbH07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGo9Z2V0VGltZSgpO2h8fGMubGVhZGluZyE9PSExfHwoaD1qKTt2YXIgaz1iLShqLWgpO3JldHVybiBkPXRoaXMsZT1hcmd1bWVudHMsazw9MD8oY2xlYXJUaW1lb3V0KGcpLGc9bnVsbCxoPWosZj1hLmFwcGx5KGQsZSksZD1lPW51bGwpOmd8fGMudHJhaWxpbmc9PT0hMXx8KGc9c2V0VGltZW91dChpLGspKSxmfX07dmFyIFZlbDtWZWw9alF1ZXJ5P2pRdWVyeS5WZWxvY2l0eTokPyQuVmVsb2NpdHk6VmVsb2NpdHksZnVuY3Rpb24oYSl7YS5mbi5jb2xsYXBzaWJsZT1mdW5jdGlvbihiLGMpe3ZhciBkPXthY2NvcmRpb246dm9pZCAwLG9uT3Blbjp2b2lkIDAsb25DbG9zZTp2b2lkIDB9LGU9YjtyZXR1cm4gYj1hLmV4dGVuZChkLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGQoYil7bT1sLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxiLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2IucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik6Yi5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLnBhcmVudCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2Iuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZURvd24oe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSk6Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSksbS5ub3QoYikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksbS5ub3QoYikucGFyZW50KCkuY2hpbGRyZW4oXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5pcyhcIjp2aXNpYmxlXCIpJiZhKHRoaXMpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIiksaChhKHRoaXMpLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWhlYWRlclwiKSl9fSl9KX1mdW5jdGlvbiBmKGIpe2IuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTpiLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIucGFyZW50KCkuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlRG93bih7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KTpiLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KX1mdW5jdGlvbiBnKGEsYyl7Y3x8YS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxiLmFjY29yZGlvbnx8XCJhY2NvcmRpb25cIj09PW58fHZvaWQgMD09PW4/ZChhKTpmKGEpLGgoYSl9ZnVuY3Rpb24gaChhKXthLmhhc0NsYXNzKFwiYWN0aXZlXCIpP1wiZnVuY3Rpb25cIj09dHlwZW9mIGIub25PcGVuJiZiLm9uT3Blbi5jYWxsKHRoaXMsYS5wYXJlbnQoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkNsb3NlJiZiLm9uQ2xvc2UuY2FsbCh0aGlzLGEucGFyZW50KCkpfWZ1bmN0aW9uIGkoYSl7dmFyIGI9aihhKTtyZXR1cm4gYi5sZW5ndGg+MH1mdW5jdGlvbiBqKGEpe3JldHVybiBhLmNsb3Nlc3QoXCJsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIil9ZnVuY3Rpb24gaygpe2wub2ZmKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpfXZhciBsPWEodGhpcyksbT1hKHRoaXMpLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxuPWwuZGF0YShcImNvbGxhcHNpYmxlXCIpO2lmKFwiZGVzdHJveVwiPT09ZSlyZXR1cm4gdm9pZCBrKCk7aWYoYz49MCYmYzxtLmxlbmd0aCl7dmFyIG89bS5lcShjKTtyZXR1cm4gdm9pZChvLmxlbmd0aCYmKFwib3BlblwiPT09ZXx8XCJjbG9zZVwiPT09ZSYmby5oYXNDbGFzcyhcImFjdGl2ZVwiKSkmJmcobykpfWsoKSxsLm9uKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIsZnVuY3Rpb24oYil7dmFyIGM9YShiLnRhcmdldCk7aShjKSYmKGM9aihjKSksZyhjKX0pLGIuYWNjb3JkaW9ufHxcImFjY29yZGlvblwiPT09bnx8dm9pZCAwPT09bj9nKG0uZmlsdGVyKFwiLmFjdGl2ZVwiKS5maXJzdCgpLCEwKTptLmZpbHRlcihcIi5hY3RpdmVcIikuZWFjaChmdW5jdGlvbigpe2coYSh0aGlzKSwhMCl9KX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIuY29sbGFwc2libGVcIikuY29sbGFwc2libGUoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4uc2Nyb2xsVG89ZnVuY3Rpb24oYil7cmV0dXJuIGEodGhpcykuc2Nyb2xsVG9wKGEodGhpcykuc2Nyb2xsVG9wKCktYSh0aGlzKS5vZmZzZXQoKS50b3ArYShiKS5vZmZzZXQoKS50b3ApLHRoaXN9LGEuZm4uZHJvcGRvd249ZnVuY3Rpb24oYil7dmFyIGM9e2luRHVyYXRpb246MzAwLG91dER1cmF0aW9uOjIyNSxjb25zdHJhaW5XaWR0aDohMCxob3ZlcjohMSxndXR0ZXI6MCxiZWxvd09yaWdpbjohMSxhbGlnbm1lbnQ6XCJsZWZ0XCIsc3RvcFByb3BhZ2F0aW9uOiExfTtyZXR1cm5cIm9wZW5cIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcIm9wZW5cIil9KSwhMSk6XCJjbG9zZVwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VcIil9KSwhMSk6dm9pZCB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBkKCl7dm9pZCAwIT09Zy5kYXRhKFwiaW5kdXJhdGlvblwiKSYmKGguaW5EdXJhdGlvbj1nLmRhdGEoXCJpbmR1cmF0aW9uXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJvdXRkdXJhdGlvblwiKSYmKGgub3V0RHVyYXRpb249Zy5kYXRhKFwib3V0ZHVyYXRpb25cIikpLHZvaWQgMCE9PWcuZGF0YShcImNvbnN0cmFpbndpZHRoXCIpJiYoaC5jb25zdHJhaW5XaWR0aD1nLmRhdGEoXCJjb25zdHJhaW53aWR0aFwiKSksdm9pZCAwIT09Zy5kYXRhKFwiaG92ZXJcIikmJihoLmhvdmVyPWcuZGF0YShcImhvdmVyXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJndXR0ZXJcIikmJihoLmd1dHRlcj1nLmRhdGEoXCJndXR0ZXJcIikpLHZvaWQgMCE9PWcuZGF0YShcImJlbG93b3JpZ2luXCIpJiYoaC5iZWxvd09yaWdpbj1nLmRhdGEoXCJiZWxvd29yaWdpblwiKSksdm9pZCAwIT09Zy5kYXRhKFwiYWxpZ25tZW50XCIpJiYoaC5hbGlnbm1lbnQ9Zy5kYXRhKFwiYWxpZ25tZW50XCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikmJihoLnN0b3BQcm9wYWdhdGlvbj1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikpfWZ1bmN0aW9uIGUoYil7XCJmb2N1c1wiPT09YiYmKGk9ITApLGQoKSxqLmFkZENsYXNzKFwiYWN0aXZlXCIpLGcuYWRkQ2xhc3MoXCJhY3RpdmVcIiksaC5jb25zdHJhaW5XaWR0aD09PSEwP2ouY3NzKFwid2lkdGhcIixnLm91dGVyV2lkdGgoKSk6ai5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwibm93cmFwXCIpO3ZhciBjPXdpbmRvdy5pbm5lckhlaWdodCxlPWcuaW5uZXJIZWlnaHQoKSxrPWcub2Zmc2V0KCkubGVmdCxsPWcub2Zmc2V0KCkudG9wLWEod2luZG93KS5zY3JvbGxUb3AoKSxtPWguYWxpZ25tZW50LG49MCxvPTAscD0wO2guYmVsb3dPcmlnaW49PT0hMCYmKHA9ZSk7dmFyIHE9MCxyPTAscz1nLnBhcmVudCgpO2lmKHMuaXMoXCJib2R5XCIpfHwoc1swXS5zY3JvbGxIZWlnaHQ+c1swXS5jbGllbnRIZWlnaHQmJihxPXNbMF0uc2Nyb2xsVG9wKSxzWzBdLnNjcm9sbFdpZHRoPnNbMF0uY2xpZW50V2lkdGgmJihyPXNbMF0uc2Nyb2xsTGVmdCkpLGsrai5pbm5lcldpZHRoKCk+YSh3aW5kb3cpLndpZHRoKCk/bT1cInJpZ2h0XCI6ay1qLmlubmVyV2lkdGgoKStnLmlubmVyV2lkdGgoKTwwJiYobT1cImxlZnRcIiksbCtqLmlubmVySGVpZ2h0KCk+YylpZihsK2Utai5pbm5lckhlaWdodCgpPDApe3ZhciB0PWMtbC1wO2ouY3NzKFwibWF4LWhlaWdodFwiLHQpfWVsc2UgcHx8KHArPWUpLHAtPWouaW5uZXJIZWlnaHQoKTtpZihcImxlZnRcIj09PW0pbj1oLmd1dHRlcixvPWcucG9zaXRpb24oKS5sZWZ0K247ZWxzZSBpZihcInJpZ2h0XCI9PT1tKXt2YXIgdT1nLnBvc2l0aW9uKCkubGVmdCtnLm91dGVyV2lkdGgoKS1qLm91dGVyV2lkdGgoKTtuPS1oLmd1dHRlcixvPXUrbn1qLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpnLnBvc2l0aW9uKCkudG9wK3ArcSxsZWZ0Om8rcn0pLGouc3RvcCghMCwhMCkuY3NzKFwib3BhY2l0eVwiLDApLnNsaWRlRG93bih7cXVldWU6ITEsZHVyYXRpb246aC5pbkR1cmF0aW9uLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KS5hbmltYXRlKHtvcGFjaXR5OjF9LHtxdWV1ZTohMSxkdXJhdGlvbjpoLmluRHVyYXRpb24sZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7ZigpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKX0pfSwwKX1mdW5jdGlvbiBmKCl7aT0hMSxqLmZhZGVPdXQoaC5vdXREdXJhdGlvbiksai5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ai5jc3MoXCJtYXgtaGVpZ2h0XCIsXCJcIil9LGgub3V0RHVyYXRpb24pfXZhciBnPWEodGhpcyksaD1hLmV4dGVuZCh7fSxjLGIpLGk9ITEsaj1hKFwiI1wiK2cuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKTtpZihkKCksZy5hZnRlcihqKSxoLmhvdmVyKXt2YXIgaz0hMTtnLnVuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpKSxnLm9uKFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKGEpe2s9PT0hMSYmKGUoKSxrPSEwKX0pLGcub24oXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oYil7dmFyIGM9Yi50b0VsZW1lbnR8fGIucmVsYXRlZFRhcmdldDthKGMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5pcyhqKXx8KGouc3RvcCghMCwhMCksZigpLGs9ITEpfSksai5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihiKXt2YXIgYz1iLnRvRWxlbWVudHx8Yi5yZWxhdGVkVGFyZ2V0O2EoYykuY2xvc2VzdChcIi5kcm9wZG93bi1idXR0b25cIikuaXMoZyl8fChqLnN0b3AoITAsITApLGYoKSxrPSExKX0pfWVsc2UgZy51bmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSksZy5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7aXx8KGdbMF0hPWIuY3VycmVudFRhcmdldHx8Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8MCE9PWEoYi50YXJnZXQpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5sZW5ndGg/Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGYoKSxhKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSkpOihiLnByZXZlbnREZWZhdWx0KCksaC5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCksZShcImNsaWNrXCIpKSl9KTtnLm9uKFwib3BlblwiLGZ1bmN0aW9uKGEsYil7ZShiKX0pLGcub24oXCJjbG9zZVwiLGYpfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5kcm9wZG93bi1idXR0b25cIikuZHJvcGRvd24oKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1xudmFyIGI9MCxjPTAsZD1mdW5jdGlvbigpe3JldHVybiBjKyssXCJtYXRlcmlhbGl6ZS1tb2RhbC1vdmVybGF5LVwiK2N9LGU9e2luaXQ6ZnVuY3Rpb24oYyl7dmFyIGU9e29wYWNpdHk6LjUsaW5EdXJhdGlvbjozNTAsb3V0RHVyYXRpb246MjUwLHJlYWR5OnZvaWQgMCxjb21wbGV0ZTp2b2lkIDAsZGlzbWlzc2libGU6ITAsc3RhcnRpbmdUb3A6XCI0JVwiLGVuZGluZ1RvcDpcIjEwJVwifTtyZXR1cm4gYz1hLmV4dGVuZChlLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1hKHRoaXMpLmF0dHIoXCJpZFwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpLGc9ZnVuY3Rpb24oKXt2YXIgZD1lLmRhdGEoXCJvdmVybGF5LWlkXCIpLGY9YShcIiNcIitkKTtlLnJlbW92ZUNsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vZmYoXCJjbGljay5jbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJrZXl1cC5tb2RhbFwiK2QpLGYudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRRdWFydFwifSk7dmFyIGc9e2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLmNvbXBsZXRlJiZjLmNvbXBsZXRlLmNhbGwodGhpcyxlKSxmLnJlbW92ZSgpLGItLX19O2UuaGFzQ2xhc3MoXCJib3R0b20tc2hlZXRcIik/ZS52ZWxvY2l0eSh7Ym90dG9tOlwiLTEwMCVcIixvcGFjaXR5OjB9LGcpOmUudmVsb2NpdHkoe3RvcDpjLnN0YXJ0aW5nVG9wLG9wYWNpdHk6MCxzY2FsZVg6Ljd9LGcpfSxoPWZ1bmN0aW9uKGYpe3ZhciBoPWEoXCJib2R5XCIpLGk9aC5pbm5lcldpZHRoKCk7aWYoaC5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGgud2lkdGgoaSksIWUuaGFzQ2xhc3MoXCJvcGVuXCIpKXt2YXIgaj1kKCksaz1hKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO2xTdGFjaz0rK2Isay5hdHRyKFwiaWRcIixqKS5jc3MoXCJ6LWluZGV4XCIsMWUzKzIqbFN0YWNrKSxlLmRhdGEoXCJvdmVybGF5LWlkXCIsaikuY3NzKFwiei1pbmRleFwiLDFlMysyKmxTdGFjaysxKSxlLmFkZENsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5hcHBlbmQoayksYy5kaXNtaXNzaWJsZSYmKGsuY2xpY2soZnVuY3Rpb24oKXtnKCl9KSxhKGRvY3VtZW50KS5vbihcImtleXVwLm1vZGFsXCIraixmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmZygpfSkpLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vbihcImNsaWNrLmNsb3NlXCIsZnVuY3Rpb24oYSl7ZygpfSksay5jc3Moe2Rpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6MH0pLGUuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OjB9KSxrLnZlbG9jaXR5KHtvcGFjaXR5OmMub3BhY2l0eX0se2R1cmF0aW9uOmMuaW5EdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCJ9KSxlLmRhdGEoXCJhc3NvY2lhdGVkLW92ZXJsYXlcIixrWzBdKTt2YXIgbD17ZHVyYXRpb246Yy5pbkR1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGMucmVhZHkmJmMucmVhZHkuY2FsbCh0aGlzLGUsZil9fTtlLmhhc0NsYXNzKFwiYm90dG9tLXNoZWV0XCIpP2UudmVsb2NpdHkoe2JvdHRvbTpcIjBcIixvcGFjaXR5OjF9LGwpOihhLlZlbG9jaXR5Lmhvb2soZSxcInNjYWxlWFwiLC43KSxlLmNzcyh7dG9wOmMuc3RhcnRpbmdUb3B9KSxlLnZlbG9jaXR5KHt0b3A6Yy5lbmRpbmdUb3Asb3BhY2l0eToxLHNjYWxlWDpcIjFcIn0sbCkpfX07YShkb2N1bWVudCkub2ZmKFwiY2xpY2subW9kYWxUcmlnZ2VyXCIsJ2FbaHJlZj1cIiMnK2YrJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJytmKydcIl0nKSxhKHRoaXMpLm9mZihcIm9wZW5Nb2RhbFwiKSxhKHRoaXMpLm9mZihcImNsb3NlTW9kYWxcIiksYShkb2N1bWVudCkub24oXCJjbGljay5tb2RhbFRyaWdnZXJcIiwnYVtocmVmPVwiIycrZisnXCJdLCBbZGF0YS10YXJnZXQ9XCInK2YrJ1wiXScsZnVuY3Rpb24oYil7Yy5zdGFydGluZ1RvcD0oYSh0aGlzKS5vZmZzZXQoKS50b3AtYSh3aW5kb3cpLnNjcm9sbFRvcCgpKS8xLjE1LGgoYSh0aGlzKSksYi5wcmV2ZW50RGVmYXVsdCgpfSksYSh0aGlzKS5vbihcIm9wZW5Nb2RhbFwiLGZ1bmN0aW9uKCl7YSh0aGlzKS5hdHRyKFwiaHJlZlwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpO2goKX0pLGEodGhpcykub24oXCJjbG9zZU1vZGFsXCIsZnVuY3Rpb24oKXtnKCl9KX0pfSxvcGVuOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwib3Blbk1vZGFsXCIpfSxjbG9zZTpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcImNsb3NlTW9kYWxcIil9fTthLmZuLm1vZGFsPWZ1bmN0aW9uKGIpe3JldHVybiBlW2JdP2VbYl0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBiJiZiP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitiK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbFwiKTplLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLm1hdGVyaWFsYm94PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtmPSExO3ZhciBiPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGQ9KHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCxpLmRhdGEoXCJ3aWR0aFwiKSksZz1pLmRhdGEoXCJoZWlnaHRcIik7aS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIiNtYXRlcmlhbGJveC1vdmVybGF5XCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiLm1hdGVyaWFsYm94LWNhcHRpb25cIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIjbWF0ZXJpYWxib3gtb3ZlcmxheVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZT0hMSxhKHRoaXMpLnJlbW92ZSgpfX0pLGkudmVsb2NpdHkoe3dpZHRoOmQsaGVpZ2h0OmcsbGVmdDowLHRvcDowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Yi5jc3Moe2hlaWdodDpcIlwiLHdpZHRoOlwiXCIscG9zaXRpb246XCJcIix0b3A6XCJcIixsZWZ0OlwiXCJ9KSxpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxpLmF0dHIoXCJzdHlsZVwiLGspLGkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZj0hMCxjJiZjLmNzcyhcIm92ZXJmbG93XCIsXCJcIil9fSksYShcIi5tYXRlcmlhbGJveC1jYXB0aW9uXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfWlmKCFhKHRoaXMpLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIikpe2EodGhpcykuYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgYyxkLGU9ITEsZj0hMCxnPTI3NSxoPTIwMCxpPWEodGhpcyksaj1hKFwiPGRpdj48L2Rpdj5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1wbGFjZWhvbGRlclwiKSxrPWkuYXR0cihcInN0eWxlXCIpO2kud3JhcChqKSxpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBoPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGo9d2luZG93LmlubmVyV2lkdGgsaz13aW5kb3cuaW5uZXJIZWlnaHQsbD1pLndpZHRoKCksbT1pLmhlaWdodCgpO2lmKGY9PT0hMSlyZXR1cm4gYigpLCExO2lmKGUmJmY9PT0hMClyZXR1cm4gYigpLCExO2Y9ITEsaS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlPSEwLGguY3NzKHt3aWR0aDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLGhlaWdodDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxwb3NpdGlvbjpcInJlbGF0aXZlXCIsdG9wOjAsbGVmdDowfSksYz12b2lkIDAsZD1oWzBdLnBhcmVudE5vZGU7Zm9yKDtudWxsIT09ZCYmIWEoZCkuaXMoZG9jdW1lbnQpOyl7dmFyIG49YShkKTtcInZpc2libGVcIiE9PW4uY3NzKFwib3ZlcmZsb3dcIikmJihuLmNzcyhcIm92ZXJmbG93XCIsXCJ2aXNpYmxlXCIpLGM9dm9pZCAwPT09Yz9uOmMuYWRkKG4pKSxkPWQucGFyZW50Tm9kZX1pLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLFwiei1pbmRleFwiOjFlMyxcIndpbGwtY2hhbmdlXCI6XCJsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcIn0pLmRhdGEoXCJ3aWR0aFwiLGwpLmRhdGEoXCJoZWlnaHRcIixtKTt2YXIgbz1hKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpLmNzcyh7b3BhY2l0eTowfSkuY2xpY2soZnVuY3Rpb24oKXtmPT09ITAmJmIoKX0pO2kuYmVmb3JlKG8pO3ZhciBwPW9bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoby5jc3Moe3dpZHRoOmosaGVpZ2h0OmssbGVmdDotMSpwLmxlZnQsdG9wOi0xKnAudG9wfSksby52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksXCJcIiE9PWkuZGF0YShcImNhcHRpb25cIikpe3ZhciBxPWEoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7cS50ZXh0KGkuZGF0YShcImNhcHRpb25cIikpLGEoXCJib2R5XCIpLmFwcGVuZChxKSxxLmNzcyh7ZGlzcGxheTpcImlubGluZVwifSkscS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9dmFyIHI9MCxzPWwvaix0PW0vayx1PTAsdj0wO3M+dD8ocj1tL2wsdT0uOSpqLHY9LjkqaipyKToocj1sL20sdT0uOSprKnIsdj0uOSprKSxpLmhhc0NsYXNzKFwicmVzcG9uc2l2ZS1pbWdcIik/aS52ZWxvY2l0eSh7XCJtYXgtd2lkdGhcIjp1LHdpZHRoOmx9LHtkdXJhdGlvbjowLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aS5jc3Moe2xlZnQ6MCx0b3A6MH0pLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfX0pOmkuY3NzKFwibGVmdFwiLDApLmNzcyhcInRvcFwiLDApLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2UmJmIoKX0pLGEoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZmPT09ITAmJmUmJmIoKX0pfX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIubWF0ZXJpYWxib3hlZFwiKS5tYXRlcmlhbGJveCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5wYXJhbGxheD1mdW5jdGlvbigpe3ZhciBiPWEod2luZG93KS53aWR0aCgpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChjKXt2YXIgZDtkPWI8NjAxP2UuaGVpZ2h0KCk+MD9lLmhlaWdodCgpOmUuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk6ZS5oZWlnaHQoKT4wP2UuaGVpZ2h0KCk6NTAwO3ZhciBmPWUuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKSxnPWYuaGVpZ2h0KCksaD1nLWQsaT1lLm9mZnNldCgpLnRvcCtkLGo9ZS5vZmZzZXQoKS50b3Asaz1hKHdpbmRvdykuc2Nyb2xsVG9wKCksbD13aW5kb3cuaW5uZXJIZWlnaHQsbT1rK2wsbj0obS1qKS8oZCtsKSxvPU1hdGgucm91bmQoaCpuKTtjJiZmLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpLGk+ayYmajxrK2wmJmYuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUzRCgtNTAlLFwiK28rXCJweCwgMClcIil9dmFyIGU9YSh0aGlzKTtlLmFkZENsYXNzKFwicGFyYWxsYXhcIiksZS5jaGlsZHJlbihcImltZ1wiKS5vbmUoXCJsb2FkXCIsZnVuY3Rpb24oKXtkKCEwKX0pLmVhY2goZnVuY3Rpb24oKXt0aGlzLmNvbXBsZXRlJiZhKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2I9YSh3aW5kb3cpLndpZHRoKCksZCghMSl9KSxhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7Yj1hKHdpbmRvdykud2lkdGgoKSxkKCExKX0pfSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtvblNob3c6bnVsbCxzd2lwZWFibGU6ITEscmVzcG9uc2l2ZVRocmVzaG9sZDoxLzB9O2I9YS5leHRlbmQoYyxiKTt2YXIgZD1NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyhhKHRoaXMpKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlLGYsZyxoLGksaj1kK2Msaz1hKHRoaXMpLGw9YSh3aW5kb3cpLndpZHRoKCksbT1rLmZpbmQoXCJsaS50YWIgYVwiKSxuPWsud2lkdGgoKSxvPWEoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgscT1wcmV2X2luZGV4PTAscj0hMSxzPTMwMCx0PWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmNlaWwobi1hLnBvc2l0aW9uKCkubGVmdC1hLm91dGVyV2lkdGgoKS1rLnNjcm9sbExlZnQoKSl9LHU9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5wb3NpdGlvbigpLmxlZnQray5zY3JvbGxMZWZ0KCkpfSx2PWZ1bmN0aW9uKGEpe3EtYT49MD8oaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGgudmVsb2NpdHkoe2xlZnQ6dShlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKTooaC52ZWxvY2l0eSh7bGVmdDp1KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKX07Yi5zd2lwZWFibGUmJmw+Yi5yZXNwb25zaXZlVGhyZXNob2xkJiYoYi5zd2lwZWFibGU9ITEpLGU9YShtLmZpbHRlcignW2hyZWY9XCInK2xvY2F0aW9uLmhhc2grJ1wiXScpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhLmFjdGl2ZVwiKS5maXJzdCgpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhXCIpLmZpcnN0KCkpLGUuYWRkQ2xhc3MoXCJhY3RpdmVcIikscT1tLmluZGV4KGUpLHE8MCYmKHE9MCksdm9pZCAwIT09ZVswXSYmKGY9YShlWzBdLmhhc2gpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGsuZmluZChcIi5pbmRpY2F0b3JcIikubGVuZ3RofHxrLmFwcGVuZCgnPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PicpLGg9ay5maW5kKFwiLmluZGljYXRvclwiKSxrLmFwcGVuZChoKSxrLmlzKFwiOnZpc2libGVcIikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtoLmNzcyh7cmlnaHQ6dChlKX0pLGguY3NzKHtsZWZ0OnUoZSl9KX0sMCksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YWJzLVwiK2opLm9uKFwicmVzaXplLnRhYnMtXCIraixmdW5jdGlvbigpe249ay53aWR0aCgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxxPDAmJihxPTApLDAhPT1wJiYwIT09biYmKGguY3NzKHtyaWdodDp0KGUpfSksaC5jc3Moe2xlZnQ6dShlKX0pKX0pLGIuc3dpcGVhYmxlPyhtLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7Yi5hZGRDbGFzcyhcImNhcm91c2VsLWl0ZW1cIiksbz1vLmFkZChiKX0pLGc9by53cmFwQWxsKCc8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50IGNhcm91c2VsXCI+PC9kaXY+Jyksby5jc3MoXCJkaXNwbGF5XCIsXCJcIiksYShcIi50YWJzLWNvbnRlbnQuY2Fyb3VzZWxcIikuY2Fyb3VzZWwoe2Z1bGxXaWR0aDohMCxub1dyYXA6ITAsb25DeWNsZVRvOmZ1bmN0aW9uKGEpe2lmKCFyKXt2YXIgYj1xO3E9Zy5pbmRleChhKSxlPW0uZXEocSksdihiKX19fSkpOm0ubm90KGUpLmVhY2goZnVuY3Rpb24oKXthKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpfSksay5vZmYoXCJjbGljay50YWJzXCIpLm9uKFwiY2xpY2sudGFic1wiLFwiYVwiLGZ1bmN0aW9uKGMpe2lmKGEodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSlyZXR1cm4gdm9pZCBjLnByZXZlbnREZWZhdWx0KCk7aWYoIWEodGhpcykuYXR0cihcInRhcmdldFwiKSl7cj0hMCxuPWsud2lkdGgoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgsZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgZD1mO2U9YSh0aGlzKSxmPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKSxtPWsuZmluZChcImxpLnRhYiBhXCIpO2UucG9zaXRpb24oKTtlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHByZXZfaW5kZXg9cSxxPW0uaW5kZXgoYSh0aGlzKSkscTwwJiYocT0wKSxiLnN3aXBlYWJsZT9vLmxlbmd0aCYmby5jYXJvdXNlbChcInNldFwiLHEpOih2b2lkIDAhPT1mJiYoZi5zaG93KCksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uU2hvdyYmYi5vblNob3cuY2FsbCh0aGlzLGYpKSx2b2lkIDA9PT1kfHxkLmlzKGYpfHwoZC5oaWRlKCksZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSkpLGk9c2V0VGltZW91dChmdW5jdGlvbigpe3I9ITF9LHMpLHYocHJldl9pbmRleCksYy5wcmV2ZW50RGVmYXVsdCgpfX0pfSl9LHNlbGVjdF90YWI6ZnVuY3Rpb24oYSl7dGhpcy5maW5kKCdhW2hyZWY9XCIjJythKydcIl0nKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnRhYnM9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhYnNcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwidWwudGFic1wiKS50YWJzKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnRvb2x0aXA9ZnVuY3Rpb24oYyl7dmFyIGQ9NSxlPXtkZWxheTozNTAsdG9vbHRpcDpcIlwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaHRtbDohMX07cmV0dXJuXCJyZW1vdmVcIj09PWM/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EoXCIjXCIrYSh0aGlzKS5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpKS5yZW1vdmUoKSxhKHRoaXMpLm9mZihcIm1vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXBcIil9KSwhMSk6KGM9YS5leHRlbmQoZSxjKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1NYXRlcmlhbGl6ZS5ndWlkKCksZj1hKHRoaXMpO2YuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSYmYShcIiNcIitmLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikpLnJlbW92ZSgpLGYuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiLGUpO3ZhciBnLGgsaSxqLGssbCxtPWZ1bmN0aW9uKCl7Zz1mLmF0dHIoXCJkYXRhLWh0bWxcIik/XCJ0cnVlXCI9PT1mLmF0dHIoXCJkYXRhLWh0bWxcIik6Yy5odG1sLGg9Zi5hdHRyKFwiZGF0YS1kZWxheVwiKSxoPXZvaWQgMD09PWh8fFwiXCI9PT1oP2MuZGVsYXk6aCxpPWYuYXR0cihcImRhdGEtcG9zaXRpb25cIiksaT12b2lkIDA9PT1pfHxcIlwiPT09aT9jLnBvc2l0aW9uOmksaj1mLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiksaj12b2lkIDA9PT1qfHxcIlwiPT09aj9jLnRvb2x0aXA6an07bSgpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGI9YSgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtyZXR1cm4gaj1nP2EoXCI8c3Bhbj48L3NwYW4+XCIpLmh0bWwoaik6YShcIjxzcGFuPjwvc3Bhbj5cIikudGV4dChqKSxiLmFwcGVuZChqKS5hcHBlbmRUbyhhKFwiYm9keVwiKSkuYXR0cihcImlkXCIsZSksbD1hKCc8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj4nKSxsLmFwcGVuZFRvKGIpLGJ9O2s9bigpLGYub2ZmKFwibW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcFwiKTt2YXIgbyxwPSExO2Yub24oe1wibW91c2VlbnRlci50b29sdGlwXCI6ZnVuY3Rpb24oYSl7dmFyIGM9ZnVuY3Rpb24oKXttKCkscD0hMCxrLnZlbG9jaXR5KFwic3RvcFwiKSxsLnZlbG9jaXR5KFwic3RvcFwiKSxrLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCJ9KTt2YXIgYSxjLGUsZz1mLm91dGVyV2lkdGgoKSxoPWYub3V0ZXJIZWlnaHQoKSxqPWsub3V0ZXJIZWlnaHQoKSxuPWsub3V0ZXJXaWR0aCgpLG89XCIwcHhcIixxPVwiMHB4XCIscj1sWzBdLm9mZnNldFdpZHRoLHM9bFswXS5vZmZzZXRIZWlnaHQsdD04LHU9OCx2PTA7XCJ0b3BcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3Atai1kLGM9Zi5vZmZzZXQoKS5sZWZ0K2cvMi1uLzIsZT1iKGMsYSxuLGopLG89XCItMTBweFwiLGwuY3NzKHtib3R0b206MCxsZWZ0OjAsYm9yZGVyUmFkaXVzOlwiMTRweCAxNHB4IDAgMFwiLHRyYW5zZm9ybU9yaWdpbjpcIjUwJSAxMDAlXCIsbWFyZ2luVG9wOmosbWFyZ2luTGVmdDpuLzItci8yfSkpOlwibGVmdFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcCtoLzItai8yLGM9Zi5vZmZzZXQoKS5sZWZ0LW4tZCxlPWIoYyxhLG4saikscT1cIi0xMHB4XCIsbC5jc3Moe3RvcDpcIi03cHhcIixyaWdodDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIxNHB4IDAgMCAxNHB4XCIsdHJhbnNmb3JtT3JpZ2luOlwiOTUlIDUwJVwiLG1hcmdpblRvcDpqLzIsbWFyZ2luTGVmdDpufSkpOlwicmlnaHRcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3AraC8yLWovMixjPWYub2Zmc2V0KCkubGVmdCtnK2QsZT1iKGMsYSxuLGopLHE9XCIrMTBweFwiLGwuY3NzKHt0b3A6XCItN3B4XCIsbGVmdDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIwIDE0cHggMTRweCAwXCIsdHJhbnNmb3JtT3JpZ2luOlwiNSUgNTAlXCIsbWFyZ2luVG9wOmovMixtYXJnaW5MZWZ0OlwiMHB4XCJ9KSk6KGE9Zi5vZmZzZXQoKS50b3ArZi5vdXRlckhlaWdodCgpK2QsYz1mLm9mZnNldCgpLmxlZnQrZy8yLW4vMixlPWIoYyxhLG4saiksbz1cIisxMHB4XCIsbC5jc3Moe3RvcDowLGxlZnQ6MCxtYXJnaW5MZWZ0Om4vMi1yLzJ9KSksay5jc3Moe3RvcDplLnksbGVmdDplLnh9KSx0PU1hdGguU1FSVDIqbi9wYXJzZUludChyKSx1PU1hdGguU1FSVDIqai9wYXJzZUludChzKSx2PU1hdGgubWF4KHQsdSksay52ZWxvY2l0eSh7dHJhbnNsYXRlWTpvLHRyYW5zbGF0ZVg6cX0se2R1cmF0aW9uOjM1MCxxdWV1ZTohMX0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZGVsYXk6NTAscXVldWU6ITF9KSxsLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1NSxkZWxheTowLHF1ZXVlOiExfSkudmVsb2NpdHkoe3NjYWxlWDp2LHNjYWxlWTp2fSx7ZHVyYXRpb246MzAwLGRlbGF5OjAscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwifSl9O289c2V0VGltZW91dChjLGgpfSxcIm1vdXNlbGVhdmUudG9vbHRpcFwiOmZ1bmN0aW9uKCl7cD0hMSxjbGVhclRpbWVvdXQobyksc2V0VGltZW91dChmdW5jdGlvbigpe3AhPT0hMCYmKGsudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVZOjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExfSksbC52ZWxvY2l0eSh7b3BhY2l0eTowLHNjYWxlWDoxLHNjYWxlWToxfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7bC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGsuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxwPSExfX0pKX0sMjI1KX19KX0pKX07dmFyIGI9ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9YixnPWM7cmV0dXJuIGY8MD9mPTQ6ZitkPndpbmRvdy5pbm5lcldpZHRoJiYoZi09ZitkLXdpbmRvdy5pbm5lcldpZHRoKSxnPDA/Zz00OmcrZT53aW5kb3cuaW5uZXJIZWlnaHQrYSh3aW5kb3cpLnNjcm9sbFRvcCYmKGctPWcrZS13aW5kb3cuaW5uZXJIZWlnaHQpLHt4OmYseTpnfX07YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLnRvb2x0aXBwZWRcIikudG9vbHRpcCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhKXtyZXR1cm4gbnVsbCE9PWEmJmE9PT1hLndpbmRvd31mdW5jdGlvbiBjKGEpe3JldHVybiBiKGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9ZnVuY3Rpb24gZChhKXt2YXIgYixkLGU9e3RvcDowLGxlZnQ6MH0sZj1hJiZhLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYoZT1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxkPWMoZikse3RvcDplLnRvcCtkLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2QucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fX1mdW5jdGlvbiBlKGEpe3ZhciBiPVwiXCI7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGIrPWMrXCI6XCIrYVtjXStcIjtcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gZihhKXtpZihrLmFsbG93RXZlbnQoYSk9PT0hMSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9bnVsbCxjPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQ7bnVsbCE9PWMucGFyZW50RWxlbWVudDspe2lmKCEoYyBpbnN0YW5jZW9mIFNWR0VsZW1lbnR8fGMuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIik9PT0tMSkpe2I9YzticmVha31pZihjLmNsYXNzTGlzdC5jb250YWlucyhcIndhdmVzLWVmZmVjdFwiKSl7Yj1jO2JyZWFrfWM9Yy5wYXJlbnRFbGVtZW50fXJldHVybiBifWZ1bmN0aW9uIGcoYil7dmFyIGM9ZihiKTtudWxsIT09YyYmKGouc2hvdyhiLGMpLFwib250b3VjaHN0YXJ0XCJpbiBhJiYoYy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixqLmhpZGUsITEpLGMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsai5oaWRlLCExKSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGouaGlkZSwhMSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGouaGlkZSwhMSkpfXZhciBoPWh8fHt9LGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KSxqPXtkdXJhdGlvbjo3NTAsc2hvdzpmdW5jdGlvbihhLGIpe2lmKDI9PT1hLmJ1dHRvbilyZXR1cm4hMTt2YXIgYz1ifHx0aGlzLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmLmNsYXNzTmFtZT1cIndhdmVzLXJpcHBsZVwiLGMuYXBwZW5kQ2hpbGQoZik7dmFyIGc9ZChjKSxoPWEucGFnZVktZy50b3AsaT1hLnBhZ2VYLWcubGVmdCxrPVwic2NhbGUoXCIrYy5jbGllbnRXaWR0aC8xMDAqMTArXCIpXCI7XCJ0b3VjaGVzXCJpbiBhJiYoaD1hLnRvdWNoZXNbMF0ucGFnZVktZy50b3AsaT1hLnRvdWNoZXNbMF0ucGFnZVgtZy5sZWZ0KSxmLnNldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiLERhdGUubm93KCkpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiLGspLGYuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsaSksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIixoKTt2YXIgbD17dG9wOmgrXCJweFwiLGxlZnQ6aStcInB4XCJ9O2YuY2xhc3NOYW1lPWYuY2xhc3NOYW1lK1wiIHdhdmVzLW5vdHJhbnNpdGlvblwiLGYuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGwpKSxmLmNsYXNzTmFtZT1mLmNsYXNzTmFtZS5yZXBsYWNlKFwid2F2ZXMtbm90cmFuc2l0aW9uXCIsXCJcIiksbFtcIi13ZWJraXQtdHJhbnNmb3JtXCJdPWssbFtcIi1tb3otdHJhbnNmb3JtXCJdPWssbFtcIi1tcy10cmFuc2Zvcm1cIl09ayxsW1wiLW8tdHJhbnNmb3JtXCJdPWssbC50cmFuc2Zvcm09ayxsLm9wYWNpdHk9XCIxXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1wiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixsW1widHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUobCkpfSxoaWRlOmZ1bmN0aW9uKGEpe2sudG91Y2h1cChhKTt2YXIgYj10aGlzLGM9KDEuNCpiLmNsaWVudFdpZHRoLG51bGwpLGQ9Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2F2ZXMtcmlwcGxlXCIpO2lmKCEoZC5sZW5ndGg+MCkpcmV0dXJuITE7Yz1kW2QubGVuZ3RoLTFdO3ZhciBmPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpLGc9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiksaD1jLmdldEF0dHJpYnV0ZShcImRhdGEtc2NhbGVcIiksaT1EYXRlLm5vdygpLU51bWJlcihjLmdldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiKSksbD0zNTAtaTtsPDAmJihsPTApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT17dG9wOmcrXCJweFwiLGxlZnQ6ZitcInB4XCIsb3BhY2l0eTpcIjBcIixcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItd2Via2l0LXRyYW5zZm9ybVwiOmgsXCItbW96LXRyYW5zZm9ybVwiOmgsXCItbXMtdHJhbnNmb3JtXCI6aCxcIi1vLXRyYW5zZm9ybVwiOmgsdHJhbnNmb3JtOmh9O2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGEpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHJ5e2IucmVtb3ZlQ2hpbGQoYyl9Y2F0Y2goYSl7cmV0dXJuITF9fSxqLmR1cmF0aW9uKX0sbCl9LHdyYXBJbnB1dDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihcImlucHV0XCI9PT1jLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGQ9Yy5wYXJlbnROb2RlO2lmKFwiaVwiPT09ZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJmQuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIikhPT0tMSljb250aW51ZTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtlLmNsYXNzTmFtZT1jLmNsYXNzTmFtZStcIiB3YXZlcy1pbnB1dC13cmFwcGVyXCI7dmFyIGY9Yy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtmfHwoZj1cIlwiKSxlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZiksYy5jbGFzc05hbWU9XCJ3YXZlcy1idXR0b24taW5wdXRcIixjLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLGQucmVwbGFjZUNoaWxkKGUsYyksZS5hcHBlbmRDaGlsZChjKX19fX0saz17dG91Y2hlczowLGFsbG93RXZlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9ITA7cmV0dXJuXCJ0b3VjaHN0YXJ0XCI9PT1hLnR5cGU/ay50b3VjaGVzKz0xOlwidG91Y2hlbmRcIj09PWEudHlwZXx8XCJ0b3VjaGNhbmNlbFwiPT09YS50eXBlP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnRvdWNoZXM+MCYmKGsudG91Y2hlcy09MSl9LDUwMCk6XCJtb3VzZWRvd25cIj09PWEudHlwZSYmay50b3VjaGVzPjAmJihiPSExKSxifSx0b3VjaHVwOmZ1bmN0aW9uKGEpe2suYWxsb3dFdmVudChhKX19O2guZGlzcGxheUVmZmVjdD1mdW5jdGlvbihiKXtiPWJ8fHt9LFwiZHVyYXRpb25cImluIGImJihqLmR1cmF0aW9uPWIuZHVyYXRpb24pLGoud3JhcElucHV0KGkoXCIud2F2ZXMtZWZmZWN0XCIpKSxcIm9udG91Y2hzdGFydFwiaW4gYSYmZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpLGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGcsITEpfSxoLmF0dGFjaD1mdW5jdGlvbihiKXtcImlucHV0XCI9PT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKGoud3JhcElucHV0KFtiXSksYj1iLnBhcmVudEVsZW1lbnQpLFwib250b3VjaHN0YXJ0XCJpbiBhJiZiLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSksYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZywhMSl9LGEuV2F2ZXM9aCxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7aC5kaXNwbGF5RWZmZWN0KCl9LCExKX0od2luZG93KSxNYXRlcmlhbGl6ZS50b2FzdD1mdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIiksYylmb3IodmFyIGU9Yy5zcGxpdChcIiBcIiksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKyliLmNsYXNzTGlzdC5hZGQoZVtmXSk7KFwib2JqZWN0XCI9PXR5cGVvZiBIVE1MRWxlbWVudD9hIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6YSYmXCJvYmplY3RcIj09dHlwZW9mIGEmJm51bGwhPT1hJiYxPT09YS5ub2RlVHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIGEubm9kZU5hbWUpP2IuYXBwZW5kQ2hpbGQoYSk6YSBpbnN0YW5jZW9mIGpRdWVyeT9iLmFwcGVuZENoaWxkKGFbMF0pOmIuaW5uZXJIVE1MPWE7dmFyIGg9bmV3IEhhbW1lcihiLHtwcmV2ZW50X2RlZmF1bHQ6ITF9KTtyZXR1cm4gaC5vbihcInBhblwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGQ9ODA7Yi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHxiLmNsYXNzTGlzdC5hZGQoXCJwYW5uaW5nXCIpO3ZhciBlPTEtTWF0aC5hYnMoYy9kKTtlPDAmJihlPTApLFZlbChiLHtsZWZ0OmMsb3BhY2l0eTplfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfSksaC5vbihcInBhbmVuZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGU9ODA7TWF0aC5hYnMoYyk+ZT9WZWwoYix7bWFyZ2luVG9wOlwiLTQwcHhcIn0se2R1cmF0aW9uOjM3NSxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCgpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19KTooYi5jbGFzc0xpc3QucmVtb3ZlKFwicGFubmluZ1wiKSxWZWwoYix7bGVmdDowLG9wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExfSkpfSksYn1jPWN8fFwiXCI7dmFyIGY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2FzdC1jb250YWluZXJcIik7bnVsbD09PWYmJihmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZi5pZD1cInRvYXN0LWNvbnRhaW5lclwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZikpO3ZhciBnPWUoYSk7YSYmZi5hcHBlbmRDaGlsZChnKSxnLnN0eWxlLm9wYWNpdHk9MCxWZWwoZyx7dHJhbnNsYXRlWTpcIi0zNXB4XCIsb3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLHF1ZXVlOiExfSk7dmFyIGgsaT1iO251bGwhPWkmJihoPXNldEludGVydmFsKGZ1bmN0aW9uKCl7bnVsbD09PWcucGFyZW50Tm9kZSYmd2luZG93LmNsZWFySW50ZXJ2YWwoaCksZy5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHwoaS09MjApLGk8PTAmJihWZWwoZyx7b3BhY2l0eTowLG1hcmdpblRvcDpcIi00MHB4XCJ9LHtkdXJhdGlvbjozNzUsZWFzaW5nOlwiZWFzZU91dEV4cG9cIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmQoKSx0aGlzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1swXSl9fSksd2luZG93LmNsZWFySW50ZXJ2YWwoaCkpfSwyMCkpfSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17bWVudVdpZHRoOjMwMCxlZGdlOlwibGVmdFwiLGNsb3NlT25DbGljazohMSxkcmFnZ2FibGU6ITB9O2I9YS5leHRlbmQoYyxiKSxhKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIiksZT1hKFwiI1wiK2QpOzMwMCE9Yi5tZW51V2lkdGgmJmUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCk7dmFyIGY9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrZCsnXCJdJyk7Yi5kcmFnZ2FibGU/KGYubGVuZ3RoJiZmLnJlbW92ZSgpLGY9YSgnPGRpdiBjbGFzcz1cImRyYWctdGFyZ2V0XCI+PC9kaXY+JykuYXR0cihcImRhdGEtc2lkZW5hdlwiLGQpLGEoXCJib2R5XCIpLmFwcGVuZChmKSk6Zj1hKCksXCJsZWZ0XCI9PWIuZWRnZT8oZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoLTEwMCUpXCIpLGYuY3NzKHtsZWZ0OjB9KSk6KGUuYWRkQ2xhc3MoXCJyaWdodC1hbGlnbmVkXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSxmLmNzcyh7cmlnaHQ6MH0pKSxlLmhhc0NsYXNzKFwiZml4ZWRcIikmJndpbmRvdy5pbm5lcldpZHRoPjk5MiYmZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMClcIiksZS5oYXNDbGFzcyhcImZpeGVkXCIpJiZhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7d2luZG93LmlubmVyV2lkdGg+OTkyPzAhPT1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS5sZW5ndGgmJmk/ZyghMCk6ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMCUpXCIpOmk9PT0hMSYmKFwibGVmdFwiPT09Yi5lZGdlP2UuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKC0xMDAlKVwiKTplLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSl9KSxiLmNsb3NlT25DbGljaz09PSEwJiZlLm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLGZ1bmN0aW9uKCl7ZygpfSk7dmFyIGc9ZnVuY3Rpb24oYyl7aD0hMSxpPSExLGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksYShcIiNzaWRlbmF2LW92ZXJsYXlcIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxcImxlZnRcIj09PWIuZWRnZT8oZi5jc3Moe3dpZHRoOlwiXCIscmlnaHQ6XCJcIixsZWZ0OlwiMFwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIi0xMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSk6KGYuY3NzKHt3aWR0aDpcIlwiLHJpZ2h0OlwiMFwiLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCIxMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSl9LGg9ITEsaT0hMTtiLmRyYWdnYWJsZSYmKGYub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7aSYmZygpfSksZi5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihjKXtpZihcInRvdWNoXCI9PWMuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGQ9KGMuZ2VzdHVyZS5kaXJlY3Rpb24sYy5nZXN0dXJlLmNlbnRlci54KSxmPShjLmdlc3R1cmUuY2VudGVyLnksYy5nZXN0dXJlLnZlbG9jaXR5WCxhKFwiYm9keVwiKSksaD1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKSxqPWYuaW5uZXJXaWR0aCgpO2lmKGYuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxmLndpZHRoKGopLDA9PT1oLmxlbmd0aCYmKGg9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGguY3NzKFwib3BhY2l0eVwiLDApLmNsaWNrKGZ1bmN0aW9uKCl7ZygpfSksYShcImJvZHlcIikuYXBwZW5kKGgpKSxcImxlZnRcIj09PWIuZWRnZSYmKGQ+Yi5tZW51V2lkdGg/ZD1iLm1lbnVXaWR0aDpkPDAmJihkPTApKSxcImxlZnRcIj09PWIuZWRnZSlkPGIubWVudVdpZHRoLzI/aT0hMTpkPj1iLm1lbnVXaWR0aC8yJiYoaT0hMCksZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoXCIrKGQtYi5tZW51V2lkdGgpK1wicHgpXCIpO2Vsc2V7ZDx3aW5kb3cuaW5uZXJXaWR0aC1iLm1lbnVXaWR0aC8yP2k9ITA6ZD49d2luZG93LmlubmVyV2lkdGgtYi5tZW51V2lkdGgvMiYmKGk9ITEpO3ZhciBrPWQtYi5tZW51V2lkdGgvMjtrPDAmJihrPTApLGUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKFwiK2srXCJweClcIil9dmFyIGw7XCJsZWZ0XCI9PT1iLmVkZ2U/KGw9ZC9iLm1lbnVXaWR0aCxoLnZlbG9jaXR5KHtvcGFjaXR5Omx9LHtkdXJhdGlvbjoxMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpOihsPU1hdGguYWJzKChkLXdpbmRvdy5pbm5lcldpZHRoKS9iLm1lbnVXaWR0aCksaC52ZWxvY2l0eSh7b3BhY2l0eTpsfSx7ZHVyYXRpb246MTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oYyl7aWYoXCJ0b3VjaFwiPT1jLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBkPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGc9Yy5nZXN0dXJlLnZlbG9jaXR5WCxqPWMuZ2VzdHVyZS5jZW50ZXIueCxrPWotYi5tZW51V2lkdGgsbD1qLWIubWVudVdpZHRoLzI7az4wJiYoaz0wKSxsPDAmJihsPTApLGg9ITEsXCJsZWZ0XCI9PT1iLmVkZ2U/aSYmZzw9LjN8fGc8LS41PygwIT09ayYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxrXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OjAsbGVmdDpcIlwifSksaT0hMCk6KCFpfHxnPi4zKSYmKGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbLTEqYi5tZW51V2lkdGgtMTAsa119LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxmLmNzcyh7d2lkdGg6XCIxMHB4XCIscmlnaHQ6XCJcIixsZWZ0OjB9KSk6aSYmZz49LS4zfHxnPi41PygwIT09bCYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxsXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksaT0hMCk6KCFpfHxnPC0uMykmJihhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6W2IubWVudVdpZHRoKzEwLGxdfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSksZi5jc3Moe3dpZHRoOlwiMTBweFwiLHJpZ2h0OjAsbGVmdDpcIlwifSkpfX0pKSxjLm9mZihcImNsaWNrLnNpZGVuYXZcIikub24oXCJjbGljay5zaWRlbmF2XCIsZnVuY3Rpb24oKXtpZihpPT09ITApaT0hMSxoPSExLGcoKTtlbHNle3ZhciBjPWEoXCJib2R5XCIpLGQ9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGo9Yy5pbm5lcldpZHRoKCk7Yy5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGMud2lkdGgoaiksYShcImJvZHlcIikuYXBwZW5kKGYpLFwibGVmdFwiPT09Yi5lZGdlPyhmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDowLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsLTEqYi5tZW51V2lkdGhdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSk6KGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxiLm1lbnVXaWR0aF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKSxkLmNzcyhcIm9wYWNpdHlcIiwwKS5jbGljayhmdW5jdGlvbigpe2k9ITEsaD0hMSxnKCksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfSksYShcImJvZHlcIikuYXBwZW5kKGQpLGQudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aT0hMCxoPSExfX0pfXJldHVybiExfSl9KX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBiPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGM9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrYSh0aGlzKS5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikrJ1wiXScpO2IudHJpZ2dlcihcImNsaWNrXCIpLGMucmVtb3ZlKCksYSh0aGlzKS5vZmYoXCJjbGlja1wiKSxiLnJlbW92ZSgpfSxzaG93OmZ1bmN0aW9uKCl7dGhpcy50cmlnZ2VyKFwiY2xpY2tcIil9LGhpZGU6ZnVuY3Rpb24oKXthKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnNpZGVOYXY9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXZcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiLGMsZCxlKXt2YXIgZz1hKCk7cmV0dXJuIGEuZWFjaChmLGZ1bmN0aW9uKGEsZil7aWYoZi5oZWlnaHQoKT4wKXt2YXIgaD1mLm9mZnNldCgpLnRvcCxpPWYub2Zmc2V0KCkubGVmdCxqPWkrZi53aWR0aCgpLGs9aCtmLmhlaWdodCgpLGw9IShpPmN8fGo8ZXx8aD5kfHxrPGIpO2wmJmcucHVzaChmKX19KSxnfWZ1bmN0aW9uIGMoYyl7KytpO3ZhciBkPWUuc2Nyb2xsVG9wKCksZj1lLnNjcm9sbExlZnQoKSxoPWYrZS53aWR0aCgpLGs9ZCtlLmhlaWdodCgpLGw9YihkK2oudG9wK2N8fDIwMCxoK2oucmlnaHQsaytqLmJvdHRvbSxmK2oubGVmdCk7YS5lYWNoKGwsZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIik7XCJudW1iZXJcIiE9dHlwZW9mIGMmJmIudHJpZ2dlckhhbmRsZXIoXCJzY3JvbGxTcHk6ZW50ZXJcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsaSl9KSxhLmVhY2goZyxmdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiKTtcIm51bWJlclwiPT10eXBlb2YgYyYmYyE9PWkmJihiLnRyaWdnZXJIYW5kbGVyKFwic2Nyb2xsU3B5OmV4aXRcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsbnVsbCkpfSksZz1sfWZ1bmN0aW9uIGQoKXtlLnRyaWdnZXIoXCJzY3JvbGxTcHk6d2luU2l6ZVwiKX12YXIgZT1hKHdpbmRvdyksZj1bXSxnPVtdLGg9ITEsaT0wLGo9e3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowfTthLnNjcm9sbFNweT1mdW5jdGlvbihiLGQpe3ZhciBnPXt0aHJvdHRsZToxMDAsc2Nyb2xsT2Zmc2V0OjIwMH07ZD1hLmV4dGVuZChnLGQpO3ZhciBpPVtdO2I9YShiKSxiLmVhY2goZnVuY3Rpb24oYixjKXtmLnB1c2goYShjKSksYShjKS5kYXRhKFwic2Nyb2xsU3B5OmlkXCIsYiksYSgnYVtocmVmPVwiIycrYShjKS5hdHRyKFwiaWRcIikrJ1wiXScpLmNsaWNrKGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt2YXIgYz1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkub2Zmc2V0KCkudG9wKzE7YShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOmMtZC5zY3JvbGxPZmZzZXR9LHtkdXJhdGlvbjo0MDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9KX0pfSksai50b3A9ZC5vZmZzZXRUb3B8fDAsai5yaWdodD1kLm9mZnNldFJpZ2h0fHwwLGouYm90dG9tPWQub2Zmc2V0Qm90dG9tfHwwLGoubGVmdD1kLm9mZnNldExlZnR8fDA7dmFyIGs9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtjKGQuc2Nyb2xsT2Zmc2V0KX0sZC50aHJvdHRsZXx8MTAwKSxsPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkucmVhZHkoayl9O3JldHVybiBofHwoZS5vbihcInNjcm9sbFwiLGwpLGUub24oXCJyZXNpemVcIixsKSxoPSEwKSxzZXRUaW1lb3V0KGwsMCksYi5vbihcInNjcm9sbFNweTplbnRlclwiLGZ1bmN0aW9uKCl7aT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pO3ZhciBiPWEodGhpcyk7aVswXT8oYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIuZGF0YShcInNjcm9sbFNweTppZFwiKTxpWzBdLmRhdGEoXCJzY3JvbGxTcHk6aWRcIik/aS51bnNoaWZ0KGEodGhpcykpOmkucHVzaChhKHRoaXMpKSk6aS5wdXNoKGEodGhpcykpLGEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLGIub24oXCJzY3JvbGxTcHk6ZXhpdFwiLGZ1bmN0aW9uKCl7aWYoaT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pLGlbMF0pe2EoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgYj1hKHRoaXMpO2k9YS5ncmVwKGksZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXR0cihcImlkXCIpIT1iLmF0dHIoXCJpZFwiKX0pLGlbMF0mJmEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX19KSxifSxhLndpblNpemVTcHk9ZnVuY3Rpb24oYil7cmV0dXJuIGEud2luU2l6ZVNweT1mdW5jdGlvbigpe3JldHVybiBlfSxiPWJ8fHt0aHJvdHRsZToxMDB9LGUub24oXCJyZXNpemVcIixNYXRlcmlhbGl6ZS50aHJvdHRsZShkLGIudGhyb3R0bGV8fDEwMCkpfSxhLmZuLnNjcm9sbFNweT1mdW5jdGlvbihiKXtyZXR1cm4gYS5zY3JvbGxTcHkoYSh0aGlzKSxiKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPWIuY3NzKFwiZm9udC1mYW1pbHlcIiksZD1iLmNzcyhcImZvbnQtc2l6ZVwiKSxmPWIuY3NzKFwibGluZS1oZWlnaHRcIik7ZCYmZS5jc3MoXCJmb250LXNpemVcIixkKSxjJiZlLmNzcyhcImZvbnQtZmFtaWx5XCIsYyksZiYmZS5jc3MoXCJsaW5lLWhlaWdodFwiLGYpLFwib2ZmXCI9PT1iLmF0dHIoXCJ3cmFwXCIpJiZlLmNzcyhcIm92ZXJmbG93LXdyYXBcIixcIm5vcm1hbFwiKS5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwicHJlXCIpLGUudGV4dChiLnZhbCgpK1wiXFxuXCIpO3ZhciBnPWUuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKTtlLmh0bWwoZyksYi5pcyhcIjp2aXNpYmxlXCIpP2UuY3NzKFwid2lkdGhcIixiLndpZHRoKCkpOmUuY3NzKFwid2lkdGhcIixhKHdpbmRvdykud2lkdGgoKS8yKSxiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIik8PWUuaGVpZ2h0KCk/Yi5jc3MoXCJoZWlnaHRcIixlLmhlaWdodCgpKTpiLnZhbCgpLmxlbmd0aDxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIikmJmIuY3NzKFwiaGVpZ2h0XCIsYi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpKSxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIixiLnZhbCgpLmxlbmd0aCl9TWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcz1mdW5jdGlvbigpe3ZhciBiPVwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhXCI7YShiKS5lYWNoKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YSh0aGlzKTthKGMpLnZhbCgpLmxlbmd0aD4wfHxjLmF1dG9mb2N1c3x8dm9pZCAwIT09ZC5hdHRyKFwicGxhY2Vob2xkZXJcIik/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmEoYylbMF0udmFsaWRpdHk/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsYShjKVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSEwKTpkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KX07dmFyIGM9XCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWFcIjthKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLGMsZnVuY3Rpb24oKXswPT09YSh0aGlzKS52YWwoKS5sZW5ndGgmJnZvaWQgMD09PWEodGhpcykuYXR0cihcInBsYWNlaG9sZGVyXCIpfHxhKHRoaXMpLnNpYmxpbmdzKFwibGFiZWxcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdmFsaWRhdGVfZmllbGQoYSh0aGlzKSl9KSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe01hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMoKX0pLGEoZG9jdW1lbnQpLm9uKFwicmVzZXRcIixmdW5jdGlvbihiKXt2YXIgZD1hKGIudGFyZ2V0KTtkLmlzKFwiZm9ybVwiKSYmKGQuZmluZChjKS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSxkLmZpbmQoYykuZWFjaChmdW5jdGlvbigpe1wiXCI9PT1hKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSYmYSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksZC5maW5kKFwic2VsZWN0LmluaXRpYWxpemVkXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYT1kLmZpbmQoXCJvcHRpb25bc2VsZWN0ZWRdXCIpLnRleHQoKTtkLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChhKX0pKX0pLGEoZG9jdW1lbnQpLm9uKFwiZm9jdXNcIixjLGZ1bmN0aW9uKCl7YSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJibHVyXCIsYyxmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1cIi5wcmVmaXhcIjswPT09Yi52YWwoKS5sZW5ndGgmJmJbMF0udmFsaWRpdHkuYmFkSW5wdXQhPT0hMCYmdm9pZCAwPT09Yi5hdHRyKFwicGxhY2Vob2xkZXJcIikmJihjKz1cIiwgbGFiZWxcIiksYi5zaWJsaW5ncyhjKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx2YWxpZGF0ZV9maWVsZChiKX0pLHdpbmRvdy52YWxpZGF0ZV9maWVsZD1mdW5jdGlvbihhKXt2YXIgYj12b2lkIDAhPT1hLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSxjPXBhcnNlSW50KGEuYXR0cihcImRhdGEtbGVuZ3RoXCIpKSxkPWEudmFsKCkubGVuZ3RoOzA9PT1hLnZhbCgpLmxlbmd0aCYmYVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSExP2EuaGFzQ2xhc3MoXCJ2YWxpZGF0ZVwiKSYmKGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSk6YS5oYXNDbGFzcyhcInZhbGlkYXRlXCIpJiYoYS5pcyhcIjp2YWxpZFwiKSYmYiYmZDw9Y3x8YS5pcyhcIjp2YWxpZFwiKSYmIWI/KGEucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLGEuYWRkQ2xhc3MoXCJ2YWxpZFwiKSk6KGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLmFkZENsYXNzKFwiaW52YWxpZFwiKSkpfTt2YXIgZD1cImlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiO2EoZG9jdW1lbnQpLm9uKFwia2V5dXAucmFkaW9cIixkLGZ1bmN0aW9uKGIpe2lmKDk9PT1iLndoaWNoKXthKHRoaXMpLmFkZENsYXNzKFwidGFiYmVkXCIpO3ZhciBjPWEodGhpcyk7cmV0dXJuIHZvaWQgYy5vbmUoXCJibHVyXCIsZnVuY3Rpb24oYil7YSh0aGlzKS5yZW1vdmVDbGFzcyhcInRhYmJlZFwiKX0pfX0pO3ZhciBlPWEoXCIuaGlkZGVuZGl2XCIpLmZpcnN0KCk7ZS5sZW5ndGh8fChlPWEoJzxkaXYgY2xhc3M9XCJoaWRkZW5kaXYgY29tbW9uXCI+PC9kaXY+JyksYShcImJvZHlcIikuYXBwZW5kKGUpKTt2YXIgZj1cIi5tYXRlcmlhbGl6ZS10ZXh0YXJlYVwiO2EoZikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIsYi5oZWlnaHQoKSksYi5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsYi52YWwoKS5sZW5ndGgpfSksYShcImJvZHlcIikub24oXCJrZXl1cCBrZXlkb3duIGF1dG9yZXNpemVcIixmLGZ1bmN0aW9uKCl7YihhKHRoaXMpKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxmdW5jdGlvbigpe2Zvcih2YXIgYj1hKHRoaXMpLmNsb3Nlc3QoXCIuZmlsZS1maWVsZFwiKSxjPWIuZmluZChcImlucHV0LmZpbGUtcGF0aFwiKSxkPWEodGhpcylbMF0uZmlsZXMsZT1bXSxmPTA7ZjxkLmxlbmd0aDtmKyspZS5wdXNoKGRbZl0ubmFtZSk7Yy52YWwoZS5qb2luKFwiLCBcIikpLGMudHJpZ2dlcihcImNoYW5nZVwiKX0pO3ZhciBnPVwiaW5wdXRbdHlwZT1yYW5nZV1cIixoPSExO2EoZykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTthKHRoaXMpLmFmdGVyKGIpfSk7dmFyIGk9ZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5wYXJlbnQoKS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLGM9LTcrYitcInB4XCI7YS52ZWxvY2l0eSh7aGVpZ2h0OlwiMzBweFwiLHdpZHRoOlwiMzBweFwiLHRvcDpcIi0zMHB4XCIsbWFyZ2luTGVmdDpjfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRFeHBvXCJ9KX0saj1mdW5jdGlvbihhKXt2YXIgYj1hLndpZHRoKCktMTUsYz1wYXJzZUZsb2F0KGEuYXR0cihcIm1heFwiKSksZD1wYXJzZUZsb2F0KGEuYXR0cihcIm1pblwiKSksZT0ocGFyc2VGbG9hdChhLnZhbCgpKS1kKS8oYy1kKTtyZXR1cm4gZSpifSxrPVwiLnJhbmdlLWZpZWxkXCI7YShkb2N1bWVudCkub24oXCJjaGFuZ2VcIixnLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuc2libGluZ3MoXCIudGh1bWJcIik7Yy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYSh0aGlzKS52YWwoKSksYy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKTt2YXIgZD1qKGEodGhpcykpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGQpfSksYShkb2N1bWVudCkub24oXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLGcsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5zaWJsaW5ncyhcIi50aHVtYlwiKTtpZihjLmxlbmd0aDw9MCYmKGM9YSgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpLGEodGhpcykuYWZ0ZXIoYykpLGMuZmluZChcIi52YWx1ZVwiKS5odG1sKGEodGhpcykudmFsKCkpLGg9ITAsYSh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpLFwiaW5wdXRcIiE9PWIudHlwZSl7dmFyIGQ9aihhKHRoaXMpKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixkKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNldXAgdG91Y2hlbmRcIixrLGZ1bmN0aW9uKCl7aD0hMSxhKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJpbnB1dCBtb3VzZW1vdmUgdG91Y2htb3ZlXCIsayxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLmNoaWxkcmVuKFwiLnRodW1iXCIpLGQ9YSh0aGlzKS5maW5kKGcpO2lmKGgpe2MuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyk7dmFyIGU9aihkKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixlKSxjLmZpbmQoXCIudmFsdWVcIikuaHRtbChjLnNpYmxpbmdzKGcpLnZhbCgpKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlb3V0IHRvdWNobGVhdmVcIixrLGZ1bmN0aW9uKCl7aWYoIWgpe3ZhciBiPWEodGhpcykuY2hpbGRyZW4oXCIudGh1bWJcIiksYz1wYXJzZUludChhKHRoaXMpLmNzcyhcInBhZGRpbmctbGVmdFwiKSksZD03K2MrXCJweFwiO2IuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJmIudmVsb2NpdHkoe2hlaWdodDpcIjBcIix3aWR0aDpcIjBcIix0b3A6XCIxMHB4XCIsbWFyZ2luTGVmdDpkfSx7ZHVyYXRpb246MTAwfSksYi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX19KSxhLmZuLmF1dG9jb21wbGV0ZT1mdW5jdGlvbihiKXt2YXIgYz17ZGF0YTp7fSxsaW1pdDoxLzAsb25BdXRvY29tcGxldGU6bnVsbCxtaW5MZW5ndGg6MX07cmV0dXJuIGI9YS5leHRlbmQoYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYyxkPWEodGhpcyksZT1iLmRhdGEsZj0wLGc9LTEsaD1kLmNsb3Nlc3QoXCIuaW5wdXQtZmllbGRcIik7aWYoIWEuaXNFbXB0eU9iamVjdChlKSl7dmFyIGksaj1hKCc8dWwgY2xhc3M9XCJhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50XCI+PC91bD4nKTtoLmxlbmd0aD8oaT1oLmNoaWxkcmVuKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikuZmlyc3QoKSxpLmxlbmd0aHx8aC5hcHBlbmQoaikpOihpPWQubmV4dChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLGkubGVuZ3RofHxkLmFmdGVyKGopKSxpLmxlbmd0aCYmKGo9aSk7dmFyIGs9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCJpbWdcIiksZD1iLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJcIithLnRvTG93ZXJDYXNlKCkpLGU9ZCthLmxlbmd0aC0xLGY9Yi50ZXh0KCkuc2xpY2UoMCxkKSxnPWIudGV4dCgpLnNsaWNlKGQsZSsxKSxoPWIudGV4dCgpLnNsaWNlKGUrMSk7Yi5odG1sKFwiPHNwYW4+XCIrZitcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlwiK2crXCI8L3NwYW4+XCIraCtcIjwvc3Bhbj5cIiksYy5sZW5ndGgmJmIucHJlcGVuZChjKX0sbD1mdW5jdGlvbigpe2c9LTEsai5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0sbT1mdW5jdGlvbigpe2ouZW1wdHkoKSxsKCksYz12b2lkIDB9O2Qub2ZmKFwiYmx1ci5hdXRvY29tcGxldGVcIikub24oXCJibHVyLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKCl7bSgpfSksZC5vZmYoXCJrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlXCIpLm9uKFwia2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGcpe2Y9MDt2YXIgaD1kLnZhbCgpLnRvTG93ZXJDYXNlKCk7aWYoMTMhPT1nLndoaWNoJiYzOCE9PWcud2hpY2gmJjQwIT09Zy53aGljaCl7aWYoYyE9PWgmJihtKCksaC5sZW5ndGg+PWIubWluTGVuZ3RoKSlmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpJiZpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihoKSE9PS0xJiZpLnRvTG93ZXJDYXNlKCkhPT1oKXtpZihmPj1iLmxpbWl0KWJyZWFrO3ZhciBsPWEoXCI8bGk+PC9saT5cIik7ZVtpXT9sLmFwcGVuZCgnPGltZyBzcmM9XCInK2VbaV0rJ1wiIGNsYXNzPVwicmlnaHQgY2lyY2xlXCI+PHNwYW4+JytpK1wiPC9zcGFuPlwiKTpsLmFwcGVuZChcIjxzcGFuPlwiK2krXCI8L3NwYW4+XCIpLGouYXBwZW5kKGwpLGsoaCxsKSxmKyt9Yz1ofX0pLGQub2ZmKFwia2V5ZG93bi5hdXRvY29tcGxldGVcIikub24oXCJrZXlkb3duLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBiLGM9YS53aGljaCxkPWouY2hpbGRyZW4oXCJsaVwiKS5sZW5ndGgsZT1qLmNoaWxkcmVuKFwiLmFjdGl2ZVwiKS5maXJzdCgpO3JldHVybiAxMz09PWMmJmc+PTA/KGI9ai5jaGlsZHJlbihcImxpXCIpLmVxKGcpLHZvaWQoYi5sZW5ndGgmJihiLnRyaWdnZXIoXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlXCIpLGEucHJldmVudERlZmF1bHQoKSkpKTp2b2lkKDM4IT09YyYmNDAhPT1jfHwoYS5wcmV2ZW50RGVmYXVsdCgpLFxuMzg9PT1jJiZnPjAmJmctLSw0MD09PWMmJmc8ZC0xJiZnKyssZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnPj0wJiZqLmNoaWxkcmVuKFwibGlcIikuZXEoZykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpKX0pLGoub24oXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlXCIsXCJsaVwiLGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKS50ZXh0KCkudHJpbSgpO2QudmFsKGMpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxtKCksXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkF1dG9jb21wbGV0ZSYmYi5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsYyl9KX19KX19KSxhLmZuLm1hdGVyaWFsX3NlbGVjdD1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEsYixjKXt2YXIgZT1hLmluZGV4T2YoYiksZj1lPT09LTE7cmV0dXJuIGY/YS5wdXNoKGIpOmEuc3BsaWNlKGUsMSksYy5zaWJsaW5ncyhcInVsLmRyb3Bkb3duLWNvbnRlbnRcIikuZmluZChcImxpOm5vdCgub3B0Z3JvdXApXCIpLmVxKGIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLGMuZmluZChcIm9wdGlvblwiKS5lcShiKS5wcm9wKFwic2VsZWN0ZWRcIixmKSxkKGEsYyksZn1mdW5jdGlvbiBkKGEsYil7Zm9yKHZhciBjPVwiXCIsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyl7dmFyIGY9Yi5maW5kKFwib3B0aW9uXCIpLmVxKGFbZF0pLnRleHQoKTtjKz0wPT09ZD9mOlwiLCBcIitmfVwiXCI9PT1jJiYoYz1iLmZpbmQoXCJvcHRpb246ZGlzYWJsZWRcIikuZXEoMCkudGV4dCgpKSxiLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChjKX1hKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpO2lmKCFkLmhhc0NsYXNzKFwiYnJvd3Nlci1kZWZhdWx0XCIpKXt2YXIgZT0hIWQuYXR0cihcIm11bHRpcGxlXCIpLGY9ZC5kYXRhKFwic2VsZWN0LWlkXCIpO2lmKGYmJihkLnBhcmVudCgpLmZpbmQoXCJzcGFuLmNhcmV0XCIpLnJlbW92ZSgpLGQucGFyZW50KCkuZmluZChcImlucHV0XCIpLnJlbW92ZSgpLGQudW53cmFwKCksYShcInVsI3NlbGVjdC1vcHRpb25zLVwiK2YpLnJlbW92ZSgpKSxcImRlc3Ryb3lcIj09PWIpcmV0dXJuIHZvaWQgZC5kYXRhKFwic2VsZWN0LWlkXCIsbnVsbCkucmVtb3ZlQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgZz1NYXRlcmlhbGl6ZS5ndWlkKCk7ZC5kYXRhKFwic2VsZWN0LWlkXCIsZyk7dmFyIGg9YSgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7aC5hZGRDbGFzcyhkLmF0dHIoXCJjbGFzc1wiKSk7dmFyIGk9YSgnPHVsIGlkPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcrKGU/XCJtdWx0aXBsZS1zZWxlY3QtZHJvcGRvd25cIjpcIlwiKSsnXCI+PC91bD4nKSxqPWQuY2hpbGRyZW4oXCJvcHRpb24sIG9wdGdyb3VwXCIpLGs9W10sbD0hMSxtPWQuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCl8fGQuZmluZChcIm9wdGlvbjpmaXJzdFwiKS5odG1sKCl8fFwiXCIsbj1mdW5jdGlvbihiLGMsZCl7dmFyIGY9Yy5pcyhcIjpkaXNhYmxlZFwiKT9cImRpc2FibGVkIFwiOlwiXCIsZz1cIm9wdGdyb3VwLW9wdGlvblwiPT09ZD9cIm9wdGdyb3VwLW9wdGlvbiBcIjpcIlwiLGg9ZT8nPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJytmK1wiLz48bGFiZWw+PC9sYWJlbD5cIjpcIlwiLGo9Yy5kYXRhKFwiaWNvblwiKSxrPWMuYXR0cihcImNsYXNzXCIpO2lmKGope3ZhciBsPVwiXCI7cmV0dXJuIGsmJihsPScgY2xhc3M9XCInK2srJ1wiJyksaS5hcHBlbmQoYSgnPGxpIGNsYXNzPVwiJytmK2crJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJytqKydcIicrbCtcIj48c3Bhbj5cIitoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKSwhMH1pLmFwcGVuZChhKCc8bGkgY2xhc3M9XCInK2YrZysnXCI+PHNwYW4+JytoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKX07ai5sZW5ndGgmJmouZWFjaChmdW5jdGlvbigpe2lmKGEodGhpcykuaXMoXCJvcHRpb25cIikpZT9uKGQsYSh0aGlzKSxcIm11bHRpcGxlXCIpOm4oZCxhKHRoaXMpKTtlbHNlIGlmKGEodGhpcykuaXMoXCJvcHRncm91cFwiKSl7dmFyIGI9YSh0aGlzKS5jaGlsZHJlbihcIm9wdGlvblwiKTtpLmFwcGVuZChhKCc8bGkgY2xhc3M9XCJvcHRncm91cFwiPjxzcGFuPicrYSh0aGlzKS5hdHRyKFwibGFiZWxcIikrXCI8L3NwYW4+PC9saT5cIikpLGIuZWFjaChmdW5jdGlvbigpe24oZCxhKHRoaXMpLFwib3B0Z3JvdXAtb3B0aW9uXCIpfSl9fSksaS5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZWFjaChmdW5jdGlvbihmKXthKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGcpe2lmKCFhKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikmJiFhKHRoaXMpLmhhc0NsYXNzKFwib3B0Z3JvdXBcIikpe3ZhciBoPSEwO2U/KGEoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsdGhpcykucHJvcChcImNoZWNrZWRcIixmdW5jdGlvbihhLGIpe3JldHVybiFifSksaD1jKGssZixkKSxxLnRyaWdnZXIoXCJmb2N1c1wiKSk6KGkuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikscS52YWwoYSh0aGlzKS50ZXh0KCkpKSxyKGksYSh0aGlzKSksZC5maW5kKFwib3B0aW9uXCIpLmVxKGYpLnByb3AoXCJzZWxlY3RlZFwiLGgpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYiYmYigpfWcuc3RvcFByb3BhZ2F0aW9uKCl9KX0pLGQud3JhcChoKTt2YXIgbz1hKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtkLmlzKFwiOmRpc2FibGVkXCIpJiZvLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7dmFyIHA9bS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpLHE9YSgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnKyhkLmlzKFwiOmRpc2FibGVkXCIpP1wiZGlzYWJsZWRcIjpcIlwiKSsnIGRhdGEtYWN0aXZhdGVzPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiB2YWx1ZT1cIicrcCsnXCIvPicpO2QuYmVmb3JlKHEpLHEuYmVmb3JlKG8pLHEuYWZ0ZXIoaSksZC5pcyhcIjpkaXNhYmxlZFwiKXx8cS5kcm9wZG93bih7aG92ZXI6ITF9KSxkLmF0dHIoXCJ0YWJpbmRleFwiKSYmYShxWzBdKS5hdHRyKFwidGFiaW5kZXhcIixkLmF0dHIoXCJ0YWJpbmRleFwiKSksZC5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpLHEub24oe2ZvY3VzOmZ1bmN0aW9uKCl7aWYoYShcInVsLnNlbGVjdC1kcm9wZG93blwiKS5ub3QoaVswXSkuaXMoXCI6dmlzaWJsZVwiKSYmYShcImlucHV0LnNlbGVjdC1kcm9wZG93blwiKS50cmlnZ2VyKFwiY2xvc2VcIiksIWkuaXMoXCI6dmlzaWJsZVwiKSl7YSh0aGlzKS50cmlnZ2VyKFwib3BlblwiLFtcImZvY3VzXCJdKTt2YXIgYj1hKHRoaXMpLnZhbCgpO2UmJmIuaW5kZXhPZihcIixcIik+PTAmJihiPWIuc3BsaXQoXCIsXCIpWzBdKTt2YXIgYz1pLmZpbmQoXCJsaVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0pWzBdO3IoaSxjLCEwKX19LGNsaWNrOmZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9fSkscS5vbihcImJsdXJcIixmdW5jdGlvbigpe2V8fGEodGhpcykudHJpZ2dlcihcImNsb3NlXCIpLGkuZmluZChcImxpLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIil9KSxpLmhvdmVyKGZ1bmN0aW9uKCl7bD0hMH0sZnVuY3Rpb24oKXtsPSExfSksYSh3aW5kb3cpLm9uKHtjbGljazpmdW5jdGlvbigpe2UmJihsfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9fSksZSYmZC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmluZGV4KCk7YyhrLGIsZCksaS5maW5kKFwibGlcIikuZXEoYikuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCEwKX0pO3ZhciByPWZ1bmN0aW9uKGIsYyxkKXtpZihjKXtiLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO3ZhciBmPWEoYyk7Zi5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLGUmJiFkfHxpLnNjcm9sbFRvKGYpfX0scz1bXSx0PWZ1bmN0aW9uKGIpe2lmKDk9PWIud2hpY2gpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwiY2xvc2VcIik7aWYoNDA9PWIud2hpY2gmJiFpLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwib3BlblwiKTtpZigxMyE9Yi53aGljaHx8aS5pcyhcIjp2aXNpYmxlXCIpKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9U3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKS50b0xvd2VyQ2FzZSgpLGQ9WzksMTMsMjcsMzgsNDBdO2lmKGMmJmQuaW5kZXhPZihiLndoaWNoKT09PS0xKXtzLnB1c2goYyk7dmFyIGY9cy5qb2luKFwiXCIpLGc9aS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1hKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZil9KVswXTtnJiZyKGksZyl9aWYoMTM9PWIud2hpY2gpe3ZhciBoPWkuZmluZChcImxpLnNlbGVjdGVkOm5vdCguZGlzYWJsZWQpXCIpWzBdO2gmJihhKGgpLnRyaWdnZXIoXCJjbGlja1wiKSxlfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9NDA9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLmxlbmd0aD9pLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5uZXh0KFwibGk6bm90KC5kaXNhYmxlZClcIilbMF06aS5maW5kKFwibGk6bm90KC5kaXNhYmxlZClcIilbMF0scihpLGcpKSwyNz09Yi53aGljaCYmcS50cmlnZ2VyKFwiY2xvc2VcIiksMzg9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLnByZXYoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXSxnJiZyKGksZykpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPVtdfSwxZTMpfX07cS5vbihcImtleWRvd25cIix0KX19KX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e2luZGljYXRvcnM6ITAsaGVpZ2h0OjQwMCx0cmFuc2l0aW9uOjUwMCxpbnRlcnZhbDo2ZTN9O3JldHVybiBiPWEuZXh0ZW5kKGMsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyhhLGIpe2EuaGFzQ2xhc3MoXCJjZW50ZXItYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVk6LTEwMH0se2R1cmF0aW9uOmIscXVldWU6ITF9KTphLmhhc0NsYXNzKFwicmlnaHQtYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pOmEuaGFzQ2xhc3MoXCJsZWZ0LWFsaWduXCIpJiZhLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDotMTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pfWZ1bmN0aW9uIGQoYSl7YT49ai5sZW5ndGg/YT0wOmE8MCYmKGE9ai5sZW5ndGgtMSksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksayE9YSYmKGU9ai5lcShrKSwkY2FwdGlvbj1lLmZpbmQoXCIuY2FwdGlvblwiKSxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGUudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ai5ub3QoXCIuYWN0aXZlXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowLHRyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSxjKCRjYXB0aW9uLGIudHJhbnNpdGlvbiksYi5pbmRpY2F0b3JzJiZmLmVxKGspLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGouZXEoYSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLGRlbGF5OmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxiLmluZGljYXRvcnMmJmYuZXEoYSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfXZhciBlLGYsZyxoPWEodGhpcyksaT1oLmZpbmQoXCJ1bC5zbGlkZXNcIikuZmlyc3QoKSxqPWkuZmluZChcIj4gbGlcIiksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCk7ayE9LTEmJihlPWouZXEoaykpLGguaGFzQ2xhc3MoXCJmdWxsc2NyZWVuXCIpfHwoYi5pbmRpY2F0b3JzP2guaGVpZ2h0KGIuaGVpZ2h0KzQwKTpoLmhlaWdodChiLmhlaWdodCksaS5oZWlnaHQoYi5oZWlnaHQpKSxqLmZpbmQoXCIuY2FwdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7YyhhKHRoaXMpLDApfSksai5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjthKHRoaXMpLmF0dHIoXCJzcmNcIikhPT1iJiYoYSh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIrYSh0aGlzKS5hdHRyKFwic3JjXCIpK1wiKVwiKSxhKHRoaXMpLmF0dHIoXCJzcmNcIixiKSl9KSxiLmluZGljYXRvcnMmJihmPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLGouZWFjaChmdW5jdGlvbihjKXt2YXIgZT1hKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7ZS5jbGljayhmdW5jdGlvbigpe3ZhciBjPWkucGFyZW50KCksZT1jLmZpbmQoYSh0aGlzKSkuaW5kZXgoKTtkKGUpLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpfSksZi5hcHBlbmQoZSl9KSxoLmFwcGVuZChmKSxmPWguZmluZChcInVsLmluZGljYXRvcnNcIikuZmluZChcImxpLmluZGljYXRvci1pdGVtXCIpKSxlP2Uuc2hvdygpOihqLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaz0wLGU9ai5lcShrKSxiLmluZGljYXRvcnMmJmYuZXEoaykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGUuZmluZChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCl7ZS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX0pLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGsrMSl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKTt2YXIgbD0hMSxtPSExLG49ITE7aC5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihhKXtpZihcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUpe2NsZWFySW50ZXJ2YWwoZyk7dmFyIGI9YS5nZXN0dXJlLmRpcmVjdGlvbixjPWEuZ2VzdHVyZS5kZWx0YVgsZD1hLmdlc3R1cmUudmVsb2NpdHlYLGU9YS5nZXN0dXJlLnZlbG9jaXR5WTskY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLE1hdGguYWJzKGQpPk1hdGguYWJzKGUpJiYkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpjfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLDQ9PT1iJiYoYz5oLmlubmVyV2lkdGgoKS8yfHxkPC0uNjUpP249ITA6Mj09PWImJihjPC0xKmguaW5uZXJXaWR0aCgpLzJ8fGQ+LjY1KSYmKG09ITApO3ZhciBmO20mJihmPSRjdXJyX3NsaWRlLm5leHQoKSwwPT09Zi5sZW5ndGgmJihmPWouZmlyc3QoKSksZi52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSksbiYmKGY9JGN1cnJfc2xpZGUucHJldigpLDA9PT1mLmxlbmd0aCYmKGY9ai5sYXN0KCkpLGYudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihhKXtcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUmJigkY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLGw9ITEsY3Vycl9pbmRleD1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksIW4mJiFtfHxqLmxlbmd0aDw9MT8kY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KTptPyhkKGN1cnJfaW5kZXgrMSksJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6LTEqaC5pbm5lcldpZHRoKCl9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpeyRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pKTpuJiYoZChjdXJyX2luZGV4LTEpLCRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmguaW5uZXJXaWR0aCgpfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXskY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSksbT0hMSxuPSExLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpKX0pLGgub24oXCJzbGlkZXJQYXVzZVwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKX0pLGgub24oXCJzbGlkZXJTdGFydFwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCl9KSxoLm9uKFwic2xpZGVyTmV4dFwiLGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrKzEpfSksaC5vbihcInNsaWRlclByZXZcIixmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoay0xKX0pfSl9LHBhdXNlOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUGF1c2VcIil9LHN0YXJ0OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyU3RhcnRcIil9LG5leHQ6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJOZXh0XCIpfSxwcmV2OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUHJldlwiKX19O2EuZm4uc2xpZGVyPWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50b29sdGlwXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkub24oXCJjbGljay5jYXJkXCIsXCIuY2FyZFwiLGZ1bmN0aW9uKGIpe2EodGhpcykuZmluZChcIj4gLmNhcmQtcmV2ZWFsXCIpLmxlbmd0aCYmKGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGVcIikpfHxhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGlcIikpP2EodGhpcykuZmluZChcIi5jYXJkLXJldmVhbFwiKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKHtkaXNwbGF5Olwibm9uZVwifSl9fSk6KGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZCAuYWN0aXZhdG9yXCIpKXx8YShiLnRhcmdldCkuaXMoYShcIi5jYXJkIC5hY3RpdmF0b3IgaVwiKSkpJiYoYShiLnRhcmdldCkuY2xvc2VzdChcIi5jYXJkXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksYSh0aGlzKS5maW5kKFwiLmNhcmQtcmV2ZWFsXCIpLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KS52ZWxvY2l0eShcInN0b3BcIiwhMSkudmVsb2NpdHkoe3RyYW5zbGF0ZVk6XCItMTAwJVwifSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIn0pKSl9KX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtkYXRhOltdLHBsYWNlaG9sZGVyOlwiXCIsc2Vjb25kYXJ5UGxhY2Vob2xkZXI6XCJcIixhdXRvY29tcGxldGVPcHRpb25zOnt9fTthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixcIi5jaGlwIC5jbG9zZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2xvc2VzdChcIi5jaGlwc1wiKTtjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIpfHxhKHRoaXMpLmNsb3Nlc3QoXCIuY2hpcFwiKS5yZW1vdmUoKX0pfSksYS5mbi5tYXRlcmlhbF9jaGlwPWZ1bmN0aW9uKGMpe3ZhciBkPXRoaXM7aWYodGhpcy4kZWw9YSh0aGlzKSx0aGlzLiRkb2N1bWVudD1hKGRvY3VtZW50KSx0aGlzLlNFTFM9e0NISVBTOlwiLmNoaXBzXCIsQ0hJUDpcIi5jaGlwXCIsSU5QVVQ6XCJpbnB1dFwiLERFTEVURTpcIi5tYXRlcmlhbC1pY29uc1wiLFNFTEVDVEVEX0NISVA6XCIuc2VsZWN0ZWRcIn0sXCJkYXRhXCI9PT1jKXJldHVybiB0aGlzLiRlbC5kYXRhKFwiY2hpcHNcIik7dmFyIGU9YS5leHRlbmQoe30sYixjKTtkLmhhc0F1dG9jb21wbGV0ZT0hYS5pc0VtcHR5T2JqZWN0KGUuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhKSx0aGlzLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYj0wO2QuJGVsLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGY9TWF0ZXJpYWxpemUuZ3VpZCgpO2QuY2hpcElkPWYsZS5kYXRhJiZlLmRhdGEgaW5zdGFuY2VvZiBBcnJheXx8KGUuZGF0YT1bXSksYy5kYXRhKFwiY2hpcHNcIixlLmRhdGEpLGMuYXR0cihcImRhdGEtaW5kZXhcIixiKSxjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIsITApLGMuaGFzQ2xhc3MoZC5TRUxTLkNISVBTKXx8Yy5hZGRDbGFzcyhcImNoaXBzXCIpLGQuY2hpcHMoYyxmKSxiKyt9KX0sdGhpcy5oYW5kbGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgYj1kLlNFTFM7ZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZm9jdXNcIixiLkNISVBTKS5vbihcImNsaWNrLmNoaXBzLWZvY3VzXCIsYi5DSElQUyxmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5maW5kKGIuSU5QVVQpLmZvY3VzKCl9KSxkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1zZWxlY3RcIixiLkNISVApLm9uKFwiY2xpY2suY2hpcHMtc2VsZWN0XCIsYi5DSElQLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpO2lmKGUubGVuZ3RoKXt2YXIgZj1lLmhhc0NsYXNzKFwic2VsZWN0ZWRcIiksZz1lLmNsb3Nlc3QoYi5DSElQUyk7YShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZnx8ZC5zZWxlY3RDaGlwKGUuaW5kZXgoKSxnKX19KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzXCIpLm9uKFwia2V5ZG93bi5jaGlwc1wiLGZ1bmN0aW9uKGMpe2lmKCFhKGMudGFyZ2V0KS5pcyhcImlucHV0LCB0ZXh0YXJlYVwiKSl7dmFyIGUsZj1kLiRkb2N1bWVudC5maW5kKGIuQ0hJUCtiLlNFTEVDVEVEX0NISVApLGc9Zi5jbG9zZXN0KGIuQ0hJUFMpLGg9Zi5zaWJsaW5ncyhiLkNISVApLmxlbmd0aDtpZihmLmxlbmd0aClpZig4PT09Yy53aGljaHx8NDY9PT1jLndoaWNoKXtjLnByZXZlbnREZWZhdWx0KCksZT1mLmluZGV4KCksZC5kZWxldGVDaGlwKGUsZyk7dmFyIGk9bnVsbDtlKzE8aD9pPWU6ZSE9PWgmJmUrMSE9PWh8fChpPWgtMSksaTwwJiYoaT1udWxsKSxudWxsIT09aSYmZC5zZWxlY3RDaGlwKGksZyksaHx8Zy5maW5kKFwiaW5wdXRcIikuZm9jdXMoKX1lbHNlIGlmKDM3PT09Yy53aGljaCl7aWYoZT1mLmluZGV4KCktMSxlPDApcmV0dXJuO2EoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGQuc2VsZWN0Q2hpcChlLGcpfWVsc2UgaWYoMzk9PT1jLndoaWNoKXtpZihlPWYuaW5kZXgoKSsxLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGU+aClyZXR1cm4gdm9pZCBnLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpO2Quc2VsZWN0Q2hpcChlLGcpfX19KSxkLiRkb2N1bWVudC5vZmYoXCJmb2N1c2luLmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImZvY3VzaW4uY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLmFkZENsYXNzKFwiZm9jdXNcIiksZC5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpfSksZC4kZG9jdW1lbnQub2ZmKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLnJlbW92ZUNsYXNzKFwiZm9jdXNcIiksZC5kYXRhKFwiY2hpcHNcIikubGVuZ3RofHxkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZC5zaWJsaW5ncyhcIi5wcmVmaXhcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZT1hKGMudGFyZ2V0KSxmPWUuY2xvc2VzdChiLkNISVBTKSxnPWYuY2hpbGRyZW4oYi5DSElQKS5sZW5ndGg7aWYoMTM9PT1jLndoaWNoKXtpZihkLmhhc0F1dG9jb21wbGV0ZSYmZi5maW5kKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikubGVuZ3RoJiZmLmZpbmQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5jaGlsZHJlbigpLmxlbmd0aClyZXR1cm47cmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxkLmFkZENoaXAoe3RhZzplLnZhbCgpfSxmKSx2b2lkIGUudmFsKFwiXCIpfWlmKCg4PT09Yy5rZXlDb2RlfHwzNz09PWMua2V5Q29kZSkmJlwiXCI9PT1lLnZhbCgpJiZnKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksZC5zZWxlY3RDaGlwKGctMSxmKSx2b2lkIGUuYmx1cigpfSksZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZGVsZXRlXCIsYi5DSElQUytcIiBcIitiLkRFTEVURSkub24oXCJjbGljay5jaGlwcy1kZWxldGVcIixiLkNISVBTK1wiIFwiK2IuREVMRVRFLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpLGY9ZS5jbG9zZXN0KGIuQ0hJUFMpLGc9ZS5jbG9zZXN0KGIuQ0hJUCk7Yy5zdG9wUHJvcGFnYXRpb24oKSxkLmRlbGV0ZUNoaXAoZy5pbmRleCgpLGYpLGYuZmluZChcImlucHV0XCIpLmZvY3VzKCl9KX0sdGhpcy5jaGlwcz1mdW5jdGlvbihiLGMpe2IuZW1wdHkoKSxiLmRhdGEoXCJjaGlwc1wiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYXBwZW5kKGQucmVuZGVyQ2hpcChhKSl9KSxiLmFwcGVuZChhKCc8aW5wdXQgaWQ9XCInK2MrJ1wiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiPicpKSxkLnNldFBsYWNlaG9sZGVyKGIpO3ZhciBmPWIubmV4dChcImxhYmVsXCIpO2YubGVuZ3RoJiYoZi5hdHRyKFwiZm9yXCIsYyksYi5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZmLmFkZENsYXNzKFwiYWN0aXZlXCIpKTt2YXIgZz1hKFwiI1wiK2MpO2QuaGFzQXV0b2NvbXBsZXRlJiYoZS5hdXRvY29tcGxldGVPcHRpb25zLm9uQXV0b2NvbXBsZXRlPWZ1bmN0aW9uKGEpe2QuYWRkQ2hpcCh7dGFnOmF9LGIpLGcudmFsKFwiXCIpLGcuZm9jdXMoKX0sZy5hdXRvY29tcGxldGUoZS5hdXRvY29tcGxldGVPcHRpb25zKSl9LHRoaXMucmVuZGVyQ2hpcD1mdW5jdGlvbihiKXtpZihiLnRhZyl7dmFyIGM9YSgnPGRpdiBjbGFzcz1cImNoaXBcIj48L2Rpdj4nKTtyZXR1cm4gYy50ZXh0KGIudGFnKSxjLmFwcGVuZChhKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+Y2xvc2U8L2k+JykpLGN9fSx0aGlzLnNldFBsYWNlaG9sZGVyPWZ1bmN0aW9uKGEpe2EuZGF0YShcImNoaXBzXCIpLmxlbmd0aCYmZS5wbGFjZWhvbGRlcj9hLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnBsYWNlaG9sZGVyKTohYS5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZlLnNlY29uZGFyeVBsYWNlaG9sZGVyJiZhLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnNlY29uZGFyeVBsYWNlaG9sZGVyKX0sdGhpcy5pc1ZhbGlkPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuZGF0YShcImNoaXBzXCIpLGQ9ITEsZT0wO2U8Yy5sZW5ndGg7ZSsrKWlmKGNbZV0udGFnPT09Yi50YWcpcmV0dXJuIHZvaWQoZD0hMCk7cmV0dXJuXCJcIiE9PWIudGFnJiYhZH0sdGhpcy5hZGRDaGlwPWZ1bmN0aW9uKGEsYil7aWYoZC5pc1ZhbGlkKGIsYSkpe2Zvcih2YXIgYz1kLnJlbmRlckNoaXAoYSksZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKyllLnB1c2goZltnXSk7ZS5wdXNoKGEpLGIuZGF0YShcImNoaXBzXCIsZSksYy5pbnNlcnRCZWZvcmUoYi5maW5kKFwiaW5wdXRcIikpLGIudHJpZ2dlcihcImNoaXAuYWRkXCIsYSksZC5zZXRQbGFjZWhvbGRlcihiKX19LHRoaXMuZGVsZXRlQ2hpcD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcImNoaXBzXCIpW2FdO2IuZmluZChcIi5jaGlwXCIpLmVxKGEpLnJlbW92ZSgpO2Zvcih2YXIgZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKylnIT09YSYmZS5wdXNoKGZbZ10pO2IuZGF0YShcImNoaXBzXCIsZSksYi50cmlnZ2VyKFwiY2hpcC5kZWxldGVcIixjKSxkLnNldFBsYWNlaG9sZGVyKGIpfSx0aGlzLnNlbGVjdENoaXA9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCIuY2hpcFwiKS5lcShhKTtjJiYhMT09PWMuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSYmKGMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKSxiLnRyaWdnZXIoXCJjaGlwLnNlbGVjdFwiLGIuZGF0YShcImNoaXBzXCIpW2FdKSl9LHRoaXMuZ2V0Q2hpcHNFbGVtZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIuZXEoYSl9LHRoaXMuaW5pdCgpLHRoaXMuaGFuZGxlRXZlbnRzKCl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ucHVzaHBpbj1mdW5jdGlvbihiKXt2YXIgYz17dG9wOjAsYm90dG9tOjEvMCxvZmZzZXQ6MH07cmV0dXJuXCJyZW1vdmVcIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpeyhpZD1hKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIpKSYmKGEod2luZG93KS5vZmYoXCJzY3JvbGwuXCIraWQpLGEodGhpcykucmVtb3ZlRGF0YShcInB1c2hwaW4taWRcIikucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wIHBpbm5lZCBwaW4tYm90dG9tXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSl9KSwhMSk6KGI9YS5leHRlbmQoYyxiKSwkaW5kZXg9MCx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEpe2EucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wXCIpLGEucmVtb3ZlQ2xhc3MoXCJwaW5uZWRcIiksYS5yZW1vdmVDbGFzcyhcInBpbi1ib3R0b21cIil9ZnVuY3Rpb24gZChkLGUpe2QuZWFjaChmdW5jdGlvbigpe2IudG9wPD1lJiZiLmJvdHRvbT49ZSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW5uZWRcIikmJihjKGEodGhpcykpLGEodGhpcykuY3NzKFwidG9wXCIsYi5vZmZzZXQpLGEodGhpcykuYWRkQ2xhc3MoXCJwaW5uZWRcIikpLGU8Yi50b3AmJiFhKHRoaXMpLmhhc0NsYXNzKFwicGluLXRvcFwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5jc3MoXCJ0b3BcIiwwKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLXRvcFwiKSksZT5iLmJvdHRvbSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW4tYm90dG9tXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLWJvdHRvbVwiKSxhKHRoaXMpLmNzcyhcInRvcFwiLGIuYm90dG9tLWcpKX0pfXZhciBlPU1hdGVyaWFsaXplLmd1aWQoKSxmPWEodGhpcyksZz1hKHRoaXMpLm9mZnNldCgpLnRvcDthKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIsZSksZChmLGEod2luZG93KS5zY3JvbGxUb3AoKSksYSh3aW5kb3cpLm9uKFwic2Nyb2xsLlwiK2UsZnVuY3Rpb24oKXt2YXIgYz1hKHdpbmRvdykuc2Nyb2xsVG9wKCkrYi5vZmZzZXQ7ZChmLGMpfSl9KSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YS5mbi5yZXZlcnNlPVtdLnJldmVyc2UsYShkb2N1bWVudCkub24oXCJtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKVwiLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyk7YihkKX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZS5maXhlZEFjdGlvbkJ0blwiLFwiLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhcilcIixmdW5jdGlvbihiKXt2YXIgZD1hKHRoaXMpO2MoZCl9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYkNsaWNrVG9nZ2xlXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhXCIsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCk7Zi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9jKGYpOmIoZil9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYlRvb2xiYXJcIixcIi5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgPiBhXCIsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKSxlPWMucGFyZW50KCk7ZChlKX0pfSksYS5mbi5leHRlbmQoe29wZW5GQUI6ZnVuY3Rpb24oKXtiKGEodGhpcykpfSxjbG9zZUZBQjpmdW5jdGlvbigpe2MoYSh0aGlzKSl9LG9wZW5Ub29sYmFyOmZ1bmN0aW9uKCl7ZChhKHRoaXMpKX0sY2xvc2VUb29sYmFyOmZ1bmN0aW9uKCl7ZShhKHRoaXMpKX19KTt2YXIgYj1mdW5jdGlvbihiKXt2YXIgYz1iO2lmKGMuaGFzQ2xhc3MoXCJhY3RpdmVcIik9PT0hMSl7dmFyIGQsZSxmPWMuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpO2Y9PT0hMD9lPTQwOmQ9NDAsYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KHtzY2FsZVk6XCIuNFwiLHNjYWxlWDpcIi40XCIsdHJhbnNsYXRlWTpkK1wicHhcIix0cmFuc2xhdGVYOmUrXCJweFwifSx7ZHVyYXRpb246MH0pO3ZhciBnPTA7Yy5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS5yZXZlcnNlKCkuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsc2NhbGVYOlwiMVwiLHNjYWxlWTpcIjFcIix0cmFuc2xhdGVZOlwiMFwiLHRyYW5zbGF0ZVg6XCIwXCJ9LHtkdXJhdGlvbjo4MCxkZWxheTpnfSksZys9NDB9KX19LGM9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPWEsZT1kLmhhc0NsYXNzKFwiaG9yaXpvbnRhbFwiKTtlPT09ITA/Yz00MDpiPTQwLGQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7ZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjBcIixzY2FsZVg6XCIuNFwiLHNjYWxlWTpcIi40XCIsdHJhbnNsYXRlWTpiK1wicHhcIix0cmFuc2xhdGVYOmMrXCJweFwifSx7ZHVyYXRpb246ODB9KX0sZD1mdW5jdGlvbihiKXtpZihcInRydWVcIiE9PWIuYXR0cihcImRhdGEtb3BlblwiKSl7dmFyIGMsZCxmLGc9d2luZG93LmlubmVyV2lkdGgsaD13aW5kb3cuaW5uZXJIZWlnaHQsaT1iWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGo9Yi5maW5kKFwiPiBhXCIpLmZpcnN0KCksaz1iLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+JyksbT1qLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7ai5hcHBlbmQobCksYz1pLmxlZnQtZy8yK2kud2lkdGgvMixkPWgtaS5ib3R0b20sZj1nL2wud2lkdGgoKSxiLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIixpLmJvdHRvbSksYi5hdHRyKFwiZGF0YS1vcmlnaW4tbGVmdFwiLGkubGVmdCksYi5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIixpLndpZHRoKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLGIuYXR0cihcImRhdGEtb3BlblwiLCEwKSxiLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJjZW50ZXJcIix3aWR0aDpcIjEwMCVcIixib3R0b206MCxsZWZ0OjAsdHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIitjK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGouY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVZKFwiKy1kK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGwuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjptfSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHt0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnNcIn0pLGouY3NzKHtvdmVyZmxvdzpcInZpc2libGVcIix0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLFwiYmFja2dyb3VuZC1jb2xvclwiOm19KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoXCIrZitcIilcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCJ9KSxrLmZpbmQoXCI+IGxpID4gYVwiKS5jc3Moe29wYWNpdHk6MX0pLGEod2luZG93KS5vbihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbigpe2UoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpfSksYShkb2N1bWVudCkub24oXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5jbG9zZXN0KGspLmxlbmd0aHx8KGUoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpKX0pfSwxMDApfSwwKX19LGU9ZnVuY3Rpb24oYSl7aWYoXCJ0cnVlXCI9PT1hLmF0dHIoXCJkYXRhLW9wZW5cIikpe3ZhciBiLGMsZCxlPXdpbmRvdy5pbm5lcldpZHRoLGY9d2luZG93LmlubmVySGVpZ2h0LGc9YS5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIiksaD1hLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIiksaT1hLmF0dHIoXCJkYXRhLW9yaWdpbi1sZWZ0XCIpLGo9YS5maW5kKFwiPiAuYnRuLWZsb2F0aW5nXCIpLmZpcnN0KCksaz1hLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hLmZpbmQoXCIuZmFiLWJhY2tkcm9wXCIpLG09ai5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO2I9aS1lLzIrZy8yLGM9Zi1oLGQ9ZS9sLndpZHRoKCksYS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhLmF0dHIoXCJkYXRhLW9wZW5cIiwhMSksYS5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOlwidHJhbnNwYXJlbnRcIix0cmFuc2l0aW9uOlwibm9uZVwifSksai5jc3Moe3RyYW5zaXRpb246XCJub25lXCJ9KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoMClcIixcImJhY2tncm91bmQtY29sb3JcIjptfSksay5maW5kKFwiPiBsaSA+IGFcIikuY3NzKHtvcGFjaXR5OlwiXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZW1vdmUoKSxhLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJcIix3aWR0aDpcIlwiLGJvdHRvbTpcIlwiLGxlZnQ6XCJcIixvdmVyZmxvdzpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwiXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrLWIrXCJweCwwLDApXCJ9KSxqLmNzcyh7b3ZlcmZsb3c6XCJcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLFwiK2MrXCJweCwwKVwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2EuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLDAsMClcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksai5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIn0pfSwyMCl9LDIwMCl9fX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtNYXRlcmlhbGl6ZS5mYWRlSW5JbWFnZT1mdW5jdGlvbihiKXt2YXIgYztpZihcInN0cmluZ1wiPT10eXBlb2YgYiljPWEoYik7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYilyZXR1cm47Yz1ifWMuY3NzKHtvcGFjaXR5OjB9KSxhKGMpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo2NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLGEoYykudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjEzMDAscXVldWU6ITEsZWFzaW5nOlwic3dpbmdcIixzdGVwOmZ1bmN0aW9uKGIsYyl7Yy5zdGFydD0xMDA7dmFyIGQ9Yi8xMDAsZT0xNTAtKDEwMC1iKS8xLjc1O2U8MTAwJiYoZT0xMDApLGI+PTAmJmEodGhpcykuY3NzKHtcIi13ZWJraXQtZmlsdGVyXCI6XCJncmF5c2NhbGUoXCIrZCtcIilicmlnaHRuZXNzKFwiK2UrXCIlKVwiLGZpbHRlcjpcImdyYXlzY2FsZShcIitkK1wiKWJyaWdodG5lc3MoXCIrZStcIiUpXCJ9KX19KX0sTWF0ZXJpYWxpemUuc2hvd1N0YWdnZXJlZExpc3Q9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpYz1hKGIpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGIpcmV0dXJuO2M9Yn12YXIgZD0wO2MuZmluZChcImxpXCIpLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiLTEwMHB4XCJ9LHtkdXJhdGlvbjowfSksYy5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsdHJhbnNsYXRlWDpcIjBcIn0se2R1cmF0aW9uOjgwMCxkZWxheTpkLGVhc2luZzpbNjAsMTBdfSksZCs9MTIwfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7dmFyIGI9ITEsYz0hMTthKFwiLmRpc21pc3NhYmxlXCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGQpe2lmKFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKSxmPWQuZ2VzdHVyZS5kaXJlY3Rpb24sZz1kLmdlc3R1cmUuZGVsdGFYLGg9ZC5nZXN0dXJlLnZlbG9jaXR5WDtlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmd9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksND09PWYmJihnPmUuaW5uZXJXaWR0aCgpLzJ8fGg8LS43NSkmJihiPSEwKSwyPT09ZiYmKGc8LTEqZS5pbm5lcldpZHRoKCkvMnx8aD4uNzUpJiYoYz0hMCl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGQpe2lmKE1hdGguYWJzKGQuZ2VzdHVyZS5kZWx0YVgpPGEodGhpcykuaW5uZXJXaWR0aCgpLzImJihjPSExLGI9ITEpLFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKTtpZihifHxjKXt2YXIgZjtmPWI/ZS5pbm5lcldpZHRoKCk6LTEqZS5pbm5lcldpZHRoKCksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpmfSx7ZHVyYXRpb246MTAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlLmNzcyhcImJvcmRlclwiLFwibm9uZVwiKSxlLnZlbG9jaXR5KHtoZWlnaHQ6MCxwYWRkaW5nOjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2UucmVtb3ZlKCl9fSl9fSl9ZWxzZSBlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjoxMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pO2I9ITEsYz0hMX19KX0pfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9ITE7TWF0ZXJpYWxpemUuc2Nyb2xsRmlyZT1mdW5jdGlvbihhKXt2YXIgYz1mdW5jdGlvbigpe2Zvcih2YXIgYj13aW5kb3cucGFnZVlPZmZzZXQrd2luZG93LmlubmVySGVpZ2h0LGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuc2VsZWN0b3IsZj1kLm9mZnNldCxnPWQuY2FsbGJhY2ssaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKG51bGwhPT1oKXt2YXIgaT1oLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQ7aWYoYj5pK2YmJmQuZG9uZSE9PSEwKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBnKWcuY2FsbCh0aGlzLGgpO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGcpe3ZhciBqPW5ldyBGdW5jdGlvbihnKTtqKGgpfWQuZG9uZT0hMH19fX0sZD1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2MoKX0sYS50aHJvdHRsZXx8MTAwKTtifHwod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixkKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQpLGI9ITApLHNldFRpbWVvdXQoZCwwKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcInBpY2tlclwiLFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOnRoaXMuUGlja2VyPWEoalF1ZXJ5KX0oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihmLGcsaSxsKXtmdW5jdGlvbiBtKCl7cmV0dXJuIGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIseS5jb21wb25lbnQubm9kZXModC5vcGVuKSx2LmJveCksdi53cmFwKSx2LmZyYW1lKSx2LmhvbGRlcil9ZnVuY3Rpb24gbigpe3cuZGF0YShnLHkpLmFkZENsYXNzKHYuaW5wdXQpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKS52YWwody5kYXRhKFwidmFsdWVcIik/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdCk6Zi52YWx1ZSksdS5lZGl0YWJsZXx8dy5vbihcImZvY3VzLlwiK3QuaWQrXCIgY2xpY2suXCIrdC5pZCxmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCkseS4kcm9vdC5lcSgwKS5mb2N1cygpfSkub24oXCJrZXlkb3duLlwiK3QuaWQscSksZShmLHtoYXNwb3B1cDohMCxleHBhbmRlZDohMSxyZWFkb25seTohMSxvd25zOmYuaWQrXCJfcm9vdFwifSl9ZnVuY3Rpb24gbygpe3kuJHJvb3Qub24oe2tleWRvd246cSxmb2N1c2luOmZ1bmN0aW9uKGEpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5mb2N1c2VkKSxhLnN0b3BQcm9wYWdhdGlvbigpfSxcIm1vdXNlZG93biBjbGlja1wiOmZ1bmN0aW9uKGIpe3ZhciBjPWIudGFyZ2V0O2MhPXkuJHJvb3QuY2hpbGRyZW4oKVswXSYmKGIuc3RvcFByb3BhZ2F0aW9uKCksXCJtb3VzZWRvd25cIiE9Yi50eXBlfHxhKGMpLmlzKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb3B0aW9uXCIpfHwoYi5wcmV2ZW50RGVmYXVsdCgpLHkuJHJvb3QuZXEoMCkuZm9jdXMoKSkpfX0pLm9uKHtmb2N1czpmdW5jdGlvbigpe3cuYWRkQ2xhc3Modi50YXJnZXQpfSxibHVyOmZ1bmN0aW9uKCl7dy5yZW1vdmVDbGFzcyh2LnRhcmdldCl9fSkub24oXCJmb2N1cy50b09wZW5cIixyKS5vbihcImNsaWNrXCIsXCJbZGF0YS1waWNrXSwgW2RhdGEtbmF2XSwgW2RhdGEtY2xlYXJdLCBbZGF0YS1jbG9zZV1cIixmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoKSxkPWIuaGFzQ2xhc3Modi5uYXZEaXNhYmxlZCl8fGIuaGFzQ2xhc3Modi5kaXNhYmxlZCksZT1oKCk7ZT1lJiYoZS50eXBlfHxlLmhyZWYpLChkfHxlJiYhYS5jb250YWlucyh5LiRyb290WzBdLGUpKSYmeS4kcm9vdC5lcSgwKS5mb2N1cygpLCFkJiZjLm5hdj95LnNldChcImhpZ2hsaWdodFwiLHkuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0LHtuYXY6Yy5uYXZ9KTohZCYmXCJwaWNrXCJpbiBjP3kuc2V0KFwic2VsZWN0XCIsYy5waWNrKTpjLmNsZWFyP3kuY2xlYXIoKS5jbG9zZSghMCk6Yy5jbG9zZSYmeS5jbG9zZSghMCl9KSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9ZnVuY3Rpb24gcCgpe3ZhciBiO3UuaGlkZGVuTmFtZT09PSEwPyhiPWYubmFtZSxmLm5hbWU9XCJcIik6KGI9W1wic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblByZWZpeD91LmhpZGRlblByZWZpeDpcIlwiLFwic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblN1ZmZpeD91LmhpZGRlblN1ZmZpeDpcIl9zdWJtaXRcIl0sYj1iWzBdK2YubmFtZStiWzFdKSx5Ll9oaWRkZW49YSgnPGlucHV0IHR5cGU9aGlkZGVuIG5hbWU9XCInK2IrJ1wiJysody5kYXRhKFwidmFsdWVcIil8fGYudmFsdWU/JyB2YWx1ZT1cIicreS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCkrJ1wiJzpcIlwiKStcIj5cIilbMF0sdy5vbihcImNoYW5nZS5cIit0LmlkLGZ1bmN0aW9uKCl7eS5faGlkZGVuLnZhbHVlPWYudmFsdWU/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCk6XCJcIn0pLHUuY29udGFpbmVyP2EodS5jb250YWluZXIpLmFwcGVuZCh5Ll9oaWRkZW4pOncuYWZ0ZXIoeS5faGlkZGVuKX1mdW5jdGlvbiBxKGEpe3ZhciBiPWEua2V5Q29kZSxjPS9eKDh8NDYpJC8udGVzdChiKTtyZXR1cm4gMjc9PWI/KHkuY2xvc2UoKSwhMSk6dm9pZCgoMzI9PWJ8fGN8fCF0Lm9wZW4mJnkuY29tcG9uZW50LmtleVtiXSkmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSxjP3kuY2xlYXIoKS5jbG9zZSgpOnkub3BlbigpKSl9ZnVuY3Rpb24gcihhKXthLnN0b3BQcm9wYWdhdGlvbigpLFwiZm9jdXNcIj09YS50eXBlJiZ5LiRyb290LmFkZENsYXNzKHYuZm9jdXNlZCkseS5vcGVuKCl9aWYoIWYpcmV0dXJuIGI7dmFyIHM9ITEsdD17aWQ6Zi5pZHx8XCJQXCIrTWF0aC5hYnMofn4oTWF0aC5yYW5kb20oKSpuZXcgRGF0ZSkpfSx1PWk/YS5leHRlbmQoITAse30saS5kZWZhdWx0cyxsKTpsfHx7fSx2PWEuZXh0ZW5kKHt9LGIua2xhc3NlcygpLHUua2xhc3MpLHc9YShmKSx4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhcnQoKX0seT14LnByb3RvdHlwZT17Y29uc3RydWN0b3I6eCwkbm9kZTp3LHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHQmJnQuc3RhcnQ/eToodC5tZXRob2RzPXt9LHQuc3RhcnQ9ITAsdC5vcGVuPSExLHQudHlwZT1mLnR5cGUsZi5hdXRvZm9jdXM9Zj09aCgpLGYucmVhZE9ubHk9IXUuZWRpdGFibGUsZi5pZD1mLmlkfHx0LmlkLFwidGV4dFwiIT1mLnR5cGUmJihmLnR5cGU9XCJ0ZXh0XCIpLHkuY29tcG9uZW50PW5ldyBpKHksdSkseS4kcm9vdD1hKGIuXy5ub2RlKFwiZGl2XCIsbSgpLHYucGlja2VyLCdpZD1cIicrZi5pZCsnX3Jvb3RcIiB0YWJpbmRleD1cIjBcIicpKSxvKCksdS5mb3JtYXRTdWJtaXQmJnAoKSxuKCksdS5jb250YWluZXI/YSh1LmNvbnRhaW5lcikuYXBwZW5kKHkuJHJvb3QpOncuYWZ0ZXIoeS4kcm9vdCkseS5vbih7c3RhcnQ6eS5jb21wb25lbnQub25TdGFydCxyZW5kZXI6eS5jb21wb25lbnQub25SZW5kZXIsc3RvcDp5LmNvbXBvbmVudC5vblN0b3Asb3Blbjp5LmNvbXBvbmVudC5vbk9wZW4sY2xvc2U6eS5jb21wb25lbnQub25DbG9zZSxzZXQ6eS5jb21wb25lbnQub25TZXR9KS5vbih7c3RhcnQ6dS5vblN0YXJ0LHJlbmRlcjp1Lm9uUmVuZGVyLHN0b3A6dS5vblN0b3Asb3Blbjp1Lm9uT3BlbixjbG9zZTp1Lm9uQ2xvc2Usc2V0OnUub25TZXR9KSxzPWMoeS4kcm9vdC5jaGlsZHJlbigpWzBdKSxmLmF1dG9mb2N1cyYmeS5vcGVuKCkseS50cmlnZ2VyKFwic3RhcnRcIikudHJpZ2dlcihcInJlbmRlclwiKSl9LHJlbmRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYT95LiRyb290Lmh0bWwobSgpKTp5LiRyb290LmZpbmQoXCIuXCIrdi5ib3gpLmh0bWwoeS5jb21wb25lbnQubm9kZXModC5vcGVuKSkseS50cmlnZ2VyKFwicmVuZGVyXCIpfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIHQuc3RhcnQ/KHkuY2xvc2UoKSx5Ll9oaWRkZW4mJnkuX2hpZGRlbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHkuX2hpZGRlbikseS4kcm9vdC5yZW1vdmUoKSx3LnJlbW92ZUNsYXNzKHYuaW5wdXQpLnJlbW92ZURhdGEoZyksc2V0VGltZW91dChmdW5jdGlvbigpe3cub2ZmKFwiLlwiK3QuaWQpfSwwKSxmLnR5cGU9dC50eXBlLGYucmVhZE9ubHk9ITEseS50cmlnZ2VyKFwic3RvcFwiKSx0Lm1ldGhvZHM9e30sdC5zdGFydD0hMSx5KTp5fSxvcGVuOmZ1bmN0aW9uKGMpe3JldHVybiB0Lm9wZW4/eToody5hZGRDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMCksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QuYWRkQ2xhc3Modi5vcGVuZWQpLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCExKX0sMCksYyE9PSExJiYodC5vcGVuPSEwLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCIrPVwiK2QoKSkseS4kcm9vdC5lcSgwKS5mb2N1cygpLGoub24oXCJjbGljay5cIit0LmlkK1wiIGZvY3VzaW4uXCIrdC5pZCxmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtiIT1mJiZiIT1kb2N1bWVudCYmMyE9YS53aGljaCYmeS5jbG9zZShiPT09eS4kcm9vdC5jaGlsZHJlbigpWzBdKX0pLm9uKFwia2V5ZG93bi5cIit0LmlkLGZ1bmN0aW9uKGMpe3ZhciBkPWMua2V5Q29kZSxlPXkuY29tcG9uZW50LmtleVtkXSxmPWMudGFyZ2V0OzI3PT1kP3kuY2xvc2UoITApOmYhPXkuJHJvb3RbMF18fCFlJiYxMyE9ZD9hLmNvbnRhaW5zKHkuJHJvb3RbMF0sZikmJjEzPT1kJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGYuY2xpY2soKSk6KGMucHJldmVudERlZmF1bHQoKSxlP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmtleS5nbyx5LFtiLl8udHJpZ2dlcihlKV0pOnkuJHJvb3QuZmluZChcIi5cIit2LmhpZ2hsaWdodGVkKS5oYXNDbGFzcyh2LmRpc2FibGVkKXx8eS5zZXQoXCJzZWxlY3RcIix5LmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCkuY2xvc2UoKSl9KSkseS50cmlnZ2VyKFwib3BlblwiKSl9LGNsb3NlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoeS4kcm9vdC5vZmYoXCJmb2N1cy50b09wZW5cIikuZXEoMCkuZm9jdXMoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5vbihcImZvY3VzLnRvT3BlblwiLHIpfSwwKSksdy5yZW1vdmVDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMSksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5vcGVuZWQrXCIgXCIrdi5mb2N1c2VkKSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9LDApLHQub3Blbj8odC5vcGVuPSExLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcIlwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCItPVwiK2QoKSksai5vZmYoXCIuXCIrdC5pZCkseS50cmlnZ2VyKFwiY2xvc2VcIikpOnl9LGNsZWFyOmZ1bmN0aW9uKGEpe3JldHVybiB5LnNldChcImNsZWFyXCIsbnVsbCxhKX0sc2V0OmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGQ9ZyYmYS5pc1BsYWluT2JqZWN0KGMpP2M6ZHx8e30sYil7Z3x8KGhbYl09Yyk7Zm9yKGUgaW4gaClmPWhbZV0sZSBpbiB5LmNvbXBvbmVudC5pdGVtJiYodm9pZCAwPT09ZiYmKGY9bnVsbCkseS5jb21wb25lbnQuc2V0KGUsZixkKSksXCJzZWxlY3RcIiE9ZSYmXCJjbGVhclwiIT1lfHx3LnZhbChcImNsZWFyXCI9PWU/XCJcIjp5LmdldChlLHUuZm9ybWF0KSkudHJpZ2dlcihcImNoYW5nZVwiKTt5LnJlbmRlcigpfXJldHVybiBkLm11dGVkP3k6eS50cmlnZ2VyKFwic2V0XCIsaCl9LGdldDpmdW5jdGlvbihhLGMpe2lmKGE9YXx8XCJ2YWx1ZVwiLG51bGwhPXRbYV0pcmV0dXJuIHRbYV07aWYoXCJ2YWx1ZVN1Ym1pdFwiPT1hKXtpZih5Ll9oaWRkZW4pcmV0dXJuIHkuX2hpZGRlbi52YWx1ZTthPVwidmFsdWVcIn1pZihcInZhbHVlXCI9PWEpcmV0dXJuIGYudmFsdWU7aWYoYSBpbiB5LmNvbXBvbmVudC5pdGVtKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYyl7dmFyIGQ9eS5jb21wb25lbnQuZ2V0KGEpO3JldHVybiBkP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmZvcm1hdHMudG9TdHJpbmcseS5jb21wb25lbnQsW2MsZF0pOlwiXCJ9cmV0dXJuIHkuY29tcG9uZW50LmdldChhKX19LG9uOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGIpe2d8fChoW2JdPWMpO2ZvcihlIGluIGgpZj1oW2VdLGQmJihlPVwiX1wiK2UpLHQubWV0aG9kc1tlXT10Lm1ldGhvZHNbZV18fFtdLHQubWV0aG9kc1tlXS5wdXNoKGYpfXJldHVybiB5fSxvZmY6ZnVuY3Rpb24oKXt2YXIgYSxiLGM9YXJndW1lbnRzO2ZvcihhPTAsbmFtZXNDb3VudD1jLmxlbmd0aDthPG5hbWVzQ291bnQ7YSs9MSliPWNbYV0sYiBpbiB0Lm1ldGhvZHMmJmRlbGV0ZSB0Lm1ldGhvZHNbYl07cmV0dXJuIHl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgZD10Lm1ldGhvZHNbYV07ZCYmZC5tYXAoZnVuY3Rpb24oYSl7Yi5fLnRyaWdnZXIoYSx5LFtjXSl9KX07cmV0dXJuIGQoXCJfXCIrYSksZChhKSx5fX07cmV0dXJuIG5ldyB4fWZ1bmN0aW9uIGMoYSl7dmFyIGIsYz1cInBvc2l0aW9uXCI7cmV0dXJuIGEuY3VycmVudFN0eWxlP2I9YS5jdXJyZW50U3R5bGVbY106d2luZG93LmdldENvbXB1dGVkU3R5bGUmJihiPWdldENvbXB1dGVkU3R5bGUoYSlbY10pLFwiZml4ZWRcIj09Yn1mdW5jdGlvbiBkKCl7aWYoay5oZWlnaHQoKTw9aS5oZWlnaHQoKSlyZXR1cm4gMDt2YXIgYj1hKCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MTAwcHhcIiAvPicpLmFwcGVuZFRvKFwiYm9keVwiKSxjPWJbMF0ub2Zmc2V0V2lkdGg7Yi5jc3MoXCJvdmVyZmxvd1wiLFwic2Nyb2xsXCIpO3ZhciBkPWEoJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz4nKS5hcHBlbmRUbyhiKSxlPWRbMF0ub2Zmc2V0V2lkdGg7cmV0dXJuIGIucmVtb3ZlKCksYy1lfWZ1bmN0aW9uIGUoYixjLGQpe2lmKGEuaXNQbGFpbk9iamVjdChjKSlmb3IodmFyIGUgaW4gYylmKGIsZSxjW2VdKTtlbHNlIGYoYixjLGQpfWZ1bmN0aW9uIGYoYSxiLGMpe2Euc2V0QXR0cmlidXRlKChcInJvbGVcIj09Yj9cIlwiOlwiYXJpYS1cIikrYixjKX1mdW5jdGlvbiBnKGIsYyl7YS5pc1BsYWluT2JqZWN0KGIpfHwoYj17YXR0cmlidXRlOmN9KSxjPVwiXCI7Zm9yKHZhciBkIGluIGIpe3ZhciBlPShcInJvbGVcIj09ZD9cIlwiOlwiYXJpYS1cIikrZCxmPWJbZF07Yys9bnVsbD09Zj9cIlwiOmUrJz1cIicrYltkXSsnXCInfXJldHVybiBjfWZ1bmN0aW9uIGgoKXt0cnl7cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX12YXIgaT1hKHdpbmRvdyksaj1hKGRvY3VtZW50KSxrPWEoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtyZXR1cm4gYi5rbGFzc2VzPWZ1bmN0aW9uKGEpe3JldHVybiBhPWF8fFwicGlja2VyXCIse3BpY2tlcjphLG9wZW5lZDphK1wiLS1vcGVuZWRcIixmb2N1c2VkOmErXCItLWZvY3VzZWRcIixpbnB1dDphK1wiX19pbnB1dFwiLGFjdGl2ZTphK1wiX19pbnB1dC0tYWN0aXZlXCIsdGFyZ2V0OmErXCJfX2lucHV0LS10YXJnZXRcIixob2xkZXI6YStcIl9faG9sZGVyXCIsZnJhbWU6YStcIl9fZnJhbWVcIix3cmFwOmErXCJfX3dyYXBcIixib3g6YStcIl9fYm94XCJ9fSxiLl89e2dyb3VwOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVwiXCIsZT1iLl8udHJpZ2dlcihhLm1pbixhKTtlPD1iLl8udHJpZ2dlcihhLm1heCxhLFtlXSk7ZSs9YS5pKWM9Yi5fLnRyaWdnZXIoYS5pdGVtLGEsW2VdKSxkKz1iLl8ubm9kZShhLm5vZGUsY1swXSxjWzFdLGNbMl0pO3JldHVybiBkfSxub2RlOmZ1bmN0aW9uKGIsYyxkLGUpe3JldHVybiBjPyhjPWEuaXNBcnJheShjKT9jLmpvaW4oXCJcIik6YyxkPWQ/JyBjbGFzcz1cIicrZCsnXCInOlwiXCIsZT1lP1wiIFwiK2U6XCJcIixcIjxcIitiK2QrZStcIj5cIitjK1wiPC9cIitiK1wiPlwiKTpcIlwifSxsZWFkOmZ1bmN0aW9uKGEpe3JldHVybihhPDEwP1wiMFwiOlwiXCIpK2F9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5hcHBseShiLGN8fFtdKTphfSxkaWdpdHM6ZnVuY3Rpb24oYSl7cmV0dXJuL1xcZC8udGVzdChhWzFdKT8yOjF9LGlzRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJEYXRlXCIpPi0xJiZ0aGlzLmlzSW50ZWdlcihhLmdldERhdGUoKSl9LGlzSW50ZWdlcjpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJOdW1iZXJcIik+LTEmJmElMT09PTB9LGFyaWFBdHRyOmd9LGIuZXh0ZW5kPWZ1bmN0aW9uKGMsZCl7YS5mbltjXT1mdW5jdGlvbihlLGYpe3ZhciBnPXRoaXMuZGF0YShjKTtyZXR1cm5cInBpY2tlclwiPT1lP2c6ZyYmXCJzdHJpbmdcIj09dHlwZW9mIGU/Yi5fLnRyaWdnZXIoZ1tlXSxnLFtmXSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGY9YSh0aGlzKTtmLmRhdGEoYyl8fG5ldyBiKHRoaXMsYyxkLGUpfSl9LGEuZm5bY10uZGVmYXVsdHM9ZC5kZWZhdWx0c30sYn0pLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicGlja2VyXCIsXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwiLi9waWNrZXIuanNcIikscmVxdWlyZShcImpxdWVyeVwiKSk6YShQaWNrZXIsalF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7dmFyIGM9dGhpcyxkPWEuJG5vZGVbMF0sZT1kLnZhbHVlLGY9YS4kbm9kZS5kYXRhKFwidmFsdWVcIiksZz1mfHxlLGg9Zj9iLmZvcm1hdFN1Ym1pdDpiLmZvcm1hdCxpPWZ1bmN0aW9uKCl7cmV0dXJuIGQuY3VycmVudFN0eWxlP1wicnRsXCI9PWQuY3VycmVudFN0eWxlLmRpcmVjdGlvbjpcInJ0bFwiPT1nZXRDb21wdXRlZFN0eWxlKGEuJHJvb3RbMF0pLmRpcmVjdGlvbn07Yy5zZXR0aW5ncz1iLGMuJG5vZGU9YS4kbm9kZSxjLnF1ZXVlPXttaW46XCJtZWFzdXJlIGNyZWF0ZVwiLG1heDpcIm1lYXN1cmUgY3JlYXRlXCIsbm93Olwibm93IGNyZWF0ZVwiLHNlbGVjdDpcInBhcnNlIGNyZWF0ZSB2YWxpZGF0ZVwiLGhpZ2hsaWdodDpcInBhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZVwiLHZpZXc6XCJwYXJzZSBjcmVhdGUgdmFsaWRhdGUgdmlld3NldFwiLGRpc2FibGU6XCJkZWFjdGl2YXRlXCIsZW5hYmxlOlwiYWN0aXZhdGVcIn0sYy5pdGVtPXt9LGMuaXRlbS5jbGVhcj1udWxsLGMuaXRlbS5kaXNhYmxlPShiLmRpc2FibGV8fFtdKS5zbGljZSgwKSxjLml0ZW0uZW5hYmxlPS1mdW5jdGlvbihhKXtyZXR1cm4gYVswXT09PSEwP2Euc2hpZnQoKTotMX0oYy5pdGVtLmRpc2FibGUpLGMuc2V0KFwibWluXCIsYi5taW4pLnNldChcIm1heFwiLGIubWF4KS5zZXQoXCJub3dcIiksZz9jLnNldChcInNlbGVjdFwiLGcse2Zvcm1hdDpofSk6Yy5zZXQoXCJzZWxlY3RcIixudWxsKS5zZXQoXCJoaWdobGlnaHRcIixjLml0ZW0ubm93KSxjLmtleT17NDA6NywzODotNywzOTpmdW5jdGlvbigpe3JldHVybiBpKCk/LTE6MX0sMzc6ZnVuY3Rpb24oKXtyZXR1cm4gaSgpPzE6LTF9LGdvOmZ1bmN0aW9uKGEpe3ZhciBiPWMuaXRlbS5oaWdobGlnaHQsZD1uZXcgRGF0ZShiLnllYXIsYi5tb250aCxiLmRhdGUrYSk7Yy5zZXQoXCJoaWdobGlnaHRcIixkLHtpbnRlcnZhbDphfSksdGhpcy5yZW5kZXIoKX19LGEub24oXCJyZW5kZXJcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdE1vbnRoKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYS5nZXQoXCJ2aWV3XCIpLnllYXIsYyxhLmdldChcImhpZ2hsaWdodFwiKS5kYXRlXSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0TW9udGgpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RZZWFyKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYyxhLmdldChcInZpZXdcIikubW9udGgsYS5nZXQoXCJoaWdobGlnaHRcIikuZGF0ZV0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdFllYXIpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KX0sMSkub24oXCJvcGVuXCIsZnVuY3Rpb24oKXt2YXIgZD1cIlwiO2MuZGlzYWJsZWQoYy5nZXQoXCJub3dcIikpJiYoZD1cIjpub3QoLlwiK2Iua2xhc3MuYnV0dG9uVG9kYXkrXCIpXCIpLGEuJHJvb3QuZmluZChcImJ1dHRvblwiK2QrXCIsIHNlbGVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwhMSl9LDEpLm9uKFwiY2xvc2VcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcImJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCEwKX0sMSl9dmFyIGQ9NyxlPTYsZj1hLl87Yy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9ZC5pdGVtO3JldHVybiBudWxsPT09Yj8oXCJjbGVhclwiPT1hJiYoYT1cInNlbGVjdFwiKSxlW2FdPWIsZCk6KGVbXCJlbmFibGVcIj09YT9cImRpc2FibGVcIjpcImZsaXBcIj09YT9cImVuYWJsZVwiOmFdPWQucXVldWVbYV0uc3BsaXQoXCIgXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gYj1kW2VdKGEsYixjKX0pLnBvcCgpLFwic2VsZWN0XCI9PWE/ZC5zZXQoXCJoaWdobGlnaHRcIixlLnNlbGVjdCxjKTpcImhpZ2hsaWdodFwiPT1hP2Quc2V0KFwidmlld1wiLGUuaGlnaGxpZ2h0LGMpOmEubWF0Y2goL14oZmxpcHxtaW58bWF4fGRpc2FibGV8ZW5hYmxlKSQvKSYmKGUuc2VsZWN0JiZkLmRpc2FibGVkKGUuc2VsZWN0KSYmZC5zZXQoXCJzZWxlY3RcIixlLnNlbGVjdCxjKSxcbmUuaGlnaGxpZ2h0JiZkLmRpc2FibGVkKGUuaGlnaGxpZ2h0KSYmZC5zZXQoXCJoaWdobGlnaHRcIixlLmhpZ2hsaWdodCxjKSksZCl9LGMucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVtW2FdfSxjLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGc9dGhpcztyZXR1cm4gYz12b2lkIDA9PT1jP2E6YyxjPT0tKDEvMCl8fGM9PTEvMD9lPWM6Yi5pc1BsYWluT2JqZWN0KGMpJiZmLmlzSW50ZWdlcihjLnBpY2spP2M9Yy5vYmo6Yi5pc0FycmF5KGMpPyhjPW5ldyBEYXRlKGNbMF0sY1sxXSxjWzJdKSxjPWYuaXNEYXRlKGMpP2M6Zy5jcmVhdGUoKS5vYmopOmM9Zi5pc0ludGVnZXIoYyl8fGYuaXNEYXRlKGMpP2cubm9ybWFsaXplKG5ldyBEYXRlKGMpLGQpOmcubm93KGEsYyxkKSx7eWVhcjplfHxjLmdldEZ1bGxZZWFyKCksbW9udGg6ZXx8Yy5nZXRNb250aCgpLGRhdGU6ZXx8Yy5nZXREYXRlKCksZGF5OmV8fGMuZ2V0RGF5KCksb2JqOmV8fGMscGljazplfHxjLmdldFRpbWUoKX19LGMucHJvdG90eXBlLmNyZWF0ZVJhbmdlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09ITB8fGIuaXNBcnJheShhKXx8Zi5pc0RhdGUoYSk/ZC5jcmVhdGUoYSk6YX07cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfHwoYT1lKGEpKSxmLmlzSW50ZWdlcihjKXx8KGM9ZShjKSksZi5pc0ludGVnZXIoYSkmJmIuaXNQbGFpbk9iamVjdChjKT9hPVtjLnllYXIsYy5tb250aCxjLmRhdGUrYV06Zi5pc0ludGVnZXIoYykmJmIuaXNQbGFpbk9iamVjdChhKSYmKGM9W2EueWVhcixhLm1vbnRoLGEuZGF0ZStjXSkse2Zyb206ZShhKSx0bzplKGMpfX0sYy5wcm90b3R5cGUud2l0aGluUmFuZ2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT10aGlzLmNyZWF0ZVJhbmdlKGEuZnJvbSxhLnRvKSxiLnBpY2s+PWEuZnJvbS5waWNrJiZiLnBpY2s8PWEudG8ucGlja30sYy5wcm90b3R5cGUub3ZlcmxhcFJhbmdlcz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGE9Yy5jcmVhdGVSYW5nZShhLmZyb20sYS50byksYj1jLmNyZWF0ZVJhbmdlKGIuZnJvbSxiLnRvKSxjLndpdGhpblJhbmdlKGEsYi5mcm9tKXx8Yy53aXRoaW5SYW5nZShhLGIudG8pfHxjLndpdGhpblJhbmdlKGIsYS5mcm9tKXx8Yy53aXRoaW5SYW5nZShiLGEudG8pfSxjLnByb3RvdHlwZS5ub3c9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPW5ldyBEYXRlLGMmJmMucmVsJiZiLnNldERhdGUoYi5nZXREYXRlKCkrYy5yZWwpLHRoaXMubm9ybWFsaXplKGIsYyl9LGMucHJvdG90eXBlLm5hdmlnYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmLGcsaCxpPWIuaXNBcnJheShjKSxqPWIuaXNQbGFpbk9iamVjdChjKSxrPXRoaXMuaXRlbS52aWV3O2lmKGl8fGope2ZvcihqPyhmPWMueWVhcixnPWMubW9udGgsaD1jLmRhdGUpOihmPStjWzBdLGc9K2NbMV0saD0rY1syXSksZCYmZC5uYXYmJmsmJmsubW9udGghPT1nJiYoZj1rLnllYXIsZz1rLm1vbnRoKSxlPW5ldyBEYXRlKGYsZysoZCYmZC5uYXY/ZC5uYXY6MCksMSksZj1lLmdldEZ1bGxZZWFyKCksZz1lLmdldE1vbnRoKCk7bmV3IERhdGUoZixnLGgpLmdldE1vbnRoKCkhPT1nOyloLT0xO2M9W2YsZyxoXX1yZXR1cm4gY30sYy5wcm90b3R5cGUubm9ybWFsaXplPWZ1bmN0aW9uKGEpe3JldHVybiBhLnNldEhvdXJzKDAsMCwwLDApLGF9LGMucHJvdG90eXBlLm1lYXN1cmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBiP1wic3RyaW5nXCI9PXR5cGVvZiBiP2I9Yy5wYXJzZShhLGIpOmYuaXNJbnRlZ2VyKGIpJiYoYj1jLm5vdyhhLGIse3JlbDpifSkpOmI9XCJtaW5cIj09YT8tKDEvMCk6MS8wLGJ9LGMucHJvdG90eXBlLnZpZXdzZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5jcmVhdGUoW2IueWVhcixiLm1vbnRoLDFdKX0sYy5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGcsaCxpLGo9dGhpcyxrPWMsbD1kJiZkLmludGVydmFsP2QuaW50ZXJ2YWw6MSxtPWouaXRlbS5lbmFibGU9PT0tMSxuPWouaXRlbS5taW4sbz1qLml0ZW0ubWF4LHA9bSYmai5pdGVtLmRpc2FibGUuZmlsdGVyKGZ1bmN0aW9uKGEpe2lmKGIuaXNBcnJheShhKSl7dmFyIGQ9ai5jcmVhdGUoYSkucGljaztkPGMucGljaz9lPSEwOmQ+Yy5waWNrJiYoZz0hMCl9cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfSkubGVuZ3RoO2lmKCghZHx8IWQubmF2KSYmKCFtJiZqLmRpc2FibGVkKGMpfHxtJiZqLmRpc2FibGVkKGMpJiYocHx8ZXx8Zyl8fCFtJiYoYy5waWNrPD1uLnBpY2t8fGMucGljaz49by5waWNrKSkpZm9yKG0mJiFwJiYoIWcmJmw+MHx8IWUmJmw8MCkmJihsKj0tMSk7ai5kaXNhYmxlZChjKSYmKE1hdGguYWJzKGwpPjEmJihjLm1vbnRoPGsubW9udGh8fGMubW9udGg+ay5tb250aCkmJihjPWssbD1sPjA/MTotMSksYy5waWNrPD1uLnBpY2s/KGg9ITAsbD0xLGM9ai5jcmVhdGUoW24ueWVhcixuLm1vbnRoLG4uZGF0ZSsoYy5waWNrPT09bi5waWNrPzA6LTEpXSkpOmMucGljaz49by5waWNrJiYoaT0hMCxsPS0xLGM9ai5jcmVhdGUoW28ueWVhcixvLm1vbnRoLG8uZGF0ZSsoYy5waWNrPT09by5waWNrPzA6MSldKSksIWh8fCFpKTspYz1qLmNyZWF0ZShbYy55ZWFyLGMubW9udGgsYy5kYXRlK2xdKTtyZXR1cm4gY30sYy5wcm90b3R5cGUuZGlzYWJsZWQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPWMuaXRlbS5kaXNhYmxlLmZpbHRlcihmdW5jdGlvbihkKXtyZXR1cm4gZi5pc0ludGVnZXIoZCk/YS5kYXk9PT0oYy5zZXR0aW5ncy5maXJzdERheT9kOmQtMSklNzpiLmlzQXJyYXkoZCl8fGYuaXNEYXRlKGQpP2EucGljaz09PWMuY3JlYXRlKGQpLnBpY2s6Yi5pc1BsYWluT2JqZWN0KGQpP2Mud2l0aGluUmFuZ2UoZCxhKTp2b2lkIDB9KTtyZXR1cm4gZD1kLmxlbmd0aCYmIWQuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBiLmlzQXJyYXkoYSkmJlwiaW52ZXJ0ZWRcIj09YVszXXx8Yi5pc1BsYWluT2JqZWN0KGEpJiZhLmludmVydGVkfSkubGVuZ3RoLGMuaXRlbS5lbmFibGU9PT0tMT8hZDpkfHxhLnBpY2s8Yy5pdGVtLm1pbi5waWNrfHxhLnBpY2s+Yy5pdGVtLm1heC5waWNrfSxjLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPXt9O3JldHVybiBiJiZcInN0cmluZ1wiPT10eXBlb2YgYj8oYyYmYy5mb3JtYXR8fChjPWN8fHt9LGMuZm9ybWF0PWQuc2V0dGluZ3MuZm9ybWF0KSxkLmZvcm1hdHMudG9BcnJheShjLmZvcm1hdCkubWFwKGZ1bmN0aW9uKGEpe3ZhciBjPWQuZm9ybWF0c1thXSxnPWM/Zi50cmlnZ2VyKGMsZCxbYixlXSk6YS5yZXBsYWNlKC9eIS8sXCJcIikubGVuZ3RoO2MmJihlW2FdPWIuc3Vic3RyKDAsZykpLGI9Yi5zdWJzdHIoZyl9KSxbZS55eXl5fHxlLnl5LCsoZS5tbXx8ZS5tKS0xLGUuZGR8fGUuZF0pOmJ9LGMucHJvdG90eXBlLmZvcm1hdHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjKXt2YXIgZD1hLm1hdGNoKC9cXHcrLylbMF07cmV0dXJuIGMubW18fGMubXx8KGMubT1iLmluZGV4T2YoZCkrMSksZC5sZW5ndGh9ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5tYXRjaCgvXFx3Ky8pWzBdLmxlbmd0aH1yZXR1cm57ZDpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIuZGF0ZX0sZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLmRhdGUpfSxkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNTaG9ydFtjLmRheV19LGRkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNGdWxsW2MuZGF5XX0sbTpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIubW9udGgrMX0sbW06ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLm1vbnRoKzEpfSxtbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc1Nob3J0O3JldHVybiBiP2EoYixkLGMpOmRbYy5tb250aF19LG1tbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc0Z1bGw7cmV0dXJuIGI/YShiLGQsYyk6ZFtjLm1vbnRoXX0seXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOihcIlwiK2IueWVhcikuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT80OmIueWVhcn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gYS5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyl9LHRvU3RyaW5nOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5mb3JtYXRzLnRvQXJyYXkoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBmLnRyaWdnZXIoYy5mb3JtYXRzW2FdLGMsWzAsYl0pfHxhLnJlcGxhY2UoL14hLyxcIlwiKX0pLmpvaW4oXCJcIil9fX0oKSxjLnByb3RvdHlwZS5pc0RhdGVFeGFjdD1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXM7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiZmLmlzSW50ZWdlcihjKXx8XCJib29sZWFuXCI9PXR5cGVvZiBhJiZcImJvb2xlYW5cIj09dHlwZW9mIGM/YT09PWM6KGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/ZC5jcmVhdGUoYSkucGljaz09PWQuY3JlYXRlKGMpLnBpY2s6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmKGQuaXNEYXRlRXhhY3QoYS5mcm9tLGMuZnJvbSkmJmQuaXNEYXRlRXhhY3QoYS50byxjLnRvKSl9LGMucHJvdG90eXBlLmlzRGF0ZU92ZXJsYXA9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5zZXR0aW5ncy5maXJzdERheT8xOjA7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/KGE9YSU3K2UsYT09PWQuY3JlYXRlKGMpLmRheSsxKTpmLmlzSW50ZWdlcihjKSYmKGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpPyhjPWMlNytlLGM9PT1kLmNyZWF0ZShhKS5kYXkrMSk6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmZC5vdmVybGFwUmFuZ2VzKGEsYyl9LGMucHJvdG90eXBlLmZsaXBFbmFibGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5pdGVtO2IuZW5hYmxlPWF8fChiLmVuYWJsZT09LTE/MTotMSl9LGMucHJvdG90eXBlLmRlYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUuc2xpY2UoMCk7cmV0dXJuXCJmbGlwXCI9PWM/ZC5mbGlwRW5hYmxlKCk6Yz09PSExPyhkLmZsaXBFbmFibGUoMSksZT1bXSk6Yz09PSEwPyhkLmZsaXBFbmFibGUoLTEpLGU9W10pOmMubWFwKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxnPTA7ZzxlLmxlbmd0aDtnKz0xKWlmKGQuaXNEYXRlRXhhY3QoYSxlW2ddKSl7Yz0hMDticmVha31jfHwoZi5pc0ludGVnZXIoYSl8fGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSl8fGIuaXNQbGFpbk9iamVjdChhKSYmYS5mcm9tJiZhLnRvKSYmZS5wdXNoKGEpfSksZX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUsZz1lLmxlbmd0aDtyZXR1cm5cImZsaXBcIj09Yz9kLmZsaXBFbmFibGUoKTpjPT09ITA/KGQuZmxpcEVuYWJsZSgxKSxlPVtdKTpjPT09ITE/KGQuZmxpcEVuYWJsZSgtMSksZT1bXSk6Yy5tYXAoZnVuY3Rpb24oYSl7dmFyIGMsaCxpLGo7Zm9yKGk9MDtpPGc7aSs9MSl7aWYoaD1lW2ldLGQuaXNEYXRlRXhhY3QoaCxhKSl7Yz1lW2ldPW51bGwsaj0hMDticmVha31pZihkLmlzRGF0ZU92ZXJsYXAoaCxhKSl7Yi5pc1BsYWluT2JqZWN0KGEpPyhhLmludmVydGVkPSEwLGM9YSk6Yi5pc0FycmF5KGEpPyhjPWEsY1szXXx8Yy5wdXNoKFwiaW52ZXJ0ZWRcIikpOmYuaXNEYXRlKGEpJiYoYz1bYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSxcImludmVydGVkXCJdKTticmVha319aWYoYylmb3IoaT0wO2k8ZztpKz0xKWlmKGQuaXNEYXRlRXhhY3QoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWlmKGopZm9yKGk9MDtpPGc7aSs9MSlpZihkLmlzRGF0ZU92ZXJsYXAoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWMmJmUucHVzaChjKX0pLGUuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hfSl9LGMucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLnNldHRpbmdzLGc9Yi5pdGVtLGg9Zy5ub3csaT1nLnNlbGVjdCxqPWcuaGlnaGxpZ2h0LGs9Zy52aWV3LGw9Zy5kaXNhYmxlLG09Zy5taW4sbj1nLm1heCxvPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuZmlyc3REYXkmJihhLnB1c2goYS5zaGlmdCgpKSxiLnB1c2goYi5zaGlmdCgpKSksZi5ub2RlKFwidGhlYWRcIixmLm5vZGUoXCJ0clwiLGYuZ3JvdXAoe21pbjowLG1heDpkLTEsaToxLG5vZGU6XCJ0aFwiLGl0ZW06ZnVuY3Rpb24oZCl7cmV0dXJuW2FbZF0sYy5rbGFzcy53ZWVrZGF5cywnc2NvcGU9Y29sIHRpdGxlPVwiJytiW2RdKydcIiddfX0pKSl9KChjLnNob3dXZWVrZGF5c0Z1bGw/Yy53ZWVrZGF5c0Z1bGw6Yy53ZWVrZGF5c0xldHRlcikuc2xpY2UoMCksYy53ZWVrZGF5c0Z1bGwuc2xpY2UoMCkpLHA9ZnVuY3Rpb24oYSl7cmV0dXJuIGYubm9kZShcImRpdlwiLFwiIFwiLGMua2xhc3NbXCJuYXZcIisoYT9cIk5leHRcIjpcIlByZXZcIildKyhhJiZrLnllYXI+PW4ueWVhciYmay5tb250aD49bi5tb250aHx8IWEmJmsueWVhcjw9bS55ZWFyJiZrLm1vbnRoPD1tLm1vbnRoP1wiIFwiK2Mua2xhc3MubmF2RGlzYWJsZWQ6XCJcIiksXCJkYXRhLW5hdj1cIisoYXx8LTEpK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJidXR0b25cIixjb250cm9sczpiLiRub2RlWzBdLmlkK1wiX3RhYmxlXCJ9KSsnIHRpdGxlPVwiJysoYT9jLmxhYmVsTW9udGhOZXh0OmMubGFiZWxNb250aFByZXYpKydcIicpfSxxPWZ1bmN0aW9uKGQpe3ZhciBlPWMuc2hvd01vbnRoc1Nob3J0P2MubW9udGhzU2hvcnQ6Yy5tb250aHNGdWxsO3JldHVyblwic2hvcnRfbW9udGhzXCI9PWQmJihlPWMubW9udGhzU2hvcnQpLGMuc2VsZWN0TW9udGhzJiZ2b2lkIDA9PWQ/Zi5ub2RlKFwic2VsZWN0XCIsZi5ncm91cCh7bWluOjAsbWF4OjExLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bZVthXSwwLFwidmFsdWU9XCIrYSsoay5tb250aD09YT9cIiBzZWxlY3RlZFwiOlwiXCIpKyhrLnllYXI9PW0ueWVhciYmYTxtLm1vbnRofHxrLnllYXI9PW4ueWVhciYmYT5uLm1vbnRoP1wiIGRpc2FibGVkXCI6XCJcIildfX0pLGMua2xhc3Muc2VsZWN0TW9udGgrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxNb250aFNlbGVjdCsnXCInKTpcInNob3J0X21vbnRoc1wiPT1kP251bGwhPWk/Zi5ub2RlKFwiZGl2XCIsZVtpLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSxjLmtsYXNzLm1vbnRoKX0scj1mdW5jdGlvbihkKXt2YXIgZT1rLnllYXIsZz1jLnNlbGVjdFllYXJzPT09ITA/NTp+fihjLnNlbGVjdFllYXJzLzIpO2lmKGcpe3ZhciBoPW0ueWVhcixpPW4ueWVhcixqPWUtZyxsPWUrZztpZihoPmomJihsKz1oLWosaj1oKSxpPGwpe3ZhciBvPWotaCxwPWwtaTtqLT1vPnA/cDpvLGw9aX1pZihjLnNlbGVjdFllYXJzJiZ2b2lkIDA9PWQpcmV0dXJuIGYubm9kZShcInNlbGVjdFwiLGYuZ3JvdXAoe21pbjpqLG1heDpsLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bYSwwLFwidmFsdWU9XCIrYSsoZT09YT9cIiBzZWxlY3RlZFwiOlwiXCIpXX19KSxjLmtsYXNzLnNlbGVjdFllYXIrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxZZWFyU2VsZWN0KydcIicpfXJldHVyblwicmF3XCI9PWQ/Zi5ub2RlKFwiZGl2XCIsZSk6Zi5ub2RlKFwiZGl2XCIsZSxjLmtsYXNzLnllYXIpfTtyZXR1cm4gY3JlYXRlRGF5TGFiZWw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9aT9mLm5vZGUoXCJkaXZcIixpLmRhdGUpOmYubm9kZShcImRpdlwiLGguZGF0ZSl9LGNyZWF0ZVdlZWtkYXlMYWJlbD1mdW5jdGlvbigpe3ZhciBhO2E9bnVsbCE9aT9pLmRheTpoLmRheTt2YXIgYj1jLndlZWtkYXlzRnVsbFthXTtyZXR1cm4gYn0sZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsY3JlYXRlV2Vla2RheUxhYmVsKCksXCJwaWNrZXJfX3dlZWtkYXktZGlzcGxheVwiKStmLm5vZGUoXCJkaXZcIixxKFwic2hvcnRfbW9udGhzXCIpLGMua2xhc3MubW9udGhfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsY3JlYXRlRGF5TGFiZWwoKSxjLmtsYXNzLmRheV9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixyKFwicmF3XCIpLGMua2xhc3MueWVhcl9kaXNwbGF5KSxjLmtsYXNzLmRhdGVfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsKGMuc2VsZWN0WWVhcnM/cSgpK3IoKTpxKCkrcigpKStwKCkrcCgxKSxjLmtsYXNzLmhlYWRlcikrZi5ub2RlKFwidGFibGVcIixvK2Yubm9kZShcInRib2R5XCIsZi5ncm91cCh7bWluOjAsbWF4OmUtMSxpOjEsbm9kZTpcInRyXCIsaXRlbTpmdW5jdGlvbihhKXt2YXIgZT1jLmZpcnN0RGF5JiYwPT09Yi5jcmVhdGUoW2sueWVhcixrLm1vbnRoLDFdKS5kYXk/LTc6MDtyZXR1cm5bZi5ncm91cCh7bWluOmQqYS1rLmRheStlKzEsbWF4OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWluK2QtMX0saToxLG5vZGU6XCJ0ZFwiLGl0ZW06ZnVuY3Rpb24oYSl7YT1iLmNyZWF0ZShbay55ZWFyLGsubW9udGgsYSsoYy5maXJzdERheT8xOjApXSk7dmFyIGQ9aSYmaS5waWNrPT1hLnBpY2ssZT1qJiZqLnBpY2s9PWEucGljayxnPWwmJmIuZGlzYWJsZWQoYSl8fGEucGljazxtLnBpY2t8fGEucGljaz5uLnBpY2ssbz1mLnRyaWdnZXIoYi5mb3JtYXRzLnRvU3RyaW5nLGIsW2MuZm9ybWF0LGFdKTtyZXR1cm5bZi5ub2RlKFwiZGl2XCIsYS5kYXRlLGZ1bmN0aW9uKGIpe3JldHVybiBiLnB1c2goay5tb250aD09YS5tb250aD9jLmtsYXNzLmluZm9jdXM6Yy5rbGFzcy5vdXRmb2N1cyksaC5waWNrPT1hLnBpY2smJmIucHVzaChjLmtsYXNzLm5vdyksZCYmYi5wdXNoKGMua2xhc3Muc2VsZWN0ZWQpLGUmJmIucHVzaChjLmtsYXNzLmhpZ2hsaWdodGVkKSxnJiZiLnB1c2goYy5rbGFzcy5kaXNhYmxlZCksYi5qb2luKFwiIFwiKX0oW2Mua2xhc3MuZGF5XSksXCJkYXRhLXBpY2s9XCIrYS5waWNrK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkY2VsbFwiLGxhYmVsOm8sc2VsZWN0ZWQ6ISghZHx8Yi4kbm9kZS52YWwoKSE9PW8pfHxudWxsLGFjdGl2ZWRlc2NlbmRhbnQ6ISFlfHxudWxsLGRpc2FibGVkOiEhZ3x8bnVsbH0pKSxcIlwiLGYuYXJpYUF0dHIoe3JvbGU6XCJwcmVzZW50YXRpb25cIn0pXX19KV19fSkpLGMua2xhc3MudGFibGUsJ2lkPVwiJytiLiRub2RlWzBdLmlkKydfdGFibGVcIiAnK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkXCIsY29udHJvbHM6Yi4kbm9kZVswXS5pZCxyZWFkb25seTohMH0pKSxjLmtsYXNzLmNhbGVuZGFyX2NvbnRhaW5lcikrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiYnV0dG9uXCIsYy50b2RheSxcImJ0bi1mbGF0IHBpY2tlcl9fdG9kYXlcIixcInR5cGU9YnV0dG9uIGRhdGEtcGljaz1cIitoLnBpY2srKGEmJiFiLmRpc2FibGVkKGgpP1wiXCI6XCIgZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZH0pKStmLm5vZGUoXCJidXR0b25cIixjLmNsZWFyLFwiYnRuLWZsYXQgcGlja2VyX19jbGVhclwiLFwidHlwZT1idXR0b24gZGF0YS1jbGVhcj0xXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpK2Yubm9kZShcImJ1dHRvblwiLGMuY2xvc2UsXCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlXCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLWNsb3NlPXRydWUgXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpLGMua2xhc3MuZm9vdGVyKX0sYy5kZWZhdWx0cz1mdW5jdGlvbihhKXtyZXR1cm57bGFiZWxNb250aE5leHQ6XCJOZXh0IG1vbnRoXCIsbGFiZWxNb250aFByZXY6XCJQcmV2aW91cyBtb250aFwiLGxhYmVsTW9udGhTZWxlY3Q6XCJTZWxlY3QgYSBtb250aFwiLGxhYmVsWWVhclNlbGVjdDpcIlNlbGVjdCBhIHllYXJcIixtb250aHNGdWxsOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHdlZWtkYXlzRnVsbDpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSx3ZWVrZGF5c1Nob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSx3ZWVrZGF5c0xldHRlcjpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsY2xvc2U6XCJDbG9zZVwiLGZvcm1hdDpcImQgbW1tbSwgeXl5eVwiLGtsYXNzOnt0YWJsZTphK1widGFibGVcIixoZWFkZXI6YStcImhlYWRlclwiLGRhdGVfZGlzcGxheTphK1wiZGF0ZS1kaXNwbGF5XCIsZGF5X2Rpc3BsYXk6YStcImRheS1kaXNwbGF5XCIsbW9udGhfZGlzcGxheTphK1wibW9udGgtZGlzcGxheVwiLHllYXJfZGlzcGxheTphK1wieWVhci1kaXNwbGF5XCIsY2FsZW5kYXJfY29udGFpbmVyOmErXCJjYWxlbmRhci1jb250YWluZXJcIixuYXZQcmV2OmErXCJuYXYtLXByZXZcIixuYXZOZXh0OmErXCJuYXYtLW5leHRcIixuYXZEaXNhYmxlZDphK1wibmF2LS1kaXNhYmxlZFwiLG1vbnRoOmErXCJtb250aFwiLHllYXI6YStcInllYXJcIixzZWxlY3RNb250aDphK1wic2VsZWN0LS1tb250aFwiLHNlbGVjdFllYXI6YStcInNlbGVjdC0teWVhclwiLHdlZWtkYXlzOmErXCJ3ZWVrZGF5XCIsZGF5OmErXCJkYXlcIixkaXNhYmxlZDphK1wiZGF5LS1kaXNhYmxlZFwiLHNlbGVjdGVkOmErXCJkYXktLXNlbGVjdGVkXCIsaGlnaGxpZ2h0ZWQ6YStcImRheS0taGlnaGxpZ2h0ZWRcIixub3c6YStcImRheS0tdG9kYXlcIixpbmZvY3VzOmErXCJkYXktLWluZm9jdXNcIixvdXRmb2N1czphK1wiZGF5LS1vdXRmb2N1c1wiLGZvb3RlcjphK1wiZm9vdGVyXCIsYnV0dG9uQ2xlYXI6YStcImJ1dHRvbi0tY2xlYXJcIixidXR0b25Ub2RheTphK1wiYnV0dG9uLS10b2RheVwiLGJ1dHRvbkNsb3NlOmErXCJidXR0b24tLWNsb3NlXCJ9fX0oYS5rbGFzc2VzKCkucGlja2VyK1wiX19cIiksYS5leHRlbmQoXCJwaWNrYWRhdGVcIixjKX0pLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYj0rYSh0aGlzKS5hdHRyKFwiZGF0YS1sZW5ndGhcIiksYz0rYSh0aGlzKS52YWwoKS5sZW5ndGgsZD1jPD1iO2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChjK1wiL1wiK2IpLGUoZCxhKHRoaXMpKX1mdW5jdGlvbiBjKGIpe3ZhciBjPWIucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7Yy5sZW5ndGh8fChjPWEoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKFwiY2hhcmFjdGVyLWNvdW50ZXJcIikuY3NzKFwiZmxvYXRcIixcInJpZ2h0XCIpLmNzcyhcImZvbnQtc2l6ZVwiLFwiMTJweFwiKS5jc3MoXCJoZWlnaHRcIiwxKSxiLnBhcmVudCgpLmFwcGVuZChjKSl9ZnVuY3Rpb24gZCgpe2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChcIlwiKX1mdW5jdGlvbiBlKGEsYil7dmFyIGM9Yi5oYXNDbGFzcyhcImludmFsaWRcIik7YSYmYz9iLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTphfHxjfHwoYi5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGIuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpKX1hLmZuLmNoYXJhY3RlckNvdW50ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7aWYoIWYubGVuZ3RoKXt2YXIgZz12b2lkIDAhPT1lLmF0dHIoXCJkYXRhLWxlbmd0aFwiKTtnJiYoZS5vbihcImlucHV0XCIsYiksZS5vbihcImZvY3VzXCIsYiksZS5vbihcImJsdXJcIixkKSxjKGUpKX19KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiaW5wdXQsIHRleHRhcmVhXCIpLmNoYXJhY3RlckNvdW50ZXIoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtkdXJhdGlvbjoyMDAsZGlzdDotMTAwLHNoaWZ0OjAscGFkZGluZzowLGZ1bGxXaWR0aDohMSxpbmRpY2F0b3JzOiExLG5vV3JhcDohMSxvbkN5Y2xlVG86bnVsbH07Yj1hLmV4dGVuZChjLGIpO3ZhciBkPU1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKGEodGhpcykpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZSgpe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0JiYoT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIscCkpLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixwKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIscCksT1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixsKX1mdW5jdGlvbiBmKGEpe3JldHVybiBhLnRhcmdldFRvdWNoZXMmJmEudGFyZ2V0VG91Y2hlcy5sZW5ndGg+PTE/YS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg6YS5jbGllbnRYfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEudGFyZ2V0VG91Y2hlcyYmYS50YXJnZXRUb3VjaGVzLmxlbmd0aD49MT9hLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTphLmNsaWVudFl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYT49eD9hJXg6YTwwP2goeCthJXgpOmF9ZnVuY3Rpb24gaShjKXtFPSEwLE8uaGFzQ2xhc3MoXCJzY3JvbGxpbmdcIil8fE8uYWRkQ2xhc3MoXCJzY3JvbGxpbmdcIiksbnVsbCE9TiYmd2luZG93LmNsZWFyVGltZW91dChOKSxOPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RT0hMSxPLnJlbW92ZUNsYXNzKFwic2Nyb2xsaW5nXCIpfSxiLmR1cmF0aW9uKTt2YXIgZCxlLGYsZyxpLGosayxsPXU7aWYodD1cIm51bWJlclwiPT10eXBlb2YgYz9jOnQsdT1NYXRoLmZsb29yKCh0K3cvMikvdyksZj10LXUqdyxnPWY8MD8xOi0xLGk9LWcqZioyL3csZT14Pj4xLGIuZnVsbFdpZHRoP2s9XCJ0cmFuc2xhdGVYKDApXCI6KGs9XCJ0cmFuc2xhdGVYKFwiKyhPWzBdLmNsaWVudFdpZHRoLXIpLzIrXCJweCkgXCIsays9XCJ0cmFuc2xhdGVZKFwiKyhPWzBdLmNsaWVudEhlaWdodC1zKS8yK1wicHgpXCIpLFApe3ZhciBtPXUleCxuPU0uZmluZChcIi5pbmRpY2F0b3ItaXRlbS5hY3RpdmVcIik7bi5pbmRleCgpIT09bSYmKG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksTS5maW5kKFwiLmluZGljYXRvci1pdGVtXCIpLmVxKG0pLmFkZENsYXNzKFwiYWN0aXZlXCIpKX1mb3IoKCFiLm5vV3JhcHx8dT49MCYmdTx4KSYmKGo9cVtoKHUpXSxhKGopLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwoTy5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYShqKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppKmQrXCJweCkgdHJhbnNsYXRlWihcIitiLmRpc3QqaStcInB4KVwiLGouc3R5bGUuekluZGV4PTAsYi5mdWxsV2lkdGg/dHdlZW5lZE9wYWNpdHk9MTp0d2VlbmVkT3BhY2l0eT0xLS4yKmksai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGQ9MTtkPD1lOysrZCliLmZ1bGxXaWR0aD8oelRyYW5zbGF0aW9uPWIuZGlzdCx0d2VlbmVkT3BhY2l0eT1kPT09ZSYmZjwwPzEtaToxKTooelRyYW5zbGF0aW9uPWIuZGlzdCooMipkK2kqZyksdHdlZW5lZE9wYWNpdHk9MS0uMiooMipkK2kqZykpLCghYi5ub1dyYXB8fHUrZDx4KSYmKGo9cVtoKHUrZCldLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKyhiLnNoaWZ0Kyh3KmQtZikvMikrXCJweCkgdHJhbnNsYXRlWihcIit6VHJhbnNsYXRpb24rXCJweClcIixqLnN0eWxlLnpJbmRleD0tZCxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksYi5mdWxsV2lkdGg/KHpUcmFuc2xhdGlvbj1iLmRpc3QsdHdlZW5lZE9wYWNpdHk9ZD09PWUmJmY+MD8xLWk6MSk6KHpUcmFuc2xhdGlvbj1iLmRpc3QqKDIqZC1pKmcpLHR3ZWVuZWRPcGFjaXR5PTEtLjIqKDIqZC1pKmcpKSwoIWIubm9XcmFwfHx1LWQ+PTApJiYoaj1xW2godS1kKV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrKC1iLnNoaWZ0KygtdypkLWYpLzIpK1wicHgpIHRyYW5zbGF0ZVooXCIrelRyYW5zbGF0aW9uK1wicHgpXCIsai5zdHlsZS56SW5kZXg9LWQsai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpO2lmKCghYi5ub1dyYXB8fHU+PTAmJnU8eCkmJihqPXFbaCh1KV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppK1wicHgpIHRyYW5zbGF0ZVooXCIrYi5kaXN0KmkrXCJweClcIixqLnN0eWxlLnpJbmRleD0wLGIuZnVsbFdpZHRoP3R3ZWVuZWRPcGFjaXR5PTE6dHdlZW5lZE9wYWNpdHk9MS0uMippLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxsIT09dSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkN5Y2xlVG8pe3ZhciBvPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVxKGgodSkpO2Iub25DeWNsZVRvLmNhbGwodGhpcyxvLEopfX1mdW5jdGlvbiBqKCl7dmFyIGEsYixjLGQ7YT1EYXRlLm5vdygpLGI9YS1ILEg9YSxjPXQtRyxHPXQsZD0xZTMqYy8oMStiKSxEPS44KmQrLjIqRH1mdW5jdGlvbiBrKCl7dmFyIGEsYztCJiYoYT1EYXRlLm5vdygpLUgsYz1CKk1hdGguZXhwKC1hL2IuZHVyYXRpb24pLGM+Mnx8YzwtMj8oaShDLWMpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSk6aShDKSl9ZnVuY3Rpb24gbChjKXtpZihKKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSwhMTtpZighYi5mdWxsV2lkdGgpe3ZhciBkPWEoYy50YXJnZXQpLmNsb3Nlc3QoXCIuY2Fyb3VzZWwtaXRlbVwiKS5pbmRleCgpLGU9dSV4LWQ7MCE9PWUmJihjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSksbShkKX19ZnVuY3Rpb24gbShhKXt2YXIgYz11JXgtYTtiLm5vV3JhcHx8KGM8MD9NYXRoLmFicyhjK3gpPE1hdGguYWJzKGMpJiYoYys9eCk6Yz4wJiZNYXRoLmFicyhjLXgpPGMmJihjLT14KSksYzwwP08udHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtNYXRoLmFicyhjKV0pOmM+MCYmTy50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2NdKX1mdW5jdGlvbiBuKGEpe2EucHJldmVudERlZmF1bHQoKSx2PSEwLEo9ITEsSz0hMSx6PWYoYSksQT1nKGEpLEQ9Qj0wLEc9dCxIPURhdGUubm93KCksY2xlYXJJbnRlcnZhbChJKSxJPXNldEludGVydmFsKGosMTAwKX1mdW5jdGlvbiBvKGEpe3ZhciBiLGMsZDtpZih2KWlmKGI9ZihhKSx5PWcoYSksYz16LWIsZD1NYXRoLmFicyhBLXkpLGQ8MzAmJiFLKShjPjJ8fGM8LTIpJiYoSj0hMCx6PWIsaSh0K2MpKTtlbHNle2lmKEopcmV0dXJuIGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLCExO0s9ITB9aWYoSilyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksITF9ZnVuY3Rpb24gcChhKXtpZih2KXJldHVybiB2PSExLGNsZWFySW50ZXJ2YWwoSSksQz10LChEPjEwfHxEPC0xMCkmJihCPS45KkQsQz10K0IpLEM9TWF0aC5yb3VuZChDL3cpKncsYi5ub1dyYXAmJihDPj13Kih4LTEpP0M9dyooeC0xKTpDPDAmJihDPTApKSxCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspLEomJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSksITF9dmFyIHEscixzLHQsdSx2LHcseCx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMPWQrYyxNPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLE49bnVsbCxPPWEodGhpcyksUD1PLmF0dHIoXCJkYXRhLWluZGljYXRvcnNcIil8fGIuaW5kaWNhdG9ycyxRPWZ1bmN0aW9uKCl7dmFyIGI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW0gaW1nXCIpLmZpcnN0KCk7aWYoYi5sZW5ndGgpYi5wcm9wKFwiY29tcGxldGVcIik/Ty5jc3MoXCJoZWlnaHRcIixiLmhlaWdodCgpKTpiLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7Ty5jc3MoXCJoZWlnaHRcIixhKHRoaXMpLmhlaWdodCgpKX0pO2Vsc2V7dmFyIGM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5oZWlnaHQoKTtPLmNzcyhcImhlaWdodFwiLGMpfX07cmV0dXJuIGIuZnVsbFdpZHRoJiYoYi5kaXN0PTAsUSgpLFAmJk8uZmluZChcIi5jYXJvdXNlbC1maXhlZC1pdGVtXCIpLmFkZENsYXNzKFwid2l0aC1pbmRpY2F0b3JzXCIpKSxPLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIik/KGEod2luZG93KS50cmlnZ2VyKFwicmVzaXplXCIpLGEodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFsxZS02XSksITApOihPLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIiksdj0hMSx0PUM9MCxxPVtdLHI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lcldpZHRoKCkscz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVySGVpZ2h0KCksdz0yKnIrYi5wYWRkaW5nLE8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVhY2goZnVuY3Rpb24oYil7aWYocS5wdXNoKGEodGhpcylbMF0pLFApe3ZhciBjPWEoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTswPT09YiYmYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmNsaWNrKGZ1bmN0aW9uKGIpe2Iuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGM9YSh0aGlzKS5pbmRleCgpO20oYyl9KSxNLmFwcGVuZChjKX19KSxQJiZPLmFwcGVuZChNKSx4PXEubGVuZ3RoLEY9XCJ0cmFuc2Zvcm1cIixbXCJ3ZWJraXRcIixcIk1velwiLFwiT1wiLFwibXNcIl0uZXZlcnkoZnVuY3Rpb24oYSl7dmFyIGI9YStcIlRyYW5zZm9ybVwiO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW2JdfHwoRj1iLCExKX0pLGEod2luZG93KS5vZmYoXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCkub24oXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCxmdW5jdGlvbigpe2IuZnVsbFdpZHRoPyhyPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJXaWR0aCgpLHM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lckhlaWdodCgpLHc9MipyK2IucGFkZGluZyx0PTIqdSpyLEM9dCk6aSgpfSksZSgpLGkodCksYSh0aGlzKS5vbihcImNhcm91c2VsTmV4dFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MSksQz13Kk1hdGgucm91bmQodC93KSt3KmIsdCE9PUMmJihCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKX0pLGEodGhpcykub24oXCJjYXJvdXNlbFByZXZcIixmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPTEpLEM9dypNYXRoLnJvdW5kKHQvdyktdypiLHQhPT1DJiYoQj1DLXQsSD1EYXRlLm5vdygpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSl9KSx2b2lkIGEodGhpcykub24oXCJjYXJvdXNlbFNldFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MCksbShiKX0pKX0pfSxuZXh0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtiXSl9LHByZXY6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2JdKX0sc2V0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsU2V0XCIsW2JdKX19O2EuZm4uY2Fyb3VzZWw9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmNhcm91c2VsXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKFwiI1wiK2EodGhpcykuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKSxkPShhKFwiYm9keVwiKSxhKHRoaXMpKSxlPWQucGFyZW50KFwiLnRhcC10YXJnZXQtd3JhcHBlclwiKSxmPWUuZmluZChcIi50YXAtdGFyZ2V0LXdhdmVcIiksZz1lLmZpbmQoXCIudGFwLXRhcmdldC1vcmlnaW5cIiksaD1kLmZpbmQoXCIudGFwLXRhcmdldC1jb250ZW50XCIpO2UubGVuZ3RofHwoZT1kLndyYXAoYSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd3JhcHBlclwiPjwvZGl2PicpKS5wYXJlbnQoKSksaC5sZW5ndGh8fChoPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LWNvbnRlbnRcIj48L2Rpdj4nKSxkLmFwcGVuZChoKSksZi5sZW5ndGh8fChmPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdhdmVcIj48L2Rpdj4nKSxnLmxlbmd0aHx8KGc9Yy5jbG9uZSghMCwhMCksZy5hZGRDbGFzcyhcInRhcC10YXJnZXQtb3JpZ2luXCIpLGcucmVtb3ZlQXR0cihcImlkXCIpLGcucmVtb3ZlQXR0cihcInN0eWxlXCIpLGYuYXBwZW5kKGcpKSxlLmFwcGVuZChmKSk7dmFyIGk9ZnVuY3Rpb24oKXtlLmlzKFwiLm9wZW5cIil8fChlLmFkZENsYXNzKFwib3BlblwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihhKXtqKCksZy5vZmYoXCJjbGljay50YXBUYXJnZXRcIil9KSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihiKXtqKCksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpfSk7dmFyIGI9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtrKCl9LDIwMCk7YSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YXBUYXJnZXRcIikub24oXCJyZXNpemUudGFwVGFyZ2V0XCIsYil9LDApKX0saj1mdW5jdGlvbigpe2UuaXMoXCIub3BlblwiKSYmKGUucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGcub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnRhcFRhcmdldFwiKSl9LGs9ZnVuY3Rpb24oKXt2YXIgYj1cImZpeGVkXCI9PT1jLmNzcyhcInBvc2l0aW9uXCIpO2lmKCFiKWZvcih2YXIgZz1jLnBhcmVudHMoKSxpPTA7aTxnLmxlbmd0aCYmIShiPVwiZml4ZWRcIj09YShnW2ldKS5jc3MoXCJwb3NpdGlvblwiKSk7aSsrKTt2YXIgaj1jLm91dGVyV2lkdGgoKSxrPWMub3V0ZXJIZWlnaHQoKSxsPWI/Yy5vZmZzZXQoKS50b3AtYShkb2N1bWVudCkuc2Nyb2xsVG9wKCk6Yy5vZmZzZXQoKS50b3AsbT1iP2Mub2Zmc2V0KCkubGVmdC1hKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCk6Yy5vZmZzZXQoKS5sZWZ0LG49YSh3aW5kb3cpLndpZHRoKCksbz1hKHdpbmRvdykuaGVpZ2h0KCkscD1uLzIscT1vLzIscj1tPD1wLHM9bT5wLHQ9bDw9cSx1PWw+cSx2PW0+PS4yNSpuJiZtPD0uNzUqbix3PWQub3V0ZXJXaWR0aCgpLHg9ZC5vdXRlckhlaWdodCgpLHk9bCtrLzIteC8yLHo9bStqLzItdy8yLEE9Yj9cImZpeGVkXCI6XCJhYnNvbHV0ZVwiLEI9dj93OncvMitqLEM9eC8yLEQ9dD94LzI6MCxFPTAsRj1yJiYhdj93LzItajowLEc9MCxIPWosST11P1wiYm90dG9tXCI6XCJ0b3BcIixKPWo+az8yKmo6MipqLEs9SixMPXgvMi1LLzIsTT13LzItSi8yLE49e307Ti50b3A9dD95OlwiXCIsTi5yaWdodD1zP24tei13OlwiXCIsTi5ib3R0b209dT9vLXkteDpcIlwiLE4ubGVmdD1yP3o6XCJcIixOLnBvc2l0aW9uPUEsZS5jc3MoTiksaC5jc3Moe3dpZHRoOkIsaGVpZ2h0OkMsdG9wOkQscmlnaHQ6Ryxib3R0b206RSxsZWZ0OkYscGFkZGluZzpILHZlcnRpY2FsQWxpZ246SX0pLGYuY3NzKHt0b3A6TCxsZWZ0Ok0sd2lkdGg6SixoZWlnaHQ6S30pfTtcIm9wZW5cIj09YiYmKGsoKSxpKCkpLFwiY2xvc2VcIj09YiYmaigpfSl9LG9wZW46ZnVuY3Rpb24oKXt9LGNsb3NlOmZ1bmN0aW9uKCl7fX07YS5mbi50YXBUYXJnZXQ9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY118fFwib2JqZWN0XCI9PXR5cGVvZiBjP2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXRcIil9fShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRpYy9tYXRlcmlhbGl6ZS5taW4uanMiLCIvKiEgSGFtbWVyLkpTIC0gdjIuMC44IC0gMjAxNi0wNC0yM1xuICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSm9yaWsgVGFuZ2VsZGVyO1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlICovXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoaihhLGMpLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe3JldHVybiBBcnJheS5pc0FycmF5KGEpPyhnKGEsY1tiXSxjKSwhMCk6ITF9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChiLGMsZCl7dmFyIGU9XCJERVBSRUNBVEVEIE1FVEhPRDogXCIrYytcIlxcblwiK2QrXCIgQVQgXFxuXCI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9bmV3IEVycm9yKFwiZ2V0LXN0YWNrLXRyYWNlXCIpLGQ9YyYmYy5zdGFjaz9jLnN0YWNrLnJlcGxhY2UoL15bXlxcKF0rP1tcXG4kXS9nbSxcIlwiKS5yZXBsYWNlKC9eXFxzK2F0XFxzKy9nbSxcIlwiKS5yZXBsYWNlKC9eT2JqZWN0Ljxhbm9ueW1vdXM+XFxzKlxcKC9nbSxcInthbm9ueW1vdXN9KClAXCIpOlwiVW5rbm93biBTdGFjayBUcmFjZVwiLGY9YS5jb25zb2xlJiYoYS5jb25zb2xlLndhcm58fGEuY29uc29sZS5sb2cpO3JldHVybiBmJiZmLmNhbGwoYS5jb25zb2xlLGUsZCksYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmxhKGQsYyl9ZnVuY3Rpb24gaihhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gayhhLGIpe3JldHVybiB0eXBlb2YgYT09b2E/YS5hcHBseShiP2JbMF18fGQ6ZCxiKTphfWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm4gYT09PWQ/YjphfWZ1bmN0aW9uIG0oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG4oYSxiLGMpe2cocShiKSxmdW5jdGlvbihiKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0pfWZ1bmN0aW9uIG8oYSxiKXtmb3IoO2E7KXtpZihhPT1iKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYS5pbmRleE9mKGIpPi0xfWZ1bmN0aW9uIHEoYSl7cmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpfWZ1bmN0aW9uIHIoYSxiLGMpe2lmKGEuaW5kZXhPZiYmIWMpcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7aWYoYyYmYVtkXVtjXT09Ynx8IWMmJmFbZF09PT1iKXJldHVybiBkO2QrK31yZXR1cm4tMX1mdW5jdGlvbiBzKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLDApfWZ1bmN0aW9uIHQoYSxiLGMpe2Zvcih2YXIgZD1bXSxlPVtdLGY9MDtmPGEubGVuZ3RoOyl7dmFyIGc9Yj9hW2ZdW2JdOmFbZl07cihlLGcpPDAmJmQucHVzaChhW2ZdKSxlW2ZdPWcsZisrfXJldHVybiBjJiYoZD1iP2Quc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBhW2JdPmNbYl19KTpkLnNvcnQoKSksZH1mdW5jdGlvbiB1KGEsYil7Zm9yKHZhciBjLGUsZj1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxnPTA7ZzxtYS5sZW5ndGg7KXtpZihjPW1hW2ddLGU9Yz9jK2Y6YixlIGluIGEpcmV0dXJuIGU7ZysrfXJldHVybiBkfWZ1bmN0aW9uIHYoKXtyZXR1cm4gdWErK31mdW5jdGlvbiB3KGIpe3ZhciBjPWIub3duZXJEb2N1bWVudHx8YjtyZXR1cm4gYy5kZWZhdWx0Vmlld3x8Yy5wYXJlbnRXaW5kb3d8fGF9ZnVuY3Rpb24geChhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtrKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiB5KGEpe3ZhciBiLGM9YS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIG5ldyhiPWM/Yzp4YT9NOnlhP1A6d2E/UjpMKShhLHopfWZ1bmN0aW9uIHooYSxiLGMpe3ZhciBkPWMucG9pbnRlcnMubGVuZ3RoLGU9Yy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLGY9YiZFYSYmZC1lPT09MCxnPWImKEdhfEhhKSYmZC1lPT09MDtjLmlzRmlyc3Q9ISFmLGMuaXNGaW5hbD0hIWcsZiYmKGEuc2Vzc2lvbj17fSksYy5ldmVudFR5cGU9YixBKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIEEoYSxiKXt2YXIgYz1hLnNlc3Npb24sZD1iLnBvaW50ZXJzLGU9ZC5sZW5ndGg7Yy5maXJzdElucHV0fHwoYy5maXJzdElucHV0PUQoYikpLGU+MSYmIWMuZmlyc3RNdWx0aXBsZT9jLmZpcnN0TXVsdGlwbGU9RChiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPUUoZCk7Yi50aW1lU3RhbXA9cmEoKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPUkoaCxpKSxiLmRpc3RhbmNlPUgoaCxpKSxCKGMsYiksYi5vZmZzZXREaXJlY3Rpb249RyhiLmRlbHRhWCxiLmRlbHRhWSk7dmFyIGo9RihiLmRlbHRhVGltZSxiLmRlbHRhWCxiLmRlbHRhWSk7Yi5vdmVyYWxsVmVsb2NpdHlYPWoueCxiLm92ZXJhbGxWZWxvY2l0eVk9ai55LGIub3ZlcmFsbFZlbG9jaXR5PXFhKGoueCk+cWEoai55KT9qLng6ai55LGIuc2NhbGU9Zz9LKGcucG9pbnRlcnMsZCk6MSxiLnJvdGF0aW9uPWc/SihnLnBvaW50ZXJzLGQpOjAsYi5tYXhQb2ludGVycz1jLnByZXZJbnB1dD9iLnBvaW50ZXJzLmxlbmd0aD5jLnByZXZJbnB1dC5tYXhQb2ludGVycz9iLnBvaW50ZXJzLmxlbmd0aDpjLnByZXZJbnB1dC5tYXhQb2ludGVyczpiLnBvaW50ZXJzLmxlbmd0aCxDKGMsYik7dmFyIGs9YS5lbGVtZW50O28oYi5zcmNFdmVudC50YXJnZXQsaykmJihrPWIuc3JjRXZlbnQudGFyZ2V0KSxiLnRhcmdldD1rfWZ1bmN0aW9uIEIoYSxiKXt2YXIgYz1iLmNlbnRlcixkPWEub2Zmc2V0RGVsdGF8fHt9LGU9YS5wcmV2RGVsdGF8fHt9LGY9YS5wcmV2SW5wdXR8fHt9O2IuZXZlbnRUeXBlIT09RWEmJmYuZXZlbnRUeXBlIT09R2F8fChlPWEucHJldkRlbHRhPXt4OmYuZGVsdGFYfHwwLHk6Zi5kZWx0YVl8fDB9LGQ9YS5vZmZzZXREZWx0YT17eDpjLngseTpjLnl9KSxiLmRlbHRhWD1lLngrKGMueC1kLngpLGIuZGVsdGFZPWUueSsoYy55LWQueSl9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjLGUsZixnLGg9YS5sYXN0SW50ZXJ2YWx8fGIsaT1iLnRpbWVTdGFtcC1oLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9SGEmJihpPkRhfHxoLnZlbG9jaXR5PT09ZCkpe3ZhciBqPWIuZGVsdGFYLWguZGVsdGFYLGs9Yi5kZWx0YVktaC5kZWx0YVksbD1GKGksaixrKTtlPWwueCxmPWwueSxjPXFhKGwueCk+cWEobC55KT9sLng6bC55LGc9RyhqLGspLGEubGFzdEludGVydmFsPWJ9ZWxzZSBjPWgudmVsb2NpdHksZT1oLnZlbG9jaXR5WCxmPWgudmVsb2NpdHlZLGc9aC5kaXJlY3Rpb247Yi52ZWxvY2l0eT1jLGIudmVsb2NpdHlYPWUsYi52ZWxvY2l0eVk9ZixiLmRpcmVjdGlvbj1nfWZ1bmN0aW9uIEQoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEucG9pbnRlcnMubGVuZ3RoOyliW2NdPXtjbGllbnRYOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WCksY2xpZW50WTpwYShhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpyYSgpLHBvaW50ZXJzOmIsY2VudGVyOkUoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gRShhKXt2YXIgYj1hLmxlbmd0aDtpZigxPT09YilyZXR1cm57eDpwYShhWzBdLmNsaWVudFgpLHk6cGEoYVswXS5jbGllbnRZKX07Zm9yKHZhciBjPTAsZD0wLGU9MDtiPmU7KWMrPWFbZV0uY2xpZW50WCxkKz1hW2VdLmNsaWVudFksZSsrO3JldHVybnt4OnBhKGMvYikseTpwYShkL2IpfX1mdW5jdGlvbiBGKGEsYixjKXtyZXR1cm57eDpiL2F8fDAseTpjL2F8fDB9fWZ1bmN0aW9uIEcoYSxiKXtyZXR1cm4gYT09PWI/SWE6cWEoYSk+PXFhKGIpPzA+YT9KYTpLYTowPmI/TGE6TWF9ZnVuY3Rpb24gSChhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQqZCtlKmUpfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPVFhKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIDE4MCpNYXRoLmF0YW4yKGUsZCkvTWF0aC5QSX1mdW5jdGlvbiBKKGEsYil7cmV0dXJuIEkoYlsxXSxiWzBdLFJhKStJKGFbMV0sYVswXSxSYSl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBIKGJbMF0sYlsxXSxSYSkvSChhWzBdLGFbMV0sUmEpfWZ1bmN0aW9uIEwoKXt0aGlzLmV2RWw9VGEsdGhpcy5ldldpbj1VYSx0aGlzLnByZXNzZWQ9ITEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTSgpe3RoaXMuZXZFbD1YYSx0aGlzLmV2V2luPVlhLHguYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBOKCl7dGhpcy5ldlRhcmdldD0kYSx0aGlzLmV2V2luPV9hLHRoaXMuc3RhcnRlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBPKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9cyhhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoR2F8SGEpJiYoYz10KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUCgpe3RoaXMuZXZUYXJnZXQ9YmIsdGhpcy50YXJnZXRJZHM9e30seC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUShhLGIpe3ZhciBjPXMoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKEVhfEZhKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXMoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG8oYS50YXJnZXQsaSl9KSxiPT09RWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoR2F8SGEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3QoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBSKCl7eC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9aih0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUCh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTCh0aGlzLm1hbmFnZXIsYSksdGhpcy5wcmltYXJ5VG91Y2g9bnVsbCx0aGlzLmxhc3RUb3VjaGVzPVtdfWZ1bmN0aW9uIFMoYSxiKXthJkVhPyh0aGlzLnByaW1hcnlUb3VjaD1iLmNoYW5nZWRQb2ludGVyc1swXS5pZGVudGlmaWVyLFQuY2FsbCh0aGlzLGIpKTphJihHYXxIYSkmJlQuY2FsbCh0aGlzLGIpfWZ1bmN0aW9uIFQoYSl7dmFyIGI9YS5jaGFuZ2VkUG9pbnRlcnNbMF07aWYoYi5pZGVudGlmaWVyPT09dGhpcy5wcmltYXJ5VG91Y2gpe3ZhciBjPXt4OmIuY2xpZW50WCx5OmIuY2xpZW50WX07dGhpcy5sYXN0VG91Y2hlcy5wdXNoKGMpO3ZhciBkPXRoaXMubGFzdFRvdWNoZXMsZT1mdW5jdGlvbigpe3ZhciBhPWQuaW5kZXhPZihjKTthPi0xJiZkLnNwbGljZShhLDEpfTtzZXRUaW1lb3V0KGUsY2IpfX1mdW5jdGlvbiBVKGEpe2Zvcih2YXIgYj1hLnNyY0V2ZW50LmNsaWVudFgsYz1hLnNyY0V2ZW50LmNsaWVudFksZD0wO2Q8dGhpcy5sYXN0VG91Y2hlcy5sZW5ndGg7ZCsrKXt2YXIgZT10aGlzLmxhc3RUb3VjaGVzW2RdLGY9TWF0aC5hYnMoYi1lLngpLGc9TWF0aC5hYnMoYy1lLnkpO2lmKGRiPj1mJiZkYj49ZylyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBWKGEsYil7dGhpcy5tYW5hZ2VyPWEsdGhpcy5zZXQoYil9ZnVuY3Rpb24gVyhhKXtpZihwKGEsamIpKXJldHVybiBqYjt2YXIgYj1wKGEsa2IpLGM9cChhLGxiKTtyZXR1cm4gYiYmYz9qYjpifHxjP2I/a2I6bGI6cChhLGliKT9pYjpoYn1mdW5jdGlvbiBYKCl7aWYoIWZiKXJldHVybiExO3ZhciBiPXt9LGM9YS5DU1MmJmEuQ1NTLnN1cHBvcnRzO3JldHVybltcImF1dG9cIixcIm1hbmlwdWxhdGlvblwiLFwicGFuLXlcIixcInBhbi14XCIsXCJwYW4teCBwYW4teVwiLFwibm9uZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGQpe2JbZF09Yz9hLkNTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLGQpOiEwfSksYn1mdW5jdGlvbiBZKGEpe3RoaXMub3B0aW9ucz1sYSh7fSx0aGlzLmRlZmF1bHRzLGF8fHt9KSx0aGlzLmlkPXYoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnMuZW5hYmxlPWwodGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1uYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFooYSl7cmV0dXJuIGEmc2I/XCJjYW5jZWxcIjphJnFiP1wiZW5kXCI6YSZwYj9cIm1vdmVcIjphJm9iP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uICQoYSl7cmV0dXJuIGE9PU1hP1wiZG93blwiOmE9PUxhP1widXBcIjphPT1KYT9cImxlZnRcIjphPT1LYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBfKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gYWEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsfWZ1bmN0aW9uIGVhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGZhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGdhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wVGltZT0hMSx0aGlzLnBDZW50ZXI9ITEsdGhpcy5fdGltZXI9bnVsbCx0aGlzLl9pbnB1dD1udWxsLHRoaXMuY291bnQ9MH1mdW5jdGlvbiBoYShhLGIpe3JldHVybiBiPWJ8fHt9LGIucmVjb2duaXplcnM9bChiLnJlY29nbml6ZXJzLGhhLmRlZmF1bHRzLnByZXNldCksbmV3IGlhKGEsYil9ZnVuY3Rpb24gaWEoYSxiKXt0aGlzLm9wdGlvbnM9bGEoe30saGEuZGVmYXVsdHMsYnx8e30pLHRoaXMub3B0aW9ucy5pbnB1dFRhcmdldD10aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXR8fGEsdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5yZWNvZ25pemVycz1bXSx0aGlzLm9sZENzc1Byb3BzPXt9LHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eSh0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBWKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxqYSh0aGlzLCEwKSxnKHRoaXMub3B0aW9ucy5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5lbGVtZW50O2lmKGMuc3R5bGUpe3ZhciBkO2coYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGUsZil7ZD11KGMuc3R5bGUsZiksYj8oYS5vbGRDc3NQcm9wc1tkXT1jLnN0eWxlW2RdLGMuc3R5bGVbZF09ZSk6Yy5zdHlsZVtkXT1hLm9sZENzc1Byb3BzW2RdfHxcIlwifSksYnx8KGEub2xkQ3NzUHJvcHM9e30pfX1mdW5jdGlvbiBrYShhLGMpe3ZhciBkPWIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCEwLCEwKSxkLmdlc3R1cmU9YyxjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpfXZhciBsYSxtYT1bXCJcIixcIndlYmtpdFwiLFwiTW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sbmE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG9hPVwiZnVuY3Rpb25cIixwYT1NYXRoLnJvdW5kLHFhPU1hdGguYWJzLHJhPURhdGUubm93O2xhPVwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24/ZnVuY3Rpb24oYSl7aWYoYT09PWR8fG51bGw9PT1hKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7Zm9yKHZhciBiPU9iamVjdChhKSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7dmFyIGU9YXJndW1lbnRzW2NdO2lmKGUhPT1kJiZudWxsIT09ZSlmb3IodmFyIGYgaW4gZSllLmhhc093blByb3BlcnR5KGYpJiYoYltmXT1lW2ZdKX1yZXR1cm4gYn06T2JqZWN0LmFzc2lnbjt2YXIgc2E9aChmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfSxcImV4dGVuZFwiLFwiVXNlIGBhc3NpZ25gLlwiKSx0YT1oKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHNhKGEsYiwhMCl9LFwibWVyZ2VcIixcIlVzZSBgYXNzaWduYC5cIiksdWE9MSx2YT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksd2E9XCJvbnRvdWNoc3RhcnRcImluIGEseGE9dShhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCx5YT13YSYmdmEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx6YT1cInRvdWNoXCIsQWE9XCJwZW5cIixCYT1cIm1vdXNlXCIsQ2E9XCJraW5lY3RcIixEYT0yNSxFYT0xLEZhPTIsR2E9NCxIYT04LElhPTEsSmE9MixLYT00LExhPTgsTWE9MTYsTmE9SmF8S2EsT2E9TGF8TWEsUGE9TmF8T2EsUWE9W1wieFwiLFwieVwiXSxSYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3gucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZtKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZtKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZtKHcodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm4odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm4odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm4odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBTYT17bW91c2Vkb3duOkVhLG1vdXNlbW92ZTpGYSxtb3VzZXVwOkdhfSxUYT1cIm1vdXNlZG93blwiLFVhPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtpKEwseCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1TYVthLnR5cGVdO2ImRWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZGYSYmMSE9PWEud2hpY2gmJihiPUdhKSx0aGlzLnByZXNzZWQmJihiJkdhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpCYSxzcmNFdmVudDphfSkpfX0pO3ZhciBWYT17cG9pbnRlcmRvd246RWEscG9pbnRlcm1vdmU6RmEscG9pbnRlcnVwOkdhLHBvaW50ZXJjYW5jZWw6SGEscG9pbnRlcm91dDpIYX0sV2E9ezI6emEsMzpBYSw0OkJhLDU6Q2F9LFhhPVwicG9pbnRlcmRvd25cIixZYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmIWEuUG9pbnRlckV2ZW50JiYoWGE9XCJNU1BvaW50ZXJEb3duXCIsWWE9XCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSxpKE0seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0b3JlLGM9ITEsZD1hLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIixcIlwiKSxlPVZhW2RdLGY9V2FbYS5wb2ludGVyVHlwZV18fGEucG9pbnRlclR5cGUsZz1mPT16YSxoPXIoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJkVhJiYoMD09PWEuYnV0dG9ufHxnKT8wPmgmJihiLnB1c2goYSksaD1iLmxlbmd0aC0xKTplJihHYXxIYSkmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciBaYT17dG91Y2hzdGFydDpFYSx0b3VjaG1vdmU6RmEsdG91Y2hlbmQ6R2EsdG91Y2hjYW5jZWw6SGF9LCRhPVwidG91Y2hzdGFydFwiLF9hPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtpKE4seCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1aYVthLnR5cGVdO2lmKGI9PT1FYSYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1PLmNhbGwodGhpcyxhLGIpO2ImKEdhfEhhKSYmY1swXS5sZW5ndGgtY1sxXS5sZW5ndGg9PT0wJiYodGhpcy5zdGFydGVkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnphLHNyY0V2ZW50OmF9KX19fSk7dmFyIGFiPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sYmI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koUCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPWFiW2EudHlwZV0sYz1RLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX0pO3ZhciBjYj0yNTAwLGRiPTI1O2koUix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jLnBvaW50ZXJUeXBlPT16YSxlPWMucG9pbnRlclR5cGU9PUJhO2lmKCEoZSYmYy5zb3VyY2VDYXBhYmlsaXRpZXMmJmMuc291cmNlQ2FwYWJpbGl0aWVzLmZpcmVzVG91Y2hFdmVudHMpKXtpZihkKVMuY2FsbCh0aGlzLGIsYyk7ZWxzZSBpZihlJiZVLmNhbGwodGhpcyxjKSlyZXR1cm47dGhpcy5jYWxsYmFjayhhLGIsYyl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy50b3VjaC5kZXN0cm95KCksdGhpcy5tb3VzZS5kZXN0cm95KCl9fSk7dmFyIGViPXUobmEuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxmYj1lYiE9PWQsZ2I9XCJjb21wdXRlXCIsaGI9XCJhdXRvXCIsaWI9XCJtYW5pcHVsYXRpb25cIixqYj1cIm5vbmVcIixrYj1cInBhbi14XCIsbGI9XCJwYW4teVwiLG1iPVgoKTtWLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PWdiJiYoYT10aGlzLmNvbXB1dGUoKSksZmImJnRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlJiZtYlthXSYmKHRoaXMubWFuYWdlci5lbGVtZW50LnN0eWxlW2ViXT1hKSx0aGlzLmFjdGlvbnM9YS50b0xvd2VyQ2FzZSgpLnRyaW0oKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zZXQodGhpcy5tYW5hZ2VyLm9wdGlvbnMudG91Y2hBY3Rpb24pfSxjb21wdXRlOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIGcodGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGIpe2soYi5vcHRpb25zLmVuYWJsZSxbYl0pJiYoYT1hLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKX0pLFcoYS5qb2luKFwiIFwiKSl9LHByZXZlbnREZWZhdWx0czpmdW5jdGlvbihhKXt2YXIgYj1hLnNyY0V2ZW50LGM9YS5vZmZzZXREaXJlY3Rpb247aWYodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKXJldHVybiB2b2lkIGIucHJldmVudERlZmF1bHQoKTt2YXIgZD10aGlzLmFjdGlvbnMsZT1wKGQsamIpJiYhbWJbamJdLGY9cChkLGxiKSYmIW1iW2xiXSxnPXAoZCxrYikmJiFtYltrYl07aWYoZSl7dmFyIGg9MT09PWEucG9pbnRlcnMubGVuZ3RoLGk9YS5kaXN0YW5jZTwyLGo9YS5kZWx0YVRpbWU8MjUwO2lmKGgmJmkmJmopcmV0dXJufXJldHVybiBnJiZmP3ZvaWQgMDplfHxmJiZjJk5hfHxnJiZjJk9hP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9LHByZXZlbnRTcmM6ZnVuY3Rpb24oYSl7dGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkPSEwLGEucHJldmVudERlZmF1bHQoKX19O3ZhciBuYj0xLG9iPTIscGI9NCxxYj04LHJiPXFiLHNiPTE2LHRiPTMyO1kucHJvdG90eXBlPXtkZWZhdWx0czp7fSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxhKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1fKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9XyhhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV8oYSx0aGlzKSwtMT09PXIoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1fKGEsdGhpcyk7dmFyIGI9cih0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChiLGEpfXZhciBjPXRoaXMsZD10aGlzLnN0YXRlO3FiPmQmJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpLGIoYy5vcHRpb25zLmV2ZW50KSxhLmFkZGl0aW9uYWxFdmVudCYmYihhLmFkZGl0aW9uYWxFdmVudCksZD49cWImJmIoYy5vcHRpb25zLmV2ZW50K1ooZCkpfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPXRiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKHRifG5iKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bGEoe30sYSk7cmV0dXJuIGsodGhpcy5vcHRpb25zLmVuYWJsZSxbdGhpcyxiXSk/KHRoaXMuc3RhdGUmKHJifHNifHRiKSYmKHRoaXMuc3RhdGU9bmIpLHRoaXMuc3RhdGU9dGhpcy5wcm9jZXNzKGIpLHZvaWQodGhpcy5zdGF0ZSYob2J8cGJ8cWJ8c2IpJiZ0aGlzLnRyeUVtaXQoYikpKToodGhpcy5yZXNldCgpLHZvaWQodGhpcy5zdGF0ZT10YikpfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0saShhYSxZLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKG9ifHBiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkhhfHwhZSk/YnxzYjpkfHxlP2MmR2E/YnxxYjpiJm9iP2J8cGI6b2I6dGJ9fSksaShiYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGFuXCIsdGhyZXNob2xkOjEwLHBvaW50ZXJzOjEsZGlyZWN0aW9uOlBhfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5kaXJlY3Rpb24sYj1bXTtyZXR1cm4gYSZOYSYmYi5wdXNoKGxiKSxhJk9hJiZiLnB1c2goa2IpLGJ9LGRpcmVjdGlvblRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9ITAsZD1hLmRpc3RhbmNlLGU9YS5kaXJlY3Rpb24sZj1hLmRlbHRhWCxnPWEuZGVsdGFZO3JldHVybiBlJmIuZGlyZWN0aW9ufHwoYi5kaXJlY3Rpb24mTmE/KGU9MD09PWY/SWE6MD5mP0phOkthLGM9ZiE9dGhpcy5wWCxkPU1hdGguYWJzKGEuZGVsdGFYKSk6KGU9MD09PWc/SWE6MD5nP0xhOk1hLGM9ZyE9dGhpcy5wWSxkPU1hdGguYWJzKGEuZGVsdGFZKSkpLGEuZGlyZWN0aW9uPWUsYyYmZD5iLnRocmVzaG9sZCYmZSZiLmRpcmVjdGlvbn0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGFhLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJm9ifHwhKHRoaXMuc3RhdGUmb2IpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj0kKGEuZGlyZWN0aW9uKTtiJiYoYS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2IpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoY2EsYWEse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJm9iKX0sZW1pdDpmdW5jdGlvbihhKXtpZigxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO2EuYWRkaXRpb25hbEV2ZW50PXRoaXMub3B0aW9ucy5ldmVudCtifXRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLGkoZGEsWSx7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6MjUxLHRocmVzaG9sZDo5fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltoYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEdhfEhhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmRWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZHYSlyZXR1cm4gcmI7cmV0dXJuIHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PXJiJiYoYSYmYS5ldmVudFR5cGUmR2E/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPXJhKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGkoZWEsYWEse2RlZmF1bHRzOntldmVudDpcInJvdGF0ZVwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2piXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEucm90YXRpb24pPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfX0pLGkoZmEsYWEse2RlZmF1bHRzOntldmVudDpcInN3aXBlXCIsdGhyZXNob2xkOjEwLHZlbG9jaXR5Oi4zLGRpcmVjdGlvbjpOYXxPYSxwb2ludGVyczoxfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBiYS5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBjJihOYXxPYSk/Yj1hLm92ZXJhbGxWZWxvY2l0eTpjJk5hP2I9YS5vdmVyYWxsVmVsb2NpdHlYOmMmT2EmJihiPWEub3ZlcmFsbFZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZjJmEub2Zmc2V0RGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmEubWF4UG9pbnRlcnM9PXRoaXMub3B0aW9ucy5wb2ludGVycyYmcWEoYik+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZHYX0sZW1pdDpmdW5jdGlvbihhKXt2YXIgYj0kKGEub2Zmc2V0RGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSksaShnYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJ0YXBcIixwb2ludGVyczoxLHRhcHM6MSxpbnRlcnZhbDozMDAsdGltZToyNTAsdGhyZXNob2xkOjkscG9zVGhyZXNob2xkOjEwfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltpYl19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPGIudGltZTtpZih0aGlzLnJlc2V0KCksYS5ldmVudFR5cGUmRWEmJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZiYmYyl7aWYoYS5ldmVudFR5cGUhPUdhKXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGc9dGhpcy5wVGltZT9hLnRpbWVTdGFtcC10aGlzLnBUaW1lPGIuaW50ZXJ2YWw6ITAsaD0hdGhpcy5wQ2VudGVyfHxIKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsaCYmZz90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBpPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1pKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1yYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxvYik6cmJ9cmV0dXJuIHRifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT10Yn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLHRifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1yYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGEuVkVSU0lPTj1cIjIuMC44XCIsaGEuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpnYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWEse2VuYWJsZTohMX1dLFtjYSx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYSx7ZGlyZWN0aW9uOk5hfV0sW2JhLHtkaXJlY3Rpb246TmF9LFtcInN3aXBlXCJdXSxbZ2FdLFtnYSx7ZXZlbnQ6XCJkb3VibGV0YXBcIix0YXBzOjJ9LFtcInRhcFwiXV0sW2RhXV0sY3NzUHJvcHM6e3VzZXJTZWxlY3Q6XCJub25lXCIsdG91Y2hTZWxlY3Q6XCJub25lXCIsdG91Y2hDYWxsb3V0Olwibm9uZVwiLGNvbnRlbnRab29taW5nOlwibm9uZVwiLHVzZXJEcmFnOlwibm9uZVwiLHRhcEhpZ2hsaWdodENvbG9yOlwicmdiYSgwLDAsMCwwKVwifX07dmFyIHViPTEsdmI9MjtpYS5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT92Yjp1Yn0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJnJiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT12Ynx8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKG9ifHBifHFiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWSlyZXR1cm4gYTtmb3IodmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPTA7YzxiLmxlbmd0aDtjKyspaWYoYltjXS5vcHRpb25zLmV2ZW50PT1hKXJldHVybiBiW2NdO3JldHVybiBudWxsfSxhZGQ6ZnVuY3Rpb24oYSl7aWYoZihhLFwiYWRkXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiYmdGhpcy5yZW1vdmUoYiksdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLGEubWFuYWdlcj10aGlzLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlbW92ZVwiLHRoaXMpKXJldHVybiB0aGlzO2lmKGE9dGhpcy5nZXQoYSkpe3ZhciBiPXRoaXMucmVjb2duaXplcnMsYz1yKGIsYSk7LTEhPT1jJiYoYi5zcGxpY2UoYywxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpKX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCYmYiE9PWQpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocShhKSxmdW5jdGlvbihhKXtjW2FdPWNbYV18fFtdLGNbYV0ucHVzaChiKX0pLHRoaXN9fSxvZmY6ZnVuY3Rpb24oYSxiKXtpZihhIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXSYmY1thXS5zcGxpY2UocihjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc319LGVtaXQ6ZnVuY3Rpb24oYSxiKXt0aGlzLm9wdGlvbnMuZG9tRXZlbnRzJiZrYShhLGIpO3ZhciBjPXRoaXMuaGFuZGxlcnNbYV0mJnRoaXMuaGFuZGxlcnNbYV0uc2xpY2UoKTtpZihjJiZjLmxlbmd0aCl7Yi50eXBlPWEsYi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2Iuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKX07Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDspY1tkXShiKSxkKyt9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50JiZqYSh0aGlzLCExKSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmVsZW1lbnQ9bnVsbH19LGxhKGhhLHtJTlBVVF9TVEFSVDpFYSxJTlBVVF9NT1ZFOkZhLElOUFVUX0VORDpHYSxJTlBVVF9DQU5DRUw6SGEsU1RBVEVfUE9TU0lCTEU6bmIsU1RBVEVfQkVHQU46b2IsU1RBVEVfQ0hBTkdFRDpwYixTVEFURV9FTkRFRDpxYixTVEFURV9SRUNPR05JWkVEOnJiLFNUQVRFX0NBTkNFTExFRDpzYixTVEFURV9GQUlMRUQ6dGIsRElSRUNUSU9OX05PTkU6SWEsRElSRUNUSU9OX0xFRlQ6SmEsRElSRUNUSU9OX1JJR0hUOkthLERJUkVDVElPTl9VUDpMYSxESVJFQ1RJT05fRE9XTjpNYSxESVJFQ1RJT05fSE9SSVpPTlRBTDpOYSxESVJFQ1RJT05fVkVSVElDQUw6T2EsRElSRUNUSU9OX0FMTDpQYSxNYW5hZ2VyOmlhLElucHV0OngsVG91Y2hBY3Rpb246VixUb3VjaElucHV0OlAsTW91c2VJbnB1dDpMLFBvaW50ZXJFdmVudElucHV0Ok0sVG91Y2hNb3VzZUlucHV0OlIsU2luZ2xlVG91Y2hJbnB1dDpOLFJlY29nbml6ZXI6WSxBdHRyUmVjb2duaXplcjphYSxUYXA6Z2EsUGFuOmJhLFN3aXBlOmZhLFBpbmNoOmNhLFJvdGF0ZTplYSxQcmVzczpkYSxvbjptLG9mZjpuLGVhY2g6ZyxtZXJnZTp0YSxleHRlbmQ6c2EsYXNzaWduOmxhLGluaGVyaXQ6aSxiaW5kRm46aixwcmVmaXhlZDp1fSk7dmFyIHdiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTt3Yi5IYW1tZXI9aGEsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBoYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWhhOmFbY109aGF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbW1lci5taW4uanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljL2hhbW1lci5taW4uanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        