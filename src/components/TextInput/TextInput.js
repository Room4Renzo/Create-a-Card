import { useState, useRef, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  const [message, setMessage] = useState("Happy Birthday!");
  const [display, setDisplay] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
    setDisplay(true);
    props.onTextChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        multiline
        value={message}
        onChange={handleChange}
        autoFocus={true}
        rowsMax={4}
        fullWidth
      />
    </Box>
  );
};
export default TextInput;
