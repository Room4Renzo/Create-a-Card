import TextInput from "./TextInput";
import { useState, useEffect } from "react";
// import WebFont from "webfontloader";

const TextWrapper = (props) => {
	const [name, setName] = useState("");
	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value);
	};

	// useEffect(() => {
	// 	WebFont.load({
	// 		google: {
	// 			families: ["Roboto", "sans-serif", ""],
	// 		},
	// 	});
	// }, []);
	return (
		<div>
			<TextInput
				name={props.name}
				handleChange={handleChange}
			/>
		</div>
	);
};
export default TextWrapper;
