import "./ResizeImage.css";
import React from "react";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeImage = (props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);

  return (
    <div className="rectangle-image">
  <Rnd
    default={{
      x: 0,
      y: 0,
      width: {width},
      height: {height}
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth);
      setHeight(ref.offsetHeight);
    }}
    lockAspectRatio={true}
  >
    <img src={props.image} width={width} height={height} />
  </Rnd>
  </div>
);
};

export default ResizeImage;
