// import React, { useEffect, useState } from "react";
// // import { useSpring, animated } from "react-spring";
// import { useSwipeable } from "react-swipeable";
// import "./Carousel.css";
// import { CarouselData } from "../data/CarouselData";
// export const CarouselItem = ({ children, width }) => {
// 	return (
// 		<div
// 			className="carousel-item"
// 			style={{ width: width }}
// 		>
// 			{children}
// 		</div>
// 	);
// };
// const Carousel = ({ children }) => {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	// const [width, setWidth] = useState(0);
// 	const currentImage = CarouselData[activeIndex].img[activeIndex];
// 	const [paused, setPaused] = useState(false);
// 	const updateIndex = (newIndex) => {
// 		if (newIndex < 0) {
// 			newIndex = React.Children.count(children) - 1;
// 		} else if (newIndex >= React.Children.count(children)) {
// 			newIndex = 0;
// 		}
// 		setActiveIndex(newIndex);
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			if (!paused) {
// 				updateIndex(activeIndex + 1);
// 			}
// 		}, 1500);

// 		return () => {
// 			if (interval) {
// 				clearInterval(interval);
// 			}
// 		};
// 	});

// 	const handlers = useSwipeable({
// 		onSwipedLeft: () => updateIndex(activeIndex + 1),
// 		onSwipedRight: () => updateIndex(activeIndex - 1),
// 	});

// 	return (
// 		<div
// 			{...handlers}
// 			className="carousel"
// 			onMouseEnter={() => setPaused(true)}
// 			onMouseLeave={() => setPaused(false)}
// 		>
// 			<div className="inner">
// 				<div
// 					src={CarouselData[activeIndex].img[activeIndex - 1]}
// 					className={("carousel-item", "carousel-item-left")}
// 				></div>

// 				<div
// 					src={CarouselData[activeIndex].img[activeIndex]}
// 					className={("carousel-item", "carousel-item-center")}
// 				></div>

// 				<div
// 					src={CarouselData[activeIndex].img[activeIndex + 1]}
// 					className={("carousel-item", "carousel-item-right")}
// 				></div>
// 			</div>
// 		</div>
// 	);
// };

// export default Carousel;
