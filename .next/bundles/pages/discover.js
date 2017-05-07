
          window.__NEXT_REGISTER_PAGE('/discover', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(598);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(67);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(637);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(598);

var _initClient = __webpack_require__(653);

var _loader = __webpack_require__(529);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(527);

var _App2 = _interopRequireDefault(_App);

var _link = __webpack_require__(435);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(654);

var _withData2 = _interopRequireDefault(_withData);

var _PostList = __webpack_require__(670);

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/discover.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, { props: props, __source: {
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
    })(module.exports.default || module.exports, "/discover")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(661);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(598);

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

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(94);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(661);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(235);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(598);

var _post = __webpack_require__(672);

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

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(661);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(598);

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

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _PostUpvoter = __webpack_require__(671);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownVoter = __webpack_require__(669);

var _PostDownVoter2 = _interopRequireDefault(_PostDownVoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js';

var IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'card-panel grey lighten-5 z-depth-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'row valign-wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'col s2', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'col', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('img', { src: props.post.author ? IMAGEFINDER + props.post.author.username : IMAGEFINDER + props.post.id, alt: '', className: 'circle responsive-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }))), _react2.default.createElement('div', { className: 'row', style: { marginBottom: 0 + 'px', textAlign: 'center', marginTop: 5 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'col s12', style: { color: props.post.votes >= 0 ? '#00e676' : '#FF1744', fontSize: 1.5 + 'em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.post.votes))), _react2.default.createElement('div', { className: 'col s10', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('div', { className: 'postTitle', style: { marginBottom: 8 + 'px', fontSize: 20 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.post.title ? props.post.title : "< Empty > "), _react2.default.createElement('span', { className: 'black-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.post.body ? props.post.body : "< Empty >")), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_PostDownVoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_PostUpvoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(662);


/***/ })

},[673]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz9hM2M4OWM0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2EzYzg5YzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/YTNjODljNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJuYW1lRmllbGQuanM/YTNjODljNCIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdENsaWVudC5qcz9hM2M4OWM0Iiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz9hM2M4OWM0Iiwid2VicGFjazovLy8uL3BhZ2VzL2Rpc2NvdmVyLmpzP2EzYzg5YzQiLCJ3ZWJwYWNrOi8vLy4vZGF0YXN0dWZmL1Bvc3REb3duVm90ZXIuanM/YTNjODljNCIsIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvUG9zdExpc3QuanM/YTNjODljNCIsIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvUG9zdFVwdm90ZXIuanM/YTNjODljNCIsIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvcG9zdC5qcz9hM2M4OWM0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFJUDs7Ozs7Ozs7a0JBQWU7TUFBRztNQUFVO3lCQUMxQix3QkFBTSxXQUFVO2dCQUFoQjtrQkFLSTtBQUxKO0dBQUEsa0JBS0ssa0NBQU8sVUFBVSxNQUFNLElBQUksVUFBVSxVQUFVLE1BQU0sSUFBSTtnQkFBMUQ7a0JBQ0E7QUFEQTtzQkFDQSx1QkFBSyxXQUFVO2dCQUFmO2tCQUVFO0FBRkY7S0FBQTtBQVBOLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pPOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0lBQ2M7a0NBQ25COztrQkFBWSxPQUFNO3dDQUFBOztpSUFFakI7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs2QkFFRTs2QkFBUSx1QkFBSyxXQUFVO29CQUFmO3NCQUNOO0FBRE07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SyxTQUFTLElBQUksWUFBWSxXQUFVLFVBQVUsTUFBTTtnQkFBdEc7a0JBQ0c7QUFESDtXQUNTLEtBS2IsaURBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVUsYUFBWSxPQUFPLEVBQUMsY0FBYyxJQUFJLE1BQU0sVUFBVSxLQUFLO2dCQUExRTtrQkFBa0Y7QUFBbEY7V0FBd0YsS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUNoSCx1REFBTSxXQUFVO2dCQUFoQjtrQkFDRztBQURIO1dBQ1MsS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUlsQyxzREFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNHLHlDQUFjLElBQUksTUFBTSxLQUFLO2dCQUE5QjtrQkFFRjtBQUZFO3VCQUVGLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtxQkFDRyx1Q0FBWSxJQUFJLE1BQU0sS0FBSztnQkFBNUI7a0JBQUE7QUFBQTs7QUE3QlIsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2Rpc2NvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcHJvcHMgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrZW4tMlwiPlxuICAgIHsvKiBpZihwcm9jZXNzLldpbmRvdyl7XG4gICAgICB2YXIgdGhpbmcgPSBjcmVhdGVGcmFnbWVudCg8TG9hZGVyIHN0eWxlPXt7ZGlzcGxheTogZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gXCJub25lXCIgOiBcImJsb2NrXCJ9fS8+KSAqL31cblxuXG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwcm9wcy51cmwucGF0aG5hbWV9IHVzZXJuYW1lPXtwcm9wcy51cmwudXNlcm5hbWV9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVzZXJuYW1lRmllbGQgZnJvbSAnLi91c2VybmFtZUZpZWxkJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIC8vIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJibHVlIGRhcmtlbi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIHJpZ2h0XCI+XG4gICAgICAgICAgPFVzZXJuYW1lRmllbGQgdXNlcm5hbWU9e3RoaXMucHJvcHMudXNlcm5hbWV9IC8+PC9kaXY+XG4gICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cImxlZnQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lID09PSAnLycgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgICAgXHRcdFx0PGEgPkhvbWUgPC9hPlxuICAgICAgICAgIFx0XHRcdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Rpc2NvdmVyJyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9kaXNjb3Zlcic+XG4gICAgICAgICAgICAgIDxhID5EaXNjb3ZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF0aG5hbWUgID09PSAnL2Fib3V0JyAmJiAnYWN0aXZlJ30+XG4gICAgICAgICAgPExpbmsgIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICAgIDxhID5BYm91dDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgfVxuICByZW5kZXIgPSAoKSA9PiB7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkaXYucHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXRlcm1pbmF0ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xvYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJuYW1lRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZXJuYW1lKXtcbiAgICAgICAgICByZXR1cm4gKDxoND5XZWxjb21lLCB7dGhpcy5wcm9wcy51c2VybmFtZX0uPC9oND4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwcmVmaXhcIj48L2k+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWNvbl9wcmVmaXhcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXNlcm5hbWVGaWVsZC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cblxuZnVuY3Rpb24gX2luaXRDbGllbnQgKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsXG4gICAgZGF0YUlkRnJvbU9iamVjdDogcmVzdWx0ID0+IHJlc3VsdC5pZCB8fCBudWxsLFxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dyYXBocWwnLFxuICAgICAgb3B0czoge1xuICAgICAgICBjcmVkZW50aWFsczogJ2Nyb3NzLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5pdENsaWVudCA9IChoZWFkZXJzLCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBfaW5pdENsaWVudChoZWFkZXJzLCBpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdENsaWVudC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpbml0Q2xpZW50IH0gZnJvbSAnLi4vbGliL2luaXRDbGllbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4gKFxuICBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gY3R4LnJlcSA/IGN0eC5yZXEuaGVhZGVycyA6IHt9XG4gICAgICBjb25zdCBjbGllbnQgPSBpbml0Q2xpZW50KGhlYWRlcnMpXG5cbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICB1cmw6IHsgcXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZSB9LFxuICAgICAgICAuLi5hd2FpdCAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcHAgPSAoXG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIGRhdGE6IGNsaWVudC5nZXRJbml0aWFsU3RhdGUoKS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgIHRoaXMuY2xpZW50ID0gaW5pdENsaWVudCh0aGlzLnByb3BzLmhlYWRlcnMsIHRoaXMucHJvcHMuaW5pdGlhbFN0YXRlKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuY2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG5cbiAgICAgIClcbiAgICB9XG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5pbXBvcnQgUG9zdExpc3QgIGZyb20gJy4uL2RhdGFzdHVmZi9Qb3N0TGlzdC5qcyc7XG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgocHJvcHMpID0+IChcbiAgICA8QXBwIHByb3BzPXtwcm9wc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wgbThcIj5cbiAgICAgIDxoMz5EaXNjb3ZlcjwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTggb2Zmc2V0LW0yIGw2IG9mZnNldC1sM1wiPlxuICAgICAgICA8UG9zdExpc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvQXBwPlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Rpc2NvdmVyLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0RG93blZvdGVyICh7IHZvdGVEb3duUG9zdCwgdm90ZXMsIGlkIH0pIHtcbiAgcmV0dXJuIChcblxuICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWZsb2F0aW5nIGJ0bi1zbWFsbCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgcmVkXCI+XG4gICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHZvdGVEb3duUG9zdChpZCl9IGNsYXNzTmFtZT1cInNtYWxsIG1hdGVyaWFsLWljb25zXCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmJ319PnRodW1iX2Rvd248L2k+XG4gICAgICA8L2E+XG4gIClcbn1cblxuY29uc3Qgdm90ZURvd25Qb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlkOiBJbnQhKSB7XG4gICAgdm90ZURvd25Qb3N0KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICB2b3Rlc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHZvdGVEb3duUG9zdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHZvdGVEb3duUG9zdDogKGlkKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICAgIGlkOiBvd25Qcm9wcy5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3REb3duVm90ZXIpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kYXRhc3R1ZmYvUG9zdERvd25Wb3Rlci5qcyIsImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuaW1wb3J0IFBvc3QgZnJvbSAnLi9wb3N0J1xuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoeyBkYXRhOiB7IGFsbFBvc3RzLCBsb2FkaW5nIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuXG4gICAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+XG5cbiAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cbiAgICAgICAgICApfVxuXG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSBhbGxQb3N0cygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsUG9zdHMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgYm9keVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgYXV0aG9ye1xuICAgICAgICBpZFxuICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgbGFzdE5hbWVcbiAgICAgICAgdXNlcm5hbWVcbiAgICAgIH1cbiAgICB9LFxuXG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kYXRhc3R1ZmYvUG9zdExpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFBvc3RVcHZvdGVyICh7IHZvdGVVcFBvc3QsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJidG4tZmxvYXRpbmcgYnRuLXNtYWxsIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBncmVlblwiPlxuICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB2b3RlVXBQb3N0KGlkKX0gY2xhc3NOYW1lPVwic21hbGwgbWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT17eyBjb2xvcjogJyNmZmZmZmYnfX0+dGh1bWJfdXA8L2k+XG4gICAgICA8L2E+XG4gIClcbn1cblxuY29uc3Qgdm90ZVVwUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gKCRpZDogSW50ISkge1xuICAgIHZvdGVVcFBvc3QoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHZvdGVzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodm90ZVVwUG9zdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHZvdGVVcFBvc3Q6IChpZCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGFzdHVmZi9Qb3N0VXB2b3Rlci5qcyIsImltcG9ydCBQb3N0VXB2b3RlciBmcm9tICcuL1Bvc3RVcHZvdGVyJ1xuaW1wb3J0IFBvc3REb3duVm90ZXIgZnJvbSAnLi9Qb3N0RG93blZvdGVyJ1xuY29uc3QgSU1BR0VGSU5ERVIgPSBcImh0dHBzOi8vcm9ib2hhc2gub3JnL3NldF9zZXQzL2Jnc2V0X2JnMi9cIjtcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbCBncmV5IGxpZ2h0ZW4tNSB6LWRlcHRoLTJcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdmFsaWduLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3QuYXV0aG9yID8gSU1BR0VGSU5ERVIgKyBwcm9wcy5wb3N0LmF1dGhvci51c2VybmFtZSA6IElNQUdFRklOREVSICsgcHJvcHMucG9zdC5pZH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiY2lyY2xlIHJlc3BvbnNpdmUtaW1nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwICsgJ3B4JywgIHRleHRBbGlnbjogJ2NlbnRlcicsICBtYXJnaW5Ub3A6IDUgKyAncHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiIHN0eWxlPXt7Y29sb3I6IHByb3BzLnBvc3Qudm90ZXMgPj0gMCA/ICcjMDBlNjc2JyA6ICcjRkYxNzQ0Jyxmb250U2l6ZTogMS41ICsgJ2VtJ319PlxuICAgICAgICAgIHtwcm9wcy5wb3N0LnZvdGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUaXRsZVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA4ICsgJ3B4JywgZm9udFNpemU6IDIwICsgJ3B4J319Pntwcm9wcy5wb3N0LnRpdGxlID8gcHJvcHMucG9zdC50aXRsZSA6IFwiPCBFbXB0eSA+IFwifTwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxhY2stdGV4dFwiPlxuICAgICAgICB7cHJvcHMucG9zdC5ib2R5ID8gcHJvcHMucG9zdC5ib2R5IDogXCI8IEVtcHR5ID5cIn1cbiAgICAgIDwvc3Bhbj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNVwiPlxuICAgICAgICA8UG9zdERvd25Wb3RlciBpZD17cHJvcHMucG9zdC5pZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczVcIj5cbiAgICAgICAgPFBvc3RVcHZvdGVyIGlkPXtwcm9wcy5wb3N0LmlkfS8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGFzdHVmZi9wb3N0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        