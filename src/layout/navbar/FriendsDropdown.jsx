import React from 'react';
import { FiUserCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import NavbarDropdown, { SingleNavbarDropdownItem } from './NavbarDropdown';

const DUMMY_FRIENDS = [
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Tamara Romanoff
				</a>
				<span className='text-sm text-gray-400 block'>
					Mutual Friend: Sarah Hetfield
				</span>
			</>
		),
		suggest: true,
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
		children: (
			<>
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
			</>
		),
		suggest: true,
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Stagg Clothing
				</a>
				<span className='text-sm text-gray-400 block'>9 Friends in Common</span>
			</>
		),
		suggest: false,
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-600 hover:text-emerald-400'
				>
					Tony Stevens
				</a>
				<span className='text-sm text-gray-400 block'>4 Friends in Common</span>
			</>
		),
		suggest: true,
	},
];

function FriendsDropdown() {
	return (
		<NavbarDropdown
			label={<MdOutlineEmojiEmotions />}
			count={21}
			pageUrl='/network'
			pageLabel='Check all your Network'
			type='friends'
		>
			{DUMMY_FRIENDS.map((friend, index) => (
				<SingleFriendDropdownItem
					avatar={friend.avatar}
					suggest={friend.suggest}
					key={index}
				>
					{friend.children}
				</SingleFriendDropdownItem>
			))}
		</NavbarDropdown>
	);
}

/**
 * @usage
- `avatar` to add user avatar
- `suggest` to determine whether suggest or accepted request
- `acceptUrl` to add accepted like uel
- `denyUrl` to add deny like uel
- `children` to add dropdown item content

 * @param {{avatar:string,suggest:Boolean, acceptUrl:String, denyUrl:String, children:React.ReactElement}} props
 * @returns {React.ReactElement}
 */
const SingleFriendDropdownItem = (props) => {
	const { avatar, suggest, acceptUrl, denyUrl } = props;

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

SingleFriendDropdownItem.defaultProps = {
	avatar: '',
	suggest: false,
	acceptUrl: '#',
	denyUrl: '#',
	children: '',
};

export default FriendsDropdown;
