import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import CardTemplate from "./CardTemplate";
import "./RadioButtons.css";

import template from "../assets/images/templates/birthday-template1.jpeg";

const RadioButtons = () => {
  const [value, setValue] = useState("portrait");

  const handleChange = () => {
    if (value === "portrait") {
      setValue("landscape");
    } else {
      setValue("portrait");
    }
  };
  return (
    <div className="right-container">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Choose template orientation
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="portrait"
              control={<Radio />}
              label="Portrait"
            />
            <FormControlLabel
              value="landscape"
              control={<Radio />}
              label="Landscape"
            />
          </RadioGroup>
        </FormControl>
      <div>
        {value === "portrait" ? (
          <CardTemplate image={template} />
        ) : (
          <CardTemplate image={template} className={`landscape`}/>
        )}
      </div>
    </div>
  );
};

export default RadioButtons;
