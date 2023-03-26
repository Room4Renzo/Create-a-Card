import React, { useState, useEffect } from "react";
import "./CarouselTest.css";
import CarouselData from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [image, setImage] = useState(CarouselData[activeIndex].picture);
	const [paused, setPaused] = useState(false);
	const currentImage = CarouselData[activeIndex].picture;
	const [clicked, setClicked] = useState(false);
	const activeImage = CarouselData[activeIndex];

	return (
		<div className="carousel">
			<div className="outer">
				<div
					className="inner"
					style={{
						backgroundImage: `url(${currentImage})`,
					}}
				>
					<div
						className="carousel-left"
						onClick={() => {
							if (activeIndex > 0) setActiveIndex(activeIndex - 1);
						}}
					>
						<ArrowBackIosNewIcon style={{ fontSize: 30 }} />
					</div>
					<div
						className="carousel-center"
					></div>
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
		</div>
	);
}
export default Carousel;
