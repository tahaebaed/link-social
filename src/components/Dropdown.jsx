import React, { useState, useEffect, createRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import '../assets/scss/components/dropdown.scss';

/**
 * @usage

- use `label` to change displayed text (can be text or icon)
- use `isOpen` to change init state for showing dropdown
- use `noArrow` to hide dropdown arrow
- use `toLeft` to change direction from left to right
- use `className` to add class to dropdown wrapper

* @example

<Dropdown noArrow />
<Dropdown label={'Dropdown'} />
<Dropdown label={<TbGridDots />} />
<Dropdown isOpen={true} />
<Dropdown noArrow toLeft />

 * @param {Object} props 
 * @returns 
 */
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

Dropdown.defaultProps = {
	isOpen: false,
	noArrow: false,
	toLeft: false,
	className: '',
	label: <BsThreeDots />,
	children: (
		<>
			<li>
				<a className='dropdown-item' href='#go-to-somewhere'>
					Action
				</a>
			</li>
			<li>
				<a className='dropdown-item' href='#go-to-somewhere'>
					Another action
				</a>
			</li>
			<li>
				<a className='dropdown-item' href='#go-to-somewhere'>
					Something else here
				</a>
			</li>
			<li>
				<hr className='dropdown-divider' />
			</li>
			<li>
				<a className='dropdown-item' href='#go-to-somewhere'>
					Separated link
				</a>
			</li>
		</>
	),
};

export default Dropdown;
