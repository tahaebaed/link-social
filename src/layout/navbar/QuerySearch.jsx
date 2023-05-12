import { Center, Input, Kbd } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdSearchOff } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
	AiOutlineDashboard,
	AiOutlineEdit,
	AiOutlineHome,
} from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';

function QuerySearch() {
	const navigateTo = useNavigate();

	const ACTIONS = [
		{
			title: 'Home',
			description: 'Get to home page',
			onTrigger: () => navigateTo('/'),
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
			keywords: [
				'editor',
				'post',
				'help',
				'feed',
				'create post',
				'create-post',
			],
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

	return (
		<SpotlightProvider
			actions={ACTIONS}
			searchIcon={<BiSearchAlt className='text-xl' />}
			searchPlaceholder='Search...'
			shortcut={['mod + P', 'mod + K', 'mod + F', '/']}
			limit={10}
			nothingFoundMessage={
				<Center h={200}>
					<div className='text-center'>
						<MdSearchOff className='text-4xl' />
						<p className='m-0'>Nothing found...</p>
					</div>
				</Center>
			}
		>
			<Input
				className='flex-grow'
				icon={<BiSearchAlt />}
				radius='xl'
				onClick={() => spotlight.open()}
				component='button'
				styles={(theme) => ({
					input: {
						cursor: 'pointer',
						'&:focus-within': {
							borderColor: theme.colors.gray[4],
						},
					},
				})}
			>
				<div className='text-gray-400 flex justify-between items-center'>
					<>Search</>
					<Kbd className='text-gray-300 text-xs'>/</Kbd>
				</div>
			</Input>
		</SpotlightProvider>
	);
}

export default QuerySearch;
