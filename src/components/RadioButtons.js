import React from "react";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from "react";


const RadioButtons = () => {
const [value, setValue] = useState('portrait');

const handleChange = () => {
    if (value === 'portrait') {
        setValue("landscape");
    }
    else {
        setValue("portrait")
    }
}

    return (
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Choose template orientation</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
          <FormControlLabel value="landscape" control={<Radio />} label="Landscape" />
        </RadioGroup>
      </FormControl>
    );
  }

export default RadioButtons;