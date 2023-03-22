import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel, { CarouselItem } from "./components/Carousel";

import TextInput from "./components/TextInput";

import Navbar from "./components/Navbar";

export default function App() {
	return (
<Router >
<Navbar />
          <Routes >
		  <Route path="/" element={ <Carousel>
				<CarouselItem>Item 1</CarouselItem>
				<CarouselItem>Item 2</CarouselItem>
				<CarouselItem>Item 3</CarouselItem>
				<CarouselItem>Item 4</CarouselItem>

			</Carousel>
			<TextInput />
		</div>
	);
}

			</Carousel> } />
            {/* <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} /> */}
		  {/**/}
          </Routes>
    </Router>
)}

