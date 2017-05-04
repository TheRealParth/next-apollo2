
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 777:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/next-apollo/pages/about.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/next-apollo/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/next-apollo/pages/about.js"); } } })();
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

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(777);


/***/ })

},[778]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz9jYTQ0NGNkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2NhNDQ0Y2QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanM/Y2E0NDRjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7a0JBQWU7TUFBRztNQUFVO3lCQUMxQjtnQkFBQTs7Z0JBQUE7a0JBQ0k7QUFESjtBQUFBLCtDQUNZLEtBQUksK0ZBQVo7O2dCQUFBO2tCQUFBO0FBQUE7O2FBREo7U0FZSTtBQVpKLHNCQVlLLGtDQUFPLFVBQVU7Z0JBQWxCO2tCQUNFO0FBREY7TUFaSjtBQURGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7Ozs7Ozs7O2tCQUFlO1FBQUc7MkJBQ2pCOztzQkFBQTt3QkFDTztBQURQO0FBQUEsdUJBQ1EsZ0NBQUssVUFBTixNQUFlLE1BQUs7c0JBQXBCO3dCQUNJO0FBREo7dUJBQ0kscUJBQUcsV0FBVyxhQUFhLE9BQU87c0JBQWxDO3dCQUFBO0FBQUE7T0FHSiwwQkFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBSztzQkFBcEI7d0JBQ0k7QUFESjt1QkFDSSxxQkFBRyxXQUFXLGFBQWEsWUFBWTtzQkFBdkM7d0JBQUE7QUFBQTtPQUFBO0FBUFosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7a0JBQWUsVUFBQyxPQUFEO3lCQUNaOztnQkFBRDtrQkFDUTtBQURSO0FBQUEscUJBQ1E7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQTtBQUZWLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHBhdGhuYW1lIH0pID0+IChcbiAgPG1haW4+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9qcy9tYXRlcmlhbGl6ZS5taW4uanNcIi8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJyk7XG4gICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTguMi9jc3MvbWF0ZXJpYWxpemUubWluLmNzcycpO1xuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICB9XG4gICAgICBib2R5e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0vPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gIDwvbWFpbj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZX0pID0+IChcbiA8aGVhZGVyPlxuICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiA8L2hlYWRlcj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgICAgICAgPGgxPlRoaW5nczwvaDE+XG4gIDwvQXBwPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWJvdXQuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        