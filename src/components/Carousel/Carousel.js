import { useState, useEffect } from "react";
import "./Carousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CarouselData from "../../data/CarouselData";

const Carousel = (props) => {
const category = CarouselData.filter((element) => element.category === props.category)[0];

const [activeImage, setActiveImage] = useState(0);
  const currentImage = category.picture[activeImage];
  const [clickedImages, setClickedImages] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImage < category.picture.length - 1) {
        setActiveImage(activeImage + 1);
      } else {
        setActiveImage(0);
      }
    }, 3600);
    return () => clearInterval(interval);
  }, [category]);

  const onClick = () => {
    setClicked(true); 
    const newArray = [...clickedImages, currentImage];
    setClickedImages(newArray);
    console.log(newArray);
    props.onClickImage(newArray);
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
                setActiveImage(category.picture.length - 1);
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
              if (activeImage <category.picture.length - 1) {
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
export default Carousel;
