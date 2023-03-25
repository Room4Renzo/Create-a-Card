import React, { useState, useEffect } from "react";
import "./CarouselTest.css";
import CarouselData from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardTemplate from "./CardTemplate";
import { Transform } from "@mui/icons-material";
import { Fragment } from "react";

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [image, setImage] = useState(CarouselData[activeIndex].picture);
	const [paused, setPaused] = useState(false);
	// const [category, setCategory] = useState(CarouselData[activeIndex].category);
	const currentImage = CarouselData[activeIndex].picture;
	const [clicked, setClicked] = useState(false);
	const activeImage = CarouselData[activeIndex];

	const updateIndex = () => {
		if (activeIndex < 0) {
			activeIndex = CarouselData.length - 1;
		} else if (activeIndex >= CarouselData.length) {
			activeIndex = 0;
		}
		setActiveIndex(activeIndex);
	};

	const uploadImage = () => {
		setImage(currentImage);
		setClicked(!clicked);
	};

	// const transitionImage = () => {
	// 	const visibleImage = document.querySelector(".inner");
	// 	visibleImage.style.transform = `translateX(-${activeIndex * 35}%)`;
	// };

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

	return (
		<div className="carousel">
			{" "}
			<div className="outer">
				<div
					className="inner"
					style={{
						backgroundImage: `url(${CarouselData[activeIndex].picture})`,
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
						onClick={() => {
							uploadImage();
						}}
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
