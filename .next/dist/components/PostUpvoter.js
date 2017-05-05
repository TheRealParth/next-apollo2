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