import "./CardTemplate.css";
import { useState } from "react";
import CarouselData from "../data/CarouselData";

const CardTemplate = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [image, setImage] = useState(CarouselData[activeIndex].picture);
	const [clicked, setClicked] = useState(false);

	const uploadImage = () => {
		setImage();
		setClicked(!clicked);
	};

	return (
		<div className="card-template-container">
			<div className="rectangle">{props.name}</div>
		</div>
	);
	const CardTemplate = ({ image, className }) => {
		// const [image, setImage] = useState(props);
		// const [clicked, setClicked] = useState(false);
		// const uploadImage = () => {
		//     setImage(Deer);
		//     setClicked(!clicked);
		// }

		return (
			<div className="card-template-container">
				<img
					src={image}
					className={className}
				/>
				{/* <img src={Deer} onClick={uploadImage}/> */}
				{/* <div className="rectangle" >
                { clicked ? <img src={Deer} /> : <div></div> }
            </div> */}
			</div>
		);
	};
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [image, setImage] = useState(CarouselData[activeIndex].picture);
//   const [clicked, setClicked] = useState(false);

  return (
    <div className="card-template-container">
      <div className="rectangle">
		<img 
	  src={props.imageUrl} 
	  className='image-position' 
	  /></div>
    </div>
  );
};

export default CardTemplate;
