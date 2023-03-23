import "./ResizeImage.css";
import Resizable from "react-resizable-box";
import Draggable from "react-draggable";
import { useState } from 'react';

const ResizeImage = () => {
    const [size, setSize] = useState({
        width: 300,
        height: 400
    })

    const onResize = (event) => {
        setSize({width: event.target.value.width, height: event.target.value.height});
      };

  return (
    <div style={{ height: "80vh", width: "80vh"}}>
      <Draggable
      >
      <div
        className="drag-wrapper"
        style={{ marginLeft: "100px", position: "absolute" }}
      >
        <Resizable
          className="item"
          width={300}
          height={400}
          onResize={onResize}
          enable={{
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true
          }}
        >
        </Resizable>
      </div>
      </Draggable>
    </div>
  );
}

export default ResizeImage;