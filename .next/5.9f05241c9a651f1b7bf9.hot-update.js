webpackHotUpdate(5,{

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(587);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _App = __webpack_require__(656);

var _App2 = _interopRequireDefault(_App);

var _withData = __webpack_require__(662);

var _withData2 = _interopRequireDefault(_withData);

var _link = __webpack_require__(594);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _PostList = __webpack_require__(658);

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/pages/discover.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props != nextProps;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_App2.default, { pathname: this.props.url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Discover'), (0, _stringify2.default)(this.props));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/pages/discover.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/pages/discover.js"); } } })();
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
    })(module.exports.default || module.exports, "/discover")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kaXNjb3Zlci5qcz81NDdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUWlCLFdBQVcsV0FDL0I7YUFBTyxLQUFLLFNBQ2I7Ozs7NkJBR0M7OzZCQUFTLCtCQUFJLFVBQVUsS0FBSyxNQUFNLElBQUk7b0JBQTlCO3NCQUNOO0FBRE07T0FBQSxrQkFDTjs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0Msc0NBQWUsS0FHbkI7Ozs7OztZQWYrQjs7Ozs7aURBQ3ZCLE1BQ0gsRUFBRSxXQUFXLElBQUksUUFBUSxrQkFDekIsRUFBRSxXQUFXLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKRixnQkFBTSIsImZpbGUiOiI1LjlmMDUyNDFjOWE2NTFmMWI3YmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcyAhPSBuZXh0UHJvcHM7XG4gIH1cbiAgcmVuZGVyICgpe1xuXG4gICAgcmV0dXJuICg8QXBwIHBhdGhuYW1lPXt0aGlzLnByb3BzLnVybC5wYXRobmFtZX0+XG4gICAgICA8aDM+RGlzY292ZXI8L2gzPlxuICAgICAge0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfVxuXG4gICAgPC9BcHA+KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kaXNjb3Zlci5qcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=