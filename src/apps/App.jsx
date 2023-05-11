import { Center, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { SpotlightProvider } from '@mantine/spotlight';
import React, { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdSearchOff } from 'react-icons/md';
import { BrowserRouter } from 'react-router-dom';
import { ACTIONS } from '../constants/spotlight';
import CommentsModal from '../modals/Comments';
import { ipInstance } from '../utilities/weatherCard/ipInstance.js';
import ErrorBoundary from './ErrorBoundary';
import MainRoutes from './routes.jsx';

function App() {
	useEffect(() => {
		ipInstance.get('');
	}, []);

	return (
		<MantineProvider withGlobalStyles theme={{ primaryColor: 'teal' }}>
			<ErrorBoundary>
				<ModalsProvider modals={{ comments: CommentsModal }}>
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
						<BrowserRouter>
							<MainRoutes />
						</BrowserRouter>
					</SpotlightProvider>
				</ModalsProvider>
			</ErrorBoundary>
		</MantineProvider>
	);
}
export default App;
