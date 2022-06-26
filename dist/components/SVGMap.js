"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getChild = (element, onPathMouseOver, onPathMouseMove, onPathMouseOut) => {
  switch (element.type) {
    case "path":
      return /*#__PURE__*/_react.default.createElement("path", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        d: element.d,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "polygon":
      return /*#__PURE__*/_react.default.createElement("polygon", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        points: element.points,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "polyline":
      return /*#__PURE__*/_react.default.createElement("polyline", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        points: element.points,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "circle":
      return /*#__PURE__*/_react.default.createElement("circle", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        cx: element.cx,
        cy: element.cy,
        r: element.r,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "rect":
      return /*#__PURE__*/_react.default.createElement("rect", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        x: element.x,
        y: element.y,
        width: element.width,
        height: element.height,
        transform: element.transform,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "line":
      return /*#__PURE__*/_react.default.createElement("line", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        x1: element.x1,
        y1: element.y1,
        x2: element.x2,
        y2: element.y2,
        style: element.style ? element.style : {}
      });

    case "image":
      return /*#__PURE__*/_react.default.createElement("image", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name,
        width: element.width,
        height: element.height,
        transform: element.transform,
        xlinkHref: element.xlinkHref,
        "clip-path": element.clipPath,
        onMouseOver: onPathMouseOver,
        onMouseMove: onPathMouseMove,
        onMouseOut: onPathMouseOut,
        style: element.style ? element.style : {}
      });

    case "defs":
      return /*#__PURE__*/_react.default.createElement("defs", {
        key: element.id,
        id: element.id,
        name: element.name,
        "aria-label": element.name
      }, /*#__PURE__*/_react.default.createElement("clipPath", {
        id: element.clipPathId
      }, /*#__PURE__*/_react.default.createElement("rect", {
        width: element.width,
        height: element.height
      })));

    default:
      throw Error("Invalid SVG child type '".concat(element.type, "'."));
  }
};

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
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: map.viewBox,
    "aria-label": map.label,
    style: mapStyle
  }, map.elements.map(element => getChild(element, onPathMouseOver, onPathMouseMove, onPathMouseOut)));
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
      points: _propTypes.default.string,
      x: _propTypes.default.string,
      y: _propTypes.default.string,
      width: _propTypes.default.string,
      height: _propTypes.default.string,
      cx: _propTypes.default.string,
      cy: _propTypes.default.string,
      r: _propTypes.default.string,
      transform: _propTypes.default.string,
      xlinkHref: _propTypes.default.string,
      clipPath: _propTypes.default.string,
      clipPathId: _propTypes.default.string,
      x1: _propTypes.default.string,
      y1: _propTypes.default.string,
      x2: _propTypes.default.string,
      y2: _propTypes.default.string,
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