webpackHotUpdate(5,{

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(587);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(569);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation voteUpPost($id: ID!) {\n    voteUpPost(id: $id) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation voteUpPost($id: ID!) {\n    voteUpPost(id: $id) {\n      id\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var voteUpPost = _ref.voteUpPost,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return voteUpPost(id, votes + 1);
    }, 'data-jsx': 394119343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: 394119343,
    css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzdHVmZi9Qb3N0VXB2b3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IiLCJmaWxlIjoiZGF0YXN0dWZmL1Bvc3RVcHZvdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QYXJ0aC9Eb2N1bWVudHMvZ3JhcGhxbC9uZXh0LWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdm90ZVVwUG9zdCwgdm90ZXMsIGlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHZvdGVVcFBvc3QoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHZvdGVVcFBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHZvdGVVcFBvc3QoJGlkOiBJRCEpIHtcbiAgICB2b3RlVXBQb3N0KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICB2b3Rlc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHZvdGVVcFBvc3QsIHtcbiAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICB2b3RlVXBQb3N0OiAoaWQpID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICB1cGRhdGVQb3N0OiB7XG4gICAgICAgICAgaWQ6IG93blByb3BzLmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoUG9zdFVwdm90ZXIpXG4iXX0= */\n/*@ sourceURL=datastuff/PostUpvoter.js */'
  }));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvUG9zdFVwdm90ZXIuanM/YTNkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ087Ozs7Ozs7O0FBRWQsU0FBUyxrQkFBd0M7TUFBQTtNQUFBO01BQUEsVUFDL0M7O3lCQUNFLDBCQUFRLFNBQVM7YUFBTSxXQUFXLElBQUksUUFBUTtBQUE5Qzs7Z0JBQUE7a0JBQ0c7QUFESDtHQUFBO2FBQUE7U0FNSDtBQU5HOzs7QUFRSixJQUFNLGFBQWEsc0JBU25COzs0Q0FBdUI7U0FDZDtRQUFHO1FBQVU7O2tCQUNOLG9CQUFDLElBQUQ7O3FCQUNDLEVBQUUsSUFDYjs7O2tCQUVRLFNBQVM7QUFBYjtBQURGO0FBRkYsU0FEa0I7QUFEWTtBQUNoQztBQUYrQjtBQUNqQyxDQURhLEVBV1osYSIsImZpbGUiOiI1LmZmOTRlM2RmOTliZGI4NDcxYWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFBvc3RVcHZvdGVyICh7IHZvdGVVcFBvc3QsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB2b3RlVXBQb3N0KGlkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5jb25zdCB2b3RlVXBQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiB2b3RlVXBQb3N0KCRpZDogSUQhKSB7XG4gICAgdm90ZVVwUG9zdChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh2b3RlVXBQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdm90ZVVwUG9zdDogKGlkKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICAgIGlkOiBvd25Qcm9wcy5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YXN0dWZmL1Bvc3RVcHZvdGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==