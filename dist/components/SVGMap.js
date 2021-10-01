"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SVGMap = _ref => {
  let {
    map,
    mapStyle,
    onPathMouseOver,
    onPathMouseMove,
    onPathMouseOut
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: map.viewBox,
    "aria-label": map.label,
    style: mapStyle
  }, map.paths.map(path => /*#__PURE__*/_react.default.createElement("path", {
    key: path.id,
    id: path.id,
    name: path.name,
    d: path.d,
    "aria-label": path.name,
    onMouseOver: onPathMouseOver,
    onMouseMove: onPathMouseMove,
    onMouseOut: onPathMouseOut,
    style: path.style ? path.style : {}
  })));
};

SVGMap.propTypes = {
  map: _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    viewBox: _propTypes.default.string.isRequired,
    paths: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired,
      d: _propTypes.default.string.isRequired,
      style: _propTypes.default.object
    }))
  }).isRequired,
  mapStyle: _propTypes.default.object,
  onPathMouseOver: _propTypes.default.func,
  onPathMouseMove: _propTypes.default.func,
  onPathMouseOut: _propTypes.default.func
};
SVGMap.defaultProps = {
  mapStyle: {},
  onPathMouseOver: () => {},
  onPathMouseMove: () => {},
  onPathMouseOut: () => {}
};
var _default = SVGMap;
exports.default = _default;