import React from "react";
import "./DownloadButton.css";
import html2canvas from "html2canvas";

const downloadImage = (dataUrl) => {
  const a = document.createElement("a");
  a.setAttribute("download", "my-card.png");
  a.setAttribute("href", dataUrl);
  a.click();
};

const DownloadButton = (props) => {
  const onClick = () => {
    html2canvas(document.querySelector(".card-to-display")).then((canvas) => {
      downloadImage(canvas.toDataURL("image/png"));
    });
  };

  const clear = () => {
    props.clearCardImage();
    props.clearCardMessage();
  }

  return (
    <div className="card-buttons">
      <button className="download-btn" onClick={clear}>
        Clear Card
      </button>
      <button className="download-btn" onClick={onClick}>
        Download Card
      </button>
    </div>
  );
};

export default DownloadButton;
