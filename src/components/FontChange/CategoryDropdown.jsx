import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./CategoryDropdown.css";

const FontDropdown = () => {
	const [open, setOpen] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = () => {
		setOpen(!open);
	};

	function changeFont(event) {
		console.log(event.target.innerHTML);
		const font = event.target.innerHTML;

		switch (font) {
			case "Roboto":
				setActiveIndex(0);
				break;
			case "Open sans":
				setActiveIndex(1);
				break;
			case "Lato":
				setActiveIndex(2);
				break;
			case "Source Sans Pro":
				setActiveIndex(3);
				break;
			case "Roboto Condensed":
				setActiveIndex(4);
				break;
			case "Oswald":
				setActiveIndex(5);
				break;
			case "Poppins":
				setActiveIndex(6);
				break;
			case "Raleway":
				setActiveIndex(7);
				break;
			default:
				setActiveIndex(0);
		}
	}

	return (
		<List onClick={(event) => changeFont(event)}>
			<ListItemButton onClick={handleClick}>
				<ListItemText primary="Fonts" />
				{open ? <ExpandMore /> : <ExpandLess />}
			</ListItemButton>
			<Collapse
				in={!open}
				timeout="auto"
				unmountOnExit
			>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Roboto" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Open sans" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Lato" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Source Sans Pro" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Roboto Condensed" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Oswald" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Poppins" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Raleway" />
					</ListItemButton>
				</List>{" "}
			</Collapse>
		</List>
	);
};

export default FontDropdown;
