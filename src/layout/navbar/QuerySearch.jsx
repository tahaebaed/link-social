import {
	Center,
	Group,
	Image,
	Input,
	Kbd,
	Text,
	UnstyledButton,
	createStyles,
} from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdSearchOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function QuerySearch() {
	const navigateTo = useNavigate();

	const ACTIONS = [
		{
			image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
			title: 'Bender Bending Rodríguez',
			description: 'Fascinated with cooking, though has no sense of taste',

			onTrigger: () => navigateTo('/'),
		},

		{
			image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
			title: 'Carol Miller',
			description: 'One of the richest people on Earth',

			onTrigger: () => navigateTo('/'),
		},
		{
			image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
			title: 'Homer Simpson',
			description: 'Overweight, lazy, and often ignorant',

			onTrigger: () => navigateTo('/'),
		},
		{
			image:
				'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
			title: 'Spongebob Squarepants',
			description: 'Not just a sponge',

			onTrigger: () => navigateTo('/'),
		},
	];

	return (
		<SpotlightProvider
			actions={ACTIONS}
			searchIcon={<BiSearchAlt className='text-xl' />}
			searchPlaceholder='Search...'
			shortcut={['mod + P', 'mod + K', 'mod + F', '/']}
			limit={10}
			actionComponent={CustomAction}
			actionsWrapperComponent={ActionsWrapper}
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

function CustomAction({
	action,
	styles,
	classNames,
	hovered,
	onTrigger,
	...others
}) {
	const useStyles = createStyles((theme) => ({
		action: {
			position: 'relative',
			display: 'block',
			width: '100%',
			padding: `0.5rem`,
			borderRadius: theme.radius.sm,
			...theme.fn.hover({
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[4]
						: theme.colors.gray[1],
			}),

			'&[data-hovered]': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[4]
						: theme.colors.gray[1],
			},
		},
	}));

	const { classes } = useStyles(null, {
		styles,
		classNames,
		name: 'Spotlight',
	});

	return (
		<UnstyledButton
			className={classes.action}
			data-hovered={hovered || undefined}
			tabIndex={-1}
			onMouseDown={(event) => event.preventDefault()}
			onClick={onTrigger}
			{...others}
		>
			<Group noWrap>
				{action.image && (
					<Center>
						<Image
							src={action.image}
							alt={action.title}
							width={50}
							height={50}
						/>
					</Center>
				)}

				<div style={{ flex: 1 }}>
					<Text>{action.title}</Text>

					{action.description && (
						<Text color='dimmed' size='xs'>
							{action.description}
						</Text>
					)}
				</div>
			</Group>
		</UnstyledButton>
	);
}

function ActionsWrapper({ children }) {
	return (
		<div>
			{children}
			<Group
				px={15}
				py='xs'
				sx={(theme) => ({
					borderTop: `1px solid ${
						theme.colorScheme === 'dark'
							? theme.colors.dark[4]
							: theme.colors.gray[2]
					}`,
				})}
			>
				<Link to='/search' className='text-gray-400 text-[10px]'>
					Show More Results
				</Link>
			</Group>
		</div>
	);
}

export default QuerySearch;
