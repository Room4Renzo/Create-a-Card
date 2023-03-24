import "./CardTemplate.css";
import { useState } from "react";
import Deer from "../assets/images/animals/Deer.jpg";
import Template from "../assets/images/templates/Birthday.png";

const CardTemplate = ({ image }) => {
  // const [image, setImage] = useState(props);
  // const [clicked, setClicked] = useState(false);
  // const uploadImage = () => {
  //     setImage(Deer);
  //     setClicked(!clicked);
  // }

  return (
    <div className="card-template-container">
      <img src={image} className="rectangle" />
      {/* <img src={Deer} onClick={uploadImage}/> */}
      {/* <div className="rectangle" >
                { clicked ? <img src={Deer} /> : <div></div> }
            </div> */}
    </div>
  );
};

export default CardTemplate;