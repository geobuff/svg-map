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
    {map.paths.map((path) => (
      <path
        key={path.id}
        id={path.id}
        name={path.name}
        d={path.d}
        aria-label={path.name}
        onMouseOver={onPathMouseOver}
        onMouseMove={onPathMouseMove}
        onMouseOut={onPathMouseOut}
        style={path.style ? path.style : {}}
      />
    ))}
  </svg>
);

SVGMap.propTypes = {
  map: PropTypes.shape({
    label: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    paths: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
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
