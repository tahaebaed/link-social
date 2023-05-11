import React from 'react';
import {
	AiOutlineDashboard,
	AiOutlineEdit,
	AiOutlineHome,
} from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';

const ACTIONS = [
	{
		title: 'Home',
		description: 'Get to home page',
		onTrigger: () => console.log('Home'),
		keywords: [
			'home',
			'homepage',
			'mantine',
			'timeline',
			'feeds',
			'create post',
			'create-post',
		],
		group: 'public',
		icon: <AiOutlineHome size='1.2rem' />,
	},
	{
		title: 'Editor',
		description: 'Get help on post editor',
		onTrigger: () => console.log('Editor'),
		keywords: ['editor', 'post', 'help', 'feed', 'create post', 'create-post'],
		group: 'public',
		icon: <AiOutlineEdit size='1.2rem' />,
	},
	{
		title: 'Dashboard',
		description: 'Get full information about current system status',
		onTrigger: () => console.log('Dashboard'),
		keywords: [],
		group: 'dashboard',
		icon: <AiOutlineDashboard size='1.2rem' />,
	},
	{
		title: 'Documentation',
		description: 'Visit documentation to lean more about all features',
		onTrigger: () => console.log('Documentation'),
		keywords: [],
		group: 'auth',
		icon: <BsFiles size='1.2rem' />,
	},
];

export { ACTIONS };
