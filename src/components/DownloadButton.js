import React from 'react';
import { toPng } from 'html-to-image';
import "./DownloadButton.css";

const downloadImage = (dataUrl) => {
  const a = document.createElement('a');
  a.setAttribute('download', 'my-card.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const DownloadButton = () => {
  const onClick = () => {
    toPng(document.querySelector('.rectangle')).then(downloadImage);
  };

  return (
    <button className="download-btn" onClick={onClick}>
      Download Card
    </button>
  );
}

export default DownloadButton;
