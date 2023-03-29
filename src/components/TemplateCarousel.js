import React, { useState, useEffect, Fragment } from "react";
import "./CarouselTest.css";
import TemplateData from "../data/TemplateData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TemplateCarousel(props) {
	// const [activeIndex, setActiveIndex] = useState(0);
	const [activeImage, setActiveImage] = useState(0);
	const currentTemplate = TemplateData[activeIndex];

	const [clicked, setClicked] = useState(false);
	const [uploadImage, setUploadImage] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeImage < TemplateData.length - 1) {
				setActiveImage(activeImage + 1);
			} else {
				setActiveIndex(0);
			}
		}, 3600);
		return () => clearInterval(interval);
	});

	const onClick = () => {
		setClicked(true);
		setUploadTemplate(currentTemplate);
		props.onClickTemplate(currentTemplate);
		console.log(activeImage);
	};

	return (
		<div>
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
							if (activeImage > 0) {
								setActiveImage(activeImage - 1);
							} else {
								setActiveImage(TemplateData.length - 1);
							}
						}}
					>
						<ArrowBackIosNewIcon style={{ fontSize: 30 }} />
					</div>
					<div
						className="carousel-center"
						onClick={() => onClick()}
						value={clicked}
					></div>
					<div
						className="carousel-right"
						onClick={() => {
							if (activeImage < TemplateData.length - 1) {
								setActiveImage(activeImage + 1);
							} else {
								setActiveImage(0);
							}
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
			{/* {clicked ? <img src={uploadImage} /> : <div></div>} */}
		</div>
	);
}
export default Carousel;
