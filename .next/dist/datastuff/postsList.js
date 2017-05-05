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

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/postsList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query posts {\n    postsAll {\n      id\n      title\n      body\n      url\n      votes\n      latitude\n      longitude\n      author{\n        id\n        firstName\n        lastName\n        username\n      }\n    }\n  }\n'], ['\n  query posts {\n    postsAll {\n      id\n      title\n      body\n      url\n      votes\n      latitude\n      longitude\n      author{\n        id\n        firstName\n        lastName\n        username\n      }\n    }\n  }\n']);

var POSTS_PER_PAGE = 10;

var PostList = function PostList(_ref) {
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
        lineNumber: 9
      }
    }, _react2.default.createElement('ul', {
      'data-jsx': 2958110597,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement('li', { key: post.id, 'data-jsx': 2958110597,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(Post, { image: post.image, title: post.title, body: post.body, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, 'data-jsx': 2958110597,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: 2958110597,
      css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzdHVmZi9wb3N0c0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQiIsImZpbGUiOiJkYXRhc3R1ZmYvcG9zdHNMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QYXJ0aC9Eb2N1bWVudHMvZ3JhcGhxbC9uZXh0LWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMDtcblxuIGNvbnN0IFBvc3RMaXN0ID0gKHsgZGF0YTogeyBhbGxQb3N0cywgbG9hZGluZywgX2FsbFBvc3RzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pID0+IHtcbiAgaWYgKGFsbFBvc3RzICYmIGFsbFBvc3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8UG9zdCBpbWFnZT17cG9zdC5pbWFnZX0gdGl0bGU9e3Bvc3QudGl0bGV9IGJvZHk9e3Bvc3QuYm9keX0vPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IHBvc3RzIHtcbiAgICBwb3N0c0FsbCB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGJvZHlcbiAgICAgIHVybFxuICAgICAgdm90ZXNcbiAgICAgIGxhdGl0dWRlXG4gICAgICBsb25naXR1ZGVcbiAgICAgIGF1dGhvcntcbiAgICAgICAgaWRcbiAgICAgICAgZmlyc3ROYW1lXG4gICAgICAgIGxhc3ROYW1lXG4gICAgICAgIHVzZXJuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBsaW1pdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2cocHJldmlvdXNSZXN1bHQpXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShQb3N0TGlzdClcbiJdfQ== */\n/*@ sourceURL=datastuff/postsList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Loading');
};

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
  options: {
    variables: {
      skip: 0,
      limit: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        console.log(data);
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            console.log(previousResult);
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