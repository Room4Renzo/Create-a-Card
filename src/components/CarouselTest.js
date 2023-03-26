import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./CarouselTest.css";
import CarouselData from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeImage, setActiveImage] = useState(0);
	const currentImage = CarouselData[activeIndex].picture[activeImage];
	const [image, setImage] = useState(currentImage);
	const activeCategory = CarouselData[activeIndex];
	const [paused, setPaused] = useState(false);
	const [clicked, setClicked] = useState(false);

	// const pauseOnHover = () => {
	// 	if (!paused) {
	// 		setPaused(true);
	// 	} else {
	// 		setPaused(false);
	// 	}
	// };

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeImage < CarouselData[activeIndex].picture.length - 1) {
				setActiveImage(activeImage + 1);
			} else {
				setActiveImage(0);
			}
		}, 3600);
		return () => clearInterval(interval);
	});

	// const handlers = useSwipeable({
	// 	onSwipedLeft: () => updateIndex(activeIndex + 1),
	// 	onSwipedRight: () => updateIndex(activeIndex - 1),
	// });

	// const uploadImage = () => {
	// 	setImage(currentImage);
	// 	setClicked(!clicked);
	// };

	return (
		<div className="carousel">
			<div
				className="inner"
				style={{
					backgroundImage: `url(${currentImage})`,
				}}
			>
				<div
					className="carousel-left"
					onClick={() => {
						if (activeImage > 0) setActiveImage(activeImage - 1);
					}}
				>
					<ArrowBackIosNewIcon style={{ fontSize: 30 }} />
				</div>
				<div className="carousel-center"></div>
				<div
					className="carousel-right"
					onClick={() => {
						if (activeImage < currentImage.length - 1)
							setActiveImage(activeImage + 1);
					}}
				>
					<ArrowForwardIosIcon
						style={{
							fontSize: 30,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
export default Carousel;
