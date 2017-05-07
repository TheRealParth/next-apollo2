"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/graphql/next-apollo/components/UserPic.js";


var IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";

exports.default = function (props) {
  return _react2.default.createElement("img", { style: props.style, src: props.username ? IMAGEFINDER + props.username : IMAGEFINDER + props.username, alt: props.username, className: "circle responsive-img", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
};