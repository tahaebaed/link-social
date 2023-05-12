import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
					<BrowserRouter>
						<MainRoutes />
					</BrowserRouter>
				</ModalsProvider>
			</ErrorBoundary>
		</MantineProvider>
	);
}
export default App;
