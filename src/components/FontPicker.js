import * as React from 'react';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select, { SelectChangeEvent } from '@mui/material/Select';
  import { useState } from 'react';
  import { Typography } from '@mui/material';

const FontPicker = (props) => {
    const [font, setFont] = useState('');
  
    const handleChange = (event) => {
      setFont(event.target.value);
      props.fontChange(font);
    };
  
    return (
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label" >Font</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={font}
            label="font"
            onChange={handleChange}
            style={{fontFamily: font }}
          >
            <MenuItem value="Arial" style={{fontFamily: "Arial" }}>Arial</MenuItem>
            <MenuItem value="Tahoma" style={{fontFamily: "Tahoma" }}>Tahoma</MenuItem>
            <MenuItem value="Courier New" style={{fontFamily: "Courier New" }}>Courier New</MenuItem>
            <MenuItem value="Trebuchet MS" style={{fontFamily:" Trebuchet MS" }}>Trebuchet MS</MenuItem>
            <MenuItem value="Garamond" style={{fontFamily:" Garamond" }}>Garamond</MenuItem>
            <MenuItem value="Georgia" style={{fontFamily: "Georgia" }}>Georgia</MenuItem>
            <MenuItem value="Times New Roman" style={{fontFamily: "Times New Roman" }}>Times New Roman</MenuItem>
            <MenuItem value="Verdana" style={{fontFamily: "Verdana"}}>Verdana</MenuItem>
          </Select>
        </FormControl>
    );
};


export default FontPicker;