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
  }, map.elements.map(element => {
    switch (element.type) {
      case "circle":
        return /*#__PURE__*/_react.default.createElement("circle", {
          id: element.id,
          name: element.name,
          cx: element.cx,
          cy: element.cy,
          r: element.r,
          style: element.style ? element.style : {}
        });

      default:
        return /*#__PURE__*/_react.default.createElement("path", {
          key: element.id,
          id: element.id,
          name: element.name,
          d: element.d,
          "aria-label": element.name,
          onMouseOver: onPathMouseOver,
          onMouseMove: onPathMouseMove,
          onMouseOut: onPathMouseOut,
          style: element.style ? element.style : {}
        });
    }
  }));
};

SVGMap.propTypes = {
  map: _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    viewBox: _propTypes.default.string.isRequired,
    elements: _propTypes.default.arrayOf(_propTypes.default.shape({
      type: _propTypes.default.string.isRequired,
      id: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired,
      d: _propTypes.default.string,
      cx: _propTypes.default.string,
      cy: _propTypes.default.string,
      r: _propTypes.default.string,
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