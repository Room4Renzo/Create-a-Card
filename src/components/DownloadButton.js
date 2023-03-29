import React from "react";
import { toJpeg, toPng } from "html-to-image";
import "./DownloadButton.css";
import mergeImages from "merge-images";
import html2canvas from "html2canvas"

const downloadImage = (dataUrl) => {
  const a = document.createElement("a");
  a.setAttribute("download", "my-card.png");
  a.setAttribute("href", dataUrl);
  a.click();
};

const DownloadButton = () => {
  const onClick = () => {
    html2canvas(document.querySelector(".card-to-display")).then((canvas) => {
      downloadImage(canvas.toDataURL("image/png"));
    });
  };

  return (
    <button className="download-btn" onClick={onClick}>
      Download Card
    </button>
  );
};

export default DownloadButton;
