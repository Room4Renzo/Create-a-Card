// import React, { useEffect, useState } from "react";
// // import { useSwipeable } from "react-swipeable";
import "./Carousel.css";
import CarouselData from "../data/CarouselData";
// import { CarouselItem } from "./Carousel";

// export const Carousel = (item) => {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const currentImage = CarouselData[activeIndex].picture.map((item) => {
// 		console.log(item);
// 		return item;
// 	});

// 	// const updateIndex = () => {
// 	// 	if (activeIndex < 0) {
// 	// 		currentImage[activeIndex];
// 	// 	} else if (activeIndex >= CarouselData[activeIndex].picture.length) {
// 	// 		activeIndex = 0;
// 	// 	}
// 	// 	setActiveIndex(activeIndex);

// 	// useEffect(() => {
// 	// 	const interval = setInterval(() => {
// 	// 		if (!paused) {
// 	// 			updateIndex(activeIndex + 1);
// 	// 		}
// 	// 	}, 1500);
// 	// });

// 	// const handlers = useSwipeable({
// 	// 	onSwipedLeft: () => updateIndex(activeIndex + 1),
// 	// 	onSwipedRight: () => updateIndex(activeIndex - 1),
// 	// });

// 	return (
// 		<div
// 			className="carousel"
// 			// {...handlers}
// 			// onMouseEnter={() => setPaused(true)}
// 			// onMouseLeave={() => setPaused(false)}
// 		>
// 			<div className="inner">
// 				<p>Hello</p>
// 				<img
// 					src={currentImage}
// 					className="img-fluid"
// 				/>
// 				<p>World</p>
// 			</div>
// 		</div>
// 	);
// };

export default CarouselItem;
