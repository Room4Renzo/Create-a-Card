import React, { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";
import { Templates } from "../data/CarouselData";
import { Animals } from "../data/CarouselData";

export const CarouselItem = ({ children, width }) => {
	return (
		<div
			className="carousel-item"
			style={{ width: width }}
		>
			{children}
		</div>
	);
};
const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	// const [width, setWidth] = useState(0);
	const [paused, setPaused] = useState(false);
	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 1500);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	return (
		<div
			{...handlers}
			className="carousel"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 35}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, {
						width: "35%",
					});
				})}
			</div>
			<div className="indicators">
				<button
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					Prev
				</button>
				{React.Children.map(children, (child, index) => {
					return (
						<button
							className={`${index === activeIndex ? "active" : ""}`}
							onClick={() => {
								updateIndex(index);
							}}
						>
							{index + 1}
						</button>
					);
				})}
				<button
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Carousel;