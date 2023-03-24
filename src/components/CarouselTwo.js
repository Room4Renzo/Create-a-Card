import React, { useState } from "react";
import "./Carousel.css";
import { CarouselData } from "../data/CarouselData";

function CarouselTwo() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="carousel">
			<div
				className="inner"
				style={{ backgroundImage: `url(${CarouselData[activeIndex].picture})` }}
			>
				<div className="carousel-left"></div>
				<div className="carousel-center"></div>
				<div className="carousel-right"></div>
			</div>
		</div>
	);
}

export default CarouselTwo;
