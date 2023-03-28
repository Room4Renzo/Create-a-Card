import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./CarouselTest.css";
import CarouselData from "../data/CarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResizeImage from "./ResizeImage";
import CardTemplate from "./CardTemplate";

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = CarouselData[activeIndex].picture[activeImage];
  const [image, setImage] = useState(currentImage);
  const activeCategory = CarouselData[activeIndex];
  const [paused, setPaused] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [uploadImage, setUploadImage] = useState("");


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
    console.log("Clicked");
    setClicked(true);
    setUploadImage(currentImage);
    props.onClickImage(currentImage);
    console.log(currentImage);
    console.log(clicked);
  };

  return (
    <div className="right">
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
              if (activeImage < currentImage.length - 1)
                setActiveImage(activeImage + 1);
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
      <div></div>
    </div>
  );
}
export default Carousel;
