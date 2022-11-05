import React, { useState } from 'react';
import '../assets/scss/components/dropdown.scss';

function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(props.isOpen);

	const onToggleClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div
			className={`dropdown ${props.className} ${props.toLeft ? 'to-left' : ''}`}
		>
			<span
				className={`dropdown-toggle ${props.noArrow ? 'no-arrow' : ''}`}
				onClick={onToggleClick}
			>
				{props.label}
			</span>

			<ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
				{props.children}
			</ul>
		</div>
	);
}

export default Dropdown;
