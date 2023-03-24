import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel, { CarouselItem } from "./components/Carousel";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import "./App.css";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import CardTemlate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import BirthdayCardTemplate from "./assets/images/templates/birthday-template1.jpeg";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <div className="left-container">
                {/* <Carousel /> */}
                <TextInput />
                {/* <CardTemlate image={BirthdayCardTemplate} /> */}
              </div>
              <div className="left-container">
                <Carousel />
                <TextInput />
              </div>
              <ResizeImage />

              <CardTemlate />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
