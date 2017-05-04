
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(735);

var _App2 = _interopRequireDefault(_App);

var _withData = __webpack_require__(741);

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/next-apollo/pages/index.js?entry';
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/pages/index.js"); } } })();
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

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(570);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(736);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/thirdTry/next-apollo/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children,
      pathname = _ref.pathname;
  return _react2.default.createElement("main", {
    "data-jsx": 2938867643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js", "data-jsx": 2938867643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2938867643,
    css: "\n       @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');\n       @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css');\n      * {\n        font-family: Roboto;\n      }\n      body{\n        margin: 0px;\n      }\n    "
  }), _react2.default.createElement(_Header2.default, { pathname: pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), children);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/components/App.js"); } } })();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(723);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/components/Header.js"); } } })();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(569);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/lib/initClient.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/lib/initClient.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 741:
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

__webpack_require__(684);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(569);

var _initClient = __webpack_require__(740);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/next-apollo/lib/withData.js';

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
                      lineNumber: 19
                    }
                  }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
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
            lineNumber: 47
          }
        }, _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        })));
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(622);


/***/ })

},[756]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9kMTRhYzBiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzP2QxNGFjMGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZDE0YWMwYiIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdENsaWVudC5qcz9kMTRhYzBiIiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz9kMTRhYzBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFHUDs7Ozs7OzswQ0FBd0IsVUFBQyxPQUFEOzZCQUNqQiwrQkFBSSxVQUFVLE1BQU0sSUFBSTs0QkFBekI7OEJBRU07QUFGTjtPQUFBLGtCQUVNOzs0QkFBQTs4QkFBQTtBQUFBO0FBQUE7QUFIRyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7a0JBQWU7TUFBRztNQUFVO3lCQUMxQjtnQkFBQTs7Z0JBQUE7a0JBQ0k7QUFESjtBQUFBLCtDQUNZLEtBQUksK0ZBQVo7O2dCQUFBO2tCQUFBO0FBQUE7O2FBREo7U0FZSTtBQVpKLHNCQVlLLGtDQUFPLFVBQVU7Z0JBQWxCO2tCQUNFO0FBREY7TUFaSjtBQURGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7Ozs7Ozs7O2tCQUFlO1FBQUc7MkJBQ2pCOztzQkFBQTt3QkFDTztBQURQO0FBQUEsdUJBQ1EsZ0NBQUssVUFBTixNQUFlLE1BQUs7c0JBQXBCO3dCQUNJO0FBREo7dUJBQ0kscUJBQUcsV0FBVyxhQUFhLE9BQU87c0JBQWxDO3dCQUFBO0FBQUE7T0FHSiwwQkFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBSztzQkFBcEI7d0JBQ0k7QUFESjt1QkFDSSxxQkFBRyxXQUFXLGFBQWEsWUFBWTtzQkFBdkM7d0JBQUE7QUFBQTtPQUFBO0FBUFosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdUI7O0FBQ3ZCLElBQUksZUFBZTs7QUFHbkIsU0FBUyxZQUFhLFNBQVMsY0FDN0I7O2tCQUVFO2FBQVMsQ0FBQyxRQUNWO3NCQUFrQjthQUFVLE9BQU8sTUFBTTtBQUN6Qzs7V0FFRTs7cUJBRUU7aUJBSVA7QUFMTztBQUZGLEtBRGdCO0FBSGxCLEdBRFM7QUFjYjs7QUFBTyxJQUFNLGtDQUFhLG9CQUFDLFNBQStCO01BQUEsbUZBQ3hEOztNQUFJLENBQUMsUUFBUSxTQUNYO1dBQU8sWUFBWSxTQUNwQjtBQUNEO01BQUksQ0FBQyxjQUNIO21CQUFlLFlBQVksU0FDNUI7QUFFRDs7U0FDRDtBQVRNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7O0FBQ087Ozs7QUFDa0I7O0FBR3pCOzs7Ozs7a0JBQWUsVUFBQyxXQUFEO3FDQUFBO29DQUFBOzs7V0FBQTt5QkFBQTsrRkFFbUIsS0FGbkI7c0NBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBR0g7QUFIRyw0QkFHTyxJQUFJLE1BQU0sSUFBSSxJQUFJLFVBQzVCO0FBSkcsMkJBSU0sNEJBQVc7MkJBSmpCOzt5QkFPRixFQUFFLE9BQU8sSUFBSSxPQUFPLFVBQVUsSUFBSTtBQUF2QztrQ0FQTzt5QkFRRyxVQUFVLGtCQUFrQixVQUFVLGdCQUFnQixPQUFPOztxQkFSaEU7eUNBTUg7QUFORzs7c0JBV0osUUFBUSxTQVhKO29DQUFBO0FBQUE7QUFZRDs7QUFaQyx3Q0FhSiw2Q0FBZSxRQUFRO2dDQUF4QjtrQ0FDVTtBQURWO21CQUFBLGdDQUNXLHNDQUFjOztnQ0FBZjtrQ0FBQTtBQUFBO0FBQUE7a0NBZEw7eUJBaUJELGtDQUFnQjs7cUJBakJmOzs7OzhCQXVCRyxPQUFPLGtCQUdqQjtBQUhJO0FBREY7NkJBdEJLO0FBcUJQLHFCQU1HOztxQkEzQkk7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQStCWDtBQS9CVzs7b0JBK0JFLE9BQU87MENBQUE7O3dJQUdsQjs7WUFBSyxTQUFTLDRCQUFXLE1BQUssTUFBTSxTQUFTLE1BQUssTUFBTTs7YUFFekQ7QUFwQ1U7OztXQUFBOytCQXdDVDsrQkFDTyw2Q0FBZSxRQUFRLEtBQUs7c0JBQTdCO3dCQUNRO0FBRFI7U0FBQSxnQ0FDUyxzQ0FBYyxLQUFLOztzQkFBcEI7d0JBSWY7QUFKZTtBQUFBO0FBMUNMO0FBQUE7O1dBQUE7SUFDQyxnQkFBTTtBQUR0QixFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICAgICAgPEFwcCBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfSA+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8aDE+IEhlbGxvIDwvaDE+XG4gICAgICA8L0FwcD5cbikpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHBhdGhuYW1lIH0pID0+IChcbiAgPG1haW4+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9qcy9tYXRlcmlhbGl6ZS5taW4uanNcIi8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyk7XG4gICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9jc3MvbWF0ZXJpYWxpemUubWluLmNzcycpO1xuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICB9XG4gICAgICBib2R5e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0vPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gIDwvbWFpbj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZX0pID0+IChcbiA8aGVhZGVyPlxuICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiA8L2hlYWRlcj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xubGV0IGFwb2xsb0NsaWVudCA9IG51bGxcblxuXG5mdW5jdGlvbiBfaW5pdENsaWVudCAoaGVhZGVycywgaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlcixcbiAgICBkYXRhSWRGcm9tT2JqZWN0OiByZXN1bHQgPT4gcmVzdWx0LmlkIHx8IG51bGwsXG4gICAgbmV0d29ya0ludGVyZmFjZTogY3JlYXRlTmV0d29ya0ludGVyZmFjZSh7XG4gICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvZ3JhcGhxbCcsXG4gICAgICBvcHRzOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDbGllbnQgPSAoaGVhZGVycywgaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIGFwb2xsb0NsaWVudFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luaXRDbGllbnQuanMiLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgaW5pdENsaWVudCB9IGZyb20gJy4vaW5pdENsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4gKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gY3R4LnJlcSA/IGN0eC5yZXEuaGVhZGVycyA6IHt9XG4gICAgICBjb25zdCBjbGllbnQgPSBpbml0Q2xpZW50KGhlYWRlcnMpXG5cbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICB1cmw6IHsgcXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZSB9LFxuICAgICAgICAuLi5hd2FpdCAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcHAgPSAoXG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIGRhdGE6IGNsaWVudC5nZXRJbml0aWFsU3RhdGUoKS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgIHRoaXMuY2xpZW50ID0gaW5pdENsaWVudCh0aGlzLnByb3BzLmhlYWRlcnMsIHRoaXMucHJvcHMuaW5pdGlhbFN0YXRlKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuY2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG5cbiAgICAgIClcbiAgICB9XG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        