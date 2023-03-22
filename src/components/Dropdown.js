// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function SelectVariants() {
//   const [age, setAge] = React.useState('');
//   const options = [
//         'Birthday Card', 'Wedding Card', 'Get Well Soon'
//     ];
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           label="Category"
//         >
//           <MenuItem value={options[0]}>{options[0]}</MenuItem>
//           <MenuItem value={options[1]}>{options[1]}</MenuItem>
//           <MenuItem value={options[2]}>{options[2]}</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./Dropdown.css";

const options = [
    'Birthday Card', 'Wedding Card', 'Get Well Soon'
];

const Dropdown = () => {
    const [open, setOpen] = useState(true);
  
  return (
      <nav className="dropdown-menu">
        <button
          onClick={() => setOpen(!open)}
          //hidden={!open}
          className="menu-button"
        >
          Category
        </button>

        <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
          <button
            onClick={() => setOpen(open)}
            hidden={open}
            className="menu-cross-button"
          >
          </button>

          <li className="menu-item">
           {options[0]}
          </li>

          <li className="menu-item">
           {options[1]}
          </li>
          <li className="menu-item">
           {options[2]}
          </li>

        </ul>
      </nav>
  );
}


export default Dropdown;