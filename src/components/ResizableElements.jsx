import { Resizable } from "re-resizable";
import TextInput from "./TextInput";
import { useState } from "react";

const ResizableElements = (props) => {
	const [state, setState] = useState({ width: 320, height: 200 });
	return (
		<Resizable
			style={{ marginLeft: 500, marginTop: 200, border: "1px solid black" }}
			size={{ width: state.width, height: state.height }}
			onResizeStop={(e, direction, ref, d) => {
				setState({
					width: state.width + d.width,
					height: state.height + d.height,
				});
			}}
		>
			<TextInput
				name={props.name}
				handleChange={props.handleChange}
			/>
		</Resizable>
	);
};

export default ResizableElements;
