import React, { useState, useEffect, createRef } from 'react';
import '../assets/scss/components/dropdown.scss';

function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(props.isOpen);
	const [dropdownMenuRef] = useState(createRef());
	const [dropdownToggleRef] = useState(createRef());

	const onToggleClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	useEffect(() => {
		// Assign click handler to listen the click to close the dropdown when clicked outside
		document.addEventListener('click', onClickOutside);

		return () => {
			// Remove the listener
			document.removeEventListener('click', onClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickOutside = (evt) => {
		if (
			!dropdownMenuRef.current?.contains(evt.target) &&
			!dropdownToggleRef.current?.contains(evt.target)
		) {
			setIsOpen(false);
		}
	};

	return (
		<div
			className={`dropdown ${props.className} ${props.toLeft ? 'to-left' : ''}`}
		>
			<span
				className={`dropdown-toggle ${props.noArrow ? 'no-arrow' : ''}`}
				ref={dropdownToggleRef}
				onClick={onToggleClick}
			>
				{props.label}
			</span>

			<ul
				className={`dropdown-menu ${isOpen ? 'open' : ''}`}
				ref={dropdownMenuRef}
			>
				{props.children}
			</ul>
		</div>
	);
}

export default Dropdown;
