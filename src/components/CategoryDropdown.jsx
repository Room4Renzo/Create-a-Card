import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CategoryDropdown = () => {
	const options = ["one", "two", "three"];
	const defaultOption = options[0];
	return (
		<Dropdown
			options={options}
			onChange={this._onSelect}
			value={defaultOption}
			placeholder="Select an option"
		/>
	);
};

export default CategoryDropdown;
