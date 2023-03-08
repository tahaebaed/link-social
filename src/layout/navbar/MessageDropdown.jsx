import React from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import NavbarDropdown, { SingleNavbarDropdownItem } from './NavbarDropdown';

const DUMMY_MESSAGES = [
	{
		avatar:
			'https://res.cloudinary.com/mohammed-taysser/image/upload/h_500,w_500/v1654621448/paperCuts/authors/avatar/mu931hsdzu68wwqpumbh.jpg',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-700 hover:text-emerald-400'
				>
					Mohammed Taysser
				</a>
				<span className='text-sm text-gray-400 block'>
					Dropdown Looks Good !! 😁
				</span>
				<span className='text-xs text-gray-400 block mt-1'>
					few seconds ago
				</span>
			</>
		),
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar59-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-700 hover:text-emerald-400'
				>
					Diana Jameson
				</a>
				<span className='text-sm text-gray-400 block'>
					Hi James! It's Diana, I just wanted to let you know that we have to
					reschedule...
				</span>
				<span className='text-xs text-gray-400 block mt-1'>4 hours ago</span>
			</>
		),
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-700 hover:text-emerald-400'
				>
					Jake Parker
				</a>
				<span className='text-sm text-gray-400 block'>9 Friends in Common</span>
				<span className='text-xs text-gray-400 block mt-1'>4 hours ago</span>
			</>
		),
	},
	{
		avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
		children: (
			<>
				<a
					href='#0'
					className='transition duration-200 text-gray-700 hover:text-emerald-400'
				>
					Elaine Dreyfuss
				</a>
				<span className='text-sm text-gray-400 block'>
					We'll have to check that at the office and see if the client is on
					board with...
				</span>
				<span className='text-xs text-gray-400 block mt-1'>
					Yesterday at 9:56pm
				</span>
			</>
		),
	},
];

function MessageDropdown() {
	return (
		<NavbarDropdown
			label={<HiOutlineChatBubbleLeftRight />}
			count={61}
			pageUrl='/messages'
			pageLabel='View All Messages'
			type='messages'
		>
			{DUMMY_MESSAGES.map((msg, index) => (
				<SingleMessageDropdownItem avatar={msg.avatar} key={index}>
					{msg.children}
				</SingleMessageDropdownItem>
			))}
		</NavbarDropdown>
	);
}

/**
 * @usage
- `avatar` to add user avatar
- `children` to add dropdown item content

 * @param {{avatar:string, children:React.ReactElement}} props
 * @returns {React.ReactElement}
 */
const SingleMessageDropdownItem = (props) => {
	return (
		<SingleNavbarDropdownItem
			icon={<HiOutlineChatBubbleLeftRight className='text-2xl text-gray-400' />}
			avatar={props.avatar}
		>
			{props.children}
		</SingleNavbarDropdownItem>
	);
};

SingleMessageDropdownItem.defaultProps = {
	avatar: '',
	children: '',
};

export default MessageDropdown;
