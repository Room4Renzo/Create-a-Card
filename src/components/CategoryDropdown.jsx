import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./CategoryDropdown.css";
import CarouselData from "../data/CarouselData";

const CategoryDropdown = () => {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	// const changeCategory = (category) => {
	// 	const categoryIndex = CarouselData.findIndex(
	// 		(item) => item.category === category
	// 	);
	// 	console.log(categoryIndex);
	// };

	return (
		<List sx={{ width: "30%", maxWidth: "30%", bgcolor: "background.paper" }}>
			<ListItemButton onClick={handleClick}>
				<ListItemText primary="Categories" />
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
						<ListItemText primary="Animals" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Cartoon" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Holiday" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Misc" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Nature" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Smiley" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Templates" />
					</ListItemButton>
				</List>
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Text" />
					</ListItemButton>
				</List>{" "}
				<List
					component="div"
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary="Vehicles" />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
};

export default CategoryDropdown;
