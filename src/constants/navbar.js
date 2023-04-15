import { FiUser, FiUsers } from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { VscSave, VscSettings } from 'react-icons/vsc';

import { store } from '../utilities/store/index';

const user = store.getState().auth.user;

const AVATAR_DROPDOWN_ITEMS = [
	{
		icon: FiUser,
		url: `/profile/${user?.id}`,
		label: 'Profile',
	},
	{
		icon: VscSettings,
		url: '/setting/update-profile',
		label: 'Setting',
	},
	{
		icon: VscSave,
		url: `/profile/${user?.id}/?activeTap=savedPosts`,
		label: 'Saved Posts',
	},
	{
		icon: FiUsers,
		url: '/network',
		label: 'Network',
	},
	{
		icon: HiOutlineChatBubbleLeftRight,
		url: '/messages',
		label: 'Messages',
	},
];

export { AVATAR_DROPDOWN_ITEMS };
