
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(657);

var _Header2 = _interopRequireDefault(_Header);

var _loader = __webpack_require__(660);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/App.js';

exports.default = function (_ref) {
  var children = _ref.children,
      pathname = _ref.pathname;
  return _react2.default.createElement('main', {
    'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2319098592,
    css: '\n       @import url(\'https://fonts.googleapis.com/css?family=Roboto:300,400,500\');\n       @import url(\'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css\');\n      * {\n        font-family: Roboto;\n      }\n    '
  }), _react2.default.createElement(_Header2.default, { pathname: pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, children), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js', 'data-jsx': 2319098592,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/App.js"); } } })();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(594);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/Header.js';


var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  }

  (0, _createClass3.default)(Header, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props != nextProps;
    }
  }, {
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
      }, _react2.default.createElement('ul', { id: 'nav', className: 'left hide-on-med-and-down', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('li', { className: this.props.pathname === '/' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Home '))), _react2.default.createElement('li', { className: this.props.pathname === '/discover' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/discover', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Discover'))), _react2.default.createElement('li', { className: this.props.pathname === '/about' && 'active', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'About'))))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/Header.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(81);

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
          lineNumber: 16
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2073832950,
        css: 'div.progress[data-jsx="2073832950"]: {margin: 0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCd0IsQUFDSyxzQ0FDRCxZQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QYXJ0aC9Eb2N1bWVudHMvZ3JhcGhxbC9uZXh0LWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZGl2LnByb2dyZXNzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/loader.js */'
      }), _react2.default.createElement('div', { className: 'indeterminate', 'data-jsx': 2073832950,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }));
    };

    console.log(props);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/loader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/loader.js"); } } })();

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(568);

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
        credentials: 'same-origin',
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(640);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(568);

var _initClient = __webpack_require__(661);

var _loader = __webpack_require__(660);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(656);

var _App2 = _interopRequireDefault(_App);

var _withData = __webpack_require__(662);

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
      return _react2.default.createElement(_App2.default, { pathname: props.url.pathname, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 5
            }
      }, _react2.default.createElement('h1', {
            __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7
            }
      }, ' Hello '));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
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

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(669);


/***/ })

},[670]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz8xZjIxZjVhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzFmMjFmNWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/MWYyMWY1YSIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdENsaWVudC5qcz8xZjIxZjVhIiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz8xZjIxZjVhIiwid2VicGFjazovLy8uL3BhZ2VzPzFmMjFmNWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7TUFBRztNQUFVO3lCQUMxQjtnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBO2FBQUE7U0FhSTtBQWJKLHNCQWFLLGtDQUFPLFVBQVU7Z0JBQWxCO2tCQUNBO0FBREE7c0JBQ0EsdUJBQUssV0FBVSx5QkFBZjs7Z0JBQUE7a0JBRUU7QUFGRjtLQUtBLHFEQUFRLEtBQUksK0ZBQVo7O2dCQUFBO2tCQUFBO0FBQUE7O0FBcEJOLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPOzs7O0FBQ0E7Ozs7Ozs7OztJQUVjO2tDQUNuQjs7a0JBQVksT0FBTTt3Q0FBQTs7aUlBRWpCOzs7OzswQ0FDcUIsV0FBVyxXQUMvQjthQUFPLEtBQUssU0FDYjs7Ozs2QkFFQzs2QkFBUSx1QkFBSyxXQUFVO29CQUFmO3NCQUNOO0FBRE07T0FBQSxrQkFDTix1QkFBSyxXQUFVO29CQUFmO3NCQUNFO0FBREY7eUJBQ0Usc0JBQUksSUFBRyxPQUFNLFdBQVU7b0JBQXZCO3NCQUNFO0FBREY7eUJBQ0Usc0JBQUksV0FBVyxLQUFLLE1BQU0sYUFBYSxPQUFPO29CQUE5QztzQkFDTTtBQUROO3lCQUNPLGdDQUFNLFVBQVAsTUFBZ0IsTUFBSztvQkFBckI7c0JBQ0M7QUFERDt5QkFDQzs7b0JBQUE7c0JBQUE7QUFB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OzhCQUFBO0FBQUE7QUFBQTtBQUhHLEciLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBwYXRobmFtZSB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHsvKiBpZihwcm9jZXNzLldpbmRvdyl7XG4gICAgICB2YXIgdGhpbmcgPSBjcmVhdGVGcmFnbWVudCg8TG9hZGVyIHN0eWxlPXt7ZGlzcGxheTogZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gXCJub25lXCIgOiBcImJsb2NrXCJ9fS8+KSAqL31cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyk7XG4gICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9jc3MvbWF0ZXJpYWxpemUubWluLmNzcycpO1xuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgeyBjaGlsZHJlbiB9XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjIvanMvbWF0ZXJpYWxpemUubWluLmpzXCIvPlxuICA8L21haW4+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJibHVlIGRhcmtlbi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImxlZnQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lID09PSAnLycgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgICAgXHRcdFx0PGEgPkhvbWUgPC9hPlxuICAgICAgICAgIFx0XHRcdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Rpc2NvdmVyJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9kaXNjb3Zlcic+XG4gICAgICAgICAgICAgIDxhID5EaXNjb3ZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Fib3V0JyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICAgIDxhID5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZGl2LnByb2dyZXNzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2FkZXIuanMiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG5cbmZ1bmN0aW9uIF9pbml0Q2xpZW50IChoZWFkZXJzLCBpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLFxuICAgIGRhdGFJZEZyb21PYmplY3Q6IHJlc3VsdCA9PiByZXN1bHQuaWQgfHwgbnVsbCxcbiAgICBuZXR3b3JrSW50ZXJmYWNlOiBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlKHtcbiAgICAgIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsJyxcbiAgICAgIG9wdHM6IHtcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5pdENsaWVudCA9IChoZWFkZXJzLCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdENsaWVudC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpbml0Q2xpZW50IH0gZnJvbSAnLi9pbml0Q2xpZW50J1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IChcbiAgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGN0eC5yZXEgPyBjdHgucmVxLmhlYWRlcnMgOiB7fVxuICAgICAgY29uc3QgY2xpZW50ID0gaW5pdENsaWVudChoZWFkZXJzKVxuXG4gICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgdXJsOiB7IHF1ZXJ5OiBjdHgucXVlcnksIHBhdGhuYW1lOiBjdHgucGF0aG5hbWUgfSxcbiAgICAgICAgLi4uYXdhaXQgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBwID0gKFxuICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKGFwcClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgICAgYXBvbGxvOiB7XG4gICAgICAgICAgICBkYXRhOiBjbGllbnQuZ2V0SW5pdGlhbFN0YXRlKCkuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgLi4ucHJvcHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICB0aGlzLmNsaWVudCA9IGluaXRDbGllbnQodGhpcy5wcm9wcy5oZWFkZXJzLCB0aGlzLnByb3BzLmluaXRpYWxTdGF0ZSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmNsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuXG4gICAgICApXG4gICAgfVxuICB9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiLCJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICAgICAgPEFwcCBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfT5cblxuICAgICAgICAgICAgPGgxPiBIZWxsbyA8L2gxPlxuICAgICAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        