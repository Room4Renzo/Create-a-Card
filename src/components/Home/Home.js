import { useState } from "react";
import "./Home.css";

import TemplateCarousel from "../TemplateCarousel/TemplateCarousel";
import Carousel from "../Carousel/Carousel";
import CardTemplate from "../CardTemplate/CardTemplate";
import ResizeImage from "../ResizeImage/ResizeImage";
import ResizeText from "../ResizeText/ResizeText";
import DownloadButton from "../DownloadButton/DownloadButton";
import TemplateData from "../../data/TemplateData";
import CarouselData from "../../data/CarouselData";
import ColorPicker from "../ColorPicker/ColorPicker";
import TextInput from "../TextInput/TextInput";
import FontSizePicker from "../FontSizePicker/FontSizePicker";
import FontPicker from "../FontPIcker/FontPicker";

const Home = () => {
  const [message, setMessage] = useState("");
  const [image, setImageUrl] = useState(
    CarouselData[Math.floor(Math.random() * CarouselData.length)].picture[0]
  );
  const [template, setTemplateUrl] = useState(
    TemplateData[Math.floor(Math.random() * TemplateData.length)]
  );

  const [textColor, setTextColor] = useState();
  const [fontSize, setFontSize] = useState(14);
  const [textFont, setTextFont] = useState("Arial");

  return (
    <div className="container is-fluid">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <h1 className="category">Template</h1>
          <TemplateCarousel
            onClickTemplate={(template) => setTemplateUrl(template)}
          />
          <h1 className="category">Image</h1>
          <Carousel onClickImage={(image) => setImageUrl(image)} />
        </div>

        <div className="column is-2 middle">
          <div className="card is-shadowless">
            <div className="content">
              <div>
                <h1 className="category">Message</h1>
                <TextInput
                  onTextChange={(message) => setMessage(message)}
                  color={textColor}
                />
              </div>
            </div>
          </div>

          <div className="card is is-shadowless">
            <div className="content">
              <div>
                <h1 className="category">Fonts</h1>
                <FontPicker onFontChange={(font) => setTextFont(font)} />
              </div>
            </div>
          </div>


		  <div className="is-shadowless">
            <div className="content">
              <div>
                <h1 className="category">Font Sizes</h1>
                <FontSizePicker
                  onFontSizeChange={(fontSize) => setFontSize(fontSize)}
                />
              </div>
            </div>
          </div>

          <div className="is-shadowless">
            <div className="content">
              <div>
                <h1 className="category">Colors</h1>
                <ColorPicker
                  onColorChange={(textColor) => setTextColor(textColor)}
                />
              </div>
            </div>
          </div>

        </div>
        <div className="column is-6">
          <h1 className="category">Design</h1>
          <div className="card-to-display">
            <CardTemplate
              templateUrl={template}
            />
            <ResizeImage image={image} />
			<ResizeText message={message}
              color={textColor}
              fontSize={fontSize}
              font={textFont}/>
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
