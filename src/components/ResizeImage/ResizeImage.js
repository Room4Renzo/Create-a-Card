import "./ResizeImage.css";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeImage = (props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);

  return (
    <div className="rectangle-image">
  <Rnd
    default={{
      x: 100,
      y: -200,
      width: width,
      height: height
    }}
    
    onDrag={e => {
      e.stopImmediatePropagation();
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth);
      setHeight(ref.offsetHeight);
    }}
    lockAspectRatio={true}
  >
    {props.image ? <img src={props.image} width={width} height={height} /> : <></> }
  </Rnd>
  </div>
);
};

export default ResizeImage;
