import { useState, useRef, useEffect } from "react";

const TextInput = (props) => {
	const [message, setMessage] = useState('Happy Birthday!');
	const [display, setDisplay] = useState(false);
 	
	const handleChange = (event) => {
			setMessage(event.target.value);
			setDisplay(true);
			props.onTextChange(message);
	};

	return (
		<div>
			<input
				type="text"
				value={message}
				onChange={handleChange}
<<<<<<< HEAD:src/components/TextInput.js
=======
				style={{color: props.color}}
>>>>>>> main:src/components/TextInput/TextInput.js
			/>
		</div>
	);
};
export default TextInput;
