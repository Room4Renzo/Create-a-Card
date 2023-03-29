import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Carousel from "./components/CarouselTest";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import CardTemplate from "./components/CardTemplate";
import ResizeImage from "./components/ResizeImage";
import DownloadButton from "./components/DownloadButton";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import CategoryDrawer from "./components/CategoryDrawer.jsx";
import "bulma/css/bulma.css";
import TemplateCarousel from "./components/TemplateCarousel.js";
import { Resizable } from "re-resizable";
import ResizableElements from "./components/ResizableElements.jsx";
import FontDropdown from "./components/FontDropdown";
import { Box } from "@mui/system";
import TextWrapper from "./components/ResizableElements.jsx";
import { identifier } from "@babel/types";

export default function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const [image, setImageUrl] = useState();
  const [template, setTemplateUrl] = useState();
  const [card, setCard] = useState();

  return (
    <Router>
      <Header />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-5">
            <h1 className="title">Create your own card</h1>
            <TemplateCarousel
              onClickTemplate={(template) => setTemplateUrl(template)}
            />
            <Carousel onClickImage={(image) => setImageUrl(image)} />
            <h2>pick a font</h2>
            <FontDropdown />
          </div>
          <div className="column is-2">
            <div className="card">
              <div className="card-content">
                <div className="media"></div>
                <div className="card-image">
                  <figure className="image">
                    <img src="..\assets\images\Navigation\LeftArrow.svg" />
                  </figure>
                </div>
                <div className="content">Pick an image here.</div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="media"></div>
                <div className="card-image">
                  <figure className="image">
                    <img src="Create-a-Card/src/assets/images/Navigation/PointDown.png" />
                  </figure>
                </div>
              </div>
              <div className="content">Design your card here.</div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="content">Type your text here.</div>
                <div className="media"></div>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="..\assets\images\Navigation\PointDown.png" />
                  </figure>
                </div>
              </div>
              <TextWrapper name={name} handleChange={handleChange} />
              <ResizableElements />
            </div>
          </div>
          <div className="column is-6">
            <h1>Your card</h1>
            <div className="download">
              <CardTemplate templateUrl={template} name={name} />
              <ResizeImage image={image} />
              <DownloadButton image={image} template={template} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
