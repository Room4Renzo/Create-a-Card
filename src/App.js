import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import "./App.css";
import Carousel from "./components/CarouselTest";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import CardTemlate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import DownloadButton from "./components/DownloadButton";
import BirthdayCardTemplate from "./assets/images/Templates/birthday-template1.jpeg";

export default function App() {
	return (
		<Router>
			<Container maxWidth="xl">
				<CssBaseline />
				<Header />
				<Grid2
					container
					spacing={8}
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid2
						item
						xs={4}
						md={6}
					>
						<Carousel />
					</Grid2>
					<Grid2
						item
						xs={4}
						md={6}
					>
						<CardTemplate />
					</Grid2>
					<Grid2
						item
						xs={4}
						md={6}
					>
						<Carousel />
					</Grid2>
					<Grid2
						item
						xs={6}
						md={6}
					>
						<TextInput />
					</Grid2>
				</Grid2>
			</Container>
		</Router>
	);
}
