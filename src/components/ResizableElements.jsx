import React from "react";
import { Resizable } from "re-resizable";
import TextInput from "./TextInput";
import { useState } from "react";

const ResizableElements = (props) => {
	const [state, setState] = useState({ width: 320, height: 200 });
	return (
		<div>
			<TextInput
				name={props.name}
				handleChange={props.handleChange}
			/>
		</div>
	);
};
ReactDOM.render(<h2 />, document.getElementById("form"));

export default ResizableElements;
