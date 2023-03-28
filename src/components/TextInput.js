import { useState, useRef, useEffect, Component } from "react";

// const TextInput = () => {
// const [message, setMessage] = useState("Happy Birthday!");
// const inputRef = useRef();
// const [state, setState] = useState({ name: "" });

// useEffect(() => {
// 	inputRef.current.focus();
// }, []);

// const handleChange = (event) => {
// 	setMessage(event.target.value);
// };

// const handleSubmit = (event) => {
// 	event.preventDefault();
// 	console.log(message);
// 	setMessage("");
// };

const TextInput = (props) => {
	return (
		<div>
			{/* <p>{props.name}</p> */}
			<p>Change name:</p>
			<input
				type="text"
				name="name"
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
