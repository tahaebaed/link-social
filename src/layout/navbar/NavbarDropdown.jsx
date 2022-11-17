import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

/**
 * @usage
- use `label` to change dropdown toggle label
- use `count` to add notification counter
- use `pageUrl` to specify href for it's page
- use `pageLabel` to add button label for specification page
- use `type` to change button & toggle counter color, can be one of ```[friends, messages, notifications]```

 * @example

<NavbarDropdown label={<MdOutlineEmojiEmotions />} count={21}>
	// ...
</NavbarDropdown>

// with page button
<NavbarDropdown
	label={<MdOutlineEmojiEmotions />}
	count={21}
	pageUrl='/notification'
	pageLabel='Check all your Events'
>
	// ...
</NavbarDropdown>

 * @param {Object} props 
 * @returns
 */
function NavbarDropdown(props) {
	const { label, count, pageUrl, pageLabel, type } = props;

	const dropdownLabel = () => {
		return count ? (
			<span className={`notification-count ${type}`} data-count={count}>
				{label}
			</span>
		) : (
			label
		);
	};

	const linkColor = () => {
		switch (type) {
			case 'friends':
				return 'sky-400';
			case 'messages':
				return 'purple-400';
			case 'notifications':
				return 'red-500';
			default:
				return 'emerald-400';
		}
	};

	return (
		<Dropdown
			noArrow
			className='relative navbar-dropdown'
			label={dropdownLabel()}
		>
			{props.children}
			{pageLabel && (
				<li className='text-center'>
					<Link
						to={pageUrl}
						className={`bg-${linkColor()} text-white py-2 block leading-10`}
					>
						{pageLabel}
					</Link>
				</li>
			)}
		</Dropdown>
	);
}

/**
 * @usage
- use `avatar` to add avatar image to left
- use `icon` to add an icon to right

 * @example

<SingleNavbarDropdownItem icon={icon} avatar={avatar}>
	// ...
</SingleNavbarDropdownItem>

 * @param {Object} props 
 * @returns
 */
function SingleNavbarDropdownItem(props) {
	const { avatar, icon } = props;

	return (
		<li className='flex relative p-6 items-center'>
			{avatar && (
				<img
					loading='lazy'
					src={avatar}
					alt='author'
					width='34'
					height='34'
					className='object-cover rounded-full inline-block'
				/>
			)}
			<div className='inline-block mx-2'>{props.children}</div>
			{icon && <span className='ml-auto'>{icon}</span>}
		</li>
	);
}

NavbarDropdown.defaultProps = {
	label: 'label',
	count: null,
	pageUrl: '/',
	pageLabel: null,
	type: null,
};

SingleNavbarDropdownItem.defaultProps = {
	avatar: null,
	icon: null,
};

export default NavbarDropdown;
export { SingleNavbarDropdownItem };
