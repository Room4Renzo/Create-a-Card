import "./ResizeImage.css";
import Resizable from "react-resizable-box";
import Draggable from "react-draggable";
import Deer from "../assets/images/animals/Deer.jpg";

const ResizeImage = () => {
  return (
    <div style={{ height: "80vh", width: "100px", padding: "10px"}}>
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
          Basic Sample
        </Resizable>
      </div>
      </Draggable>
    </div>
  );
}

export default ResizeImage;