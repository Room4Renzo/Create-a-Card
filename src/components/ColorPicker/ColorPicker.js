import { HexColorPicker } from "react-colorful";
import { useState } from 'react';

const ColorPicker = (props) => {
  const [color, setColor] = useState("#aabbcc");
  
  const onClick = () => {
    console.log("Clicked");
    console.log("Color", color);
    props.setTextColor(color);
  }

  return <HexColorPicker color={color} onChange={setColor} onClick={onClick}/>;
};

export default ColorPicker;