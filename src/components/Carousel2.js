import React, { useState } from "react";
import "./Carousel.css";
import { CarouselData } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselTwo() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="carousel">
			<div
				className="inner"
				style={{ backgroundImage: `url(${CarouselData[activeIndex].picture})` }}
			>
				<div className="carousel-left">
					<ArrowBackIosIcon />
				</div>
				<div className="carousel-center"></div>
				<div className="carousel-right">
					<ArrowForwardIosIcon />
				</div>
			</div>
		</div>
	);
}

export default CarouselTwo;
