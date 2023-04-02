import "./ResizeText.css";
import { Rnd } from "react-rnd";
import { useState } from 'react';


const ResizeText = (props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);

  return (
    <div className="rectangle-image">
  <Rnd
    default={{
      x: 0,
      y: -400,
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
				class="text-on-image"
				style={{ color: props.color, fontSize: props.fontSize, fontFamily: props.font }}
			>
				<h3> {props.message} </h3>
			</div>
  </Rnd>
  </div>
);
};

export default ResizeText;
