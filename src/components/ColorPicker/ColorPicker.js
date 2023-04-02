import { HexColorPicker } from "react-colorful";
import { useState } from 'react';

const ColorPicker = (props) => {
  const [color, setColor] = useState("#aabbcc");
  
  const onClick = () => {
    props.onColorChange(color);
  }

  return <HexColorPicker color={color} onChange={setColor} onClick={onClick}/>;
};

export default ColorPicker;