'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

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