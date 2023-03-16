import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ipInstance } from '../utilities/weatherCard/ipInstance.js';
import ErrorBoundary from './ErrorBoundary';
import MainRoutes from './routes.jsx';

function App() {
	useEffect(() => {
		ipInstance.get('');
	}, []);

	return (
		<ErrorBoundary>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</ErrorBoundary>
	);
}
export default App;
