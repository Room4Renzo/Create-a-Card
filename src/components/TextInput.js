import { useState, useRef, useEffect } from "react";

const TextInput = (props) => {
	const [message, setMessage] = useState('Happy Birthday!');
	const [display, setDisplay] = useState(false);
	
	const handleChange = (event) => {
			setMessage(event.target.value);
			setDisplay(true);
			props.onCard(message);
	};

	return (
		<div>
			<input
				type="text"
				value={message}
				onChange={handleChange}
				style={{ color: props.color }}
			/>
			{/* {display ? <div>{message}</div> : <></>} */}
		</div>
	);
};
export default TextInput;
