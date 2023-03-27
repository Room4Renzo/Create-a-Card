import "./ResizeImage.css";
import React from "react";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeImage = (props) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);

  return (
    <div className="rectangle">
  <Rnd
    className="resizable-item"
    default={{
      x: 0,
      y: 0,
      width: 300,
      height: 400
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth);
      setHeight(ref.offsetHeight);
    }}
    style={props.style}
  >
    <img src={props.image} width={width} height={height}/>
  </Rnd>
  </div>
);
};

export default ResizeImage;
