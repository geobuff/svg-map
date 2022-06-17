import React from "react";
import PropTypes from "prop-types";

const SVGMap = ({
  map,
  mapStyle,
  onPathMouseOver,
  onPathMouseMove,
  onPathMouseOut,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={map.viewBox}
    aria-label={map.label}
    style={mapStyle}
  >
    {map.elements.map((element) => {
      switch (element.type) {
        case "circle":
          return (
            <circle
              id={element.id}
              name={element.name}
              cx={element.cx}
              cy={element.cy}
              r={element.r}
              style={element.style ? element.style : {}}
            />
          );
        default:
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
      }
    })}
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
        cx: PropTypes.string,
				cy: PropTypes.string,
				r: PropTypes.string,
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
