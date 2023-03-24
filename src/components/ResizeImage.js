import "./ResizeImage.css";
import React from "react";
import { Rnd } from "react-rnd";


const ResizeImage = () => {
  return (
  <Rnd
    className="resizable-item"
    default={{
      x: 0,
      y: 0,
      width: 300,
      height: 400
    }}
  >
  </Rnd>
);
};

export default ResizeImage;
