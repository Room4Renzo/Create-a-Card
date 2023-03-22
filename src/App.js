import React from "react";
import Carousel, { CarouselItem } from "./components/Carousel";

export default function App() {
	return (
		<div className="App">
			<Carousel>
				<CarouselItem>
					<img
						src="./assets/images/Birthday.png"
						className="carousel-item"
					/>
				</CarouselItem>
				<CarouselItem>
					<img
						src="./assets/images/Birthday.png"
						className="carousel-item"
					/>
				</CarouselItem>
				<CarouselItem>
					<img
						src="./assets/images/Birthday.png"
						className="carousel-item"
					/>
				</CarouselItem>
				<CarouselItem>
					<img
						src="./assets/images/Birthday.png"
						className="carousel-item"
					/>
				</CarouselItem>
			</Carousel>
		</div>
	);
}
