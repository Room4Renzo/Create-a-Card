import React, { useState, useEffect, Fragment } from "react";
import "./CarouselTest.css";
import TemplateData from "../data/TemplateData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";

function Carousel(props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const currentImage = TemplateData[activeIndex];
	const [image, setImage] = useState(currentImage);
	const [clicked, setClicked] = useState(false);
	const [uploadImage, setUploadImage] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeIndex < TemplateData.length - 1) {
				setActiveIndex(activeIndex + 1);
			} else {
				setActiveIndex(0);
			}
		}, 3600);
		return () => clearInterval(interval);
	});

	const onClick = () => {
		setClicked(true);
		setUploadImage(currentImage);
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
							if (activeIndex > 0) setActiveIndex(activeIndex - 1);
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
							if (activeIndex < TemplateData.length - 1) {
								setActiveIndex(activeIndex + 1);
							} else {
								setActiveIndex(0);
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
