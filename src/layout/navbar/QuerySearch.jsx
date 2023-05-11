import { Input, Kbd } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function QuerySearch() {
	return (
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
	);
}

export default QuerySearch;
