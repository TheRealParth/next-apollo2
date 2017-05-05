'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _PostUpvoter = require('./PostUpvoter');

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