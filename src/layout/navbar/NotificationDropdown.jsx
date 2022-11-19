import React from 'react';
import { BsEmojiLaughing, BsLightning } from 'react-icons/bs';
import NavbarDropdown, { SingleNavbarDropdownItem } from './NavbarDropdown';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { BiLike } from 'react-icons/bi';

function NotificationDropdown() {
	return (
		<NavbarDropdown
			label={<BsLightning />}
			count={23}
			pageUrl='/notifications'
			pageLabel='View All Messages'
			type='notifications'
		>
			<SingleFriendDropdownItem avatar='https://html.crumina.net/html-olympus/img/avatar65-sm.webp'>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Green Goo Rock
				</a>{' '}
				<span className='text-sm text-gray-400'>
					{' '}
					invited you to attend to his event Goo in
				</span>{' '}
				<a
					href='#0'
					className='transition duration-200 text-emerald-400 hover:text-emerald-300'
				>
					Gotham Bar.
				</a>
				<span className='text-xs text-gray-400 block mt-1'>
					March 5th at 6:43pm
				</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem
				avatar='https://html.crumina.net/html-olympus/img/avatar63-sm.webp'
				type='comment'
			>
				<span className='text-sm text-gray-400'>
					You and{' '}
					<a
						href='#0'
						className='transition duration-200 text-gray-600 hover:text-emerald-400'
					>
						Nicholas Grissom
					</a>{' '}
					just became friends. Write on{' '}
				</span>{' '}
				<a
					href='#0'
					className='transition duration-200 text-emerald-400 hover:text-emerald-300'
				>
					his wall.
				</a>
				<span className='text-xs text-gray-400 block mt-1'>9 hours ago</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem
				avatar='https://html.crumina.net/html-olympus/img/avatar56-sm.webp'
				type='comment'
			>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Mathilda Brinker
				</a>{' '}
				<span className='text-sm text-gray-400'> commented on your new . </span>{' '}
				<a
					href='#0'
					className='transition duration-200 text-emerald-400 hover:text-emerald-300'
				>
					profile status
				</a>
				<span className='text-xs text-gray-400 block mt-1'>4 hours ago</span>
			</SingleFriendDropdownItem>

			<SingleFriendDropdownItem
				avatar='https://html.crumina.net/html-olympus/img/avatar62-sm.webp'
				type='like'
			>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					James Summers
				</a>{' '}
				<span className='text-sm text-gray-400'> like your new . </span>{' '}
				<a
					href='#0'
					className='transition duration-200 text-emerald-400 hover:text-emerald-300'
				>
					profile status
				</a>
				<span className='text-xs text-gray-400 block mt-1'>
					March 2nd at 8:29pm
				</span>
			</SingleFriendDropdownItem>
		</NavbarDropdown>
	);
}

const SingleFriendDropdownItem = (props) => {
	const { avatar, type } = props;

	let icon;

	switch (type) {
		case 'like':
			icon = <BiLike className='text-2xl text-gray-400' />;
			break;
		case 'comment':
			icon = (
				<HiOutlineChatBubbleLeftRight className='text-2xl text-gray-400' />
			);
			break;
		default:
			icon = <BsEmojiLaughing className='text-2xl text-gray-400' />;
			break;
	}

	return (
		<SingleNavbarDropdownItem icon={icon} avatar={avatar}>
			{props.children}
		</SingleNavbarDropdownItem>
	);
};

export default NotificationDropdown;
