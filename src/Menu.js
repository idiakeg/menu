import React from "react";

const Menu = ({ menu }) => {
	return (
		<section className="menu__section">
			{menu.map(({ id, desc, price, img, title }) => {
				return (
					<div className="menu__container" key={id}>
						<div className="menu__image">
							<img src={img} alt={title} />
						</div>
						<div className="menu__content">
							<div className="menu__header">
								<p className="title">{title}</p>
								<span>{price}</span>
							</div>
							<div className="menu__desc">
								<p>{desc}</p>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Menu;
