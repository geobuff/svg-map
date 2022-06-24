import React from "react";
import PropTypes from "prop-types";

const getChild = (element, onPathMouseOver, onPathMouseMove, onPathMouseOut) => {
  switch (element.type) {
    case "path":
      return (
        <path
          key={element.id}
          id={element.id}
          name={element.name}
          d={element.d}
          aria-label={element.name}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "polygon":
      return (
        <polygon
          key={element.id}
          id={element.id}
          name={element.name}
          points={element.points}
          aria-label={element.name}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "circle":
      return (
        <circle
          key={element.id}
          id={element.id}
          name={element.name}
          cx={element.cx}
          cy={element.cy}
          r={element.r}
          style={element.style ? element.style : {}}
        />
      );
    case "rect":
      return (
        <rect
          key={element.id}
          id={element.id}
          name={element.name}
          x={element.x}
          y={element.y}
          width={element.width}
          height={element.height}
          transform={element.transform}
          style={element.style ? element.style : {}}
        />
      );
    case "image":
      return (
        <image
          key={element.id}
          id={element.id}
          name={element.name}
          width={element.width}
          height={element.height}
          transform={element.transform}
          xlinkHref={element.xlinkHref}
          clip-path={element.clipPath}
          style={element.style ? element.style : {}}
        />
      );
    case "defs":
      return (
        <defs
          key={element.id}
          id={element.id}
          name={element.name}
        >
            <clipPath id={element.clipPathId}>
                <rect width={element.width} height={element.height}/>
            </clipPath>
        </defs>
      );
    default:
     throw Error("Invalid SVG child type.");
  }
};

const SVGMap = ({
  map,
  mapStyle,
  onPathMouseOver,
  onPathMouseMove,
  onPathMouseOut,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={map.viewBox}
    aria-label={map.label}
    style={mapStyle}
  >
    {map.elements.map((element) => getChild(element, onPathMouseOver, onPathMouseMove, onPathMouseOut))}
  </svg>
);

SVGMap.propTypes = {
  map: PropTypes.shape({
    label: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        d: PropTypes.string,
        points: PropTypes.string,
        x: PropTypes.string,
        y:PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        cx: PropTypes.string,
				cy: PropTypes.string,
				r: PropTypes.string,
        transform: PropTypes.string,
        xlinkHref: PropTypes.string,
        clipPath: PropTypes.string,
        clipPathId: PropTypes.string,
        style: PropTypes.object,
      })
    ),
  }).isRequired,
  mapStyle: PropTypes.object,
  onPathMouseOver: PropTypes.func,
  onPathMouseMove: PropTypes.func,
  onPathMouseOut: PropTypes.func,
};

SVGMap.defaultProps = {
  mapStyle: {},
  onPathMouseOver: () => {},
  onPathMouseMove: () => {},
  onPathMouseOut: () => {},
};

export default SVGMap;
