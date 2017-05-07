'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostUpvoter = require('./PostUpvoter');

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownVoter = require('./PostDownVoter');

var _PostDownVoter2 = _interopRequireDefault(_PostDownVoter);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _UserPic = require('../components/UserPic');

var _UserPic2 = _interopRequireDefault(_UserPic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js';

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'card-panel grey lighten-5 z-depth-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'row valign-wrapper', style: { marginBottom: -5 + 'px', position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'col s3 m3', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'row', style: { marginBottom: -15 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'col s12 m8', style: { marginLeft: 23 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_UserPic2.default, { username: props.post.author.username, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement('div', { className: 'row', style: { textAlign: 'center', marginTop: -15 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('div', { className: 'col s12 m12', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_link2.default, { href: '/author?username=' + props.post.author.username, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.post.author.username ? props.post.author.username : "unknown"))))))), _react2.default.createElement('div', { className: 'row', style: { marginBottom: 0 + 'px', textAlign: 'center', marginTop: 5 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('div', { className: 'col s12', style: { color: props.post.votes >= 0 ? '#00e676' : '#FF1744', fontSize: 1.5 + 'em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.post.votes))), _react2.default.createElement('div', { className: 'col s10', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('div', { className: 'postTitle', style: { marginBottom: 8 + 'px', fontSize: 20 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, props.post.title ? props.post.title : "< Empty > "), _react2.default.createElement('span', { className: 'black-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.post.body ? props.post.body : "< Empty >")), _react2.default.createElement('div', { className: 'row', style: { position: 'absolute',
      right: -5 + 'px',
      bottom: -25 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_PostDownVoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_PostUpvoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })))));
};