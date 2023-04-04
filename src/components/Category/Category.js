import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from 'react';
const Category = (props) => {
    const [category, setCategory ] = useState('animals');
    const handleChange = (event) => {
        setCategory(event.target.value);
        props.onCategoryChange(event.target.value);
        console.log(event.target.value);
    }

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="animals" control={<Radio />} label="Animals" />
        <FormControlLabel value="Cartoon" control={<Radio />} label="Cartoons" />
        <FormControlLabel value="Holiday" control={<Radio />} label="Holidays" />
        <FormControlLabel value="Nature" control={<Radio />} label="Nature" />
        <FormControlLabel value="Smiley" control={<Radio />} label="Smileys" />
        <FormControlLabel value="Text" control={<Radio />} label="Texts" />
        <FormControlLabel value="Vehicles" control={<Radio />} label="Vehicles" />
        <FormControlLabel value="Misc" control={<Radio />} label="Miscellaneous" />
       {/* <FormControlLabel value="Upload" control={<Radio />} label="Upload your image" /> */}
       
      </RadioGroup>
    </FormControl>
  );
}

export default Category;
