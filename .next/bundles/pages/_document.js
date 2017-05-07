
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(235);

var _style2 = _interopRequireDefault(_style);

var _document = __webpack_require__(440);

var _document2 = _interopRequireDefault(_document);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(527);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(234);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/_document.js?entry';
// ./pages/_document.js


var _class = function (_Document) {
  (0, _inherits3.default)(_class, _Document);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2882508992,
        css: '\n         @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n         @import url(\'https://fonts.googleapis.com/icon?family=Material+Icons\');\n         @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n         @import url(\'../static/materialize.min.js\')\n        * {\n          font-family: Roboto;\n\n        }\n        body {\n          color: #404040;\n        }\n        h3{\n          font-weight: 200;\n        }\n      '
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 2882508992,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('title', {
        'data-jsx': 2882508992,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, ' Fun Project ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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

      var qs = __webpack_require__(85)
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

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(528);

var _Header2 = _interopRequireDefault(_Header);

var _loader = __webpack_require__(529);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/App.js';

exports.default = function (_ref) {
  var children = _ref.children,
      props = _ref.props;
  return _react2.default.createElement('main', { className: 'darken-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, username: props.url.username, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, children));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); } } })();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(435);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _usernameField = __webpack_require__(530);

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
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'nav-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', { href: '#', className: 'brand-logo right', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_usernameField2.default, { username: this.props.username, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement('ul', { id: 'nav', className: 'left hide-on-med-and-down', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('li', { className: this.props.pathname === '/' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Home '))), _react2.default.createElement('li', { className: this.props.pathname === '/discover' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/discover', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Discover'))), _react2.default.createElement('li', { className: this.props.pathname === '/about' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'About'))))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); } } })();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(235);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(45);

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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NmJlOGRlOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz82YmU4ZGU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzZiZThkZTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/NmJlOGRlOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/NmJlOGRlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCOzs7O0FBQ3hCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OztBQUpQOzs7Ozs7Ozs7Ozs7Ozs2QkFTSTs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHOztvQkFBRDtzQkFBQTtBQUFBO0FBQUE7aUJBQUE7YUFpQkk7QUFqQkosa0RBaUJVLE1BQUssWUFBVyxTQUFRLHFEQUE5Qjs7b0JBQUE7c0JBQ0E7QUFEQTswQkFDQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRUo7O29CQUFBO3NCQUNJO0FBREo7QUFBQSx5QkFDSzs7b0JBQUQ7c0JBQ0Y7QUFERTtBQUFBLDBCQUNEOztvQkFBRDtzQkFPUDtBQVBPO0FBQUE7Ozs7O0FBM0JtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ050Qjs7OztBQUlQOzs7Ozs7OztrQkFBZTtNQUFHO01BQVU7eUJBQzFCLHdCQUFNLFdBQVU7Z0JBQWhCO2tCQUtJO0FBTEo7R0FBQSxrQkFLSyxrQ0FBTyxVQUFVLE1BQU0sSUFBSSxVQUFVLFVBQVUsTUFBTSxJQUFJO2dCQUExRDtrQkFDQTtBQURBO3NCQUNBLHVCQUFLLFdBQVU7Z0JBQWY7a0JBRUU7QUFGRjtLQUFBO0FBUE4sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk87Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7SUFDYztrQ0FDbkI7O2tCQUFZLE9BQU07d0NBQUE7O2lJQUVqQjtBQUNEO0FBQ0E7QUFDQTs7Ozs7OzZCQUVFOzZCQUFRLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ047QUFETTtPQUFBLGtCQUNOLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ0U7QUFERjt5QkFDRSx1QkFBSyxNQUFLLEtBQUksV0FBVTtvQkFBeEI7c0JBQ0U7QUFERjt5QkFDRyx5Q0FBYyxVQUFVLEtBQUssTUFBTTtvQkFBcEM7c0JBQ0Y7QUFERTsyQkFDRixzQkFBSSxJQUFHLE9BQU0sV0FBVTtvQkFBdkI7c0JBQ0U7QUFERjt5QkFDRSxzQkFBSSxXQUFXLEtBQUssTUFBTSxhQUFhLE9BQU87b0JBQTlDO3NCQUNNO0FBRE47eUJBQ08sZ0NBQU0sVUFBUCxNQUFnQixNQUFLO29CQUFyQjtzQkFDQztBQUREO3lCQUNDOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FHUCxrREFBSSxXQUFXLEtBQUssTUFBTSxhQUFjLGVBQWU7b0JBQXZEO3NCQUNBO0FBREE7eUJBQ0MsZ0NBQU0sVUFBUCxNQUFnQixNQUFLO29CQUFyQjtzQkFDSTtBQURKO3lCQUNJOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FHSixxREFBSSxXQUFXLEtBQUssTUFBTSxhQUFjLFlBQVk7b0JBQXBEO3NCQUNBO0FBREE7eUJBQ0MsZ0NBQU0sVUFBUCxNQUFnQixNQUFLO29CQUFyQjtzQkFDSTtBQURKO3lCQUNJOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FNWDs7Ozs7RUEvQmlDLGdCQUFNOztrQkFBckIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGQ7Ozs7QUFDQTs7Ozs7Ozs7OztrQ0FJTDs7a0JBQVksT0FBTTt3Q0FBQTs7c0lBQ1Y7O1VBR1IsU0FBUyxZQUVMOzs2QkFDRSx1QkFBSyxXQUFVLHdCQUFmOztvQkFBQTtzQkFBQTtBQUFBO09BQUE7aUJBQUE7YUFNVTtBQU5WLGlEQU1lLFdBQVUsNkJBQWY7O29CQUFBO3NCQUVmO0FBRmU7O0FBWGQ7O1lBQVEsSUFBSTtXQUNiOzs7O0VBSjBCLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVCOzs7Ozs7Ozs7SUFFYzt5Q0FDbkI7O3lCQUFZLE9BQU07d0NBQUE7O29KQUNWOztVQUdSLFNBQVMsWUFDSDtVQUFHLE1BQUssTUFBTSxVQUNaOytCQUFROztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBYyxtQkFBSyxNQUFNLFVBQ2xDO0FBRkQsYUFHRTsrQkFDSSx1QkFBSyxXQUFVO3NCQUFmO3dCQUNFO0FBREY7U0FBQSx1Q0FDSyxXQUFVO3NCQUFiO3dCQUNBO0FBREE7cURBQ08sSUFBRyxlQUFjLE1BQUssUUFBTyxXQUFVO3NCQUE5Qzt3QkFDQTtBQURBOzRCQUNBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FHVDtBQUNKO0FBZEM7O1lBQVEsSUFBSTtXQUNiOzs7O0VBSndDLGdCQUFNOztrQkFBNUIsYyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzXG5pbXBvcnQgRG9jdW1lbnQsIHsgIE1haW4sSGVhZCwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIERvY3VtZW50IHtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyk7XG4gICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucycpO1xuICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9jc3MvbWF0ZXJpYWxpemUubWluLmNzcycpO1xuICAgICAgICAgQGltcG9ydCB1cmwoJy4uL3N0YXRpYy9tYXRlcmlhbGl6ZS5taW4uanMnKVxuICAgICAgICAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuXG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgICAgaDN7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPiBGdW4gUHJvamVjdCA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cblxuXG5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcHJvcHMgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrZW4tMlwiPlxuICAgIHsvKiBpZihwcm9jZXNzLldpbmRvdyl7XG4gICAgICB2YXIgdGhpbmcgPSBjcmVhdGVGcmFnbWVudCg8TG9hZGVyIHN0eWxlPXt7ZGlzcGxheTogZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gXCJub25lXCIgOiBcImJsb2NrXCJ9fS8+KSAqL31cblxuXG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwcm9wcy51cmwucGF0aG5hbWV9IHVzZXJuYW1lPXtwcm9wcy51cmwudXNlcm5hbWV9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVzZXJuYW1lRmllbGQgZnJvbSAnLi91c2VybmFtZUZpZWxkJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIC8vIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJibHVlIGRhcmtlbi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIHJpZ2h0XCI+XG4gICAgICAgICAgPFVzZXJuYW1lRmllbGQgdXNlcm5hbWU9e3RoaXMucHJvcHMudXNlcm5hbWV9IC8+PC9kaXY+XG4gICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImxlZnQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lID09PSAnLycgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgICAgXHRcdFx0PGEgPkhvbWUgPC9hPlxuICAgICAgICAgIFx0XHRcdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Rpc2NvdmVyJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9kaXNjb3Zlcic+XG4gICAgICAgICAgICAgIDxhID5EaXNjb3ZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Fib3V0JyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICAgIDxhID5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICByZW5kZXIgPSAoKSA9PiB7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkaXYucHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXRlcm1pbmF0ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xvYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJuYW1lRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZXJuYW1lKXtcbiAgICAgICAgICByZXR1cm4gKDxoND5XZWxjb21lLCB7dGhpcy5wcm9wcy51c2VybmFtZX0uPC9oND4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwcmVmaXhcIj48L2k+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWNvbl9wcmVmaXhcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXNlcm5hbWVGaWVsZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        