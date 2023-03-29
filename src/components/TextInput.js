import { useState, useRef, useEffect } from "react";


const handleChange = (event) => {
	const [name, setName] = useState("");
	setMessage(event.target.value);
	setName(event.target.value);
};

const TextInput = (props) => {
	const [state, setState] = useState();

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
