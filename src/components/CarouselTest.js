import React, { useState, useEffect, Fragment } from "react";
import { useSwipeable } from "react-swipeable";
import "./CarouselTest.css";
import CarouselData from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResizeImage from "./ResizeImage";
import CardTemplate from "./CardTemplate";
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Divider,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";

function Carousel(props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeImage, setActiveImage] = useState(0);
	const currentImage = CarouselData[activeIndex].picture[activeImage];
	const [image, setImage] = useState(currentImage);
	const activeCategory = CarouselData[activeIndex];
	const [paused, setPaused] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [uploadImage, setUploadImage] = useState("");

	const [state, setState] = useState({
		left: false,
		right: false,
		top: false,
		bottom: false,
	});
	// const pauseOnHover = () => {
	// 	if (!paused) {
	// 		setPaused(true);
	// 	} else {
	// 		setPaused(false);
	// 	}
	// };
	function changeCategory(event) {
		console.log(event.target.innerHTML);
		const category = event.target.innerHTML;

		switch (category) {
			case "Animals":
				setActiveIndex(0);
				break;
			case "Cartoon":
				setActiveIndex(1);
				break;
			case "Holiday":
				setActiveIndex(2);
				break;
			case "Misc":
				setActiveIndex(3);
				break;
			case "Nature":
				setActiveIndex(4);
				break;
			case "Smiley":
				setActiveIndex(5);
				break;
			case "Templates":
				setActiveIndex(6);
				break;
			case "Text":
				setActiveIndex(7);
				break;
			case "Vehicles":
				setActiveIndex(8);
				break;
			default:
				setActiveIndex(0);
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (activeImage < CarouselData[activeIndex].picture.length - 1) {
				setActiveImage(activeImage + 1);
			} else {
				setActiveImage(0);
			}
		}, 3600);
		return () => clearInterval(interval);
	});

	const onClick = () => {
		setClicked(true);
		setUploadImage(currentImage);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[
					"Animals",
					"Cartoon",
					"Holiday",
					"Misc",
					"Nature",
					"Smiley",
					"Templates",
					"Text",
					"Vehicles",
				].map((text, index) => (
					<ListItem
						key={text}
						disablePadding
						onClick={(event) => changeCategory(event)}
					>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</Box>
	);

	return (
		<div>
			<div>
				{["Categories"].map((anchor) => (
					<Fragment key={anchor}>
						<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</Fragment>
				))}
			</div>
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
							if (activeImage > 0) setActiveImage(activeImage - 1);
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
							if (activeImage < CarouselData[activeIndex].picture.length - 1) {
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
			{clicked ? <img src={uploadImage} /> : <div></div>}
		</div>
	);
}
export default Carousel;
