import React from "react";

const Category = ({ handleClick, categories }) => {
	return (
		<section className="category">
			{categories.map((item) => (
				<button onClick={() => handleClick(item)}>{item}</button>
			))}
		</section>
	);
};

export default Category;
