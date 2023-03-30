// import ResizableElements from "./components/ResizableElements.jsx";
// import { Resizable } from "re-resizable";
import { useState } from "react";
import "./Home.css";

import TemplateCarousel from "./TemplateCarousel";
import Carousel from "./CarouselTest";

import CardTemplate from "./CardTemplate";
import ResizeImage from "./ResizeImage";
import DownloadButton from "./DownloadButton";
// import "bulma/css/bulma.css";
import FontDropdown from "./FontDropdown";
import CategoryDropdown from "./CategoryDropdown.jsx";
import { identifier } from "@babel/types";
import TemplateData from "../data/TemplateData";
import CarouselData from "../data/CarouselData";

const Home = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    setMessage(event.target.value);
  };

  const [image, setImageUrl] = useState(CarouselData[Math.floor(Math.random()*CarouselData.length)].picture[0]);
  const [template, setTemplateUrl] = useState(TemplateData[Math.floor(Math.random()*TemplateData.length)]);
  return (
    <div className="container is-fluid">
      <div className="columns is-vcentered">
        <div className="column is-5">
          {/* <h1 className="title is-size-2">Create your own card</h1> */}
          <TemplateCarousel
            onClickTemplate={(template) => setTemplateUrl(template)}
          />
          <Carousel onClickImage={(image) => setImageUrl(image)} />
        </div>

        <div className="column is-2">
          <div className="card is-shadowless">
            <div className="content">
              <h2 className="is-size-2">← Pick an image here</h2>
            </div>
          </div>

          <div className="card is is-shadowless">
            <div className="content">
              <h2 className="is-size-2">Design your card here →</h2>
            </div>
          </div>

          <div className="card is-shadowless">
            <div className="content">
              <h2 className="is-size-2">Enter Text Here ↓</h2>
            </div>
            {/* <TextInput
        name="name"
        handleChange={handleChange}
    /> */}

            {/* <ResizableElements /> */}
          </div>
        </div>
      <div className="column is-6">
        <div className="card-to-display">
          <CardTemplate templateUrl={template} />
          <ResizeImage image={image} />
        </div>
        <DownloadButton />
      </div>
      </div>

    </div>
  );
};

export default Home;
