import React from 'react';

import SVGMap from '../lib/components/SVGMap';
import { WorldCountries } from "@geobuff/svg-maps";

export default {
  title: 'SVGMap',
  component: SVGMap,
};

const Template = (args) => <SVGMap {...args} />;

export const Default = Template.bind({});

let mapStyle = {
  height: "400px",
  width: "100%",
  fill: "#6dca94",
};

const onMouseOver = (event) => {
  console.log("mouseover", event.currentTarget.getAttribute("name"));
};

const onMouseMove = (event) => {
  console.log("mousemove", event.currentTarget.getAttribute("name"));
};

const onMouseOut = (event) => {
  console.log("mouseout", event.currentTarget.getAttribute("name"));
};

Default.args = {
  map: WorldCountries,
  mapStyle: mapStyle,
  onPathMouseOver: onMouseOver,
  onPathMouseMove: onMouseMove,
  onPathMouseOut: onMouseOut,
};