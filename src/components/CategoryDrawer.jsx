import { useState } from "react";
import { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function CategoryDrawer() {
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[
					"Animals",
					"Cartoon",
					"Holiday",
					"Misc",
					"Nature",
					"Smiley",
					"Templates",
					"Text",
					"Vehicles",
				].map((text, index) => (
					<ListItem
						key={text}
						disablePadding
					>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</Box>
	);

	return (
		<div>
			{["Categories"].map((anchor) => (
				<Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</Fragment>
			))}
		</div>
	);
}
