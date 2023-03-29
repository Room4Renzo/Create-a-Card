import { useState, useRef, useEffect } from "react";

// const TextInput = () => {
// const inputRef = useRef();

// useEffect(() => {
// 	inputRef.current.focus();
// }, []);



	const handleChange = (event) => {
		setName(event.target.value);
		setMessage(event.target.value);
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
