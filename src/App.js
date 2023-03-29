import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyCard from "./components/MyCard";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {


	return (
		<Router >
			<Navbar />
			  <Routes >
				<Route path="/" element={<Home/>} />
				<Route path="/my-card" element={<MyCard/>} />
			  </Routes>
		</Router>
	  );
}

