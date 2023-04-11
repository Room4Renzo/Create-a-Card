import "./ResizeText.css";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeText = (props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);

  return (
    <div className="rectangle-text">
  <Rnd
    default={{
      x: 200,
      y: -300,
      width: {width},
      height: {height}
    }}
    onResize={(e, direction, ref, delta, position) => {
      setWidth(ref.offsetWidth);
      setHeight(ref.offsetHeight);
    }}
    lockAspectRatio={true}
  >
			<div
				className="text-on-image"
				style={{ color: props.color, fontSize: props.fontSize, fontFamily: props.font, fontWeight: props.fontWeight }}
			>
				{props.message}
			</div>
  </Rnd>
  </div>
);
};

export default ResizeText;
