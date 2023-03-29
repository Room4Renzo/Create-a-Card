import "./ResizeImage.css";
import React from "react";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeImage = (props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);
  console.log(props);

  return (
    <div className="rectangle-image">
  <Rnd
    default={{
      x: -300,
      y: -200,
      width: {width},
      height: {height}
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth);
      setHeight(ref.offsetHeight);
    }}
    lockAspectRatio={true}
  >
    <img className="downloadImg1" src={props.image} width={width} height={height} />
  </Rnd>
  </div>
);
};

export default ResizeImage;
