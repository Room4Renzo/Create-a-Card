import { useState, useRef, useEffect } from "react";

const TextInput = (props) => {
	const [name, setName] = useState("");

	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div>
			<p>{props.name}</p>
			<input
				type="text"
				name={props.name}
				onChange={handleChange}
			/>
		</div>
	);
};
export default TextInput;
