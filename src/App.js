import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import "./App.css";
import Carousel from "./components/CarouselTest";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import CardTemplate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import DownloadButton from "./components/DownloadButton";
import BirthdayCardTemplate from "./assets/images/Templates/birthday-template1.jpeg";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Dropdown from "./components/Dropdown.js";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import CategoryDrawer from "./components/CategoryDrawer.jsx";

export default function App() {
	return (
		<Router>
			<Container maxWidth="xl">
				<CssBaseline />
				<Header />
				<Grid2
					container
					spacing={{ xs: 1, sm: 2, md: 3 }}
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid2
						item
						xs={5}
						md={5}
					>
						<Carousel />
					</Grid2>
					<Grid2
						item
						xs={4}
						md={4}
					>
						<CategoryDrawer />
					</Grid2>
					<Grid2
						item
						xs={4}
						md={4}
					>
						<Carousel />
					</Grid2>
					<Grid2
						item
						xs={5}
						md={5}
					>
						<CardTemplate />
					</Grid2>
					<Grid2
						item
						xs={3}
						md={3}
					>
						<TextInput />
					</Grid2>
				</Grid2>
			</Container>
		</Router>
	);
}
