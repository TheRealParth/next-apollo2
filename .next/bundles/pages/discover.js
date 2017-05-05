
          window.__NEXT_REGISTER_PAGE('/discover', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

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

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(588);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(568);

var _PostUpvoter = __webpack_require__(659);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query posts {\n    posts {\n      id\n      title\n      body\n      url\n      votes\n      latitude\n      longitude\n    }\n  }\n'], ['\n  query posts {\n    posts {\n      id\n      title\n      body\n      url\n      votes\n      latitude\n      longitude\n    }\n  }\n']);

var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      allPosts = _ref$data.allPosts,
      loading = _ref$data.loading,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return _react2.default.createElement('section', {
      'data-jsx': 2958110597,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('ul', {
      'data-jsx': 2958110597,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement('li', { key: post.id, 'data-jsx': 2958110597,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 2958110597,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 2958110597,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, index + 1, '. '), _react2.default.createElement('a', { href: post.url, 'data-jsx': 2958110597,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, post.title), _react2.default.createElement(_PostUpvoter2.default, { id: post.id, votes: post.votes, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, 'data-jsx': 2958110597,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: 2958110597,
      css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQiIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QYXJ0aC9Eb2N1bWVudHMvZ3JhcGhxbC9uZXh0LWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBQb3N0VXB2b3RlciBmcm9tICcuL1Bvc3RVcHZvdGVyJ1xuXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwXG5cbmZ1bmN0aW9uIFBvc3RMaXN0ICh7IGRhdGE6IHsgYWxsUG9zdHMsIGxvYWRpbmcsIF9hbGxQb3N0c01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChhbGxQb3N0cyAmJiBhbGxQb3N0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxQb3N0cy5sZW5ndGggPCBfYWxsUG9zdHNNZXRhLmNvdW50O1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxQb3N0VXB2b3RlciBpZD17cG9zdC5pZH0gdm90ZXM9e3Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IHBvc3RzIHtcbiAgICBwb3N0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGJvZHlcbiAgICAgIHVybFxuICAgICAgdm90ZXNcbiAgICAgIGxhdGl0dWRlXG4gICAgICBsb25naXR1ZGVcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG4iXX0= */\n/*@ sourceURL=components/PostList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/PostList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/PostList.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(588);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(id, votes + 1);
    }, 'data-jsx': 394119343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: 394119343,
    css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhcnRoL0RvY3VtZW50cy9ncmFwaHFsL25leHQtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuIl19 */\n/*@ sourceURL=components/PostUpvoter.js */'
  }));
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/components/PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/components/PostUpvoter.js"); } } })();

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

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(602);


/***/ })

},[668]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kaXNjb3Zlci5qcz85NGNjZjM3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzPzk0Y2NmMzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/OTRjY2YzNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzPzk0Y2NmMzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcz85NGNjZjM3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGVyLmpzPzk0Y2NmMzciLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRDbGllbnQuanM/OTRjY2YzNyIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/OTRjY2YzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FRaUIsV0FBVyxXQUMvQjthQUFPLEtBQUssU0FDYjs7Ozs2QkFHQzs7NkJBQVMsK0JBQUksVUFBVSxLQUFLLE1BQU0sSUFBSTtvQkFBOUI7c0JBQ047QUFETTtPQUFBLGtCQUNOOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDQyxzQ0FBZSxLQUduQjs7Ozs7O1lBZitCOzs7OztpREFDdkIsTUFDSCxFQUFFLFdBQVcsSUFBSSxRQUFRLGtCQUN6QixFQUFFLFdBQVcsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpGLGdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A1Qjs7OztBQUdQOzs7Ozs7OztrQkFBZTtNQUFHO01BQVU7eUJBQzFCO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7YUFBQTtTQWFJO0FBYkosc0JBYUssa0NBQU8sVUFBVTtnQkFBbEI7a0JB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Ozs7O2tCQUFlLFVBQUMsV0FBRDtxQ0FBQTtvQ0FBQTs7O1dBQUE7eUJBQUE7K0ZBRW1CLEtBRm5CO3NDQUFBO3dFQUFBO3NCQUFBOytDQUFBO3FCQUdIO0FBSEcsNEJBR08sSUFBSSxNQUFNLElBQUksSUFBSSxVQUM1QjtBQUpHLDJCQUlNLDRCQUFXOzJCQUpqQjs7eUJBT0YsRUFBRSxPQUFPLElBQUksT0FBTyxVQUFVLElBQUk7QUFBdkM7a0NBUE87eUJBUUcsVUFBVSxrQkFBa0IsVUFBVSxnQkFBZ0IsT0FBTzs7cUJBUmhFO3lDQU1IO0FBTkc7O3NCQVdKLFFBQVEsU0FYSjtvQ0FBQTtBQUFBO0FBWUQ7O0FBWkMsd0NBYUosNkNBQWUsUUFBUTtnQ0FBeEI7a0NBQ1U7QUFEVjttQkFBQSxnQ0FDVyxzQ0FBYzs7Z0NBQWY7a0NBQUE7QUFBQTtBQUFBO2tDQWRMO3lCQWlCRCxrQ0FBZ0I7O3FCQWpCZjs7Ozs4QkF1QkcsT0FBTyxrQkFHakI7QUFISTtBQURGOzZCQXRCSztBQXFCUCxxQkFNRzs7cUJBM0JJO3FCQUFBO2tDQUFBOztBQUFBO3NCQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUErQlg7QUEvQlc7O29CQStCRSxPQUFPOzBDQUFBOzt3SUFHbEI7O1lBQUssU0FBUyw0QkFBVyxNQUFLLE1BQU0sU0FBUyxNQUFLLE1BQU07O2FBRXpEO0FBcENVOzs7V0FBQTsrQkF3Q1Q7K0JBQ08sNkNBQWUsUUFBUSxLQUFLO3NCQUE3Qjt3QkFDUTtBQURSO1NBQUEsZ0NBQ1Msc0NBQWMsS0FBSzs7c0JBQXBCO3dCQUlmO0FBSmU7QUFBQTtBQTFDTDtBQUFBOztXQUFBO0lBQ0MsZ0JBQU07QUFEdEIsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2Rpc2NvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICByZXR1cm4gcmVxXG4gICAgICA/IHsgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIH1cbiAgICAgIDogeyB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfVxuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMgIT0gbmV4dFByb3BzO1xuICB9XG4gIHJlbmRlciAoKXtcblxuICAgIHJldHVybiAoPEFwcCBwYXRobmFtZT17dGhpcy5wcm9wcy51cmwucGF0aG5hbWV9PlxuICAgICAgPGgzPkRpc2NvdmVyPC9oMz5cbiAgICAgIHtKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX1cblxuICAgIDwvQXBwPilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGlzY292ZXIuanM/ZW50cnkiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcGF0aG5hbWUgfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7LyogaWYocHJvY2Vzcy5XaW5kb3cpe1xuICAgICAgdmFyIHRoaW5nID0gY3JlYXRlRnJhZ21lbnQoPExvYWRlciBzdHlsZT17e2Rpc3BsYXk6IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA/IFwibm9uZVwiIDogXCJibG9ja1wifX0vPikgKi99XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCcpO1xuICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjIvY3NzL21hdGVyaWFsaXplLm1pbi5jc3MnKTtcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWRlciBwYXRobmFtZT17cGF0aG5hbWV9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMC45OC4yL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiLz5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMgIT0gbmV4dFByb3BzO1xuICB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPVwiYmx1ZSBkYXJrZW4tMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJsZWZ0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXRobmFtZSA9PT0gJy8nICYmICdhY3RpdmUnfT5cbiAgICAgICAgICAgICAgICA8TGluayAgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICAgICAgICAgIFx0XHRcdDxhID5Ib21lIDwvYT5cbiAgICAgICAgICBcdFx0XHQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9kaXNjb3ZlcicgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvZGlzY292ZXInPlxuICAgICAgICAgICAgICA8YSA+RGlzY292ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhdGhuYW1lICA9PT0gJy9hYm91dCcgJiYgJ2FjdGl2ZSd9PlxuICAgICAgICAgIDxMaW5rICBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgICAgICAgICA8YSA+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoeyBkYXRhOiB7IGFsbFBvc3RzLCBsb2FkaW5nLCBfYWxsUG9zdHNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudDtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC51cmx9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8UG9zdFVwdm90ZXIgaWQ9e3Bvc3QuaWR9IHZvdGVzPXtwb3N0LnZvdGVzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSBwb3N0cyB7XG4gICAgcG9zdHMge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBib2R5XG4gICAgICB1cmxcbiAgICAgIHZvdGVzXG4gICAgICBsYXRpdHVkZVxuICAgICAgbG9uZ2l0dWRlXG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdXB2b3RlLCB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXB2b3RlKGlkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5jb25zdCB1cHZvdGVQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVQb3N0KCRpZDogSUQhLCAkdm90ZXM6IEludCkge1xuICAgIHVwZGF0ZVBvc3QoaWQ6ICRpZCwgdm90ZXM6ICR2b3Rlcykge1xuICAgICAgaWRcbiAgICAgIHZvdGVzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodXB2b3RlUG9zdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHVwdm90ZTogKGlkLCB2b3RlcykgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBpZCwgdm90ZXMgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICB1cGRhdGVQb3N0OiB7XG4gICAgICAgICAgaWQ6IG93blByb3BzLmlkLFxuICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIFxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5wcm9ncmVzczoge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xubGV0IGFwb2xsb0NsaWVudCA9IG51bGxcblxuXG5mdW5jdGlvbiBfaW5pdENsaWVudCAoaGVhZGVycywgaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlcixcbiAgICBkYXRhSWRGcm9tT2JqZWN0OiByZXN1bHQgPT4gcmVzdWx0LmlkIHx8IG51bGwsXG4gICAgbmV0d29ya0ludGVyZmFjZTogY3JlYXRlTmV0d29ya0ludGVyZmFjZSh7XG4gICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvZ3JhcGhxbCcsXG4gICAgICBvcHRzOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDbGllbnQgPSAoaGVhZGVycywgaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gX2luaXRDbGllbnQoaGVhZGVycywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIGFwb2xsb0NsaWVudFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luaXRDbGllbnQuanMiLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgaW5pdENsaWVudCB9IGZyb20gJy4vaW5pdENsaWVudCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KSA9PiAoXG4gIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzIDoge31cbiAgICAgIGNvbnN0IGNsaWVudCA9IGluaXRDbGllbnQoaGVhZGVycylcblxuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHVybDogeyBxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lIH0sXG4gICAgICAgIC4uLmF3YWl0IChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShhcHApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAgIGFwb2xsbzoge1xuICAgICAgICAgICAgZGF0YTogY2xpZW50LmdldEluaXRpYWxTdGF0ZSgpLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIC4uLnByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcblxuICAgICAgdGhpcy5jbGllbnQgPSBpbml0Q2xpZW50KHRoaXMucHJvcHMuaGVhZGVycywgdGhpcy5wcm9wcy5pbml0aWFsU3RhdGUpXG5cbiAgICB9XG5cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5jbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cblxuICAgICAgKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        