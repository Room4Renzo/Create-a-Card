import React from "react";
import Carousel, { CarouselItem } from "./components/Carousel";

export default function App() {
	return (
		<div className="App">
			<Carousel>
				<CarouselItem>
					<img src="./assets/images/Deer.jpg" />
				</CarouselItem>
				<CarouselItem>
					<img src="./assets/images/Fox.jpg" />
				</CarouselItem>
				<CarouselItem>
					<img src="./assets/images/Kitten.jpg" />
				</CarouselItem>
				<CarouselItem>
					<img src="./assets/images/Tiger.jpg" />
				</CarouselItem>
			</Carousel>
		</div>
	);
}
