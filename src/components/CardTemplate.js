import "./CardTemplate.css";
import { useState } from "react";
import CarouselData from "../data/CarouselData";

const CardTemplate = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [image, setImage] = useState(CarouselData[activeIndex].picture);
//   const [clicked, setClicked] = useState(false);

  return (
    <div className="rectangle-template">
		<img 
	  src={props.imageUrl} 
	  /></div>
  );
};

export default CardTemplate;
