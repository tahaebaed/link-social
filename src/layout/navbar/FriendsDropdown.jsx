import React from 'react';
import { FiUserCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import NavbarDropdown, { SingleNavbarDropdownItem } from './NavbarDropdown';

function FriendsDropdown() {
	return (
		<NavbarDropdown
			label={<MdOutlineEmojiEmotions />}
			count={21}
			pageUrl='/notification'
			pageLabel='Check all your Events'
			type='friends'
		>
			<SingleFriendDropdownItem
				suggest
				avatar='https://html.crumina.net/html-olympus/img/avatar57-sm.webp'
			>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Tamara Romanoff
				</a>
				<span className='text-sm text-gray-400 block'>
					Mutual Friend: Sarah Hetfield
				</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem avatar='https://html.crumina.net/html-olympus/img/avatar55-sm.webp'>
				<span className='text-sm text-gray-400 block'>
					You and{' '}
					<a
						href='#0'
						className='transition duration-200 text-emerald-400 hover:text-emerald-500'
					>
						Mary Jane
					</a>{' '}
					just became friends. Write on her wall.
				</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem
				suggest
				avatar='https://html.crumina.net/html-olympus/img/avatar58-sm.webp'
			>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Stagg Clothing
				</a>
				<span className='text-sm text-gray-400 block'>9 Friends in Common</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem
				avatar='https://html.crumina.net/html-olympus/img/avatar56-sm.webp'
				suggest
			>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Tony Stevens
				</a>
				<span className='text-sm text-gray-400 block'>4 Friends in Common</span>
			</SingleFriendDropdownItem>
		</NavbarDropdown>
	);
}

const SingleFriendDropdownItem = (props) => {
	const { avatar, suggest = false, acceptUrl = '#', denyUrl = '#' } = props;

	const icon = suggest ? (
		<>
			<a
				href={acceptUrl}
				className='inline-block text-xl bg-green-500 p-2 rounded text-white mx-1 transition duration-300 hover:bg-green-400'
			>
				<FiUserPlus />
			</a>

			<a
				href={denyUrl}
				className='inline-block text-xl bg-red-500 p-2 rounded text-white mx-1 transition duration-300 hover:bg-red-400'
			>
				<FiUserMinus />
			</a>
		</>
	) : (
		<FiUserCheck className='text-xl mx-1 text-sky-400' />
	);

	return (
		<SingleNavbarDropdownItem icon={icon} avatar={avatar}>
			{props.children}
		</SingleNavbarDropdownItem>
	);
};

export default FriendsDropdown;
