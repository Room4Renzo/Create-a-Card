import { useState, useRef, useEffect } from "react";

const TextInput = (props) => {
	// const inputRef = useRef(null); // initialize ref with null
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");

	const handleChange = (event) => {
		setName(event.target.value);
		setMessage(event.target.value);
	};

	return (
		<div>
			<p>{props.name}</p>
			<input
				type="text"
				name={props.name}
				value={message}
				onChange={handleChange}
			/>
		</div>
	);
};
export default TextInput;
