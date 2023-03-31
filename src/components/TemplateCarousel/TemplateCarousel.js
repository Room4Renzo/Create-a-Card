import React, { useState, useEffect, Fragment } from "react";
import "../Carousel/Carousel.css";
import TemplateData from "../../data/TemplateData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TemplateCarousel(props) {
	const [activeImage, setActiveImage] = useState(0);
	const currentTemplate = TemplateData[activeImage];
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeImage < TemplateData.length - 1) {
				setActiveImage(activeImage + 1);
			} else {
				setActiveImage(0);
			}
		}, 3600);
		return () => clearInterval(interval);
	});

	const onClick = () => {
		setClicked(true);
		props.onClickTemplate(currentTemplate);
		console.log(currentTemplate);
	};

	return (
		<div>
			<div className="carousel">
				<div
					className="inner"
					style={{
						backgroundImage: `url(${currentTemplate})`,
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
		</div>
	);
}
export default TemplateCarousel;
