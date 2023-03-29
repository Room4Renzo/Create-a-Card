import "./Screenshot.css";
import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot';

const Screenshot = () => {
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)
    return (
      <div>
        <div>
          <button style={{ marginBottom: '10px' }} onClick={getImage}>
            Take screenshot
          </button>
        </div>
        <img width={300} src={image} alt={'Screenshot'} />
        <div ref={ref}>
        </div>
      </div>
    )
  };

export default Screenshot;
  