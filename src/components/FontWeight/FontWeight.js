import { useState } from 'react';
import Slider from '@mui/material/Slider';

const FontWeightPicker = (props) => {
  const [fontWeight, setFontWeight] = useState(400);

  const marks = [
      {
        value: 100,
        label: '100',
      },
      {
        value: 400,
        label: '400',
      },
      {
        value: 900,
        label: '900',
      },
    ];

  const handleChange = (event) => {
    setFontWeight(event.target.value);
    props.onFontWeightChange(event.target.value); 
    console.log(event.target.value);
  };

        return (
            <Slider
              aria-label="Always visible"
              defaultValue={400}
              min={100}
              max={900}
              value={fontWeight}
              step={100}
              marks={marks}
              valueLabelDisplay="off"
              onChange={handleChange}
            />
        );
      }
       

export default FontWeightPicker;