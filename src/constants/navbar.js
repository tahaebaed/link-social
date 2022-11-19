import { FiUsers } from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { VscSave, VscSettings } from 'react-icons/vsc';

const AVATAR_DROPDOWN_ITEMS = [
	{
		icon: VscSettings,
		url: '/setting',
		label: 'profile setting',
	},
	{
		icon: VscSave,
		url: '/saved',
		label: 'saved posts',
	},
	{
		icon: FiUsers,
		url: '/friends',
		label: 'friends',
	},
	{
		icon: HiOutlineChatBubbleLeftRight,
		url: '/messages',
		label: 'messages',
	},
];

export { AVATAR_DROPDOWN_ITEMS };
