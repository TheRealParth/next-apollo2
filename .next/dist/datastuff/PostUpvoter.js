'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

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