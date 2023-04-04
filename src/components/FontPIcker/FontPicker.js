import * as React from 'react';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select from '@mui/material/Select';
  import { useState } from 'react';
  import Fonts from '../../data/FontData';

const FontPicker = (props) => {
    const [font, setFont] = useState('');
  
    const handleChange = (event) => {
      setFont(event.target.value);
      props.onFontChange(event.target.value); 
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
            defaultValue='arial'
          >
            {Fonts.map((font) => <MenuItem key={font} value={font} style={{fontFamily: font}}>{font}</MenuItem>)}
          </Select>
        </FormControl>
         
    );
};


export default FontPicker;