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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js';

var IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'card-panel grey lighten-5 z-depth-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'row valign-wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'col s2', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { className: 'col', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('img', { src: props.post.author ? IMAGEFINDER + props.post.author.username : IMAGEFINDER + props.post.id, alt: '', className: 'circle responsive-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }))), _react2.default.createElement('div', { className: 'row', style: { marginBottom: 0 + 'px', textAlign: 'center', marginTop: 5 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'col s12', style: { color: props.post.votes >= 0 ? '#00e676' : '#FF1744', fontSize: 1.5 + 'em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.post.votes))), _react2.default.createElement('div', { className: 'col s10', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('div', { className: 'postTitle', style: { marginBottom: 8 + 'px', fontSize: 20 + 'px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.post.title ? props.post.title : "< Empty > "), _react2.default.createElement('span', { className: 'black-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.post.body ? props.post.body : "< Empty >")), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_PostDownVoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement('div', { className: 'col s5', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_PostUpvoter2.default, { id: props.post.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })))));
};