webpackHotUpdate(6,{

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _PostUpvoter = __webpack_require__(671);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownVoter = __webpack_require__(669);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/graphql/next-apollo/datastuff/post.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhc3R1ZmYvcG9zdC5qcz8wYTcwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7Ozs7OztBQUNQLElBQU0sY0FDTjs7a0JBQWUsVUFBQyxPQUFEO3lCQUViLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0E7QUFEQTtHQUFBLGtCQUNBLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtxQkFDRSx1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNFLHVCQUFLLFdBQVU7Z0JBQWY7a0JBQ0E7QUFEQTs0Q0FDSyxLQUFLLE1BQU0sS0FBSyxTQUFTLGNBQWMsTUFBTSxLQUFLLE9BQU8sV0FBVyxjQUFjLE1BQU0sS0FBSyxJQUFJLEtBQUksSUFBRyxXQUFVO2dCQUF2SDtrQkFHRjtBQUhFO3dCQUdGLHVCQUFLLFdBQVUsT0FBTSxPQUFPLEVBQUMsY0FBYyxJQUFJLE1BQU8sV0FBVyxVQUFXLFdBQVcsSUFBSTtnQkFBM0Y7a0JBQ0U7QUFERjtxQkFDRSx1QkFBSyxXQUFVLFdBQVUsT0FBTyxFQUFDLE9BQU8sTUFBTSxLQUFLLFNBQVMsSUFBSSxZQUFZLFdBQVUsVUFBVSxNQUFNO2dCQUF0RztrQkFDRztBQURIO1dBQ1MsS0FLYixpREFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssV0FBVSxhQUFZLE9BQU8sRUFBQyxjQUFjLElBQUksTUFBTSxVQUFVLEtBQUs7Z0JBQTFFO2tCQUFrRjtBQUFsRjtXQUF3RixLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQ2hILHVEQUFNLFdBQVU7Z0JBQWhCO2tCQUNHO0FBREg7V0FDUyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BSWxDLHNEQUFLLFdBQVU7Z0JBQWY7a0JBQ0U7QUFERjtxQkFDRSx1QkFBSyxXQUFVO2dCQUFmO2tCQUNFO0FBREY7cUJBQ0cseUNBQWMsSUFBSSxNQUFNLEtBQUs7Z0JBQTlCO2tCQUVGO0FBRkU7dUJBRUYsdUJBQUssV0FBVTtnQkFBZjtrQkFDRTtBQURGO3FCQUNHLHVDQUFZLElBQUksTUFBTSxLQUFLO2dCQUE1QjtrQkFBQTtBQUFBOztBQTdCUixFIiwiZmlsZSI6IjYuNjdkNjI2N2U0ZWQ4ZjUxMmE3MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0VXB2b3RlciBmcm9tICcuL1Bvc3RVcHZvdGVyJ1xuaW1wb3J0IFBvc3REb3duVm90ZXIgZnJvbSAnLi9Qb3N0RG93blZvdGVyJ1xuY29uc3QgSU1BR0VGSU5ERVIgPSBcImh0dHBzOi8vcm9ib2hhc2gub3JnL3NldF9zZXQzL2Jnc2V0X2JnMi9cIjtcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbCBncmV5IGxpZ2h0ZW4tNSB6LWRlcHRoLTJcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdmFsaWduLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3QuYXV0aG9yID8gSU1BR0VGSU5ERVIgKyBwcm9wcy5wb3N0LmF1dGhvci51c2VybmFtZSA6IElNQUdFRklOREVSICsgcHJvcHMucG9zdC5pZH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiY2lyY2xlIHJlc3BvbnNpdmUtaW1nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwICsgJ3B4JywgIHRleHRBbGlnbjogJ2NlbnRlcicsICBtYXJnaW5Ub3A6IDUgKyAncHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiIHN0eWxlPXt7Y29sb3I6IHByb3BzLnBvc3Qudm90ZXMgPj0gMCA/ICcjMDBlNjc2JyA6ICcjRkYxNzQ0Jyxmb250U2l6ZTogMS41ICsgJ2VtJ319PlxuICAgICAgICAgIHtwcm9wcy5wb3N0LnZvdGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUaXRsZVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA4ICsgJ3B4JywgZm9udFNpemU6IDIwICsgJ3B4J319Pntwcm9wcy5wb3N0LnRpdGxlID8gcHJvcHMucG9zdC50aXRsZSA6IFwiPCBFbXB0eSA+IFwifTwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxhY2stdGV4dFwiPlxuICAgICAgICB7cHJvcHMucG9zdC5ib2R5ID8gcHJvcHMucG9zdC5ib2R5IDogXCI8IEVtcHR5ID5cIn1cbiAgICAgIDwvc3Bhbj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNVwiPlxuICAgICAgICA8UG9zdERvd25Wb3RlciBpZD17cHJvcHMucG9zdC5pZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczVcIj5cbiAgICAgICAgPFBvc3RVcHZvdGVyIGlkPXtwcm9wcy5wb3N0LmlkfS8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGFzdHVmZi9wb3N0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==