
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([7],{

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

/***/ 671:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/about.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Things'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/about.js"); } } })();
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
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(671);


/***/ })

},[672]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz9mMjc0NWZjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2YyNzQ1ZmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIuanM/ZjI3NDVmYyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz9mMjc0NWZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBR1A7Ozs7Ozs7O2tCQUFlO01BQUc7TUFBVTt5QkFDMUI7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQTthQUFBO1NBYUk7QUFiSixzQkFhSyxrQ0FBTyxVQUFVO2dCQUFsQjtrQkFDQTtBQURBO3NCQUNBLHVCQUFLLFdBQVUseUJBQWY7O2dCQUFBO2tCQUVFO0FBRkY7S0FLQSxxREFBUSxLQUFJLCtGQUFaOztnQkFBQTtrQkFBQTtBQUFBOztBQXBCTixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITzs7OztBQUNBOzs7Ozs7Ozs7SUFFYztrQ0FDbkI7O2tCQUFZLE9BQU07d0NBQUE7O2lJQUVqQjs7Ozs7MENBQ3FCLFdBQVcsV0FDL0I7YUFBTyxLQUFLLFNBQ2I7Ozs7NkJBRUM7NkJBQVEsdUJBQUssV0FBVTtvQkFBZjtzQkFDTjtBQURNO09BQUEsa0JBQ04sdUJBQUssV0FBVTtvQkFBZjtzQkFDRTtBQURGO3lCQUNFLHNCQUFJLElBQUcsT0FBTSxXQUFVO29CQUF2QjtzQkFDRTtBQURGO3lCQUNFLHNCQUFJLFdBQVcsS0FBSyxNQUFNLGFBQWEsT0FBTztvQkFBOUM7c0JBQ007QUFETjt5QkFDTyxnQ0FBTSxVQUFQLE1BQWdCLE1BQUs7b0JBQXJCO3NCQUNDO0FBREQ7eUJBQ0M7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUdQLGtEQUFJLFdBQVcsS0FBSyxNQUFNLGFBQWMsZUFBZTtvQkFBdkQ7c0JBQ0E7QUFEQTt5QkFDQyxnQ0FBTSxVQUFQLE1BQWdCLE1BQUs7b0JBQXJCO3NCQUNJO0FBREo7eUJBQ0k7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUdKLHFEQUFJLFdBQVcsS0FBSyxNQUFNLGFBQWMsWUFBWTtvQkFBcEQ7c0JBQ0E7QUFEQTt5QkFDQyxnQ0FBTSxVQUFQLE1BQWdCLE1BQUs7b0JBQXJCO3NCQUNJO0FBREo7eUJBQ0k7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU1YOzs7OztFQTdCaUMsZ0JBQU07O2tCQUFyQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGQ7Ozs7QUFDQTs7Ozs7Ozs7OztrQ0FJTDs7a0JBQVksT0FBTTt3Q0FBQTs7c0lBQ1Y7O1VBTVIsU0FBUyxZQUVMOzs2QkFDRSx1QkFBSyxXQUFVLHdCQUFmOztvQkFBQTtzQkFBQTtBQUFBO09BQUE7aUJBQUE7YUFNVTtBQU5WLGlEQU1lLFdBQVUsNkJBQWY7O29CQUFBO3NCQUVmO0FBRmU7O0FBZGQ7O1lBQVEsSUFBSTtXQUNiOzs7Ozs4Q0FDeUIsV0FFekI7Ozs7RUFQMEIsZ0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkM7Ozs7Ozs7O2tCQUFlLFVBQUMsT0FBRDt5QkFDWiwrQkFBSSxVQUFVLE1BQU0sSUFBSTtnQkFBekI7a0JBQ1E7QUFEUjtHQUFBLGtCQUNROztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7QUFGVixFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7LyogaWYocHJvY2Vzcy5XaW5kb3cpe1xuICAgICAgdmFyIHRoaW5nID0gY3JlYXRlRnJhZ21lbnQoPExvYWRlciBzdHlsZT17e2Rpc3BsYXk6IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA/IFwibm9uZVwiIDogXCJibG9ja1wifX0vPikgKi99XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCcpO1xuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjIvY3NzL21hdGVyaWFsaXplLm1pbi5jc3MnKTtcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWRlciBwYXRobmFtZT17cGF0aG5hbWV9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMC45OC4yL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiLz5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMgIT0gbmV4dFByb3BzO1xuICB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPVwiYmx1ZSBkYXJrZW4tMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJsZWZ0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSA9PT0gJy8nICYmICdhY3RpdmUnfT5cbiAgICAgICAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgICAgICAgIFx0XHRcdDxhID5Ib21lIDwvYT5cbiAgICAgICAgICBcdFx0XHQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9kaXNjb3ZlcicgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvZGlzY292ZXInPlxuICAgICAgICAgICAgICA8YSA+RGlzY292ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9hYm91dCcgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgICAgICAgICA8YSA+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIFxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHAgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0+XG4gICAgICAgICAgPGgxPlRoaW5nczwvaDE+XG4gIDwvQXBwPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWJvdXQuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        