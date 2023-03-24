import React, { useState } from "react";
import "./Carousel.css";
import { CarouselData } from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselTwo() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="carousel">
			<div
				className="inner"
				style={{ backgroundImage: `url(${CarouselData[activeIndex].picture})` }}
			>
				<div
					className="carousel-left"
					onClick={() => {
						if (activeIndex > 0) setActiveIndex(activeIndex - 1);
					}}
				>
					<ArrowBackIosNewIcon style={{ fontSize: 30 }} />
				</div>
				<div className="carousel-center"></div>
				<div
					className="carousel-right"
					onClick={() => {
						if (activeIndex < CarouselData.length - 1)
							setActiveIndex(activeIndex + 1);
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

export default CarouselTwo;
