import { useState } from "react";
import "./App.css";
import Category from "./Category";
import menu from "./data";
import Menu from "./Menu";

const categories = ["all", ...new Set(menu.map(({ category }) => category))];
function App() {
	const [menuItems, setMenuItems] = useState(menu);

	const handleClick = (probe) => {
		if (probe === "all") {
			setMenuItems(menu);
			return;
		}
		let filteredMenu = menu.filter(({ category }) => category === probe);
		setMenuItems(filteredMenu);
	};

	return (
		<div className="app">
			<header>
				<h1>Our Menu</h1>
			</header>
			<Category categories={categories} handleClick={handleClick} />
			<Menu menu={menuItems} />
		</div>
	);
}

export default App;
