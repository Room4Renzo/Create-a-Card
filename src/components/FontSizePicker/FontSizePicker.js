  import { useState } from 'react';
  import Slider from '@mui/material/Slider';

const FontSizePicker = (props) => {
    const [fontSize, setFontSize] = useState(14);

    const marks = [
        {
          value: 1,
          label: '1',
        },
        {
          value: 100,
          label: '100',
        },
      ];
  
    const handleChange = (event) => {
      setFontSize(event.target.value);
      props.onFontSizeChange(event.target.value); 
    };

          return (
              <Slider
                aria-label="Always visible"
                defaultValue={14}
                value={fontSize}
                step={1}
                marks={marks}
                valueLabelDisplay="off"
                onChange={handleChange}
              />
          );
        }
         

export default FontSizePicker;