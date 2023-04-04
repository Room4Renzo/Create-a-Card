import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from 'react';


const TemplateOrientation = (props) => {
    const [orientation, setOrientation ] = useState('portrait');
    
    const handleChange = (event) => {
        setOrientation(event.target.value);
        props.onOrientationChange(event.target.value);
    }

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        defaultValue="portrait"
      >
        <FormControlLabel value="portrait" control={<Radio />} label="Portrait"  />
        <FormControlLabel value="landscape" control={<Radio />} label="Landscape" />
       
      </RadioGroup>
    </FormControl>
  );
}

export default TemplateOrientation;
