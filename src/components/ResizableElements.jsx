import TextInput from "./TextInput";
import { useState } from "react";

const TextWrapper = (props) => {
	const [state, setState] = useState({ width: 320, height: 200 });
	return (
		<TextInput
			name={props.name}
			handleChange={props.handleChange}
		/>
	);
};

export default TextWrapper;
