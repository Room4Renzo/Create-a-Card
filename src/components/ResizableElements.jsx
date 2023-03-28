import TextInput from "./TextInput";
import { useState } from "react";

const handleChange = (event) => {
	const [name, setName] = useState("");
	console.log(event.target.value);
	setName(event.target.value);
};

const TextWrapper = (props) => {
	return (
		<div>
			<TextInput
				name={props.name}
				handleChange={props.handleChange}
			/>
		</div>
	);
};

export default TextWrapper;
