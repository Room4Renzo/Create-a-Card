import React from "react";
import { toJpeg, toPng } from "html-to-image";
import "./DownloadButton.css";
import mergeImages from 'merge-images';

const downloadImage = (dataUrl) => {
  const a = document.createElement("a");
  a.setAttribute("download", "my-card.jpg");
  a.setAttribute("href", dataUrl);
  a.click();
};

const DownloadButton = (props) => {

  const onClick = () => {

    mergeImages([props.template, props.image]).then(
      (b64) => (document.querySelector("img").src = b64)
    );

    let toExport = document.querySelector("img");
    toPng(toExport).then(downloadImage);
  };

  return (
    <button className="download-btn" onClick={onClick}>
      Download Card
    </button>
  );
};

export default DownloadButton;
