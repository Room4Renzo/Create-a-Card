import { useState, useRef, useEffect, Component } from "react";

// const TextInput = () => {
// const inputRef = useRef();

// useEffect(() => {
// 	inputRef.current.focus();
// }, []);

const handleChange = (event) => {
	const [name, setName] = useState("");
	setMessage(event.target.value);
};

// const handleSubmit = (event) => {
// 	event.preventDefault();
// 	console.log(message);
// 	setMessage("");
// };

const TextInput = (props) => {
	const [state, setState] = useState();
	return (
		<div>
			<input
				type="text"
				name={props.name}
				onChange={props.handleChange}
			/>
		</div>
	);
};

{
	/* <form onSubmit={handleSubmit}>
  <label>
    Write your message
    <input
      ref={inputRef}
      type="text"
      value={message}
      onChange={handleChange}
    />
  </label>
  <input
    type="submit"
    value="Save"
  />
</form> */
}

export default TextInput;
