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

	const DropdownLabel = () => {
		return count ? (
			<span className={`notification-count ${type}`} data-count={count}>
				{label}
			</span>
		) : (
			label
		);
	};

	return (
		<Dropdown
			noArrow
			className='relative navbar-dropdown'
			label={<DropdownLabel />}
		>
			{props.children}
			{pageLabel && (
				<div className='text-center'>
					<Link
						to={pageUrl}
						className={`${type}-link text-white py-2 block leading-10`}
					>
						{pageLabel}
					</Link>
				</div>
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
		<div className='flex relative px-6 py-3 items-center'>
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
			<div className='inline-block mx-2 w-64'>{props.children}</div>
			{icon && <span className='ml-auto'>{icon}</span>}
		</div>
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
